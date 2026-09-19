import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { TOPICS } from '@/data/topics'
import { emptyState, normalizeLearnerState } from '@/lib/learner-state-data'
import { isRetrievalDue, nextRetrievalDeadline, scheduleRetrieval, selectNextTopicId, type RetrievalReason } from '@/lib/retrieval'
import { appendLogEntry } from '@/lib/session-log'
import { readJSON, writeJSON } from '@/lib/storage'
import type { LearnerState, MasteryState, RetrievalQueueItem, SessionLogEntry } from '@/lib/types'

const STORAGE_KEY = 'ai103-learner-state'

function todayKey(): string {
  return new Date().toISOString().slice(0, 10)
}

interface LearnerStateApi {
  state: LearnerState
  /** The single next resumable action (Section 25/45): one topic to work on. */
  nextTopicId: string | null
  dueRetrievalQueue: RetrievalQueueItem[]
  coverage: { total: number; started: number; mastered: number }
  setTopicState: (topicId: string, next: MasteryState, evidence?: string) => void
  addStrength: (s: string) => void
  addWeakness: (s: string) => void
  addConfusion: (s: string) => void
  appendSessionLog: (entry: SessionLogEntry) => void
  addToRetrievalQueue: (topicId: string, reason?: RetrievalReason) => void
  removeFromRetrievalQueue: (topicId: string) => void
  recordSessionTouch: () => void
  endSession: () => void
  exportState: () => string
  importState: (json: string) => boolean
  resetState: () => void
}

const LearnerStateContext = createContext<LearnerStateApi | null>(null)

export function LearnerStateProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<LearnerState>(() => {
    try {
      return normalizeLearnerState(readJSON<unknown>(STORAGE_KEY, emptyState(TOPICS)), TOPICS)
    } catch (error) {
      if (!(error instanceof TypeError)) throw error
      console.warn('[learner-state] Saved progress could not be loaded.', error)
      return emptyState(TOPICS)
    }
  })

  useEffect(() => {
    writeJSON(STORAGE_KEY, state)
  }, [state])

  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const refresh = () => setNow(Date.now())
    const deadline = nextRetrievalDeadline(state.retrievalQueue, now)
    const timer = deadline === null ? undefined : window.setTimeout(refresh, Math.min(Math.max(0, deadline - Date.now()), 2_147_483_647))
    window.addEventListener('focus', refresh)
    document.addEventListener('visibilitychange', refresh)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('focus', refresh)
      document.removeEventListener('visibilitychange', refresh)
    }
  }, [state.retrievalQueue, now])

  const setTopicState = useCallback((topicId: string, next: MasteryState, evidence?: string) => {
    setState((prev) => {
      const current = prev.topics[topicId] ?? { state: 'not-encountered' as MasteryState, evidence: [] }
      const wasMastered = current.state === 'mastered'
      const nowMastered = next === 'mastered'
      return {
        ...prev,
        itemsMasteredToday: !wasMastered && nowMastered ? prev.itemsMasteredToday + 1 : prev.itemsMasteredToday,
        lastSessionDate: todayKey(),
        topics: {
          ...prev.topics,
          [topicId]: {
            state: next,
            lastEvidenceAt: new Date().toISOString(),
            evidence: evidence ? [...current.evidence.slice(-9), evidence] : current.evidence,
          },
        },
      }
    })
  }, [])

  const addUnique = (key: 'strengths' | 'weaknesses' | 'confusions') => (s: string) => {
    setState((prev) => (prev[key].includes(s) ? prev : { ...prev, [key]: [...prev[key], s] }))
  }
  const addStrength = useCallback(addUnique('strengths'), [])
  const addWeakness = useCallback(addUnique('weaknesses'), [])
  const addConfusion = useCallback(addUnique('confusions'), [])

  const appendSessionLog = useCallback((entry: SessionLogEntry) => {
    setState((prev) => ({ ...prev, sessionLog: appendLogEntry(prev.sessionLog, entry) }))
  }, [])

  const addToRetrievalQueue = useCallback((topicId: string, reason: RetrievalReason = 'review') => {
    const scheduledAt = Date.now()
    setNow(scheduledAt)
    setState((prev) => {
      const retrievalQueue = scheduleRetrieval(prev.retrievalQueue, topicId, reason, scheduledAt)
      return retrievalQueue === prev.retrievalQueue ? prev : { ...prev, retrievalQueue }
    })
  }, [])
  const removeFromRetrievalQueue = useCallback((topicId: string) => {
    setNow(Date.now())
    setState((prev) => ({ ...prev, retrievalQueue: prev.retrievalQueue.filter((item) => item.topicId !== topicId) }))
  }, [])

  const recordSessionTouch = useCallback(() => {
    setNow(Date.now())
    setState((prev) => ({ ...prev, lastActiveAt: new Date().toISOString(), lastSessionDate: todayKey() }))
  }, [])

  const endSession = useCallback(() => {
    setState((prev) => ({ ...prev, sessionsCompleted: prev.sessionsCompleted + 1 }))
  }, [])

  const exportState = useCallback(() => JSON.stringify(state, null, 2), [state])

  const importState = useCallback((json: string) => {
    try {
      const parsed: unknown = JSON.parse(json)
      const importedAt = new Date()
      const imported = normalizeLearnerState(parsed, TOPICS, importedAt)
      setNow(importedAt.getTime())
      setState(imported)
      return true
    } catch (error) {
      if (!(error instanceof SyntaxError) && !(error instanceof TypeError)) throw error
      return false
    }
  }, [])

  const resetState = useCallback(() => setState(emptyState(TOPICS)), [])

  const coverage = useMemo(() => {
    const values = Object.values(state.topics)
    return {
      total: TOPICS.length,
      started: values.filter((t) => t.state !== 'not-encountered').length,
      mastered: values.filter((t) => t.state === 'mastered').length,
    }
  }, [state.topics])

  const dueRetrievalQueue = state.retrievalQueue.filter((item) => isRetrievalDue(item, now))
  const nextTopicId = selectNextTopicId(state, TOPICS, now)

  const value: LearnerStateApi = {
    state,
    nextTopicId,
    dueRetrievalQueue,
    coverage,
    setTopicState,
    addStrength,
    addWeakness,
    addConfusion,
    appendSessionLog,
    addToRetrievalQueue,
    removeFromRetrievalQueue,
    recordSessionTouch,
    endSession,
    exportState,
    importState,
    resetState,
  }

  return <LearnerStateContext.Provider value={value}>{children}</LearnerStateContext.Provider>
}

export function useLearnerState(): LearnerStateApi {
  const ctx = useContext(LearnerStateContext)
  if (!ctx) throw new Error('useLearnerState must be used within LearnerStateProvider')
  return ctx
}
