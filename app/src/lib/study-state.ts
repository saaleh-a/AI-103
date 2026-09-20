import type { LearnerState, MasteryState, StudyState, StudyUnitProgress } from './types'

export function emptyStudyState(): StudyState {
  return { version: 1, units: {}, sessionMinutes: 15, activeUnitId: undefined, activeProjectId: undefined, pausedAt: undefined, workspace: { resourceGroup: '', foundryProject: '', deployment: '' } }
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
    pausedAt: undefined,
    units: { ...state.units, [id]: { ...emptyStudyUnit(), ...state.units[id], ...patch } },
  }
}

export function practiceEvidenceState(current: MasteryState, kind: 'flashcard' | 'mcq', correct: boolean): MasteryState {
  if (!correct) return current === 'not-encountered' ? 'introduced' : 'needs-repair'
  if (current === 'mastered') return current
  if (kind === 'flashcard') {
    return ['discriminable', 'applicable'].includes(current) ? current : 'retrievable'
  }
  return 'applicable'
}
