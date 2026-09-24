import { ArrowRight, ArrowUpRight, Notebook } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { BUILD_PROJECTS, projectForUnit } from '@/data/projects'
import { UNIT_BY_ID } from '@/data/curriculum'
import { useLearnerState } from '@/lib/learner-state'

export function BuildContext({ unitId }: { unitId: string }) {
  const { state } = useLearnerState()
  const preferred = BUILD_PROJECTS.find((item) => item.id === state.study.activeProjectId)
  const project = preferred ?? projectForUnit(unitId)
  if (!project) return null
  const milestone = project.milestones.find((item) => item.unitIds.includes(unitId))
  return (
    <div className="build-context">
      <Link to={`/build/${project.id}`}>Your build: {project.title}<ArrowUpRight size={14} aria-hidden /></Link>
      <p>{milestone?.purpose ?? 'Your selected build stays in place while you work through this concept. Return to it when you are ready.'}</p>
    </div>
  )
}

export function BuildContinuity({ unitId }: { unitId: string }) {
  const { state, saveWorkspace } = useLearnerState()
  const previous = Object.entries(state.study.units).reverse().find(([id, progress]) => id !== unitId && progress.portalNotes.some((note) => note.trim()))
  const note = previous?.[1].portalNotes.findLast((value) => value.trim())
  const workspace = state.study.workspace
  const recorded = Object.values(workspace).some((value) => value.trim())
  return (
    <details className="build-continuity">
      <summary><Notebook size={16} aria-hidden />{recorded ? 'Your saved Azure setup & field notebook' : 'Keep your Azure setup between sessions'}</summary>
      <p className="field-note">Names only, not credentials. These are your recorded breadcrumbs, not a live resource inventory. Check that a resource still exists before reusing it.</p>
      <div className="workspace-fields">
        {([['resourceGroup', 'Resource group'], ['foundryProject', 'Foundry project'], ['deployment', 'Model deployment']] as const).map(([key, label]) => <div key={key}>
          <label htmlFor={`workspace-${key}`} className="field-label">{label}</label>
          <input className="settings-input" id={`workspace-${key}`} maxLength={120} value={workspace[key]} onChange={(event) => saveWorkspace({ [key]: event.target.value })} placeholder="Optional: the name you actually used" />
        </div>)}
      </div>
      {recorded && <p className="field-note mt-3">If an exercise asks you to create a resource again, check whether your dedicated existing lab resource meets its requirements. Do not duplicate it automatically, and do not reuse shared production resources.</p>}
      {previous && note && <div className="previous-observation"><strong>From your field notebook</strong><p>{note}</p><Link className="text-link" to={`/labs/${previous[0]}`}>{UNIT_BY_ID.get(previous[0])?.title ?? 'Earlier fieldwork'}<ArrowRight size={13} aria-hidden /></Link></div>}
    </details>
  )
}
