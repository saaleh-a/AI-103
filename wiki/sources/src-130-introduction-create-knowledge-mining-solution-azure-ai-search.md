---
title: "Introduction — Create a knowledge mining solution with Azure AI Search"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Introduces the Azure AI Search module: connect data sources, create indexes, enrich with AI skills, query, filter, and persist enriched data."
area: retrieval
source_ids: [SRC-130]
objectives: []
tags: [azure-ai-search, knowledge-mining, indexing, ai-enrichment]
aliases: ["SRC-130"]
source_kind: learn-unit
module: "Create a knowledge mining solution with Azure AI Search"
learning_path: "Extract insights from visual data on Azure"
unit: "1 of 9"
presenters: []
raw_file: "130-Introduction - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/ai-knowldge-mining/1-introduction"
ingest_depth: full
---
# Introduction — Create a knowledge mining solution with Azure AI Search
*learn-unit · Create a knowledge mining solution with Azure AI Search · unit 1 of 9 · SRC-130*

## Source metadata
| Field | Value |
|---|---|
| Source ID | SRC-130 |
| Raw file | 130-Introduction - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Extract insights from visual data on Azure |
| Module | Create a knowledge mining solution with Azure AI Search |
| Unit / episode | 1 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/ai-knowldge-mining/1-introduction |
| Teaching content | L212–220 of 250 |
| Content length | ~208 words |
| Capture quality | High |
| Ingest depth | full |

## TL;DR
Azure AI Search is introduced as a cloud service for extracting, enriching, and exploring information across many data sources. (SRC-130 L216) The module promises a progression from data sources and indexes, through AI enrichment, to full-text querying and knowledge-store persistence. (SRC-130 L217–218)

## Key claims
- Azure AI Search can extract, enrich, and explore information from a wide variety of data sources. (SRC-130 L216)
- The module teaches data-source connections, index creation, the indexing process, and AI skills for language detection, key phrase extraction, and image analysis. (SRC-130 L217)
- The module also teaches querying and filtering with full-text search, then persisting enriched data in a knowledge store. (SRC-130 L218)
- The text version may contain greater detail than the video and can supplement the video format. (SRC-130 L220)

## How it works
This unit is an orientation rather than a procedure: it frames the module as a pipeline that starts with connecting to data sources and creating indexes, adds AI skills for enrichment, then supports querying, filtering, and knowledge-store persistence. (SRC-130 L217–218)

## Code and API patterns
Not covered by this source.

## Key terms
- Azure AI Search: a cloud-based service used here to extract, enrich, and explore information from varied data sources. (SRC-130 L216)
- AI skills: enrichments such as language detection, key phrase extraction, and image analysis. (SRC-130 L217)
- Knowledge store: the place where enriched data can be persisted for analysis and integration. (SRC-130 L218)

## Decision boundaries and exam cues
- **Inference:** This source points to Azure AI Search when a scenario asks for indexing plus enrichment plus full-text retrieval over varied data sources. (SRC-130 L216–218)
- **Inference:** A scenario that asks only to store enriched outputs for later integration is likely testing the knowledge-store part of the same pipeline rather than simple search alone. (SRC-130 L218)

## Assessment items
Not covered by this source.

## Tensions, caveats and currency
- The URL path spells `knowldge`, but the displayed module title uses knowledge mining; preserve the captured URL as source metadata. (SRC-130 L216)
- The source explicitly says the text tab may contain more detail than the video, so the capture format can affect depth. (SRC-130 L220)

## Relation to other sources
- [[src-261-what-is-azure-ai-search]] expands the overview into Azure AI Search applications such as enterprise search, RAG, and knowledge mining. (SRC-130 L216–218; SRC-261 L224–228)
- [[src-92-extract-data-indexer]] provides the indexer mechanics that this introduction previews. (SRC-130 L217; SRC-92 L218–221)
- [[src-181-persist-extracted-information-knowledge-store]] details the knowledge-store persistence introduced here. (SRC-130 L218; SRC-181 L218–222)

## Connections
- [[azure-ai-search]] — Core service introduced by the unit. (SRC-130 L216)
- [[knowledge-mining]] — Module scenario for indexing, enriching, querying, and persisting information. (SRC-130 L216–218)
- [[search-indexes]] — Index creation is a promised module concept. (SRC-130 L217)
- [[ai-enrichment-skillsets]] — AI skills are introduced as enrichment mechanisms. (SRC-130 L217)
- [[knowledge-store]] — Persistence target previewed by the introduction. (SRC-130 L218)
- *Module units:* [[src-261-what-is-azure-ai-search|2 What is Azure AI Search-]] · [[src-92-extract-data-indexer|3 Extract data with an indexer]] · [[src-52-enrich-extracted-data-ai-skills|4 Enrich extracted data with AI skills]] · [[src-187-search-index|5 Search an index]] · [[src-181-persist-extracted-information-knowledge-store|6 Persist extracted information in a knowledge store]] · [[src-64-exercise-create-knowledge-mining-solution|7 Exercise - Create a knowledge mining solution]] · [[src-176-module-assessment-create-knowledge-mining-solution-azure-ai-search|8 Module assessment]] · [[src-215-summary-create-knowledge-mining-solution-azure-ai-search|9 Summary]] · [[src-33-create-knowledge-mining-solution-azure-ai-search-episode-26|episode 26]]

## Open questions
- The introduction does not define the index schema attributes or query syntax that later units cover. (SRC-130 L217–218)

## Sources
- SRC-130 — raw file: [[130-Introduction - Training - Microsoft Learn]]
