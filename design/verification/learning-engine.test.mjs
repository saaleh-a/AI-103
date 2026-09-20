import assert from 'node:assert/strict'
import { test } from 'node:test'
import engine from '../prototype/learning-engine.js'

const now = Date.parse('2026-09-20T19:00:00Z')

function taught() {
  return engine.nextTeaching(engine.nextTeaching(engine.start(engine.initialState())))
}

function atQuestion() {
  let state = taught()
  state = engine.movePipeline(state, 0, 1)
  state = engine.movePipeline(state, 1, 1)
  state = engine.checkPipeline(state, now)
  return engine.leaveFieldwork(state, 'deferred')
}

function answer(state, correct = true, time = now) {
  const item = engine.question(state)
  let next = engine.setDraft(state, 'choice', item.answer)
  next = engine.setDraft(next, 'reason', correct ? item.reason : item.reasons.find((reason) => reason.id !== item.reason).id)
  return engine.submitAnswer(next, false, time)
}

function complete() {
  let state = engine.continueFeedback(answer(atQuestion()), now)
  state = engine.continueFeedback(answer(state), now)
  return state
}

test('fresh learners receive teaching before any assessment', () => {
  const state = engine.initialState()
  assert.equal(state.screen, 'brief')
  assert.equal(engine.start(state).screen, 'teach')
  assert.throws(() => engine.submitAnswer(state), /teaching|check/)
  assert.equal(engine.start(state).taught, false)
  assert.equal(taught().taught, true)
  assert.equal(taught().screen, 'assemble')
})

test('teaching and pure transitions do not mutate the caller', () => {
  const state = engine.initialState()
  const original = structuredClone(state)
  engine.start(state)
  assert.deepEqual(state, original)
  assert.deepEqual(engine.validateState(state), state)
  assert.notEqual(engine.validateState(state), state)
})

test('wrong reconstruction receives a causal repair rather than advancing', () => {
  const state = engine.checkPipeline(taught(), now)
  assert.equal(state.screen, 'assemble')
  assert.equal(state.pipelineSolved, false)
  assert.match(state.pipelineMessage, /evidence first/)
  assert.equal(state.events.length, 0)
})

test('reconstruction can be completed with keyboard-sized moves', () => {
  let state = taught()
  state = engine.movePipeline(state, 0, 1)
  state = engine.movePipeline(state, 1, 1)
  assert.deepEqual(state.pipeline, engine.PIPELINE)
  state = engine.checkPipeline(state, now)
  assert.equal(state.screen, 'fieldwork')
  assert.equal(state.events[0].support, 'independent')
  assert.equal(state.events[0].kind, 'reconstruction')
})

test('hints and corrected reconstruction remain supported evidence', () => {
  let state = engine.helpPipeline(taught())
  state = engine.movePipeline(state, 0, 1)
  state = engine.movePipeline(state, 1, 1)
  state = engine.checkPipeline(state, now)
  assert.equal(state.events[0].support, 'supported')
  assert.equal(engine.evidence(state).retention.length, 0)
})

test('invalid movement and response choices surface an error', () => {
  assert.throws(() => engine.movePipeline(taught(), 0, -1), RangeError)
  assert.throws(() => engine.setDraft(atQuestion(), 'choice', 'invented'), TypeError)
  assert.throws(() => engine.submitAnswer(atQuestion()), /approach and a reason/)
})

test('a right selection with a wrong reason routes to repair', () => {
  const checked = answer(atQuestion(), false)
  assert.equal(checked.feedback.correct, false)
  assert.equal(checked.repair, 'reason')
  const repaired = engine.continueFeedback(checked, now)
  assert.equal(repaired.screen, 'repair')
  assert.equal(engine.evidence(repaired).independent.filter((event) => event.kind === 'decision').length, 0)
})

test('I do not know is a help request, not a wrong-answer result', () => {
  const state = engine.submitAnswer(atQuestion(), true, now)
  assert.equal(state.feedback.unknown, true)
  assert.equal(state.events.at(-1).result, 'help-requested')
  assert.equal(state.events.at(-1).kind, 'support')
  assert.equal(state.repair, 'unknown')
  assert.equal(engine.continueFeedback(state, now).screen, 'repair')
})

test('repair uses a different case and marks the immediate retry supported', () => {
  let state = engine.continueFeedback(answer(atQuestion(), false), now)
  state = engine.continueRepair(state, now)
  assert.equal(state.variant, 1)
  state = answer(state, true)
  assert.equal(state.feedback.correct, true)
  assert.equal(state.feedback.support, 'supported')
  assert.equal(engine.evidence(state).retention.length, 0)
})

test('two supported difficulties offer a bounded exit, not an infinite loop', () => {
  let state = atQuestion()
  for (let attempt = 0; attempt < 2; attempt++) {
    state = engine.submitAnswer(state, true, now)
    state = engine.continueFeedback(state, now)
    state = engine.continueRepair(state, now)
  }
  assert.equal(state.screen, 'question')
  assert.equal(state.questionKind, 'transfer')
  assert.equal(engine.evidence(state).mastery, 'Not established by this prototype')
})

test('a changed requirement has a different decision boundary', () => {
  const state = engine.continueFeedback(answer(atQuestion()), now)
  assert.equal(state.questionKind, 'transfer')
  assert.equal(engine.question(state).answer, 'combine')
  assert.match(engine.question(state).scenario, /despite detailed instructions/)
})

test('duplicate submission is idempotent', () => {
  const state = answer(atQuestion())
  assert.equal(engine.submitAnswer(state, false, now), state)
  assert.equal(engine.submitAnswer(state).events.length, state.events.length)
})

test('pause serialization preserves phase, draft, notes and preferences', () => {
  let state = engine.setDraft(atQuestion(), 'choice', 'rag')
  state = engine.updateFieldwork(state, { note: 'A source was missing.', resource: 'practice-only-name' })
  state.preferences.quiet = true
  state = engine.pause(state)
  const loaded = engine.validateState(JSON.parse(engine.serialize(state)))
  assert.equal(loaded.paused, true)
  assert.equal(engine.resume(loaded).screen, 'question')
  assert.equal(loaded.draft.choice, 'rag')
  assert.equal(loaded.fieldwork.note, 'A source was missing.')
  assert.equal(loaded.preferences.quiet, true)
})

test('fieldwork needs an observation or explicit deferral, not invented success', () => {
  let state = taught()
  state.pipeline = [...engine.PIPELINE]
  state = engine.checkPipeline(state, now)
  assert.throws(() => engine.leaveFieldwork(state, 'observed'), /short observation/)
  assert.equal(engine.leaveFieldwork(state, 'deferred').fieldwork.status, 'deferred')
  state = engine.updateFieldwork(state, { mode: 'rehearsal', note: 'No passage supports international delivery.' })
  state = engine.leaveFieldwork(state, 'observed')
  assert.equal(engine.evidence(state).fieldwork, 'Synthetic local rehearsal')
  state.fieldwork.mode = 'portal'
  assert.equal(engine.evidence(state).fieldwork, 'Learner-reported Azure observation')
})

test('immediate completion schedules later retrieval without awarding mastery', () => {
  const state = complete()
  assert.equal(state.screen, 'receipt')
  assert.equal(Date.parse(state.reviewDueAt), now + engine.DAY)
  assert.equal(state.retainedAt, null)
  assert.equal(engine.evidence(state).retention.length, 0)
  assert.match(engine.evidence(state).mastery, /Not established/)
})

test('a future real review is rejected while a simulated review stays isolated', () => {
  const real = complete()
  const snapshot = engine.serialize(real)
  assert.throws(() => engine.startReview(real, now + 1000), /not due/)
  const preview = engine.startReview(real, now + 1000, true)
  const finished = engine.continueFeedback(answer(preview, true, now + 1000), now + 1000)
  assert.equal(finished.preview, true)
  assert.equal(engine.evidence(finished).retention.length, 0)
  assert.throws(() => engine.serialize(finished), /previews/)
  assert.throws(() => engine.validateState(finished), /simulated/)
  assert.equal(engine.serialize(real), snapshot)
})

test('the due boundary is inclusive and a fresh independent variant gives limited retention evidence', () => {
  const completed = complete()
  assert.throws(() => engine.startReview(completed, now + engine.DAY - 1), /not due/)
  const review = engine.startReview(completed, now + engine.DAY)
  const checked = answer(review, true, now + engine.DAY)
  const finished = engine.continueFeedback(checked, now + engine.DAY)
  assert.equal(engine.evidence(finished).retention.length, 1)
  assert.equal(finished.retainedAt, new Date(now + engine.DAY).toISOString())
  assert.equal(finished.reviewDueAt, null)
  assert.match(engine.evidence(finished).mastery, /Not established/)
})

test('an assisted delayed review does not count as independent retention', () => {
  let state = engine.startReview(complete(), now + engine.DAY)
  state = engine.submitAnswer(state, true, now + engine.DAY)
  state = engine.continueRepair(engine.continueFeedback(state, now + engine.DAY), now + engine.DAY)
  state = engine.continueFeedback(answer(state, true, now + engine.DAY), now + engine.DAY)
  assert.equal(engine.evidence(state).retention.length, 0)
  assert.equal(state.retainedAt, null)
  assert.equal(Date.parse(state.reviewDueAt), now + 2 * engine.DAY)
})

test('reopening an active review resumes its draft rather than resetting evidence or support', () => {
  let state = engine.startReview(complete(), now + engine.DAY)
  state = engine.setDraft(state, 'choice', 'rag')
  state = engine.pause(state)
  const resumed = engine.startReview(state, now + engine.DAY)
  assert.equal(resumed.paused, false)
  assert.equal(resumed.draft.choice, 'rag')
  assert.deepEqual(resumed.events, state.events)
})

test('a simulated review cannot be reopened as real learning', () => {
  const preview = engine.startReview(complete(), now, true)
  assert.throws(() => engine.startReview(preview, now + engine.DAY, false), /simulated/)
})

test('unreadable state is rejected, not silently healed into fresh progress', () => {
  for (const value of [null, {}, { ...engine.initialState(), version: 99 },
    { ...engine.initialState(), events: [{}] },
    { ...engine.initialState(), fieldwork: {} },
    { ...engine.initialState(), pipeline: ['retrieve', 'retrieve', 'generate'] },
    { ...engine.initialState(), screen: 'question' }]) {
    assert.throws(() => engine.validateState(value), TypeError)
  }
})

test('every answer key and rationale exists, with distinct variant IDs', () => {
  const ids = new Set()
  for (const bank of Object.values(engine.QUESTIONS)) for (const item of bank) {
    assert.ok(item.choices.some((choice) => choice.id === item.answer))
    assert.ok(item.reasons.some((reason) => reason.id === item.reason))
    assert.ok(!ids.has(item.id))
    ids.add(item.id)
  }
})

test('the prototype storage namespace is separate from legacy learner state', () => {
  assert.equal(engine.STORAGE_KEY, 'ai103-replacement-prototype-v1')
  assert.ok(!engine.STORAGE_KEY.includes('learner-state'))
  assert.ok(!engine.serialize(engine.initialState()).includes('apiKey'))
})
