import assert from 'node:assert/strict'
import test from 'node:test'
import { readFileSync, readdirSync } from 'node:fs'
import { COURSE_UNITS, orderCourseUnits } from '../src/data/curriculum/index.ts'
import { CORPUS_SOURCES } from '../src/data/curriculum/catalog.ts'
import { LEGACY_TOPICS, TOPICS } from '../src/data/topics.ts'
import { FLASHCARDS, MCQ_ITEMS } from '../src/data/practice-content.ts'
import { validateCurriculum } from '../src/lib/curriculum-validation.ts'
import { checkLabDraft, renderLabTemplate } from '../src/lib/lab-rehearsal.ts'
import { PRIMARY_DOMAIN_MAP } from './coverage-map.mjs'

test('every one of the 265 source files is reachable through an authored lesson', () => {
  assert.equal(CORPUS_SOURCES.length, 265)
  const report = validateCurriculum(COURSE_UNITS, CORPUS_SOURCES)
  assert.deepEqual(report.errors, [])
  assert.equal(report.mappedSourceCount, 265)
  const raw = readdirSync(new URL('../../corpus/', import.meta.url)).filter((file) => file.endsWith('.md'))
  assert.deepEqual(new Set(CORPUS_SOURCES.map((source) => source.filename)), new Set(raw))
})

test('source identity points to the exact bundled file and its captured published URL', () => {
  for (const source of CORPUS_SOURCES) {
    const raw = readFileSync(new URL(`../../corpus/${encodeURIComponent(source.filename)}`, import.meta.url), 'utf8')
    assert.equal(source.id, source.filename.replace(/\.md$/, ''))
    assert.ok(raw.split('\n')[0].includes(source.source), source.filename)
  }
})

test('legacy progress IDs survive and each lesson has retrieval plus application practice', () => {
  for (const old of LEGACY_TOPICS) assert.ok(TOPICS.some((topic) => topic.id === old.id), old.id)
  for (const unit of COURSE_UNITS) {
    assert.ok(FLASHCARDS.some((item) => item.topicId === unit.id), unit.id)
    assert.ok(MCQ_ITEMS.some((item) => item.topicId === unit.id), unit.id)
  }
})

test('prerequisites precede their dependents, and unknown or cyclic dependencies fail', () => {
  const positions = new Map(COURSE_UNITS.map((unit, index) => [unit.id, index]))
  for (const unit of COURSE_UNITS) for (const prerequisite of unit.prerequisites) assert.ok(positions.get(prerequisite) < positions.get(unit.id), unit.id)
  const base = COURSE_UNITS[0]
  assert.throws(() => orderCourseUnits([{ ...base, prerequisites: ['missing'] }]), /unknown prerequisite/)
  assert.throws(() => orderCourseUnits([{ ...base, id: 'a', prerequisites: ['b'] }, { ...base, id: 'b', prerequisites: ['a'] }]), /circular/)
})

test('every configuration rehearsal accepts its solution and rejects empty choices', () => {
  for (const unit of COURSE_UNITS) {
    const solution = Object.fromEntries(unit.lab.fields.map((field) => [field.id, field.expected]))
    assert.ok(checkLabDraft(unit.lab, solution).every((result) => result.passed), unit.id)
    assert.ok(checkLabDraft(unit.lab, {}).every((result) => !result.passed), unit.id)
    assert.equal(renderLabTemplate(unit.lab, solution).includes('{{'), false, unit.id)
    for (const field of unit.lab.fields) {
      const wrong = field.options.find((option) => option.value !== field.expected)
      assert.ok(wrong, `${unit.id}:${field.id}`)
      assert.equal(checkLabDraft(unit.lab, { ...solution, [field.id]: wrong.value }).find((result) => result.id === field.id).passed, false)
    }
  }
})

test('the validation guard detects orphan sources, missing exercise links, and mismatched template slots', () => {
  const original = COURSE_UNITS[0]
  const broken = {
    ...original,
    sourceIds: [],
    lab: { ...original.lab, template: '{{nonexistent}}', azure: { ...original.lab.azure, sourceId: -1, cleanup: '' } },
  }
  const report = validateCurriculum([broken], CORPUS_SOURCES)
  assert.ok(report.errors.some((message) => message.includes('Unmapped corpus source')))
  assert.ok(report.errors.some((message) => message.includes('real corpus exercise')))
  assert.ok(report.errors.some((message) => message.includes('unknown template slot')))
  assert.ok(report.errors.some((message) => message.includes('portal cleanup')))
})

test('every topic has exactly one primary official exam-domain assignment', () => {
  const assigned = PRIMARY_DOMAIN_MAP.flatMap((domain) => domain.topicIds)
  assert.equal(new Set(assigned).size, TOPICS.length)
  assert.deepEqual(new Set(assigned), new Set(TOPICS.map((topic) => topic.id)))
})
