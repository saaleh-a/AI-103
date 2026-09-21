import type { LearnerState, MasteryState, ReviewItem, ReviewResponse, ReviewSessionProgress, StudyActivity, StudyState, StudyUnitProgress } from './types'

export function emptyStudyState(): StudyState {
  return { version: 1, units: {}, sessionMinutes: 15, activeUnitId: undefined, activeActivity: undefined, practice: undefined, exam: undefined, activeProjectId: undefined, pausedAt: undefined, workspace: { resourceGroup: '', foundryProject: '', deployment: '' } }
}

export function emptyStudyUnit(): StudyUnitProgress {
  return {
    stage: 'learn',
    lessonStep: 0,
    lessonComplete: false,
    labStep: 0,
    portalChecks: [],
    portalNotes: [],
    labSkipped: false,
    reflection: '',
    recallRevealed: false,
    draft: {},
    checkAssisted: false,
    checkAnswerId: undefined,
    completedAt: undefined,
    portalCompletedAt: undefined,
    repairReviewedAt: undefined,
    repairNote: '',
  }
}

function record(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

function invalid(field: string): never {
  throw new TypeError(`Invalid learner state: ${field} is not valid study progress.`)
}

function text(value: unknown, field: string): string {
  if (typeof value !== 'string' || value.length > 20_000) invalid(field)
  return value
}

function date(value: unknown, field: string): string | undefined {
  if (value === undefined) return undefined
  if (typeof value !== 'string' || !Number.isFinite(Date.parse(value))) invalid(field)
  return value
}

function index(value: unknown, field: string): number {
  if (typeof value !== 'number' || !Number.isSafeInteger(value) || value < 0 || value > 1_000) invalid(field)
  return value
}

function activity(value: unknown): StudyActivity | undefined {
  if (value === undefined || value === 'lesson' || value === 'fieldwork' || value === 'repair' || value === 'practice' || value === 'exam') return value
  return invalid('active activity')
}

function normalizeReview(value: unknown, mode: 'practice' | 'exam'): ReviewSessionProgress | undefined {
  if (value === undefined) return undefined
  if (!record(value) || !Array.isArray(value.items) || !Array.isArray(value.responses)) invalid(`${mode} session`)
  const id = text(value.id, 'review session ID')
  if (!id.trim() || value.items.length < 1 || value.items.length > 8 || value.items.length !== value.responses.length) invalid('review queue')
  const requestedTopicId = value.requestedTopicId === undefined ? undefined : text(value.requestedTopicId, 'review topic')
  const items = value.items.map((item): ReviewItem => {
    if (!record(item) || (item.kind !== 'flashcard' && item.kind !== 'mcq') || (mode === 'exam' && item.kind !== 'mcq')) invalid('review item')
    const topicId = text(item.topicId, 'review topic')
    const itemId = text(item.id, 'review item ID')
    if (!topicId.trim() || itemId !== `${item.kind === 'mcq' ? 'scenario' : 'recall'}-${topicId}`) invalid('review item ID')
    if (requestedTopicId !== undefined && requestedTopicId !== topicId) invalid('targeted review queue')
    return { kind: item.kind, topicId, id: itemId }
  })
  if (new Set(items.map((item) => item.id)).size !== items.length) invalid('duplicate review item')
  const current = index(value.index, 'review position')
  if (current > items.length) invalid('review position')
  const responses = value.responses.map((response, position): ReviewResponse => {
    if (!record(response) || typeof response.revealed !== 'boolean' || typeof response.uncertain !== 'boolean') invalid('review response')
    const outcome = response.outcome
    if (outcome !== undefined && outcome !== 'correct' && outcome !== 'incorrect' && outcome !== 'unsure') invalid('review outcome')
    const presentedAt = date(response.presentedAt, 'question presentation')
    const committedAt = date(response.committedAt, 'review answer time')
    const selectedOptionId = response.selectedOptionId === undefined ? undefined : text(response.selectedOptionId, 'review choice')
    if (position <= current && !presentedAt) invalid('question presentation')
    if (Boolean(committedAt) !== Boolean(outcome) || (position < current && !outcome) || (position > current && outcome)) invalid('review answer order')
    if (committedAt && (!presentedAt || Date.parse(committedAt) < Date.parse(presentedAt))) invalid('review answer time')
    if (outcome && items[position].kind === 'mcq' && !selectedOptionId) invalid('review choice')
    if (outcome && items[position].kind === 'flashcard' && !response.revealed) invalid('recall reveal')
    if (response.uncertain && outcome && outcome !== 'unsure') invalid('uncertain answer')
    return {
      reflection: text(response.reflection, 'review reflection'),
      revealed: response.revealed,
      uncertain: response.uncertain,
      presentedAt,
      selectedOptionId,
      outcome,
      committedAt,
    }
  })
  const completedAt = date(value.completedAt, 'review completion')
  if ((current === items.length) !== Boolean(completedAt)) invalid('review completion')
  return { id, requestedTopicId, items, responses, index: current, completedAt }
}

export function normalizeStudyState(value: unknown): StudyState {
  if (value === undefined) return emptyStudyState()
  if (!record(value) || value.version !== 1 || !record(value.units)) invalid('study')
  if (value.sessionMinutes !== 5 && value.sessionMinutes !== 15 && value.sessionMinutes !== 25) invalid('study.sessionMinutes')
  const units = Object.entries(value.units).map(([id, saved]): [string, StudyUnitProgress] => {
    if (!record(saved)) invalid(`study.units.${id}`)
    const stage = saved.stage
    if (stage !== 'learn' && stage !== 'lab' && stage !== 'recall' && stage !== 'complete') invalid('study stage')
    if (!Array.isArray(saved.portalChecks) || !saved.portalChecks.every((check) => typeof check === 'boolean')) invalid('portal checkpoints')
    if (!Array.isArray(saved.portalNotes)) invalid('portal notes')
    if (!record(saved.draft)) invalid('lab draft')
    if (typeof saved.lessonComplete !== 'boolean' || typeof saved.labSkipped !== 'boolean' || typeof saved.checkAssisted !== 'boolean') invalid('study flags')
    if (saved.recallRevealed !== undefined && typeof saved.recallRevealed !== 'boolean') invalid('recall state')
    return [id, {
      stage,
      lessonStep: index(saved.lessonStep, 'lesson step'),
      lessonComplete: saved.lessonComplete,
      labStep: index(saved.labStep, 'lab step'),
      portalChecks: [...saved.portalChecks],
      portalNotes: saved.portalNotes.map((note) => text(note, 'portal note')),
      labSkipped: saved.labSkipped,
      reflection: text(saved.reflection, 'reflection'),
      recallRevealed: saved.recallRevealed ?? false,
      draft: Object.fromEntries(Object.entries(saved.draft).map(([key, entry]) => [key, text(entry, 'lab choice')])),
      checkAnswerId: saved.checkAnswerId === undefined ? undefined : text(saved.checkAnswerId, 'check answer'),
      checkAssisted: saved.checkAssisted,
      completedAt: date(saved.completedAt, 'lesson completion'),
      portalCompletedAt: date(saved.portalCompletedAt, 'portal completion'),
      repairReviewedAt: date(saved.repairReviewedAt, 'repair review'),
      repairNote: saved.repairNote === undefined ? '' : text(saved.repairNote, 'repair note'),
    }]
  })
  const workspace = value.workspace === undefined ? emptyStudyState().workspace : value.workspace
  if (!record(workspace)) invalid('project workspace')
  return {
    version: 1,
    units: Object.fromEntries(units),
    activeUnitId: value.activeUnitId === undefined ? undefined : text(value.activeUnitId, 'active unit'),
    activeActivity: activity(value.activeActivity),
    practice: normalizeReview(value.practice, 'practice'),
    exam: normalizeReview(value.exam, 'exam'),
    pausedAt: date(value.pausedAt, 'pause time'),
    sessionMinutes: value.sessionMinutes,
    activeProjectId: value.activeProjectId === undefined ? undefined : text(value.activeProjectId, 'active project'),
    workspace: {
      resourceGroup: text(workspace.resourceGroup, 'resource group name'),
      foundryProject: text(workspace.foundryProject, 'Foundry project name'),
      deployment: text(workspace.deployment, 'model deployment name'),
    },
  }
}

type UnitReference = { id: string; prerequisites: readonly string[] }

export function hasLearnedTopic(state: Pick<LearnerState, 'study' | 'topics'>, id: string): boolean {
  return state.study.units[id]?.lessonComplete === true
    || ['understood', 'retrievable', 'discriminable', 'applicable', 'mastered'].includes(state.topics[id]?.state ?? 'not-encountered')
}

export function missingPrerequisites(unit: UnitReference, state: Pick<LearnerState, 'study' | 'topics'>): string[] {
  return unit.prerequisites.filter((id) => !hasLearnedTopic(state, id))
}

export function selectStudyUnit(
  units: readonly UnitReference[],
  state: Pick<LearnerState, 'study' | 'topics'>,
): string | null {
  const active = units.find((unit) => unit.id === state.study.activeUnitId)
  if (active && state.study.units[active.id]?.stage !== 'complete') return active.id
  const pending = units.filter((unit) => state.study.units[unit.id]?.stage !== 'complete')
  const ready = pending.filter((unit) => missingPrerequisites(unit, state).length === 0)
  return (ready.find((unit) => !hasLearnedTopic(state, unit.id)) ?? ready[0] ?? pending[0])?.id ?? null
}

export function updateStudyUnit(state: StudyState, id: string, patch: Partial<StudyUnitProgress>): StudyState {
  if (!id.trim()) throw new TypeError('A study unit ID is required.')
  return {
    ...state,
    activeUnitId: id,
    activeActivity: state.activeUnitId === id && (state.activeActivity === 'fieldwork' || state.activeActivity === 'repair') ? state.activeActivity : 'lesson',
    pausedAt: undefined,
    units: { ...state.units, [id]: { ...emptyStudyUnit(), ...state.units[id], ...patch } },
  }
}

export function practiceEvidenceState(current: MasteryState, kind: 'flashcard' | 'mcq', correct: boolean): MasteryState {
  if (!correct) return current === 'not-encountered' ? 'introduced' : 'needs-repair'
  if (kind === 'flashcard' || current === 'needs-repair') return current
  return current === 'introduced' ? 'understood' : current
}
