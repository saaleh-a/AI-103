# AI-103 Mastery Tutor

A project-led website for AI-103 (Developing AI Apps and Agents on Azure), built from a 265-file study corpus and the teaching constitution in [`CLAUDE.md`](./CLAUDE.md).

## Learning Studio

The app carries forward the previous sessions' six continuing builds, 65 authored
concepts, guided Azure fieldwork, local configuration rehearsals, targeted repair,
and source library. Teaching, checking, repair, and review work without an API key
or runtime AI. Azure fieldwork is optional and may require an approved subscription
and incur charges; local rehearsal is not evidence of a real Azure run.

The [replacement design package](design/README.md) records the accepted
project-led/AuDHD-focused direction and its standalone prototype. The production
app now includes the Learning Studio, but it is **not a verified complete
replacement course**: mapping 265 sources to lessons is not an objective-level
content audit, live-lab validation, or evidence of learner mastery. Remaining
release gates are explicit in [the product constitution](PRODUCT_CONSTITUTION.md).

## Structure

- **`corpus/`** — 265 raw source files (Microsoft Learn training pages, "AI-103 Episode" transcripts, a Study Cram transcript), verbatim. The primary source of truth.
- **`app/src/data/curriculum/`** — authored teaching, recall, scenario checks, configuration rehearsals, source mappings, and portal guides. `app/src/data/projects.ts` groups them into continuing builds.
- **`app/`** — the site itself: Vite + React + TypeScript, Tailwind + shadcn/ui, [Bklit](https://bklit.com) charts, [Motion](https://motion.dev), and [React Bits](https://reactbits.dev)-style effects.
- **`CLAUDE.md`** — the full AI-103 Mastery Tutor constitution, plus pointers for anyone (human or Claude Code session) continuing work on this repo.

## Running it

Use **Node.js 22.12 or newer**. Install dependencies with that supported runtime
as well as running the app with it; older Node versions can omit required native
build packages.

```powershell
Set-Location app
npm ci
npm run dev
```

`npm run dev` / `npm run build` first sync `corpus/` and `CLAUDE.md` into `app/public/` and build a search manifest (`npm run content`) — see `app/scripts/`.

No account or API key is needed for the learning flow. The optional AI tutor opens
from the bottom of each lesson once you add your own Anthropic key in Settings; it
is not used to grade the core activities or substitute for missing course content.

## Stop, resume, and keep your evidence

Lesson steps, fieldwork checkpoints, notes, repair drafts, and the selected build
are saved locally. Prerequisite work does not silently switch the selected build.
**Done for now** returns to Today, whose next action opens the actual saved
surface: lesson, fieldwork, repair, recall practice, or exam rehearsal.

Recall and exam rounds retain their question order, position, unfinished
explanation, revealed feedback, selected answers, and completion receipt across
navigation, reload, and export/import. Answer evidence and completion counts are
idempotent. Starting a different targeted recall round asks you to resume or
deliberately replace the unfinished round; it does not discard it silently.

**I don't know** is an unscored response, not a wrong-answer log or a mastery
penalty. Definite answers retain provenance: self-rated recall, scenario
selection, or an untaught diagnostic. Related feedback in the same round is
marked as assistance. Self-ratings do not establish retrieval, and one scenario
does not establish application or mastery. Existing higher-level evidence is
preserved; a same-question success does not clear an unresolved repair flag.

Settings retains the latest 500 definite answer records. Review timing measures
elapsed time from first presentation to commitment, including any interruption;
it is not a speed grade. Study lesson-check timing measures the current visit.

A wrong taught answer schedules review after one, three, then seven days for
successive misses; a second miss on the same idea within one round counts once.
When an idea is due, its round opens with the scenario before
any explanation, so an independent correct answer can retire the review and reset
the streak. Self-rating, uncertainty, and coached success cannot erase a needed
review, and a correct answer never adds review work. After support or repair, an
already-due review moves to the next day without adding a miss; a later deadline
stays unchanged. Finishing a lesson schedules its first recall for the next day;
finishing a revisited lesson again records nothing new. A miss flags repair but
does not make a taught idea new again. Practice only selects taught topics; exam
rehearsal explicitly allows prior-knowledge diagnosis without mastery penalties
for untaught material. A round finished in an earlier visit gives way to a fresh
one.

Older progress imports gain the new notebook/session fields without losing topic
evidence. Malformed saves are retained rather than overwritten, with a visible
warning. When storage is blocked or full, work remains in the current tab and
Settings can export a backup. Export/import/reset cover both rounds and the
notebook.

## Checking curriculum coverage

From `app/`, the local structural check validates sources, prerequisites,
questions, and configuration slots without contacting an external service:

```powershell
npm run content
npm run check:curriculum
```

For the separate live, topic-count comparison with the official outline:

```powershell
npm run check:coverage
```

The command runs `npm run content` to refresh the generated corpus manifest, then prints a console-only report. It fetches the [official AI-103 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103) live and prints its URL, retrieval timestamp, and the newest outline effective on or before the run date (UTC). Unavailable or malformed outlines fail explicitly; there is no cached fallback.

Each topic has one primary official domain. **UNCOVERED** means zero topics; **THIN** means its unrounded topic share is below the official minimum weight; **NOT FLAGGED** means neither. This is a topic-count maintenance heuristic, not proof of complete objective coverage or learner mastery. Contributing app clusters and topic IDs make the counts auditable; raw corpus size is a separate measure.

The legacy coverage report includes optional tutor/Settings links for flagged
domains. These are not a remedy for missing authored content: review and fill
the objective-level teaching gaps separately. Links default to
`http://localhost:5173/`. For another dev-server port or a deployed app, pass its
base URL without a query or fragment:

```powershell
npm run check:coverage -- --app-url http://127.0.0.1:5183/
```

When topics or the official outline change, review `app/scripts/coverage-map.mjs` against the live domain headings and the actual topic content. Update explicit primary assignments so every topic appears exactly once; do not store weights in the mapping. New/unmapped topics, unknown domains, duplicate assignments, and broken manifest references stop the report rather than silently changing its denominator.

Native Node regressions cover progress migration, saved rounds, exact resume,
evidence, review scheduling, and structural coverage. Also from `app/`:

```powershell
npm test
npm run lint
npm run build
```

## Deploying

Pull requests run lint, the native tests, the production build, and the prototype
engine tests (`.github/workflows/verify.yml`). Pushing to `main` runs the tests
again, then builds and deploys `app/` to GitHub Pages via
`.github/workflows/deploy.yml`. GitHub Pages itself needs to be enabled once, in
the repo's Settings → Pages, with the source set to "GitHub Actions".

Keep `app/package-lock.json` resolvable from the public npm registry: CI installs
from it with `npm ci`. If your network only reaches a private npm mirror, do not
commit a lockfile regenerated through it; mirror URLs and missing `integrity`
hashes break the GitHub-hosted install.
