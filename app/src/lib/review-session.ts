import { appendLogEntry } from './session-log.ts'
import { hasLearnedTopic, practiceEvidenceState } from './study-state.ts'
import { isRetrievalDue, scheduleRetrieval } from './retrieval.ts'
import type { LearnerState, ReviewItem, ReviewMode, ReviewResponse, ReviewSessionProgress, SessionLogEntry } from './types'

export type ReviewDraft = Pick<ReviewResponse, 'reflection' | 'revealed' | 'uncertain'>
export type ReviewAnswer =
  | { kind: 'self-rating'; retrieved: boolean }
  | { kind: 'scenario'; selectedOptionId: string; correctOptionId: string }
  | { kind: 'unsure' }

export interface ReviewPosition {
  sessionId: string
  itemId: string
}

export function startReview(
  state: LearnerState,
  mode: ReviewMode,
  items: readonly ReviewItem[],
  sessionId: string,
  requestedTopicId?: string,
  now = Date.now(),
): LearnerState {
  if (!sessionId.trim() || items.length < 1 || items.length > 8 || new Set(items.map((item) => item.id)).size !== items.length) throw new TypeError('A review needs a unique session ID and one to eight distinct items.')
  if (mode === 'practice' && items.some((item) => !hasLearnedTopic(state, item.topicId))) throw new TypeError('Practice must teach a topic before testing it.')
  if (mode === 'exam' && items.some((item) => item.kind !== 'mcq')) throw new TypeError('Exam rehearsal uses scenario items.')
  if (requestedTopicId && items.some((item) => item.topicId !== requestedTopicId)) throw new TypeError('The review queue does not match its requested topic.')
  const session: ReviewSessionProgress = {
    id: sessionId,
    requestedTopicId,
    items: items.map((item) => ({ ...item })),
    responses: items.map((_, index) => ({ reflection: '', revealed: false, uncertain: false, presentedAt: index === 0 ? new Date(now).toISOString() : undefined })),
    index: 0,
  }
  return {
    ...state,
    study: { ...state.study, [mode]: session, activeActivity: mode, activeUnitId: items[0].topicId, pausedAt: undefined },
  }
}

function currentReview(state: LearnerState, mode: ReviewMode, position: ReviewPosition) {
  const session = state.study[mode]
  if (!session || session.id !== position.sessionId || session.completedAt) return undefined
  const item = session.items[session.index]
  if (!item || item.id !== position.itemId) return undefined
  return { session, item, response: session.responses[session.index] }
}

export function saveReviewDraft(state: LearnerState, mode: ReviewMode, position: ReviewPosition, patch: Partial<ReviewDraft>): LearnerState {
  const current = currentReview(state, mode, position)
  if (!current || current.response.outcome) return state
  if (patch.reflection !== undefined && patch.reflection.length > 4000) throw new TypeError('A review explanation must be at most 4000 characters.')
  const response = {
    ...current.response,
    ...patch,
    revealed: current.response.revealed || Boolean(patch.revealed) || Boolean(patch.uncertain),
    uncertain: current.response.uncertain || Boolean(patch.uncertain),
  }
  return {
    ...state,
    study: {
      ...state.study,
      activeActivity: mode,
      activeUnitId: current.item.topicId,
      pausedAt: undefined,
      [mode]: { ...current.session, responses: current.session.responses.map((saved, index) => index === current.session.index ? response : saved) },
    },
  }
}

export function answerReview(
  state: LearnerState,
  mode: ReviewMode,
  position: ReviewPosition,
  answer: ReviewAnswer,
  now = Date.now(),
): LearnerState {
  const current = currentReview(state, mode, position)
  // A committed response and all its evidence are one update, even after reload or a double click.
  if (!current || current.response.outcome) return state
  const { session, item, response } = current
  if (item.kind === 'flashcard' && (!response.revealed || answer.kind === 'scenario')) throw new TypeError('Compare the recall response before rating it.')
  if (item.kind === 'mcq' && answer.kind === 'self-rating') throw new TypeError('A scenario needs a selected answer.')
  const uncertain = answer.kind === 'unsure' || response.uncertain || (answer.kind === 'scenario' && answer.selectedOptionId === 'unsure')
  const correct = !uncertain && (answer.kind === 'self-rating' ? answer.retrieved : answer.kind === 'scenario' && answer.selectedOptionId === answer.correctOptionId)
  const outcome = uncertain ? 'unsure' : correct ? 'correct' : 'incorrect'
  const presentedAt = Date.parse(response.presentedAt ?? new Date(now).toISOString())
  const committedAt = new Date(Math.max(now, presentedAt)).toISOString()
  const selectedOptionId = item.kind === 'mcq' ? answer.kind === 'scenario' ? answer.selectedOptionId : 'unsure' : undefined
  const earlier = session.responses.filter((_, index) => index < session.index && session.items[index].topicId === item.topicId)
  const assisted = uncertain || earlier.some((saved) => saved.revealed || saved.outcome !== undefined)
  const learned = hasLearnedTopic(state, item.topicId)
  const evidenceKind = !learned ? 'diagnostic' : item.kind === 'flashcard' ? 'self-report' : 'scenario'
  const entry: SessionLogEntry = {
    topicId: item.topicId, itemId: item.id, itemType: item.kind, correct,
    timestamp: committedAt, msToAnswer: Math.max(0, now - presentedAt),
    selectedOptionId, evidenceKind, assisted,
  }
  const mastery = state.topics[item.topicId] ?? { state: 'introduced', evidence: [] }
  const evidence = item.kind === 'flashcard'
    ? 'Self-rated recall; the explanation was not automatically assessed and does not prove retention.'
    : assisted
      ? 'Scenario practice after related feedback in this round; supported evidence, not independent retention.'
      : 'Answered an authored scenario; one selection does not prove discrimination, transfer, or durable mastery.'
  const updateMastery = learned && !uncertain
  let retrievalQueue = state.retrievalQueue
  if (learned) {
    const existing = retrievalQueue.find((queued) => queued.topicId === item.topicId)
    const missedEarlier = earlier.some((saved) => saved.outcome === 'incorrect')
    if (!correct && !uncertain) {
      // A second miss on the same idea within one round is the same lapse, not another successive miss.
      if (!missedEarlier) retrievalQueue = scheduleRetrieval(retrievalQueue, item.topicId, 'miss', now)
    } else if (correct && item.kind === 'mcq' && !assisted && existing && isRetrievalDue(existing, now)) {
      retrievalQueue = retrievalQueue.filter((queued) => queued.topicId !== item.topicId)
    } else if (uncertain || existing) {
      // Uncertainty earns another look; a correct answer never adds review work or shortens a later deadline.
      retrievalQueue = scheduleRetrieval(retrievalQueue, item.topicId, 'support', now)
    }
  }
  return {
    ...state,
    lastActiveAt: committedAt,
    sessionLog: uncertain ? state.sessionLog : appendLogEntry(state.sessionLog, entry),
    topics: updateMastery ? {
      ...state.topics,
      [item.topicId]: {
        ...mastery,
        state: correct && assisted ? mastery.state : practiceEvidenceState(mastery.state, item.kind, correct),
        lastEvidenceAt: committedAt,
        evidence: [...mastery.evidence.slice(-9), evidence],
      },
    } : state.topics,
    retrievalQueue,
    study: {
      ...state.study,
      activeActivity: mode,
      activeUnitId: item.topicId,
      pausedAt: undefined,
      [mode]: {
        ...session,
        responses: session.responses.map((saved, index) => index === session.index ? { ...response, outcome, committedAt, selectedOptionId, uncertain } : saved),
      },
    },
  }
}

export function advanceReview(state: LearnerState, mode: ReviewMode, position: ReviewPosition, now = Date.now()): LearnerState {
  const current = currentReview(state, mode, position)
  if (!current || !current.response.outcome) return state
  const next = current.session.index + 1
  const complete = next === current.session.items.length
  return {
    ...state,
    sessionsCompleted: state.sessionsCompleted + (complete ? 1 : 0),
    study: {
      ...state.study,
      activeActivity: mode,
      activeUnitId: current.session.items[next]?.topicId,
      pausedAt: undefined,
      [mode]: {
        ...current.session,
        index: next,
        completedAt: complete ? new Date(now).toISOString() : undefined,
        responses: current.session.responses.map((response, index) => index === next ? { ...response, presentedAt: new Date(now).toISOString() } : response),
      },
    },
  }
}
