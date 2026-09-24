---
title: "Enrich extracted data with AI skills"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains Azure AI Search skillsets: built-in Foundry Tools skills and custom skills such as Azure Functions wrappers."
area: retrieval
source_ids: [SRC-52]
objectives: [I03, I04, I06, G09]
tags: [ai-skills, skillsets, foundry-tools, custom-skills, azure-functions]
aliases: ["SRC-52"]
source_kind: learn-unit
module: "Create a knowledge mining solution with Azure AI Search"
learning_path: "Extract insights from visual data on Azure"
unit: "4 of 9"
presenters: []
raw_file: "52-Enrich extracted data with AI skills - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/ai-knowldge-mining/4-ai-skills"
ingest_depth: full
---
# Enrich extracted data with AI skills
*learn-unit · Create a knowledge mining solution with Azure AI Search · unit 4 of 9 · SRC-52*

## Source metadata
| Field | Value |
|---|---|
| Source ID | SRC-52 |
| Raw file | 52-Enrich extracted data with AI skills - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Extract insights from visual data on Azure |
| Module | Create a knowledge mining solution with Azure AI Search |
| Unit / episode | 4 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/ai-knowldge-mining/4-ai-skills |
| Teaching content | L212–232 of 262 |
| Content length | ~348 words |
| Capture quality | High |
| Ingest depth | full |

## TL;DR
An indexer-orchestrated enrichment pipeline uses a skillset of AI skills to create AI-enriched fields. (SRC-52 L218) Built-in skills draw on Foundry Tools such as Azure Vision and Azure Language, while custom skills can run custom logic such as an Azure Function wrapping Azure Document Intelligence. (SRC-52 L220–230)

## Key claims
- The indexer applies each skill in order and refines the index document at each step. (SRC-52 L218)
- Built-in skills include Foundry Tools functionality such as Azure Vision and Azure Language. (SRC-52 L220)
- Built-in enrichments named here include language detection, entity extraction, key phrase extraction, translation, PII extraction or removal, text extraction from images, and image captions/tags. (SRC-52 L221–227)
- Built-in skills require access to a Foundry Tools resource: either a restricted included Azure AI Search resource for 20 or fewer documents, or an attached same-region Foundry Tools resource in the subscription. (SRC-52 L228)
- Custom skills perform custom logic on input data and return new field values for the index. (SRC-52 L230)

## How it works
The enrichment pipeline is a sequence: the indexer runs skills in order, and each skill refines the document with new fields. (SRC-52 L218) Built-in skills cover common extraction and transformation tasks over text and images, using Foundry Tools capabilities. (SRC-52 L220–227) If built-ins are insufficient, a custom skill can call custom logic; the source's example wraps an Azure Document Intelligence model in an Azure Function to extract form fields. (SRC-52 L230)

## Code and API patterns
No SDK code is shown, but the source names a custom-skill architecture: an Azure Function can receive index-document data, call an Azure Document Intelligence model, and return field values for incorporation into the index. (SRC-52 L230)

## Key terms
- Skillset: the ordered set of AI skills used by an indexer to create enriched fields. (SRC-52 L218)
- Built-in skills: Azure AI Search skills backed by Foundry Tools functionality such as Azure Vision and Azure Language. (SRC-52 L220)
- Custom skills: custom logic over input data that returns new field values for the index. (SRC-52 L230)
- Foundry Tools resource: the resource the indexer must access to use built-in skills beyond the restricted included option. (SRC-52 L228)

## Decision boundaries and exam cues
- **Inference:** Choose built-in skills when the enrichment is one of the named standard text or image enrichments. (SRC-52 L221–227)
- **Inference:** Choose a custom skill when the enrichment needs custom logic or a service such as Azure Document Intelligence that must be wrapped. (SRC-52 L230)
- **Inference:** If built-in skills fail at scale, verify the indexer has access to an appropriate same-region Foundry Tools resource rather than relying on the restricted included resource. (SRC-52 L228)

## Assessment items
Not covered by this source.

## Tensions, caveats and currency
- **Stale-risk:** The 20-document limit for the restricted included Azure AI Search resource is a captured platform limit and should be rechecked before operational design. (SRC-52 L228)
- The source uses both Azure AI Search and Foundry Tools product names, so naming and service-boundary clarity matter. (SRC-52 L220–228)

## Relation to other sources
- [[src-92-extract-data-indexer]] explains the hierarchical document that these skills refine. (SRC-92 L237–257; SRC-52 L218)
- [[src-181-persist-extracted-information-knowledge-store]] shows that enriched skillset output can also be projected into a knowledge store. (SRC-52 L218; SRC-181 L222)
- [[src-176-module-assessment-create-knowledge-mining-solution-azure-ai-search]] asks which service supports built-in AI skills. (SRC-52 L220–228; SRC-176 L220–224)

## Connections
- [[ai-enrichment-skillsets]] — Primary concept taught by this source. (SRC-52 L218–230)
- [[foundry-tools]] — Built-in skills use Foundry Tools capabilities. (SRC-52 L220–228)
- [[azure-functions]] — Example hosting option for a custom skill. (SRC-52 L230)
- [[azure-document-intelligence]] — Example downstream model used by a custom skill. (SRC-52 L230)
- [[indexers-and-data-sources]] — The indexer orchestrates skill execution. (SRC-52 L218)
- *Module units:* [[src-130-introduction-create-knowledge-mining-solution-azure-ai-search|1 Introduction]] · [[src-261-what-is-azure-ai-search|2 What is Azure AI Search-]] · [[src-92-extract-data-indexer|3 Extract data with an indexer]] · [[src-187-search-index|5 Search an index]] · [[src-181-persist-extracted-information-knowledge-store|6 Persist extracted information in a knowledge store]] · [[src-64-exercise-create-knowledge-mining-solution|7 Exercise - Create a knowledge mining solution]] · [[src-176-module-assessment-create-knowledge-mining-solution-azure-ai-search|8 Module assessment]] · [[src-215-summary-create-knowledge-mining-solution-azure-ai-search|9 Summary]] · [[src-33-create-knowledge-mining-solution-azure-ai-search-episode-26|episode 26]]

## Open questions
- The source does not show the request/response schema for a custom skill endpoint. (SRC-52 L230)

## Sources
- SRC-52 — raw file: [[52-Enrich extracted data with AI skills - Training - Microsoft Learn]]
