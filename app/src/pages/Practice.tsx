import { ArrowLeft, ArrowRight, Check, Pause } from '@phosphor-icons/react'
import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { ApplicationCheck } from '@/components/study/ApplicationCheck'
import { COURSE_UNITS, UNIT_BY_ID } from '@/data/curriculum'
import { useLearnerState } from '@/lib/learner-state'
import { buildReviewQueue } from '@/lib/study-practice'
import { practiceEvidenceState } from '@/lib/study-state'
import { useAnswerTimer } from '@/lib/use-answer-timer'

export const SESSION_SIZE = 8

export default function Practice() {
  const [round, setRound] = useState(0)
  const [params] = useSearchParams()
  const topic = params.get('topic')
  return <ReviewSession key={`${round}-${topic ?? 'mixed'}`} topicId={topic} onRestart={() => setRound((value) => value + 1)} />
}

function ReviewSession({ topicId, onRestart }: { topicId: string | null; onRestart: () => void }) {
  const learner = useLearnerState()
  const navigate = useNavigate()
  const { state, appendSessionLog, setTopicState, addToRetrievalQueue, removeFromRetrievalQueue, endSession, pauseStudy } = learner
  const [queue] = useState(() => buildReviewQueue(COURSE_UNITS.map((unit) => unit.id), state, state.study.sessionMinutes === 5 ? 3 : state.study.sessionMinutes === 15 ? 6 : SESSION_SIZE, topicId))
  const [index, setIndex] = useState(0)
  const [remembered, setRemembered] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [uncertain, setUncertain] = useState(false)
  const [reflection, setReflection] = useState('')
  const [selected, setSelected] = useState<string | null>(null)
  const finishAnswer = useAnswerTimer(index)
  const item = queue[index]
  const unit = item ? UNIT_BY_ID.get(item.topicId) : undefined
  const done = index >= queue.length

  function advance() {
    if (index === queue.length - 1) endSession()
    setIndex((value) => value + 1)
    setRevealed(false)
    setUncertain(false)
    setReflection('')
    setSelected(null)
  }

  function record(correct: boolean, isUnsure = false, selectedOptionId?: string) {
    if (!item || !unit) return
    const msToAnswer = finishAnswer()
    if (msToAnswer === null) return
    appendSessionLog({ topicId: unit.id, itemId: item.id, itemType: item.kind, correct, timestamp: new Date().toISOString(), msToAnswer, selectedOptionId })
    if (!isUnsure) {
      setTopicState(unit.id, practiceEvidenceState(state.topics[unit.id]?.state ?? 'introduced', item.kind, correct), item.kind === 'flashcard' ? 'Self-rated free recall in practice; not proof of complete mastery.' : 'Applied a scenario in practice; explanation, transfer, and retention remain separate evidence.')
    }
    if (correct) {
      setRemembered((value) => value + 1)
      removeFromRetrievalQueue(unit.id)
    } else addToRetrievalQueue(unit.id, isUnsure ? 'review' : 'miss')
  }

  function answer(id: string) {
    if (!unit || selected) return
    setSelected(id)
    record(id === unit.check.correctOptionId, id === 'unsure', id)
  }

  if (!queue.length) return (
    <div className="empty-state">
      <h1 className="page-heading">Learn it before you retrieve it.</h1>
      <p className="page-description">{topicId ? 'This topic has not been taught yet, or the link names an unavailable topic.' : 'Your recall queue will fill with ideas you have actually been taught. New material is not a surprise test.'}</p>
      <Link className="primary-button" to={topicId && UNIT_BY_ID.has(topicId) ? `/learn/${topicId}` : '/'}>Start with the explanation <ArrowRight size={16} aria-hidden /></Link>
    </div>
  )
  if (done) return (
    <div className="lesson-sheet max-w-3xl">
      <div className="completion">
        <div className="complete-symbol"><Check size={24} aria-hidden /></div>
        <h1 className="page-heading">That is enough for a real session.</h1>
        <p className="page-description">{remembered} of {queue.length} prompts remembered or answered correctly. Uncertain ideas are queued for another pass; nothing is marked mastered from a few answers.</p>
        <div className="portal-actions"><Link className="primary-button" to="/" onClick={pauseStudy}>Done for now <Pause size={16} aria-hidden /></Link><button className="quiet-button" type="button" onClick={onRestart}>Another short round</button></div>
      </div>
    </div>
  )
  if (!unit) throw new Error('A review item points to an unavailable course unit.')

  return (
    <div>
      <div className="lesson-toolbar"><Link className="text-link" to="/"><ArrowLeft size={16} aria-hidden />Back to Today</Link><button className="quiet-button" type="button" onClick={() => { pauseStudy(); navigate('/') }}><Pause size={16} aria-hidden />Done for now</button></div>
      <div className="mb-7"><h1 className="page-heading">Make it yours again.</h1><p className="page-description">Only previously taught ideas. Retrieve first, then check the connection.</p></div>
      <div className="lesson-sheet max-w-3xl">
        <div className="teaching-content">
          <div className="lesson-metadata mb-5"><span>{index + 1} of {queue.length}</span><span>{item.kind === 'flashcard' ? 'Free recall' : 'Apply the distinction'}</span></div>
          <h2>{item.kind === 'flashcard' ? unit.recall.prompt : 'Change the situation.'}</h2>
          {item.kind === 'flashcard' ? (
            <>
              <label className="field-label mt-5 block" htmlFor="practice-reflection">Your explanation (optional)</label>
              <textarea className="study-textarea" id="practice-reflection" maxLength={4000} value={reflection} onChange={(event) => setReflection(event.target.value)} placeholder="Try reconstructing the mechanism before revealing it." />
              {!revealed ? <div className="portal-actions"><button className="primary-button" type="button" onClick={() => setRevealed(true)}>Compare with the explanation</button><button className="quiet-button" type="button" onClick={() => { setUncertain(true); setRevealed(true) }}>I don't know yet</button></div>
                : <><div className="lesson-example"><span>Check your mental model</span>{unit.recall.answer}</div><p className="field-note mt-3">This is your self-rating, not an automated assessment of your words.</p><div className="portal-actions">
                  {!uncertain && <button className="primary-button" type="button" onClick={() => { record(true); advance() }}>I retrieved that before looking <Check size={16} aria-hidden /></button>}
                  <button className={uncertain ? 'primary-button' : 'quiet-button'} type="button" onClick={() => { record(false, uncertain); advance() }}>Keep it in my review queue <ArrowRight size={16} aria-hidden /></button>
                </div></>}
            </>
          ) : <><ApplicationCheck check={unit.check} selectedId={selected} onAnswer={answer} />{selected && <button className="primary-button mt-6" type="button" onClick={advance}>{index === queue.length - 1 ? 'Finish this round' : 'Next idea'}<ArrowRight size={16} aria-hidden /></button>}</>}
          <div className="mt-6 border-t border-border pt-3"><Link className="text-link" to={`/learn/${unit.id}`}>Revisit {unit.title} <ArrowRight size={14} aria-hidden /></Link></div>
        </div>
      </div>
    </div>
  )
}
