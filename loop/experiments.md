# Loop experiments — memory of the wiki improvement loop

Append-only. One entry per cycle (`program.md` §Each cycle): hypothesis, change, mechanical score
before → after (`scripts/loop_score.py`: [errors, locator problems, uncovered sources, warnings,
unlabelled claim lines]), judgement sample (`scripts/loop_sample.py` + a read-only reviewer against
`loop/rubric.md`), decision, lesson. Machine-readable scores are in `loop/scores.jsonl`.

## Cycle 0 — baseline (2026-09-24)
- State: the initial build — 265 source pages, 103 concept/entity pages, 18 synthesis pages; verifier
  locked (`loop/verifier.lock`, 7 files).
- Mechanical score: `[0, 0, 0, 45, 6]` — 0 errors, 0 locator problems (15,574 line ranges and 348
  anchors verified), 0 uncovered sources, 45 warnings (26 title/alias collisions, 19 orphan source
  pages), 6 unlabelled claim lines of 14,065.
- Judgement (`loop_sample.py --cycle 0`, two read-only reviewers): 20 sampled, 3 failing. All 3 are
  synthesis pages whose `objectives` claim objectives the page does not teach — learning-path and
  decision-boundaries list named-only objectives (P08 CI/CD, V03, V09, V12, G14, G15), key-tensions
  omits G14 from `objective_gaps`. Source, concept and entity pages: 17/17 pass (faithful claims,
  precise locators, honest labels).
- Side evidence: `objective-map` shows 64/64 objectives "taught" because the hubs (overview,
  master-synthesis, learning-path) each list all 64.
- Lesson: the mechanical verifier cannot see objective over-claiming; the judgement verifier can.
  The highest-value failure class is objective honesty, not the warnings.

## Cycle 1 — objective honesty (2026-09-24)
- Hypothesis: hub and comparison synthesis pages list objectives they only navigate to or name, so
  the objective map marks named-only objectives as taught; restricting every page's `objectives` to
  objectives its own non-study-guide evidence teaches (hubs list none) and moving named-only IDs to
  `objective_gaps` will make the map truthful and clear the cycle-0 judgement failures.
- Change: generator agent `loop-c1-objectives` edited frontmatter only — the five hubs claim no
  objectives; comparison pages keep objectives backed by non-study-guide evidence and move named-only
  ones to `objective_gaps` (P08 on agent-building-options-compared and microsoft-365-agents-toolkit,
  G14 on optimization-strategies-compared and key-tensions); corpus-gaps now lists 22 gap objectives,
  each described in its body.
- Mechanical score: `[0, 0, 0, 45, 6]` → `[0, 0, 0, 45, 6]` (SAME — frontmatter-only change).
- Objective map: 64 taught / 0 named only → 53 taught / 11 named only (P08, P11, G14, V03, V07,
  V09, V12, V14, V15, V16, T07).
- Judgement (`loop_sample.py --cycle 1`): 20 sampled, 6 failing. The cycle-0 failures are fixed
  (decision-boundaries re-sampled: PASS). 5 of the 6 new failures are concept/entity pages claiming a
  broad objective whose named parts they do not teach (text-translation P02, knowledge-mining I04/I06,
  microsoft-365-agents-toolkit G12, azure-language-mcp-server G08, optimization-strategies-compared
  G15) — found because reviewer B was asked to check objectives on *every* page, where cycle 0 checked
  only synthesis pages. The 6th: src-167 infers assessment answers the capture does not show.
- Decision: kept. The rise from 3 to 6 is a change of measuring lens, not a regression — the pages
  that failed were not made worse by this cycle. Human decision (logged in `wiki/log.md`): the lens
  becomes rubric criterion 8 (honest frontmatter) and `loop_score.py` now compares judgement rates
  only between samples taken under the same rubric hash; verifier re-locked. This sample is the
  rubric-v2 baseline (conservative: reviewer A did not check objectives).
- Lesson: an objective claim is a factual claim. Pages drift to "this page is relevant to objective X"
  when the field means "the corpus teaches X here"; the next cycle must audit every page's claims.

## Cycle 2 — objective claims on every page (2026-09-24)
- Hypothesis: concept, entity and source pages claim broad objectives whose named parts they do not
  teach (5 of 20 sampled pages); auditing every page's `objectives` against the objective wording and
  the page's own non-study-guide citations — dropping or moving unsupported IDs — will cut rubric-v2
  judgement failures below the 6/20 baseline without touching page bodies.
