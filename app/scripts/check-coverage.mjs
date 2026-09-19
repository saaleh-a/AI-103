import { readFile } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { parseArgs } from 'node:util'
import { CLUSTER_LABELS, TOPICS } from '../src/data/topics.ts'
import { PRIMARY_DOMAIN_MAP } from './coverage-map.mjs'

export const OFFICIAL_GUIDE_URL = 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103'
export const MAX_OUTLINE_BYTES = 1_000_000
const DEFAULT_APP_URL = 'http://localhost:5173/'
const MANIFEST_URL = new URL('../src/data/corpus-manifest.json', import.meta.url)
const KNOWN_DOMAINS = PRIMARY_DOMAIN_MAP.map(({ domain }) => domain)
const WEIGHTED_HEADING = /^(.+?)\s+\((\d+(?:\.\d+)?)\s*%?\s*[-–]\s*(\d+(?:\.\d+)?)\s*%\)$/
const MONTHS = [
  'january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december',
]

function effectiveDateFromHeading(text) {
  const match = /^Skills measured as of ([A-Za-z]+) (\d{1,2}), (\d{4})$/i.exec(text)
  const month = match ? MONTHS.indexOf(match[1].toLowerCase()) + 1 : 0
  if (!match || !month) throw new Error(`Invalid dated outline heading: "${text}".`)
  const iso = `${match[3]}-${String(month).padStart(2, '0')}-${match[2].padStart(2, '0')}`
  const date = new Date(`${iso}T00:00:00.000Z`)
  if (!Number.isFinite(date.getTime()) || date.toISOString().slice(0, 10) !== iso) {
    throw new Error(`Invalid dated outline heading: "${text}".`)
  }
  return iso
}

function markdownHeadings(markdown) {
  const headings = []
  let fence
  for (const line of markdown.split(/\r?\n/)) {
    const marker = /^ {0,3}(`{3,}|~{3,})(.*)$/.exec(line)
    if (marker) {
      if (!fence) fence = marker[1]
      else if (marker[1][0] === fence[0] && marker[1].length >= fence.length && !marker[2].trim()) fence = undefined
      continue
    }
    if (fence) continue
    const heading = /^ {0,3}(#{1,6})[ \t]+(.+?)(?:[ \t]+#+)?[ \t]*$/.exec(line)
    if (heading) headings.push({ level: heading[1].length, text: heading[2] })
  }
  return headings
}

function validateOfficialDomains(domains) {
  if (!Array.isArray(domains)) throw new Error('The official outline must contain weighted domain headings.')
  const seen = new Set()
  for (const { name, minWeight, maxWeight } of domains) {
    if (!KNOWN_DOMAINS.includes(name)) {
      throw new Error(`Re-mapping needed: unrecognized official domain "${name}". Review app\\scripts\\coverage-map.mjs against the live outline.`)
    }
    if (seen.has(name)) throw new Error(`Duplicate official domain heading: "${name}".`)
    seen.add(name)
    if (!Number.isFinite(minWeight) || !Number.isFinite(maxWeight) || minWeight < 0 || maxWeight > 100 || minWeight > maxWeight) {
      throw new Error(`Invalid official weight range for "${name}": ${minWeight}-${maxWeight}%.`)
    }
  }
  const missing = KNOWN_DOMAINS.filter((name) => !seen.has(name))
  if (missing.length) {
    throw new Error(`Missing official domain heading(s): ${missing.join('; ')}. Outline schema review / re-mapping needed.`)
  }
}

export function parseOfficialOutline(markdown, asOf = new Date()) {
  if (typeof markdown !== 'string' || !markdown.trim()) throw new Error('The official outline body is empty or is not Markdown text.')
  const runDate = new Date(asOf)
  if (!Number.isFinite(runDate.getTime())) throw new Error('Invalid run date for official-outline selection.')
  const today = runDate.toISOString().slice(0, 10)
  const headings = markdownHeadings(markdown)
  const outlines = []
  const dates = new Set()
  for (const [index, heading] of headings.entries()) {
    if (!/^Skills measured\b/i.test(heading.text)) continue
    if (heading.level !== 2) throw new Error(`Unexpected skills-outline heading level: "${heading.text}". Outline schema review needed.`)
    const effectiveDate = effectiveDateFromHeading(heading.text)
    if (dates.has(effectiveDate)) throw new Error(`Duplicate dated skills outline: ${effectiveDate}.`)
    dates.add(effectiveDate)
    outlines.push({ index, effectiveDate })
  }
  if (!outlines.length) throw new Error('No dated "Skills measured as of ..." outline was found in the official guide.')
  const selected = outlines
    .filter(({ effectiveDate }) => effectiveDate <= today)
    .sort((a, b) => b.effectiveDate.localeCompare(a.effectiveDate))[0]
  if (!selected) {
    throw new Error(`No currently applicable skills outline as of ${today}; all available outlines are future-dated (${[...dates].sort().join(', ')}).`)
  }
  let end = selected.index + 1
  while (end < headings.length && headings[end].level > 2) end++
  if (headings[end] && WEIGHTED_HEADING.test(headings[end].text)) {
    throw new Error(`Unexpected weighted domain heading level: "${headings[end].text}". Outline schema review / re-mapping needed.`)
  }
  const domains = []
  for (const { level, text } of headings.slice(selected.index + 1, end)) {
    const weighted = WEIGHTED_HEADING.exec(text)
    if (level !== 3) {
      if (weighted) throw new Error(`Unexpected weighted domain heading level: "${text}". Outline schema review / re-mapping needed.`)
      continue
    }
    if (text === 'Audience profile' || text === 'Skills at a glance') continue
    if (!weighted) {
      throw new Error(`Unexpected domain heading or invalid weight range: "${text}". Outline schema review / re-mapping needed.`)
    }
    domains.push({ name: weighted[1], minWeight: Number(weighted[2]), maxWeight: Number(weighted[3]) })
  }
  validateOfficialDomains(domains)
  return { effectiveDate: selected.effectiveDate, domains }
}

export async function fetchOfficialOutline({ fetchImpl = globalThis.fetch, now = () => new Date(), timeoutMs = 15_000 } = {}) {
  if (typeof fetchImpl !== 'function') throw new Error('Fetch is unavailable; use a supported Node.js 22.12+ runtime.')
  if (!Number.isInteger(timeoutMs) || timeoutMs <= 0 || timeoutMs > 2_147_483_647) throw new Error('The fetch timeout must be a positive, bounded number of milliseconds.')
  const runAt = now()
  const controller = new AbortController()
  let timer
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => {
      const error = new Error(`Timed out fetching the official guide after ${timeoutMs} ms.`)
      controller.abort(error)
      reject(error)
    }, timeoutMs)
  })
  try {
    return await Promise.race([
      (async () => {
        const response = await fetchImpl(OFFICIAL_GUIDE_URL, {
          headers: { Accept: 'text/markdown' },
          signal: controller.signal,
        })
        if (!response.ok) throw new Error(`Official guide returned HTTP ${response.status} ${response.statusText ?? ''}.`)
        const contentType = response.headers.get('content-type') ?? ''
        if (contentType.split(';')[0].trim().toLowerCase() !== 'text/markdown') {
          throw new Error(`Expected text/markdown from the official guide, received "${contentType || '(missing Content-Type)'}".`)
        }
        const contentLength = response.headers.get('content-length')
        if (contentLength !== null && (!Number.isFinite(Number(contentLength)) || Number(contentLength) < 0 || Number(contentLength) > MAX_OUTLINE_BYTES)) {
          throw new Error(`Invalid or oversized official guide Content-Length (limit ${MAX_OUTLINE_BYTES} bytes).`)
        }
        const body = await response.text()
        if (Buffer.byteLength(body, 'utf8') > MAX_OUTLINE_BYTES) throw new Error(`Official guide body exceeds ${MAX_OUTLINE_BYTES} bytes.`)
        const retrievedAt = new Date(now()).toISOString()
        return { sourceUrl: OFFICIAL_GUIDE_URL, retrievedAt, ...parseOfficialOutline(body, runAt) }
      })(),
      timeout,
    ])
  } catch (error) {
    controller.abort()
    throw new Error(`Unable to read the live official outline (${OFFICIAL_GUIDE_URL}): ${error.message}`, { cause: error })
  } finally {
    clearTimeout(timer)
  }
}

export function classifyCoverage(topicCount, totalTopics, minWeight) {
  if (topicCount === 0) return 'UNCOVERED'
  return topicCount * 100 < totalTopics * minWeight ? 'THIN' : 'NOT FLAGGED'
}

export function reconcileCoverage({ topics = TOPICS, manifest, outline, mapping = PRIMARY_DOMAIN_MAP, clusterLabels = CLUSTER_LABELS }) {
  validateOfficialDomains(outline.domains)
  if (!Array.isArray(topics) || !topics.length) throw new Error('No curriculum topics were supplied.')
  if (!Array.isArray(manifest) || !manifest.length) throw new Error('The generated corpus manifest must be a nonempty array; run npm run content from app.')
  const corpusIds = new Set()
  for (const entry of manifest) {
    if (!entry || typeof entry.id !== 'string' || !entry.id.trim()) throw new Error('The corpus manifest contains an entry without a valid ID.')
    if (corpusIds.has(entry.id)) throw new Error(`Duplicate corpus manifest ID: "${entry.id}".`)
    corpusIds.add(entry.id)
  }
  const topicById = new Map()
  const appClusters = new Map()
  for (const topic of topics) {
    if (!topic || typeof topic.id !== 'string' || !topic.id.trim()) throw new Error('A curriculum topic has no valid ID.')
    if (topicById.has(topic.id)) throw new Error(`Duplicate curriculum topic ID: "${topic.id}".`)
    if (typeof topic.cluster !== 'string' || !topic.cluster.trim()) throw new Error(`Topic "${topic.id}" has no app cluster.`)
    if (!Array.isArray(topic.corpusIds) || !topic.corpusIds.length) throw new Error(`Topic "${topic.id}" has no corpus references.`)
    for (const id of topic.corpusIds) {
      if (!corpusIds.has(id)) throw new Error(`Topic "${topic.id}" references missing corpus ID "${id}" in the generated manifest. Run npm run content and check the reference.`)
    }
    topicById.set(topic.id, topic)
    if (!appClusters.has(topic.cluster)) appClusters.set(topic.cluster, [])
    appClusters.get(topic.cluster).push(topic)
  }
  if (!Array.isArray(mapping)) throw new Error('The primary-domain mapping must be an array.')
  const officialNames = new Set(outline.domains.map(({ name }) => name))
  const mappedDomains = new Set()
  const assignments = new Map()
  for (const entry of mapping) {
    if (!entry || !officialNames.has(entry.domain)) throw new Error(`Mapping refers to unknown official domain "${entry?.domain}". Re-mapping needed.`)
    if (mappedDomains.has(entry.domain)) throw new Error(`Duplicate mapping for official domain "${entry.domain}".`)
    mappedDomains.add(entry.domain)
    if (!Array.isArray(entry.topicIds)) throw new Error(`Mapping for "${entry.domain}" must list explicit topic IDs.`)
    for (const topicId of entry.topicIds) {
      if (!topicById.has(topicId)) throw new Error(`Mapping refers to unknown topic "${topicId}".`)
      if (assignments.has(topicId)) throw new Error(`Topic "${topicId}" is assigned more than once (${assignments.get(topicId)}; ${entry.domain}).`)
      assignments.set(topicId, entry.domain)
    }
  }
  const unmapped = topics.filter(({ id }) => !assignments.has(id)).map(({ id }) => id)
  if (unmapped.length) throw new Error(`Unmapped curriculum topic(s): ${unmapped.join(', ')}. Update app\\scripts\\coverage-map.mjs; no topics may disappear from the denominator.`)
  return {
    sourceUrl: outline.sourceUrl,
    retrievedAt: outline.retrievedAt,
    effectiveDate: outline.effectiveDate,
    totalTopics: topics.length,
    clusterCount: appClusters.size,
    corpusCount: manifest.length,
    domains: outline.domains.map((domain) => {
      const clusters = [...appClusters].map(([id, clusterTopics]) => ({
        id,
        label: clusterLabels[id] ?? id,
        topicIds: clusterTopics.filter((topic) => assignments.get(topic.id) === domain.name).map(({ id: topicId }) => topicId),
      })).filter(({ topicIds }) => topicIds.length)
      const topicIds = clusters.flatMap((cluster) => cluster.topicIds)
      return {
        ...domain,
        topicCount: topicIds.length,
        percentage: topicIds.length * 100 / topics.length,
        status: classifyCoverage(topicIds.length, topics.length, domain.minWeight),
        topicIds,
        clusters,
      }
    }),
  }
}

function appBaseUrl(value) {
  let url
  try {
    url = new URL(value)
  } catch (error) {
    throw new Error('Use an absolute HTTP(S) app URL.', { cause: error })
  }
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.search || url.hash) {
    throw new Error('Use an absolute HTTP(S) app URL without credentials, a query, or a fragment.')
  }
  if (!url.pathname.endsWith('/')) url.pathname += '/'
  return url
}

export function formatCoverageReport(report, { appUrl = DEFAULT_APP_URL } = {}) {
  const base = appBaseUrl(appUrl)
  const settings = new URL(base)
  settings.hash = '/settings'
  const availableTopicIds = report.domains.flatMap(({ topicIds }) => topicIds)
  const lines = [
    'AI-103 coverage reconciliation',
    `Official source: ${report.sourceUrl}`,
    `Retrieved at: ${report.retrievedAt}`,
    `Outline effective date: ${report.effectiveDate}`,
    `Inventory: ${report.totalTopics} topics; ${report.clusterCount} app clusters; ${report.corpusCount} corpus manifest entries.`,
    '',
    'Topic-count maintenance heuristic, not proof of full objective coverage or learner mastery.',
    'Raw corpus size, topic counts, official objective coverage, and learner mastery are distinct measures.',
    'UNCOVERED = zero topics; THIN = topic share below the official minimum; NOT FLAGGED = neither.',
    'Classification uses unrounded counts; displayed percentages are rounded.',
  ]
  for (const domain of report.domains) {
    lines.push('', `${domain.name} | official ${domain.minWeight}-${domain.maxWeight}% | ${domain.topicCount}/${report.totalTopics} topics (${domain.percentage.toFixed(2)}%) | ${domain.status}`)
    for (const cluster of domain.clusters) {
      lines.push(`  ${cluster.label} [${cluster.id}] (${cluster.topicIds.length}): ${cluster.topicIds.join(', ')}`)
    }
    if (!domain.clusters.length) lines.push('  App clusters/topics: none.')
    if (domain.status === 'THIN' || domain.status === 'UNCOVERED') {
      const topicId = domain.topicIds.includes('model-deployment') ? 'model-deployment' : domain.topicIds[0] ?? availableTopicIds[0]
      if (!topicId) throw new Error('Cannot link to the tutor: the report has no existing lesson topics.')
      const lesson = new URL(base)
      lesson.hash = `/learn/${encodeURIComponent(topicId)}`
      lines.push(`  Gap: Ask the tutor at the bottom of this lesson to search the full corpus: ${lesson.href} (API key in Settings: ${settings.href}). Sources may still be incomplete.`)
    }
  }
  return lines.join('\n')
}

export async function readCorpusManifest(url = MANIFEST_URL) {
  try {
    return JSON.parse(await readFile(url, 'utf8'))
  } catch (error) {
    throw new Error(`Cannot read generated corpus manifest at ${fileURLToPath(url)}: ${error.message}. Run npm run content from app first.`, { cause: error })
  }
}

export async function main({ manifest, fetchImpl, now, timeoutMs, appUrl = DEFAULT_APP_URL, write = console.log } = {}) {
  const base = appBaseUrl(appUrl)
  const corpusManifest = manifest === undefined ? await readCorpusManifest() : manifest
  const outline = await fetchOfficialOutline({ fetchImpl, now, timeoutMs })
  const report = reconcileCoverage({ manifest: corpusManifest, outline })
  write(formatCoverageReport(report, { appUrl: base.href }))
  return report
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const { values } = parseArgs({ options: { 'app-url': { type: 'string', default: DEFAULT_APP_URL } } })
    await main({ appUrl: values['app-url'] })
  } catch (error) {
    console.error(`[check-coverage] ${error.message}`)
    process.exitCode = 1
  }
}
