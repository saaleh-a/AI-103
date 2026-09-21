import assert from 'node:assert/strict'
import test from 'node:test'
import { COURSE_UNITS } from '../src/data/curriculum/index.ts'
import { BUILD_PROJECTS } from '../src/data/projects.ts'
import { emptyState, normalizeLearnerState } from '../src/lib/learner-state-data.ts'
import { emptyStudyUnit, normalizeStudyState } from '../src/lib/study-state.ts'
import { advanceReview, answerReview, saveReviewDraft, startReview } from '../src/lib/review-session.ts'
import { chooseCoachingAction, coachingHref } from '../src/lib/coach.ts'
import { scheduleRetrieval } from '../src/lib/retrieval.ts'

const now = Date.parse('2026-09-21T12:00:00Z')
const topicId = 'ai-foundations'
const recall = { id: `recall-${topicId}`, topicId, kind: 'flashcard' }
const scenario = { id: `scenario-${topicId}`, topicId, kind: 'mcq' }
const fresh = () => {
  const state = emptyState(COURSE_UNITS)
  state.study.units[topicId] = { ...emptyStudyUnit(), lessonComplete: true, stage: 'complete', completedAt: '2026-09-19T12:00:00Z' }
  state.topics[topicId] = { state: 'understood', evidence: ['Earlier teaching.'] }
  state.study.activeProjectId = 'visual-workflow'
  state.retrievalQueue = [{ topicId, dueAt: '2026-09-20T12:00:00Z', missStreak: 0 }]
  return state
}
const begin = (items = [recall, scenario], mode = 'practice', state = fresh()) => startReview(state, mode, items, 'session-1', undefined, now)
const position = (state, mode = 'practice') => ({ sessionId: state.study[mode].id, itemId: state.study[mode].items[state.study[mode].index].id })
const reload = (state) => normalizeLearnerState(JSON.parse(JSON.stringify(state)), COURSE_UNITS, new Date(now))

test('the whole queue, unfinished explanation, revealed feedback, and selected build round-trip', () => {
  let state = begin()
  state = saveReviewDraft(state, 'practice', position(state), { reflection: 'Authorization is not generated prose.' })
  const beforeReload = JSON.stringify(state.study.practice)
  state = reload(state)
  assert.deepEqual(JSON.parse(JSON.stringify(state.study.practice)), JSON.parse(beforeReload))
  assert.equal(state.study.activeProjectId, 'visual-workflow')
  state = saveReviewDraft(state, 'practice', position(state), { revealed: true })
  state.study.pausedAt = new Date(now).toISOString()
  const resumed = reload(state)
  assert.equal(resumed.study.practice.responses[0].revealed, true)
  assert.equal(resumed.study.practice.responses[0].reflection, 'Authorization is not generated prose.')
  const action = chooseCoachingAction(COURSE_UNITS, BUILD_PROJECTS, resumed, now)
  assert.equal(action.kind, 'resume')
  assert.equal(action.projectId, 'visual-workflow')
  assert.equal(coachingHref(action), '/practice')
})

test('showing a solution and admitting uncertainty cannot be undone by saving another draft', () => {
  const first = begin()
  const revealed = saveReviewDraft(first, 'practice', position(first), { uncertain: true })
  const edited = saveReviewDraft(revealed, 'practice', position(revealed), { revealed: false, uncertain: false, reflection: 'Now I see the boundary.' })
  assert.equal(edited.study.practice.responses[0].revealed, true)
  assert.equal(edited.study.practice.responses[0].uncertain, true)
  assert.equal(first.study.practice.responses[0].revealed, false)
  assert.equal(first.study.practice.responses[0].reflection, '')
})

test('uncertainty is unscored, does not change mastery, and does not add a miss', () => {
  let state = begin()
  const oldTopics = state.topics
  state = saveReviewDraft(state, 'practice', position(state), { uncertain: true })
  state = answerReview(state, 'practice', position(state), { kind: 'unsure' }, now + 1000)
  assert.equal(state.study.practice.responses[0].outcome, 'unsure')
  assert.equal(state.sessionLog.length, 0)
  assert.equal(state.topics, oldTopics)
  assert.equal(state.retrievalQueue[0].missStreak, 0)
  assert.equal(state.retrievalQueue[0].dueAt, '2026-09-22T12:00:01.000Z')
  assert.equal(reload(state).study.practice.responses[0].outcome, 'unsure')
})

test('one answer, its log, scheduling, and selected option are committed exactly once across reloads', () => {
  const state = begin([scenario])
  const pointer = position(state)
  const answer = { kind: 'scenario', selectedOptionId: 'a', correctOptionId: 'b' }
  const committed = answerReview(state, 'practice', pointer, answer, now + 2400)
  assert.equal(committed.sessionLog.length, 1)
  assert.equal(committed.sessionLog[0].msToAnswer, 2400)
  assert.equal(committed.sessionLog[0].evidenceKind, 'scenario')
  assert.equal(committed.topics[topicId].state, 'needs-repair')
  assert.equal(committed.retrievalQueue[0].missStreak, 1)
  assert.equal(answerReview(committed, 'practice', pointer, answer, now + 3000), committed)
  const restored = reload(committed)
  assert.equal(answerReview(restored, 'practice', pointer, answer, now + 5000), restored)
  assert.equal(restored.study.practice.responses[0].selectedOptionId, 'a')
  assert.equal(saveReviewDraft(restored, 'practice', pointer, { uncertain: true }), restored)
  assert.equal(state.sessionLog.length, 0)
})

test('an answer after stopping measures elapsed time, not a speed grade or a restarted timer', () => {
  let state = begin([scenario])
  state.study.pausedAt = new Date(now + 1000).toISOString()
  state = reload(state)
  state = answerReview(state, 'practice', position(state), { kind: 'scenario', selectedOptionId: 'b', correctOptionId: 'b' }, now + 60_000)
  assert.equal(state.sessionLog[0].msToAnswer, 60_000)
  assert.equal(state.topics[topicId].state, 'understood')
})

test('a backwards device clock cannot create a negative duration or an unloadable saved answer', () => {
  const state = begin([scenario])
  const answered = answerReview(state, 'practice', position(state), { kind: 'scenario', selectedOptionId: 'b', correctOptionId: 'b' }, now - 1000)
  assert.equal(answered.sessionLog[0].msToAnswer, 0)
  assert.equal(answered.sessionLog[0].timestamp, new Date(now).toISOString())
  assert.equal(reload(answered).study.practice.responses[0].outcome, 'correct')
})

test('advancing and counting a finished session are idempotent, and stale callbacks cannot answer the next item', () => {
  let state = begin()
  const first = position(state)
  assert.equal(advanceReview(state, 'practice', first, now), state)
  state = saveReviewDraft(state, 'practice', first, { revealed: true })
  state = answerReview(state, 'practice', first, { kind: 'self-rating', retrieved: true }, now + 1000)
  state = advanceReview(state, 'practice', first, now + 2000)
  assert.equal(advanceReview(state, 'practice', first, now + 3000), state)
  assert.equal(answerReview(state, 'practice', first, { kind: 'self-rating', retrieved: true }, now + 3000), state)
  assert.equal(state.study.practice.index, 1)
  assert.equal(state.study.practice.responses[1].presentedAt, new Date(now + 2000).toISOString())
  const second = position(state)
  state = answerReview(state, 'practice', second, { kind: 'scenario', selectedOptionId: 'b', correctOptionId: 'b' }, now + 4000)
  state = advanceReview(state, 'practice', second, now + 5000)
  assert.equal(state.sessionsCompleted, 1)
  assert.equal(advanceReview(reload(state), 'practice', second, now + 6000).sessionsCompleted, 1)
  assert.equal(state.study.practice.completedAt, new Date(now + 5000).toISOString())
})

test('a new round cannot accidentally receive an event from a replaced round', () => {
  const first = begin([scenario])
  const second = startReview(first, 'practice', [scenario], 'session-2', undefined, now + 1000)
  assert.equal(answerReview(second, 'practice', position(first), { kind: 'unsure' }, now + 2000), second)
  assert.equal(saveReviewDraft(second, 'practice', position(first), { reflection: 'Late edit' }), second)
})

test('correct self-rating is provenance, not automatic retrieval or application, and cannot clear a review', () => {
  let state = begin()
  state = saveReviewDraft(state, 'practice', position(state), { revealed: true })
  state = answerReview(state, 'practice', position(state), { kind: 'self-rating', retrieved: true }, now + 1000)
  assert.equal(state.sessionLog[0].evidenceKind, 'self-report')
  assert.equal(state.topics[topicId].state, 'understood')
  assert.equal(state.retrievalQueue.length, 1)
})

test('a correct scenario after feedback cannot erase the same round’s missed recall or repair flag', () => {
  let state = begin()
  let pointer = position(state)
  state = saveReviewDraft(state, 'practice', pointer, { revealed: true })
  state = answerReview(state, 'practice', pointer, { kind: 'self-rating', retrieved: false }, now + 1000)
  state = advanceReview(state, 'practice', pointer, now + 2000)
  pointer = position(state)
  state = answerReview(state, 'practice', pointer, { kind: 'scenario', selectedOptionId: 'b', correctOptionId: 'b' }, now + 3000)
  assert.equal(state.sessionLog[1].assisted, true)
  assert.equal(state.topics[topicId].state, 'needs-repair')
  assert.equal(state.retrievalQueue[0].missStreak, 1)
  assert.equal(state.retrievalQueue[0].dueAt, '2026-09-22T12:00:01.000Z')
})

test('only an independent correct scenario can retire a due review, not a future review', () => {
  const answer = { kind: 'scenario', selectedOptionId: 'b', correctOptionId: 'b' }
  const state = begin([scenario])
  const reviewed = answerReview(state, 'practice', position(state), answer, now + 1000)
  assert.equal(reviewed.retrievalQueue.length, 0)
  assert.equal(reviewed.topics[topicId].state, 'understood')
  const later = begin([scenario])
  later.retrievalQueue[0].dueAt = '2026-09-25T12:00:00Z'
  const tooSoon = answerReview(later, 'practice', position(later), answer, now + 1000)
  assert.deepEqual(tooSoon.retrievalQueue, later.retrievalQueue)
})

test('exam order and feedback resume without rerolling; untaught answers remain diagnostic', () => {
  let state = startReview(emptyState(COURSE_UNITS), 'exam', [scenario], 'exam-1', undefined, now)
  state = answerReview(state, 'exam', position(state, 'exam'), { kind: 'scenario', selectedOptionId: 'a', correctOptionId: 'b' }, now + 1000)
  assert.equal(state.sessionLog[0].evidenceKind, 'diagnostic')
  assert.equal(state.topics[topicId].state, 'not-encountered')
  assert.equal(state.retrievalQueue.length, 0)
  state = reload(state)
  assert.equal(state.study.exam.responses[0].selectedOptionId, 'a')
  assert.equal(coachingHref(chooseCoachingAction(COURSE_UNITS, BUILD_PROJECTS, state, now)), '/exam')
})

test('an unsure exam answer stays separate from incorrect answers and does not promote or penalize', () => {
  let state = begin([scenario], 'exam')
  state = answerReview(state, 'exam', position(state, 'exam'), { kind: 'scenario', selectedOptionId: 'unsure', correctOptionId: 'b' }, now + 1000)
  assert.equal(state.sessionLog.length, 0)
  assert.equal(state.study.exam.responses[0].outcome, 'unsure')
  assert.equal(state.topics[topicId].state, 'understood')
})

test('practice and exam retain separate rounds while project and field notes remain unchanged', () => {
  let state = begin()
  state.study.workspace.resourceGroup = 'isolated-lab'
  state.study.units[topicId].portalNotes = ['Observed a missing permission.']
  const practice = state.study.practice
  state = startReview(state, 'exam', [scenario], 'exam-1', undefined, now + 1000)
  assert.equal(state.study.practice, practice)
  assert.equal(state.study.activeProjectId, 'visual-workflow')
  assert.equal(state.study.workspace.resourceGroup, 'isolated-lab')
  assert.deepEqual(state.study.units[topicId].portalNotes, ['Observed a missing permission.'])
})

test('malformed saved rounds fail without erasing the original data', () => {
  const state = begin()
  const original = JSON.stringify(state)
  const badSessions = [
    { index: -1 }, { index: 3 }, { index: 1 }, { items: [] },
    { responses: [] }, { completedAt: 'bad-date' }, { completedAt: new Date(now).toISOString() },
    { items: [recall, recall] }, { requestedTopicId: 'different-topic' },
    { items: [{ ...recall, kind: 'essay' }, scenario] },
    { responses: [{ ...state.study.practice.responses[0], uncertain: 'yes' }, state.study.practice.responses[1]] },
    { responses: [{ ...state.study.practice.responses[0], outcome: 'correct' }, state.study.practice.responses[1]] },
  ]
  for (const patch of badSessions) {
    assert.throws(() => normalizeStudyState({ ...state.study, practice: { ...state.study.practice, ...patch } }), TypeError)
  }
  assert.throws(() => normalizeStudyState({ ...state.study, activeActivity: 'unknown' }), TypeError)
  assert.equal(JSON.stringify(state), original)
  assert.throws(() => startReview(emptyState(COURSE_UNITS), 'practice', [recall], 'fresh'), /before testing/)
  assert.throws(() => startReview(fresh(), 'exam', [recall], 'exam'), /scenario items/)
  assert.throws(() => answerReview(state, 'practice', position(state), { kind: 'self-rating', retrieved: true }), /Compare/)
  assert.throws(() => saveReviewDraft(state, 'practice', position(state), { reflection: 'x'.repeat(4001) }), /4000/)
})

test('legacy evidence remains importable but new malformed evidence provenance is rejected', () => {
  let state = begin([scenario])
  state = answerReview(state, 'practice', position(state), { kind: 'scenario', selectedOptionId: 'b', correctOptionId: 'b' }, now + 1000)
  assert.deepEqual(reload(state).sessionLog, state.sessionLog)
  for (const patch of [{ evidenceKind: 'automatically-mastered' }, { assisted: 'no' }]) {
    assert.throws(() => reload({ ...state, sessionLog: [{ ...state.sessionLog[0], ...patch }] }), TypeError)
  }
})

test('reading a repair creates space before retesting without shortening an existing later review', () => {
  const due = [{ topicId, dueAt: '2026-09-20T12:00:00Z', missStreak: 2 }]
  const supported = scheduleRetrieval(due, topicId, 'support', now)
  assert.equal(supported[0].dueAt, '2026-09-22T12:00:00.000Z')
  assert.equal(supported[0].missStreak, 2)
  assert.equal(scheduleRetrieval(supported, topicId, 'support', now + 1000), supported)
  assert.equal(due[0].dueAt, '2026-09-20T12:00:00Z')
})
