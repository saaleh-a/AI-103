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
