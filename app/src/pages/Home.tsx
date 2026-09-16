import { ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ClusterBadge } from '@/components/ClusterBadge'
import { CountUp } from '@/components/effects/CountUp'
import { MotionGate } from '@/components/effects/MotionGate'
import { CLUSTER_ACCENT, TOPICS } from '@/data/topics'
import { useLearnerState } from '@/lib/learner-state'
import { useUIPrefs } from '@/lib/ui-prefs'

export default function Home() {
  const { state, nextTopicId, coverage, recordSessionTouch } = useLearnerState()
  const { prefs } = useUIPrefs()

  useEffect(() => {
    recordSessionTouch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const nextTopic = TOPICS.find((t) => t.id === nextTopicId)
  const isRetrieval = nextTopicId ? state.retrievalQueue.includes(nextTopicId) : false
  const allMastered = !nextTopicId

  return (
    <div className="flex flex-col gap-6">
      <MotionGate full={{ initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.35 } }}>
        {allMastered ? (
          <Card className="border-success/30 bg-success/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <CheckCircle2 className="size-5 text-success" aria-hidden /> Every v1 topic is mastered
              </CardTitle>
              <CardDescription>
                Nice work. Head to Exam mode for mixed retrieval, or Settings to unlock the AI chat panel for open-ended
                scenarios beyond the v1 topic list.
              </CardDescription>
            </CardHeader>
          </Card>
        ) : (
          <Card
            className="border-l-4"
            style={nextTopic ? { borderLeftColor: CLUSTER_ACCENT[nextTopic.cluster].fg } : undefined}
          >
            <CardHeader>
              <div className="mb-1 flex flex-wrap items-center gap-1.5">
                <Badge variant="secondary" className="w-fit">
                  {isRetrieval ? 'Due for retrieval' : 'Next up'}
                </Badge>
                {nextTopic && <ClusterBadge cluster={nextTopic.cluster} />}
              </div>
              <CardTitle className="text-2xl">{nextTopic?.title}</CardTitle>
              <CardDescription>{nextTopic?.orient}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" render={<Link to={isRetrieval ? '/practice' : `/learn/${nextTopic?.id}`} />} nativeButton={false}>
                {isRetrieval ? 'Practice retrieval' : 'Start learning'} <ArrowRight className="size-4" aria-hidden />
              </Button>
            </CardContent>
          </Card>
        )}
      </MotionGate>

      {state.itemsMasteredToday > 0 && (
        <p className="text-sm text-muted-foreground">
          <CountUp value={state.itemsMasteredToday} /> item{state.itemsMasteredToday === 1 ? '' : 's'} mastered today. That's
          a real session — stopping here is a completely fine place to be.
        </p>
      )}

      {!prefs.lowSpoons && (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Coverage</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              <CountUp value={coverage.mastered} /> mastered · <CountUp value={coverage.started} /> started of{' '}
              <CountUp value={coverage.total} /> v1 topics
            </p>
            <Link to="/progress" className="mt-2 inline-flex items-center gap-1 text-sm text-primary hover:underline">
              See full progress <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          </CardContent>
        </Card>
      )}

      {!prefs.lowSpoons && state.retrievalQueue.length > 0 && (
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <RotateCcw className="size-3.5" aria-hidden /> {state.retrievalQueue.length} topic
          {state.retrievalQueue.length === 1 ? '' : 's'} queued for retrieval practice.
        </p>
      )}
    </div>
  )
}
