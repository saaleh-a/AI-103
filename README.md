# AI-103 Mastery Tutor

A website that teaches AI-103 (Developing AI Apps and Agents on Azure), built from a 265-file study corpus and a 45-section teaching constitution — see [`CLAUDE.md`](./CLAUDE.md) for the full operating rules.

## Structure

- **`corpus/`** — 265 raw source files (Microsoft Learn training pages, "AI-103 Episode" transcripts, a Study Cram transcript), verbatim. The primary source of truth.
- **`content/`** — hand-authored v1 study material (flashcards, MCQ/scenario items, discrimination tables) derived from `corpus/`. See `app/src/data/content.ts` and `app/src/data/topics.ts`.
- **`app/`** — the site itself: Vite + React + TypeScript, Tailwind + shadcn/ui, [Bklit](https://bklit.com) charts, [Motion](https://motion.dev), and [React Bits](https://reactbits.dev)-style effects.
- **`CLAUDE.md`** — the full AI-103 Mastery Tutor constitution, plus pointers for anyone (human or Claude Code session) continuing work on this repo.

## Running it

```bash
cd app
npm install
npm run dev
```

`npm run dev` / `npm run build` first sync `corpus/` and `CLAUDE.md` into `app/public/` and build a search manifest (`npm run content`) — see `app/scripts/`.

The static core (flashcards, quizzes, discrimination drills, progress dashboard) works with no setup. For live AI tutoring — open-ended Q&A, diagnosis of wrong answers, novel exam scenarios — add your own Anthropic API key in the app's Settings page; it's stored only in your browser and calls go straight to Anthropic.

## Checking curriculum coverage

With supported **Node.js 22.12+**, run from `app/`:

```powershell
npm run check:coverage
```

The command runs `npm run content` to refresh the generated corpus manifest, then prints a console-only report. It fetches the [official AI-103 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103) live and prints its URL, retrieval timestamp, and the newest outline effective on or before the run date (UTC). Unavailable or malformed outlines fail explicitly; there is no cached fallback.

Each topic has one primary official domain. **UNCOVERED** means zero topics; **THIN** means its unrounded topic share is below the official minimum weight; **NOT FLAGGED** means neither. This is a topic-count maintenance heuristic, not proof of complete objective coverage or learner mastery. Contributing app clusters and topic IDs make the counts auditable; raw corpus size is a separate measure.

When topics or the official outline change, review `app/scripts/coverage-map.mjs` against the live domain headings and the actual topic content. Update explicit primary assignments so every topic appears exactly once; do not store weights in the mapping. New/unmapped topics, unknown domains, duplicate assignments, and broken manifest references stop the report rather than silently changing its denominator.

Dependency-free regression tests, also from `app/`:

```powershell
node --experimental-strip-types --test .\scripts\coverage.test.mjs
```

## Deploying

Pushing to `main` builds and deploys `app/` to GitHub Pages via `.github/workflows/deploy.yml`. GitHub Pages itself needs to be enabled once, in the repo's Settings → Pages, with the source set to "GitHub Actions".
