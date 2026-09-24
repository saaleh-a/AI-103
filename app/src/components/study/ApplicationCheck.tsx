import { CheckCircle, Circle, WarningCircle } from '@phosphor-icons/react'
import type { LearningCheck } from '@/data/curriculum/schema'

export function ApplicationCheck({ check, selectedId, onAnswer }: {
  check: LearningCheck
  selectedId?: string | null
  onAnswer: (id: string) => void
}) {
  const selected = check.options.find((option) => option.id === selectedId)
  const answered = Boolean(selectedId)
  const correct = selectedId === check.correctOptionId
  return (
    <>
      <p className="mt-3 text-sm leading-7">{check.question}</p>
      <div className="choice-list">
        {check.options.map((option) => (
          <button className={`choice${answered && option.id === check.correctOptionId ? ' is-correct' : answered && selectedId === option.id ? ' is-incorrect' : ''}`} key={option.id} type="button" disabled={answered} onClick={() => onAnswer(option.id)}>
            {answered && option.id === check.correctOptionId ? <CheckCircle size={17} aria-hidden /> : answered && selectedId === option.id ? <WarningCircle size={17} aria-hidden /> : <Circle size={16} aria-hidden />}
            <span>{option.text}</span>
          </button>
        ))}
      </div>
      {!answered && <button className="quiet-button mt-3" type="button" onClick={() => onAnswer('unsure')}>I don't know - show me the boundary</button>}
      {answered && <div className="check-feedback" role="status">
        <p className="font-medium">{correct ? 'That fits the requirement.' : selected ? 'This is the distinction to repair.' : 'Uncertainty is a useful place to start.'}</p>
        {selected && <p className="mt-2">{selected.explanation}</p>}
        <p className="mt-3">{check.explanation}</p>
        <details className="hint-disclosure"><summary>Why the other options differ</summary>{check.options.filter((option) => option.id !== selectedId).map((option) => <p key={option.id}><strong>{option.text}</strong><br />{option.explanation}</p>)}</details>
      </div>}
    </>
  )
}
