import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

// CI installs with `npm ci` from the public registry; a lockfile regenerated through a private mirror
// (mirror URLs, or entries without integrity hashes) breaks the GitHub-hosted install and deploy.
test('the committed lockfile resolves every package from the public registry with an integrity hash', () => {
  const lock = JSON.parse(readFileSync(new URL('../package-lock.json', import.meta.url), 'utf8'))
  const problems = []
  for (const [path, entry] of Object.entries(lock.packages)) {
    if (path === '' || entry.link) continue
    if (!entry.resolved?.startsWith('https://registry.npmjs.org/')) problems.push(`${path}: resolved ${entry.resolved ?? '(missing)'}`)
    if (!/^sha512-/.test(entry.integrity ?? '')) problems.push(`${path}: integrity ${entry.integrity ?? '(missing)'}`)
  }
  assert.deepEqual(problems, [], 'Restore the lockfile from main and add packages without regenerating it through a mirror (see README).')
})
