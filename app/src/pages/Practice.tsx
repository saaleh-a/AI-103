import { ArrowLeft, ArrowRight, Check, Pause } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { ApplicationCheck } from '@/components/study/ApplicationCheck'
import { COURSE_UNITS, UNIT_BY_ID } from '@/data/curriculum'
import { useLearnerState } from '@/lib/learner-state'
import { buildReviewQueue } from '@/lib/study-practice'
import { hasLearnedTopic } from '@/lib/study-state'
import type { ReviewAnswer } from '@/lib/review-session'

export const SESSION_SIZE = 8
/** A summary stays on screen across a reload; a round finished in an earlier visit is history. */
const SUMMARY_FRESH_MS = 30 * 60 * 1000

export default function Practice() {
  const [params] = useSearchParams()
  const topic = params.get('topic')
  return <ReviewSession key={topic ?? 'mixed'} topicId={topic} />
}

function ReviewSession({ topicId }: { topicId: string | null }) {
  const learner = useLearnerState()
  const navigate = useNavigate()
  const { state, pauseStudy, startReviewSession, resumeReviewSession, saveReviewResponse, commitReviewAnswer, advanceReviewSession } = learner
  const limit = state.study.sessionMinutes === 5 ? 3 : state.study.sessionMinutes === 15 ? 6 : SESSION_SIZE
  const [initialQueue] = useState(() => buildReviewQueue(COURSE_UNITS.map((unit) => unit.id), state, limit, topicId))
  const [openedAt] = useState(() => Date.now())
  const [exhausted, setExhausted] = useState(false)
  const session = state.study.practice
  const sessionId = session?.id
  const completedAt = session?.completedAt
  const differentTopic = Boolean(topicId && session && session.requestedTopicId !== topicId)
  const replacing = Boolean(completedAt && (differentTopic || Date.parse(completedAt) < openedAt - SUMMARY_FRESH_MS))
  const eligible = !topicId || (UNIT_BY_ID.has(topicId) && hasLearnedTopic(state, topicId))
  const index = session?.index ?? 0
  const queue = session?.items ?? initialQueue
  const item = queue[index]
  const unit = item ? UNIT_BY_ID.get(item.topicId) : undefined
  const response = session?.responses[index]
  const position = { sessionId: sessionId ?? '', itemId: item?.id ?? '' }

  useEffect(() => {
    if (!eligible) return
    if (!sessionId || replacing) {
      if (initialQueue.length) startReviewSession('practice', initialQueue, topicId ?? undefined, replacing)
    } else if (!differentTopic && !completedAt) {
      resumeReviewSession('practice')
    }
  }, [sessionId, completedAt, differentTopic, replacing, eligible, initialQueue, topicId, startReviewSession, resumeReviewSession])

  useEffect(() => {
    document.getElementById('review-step-title')?.focus({ preventScroll: true })
  }, [index, sessionId])

  function restart() {
    const next = buildReviewQueue(COURSE_UNITS.map((candidate) => candidate.id), state, limit, topicId)
    if (!next.length) {
      setExhausted(true)
      return
    }
    startReviewSession('practice', next, topicId ?? undefined, true)
  }

  function rate(answer: ReviewAnswer) {
    commitReviewAnswer('practice', position, answer)
    advanceReviewSession('practice', position)
  }

  if (!eligible || exhausted || (!queue.length && !session) || (replacing && !initialQueue.length)) return (
    <div className="empty-state">
      <h1 className="page-heading">Learn it before you retrieve it.</h1>
      <p className="page-description">{topicId ? 'This topic has not been taught yet, or the link names an unavailable topic.' : 'Your recall queue will fill with ideas you have actually been taught. New material is not a surprise test.'}</p>
      <Link className="primary-button" to={topicId && UNIT_BY_ID.has(topicId) ? `/learn/${topicId}` : '/'}>Start with the explanation <ArrowRight size={16} aria-hidden /></Link>
    </div>
  )
  if (differentTopic && session && !completedAt) return (
    <div className="empty-state">
      <h1 className="page-heading">Your earlier round is still saved.</h1>
      <p className="page-description">Resume prompt {index + 1} of {queue.length}, or deliberately replace this round with a review of {UNIT_BY_ID.get(topicId ?? '')?.title}. Your recorded answers and lesson notes will remain.</p>
      <div className="portal-actions"><Link className="primary-button" to="/practice">Resume the saved round <ArrowRight size={16} aria-hidden /></Link><button className="quiet-button" type="button" onClick={restart}>Start this topic instead</button></div>
    </div>
  )
  if (!session || replacing) return <p role="status" className="page-description">Preparing your review round.</p>
  if (completedAt) return (
    <div className="lesson-sheet max-w-3xl">
      <div className="completion">
        <div className="complete-symbol"><Check size={24} aria-hidden /></div>
        <h1 id="review-step-title" tabIndex={-1} className="page-heading">That is enough for a real session.</h1>
        <p className="page-description">{session.responses.filter((answer) => answer.outcome === 'correct').length} prompts self-recalled or answered correctly. {session.responses.filter((answer) => answer.outcome === 'unsure').length} left uncertain, without counting as wrong answers. Supported recall stays distinct from independent evidence; nothing here establishes mastery.</p>
        <div className="portal-actions"><Link className="primary-button" to="/" onClick={pauseStudy}>Done for now <Pause size={16} aria-hidden /></Link><button className="quiet-button" type="button" onClick={restart}>Another short round</button></div>
      </div>
    </div>
  )
  if (!unit || !response || queue.some((saved) => !UNIT_BY_ID.has(saved.topicId))) return (
    <div className="empty-state"><h1 className="page-heading">This saved round includes an unavailable lesson.</h1><p className="page-description">Your notebook and recorded evidence have not been removed. Export them in Settings, or start a round from the current course.</p><Link className="primary-button" to="/settings">Open backup settings</Link>{initialQueue.length > 0 && <button className="quiet-button mt-4" type="button" onClick={restart}>Start a new round</button>}</div>
  )
  const { revealed, uncertain, reflection, selectedOptionId: selected } = response

  return (
    <div>
      <div className="lesson-toolbar"><Link className="text-link" to="/"><ArrowLeft size={16} aria-hidden />Back to Today</Link><button className="quiet-button" type="button" onClick={() => { pauseStudy(); navigate('/') }}><Pause size={16} aria-hidden />Done for now</button></div>
      <div className="mb-7"><h1 className="page-heading">Make it yours again.</h1><p className="page-description">Only ideas you have been taught. A due idea starts with its scenario, before any explanation, so the answer is yours.</p></div>
      <div className="lesson-sheet max-w-3xl">
        <div className="teaching-content">
          <div className="lesson-metadata mb-5"><span>{index + 1} of {queue.length}</span><span>{item.kind === 'flashcard' ? 'Free recall' : 'Apply the distinction'}</span></div>
          <h2 id="review-step-title" tabIndex={-1}>{item.kind === 'flashcard' ? unit.recall.prompt : 'Change the situation.'}</h2>
          {item.kind === 'flashcard' ? (
            <>
              <label className="field-label mt-5 block" htmlFor="practice-reflection">Your explanation (optional)</label>
              <textarea className="study-textarea" id="practice-reflection" maxLength={4000} value={reflection} onChange={(event) => saveReviewResponse('practice', position, { reflection: event.target.value })} placeholder="Try reconstructing the mechanism before revealing it." />
              <p className="field-note">Your draft and any explanation already revealed travel with this saved round.</p>
              {!revealed ? <div className="portal-actions"><button className="primary-button" type="button" onClick={() => saveReviewResponse('practice', position, { revealed: true })}>Compare with the explanation</button><button className="quiet-button" type="button" onClick={() => saveReviewResponse('practice', position, { uncertain: true })}>I don't know yet</button></div>
                : <><div className="lesson-example"><span>Check your mental model</span>{unit.recall.answer}</div><p className="field-note mt-3">This is your self-rating, not an automated assessment of your words.</p><div className="portal-actions">
                  {!uncertain && <button className="primary-button" type="button" onClick={() => rate({ kind: 'self-rating', retrieved: true })}>I retrieved that before looking <Check size={16} aria-hidden /></button>}
                  <button className={uncertain ? 'primary-button' : 'quiet-button'} type="button" onClick={() => rate(uncertain ? { kind: 'unsure' } : { kind: 'self-rating', retrieved: false })}>Keep it in my review queue <ArrowRight size={16} aria-hidden /></button>
                </div></>}
            </>
          ) : <><ApplicationCheck check={unit.check} selectedId={selected} onAnswer={(id) => commitReviewAnswer('practice', position, { kind: 'scenario', selectedOptionId: id, correctOptionId: unit.check.correctOptionId })} />{selected && <button className="primary-button mt-6" type="button" onClick={() => advanceReviewSession('practice', position)}>{index === queue.length - 1 ? 'Finish this round' : 'Next idea'}<ArrowRight size={16} aria-hidden /></button>}</>}
          <div className="mt-6 border-t border-border pt-3"><Link className="text-link" to={`/learn/${unit.id}`}>Revisit {unit.title} <ArrowRight size={14} aria-hidden /></Link></div>
        </div>
      </div>
    </div>
  )
}
