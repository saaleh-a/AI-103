import { COURSE_UNITS } from '../src/data/curriculum/index.ts'

// Primary assignments live beside the authored lessons; live weights remain
// the responsibility of check-coverage.mjs.
export const PRIMARY_DOMAIN_MAP = [
  'Plan and manage an Azure AI solution',
  'Implement generative AI and agentic solutions',
  'Implement computer vision solutions',
  'Implement text analysis solutions',
  'Implement information extraction solutions',
].map((domain) => ({
  domain,
  topicIds: COURSE_UNITS.filter((unit) => unit.examDomain === domain).map((unit) => unit.id),
}))
