import assert from 'node:assert/strict'
import test from 'node:test'
import { emptyState, normalizeLearnerState } from '../src/lib/learner-state-data.ts'
import { emptyStudyState, emptyStudyUnit, hasLearnedTopic, missingPrerequisites, normalizeStudyState, practiceEvidenceState, selectStudyUnit, updateStudyUnit } from '../src/lib/study-state.ts'
import { buildReviewQueue, shuffled } from '../src/lib/study-practice.ts'

const units = [{ id: 'foundation', prerequisites: [] }, { id: 'agent', prerequisites: ['foundation'] }, { id: 'tools', prerequisites: ['agent'] }]
const state = () => emptyState(units)

test('old exports acquire a study notebook without losing existing evidence', () => {
  const old = { topics: { foundation: { state: 'mastered', evidence: ['Across time'] } } }
  const imported = normalizeLearnerState(old, units)
  assert.deepEqual(imported.study, emptyStudyState())
  assert.deepEqual(imported.topics.foundation, old.topics.foundation)
  assert.equal(hasLearnedTopic(imported, 'foundation'), true)
})

test('teaching position, portal checkpoints, notes, reflection, and choices round-trip', () => {
  const original = state()
  original.study = updateStudyUnit(original.study, 'agent', {
    stage: 'lab', lessonStep: 2, lessonComplete: true, labStep: 3,
    portalChecks: [true, true, false, false, false],
    portalNotes: ['Created an isolated resource group.', '', 'The response cited a document.'],
    reflection: 'The runtime decides; the tool executes.',
    recallRevealed: true,
    draft: { tool: 'function' },
  })
  original.study.pausedAt = '2026-09-20T12:00:00.000Z'
  original.study.sessionMinutes = 5
  const imported = normalizeLearnerState(JSON.parse(JSON.stringify(original)), units)
  assert.deepEqual(imported.study, original.study)
  assert.equal(selectStudyUnit(units, imported), 'agent')
})

test('updates preserve other lessons and notes and clear a paused status only when working again', () => {
  const first = updateStudyUnit(emptyStudyState(), 'foundation', { reflection: 'First note' })
  const second = updateStudyUnit({ ...first, pausedAt: '2026-09-20T12:00:00.000Z' }, 'agent', { labStep: 2 })
  assert.equal(second.units.foundation.reflection, 'First note')
  assert.equal(second.units.agent.labStep, 2)
  assert.equal(second.pausedAt, undefined)
  assert.equal(first.units.agent, undefined)
})

test('a fresh learner gets a prerequisite-ready foundation, not a quiz', () => {
  const fresh = state()
  assert.equal(selectStudyUnit(units, fresh), 'foundation')
  assert.deepEqual(missingPrerequisites(units[1], fresh), ['foundation'])
  assert.deepEqual(buildReviewQueue(units.map((unit) => unit.id), fresh, 8), [])
})

test('the next recommendation advances through taught prerequisites rather than repeating a finished lesson', () => {
  const current = state()
  current.study = updateStudyUnit(current.study, 'foundation', { stage: 'complete', lessonComplete: true, completedAt: '2026-09-20T12:00:00.000Z' })
  assert.equal(selectStudyUnit(units, current), 'agent')
  current.study = updateStudyUnit(current.study, 'agent', { stage: 'lab', lessonComplete: true, labStep: 1 })
  assert.equal(selectStudyUnit(units, current), 'agent')
})

test('unknown historical active IDs cannot become a broken recommendation', () => {
  const current = state()
  current.study.activeUnitId = 'removed-unit'
  assert.equal(selectStudyUnit(units, current), 'foundation')
})

test('review queues contain only taught topics and respect a targeted topic', () => {
  const current = state()
  current.study.units.foundation = { ...emptyStudyUnit(), lessonComplete: true }
  current.study.units.agent = { ...emptyStudyUnit(), lessonComplete: true }
  current.retrievalQueue = [{ topicId: 'tools', dueAt: '2020-01-01T00:00:00.000Z', missStreak: 1 }]
  const all = buildReviewQueue(units.map((unit) => unit.id), current, 8)
  assert.equal(all.length, 4)
  assert.equal(all.some((item) => item.topicId === 'tools'), false)
  assert.equal(buildReviewQueue(units.map((unit) => unit.id), current, 8, 'agent').every((item) => item.topicId === 'agent'), true)
  assert.deepEqual(buildReviewQueue(units.map((unit) => unit.id), current, 8, 'tools'), [])
  assert.deepEqual(buildReviewQueue(units.map((unit) => unit.id), current, 8, 'missing'), [])
})

test('self-ratings and single scenarios cannot establish retrieval, application, or mastery', () => {
  let level = 'understood'
  for (let i = 0; i < 20; i += 1) level = practiceEvidenceState(level, 'flashcard', true)
  assert.equal(level, 'understood')
  for (let i = 0; i < 20; i += 1) level = practiceEvidenceState(level, 'mcq', true)
  assert.equal(level, 'understood')
  assert.equal(practiceEvidenceState('introduced', 'mcq', true), 'understood')
  assert.equal(practiceEvidenceState('needs-repair', 'mcq', true), 'needs-repair')
  assert.equal(practiceEvidenceState('applicable', 'mcq', true), 'applicable')
  assert.equal(practiceEvidenceState('mastered', 'flashcard', true), 'mastered')
  assert.equal(practiceEvidenceState('not-encountered', 'mcq', false), 'introduced')
})

test('malformed notebook imports fail explicitly', () => {
  for (const value of [null, [], {}, { ...emptyStudyState(), version: 2 }, { ...emptyStudyState(), sessionMinutes: 99 }]) {
    assert.throws(() => normalizeStudyState(value), TypeError)
  }
  for (const patch of [{ stage: 'mastered' }, { labStep: -1 }, { lessonStep: NaN }, { portalChecks: ['yes'] }, { portalNotes: [null] }, { draft: [] }, { reflection: 42 }, { completedAt: 'bad-date' }, { recallRevealed: 'yes' }]) {
    assert.throws(() => normalizeStudyState({ ...emptyStudyState(), units: { foundation: { ...emptyStudyUnit(), ...patch } } }), TypeError)
  }
})

test('reset removes notebook state, and shuffling does not mutate source order', () => {
  const original = [1, 2, 3, 4]
  const result = shuffled(original, () => 0)
  assert.deepEqual(original, [1, 2, 3, 4])
  assert.deepEqual([...result].sort(), original)
  assert.deepEqual(state().study.units, {})
})
