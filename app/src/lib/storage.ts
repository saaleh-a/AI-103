// Small wrapper so every localStorage read/write is safe in private-browsing
// / storage-blocked contexts, per the artifact-storage rule: never let a
// storage failure break rendering.
export function readJSON<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return fallback
    return { ...fallback, ...JSON.parse(raw) } as T
  } catch (error) {
    if (!(error instanceof DOMException) && !(error instanceof SyntaxError)) throw error
    console.warn(`[storage] Could not read ${key}.`, error)
    return fallback
  }
}

export function writeJSON(key: string, value: unknown): boolean {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch (error) {
    if (!(error instanceof DOMException)) throw error
    console.warn(`[storage] Could not save ${key}. Export your progress before closing.`, error)
    return false
  }
}
