import type { DomainCluster } from '../../lib/types'

export type ExamDomain =
  | 'Plan and manage an Azure AI solution'
  | 'Implement generative AI and agentic solutions'
  | 'Implement computer vision solutions'
  | 'Implement text analysis solutions'
  | 'Implement information extraction solutions'

export interface TeachingStep {
  title: string
  body: string
  example?: string
  code?: string
}

export interface LabField {
  id: string
  label: string
  hint: string
  options: { value: string; label: string }[]
  expected: string
  explanation: string
}

export interface AzureExercise {
  title: string
  sourceId: number
  environment: 'foundry' | 'azure-portal' | 'portal-and-code'
  minutes: number
  cost: string
  prerequisites: string[]
  steps: {
    title: string
    surface: 'Azure portal' | 'Microsoft Foundry' | 'Cloud Shell / local editor' | 'Browser'
    instruction: string
    expected: string
    hint?: string
  }[]
  success: string
  evidencePrompt: string
  cleanup: string
}

export interface BuildLab {
  title: string
  goal: string
  context: string
  fields: LabField[]
  /** {{fieldId}} slots render the learner's choices; this is not executed. */
  template: string
  language: 'python' | 'json' | 'yaml' | 'text'
  expectedOutput: string
  takeaway: string
  azure: AzureExercise
}

export interface LearningCheck {
  question: string
  options: { id: string; text: string; explanation: string }[]
  correctOptionId: string
  explanation: string
}

export interface CourseUnit {
  id: string
  title: string
  cluster: DomainCluster
  examDomain: ExamDomain
  summary: string
  minutes: number
  order: number
  prerequisites: string[]
  sourceIds: number[]
  /** Short authored teaching, not raw corpus excerpts. */
  steps: TeachingStep[]
  lab: BuildLab
  check: LearningCheck
  recall: { prompt: string; answer: string }
  transfer: string
  sourceNote?: string
}
