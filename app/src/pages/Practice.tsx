import { CheckCircle2, XCircle } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ClusterBadge } from '@/components/ClusterBadge'
import { Progress as ProgressBar } from '@/components/ui/progress'
import { MotionGate } from '@/components/effects/MotionGate'
import { FLASHCARDS, MCQ_ITEMS } from '@/data/content'
import { TOPICS } from '@/data/topics'
import { useLearnerState } from '@/lib/learner-state'
import type { MasteryState } from '@/lib/types'

const SESSION_SIZE = 8

type QueueItem = { kind: 'flashcard'; id: string } | { kind: 'mcq'; id: string }

function buildQueue(retrievalQueue: string[]): QueueItem[] {
  const priority = new Set(retrievalQueue)
  const flashcards = FLASHCARDS.map((f) => ({ kind: 'flashcard' as const, id: f.id, topicId: f.topicId }))
  const mcqs = MCQ_ITEMS.map((m) => ({ kind: 'mcq' as const, id: m.id, topicId: m.topicId }))
  const all = [...flashcards, ...mcqs]
  const prioritized = all.filter((i) => priority.has(i.topicId))
  const rest = all.filter((i) => !priority.has(i.topicId))
  // simple shuffle so repeat sessions don't feel identical
  const shuffledRest = [...rest].sort(() => Math.random() - 0.5)
  return [...prioritized, ...shuffledRest].slice(0, SESSION_SIZE).map(({ kind, id }) => ({ kind, id }))
}

export default function Practice() {
  const { state, setTopicState, removeFromRetrievalQueue, addToRetrievalQueue } = useLearnerState()
  const [queue] = useState<QueueItem[]>(() => buildQueue(state.retrievalQueue))
  const [index, setIndex] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const current = queue[index]
  const flashcard = current?.kind === 'flashcard' ? FLASHCARDS.find((f) => f.id === current.id) : undefined
  const mcq = current?.kind === 'mcq' ? MCQ_ITEMS.find((m) => m.id === current.id) : undefined
  const topic = TOPICS.find((t) => t.id === (flashcard?.topicId ?? mcq?.topicId))

  function progressTopic(topicId: string, remembered: boolean) {
    const current = state.topics[topicId]?.state ?? 'not-encountered'
    if (remembered) {
      const next: MasteryState = current === 'understood' || current === 'not-encountered' || current === 'introduced' ? 'retrievable' : current === 'retrievable' ? 'discriminable' : 'mastered'
      setTopicState(topicId, next, 'Correct in a practice session.')
      if (next === 'mastered') removeFromRetrievalQueue(topicId)
    } else {
      setTopicState(topicId, 'needs-repair', 'Missed in a practice session.')
      addToRetrievalQueue(topicId)
    }
  }

  function next() {
    setRevealed(false)
    setSelectedOption(null)
    setIndex((i) => i + 1)
  }

  function done() {
    return index >= queue.length
  }

  if (queue.length === 0) {
    return <p className="text-muted-foreground">No practice content yet — try Learn first.</p>
  }

  if (done()) {
    return (
      <MotionGate full={{ initial: { opacity: 0, scale: 0.98 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.3 } }}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <CheckCircle2 className="size-5 text-success" aria-hidden /> Session complete
            </CardTitle>
            <CardDescription>
              {correctCount} of {queue.length} remembered cleanly. That's a real session — stopping here is fine.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-2">
            <Button render={<Link to="/" />} nativeButton={false}>
              Back to Continue
            </Button>
            <Button variant="outline" onClick={() => window.location.reload()}>
              Another round
            </Button>
          </CardContent>
        </Card>
      </MotionGate>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <ProgressBar value={(index / queue.length) * 100} className="h-1.5 flex-1" />
        <span className="text-xs text-muted-foreground">
          {index + 1} / {queue.length}
        </span>
      </div>

      {topic && (
        <ClusterBadge cluster={topic.cluster} className="w-fit">
          {topic.title}
        </ClusterBadge>
      )}

      {flashcard && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{flashcard.front}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {revealed && <p className="rounded-md bg-muted p-3 text-sm">{flashcard.back}</p>}
            {!revealed ? (
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" onClick={() => setRevealed(true)}>
                  I don't know
                </Button>
                <Button onClick={() => setRevealed(true)}>Show answer</Button>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    progressTopic(flashcard.topicId, false)
                    next()
                  }}
                >
                  Still shaky
                </Button>
                <Button
                  onClick={() => {
                    progressTopic(flashcard.topicId, true)
                    setCorrectCount((c) => c + 1)
                    next()
                  }}
                >
                  Remembered it
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {mcq && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">{mcq.scenario}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {mcq.options.map((opt) => {
              const isSelected = selectedOption === opt.id
              const isCorrect = opt.id === mcq.correctOptionId
              const showResult = selectedOption !== null
              return (
                <button
                  key={opt.id}
                  disabled={showResult}
                  onClick={() => setSelectedOption(opt.id)}
                  className={`flex items-center gap-2 rounded-md border px-3 py-2 text-left text-sm transition-colors ${
                    showResult && isCorrect
                      ? 'border-success bg-success/10'
                      : showResult && isSelected
                        ? 'border-destructive bg-destructive/10'
                        : 'border-border hover:bg-muted'
                  }`}
                >
                  {showResult && isCorrect && <CheckCircle2 className="size-4 shrink-0 text-success" aria-hidden />}
                  {showResult && isSelected && !isCorrect && <XCircle className="size-4 shrink-0 text-destructive" aria-hidden />}
                  <span>{opt.text}</span>
                </button>
              )
            })}
            {selectedOption && (
              <div className="mt-2 flex flex-col gap-2 rounded-md bg-muted p-3 text-sm">
                <p>{mcq.explanation}</p>
                {selectedOption !== mcq.correctOptionId && mcq.distractorNotes[selectedOption] && (
                  <p className="text-muted-foreground">Why that one's tempting: {mcq.distractorNotes[selectedOption]}</p>
                )}
                <Button
                  className="w-fit"
                  onClick={() => {
                    const remembered = selectedOption === mcq.correctOptionId
                    if (remembered) setCorrectCount((c) => c + 1)
                    progressTopic(mcq.topicId, remembered)
                    next()
                  }}
                >
                  Continue
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
