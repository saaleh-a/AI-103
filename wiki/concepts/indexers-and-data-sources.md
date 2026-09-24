---
title: "Indexers and data sources"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Indexers start from source data, crack documents, run enrichment and map the final structure into an Azure AI Search index."
area: retrieval
source_ids: [SRC-52, SRC-92, SRC-130, SRC-176, SRC-181, SRC-215, SRC-261]
objectives: [P03, I01, I03]
tags: []
aliases: ["indexer", "document cracking", "field mappings", "data source"]
objective_gaps: []
---

# Indexers and data sources

## Summary

An indexer is the Azure AI Search component that starts with a data source, extracts and enriches content through a pipeline, and maps the resulting fields into a search index. (SRC-92 L218–221; SRC-92 L269–271)

## The problem it solves

A search index needs structured fields, but original content can live in blobs, databases, documents, images, or another store. The data source names where the original artifacts live; the indexer automates extraction and population so the index can be queried. (SRC-92 L218–221)

## Mental model

The data source is the raw-material bin. The indexer is the scheduled factory job. Document cracking and skills transform raw files into a hierarchical JSON-like document. Field mappings decide which final values land in the index. (SRC-92 L219–223; SRC-92 L269–271)

## What the sources say

- The module introduction says Azure AI Search starts by connecting to data sources and creating indexes, then explains the indexing process and AI enrichment. (SRC-130 L216–218)
- The indexer unit says an index contains searchable content and is created and updated by an indexer. (SRC-92 L218)
- Indexing starts with a data source, described as the storage location of original artifacts such as an Azure blob container, database, or another store. (SRC-92 L219)
- The indexer automates extraction and indexing through an enrichment pipeline, applies document cracking, and incrementally creates a hierarchical JSON-based document with fields required by the index definition. (SRC-92 L220)
- The module assessment asks which component is scheduled to extract and enrich data to populate an index, reinforcing the exam boundary around the indexer. (SRC-176 L216)
- The module summary says learners explored indexing, AI skills for enrichment, and knowledge-store persistence. (SRC-215 L218–219)

## How it works in Azure

The indexer builds one document for each indexed entity. The document starts with metadata and fields mapped directly from source data. (SRC-92 L223–227) If source documents contain images, the indexer can extract image data into a `normalized_images` collection so image data can become input to skills. (SRC-92 L228–236)

Skills add fields to the document, and later skills can consume fields generated earlier in the pipeline. For example, a merge skill can combine original text with text extracted from images into a `merged_content` field. (SRC-92 L237–257)

At the end, the indexer maps the final document into index fields. Direct source fields can map implicitly by name or explicitly for renaming or functions; skill outputs must be explicitly mapped from their hierarchical output location to a target field. (SRC-92 L269–271)

## Code and configuration

The corpus does not show a complete portal or SDK definition for a data source or indexer. It does name the configuration mechanisms that matter for AI-103 reasoning: data-source connection, image extraction to `normalized_images`, skill context in a document hierarchy, implicit or explicit field mappings for directly extracted fields, and explicit output-field mappings for skill outputs. (SRC-92 L219–271)

## Decision boundaries

| **Inference:** Confusable item | Deciding detail |
|---|---|
| Indexer vs index | The indexer creates and updates; the index is populated and queried. (SRC-92 L218–221) |
| Data source vs index | The data source stores original artifacts; the index stores searchable extracted fields. (SRC-92 L219–221) |
| Direct field mapping vs skill output mapping | Direct source fields can map implicitly or explicitly; skill outputs are explicitly mapped from their hierarchical output location. (SRC-92 L269–271) |
| Indexer vs skillset | The indexer orchestrates the pipeline; the skillset supplies AI skills applied inside it. (SRC-52 L218–220) |

**Inference:** If a scenario says a process is scheduled to extract and enrich data to populate an index, choose indexer rather than index, data source, or knowledge store. (SRC-176 L216; SRC-92 L218–221)

## Failure modes and misconceptions

- Assuming source files map flatly into index fields misses the hierarchy: indexing builds JSON-like documents that may include metadata, normalized images, skill outputs, and merged fields. (SRC-92 L223–257)
- Assuming skill outputs automatically appear in the index misses the explicit mapping requirement for skill output fields. (SRC-92 L269–271)
- Treating an indexer as only extraction misses enrichment: the source explicitly says the indexer automates extraction and indexing through an enrichment pipeline. (SRC-92 L220)

## Solution Engineering transfer

**Inference:** Ask customers where the original artifacts live, how often they change, and what fields must be queryable. Those answers determine the data-source connection, indexer schedule, document cracking/enrichment needs, and field mappings. (SRC-92 L219–271)

## Connections

- [[azure-ai-search]] — service that owns indexing and querying. (SRC-261 L218–223)
- [[search-indexes]] — indexers create and update indexes. (SRC-92 L218–221)
- [[ai-enrichment-skillsets]] — skillsets enrich the hierarchical document during indexing. (SRC-52 L218–220)
- [[knowledge-store]] — the same pipeline can also persist projections. (SRC-181 L218–222)
- [[knowledge-mining]] — ingestion and indexing are the first operational steps. (SRC-130 L216–218)
- [[src-92-extract-data-indexer]] — primary source for indexer mechanics.
- *Also linked from:* [[overview]]

## Sources

- SRC-52 — [[src-52-enrich-extracted-data-ai-skills]] — skillset boundary.
- SRC-92 — [[src-92-extract-data-indexer]] — data sources, document cracking, field mapping.
- SRC-130 — [[src-130-introduction-create-knowledge-mining-solution-azure-ai-search]] — module pipeline framing.
- SRC-176 — [[src-176-module-assessment-create-knowledge-mining-solution-azure-ai-search]] — assessment cue for indexers.
- SRC-181 — [[src-181-persist-extracted-information-knowledge-store]] — knowledge-store boundary.
- SRC-215 — [[src-215-summary-create-knowledge-mining-solution-azure-ai-search]] — module summary.
- SRC-261 — [[src-261-what-is-azure-ai-search]] — service context.

## Open questions

- The corpus does not include scheduling syntax, indexer JSON, or SDK calls for creating an indexer. (SRC-92 L218–271)
