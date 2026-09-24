// Adapted from React Bits Stepper. License: public/licenses/react-bits.txt.
import { BookOpen, Check, Clock } from '@phosphor-icons/react'
import { motion } from 'motion/react'
import { Fragment } from 'react'
import { useUIPrefs } from '@/lib/ui-prefs'
import { cn } from '@/lib/utils'

const LABELS = ['Understand', 'Try in Azure', 'Recall']

export function StudyStepper({ current, unlocked, onSelect, portalCompleted = false, learningCompleted = false }: {
  current: number
  unlocked: number
  onSelect: (step: number) => void
  portalCompleted?: boolean
  learningCompleted?: boolean
}) {
  const { prefs } = useUIPrefs()
  return (
    <nav className="study-stepper" aria-label="Lesson stages">
      {LABELS.map((label, index) => {
        const completed = index === 0 ? learningCompleted : index === 1 ? portalCompleted : current > 2
        const deferred = current > index && !completed
        const status = current === index ? 'active' : completed ? 'complete' : deferred ? 'deferred' : 'inactive'
        return (
          <Fragment key={label}>
            <button
              type="button"
              className={cn('step-indicator', `step-${status}`)}
              disabled={index > unlocked}
              aria-current={current === index ? 'step' : undefined}
              onClick={() => onSelect(index)}
            >
              <motion.span className="step-number" initial={false} animate={{ opacity: status === 'inactive' ? 0.7 : 1 }} transition={{ duration: prefs.motion === 'off' ? 0 : 0.18 }}>
                {status === 'complete' ? <Check size={15} weight="bold" aria-hidden /> : deferred ? index === 0 ? <BookOpen size={15} aria-hidden /> : <Clock size={15} aria-hidden /> : index + 1}
              </motion.span>
              <span>{deferred ? index === 0 ? 'Learn first' : 'Azure later' : label}</span>
            </button>
            {index < LABELS.length - 1 && (
              <span className="step-connector" aria-hidden>
                <motion.span initial={false} animate={{ scaleX: current > index ? 1 : 0 }} transition={{ duration: prefs.motion === 'off' ? 0 : 0.2 }} />
              </span>
            )}
          </Fragment>
        )
      })}
    </nav>
  )
}
