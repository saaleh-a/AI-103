import type { LearningCheck } from './schema'

export type ObjectiveId = `P${number}` | `G${number}` | `V${number}` | `T${number}` | `I${number}`

export interface ReasonedCheck extends LearningCheck {
  id: string
  reasoning: LearningCheck
  code?: string
}

export type ConstructionTask =
  | {
    kind: 'order'
    prompt: string
    parts: { id: string; text: string }[]
    expectedOrder: string[]
    explanation: string
  }
  | {
    kind: 'match'
    prompt: string
    options: { id: string; text: string }[]
    pairs: { id: string; prompt: string; expectedOptionId: string; explanation: string }[]
    explanation: string
  }
  | {
    kind: 'code'
    prompt: string
    code: string
    language: 'python' | 'json' | 'yaml'
    options: { id: string; text: string; explanation: string }[]
    correctOptionId: string
    explanation: string
  }

export interface LearningPack {
  unitId: string
  objectives: ObjectiveId[]
  construction: ConstructionTask
  /** First application, changed requirement, and two distinct delayed-review cases. */
  checks: [ReasonedCheck, ReasonedCheck, ReasonedCheck, ReasonedCheck, ...ReasonedCheck[]]
  explanationRubric: string[]
  transferRubric: string[]
  sourceLimits: string[]
  supplements: { title: string; url: string; usedFor: string; checkedAt: string }[]
}

export interface SourceAudit {
  sourceId: number
  kind: 'lesson' | 'exercise' | 'assessment' | 'overview' | 'summary' | 'transcript' | 'study-guide'
  /** Zero-based teaching-step positions, pointing at the actual authored explanation. */
  concepts: { label: string; unitId: string; teachingStep: number }[]
  supportingOnly: boolean
  limitations: string[]
  note: string
}
