import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, DownloadSimple, FileText, MagnifyingGlass, VideoCamera, WarningCircle } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { COURSE_UNITS, UNIT_BY_ID } from '@/data/curriculum'
import { CORPUS_SOURCES, SOURCE_BY_ID, publishedSourceUrl, type CorpusSource } from '@/data/curriculum/catalog'
import { fetchCorpusFile } from '@/lib/search'

export default function Sources() {
  const { sourceId } = useParams()
  if (sourceId) {
    const source = SOURCE_BY_ID.get(sourceId)
    return source ? <SourceDocument key={source.id} source={source} /> : (
      <div className="empty-state"><h1 className="page-heading">That source is not in the corpus.</h1><p className="page-description">The link may be from a different corpus version. All available documents are in the library.</p><Link className="text-link" to="/sources">Open source library <ArrowRight size={16} aria-hidden /></Link></div>
    )
  }
  return <SourceLibrary />
}

function SourceLibrary() {
  const [search, setSearch] = useState('')
  const [kind, setKind] = useState('all')
  const [params, setParams] = useSearchParams()
  const unit = UNIT_BY_ID.get(params.get('unit') ?? '')
  const query = search.trim().toLowerCase()
  const filtered = CORPUS_SOURCES.filter((source) => (!unit || unit.sourceIds.includes(source.number))
    && (kind === 'all' || source.kind === kind)
    && (!query || `${source.number} ${source.title} ${source.excerpt}`.toLowerCase().includes(query)))

  return (
    <div className="studio-page">
      <div>
        <h1 className="page-heading">{unit ? 'Behind this lesson.' : 'Nothing left out of the library.'}</h1>
        <p className="page-description">{unit ? `The original sources connected to "${unit.title}".` : `${CORPUS_SOURCES.length} bundled source files: Learn units, exercises, assessments, episode transcripts, and the Study Cram. Read the snapshot here or open its published source.`}</p>
      </div>
      <div className="course-toolbar">
        <div className="search-field">
          <label htmlFor="source-search">Search source titles and previews</label>
          <div className="search-input-wrap"><MagnifyingGlass size={18} aria-hidden /><input id="source-search" type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Source name, concept, or file number" /></div>
        </div>
        {unit && <button className="text-link self-end" type="button" onClick={() => setParams({})}>Show all {CORPUS_SOURCES.length} sources</button>}
      </div>
      <div className="course-filter" role="group" aria-label="Source type">
        {[['all', 'All sources'], ['learn-module', 'Microsoft Learn'], ['episode', 'Episodes'], ['cram', 'Study Cram']].map(([value, label]) => <button key={value} type="button" aria-pressed={kind === value} onClick={() => setKind(value)}>{label}</button>)}
      </div>
      <p className="text-xs text-muted-foreground" aria-live="polite">{filtered.length} source{filtered.length === 1 ? '' : 's'} in view. Source availability is not a claim of learner mastery.</p>
      {filtered.length ? <div className="source-list">
        {filtered.map((source) => {
          const Icon = source.kind === 'episode' ? VideoCamera : source.kind === 'cram' ? BookOpen : FileText
          const linked = COURSE_UNITS.filter((item) => item.sourceIds.includes(source.number))
          return <Link className="source-row" to={`/sources/${encodeURIComponent(source.id)}`} key={source.id}>
            <Icon size={21} aria-hidden /><span><span className="unit-name">{source.title}</span><span className="unit-meta">Source {source.number} · {linked[0]?.title ?? 'Course reference'}{linked.length > 1 ? ` + ${linked.length - 1} connected lesson${linked.length === 2 ? '' : 's'}` : ''}</span></span><ArrowRight size={15} aria-hidden />
          </Link>
        })}
      </div> : <div className="empty-state"><h2>No source matches those filters.</h2><p>Searches use the captured title and preview, not the entire transcript. Try a shorter service name or clear the filters.</p><button type="button" className="text-link" onClick={() => { setSearch(''); setKind('all'); setParams({}) }}>Clear filters</button></div>}
    </div>
  )
}

function SourceDocument({ source }: { source: CorpusSource }) {
  const [text, setText] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [attempt, setAttempt] = useState(0)
  const url = publishedSourceUrl(source)
  const units = COURSE_UNITS.filter((unit) => unit.sourceIds.includes(source.number))

  useEffect(() => {
    let active = true
    fetchCorpusFile(source.filename).then((content) => {
      if (active) setText(content)
    }).catch((cause: unknown) => {
      console.warn('[sources] Source could not be loaded.', cause)
      if (active) setError('This bundled source could not be loaded. Check your connection and try again.')
    })
    return () => { active = false }
  }, [source.filename, attempt])

  return (
    <div className="studio-page">
      <div className="lesson-toolbar">
        <Link to="/sources" className="text-link"><ArrowLeft size={16} aria-hidden />Source library</Link>
        <div className="flex flex-wrap gap-3">
          <a className="text-link" href={`${import.meta.env.BASE_URL}corpus/${encodeURIComponent(source.filename)}`} download><DownloadSimple size={16} aria-hidden />Original file</a>
          {url && <a className="text-link" href={url} target="_blank" rel="noopener noreferrer">Published source <ArrowUpRight size={16} aria-hidden /></a>}
        </div>
      </div>
      <div><h1 className="page-heading max-w-3xl">{source.title}</h1><p className="page-description">Bundled snapshot, with repeated site navigation removed for reading. The download preserves the original file. Live documentation may have changed since capture.</p></div>
      <div className="flex flex-wrap gap-x-5 gap-y-1">
        {units.map((unit) => <Link className="text-link" key={unit.id} to={`/learn/${unit.id}`}>Learn: {unit.title}<ArrowRight size={14} aria-hidden /></Link>)}
      </div>
      {error ? <div className="inline-error" role="alert"><WarningCircle aria-hidden /><div><p>{error}</p><button className="text-link" type="button" onClick={() => { setError(null); setText(null); setAttempt((value) => value + 1) }}>Try loading again</button></div></div>
        : text === null ? <div className="source-content" role="status" aria-label="Loading source"><div className="skeleton-line w-2/3" />{Array.from({ length: 7 }, (_, i) => <div key={i} className={`skeleton-line ${i % 3 === 0 ? 'w-4/5' : 'w-full'}`} />)}</div>
          : <article className="source-content" aria-label="Source text">{text.split(/\n\s*\n/).map((paragraph, index) => <p className="whitespace-pre-wrap" key={index}>{paragraph}</p>)}</article>}
    </div>
  )
}
