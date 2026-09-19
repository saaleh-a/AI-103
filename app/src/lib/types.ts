// Section 6 of the constitution: the mastery ladder every topic moves through.
export type MasteryState =
  | 'not-encountered'
  | 'introduced'
  | 'understood'
  | 'retrievable'
  | 'discriminable'
  | 'applicable'
  | 'mastered'
  | 'needs-repair'

export const MASTERY_ORDER: MasteryState[] = [
  'not-encountered',
  'introduced',
  'understood',
  'retrievable',
  'discriminable',
  'applicable',
  'mastered',
]

export type DomainCluster =
  | 'agents-orchestration'
  | 'content-document'
  | 'language'
  | 'speech'
  | 'search-rag'
  | 'models-deploy-eval'

export interface Topic {
  id: string
  cluster: DomainCluster
  title: string
  /** One-sentence orientation: where this sits in the wider architecture. */
  orient: string
  /** corpus-manifest ids this topic is grounded in */
  corpusIds: string[]
}

export interface Flashcard {
  id: string
  topicId: string
  front: string
  back: string
}

export interface MCQItem {
  id: string
  topicId: string
  scenario: string
  options: { id: string; text: string }[]
  correctOptionId: string
  /** why each wrong option is tempting and why it fails */
  distractorNotes: Record<string, string>
  explanation: string
}

export interface DiscriminationRow {
  question: string
  a: string
  b: string
}

export interface DiscriminationTable {
  id: string
  clusterOrTopicIds: string[]
  techA: string
  techB: string
  rows: DiscriminationRow[]
}

export interface TopicMastery {
  state: MasteryState
  lastEvidenceAt?: string
  evidence: string[]
}

export interface SessionLogEntry {
  topicId: string
  itemType: 'flashcard' | 'mcq'
  itemId: string
  correct: boolean
  timestamp: string
  msToAnswer: number
}

export interface LearnerState {
  topics: Record<string, TopicMastery>
  strengths: string[]
  weaknesses: string[]
  confusions: string[]
  retrievalQueue: string[]
  sessionLog: SessionLogEntry[]
  sessionsCompleted: number
  itemsMasteredToday: number
  lastActiveAt?: string
  lastSessionDate?: string
}

export interface UIPrefs {
  motion: 'off' | 'subtle' | 'full'
  lowSpoons: boolean
  theme: 'system' | 'light' | 'dark'
}

export interface CorpusManifestEntry {
  id: string
  filename: string
  title: string
  source: string
  excerpt: string
  kind: 'episode' | 'cram' | 'learn-module'
}
