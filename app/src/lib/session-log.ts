import type { SessionLogEntry } from './types'

export const SESSION_LOG_LIMIT = 500

function isSessionLogEntry(value: unknown): value is SessionLogEntry {
  if (!value || typeof value !== 'object') return false
  return 'topicId' in value && typeof value.topicId === 'string'
    && 'itemType' in value && (value.itemType === 'flashcard' || value.itemType === 'mcq')
    && 'itemId' in value && typeof value.itemId === 'string'
    && 'correct' in value && typeof value.correct === 'boolean'
    && 'timestamp' in value && typeof value.timestamp === 'string' && Number.isFinite(Date.parse(value.timestamp))
    && 'msToAnswer' in value && typeof value.msToAnswer === 'number' && Number.isFinite(value.msToAnswer) && value.msToAnswer >= 0
    && (!('selectedOptionId' in value) || value.selectedOptionId === undefined || typeof value.selectedOptionId === 'string')
    && (!('evidenceKind' in value) || value.evidenceKind === undefined || value.evidenceKind === 'self-report' || value.evidenceKind === 'scenario' || value.evidenceKind === 'diagnostic')
    && (!('assisted' in value) || value.assisted === undefined || typeof value.assisted === 'boolean')
}

export function normalizeSessionLog(value: unknown): SessionLogEntry[] {
  if (value === undefined) return []
  if (!Array.isArray(value) || !value.every(isSessionLogEntry)) {
    throw new TypeError('Invalid learner state: sessionLog must contain timestamped answers with nonnegative durations.')
  }
  return value.slice(-SESSION_LOG_LIMIT)
}

export function appendLogEntry(log: readonly SessionLogEntry[], entry: SessionLogEntry): SessionLogEntry[] {
  return [...log.slice(1 - SESSION_LOG_LIMIT), entry]
}

export function createAnswerTimer(now: () => number = () => performance.now()) {
  let startedAt = now()
  let answered = false
  return {
    reset() {
      startedAt = now()
      answered = false
    },
    finish(): number | null {
      if (answered) return null
      answered = true
      return Math.max(0, Math.round(now() - startedAt))
    },
  }
}
