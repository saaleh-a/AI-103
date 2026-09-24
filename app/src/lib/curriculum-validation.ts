import type { CourseUnit } from '../data/curriculum/schema'

interface SourceReference {
  number: number
  title: string
}

export function validateCurriculum(units: readonly CourseUnit[], sources: readonly SourceReference[]) {
  const errors: string[] = []
  const knownSources = new Map(sources.map((source) => [source.number, source]))
  const mapped = new Set<number>()
  const unitIds = new Set(units.map((unit) => unit.id))
  if (unitIds.size !== units.length) errors.push('Duplicate unit IDs.')
  if (knownSources.size !== sources.length) errors.push('Duplicate corpus source numbers.')
  if (units.length === 0) errors.push('No authored teaching units.')
  const requiredText = (value: string | undefined, label: string) => {
    if (typeof value !== 'string' || !value.trim()) errors.push(`${label} is empty.`)
  }

  for (const unit of units) {
    requiredText(unit.title, `${unit.id}: title`)
    requiredText(unit.summary, `${unit.id}: orientation`)
    if (unit.steps.length < 3) errors.push(`${unit.id}: fewer than three teaching steps.`)
    unit.steps.forEach((step, index) => {
      requiredText(step.title, `${unit.id}: teaching step ${index + 1} title`)
      requiredText(step.body, `${unit.id}: teaching step ${index + 1}`)
    })
    if (unit.sourceIds.length === 0) errors.push(`${unit.id}: no sources.`)
    for (const id of unit.sourceIds) {
      if (!knownSources.has(id)) errors.push(`${unit.id}: unknown source ${id}.`)
      else mapped.add(id)
    }
    for (const prerequisite of unit.prerequisites) {
      if (!unitIds.has(prerequisite)) errors.push(`${unit.id}: unknown prerequisite ${prerequisite}.`)
    }
    const fields = new Map(unit.lab.fields.map((field) => [field.id, field]))
    if (fields.size !== unit.lab.fields.length || fields.size < 2) errors.push(`${unit.id}: configuration fields must be unique and substantive.`)
    for (const field of unit.lab.fields) {
      if (field.options.length < 2 || !field.options.some((option) => option.value === field.expected)) errors.push(`${unit.id}: ${field.id} has no valid solution/options.`)
      if (new Set(field.options.map((option) => option.value)).size !== field.options.length) errors.push(`${unit.id}: ${field.id} has duplicate choices.`)
      requiredText(field.explanation, `${unit.id}: ${field.id} feedback`)
      if (!unit.lab.template.includes(`{{${field.id}}}`)) errors.push(`${unit.id}: unused configuration field ${field.id}.`)
    }
    for (const [, slot] of unit.lab.template.matchAll(/\{\{([\w-]+)\}\}/g)) {
      if (!fields.has(slot)) errors.push(`${unit.id}: unknown template slot ${slot}.`)
    }
    const exercise = unit.lab.azure
    const source = knownSources.get(exercise.sourceId)
    if (!source || !/^Exercise\b/i.test(source.title) || !unit.sourceIds.includes(exercise.sourceId)) {
      errors.push(`${unit.id}: the portal guide must cite a mapped, real corpus exercise.`)
    }
    if (exercise.steps.length < 5) errors.push(`${unit.id}: the portal guide needs at least five concrete checkpoints.`)
    for (const step of exercise.steps) {
      requiredText(step.instruction, `${unit.id}: ${step.title} action`)
      requiredText(step.expected, `${unit.id}: ${step.title} observable result`)
    }
    for (const field of ['cost', 'success', 'evidencePrompt', 'cleanup'] as const) requiredText(exercise[field], `${unit.id}: portal ${field}`)
    if (exercise.prerequisites.length === 0) errors.push(`${unit.id}: portal prerequisites are missing.`)
    const answerIds = unit.check.options.map((option) => option.id)
    if (answerIds.length < 3 || new Set(answerIds).size !== answerIds.length || !answerIds.includes(unit.check.correctOptionId)) errors.push(`${unit.id}: invalid application check.`)
    requiredText(unit.check.question, `${unit.id}: check question`)
    for (const option of unit.check.options) requiredText(option.explanation, `${unit.id}: ${option.id} diagnosis`)
    requiredText(unit.recall.prompt, `${unit.id}: recall prompt`)
    requiredText(unit.recall.answer, `${unit.id}: recall explanation`)
    requiredText(unit.transfer, `${unit.id}: transfer`)
  }
  const missingSources = sources.filter((source) => !mapped.has(source.number))
  for (const source of missingSources) errors.push(`Unmapped corpus source ${source.number}: ${source.title}`)
  return {
    unitCount: units.length,
    sourceCount: sources.length,
    mappedSourceCount: mapped.size,
    walkthroughCount: units.length,
    checkpointCount: units.reduce((sum, unit) => sum + unit.lab.azure.steps.length, 0),
    errors,
  }
}
