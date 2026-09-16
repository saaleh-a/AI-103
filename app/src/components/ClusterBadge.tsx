import type { ReactNode } from 'react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { CLUSTER_ACCENT, CLUSTER_LABELS } from '@/data/topics'
import type { Topic } from '@/lib/types'

export function ClusterBadge({
  cluster,
  children,
  className,
}: {
  cluster: Topic['cluster']
  children?: ReactNode
  className?: string
}) {
  const accent = CLUSTER_ACCENT[cluster]
  return (
    <Badge
      variant="outline"
      className={cn('border-transparent font-medium', className)}
      style={{ backgroundColor: accent.bg, color: accent.fg }}
    >
      {children ?? CLUSTER_LABELS[cluster]}
    </Badge>
  )
}
