import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MotionGate } from '@/components/effects/MotionGate'
import { TutorChat } from '@/components/chat/TutorChat'
import { CLUSTER_LABELS, TOPICS } from '@/data/topics'
import { FLASHCARDS } from '@/data/content'
import { getManifestEntry } from '@/lib/search'
import { fetchCorpusFile } from '@/lib/search'
import { useLearnerState } from '@/lib/learner-state'

export default function Learn() {
  const { topicId } = useParams()
  const navigate = useNavigate()
  const { state, nextTopicId, setTopicState, addToRetrievalQueue } = useLearnerState()

  const activeId = topicId ?? nextTopicId ?? TOPICS[0].id
  const topic = TOPICS.find((t) => t.id === activeId) ?? TOPICS[0]
  const mastery = state.topics[topic.id]?.state ?? 'not-encountered'

  const [excerpt, setExcerpt] = useState<string | null>(null)
  const [expanded, setExpanded] = useState(false)
  const [checkRevealed, setCheckRevealed] = useState(false)

  useEffect(() => {
    setExcerpt(null)
    setExpanded(false)
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
          <Badge variant="secondary" className="mb-2 w-fit">
            {CLUSTER_LABELS[topic.cluster]}
          </Badge>
          <h1 className="text-2xl font-semibold tracking-tight">{topic.title}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{topic.orient}</p>
        </div>
      </MotionGate>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Source material</CardTitle>
          <CardDescription>
            {getManifestEntry(topic.corpusIds[0])?.title}
            {topic.corpusIds.length > 1 && ` (+ ${topic.corpusIds.length - 1} more source${topic.corpusIds.length > 2 ? 's' : ''})`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {excerpt === null ? (
            <p className="text-sm text-muted-foreground">Loading…</p>
          ) : (
            <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-line text-sm leading-relaxed">
              {expanded ? excerpt : excerpt.slice(0, 900)}
              {!expanded && excerpt.length > 900 && '…'}
            </div>
          )}
          {excerpt && excerpt.length > 900 && (
            <Button variant="link" className="mt-1 px-0" onClick={() => setExpanded((e) => !e)}>
              {expanded ? 'Show less' : 'Read the rest'}
            </Button>
          )}
        </CardContent>
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
