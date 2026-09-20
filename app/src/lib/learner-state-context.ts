import { createContext } from 'react'
import type { LearnerStateApi } from './learner-state'

export const LearnerStateContext = createContext<LearnerStateApi | null>(null)
