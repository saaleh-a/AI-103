import manifest from '../corpus-manifest.json' with { type: 'json' }

export const CORPUS_SOURCES = manifest.map((source) => ({
  ...source,
  number: Number(source.id.split('-')[0]),
})).sort((a, b) => a.number - b.number)

export type CorpusSource = (typeof CORPUS_SOURCES)[number]
export const SOURCE_BY_NUMBER = new Map(CORPUS_SOURCES.map((source) => [source.number, source]))
export const SOURCE_BY_ID = new Map(CORPUS_SOURCES.map((source) => [source.id, source]))

export function getSource(number: number): CorpusSource {
  const source = SOURCE_BY_NUMBER.get(number)
  if (!source) throw new Error(`Corpus source ${number} is missing. Run npm run content.`)
  return source
}

export function publishedSourceUrl(source: CorpusSource): string | undefined {
  try {
    const url = new URL(source.source)
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : undefined
  } catch (error) {
    if (!(error instanceof TypeError)) throw error
    return undefined
  }
}
