import assert from 'node:assert/strict'
import { test } from 'node:test'
import { emptyState, normalizeLearnerState } from '../src/lib/learner-state-data.ts'
import { appendLogEntry, createAnswerTimer, normalizeSessionLog, SESSION_LOG_LIMIT } from '../src/lib/session-log.ts'

const topics = [{ id: 'a' }, { id: 'b' }]
const now = new Date('2026-09-19T02:00:00.000Z')
const entry = {
  topicId: 'a',
  itemType: 'flashcard',
  itemId: 'fc-a',
  correct: false,
  timestamp: now.toISOString(),
  msToAnswer: 1250,
}

test('new and reset states have independent empty logs', () => {
  const first = emptyState(topics)
  first.sessionLog.push(entry)
  assert.deepEqual(emptyState(topics).sessionLog, [])
  assert.deepEqual(emptyState(topics).topics.b, { state: 'not-encountered', evidence: [] })
})

test('startup and JSON-import normalization heal legacy logs and new topics without losing progress', () => {
  const legacy = {
    topics: { a: { state: 'understood', evidence: ['Taught previously.'] } },
    retrievalQueue: ['a'],
    strengths: ['Explanation'],
    sessionsCompleted: 2,
    lastSessionDate: '2026-09-19',
    itemsMasteredToday: 1,
  }
  for (const input of [legacy, JSON.parse(JSON.stringify(legacy))]) {
    const normalized = normalizeLearnerState(input, topics, now)
    assert.deepEqual(normalized.sessionLog, [])
    assert.deepEqual(normalized.topics.a, legacy.topics.a)
    assert.deepEqual(normalized.topics.b, { state: 'not-encountered', evidence: [] })
    assert.deepEqual(normalized.retrievalQueue, [{ topicId: 'a', dueAt: now.toISOString(), missStreak: 1 }])
    assert.deepEqual(normalized.strengths, ['Explanation'])
    assert.equal(normalized.sessionsCompleted, 2)
    assert.equal(normalized.itemsMasteredToday, 1)
  }
  assert.equal(legacy.topics.b, undefined)
})

test('daily counter resets without dropping answer history', () => {
  const state = { ...emptyState(topics), sessionLog: [entry], lastSessionDate: '2026-09-18', itemsMasteredToday: 3 }
  const normalized = normalizeLearnerState(state, topics, now)
  assert.equal(normalized.itemsMasteredToday, 0)
  assert.deepEqual(normalized.sessionLog, [entry])
})

test('bounded append keeps only the latest 500 entries without mutating the old log', () => {
  let log = []
  for (let i = 0; i <= SESSION_LOG_LIMIT; i += 1) log = appendLogEntry(log, { ...entry, itemId: `fc-${i}` })
  assert.equal(log.length, SESSION_LOG_LIMIT)
  assert.equal(log[0].itemId, 'fc-1')
  assert.equal(log.at(-1).itemId, 'fc-500')
  const next = appendLogEntry(log, { ...entry, itemId: 'mcq-a', itemType: 'mcq', correct: true })
  assert.equal(log.at(-1).itemId, 'fc-500')
  assert.equal(next.at(-1).itemType, 'mcq')
  assert.equal(next.at(-1).correct, true)
})

test('normalization bounds imported logs and JSON round-trips all entry fields', () => {
  const log = Array.from({ length: 502 }, (_, i) => ({ ...entry, itemId: `fc-${i}` }))
  const imported = normalizeLearnerState(JSON.parse(JSON.stringify({ ...emptyState(topics), sessionLog: log })), topics, now)
  assert.equal(imported.sessionLog.length, 500)
  assert.deepEqual(imported.sessionLog[0], { ...entry, itemId: 'fc-2' })
  assert.deepEqual(imported.sessionLog.at(-1), { ...entry, itemId: 'fc-501' })
  assert.deepEqual(normalizeLearnerState(imported, topics, now), imported)
})

test('invalid answer logs are rejected rather than accepted as progress', () => {
  for (const value of [
    null,
    {},
    [null],
    [{ ...entry, itemType: 'essay' }],
    [{ ...entry, correct: 'false' }],
    [{ ...entry, timestamp: 'not a date' }],
    [{ ...entry, msToAnswer: -1 }],
    [{ ...entry, msToAnswer: Infinity }],
  ]) assert.throws(() => normalizeSessionLog(value), TypeError)
  assert.throws(() => normalizeLearnerState({ topics: {}, sessionLog: null }, topics, now), TypeError)
  assert.throws(() => normalizeLearnerState({ topics: { a: { state: 'unknown' } } }, topics, now), TypeError)
})

test('new retrieval entries survive normalization and export/import without rescheduling', () => {
  const state = {
    ...emptyState(topics),
    retrievalQueue: [{ topicId: 'a', dueAt: '2026-09-22T02:00:00.000Z', missStreak: 2 }],
    sessionLog: [entry],
  }
  const imported = normalizeLearnerState(JSON.parse(JSON.stringify(state)), topics, now)
  assert.deepEqual(imported.retrievalQueue, state.retrievalQueue)
  assert.deepEqual(normalizeLearnerState(imported, topics, new Date('2026-09-20')), imported)
})

test('invalid queue imports throw without mutating the input state', () => {
  const state = { ...emptyState(topics), retrievalQueue: [{ topicId: 'a', dueAt: 'invalid', missStreak: 1 }] }
  const before = JSON.stringify(state)
  assert.throws(() => normalizeLearnerState(state, topics, now), TypeError)
  assert.equal(JSON.stringify(state), before)
})

test('item timer measures committed answers once and resets for the next item', () => {
  let time = 100
  const timer = createAnswerTimer(() => time)
  time = 1350.4
  assert.equal(timer.finish(), 1250)
  time = 9000
  assert.equal(timer.finish(), null)
  timer.reset()
  time = 9065.8
  assert.equal(timer.finish(), 66)
})

test('answer durations cannot become negative', () => {
  let time = 100
  const timer = createAnswerTimer(() => time)
  time = 99
  assert.equal(timer.finish(), 0)
})
