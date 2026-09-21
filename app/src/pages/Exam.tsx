import { ArrowRight, Check, Pause } from '@phosphor-icons/react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ApplicationCheck } from '@/components/study/ApplicationCheck'
import { COURSE_UNITS, UNIT_BY_ID } from '@/data/curriculum'
import { useLearnerState } from '@/lib/learner-state'
import { shuffled } from '@/lib/study-practice'

export default function Exam() {
  const learner = useLearnerState()
  const { resumeReviewSession, startReviewSession } = learner
  const session = learner.state.study.exam
  const sessionId = session?.id
  const index = session?.index ?? 0
  const current = session?.items[index]
  const unit = UNIT_BY_ID.get(current?.topicId ?? '')
  const response = session?.responses[index]

  useEffect(() => {
    if (sessionId) resumeReviewSession('exam')
  }, [sessionId, resumeReviewSession])

  useEffect(() => {
    document.getElementById('exam-step-title')?.focus({ preventScroll: true })
  }, [sessionId, index])

  function start() {
    startReviewSession('exam', shuffled(COURSE_UNITS).slice(0, 8).map((item) => ({ kind: 'mcq', topicId: item.id, id: `scenario-${item.id}` })), undefined, true)
  }

  if (!session) return (
    <div className="studio-page max-w-3xl">
      <div><h1 className="page-heading">A small exam rehearsal.</h1><p className="page-description">Eight mixed scenarios, no countdown. Choose the requirement that matters, then compare the reasoning and the tempting alternatives. You can stop and resume the same round.</p></div>
      <div className="inline-note"><p>This mode can include material you have not learned. Those answers are diagnostic: they do not create a failure or mastery promotion for an untaught topic. Questions are authored from the corpus, not official exam items.</p></div>
      <button type="button" className="primary-button self-start" onClick={start}>Begin eight scenarios <ArrowRight size={16} aria-hidden /></button>
    </div>
  )

  if (session.completedAt) {
    const missed = session.items.filter((_, itemIndex) => session.responses[itemIndex].outcome !== 'correct')
    return (
      <div className="lesson-sheet max-w-3xl"><div className="completion">
        <div className="complete-symbol"><Check size={24} aria-hidden /></div>
        <h1 id="exam-step-title" tabIndex={-1} className="page-heading">That round is complete.</h1>
        <p className="page-description">{session.responses.filter((answer) => answer.outcome === 'correct').length} decisions fit the requirement. {session.responses.filter((answer) => answer.outcome === 'unsure').length} left uncertain, without being recorded as wrong answers. Untaught material remains diagnostic; a single scenario does not establish mastery.</p>
        {missed.length > 0 && <div className="mt-6 flex flex-col gap-1">{missed.map((item) => <Link key={item.id} className="text-link" to={`/learn/${item.topicId}`}>{UNIT_BY_ID.get(item.topicId)?.title ?? 'Revisit this concept'}<ArrowRight size={14} aria-hidden /></Link>)}</div>}
        <div className="portal-actions"><Link className="primary-button" to="/" onClick={learner.pauseStudy}>Done for now <Pause size={16} aria-hidden /></Link><button className="quiet-button" type="button" onClick={start}>Start another round</button></div>
      </div></div>
    )
  }

  if (!current || !unit || !response || session.items.some((item) => !UNIT_BY_ID.has(item.topicId))) return (
    <div className="empty-state"><h1 className="page-heading">This saved rehearsal includes an unavailable lesson.</h1><p className="page-description">Your earlier evidence is unchanged. Export a backup before replacing the round.</p><div className="portal-actions"><Link className="primary-button" to="/settings">Open backup settings</Link><button className="quiet-button" type="button" onClick={start}>Start a new rehearsal</button></div></div>
  )
  const position = { sessionId: session.id, itemId: current.id }

  return (
    <div className="studio-page max-w-3xl">
      <div className="section-heading mb-0"><h1 id="exam-step-title" tabIndex={-1} className="page-heading">Exam practice.</h1><Link className="text-link" to="/" onClick={learner.pauseStudy}>Done for now <Pause size={16} aria-hidden /></Link></div>
      <div className="lesson-sheet"><div className="teaching-content">
        <p className="text-sm text-muted-foreground">{index + 1} of {session.items.length} scenarios. Your position and shown feedback are saved.</p>
        <ApplicationCheck check={unit.check} selectedId={response.selectedOptionId} onAnswer={(id) => learner.commitReviewAnswer('exam', position, { kind: 'scenario', selectedOptionId: id, correctOptionId: unit.check.correctOptionId })} />
        {response.outcome && <div className="portal-actions"><button className="primary-button" type="button" onClick={() => learner.advanceReviewSession('exam', position)}>{index === session.items.length - 1 ? 'See what to revisit' : 'Next scenario'}<ArrowRight size={16} aria-hidden /></button></div>}
      </div></div>
    </div>
  )
}
