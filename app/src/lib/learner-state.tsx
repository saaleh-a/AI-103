import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { TOPICS } from '@/data/topics'
import { readJSON, writeJSON } from '@/lib/storage'
import type { LearnerState, MasteryState, TopicMastery } from '@/lib/types'

const STORAGE_KEY = 'ai103-learner-state'

function emptyState(): LearnerState {
  const topics: Record<string, TopicMastery> = {}
  for (const t of TOPICS) {
    topics[t.id] = { state: 'not-encountered', evidence: [] }
  }
  return {
    topics,
    strengths: [],
    weaknesses: [],
    confusions: [],
    retrievalQueue: [],
    sessionsCompleted: 0,
    itemsMasteredToday: 0,
  }
}

function todayKey(): string {
  return new Date().toISOString().slice(0, 10)
}

interface LearnerStateApi {
  state: LearnerState
  /** The single next resumable action (Section 25/45): one topic to work on. */
  nextTopicId: string | null
  coverage: { total: number; started: number; mastered: number }
  setTopicState: (topicId: string, next: MasteryState, evidence?: string) => void
  addStrength: (s: string) => void
  addWeakness: (s: string) => void
  addConfusion: (s: string) => void
  addToRetrievalQueue: (topicId: string) => void
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
    const loaded = readJSON<LearnerState>(STORAGE_KEY, emptyState())
    // reset the daily "mastered today" counter across day boundaries
    if (loaded.lastSessionDate !== todayKey()) {
      loaded.itemsMasteredToday = 0
    }
    // heal state if new topics were added to TOPICS since this was saved
    for (const t of TOPICS) {
      if (!loaded.topics[t.id]) loaded.topics[t.id] = { state: 'not-encountered', evidence: [] }
    }
    return loaded
  })

  useEffect(() => {
    writeJSON(STORAGE_KEY, state)
  }, [state])

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

  const addToRetrievalQueue = useCallback((topicId: string) => {
    setState((prev) => (prev.retrievalQueue.includes(topicId) ? prev : { ...prev, retrievalQueue: [...prev.retrievalQueue, topicId] }))
  }, [])
  const removeFromRetrievalQueue = useCallback((topicId: string) => {
    setState((prev) => ({ ...prev, retrievalQueue: prev.retrievalQueue.filter((t) => t !== topicId) }))
  }, [])

  const recordSessionTouch = useCallback(() => {
    setState((prev) => ({ ...prev, lastActiveAt: new Date().toISOString(), lastSessionDate: todayKey() }))
  }, [])

  const endSession = useCallback(() => {
    setState((prev) => ({ ...prev, sessionsCompleted: prev.sessionsCompleted + 1 }))
  }, [])

  const exportState = useCallback(() => JSON.stringify(state, null, 2), [state])

  const importState = useCallback((json: string) => {
    try {
      const parsed = JSON.parse(json) as LearnerState
      if (!parsed || typeof parsed !== 'object' || !parsed.topics) return false
      setState(parsed)
      return true
    } catch {
      return false
    }
  }, [])

  const resetState = useCallback(() => setState(emptyState()), [])

  const coverage = useMemo(() => {
    const values = Object.values(state.topics)
    return {
      total: TOPICS.length,
      started: values.filter((t) => t.state !== 'not-encountered').length,
      mastered: values.filter((t) => t.state === 'mastered').length,
    }
  }, [state.topics])

  // The single next resumable action: prefer retrieval-queue items due for
  // review, then the first not-yet-introduced topic, in curriculum order.
  const nextTopicId = useMemo(() => {
    if (state.retrievalQueue.length > 0) return state.retrievalQueue[0]
    const nextNew = TOPICS.find((t) => state.topics[t.id]?.state === 'not-encountered')
    if (nextNew) return nextNew.id
    const needsRepair = TOPICS.find((t) => state.topics[t.id]?.state === 'needs-repair')
    if (needsRepair) return needsRepair.id
    const notMastered = TOPICS.find((t) => state.topics[t.id]?.state !== 'mastered')
    return notMastered?.id ?? null
  }, [state.retrievalQueue, state.topics])

  const value: LearnerStateApi = {
    state,
    nextTopicId,
    coverage,
    setTopicState,
    addStrength,
    addWeakness,
    addConfusion,
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
