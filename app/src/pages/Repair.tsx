import { ArrowRight, BookOpen, Pause } from '@phosphor-icons/react'
import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BuildContext } from '@/components/study/BuildContext'
import { UNIT_BY_ID } from '@/data/curriculum'
import { useLearnerState } from '@/lib/learner-state'
import { emptyStudyUnit, hasLearnedTopic } from '@/lib/study-state'

export default function Repair() {
  const { topicId } = useParams()
  const unit = UNIT_BY_ID.get(topicId ?? '')
  const learner = useLearnerState()
  const navigate = useNavigate()
  const { activateStudy } = learner
  const taught = Boolean(unit && hasLearnedTopic(learner.state, unit.id))
  useEffect(() => {
    if (topicId && taught) activateStudy(topicId, 'repair')
  }, [topicId, taught, activateStudy])
  if (!unit) return <div className="empty-state"><h1 className="page-heading">That repair topic is unavailable.</h1><Link className="text-link" to="/">Return to your build <ArrowRight size={16} aria-hidden /></Link></div>
  if (!hasLearnedTopic(learner.state, unit.id)) return <div className="empty-state"><h1 className="page-heading">This is new, not a failure.</h1><p className="page-description">Meet the mechanism before trying to repair it.</p><Link className="primary-button" to={`/learn/${unit.id}`}>Start the explanation <ArrowRight size={16} aria-hidden /></Link></div>
  const progress = learner.state.study.units[unit.id] ?? emptyStudyUnit()
  const unitId = unit.id
  const lastMiss = learner.state.sessionLog.findLast((entry) => entry.topicId === unit.id && entry.itemId === `scenario-${unit.id}` && entry.itemType === 'mcq' && !entry.correct)
  const wrong = unit.check.options.find((option) => option.id === (lastMiss?.selectedOptionId ?? progress.checkAnswerId) && option.id !== unit.check.correctOptionId)
  const correct = unit.check.options.find((option) => option.id === unit.check.correctOptionId)
  const clue = unit.steps.at(-1)

  function save() {
    learner.saveStudyProgress(unitId, { repairReviewedAt: new Date().toISOString() })
    learner.addToRetrievalQueue(unitId, 'support')
    navigate('/')
  }

  return (
    <div className="studio-page max-w-4xl">
      <div><div className="section-heading"><h1 className="page-heading">Untangle one decision.</h1><Link className="text-link" to="/" onClick={learner.pauseStudy}>Done for now <Pause size={16} aria-hidden /></Link></div><p className="page-description">{unit.title}. The goal is to locate the distinction, not make you reread the entire module.</p></div>
      <BuildContext unitId={unit.id} />
      <section className="repair-question"><h2>The requirement you were solving</h2><p>{unit.check.question}</p></section>
      <div className="repair-contrast">
        {wrong && <section><h2>The tempting choice</h2><h3>{wrong.text}</h3><p>{wrong.explanation}</p></section>}
        <section><h2>The decision boundary</h2><h3>{correct?.text}</h3><p>{unit.check.explanation}</p></section>
      </div>
      {clue && <details className="hint-disclosure"><summary><span className="inline-flex items-center gap-2"><BookOpen size={16} aria-hidden />Rebuild just this part: {clue.title}</span></summary><p>{clue.body}</p>{clue.example && <p>{clue.example}</p>}</details>}
      <section>
        <label className="field-label" htmlFor="repair-note">What detail would change your decision next time?</label>
        <textarea id="repair-note" className="study-textarea" rows={3} maxLength={4000} value={progress.repairNote} onChange={(event) => learner.saveStudyProgress(unit.id, { repairNote: event.target.value })} placeholder="A short contrast in your words. It is okay to leave this for the next attempt." />
        <p className="field-note">This note is not automatically graded. Reviewing the explanation does not clear the mastery repair flag; a later retrieval gives fresh evidence.</p>
        <div className="portal-actions"><button className="primary-button" type="button" onClick={save}>Keep this for a later check <ArrowRight size={16} aria-hidden /></button><Link className="text-link" to={`/sources?unit=${unit.id}`}>Inspect the source boundary</Link></div>
      </section>
    </div>
  )
}
