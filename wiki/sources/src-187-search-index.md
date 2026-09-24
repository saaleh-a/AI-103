---
title: "Search an index"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains index field attributes, Lucene full-text search, query processing, filters, facets, and sorting in Azure AI Search."
area: retrieval
source_ids: [SRC-187]
objectives: [I02, P03, P11]
tags: [search-indexes, query-syntax, lucene, filters, facets, sorting]
aliases: ["SRC-187"]
source_kind: learn-unit
module: "Create a knowledge mining solution with Azure AI Search"
learning_path: "Extract insights from visual data on Azure"
unit: "5 of 9"
presenters: []
raw_file: "187-Search an index - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/ai-knowldge-mining/5-search-index"
ingest_depth: full
---
# Search an index
*learn-unit · Create a knowledge mining solution with Azure AI Search · unit 5 of 9 · SRC-187*

## Source metadata
| Field | Value |
|---|---|
| Source ID | SRC-187 |
| Raw file | 187-Search an index - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Extract insights from visual data on Azure |
| Module | Create a knowledge mining solution with Azure AI Search |
| Unit / episode | 5 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/ai-knowldge-mining/5-search-index |
| Teaching content | L212–268 of 298 |
| Content length | ~992 words |
| Capture quality | High, but example query text is not captured after `Copy` markers |
| Ingest depth | full |

## TL;DR
The index is the searchable output of indexing: JSON documents with fields that clients can query, retrieve, filter, and sort. (SRC-187 L218) The unit covers field attributes, Lucene simple and full syntax, query parameters, query processing stages, OData filters, facets, and sorting. (SRC-187 L219–268)

## Key claims
- Index fields can be key, searchable, filterable, sortable, facetable, and retrievable. (SRC-187 L219–225)
- Full-text search parses text-based document contents to find query terms. (SRC-187 L227–228)
- Azure AI Search supports simple Lucene syntax for basic literal-term searches and full Lucene syntax for complex filters, regular expressions, and sophisticated queries. (SRC-187 L228–230)
- Common query parameters include `search`, `queryType`, `searchFields`, `select`, and `searchMode`. (SRC-187 L231–236)
- Query processing has four stages: query parsing, lexical analysis, document retrieval, and scoring. (SRC-187 L237–241)
- Filters can be included in a simple search expression or supplied as an OData `$filter` parameter with full syntax. (SRC-187 L246–249)
- Facets work best when a field has a small number of discrete values that can be shown as UI links or options. (SRC-187 L257–261)

## How it works
Client applications send a search expression and parameters that control evaluation and returned fields. (SRC-187 L231–236) Query parsing reconstructs the expression into subqueries such as term, phrase, and prefix queries. (SRC-187 L237–238) Lexical analysis lowercases text, removes stopwords, roots words, and splits composite words. (SRC-187 L239) Document retrieval finds matches, and scoring ranks them with a TF/IDF relevance calculation. (SRC-187 L240–241) Filters, facets, and explicit ordering then help users narrow or reorder results. (SRC-187 L244–264)

## Code and API patterns
The source names search API parameters but the captured code examples after `Copy` are missing. (SRC-187 L231–268)

Important parameters: `search` contains the expression; `queryType` selects simple or full syntax; `searchFields` narrows searched fields; `select` controls returned fields; `searchMode` controls whether multiple terms require any or all terms. (SRC-187 L231–236)

## Key terms
- Key field: a field that defines a unique key for index records. (SRC-187 L220)
- Searchable field: a field queryable with full-text search. (SRC-187 L221)
- Filterable field: a field allowed in filter expressions. (SRC-187 L222)
- Facetable field: a field that can produce facet values for result filtering UI. (SRC-187 L224)
- Retrievable field: a field that can be included in search results. (SRC-187 L225)
- `searchMode`: a setting where Any allows documents containing either term, while All restricts results to documents containing all terms. (SRC-187 L236)

## Decision boundaries and exam cues
- **Inference:** Use `searchable` for fields users need to full-text query, `filterable` for fields used in constraints, `sortable` for ordering, `facetable` for UI refinement lists, and `retrievable` for returned output. (SRC-187 L219–225)
- **Inference:** Choose full Lucene syntax when the scenario requires complex filtering or regular expressions; choose simple syntax for basic literal term matching. (SRC-187 L228–230)
- **Inference:** If a filter unexpectedly fails, check field filterability and OData case sensitivity. (SRC-187 L249; SRC-187 L255–256)

## Assessment items
Not covered by this source.

## Tensions, caveats and currency
- The source includes `Copy` markers, but the actual query examples are absent from the capture. (SRC-187 L251–266)
- The source says OData `$filter` expressions are case-sensitive, which is an implementation caveat for exam and debugging scenarios. (SRC-187 L255–256)

## Relation to other sources
- [[src-92-extract-data-indexer]] explains how the index becomes populated before it is queried. (SRC-92 L218–221; SRC-187 L218)
- [[src-33-create-knowledge-mining-solution-azure-ai-search-episode-26]] demos JSON view, `select`, and keyword search against a populated index. (SRC-187 L231–236; SRC-33 L524–568)
- [[src-176-module-assessment-create-knowledge-mining-solution-azure-ai-search]] assesses indexer, skills, and projections but not query syntax. (SRC-187 L219–268; SRC-176 L215–229)

## Connections
- [[search-indexes]] — Field attributes define how index content behaves. (SRC-187 L218–225)
- [[search-queries]] — Query syntax, parameters, filtering, faceting, and sorting are the unit's core. (SRC-187 L227–268)
- [[semantic-ranking]] — Related retrieval concept not covered by this source. (SRC-187 L227–241)
- [[azure-ai-search]] — Service that processes the queries. (SRC-187 L218–228)
- [[retrieval-options-compared]] — Useful comparison hub for search patterns. (SRC-187 L227–268)
- *Module units:* [[src-130-introduction-create-knowledge-mining-solution-azure-ai-search|1 Introduction]] · [[src-261-what-is-azure-ai-search|2 What is Azure AI Search-]] · [[src-92-extract-data-indexer|3 Extract data with an indexer]] · [[src-52-enrich-extracted-data-ai-skills|4 Enrich extracted data with AI skills]] · [[src-181-persist-extracted-information-knowledge-store|6 Persist extracted information in a knowledge store]] · [[src-64-exercise-create-knowledge-mining-solution|7 Exercise - Create a knowledge mining solution]] · [[src-176-module-assessment-create-knowledge-mining-solution-azure-ai-search|8 Module assessment]] · [[src-215-summary-create-knowledge-mining-solution-azure-ai-search|9 Summary]] · [[src-33-create-knowledge-mining-solution-azure-ai-search-episode-26|episode 26]]

## Open questions
- The source does not capture concrete request examples after the `Copy` markers. (SRC-187 L251–266)
- The source covers full-text search, but not semantic ranking, vector search, or hybrid search. (SRC-187 L227–268)

## Sources
- SRC-187 — raw file: [[187-Search an index - Training - Microsoft Learn]]
