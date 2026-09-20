import { FOUNDATION_UNITS } from './foundations.ts'
import { AGENT_UNITS } from './agents.ts'
import { LANGUAGE_SPEECH_UNITS } from './language-speech.ts'
import { RETRIEVAL_CONTENT_UNITS } from './retrieval-content.ts'
import type { CourseUnit } from './schema'

export function orderCourseUnits(units: readonly CourseUnit[]): CourseUnit[] {
  const ids = new Set(units.map((unit) => unit.id))
  if (ids.size !== units.length) throw new Error('Curriculum unit IDs must be unique.')
  for (const unit of units) {
    for (const prerequisite of unit.prerequisites) {
      if (!ids.has(prerequisite)) throw new Error(`${unit.id} has an unknown prerequisite: ${prerequisite}`)
    }
  }
  const remaining = [...units].sort((a, b) => a.order - b.order)
  const ordered: CourseUnit[] = []
  const placed = new Set<string>()
  while (remaining.length) {
    const index = remaining.findIndex((unit) => unit.prerequisites.every((id) => placed.has(id)))
    if (index < 0) throw new Error('The curriculum has a circular prerequisite dependency.')
    const [unit] = remaining.splice(index, 1)
    ordered.push(unit)
    placed.add(unit.id)
  }
  return ordered
}

export const COURSE_UNITS = orderCourseUnits([
  ...FOUNDATION_UNITS,
  ...AGENT_UNITS,
  ...RETRIEVAL_CONTENT_UNITS,
  ...LANGUAGE_SPEECH_UNITS,
])

export const UNIT_BY_ID = new Map(COURSE_UNITS.map((unit) => [unit.id, unit]))
