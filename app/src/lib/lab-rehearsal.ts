import type { BuildLab } from '../data/curriculum/schema'

export function renderLabTemplate(lab: BuildLab, draft: Record<string, string>): string {
  const fields = new Map(lab.fields.map((field) => [field.id, field]))
  return lab.template.replace(/\{\{([\w-]+)\}\}/g, (_slot, id: string) => {
    const field = fields.get(id)
    if (!field) throw new Error(`Unknown template field: ${id}`)
    const selected = draft[id]
    return field.options.some((option) => option.value === selected) ? selected : `<${field.label}>`
  })
}

export function checkLabDraft(lab: BuildLab, draft: Record<string, string>) {
  return lab.fields.map((field) => ({
    id: field.id,
    label: field.label,
    passed: draft[field.id] === field.expected,
    message: !draft[field.id]
      ? `Choose ${field.label.toLowerCase()} before checking this part.`
      : field.explanation,
  }))
}
