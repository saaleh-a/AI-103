// Small wrapper so every localStorage read/write is safe in private-browsing
// / storage-blocked contexts, per the artifact-storage rule: never let a
// storage failure break rendering.
export function readJSON<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return fallback
    return { ...fallback, ...JSON.parse(raw) } as T
  } catch {
    return fallback
  }
}

export function writeJSON(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // storage full or blocked — the app still works, it just won't persist
  }
}
