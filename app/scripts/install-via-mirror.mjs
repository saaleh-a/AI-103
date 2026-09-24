// Installs dependencies through an npm mirror whose URL includes a path, for networks that block
// registry.npmjs.org. npm's replace-registry-host swaps only the hostname of lockfile URLs, which
// drops such a mirror's path and fails with 404s. This rewrites the committed lockfile's tarball URLs
// for the install only, then restores the file byte for byte. Never commit a lockfile regenerated
// through a mirror: CI installs from the public registry.
//
// usage (from app/, with Node.js 22.12+): node scripts/install-via-mirror.mjs [mirror-url]
// The mirror defaults to `npm config get registry`.
import { execFileSync, spawnSync } from 'node:child_process'
import { existsSync, readFileSync, realpathSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const appDir = fileURLToPath(new URL('..', import.meta.url))
const lockPath = path.join(appDir, 'package-lock.json')
const required = JSON.parse(readFileSync(path.join(appDir, 'package.json'), 'utf8')).engines.node.replace(/^>=/, '')

const newer = (a, b) => {
  const [x, y] = [a, b].map((version) => version.split('.').map(Number))
  for (let index = 0; index < 3; index += 1) if (x[index] !== y[index]) return x[index] > y[index]
  return true
}
// npm skips optional native packages whose engines exclude the running Node, which breaks the build.
if (!newer(process.versions.node, required)) {
  throw new Error(`Run this with Node.js ${required} or newer (found ${process.versions.node}); older Node skips required native packages.`)
}

function npmCli() {
  const beside = [
    path.join(path.dirname(process.execPath), 'node_modules', 'npm', 'bin', 'npm-cli.js'),
    path.join(path.dirname(process.execPath), '..', 'lib', 'node_modules', 'npm', 'bin', 'npm-cli.js'),
  ].find((candidate) => existsSync(candidate))
  if (beside) return beside
  // A standalone node binary: borrow the npm found on PATH, but still run it with this Node.
  const found = execFileSync(process.platform === 'win32' ? 'where' : 'which', ['npm'], { encoding: 'utf8' }).split(/\r?\n/)[0].trim()
  const resolved = realpathSync(found)
  const cli = resolved.endsWith('.js') ? resolved : path.join(path.dirname(resolved), 'node_modules', 'npm', 'bin', 'npm-cli.js')
  if (!existsSync(cli)) throw new Error(`Cannot locate npm-cli.js for ${found}.`)
  return cli
}

const cli = npmCli()
const npm = (args, options = {}) => spawnSync(process.execPath, [cli, ...args], { cwd: appDir, encoding: 'utf8', ...options })
const mirror = (process.argv[2] ?? npm(['config', 'get', 'registry']).stdout.trim()).replace(/\/?$/, '/')
if (!/^https:\/\//.test(mirror)) throw new Error(`Use an https mirror URL, not "${mirror}".`)
if (mirror === 'https://registry.npmjs.org/') throw new Error('The public registry needs no rewrite; run npm ci directly.')

const original = readFileSync(lockPath)
let status = 1
try {
  writeFileSync(lockPath, original.toString('utf8').replaceAll('"resolved": "https://registry.npmjs.org/', `"resolved": "${mirror}`))
  status = npm(['ci', '--no-audit', '--no-fund'], { stdio: 'inherit' }).status ?? 1
} finally {
  writeFileSync(lockPath, original)
}
process.exitCode = status
