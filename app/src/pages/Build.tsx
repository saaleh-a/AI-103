import { ArrowRight, ArrowUpRight, Check, DownloadSimple, Notebook } from '@phosphor-icons/react'
import { useEffect } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { BuildMap } from '@/components/study/BuildMap'
import { BuildContinuity } from '@/components/study/BuildContext'
import { COURSE_UNITS, UNIT_BY_ID } from '@/data/curriculum'
import { BUILD_PROJECTS, projectUnitIds } from '@/data/projects'
import { chooseCoachingAction, coachingHref } from '@/lib/coach'
import { downloadText } from '@/lib/download'
import { useLearnerState } from '@/lib/learner-state'

export default function Build() {
  const { projectId } = useParams()
  const { state, setActiveProject } = useLearnerState()
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    if (location.hash !== '#field-notebook') return
    const frame = requestAnimationFrame(() => {
      const notebook = document.getElementById('field-notebook')
      notebook?.scrollIntoView({ block: 'start', behavior: 'instant' })
      notebook?.focus({ preventScroll: true })
    })
    return () => cancelAnimationFrame(frame)
  }, [location.hash, location.key])
  const project = BUILD_PROJECTS.find((item) => item.id === (projectId ?? state.study.activeProjectId)) ?? (!projectId ? BUILD_PROJECTS[0] : undefined)
  if (!project) return <div className="empty-state"><h1 className="page-heading">That build is not in this workspace.</h1><Link className="text-link" to="/build">Open your current build <ArrowRight size={16} aria-hidden /></Link></div>
  const ids = projectUnitIds(project)
  const notes = ids.flatMap((id) => (state.study.units[id]?.portalNotes ?? []).map((note, index) => ({ id, index, note })).filter((item) => item.note.trim()))
  const action = chooseCoachingAction(COURSE_UNITS, BUILD_PROJECTS, { ...state, study: { ...state.study, activeProjectId: project.id, activeUnitId: undefined } })
  const selected = (state.study.activeProjectId ?? BUILD_PROJECTS[0].id) === project.id

  return (
    <div className="studio-page">
      <div className="search-field">
        <label htmlFor="build-choice">Your practice build</label>
        <select id="build-choice" className="settings-input mt-0" value={project.id} onChange={(event) => navigate(`/build/${event.target.value}`)}>{BUILD_PROJECTS.map((item) => <option value={item.id} key={item.id}>{item.title}</option>)}</select>
      </div>
      <div className="coach-overview">
        <section>
          <h1 className="page-heading">{project.title}</h1>
          <p className="page-description">{project.brief}</p>
          <div className="build-outcome"><h2>The thing you are aiming to make</h2><p>{project.outcome}</p></div>
          <div className="portal-actions">
            {!selected ? <button className="primary-button" type="button" onClick={() => { setActiveProject(project.id); navigate('/') }}>Make this my current build <ArrowRight size={16} aria-hidden /></button>
              : action && <Link className="primary-button" to={coachingHref(action)}>Take the next useful step <ArrowRight size={16} aria-hidden /></Link>}
          </div>
          <p className="field-note mt-4">Prerequisites are taught before dependent work. A build can be explored without claiming its Azure resources have been deployed.</p>
        </section>
        <BuildMap project={project} key={project.id} />
      </div>
      <section className="project-starter">
        <div><h2>{project.starter.label}</h2><p>Original practice material for this build, clearly labelled synthetic. Use source-exercise samples where a service needs a specific document, image, or training format.</p></div>
        <button className="secondary-button" type="button" onClick={() => downloadText(project.starter.filename, project.starter.content)}><DownloadSimple size={17} aria-hidden />Download practice material</button>
        <details className="hint-disclosure"><summary>Read the practice material before downloading</summary><pre className="whitespace-pre-wrap text-xs leading-7">{project.starter.content}</pre></details>
      </section>
      <section>
        <div className="section-heading"><div><h2>Connections in this build</h2><p>The output matters. Concepts support it; ticking them off is not a deployment.</p></div></div>
        {project.milestones.map((milestone, index) => <details className="domain-group" key={milestone.title} open={index === 0}>
          <summary><span>{milestone.title}</span><ArrowUpRight size={17} aria-hidden /></summary>
          <p className="text-sm leading-7 text-muted-foreground mb-4">{milestone.purpose}</p>
          <div className="inline-note mb-4"><p><strong>Look for this evidence:</strong> {milestone.evidence}</p></div>
          <div className="unit-list">{milestone.unitIds.map((id) => {
            const unit = UNIT_BY_ID.get(id)
            if (!unit) throw new Error(`Build refers to missing unit ${id}.`)
            const progress = state.study.units[id]
            return <Link className="unit-row" key={id} to={`/learn/${id}`}><span className={`unit-marker${progress?.completedAt ? ' completed' : ''}`}>{progress?.completedAt ? <Check size={14} aria-hidden /> : <Notebook size={13} aria-hidden />}</span><span><span className="unit-name">{unit.title}</span><span className="unit-meta">{progress?.portalCompletedAt ? 'Your portal observations are recorded.' : progress?.completedAt ? 'Concept explored. Azure fieldwork is still available.' : unit.summary}</span></span><span className="unit-state">{unit.minutes} min concept</span><ArrowRight size={15} aria-hidden /></Link>
          })}</div>
        </details>)}
      </section>
      <section>
        <div className="section-heading"><div><h2>Change the requirement.</h2><p>This is where the build stops being a copied walkthrough.</p></div></div>
        <p className="text-sm leading-8 max-w-3xl">{project.challenge}</p>
        <p className="field-note mt-3">Try this after the relevant concepts and exercise. Record what changed in your portal field notes; the app will not claim to have assessed a run it cannot see.</p>
      </section>
      <section id="field-notebook" tabIndex={-1} aria-labelledby="field-notebook-title">
        <div className="section-heading"><div><h2 id="field-notebook-title">Your field notebook</h2><p>Actual notes you entered, not generated success reports.</p></div><Link className="text-link" to="/settings">Export with your progress <ArrowRight size={14} aria-hidden /></Link></div>
        <BuildContinuity unitId="" />
        {notes.length ? <div className="notebook-entries">{notes.map(({ id, index, note }) => <article key={`${id}-${index}`}><Link className="text-link" to={`/labs/${id}`}>{UNIT_BY_ID.get(id)?.title} · checkpoint {index + 1}<ArrowUpRight size={13} aria-hidden /></Link><p>{note}</p></article>)}</div>
          : <p className="page-description">No observations yet. The first portal checkpoint has space to record a result, a setting change, or a blocker. It will appear here automatically.</p>}
      </section>
    </div>
  )
}
