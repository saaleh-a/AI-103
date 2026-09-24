import Anthropic from '@anthropic-ai/sdk'
import { CLUSTER_LABELS, TOPICS } from '@/data/topics'
import { fetchCorpusFile, getManifestEntry, searchCorpus } from '@/lib/search'
import { CORPUS_SOURCES } from '@/data/curriculum/catalog'
import { BUILD_PROJECTS } from '@/data/projects'
import { formatRetrievalQueue } from '@/lib/retrieval'
import type { LearnerState } from '@/lib/types'

export const TUTOR_MODEL = 'claude-sonnet-5'
const API_KEY_STORAGE_KEY = 'ai103-anthropic-api-key'

export function getStoredApiKey(): string | null {
  try {
    return localStorage.getItem(API_KEY_STORAGE_KEY)
  } catch (error) {
    if (!(error instanceof DOMException)) throw error
    console.warn('[tutor] Browser storage is unavailable.', error)
    return null
  }
}

export function setStoredApiKey(key: string | null): boolean {
  try {
    if (key) localStorage.setItem(API_KEY_STORAGE_KEY, key)
    else localStorage.removeItem(API_KEY_STORAGE_KEY)
    return true
  } catch (error) {
    if (!(error instanceof DOMException)) throw error
    console.warn('[tutor] The API key could not be saved.', error)
    return false
  }
}

export function hasApiKey(): boolean {
  return !!getStoredApiKey()
}

function client(apiKey: string) {
  return new Anthropic({ apiKey, dangerouslyAllowBrowser: true })
}

export interface ChatMessage {
  role: 'user' | 'assistant'
  text: string
}

export interface StateUpdatePayload {
  topic_updates?: { topicId: string; state: string; evidence?: string }[]
  add_strength?: string[]
  add_weakness?: string[]
  add_confusion?: string[]
  add_retrieval_queue?: string[]
}

export const UPDATE_LEARNER_STATE_TOOL: Anthropic.Tool = {
  name: 'update_learner_state',
  description:
    "Record durable, evidenced changes to the learner's mastery state (constitution Section 37). Call this when you have real evidence a topic's mastery level changed, or a strength/weakness/confusion/retrieval-queue item should be recorded — not for every message. Don't mark mastery without evidence (Section 8/37).",
  input_schema: {
    type: 'object',
    properties: {
      topic_updates: {
        type: 'array',
        description: 'Topics whose mastery state should change, with the evidence for why.',
        items: {
          type: 'object',
          properties: {
            topicId: { type: 'string', description: 'A topic id from the curriculum map provided in context.' },
            state: {
              type: 'string',
              enum: ['not-encountered', 'introduced', 'understood', 'retrievable', 'discriminable', 'applicable', 'mastered', 'needs-repair'],
            },
            evidence: { type: 'string', description: 'One short sentence: what the learner said/did that justifies this.' },
          },
          required: ['topicId', 'state'],
        },
      },
      add_strength: { type: 'array', items: { type: 'string' } },
      add_weakness: { type: 'array', items: { type: 'string' } },
      add_confusion: { type: 'array', items: { type: 'string' } },
      add_retrieval_queue: { type: 'array', items: { type: 'string' }, description: 'Topic ids due for later retrieval practice.' },
    },
  },
}

function summarizeLearnerState(state: LearnerState): string {
  const byState: Record<string, string[]> = {}
  for (const t of TOPICS) {
    const s = state.topics[t.id]?.state ?? 'not-encountered'
    ;(byState[s] ??= []).push(t.id)
  }
  const lines = [
    `Coverage: ${TOPICS.length} topics total.`,
    ...Object.entries(byState).map(([s, ids]) => `  ${s}: ${ids.length} (${ids.slice(0, 8).join(', ')}${ids.length > 8 ? ', …' : ''})`),
    `Strengths: ${state.strengths.join('; ') || '(none yet)'}`,
    `Weaknesses: ${state.weaknesses.join('; ') || '(none yet)'}`,
    `Confusions: ${state.confusions.join('; ') || '(none yet)'}`,
    `Retrieval queue: ${formatRetrievalQueue(state.retrievalQueue)}`,
    `Sessions completed: ${state.sessionsCompleted}. Items mastered today: ${state.itemsMasteredToday}.`,
  ]
  return lines.join('\n')
}

function curriculumMap(): string {
  return TOPICS.map((t) => `- [${t.id}] (${CLUSTER_LABELS[t.cluster]}) ${t.title} — ${t.orient}`).join('\n')
}

export async function buildSystemPrompt(state: LearnerState, constitution: string): Promise<string> {
  const project = BUILD_PROJECTS.find((item) => item.id === state.study.activeProjectId) ?? BUILD_PROJECTS[0]
  return [
    constitution,
    '\n---\n# Current learner state (Section 37, live)\n',
    summarizeLearnerState(state),
    '\n---\n# Curriculum map (Section 6/38, supplied-corpus learning path; topic ids available for update_learner_state)\n',
    curriculumMap(),
    '\n---\n# Current practice build\n',
    `${project.title}\n${project.brief}\nTarget outcome: ${project.outcome}\n`,
    'Coach the next useful decision in this continuing build, not a generic tour of Microsoft Learn. First connect the concept to the build, then explain the mechanism, guide the next portal action, and ask what the learner observed. Do not assume that resources were deployed, do not request credentials, and do not treat source mapping, checklist confirmation, or immediate correctness as mastery. Resource names and private field notes are deliberately not included in this context.',
    '\n---\n',
    `The learning path maps all ${CORPUS_SOURCES.length} supplied source files. Source mapping and lesson completion are not evidence of mastery. Relevant source text is appended as [CORPUS CONTEXT] below the user message; treat it as the primary source of truth per Section 3 and say when it is insufficient. Portal walkthrough completion is self-reported, not a verified Azure execution. Keep guidance to the next concrete action, observable result, and safe stopping point.`,
  ].join('\n')
}

/** Simple RAG-lite: search the manifest, fetch the top matches\' cleaned text. */
export async function retrieveContext(query: string, limit = 4, sourceIds: readonly string[] = []): Promise<string> {
  const preferred = sourceIds.map(getManifestEntry).filter((entry) => entry !== undefined)
  const matches = searchCorpus(query, limit)
  const unique = new Map([...matches, ...preferred].map((entry) => [entry.id, entry]))
  const hits = [...unique.values()].sort((a, b) => Number(preferred.includes(b)) - Number(preferred.includes(a))).slice(0, limit)
  if (hits.length === 0) return ''
  const bodies = await Promise.all(
    hits.map(async (h) => {
      try {
        const text = await fetchCorpusFile(h.filename)
        return `### ${h.title}\nSource: ${h.source}\n\n${text.slice(0, 6000)}${text.length > 6000 ? '\n[Source truncated; do not infer details outside this excerpt.]' : ''}`
      } catch (error) {
        console.warn(`[tutor] Could not retrieve ${h.id}.`, error)
        throw new Error(`The source "${h.title}" could not be retrieved. Try again before using the tutor.`, { cause: error })
      }
    }),
  )
  return bodies.join('\n\n---\n\n')
}

export interface SendTurnResult {
  text: string
  stateUpdates: StateUpdatePayload[]
}

export async function sendTutorTurn(opts: {
  apiKey: string
  system: string
  history: ChatMessage[]
  userMessage: string
  corpusContext: string
}): Promise<SendTurnResult> {
  const anthropic = client(opts.apiKey)
  const userContent = opts.corpusContext
    ? `${opts.userMessage}\n\n[CORPUS CONTEXT]\n${opts.corpusContext}`
    : opts.userMessage

  const messages: Anthropic.MessageParam[] = [
    ...opts.history.map((m): Anthropic.MessageParam => ({ role: m.role, content: m.text })),
    { role: 'user', content: userContent },
  ]

  const response = await anthropic.messages.create({
    model: TUTOR_MODEL,
    max_tokens: 2048,
    system: opts.system,
    tools: [UPDATE_LEARNER_STATE_TOOL],
    messages,
  })

  let text = ''
  const stateUpdates: StateUpdatePayload[] = []
  for (const block of response.content) {
    if (block.type === 'text') text += block.text
    else if (block.type === 'tool_use' && block.name === 'update_learner_state') {
      stateUpdates.push(block.input as StateUpdatePayload)
    }
  }
  return { text, stateUpdates }
}
