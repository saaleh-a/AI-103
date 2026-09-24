---
title: Wiki log
type: log
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: Append-only chronology of every ingest, query, lint, schema, graph and loop operation on this wiki.
area: corpus
source_ids: []
tags: [log]
aliases: [log]
---

# Wiki log

Append-only. Newest entries at the bottom. `grep "^## \[" wiki/log.md` lists the timeline.

## [2026-09-24] schema | Initialise the AI-103 wiki
- Summary: Instantiated Karpathy's LLM Wiki pattern (`llm-wiki.md`, supplied by the user) for the
  AI-103 corpus with the `karpathy-llm-wiki` evidence rules and a Karpathy generation–verification
  loop (the user's *Karpathy Loop* guide). The conventions follow the user's existing Solution
  Engineering wiki (raw / wiki / schema layers, locator-verified citations, generated index,
  deterministic wiki link graph, cross-document entity resolution) adapted to this repo.
- Corpus at initialisation: 265 raw files in `corpus/` (SRC-1 … SRC-265), ~368,800 words: 235
  Microsoft Learn unit captures in 30 modules, 26 episode transcripts, the Study Cram, the study
  guide, the course page and the course preview. The attached backup
  `AI-103-backup-2026-09-19_02-16.zip` was verified identical (265/265 files after line-ending
  normalisation; zero-padded names only), so it adds no new sources.
- Decisions: raw files stay in `corpus/` (the app syncs that folder; its numbers are already the
  app's `sourceIds`), IDs are `SRC-N` (never `AI-NNN`, which collides with exam codes); the
  graph is built from the repo root with `.graphifyignore` admitting only `corpus/`; the wiki's
  objective vocabulary reuses the app's P01 … I08 IDs, re-verified verbatim against SRC-191.
- Created: `schema.md`, `program.md`, `.graphifyignore`, `loop/rubric.md`, `wiki/` tree, this log;
  `scripts/` — `corpus_registry.py` (+ `data/corpus-registry.json`: kind, module, unit, content
  line range per source), `exam_objectives.py` (+ `data/exam-objectives.json`: 64 objectives with
  SRC-191 line numbers), `lint_wiki.py`, `build_index.py`, `build_corpus_map.py`,
  `build_objective_map.py`, `sync_backlinks.py`, `build_wiki_graph.py`,
  `raw_graph_entity_resolution.py`, `check_citations.py`, `loop_score.py`.
- Registry: 121 canonical concept, entity and synthesis pages created as placeholders so source
  pages can link to them before they are compiled.
- Next: graphify the raw corpus; ingest all 265 sources; compile entities, concepts, synthesis;
  lint; run the loop.

## [2026-09-24] graph | Raw-source knowledge graph (graphify full pipeline)
- Summary: `/graphify .` from the repo root over the 265 raw files (~368,815 words; `.graphifyignore`
  admits only `corpus/`). Semantic extraction by 15 host subagents, chunked by Learn module with its
  episode transcript: 1,839 nodes, 1,996 edges, 45 hyperedges. Cross-document entity resolution
  (123 exact normalised-label groups + an LLM same-referent review of all 1,839 labels): 128 groups,
  374 nodes → 128, 33 INFERRED cross-document links, applied by
  `scripts/raw_graph_entity_resolution.py`; graphify `build(dedup=True)` merged 13 more. Result:
  1,580 nodes · 1,936 edges · 160 labelled communities. God nodes: Azure Content Understanding (39),
  Foundry Tools (27), RAG (24), Microsoft Foundry Agent Service (23), Azure AI Search (21).
- Created: `graphify-out/` — `graph.html`, `graph.json`, `GRAPH_REPORT.md` (with build notes),
  `entity-resolution.json`, `manifest.json`, `cost.json`, `.graphify_labels.json`; local semantic cache
  (git-ignored: its entries embed this machine's paths).
- Issues flagged: host did not expose subagent token usage (report shows 0). Health check: no
  dangling/missing endpoints; 67 same-endpoint edges collapsed by merging duplicate assertions.
  SRC-163 and SRC-170 (module assessments) produced no nodes. `graphify benchmark` (16.5x) counted
  79,000 of 368,815 words, so it under-states the reduction. 789 nodes have ≤ 1 connection.
- Next: ingest every source into the wiki.

## [2026-09-24] ingest | All 265 raw sources (batch ingest)
- Summary: one source page per raw file, written by 30 parallel writers grouped by Learn module
  (each with its module's units, its episode transcript and the §8 template), each reading the
  registry's teaching-content line range and validating its own pages with
  `lint_wiki.py --pages`. Assessment pages record every captured question, option and shown answer;
  episodes and SRC-1 carry segment guides (SRC-1 with verbatim anchors only).
- Created: `wiki/sources/src-1-…` through `src-265-…` (265 pages): 229 at `ingest_depth: full`,
  30 exercise launch pages as `stub` (lab steps live outside the corpus), 6 collapsed or partly
  captured pages as `partial`.
- Result: lint 0 errors; 9,935 line-range and 316 verbatim-anchor citations verified, none pointing
  at site navigation; 265/265 raw sources covered.
- Issues flagged by writers (feed [[key-tensions]] and [[naming-and-currency]]): code blocks and
  tables collapsed in many Learn captures (SRC-8, 20, 24, 25, 91, 187, 221, 223, 225, 227, 235, 250);
  several assessments capture no answers or lose a question stem (SRC-143, 145, 146, 157, 158, 160,
  161, 163, 171, 175); naming drift — *Azure AI Foundry* / *Microsoft Foundry*, *Azure AI Agent
  Service* / *Foundry Agent Service*, *Azure AI Language* / *Azure Language in Foundry Tools*, Semantic
  Kernel lineage of Agent Framework, *Foundry Toolkit* / *AI Toolkit*; caption errors (*magnetic* for
  Magentic in SRC-180; *Open API* / *OpenAI* in SRC-42); SRC-43 says managed identity where SRC-236
  describes key-based auth for the Speech MCP server; SRC-228 language counts (137 vs 90+); Work IQ
  is preview.
- Next: compile the 103 concept and entity pages, then synthesis; lint; loop.

## [2026-09-24] schema | Separate taught objectives from named-only objectives
- Problem → change: the first compiled pages listed in `objectives` every official objective they
  discussed, including ones they explicitly say the corpus only names in the study guide (e.g. V03
  inpainting on image-generation, V09 alt text on vision-enabled-chat), so `objective-map` showed
  64 of 64 objectives as covered. New frontmatter field `objective_gaps` records named-only
  objectives; `objectives` now means corpus-backed teaching only. `lint_wiki.py` validates both
  (an ID may not be in both); `build_objective_map.py` marks each objective **taught**, **named
  only** or **no page**. All compile agents were asked to re-classify their pages.
- Updated: `schema.md` §6, `scripts/lint_wiki.py`, `scripts/build_objective_map.py`.
- Also added `scripts/loop_sample.py` (seeded, stratified sample for the judgement verifier) and
  hash-listed it with the verifier in `scripts/loop_score.py`.

## [2026-09-24] loop | Cycles 0–1: baseline and objective honesty
- Summary: `program.md` loop started. Cycle 0 baseline: mechanical `[0, 0, 0, 45, 6]`; judgement
  17/20 pass (failures: synthesis pages over-claiming objectives). Cycle 1 made hubs claim no
  objectives, trimmed comparison pages and filled corpus-gaps' `objective_gaps` (22); objective map
  now 53 taught / 11 named only. Details in `loop/experiments.md`.
- Verifier change (human decision): rubric criterion 8 *Honest frontmatter* added to
  `loop/rubric.md`; `scripts/loop_score.py` compares judgement rates only under the same rubric
  hash; verifier re-locked. Problem solved: the reviewer lens had widened between cycles, which made
  an unchanged class of pre-existing errors look like a regression.

## [2026-09-24] loop | Cycle 2 and verifier v3
- Summary: cycle 2 audited the objective claims of all 121 concept, entity and synthesis pages
  (24 pages trimmed; misused `objective_gaps` additions on 5 pages reverted). Kept on page-level
  evidence although the rotating-sample judgement read 15/20: that sample was not comparable with
  cycle 1 (see `loop/experiments.md`).
- Verifier v3 (human decision): (1) a **fixed judgement panel** (`loop/panel.txt`, drawn once by
  `scripts/loop_sample.py --make-panel 1`) — only panel runs under the same rubric move the ratchet;
  rotating samples are diagnosis. (2) Rubric criterion 8 clarified: an objective is claimed when a
  page teaches at least one named part; untaught parts go in the gap register. (3) New lint rules:
  non-teaching units and hubs claim no objectives; `objective_gaps` must come from the gap register
  ([[corpus-gaps]]). (4) `loop_score.py` compares mechanical scores only under the same lint rules.
  `objective-map` now shows *taught*, *taught in part*, *named only*, *no page*.
- Problem solved: the judgement metric was non-stationary and the objective rules were ambiguous,
  so the ratchet could not tell a better wiki from a stricter reviewer.
- v3 baseline: `[113, 0, 0, 45, 6]` — 107 non-teaching source pages and 6 misused gap lists now fail.
- Updated: `scripts/lint_wiki.py`, `scripts/loop_score.py`, `scripts/loop_sample.py`,
  `scripts/build_objective_map.py`, `loop/rubric.md`, `loop/panel.txt`, `program.md`, `schema.md` §6.

## [2026-09-24] loop | Cycles 3–6: frontmatter, panel repairs, alias ownership, module navigation
- Cycle 3: objectives cleared on 107 non-teaching units by rule; P14 and G01 registered in
  [[corpus-gaps]]; 15 misused gap IDs dropped → mechanical `[113, 0, 0, 45, 6]` → `[0, 0, 0, 45, 6]`;
  panel 6/20 → 5/20. Incremental panel re-judging (`loop_sample.py --panel --changed-since`) adopted.
- Cycle 4: the five open panel failures fixed at source level (SAS-URL vs key guidance split on
  src-236; content-safety cells cited to SRC-156 L230; SRC-91 L233 → L234–235; G06 dropped from the
  toolkit page; the *Azure AI Agent Service* alias re-cited to lines that contain it) → panel 2/20.
  New generator aid `scripts/find_locator_drift.py` (347 candidates).
- Cycle 5: two remaining judgements labelled; P02 dropped → panel 0/20.
- Cycle 6: one owner per title/alias; `scripts/sync_module_links.py` writes a generated *Module
  units* line on every source page → `[0, 0, 0, 0, 6]`.

## [2026-09-24] loop | Cycles 7–8 and verifier v4
- Cycle 7: 322 of 347 drift candidates confirmed against the raw lines and re-cited (21 rejected).
  A stricter re-judge of the three changed panel pages found pre-existing defects → panel 3/20; a
  rotating diagnostic sample read 11/20 (mostly ±1–3-line locators and objective over-claims).
- Cycle 8: the last six unlabelled claim lines labelled → mechanical `[0, 0, 0, 0, 0]`.
- Verifier v4 (orchestrator decision, recorded for human review): the reviewer protocol moved into
  the repo as `loop/reviewer.md` and is hash-locked with the rubric; every citation on each sampled
  claim is checked against the raw lines. Problem solved: the reviewer instructions had lived outside
  the repo and drifted between cycles. v4 panel baseline at 2ec0446: 3/20.

## [2026-09-24] loop | Cycles 9–10: small offsets and unsourced decision rules
- Cycle 9: 105 similarity-guided re-citations (±1–3 lines) on 47 pages; they match every
  reviewer-prescribed offset in scope. Panel 3/20 → 4/20 on an untouched claim of the one changed
  panel page (kept; measurement variance).
- Cycle 10: 28 "Choose/Use X when…" rules that their cited lines do not state labelled
  **Inference:**; 18 reviewer-named fixes applied after checking each against the raw lines (locators,
  objective trims, a missing SRC-11 citation, the glossary's uncited scope statement, src-167's
  assessment wording). Panel 4/20 → 5/20, all five failures on claims the two cycles did not touch.
