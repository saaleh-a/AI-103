import { prioritizeDueItems } from './retrieval.ts'
import { hasLearnedTopic } from './study-state.ts'
import type { LearnerState } from './types'

export interface ReviewItem {
  kind: 'flashcard' | 'mcq'
  topicId: string
  id: string
}

export function buildReviewQueue(
  topicIds: readonly string[],
  state: Pick<LearnerState, 'topics' | 'study' | 'retrievalQueue'>,
  limit: number,
  requestedTopic?: string | null,
  now = Date.now(),
): ReviewItem[] {
  const eligible = topicIds.filter((id) => hasLearnedTopic(state, id) && (!requestedTopic || requestedTopic === id))
  const items: ReviewItem[] = eligible.flatMap((topicId) => [
    { kind: 'flashcard', topicId, id: `recall-${topicId}` },
    { kind: 'mcq', topicId, id: `scenario-${topicId}` },
  ])
  return prioritizeDueItems(items, state.retrievalQueue, now).slice(0, limit)
}

export function shuffled<T>(items: readonly T[], random = Math.random): T[] {
  const result = [...items]
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(random() * (index + 1))
    ;[result[index], result[swap]] = [result[swap], result[index]]
  }
  return result
}
