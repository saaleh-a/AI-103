const WORDS_PER_MINUTE = 200

// Rough reading-time estimate for a lesson's combined prose, at a normal
// reading pace. Rounded up so "~1 min" never undersells a short lesson.
export function estimateReadMinutes(...fields: (string | undefined)[]) {
  const words = fields.filter(Boolean).join(' ').trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE))
}

// Practice/exam sessions: flashcards read fast, MCQs need time to read the
// scenario, weigh options, and read the explanation.
const SECONDS_PER_FLASHCARD = 25
const SECONDS_PER_MCQ = 50

export function estimateSessionMinutes(counts: { flashcards?: number; mcqs?: number }) {
  const seconds = (counts.flashcards ?? 0) * SECONDS_PER_FLASHCARD + (counts.mcqs ?? 0) * SECONDS_PER_MCQ
  return Math.max(1, Math.ceil(seconds / 60))
}
