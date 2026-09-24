---
title: program.md — the AI-103 wiki improvement loop
type: schema
status: active
created: 2026-09-24
updated: 2026-09-24
---

# program.md — the AI-103 wiki improvement loop

The human-owned instruction file for a Karpathy-style generation–verification loop over the
wiki (`schema.md` §12). The generator improves the wiki; a separate verifier scores it; memory
makes each cycle learn from the last; the ratchet stops the score from sliding back. Read this
at the start of every cycle.

## Goal

A wiki in `wiki/` that compiles all 265 raw sources in `corpus/` into faithful, cross-linked,
exam-useful pages: one source page per raw file, concept and entity pages that teach mechanisms
and decision boundaries, and synthesis pages that connect the curriculum — every load-bearing
claim traceable to a raw SRC-ID and locator, every inference labelled.

## Roles

| Role | Who | May touch |
|---|---|---|
| **Generator** | any agent writing wiki pages (ingest, compile, repair) | `wiki/sources/`, `wiki/concepts/`, `wiki/entities/`, `wiki/synthesis/`; append-only: `wiki/log.md`, `loop/experiments.md` |
| **Verifier (mechanical)** | `scripts/lint_wiki.py` via `scripts/loop_score.py` | reads everything; writes only `wiki/lint-report.md` and (on `--record`) `loop/scores.jsonl` |
| **Verifier (judgement)** | a separate read-only reviewer agent that has not written the pages it reviews | reads pages, `loop/rubric.md` and `corpus/`; writes nothing |
| **Human** | the repo owner | this file, `schema.md`, the verifier and its lock |

Generated files are rebuilt by their scripts, never hand-edited: `wiki/index.md`,
`wiki/corpus-map.md`, `wiki/objective-map.md`, `wiki/lint-report.md`, `graphify-out-wiki/`.

## Forbidden to the generator

- `corpus/**` — raw evidence (the app also syncs it; never write inside it).
- `scripts/**`, including `scripts/data/**` — the verifier and its registries.
- `loop/rubric.md`, `loop/verifier.lock`, `loop/scores.jsonl` (only `loop_score.py` appends).
- `schema.md`, `program.md`, `CLAUDE.md`, `app/**`, `design/**`.

`scripts/loop_score.py` refuses to score (exit 2) if any locked verifier file changed. A
generator that can edit its test will optimise the test instead of the wiki.

## Constraints

- **One hypothesis per cycle**, stated in one sentence before any change; one kind of change per
  cycle so the result is attributable.
- Every factual claim cites a raw `SRC-N` with a locator that actually supports it — read the
  raw lines before citing them. Never add a citation to silence lint without reading the lines.
- Never delete sourced content, citations or labels just to reduce a warning count; fix the
  cause (wrong locator, missing label, missing page) instead.
- Never fill a corpus gap from general knowledge (`CLAUDE.md` C1). A gap is recorded on
  `corpus-gaps`, not papered over.
- Preserve the corpus's product names; flag renames (`schema.md` §10).
- Keep generated navigation current: after page changes run `python scripts/sync_backlinks.py`,
  `python scripts/build_index.py`, `python scripts/build_corpus_map.py`,
  `python scripts/build_objective_map.py`.

## Verification

1. **Mechanical:** `python scripts/loop_score.py` — runs the lint and prints
   `score=[errors, locator problems, uncovered sources, warnings, unlabelled claim lines]`
   against the best recorded score, with a verdict: IMPROVED, SAME or REGRESSED.
2. **Judgement:** a reviewer agent samples 20 pages — stratified across sources, concepts,
   entities and synthesis, weighted to pages changed this cycle — checks each against
   `loop/rubric.md` by reading the cited raw lines, and returns PASS/FAIL per page with the
   failing claim, its locator and what the raw text says. Record it with
   `--judgement <sampled>:<failing>`.

## Done when

- lint: 0 errors, 0 warnings, 265 of 265 raw sources with a source page;
- unlabelled claim lines ≤ 2% of claim-bearing lines;
- judgement sample: ≤ 2 of 20 pages fail the rubric;
- every one of the 64 objectives has a wiki page in `objective-map`, or is recorded on
  `corpus-gaps` as not taught by the corpus.

## Stop early if

- 3 consecutive cycles show no improvement (verdict SAME or REGRESSED) — stop and report what
  was learned;
- the verifier lock is violated;
- a cycle would require inventing content the corpus does not contain.

## Each cycle

1. Read this file and the last entries of `loop/experiments.md`.
2. Read `wiki/lint-report.md` and the last judgement result; pick the highest-value failure class.
3. Write the hypothesis (one sentence) into `loop/experiments.md`.
4. Make the change (generator, allowed files only), then regenerate navigation.
5. Verify: `python scripts/loop_score.py --judgement S:F --record "cycle N: <hypothesis>"`.
6. **Ratchet:** if the verdict is REGRESSED, revert the cycle (`git restore wiki/`) and record why.
   Otherwise keep it; the new score is the floor.
7. Record in `loop/experiments.md`: cycle, hypothesis, change, score before → after, judgement,
   decision (kept/reverted), lesson. Do not repeat a failed experiment without a new reason.
