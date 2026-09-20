import { readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { COURSE_UNITS } from '../src/data/curriculum/index.ts'
import { CORPUS_SOURCES } from '../src/data/curriculum/catalog.ts'
import { LEGACY_TOPICS } from '../src/data/topics.ts'
import { validateCurriculum } from '../src/lib/curriculum-validation.ts'
import { BUILD_PROJECTS, projectUnitIds } from '../src/data/projects.ts'

const report = validateCurriculum(COURSE_UNITS, CORPUS_SOURCES)
const rawFiles = readdirSync(fileURLToPath(new URL('../../corpus/', import.meta.url))).filter((name) => name.endsWith('.md'))
const listed = new Set(CORPUS_SOURCES.map((source) => source.filename))
for (const file of rawFiles) if (!listed.has(file)) report.errors.push(`Raw corpus file absent from generated manifest: ${file}`)
for (const file of listed) if (!rawFiles.includes(file)) report.errors.push(`Manifest file absent from raw corpus: ${file}`)
for (const topic of LEGACY_TOPICS) if (!COURSE_UNITS.some((unit) => unit.id === topic.id)) report.errors.push(`Legacy topic ID was lost: ${topic.id}`)
const projectUnits = BUILD_PROJECTS.flatMap(projectUnitIds)
if (new Set(projectUnits).size !== projectUnits.length) report.errors.push('A concept has more than one primary project home.')
for (const unit of COURSE_UNITS) if (!projectUnits.includes(unit.id)) report.errors.push(`No build connects the concept: ${unit.id}`)
for (const id of projectUnits) if (!COURSE_UNITS.some((unit) => unit.id === id)) report.errors.push(`A build references an unknown concept: ${id}`)

if (report.errors.length) {
  console.error(report.errors.join('\n'))
  process.exitCode = 1
} else {
  console.log(`Curriculum: ${BUILD_PROJECTS.length} outcome-led builds; ${report.unitCount} authored lessons; ${report.mappedSourceCount}/${report.sourceCount} corpus sources mapped; ${report.walkthroughCount} guided Azure walkthroughs; ${report.checkpointCount} observable checkpoints.`)
  console.log('Source mapping is coverage of the supplied material, not a claim of learner mastery or live Azure execution.')
}
