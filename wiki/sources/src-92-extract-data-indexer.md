---
title: "Extract data with an indexer"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains how an Azure AI Search indexer extracts source data, runs enrichment, builds hierarchical JSON documents, and maps fields into an index."
area: retrieval
source_ids: [SRC-92]
objectives: [I01, P03]
tags: [indexer, data-sources, document-cracking, field-mapping, azure-ai-search]
aliases: ["SRC-92"]
source_kind: learn-unit
module: "Create a knowledge mining solution with Azure AI Search"
learning_path: "Extract insights from visual data on Azure"
unit: "3 of 9"
presenters: []
raw_file: "92-Extract data with an indexer - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/ai-knowldge-mining/3-index"
ingest_depth: full
---
# Extract data with an indexer
*learn-unit · Create a knowledge mining solution with Azure AI Search · unit 3 of 9 · SRC-92*

## Source metadata
| Field | Value |
|---|---|
| Source ID | SRC-92 |
| Raw file | 92-Extract data with an indexer - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Extract insights from visual data on Azure |
| Module | Create a knowledge mining solution with Azure AI Search |
| Unit / episode | 3 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/ai-knowldge-mining/3-index |
| Teaching content | L212–271 of 301 |
| Content length | ~605 words |
| Capture quality | High |
| Ingest depth | full |

## TL;DR
This unit makes the indexer the automation layer that extracts source fields, cracks documents, runs enrichment, and populates the Azure AI Search index. (SRC-92 L218–221) The indexer builds a hierarchical JSON document, lets skill outputs feed later skills, and maps both directly extracted fields and skill outputs into final index fields. (SRC-92 L223–271)

## Key claims
- An index contains searchable content and is created and updated by an indexer. (SRC-92 L218)
- Indexing starts with a data source such as Azure blob storage, a database, or another store. (SRC-92 L219)
- The indexer automates extraction and indexing through an enrichment pipeline with document cracking and incremental JSON-document construction. (SRC-92 L220)
- Image data can be extracted into a `normalized_images` collection for downstream skills. (SRC-92 L228–236)
- Skill outputs can become inputs for later skills, such as merging original text with OCR text into `merged_content`. (SRC-92 L246–257)
- Direct source fields can map implicitly or explicitly to index fields, while skill outputs are explicitly mapped from their hierarchical locations. (SRC-92 L269–271)

## How it works
The pipeline starts from a data source and creates one document per indexed entity. (SRC-92 L219; SRC-92 L223) The document first contains fields mapped from source data, such as `metadata_storage_name`, `metadata_author`, and `content`. (SRC-92 L223–227) If source documents contain images, the indexer can normalize images into a collection so image skills can consume them. (SRC-92 L228–236) Each skill adds fields to the same hierarchical document, and skills run in a specific document context so an OCR skill can run once per normalized image. (SRC-92 L237–246) Later skills can consume earlier skill outputs, and the final structure is mapped into index fields. (SRC-92 L257–271)

## Code and API patterns
The source shows document-shape patterns rather than SDK code. (SRC-92 L223–268)

`language` can be added by a language-detection skill. (SRC-92 L237–245)
```text
document
metadata_storage_name
metadata_author
content
normalized_images
image0
image1
language
```

`merged_content` can combine original text with OCR text extracted from images. (SRC-92 L257–268)
```text
document
metadata_storage_name
metadata_author
content
normalized_images
image0
Text
image1
Text
language
merged_content
```

## Key terms
- Data source: the storage location of original artifacts, such as blob storage, a database, or another store. (SRC-92 L219)
- Indexer: the automation component that extracts, cracks, enriches, maps, and populates an index. (SRC-92 L218–221)
- Document cracking: extraction of contents from source documents during indexing. (SRC-92 L220)
- `normalized_images`: a collection where extracted image data can be placed for image-processing skills. (SRC-92 L228–236)
- Field mapping: implicit or explicit mapping from source fields, and explicit mapping from skill outputs, into index fields. (SRC-92 L269–271)

## Decision boundaries and exam cues
- **Inference:** If a scenario asks what scheduled component extracts and enriches data to populate an index, the answer is the indexer. (SRC-92 L218–221)
- **Inference:** If the question involves OCR over images embedded in documents, look for normalized image extraction feeding image skills. (SRC-92 L228–246)
- **Inference:** If enriched output fields are not in the final index, inspect explicit mappings from skill-output hierarchy to target index fields. (SRC-92 L269–271)

## Assessment items
Not covered by this source.

## Tensions, caveats and currency
- The line says an index is created and updated by an indexer; it does not discuss manual or API-based index population alternatives. (SRC-92 L218)
- The source uses `Indexer` with an initial capital in one sentence and lower-case indexer elsewhere. (SRC-92 L220)

## Relation to other sources
- [[src-261-what-is-azure-ai-search]] introduces indexing, enrichment, and knowledge-store storage at a service level. (SRC-261 L219–223; SRC-92 L218–221)
- [[src-52-enrich-extracted-data-ai-skills]] continues from this unit into built-in and custom skillsets. (SRC-92 L237–257; SRC-52 L218–230)
- [[src-187-search-index]] treats the populated index as the queryable result of this indexing process. (SRC-92 L221; SRC-187 L218)

## Connections
- [[indexers-and-data-sources]] — Main mechanism taught by this source. (SRC-92 L218–220)
- [[search-indexes]] — The index is the indexer's target output. (SRC-92 L218–221)
- [[ai-enrichment-skillsets]] — Skills add and transform fields during indexing. (SRC-92 L237–257)
- [[azure-ai-search]] — Service context for indexers and indexes. (SRC-92 L218–221)
- [[knowledge-mining]] — Indexing pipeline is the core ingest step. (SRC-92 L218–271)
- *Module units:* [[src-130-introduction-create-knowledge-mining-solution-azure-ai-search|1 Introduction]] · [[src-261-what-is-azure-ai-search|2 What is Azure AI Search-]] · [[src-52-enrich-extracted-data-ai-skills|4 Enrich extracted data with AI skills]] · [[src-187-search-index|5 Search an index]] · [[src-181-persist-extracted-information-knowledge-store|6 Persist extracted information in a knowledge store]] · [[src-64-exercise-create-knowledge-mining-solution|7 Exercise - Create a knowledge mining solution]] · [[src-176-module-assessment-create-knowledge-mining-solution-azure-ai-search|8 Module assessment]] · [[src-215-summary-create-knowledge-mining-solution-azure-ai-search|9 Summary]] · [[src-33-create-knowledge-mining-solution-azure-ai-search-episode-26|episode 26]]

## Open questions
- The source does not show actual Azure portal or SDK configuration for data sources, indexers, or field mappings. (SRC-92 L218–271)

## Sources
- SRC-92 — raw file: [[92-Extract data with an indexer - Training - Microsoft Learn]]
