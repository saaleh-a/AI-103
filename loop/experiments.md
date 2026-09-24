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
- Change: five generator agents (`loop-c2-A` … `E`) audited the objective claims of all 121 concept,
  entity and synthesis pages against the objective wording, frontmatter only: 24 pages changed (e.g.
  text-translation −P02, azure-language-mcp-server −G08, knowledge-mining −I04 −I06,
  microsoft-365-agents-toolkit −G12, optimization-strategies-compared −G15, knowledge-store → none,
  ai-103-exam's 64 gap IDs → none; mcp-tool-integration +P16 for tool-access controls).
- Mechanical score: `[0, 0, 0, 45, 6]` → `[0, 0, 0, 45, 6]` (SAME). Objective map: 53 taught / 11 named
  only (unchanged — no objective lost its last teaching page).
- Judgement (`loop_sample.py --cycle 2`): 20 sampled, 15 failing; the tool's verdict is REGRESSED
  (15/20 vs 6/20). Page-level reading of the reviews:
  - 5 fails are **source pages** (src-85, src-59, src-64, src-181, src-201) whose objective tags cycle 2
    never touched — pre-existing, found because both reviewers now applied criterion 8 everywhere;
    four are non-teaching units (exercise launchers, a summary) claiming objectives.
  - 8 fails are pages cycle 2 did change, flagged for claims cycle 2 *kept* under the generator's
    reading of criterion 8 ("at least one named part is taught") while the reviewers read it as "every
    named part" (e.g. knowledge-mining I01 lacks audio/video; model-catalog P01 lacks Foundry Tools).
    The cycle-1 reviewer had accepted the same claims (I01, G05, T04).
  - 2 fails are unlabelled synthesised decision rules (agent-framework-workflows; the three-homes
    taxonomy on microsoft-365-agent-integration) — criterion 3, unrelated to this cycle.
  - Genuine regression found in the diff, not by the sample: cycle 2 added taught objectives to
    `objective_gaps` on 5 pages (model-playgrounds G01/V01/V02/V06, model-catalog P07, foundry-sdk G02,
    endpoints-and-sdk-choice G02, guardrails G04) — misusing the field as "not taught on this page".
    **Reverted** before recording; the same misuse also predates cycle 2 on 6 pages.
- Decision: **kept** (objective removals and the P16 addition), after reverting the misused gap
  additions. Overriding the tool's REGRESSED verdict is a human-level decision: the two judgement
  numbers measure different pages with different lenses, so they do not compare cycles.
- Lessons: (1) the judgement verifier is non-stationary — fresh samples that prefer changed pages,
  reviewer variance, and an ambiguous criterion; a ratchet needs a **fixed panel** (Karpathy's fixed
  validation set). (2) Criterion 8 must say which reading applies. (3) Frontmatter rules that can be
  checked mechanically should be — non-teaching units and hubs claim no objectives; `objective_gaps`
  must come from one gap register (corpus-gaps). → verifier v3 before cycle 3.

## Verifier v3 (2026-09-24, between cycles 2 and 3)
- Fixed panel of 20 pages (`loop/panel.txt`); rubric criterion 8 clarified (at-least-one-named-part);
  lint rules for non-teaching units, hubs and the gap register; mechanical comparisons versioned by lint
  rules. v3 mechanical baseline `[113, 0, 0, 45, 6]`: 107 non-teaching-unit errors, 6 unregistered gaps.

## Cycle 3 — frontmatter compliance with the v3 rules (2026-09-24)
- Hypothesis: the 113 v3 errors are all frontmatter that breaks the clarified objective rules;
  clearing objectives from non-teaching units and resolving each unregistered gap (drop it, or record a
  genuine corpus gap in the register with citations) brings errors to 0 and removes the panel's
  criterion-8 failures on those pages.
- Panel baseline (v3 rubric, measured on a4c2e9e before any cycle-3 edit; reviewers read pages with
  `git show`): 14/20 pass, 6 fail.
- Change: orchestrator script cleared `objectives`/`objective_gaps` on the 107 non-teaching source pages
  (a deterministic rule); generator agent `loop-c3-register` resolved the 6 unregistered gap lists —
  registered P14 (explanation tooling appears only in SRC-191 L137) and G01 (code models only in
  SRC-191 L142) in [[corpus-gaps]] with cited body bullets, and dropped 15 misused IDs whose objectives
  the corpus teaches elsewhere (e.g. P16: human-in-the-loop oversight is taught, SRC-105 L222–225).
- Mechanical: `[113, 0, 0, 45, 6]` → `[0, 0, 0, 45, 6]` (IMPROVED, same lint rules).
- Judgement (fixed panel, incremental): 3 changed panel pages re-judged — src-139, src-70, src-202 all
  PASS (src-70's G08 failure is gone); 17 carried forward → **6/20 → 5/20 failing**.
- Objective map: 42 taught / 11 in part / 11 named only → 40 / 13 / 11.
- Decision: kept. Verifier change (human): incremental panel runs (`loop_sample.py --panel
  --changed-since`), since unchanged pages cannot change verdict; re-locked.
- Lesson: deterministic rules belong in the lint, not in reviewer judgement — one mechanical rule
  removed 107 latent criterion-8 violations that sampling would have found one at a time.

### Panel ledger after cycle 3 (FAIL rows; all other panel pages PASS)
| Panel page | Verdict | Criterion | Problem |
|---|---|---|---|
| src-236-understand-azure-speech-mcp-server | FAIL | 1 | merges SAS-URL and key guidance (L250 vs L257–262) |
| pii-detection-and-redaction | FAIL | 3 | content-safety comparison cells uncited/unlabelled |
| code-interpreter-tool | FAIL | 2 | SRC-91 L233 cited; claim is at L234–235 |
| foundry-toolkit-for-vs-code | FAIL | 8 | claims G06 (app connection config) not taught there |
| naming-and-currency | FAIL | 1, 6 | *Azure AI Agent Service* alias cited to SRC-230 lines lacking it |

## Cycle 4 — repair the panel's open failures (2026-09-24)
- Hypothesis: each of the five open panel failures has a precise, source-level cause named by the
  reviewer; fixing exactly those claims (split the SAS/key guidance, label or cite the content-safety
  cells, correct the locator, drop G06 from the toolkit page, and remove or re-cite the unsupported alias
  wherever it recurs) will take the panel from 5/20 to ≤ 2/20 failing without touching other content.
- Change (orchestrator as generator, each edit checked against the raw lines): src-236 splits the SAS-URL
  rules (SRC-236 L250) from the key rules (L257–262); pii-detection-and-redaction's content-safety column
  now cites SRC-156 L230 (four severity levels, five harm categories) and SRC-156 joins `source_ids`;
  code-interpreter-tool and glossary cite SRC-91 L234–235 (not L233); foundry-toolkit-for-vs-code drops
  G06; *Azure AI Agent Service* / *Azure AI Agent* re-cited to lines that contain them (SRC-108 L220,
  SRC-240 L216, SRC-119 L217, SRC-122 L217, SRC-179 L221, SRC-233 L229, SRC-48 L625) on
  naming-and-currency and agent-building-options-compared; foundry-agent-service drops the alias
  *Azure AI Foundry Agent Service*, which no raw file contains.
- Mechanical: `[0, 0, 0, 45, 6]` → `[0, 0, 0, 45, 6]` (SAME).
- Judgement (panel, incremental): 5 changed pages re-judged — pii, toolkit, naming PASS; src-236 FAIL
  (the kept phrase "creates a security burden" is an unlabelled characterisation); code-interpreter FAIL
  (an unlabelled comparative rule, and P02 claimed) → **5/20 → 2/20 failing** (meets the ≤ 2/20 bar).
- Decision: kept.
- Side finding: the SRC-91 locator error was not a one-off. The source page's line numbers were shifted
  by 2–3 and the shift was copied into concept pages (file-search-tool, web-search-tool, glossary).
  New generator aid `scripts/find_locator_drift.py` (heuristic, not part of the verifier): 347 candidate
  citations on 104 pages; 126 strong (cited lines share none of the claim's distinctive words, a window
  within ±8 lines shares ≥ 4). Offsets cluster at +1/+2 (157 candidates).
- Lesson: the lint's "range exists" check is necessary but weak; drift survives it. A candidate finder
  plus raw-line confirmation is the scalable repair; the reviewer remains the arbiter.

### Panel ledger after cycle 4 (FAIL rows; all other panel pages PASS)
| Panel page | Verdict | Criterion | Problem |
|---|---|---|---|
| src-236-understand-azure-speech-mcp-server | FAIL | 3 | "creates a security burden" unlabelled |
| code-interpreter-tool | FAIL | 3, 8 | unlabelled "use file_search instead" rule; P02 claimed |

## Cycle 5 — last two panel failures (2026-09-24)
- Hypothesis: labelling the two unlabelled judgements (src-236's characterisation, code-interpreter's
  comparative rule) and dropping P02 from code-interpreter will clear the panel (2/20 → 0/20).
