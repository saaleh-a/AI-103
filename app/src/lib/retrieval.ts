import type { LearnerState, RetrievalQueueItem, Topic } from './types'

const DAY_MS = 24 * 60 * 60 * 1000

export type RetrievalReason = 'review' | 'miss'

function isRetrievalQueueItem(value: unknown): value is RetrievalQueueItem {
  return value !== null && typeof value === 'object'
    && 'topicId' in value && typeof value.topicId === 'string' && value.topicId.trim().length > 0
    && 'dueAt' in value && typeof value.dueAt === 'string' && Number.isFinite(Date.parse(value.dueAt))
    && 'missStreak' in value && typeof value.missStreak === 'number' && Number.isSafeInteger(value.missStreak) && value.missStreak >= 0
}

export function normalizeRetrievalQueue(value: unknown, now = Date.now()): RetrievalQueueItem[] {
  if (value === undefined) return []
  if (!Array.isArray(value)) throw new TypeError('Invalid learner state: retrievalQueue must be an array.')
  const queue = value.map((item): RetrievalQueueItem => {
    if (typeof item === 'string' && item.trim()) {
      return { topicId: item, dueAt: new Date(now).toISOString(), missStreak: 1 }
    }
    if (!isRetrievalQueueItem(item)) throw new TypeError('Invalid learner state: a retrieval item has an invalid topic, deadline, or miss streak.')
    return { ...item }
  })
  if (new Set(queue.map((item) => item.topicId)).size !== queue.length) {
    throw new TypeError('Invalid learner state: retrieval topics must be unique.')
  }
  return queue
}

export function scheduleRetrieval(queue: RetrievalQueueItem[], topicId: string, reason: RetrievalReason = 'review', now = Date.now()): RetrievalQueueItem[] {
  if (!topicId.trim()) throw new TypeError('A retrieval topic ID is required.')
  const existing = queue.find((item) => item.topicId === topicId)
  if (reason === 'review' && existing) return queue
  const missStreak = reason === 'miss' ? Math.min((existing?.missStreak ?? 0) + 1, Number.MAX_SAFE_INTEGER) : 0
  const days = missStreak <= 1 ? 1 : missStreak === 2 ? 3 : 7
  const scheduled = { topicId, dueAt: new Date(now + days * DAY_MS).toISOString(), missStreak }
  return existing ? queue.map((item) => item.topicId === topicId ? scheduled : item) : [...queue, scheduled]
}

export function isRetrievalDue(item: RetrievalQueueItem, now = Date.now()): boolean {
  return Date.parse(item.dueAt) <= now
}

export function nextRetrievalDeadline(queue: readonly RetrievalQueueItem[], now = Date.now()): number | null {
  const next = Math.min(...queue.map((item) => Date.parse(item.dueAt)).filter((dueAt) => dueAt > now))
  return Number.isFinite(next) ? next : null
}

export function selectNextTopicId(state: Pick<LearnerState, 'topics' | 'retrievalQueue'>, topics: readonly Pick<Topic, 'id'>[], now = Date.now()): string | null {
  const due = state.retrievalQueue.find((item) => isRetrievalDue(item, now) && topics.some((topic) => topic.id === item.topicId))
  if (due) return due.topicId
  const nextNew = topics.find((topic) => state.topics[topic.id]?.state === 'not-encountered')
  if (nextNew) return nextNew.id
  const needsRepair = topics.find((topic) => state.topics[topic.id]?.state === 'needs-repair')
  if (needsRepair) return needsRepair.id
  return topics.find((topic) => state.topics[topic.id]?.state !== 'mastered')?.id ?? null
}

export function prioritizeDueItems<T extends { topicId: string }>(items: readonly T[], queue: readonly RetrievalQueueItem[], now = Date.now(), random = Math.random): T[] {
  const priority = new Set(queue.filter((item) => isRetrievalDue(item, now)).map((item) => item.topicId))
  const prioritized = items.filter((item) => priority.has(item.topicId))
  const rest = items.filter((item) => !priority.has(item.topicId))
  return [...prioritized, ...rest.sort(() => random() - 0.5)]
}

export function formatRetrievalQueue(queue: readonly RetrievalQueueItem[]): string {
  return queue.map((item) => `${item.topicId} (due ${item.dueAt}; miss streak ${item.missStreak})`).join(', ') || '(empty)'
}
