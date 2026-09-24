import { ArrowRight, BookOpen } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Bar } from '@/components/charts/bar'
import { BarChart } from '@/components/charts/bar-chart'
import { BarXAxis } from '@/components/charts/bar-x-axis'
import { Grid } from '@/components/charts/grid'
import { COURSE_UNITS } from '@/data/curriculum'
import { CORPUS_SOURCES } from '@/data/curriculum/catalog'
import { CLUSTER_LABELS, CLUSTER_ORDER } from '@/data/topics'
import { useLearnerState } from '@/lib/learner-state'
import { useUIPrefs } from '@/lib/ui-prefs'

const SHORT_LABELS = ['Models', 'Agents', 'Search', 'Docs', 'Text', 'Voice']

export default function Progress() {
  const { state, coverage, dueRetrievalQueue } = useLearnerState()
  const { prefs } = useUIPrefs()
  const explored = COURSE_UNITS.filter((unit) => state.study.units[unit.id]?.completedAt)
  const fieldwork = COURSE_UNITS.filter((unit) => state.study.units[unit.id]?.portalCompletedAt)
  const rows = CLUSTER_ORDER.map((cluster, index) => {
    const units = COURSE_UNITS.filter((unit) => unit.cluster === cluster)
    const complete = units.filter((unit) => state.study.units[unit.id]?.completedAt).length
    return {
      cluster,
      name: SHORT_LABELS[index],
      explored: complete,
      remaining: units.length - complete,
      total: units.length,
      fieldwork: units.filter((unit) => state.study.units[unit.id]?.portalCompletedAt).length,
      mastered: units.filter((unit) => state.topics[unit.id]?.state === 'mastered').length,
    }
  })

  return (
    <div className="studio-page">
      <div><h1 className="page-heading">See what is taking root.</h1><p className="page-description">Three different kinds of progress: lessons explored, things you tried in Azure, and knowledge supported by mastery evidence. None stands in for the others.</p></div>
      <div className="progress-overview">
        <section>
          <h2>{explored.length ? 'A little more connected than before.' : 'Your first lesson is the starting point.'}</h2>
          <p>{explored.length ? 'A finished lesson is useful exposure. Reconstructing the idea later, applying it, and explaining why are the next evidence to look for.' : 'There is no invented readiness score here. Learn an idea, use it, and come back to it later. Your progress will reflect those actions.'}</p>
          <Link className="text-link mt-3" to={dueRetrievalQueue.length ? '/practice' : '/'}>{dueRetrievalQueue.length ? `${dueRetrievalQueue.length} topic${dueRetrievalQueue.length === 1 ? '' : 's'} ready for recall` : 'Go to your next step'}<ArrowRight size={15} aria-hidden /></Link>
        </section>
        <dl className="progress-summary">
          <div><dt>Lessons explored</dt><dd>{explored.length} / {COURSE_UNITS.length}</dd></div>
          <div><dt>Azure walkthroughs you recorded</dt><dd>{fieldwork.length} / {COURSE_UNITS.length}</dd></div>
          <div><dt>Topics with a mastered state</dt><dd>{coverage.mastered} / {coverage.total}</dd></div>
          <div><dt>Corpus sources mapped into the course</dt><dd>{CORPUS_SOURCES.length} / {CORPUS_SOURCES.length}</dd></div>
        </dl>
      </div>

      <section className="progress-chart" aria-labelledby="course-chart-title">
        <h2 id="course-chart-title">Where you have spent your attention</h2>
        <p>Green is explored lessons; the lighter part is still ahead. These tracks are not exam-domain weights.</p>
        <div aria-hidden="true">
          <BarChart data={rows} xDataKey="name" stacked aspectRatio="2.8 / 1" margin={{ top: 20, left: 14, right: 14, bottom: 38 }} animationDuration={prefs.motion === 'off' ? 0 : 350} enterTransition={{ duration: prefs.motion === 'off' ? 0 : 0.2 }}>
            <Grid horizontal />
            <Bar dataKey="explored" fill="var(--primary)" animate={prefs.motion !== 'off'} animationType="fade" lineCap={3} />
            <Bar dataKey="remaining" fill="var(--chart-4)" animate={prefs.motion !== 'off'} animationType="fade" lineCap={3} />
            <BarXAxis />
          </BarChart>
        </div>
        <table className="progress-table">
          <caption className="sr-only">Equivalent course progress values, including self-reported Azure work and mastery states</caption>
          <thead><tr><th scope="col">Learning track</th><th scope="col">Explored</th><th scope="col">Azure work</th><th scope="col">Mastered</th></tr></thead>
          <tbody>{rows.map((row) => <tr key={row.cluster}><th scope="row"><Link className="hover:underline" to={`/learn?track=${row.cluster}`}>{CLUSTER_LABELS[row.cluster]}</Link></th><td>{row.explored} / {row.total}</td><td>{row.fieldwork}</td><td>{row.mastered}</td></tr>)}</tbody>
        </table>
      </section>

      {fieldwork.length > 0 && <section>
        <div className="section-heading"><div><h2>Evidence from your own fieldwork</h2><p>Self-recorded observations. The site does not independently inspect Azure.</p></div><Link className="text-link" to="/settings">Export with your progress <ArrowRight size={14} aria-hidden /></Link></div>
        <div className="course-strip">{fieldwork.slice(-5).reverse().map((unit) => {
          const notes = state.study.units[unit.id].portalNotes.filter((note) => note.trim())
          return <Link key={unit.id} to={`/labs/${unit.id}`} className="source-row"><BookOpen size={20} aria-hidden /><span><span className="unit-name">{unit.lab.azure.title}</span><span className="unit-meta line-clamp-2">{notes.at(-1) ?? 'Walkthrough checkpoints recorded.'}</span></span><ArrowRight size={15} aria-hidden /></Link>
        })}</div>
      </section>}

      {(state.weaknesses.length > 0 || state.confusions.length > 0) && <section>
        <div className="section-heading"><h2>Connections worth repairing</h2></div>
        <ul className="flex flex-col gap-3 text-sm leading-7 text-muted-foreground">{[...state.weaknesses, ...state.confusions].map((note, index) => <li key={`${index}-${note}`}>{note}</li>)}</ul>
      </section>}
    </div>
  )
}
