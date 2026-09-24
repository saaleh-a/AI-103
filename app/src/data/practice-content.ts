import { COURSE_UNITS } from './curriculum/index.ts'
import type { Flashcard, MCQItem } from '../lib/types'

export { DISCRIMINATION_TABLES } from './content.ts'

export const FLASHCARDS: Flashcard[] = COURSE_UNITS.map((unit) => ({
  id: `recall-${unit.id}`,
  topicId: unit.id,
  front: unit.recall.prompt,
  back: unit.recall.answer,
}))

export const MCQ_ITEMS: MCQItem[] = COURSE_UNITS.map((unit) => ({
  id: `scenario-${unit.id}`,
  topicId: unit.id,
  scenario: unit.check.question,
  options: unit.check.options.map(({ id, text }) => ({ id, text })),
  correctOptionId: unit.check.correctOptionId,
  distractorNotes: Object.fromEntries(unit.check.options.map((option) => [option.id, option.explanation])),
  explanation: unit.check.explanation,
}))
