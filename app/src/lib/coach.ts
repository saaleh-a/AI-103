import { hasLearnedTopic } from './study-state.ts'
import { isRetrievalDue } from './retrieval.ts'
import type { CourseUnit } from '../data/curriculum/schema'
import type { BuildProject } from '../data/projects'
import type { LearnerState, StudyActivity } from './types'

export interface CoachingAction {
  kind: 'resume' | 'repair' | 'retrieve' | 'fieldwork' | 'learn'
  unitId: string
  projectId: string
  reason: string
  activity?: StudyActivity
}

function repairReviewNeeded(state: Pick<LearnerState, 'topics' | 'study' | 'sessionLog'>, unitId: string): boolean {
  const reviewed = state.study.units[unitId]?.repairReviewedAt
  if (!reviewed) return true
  const evidence = state.topics[unitId]?.lastEvidenceAt
  const answer = state.sessionLog.findLast((entry) => entry.topicId === unitId && entry.timestamp === evidence)
  if (answer?.correct) {
    const miss = state.sessionLog.findLast((entry) => entry.topicId === unitId && !entry.correct && entry.evidenceKind !== 'diagnostic')
    return Boolean(miss && Date.parse(miss.timestamp) > Date.parse(reviewed))
  }
  return Boolean(evidence && Date.parse(evidence) > Date.parse(reviewed))
}

export function chooseCoachingAction(
  units: readonly CourseUnit[],
  projects: readonly BuildProject[],
  state: Pick<LearnerState, 'topics' | 'study' | 'retrievalQueue' | 'sessionLog'>,
  now = Date.now(),
): CoachingAction | null {
  const byId = new Map(units.map((unit) => [unit.id, unit]))
  const project = projects.find((item) => item.id === state.study.activeProjectId) ?? projects[0]
  if (!project) return null
  const relevant = new Set(project.milestones.flatMap((milestone) => milestone.unitIds))
  for (const unit of [...units].reverse()) {
    if (relevant.has(unit.id)) unit.prerequisites.forEach((id) => relevant.add(id))
  }
  const activity = state.study.activeActivity
  if (activity === 'practice' || activity === 'exam') {
    const session = state.study[activity]
    const item = session?.items[session.index]
    if (session && !session.completedAt && item && byId.has(item.topicId)) {
      return { kind: 'resume', activity, unitId: item.topicId, projectId: project.id, reason: `Your ${activity === 'exam' ? 'exam rehearsal' : 'recall round'} is saved at prompt ${session.index + 1} of ${session.items.length}, including your response and any feedback already shown.` }
    }
  }
  const active = byId.get(state.study.activeUnitId ?? '')
  if (active && activity === 'repair') {
    if (repairReviewNeeded(state, active.id)) {
      return { kind: 'resume', activity, unitId: active.id, projectId: project.id, reason: 'Return to the decision boundary you were repairing. Your note is saved; reading feedback has not been counted as mastery.' }
    }
  }
  if (active && activity !== 'practice' && activity !== 'exam' && activity !== 'repair' && state.study.units[active.id]?.stage !== 'complete') {
    return { kind: 'resume', activity: activity ?? 'lesson', unitId: active.id, projectId: project.id, reason: 'You left this task in progress. Pick up at the same explanation or portal checkpoint, with your notes intact.' }
  }
  const repair = units.find((unit) => {
    if (!relevant.has(unit.id) || state.topics[unit.id]?.state !== 'needs-repair' || !hasLearnedTopic(state, unit.id)) return false
    return repairReviewNeeded(state, unit.id)
  })
  if (repair) return { kind: 'repair', unitId: repair.id, projectId: project.id, reason: 'Your recorded answer flagged this decision boundary. Repair that connection before piling on another new concept.' }
  const due = state.retrievalQueue.find((entry) => byId.has(entry.topicId) && hasLearnedTopic(state, entry.topicId) && isRetrievalDue(entry, now))
  if (due) return { kind: 'retrieve', unitId: due.topicId, projectId: project.id, reason: 'This previously taught idea is due for retrieval. Bring it back before relying on it in the next build step.' }

  const orderedProjects = [project, ...projects.filter((item) => item.id !== project.id)]
  for (const candidate of orderedProjects) {
    const candidateUnits = candidate.milestones.flatMap((milestone) => milestone.unitIds).map((id) => byId.get(id)).filter((unit) => unit !== undefined)
    if (state.study.sessionMinutes === 25) {
      const unfinishedLab = candidateUnits.find((unit) => state.study.units[unit.id]?.completedAt && !state.study.units[unit.id]?.portalCompletedAt)
      if (unfinishedLab) return { kind: 'fieldwork', unitId: unfinishedLab.id, projectId: candidate.id, reason: 'You have explored the concept but have not recorded its Azure fieldwork. You chose a longer session, so the next useful step is to try it.' }
    }
    const next = candidateUnits.find((unit) => !state.study.units[unit.id]?.completedAt)
    if (!next) continue
    const visited = new Set<string>()
    function prerequisiteFirst(unit: CourseUnit): CourseUnit {
      if (visited.has(unit.id)) throw new Error('Circular prerequisite in coaching path.')
      visited.add(unit.id)
      const missing = unit.prerequisites.map((id) => {
        const prerequisite = byId.get(id)
        if (!prerequisite) throw new Error(`Unknown prerequisite ${id}.`)
        return prerequisite
      }).find((required) => !hasLearnedTopic(state, required.id))
      return missing ? prerequisiteFirst(missing) : unit
    }
    const ready = prerequisiteFirst(next)
    return { kind: 'learn', unitId: ready.id, projectId: candidate.id, reason: ready.id === next.id
      ? 'This is the next missing connection in your build. Learn the mechanism, then use it in the portal.'
      : `Before "${next.title}", this prerequisite makes the next decision understandable. You will return to the build afterward.` }
  }
  return null
}

export function coachingHref(action: CoachingAction): string {
  if (action.kind === 'resume') {
    if (action.activity === 'practice' || action.activity === 'exam') return `/${action.activity}`
    if (action.activity === 'repair') return `/repair/${action.unitId}`
    if (action.activity === 'fieldwork') return `/labs/${action.unitId}`
  }
  if (action.kind === 'repair') return `/repair/${action.unitId}`
  if (action.kind === 'retrieve') return `/practice?topic=${action.unitId}`
  if (action.kind === 'fieldwork') return `/labs/${action.unitId}`
  return `/learn/${action.unitId}`
}
