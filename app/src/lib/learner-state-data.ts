import { normalizeSessionLog } from './session-log.ts'
import { normalizeRetrievalQueue } from './retrieval.ts'
import { MASTERY_ORDER } from './types.ts'
import type { LearnerState, Topic, TopicMastery } from './types'

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

function stringArray(value: unknown, field: string): string[] {
  if (value === undefined) return []
  if (!Array.isArray(value) || !value.every((item): item is string => typeof item === 'string')) {
    throw new TypeError(`Invalid learner state: ${field} must be an array of strings.`)
  }
  return [...value]
}

function counter(value: unknown, field: string): number {
  if (value === undefined) return 0
  if (typeof value !== 'number' || !Number.isSafeInteger(value) || value < 0) {
    throw new TypeError(`Invalid learner state: ${field} must be a nonnegative integer.`)
  }
  return value
}

function optionalString(value: unknown, field: string): string | undefined {
  if (value === undefined || typeof value === 'string') return value
  throw new TypeError(`Invalid learner state: ${field} must be a string.`)
}

function isTopicMastery(value: unknown): value is TopicMastery {
  return isRecord(value)
    && (value.state === 'needs-repair' || MASTERY_ORDER.some((state) => state === value.state))
    && Array.isArray(value.evidence) && value.evidence.every((item) => typeof item === 'string')
    && (value.lastEvidenceAt === undefined || typeof value.lastEvidenceAt === 'string')
}

export function emptyState(topics: readonly Pick<Topic, 'id'>[]): LearnerState {
  return {
    topics: Object.fromEntries(topics.map(({ id }) => [id, { state: 'not-encountered', evidence: [] }])),
    strengths: [],
    weaknesses: [],
    confusions: [],
    retrievalQueue: [],
    sessionLog: [],
    sessionsCompleted: 0,
    itemsMasteredToday: 0,
  }
}

export function normalizeLearnerState(value: unknown, topics: readonly Pick<Topic, 'id'>[], now = new Date()): LearnerState {
  if (!isRecord(value) || !isRecord(value.topics)) {
    throw new TypeError('Invalid learner state: a topics record is required.')
  }
  const savedTopics = Object.entries(value.topics).map(([id, mastery]): [string, TopicMastery] => {
    if (!isTopicMastery(mastery)) throw new TypeError('Invalid learner state: a topic has invalid mastery evidence.')
    return [id, { ...mastery, evidence: [...mastery.evidence] }]
  })
  const lastSessionDate = optionalString(value.lastSessionDate, 'lastSessionDate')
  const itemsMasteredToday = counter(value.itemsMasteredToday, 'itemsMasteredToday')
  return {
    ...value,
    topics: { ...emptyState(topics).topics, ...Object.fromEntries(savedTopics) },
    strengths: stringArray(value.strengths, 'strengths'),
    weaknesses: stringArray(value.weaknesses, 'weaknesses'),
    confusions: stringArray(value.confusions, 'confusions'),
    retrievalQueue: normalizeRetrievalQueue(value.retrievalQueue, now.getTime()),
    sessionLog: normalizeSessionLog(value.sessionLog),
    sessionsCompleted: counter(value.sessionsCompleted, 'sessionsCompleted'),
    itemsMasteredToday: lastSessionDate === now.toISOString().slice(0, 10) ? itemsMasteredToday : 0,
    lastActiveAt: optionalString(value.lastActiveAt, 'lastActiveAt'),
    lastSessionDate,
  }
}
