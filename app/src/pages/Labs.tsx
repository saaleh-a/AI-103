import { ArrowRight, Browser, Check, MagnifyingGlass } from '@phosphor-icons/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { COURSE_UNITS } from '@/data/curriculum'
import { CLUSTER_LABELS, CLUSTER_ORDER } from '@/data/topics'
import { useLearnerState } from '@/lib/learner-state'

export default function Labs() {
  const { state } = useLearnerState()
  const [query, setQuery] = useState('')
  const [cluster, setCluster] = useState('all')
  const units = COURSE_UNITS.filter((unit) => (cluster === 'all' || unit.cluster === cluster)
    && `${unit.title} ${unit.lab.azure.title} ${unit.summary}`.toLowerCase().includes(query.trim().toLowerCase()))

  return (
    <div className="studio-page">
      <div>
        <h1 className="page-heading">Take it into Azure.</h1>
        <p className="page-description">A field guide beside your portal. Know where to go, what to change, and what to look for. Keep your observations here and pick up at the same checkpoint later.</p>
      </div>
      <div className="inline-note"><Browser aria-hidden /><p>These walkthroughs use your own Azure account. Resource costs, permissions, and cleanup appear before each lab. Code-first topics clearly mark the switch from portal setup to an editor.</p></div>
      <div className="search-field">
        <label htmlFor="lab-search">Find fieldwork</label>
        <div className="search-input-wrap"><MagnifyingGlass size={18} aria-hidden /><input id="lab-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try: deploy, document, speech..." /></div>
      </div>
      <div className="course-filter" role="group" aria-label="Lab learning track">
        <button type="button" aria-pressed={cluster === 'all'} onClick={() => setCluster('all')}>All fieldwork</button>
        {CLUSTER_ORDER.map((value) => <button key={value} type="button" aria-pressed={cluster === value} onClick={() => setCluster(value)}>{CLUSTER_LABELS[value]}</button>)}
      </div>
      <p className="text-xs text-muted-foreground" aria-live="polite">{units.length} guided walkthroughs. A walkthrough can build on the same original exercise as another lesson.</p>
      {units.length ? <div className="lab-list">
        {units.map((unit) => {
          const progress = state.study.units[unit.id]
          return <Link key={unit.id} to={`/labs/${unit.id}`} className="lab-list-row">
            <div><h2>{unit.lab.azure.title}</h2><p>{unit.lab.goal}</p></div>
            <div className="lab-list-meta"><span>{unit.lab.azure.environment === 'portal-and-code' ? 'Portal + code' : unit.lab.azure.environment === 'foundry' ? 'Microsoft Foundry' : 'Azure portal'}</span><span>About {unit.lab.azure.minutes} min</span>{progress?.portalCompletedAt && <span className="inline-flex items-center justify-end gap-1"><Check size={13} aria-hidden />Observations recorded</span>}</div>
            <ArrowRight size={16} aria-hidden />
          </Link>
        })}
      </div> : <div className="empty-state"><h2>No walkthrough matches.</h2><p>Try a shorter service name or switch back to all fieldwork.</p><button type="button" className="text-link" onClick={() => { setQuery(''); setCluster('all') }}>Clear filters</button></div>}
    </div>
  )
}
