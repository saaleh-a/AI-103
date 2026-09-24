---
name: AI-103 Learning Studio
description: A quiet, project-led learning workspace for explanations, Azure fieldwork, and recorded evidence.
colors:
  primary: "#326b59"
  primary-foreground: "#ffffff"
  success: "#326b59"
  accent: "#e6efe9"
  accent-foreground: "#295340"
  ring: "#477d69"
  destructive: "#a63631"
  background: "#f5f7f6"
  foreground: "#202c27"
  card: "#ffffff"
  muted: "#edf1ee"
  muted-foreground: "#58665e"
  border: "#dce3de"
  sidebar: "#202d27"
  sidebar-foreground: "#f2f7f3"
  sidebar-muted: "#b7c5ba"
  sidebar-line: "#3b4b40"
  chart-2: "#859c8c"
  chart-3: "#b5c6ba"
  chart-4: "#d1dcd4"
  chart-5: "#e6ece8"
  primary-dark: "#a6c9b1"
  primary-foreground-dark: "#192b20"
  success-dark: "#a6c9b1"
  accent-dark: "#304438"
  accent-foreground-dark: "#cee4d3"
  ring-dark: "#b0d1b9"
  destructive-dark: "#f0a49b"
  background-dark: "#19221e"
  foreground-dark: "#e7eee8"
  card-dark: "#202c25"
  muted-dark: "#29372d"
  muted-foreground-dark: "#b0beb2"
  border-dark: "#394a3d"
  sidebar-dark: "#141e18"
  sidebar-foreground-dark: "#edf4ee"
  sidebar-muted-dark: "#b0bfb3"
  sidebar-line-dark: "#34473a"
  chart-2-dark: "#768e7c"
  chart-3-dark: "#526d5a"
  chart-4-dark: "#3d5344"
  chart-5-dark: "#2d3f33"
  mark-border: "#829b86"
  mark-ink: "#d8e9d8"
  rail-hover: "#ffffff0a"
  rail-active: "#ffffff10"
  rail-selection: "#ffffff07"
  rail-progress: "#b6d4be"
  rail-scrim: "#17271db3"
typography:
  display: { fontFamily: "'Geist Variable', sans-serif", fontSize: "39px", fontWeight: 550, lineHeight: 1.18, letterSpacing: "-0.035em" }
  display-narrow: { fontFamily: "'Geist Variable', sans-serif", fontSize: "33px", fontWeight: 550, lineHeight: 1.18, letterSpacing: "-0.035em" }
  display-mobile: { fontFamily: "'Geist Variable', sans-serif", fontSize: "30px", fontWeight: 550, lineHeight: 1.18, letterSpacing: "-0.035em" }
  headline: { fontFamily: "'Geist Variable', sans-serif", fontSize: "32px", fontWeight: 550, lineHeight: 1.18, letterSpacing: "-0.035em" }
  headline-mobile: { fontFamily: "'Geist Variable', sans-serif", fontSize: "30px", fontWeight: 550, lineHeight: 1.22, letterSpacing: "-0.035em" }
  title: { fontFamily: "'Geist Variable', sans-serif", fontSize: "25px", fontWeight: 550, lineHeight: 1.3, letterSpacing: "-0.03em" }
  title-mobile: { fontFamily: "'Geist Variable', sans-serif", fontSize: "23px", fontWeight: 550, lineHeight: 1.3, letterSpacing: "-0.03em" }
  task-title: { fontFamily: "'Geist Variable', sans-serif", fontSize: "21px", fontWeight: 550, lineHeight: 1.4, letterSpacing: "-0.025em" }
  section: { fontFamily: "'Geist Variable', sans-serif", fontSize: "18px", fontWeight: 550, letterSpacing: "-0.025em" }
  body: { fontFamily: "'Geist Variable', sans-serif", fontSize: "15px", fontWeight: 400, lineHeight: 1.95 }
  body-mobile: { fontFamily: "'Geist Variable', sans-serif", fontSize: "15px", fontWeight: 400, lineHeight: 1.9 }
  body-support: { fontFamily: "'Geist Variable', sans-serif", fontSize: "14px", fontWeight: 400, lineHeight: 1.8 }
  body-small: { fontFamily: "'Geist Variable', sans-serif", fontSize: "13px", fontWeight: 400, lineHeight: 1.85 }
  label: { fontFamily: "'Geist Variable', sans-serif", fontSize: "12px", fontWeight: 550 }
  caption: { fontFamily: "'Geist Variable', sans-serif", fontSize: "11px", fontWeight: 400, lineHeight: 1.7 }
  control: { fontFamily: "'Geist Variable', sans-serif", fontSize: "13px", fontWeight: 550, lineHeight: 1.4 }
  quiet-control: { fontFamily: "'Geist Variable', sans-serif", fontSize: "13px", fontWeight: 450, lineHeight: 1.4 }
  navigation: { fontFamily: "'Geist Variable', sans-serif", fontSize: "13px", fontWeight: 450 }
  session-choice: { fontFamily: "'Geist Variable', sans-serif", fontSize: "12px", fontWeight: 400 }
rounded:
  base: "0.625rem"
  skip-link: "4px"
  compact: "5px"
  control: "6px"
  sheet: "8px"
  map: "9px"
  circle: "50%"
spacing:
  compact: "8px"
  control-gap: "9px"
  inline: "12px"
  control-inset: "16px"
  notice: "18px"
  mobile-gutter: "20px"
  section-inset: "24px"
  narrow-gutter: "28px"
  section-gap: "32px"
  desktop-gutter: "40px"
  column-gap: "48px"
  wide-gutter: "60px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "10px 16px"
  button-secondary:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "10px 16px"
  button-quiet:
    textColor: "{colors.muted-foreground}"
    typography: "{typography.quiet-control}"
    rounded: "{rounded.control}"
    padding: "10px"
  button-icon:
    textColor: "{colors.foreground}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "8px"
    width: "44px"
  text-link:
    textColor: "{colors.primary}"
  observation-field:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    typography: "{typography.body-support}"
    rounded: "{rounded.control}"
    padding: "13px 14px"
    width: "100%"
  rail-link:
    textColor: "{colors.sidebar-muted}"
    typography: "{typography.navigation}"
    rounded: "{rounded.control}"
    padding: "10px 12px"
  session-size-choice:
    textColor: "{colors.muted-foreground}"
    typography: "{typography.session-choice}"
    rounded: "{rounded.compact}"
    padding: "8px 10px"
  build-map:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.map}"
  study-stage-rail:
    backgroundColor: "{colors.background}"
    padding: "14px 0"
---

# Design System: AI-103 Learning Studio

## Overview

**Creative North Star: "Engineering field station"**

This is an operating and reading workspace, not a marketing page or a reskinned
course catalogue. Graphite navigation anchors a cool mineral canvas; restrained
green identifies actions and recorded state. Real task titles, explanations,
resource names, and observations provide the visual material. Geist, fine
rules, and generous reading space make the interface quiet without making the
subject matter simplistic.

The continuing build is the context for a useful next action. Small, resumable
teaching steps lead into Azure fieldwork, recall, and focused repair. The
interface separates explanation from editable evidence: prose sits on the
canvas, while fields and genuinely independent tools have boundaries. Stopping,
uncertainty, and returning to saved work are ordinary states, not failures.

**Key Characteristics:**
- A dark navigation rail and mineral reading canvas, with one restrained action accent.
- Unboxed explanations, measured rules, and bounded fields rather than nested reading cards.
- One evidence-aware next action, persistent stage orientation, and visible stopping points.
- Labelled local observations and numeric progress alternatives, never simulated deployment proof.
- Self-hosted Geist, opt-in movement, and a task-first mobile layout.

### Authority, scope, and provenance

This is a source-led refresh of the incumbent system. It preserves Geist,
Operate/Read priorities, meaningful container boundaries, one clear next
action, and light/dark support. It supersedes the old indigo/domain palette,
the asserted strict four-pixel grid, and the old description of motion defaults.
The built styles win over the development direction.

Normative values come from `app/src/index.css` and `app/src/studio.css`;
application patterns were checked in Home, Build, Study, Repair, Progress,
AppShell, BuildMap, PortalGuide, BuildContext, StudyStepper, and UI preferences.
The optional tutor and inherited UI primitives were sampled to establish the
exceptions below. The supplied review captures are development evidence, not
assets or Azure results; the dark Today capture visibly includes an explicitly
labelled synthetic browser-test observation.

The build was code-led: no approved visual comp, generated imagery, or newly
authored photographic/raster assets. The degraded direction seed was
`b46a05cf`, without external quality boards. The small original book mark at
`app/public/studio-mark.svg` is the current favicon; the rail uses a Phosphor
book icon, not that SVG. `app/index.html` still links the inherited
`app/public/logo-192.png` touch icon. Other inherited public PNGs,
`logo.png` and `favicon-32.png`, remain in the tree. Their upstream authorship
and licensing provenance are not established by this pass; do not describe
them as newly authored or generated. No binaries were modified.

The adapted React Bits stage rail retains its notice at
`app/public/licenses/react-bits.txt` (MIT plus Commons Clause). Progress uses
the repository's Bklit chart components, not a newly invented chart library.
Keep the development direction contract out of browser-delivered content.

The frontmatter owns primitives. `.impeccable/design.json` is the version-2
extension record for stateful CSS samples, motion, breakpoints, and narrative.
Its eight-step relative-OKLCH ramps are **panel-only derived swatch previews**,
not additional shipped colors or permission to broaden the palette.

The standalone, AI-free replacement prototype under `design/` (see
`design/REPLACEMENT_DESIGN.md`) carries this direction forward. It is a design
artifact with its own stylesheet, not shipped styling; this file remains the
authority for `app/`.

## Colors

A low-chroma, green-tinted neutral system: cool paper for reading, deep graphite
for orientation, and desaturated green for purposeful emphasis. There is no
separate secondary or tertiary brand accent.

### Primary

- **Field green** (`primary`, with `primary-foreground`) fills the next-action
  button and marks links, current steps, correct choices, and explored bars.
- **Quiet green wash** (`accent`, with `accent-foreground`) backs selected
  quiet controls, notes, and completed/selected states without making another
  high-priority action.
- **Focus green** (`ring`) is the visible keyboard outline, not a shadow.
- **Success** is a separate semantic name with the **same value as primary**.
  The build does not preserve the former distinct success hue.

### Neutral

- **Mineral canvas** (`background`) is the page and open reading surface.
  **Graphite ink** (`foreground`) carries headings and main text.
- **Paper surface** (`card`) is reserved for controls and bounded tools.
  **Cool recess** (`muted`) supports hover and secondary surfaces;
  `muted-foreground` remains readable supporting text, not disabled opacity.
- **Measured rule** (`border`) separates passages, list rows, fields, and
  tools. It is not a substitute for text contrast.
- **Graphite rail** (`sidebar`) has its own bright, muted, and divider roles.
  The mark, rail progress, and three translucent selection layers have the
  explicit literal tokens above; they are not extra curriculum colors.
- **Navigation scrim** (`rail-scrim`) preserves the stylesheet's literal
  eight-digit hex, including its alpha. It is intentional, theme-independent
  dimming behind the mobile rail, not an erroneous opaque green.

### States, charts, and theme mapping

`destructive` colors error text and the border of an incorrect selected answer.
Warnings about cost, permissions, and unsaved work use neutral surfaces, icons,
and explicit copy; there is no invented amber warning palette. Correct and
incorrect answers also have icons and explanation text.

The `-dark` records are the exact replacements applied by the `.dark` rule to
the corresponding unsuffixed CSS custom property. They are documentation keys,
not additional `--primary-dark`-style CSS variables. The theme preference is
system/light/dark, initially system. Literal rail overlays, mark colors,
rail-progress ink, and the scrim do not change with the theme.

All six `--cluster-*` colors now alias `--primary`, and all six soft variants
alias `--accent`. The compatibility names survive; six different domain hues
do not. Chart aliases resolve as follows:

| Source role | Resolution |
| --- | --- |
| Chart 1 / primary line / crosshair | Primary |
| Chart 2–5 | The corresponding light or dark chart tokens above |
| Secondary chart line | Chart 2 |
| Chart background / foreground | Card / foreground |
| Chart muted text / labels | Muted foreground |
| Chart grid / brush border | Border |
| Tooltip background / foreground / muted | Sidebar / sidebar foreground / sidebar muted |
| Marker background / border / foreground | Muted / border / foreground |
| Scale 01 → 05 | Chart 5 → chart 1 |
| Scale pattern | Background |

The visible Progress bars use primary for explored lessons and chart 4 for
remaining lessons. The other declared chart roles support the inherited chart
library; they do not authorize a six-color legend.

**The One Accent, Explicit Meaning Rule.** Green can indicate action or recorded
progress; labels, icons, and numbers must explain which. Color never proves
mastery or an Azure deployment.

## Typography

**Display Font:** self-hosted Geist Variable, with `sans-serif` fallback.
**Body Font:** the same Geist stack, imported through `@fontsource-variable/geist`.
**Label/Mono Font:** labels retain Geist. Code and preformatted starter material
use the inherited monospace stack; there is no separately authored mono family.

The face is compact and matter-of-fact, with restrained negative tracking on
headings and generous leading in explanations. The ramp is purpose-built, not
a single mathematical ratio or the old generic Tailwind heading scale.

### Hierarchy

| Frontmatter role | Actual use |
| --- | --- |
| `display` → `display-narrow` → `display-mobile` | Today build title; desktop, ≤959px, and ≤767px respectively. This is a workspace title, not a promotional hero. |
| `headline` → `headline-mobile` | Standard page and lab titles; mobile changes at ≤767px. The shared CSS measure is 24ch. |
| `title` → `title-mobile` | A teaching-step heading, balanced within 32ch. |
| `task-title` / `section` | The recommended task / shared section headings. Contextual chart and notebook headings also use 17px in the source. |
| `body` → `body-mobile` | Teaching prose, limited to 65ch. It stays the same size on mobile; only leading changes. |
| `body-support` / `body-small` | Descriptions and observation fields / quieter supporting explanations. Portal instruction prose specifically uses 14px with 1.95 leading. |
| `label` / `caption` | Field labels / helper text and attribution. Compact metadata is not a body-text template. |
| `control` / `quiet-control` / `navigation` / `session-choice` | Buttons, low-priority actions, rail links, and session-size choices. |

Progress counts use tabular numerals. Sentence case is the default. The brand
wordmark is a scoped heavier treatment (19px, weight 650); it is not a second
display face. Mobile stage labels and a few metadata footnotes reach 10px in
the implementation; do not extend that density to reading or form labels.

**The One Reading Voice Rule.** Keep headings and prose in Geist; hierarchy
comes from measure, size, weight, and leading, not decorative display type or
invented pre-heading eyebrows.

## Layout

The desktop shell uses a fixed left rail (232px), with a matching workspace
offset. The header is restrained (minimum 74px); the centered workspace is
capped at 1360px, including its padding. Default canvas padding is
42px 40px 64px. Pages use a vertical flow with a 32px gap.

Today and Build use a broad task column beside a bounded connection map:
`minmax(0, 1.2fr) minmax(270px, 0.8fr)`, separated by 48px. This is a
surface-specific composition, not a mandatory grid for every screen. Lesson
reading instead uses a flexible text column and a 210px context margin with a
30px gap. Explanations, examples, portal expectations, repair comparisons, and
notebook entries are separated by rules and space, not nested cards.

The rhythm combines the reusable steps in the frontmatter with optically
tuned values. Source values such as 23px map insets, 25px section spacing,
27px mobile page gaps, and 45px notebook/reference separation are real;
there is no strict four-pixel-only rule.

### Responsive behavior

| Source condition | Landed behavior |
| --- | --- |
| ≥1500px | Canvas side padding becomes 60px and top padding 50px. An older Home selector's 44px title does **not** apply to the current Today title. |
| ≤1199px | Rail/offset become 208px; shell side gutters become 28px. The lesson context moves below reading into two columns; its chapter path is hidden. |
| ≤959px | Task/map layouts become one column and their adjacent map is hidden, rather than squeezed. Progress overview stacks. Today uses its narrow display role. |
| ≤767px | The fixed desktop rail becomes an explicitly opened 250px overlay. Workspace offset is zero; header minimum is 65px; canvas padding is 24px 20px 44px. The notebook/reference pair, starter controls, comparison columns, and lesson context stack. |

The body supports a minimum width of 320px. On mobile the reading surface keeps
the full canvas measure: teaching and portal blocks have no additional outer
card inset. Fields remain full-width; long notes wrap anywhere, while code
blocks handle horizontal overflow. The stage rail switches to stacked
number/label controls instead of removing its orientation.

Focus mode hides the secondary navigation, rail course note, Today map and
notebook/reference pair, and lesson context. It constrains task/lesson layouts
to a single column up to 760px. It is not a promise that all secondary content
on every inherited route disappears.

**The Reading Has No Outer Box Rule.** Lesson and portal prose belong to the
canvas. Use rules for sequence and borders for actual fields or independent
tools, not a card around each explanation.

## Elevation & Depth

The core studio is flat: no cast shadows in its stylesheet. Depth comes from
the graphite rail, paper tools, green selected states, and one-pixel rules.
The mobile scrim obscures the workspace behind navigation; it is a real
interaction layer, not decorative blur. The lesson stage rail sticks at the
top (z-index 12); checkpoint orientation sits beneath it (z-index 11), offset
by the source's stage-height variable (73px desktop, 74px mobile). The rail
and scrim occupy z-index 30 and 25; the focus-revealed skip link sits at 60.

This is not a claim that the repository has no shadows: inherited UI and chart
tooltip modules retain ring/shadow utilities. They are not the default
elevation language for new studio reading surfaces.

**The Tonal Depth Rule.** Separate the studio's working layers with tone,
rules, and position; do not add floating-card or hard-offset shadows to its
reading flow.

## Shapes

The form language is gently squared, not pill-based. Controls and fields use
the `control` radius, compact selectors and build nodes use `compact`, the
focus-revealed skip link uses `skip-link`, source/progress sheets use `sheet`,
and the connection-map frame uses `map`. The inherited base radius remains recorded, but is not the radius
of every custom studio component.

Circles have a specific job: stage numbers, completion symbols, and progress
markers. Stage discs are 27px on desktop and 25px on mobile; the surrounding
control still has a minimum 44px target. The rail brand frame has a deliberate
book-like silhouette (38px by 42px, corners 9px 9px 3px 3px). Its favicon is a
separate 32px SVG with a 7px corner, not a general container rule.

## Components

### Buttons and links

Quiet, explicit controls with a single filled next action.

- Primary uses field green and its paired foreground. Secondary uses paper,
  a border rule, and normal ink. Both use the frontmatter padding and a
  minimum 44px height, with 9px between icon and label.
- Primary hover uses `brightness(0.93)`, not another invented green token.
  Secondary, quiet, and icon controls hover on muted. Quiet selected state
  uses accent and accent foreground. Icon buttons are 44px wide.
- Disabled primary/secondary/quiet controls use opacity 0.45 and no filter;
  disabled controls have a not-allowed cursor. These are disabled-state
  values, not reduced contrast for ordinary content.
- Text links use primary, a minimum 44px height, and underline on hover.
  Some inline source/attribution links intentionally do not use that block
  target; do not claim a universal 44px hit area across the codebase.
- Focus-visible is a 2px solid ring with 3px offset. Text selection uses the
  accent pair; input carets use primary.

### Fields, notices, and answer states

Boundaries mean the learner can act or record something.

- Observation, recall, and repair textareas use the canvas background,
  a border rule, minimum 120px height, vertical resizing, and the
  `observation-field` tokens. Placeholder/helper copy uses muted foreground.
- Saved resource-name inputs use paper, minimum 46px height (44px within
  workspace fields), 11px 13px padding, and 13px text. Labels remain outside
  the field. Store names, not credentials; the shared setup is a local
  workspace breadcrumb, not a per-project live inventory.
- Notes use the accent pair; warnings use a bordered paper notice; errors
  use destructive text/border or an adjacent alert. A final portal checkpoint
  requires a nonblank observation, but its text is not automatically graded.
- Answer choices are bordered, left-aligned controls with minimum 50px
  height. Hover and correct state use accent with a primary border; an
  incorrect selected answer has a destructive border. Feedback supplies
  the actual explanation. Repair contrasts the recorded wrong alternative
  with the decision boundary, not a random distractor.
- The 5/15/25-minute selector uses real buttons with `aria-pressed`, minimum
  48px width and 44px height; its selected state is paper with a visible border.

### Navigation and containers

The rail uses regular Phosphor SVGs (default 20px) beside sentence-case labels.
Hover, active-route fill, and the optional shared selection overlay use their
separate translucent tokens. Mobile navigation exposes an expanded-state
toggle, a labelled scrim close control, and Escape dismissal; it closes on
route changes and when returning to a desktop viewport. Do not describe it
as a separately implemented focus-trapping dialog.

Paper containers remain valid for the selectable build map, the Progress
chart/table, code controls, notices, and the standalone source reader.
The source reader retains its bordered sheet (76ch measure, 32px inset,
22px 18px on mobile). Those scoped tools do not justify restoring an outer
lesson card or a card inside every portal explanation.

Core studio routes use Phosphor; the lazy optional tutor still uses Lucide,
shadcn/Base UI cards, fields, and buttons. Inherited chart/UI modules also
remain present. This is explicitly **not** a one-icon-library or
no-inherited-components claim.

### Signature: stage rail and portal checkpoint

The adapted React Bits rail names the work: **Understand / Try in Azure /
Recall**. Current has a filled primary disc; completed has an accent disc
and check; locked stages are disabled (opacity 0.6). An unperformed portal
stage becomes **Azure later** with a clock, not a completed check. The rail
remains sticky during open reading.

The portal screen starts with the actual lab title, duration, and environment.
Repeated build context and setup details are collapsed disclosures. The
general charge/approved-subscription notice stays visible outside them.
Checkpoint count and the destination link stick beneath the stage rail.
Expected output is rule-separated from the editable observation. Cost,
permissions, stuck-state help, source instructions, cleanup, and leaving
Azure for later remain discoverable without pretending the site runs Azure.

### Continuing work and evidence

Six selectable practice builds connect all 65 concepts exactly once; the
265 source files map into those concepts. The visual hierarchy treats this as coverage, not
mastery. A build's map selects a milestone and explains the evidence to look
for; its check means lessons explored, never verified deployment.

Home has no pre-heading eyebrow. Its observation preview is scoped to the
recommended/current build and attributed to a lesson and checkpoint; it is
not claimed to be chronologically latest. The notebook link goes directly to
`#field-notebook`, which is scrolled to and focused without animation. Notebook
entries keep attribution. Resource breadcrumbs persist across the workspace;
the continuity disclosure can show an earlier observation from another build.
Downloadable starter material is explicitly synthetic, and the changed
requirement follows the baseline work rather than becoming another quiz tile.

Progress uses stacked Bklit bars with the source's numeric line-cap setting
of 3 and a readable table immediately beneath. The plot is
`aria-hidden`; the table has a caption and row/column headers. Explored
lessons, self-recorded Azure work, mastered states, and mapped sources remain
different counts. Review screenshots with labelled synthetic notes are test
fixtures, not learner evidence to seed into the product.

### Motion and focus

Movement is **off by default**, not initialized to the operating system's
non-reduced setting. Preferences are off/subtle/full, and operating-system
reduction always forces the effective value to off. CSS suppression also
disables transitions and smooth scrolling; it is not limited to React.

- Opted-in control color/background/border transitions are 160ms.
- Study stage changes take 180ms: subtle fades from opacity 0.8, full also
  translates 6px horizontally. Off uses no entrance animation.
- Stage-disc opacity takes 180ms and connectors 200ms. BuildMap declares
  a 180ms opacity transition without an entrance fade (`initial={false}`).
- Shared active navigation uses Motion layout selection with a spring
  (stiffness 100, damping 20), only when movement is enabled.
- Progress overrides the library defaults: 350ms bar animation, 200ms
  entrance, zero when off. Do not promote the inherited 1100ms chart default
  into the studio's motion rule.
- Navigation focuses the main region; teaching/checkpoint changes focus
  their headings without scrolling. These programmatic targets suppress
  their own outline; interactive keyboard targets retain the visible ring.

**The Permission Before Movement Rule.** Default to stillness. Animate only
the changed state after opt-in, and let operating-system reduction win.

### Scoped exceptions not canonized

The inherited optional-tutor icon button is 32px and retains a 1px active
translation; inherited cards, Lucide icons, and some chart/UI shadows also
remain. These are scoped legacy behavior, not templates for new studio
controls or reading layouts. Unused status-tag and older Home selectors in
the stylesheet are not promoted into current component recipes.
This documentation pass does not repair or remove them.
The public PNGs' upstream provenance remains unresolved rather than being
invented. No new eyebrow, glyph-icon, system-display-face, or hard-offset-shadow
rule is extracted from the build.

## Do's and Don'ts

### Do:
- **Do** keep one filled next-action control in the current task and make stopping or deferring visible.
- **Do** keep lesson and portal explanations on the open canvas, with rules separating examples and expected observations.
- **Do** use the recorded light/dark semantic pairs and preserve the literal mobile scrim alpha.
- **Do** pair progress and answer colors with explicit labels, icons, explanations, or the readable table.
- **Do** retain task title, duration, cost context, stage orientation, and real input boundaries in mobile fieldwork.
- **Do** attribute saved observations and label synthetic practice material and test evidence honestly.
- **Do** keep motion off initially, respect operating-system reduction, and preserve keyboard focus and stopping points.

### Don't:
- **Don't** restore the discarded indigo palette, six domain hues, or curriculum-gradient chrome.
- **Don't** turn the workspace into a promotional hero or a read/checklist/quiz catalogue as its primary mechanism.
- **Don't** add invented pre-heading eyebrows, decorative glyph icons, or system display faces.
- **Don't** impose a blanket ban on cards, rules, circles, or green selected states; each has a native scoped use here.
- **Don't** nest reading cards or hard-offset shadows around the lesson and portal flow.
- **Don't** conflate mapped sources, explored lessons, local configuration checks, recorded fieldwork, and mastery.
- **Don't** inherit the optional tutor's smaller targets or active translation as the studio control standard.
- **Don't** ship development direction text or treat sidecar preview ramps as new application tokens.
