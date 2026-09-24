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
- Change: src-236's characterisation labelled **Inference:**; code-interpreter-tool's "use X instead" rules
  labelled **Inference:** under a **Synthesis:** lead-in that names their evidence, and P02 dropped.
- Mechanical: `[0, 0, 0, 45, 6]` → `[0, 0, 0, 45, 6]` (SAME).
- Judgement (panel, incremental): both changed pages PASS → **2/20 → 0/20 failing**.
- Decision: kept.

## Cycle 6 — warnings (2026-09-24)
- Hypothesis: the 45 remaining warnings are two mechanical classes — 26 titles/aliases owned by two pages
  and 19 orphaned unit pages (15 exercise launchers, 2 summaries, an introduction, an assessment) — so
  giving each alias one owner and giving every unit page generated module navigation clears them without
  touching any claim.
- Change: 19 aliases removed from non-owner pages (e.g. *MCP server* stays on mcp-tool-integration,
  *previous_response_id* on responses-api); four unit pages retitled with their module (src-155, src-96,
  src-29, src-30); new `scripts/sync_module_links.py` writes one generated *Module units* line per
  source page (261 pages, 30 modules), excluded from the wiki link graph.
- Mechanical: `[0, 0, 0, 45, 6]` → `[0, 0, 0, 0, 6]` (IMPROVED).
- Judgement: not re-run — no claim, citation or objective changed (program.md step 5); panel stays 0/20.
- Decision: kept.
- Lesson: navigation debt is cheapest to pay with generated structure, not hand-placed links.

## Cycle 7 — locator drift (2026-09-24)
- Hypothesis: citation drift is systematic, not incidental (the SRC-91 shift propagated from a source page
  into four concept and synthesis pages); confirming each of the 347 drift candidates from
  `scripts/find_locator_drift.py` against the raw lines, and correcting only the confirmed ones, repairs
  criterion-2 failures the 20-page panel cannot see — measured by the candidate count and by a rotating
  sample drawn after the fix.
- Change: six generator agents confirmed 322 of the 347 drift candidates against the raw lines and
  re-cited them (4 claims narrowed; 21 rejected as false positives); `find_locator_drift.py` then
  reported 22 candidates, each one an explicitly rejected false positive.
- Mechanical: `[0, 0, 0, 0, 6]` → `[0, 0, 0, 0, 6]` (SAME — the lint cannot see drift).
- Judgement (panel, incremental): the 3 changed panel pages were re-judged by a reviewer told to check
  **every** sampled citation's line range — all 3 FAIL: model-playgrounds (unlabelled "not the production
  app / not the evaluator" contrast), foundry-toolkit (SRC-84 L233–257 misses L232), microsoft-agent-
  framework (SRC-237 L230 should be L229) → 0/20 → 3/20; the tool's verdict is REGRESSED. A diff against
  cc75007 shows none of the three claims was touched by cycle 7: these are pre-existing defects that the
  stricter protocol found.
- Rotating diagnostic sample (cycle-7-changed pages first, same stricter protocol): **11/20 fail** —
  reviewer A 9/10 (off-by-one or off-by-two locators on src-211, src-128, src-262, src-39, src-22,
  src-258, src-2, concurrent- and group-chat-orchestration; objective over-claims on src-262 I07/I08,
  src-22 I02, src-2 P12), reviewer B 2/10 (a meta-claim on glossary cited to SRC-191; G11 on
  agent-building-options-compared).
- Decision: **kept** — 322 verified re-citations; the new failures predate the cycle.
- Lessons: (1) residual drift is mostly ±1–3 lines, too small for the word-overlap heuristic's thresholds.
  (2) Reviewer instructions are part of the measuring instrument; they had lived outside the repo and
  drifted. → verifier v4: the protocol moves to `loop/reviewer.md`, locked, with the every-citation
  check as standard.

## Cycle 8 — unlabelled claim lines (2026-09-24)
- Hypothesis: the six unlabelled claim lines are five decision-table headers and one uncited lead-in;
  labelling the tables as **Synthesis:** and citing the lead-in clears the last mechanical component.
- Mechanical: `[0, 0, 0, 0, 6]` → `[0, 0, 0, 0, 0]` (IMPROVED). No panel page changed (3/20 carried).
- Decision: kept.

## Verifier v4 (2026-09-24)
- `loop/reviewer.md` holds the reviewer protocol (every citation on each sampled claim is checked
  against the raw lines); `loop_score.py` hashes rubric + protocol together, so the protocol change starts
  a new judgement baseline; verifier re-locked. The full fixed panel is re-judged under v4 before cycle 9.

## Cycle 9 — similarity-guided repair of small offsets (2026-09-24)
- Hypothesis: most residual locator errors are ±1–3-line offsets that a claim-to-line similarity search
  can place uniquely; re-citing only when the cited window is weak (< 0.35 IDF-weighted word overlap)
  and one shifted window is clearly and uniquely better (≥ 0.45, +0.20 over cited, +0.10 over the
  runner-up) will fix them without touching correct citations. Dry run: 105 re-citations on 47 pages;
  all 4 reviewer-found offsets in the dry run match the reviewers' fixes, and 4 of 4 spot checks are right.
- Change: the session tool (not part of the verifier) applied the 105 re-citations on 47 pages; no claim
  text, label or objective changed.
- Mechanical: `[0, 0, 0, 0, 0]` → `[0, 0, 0, 0, 0]` (SAME — the lint verifies that each cited range
  exists and is not navigation, not that it is the carrying line).
- Judgement (panel, incremental): one panel page changed — microsoft-agent-framework, where only SRC-237
  L230 → L229 changed. Re-judged FAIL on two untouched decision rules (unlabelled) and a Power Fx claim
  missing its SRC-11 citation → 3/20 → 4/20; the tool's verdict is REGRESSED.
- Decision: **kept** — every reviewer-prescribed offset in scope was matched, and the new failure is on
  lines the cycle did not touch (a different reviewer sampled different claims).
- Lessons: (1) a similarity search is a cheap, checkable way to repair small offsets, but it only fixes
  what is weak by its own measure — it cannot see a correct-looking citation on the wrong line.
  (2) Incremental re-judging of a changed page re-samples the *whole* page, so it surfaces old defects;
  a REGRESSED verdict caused only by untouched claims is measurement variance, and is recorded as such
  rather than reverted.

## Cycle 10 — decision rules the cited lines do not state (2026-09-24)
- Hypothesis: the decision-boundary sections still hold "Choose/Use X when…" rules that are the wiki's
  own comparison, not a source statement; labelling every such rule whose cited lines do not state it
  as **Inference:** — and keeping the ones whose lines do — plus the 18 precise fixes the reviewers
  named in cycles 7 and 9, clears the open panel failures.
- Change: 28 decision-rule lines labelled **Inference:** (8 in step a; 20 comparative or composite
  rules in step b); 9 rules left sourced after reading their cited lines (e.g. "Use the Foundry SDK
  with the project endpoint when…" is SRC-18 L292–300 almost verbatim). Reviewer-named fixes, each
  checked against the raw lines: SRC-254 L251 added for error iteration; SRC-49 L130–139 → L174–177
  (the preview remark); SRC-39 L247–254 → L243–250; SRC-22 L8–10 → L12; SRC-2 L266–270 → L264–269;
  SRC-242 L256–261 → L259–263; SRC-84 L233–257 → L232–257; SRC-11 L220–236 added for Power Fx
  (and SRC-11 joins `source_ids`); objective trims −T02 −V13 (extraction), −T02 (speech), −I02
  (src-22), −P12 (src-2), −I07 −I08 (src-262), −G11 (agent-building), −P05 (M365 integration);
  src-181 objectives cleared; the glossary scope statement no longer cites SRC-191; src-167 lists
  the assessment options without implying answers; model-playgrounds' contrast labelled Inference.
- Mechanical: `[0, 0, 0, 0, 0]` → `[0, 0, 0, 0, 0]` (SAME).
- Judgement (panel, incremental): 6 changed panel pages re-judged by two fresh reviewers —
  microsoft-agent-framework PASS; five FAIL, each on a claim neither cycle 9 nor cycle 10 touched
  (checked with `git diff 2ec0446`): code-interpreter (the "code blocks are elided" clause cites
  L238–244; the markers are at L229–237), extraction-options (an uncited vision-model contrast; V11
  claimed with no video-workflow teaching), speech-and-language ("low-latency", "interruptible" not in
  the cited lines), model-playgrounds (SRC-197 L213 is "See the Text and images tab…"; the claim is
  L214), foundry-toolkit (SRC-84 L247–252 misses the hosted-agent line L246) → **4/20 → 5/20**;
  the tool's verdict is REGRESSED.
- Decision: **kept** — every fix is verified against the raw lines; the five failures are old defects on
  newly sampled claims.
- Lesson: one failure (SRC-197 L213) belongs to a mechanical class — a citation whose every line is
  Learn page chrome cannot carry a claim. A scan found 64 such citations.

### Panel ledger after cycle 10 (FAIL rows; all other panel pages PASS)
| Panel page | Verdict | Criterion | Problem |
|---|---|---|---|
| code-interpreter-tool | FAIL | 2 | elided-code clause cites SRC-254 L238–244; markers at L229–237 |
| extraction-options-compared | FAIL | 1, 8 | vision-model contrast uncited; V11 claimed |
| speech-and-language-options-compared | FAIL | 1, 6 | "low-latency", "interruptible" not in SRC-88 lines |
| model-playgrounds | FAIL | 2 | SRC-197 L213 is chrome; claim at L214 |
| foundry-toolkit-for-vs-code | FAIL | 2 | SRC-84 L247–252 misses L246 |

## Cycle 11 — chrome-only citations and the five panel failures (2026-09-24)
- Hypothesis: citations whose every cited line is Learn page chrome (`Tip`, `Note`, `Copy`, a
  language tab, `Completed 100 XP`, `35 minutes`, "See the Text and images tab…") are a mechanical
  defect class — the reviewer found one on the panel and a scan finds 64 wiki-wide; re-citing each to
  the adjacent teaching line that carries the claim (keeping the ones whose claim is *about* the
  capture), together with exact fixes for the five panel failures, brings the panel back to ≤ 2/20.
- Change: of the 64 chrome-only citations, 49 re-cited to the carrying line after reading it (e.g.
  SRC-100 L212–213 → L214 for asynchronous video generation; SRC-76 L211–212 → L213 for "explore
  Foundry IQ"; SRC-74 L212 → L211 for "launch the exercise and follow the instructions"); one dropped
  (SRC-30 L215 duplicated two carrying cites); one claim rewritten to what the lines say (foundry-iq's
  exercise sentence said "Azure AI Foundry"; SRC-76 L210–216 says Microsoft Foundry); 13 kept — 9
  because the claim is about the capture itself (code-block markers, a completed-status line, the
  next-unit link) and 4 where the scan misread an `Lx-Ly` range. The retrieval-options safety inference now cites
  SRC-255 L252 ("Retrieval improves grounding but doesn't replace human review for sensitive
  decisions") and SRC-257 L225 instead of fine-tuning lines. Panel fixes: code-interpreter cites
  SRC-254 L229–237 for the elided code; extraction-options labels the vision contrast **Inference:**
  with SRC-131 L211–212 and SRC-210 L213–214, and drops V11; speech-and-language and voice-live-api
  cite SRC-49 L8–14 ("A real-time, low-latency, full duplex conversation … interrupted when we need
  to") and SRC-31 L226 (VAD detects interruptions), and the second SRC-49 L130–139 copy → L174–177;
  model-playgrounds SRC-197 L213 → L214; foundry-toolkit SRC-84 L238 + L246 for hosted agents,
  L232 for the product name, L233–248 for the three sections.
- Generator aid: `scripts/find_locator_drift.py` also lists chrome-only citations (skipping claims
  about the capture); after the cycle it reports 0.
- Also: web-search-tool's rule "current, public, indexable web information" → "current, external web
  information (SRC-257 L218–221)" — the source says neither *public* nor *indexable*.
- Mechanical: `[0, 0, 0, 0, 0]` → `[0, 0, 0, 0, 0]` (SAME).
- Judgement (panel, incremental): the 5 changed panel pages re-judged by two fresh reviewers —
  code-interpreter, extraction-options, model-playgrounds and foundry-toolkit PASS; speech-and-language
  FAIL on two claims the cycle did not touch (the Speech MCP **Disputed:** row did not cite the SRC-43
  managed-identity line; "model-catalog … deployed" cited only SRC-17 L218–221) → **5/20 → 1/20**
  (meets the ≤ 2/20 bar). Recorded as `verdict SAME`: the mechanical score did not move and the panel
  rate fell.
- Decision: kept.
- Lesson: a mechanical defect class found once by a reviewer is worth a wiki-wide scan; the scan here
  found 64 instances of what the panel showed as one.

## Rotating diagnostic sample after cycle 11 (seed 11) — the panel is overfit (2026-09-24)
- Drawn with `loop_sample.draw(11, set())` — no preference for changed pages — so the 20 pages are an
  unbiased stratified sample (8 source, 6 concept, 3 entity, 3 synthesis); judged by two fresh
  reviewers under the v4 protocol on the same tree the panel judged at 1/20.
- Result: **10/20 fail** (6/10 and 4/10). Criterion 8 on 6 pages — objective over-claims (src-5 P12,
  G12; src-189 P09, G06; language-detection T01; speech-translation P02, T05) and `objective_gaps`
  on pages that do not discuss the gap (guardrails V14; endpoints P12). Criterion 2 on 5 pages —
  assessment options cited to the question line (src-164), one-to-nine-line offsets (src-145),
  episode segment ranges that miss part of the claim (src-189), a range one clause short
  (naming-and-currency, a panel page, SRC-228 L279–314 vs L320), a count cited to the wrong segment
  (key-tensions). Criterion 3 on key-tensions — **Disputed:** used for qualifications.
- Diagnosis: the panel has been re-judged and repaired every cycle since cycle 3; its failures were
  fixed one by one, so it now measures the repairs rather than the wiki (a validation set that has
  been trained on). The ratchet rules stay as they are, but the honest quality estimate is a fresh
  unbiased sample, and repairs must target classes that exist off the panel.
- Recorded without `--panel` (diagnosis).

## Cycle 12 — the rotating sample's defect classes, wiki-wide (2026-09-24)
- Hypothesis: the rotating sample's failures are instances of four classes that exist across the
  wiki: (1) objective over-claims — the v3 objective audit (cycle 2) covered only concept, entity and
  synthesis pages, and the 125 source pages with objectives were never audited; (2) `objective_gaps`
  on pages that never discuss the gap (12 of 16 such pages); (3) **Disputed:** used for tensions that
  are qualifications, not conflicts (all 8 labels); (4) small locator offsets. Fixing every specific
  finding, clearing classes 2–3 directly and auditing all 686 objective claims against criterion 8
  (class 1) lowers the failure rate of a fresh rotating sample.
- Changes (step a): every rotating-sample finding fixed after reading the raw lines — src-164 option
  citations (8, including two the reviewer did not list), src-145 (6 locators), src-189 (segment
  ranges, −P09 −G06), naming-and-currency (SRC-228 L279–320), key-tensions (137 at SRC-228 L389–390,
  "over 90" at SRC-227 L216), src-5 (−P12 −G12), language-detection (−T01), speech-translation
  (−P02 −T05); the speech page's remaining failure ("SDK version details" now cites SRC-87 L218,
  "As of version 1.0.0, this SDK is async-only").
  Class 2: nine pages now state the gap they list, each with the study-guide line and a link to
  [[corpus-gaps]] (P08 ×2, P09, P10/G12/G15, P12, T07, V14, V15, G15); three drop IDs they were only
  adjacent to (model-benchmarks −P10, responsible-ai-lifecycle −P15 −G12 −G15,
  agent-building-options −P08). Class 3: all eight **Disputed:** labels relabelled — none records two
  sources that conflict (the Speech MCP auth difference is an episode aside, the Responses/
  ChatCompletions row says itself it is "not a product conflict", chain-of-thought is a coverage gap);
  key-tensions becomes `status: active` with a summary that says what it holds.
- Changes (step b, class 1): ten read-only generator agents audited all 686 objective claims on 231
  pages against criterion 8, calibrated with the reviewers' verdicts; each returned KEEP/DROP per ID
  with the named parts and a citation for doubtful keeps. 131 claims dropped on 82 pages; none added.
  The dominant patterns: G05 (Foundry SDKs and connectors) claimed by Responses-API tool pages
  (6); G12 (deployed-agent monitoring) by publishing and demo pages (8); I04 (RAG ingestion flow)
  by OCR and enrichment pages (7); G06 (app connection to a project) by API and overview pages (6);
  P13/P14/P15 by responsible-AI planning pages that name controls without configuring them (10);
  T07 (audio reasoning) by transcription pages (3). Claims fell 686 → 555; the objective map is
  unchanged (40 taught · 13 taught in part · 11 named only · 0 no page), because every dropped claim
  had another page that teaches the objective — the over-claims were redundant as well as wrong.
- Mechanical: `[0, 0, 0, 0, 0]` → `[0, 0, 0, 0, 0]` (SAME).
- Judgement (panel, incremental): the 4 panel pages changed since the cycle-11 judgements
  (speech-and-language, naming-and-currency, microsoft-agent-framework, extraction-options) re-judged
  by a fresh reviewer — three PASS; naming-and-currency FAIL on a claim the cycle did not touch (the
  Sora 2 / model-name stale-risk cited only SRC-97 L206–217 and SRC-191 L101) → **1/20 → 1/20**
  (SAME).
- Judgement (rotating, seed 12, unbiased and disjoint from seed 11 except one page): **5/20 fail as
  judged** (4/10 and 1/10), against 10/20 for seed 11 before the cycle. One failure is a demonstrable
  reviewer misreading: src-173's reviewer took the question number `2.` (SRC-173 L213) for a marked
  answer; the capture numbers questions the same way at L218, as do SRC-168 L217 and SRC-159 L216, and
  no Learn assessment capture marks a checked answer → 4/20 corrected. Two samples of 20 are noisy
  (50% vs 20–25%), so the drop is suggestive, not proof.
- Decision: kept.
- Lessons: (1) wiki-wide classes found from a fresh sample are worth more than panel repairs — the
  cycle's biggest change (131 objective over-claims) was invisible to the panel. (2) The objective
  over-claims were redundant: removing them changed no objective's map status, so the objective map
  was never the right check for honest frontmatter.

## Cycle 13 — assessment captures, shifted ranges, the seed-12 findings (2026-09-24)
- Hypothesis: two of the seed-12 failure types are wiki-wide classes: (1) assessment pages and the
  concept pages that quote them state answers the captures do not show — Learn assessment captures
  never mark a checked answer; the `2.` lines are question numbers and each `[-] N` marker indexes the
  next option, which page writers (and one reviewer) misread; (2) ranges that start on page chrome and
  stop one line short of the carrying line (SRC-211 L217–221 for a claim at L219–222). Fixing both
  classes with the answer attributed to the episode review or teaching unit that gives it lowers the
  failure rate of a fresh rotating sample.
- Changes: 30 assessment-answer claims on 17 pages rewritten to say what the capture shows (question
  and options) and cite the episode review or teaching unit for the answer — e.g. src-159's "Answer
  shown: WebRTC" now cites the Voice Live unit (SRC-88 L270), its other answers the episode review
  (SRC-49 L690–710); src-150's "Answer shown in capture: option 2" now cites SRC-45 L576–588 and
  SRC-24 L252; src-169 cites the image-analysis unit (SRC-8 L220, L239, L245); two claims were also
  wrong about the question (named-entity-recognition said "people, organizations, and locations" —
  the question says "key people, places, and dates"; pii-detection said "email addresses and phone
  numbers" — it says "personal details"); content-understanding-analyzers cited two assessments for a
  "generate-style field" question neither contains. 15 shifted ranges re-cited after reading the raw
  lines (a scan of chrome-leading ranges found 801, of which 23 were followed by a line sharing
  distinctive claim words; 15 of those genuinely stopped short — e.g. SRC-245 L218–220 → L220–221 for
  "the order is fixed", SRC-223 L218–227 → L220–228 for tool-invocation testing; 8 already carried
  the claim). The remaining ~780 chrome-leading ranges include every carrying line and are left:
  no reviewer has failed a range for leading chrome. Seed-12 findings fixed (src-211, src-248 −V08,
  image-generation, foundry-agent-service, naming-and-currency); src-173 unchanged in substance — it
  now says why the `2.` lines are not answers.
- Mechanical: `[0, 0, 0, 0, 0]` → `[0, 0, 0, 0, 0]` (SAME).
- Judgement (panel, incremental): the 2 panel pages changed since 45a3cb1 re-judged —
  pii-detection-and-redaction PASS; naming-and-currency FAIL on two further naming claims the cycle
  did not touch ("Azure AI Foundry" cited to a model-selection episode that never says it; the "Open
  API" caption variant cited to SRC-42 L180–240 — it is at L451 and L572–573) → **1/20 → 1/20**
  (SAME).
- Judgement (rotating, seed 13, unbiased): **7/20 fail** (4/10 and 3/10) — src-172 (a question cited
  to its question-number line), src-21 (a range ending on "Next unit:"), workflow-patterns and
  custom-tool-options and azure-speech-mcp-server (unlabelled framings: a conveyor-belt analogy, a
  "contract" metaphor, a negative comparison), model-selection (subclaims not carried by the cited
  lines), overview (a claim about the wiki itself — "265 corpus sources" — cited to corpus lines).
- Decision: kept.
- Lesson: three consecutive fresh samples (10/20, 5/20, 7/20) put the strict-protocol page-failure
  rate at roughly a quarter to a third after cycle 12; each sample now finds mostly single-instance
  defects, and the classes behind them are what the next cycle can still fix mechanically.

## Cycle 14 — range tails, identifier locators, framings, naming claims (2026-09-24)
- Hypothesis: the seed-13 failures are instances of five checkable classes: (1) ranges that end on
  navigation (`Next unit:`, `Previous Next`, `Feedback`) or on the next question's number; (2)
  citations whose backticked identifier (`server_url`, `video.error`, `select_next_agent`) sits a few
  lines outside the cited range; (3) unlabelled framings in *Mental model* sections — 91 of 103
  concept and entity pages open that section with an unlabelled analogy or characterisation; (4)
  naming claims whose cited lines do not contain the name; (5) statements about the wiki cited to the
  corpus. Fixing all five wiki-wide lowers a fresh sample's failure rate.
- Changes: (1) about 130 range tails trimmed on 43 pages by rule (only full-line navigation and
  question-number lines, never lines a claim is about); the trim exposed one citation that had been
  navigation-only (prompt-engineering, SRC-178 L288–291 → L286). (2) A check of every backticked
  identifier against its cited lines found 128 misses: 20 were a few lines away (16 re-cited after
  reading the lines), 96 are spoken or prose renderings the lines carry word by word, and the 4
  identifiers found nowhere in the corpus are all in negative statements ("not a named
  `HandoffBuilder`") — no invented identifier. (3) 72 framing paragraphs on 64 pages labelled
  **Synthesis:** (two or more sources) or **Inference:** (one). (4) "Azure AI Foundry" now cites the
  two Learn lines that contain it (SRC-102 L251, SRC-234 L230) on five pages; "Open API" cites SRC-42
  L451 and L572–573; "Azure AI Services" cites SRC-96 L236; two asides that named products the corpus
  never mentions (Form Recognizer, Azure Cognitive Search) removed. (5) overview's first claim now
  cites the corpus only for what the corpus says. Plus the seed-13 findings.
- Mechanical: `[0, 0, 0, 0, 0]` → `[0, 0, 0, 0, 0]` (SAME).
