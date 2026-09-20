import { Document } from 'flexsearch'
import manifest from '@/data/corpus-manifest.json'
import type { CorpusManifestEntry } from '@/lib/types'

type IndexableEntry = CorpusManifestEntry & Record<string, string>

const entries = manifest as CorpusManifestEntry[]
const byId = new Map(entries.map((e) => [e.id, e]))

let index: Document<IndexableEntry> | null = null
function getIndex() {
  if (index) return index
  index = new Document<IndexableEntry>({
    document: {
      id: 'id',
      index: ['title', 'excerpt'],
      store: true,
    },
    tokenize: 'forward',
  })
  for (const entry of entries) index.add(entry as IndexableEntry)
  return index
}

/** Keyword search over the corpus manifest (titles + excerpts), not full text. */
export function searchCorpus(query: string, limit = 5): CorpusManifestEntry[] {
  if (!query.trim()) return []
  const idx = getIndex()
  const results = idx.search(query, { limit, enrich: true })
  const seen = new Set<string>()
  const out: CorpusManifestEntry[] = []
  for (const fieldResult of results) {
    for (const r of fieldResult.result) {
      const id = String(r.id)
      if (seen.has(id)) continue
      seen.add(id)
      const entry = byId.get(id)
      if (entry) out.push(entry)
    }
  }
  return out.slice(0, limit)
}

export function getManifestEntry(id: string): CorpusManifestEntry | undefined {
  return byId.get(id)
}

const fileCache = new Map<string, Promise<string>>()

/** Fetches the cleaned (boilerplate-stripped) copy of a corpus file, for context injection. */
export function fetchCorpusFile(filename: string): Promise<string> {
  const cached = fileCache.get(filename)
  if (cached) return cached
  const url = `${import.meta.env.BASE_URL}corpus-clean/${encodeURIComponent(filename)}`
  const promise = fetch(url)
    .then((r) => (r.ok ? r.text() : Promise.reject(new Error(`${r.status} fetching ${filename}`))))
    .catch((error: unknown) => {
      fileCache.delete(filename)
      throw error
    })
  fileCache.set(filename, promise)
  return promise
}
