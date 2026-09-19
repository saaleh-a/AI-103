import assert from 'node:assert/strict'
import { test } from 'node:test'
import { emptyState } from '../src/lib/learner-state-data.ts'
import { formatRetrievalQueue, isRetrievalDue, nextRetrievalDeadline, normalizeRetrievalQueue, prioritizeDueItems, scheduleRetrieval, selectNextTopicId } from '../src/lib/retrieval.ts'

const now = Date.parse('2026-09-19T02:00:00.000Z')
const day = 86_400_000
const topics = [{ id: 'a' }, { id: 'b' }, { id: 'c' }]
const queued = (topicId, offset, missStreak = 1) => ({ topicId, dueAt: new Date(now + offset).toISOString(), missStreak })

test('legacy queues are immediately due and migration is idempotent', () => {
  const migrated = normalizeRetrievalQueue(['a', 'b'], now)
  assert.deepEqual(migrated, [queued('a', 0), queued('b', 0)])
  assert.deepEqual(normalizeRetrievalQueue(migrated, now + day), migrated)
  assert.deepEqual(normalizeRetrievalQueue([], now), [])
  assert.deepEqual(normalizeRetrievalQueue(undefined, now), [])
})

test('malformed deadlines, streaks, IDs, and duplicate topics are rejected', () => {
  for (const value of [
    null,
    'a',
    [null],
    [''],
    ['a', 'a'],
    [{ ...queued('a', 0), dueAt: 'invalid' }],
    [{ ...queued('a', 0), missStreak: -1 }],
    [{ ...queued('a', 0), missStreak: 1.5 }],
    [{ ...queued('a', 0), missStreak: Number.MAX_SAFE_INTEGER + 1 }],
    [{ ...queued('a', 0), topicId: 42 }],
  ]) assert.throws(() => normalizeRetrievalQueue(value, now), TypeError)
})

test('misses schedule 1, 3, 7, and 7 days from the latest answer, not the previous due date', () => {
  let queue = []
  for (const [index, days] of [1, 3, 7, 7].entries()) {
    const answeredAt = now + index * 1000
    const previous = queue
    queue = scheduleRetrieval(queue, 'a', 'miss', answeredAt)
    assert.equal(queue.length, 1)
    assert.equal(queue[0].missStreak, index + 1)
    assert.equal(Date.parse(queue[0].dueAt) - answeredAt, days * day)
    assert.notEqual(queue, previous)
    if (previous.length) assert.equal(previous[0].missStreak, index)
  }
})

test('lesson and tutor requests schedule a review without counting a miss or postponing an existing one', () => {
  const review = scheduleRetrieval([], 'a', 'review', now)
  assert.deepEqual(review, [queued('a', day, 0)])
  assert.equal(scheduleRetrieval(review, 'a', 'review', now + day), review)
  const firstMiss = scheduleRetrieval(review, 'a', 'miss', now + 1000)
  assert.equal(firstMiss[0].missStreak, 1)
  assert.equal(Date.parse(firstMiss[0].dueAt), now + 1000 + day)
  assert.equal(scheduleRetrieval(firstMiss, 'a', 'review', now + day), firstMiss)
})

test('updating one topic preserves other entries and original queue order', () => {
  const other = queued('b', -day)
  const queue = [queued('a', day), other]
  const updated = scheduleRetrieval(queue, 'a', 'miss', now)
  assert.deepEqual(updated.map((item) => item.topicId), ['a', 'b'])
  assert.equal(updated[1], other)
  assert.equal(queue[0].missStreak, 1)
})

test('due boundary is inclusive and future deadlines can drive a refresh', () => {
  assert.equal(isRetrievalDue(queued('a', -1), now), true)
  assert.equal(isRetrievalDue(queued('a', 0), now), true)
  assert.equal(isRetrievalDue(queued('a', 1), now), false)
  assert.equal(nextRetrievalDeadline([queued('a', -1), queued('b', 5000), queued('c', 1)], now), now + 1)
  assert.equal(nextRetrievalDeadline([queued('a', 0)], now), null)
})

test('the first due topic takes priority, not an earlier future queue entry', () => {
  const state = { ...emptyState(topics), retrievalQueue: [queued('a', day), queued('b', -1), queued('c', -day)] }
  assert.equal(selectNextTopicId(state, topics, now), 'b')
  assert.equal(selectNextTopicId(state, topics, now + day), 'a')
})

test('fallback remains new topic, then needs repair, then any unmastered topic', () => {
  const state = { ...emptyState(topics), retrievalQueue: [queued('a', day)] }
  state.topics.a.state = 'needs-repair'
  assert.equal(selectNextTopicId(state, topics, now), 'b')
  state.topics.b.state = 'understood'
  state.topics.c.state = 'mastered'
  assert.equal(selectNextTopicId(state, topics, now), 'a')
  state.topics.a.state = 'mastered'
  assert.equal(selectNextTopicId(state, topics, now), 'b')
  state.topics.b.state = 'mastered'
  assert.equal(selectNextTopicId(state, topics, now), null)
})

test('unrecognized historical topic IDs are retained but cannot become a broken next action', () => {
  const state = { ...emptyState(topics), retrievalQueue: [queued('old-topic', -1)] }
  assert.equal(selectNextTopicId(state, topics, now), 'a')
  assert.equal(state.retrievalQueue[0].topicId, 'old-topic')
})

test('Practice prioritizes only due topics and retains future topics in the normal rotation', () => {
  const items = [
    { id: 'future-fc', topicId: 'a' },
    { id: 'normal-fc', topicId: 'b' },
    { id: 'due-fc', topicId: 'c' },
    { id: 'due-mcq', topicId: 'c' },
    { id: 'future-mcq', topicId: 'a' },
  ]
  const queue = [queued('a', day), queued('c', 0)]
  const ordered = prioritizeDueItems(items, queue, now, () => 0.5)
  assert.deepEqual(ordered.map((item) => item.id), ['due-fc', 'due-mcq', 'future-fc', 'normal-fc', 'future-mcq'])
  assert.equal(ordered.length, items.length)
  assert.equal(items[0].id, 'future-fc')
})

test('tutor summary includes schedule details, not object coercion', () => {
  const summary = formatRetrievalQueue([queued('a', day, 0), queued('b', 3 * day, 2)])
  assert.ok(summary.includes('a (due 2026-09-20T02:00:00.000Z; miss streak 0)'))
  assert.ok(summary.includes('b (due 2026-09-22T02:00:00.000Z; miss streak 2)'))
  assert.ok(!summary.includes('[object Object]'))
  assert.equal(formatRetrievalQueue([]), '(empty)')
})
