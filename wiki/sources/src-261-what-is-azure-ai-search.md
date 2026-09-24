---
title: "What is Azure AI Search-"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Defines Azure AI Search as cloud indexing and querying infrastructure for structured, semi-structured, and unstructured sources."
area: retrieval
source_ids: [SRC-261]
objectives: [I01, I02, I03, G02, P03]
tags: [azure-ai-search, rag, knowledge-mining, enterprise-search]
aliases: ["SRC-261"]
source_kind: learn-unit
module: "Create a knowledge mining solution with Azure AI Search"
learning_path: "Extract insights from visual data on Azure"
unit: "2 of 9"
presenters: []
raw_file: "261-What is Azure AI Search- - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/ai-knowldge-mining/2-azure-ai-search"
ingest_depth: full
---
# What is Azure AI Search-
*learn-unit · Create a knowledge mining solution with Azure AI Search · unit 2 of 9 · SRC-261*

## Source metadata
| Field | Value |
|---|---|
| Source ID | SRC-261 |
| Raw file | 261-What is Azure AI Search- - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Extract insights from visual data on Azure |
| Module | Create a knowledge mining solution with Azure AI Search |
| Unit / episode | 2 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/ai-knowldge-mining/2-azure-ai-search |
| Teaching content | L212–228 of 258 |
| Content length | ~230 words |
| Capture quality | High |
| Ingest depth | full |

## TL;DR
Azure AI Search is presented as infrastructure and tooling for indexing and querying many data sources, including structured, semi-structured, and non-structured documents. (SRC-261 L218) The source names three application patterns: enterprise search, RAG grounding with vector-based indexes, and knowledge mining for inferred insights and granular data assets. (SRC-261 L224–228)

## Key claims
- Azure AI Search provides cloud-based indexing and querying across a wide range of data sources. (SRC-261 L218)
- It can index documents and data, enrich index data with AI skills, and store extracted insights in a knowledge store. (SRC-261 L219–222)
- Indexes can include text read or inferred with OCR from images, entities and key phrases from text analytics, and other derived AI-skill information. (SRC-261 L223)
- Applications include enterprise search, RAG prompt grounding through vector-based indexes, and knowledge mining for data analytics. (SRC-261 L224–228)

## How it works
The source treats Azure AI Search as a pipeline-capable search platform: source content becomes indexed data, AI skills add derived insights, and a knowledge store can preserve extracted insights for analysis or integration. (SRC-261 L219–223) The same search infrastructure can serve user-facing enterprise search, generative-AI grounding, or analytical knowledge-mining workloads. (SRC-261 L224–228)

## Code and API patterns
Not covered by this source.

## Key terms
- Index: a search structure containing extracted and AI-enriched insights from source data. (SRC-261 L219–223)
- AI skills: enrichment steps that add derived information such as OCR text, entities, and key phrases. (SRC-261 L221–223)
- Knowledge store: storage for extracted insights used for analysis and integration. (SRC-261 L222)
- RAG: a generative-AI application pattern that can use vector-based indexes for prompt grounding data. (SRC-261 L226)

## Decision boundaries and exam cues
- **Inference:** Choose Azure AI Search when the requirement combines indexing, querying, and enrichment over many document or data-source types. (SRC-261 L218–223)
- **Inference:** If a scenario emphasizes grounding prompts with vector-based indexes, this source places Azure AI Search in the RAG path. (SRC-261 L226)
- **Inference:** If the output is analytics-ready granular data assets from documents, the same service is being used for knowledge mining rather than only end-user search. (SRC-261 L227–228)

## Assessment items
Not covered by this source.

## Tensions, caveats and currency
- The title includes a trailing hyphen in the captured source title; preserve it in frontmatter and heading. (SRC-261 L218)
- The source uses the term Foundry nowhere in this unit, while later units say built-in skills require Foundry Tools access. (SRC-261 L221–223; SRC-52 L220–228)

## Relation to other sources
- [[src-130-introduction-create-knowledge-mining-solution-azure-ai-search]] previews the same pipeline at module level. (SRC-130 L216–218; SRC-261 L219–223)
- [[src-92-extract-data-indexer]] explains how the indexer creates populated indexes. (SRC-261 L219–223; SRC-92 L218–221)
- [[src-33-create-knowledge-mining-solution-azure-ai-search-episode-26]] echoes Azure AI Search as a RAG and knowledge-solution backbone. (SRC-261 L224–228; SRC-33 L11–15)

## Connections
- [[azure-ai-search]] — Service defined by this unit. (SRC-261 L218)
- [[retrieval-augmented-generation]] — RAG is named as an Azure AI Search application. (SRC-261 L226)
- [[embeddings-and-vector-search]] — Vector-based indexes are called out for prompt grounding. (SRC-261 L226)
- [[knowledge-mining]] — Knowledge mining is the module focus. (SRC-261 L227–228)
- [[knowledge-store]] — Storage of extracted insights is a core capability. (SRC-261 L222)

## Open questions
- The source states that vector-based indexes support RAG grounding but does not explain embedding models or vector-query construction. (SRC-261 L226)

## Sources
- SRC-261 — raw file: [[261-What is Azure AI Search- - Training - Microsoft Learn]]
