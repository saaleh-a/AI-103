import { ArrowRight, Check, Pause } from '@phosphor-icons/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ApplicationCheck } from '@/components/study/ApplicationCheck'
import { COURSE_UNITS } from '@/data/curriculum'
import { useLearnerState } from '@/lib/learner-state'
import { hasLearnedTopic, practiceEvidenceState } from '@/lib/study-state'
import { shuffled } from '@/lib/study-practice'
import { useAnswerTimer } from '@/lib/use-answer-timer'

export default function Exam() {
  const learner = useLearnerState()
  const [started, setStarted] = useState(false)
  const [items] = useState(() => shuffled(COURSE_UNITS).slice(0, 8))
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [correctCount, setCorrectCount] = useState(0)
  const [missed, setMissed] = useState<string[]>([])
  const finishAnswer = useAnswerTimer(`${started}-${index}`)
  const current = items[index]

  function answer(id: string) {
    if (!current || selected) return
    const duration = finishAnswer()
    if (duration === null) return
    setSelected(id)
    const correct = id === current.check.correctOptionId
    const learned = hasLearnedTopic(learner.state, current.id)
    if (correct) setCorrectCount((value) => value + 1)
    else setMissed((value) => [...value, current.id])
    learner.appendSessionLog({ topicId: current.id, itemId: `scenario-${current.id}`, itemType: 'mcq', correct, timestamp: new Date().toISOString(), msToAnswer: duration, selectedOptionId: id })
    if (learned && id !== 'unsure') {
      learner.setTopicState(current.id, practiceEvidenceState(learner.state.topics[current.id]?.state ?? 'introduced', 'mcq', correct), 'Scenario selection in exam practice; not proof of durable mastery.')
      if (correct) learner.removeFromRetrievalQueue(current.id)
      else learner.addToRetrievalQueue(current.id, 'miss')
    } else if (learned) learner.addToRetrievalQueue(current.id)
  }

  if (!started) return (
    <div className="studio-page max-w-3xl">
      <div><h1 className="page-heading">A small exam rehearsal.</h1><p className="page-description">Eight mixed scenarios, no countdown. Choose the requirement that matters, then compare the reasoning and the tempting alternatives.</p></div>
      <div className="inline-note"><p>This mode can include material you have not learned. Those answers are diagnostic: they do not create a failure or mastery promotion for an untaught topic. Questions are authored from the corpus, not official exam items.</p></div>
      <button type="button" className="primary-button self-start" onClick={() => setStarted(true)}>Begin eight scenarios <ArrowRight size={16} aria-hidden /></button>
    </div>
  )

  if (index >= items.length) return (
    <div className="lesson-sheet max-w-3xl"><div className="completion">
      <div className="complete-symbol"><Check size={24} aria-hidden /></div>
      <h1 className="page-heading">{correctCount} of {items.length} decisions fit.</h1>
      <p className="page-description">Look at the boundaries that changed your answer, not just the score. A single scenario result does not establish mastery.</p>
      {missed.length > 0 && <div className="mt-6 flex flex-col gap-1">{missed.map((id) => <Link key={id} className="text-link" to={`/learn/${id}`}>{COURSE_UNITS.find((unit) => unit.id === id)?.title}<ArrowRight size={14} aria-hidden /></Link>)}</div>}
      <Link className="primary-button mt-7" to="/" onClick={learner.pauseStudy}>Done for now <Pause size={16} aria-hidden /></Link>
    </div></div>
  )

  return (
    <div className="studio-page max-w-3xl">
      <div className="section-heading mb-0"><h1 className="page-heading">Exam practice.</h1><Link className="text-link" to="/">Stop here</Link></div>
      <div className="lesson-sheet"><div className="teaching-content">
        <p className="text-xs text-muted-foreground">{index + 1} of {items.length} scenarios</p>
        <ApplicationCheck check={current.check} selectedId={selected} onAnswer={answer} />
        {selected && <div className="portal-actions"><button className="primary-button" type="button" onClick={() => {
          if (index === items.length - 1) learner.endSession()
          setIndex((value) => value + 1)
          setSelected(null)
        }}>{index === items.length - 1 ? 'See what to revisit' : 'Next scenario'}<ArrowRight size={16} aria-hidden /></button></div>}
      </div></div>
    </div>
  )
}
