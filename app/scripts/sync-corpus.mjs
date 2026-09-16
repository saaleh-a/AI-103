// Copies the repo-root corpus/ (source of truth) into public/corpus/ so Vite
// serves it as static files the app can fetch on demand, without bundling
// ~3MB of transcripts into the JS bundle.
import { copyFileSync, cpSync, existsSync, mkdirSync, rmSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const src = resolve(here, '../../corpus')
const dest = resolve(here, '../public/corpus')

if (!existsSync(src)) {
  console.error(`[sync-corpus] No corpus/ found at ${src} — skipping.`)
  process.exit(0)
}

rmSync(dest, { recursive: true, force: true })
mkdirSync(dest, { recursive: true })
cpSync(src, dest, { recursive: true })
console.log(`[sync-corpus] Copied corpus into ${dest}`)

// Also mirror CLAUDE.md's constitution so the AI chat panel can fetch and
// use the exact same operating rules a Claude Code session would.
const claudeMd = resolve(here, '../../CLAUDE.md')
if (existsSync(claudeMd)) {
  copyFileSync(claudeMd, resolve(here, '../public/constitution.md'))
  console.log('[sync-corpus] Copied CLAUDE.md -> public/constitution.md')
}
