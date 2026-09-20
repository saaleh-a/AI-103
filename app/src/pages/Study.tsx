import { ArrowLeft, ArrowRight, BookOpen, Check, CheckCircle, Circle, Clock, Info, Pause } from '@phosphor-icons/react'
import { motion } from 'motion/react'
import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { StudyStepper } from '@/components/effects/StudyStepper'
import { CodeBlock } from '@/components/study/CodeBlock'
import { PortalGuide } from '@/components/study/PortalGuide'
import { ApplicationCheck } from '@/components/study/ApplicationCheck'
import { BuildContext } from '@/components/study/BuildContext'
import { COURSE_UNITS, UNIT_BY_ID } from '@/data/curriculum'
import { getSource } from '@/data/curriculum/catalog'
import type { CourseUnit } from '@/data/curriculum/schema'
import { CLUSTER_LABELS, TOPICS } from '@/data/topics'
import { BUILD_PROJECTS } from '@/data/projects'
import { chooseCoachingAction, coachingHref } from '@/lib/coach'
import { useLearnerState } from '@/lib/learner-state'
import { emptyStudyUnit, missingPrerequisites } from '@/lib/study-state'
import { MASTERY_ORDER, type StudyStage, type StudyUnitProgress } from '@/lib/types'
import { useAnswerTimer } from '@/lib/use-answer-timer'
import { useUIPrefs } from '@/lib/ui-prefs'

const TutorChat = lazy(() => import('@/components/chat/TutorChat').then((module) => ({ default: module.TutorChat })))
const STAGES: StudyStage[] = ['learn', 'lab', 'recall']

export default function Study({ portalOnly = false }: { portalOnly?: boolean }) {
  const { topicId } = useParams()
  const unit = UNIT_BY_ID.get(topicId ?? '')
  if (!unit) return <div className="empty-state"><h1 className="page-heading">That lesson is not in this course.</h1><p className="page-description">Your progress is unchanged. Find the current lesson on the course map.</p><Link className="text-link" to="/learn">Open course map <ArrowRight size={16} aria-hidden /></Link></div>
  return <StudySession key={`${unit.id}-${portalOnly ? 'portal' : 'lesson'}`} unit={unit} portalOnly={portalOnly} />
}

function StudySession({ unit, portalOnly }: { unit: CourseUnit; portalOnly: boolean }) {
  const learner = useLearnerState()
  const { state, saveStudyProgress, setTopicState, pauseStudy, addToRetrievalQueue, endSession } = learner
  const { prefs } = useUIPrefs()
  const navigate = useNavigate()
  const progress = state.study.units[unit.id] ?? emptyStudyUnit()
  const stage = portalOnly ? 'lab' : progress.stage
  const lessonIndex = Math.min(progress.lessonStep, unit.steps.length - 1)
  const step = unit.steps[lessonIndex]
  const stageIndex = stage === 'complete' ? 3 : STAGES.indexOf(stage)
  const prerequisites = missingPrerequisites(unit, state)
  const finishGuard = useRef(false)
  const [tutorOpen, setTutorOpen] = useState(false)
  const mastery = state.topics[unit.id]?.state ?? 'not-encountered'

  useEffect(() => {
    saveStudyProgress(unit.id, portalOnly ? { stage: 'lab' } : {})
    if (!portalOnly && mastery === 'not-encountered') {
      setTopicState(unit.id, 'introduced', 'Opened a corpus-grounded teaching unit; no mastery inferred.')
    }
    // Opening a route records its location once, not on every note edit.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unit.id, portalOnly, saveStudyProgress, setTopicState])

  useEffect(() => {
    document.getElementById('lesson-step-title')?.focus({ preventScroll: true })
  }, [stage, lessonIndex])

  function change(patch: Partial<StudyUnitProgress>) {
    saveStudyProgress(unit.id, patch)
  }

  function stop() {
    pauseStudy()
    navigate('/')
  }

  function advanceLesson(andStop = false) {
    if (lessonIndex === unit.steps.length - 1) {
      change({ lessonComplete: true, stage: 'lab' })
    } else {
      change({ lessonStep: lessonIndex + 1 })
    }
    if (andStop) stop()
  }

  function selectStage(index: number) {
    if (index === 2 && !progress.lessonComplete) return
    change({ stage: STAGES[index] })
    if (portalOnly && index !== 1) navigate(`/learn/${unit.id}`)
  }

  function continueFromLab(skipped: boolean) {
    change({
      labSkipped: skipped && !progress.portalCompletedAt,
      stage: progress.lessonComplete ? 'recall' : 'learn',
    })
    if (portalOnly) navigate(`/learn/${unit.id}`)
  }

  function finishLesson() {
    if (finishGuard.current || !progress.checkAnswerId || !progress.lessonComplete) return
    finishGuard.current = true
    const correct = progress.checkAnswerId === unit.check.correctOptionId
    change({ stage: 'complete', completedAt: new Date().toISOString() })
    if (correct && !progress.checkAssisted) {
      if (MASTERY_ORDER.indexOf(mastery) < MASTERY_ORDER.indexOf('understood')) {
        setTopicState(unit.id, 'understood', 'Answered an immediate application check after teaching. Spaced retrieval and transfer are still needed.')
      }
    } else if (progress.checkAnswerId !== 'unsure' && !correct) {
      setTopicState(unit.id, 'needs-repair', 'A taught decision boundary needs another pass; the lesson included corrective feedback.')
    }
    addToRetrievalQueue(unit.id, !correct && progress.checkAnswerId !== 'unsure' ? 'miss' : 'review')
    endSession()
  }

  const nextAction = chooseCoachingAction(COURSE_UNITS, BUILD_PROJECTS, state)

  return (
    <div>
      <div className="lesson-toolbar">
        <Link className="text-link" to={portalOnly ? '/labs' : '/learn'}><ArrowLeft size={16} aria-hidden />{portalOnly ? 'All fieldwork' : CLUSTER_LABELS[unit.cluster]}</Link>
        <button className="quiet-button" type="button" onClick={stop}><Pause size={16} aria-hidden />Done for now</button>
      </div>
      <div className="mb-7">
        <h1 className="page-heading max-w-3xl">{stage === 'lab' ? unit.lab.azure.title : unit.title}</h1>
        <div className="lesson-metadata mt-4">
          {stage === 'lab' ? <><span><Clock size={15} aria-hidden />About {unit.lab.azure.minutes} min</span><span>{unit.lab.azure.environment === 'portal-and-code' ? 'Portal setup + code' : unit.lab.azure.environment === 'foundry' ? 'Microsoft Foundry' : 'Azure portal'}</span></>
            : <><span><Clock size={15} aria-hidden />About {unit.minutes} min to understand</span><span>{unit.steps.length} short teaching steps</span><Link className="text-link min-h-0" to={`/sources?unit=${unit.id}`}>{unit.sourceIds.length} sources</Link></>}
        </div>
      </div>

      {prerequisites.length > 0 && !progress.lessonComplete && (
        <div className="inline-warning">
          <Info size={19} aria-hidden /><div><p>This builds on {prerequisites.map((id) => UNIT_BY_ID.get(id)?.title ?? id).join(', ')}. You can read ahead, but start there if the mechanism feels unfamiliar.</p><Link className="text-link" to={`/learn/${prerequisites[0]}`}>Start with the prerequisite <ArrowRight size={14} aria-hidden /></Link></div>
        </div>
      )}

      {stage === 'lab' ? <details className="fieldwork-context"><summary>How this task connects to your build</summary><BuildContext unitId={unit.id} /></details> : <BuildContext unitId={unit.id} />}
      <div className="lesson-layout">
        <div className="lesson-sheet">
          <StudyStepper current={stageIndex} unlocked={progress.lessonComplete ? 2 : stage === 'lab' ? 1 : 0} learningCompleted={progress.lessonComplete} portalCompleted={Boolean(progress.portalCompletedAt)} onSelect={selectStage} />
          <motion.div key={`${stage}-${stage === 'learn' ? lessonIndex : ''}`} initial={prefs.motion === 'off' ? false : { opacity: 0.8, x: prefs.motion === 'full' ? 6 : 0 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: prefs.motion === 'off' ? 0 : 0.18 }}>
            {stage === 'learn' && (
              <div className="teaching-content">
                <h2 id="lesson-step-title" tabIndex={-1}>{step.title}</h2>
                <p className="body-copy">{step.body}</p>
                {step.example && <div className="lesson-example"><span>Make it concrete</span>{step.example}</div>}
                {step.code && <CodeBlock code={step.code} label="From concept to implementation" />}
                <div className="step-navigation">
                  <div className="step-position"><span>Part {lessonIndex + 1} of {unit.steps.length}</span><span>{lessonIndex === unit.steps.length - 1 ? 'Next: guided Azure fieldwork' : 'One idea at a time'}</span></div>
                  <div className="flex items-center gap-2">
                    {lessonIndex > 0 && <button type="button" className="icon-button" aria-label="Previous teaching step" onClick={() => change({ lessonStep: lessonIndex - 1 })}><ArrowLeft size={18} aria-hidden /></button>}
                    {state.study.sessionMinutes === 5 ? <button type="button" className="primary-button" onClick={() => advanceLesson(true)}>Save & stop here <Pause size={15} aria-hidden /></button>
                      : <button type="button" className="primary-button" onClick={() => advanceLesson()}>{lessonIndex === unit.steps.length - 1 ? 'Try it in Azure' : 'Next small step'}<ArrowRight size={16} aria-hidden /></button>}
                  </div>
                </div>
                {state.study.sessionMinutes === 5 && <button type="button" className="text-link mt-3" onClick={() => advanceLesson()}>I have room for another step <ArrowRight size={14} aria-hidden /></button>}
              </div>
            )}
            {stage === 'lab' && <PortalGuide unit={unit} progress={progress} onChange={change} onContinue={continueFromLab} compact />}
            {stage === 'recall' && progress.lessonComplete && <RecallStep unit={unit} progress={progress} onChange={change} onFinish={finishLesson} />}
            {stage === 'recall' && !progress.lessonComplete && <div className="teaching-content"><h2>Meet the idea before checking it.</h2><p className="body-copy">The short teaching steps come first. This is not a test of something you have not been taught.</p><button className="primary-button mt-6" type="button" onClick={() => change({ stage: 'learn' })}>Start the explanation</button></div>}
            {stage === 'complete' && (
              <section className="completion">
                <div className="complete-symbol"><CheckCircle size={25} aria-hidden /></div>
                <h2 id="lesson-step-title" tabIndex={-1}>A good place to stop.</h2>
                <p>You have worked through this idea. That is progress, not a claim of mastery. A later recall session will help it stick.</p>
                <div className="completion-evidence">
                  <span><Check size={18} aria-hidden />{unit.steps.length} teaching steps explored</span>
                  <span>{progress.portalCompletedAt ? <Check size={18} aria-hidden /> : <Clock size={18} aria-hidden />}{progress.portalCompletedAt ? 'Azure observations recorded by you' : 'Azure fieldwork is still available when you are ready'}</span>
                  <span><BookOpen size={18} aria-hidden />{progress.checkAnswerId === unit.check.correctOptionId && !progress.checkAssisted ? 'An immediate check answered correctly; revisit later' : 'An idea to revisit, with feedback already available'}</span>
                </div>
                <p>{unit.transfer}</p>
                <div className="portal-actions">
                  <button type="button" className="primary-button" onClick={stop}>Done for now <Pause size={16} aria-hidden /></button>
                  {nextAction && <Link className="text-link" to={coachingHref(nextAction)} onClick={() => learner.setActiveProject(nextAction.projectId)}>{nextAction.kind === 'repair' ? 'Untangle the decision first' : 'Continue the build'}<ArrowRight size={15} aria-hidden /></Link>}
                </div>
              </section>
            )}
          </motion.div>
        </div>

        <aside className="lesson-margin" aria-label="Lesson context">
          {stage !== 'lab' && <div>
            <h2>Your path through this idea</h2>
            <ol className="chapter-path">
              {unit.steps.map((part, index) => <li key={part.title} className={stage === 'learn' && index === lessonIndex ? 'current' : ''}>{progress.lessonComplete || index < lessonIndex ? <Check size={13} aria-hidden /> : <Circle size={11} aria-hidden />}<span>{part.title}</span></li>)}
            </ol>
            <p>You can stop between any two steps. Your reading position, portal checkpoints, and notes travel with your progress export.</p>
          </div>}
          {stage !== 'lab' && <hr />}
          <div>
            <h2>Grounded, not guessed</h2>
            <div className="source-links">
              {(stage === 'lab' ? [unit.lab.azure.sourceId] : unit.sourceIds.slice(0, 3)).map((id) => {
                const source = getSource(id)
                return <Link to={`/sources/${encodeURIComponent(source.id)}`} key={id}>{source.title}</Link>
              })}
            </div>
            <Link className="text-link mt-2" to={`/sources?unit=${unit.id}`}>All {unit.sourceIds.length} sources <ArrowRight size={13} aria-hidden /></Link>
          </div>
        </aside>
      </div>

      {unit.sourceNote && <details className="hint-disclosure mt-6"><summary>About this source snapshot</summary><p>{unit.sourceNote}</p></details>}
      <details className="hint-disclosure mt-7" onToggle={(event) => setTutorOpen(event.currentTarget.open)}>
        <summary>Ask a follow-up question (optional AI tutor)</summary>
        {tutorOpen && <Suspense fallback={<div className="skeleton-line w-2/3" role="status" aria-label="Loading optional tutor" />}><TutorChat key={unit.id} topic={TOPICS.find((topic) => topic.id === unit.id)} /></Suspense>}
      </details>
    </div>
  )
}

function RecallStep({ unit, progress, onChange, onFinish }: {
  unit: CourseUnit
  progress: StudyUnitProgress
  onChange: (patch: Partial<StudyUnitProgress>) => void
  onFinish: () => void
}) {
  const { appendSessionLog } = useLearnerState()
  const finishAnswer = useAnswerTimer(unit.id)
  const answered = Boolean(progress.checkAnswerId)

  function answer(id: string) {
    if (answered) return
    const msToAnswer = finishAnswer()
    if (msToAnswer === null) return
    onChange({ checkAnswerId: id, checkAssisted: progress.checkAssisted || id === 'unsure' })
    if (id !== 'unsure') appendSessionLog({
      topicId: unit.id,
      itemId: `scenario-${unit.id}`,
      itemType: 'mcq',
      correct: id === unit.check.correctOptionId,
      timestamp: new Date().toISOString(),
      msToAnswer,
      selectedOptionId: id,
    })
  }

  return (
    <div className="teaching-content">
      <h2 id="lesson-step-title" tabIndex={-1}>Bring the idea back.</h2>
      <p className="recall-prompt">{unit.recall.prompt}</p>
      <label className="field-label mt-5 block" htmlFor="recall-reflection">In your own words</label>
      <textarea id="recall-reflection" className="study-textarea" maxLength={4000} value={progress.reflection} onChange={(event) => onChange({ reflection: event.target.value })} placeholder="A few words or a rough explanation is enough. This is not automatically graded." />
      <p className="field-note">Your explanation is for your own comparison; the app does not pretend to assess free text.</p>
      {!progress.recallRevealed && <div className="portal-actions">
        <button className="primary-button" type="button" disabled={!progress.reflection.trim()} onClick={() => onChange({ recallRevealed: true })}>Compare my explanation <ArrowRight size={16} aria-hidden /></button>
        <button className="quiet-button" type="button" onClick={() => onChange({ recallRevealed: true, checkAssisted: true })}>I don't know yet</button>
      </div>}
      {progress.recallRevealed && (
        <>
          <div className="lesson-example"><span>{progress.checkAssisted ? 'Here is the connection to rebuild' : 'Compare the mechanism, not the wording'}</span>{unit.recall.answer}</div>
          <section className="check-reveal" aria-labelledby="application-check">
            <h3 id="application-check" className="text-base font-medium">Now change the situation.</h3>
            <ApplicationCheck check={unit.check} selectedId={progress.checkAnswerId} onAnswer={answer} />
          </section>
          {answered && <div className="step-navigation"><span className="step-position">A later review matters more than an immediate repeat.</span><button className="primary-button" type="button" onClick={onFinish}>Finish this lesson <Check size={16} aria-hidden /></button></div>}
        </>
      )}
    </div>
  )
}
