import { ArrowRight, ArrowUpRight, Clock, Pause, Play } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { BuildMap } from '@/components/study/BuildMap'
import { COURSE_UNITS, UNIT_BY_ID } from '@/data/curriculum'
import { CORPUS_SOURCES } from '@/data/curriculum/catalog'
import { BUILD_PROJECTS, projectUnitIds } from '@/data/projects'
import { chooseCoachingAction, coachingHref } from '@/lib/coach'
import { useLearnerState } from '@/lib/learner-state'
import { useUIPrefs } from '@/lib/ui-prefs'

const ACTION_LABELS = {
  resume: 'Resume where you stopped',
  repair: 'Untangle this decision',
  retrieve: 'Bring the idea back',
  fieldwork: 'Continue in Azure',
  learn: 'Work on the next task',
}

export default function Home() {
  const { state, setSessionMinutes, storageStatus, setActiveProject } = useLearnerState()
  const { prefs } = useUIPrefs()
  const action = chooseCoachingAction(COURSE_UNITS, BUILD_PROJECTS, state)
  const unit = UNIT_BY_ID.get(action?.unitId ?? '')
  const project = BUILD_PROJECTS.find((item) => item.id === (action?.projectId ?? state.study.activeProjectId)) ?? BUILD_PROJECTS[0]
  const minutes = state.study.sessionMinutes
  const notes = projectUnitIds(project).flatMap((id) => (state.study.units[id]?.portalNotes ?? [])
    .map((note, index) => ({ id, index, note })).filter((entry) => entry.note.trim()))
  const observation = notes.at(-1)

  return (
    <div className="studio-page">
      {state.study.pausedAt && <div className="inline-note" role="status"><Pause size={19} aria-hidden /><p><strong>Done for now.</strong> {storageStatus === 'saved' ? 'Your place is saved. The next session starts from your work, not from the top of a module.' : 'Your work is kept in this tab. Export a backup before closing it.'}</p></div>}
      <div className="home-toolbar">
        <div className="time-choice" role="group" aria-label="Session size"><span className="mr-1">I have about</span>{([5, 15, 25] as const).map((value) => <button key={value} type="button" aria-pressed={minutes === value} onClick={() => setSessionMinutes(value)}>{value} min</button>)}</div>
      </div>

      <div className="coach-overview">
        <section className="coach-brief">
          <h1 className="page-heading">{project.title}</h1>
          <p className="page-description">{project.brief}</p>
          {unit && action ? <div className="coach-next">
            <h2>{unit.title}</h2>
            <p>{action.reason}</p>
            <div className="lesson-metadata mt-4"><span><Clock size={15} aria-hidden />{action.kind === 'fieldwork' ? `About ${unit.lab.azure.minutes} min in Azure` : minutes === 5 ? 'One small teaching step' : `About ${unit.minutes} min for the concept`}</span></div>
            <div className="home-start mt-4">
              <Link className="primary-button" to={coachingHref(action)} onClick={() => setActiveProject(action.projectId)}><Play size={15} weight="fill" aria-hidden />{ACTION_LABELS[action.kind]}<ArrowRight size={16} aria-hidden /></Link>
              <Link className="text-link" to={`/build/${project.id}`}>See the build</Link>
            </div>
            {action.kind === 'fieldwork' && <button className="text-link mt-2" type="button" onClick={() => setSessionMinutes(15)}>Not using Azure today - choose a short learning task</button>}
          </div> : <div className="coach-next">
            <h2>Reconnect what you have built.</h2><p>The authored path is explored. Look through your observations and return to the decisions you want to explain without notes.</p><Link className="primary-button mt-5" to="/practice">Start a short recall session <ArrowRight size={16} aria-hidden /></Link>
          </div>}
          <p className="field-note mt-5">{minutes === 5 ? 'A single idea is enough today. Save after any teaching step; the portal can wait.' : 'The recommendation uses your saved position, repair flags, review schedule, and prerequisites. It does not guess what happened in your Azure account.'}</p>
        </section>
        {!prefs.lowSpoons && <BuildMap project={project} key={project.id} />}
      </div>

      {!prefs.lowSpoons && <div className="build-session-bottom">
        <section>
          <h2>Your work carries forward.</h2>
          <p>{notes.length ? 'Keep the evidence you actually observed, including things that did not work. It belongs to the build, not a disposable lesson checklist.' : 'Record the result you see in Azure, the setting that changed it, or the error you hit. Those notes and your resource names stay with you between tasks.'}</p>
          {observation && <blockquote><p>{observation.note}</p><Link to={`/labs/${observation.id}`} className="note-attribution">{UNIT_BY_ID.get(observation.id)?.title} · checkpoint {observation.index + 1}</Link></blockquote>}
          <Link className="text-link" to={`/build/${project.id}#field-notebook`}>Open your field notebook <ArrowRight size={15} aria-hidden /></Link>
        </section>
        <section>
          <h2>The corpus is the reference, not the itinerary.</h2>
          <p>All {CORPUS_SOURCES.length} source documents feed {COURSE_UNITS.length} concepts across {BUILD_PROJECTS.length} practice builds. You can still inspect every source and jump to a topic.</p>
          <div className="flex flex-wrap gap-5"><Link className="text-link" to="/learn">Course coverage <ArrowUpRight size={15} aria-hidden /></Link><Link className="text-link" to="/sources">Original sources <ArrowUpRight size={15} aria-hidden /></Link></div>
        </section>
      </div>}
    </div>
  )
}
