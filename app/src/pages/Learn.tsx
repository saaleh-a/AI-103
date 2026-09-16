import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ClusterBadge } from '@/components/ClusterBadge'
import { MotionGate } from '@/components/effects/MotionGate'
import { TutorChat } from '@/components/chat/TutorChat'
import { CLUSTER_LABELS, TOPICS } from '@/data/topics'
import { FLASHCARDS } from '@/data/content'
import { LESSONS } from '@/data/lessons'
import { getManifestEntry, fetchCorpusFile } from '@/lib/search'
import { useLearnerState } from '@/lib/learner-state'

export default function Learn() {
  const { topicId } = useParams()
  const navigate = useNavigate()
  const { state, nextTopicId, setTopicState, addToRetrievalQueue } = useLearnerState()

  const activeId = topicId ?? nextTopicId ?? TOPICS[0].id
  const topic = TOPICS.find((t) => t.id === activeId) ?? TOPICS[0]
  const lesson = LESSONS[topic.id]
  const mastery = state.topics[topic.id]?.state ?? 'not-encountered'

  const [excerpt, setExcerpt] = useState<string | null>(null)
  const [sourceOpen, setSourceOpen] = useState(false)
  const [checkRevealed, setCheckRevealed] = useState(false)

  useEffect(() => {
    setExcerpt(null)
    setSourceOpen(false)
    setCheckRevealed(false)
    const primarySource = topic.corpusIds[0]
    const entry = getManifestEntry(primarySource)
    if (!entry) return
    fetchCorpusFile(entry.filename)
      .then(setExcerpt)
      .catch(() => setExcerpt(null))
  }, [topic.id, topic.corpusIds])

  const check = useMemo(() => FLASHCARDS.find((f) => f.topicId === topic.id), [topic.id])

  const otherTopicsInCluster = TOPICS.filter((t) => t.cluster === topic.cluster && t.id !== topic.id)

  function markUnderstood() {
    setTopicState(topic.id, mastery === 'not-encountered' || mastery === 'introduced' ? 'understood' : mastery, 'Self-reported understanding after reading the lesson.')
    addToRetrievalQueue(topic.id)
  }

  function needsMoreTime() {
    setTopicState(topic.id, 'introduced', 'Learner asked for more time before moving on.')
  }

  return (
    <div className="flex flex-col gap-6">
      <MotionGate full={{ initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3 } }}>
        <div>
          <ClusterBadge cluster={topic.cluster} className="mb-2 w-fit" />
          <h1 className="text-2xl font-semibold tracking-tight">{topic.title}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{topic.orient}</p>
        </div>
      </MotionGate>

      {lesson ? (
        <div className="flex flex-col gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">The problem</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed">{lesson.problem}</CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">The mental model</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed">{lesson.mentalModel}</CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">In Azure</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed">{lesson.azureMapping}</CardContent>
          </Card>
          {lesson.watchFor && (
            <Card className="border-primary/30 bg-primary/5">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-primary">Watch for</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed">{lesson.watchFor}</CardContent>
            </Card>
          )}
        </div>
      ) : (
        <Card className="border-dashed">
          <CardContent className="pt-6 text-sm text-muted-foreground">
            No authored lesson for this topic yet — read the source material below, or ask the tutor chat.
          </CardContent>
        </Card>
      )}

      <Card>
        <button
          type="button"
          onClick={() => setSourceOpen((o) => !o)}
          className="flex w-full items-center justify-between px-6 py-4 text-left"
        >
          <div>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {sourceOpen ? 'Original source' : 'Read the original source'}
            </CardTitle>
            <CardDescription className="mt-0.5">
              {getManifestEntry(topic.corpusIds[0])?.title}
              {topic.corpusIds.length > 1 && ` (+ ${topic.corpusIds.length - 1} more)`}
            </CardDescription>
          </div>
          {sourceOpen ? <ChevronDown className="size-4 shrink-0 text-muted-foreground" aria-hidden /> : <ChevronRight className="size-4 shrink-0 text-muted-foreground" aria-hidden />}
        </button>
        {sourceOpen && (
          <CardContent className="border-t border-border/60 pt-4">
            {excerpt === null ? (
              <p className="text-sm text-muted-foreground">Loading…</p>
            ) : (
              <div className="max-h-96 overflow-y-auto whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{excerpt}</div>
            )}
          </CardContent>
        )}
      </Card>

      {check && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Quick retrieval check</CardTitle>
            <CardDescription>{check.front}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {!checkRevealed ? (
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" onClick={() => setCheckRevealed(true)}>
                  I don't know
                </Button>
                <Button onClick={() => setCheckRevealed(true)}>Show answer</Button>
              </div>
            ) : (
              <p className="rounded-md bg-muted p-3 text-sm">{check.back}</p>
            )}
          </CardContent>
        </Card>
      )}

      <div className="flex flex-wrap gap-2">
        <Button onClick={markUnderstood}>Got it — mark understood</Button>
        <Button variant="outline" onClick={needsMoreTime}>
          Still shaky, keep it around
        </Button>
      </div>

      <TutorChat topic={topic} />

      {otherTopicsInCluster.length > 0 && (
        <div className="text-sm text-muted-foreground">
          Also in {CLUSTER_LABELS[topic.cluster]}:{' '}
          {otherTopicsInCluster.map((t, i) => (
            <span key={t.id}>
              {i > 0 && ', '}
              <button className="text-primary hover:underline" onClick={() => navigate(`/learn/${t.id}`)}>
                {t.title}
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
