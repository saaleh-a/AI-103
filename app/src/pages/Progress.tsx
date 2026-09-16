import { Bar } from '@/components/charts/bar'
import { BarChart } from '@/components/charts/bar-chart'
import { Grid } from '@/components/charts/grid'
import { RadarArea } from '@/components/charts/radar-area'
import { RadarAxis } from '@/components/charts/radar-axis'
import { RadarChart } from '@/components/charts/radar-chart'
import { RadarGrid } from '@/components/charts/radar-grid'
import { RadarLabels } from '@/components/charts/radar-labels'
import { Ring } from '@/components/charts/ring'
import { RingCenter } from '@/components/charts/ring-center'
import { RingChart } from '@/components/charts/ring-chart'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CLUSTER_ACCENT, CLUSTER_LABELS, CLUSTER_ORDER, TOPICS } from '@/data/topics'
import { useLearnerState } from '@/lib/learner-state'
import { useUIPrefs } from '@/lib/ui-prefs'

export default function Progress() {
  const { state, coverage } = useLearnerState()
  const { prefs } = useUIPrefs()
  const animate = prefs.motion !== 'off'

  const barData = CLUSTER_ORDER.map((cluster) => {
    const topicsInCluster = TOPICS.filter((t) => t.cluster === cluster)
    const mastered = topicsInCluster.filter((t) => state.topics[t.id]?.state === 'mastered').length
    return { name: CLUSTER_LABELS[cluster].replace('Azure AI ', '').replace('Models: ', ''), mastered, total: topicsInCluster.length }
  })

  const radarMetrics = CLUSTER_ORDER.map((cluster) => ({ key: cluster, label: CLUSTER_LABELS[cluster].replace('Azure AI ', '').replace('Models: ', '') }))
  const radarValues: Record<string, number> = {}
  for (const cluster of CLUSTER_ORDER) {
    const topicsInCluster = TOPICS.filter((t) => t.cluster === cluster)
    const started = topicsInCluster.filter((t) => (state.topics[t.id]?.state ?? 'not-encountered') !== 'not-encountered').length
    radarValues[cluster] = topicsInCluster.length ? Math.round((started / topicsInCluster.length) * 100) : 0
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Progress</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {coverage.mastered} of {coverage.total} v1 topics mastered, {coverage.started} started.
        </p>
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-1.5">
        {CLUSTER_ORDER.map((cluster) => (
          <span key={cluster} className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="size-2 shrink-0 rounded-full" style={{ backgroundColor: CLUSTER_ACCENT[cluster].fg }} aria-hidden />
            {CLUSTER_LABELS[cluster]}
          </span>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Overall mastery</CardTitle>
          </CardHeader>
          <CardContent>
            <RingChart data={[{ label: 'Mastered', value: coverage.mastered, maxValue: coverage.total }]} size={200} className="mx-auto">
              <Ring index={0} animate={animate} />
              <RingCenter defaultLabel="Mastered" />
            </RingChart>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Started, by domain</CardTitle>
          </CardHeader>
          <CardContent>
            <RadarChart data={[{ label: 'Coverage', values: radarValues }]} metrics={radarMetrics} size={220} className="mx-auto" animate={animate}>
              <RadarGrid />
              <RadarAxis />
              <RadarLabels />
              <RadarArea index={0} />
            </RadarChart>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Mastered topics, by domain</CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart data={barData} xDataKey="name" animationDuration={animate ? 900 : 0}>
            <Grid horizontal />
            <Bar dataKey="mastered" fill="var(--chart-1)" />
          </BarChart>
        </CardContent>
      </Card>

      {state.weaknesses.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Weaknesses noted by the tutor</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {state.weaknesses.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {state.confusions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Confusions to watch for</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {state.confusions.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
