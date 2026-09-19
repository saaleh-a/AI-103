import assert from 'node:assert/strict'
import test from 'node:test'
import { TOPICS } from '../src/data/topics.ts'
import { PRIMARY_DOMAIN_MAP } from './coverage-map.mjs'
import {
  classifyCoverage,
  fetchOfficialOutline,
  formatCoverageReport,
  main,
  MAX_OUTLINE_BYTES,
  OFFICIAL_GUIDE_URL,
  parseOfficialOutline,
  readCorpusManifest,
  reconcileCoverage,
} from './check-coverage.mjs'

const RUN_AT = new Date('2026-09-19T01:17:25.488Z')
const DOMAIN_FIXTURE = [
  { name: 'Plan and manage an Azure AI solution', minWeight: 25, maxWeight: 30 },
  { name: 'Implement generative AI and agentic solutions', minWeight: 30, maxWeight: 35 },
  { name: 'Implement computer vision solutions', minWeight: 10, maxWeight: 15 },
  { name: 'Implement text analysis solutions', minWeight: 10, maxWeight: 15 },
  { name: 'Implement information extraction solutions', minWeight: 10, maxWeight: 15 },
]
const title = (domain, dash = '–') => `${domain.name} (${domain.minWeight}${dash}${domain.maxWeight}%)`
function outlineSection(date = 'April 16, 2026', domains = DOMAIN_FIXTURE, dash = '–') {
  return [
    `## Skills measured as of ${date}`,
    '### Audience profile',
    'Candidates build and implement AI solutions.',
    '### Skills at a glance',
    ...domains.map((domain) => `- ${title(domain, dash)}`),
    ...domains.flatMap((domain) => [
      `### ${title(domain, dash)}`,
      '#### Design and implement solutions',
      '- Apply the relevant capabilities.',
    ]),
  ].join('\n\n')
}
const MARKDOWN = [
  '# Study guide for Exam AI-103: Developing AI Apps and Agents on Azure | Microsoft Learn',
  '## Updates to the exam',
  '#### Note',
  'Review the applicable dated outline.',
  outlineSection(),
  '## Study resources',
].join('\n\n')
const MANIFEST = [...new Set(TOPICS.flatMap(({ corpusIds }) => corpusIds))].map((id) => ({ id, filename: `${id}.md` }))
const parse = (markdown = MARKDOWN, asOf = RUN_AT) => parseOfficialOutline(markdown, asOf)
const outline = () => ({ ...parse(), sourceUrl: OFFICIAL_GUIDE_URL, retrievedAt: RUN_AT.toISOString() })
const report = (overrides = {}) => reconcileCoverage({ manifest: MANIFEST, outline: outline(), ...overrides })
const response = (body = MARKDOWN, init = {}) => new Response(body, { headers: { 'content-type': 'text/markdown; charset=utf-8' }, ...init })

test('parses the live-shaped outline without counting Skills at a glance twice', () => {
  assert.deepEqual(parse(), { effectiveDate: '2026-04-16', domains: DOMAIN_FIXTURE })
  const unrelated = `### ${title({ ...DOMAIN_FIXTURE[0], minWeight: 99, maxWeight: 100 })}`
  assert.deepEqual(parse(`${unrelated}\n\n${MARKDOWN}\n\n${unrelated}`), parse())
})

test('accepts both en-dash and hyphen weight ranges and reads changed weights live', () => {
  for (const dash of ['–', '-']) {
    const changed = DOMAIN_FIXTURE.map((domain, index) => index === 0 ? { ...domain, minWeight: 20, maxWeight: 25 } : domain)
    assert.deepEqual(parse(outlineSection('April 16, 2026', changed, dash)).domains, changed)
  }
})

test('selects the newest effective outline regardless of document order, including its first day', () => {
  const changed = DOMAIN_FIXTURE.map((domain, index) => index === 0 ? { ...domain, minWeight: 20 } : domain)
  const markdown = [
    outlineSection('January 1, 2027'),
    outlineSection('April 16, 2026', changed),
    outlineSection('October 1, 2025'),
  ].join('\n\n')
  assert.equal(parse(markdown, '2026-04-15T23:59:59Z').effectiveDate, '2025-10-01')
  assert.equal(parse(markdown, '2026-04-16T00:00:00Z').effectiveDate, '2026-04-16')
  assert.deepEqual(parse(markdown).domains, changed)
  assert.equal(parse(markdown, '2027-01-01T00:00:00Z').effectiveDate, '2027-01-01')
})

test('future domain changes require re-mapping when they become applicable', () => {
  const changed = DOMAIN_FIXTURE.map((domain, index) => index === 0 ? { ...domain, name: 'Plan a new AI solution' } : domain)
  const markdown = `${outlineSection('January 1, 2027', changed)}\n\n${MARKDOWN}`
  assert.equal(parse(markdown).effectiveDate, '2026-04-16')
  assert.throws(() => parse(markdown, '2027-01-01'), /Re-mapping needed: unrecognized official domain/)
})

test('fails for future-only, undated, malformed-date, duplicate-date, and invalid-run-date outlines', () => {
  assert.throws(() => parse(outlineSection('January 1, 2027')), /No currently applicable.*future-dated/)
  assert.throws(() => parse('# A different document'), /No dated "Skills measured as of/)
  assert.throws(() => parse(outlineSection('February 30, 2026')), /Invalid dated outline heading/)
  assert.throws(() => parse(outlineSection('Smarch 16, 2026')), /Invalid dated outline heading/)
  assert.throws(() => parse(MARKDOWN.replace('Skills measured as of April 16, 2026', 'Skills measured')), /Invalid dated outline heading/)
  assert.throws(() => parse(`${MARKDOWN}\n\n${outlineSection()}`), /Duplicate dated skills outline/)
  assert.throws(() => parse(MARKDOWN, 'not-a-date'), /Invalid run date/)
})

test('rejects missing, duplicate, new, renamed, and unweighted domain headings', () => {
  const first = `### ${title(DOMAIN_FIXTURE[0])}`
  assert.throws(() => parse(MARKDOWN.replace(first, '')), /Missing official domain heading/)
  assert.throws(() => parse(MARKDOWN.replace(first, `${first}\n\n${first}`)), /Duplicate official domain heading/)
  assert.throws(() => parse(MARKDOWN.replace(first, `${first}\n\n### A new official domain (5–10%)`)), /Re-mapping needed: unrecognized official domain/)
  assert.throws(() => parse(MARKDOWN.replace(first, '### Plan Azure solutions (25–30%)')), /Re-mapping needed: unrecognized official domain/)
  assert.throws(() => parse(MARKDOWN.replace(first, `### ${DOMAIN_FIXTURE[0].name}`)), /Unexpected domain heading or invalid weight range/)
  assert.throws(() => parse('## Skills measured as of April 16, 2026\n\n### Skills at a glance\n- Plan and manage an Azure AI solution (25–30%)'), /Missing official domain heading/)
})

test('rejects invalid percentages and ignores Markdown code-fence examples', () => {
  for (const weights of ['30–25%', '25–101%', '25%', 'many–30%']) {
    assert.throws(() => parse(MARKDOWN.replace(`### ${title(DOMAIN_FIXTURE[0])}`, `### ${DOMAIN_FIXTURE[0].name} (${weights})`)), /[Ii]nvalid.*weight/)
  }
  const fenced = `\`\`\`markdown\n## Skills measured as of January 1, 2027\n### Not a real domain (20–30%)\n\`\`\``
  assert.deepEqual(parse(MARKDOWN.replace('### Audience profile', `${fenced}\n\n### Audience profile`)), parse())
})

test('changed heading levels cannot silently hide a new domain or a newer outline', () => {
  for (const level of ['##', '####']) {
    assert.throws(() => parse(MARKDOWN.replace('## Study resources', `${level} A new official domain (5–10%)\n\n## Study resources`)), /Unexpected weighted domain heading level.*re-mapping needed/)
  }
  const newer = outlineSection('September 1, 2026').replace('## Skills measured', '### Skills measured')
  assert.throws(() => parse(`${MARKDOWN}\n\n${newer}`), /Unexpected skills-outline heading level/)
})

test('the approved primary mapping accounts for all 35 real topics once across six clusters', () => {
  const actual = report()
  assert.equal(actual.totalTopics, 35)
  assert.equal(actual.clusterCount, 6)
  assert.deepEqual(actual.domains.map(({ topicCount }) => topicCount), [3, 12, 1, 11, 8])
  assert.deepEqual(actual.domains.map(({ status }) => status), ['THIN', 'NOT FLAGGED', 'THIN', 'NOT FLAGGED', 'NOT FLAGGED'])
  assert.deepEqual(actual.domains.flatMap(({ topicIds }) => topicIds).sort(), TOPICS.map(({ id }) => id).sort())
  for (const domain of actual.domains) {
    const approved = PRIMARY_DOMAIN_MAP.find((entry) => entry.domain === domain.name)
    assert.deepEqual([...domain.topicIds].sort(), [...approved.topicIds].sort())
    assert.deepEqual(domain.clusters.flatMap(({ topicIds }) => topicIds), domain.topicIds)
  }
  assert.deepEqual(actual.domains[3].clusters.map(({ id }) => id), ['language', 'speech'])
  assert.deepEqual(actual.domains[4].clusters.map(({ id }) => id), ['content-document', 'search-rag'])
})

test('uses exact unrounded thin boundaries, with zero always uncovered', () => {
  assert.equal(classifyCoverage(3, 10, 30), 'NOT FLAGGED')
  assert.equal(classifyCoverage(2, 10, 30), 'THIN')
  assert.equal(classifyCoverage(4, 10, 30), 'NOT FLAGGED')
  assert.equal((1000 * 100 / 10001).toFixed(2), '10.00')
  assert.equal(classifyCoverage(1000, 10001, 10), 'THIN')
  assert.equal(classifyCoverage(1, 10, 10), 'NOT FLAGGED')
  assert.equal(classifyCoverage(0, 35, 0), 'UNCOVERED')
})

test('reports an official domain with zero topics rather than omitting it', () => {
  const mapping = structuredClone(PRIMARY_DOMAIN_MAP)
  mapping[2].topicIds = []
  const actual = report({ topics: TOPICS.filter(({ id }) => id !== 'image-video-generation'), mapping })
  assert.equal(actual.totalTopics, 34)
  assert.equal(actual.domains.length, 5)
  assert.equal(actual.domains[2].topicCount, 0)
  assert.equal(actual.domains[2].percentage, 0)
  assert.equal(actual.domains[2].status, 'UNCOVERED')
  assert.deepEqual(actual.domains[2].clusters, [])
  assert.match(formatCoverageReport(actual), /0\/34 topics \(0\.00%\) \| UNCOVERED\n  App clusters\/topics: none\./)
})

test('new topics fail explicitly instead of disappearing from the denominator', () => {
  const topics = [...TOPICS, { ...TOPICS[0], id: 'new-unmapped-topic' }]
  assert.throws(() => report({ topics }), /Unmapped curriculum topic\(s\): new-unmapped-topic.*denominator/)
  const mapping = structuredClone(PRIMARY_DOMAIN_MAP)
  mapping[0].topicIds.pop()
  assert.throws(() => report({ mapping }), /Unmapped curriculum topic\(s\): agents-publishing/)
})

test('rejects unknown topic/domain mappings and repeated topic/domain assignments', () => {
  const unknownTopic = structuredClone(PRIMARY_DOMAIN_MAP)
  unknownTopic[0].topicIds.push('not-a-topic')
  assert.throws(() => report({ mapping: unknownTopic }), /Mapping refers to unknown topic "not-a-topic"/)
  const unknownDomain = structuredClone(PRIMARY_DOMAIN_MAP)
  unknownDomain[0].domain = 'Imaginary official domain'
  assert.throws(() => report({ mapping: unknownDomain }), /Mapping refers to unknown official domain.*Re-mapping needed/)
  const duplicateTopic = structuredClone(PRIMARY_DOMAIN_MAP)
  duplicateTopic[1].topicIds.push('model-catalog')
  assert.throws(() => report({ mapping: duplicateTopic }), /Topic "model-catalog" is assigned more than once/)
  assert.throws(() => report({ mapping: [...PRIMARY_DOMAIN_MAP, PRIMARY_DOMAIN_MAP[0]] }), /Duplicate mapping for official domain/)
  assert.throws(() => report({ topics: [...TOPICS, TOPICS[0]] }), /Duplicate curriculum topic ID/)
})

test('validates every corpus reference against the generated manifest', () => {
  const absent = TOPICS[0].corpusIds[0]
  assert.throws(() => report({ manifest: MANIFEST.filter(({ id }) => id !== absent) }), /Topic "agents-what-is-an-agent" references missing corpus ID/)
  const topics = TOPICS.map((topic, index) => index === 0 ? { ...topic, corpusIds: [...topic.corpusIds, 'broken-source-id'] } : topic)
  assert.throws(() => report({ topics }), /missing corpus ID "broken-source-id"/)
  assert.throws(() => report({ manifest: { files: MANIFEST } }), /manifest must be a nonempty array/)
  assert.throws(() => report({ manifest: [] }), /manifest must be a nonempty array/)
  assert.throws(() => report({ manifest: [...MANIFEST, MANIFEST[0]] }), /Duplicate corpus manifest ID/)
  assert.throws(() => report({ manifest: [{}] }), /entry without a valid ID/)
})

test('formats provenance, current weights, topic shares, and auditable clusters without mastery claims', () => {
  const output = formatCoverageReport(report())
  assert.match(output, new RegExp(OFFICIAL_GUIDE_URL.replaceAll('.', '\\.')))
  assert.ok(output.includes(`Retrieved at: ${RUN_AT.toISOString()}`))
  assert.match(output, /Outline effective date: 2026-04-16/)
  assert.match(output, /official 25-30% \| 3\/35 topics \(8\.57%\) \| THIN/)
  assert.match(output, /official 30-35% \| 12\/35 topics \(34\.29%\) \| NOT FLAGGED/)
  assert.match(output, /Topic-count maintenance heuristic, not proof of full objective coverage or learner mastery/)
  assert.match(output, /\[models-deploy-eval\] \(2\): model-catalog, model-deployment/)
  for (const { id } of TOPICS) assert.ok(output.includes(id), `Missing contributing topic ${id}`)
})

test('negotiates Markdown, supplies an abort signal, and records the actual retrieval time', async () => {
  let clockCalls = 0
  const retrievedAt = new Date('2026-09-19T01:17:26.123Z')
  const actual = await fetchOfficialOutline({
    now: () => clockCalls++ === 0 ? RUN_AT : retrievedAt,
    fetchImpl: async (url, options) => {
      assert.equal(url, OFFICIAL_GUIDE_URL)
      assert.equal(options.headers.Accept, 'text/markdown')
      assert.ok(options.signal instanceof AbortSignal)
      return response()
    },
  })
  assert.equal(actual.sourceUrl, OFFICIAL_GUIDE_URL)
  assert.equal(actual.retrievedAt, retrievedAt.toISOString())
  assert.equal(actual.effectiveDate, '2026-04-16')
  assert.deepEqual(actual.domains, DOMAIN_FIXTURE)
})

test('network and HTTP failures never return a cached or guessed report', async () => {
  await assert.rejects(fetchOfficialOutline({ fetchImpl: async () => { throw new Error('network unavailable') } }), /Unable to read the live official outline.*network unavailable/)
  for (const status of [404, 503]) {
    await assert.rejects(fetchOfficialOutline({ fetchImpl: async () => response('Unavailable', { status }) }), new RegExp(`HTTP ${status}`))
  }
})

test('the timeout bounds both fetching and reading the body, even when an injected fetch ignores abort', async () => {
  await assert.rejects(fetchOfficialOutline({
    timeoutMs: 5,
    fetchImpl: () => new Promise(() => {}),
  }), /Timed out fetching the official guide after 5 ms/)
  let signal
  await assert.rejects(fetchOfficialOutline({
    timeoutMs: 5,
    fetchImpl: async (_url, options) => {
      signal = options.signal
      return { ok: true, headers: new Headers({ 'content-type': 'text/markdown' }), text: () => new Promise(() => {}) }
    },
  }), /Timed out fetching the official guide after 5 ms/)
  assert.equal(signal.aborted, true)
})

test('rejects missing/wrong content types and empty, oversized, or malformed response bodies', async () => {
  for (const headers of [{}, { 'content-type': 'text/html' }]) {
    await assert.rejects(fetchOfficialOutline({ fetchImpl: async () => response(MARKDOWN, { headers }) }), /Expected text\/markdown/)
  }
  for (const body of ['', '   ']) {
    await assert.rejects(fetchOfficialOutline({ fetchImpl: async () => response(body) }), /outline body is empty/)
  }
  await assert.rejects(fetchOfficialOutline({ fetchImpl: async () => response('<html>Service unavailable</html>') }), /No dated "Skills measured as of/)
  await assert.rejects(fetchOfficialOutline({ fetchImpl: async () => response('x'.repeat(MAX_OUTLINE_BYTES + 1)) }), /body exceeds/)
  await assert.rejects(fetchOfficialOutline({
    fetchImpl: async () => response(MARKDOWN, { headers: { 'content-type': 'text/markdown', 'content-length': String(MAX_OUTLINE_BYTES + 1) } }),
  }), /oversized official guide Content-Length/)
  await assert.rejects(fetchOfficialOutline({
    fetchImpl: async () => ({ ok: true, headers: new Headers({ 'content-type': 'text/markdown' }), text: async () => { throw new Error('body read failed') } }),
  }), /body read failed/)
})

test('malformed fetched outlines and unavailable fetch fail explicitly', async () => {
  await assert.rejects(fetchOfficialOutline({ now: () => RUN_AT, fetchImpl: async () => response(outlineSection('January 1, 2027')) }), /No currently applicable skills outline/)
  await assert.rejects(fetchOfficialOutline({ fetchImpl: null }), /Fetch is unavailable/)
  await assert.rejects(fetchOfficialOutline({ timeoutMs: 0 }), /fetch timeout must be/)
})

test('a missing generated manifest explains how to generate it without writing files', async () => {
  await assert.rejects(readCorpusManifest(new URL('./nonexistent-coverage-fixture.json', import.meta.url)), /Cannot read generated corpus manifest.*Run npm run content from app first/)
})

test('main prints one complete report only after validation succeeds and returns structured rows for formatting', async () => {
  const output = []
  const actual = await main({ manifest: MANIFEST, fetchImpl: async () => response(), now: () => RUN_AT, write: (text) => output.push(text) })
  assert.equal(output.length, 1)
  assert.equal(output[0], formatCoverageReport(actual))
  assert.equal(actual.totalTopics, 35)
  const failedOutput = []
  await assert.rejects(main({
    manifest: MANIFEST,
    fetchImpl: async () => response('Unavailable', { status: 503 }),
    write: (text) => failedOutput.push(text),
  }), /HTTP 503/)
  assert.deepEqual(failedOutput, [])
})
