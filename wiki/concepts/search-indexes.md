---
title: "Search indexes"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Search indexes are JSON-document collections with configured fields that apps query, filter, facet and sort in Azure AI Search."
area: retrieval
source_ids: [SRC-22, SRC-92, SRC-102, SRC-181, SRC-187, SRC-261]
objectives: [P03, I01]
tags: []
aliases: ["index schema", "index fields", "field attributes", "Azure AI Search index"]
objective_gaps: []
---

# Search indexes

## Summary

A search index is the queryable output of Azure AI Search indexing: a collection of JSON documents whose fields contain extracted and enriched values. Client applications query the index to retrieve, filter, sort, and facet information. (SRC-187 L218–231)

## The problem it solves

Source files, blobs, databases, images, and document text are not automatically searchable in the form a user or app needs. Azure AI Search creates indexes so content and extracted insights can be queried efficiently, including in enterprise search, RAG grounding, and knowledge-mining scenarios. (SRC-261 L218–228; SRC-102 L240–252)

## Mental model

**Synthesis:** Think of the index as the final searchable shelf, not the whole factory. The factory is indexing; the shelf is the structured collection of documents and fields that an application can ask questions against. (SRC-92 L218–221; SRC-187 L218–231)

## What the sources say

- The index contains searchable content and is created and updated by an indexer. (SRC-92 L218–221)
- The searchable result of indexing is a collection of JSON documents with fields containing values extracted during indexing. (SRC-187 L218)
- Azure AI Search indexes can contain insights such as OCR-read text from images, entities, key phrases, and other derived information produced by AI skills. (SRC-261 L221–223)
- In RAG, content is represented in an Azure AI Search index, and vector representations can be generated with an embedding model. (SRC-102 L242–252)
- Foundry IQ can use an existing Azure AI Search index when data from multiple origins has already been processed and indexed. (SRC-22 L16–20)

## How it works in Azure

Each indexed entity becomes a JSON-like document. The indexer builds this document from data-source metadata, directly mapped fields, and skill outputs, then maps the final structure into target index fields. (SRC-92 L223–271)

Each field can be configured with attributes that decide how query and result behavior works: `key`, `searchable`, `filterable`, `sortable`, `facetable`, and `retrievable`. (SRC-187 L220–225)

## Code and configuration

The corpus does not show an index schema JSON or SDK call for creating an index. It does specify configuration concepts: fields are marked with attributes, queries can specify `searchFields` and `select`, filters apply to filterable fields, facets require facetable fields, and sorting uses sortable fields. (SRC-187 L220–268)

## Decision boundaries

| **Inference:** Question | Search index | Indexer | Knowledge store |
|---|---|---|---|
| Primary job | The queryable collection of JSON documents and fields. (SRC-187 L218) | The automation that extracts, enriches, and populates the index. (SRC-92 L218–221) | Persisted projections of enriched data for analysis or integration. (SRC-181 L218–222) |
| Exam clue | Query, filter, sort, facet, select fields, full-text search. (SRC-187 L228–268) | Scheduled extraction/enrichment or document cracking. (SRC-92 L218–221) | JSON objects, tables, files, relational projection, downstream analytics. (SRC-181 L218–222) |

**Inference:** If a scenario asks what users query, it is the index; if it asks what runs to fill it, it is the indexer; if it asks where enriched outputs are saved for ETL/reporting, it is the knowledge store. (SRC-187 L218–231; SRC-92 L218–221; SRC-181 L218–222)

## Failure modes and misconceptions

- Treating every extracted value as automatically searchable is unsafe: field attributes determine whether fields can be searched, filtered, sorted, faceted, or returned. (SRC-187 L220–225)
- Confusing source documents with indexed documents hides the transformation step: the index document is constructed during indexing from metadata, source values, image extraction, and skills. (SRC-92 L223–271)
- Assuming vector search is the only RAG path misses the corpus's broader list: Azure AI Search supports keyword, semantic, vector, and hybrid search, with hybrid recommended for generative AI applications. (SRC-102 L246–250)

## Solution Engineering transfer

**Inference:** A useful discovery question is: *Do you already have a curated Azure AI Search index with fields, filters, facets, scoring, or semantic ranking that agents or apps should reuse?* This follows from the corpus's guidance that existing Azure AI Search indexes are valuable when the organization has already processed and indexed data and needs sophisticated search capabilities. (SRC-22 L16–20)

## Connections

- [[azure-ai-search]] — owns and serves indexes. (SRC-261 L218–223)
- [[indexers-and-data-sources]] — indexers create and update indexes from source data. (SRC-92 L218–221)
- [[search-queries]] — queries consume fields and field attributes. (SRC-187 L228–268)
- [[embeddings-and-vector-search]] — RAG indexes can include vector representations. (SRC-102 L242–250)
- Semantic ranking — existing Azure AI Search indexes may use semantic ranking in Foundry IQ. (SRC-22 L16–20)
- [[src-187-search-index]] — field attributes and query behavior.
- [[src-92-extract-data-indexer]] — document construction and field mapping.
- *Also linked from:* [[ai-enrichment-skillsets]] · [[knowledge-mining]] · [[knowledge-store]] · [[overview]]

## Sources

- SRC-22 — [[src-22-configure-data-sources-knowledge-bases]] — existing indexes as Foundry IQ sources.
- SRC-92 — [[src-92-extract-data-indexer]] — index creation and document construction.
- SRC-102 — [[src-102-ground-model-retrieval-augmented-generation]] — vector indexes for RAG.
- SRC-181 — [[src-181-persist-extracted-information-knowledge-store]] — contrast with knowledge store.
- SRC-187 — [[src-187-search-index]] — index fields and query behavior.
- SRC-261 — [[src-261-what-is-azure-ai-search]] — index contents and applications.

## Open questions

- The corpus does not show a complete index schema or analyzer configuration example. (SRC-187 L218–268)
