---
title: "Persist extracted information in a knowledge store"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains why and how Azure AI Search persists enriched data in a knowledge store as object, table, or file projections."
area: retrieval
source_ids: [SRC-181]
objectives: []
tags: [knowledge-store, projections, enriched-data, azure-storage]
aliases: ["SRC-181"]
source_kind: learn-unit
module: "Create a knowledge mining solution with Azure AI Search"
learning_path: "Extract insights from visual data on Azure"
unit: "6 of 9"
presenters: []
raw_file: "181-Persist extracted information in a knowledge store - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/ai-knowldge-mining/6-knowledge-store"
ingest_depth: full
---
# Persist extracted information in a knowledge store
*learn-unit · Create a knowledge mining solution with Azure AI Search · unit 6 of 9 · SRC-181*

## Source metadata
| Field | Value |
|---|---|
| Source ID | SRC-181 |
| Raw file | 181-Persist extracted information in a knowledge store - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Extract insights from visual data on Azure |
| Module | Create a knowledge mining solution with Azure AI Search |
| Unit / episode | 6 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/ai-knowldge-mining/6-knowledge-store |
| Teaching content | L212–224 of 254 |
| Content length | ~217 words |
| Capture quality | High |
| Ingest depth | full |

## TL;DR
The index is the primary indexing output, but enriched data can be valuable outside search. (SRC-181 L218) A knowledge store is defined in the skillset and persists projections of enriched data as JSON objects, tables, or image files when the indexer runs. (SRC-181 L222)

## Key claims
- The enriched data inside an index may be useful for ETL, reporting, and file extraction scenarios. (SRC-181 L218–221)
- Index JSON objects can be exported as JSON files for data orchestration and ETL integration. (SRC-181 L219)
- Index records can be normalized into relational tables for analysis and reporting. (SRC-181 L220)
- Embedded images extracted during indexing can be saved as files. (SRC-181 L221)
- A knowledge store is defined in the skillset and encapsulates the enrichment pipeline. (SRC-181 L222)
- Knowledge-store projections can be JSON objects, tables, or image files that are generated and persisted when the indexer creates or updates an index. (SRC-181 L222)

## How it works
The knowledge store is not the index itself; it is a persistence target for enriched outputs created by the skillset. (SRC-181 L218–222) When the indexer runs the pipeline, it produces projections and persists them into the knowledge store, allowing downstream processes to use objects, relational tables, or files instead of only querying the search index. (SRC-181 L219–222)

## Code and API patterns
Not covered by this source.

## Key terms
- Knowledge store: a skillset-defined store that persists enriched-data projections. (SRC-181 L222)
- Projection: a persisted representation of enriched data, such as JSON objects, tables, or image files. (SRC-181 L222)
- Table projection: the projection kind implied by normalizing index records into a relational schema for analysis and reporting. (SRC-181 L220–222)

## Decision boundaries and exam cues
- **Inference:** Use a knowledge store when enriched data must leave the search index for ETL, reporting, or extracted-file use. (SRC-181 L218–222)
- **Inference:** Choose object projections for JSON, table projections for relational schema, and file projections for extracted images/files. (SRC-181 L219–222)
- **Inference:** If a question asks what produces a relational schema from extracted fields, the captured assessment aligns that with table projection. (SRC-181 L220–222; SRC-176 L225–229)

## Assessment items
Not covered by this source.

## Tensions, caveats and currency
- The source does not name the underlying storage service for the knowledge store; the episode demo describes associating an Azure storage account. (SRC-181 L222; SRC-33 L321–329)

## Relation to other sources
- [[src-52-enrich-extracted-data-ai-skills]] explains the skillset that defines the knowledge store. (SRC-52 L218; SRC-181 L222)
- [[src-176-module-assessment-create-knowledge-mining-solution-azure-ai-search]] includes a projection question about relational schemas. (SRC-181 L220–222; SRC-176 L225–229)
- [[src-33-create-knowledge-mining-solution-azure-ai-search-episode-26]] adds a demo-oriented explanation of storing JSON, table records, and images in a storage account. (SRC-181 L222; SRC-33 L321–344)

## Connections
- [[knowledge-store]] — Primary concept taught by this source. (SRC-181 L218–222)
- [[ai-enrichment-skillsets]] — The store is defined in the skillset. (SRC-181 L222)
- [[knowledge-mining]] — Knowledge mining can persist enriched assets for analysis. (SRC-181 L218–222)
- [[azure-ai-search]] — The service supports the knowledge-store scenarios. (SRC-181 L222)
- *Module units:* [[src-130-introduction-create-knowledge-mining-solution-azure-ai-search|1 Introduction]] · [[src-261-what-is-azure-ai-search|2 What is Azure AI Search-]] · [[src-92-extract-data-indexer|3 Extract data with an indexer]] · [[src-52-enrich-extracted-data-ai-skills|4 Enrich extracted data with AI skills]] · [[src-187-search-index|5 Search an index]] · [[src-64-exercise-create-knowledge-mining-solution|7 Exercise - Create a knowledge mining solution]] · [[src-176-module-assessment-create-knowledge-mining-solution-azure-ai-search|8 Module assessment]] · [[src-215-summary-create-knowledge-mining-solution-azure-ai-search|9 Summary]] · [[src-33-create-knowledge-mining-solution-azure-ai-search-episode-26|episode 26]]

## Open questions
- The source does not specify configuration syntax, storage-account requirements, or projection schemas. (SRC-181 L222)

## Sources
- SRC-181 — raw file: [[181-Persist extracted information in a knowledge store - Training - Microsoft Learn]]
