import { Eye, EyeSlash } from '@phosphor-icons/react'
import { useState } from 'react'
import { DISCRIMINATION_TABLES } from '@/data/content'

export default function Discriminate() {
  const [id, setId] = useState(DISCRIMINATION_TABLES[0]?.id ?? '')
  const [recall, setRecall] = useState(false)
  const [revealed, setRevealed] = useState<number[]>([])
  const table = DISCRIMINATION_TABLES.find((item) => item.id === id)
  return (
    <div className="studio-page">
      <div><h1 className="page-heading">Find the detail that changes the answer.</h1><p className="page-description">Similar names can hide very different jobs. Read the boundary first; hide the explanations only when you are ready to retrieve it.</p></div>
      <div className="course-toolbar">
        <div className="search-field">
          <label htmlFor="comparison">Compare two concepts</label>
          <select className="settings-input mt-0" id="comparison" value={id} onChange={(event) => { setId(event.target.value); setRevealed([]) }}>
            {DISCRIMINATION_TABLES.map((item) => <option value={item.id} key={item.id}>{item.techA} vs. {item.techB}</option>)}
          </select>
        </div>
        <button className="secondary-button self-end" type="button" aria-pressed={recall} onClick={() => { setRecall(!recall); setRevealed([]) }}>{recall ? <Eye size={17} aria-hidden /> : <EyeSlash size={17} aria-hidden />}{recall ? 'Read the explanations' : 'Hide for recall'}</button>
      </div>
      {table && <section aria-label={`${table.techA} compared with ${table.techB}`} className="comparison-sheet">
        {table.rows.map((row, index) => <div className="comparison-row" key={row.question}>
          <h2>{row.question}</h2>
          {!recall || revealed.includes(index) ? <div className="comparison-values">
            <div><h3>{table.techA}</h3><p>{row.a}</p></div>
            <div><h3>{table.techB}</h3><p>{row.b}</p></div>
          </div> : <button className="text-link" type="button" onClick={() => setRevealed((previous) => [...previous, index])}>Explain both first, then reveal this row <Eye size={15} aria-hidden /></button>}
        </div>)}
      </section>}
    </div>
  )
}
