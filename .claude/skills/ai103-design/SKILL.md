# AI-103 design system

Use this before writing or changing any front-end code in `app/`. It's the
compounding record of design decisions already made for this project —
don't re-derive them from scratch, and don't reach for generic
landing-page/marketing patterns instead.

## What this app is (and isn't)

This is a study dashboard for one person preparing for an exam, built
AuDHD-aware per `CLAUDE.md`. It is **not** a marketing landing page or a
SaaS product site. That rules out, by default:

- Hero sections, marketing copy, testimonial carousels, pricing tables,
  CTA-driven funnels.
- Decorative motion or dense visual noise that adds cognitive load instead
  of removing it.
- Generic "AI slop" tells: purple/blue gradient blobs with no semantic tie
  to the content, glassmorphism for its own sake, giant empty padding that
  reduces useful information density, meaningless KPI tiles.

What it needs instead: calm, scannable, low-clutter screens; one clear
next action per screen; colour and motion that carry real meaning.

## Design tokens (`app/src/index.css`)

- `--primary`: a deliberate indigo/blue (`oklch(0.52 0.19 264)` light,
  `oklch(0.75 0.15 264)` dark) — not the shadcn/Tailwind default neutral
  grayscale, and not a generic AI-purple gradient. Used for the main CTA,
  active nav, links, focus rings.
- `--success`: a separate green token, distinct from `--primary`, for
  correct-answer / completion states (`text-success`, `bg-success/10`,
  `border-success`). Never reuse `--primary` for "correct" — they're
  different signals (brand vs. outcome).
- `--chart-1..5`: a cohesive blue → green → amber ramp, replacing the
  original grayscale ramp (which made the Progress mastery ring nearly
  invisible — light-gray on white). `--chart-1` is the brand blue.
- `--cluster-<id>` / `--cluster-<id>-soft`: one colour per curriculum
  cluster (see `CLUSTER_ACCENT` in `app/src/data/topics.ts`), used
  consistently across badges (`ClusterBadge`), the header's curriculum
  gradient bar, and the Progress legend. This is the one place colour is
  used somewhat decoratively-but-informatively — it's a domain map, not
  decoration, so keep it consistent everywhere a cluster is shown rather
  than introducing new colours per screen.

Both light and dark variants must be defined together — check both with a
Playwright screenshot (see below) before considering a colour change done.

## Layout and motion rules already established

- `MotionGate` (`app/src/components/effects/MotionGate.tsx`) gates all
  entrance animation behind the user's motion preference (off/subtle/full,
  defaulting from `prefers-reduced-motion`). Any new animated element goes
  through this, not raw `motion.div`.
- Hover/interaction feedback stays to opacity, background, and colour
  changes — avoid translate/scale hover effects sitewide, since they're
  applied unconditionally (not motion-gated) and this app treats motion as
  something the user explicitly controls.
- Cards are used for genuinely distinct content blocks, not as a default
  wrapper for every paragraph — don't add a new `<Card>` where a plain
  `<div>` with spacing would read just as clearly.
- Radius, spacing, and type scale come from the existing Tailwind/shadcn
  tokens (`--radius`, the default type scale) — don't introduce one-off
  pixel values for spacing that don't match the existing rhythm (the app
  mostly uses the Tailwind 4/8px-based scale: `gap-1.5`, `gap-3`, `gap-4`,
  `gap-6`, `p-3`/`p-4`/`p-6`).

## Screenshot verification (the "screenshot loop", scoped for this app)

Before calling a visual change done:

1. Confirm the dev server is running (`npm run dev` in `app/`).
2. Use Playwright (chromium at `/opt/pw-browsers/chromium`) to screenshot
   the affected page(s) in **both** light and dark (`colorScheme` context
   option) — this app has real dark-mode support and both must work.
3. Actually look at the screenshot and check, concretely: spacing rhythm
   consistent with nearby elements, text contrast against its background,
   nothing clipped/overflowing, colour used matches the token system above
   (no ad-hoc hex values), and the change doesn't fight the "one clear next
   action, low clutter" AuDHD constraint.
4. Check for console/page errors during the same pass — this app uses a
   `HashRouter` (`#/route`, not `/route`), so screenshot scripts must
   navigate to hash URLs or they'll silently load the wrong page.

Don't skip this for "small" CSS changes — several real bugs in this app
(the nearly-invisible mastery ring, dark mode's "System" option never
actually applying `prefers-color-scheme`) were only caught by actually
looking at rendered screenshots, not by reading the diff.

## Review lens: this app is "Operate" mode, not "Persuade" mode

Adapted from Impeccable's surface-type framing (github.com/pbakaus/impeccable
— design philosophy only; its actual `/impeccable` commands ship as a
compiled binary via `npx impeccable install`, which this repo does not run,
since that's unaudited third-party code execution, not a markdown skill).
Impeccable splits front-end work into four surface types with different
craft priorities:

- **Persuade** (landing pages, marketing) — the mode almost every generic
  "make your AI website look less AI" skill/list is actually written for.
- **Operate** (app UI, dashboards) — **this app.** Priorities: information
  density that stays scannable, consistent interaction states, low
  cognitive load, predictable navigation. Not: hero sections, big
  marketing type, conversion-funnel structure.
- **Read** (docs, guides) — close cousin; the Learn page's lesson cards
  lean this way.
- **Experience** (portfolios, galleries) — not relevant here.

When any pasted design advice, skill, or article doesn't name its target
surface type, assume it means Persuade (most do) and translate before
applying: "big whitespace + one strong CTA" becomes, for this app, "dense
but uncluttered + one clear next action" — same underlying craft
principle (hierarchy, restraint), different surface.

## Documenting the token system (DESIGN.md format)

The project's design tokens are also written up in `DESIGN.md` at the repo
root, using the two-layer format from google-labs-code/design.md (YAML
front-matter tokens + prose explaining why) — a portable, human- and
agent-readable spec, kept manually in sync with `app/src/index.css` since
this repo doesn't run that project's CLI/linter. Update both together.

## When you're tempted to install an external design skill or MCP

Read what it actually contains before trusting it: several "install this
skill" recommendations circulating in tutorials/newsletters are thin
wrappers around an npm/Python CLI or a compiled binary, not a markdown
file — that's a real code-execution and supply-chain decision, not a
config change, and shouldn't be done sight-unseen just because a video
said to. Fetch and read the source first (GitHub raw content, not just an
install command), extract the actual design guidance, and adapt it into
this file if it's genuinely useful and matches this app's surface type
(Operate, above) — that's what happened with the Impeccable and DESIGN.md
references here.
