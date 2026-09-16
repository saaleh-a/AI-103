import { CheckCircle2, XCircle } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress as ProgressBar } from '@/components/ui/progress'
import { MCQ_ITEMS } from '@/data/content'
import { CLUSTER_LABELS, TOPICS } from '@/data/topics'
import { useLearnerState } from '@/lib/learner-state'

function shuffledItems() {
  return [...MCQ_ITEMS].sort(() => Math.random() - 0.5)
}

export default function Exam() {
  const { setTopicState, addToRetrievalQueue } = useLearnerState()
  const [items] = useState(shuffledItems)
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [results, setResults] = useState<{ topicId: string; correct: boolean }[]>([])

  const current = items[index]
  const topic = current ? TOPICS.find((t) => t.id === current.topicId) : undefined
  const done = index >= items.length

  function answer(optionId: string) {
    if (!current) return
    setSelected(optionId)
    const correct = optionId === current.correctOptionId
    if (correct) {
      setTopicState(current.topicId, 'applicable', 'Correctly applied in exam mode.')
    } else {
      setTopicState(current.topicId, 'needs-repair', 'Missed in exam mode.')
      addToRetrievalQueue(current.topicId)
    }
    setResults((r) => [...r, { topicId: current.topicId, correct }])
  }

  function next() {
    setSelected(null)
    setIndex((i) => i + 1)
  }

  if (items.length === 0) {
    return <p className="text-muted-foreground">No exam questions yet.</p>
  }

  if (done) {
    const correctCount = results.filter((r) => r.correct).length
    const byCluster = new Map<string, { correct: number; total: number }>()
    for (const r of results) {
      const t = TOPICS.find((tp) => tp.id === r.topicId)
      if (!t) continue
      const entry = byCluster.get(t.cluster) ?? { correct: 0, total: 0 }
      entry.total += 1
      if (r.correct) entry.correct += 1
      byCluster.set(t.cluster, entry)
    }
    const missedTopicIds = [...new Set(results.filter((r) => !r.correct).map((r) => r.topicId))]

    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">
            {correctCount} / {results.length} correct
          </CardTitle>
          <CardDescription>Breakdown by domain, and what to revisit.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            {[...byCluster.entries()].map(([cluster, s]) => (
              <div key={cluster} className="flex items-center gap-3 text-sm">
                <span className="w-56 shrink-0">{CLUSTER_LABELS[cluster as keyof typeof CLUSTER_LABELS]}</span>
                <ProgressBar value={(s.correct / s.total) * 100} className="h-1.5 flex-1" />
                <span className="w-12 shrink-0 text-right text-muted-foreground">
                  {s.correct}/{s.total}
                </span>
              </div>
            ))}
          </div>
          {missedTopicIds.length > 0 && (
            <div>
              <p className="mb-1.5 text-sm font-medium">Worth revisiting</p>
              <ul className="flex flex-col gap-1">
                {missedTopicIds.map((id) => {
                  const t = TOPICS.find((tp) => tp.id === id)
                  return (
                    t && (
                      <li key={id}>
                        <Link to={`/learn/${id}`} className="text-sm text-primary hover:underline">
                          {t.title}
                        </Link>
                      </li>
                    )
                  )
                })}
              </ul>
            </div>
          )}
          <Button className="w-fit" render={<Link to="/" />} nativeButton={false}>
            Back to Continue
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <ProgressBar value={(index / items.length) * 100} className="h-1.5 flex-1" />
        <span className="text-xs text-muted-foreground">
          {index + 1} / {items.length}
        </span>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">{current.scenario}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          {current.options.map((opt) => {
            const isSelected = selected === opt.id
            const isCorrect = opt.id === current.correctOptionId
            const showResult = selected !== null
            return (
              <button
                key={opt.id}
                disabled={showResult}
                onClick={() => answer(opt.id)}
                className={`flex items-center gap-2 rounded-md border px-3 py-2 text-left text-sm transition-colors ${
                  showResult && isCorrect
                    ? 'border-primary bg-primary/10'
                    : showResult && isSelected
                      ? 'border-destructive bg-destructive/10'
                      : 'border-border hover:bg-muted'
                }`}
              >
                {showResult && isCorrect && <CheckCircle2 className="size-4 shrink-0 text-primary" aria-hidden />}
                {showResult && isSelected && !isCorrect && <XCircle className="size-4 shrink-0 text-destructive" aria-hidden />}
                <span>{opt.text}</span>
              </button>
            )
          })}
          {selected && (
            <div className="mt-2 flex flex-col gap-2 rounded-md bg-muted p-3 text-sm">
              <p>{current.explanation}</p>
              {selected !== current.correctOptionId && current.distractorNotes[selected] && (
                <p className="text-muted-foreground">Why that one's tempting: {current.distractorNotes[selected]}</p>
              )}
              <Button className="w-fit" onClick={next}>
                Next
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {topic && <p className="text-xs text-muted-foreground">Domain: {CLUSTER_LABELS[topic.cluster]}</p>}
    </div>
  )
}
