import type { CourseUnit, ExamDomain } from '../data/curriculum/schema'
import type { ObjectiveRecord } from '../data/objectives'

export type ObjectiveTeaching = 'taught' | 'partial' | 'not-taught'
/** Release statuses from design/REPLACEMENT_DESIGN.md §7; "ready" needs every component and a reviewer. */
export type ObjectiveReleaseStatus = 'unmapped' | 'source-gap' | 'authoring' | 'review' | 'ready'

export interface ObjectiveCoverage {
  record: ObjectiveRecord
  units: CourseUnit[]
  teaching: ObjectiveTeaching
  status: ObjectiveReleaseStatus
  /** Mandatory components not yet present for this objective. */
  missing: string[]
  sources: number[]
}

/** First application, a changed requirement, and two delayed-review cases (learning-schema LearningPack). */
const REQUIRED_SCENARIOS = 4

/** Scenario checks a lesson offers for spaced review. Every lesson currently has one, reused by practice and exam rehearsal. */
function scenarioCount(unit: CourseUnit): number {
  return unit.check ? 1 : 0
}

export function assessObjective(record: ObjectiveRecord, unitsById: ReadonlyMap<string, CourseUnit>, reviewer?: string): ObjectiveCoverage {
  const units = record.taughtBy.flatMap((id) => unitsById.get(id) ?? [])
  const gaps = record.gaps ?? []
  const missing: string[] = []
  if (!units.length) {
    missing.push('teaching')
  } else {
    if (!units.some((unit) => unit.steps.some((step) => step.example))) missing.push('worked example')
    if (!units.some((unit) => unit.check.options.length >= 3 && unit.check.options.every((option) => option.explanation.trim()))) missing.push('repair branches')
    if (!units.some((unit) => unit.lab.azure.steps.length > 0)) missing.push('practical fieldwork')
    if (!units.some((unit) => unit.transfer.trim())) missing.push('transfer prompt')
    if (!units.some((unit) => scenarioCount(unit) >= REQUIRED_SCENARIOS)) missing.push('distinct delayed-review scenarios')
  }
  for (const gap of gaps) if (gap.kind === 'authoring') missing.push('a lesson for the known gap')
  if (!reviewer) missing.push('independent review')
  const status: ObjectiveReleaseStatus = gaps.some((gap) => gap.kind === 'source') ? 'source-gap'
    : !units.length ? 'unmapped'
      : missing.some((item) => item !== 'independent review') ? 'authoring'
        : reviewer ? 'ready' : 'review'
  return {
    record,
    units,
    teaching: !units.length ? 'not-taught' : gaps.length ? 'partial' : 'taught',
    status,
    missing,
    sources: [...new Set(units.flatMap((unit) => unit.sourceIds))].sort((a, b) => a - b),
  }
}

export function summarizeObjectives(coverage: readonly ObjectiveCoverage[]) {
  const count = (teaching: ObjectiveTeaching) => coverage.filter((item) => item.teaching === teaching).length
  const statuses: Record<ObjectiveReleaseStatus, number> = { unmapped: 0, 'source-gap': 0, authoring: 0, review: 0, ready: 0 }
  for (const item of coverage) statuses[item.status] += 1
  return { total: coverage.length, taught: count('taught'), partial: count('partial'), notTaught: count('not-taught'), statuses }
}

interface DomainPrefix { domain: ExamDomain; prefix: string; weight: string }

/** Structural checks for the ledger; `outline` is the raw study-guide text from the corpus. */
export function validateObjectiveLedger(records: readonly ObjectiveRecord[], units: readonly CourseUnit[], domains: readonly DomainPrefix[], outline: string): string[] {
  const errors: string[] = []
  const normalize = (text: string) => text.replace(/\s+/g, ' ').trim()
  const outlineText = normalize(outline)
  const unitIds = new Set(units.map((unit) => unit.id))
  const ids = records.map((record) => record.id)
  if (new Set(ids).size !== ids.length) errors.push('Objective IDs must be unique.')
  for (const { domain, prefix, weight } of domains) {
    const inDomain = records.filter((record) => record.domain === domain)
    inDomain.forEach((record, index) => {
      const expected = `${prefix}${String(index + 1).padStart(2, '0')}`
      if (record.id !== expected) errors.push(`${record.id} is out of sequence; expected ${expected} in "${domain}".`)
    })
    if (!inDomain.length) errors.push(`No objectives recorded for "${domain}".`)
    if (!outlineText.includes(`${domain} (${weight})`)) errors.push(`The corpus outline does not state "${domain} (${weight})".`)
  }
  for (const record of records) {
    if (!domains.some(({ domain, prefix }) => domain === record.domain && record.id.startsWith(prefix))) errors.push(`${record.id} does not match its domain prefix.`)
    if (!outlineText.includes(normalize(record.objective))) errors.push(`${record.id} wording is not in the corpus outline: ${record.objective}`)
    if (!outlineText.includes(normalize(record.skill))) errors.push(`${record.id} skill is not in the corpus outline: ${record.skill}`)
    const related = record.related ?? []
    for (const id of [...record.taughtBy, ...related]) if (!unitIds.has(id)) errors.push(`${record.id} references an unknown lesson: ${id}`)
    if (new Set(record.taughtBy).size !== record.taughtBy.length) errors.push(`${record.id} lists a lesson twice.`)
    if (related.some((id) => record.taughtBy.includes(id))) errors.push(`${record.id} counts a lesson as both teaching and related.`)
    if (!record.taughtBy.length && !record.gaps?.some((gap) => gap.kind === 'source')) errors.push(`${record.id} is untaught without a recorded corpus gap.`)
    for (const gap of record.gaps ?? []) if (!gap.note.trim()) errors.push(`${record.id} has an empty gap note.`)
  }
  const taught = new Set(records.flatMap((record) => record.taughtBy))
  for (const unit of units) if (!taught.has(unit.id)) errors.push(`No official objective is taught by the lesson: ${unit.id}`)
  return errors
}
