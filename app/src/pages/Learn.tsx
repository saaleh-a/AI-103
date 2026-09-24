import { ArrowRight, Books, CaretDown, Check, MagnifyingGlass } from '@phosphor-icons/react'
import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { DomainIcon } from '@/components/DomainIcon'
import { ObjectiveMap } from '@/components/study/ObjectiveMap'
import { COURSE_UNITS } from '@/data/curriculum'
import { CORPUS_SOURCES, getSource } from '@/data/curriculum/catalog'
import { OBJECTIVES } from '@/data/objectives'
import { CLUSTER_LABELS, CLUSTER_ORDER } from '@/data/topics'
import { useLearnerState } from '@/lib/learner-state'
import { missingPrerequisites } from '@/lib/study-state'

export default function Learn() {
  const { state } = useLearnerState()
  const [search, setSearch] = useState('')
  const [params, setParams] = useSearchParams()
  const byObjective = params.get('view') === 'objectives'
  const selected = CLUSTER_ORDER.find((cluster) => cluster === params.get('track'))
  const query = search.trim().toLowerCase()
  const filtered = COURSE_UNITS.filter((unit) => (!selected || unit.cluster === selected)
    && (!query || `${unit.title} ${unit.summary} ${unit.sourceIds.map((id) => `${id} ${getSource(id).title}`).join(' ')}`.toLowerCase().includes(query)))

  return (
    <div className="studio-page">
      <div>
        <h1 className="page-heading">Your course map.</h1>
        <p className="page-description">Every part of your corpus has a place. Start with the foundations, follow a connection, or return to an idea that needs another pass.</p>
        <div className="lesson-metadata mt-5"><span>{COURSE_UNITS.length} authored lessons</span><span>{CORPUS_SOURCES.length} mapped sources</span><span>{byObjective ? `${OBJECTIVES.length} official exam objectives` : 'Six learning tracks, not exam weightings'}</span></div>
      </div>

      <div className="course-filter" role="group" aria-label="Organize the course">
        <button type="button" aria-pressed={!byObjective} onClick={() => setParams({})}>By learning track</button>
        <button type="button" aria-pressed={byObjective} onClick={() => setParams({ view: 'objectives' })}>By exam objective</button>
      </div>

      {byObjective ? <ObjectiveMap /> : <>
      <div className="course-toolbar">
        <div className="search-field">
          <label htmlFor="course-search">Find a concept or source</label>
          <div className="search-input-wrap"><MagnifyingGlass size={18} aria-hidden /><input id="course-search" type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Try: agents, PII, responsible AI..." /></div>
        </div>
        <Link to="/sources" className="text-link self-end"><Books size={17} aria-hidden />Browse original sources</Link>
      </div>

      <div className="course-filter" role="group" aria-label="Learning track">
        <button type="button" aria-pressed={!selected} onClick={() => setParams({})}>All tracks</button>
        {CLUSTER_ORDER.map((cluster) => <button key={cluster} type="button" aria-pressed={selected === cluster} onClick={() => setParams({ track: cluster })}>{CLUSTER_LABELS[cluster]}</button>)}
      </div>

      <div aria-live="polite" className="text-xs text-muted-foreground">{filtered.length} lesson{filtered.length === 1 ? '' : 's'}{query ? ` matching "${search.trim()}"` : ' in view'}</div>

      {filtered.length === 0 ? (
        <div className="empty-state"><h2>No lesson matches that search.</h2><p>Try the service name or browse the source library, which includes every document and episode.</p><button className="text-link" type="button" onClick={() => { setSearch(''); setParams({}) }}>Clear filters <ArrowRight size={16} aria-hidden /></button></div>
      ) : (
        <div>
          {CLUSTER_ORDER.map((cluster, groupIndex) => {
            const units = filtered.filter((unit) => unit.cluster === cluster)
            if (!units.length) return null
            return (
              <details key={`${cluster}-${selected ?? 'all'}-${query}`} className="domain-group" open={Boolean(query || selected || groupIndex === 0)}>
                <summary><span><DomainIcon cluster={cluster} size={21} />{CLUSTER_LABELS[cluster]}</span><span className="domain-summary">{units.length} lessons <CaretDown size={15} aria-hidden /></span></summary>
                <div className="unit-list">
                  {units.map((unit) => {
                    const progress = state.study.units[unit.id]
                    const missing = missingPrerequisites(unit, state).length
                    return (
                      <Link key={unit.id} to={`/learn/${unit.id}`} className="unit-row">
                        <span className={`unit-marker${progress?.completedAt ? ' completed' : ''}`}>{progress?.completedAt ? <Check size={14} aria-hidden /> : COURSE_UNITS.indexOf(unit) + 1}</span>
                        <span><span className="unit-name">{unit.title}</span><span className="unit-meta">{unit.summary}</span></span>
                        <span className="unit-state"><span>{unit.minutes} min to understand</span><span>{progress?.completedAt ? 'Explored, not a mastery claim' : progress ? 'Ready to resume' : missing ? `${missing} prerequisite${missing === 1 ? '' : 's'} to learn first` : 'Ready to begin'}</span></span>
                        <ArrowRight size={15} aria-hidden />
                      </Link>
                    )
                  })}
                </div>
              </details>
            )
          })}
        </div>
      )}
      </>}
    </div>
  )
}
