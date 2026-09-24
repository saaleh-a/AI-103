import assert from 'node:assert/strict'
import test from 'node:test'
import { COURSE_UNITS } from '../src/data/curriculum/index.ts'
import { BUILD_PROJECTS, projectUnitIds } from '../src/data/projects.ts'
import { chooseCoachingAction, coachingHref } from '../src/lib/coach.ts'
import { emptyState, normalizeLearnerState } from '../src/lib/learner-state-data.ts'
import { emptyStudyUnit } from '../src/lib/study-state.ts'

const fresh = () => emptyState(COURSE_UNITS)
const choose = (state, now = Date.parse('2026-09-20T12:00:00Z')) => chooseCoachingAction(COURSE_UNITS, BUILD_PROJECTS, state, now)
const learned = (extra = {}) => ({ ...emptyStudyUnit(), lessonComplete: true, stage: 'complete', completedAt: '2026-09-20T10:00:00Z', ...extra })

test('the six outcome-led projects account for every authored concept exactly once', () => {
  const ids = BUILD_PROJECTS.flatMap(projectUnitIds)
  assert.equal(BUILD_PROJECTS.length, 6)
  assert.equal(ids.length, 65)
  assert.equal(new Set(ids).size, 65)
  assert.deepEqual(new Set(ids), new Set(COURSE_UNITS.map((unit) => unit.id)))
  for (const project of BUILD_PROJECTS) {
    assert.ok(project.challenge.length > 40)
    assert.ok(project.starter.content.toLowerCase().includes('synthetic'))
    assert.ok(project.milestones.every((milestone) => milestone.evidence && milestone.purpose))
  }
})

test('a new learner gets a prerequisite-ready task in a continuing build', () => {
  const action = choose(fresh())
  assert.equal(action.kind, 'learn')
  assert.equal(action.unitId, 'ai-foundations')
  assert.equal(action.projectId, 'support-assistant')
  assert.equal(coachingHref(action), '/learn/ai-foundations')
})

test('a selected advanced build teaches its missing prerequisites rather than testing cold knowledge', () => {
  const state = fresh()
  state.study.activeProjectId = 'visual-workflow'
  const action = choose(state)
  assert.equal(action.projectId, 'visual-workflow')
  assert.equal(action.unitId, 'ai-foundations')
  assert.match(action.reason, /prerequisite/)
})

test('unfinished work outranks a new task and a due review', () => {
  const state = fresh()
  state.study.activeUnitId = 'foundry-projects'
  state.study.units['foundry-projects'] = { ...emptyStudyUnit(), lessonStep: 2 }
  state.study.units['ai-foundations'] = learned()
  state.retrievalQueue = [{ topicId: 'ai-foundations', dueAt: '2026-09-19T00:00:00Z', missStreak: 0 }]
  assert.equal(choose(state).kind, 'resume')
  assert.equal(choose(state).unitId, 'foundry-projects')
})

test('recorded confusion changes the next action instead of blindly advancing the syllabus', () => {
  const state = fresh()
  state.study.units['ai-foundations'] = learned()
  state.topics['ai-foundations'] = { state: 'needs-repair', evidence: ['A taught boundary was missed.'], lastEvidenceAt: '2026-09-20T11:00:00Z' }
  const repair = choose(state)
  assert.equal(repair.kind, 'repair')
  assert.equal(coachingHref(repair), '/repair/ai-foundations')
  state.study.units['ai-foundations'].repairReviewedAt = '2026-09-20T11:30:00Z'
  assert.equal(choose(state).kind, 'learn')
  assert.equal(choose(state).unitId, 'foundry-projects')
  assert.equal(state.topics['ai-foundations'].state, 'needs-repair')
  state.topics['ai-foundations'].lastEvidenceAt = '2026-09-20T11:45:00Z'
  assert.equal(choose(state).kind, 'repair')
})

test('a later review is targeted to taught material, not an untaught queued ID', () => {
  const state = fresh()
  state.study.units['ai-foundations'] = learned()
  state.retrievalQueue = [
    { topicId: 'voice-live', dueAt: '2020-01-01T00:00:00Z', missStreak: 0 },
    { topicId: 'ai-foundations', dueAt: '2026-09-19T00:00:00Z', missStreak: 0 },
  ]
  const action = choose(state)
  assert.equal(action.kind, 'retrieve')
  assert.equal(action.unitId, 'ai-foundations')
})

test('a longer session can pick up unfinished Azure work; a short one does not force cloud setup', () => {
  const state = fresh()
  state.study.units['ai-foundations'] = learned({ labSkipped: true })
  state.study.sessionMinutes = 5
  assert.equal(choose(state).kind, 'learn')
  state.study.sessionMinutes = 25
  assert.equal(choose(state).kind, 'fieldwork')
  assert.equal(coachingHref(choose(state)), '/labs/ai-foundations')
  state.study.units['ai-foundations'].portalCompletedAt = '2026-09-20T11:30:00Z'
  assert.equal(choose(state).kind, 'learn')
})

test('project breadcrumbs, repair notes, and selected answers survive progress export/import', () => {
  const state = fresh()
  state.study.activeProjectId = 'voice-assistant'
  state.study.workspace = { resourceGroup: 'isolated-study-group', foundryProject: 'study-project', deployment: 'study-chat' }
  state.study.units['ai-foundations'] = learned({ repairNote: 'Prediction is not verified evidence.', repairReviewedAt: '2026-09-20T11:30:00Z' })
  state.sessionLog = [{ topicId: 'ai-foundations', itemId: 'scenario-ai-foundations', itemType: 'mcq', correct: false, selectedOptionId: 'b', msToAnswer: 2400, timestamp: '2026-09-20T11:00:00Z' }]
  const imported = normalizeLearnerState(JSON.parse(JSON.stringify(state)), COURSE_UNITS)
  assert.deepEqual(imported.study, state.study)
  assert.deepEqual(imported.sessionLog, state.sessionLog)
  assert.throws(() => normalizeLearnerState({ ...state, study: { ...state.study, workspace: { resourceGroup: [], foundryProject: '', deployment: '' } } }, COURSE_UNITS), TypeError)
  assert.throws(() => normalizeLearnerState({ ...state, sessionLog: [{ ...state.sessionLog[0], selectedOptionId: 42 }] }, COURSE_UNITS), TypeError)
})

test('a prerequisite keeps the selected build on resume rather than switching to its owning build', () => {
  const state = fresh()
  state.study.activeProjectId = 'visual-workflow'
  state.study.activeUnitId = 'ai-foundations'
  state.study.activeActivity = 'lesson'
  state.study.units['ai-foundations'] = { ...emptyStudyUnit(), lessonStep: 1 }
  const action = choose(state)
  assert.equal(action.kind, 'resume')
  assert.equal(action.projectId, 'visual-workflow')
  assert.equal(coachingHref(action), '/learn/ai-foundations')
})

test('fieldwork and unfinished repair resume on their actual surfaces', () => {
  const state = fresh()
  state.study.activeProjectId = 'visual-workflow'
  state.study.activeUnitId = 'ai-foundations'
  state.study.activeActivity = 'fieldwork'
  state.study.units['ai-foundations'] = learned({ stage: 'lab', labStep: 3 })
  assert.equal(coachingHref(choose(state)), '/labs/ai-foundations')
  state.study.activeActivity = 'repair'
  state.study.units['ai-foundations'].stage = 'complete'
  state.study.units['ai-foundations'].repairNote = 'Generated words are not evidence of an action.'
  assert.equal(coachingHref(choose(state)), '/repair/ai-foundations')
  state.study.units['ai-foundations'].repairReviewedAt = '2026-09-20T11:00:00Z'
  assert.notEqual(choose(state).kind, 'resume')
})

test('successful practice does not repeatedly reopen an already reviewed repair, but a new miss does', () => {
  const state = fresh()
  const unitId = 'ai-foundations'
  state.study.units[unitId] = learned({ repairReviewedAt: '2026-09-20T11:00:00Z' })
  state.topics[unitId] = { state: 'needs-repair', evidence: ['Conservative repair flag retained.'], lastEvidenceAt: '2026-09-20T11:30:00Z' }
  const entry = { topicId: unitId, itemId: `scenario-${unitId}`, itemType: 'mcq', msToAnswer: 1000, evidenceKind: 'scenario' }
  state.sessionLog = [
    { ...entry, correct: false, timestamp: '2026-09-20T10:00:00Z' },
    { ...entry, correct: true, timestamp: '2026-09-20T11:30:00Z' },
  ]
  assert.equal(choose(state).kind, 'learn')
  assert.equal(state.topics[unitId].state, 'needs-repair')
  state.sessionLog.push({ ...entry, correct: false, timestamp: '2026-09-20T11:35:00Z' })
  state.sessionLog.push({ ...entry, correct: true, assisted: true, timestamp: '2026-09-20T11:40:00Z' })
  state.topics[unitId].lastEvidenceAt = '2026-09-20T11:40:00Z'
  assert.equal(choose(state).kind, 'repair')
})
