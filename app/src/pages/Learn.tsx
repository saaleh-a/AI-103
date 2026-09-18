import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ClusterBadge } from '@/components/ClusterBadge'
import { MotionGate } from '@/components/effects/MotionGate'
import { TutorChat } from '@/components/chat/TutorChat'
import { CLUSTER_LABELS, CLUSTER_ORDER, TOPICS } from '@/data/topics'
import { FLASHCARDS } from '@/data/content'
import { LESSONS } from '@/data/lessons'
import { getManifestEntry, fetchCorpusFile } from '@/lib/search'
import { useLearnerState } from '@/lib/learner-state'

export default function Learn() {
  const { topicId } = useParams()
  return topicId ? <LearnTopic topicId={topicId} /> : <LearnIndex />
}

// The "Learn" nav link with no topic picked yet — a browsable table of
// contents across all 6 modules, so you can jump into any module directly
// instead of only ever landing on "whatever's next".
function LearnIndex() {
  const navigate = useNavigate()
  const { state } = useLearnerState()

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Learn</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Six modules, prerequisite-ordered within each. Jump into any topic — Previous/Next on a lesson page walks the
          whole curriculum in order.
        </p>
      </div>

      {CLUSTER_ORDER.map((cluster) => {
        const topicsInCluster = TOPICS.filter((t) => t.cluster === cluster)
        return (
          <Card key={cluster}>
            <CardHeader className="pb-2">
              <ClusterBadge cluster={cluster} className="w-fit" />
            </CardHeader>
            <CardContent className="flex flex-col gap-0.5">
              {topicsInCluster.map((t) => {
                const mastered = state.topics[t.id]?.state === 'mastered'
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => navigate(`/learn/${t.id}`)}
                    className="flex items-center justify-between gap-3 rounded-md px-2 py-1.5 text-left text-sm transition-colors hover:bg-muted"
                  >
                    <span className={mastered ? 'text-muted-foreground' : ''}>{t.title}</span>
                    {mastered && <CheckCircle2 className="size-4 shrink-0 text-success" aria-hidden />}
                  </button>
                )
              })}
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

function LearnTopic({ topicId }: { topicId: string }) {
  const navigate = useNavigate()
  const { state, setTopicState, addToRetrievalQueue } = useLearnerState()

  const topic = TOPICS.find((t) => t.id === topicId) ?? TOPICS[0]
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

  // Sequential prev/next through the whole v1 curriculum (TOPICS is already
  // ordered prerequisite-first, per the constitution's dependency rule) —
  // the one clear "what's next" action once a lesson is done. This also
  // carries you across module boundaries once a module's topics run out.
  const curriculumIndex = TOPICS.findIndex((t) => t.id === topic.id)
  const prevTopic = curriculumIndex > 0 ? TOPICS[curriculumIndex - 1] : undefined
  const nextCurriculumTopic = curriculumIndex >= 0 && curriculumIndex < TOPICS.length - 1 ? TOPICS[curriculumIndex + 1] : undefined
  const nextEntersNewModule = nextCurriculumTopic && nextCurriculumTopic.cluster !== topic.cluster

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
          <button
            type="button"
            onClick={() => navigate('/learn')}
            className="mb-2 flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
          >
            <LayoutGrid className="size-3.5" aria-hidden /> All modules
          </button>
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
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Where this fits</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed">{lesson.architecture}</CardContent>
          </Card>
          {lesson.implementation && (
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Implementation</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed">{lesson.implementation}</CardContent>
            </Card>
          )}
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

      <nav className="flex items-stretch justify-between gap-3 border-t border-border/60 pt-4" aria-label="Move between topics">
        {prevTopic ? (
          <button
            type="button"
            onClick={() => navigate(`/learn/${prevTopic.id}`)}
            className="flex min-w-0 flex-1 items-center gap-1.5 rounded-md px-2 py-1.5 text-left text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <ChevronLeft className="size-4 shrink-0" aria-hidden />
            <span className="min-w-0">
              <span className="block text-xs">Previous</span>
              <span className="block truncate text-sm font-medium">{prevTopic.title}</span>
            </span>
          </button>
        ) : (
          <span />
        )}
        {nextCurriculumTopic ? (
          <button
            type="button"
            onClick={() => navigate(`/learn/${nextCurriculumTopic.id}`)}
            className="flex min-w-0 flex-1 items-center justify-end gap-1.5 rounded-md bg-primary px-3 py-1.5 text-right text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <span className="min-w-0">
              <span className="block text-xs text-primary-foreground/80">
                {nextEntersNewModule ? `Next module: ${CLUSTER_LABELS[nextCurriculumTopic.cluster]}` : 'Next'}
              </span>
              <span className="block truncate text-sm font-medium">{nextCurriculumTopic.title}</span>
            </span>
            <ChevronRight className="size-4 shrink-0" aria-hidden />
          </button>
        ) : (
          <span className="flex flex-1 items-center justify-end text-sm text-muted-foreground">
            You've reached the end of the v1 curriculum.
          </span>
        )}
      </nav>

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
