import { useEffect, useState } from 'react'
import { createAnswerTimer } from '@/lib/session-log'

export function useAnswerTimer(index: number | string) {
  const [timer] = useState(() => createAnswerTimer())
  useEffect(() => {
    timer.reset()
  }, [index, timer])
  return timer.finish
}
