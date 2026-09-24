import { useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { LearnerStateContext } from '@/lib/learner-state-context'
import { TOPICS } from '@/data/topics'
import { UNIT_BY_ID } from '@/data/curriculum'
import { emptyState, normalizeLearnerState } from '@/lib/learner-state-data'
import { isRetrievalDue, nextRetrievalDeadline, scheduleRetrieval, selectNextTopicId, type RetrievalReason } from '@/lib/retrieval'
import { appendLogEntry } from '@/lib/session-log'
import { writeJSON } from '@/lib/storage'
import { completeLesson, hasLearnedTopic, updateStudyUnit } from '@/lib/study-state'
import { advanceReview, answerReview, saveReviewDraft, startReview, type ReviewAnswer, type ReviewDraft, type ReviewPosition } from '@/lib/review-session'
import type { LearnerState, MasteryState, RetrievalQueueItem, ReviewItem, ReviewMode, SessionLogEntry, StudyActivity, StudyUnitProgress, StudyState, ProjectWorkspace } from '@/lib/types'

const STORAGE_KEY = 'ai103-learner-state'

function todayKey(): string {
  return new Date().toISOString().slice(0, 10)
}

export interface LearnerStateApi {
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
  /** Records a finished lesson's application check once; finishing a revisited lesson only restores its completion view. */
  completeLessonCheck: (unitId: string, correctOptionId: string) => void
  exportState: () => string
  importState: (json: string) => boolean
  resetState: () => void
  saveStudyProgress: (topicId: string, patch: Partial<StudyUnitProgress>) => void
  pauseStudy: () => void
  setSessionMinutes: (minutes: StudyState['sessionMinutes']) => void
  storageStatus: 'saved' | 'unavailable' | 'invalid'
  setActiveProject: (id: string) => void
  saveWorkspace: (patch: Partial<ProjectWorkspace>) => void
  activateStudy: (unitId: string, activity: StudyActivity) => void
  startReviewSession: (mode: ReviewMode, items: readonly ReviewItem[], topicId?: string, replaceExisting?: boolean) => void
  resumeReviewSession: (mode: ReviewMode) => void
  saveReviewResponse: (mode: ReviewMode, position: ReviewPosition, patch: Partial<ReviewDraft>) => void
  commitReviewAnswer: (mode: ReviewMode, position: ReviewPosition, answer: ReviewAnswer) => void
  advanceReviewSession: (mode: ReviewMode, position: ReviewPosition) => void
}

export function LearnerStateProvider({ children }: { children: ReactNode }) {
  const [initial] = useState((): { state: LearnerState; status: 'saved' | 'unavailable' | 'invalid' } => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return { state: raw ? normalizeLearnerState(JSON.parse(raw), TOPICS) : emptyState(TOPICS), status: 'saved' }
    } catch (error) {
      if (!(error instanceof TypeError) && !(error instanceof SyntaxError) && !(error instanceof DOMException)) throw error
      console.warn('[learner-state] Saved progress could not be loaded.', error)
      return { state: emptyState(TOPICS), status: error instanceof DOMException ? 'unavailable' : 'invalid' }
    }
  })
  const [state, setState] = useState<LearnerState>(initial.state)
  const [storageStatus, setStorageStatus] = useState(initial.status)
  const [preserveInvalidSave, setPreserveInvalidSave] = useState(initial.status === 'invalid')
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    if (preserveInvalidSave) return
    setStorageStatus(writeJSON(STORAGE_KEY, state) ? 'saved' : 'unavailable')
  }, [state, preserveInvalidSave])

  // Code outside React (the stale-deploy reload, the top-level crash screen) must know whether a reload is safe.
  useEffect(() => {
    document.documentElement.dataset.progress = storageStatus
  }, [storageStatus])

  const saveStudyProgress = useCallback((topicId: string, patch: Partial<StudyUnitProgress>) => {
    setState((prev) => ({
      ...prev,
      lastActiveAt: new Date().toISOString(),
      study: updateStudyUnit(prev.study, topicId, patch),
    }))
  }, [])

  const pauseStudy = useCallback(() => {
    setState((prev) => ({ ...prev, study: { ...prev.study, pausedAt: new Date().toISOString() } }))
  }, [])

  const setSessionMinutes = useCallback((minutes: StudyState['sessionMinutes']) => {
    setState((prev) => ({ ...prev, study: { ...prev.study, sessionMinutes: minutes } }))
  }, [])

  const setActiveProject = useCallback((id: string) => {
    setState((prev) => prev.study.activeProjectId === id ? prev : ({
      ...prev, study: { ...prev.study, activeProjectId: id, activeUnitId: undefined, activeActivity: undefined, pausedAt: undefined },
    }))
  }, [])

  const activateStudy = useCallback((unitId: string, activity: StudyActivity) => {
    setState((prev) => ({
      ...prev,
      study: { ...prev.study, activeUnitId: unitId, activeActivity: activity, pausedAt: undefined },
    }))
  }, [])

  const startReviewSession = useCallback((mode: ReviewMode, items: readonly ReviewItem[], topicId?: string, replaceExisting = false) => {
    if (items.length === 0) return
    const id = crypto.randomUUID()
    const startedAt = Date.now()
    setState((prev) => prev.study[mode] && !replaceExisting ? prev : startReview(prev, mode, items, id, topicId, startedAt))
  }, [])

  const resumeReviewSession = useCallback((mode: ReviewMode) => {
    setState((prev) => {
      const session = prev.study[mode]
      // Viewing a finished round's summary must not replace the resume pointer to unfinished work.
      if (!session || session.completedAt) return prev
      return { ...prev, study: { ...prev.study, activeActivity: mode, activeUnitId: session.items[session.index]?.topicId, pausedAt: undefined } }
    })
  }, [])

  const saveReviewResponse = useCallback((mode: ReviewMode, position: ReviewPosition, patch: Partial<ReviewDraft>) => {
    setState((prev) => saveReviewDraft(prev, mode, position, patch))
  }, [])

  const commitReviewAnswer = useCallback((mode: ReviewMode, position: ReviewPosition, answer: ReviewAnswer) => {
    const answeredAt = Date.now()
    setNow(answeredAt)
    setState((prev) => answerReview(prev, mode, position, answer, answeredAt))
  }, [])

  const advanceReviewSession = useCallback((mode: ReviewMode, position: ReviewPosition) => {
    const advancedAt = Date.now()
    setState((prev) => advanceReview(prev, mode, position, advancedAt))
  }, [])

  const saveWorkspace = useCallback((patch: Partial<ProjectWorkspace>) => {
    setState((prev) => ({ ...prev, study: { ...prev.study, workspace: { ...prev.study.workspace, ...patch } } }))
  }, [])

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

  const completeLessonCheck = useCallback((unitId: string, correctOptionId: string) => {
    const finishedAt = Date.now()
    setNow(finishedAt)
    setState((prev) => {
      const next = completeLesson(prev, unitId, correctOptionId, finishedAt)
      return next.sessionsCompleted > prev.sessionsCompleted ? { ...next, lastSessionDate: todayKey() } : next
    })
  }, [])

  const exportState = useCallback(() => JSON.stringify(state, null, 2), [state])

  const importState = useCallback((json: string) => {
    try {
      const parsed: unknown = JSON.parse(json)
      const importedAt = new Date()
      const imported = normalizeLearnerState(parsed, TOPICS, importedAt)
      setNow(importedAt.getTime())
      setPreserveInvalidSave(false)
      setState(imported)
      return true
    } catch (error) {
      if (!(error instanceof SyntaxError) && !(error instanceof TypeError)) throw error
      return false
    }
  }, [])

  const resetState = useCallback(() => {
    setPreserveInvalidSave(false)
    setState(emptyState(TOPICS))
  }, [])

  const coverage = useMemo(() => {
    const values = TOPICS.map((topic) => state.topics[topic.id]).filter(Boolean)
    return {
      total: TOPICS.length,
      started: values.filter((t) => t.state !== 'not-encountered').length,
      mastered: values.filter((t) => t.state === 'mastered').length,
    }
  }, [state.topics])

  // Only taught, current lessons can be practised, so only they count as ready for recall.
  const dueRetrievalQueue = state.retrievalQueue.filter((item) => isRetrievalDue(item, now) && UNIT_BY_ID.has(item.topicId) && hasLearnedTopic(state, item.topicId))
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
    completeLessonCheck,
    exportState,
    importState,
    resetState,
    saveStudyProgress,
    pauseStudy,
    setSessionMinutes,
    storageStatus,
    setActiveProject,
    saveWorkspace,
    activateStudy,
    startReviewSession,
    resumeReviewSession,
    saveReviewResponse,
    commitReviewAnswer,
    advanceReviewSession,
  }

  return <LearnerStateContext.Provider value={value}>{children}</LearnerStateContext.Provider>
}

export function useLearnerState(): LearnerStateApi {
  const ctx = useContext(LearnerStateContext)
  if (!ctx) throw new Error('useLearnerState must be used within LearnerStateProvider')
  return ctx
}
