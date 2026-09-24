import { ArrowLeft, ArrowRight, ArrowUpRight, Browser, Check, CheckCircle, Clock, Info, WarningCircle } from '@phosphor-icons/react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CodeBlock } from '@/components/study/CodeBlock'
import { BuildContinuity } from '@/components/study/BuildContext'
import { projectForUnit } from '@/data/projects'
import { getSource, publishedSourceUrl } from '@/data/curriculum/catalog'
import type { CourseUnit } from '@/data/curriculum/schema'
import { checkLabDraft, renderLabTemplate } from '@/lib/lab-rehearsal'
import type { StudyUnitProgress } from '@/lib/types'

export function PortalGuide({ unit, progress, onChange, onContinue, compact = false }: {
  unit: CourseUnit
  progress: StudyUnitProgress
  onChange: (patch: Partial<StudyUnitProgress>) => void
  onContinue: (skipped: boolean) => void
  compact?: boolean
}) {
  const guide = unit.lab.azure
  const project = projectForUnit(unit.id)
  const index = Math.min(progress.labStep, guide.steps.length - 1)
  const step = guide.steps[index]
  const last = index === guide.steps.length - 1
  const source = getSource(guide.sourceId)
  const sourceUrl = publishedSourceUrl(source)
  const [error, setError] = useState<{ checkpoint: number; message: string } | null>(null)
  const [reviewing, setReviewing] = useState(false)
  const heading = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    heading.current?.focus({ preventScroll: true })
  }, [index])

  function confirmCheckpoint() {
    if (last && !(progress.portalNotes[index] ?? '').trim()) {
      setError({ checkpoint: index, message: 'Record one observation from your Azure run before finishing. You can also leave the lab for later.' })
      return
    }
    const checks = guide.steps.map((_, stepIndex) => stepIndex === index || progress.portalChecks[stepIndex] === true)
    const finished = checks.every(Boolean)
    const nextUnchecked = checks.findIndex((checked, stepIndex) => !checked && stepIndex > index)
    onChange({
      portalChecks: checks,
      labStep: finished ? index : nextUnchecked >= 0 ? nextUnchecked : checks.indexOf(false),
      labSkipped: false,
      ...(finished ? { portalCompletedAt: new Date().toISOString() } : {}),
    })
    if (finished) setReviewing(false)
  }

  function saveNote(note: string) {
    setError(null)
    const notes = guide.steps.map((_, stepIndex) => stepIndex === index ? note : progress.portalNotes[stepIndex] ?? '')
    onChange({ portalNotes: notes })
  }

  const launchUrl = step.surface === 'Azure portal' ? 'https://portal.azure.com/'
    : step.surface === 'Microsoft Foundry' ? 'https://ai.azure.com/'
      : step.surface === 'Cloud Shell / local editor' ? 'https://shell.azure.com/'
        : sourceUrl

  return (
    <div className="teaching-content portal-guide">
      {!compact && <h2>{guide.title}</h2>}
      <p className={compact ? 'portal-goal' : 'body-copy'}>{unit.lab.goal}</p>
      {!compact && <div className="lesson-metadata mt-4">
        <span><Clock size={15} aria-hidden />About {guide.minutes} min</span>
        <span><Browser size={15} aria-hidden />{guide.environment === 'portal-and-code' ? 'Portal setup + code' : guide.environment === 'foundry' ? 'Microsoft Foundry' : 'Azure portal'}</span>
      </div>}

      <p className="portal-cost-notice"><Info size={15} aria-hidden /><span>Azure usage can incur charges. Use an approved subscription and dedicated lab resources. This site does not create resources.</span></p>
      <details className="portal-context">
        <summary><Info size={16} aria-hidden />Setup, costs & permissions</summary>
        <div>
          <p className="cost-warning">{guide.cost}</p>
          <p className="mt-2">This site does not create resources or connect to your account. You do the work in Azure and confirm what you observe.</p>
          <ul>{guide.prerequisites.map((prerequisite) => <li key={prerequisite}>{prerequisite}</li>)}</ul>
          <p className="mt-3">Portal labels and model availability can change. Use the original exercise if your screen differs from this corpus snapshot.</p>
          {sourceUrl && <a className="text-link" href={sourceUrl} target="_blank" rel="noopener noreferrer">Open original exercise <ArrowUpRight size={14} aria-hidden /></a>}
          <Link to={`/sources/${encodeURIComponent(source.id)}`} className="text-link ml-3">Read the bundled exercise</Link>
        </div>
      </details>
      <BuildContinuity unitId={unit.id} />

      {progress.portalCompletedAt && !reviewing ? (
        <section className="pt-7" aria-label="Recorded fieldwork">
          <div className="inline-note"><CheckCircle aria-hidden /><p><strong>Fieldwork recorded.</strong> These are your confirmed observations, not an automated check of Azure.</p></div>
          <p className="mt-5 text-sm leading-7">{guide.success}</p>
          {project && <div className="project-challenge"><h3>Go beyond the copied walkthrough.</h3><p>{project.challenge}</p><div className="flex flex-wrap gap-5"><Link className="text-link" to={`/build/${project.id}`}>Your build's practice material <ArrowRight size={14} aria-hidden /></Link><Link className="text-link" to={`/build/${project.id}#field-notebook`}>Open your field notebook <ArrowRight size={14} aria-hidden /></Link></div></div>}
          <details className="hint-disclosure">
            <summary>Read your field notes</summary>
            {progress.portalNotes.map((note, noteIndex) => note && <p key={noteIndex}><strong>{guide.steps[noteIndex]?.title ?? 'Observation'}:</strong> {note}</p>)}
          </details>
          <div className="portal-observation"><strong>Decide what to keep for the next build step</strong><p>Keep a dedicated lab resource only if you plan to reuse it and understand its ongoing charges. Recorded names do not prove a resource still exists.</p><p className="mt-2">{guide.cleanup}</p></div>
          <div className="portal-actions">
            <button className="primary-button" type="button" onClick={() => onContinue(false)}>{progress.lessonComplete && !progress.completedAt ? 'Recall what changed' : 'Return to the lesson'}<ArrowRight size={16} aria-hidden /></button>
            <button className="quiet-button" type="button" onClick={() => { onChange({ labStep: 0 }); setReviewing(true) }}>Revisit walkthrough</button>
          </div>
        </section>
      ) : (
        <>
          <div className="portal-meta">
            <span>Checkpoint {index + 1} of {guide.steps.length} · {step.surface}</span>
            {launchUrl && <a className="text-link" href={launchUrl} target="_blank" rel="noopener noreferrer">Open {step.surface === 'Cloud Shell / local editor' ? 'Cloud Shell' : step.surface === 'Browser' ? 'exercise' : step.surface}<ArrowUpRight size={15} aria-hidden /></a>}
          </div>
          <section className="portal-instruction" aria-labelledby="portal-step-title">
            <h3 id="portal-step-title" ref={heading} tabIndex={-1}>{step.title}</h3>
            <p>{step.instruction}</p>
            <div className="portal-observation"><strong>What you should see</strong>{step.expected}</div>
            <details className="hint-disclosure">
              <summary>My screen looks different / I am stuck</summary>
              <p>{step.hint ?? 'Check that the selected subscription, resource, region, and permissions match the exercise. Then open the original instructions above to compare the current interface. You can save this checkpoint and return later.'}</p>
            </details>
            <label className="field-label" htmlFor={`portal-note-${unit.id}`}>{last ? guide.evidencePrompt : 'Your observation (optional)'}</label>
            <textarea id={`portal-note-${unit.id}`} className="study-textarea" rows={3} maxLength={4000} value={progress.portalNotes[index] ?? ''} onChange={(event) => saveNote(event.target.value)} placeholder={last ? 'What happened when you tried it? What changed when you adjusted it?' : 'A result you noticed, a decision you made, or where you got stuck.'} aria-describedby="portal-note-help" />
            <p id="portal-note-help" className="field-note">Keep keys, tokens, personal data, and confidential content out of your notes.</p>
          </section>
          {error?.checkpoint === index && <p role="alert" className="mt-4 text-sm text-destructive">{error.message}</p>}
          <div className="portal-actions">
            {index > 0 && <button className="quiet-button" type="button" onClick={() => onChange({ labStep: index - 1 })}><ArrowLeft size={16} aria-hidden />Back</button>}
            <button className="primary-button" type="button" onClick={confirmCheckpoint}><Check size={16} aria-hidden />{last ? 'Record my fieldwork' : 'I have checked this'}{!last && <ArrowRight size={16} aria-hidden />}</button>
          </div>
          <div className="checklist-dots" aria-label={`${guide.steps.filter((_, stepIndex) => progress.portalChecks[stepIndex]).length} of ${guide.steps.length} checkpoints confirmed`}>
            {guide.steps.map((item, stepIndex) => <span key={item.title} className={progress.portalChecks[stepIndex] ? 'is-complete' : ''} />)}
          </div>
          <button className="text-link mt-3" type="button" onClick={() => onContinue(true)}>Leave Azure for later - keep learning</button>
          <details className="hint-disclosure">
            <summary>Cleanup instructions</summary>
            <p>{guide.cleanup}</p>
          </details>
        </>
      )}
      <LabRehearsal unit={unit} progress={progress} onChange={onChange} />
    </div>
  )
}

function LabRehearsal({ unit, progress, onChange }: {
  unit: CourseUnit
  progress: StudyUnitProgress
  onChange: (patch: Partial<StudyUnitProgress>) => void
}) {
  const [checked, setChecked] = useState(false)
  const results = checked ? checkLabDraft(unit.lab, progress.draft) : []
  const allPassed = results.length > 0 && results.every((result) => result.passed)

  return (
    <details className="lab-rehearsal">
      <summary>Optional: rehearse the configuration without Azure</summary>
      <p className="mt-3 text-sm leading-7">{unit.lab.context}</p>
      <p className="field-note">A local learning model. This checks your choices; it does not execute code, call a model, or create resources.</p>
      <div className="configuration-fields">
        {unit.lab.fields.map((field) => (
          <div key={field.id}>
            <label className="field-label" htmlFor={`field-${unit.id}-${field.id}`}>{field.label}</label>
            <select id={`field-${unit.id}-${field.id}`} value={progress.draft[field.id] ?? ''} aria-describedby={`hint-${field.id}`} onChange={(event) => {
              setChecked(false)
              onChange({ draft: { ...progress.draft, [field.id]: event.target.value } })
            }}>
              <option value="">Choose a value</option>
              {field.options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
            <p className="field-note" id={`hint-${field.id}`}>{field.hint}</p>
          </div>
        ))}
      </div>
      <CodeBlock code={renderLabTemplate(unit.lab, progress.draft)} label={`${unit.lab.language} configuration rehearsal`} />
      <button className="secondary-button mt-5" type="button" onClick={() => setChecked(true)}>Check this plan <ArrowRight size={15} aria-hidden /></button>
      {checked && <div className="rehearsal-result" role="status">
        <p className="font-medium">{allPassed ? 'These choices fit the task.' : 'A few choices need another look.'}</p>
        <ul>{results.map((result) => <li key={result.id}>{result.passed ? <Check size={16} className="text-primary" aria-hidden /> : <WarningCircle size={16} aria-hidden />}<span><strong>{result.label}:</strong> {result.message}</span></li>)}</ul>
        {allPassed && <><div className="portal-observation"><strong>Expected behavior, not a live Azure result</strong><p className="whitespace-pre-wrap">{unit.lab.expectedOutput}</p></div><p>{unit.lab.takeaway}</p></>}
      </div>}
    </details>
  )
}
