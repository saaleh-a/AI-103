import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'
import { COURSE_UNITS, UNIT_BY_ID } from '../src/data/curriculum/index.ts'
import { SOURCE_BY_NUMBER } from '../src/data/curriculum/catalog.ts'
import { OBJECTIVES, OBJECTIVE_DOMAINS, OFFICIAL_OUTLINE } from '../src/data/objectives.ts'
import { assessObjective, summarizeObjectives, validateObjectiveLedger } from '../src/lib/objective-coverage.ts'

const corpusDir = fileURLToPath(new URL('../../corpus/', import.meta.url))
const outline = readFileSync(path.join(corpusDir, SOURCE_BY_NUMBER.get(OFFICIAL_OUTLINE.corpusSourceId).filename), 'utf8')
const coverage = OBJECTIVES.map((record) => assessObjective(record, UNIT_BY_ID, OFFICIAL_OUTLINE.reviewer))

test('the ledger records every official objective in outline order, verbatim from the corpus', () => {
  assert.match(outline, /Skills measured as of April 16, 2026/)
  assert.deepEqual(validateObjectiveLedger(OBJECTIVES, COURSE_UNITS, OBJECTIVE_DOMAINS, outline), [])
  assert.equal(OBJECTIVES.length, 64)
  assert.deepEqual(OBJECTIVE_DOMAINS.map(({ domain }) => OBJECTIVES.filter((record) => record.domain === domain).length), [16, 16, 16, 8, 8])
})

test('taught, partly taught, and untaught objectives account for every objective', () => {
  const summary = summarizeObjectives(coverage)
  assert.equal(summary.taught + summary.partial + summary.notTaught, OBJECTIVES.length)
  for (const item of coverage.filter((entry) => entry.teaching === 'not-taught')) {
    assert.equal(item.status, 'source-gap', `${item.record.id} must explain why it is untaught`)
  }
})

test('no objective is release-ready while lessons reuse one scenario and nothing has been reviewed', () => {
  for (const item of coverage) {
    assert.ok(['source-gap', 'authoring'].includes(item.status), `${item.record.id} is ${item.status}`)
    assert.ok(item.missing.includes('independent review'))
    if (item.units.length) assert.ok(item.missing.includes('distinct delayed-review scenarios'))
  }
  assert.equal(assessObjective(OBJECTIVES[5], UNIT_BY_ID, 'A named reviewer').status, 'authoring', 'a reviewer alone cannot make an objective ready')
})

test('a source gap blocks readiness even where part of an objective is taught', () => {
  const security = coverage.find((item) => item.record.id === 'P12')
  assert.equal(security.teaching, 'partial')
  assert.equal(security.status, 'source-gap')
  assert.ok(security.sources.length > 0)
})

test('the validator rejects broken references, unexplained gaps, and paraphrased wording', () => {
  const [first] = OBJECTIVES
  const broken = [
    { ...first, taughtBy: ['not-a-lesson'] },
    { ...OBJECTIVES[1], taughtBy: [], gaps: undefined },
    { ...OBJECTIVES[2], objective: 'Pick a retrieval approach' },
    ...OBJECTIVES.slice(3),
  ]
  const errors = validateObjectiveLedger(broken, COURSE_UNITS, OBJECTIVE_DOMAINS, outline)
  assert.ok(errors.some((error) => error.includes('unknown lesson: not-a-lesson')))
  assert.ok(errors.some((error) => error.includes('P02 is untaught without a recorded corpus gap')))
  assert.ok(errors.some((error) => error.includes('P03 wording is not in the corpus outline')))
  assert.ok(validateObjectiveLedger(OBJECTIVES.slice(1), COURSE_UNITS, OBJECTIVE_DOMAINS, outline).some((error) => error.includes('out of sequence')))
})
