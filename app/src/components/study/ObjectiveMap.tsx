import { CaretDown } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { UNIT_BY_ID } from '@/data/curriculum'
import { getSource } from '@/data/curriculum/catalog'
import { OBJECTIVE_DOMAINS, OBJECTIVES, OFFICIAL_OUTLINE } from '@/data/objectives'
import { useLearnerState } from '@/lib/learner-state'
import { assessObjective, summarizeObjectives, type ObjectiveTeaching } from '@/lib/objective-coverage'

const COVERAGE = OBJECTIVES.map((record) => assessObjective(record, UNIT_BY_ID, OFFICIAL_OUTLINE.reviewer))
const SUMMARY = summarizeObjectives(COVERAGE)
const LABEL: Record<ObjectiveTeaching, string> = { taught: 'Taught', partial: 'Partly taught', 'not-taught': 'Not taught here' }
const EFFECTIVE = new Date(`${OFFICIAL_OUTLINE.effective}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })

export function ObjectiveMap() {
  const { state } = useLearnerState()
  const outline = getSource(OFFICIAL_OUTLINE.corpusSourceId)
  return (
    <div className="flex flex-col gap-6">
      <div className="objective-summary">
        <p>{SUMMARY.total} official objectives from the outline effective {EFFECTIVE}: {SUMMARY.taught} taught, {SUMMARY.partial} partly taught, and {SUMMARY.notTaught} not taught by this course.</p>
        <p>Taught means a lesson covers it, not that you have mastered it. Each gap names what your corpus does not cover yet. This mapping is editorial and has not been independently reviewed. <Link to={`/sources/${encodeURIComponent(outline.id)}`}>Read the outline in your source library</Link>.</p>
      </div>
      <div>
        {OBJECTIVE_DOMAINS.map(({ domain, weight }, index) => {
          const rows = COVERAGE.filter((item) => item.record.domain === domain)
          const count = (teaching: ObjectiveTeaching) => rows.filter((item) => item.teaching === teaching).length
          return (
            <details key={domain} className="domain-group" open={index === 0}>
              <summary>
                <span>{domain}</span>
                <span className="domain-summary">{weight} of the exam · {count('taught')} taught · {count('partial')} partly · {count('not-taught')} not taught <CaretDown size={15} aria-hidden /></span>
              </summary>
              <ul className="objective-list">
                {rows.map(({ record, units, teaching }) => {
                  const explored = units.filter((unit) => state.study.units[unit.id]?.completedAt).length
                  const related = (record.related ?? []).flatMap((id) => UNIT_BY_ID.get(id) ?? [])
                  const links = units.length ? units : related
                  return (
                    <li key={record.id} className="objective-row">
                      <span className="objective-id">{record.id}</span>
                      <div className="min-w-0">
                        <p className="unit-name">{record.objective}</p>
                        {links.length > 0 && (
                          <p className="objective-links">
                            <span>{units.length ? 'Taught in' : 'Closest lessons'}</span>
                            {links.map((unit) => <Link key={unit.id} to={`/learn/${unit.id}`}>{unit.title}</Link>)}
                          </p>
                        )}
                        {record.gaps?.map((gap) => (
                          <p key={gap.note} className="objective-gap"><strong>{gap.kind === 'source' ? 'Not in your corpus.' : 'No lesson yet.'}</strong> {gap.note}</p>
                        ))}
                      </div>
                      <span className={`objective-status status-${teaching}`}>
                        <strong>{LABEL[teaching]}</strong>
                        {units.length > 0 && <span>{explored} of {units.length} explored</span>}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </details>
          )
        })}
      </div>
    </div>
  )
}
