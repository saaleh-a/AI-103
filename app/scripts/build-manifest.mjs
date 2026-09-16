// Builds:
//  - src/data/corpus-manifest.json: lightweight {id, filename, title, source, excerpt}
//    per corpus file, used to build a client-side search index without
//    shipping the full ~3MB corpus in the JS bundle.
//  - public/corpus-clean/<filename>: the same file with repeated MS-Learn
//    site-chrome lines stripped, so the AI chat panel can fetch a much
//    smaller, higher-signal version for retrieval context. The original
//    corpus/ files stay untouched (verbatim source of truth).
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const corpusDir = resolve(here, '../public/corpus')
const cleanDir = resolve(here, '../public/corpus-clean')
const manifestOut = resolve(here, '../src/data/corpus-manifest.json')

if (!existsSync(corpusDir)) {
  console.error(`[build-manifest] No corpus at ${corpusDir} — run sync-corpus first.`)
  process.exit(0)
}

const filenames = readdirSync(corpusDir).filter((f) => f.endsWith('.md'))
const files = filenames.map((filename) => {
  const raw = readFileSync(resolve(corpusDir, filename), 'utf-8')
  const lines = raw.split('\n')
  return { filename, lines }
})

// Any line that repeats near-identically across a large fraction of files is
// site chrome (nav, footer, cookie banners), not content — strip it.
const freq = new Map()
for (const { lines } of files) {
  const seenInThisFile = new Set()
  for (const line of lines) {
    const key = line.trim()
    if (!key || seenInThisFile.has(key)) continue
    seenInThisFile.add(key)
    freq.set(key, (freq.get(key) ?? 0) + 1)
  }
}
const threshold = Math.max(8, files.length * 0.25)
const boilerplate = new Set([...freq.entries()].filter(([, n]) => n >= threshold).map(([k]) => k))

mkdirSync(cleanDir, { recursive: true })

const UNIT_CHECKLIST_LINE = /:\s*Completed$/i
const UNIT_OF_LINE = /^Unit\s+\d+\s+of\s+\d+$/i

const manifest = []
for (const { filename, lines } of files) {
  const sourceMatch = lines[0]?.match(/^>\s*Source:\s*(\S+)/)
  const source = sourceMatch ? sourceMatch[1] : ''
  const bodyLines = lines.slice(sourceMatch ? 1 : 0)

  // Per-file breadcrumb noise: the module/page title repeated 3+ times
  // (nav trail, unit list header, etc.) isn't frequent enough globally to
  // hit the site-wide boilerplate filter, but reads as clutter — keep only
  // its first occurrence within this file.
  const inFileFreq = new Map()
  for (const line of bodyLines) {
    const t = line.trim()
    if (t.length >= 20) inFileFreq.set(t, (inFileFreq.get(t) ?? 0) + 1)
  }
  const seenOnceAlready = new Set()

  const cleaned = []
  let lastKept = null
  let lastWasBlank = true
  for (const line of bodyLines) {
    const trimmed = line.trim()
    if (trimmed && boilerplate.has(trimmed)) continue
    if (UNIT_CHECKLIST_LINE.test(trimmed) || UNIT_OF_LINE.test(trimmed)) continue
    if (trimmed === lastKept) continue // consecutive duplicate
    if (trimmed.length >= 20 && (inFileFreq.get(trimmed) ?? 0) >= 3) {
      if (seenOnceAlready.has(trimmed)) continue
      seenOnceAlready.add(trimmed)
    }
    const isBlank = trimmed === ''
    if (isBlank && lastWasBlank) continue
    cleaned.push(line)
    lastWasBlank = isBlank
    lastKept = trimmed
  }
  const cleanedText = cleaned.join('\n').trim()
  writeFileSync(resolve(cleanDir, filename), cleanedText, 'utf-8')

  const title = filename
    .replace(/\.md$/, '')
    .replace(/^\d+-/, '')
    .replace(/\s*-\s*Training\s*-\s*Microsoft Learn\s*$/i, '')
    .trim()

  const excerpt = cleanedText.slice(0, 500).replace(/\s+/g, ' ').trim()

  manifest.push({
    id: filename.replace(/\.md$/, ''),
    filename,
    title,
    source,
    excerpt,
    kind: /AI-103\s*-\s*Episode/i.test(filename)
      ? 'episode'
      : /Study Cram/i.test(filename)
        ? 'cram'
        : 'learn-module',
  })
}

manifest.sort((a, b) => a.title.localeCompare(b.title))
writeFileSync(manifestOut, JSON.stringify(manifest, null, 2), 'utf-8')
console.log(`[build-manifest] Wrote ${manifest.length} entries to ${manifestOut}`)
console.log(`[build-manifest] Stripped ${boilerplate.size} boilerplate lines; cleaned copies in ${cleanDir}`)
