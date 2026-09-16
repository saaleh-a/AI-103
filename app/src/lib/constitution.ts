let cached: Promise<string> | null = null

/** Fetches CLAUDE.md (mirrored to public/constitution.md) and trims it down
 * to the "# AI-103 MASTERY TUTOR" constitution itself, dropping the
 * repo-navigation preamble that's only relevant to someone editing the repo. */
export function getConstitution(): Promise<string> {
  if (cached) return cached
  cached = fetch(`${import.meta.env.BASE_URL}constitution.md`)
    .then((r) => (r.ok ? r.text() : Promise.reject(new Error(`${r.status} fetching constitution.md`))))
    .then((full) => {
      const marker = '# AI-103 MASTERY TUTOR'
      const idx = full.indexOf(marker)
      return idx >= 0 ? full.slice(idx) : full
    })
  return cached
}
