# AI-103 Learning Studio

A corpus-grounded tutor for AI-103: Developing AI Apps and Agents on Azure.
The course connects all **265 supplied source documents** to authored teaching,
guided Azure fieldwork, recall, and application checks. The operating rules
remain in [`CLAUDE.md`](./CLAUDE.md).

## Build first, use the corpus as a reference

The front door is a continuing Azure project, not a Microsoft Learn-style
chapter index. Six outcome-led builds connect all 65 concepts: a grounded support
assistant, multi-agent case routing, document intake, voice interaction, a visual
content workflow, and reliability review.

Each build includes an explicit outcome, connected milestones, original
synthetic practice material to download, a change-the-requirement challenge, and
a field notebook containing the learner's own observations. Saved resource names
are reusable breadcrumbs, not a live Azure inventory.

The next-action coach is transparent, rule-based routing: unfinished work comes
first, then a relevant recorded confusion, then due retrieval, then a
prerequisite-ready concept for the selected build. A longer session can pick up
unrecorded portal work. A wrong recorded alternative opens a focused contrast
and repair note instead of blindly advancing the syllabus. Reading that repair
does not erase the mastery repair flag or award mastery.

## The learning loop

**Understand → try in Azure → recall → return later.**

- Today recommends one resumable, prerequisite-ready lesson rather than a menu
  of competing study tasks.
- Lessons reveal one short teaching step at a time. A five-minute session can
  save and stop after a single step; longer sessions still have no countdown.
- Azure fieldwork guides the learner through the portal or Microsoft Foundry:
  setup and costs, where to go, what to change, what to observe, and cleanup.
  SDK-only work explicitly transitions from portal setup to an editor.
- Checkpoints and field notes are self-recorded. This site does **not** connect
  to an Azure subscription, create resources, run SDK code, or independently
  verify a deployment.
- An optional local configuration rehearsal checks structured choices. Its
  rendered plans and expected outputs are labelled as learning models, not
  live service responses.
- Recall practice uses only previously taught topics. Exam practice is an
  explicit, eight-scenario mode; untaught material is diagnostic, not a mastery
  failure.
- Reading, immediate correctness, and repeated self-ratings never automatically
  create a mastered state. Source mapping, lesson completion, Azure observations,
  and mastery evidence are separate measures.

## Where things live

- **`corpus/`**: the 265 original files, unmodified. The supplied September 19
  backup matches these documents; its filenames use different zero-padding.
- **`app/src/data/curriculum/`**: the authored learning path. Four content slices
  share a schema for teaching, prerequisites, source IDs, portal walkthroughs,
  optional rehearsal, retrieval, and application checks.
- **`app/src/data/projects.ts` / `app/src/lib/coach.ts`**: outcome-led builds,
  synthetic practice material, and evidence-aware next-action routing.
- **`app/src/data/topics.ts`**: the current topic adapter plus historical IDs
  retained for progress compatibility.
- **`app/src/data/content.ts`**: legacy practice material and comparison tables.
  Current per-topic practice is defined with each curriculum unit and exposed by
  `practice-content.ts`.
- **`app/src/lib/study-state.ts`**: resumable lesson and fieldwork state,
  prerequisite selection, import validation, and conservative practice promotion.
- **`app/src/pages/`**: Today, course map, paced lessons, Azure fieldwork, source
  library, review, comparisons, exam practice, progress, and settings.
- **`PRODUCT.md` / `DESIGN.md`**: product constraints and the shipped visual system.

The six learning tracks organize the experience; they are **not** the five
official exam domains or their weights. Each unit separately declares one
primary exam domain.

## Run locally

Use **Node.js 22.12 or newer**.

```powershell
Set-Location app
npm ci
npm run dev
```

The content step copies the corpus and constitution into public assets and
generates a lightweight source manifest. Full source documents are fetched on
demand, not embedded in the JavaScript bundle. Hash routes and a relative Vite
base support static hosting under a subdirectory.

The lockfile uses compatible published dependency versions. Some versions in the
previous lockfile were unavailable from the configured package feed, so the lock
was regenerated instead of bypassing TLS or depending on unavailable tarballs.

## Progress and privacy

Progress is stored under `ai103-learner-state` in browser localStorage. It includes
topic evidence, review scheduling, up to 500 answer records, lesson positions,
session size, configuration drafts, portal checkpoints, field notes, selected
scenario alternatives, repair notes, the current build, and resource-name breadcrumbs.

Settings exports and imports all of this as JSON. Existing exports gain an empty
study notebook without losing their topic evidence or review schedule. Invalid
imports do not replace current progress. An unreadable saved notebook is not
automatically overwritten; blocked storage produces a visible warning.

Do not put keys, tokens, personal data, or confidential content in field notes.
The optional Anthropic tutor requires a separate browser-stored API key. Only
explicit chat requests send messages, selected source excerpts, and a compact
topic-progress summary to Anthropic. Field notes and Azure credentials are not
sent. No key is needed for the authored teaching or fieldwork guides.

## Coverage and regression checks

From `app/`:

```powershell
npm run content
npm run check:curriculum
npm test
npm run lint
npm run build
```

The local curriculum guard verifies that every source is mapped, historical topic
IDs survive, prerequisites are valid, and every unit has teaching, a real cited
exercise, observable portal checkpoints, costs, cleanup, rehearsal feedback,
recall, and an application check. It also runs before production builds.

This is a structural guard, not a claim that counting links proves instructional
depth or that a learner has mastered the material.

The separate maintenance command still compares primary topic assignments with
the live [official AI-103 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103):

```powershell
npm run check:coverage
npm run check:coverage -- --app-url http://127.0.0.1:5173/
```

It reports live weights and topic-count heuristics, not objective-level mastery.
The source corpus remains a captured snapshot. Guides flag naming/version
conflicts and link the original exercise when current portal screens differ.

## Interface

Geist typography, a graphite navigation rail, and a restrained green action
palette replace the old card-dashboard treatment. Focus mode removes secondary
content. Motion is off by default and always respects system reduced motion.

[Motion](https://motion.dev/) handles optional state transitions.
[Bklit](https://bklit.com/) charts show actual lesson progress with an equivalent
readable table. The lesson rail adapts [React Bits' Stepper](https://reactbits.dev/components/stepper);
its license is retained at `app/public/licenses/react-bits.txt`.

## Deploy

The existing `.github/workflows/deploy.yml` builds and publishes `app/` to
GitHub Pages on a push to `main`. Enable Pages with **GitHub Actions** as its
source in repository settings.
