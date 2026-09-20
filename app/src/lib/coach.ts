import { hasLearnedTopic } from './study-state.ts'
import { isRetrievalDue } from './retrieval.ts'
import type { CourseUnit } from '../data/curriculum/schema'
import type { BuildProject } from '../data/projects'
import type { LearnerState } from './types'

export interface CoachingAction {
  kind: 'resume' | 'repair' | 'retrieve' | 'fieldwork' | 'learn'
  unitId: string
  projectId: string
  reason: string
}

export function chooseCoachingAction(
  units: readonly CourseUnit[],
  projects: readonly BuildProject[],
  state: Pick<LearnerState, 'topics' | 'study' | 'retrievalQueue'>,
  now = Date.now(),
): CoachingAction | null {
  const byId = new Map(units.map((unit) => [unit.id, unit]))
  const project = projects.find((item) => item.id === state.study.activeProjectId) ?? projects[0]
  if (!project) return null
  const relevant = new Set(project.milestones.flatMap((milestone) => milestone.unitIds))
  for (const unit of [...units].reverse()) {
    if (relevant.has(unit.id)) unit.prerequisites.forEach((id) => relevant.add(id))
  }
  const owner = (id: string) => projects.find((item) => item.milestones.some((milestone) => milestone.unitIds.includes(id))) ?? project
  const active = byId.get(state.study.activeUnitId ?? '')
  if (active && state.study.units[active.id]?.stage !== 'complete') {
    return { kind: 'resume', unitId: active.id, projectId: owner(active.id).id, reason: 'You left this task in progress. Pick up at the same explanation or portal checkpoint, with your notes intact.' }
  }
  const repair = units.find((unit) => {
    if (!relevant.has(unit.id) || state.topics[unit.id]?.state !== 'needs-repair' || !hasLearnedTopic(state, unit.id)) return false
    const reviewed = state.study.units[unit.id]?.repairReviewedAt
    const evidence = state.topics[unit.id]?.lastEvidenceAt
    return !reviewed || Boolean(evidence && Date.parse(evidence) > Date.parse(reviewed))
  })
  if (repair) return { kind: 'repair', unitId: repair.id, projectId: owner(repair.id).id, reason: 'Your recorded answer flagged this decision boundary. Repair that connection before piling on another new concept.' }
  const due = state.retrievalQueue.find((entry) => byId.has(entry.topicId) && hasLearnedTopic(state, entry.topicId) && isRetrievalDue(entry, now))
  if (due) return { kind: 'retrieve', unitId: due.topicId, projectId: owner(due.topicId).id, reason: 'This previously taught idea is due for retrieval. Bring it back before relying on it in the next build step.' }

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
  if (action.kind === 'repair') return `/repair/${action.unitId}`
  if (action.kind === 'retrieve') return `/practice?topic=${action.unitId}`
  if (action.kind === 'fieldwork') return `/labs/${action.unitId}`
  return `/learn/${action.unitId}`
}
