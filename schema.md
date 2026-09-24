---
title: AI-103 Wiki — Schema
type: schema
status: active
created: 2026-09-24
updated: 2026-09-24
---

# AI-103 Wiki — Schema

The operating manual for this repository's LLM wiki: a compiled knowledge layer over the raw
AI-103 corpus in `corpus/`. It instantiates Karpathy's LLM Wiki pattern (the `llm-wiki.md`
idea file) with the evidence rules of the `karpathy-llm-wiki` skill, and it is maintained by
the generator/verifier loop in `program.md`. Any agent that ingests, queries or lints the wiki
reads this file first. The tutor's teaching rules stay in `CLAUDE.md`; this file only governs
how the wiki is compiled.

## 1. Domain and purpose

**Domain:** Microsoft exam **AI-103: Developing AI Apps and Agents on Azure** — Microsoft
Foundry (projects, models, deployment, SDKs, security, monitoring), generative AI apps (chat,
Responses API, prompting, RAG, fine-tuning, evaluation), agents (Foundry Agent Service, tools,
MCP, custom tools, Microsoft Agent Framework), workflows and multi-agent orchestration (A2A,
Microsoft 365 publishing), retrieval (Azure AI Search, knowledge mining, Foundry IQ), computer
vision and media generation, text analysis and translation, speech and Voice Live, information
extraction (Content Understanding, Document Intelligence) and responsible AI.

**Decisions and questions the wiki should serve** (they mirror `CLAUDE.md` §2 and §12):

1. Which Foundry service, model or tool fits a scenario — and which tempting neighbour does not?
2. How does each capability work underneath the product name (inputs, outputs, architecture)?
3. How are generative apps built, grounded, tuned, evaluated and made safe?
4. How do agents, tools, MCP, workflows, orchestration patterns and A2A fit together?
5. Which retrieval, indexing and extraction approach suits which content and question?
6. Which language, speech and vision capability suits which task?
7. How are deployments configured, secured, monitored and kept within quota and cost?
8. What does each of the 64 official objectives require, and where is the corpus thin?
9. How does the material transfer to customer-facing Solution Engineering conversations?

**Who reads it:** the AI-103 Mastery Tutor (`CLAUDE.md`), a Claude Code or Copilot session
working on this repo, and the learner browsing in Obsidian. The wiki never outranks the corpus:
`CLAUDE.md` §3 puts the raw corpus first, so every load-bearing wiki claim cites raw evidence.

## 2. Three layers

| Layer | Location | Rule |
|---|---|---|
| **Raw sources** | `corpus/` — 265 numbered `N-*.md` files | **Immutable evidence.** Never edit, rename, move, add to or "clean" them. `app/scripts/sync-corpus.mjs` copies this folder into the app, so nothing else may be written inside it. |
| **Wiki** | `wiki/` | LLM-owned, derived Markdown. Revise, merge, split and cross-link freely — within the loop rules in `program.md`. |
| **Schema** | `schema.md` (this file), `program.md` (the improvement loop), the pointer in `CLAUDE.md` | Governs compilation. Change deliberately; log every change. |

Supporting, non-evidence folders: `graphify-out/` (knowledge graph of the raw sources),
`graphify-out-wiki/` (link graph of the wiki), `scripts/` (registry, lint, index, graph and loop
tooling — the verifier), `loop/` (the loop's memory: experiments, scores, rubric, verifier
lock). `.graphifyignore` restricts the raw-source graph to `corpus/`.

## 3. Directory structure

```text
AI-103/
├── corpus/              265 raw sources (SRC-1 … SRC-265) — immutable
├── schema.md            this file
├── program.md           the Karpathy improvement loop: goal, allowed/forbidden, done, stop
├── .graphifyignore      only corpus/ is graphed as evidence
├── wiki/
│   ├── index.md         content catalogue — read first on every query (generated)
│   ├── corpus-map.md    learning path → module → unit → source page (generated)
│   ├── objective-map.md 64 official objectives → wiki pages → sources (generated)
│   ├── log.md           append-only chronology
│   ├── lint-report.md   latest mechanical lint result (generated)
│   ├── sources/         one page per raw source          (src-N-<slug>.md)
│   ├── entities/        products, services, SDKs, APIs, protocols, tools, models, works, people
│   ├── concepts/        mechanisms, patterns, methods, decisions
│   └── synthesis/       overview, comparisons, decision boundaries, learning path, gaps, glossary
├── graphify-out/        raw-source knowledge graph (graph.html, GRAPH_REPORT.md, graph.json)
├── graphify-out-wiki/   wiki link graph (same outputs, built from wikilinks)
├── loop/                experiments.md · scores.jsonl · rubric.md · verifier.lock
└── scripts/             corpus_registry.py, exam_objectives.py, lint_wiki.py, build_index.py,
                         build_corpus_map.py, build_objective_map.py, sync_backlinks.py,
                         build_wiki_graph.py, raw_graph_entity_resolution.py,
                         check_citations.py, loop_score.py · data/ (derived registries)
```

Add a folder only when the corpus demonstrably needs it.

## 4. Source identifiers and citation

- **Source ID** = `SRC-` + the filename's numeric prefix, unpadded: `231-Understand Agent
  Orchestration - Training - Microsoft Learn.md` → **SRC-231**. These are the same numbers the
  app uses (`sourceIds` in `app/src/data/curriculum/*.ts`, "sources 155, 247" in
  `app/src/data/objectives.ts`), so the tutor, the app and the wiki share one vocabulary.
- **Never write `AI-NNN` as an ID** — it collides with exam codes (AI-102, AI-103, AI-900).
- **Backups.** `AI-103-backup-2026-09-19_02-16.zip` holds the same 265 files with zero-padded
  prefixes (`001-…`) and LF line endings; its content is byte-identical after line-ending
  normalisation (verified 2026-09-24), so its numbers map to the same IDs and line numbers.
- **Locators** (raw files are immutable, so these are stable):
  - `L123` or `L120–135` — 1-based line numbers in the raw file.
  - `§Heading` — a heading inside a Learn unit, for navigation only.
  - `“short verbatim anchor”` (≤ 12 words) — required for **SRC-1**, the Study Cram, whose
    15,700-word transcript sits on one line, so line numbers carry no information. Search the
    raw file for the anchor.
- **Cite teaching content, not navigation.** Learn captures wrap each unit in ~200 lines of site
  menus and footer. `scripts/data/corpus-registry.json` records each unit's teaching-content
  line range (`content_lines`); lint warns when a locator points outside it.
- **Inline citation form:** `(SRC-231 L230–236)`, `(SRC-1 “replaces the AI 102”)`,
  `(SRC-99 L240; SRC-98 L220)`.
- **Curly quotes are for verbatim quotation only** and must occur in a raw source cited on the
  same line. Sample prompts, paraphrases and illustrative sentences go in *italics*.
- **Source pages:** `source_ids` is exactly the page's own ID. Related sources are cited inline
  and linked in *Relation to other sources*.
- Every entity, concept and synthesis page lists all IDs it cites in `source_ids` and links
  each one in its `## Sources` section, e.g. `- SRC-231 — [[src-231-understand-agent-orchestration]] — orchestration patterns`.
- **Wiki pages are never evidence.** A concept page may link a source page for navigation, but a
  claim's citation is always a raw SRC-ID with a locator.

## 5. Evidence labels

Unlabelled statements that carry a raw citation are **sourced**. Label everything else inline
with a bold prefix:

| Label | Meaning |
|---|---|
| **Synthesis:** | combines several sourced claims (cite all of them) |
| **Inference:** | reasoned from sources but not stated by any (exam cues and decision rules usually are) |
| **Hypothesis:** | a proposed explanation or question to test |
| **Disputed:** | credible sources conflict — state both sides with citations |
| **Stale-risk:** | time-sensitive and not re-verified: product names, preview features, model names and versions, API versions, limits, prices, region lists |
| **Illustrative** | an example the page author constructed (label *Illustrative*, never present as sourced) |

Never upgrade an inference to a fact because several wiki pages repeat it. Source authority:
Microsoft Learn units are vendor documentation — authoritative for product behaviour at capture
time, but they describe a moving platform (captures show 2026 site banners; the study guide is
"as of April 16, 2026", SRC-191 L102). Episode transcripts are presenters' walkthroughs and
opinions (auto-captioned). The Study Cram (SRC-1) is a study aid, not official documentation.
When sources disagree, preserve the disagreement (`CLAUDE.md` §3).

## 6. Page types and frontmatter

Every wiki page starts with YAML frontmatter (Dataview-friendly). Use only fields that change
retrieval, provenance or interpretation.

```yaml
---
title: Human-readable title
type: source | entity | concept | synthesis | index | log | lint
status: seed | active | disputed | stale | superseded | stub
confidence: high | medium | low
created: YYYY-MM-DD
updated: YYYY-MM-DD
summary: One line (≤ 200 chars) — used verbatim in wiki/index.md
area: platform | models | responsible-ai | generative-apps | agents | orchestration | retrieval | vision | language | speech | extraction | exam | corpus
source_ids: [SRC-231, SRC-237]
objectives: [G10, G16]      # official objective IDs this page substantively teaches (optional)
tags: []
aliases: []
---
```

`summary` and `area` exist for retrieval (`scripts/build_index.py` builds the catalogue from
them); `objectives` drives `wiki/objective-map.md`. Entity pages carry one kind tag:
`product`, `service`, `feature`, `sdk`, `api`, `protocol`, `tool`, `model`, `work`, `person` or
`organisation`.

Source pages add:

```yaml
source_kind: learn-unit | episode | study-cram | study-guide | course-page | course-preview
module: "Orchestrate a multi-agent solution using the Microsoft Agent Framework"   # or null
learning_path: "Develop AI agents on Azure"     # or null
unit: "3 of 11"                                 # Learn units; null otherwise
presenters: []                                  # episode speakers as captioned
raw_file: "231-Understand Agent Orchestration - Training - Microsoft Learn.md"   # exact filename
url: https://…            # the raw file's "> Source:" line
ingest_depth: full | partial | stub
```

These fields must agree with `scripts/data/corpus-registry.json` (lint checks kind and URL).

Status meanings: `seed` thin but correct · `active` mature, safe to cite · `disputed` holds an
unresolved conflict (must contain a `## Tensions` section) · `stale` time-sensitive and
unverified · `superseded` replaced (link the replacement) · `stub` a near-empty capture (for
example an exercise page whose lab lives on GitHub). `confidence` is about the page's evidence
base, not the author's certainty.

## 7. Naming

- Kebab-case ASCII filenames; the human title lives in `title` and `aliases`.
- Sources: `wiki/sources/src-N-<short-slug>.md`. Generic Learn titles get their module in the
  slug and title: SRC-143 → `src-143-knowledge-check-orchestrate-multi-agent-solution`, title
  "Knowledge check — Orchestrate a multi-agent solution using the Microsoft Agent Framework".
- Entities: `wiki/entities/<product-or-thing>.md` (e.g. `microsoft-foundry`, `azure-ai-search`).
- Concepts: `wiki/concepts/<canonical-term>.md` (e.g. `retrieval-augmented-generation`).
- Synthesis: `wiki/synthesis/<topic>.md` (e.g. `decision-boundaries`).
- One canonical page per idea. Put alternative and former names in `aliases` (e.g. *Azure AI
  Foundry* on `microsoft-foundry`); never create near-duplicates.
- Link with `[[filename]]` or `[[filename|display text]]` — Obsidian resolves filenames, not
  aliases. Inside Markdown tables escape the pipe: `[[filename\|text]]`.

## 8. Page templates

### Source page (`type: source`)

1. `# Title` then a one-line identity in italics: *kind · module · unit N of M · SRC-N*.
2. `## Source metadata` — table: ID, raw file, kind, learning path, module, unit / episode,
   presenter(s), URL, teaching-content lines, content length, capture quality, ingest depth.
3. `## TL;DR` — 2–5 sentences.
4. `## Key claims` — sourced bullets, each with a locator.
5. `## How it works` — mechanisms, components, procedures, configuration, in the source's terms.
6. `## Code and API patterns` — SDK objects, calls, parameters, request/response shapes; short
   verbatim snippets in fenced blocks with a locator line before them. "Not covered by this
   source." when there is none.
7. `## Key terms` — definitions as the source gives them.
8. `## Decision boundaries and exam cues` — when to use it, when not, the confusable neighbour,
   the scenario wording that points here. Mostly **Inference:** unless the source states it.
9. `## Assessment items` — knowledge checks and module assessments only: each question, the
   options, and the answer the capture shows (or "answer not shown in capture").
10. `## Tensions, caveats and currency` — preview status, naming drift, conflicts, **Stale-risk**.
11. `## Relation to other sources` — agrees / extends / contradicts, with SRC-IDs.
12. `## Connections` — links to entity, concept and synthesis pages, with why.
13. `## Open questions`
14. `## Sources` — the raw file itself (SRC-ID, filename).

Depth follows the source: a 60-word exercise capture needs a stub page, not fourteen padded
sections — mark thin sections "Not covered by this source."

### Concept page (`type: concept`) — layered, beginner to advanced (mirrors `CLAUDE.md` §9)

`## Summary` · `## The problem it solves` · `## Mental model` · `## What the sources say` (per
source, cited) · `## How it works in Azure` · `## Code and configuration` · `## Decision boundaries`
(when / when not / closest confusion / exam cue) · `## Failure modes and misconceptions` ·
`## Solution Engineering transfer` (optional: customer signal, discovery question, trade-off —
labelled **Inference:** unless sourced) · `## Connections` · `## Sources` · `## Open questions`

### Entity page (`type: entity`)

`## Summary` · `## What it is` · `## What the sources say` · `## Capabilities and components` ·
`## How to use it` (SDK, portal, API) · `## Decision boundaries` · `## Naming and currency` ·
`## Appearances in the corpus` · `## Connections` · `## Sources`

### Synthesis page (`type: synthesis`)

`## Summary` · `## Scope and question` · `## Synthesis` (labelled) · `## Evidence map` (claim →
sources table) · `## Tensions` · `## Implications for the exam and for practice` ·
`## Open questions` · `## Sources`

## 9. Operations

### Ingest (per source)

1. Read the raw source's teaching content fully (its `content_lines` in the registry; the whole
   file for episodes and SRC-1).
2. Search `wiki/index.md` and existing pages before creating anything.
3. Write or update the source page (§8), with locators.
4. Update every affected entity, concept and synthesis page in place; record contradictions and
   changed confidence rather than overwriting.
5. Add reciprocal links where they help navigation; then run `python scripts/sync_backlinks.py`.
6. Regenerate navigation: `python scripts/build_index.py`, `python scripts/build_corpus_map.py`,
   `python scripts/build_objective_map.py`; append one entry to `wiki/log.md`.
7. Run `python scripts/lint_wiki.py` (or `--pages <glob>` while drafting) and fix what it reports.
8. Refresh the graphs: `graphify update .` for raw sources (then re-apply entity resolution, §11)
   and `python scripts/build_wiki_graph.py` for the wiki.

Acceptance checks: raw source recoverably referenced · kind, module and URL captured · summary
reflects inspected content · no duplicate pages · contradictions not flattened · inferences
labelled · index current · one log entry · no wiki page cited as evidence.

### Query

Read `wiki/index.md` (or `corpus-map` / `objective-map`) → open the smallest relevant page set →
follow links only as far as the question needs → check raw evidence for anything decisive,
disputed, stale or weakly supported → answer with provenance and uncertainty. File a durable
answer into `wiki/synthesis/` only if it is reusable, its evidence is identifiable, speculation
is separated, and it improves rather than duplicates existing synthesis. A query can create
structure; it cannot create evidence. If the corpus does not cover a question, say so — and
never let the wiki become the place where exam content absent from the corpus is invented
(`CLAUDE.md` C1). Reader-facing documents outside the wiki must pass
`python scripts/check_citations.py <file>`.

### Lint

`python scripts/lint_wiki.py` checks mechanically: frontmatter schema, registry agreement,
objective IDs, dead links, orphans, one-way concept/entity links, raw sources without a source
page, SRC-IDs cited but not in `source_ids`, index coverage, `disputed` pages lacking a Tensions
section, and **every locator** (line ranges exist; curly quotes occur verbatim in a raw source
cited on the same line; ranges inside site navigation are warned). It writes
`wiki/lint-report.md` with embedded metrics, including the judgement aid *unlabelled claim
lines*. Then review by judgement against `loop/rubric.md`: unsupported claims, unrepresented
contradictions, stale claims, concepts mentioned repeatedly without a page, summaries that
drifted from their evidence, circular synthesis, and confident answers outside corpus coverage.

### Log format

```markdown
## [YYYY-MM-DD] <ingest|query|lint|schema|graph|loop> | <target>
- Summary:
- Created:
- Updated:
- Issues flagged:
- Next:
```

`grep "^## \[" wiki/log.md` lists the timeline. The log is append-only.

## 10. Corpus notes (observed at initialisation, 2026-09-24)

- **Size and shape:** 265 files, ~368,800 words — 235 Microsoft Learn unit captures (30 modules
  in 4 learning paths plus modules reached directly), 26 "AI-103 – Episode N" video transcripts
  (one per module topic), the Study Cram (SRC-1), the official study guide (SRC-191), the course
  page (SRC-27) and the course preview (SRC-28). `wiki/corpus-map.md` shows the structure.
- **Two Learn capture formats.** Most units are full-page captures (~250 lines; teaching content
  sits between the unit list and "Next unit:"); a few are compact captures (27–100 lines). The
  registry records the content range for both. Learn units average ~350 words of real content.
- **Generic unit titles.** 88 files are titled only *Introduction* (30), *Summary* (29),
  *Module assessment* (20) or *Knowledge check* (9); their module comes from the unit header or
  URL. Source pages must carry the module in title and slug.
- **Exercises are thin.** Exercise units (~50–100 words) only launch a hands-on lab hosted
  elsewhere; the lab steps are not in the corpus. They get `stub` or `partial` pages.
- **Episodes** are auto-captioned, hard-wrapped at a few words per line, with speaker labels in
  capitals (e.g. `ROB FOULKROD:`); expect mis-heard product names.
- **SRC-1 (Study Cram)** is one 15,700-word line of unpunctuated auto-captions: cite it with
  verbatim anchors only.
- **Naming drift is real evidence, not noise.** Examples: Learn URL slugs still say
  `orchestrate-semantic-kernel-multi-agent-solution` while the content teaches Microsoft Agent
  Framework (SRC-231 L1); pages mix *Azure AI Foundry* / *Microsoft Foundry*, *Azure AI services*
  / *Foundry Tools*. Record renames on the entity page (`## Naming and currency`) and in
  [[naming-and-currency]]; never silently modernise a source's terms (`CLAUDE.md` §35).
- **Objective coverage.** Several official objectives are only named in the study guide (e.g.
  CI/CD integration, private networking, drift, inpainting, pro mode, custom speech models);
  `app/src/data/objectives.ts` records the same gaps. The wiki states them on [[corpus-gaps]]
  rather than filling them from general knowledge.

## 11. Graph layers

- `graphify-out/` — graph of the **raw sources** only (semantic extraction; EXTRACTED /
  INFERRED / AMBIGUOUS edges). Built with `/graphify .` from the repo root; `.graphifyignore`
  admits only `corpus/`. Query it with `graphify query "…"` from the repo root.
- `graphify-out-wiki/` — graph of the **wiki**, built deterministically from wikilinks by
  `scripts/build_wiki_graph.py` (every edge EXTRACTED, zero LLM cost). Navigation pages are
  excluded so hubs reflect ideas, not filing.
- The graph is a navigation aid, never evidence. Cite raw SRC-IDs.
- **Cross-document entity resolution.** graphify's per-document extraction mints file-scoped
  node IDs, so the same product or idea extracted from two documents stays two nodes and
  communities collapse to one-per-module. After extraction (Part C) and before the build,
  `scripts/raw_graph_entity_resolution.py` merges the groups recorded in
  `graphify-out/entity-resolution.json` (exact normalised-label matches plus an LLM same-referent
  review; merged members are kept on each survivor as `merged_from`). Re-run it after any full
  rebuild; after an incremental update, extend the groups for the new documents.

## 12. The improvement loop

The wiki is maintained by a Karpathy-style generation–verification loop defined in
`program.md`. In short: the **generator** (any agent writing wiki pages) may edit only `wiki/`;
the **verifier** (`scripts/lint_wiki.py`, `scripts/loop_score.py`, the registries in
`scripts/data/`, and the judgement rubric `loop/rubric.md`) is hash-locked in
`loop/verifier.lock` and never edited by the generator; **memory** is `loop/experiments.md` and
`loop/scores.jsonl`; the **ratchet** keeps a cycle only if the score does not regress. A separate
read-only reviewer samples pages against the rubric each cycle.

## 13. Schema change policy

Change this file only to solve an observed problem. Record every change as a `schema` entry in
`wiki/log.md` with the problem it solves. Changing the verifier is a human decision: re-lock it
with `python scripts/loop_score.py --lock` and log why.
