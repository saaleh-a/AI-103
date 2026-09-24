import assert from 'node:assert/strict'
import test from 'node:test'
import { COURSE_UNITS } from '../src/data/curriculum/index.ts'
import { emptyState } from '../src/lib/learner-state-data.ts'
import { advanceReview, answerReview, saveReviewDraft, startReview } from '../src/lib/review-session.ts'
import { buildReviewQueue } from '../src/lib/study-practice.ts'
import { completeLesson, emptyStudyUnit, hasLearnedTopic } from '../src/lib/study-state.ts'

const day = 24 * 60 * 60 * 1000
const now = Date.parse('2026-09-21T12:00:00Z')
const topicId = 'ai-foundations'
const unit = COURSE_UNITS.find((candidate) => candidate.id === topicId)
const right = unit.check.correctOptionId
const wrong = unit.check.options.find((option) => option.id !== right).id
const ids = COURSE_UNITS.map((candidate) => candidate.id)
const recallItem = { kind: 'flashcard', topicId, id: `recall-${topicId}` }
const scenarioItem = { kind: 'mcq', topicId, id: `scenario-${topicId}` }

function learned({ due = true } = {}) {
  const state = emptyState(COURSE_UNITS)
  state.study.units[topicId] = { ...emptyStudyUnit(), lessonComplete: true, stage: 'complete', completedAt: '2026-09-19T12:00:00Z' }
  state.topics[topicId] = { state: 'understood', evidence: ['Earlier teaching.'] }
  if (due) state.retrievalQueue = [{ topicId, dueAt: '2026-09-20T12:00:00Z', missStreak: 1 }]
  return state
}

// Due topics have a fixed order; other items are deliberately interleaved at random, so tests name them.
function round(state, at, items = buildReviewQueue(ids, state, 8, topicId, at), session = `round-${at}`) {
  return startReview(state, 'practice', items, session, topicId, at)
}

const at = (state) => ({ sessionId: state.study.practice.id, itemId: state.study.practice.items[state.study.practice.index].id })

function playScenario(state, choice, time) {
  const answered = answerReview(state, 'practice', at(state), { kind: 'scenario', selectedOptionId: choice, correctOptionId: right }, time)
  return advanceReview(answered, 'practice', at(state), time)
}

function playRecall(state, retrieved, time) {
  const revealed = saveReviewDraft(state, 'practice', at(state), { revealed: true })
  const answered = answerReview(revealed, 'practice', at(revealed), { kind: 'self-rating', retrieved }, time)
  return advanceReview(answered, 'practice', at(revealed), time)
}

test('a due topic opens with its scenario, so an independent answer can retire the review', () => {
  let state = round(learned(), now)
  assert.deepEqual(state.study.practice.items.map((item) => item.kind), ['mcq', 'flashcard'])
  state = playScenario(state, right, now + 1000)
  assert.equal(state.sessionLog.at(-1).assisted, false)
  assert.deepEqual(state.retrievalQueue, [])
  state = playRecall(state, true, now + 2000)
  assert.deepEqual(state.retrievalQueue, [], 'a correct self-rating must not re-add the retired review')
})

test('success never adds review work, while uncertainty schedules one gentle look', () => {
  let state = round(learned({ due: false }), now, [recallItem, scenarioItem])
  state = playRecall(state, true, now + 1000)
  state = playScenario(state, right, now + 2000)
  assert.deepEqual(state.retrievalQueue, [])
  let unsure = round(learned({ due: false }), now, [recallItem, scenarioItem], 'unsure-round')
  unsure = saveReviewDraft(unsure, 'practice', at(unsure), { uncertain: true })
  unsure = answerReview(unsure, 'practice', at(unsure), { kind: 'unsure' }, now + 1000)
  assert.deepEqual(unsure.retrievalQueue, [{ topicId, dueAt: new Date(now + 1000 + day).toISOString(), missStreak: 0 }])
})

test('misses escalate 1, 3, 7 only while they are successive', () => {
  let state = round(learned({ due: false }), now, [recallItem, scenarioItem])
  state = playRecall(state, false, now + 1000)
  assert.equal(state.retrievalQueue[0].missStreak, 1)
  const nextDay = now + 1000 + day
  state = round(state, nextDay)
  assert.equal(state.study.practice.items[0].kind, 'mcq')
  state = playScenario(state, right, nextDay + 1000)
  assert.deepEqual(state.retrievalQueue, [], 'an independent success on the due review clears the streak')
  const later = nextDay + 20 * day
  state = round(state, later, [recallItem, scenarioItem])
  state = playRecall(state, false, later + 1000)
  assert.equal(state.retrievalQueue[0].missStreak, 1, 'an isolated later miss starts again at one day')
  assert.equal(state.retrievalQueue[0].dueAt, new Date(later + 1000 + day).toISOString())
})

test('two misses on one idea in the same round count as one lapse', () => {
  let state = round(learned(), now)
  state = playScenario(state, wrong, now + 1000)
  const afterFirst = state.retrievalQueue[0]
  assert.equal(afterFirst.missStreak, 2)
  assert.equal(afterFirst.dueAt, new Date(now + 1000 + 3 * day).toISOString())
  state = playRecall(state, false, now + 2000)
  assert.deepEqual(state.retrievalQueue, [afterFirst])
  assert.equal(state.sessionLog.length, 2, 'both answers are still recorded')
})

test('a miss flags repair without making a taught topic new again', () => {
  const imported = emptyState(COURSE_UNITS)
  imported.topics[topicId] = { state: 'retrievable', evidence: ['Promoted by an earlier version of the app.'] }
  let state = round(imported, now, [recallItem, scenarioItem])
  state = playRecall(state, false, now + 1000)
  assert.equal(state.topics[topicId].state, 'needs-repair')
  assert.equal(hasLearnedTopic(state, topicId), true)
  state = playScenario(state, right, now + 2000)
  assert.equal(state.sessionLog.at(-1).evidenceKind, 'scenario')
  assert.equal(buildReviewQueue(ids, state, 8, topicId, now + 3000).length, 2)
})

test('repair flags without taught evidence never make a topic testable', () => {
  const state = emptyState(COURSE_UNITS)
  state.topics[topicId] = { state: 'needs-repair', evidence: ['Set by the optional tutor.'] }
  assert.equal(hasLearnedTopic(state, topicId), false)
  const entry = { topicId, itemId: `scenario-${topicId}`, itemType: 'mcq', correct: false, timestamp: new Date(now).toISOString(), msToAnswer: 1 }
  assert.equal(hasLearnedTopic({ ...state, sessionLog: [entry] }, topicId), false, 'legacy entries without provenance do not count')
  assert.equal(hasLearnedTopic({ ...state, sessionLog: [{ ...entry, evidenceKind: 'diagnostic' }] }, topicId), false)
  assert.equal(hasLearnedTopic({ ...state, sessionLog: [{ ...entry, evidenceKind: 'self-report' }] }, topicId), true)
})

function answeredLesson(answer) {
  const state = emptyState(COURSE_UNITS)
  state.study.units[topicId] = { ...emptyStudyUnit(), lessonComplete: true, stage: 'recall', checkAnswerId: answer }
  state.topics[topicId] = { state: 'introduced', evidence: [] }
  return state
}

test('finishing a lesson records its check once; finishing a revisit only restores completion', () => {
  const finished = completeLesson(answeredLesson(right), topicId, right, now)
  assert.equal(finished.topics[topicId].state, 'understood')
  assert.equal(finished.study.units[topicId].stage, 'complete')
  assert.equal(finished.study.units[topicId].completedAt, new Date(now).toISOString())
  assert.equal(finished.sessionsCompleted, 1)
  assert.deepEqual(finished.retrievalQueue, [{ topicId, dueAt: new Date(now + day).toISOString(), missStreak: 0 }])

  const laterMiss = structuredClone(finished)
  laterMiss.topics[topicId] = { state: 'needs-repair', evidence: ['Missed in practice.'] }
  laterMiss.study.units[topicId].stage = 'recall'
  const revisited = completeLesson(laterMiss, topicId, right, now + 5 * day)
  assert.equal(revisited.topics, laterMiss.topics, 'the repair flag survives')
  assert.equal(revisited.retrievalQueue, laterMiss.retrievalQueue)
  assert.equal(revisited.sessionsCompleted, 1)
  assert.equal(revisited.study.units[topicId].stage, 'complete')
  assert.equal(revisited.study.units[topicId].completedAt, finished.study.units[topicId].completedAt)
  assert.equal(completeLesson(revisited, topicId, right, now + 6 * day), revisited)
})

test('a wrong lesson check schedules one miss, and finishing it again adds no second miss', () => {
  const missed = completeLesson(answeredLesson(wrong), topicId, right, now)
  assert.equal(missed.topics[topicId].state, 'needs-repair')
  assert.equal(missed.retrievalQueue[0].missStreak, 1)
  const again = structuredClone(missed)
  again.study.units[topicId].stage = 'recall'
  assert.equal(completeLesson(again, topicId, right, now + day).retrievalQueue[0].missStreak, 1)
  assert.equal(completeLesson(answeredLesson(undefined), topicId, right, now).study.units[topicId].stage, 'recall', 'an unanswered check cannot finish')
})
