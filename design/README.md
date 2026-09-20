# AI-103 replacement design package

This is the executed design, not only a prompt and not a claim that the complete
course has shipped. The working prototype is intentionally separate from the
current app and its learner state.

## Start here

| Artifact | Purpose |
| --- | --- |
| [Reusable execution prompt](DESIGN_PROMPT.md) | A cold-executor-complete brief for designing and proving the replacement |
| [Complete product/system design](REPLACEMENT_DESIGN.md) | Six builds, deterministic teaching, AuDHD interaction, content/state contracts and all 64 official objective records |
| [Learning Studio carry-forward](LEARNING_STUDIO_LEARNINGS.md) | Recovered user corrections, accepted/rejected directions, source/implementation lessons and earlier verification limits |
| [Product constitution](../PRODUCT_CONSTITUTION.md) | Invariants and a rejectable definition of a complete replacement |
| [Protected quality gates](QUALITY_STANDARD.md) | Original acceptance criteria for the prompt, design and proving slice |
| [Interactive prototype](prototype/index.html) | A complete sample learning loop for a grounded support-assistant milestone |

Open `prototype\index.html` directly in a browser. It bundles its scripts, styles
and licensed Geist font; no package installation, AI, account or network is
required for the local learning loop.

For an HTTP preview, run from the repository root:

```powershell
python -m http.server 5187 --bind 127.0.0.1 --directory .\design
```

Then open `http://127.0.0.1:5187/prototype/`.

## What is real in the prototype

The learner can begin a continuing build, read two coherent explanations,
reconstruct the RAG sequence, prepare portal-first fieldwork or inspect a labelled
synthetic rehearsal, save an observation or blocker, answer a decision-and-reason
check, receive response-specific repair, change the requirement, and stop/resume.

The evidence record distinguishes support, independence, rehearsal, learner-
reported fieldwork and later retrieval. A review preview cannot write earned
evidence. Quiet view, larger reading text and dark appearance are functional.

The prototype stores only its own state under
`ai103-replacement-prototype-v1`. Existing tutor progress is untouched.
Corrupt saved bytes are preserved; unavailable storage produces a visible warning
and an export path. Do not put credentials or personal data in notes.

## What is designed, but not yet shipped

- The full six-build course and complete corpus/objective teaching coverage.
- Deliberate audit/integration of the Learning Studio's 65-unit authoring work.
- Complete, current, self-contained and live-validated Azure deployment guides.
- Broader code/configuration labs and sufficiently diverse assessment banks.
- Production learner-state migration and full offline course packaging.
- Demonstrated comparative learning gains or validated exam readiness.

The portal preparation screens do not create, connect to or verify Azure
resources. A synthetic rehearsal is not evidence of real service operation.
The prototype deliberately never labels a topic mastered.

## Methods actually applied

| Method | Contribution |
| --- | --- |
| Product Director OS | Product constitution, rejected archetypes, project-led loop, whole-system design, bounded proving slice and independent product review |
| Prompt OS | Reusable agent prompt, authority/action boundaries, cold-executor inputs, explicit assumptions, strongest-failure cases and protected acceptance gates |
| Impeccable | Existing/studio design-context recovery, visual direction, craft review and desktop/mobile inspection |
| Accessibility audit skill | Automated WCAG-tagged scans, keyboard and focus checks, contrast follow-up, reduced motion and reflow checks |

The prior studio's browser evidence was read as prior evidence, not passed off as
new validation. The new prototype was exercised independently.

No Claude Design connector was exposed by this session's available integrations,
and no project content was sent to that service. The local editable design and
working browser preview are the delivered design surfaces.

## Observed verification: 2026-09-20

- **23 native Node tests passed** for teaching gates, reconstruction, decision/
  rationale checking, uncertainty, bounded repair, duplicate submission, pause,
  review eligibility, simulation isolation and malformed state.
- **13 browser checks passed** in isolated Microsoft Edge contexts. They covered
  the full flow with external requests blocked, exact resume, saved drafts/notes,
  a real wrong-reason repair route, "I don't know", export, corrupt/blocked storage,
  legacy-state preservation, review preview isolation and direct local-file use.
- **14 rendered states** passed axe-core's selected WCAG 2/2.1/2.2 A/AA rules with
  zero reported violations, no animations and no page-level overflow. Its two
  empty-textarea placeholder contrast uncertainties were checked from computed
  colours: **6.04:1**, opacity 1, against a required 4.5:1.
- The mobile checks include 320px and 360px layouts, plus larger text, quiet view
  and dark appearance. The phase rail was compacted on small screens without
  removing its accessible labels.
- A separate read-only reviewer returned **PASS for P1-P4 and D1-D8** at the
  authorized design/prototype scope, with no material blockers. It explicitly
  did not certify full course delivery or learner-outcome superiority.
- The design contains **64 unique official-objective IDs** across the five
  dated domains. This is an objective specification check, not content readiness.

No human screen-reader session, live Azure exercise, cross-browser certification,
or comparative learner-outcome study was performed. Automated scans are not a
WCAG compliance certificate.

### Run the checks

No dependency installation is needed for the engine tests:

```powershell
node --test .\design\verification\learning-engine.test.mjs
```

The browser scripts use `playwright-core`; the accessibility script also uses
`axe-core`. Install those in an isolated verification environment if unavailable,
not as production dependencies. If they are outside normal module resolution,
set `PLAYWRIGHT_MODULE` and `AXE_MODULE` to their installed package directories.
Set `BROWSER_EXECUTABLE` to a locally installed Chromium-family browser executable.
Keep the local server running, then execute:

```powershell
node .\design\verification\browser-checks.cjs
node .\design\verification\accessibility-checks.cjs
```

`DESIGN_URL` can override the default local origin; `DESIGN_RESULTS` can override
the output directory. Reports, synthetic test exports, accessibility-tree output
and screenshots otherwise go in ignored `verification\results`.

## Bounded corrections and caveats

- Corrected prototype startup invocation and isolated an about-blank test-fixture
  storage error before running the complete browser path.
- Tightened repeated-review behaviour so an existing review's unfinished response
  resumes rather than being reset. A simulated review cannot be reopened as real.
- Kept serialization errors distinct from browser storage failures.
- Kept Geist and the mineral/graphite/green palette intentionally: they are the
  recovered Learning Studio direction, not an unexamined template default.
  The design hook's remaining generic-font warning is contextually intentional;
  no suppression or blanket ignore was added.
- The original app dependency restore encountered unavailable package-feed content.
  The standalone artifact avoids that dependency path; this is not a claim that
  the existing React app's build or dependencies were repaired.

Production app source, corpus files, legacy state and the sibling studio worktree
were not modified. No deployment, merge or cloud-resource change was performed.
