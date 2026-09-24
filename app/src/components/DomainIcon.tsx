import { ChatText, Cpu, Files, MagnifyingGlass, TreeStructure, Waveform } from '@phosphor-icons/react'
import type { DomainCluster } from '@/lib/types'

const ICONS = {
  'models-deploy-eval': Cpu,
  'agents-orchestration': TreeStructure,
  'search-rag': MagnifyingGlass,
  'content-document': Files,
  language: ChatText,
  speech: Waveform,
}

export function DomainIcon({ cluster, size = 22 }: { cluster: DomainCluster; size?: number }) {
  const Icon = ICONS[cluster]
  return <Icon size={size} aria-hidden />
}
