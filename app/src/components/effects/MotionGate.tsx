import { motion, type HTMLMotionProps } from 'motion/react'
import type { ReactNode } from 'react'
import { useUIPrefs } from '@/lib/ui-prefs'

/**
 * Wraps children in a motion.div, but only actually animates when the
 * viewer's motion preference allows it (Settings toggle, defaulting from
 * prefers-reduced-motion). With motion off, renders a plain div — content
 * is never gated behind an animation completing.
 */
export function MotionGate({
  children,
  full,
  ...props
}: HTMLMotionProps<'div'> & { children: ReactNode; full?: HTMLMotionProps<'div'> }) {
  const { prefs } = useUIPrefs()

  if (prefs.motion === 'off') {
    return <div className={props.className}>{children}</div>
  }

  const reduced = prefs.motion === 'subtle'
  const merged: HTMLMotionProps<'div'> = reduced
    ? {
        ...props,
        initial: props.initial ?? { opacity: 0 },
        animate: props.animate ?? { opacity: 1 },
        transition: { duration: 0.2 },
      }
    : { ...props, ...full }

  return <motion.div {...merged}>{children}</motion.div>
}
