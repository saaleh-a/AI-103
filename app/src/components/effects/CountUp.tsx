import NumberFlow from '@number-flow/react'
import { useUIPrefs } from '@/lib/ui-prefs'

/** Animated count-up number, respecting the motion preference (falls back
 * to a static number instantly when motion is off). */
export function CountUp({ value, suffix = '' }: { value: number; suffix?: string }) {
  const { prefs } = useUIPrefs()
  if (prefs.motion === 'off') {
    return (
      <span>
        {value}
        {suffix}
      </span>
    )
  }
  return (
    <span>
      <NumberFlow value={value} transformTiming={{ duration: prefs.motion === 'full' ? 600 : 300, easing: 'ease-out' }} />
      {suffix}
    </span>
  )
}
