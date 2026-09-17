---
name: AI-103 Tutor
surface: operate
colors:
  primary: "oklch(0.52 0.19 264)"
  primary-dark: "oklch(0.75 0.15 264)"
  success: "oklch(0.6 0.15 145)"
  success-dark: "oklch(0.72 0.14 145)"
  background: "oklch(1 0 0)"
  background-dark: "oklch(0.145 0 0)"
  cluster:
    agents-orchestration: "oklch(0.55 0.19 264)"
    content-document: "oklch(0.53 0.1 195)"
    language: "oklch(0.58 0.19 16)"
    speech: "oklch(0.54 0.13 152)"
    search-rag: "oklch(0.56 0.13 228)"
    models-deploy-eval: "oklch(0.6 0.15 70)"
typography:
  family: "Geist Variable"
  heading: "inherits sans"
radius:
  base: "0.625rem"
spacing:
  scale: "Tailwind default (4px increments): gap-1.5, gap-3, gap-4, gap-6, p-3/p-4/p-6"
---

# AI-103 Tutor — design system

A study dashboard, not a marketing site. Format follows
[google-labs-code/design.md](https://github.com/google-labs-code/design.md):
tokens above give exact values, prose below explains why. Keep this file
manually in sync with `app/src/index.css` and `app/src/data/topics.ts` — this
repo doesn't run that project's lint/diff CLI.

## Overview

Built for one person revising for the AI-103 exam, with AuDHD-aware pacing
(see `CLAUDE.md`). Every design decision below serves "Operate" priorities —
information density that stays scannable, low cognitive load, one clear next
action per screen — not "Persuade" priorities like a landing page would have
(hero sections, conversion funnels, marketing copy). See
`.claude/skills/ai103-design/SKILL.md` for the fuller rationale and the
review checklist.

## Colors

`primary` is a deliberate indigo/blue, not the shadcn/Tailwind neutral
default (which was pure grayscale — zero chroma — and made the Progress
mastery ring nearly invisible) and not a generic AI-purple gradient either.
`success` is a distinct green token, never substituted with `primary`:
brand identity and "you got it right" are different signals.

The six `cluster` colors are the one place color carries a fixed,
non-obvious meaning: each is one of the 6 curriculum domains (Agents &
Orchestration, Content Understanding & Document Intelligence, Language,
Speech, Search & RAG, Models). They're reused identically across topic
badges, the header's curriculum gradient bar, and the Progress legend —
consistency here is the point, not variety.

## Typography

Geist Variable throughout, one family for both heading and body — no
separate display font. Hierarchy comes from size/weight (existing Tailwind
type scale), not from introducing a second typeface.

## Layout

Cards mark genuinely distinct content blocks (a lesson section, a practice
question), not a default wrapper for every paragraph. Spacing follows the
existing Tailwind 4px-based scale — no one-off pixel values.

## Motion

Gated by `MotionGate` behind an explicit off/subtle/full preference,
defaulting from `prefers-reduced-motion`. Hover/interaction feedback (not
gated) stays to opacity/background/color changes — no translate/scale on
hover sitewide, since that motion isn't behind the user's control.

## Do

- Reuse a cluster's color everywhere that cluster is referenced.
- Keep one clear primary action per screen (AuDHD constraint, not a
  marketing-funnel constraint).
- Check both light and dark themes before calling a color change done.

## Don't

- Add hero sections, testimonial patterns, or CTA-funnel structure — this
  isn't a landing page.
- Introduce a new accent color outside `primary` / `success` / the six
  cluster colors without a reason tied to actual meaning.
- Add decorative motion that isn't gated by the motion preference.
