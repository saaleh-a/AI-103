---
title: "Knowledge mining"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Knowledge mining uses Azure AI Search to ingest, enrich, index, optionally persist and query data for insight and analytics."
area: retrieval
source_ids: [SRC-33, SRC-52, SRC-92, SRC-102, SRC-130, SRC-181, SRC-187, SRC-215, SRC-261]
objectives: [P03, I01, I03, I04, I06]
tags: []
aliases: ["knowledge mining solution", "intelligent search solution"]
objective_gaps: []
---

# Knowledge mining

## Summary

Knowledge mining is the end-to-end Azure AI Search pattern for extracting, enriching, indexing, searching, and optionally persisting insights from structured, semi-structured, and unstructured data. (SRC-261 L218–228; SRC-130 L216–218; SRC-215 L218–219)

## The problem it solves

Organizations often have knowledge trapped in documents, images, blobs, databases, and other stores. Knowledge mining uses indexing and enrichment to infer insights and extract granular data assets from documents so they can support search, analytics, and integration. (SRC-261 L218–228; SRC-181 L218–222)

## Mental model

**Synthesis:** Knowledge mining is not one component. It is a pipeline:

1. Connect to source data. (SRC-92 L219)
2. Use an indexer to crack documents and build hierarchical JSON-like documents. (SRC-92 L220–223)
3. Use skills to enrich content. (SRC-52 L218–232)
4. Map fields into an index for search. (SRC-92 L269–271; SRC-187 L218–231)
5. Optionally persist enriched projections in a knowledge store for analytics or integration. (SRC-181 L218–222)

## What the sources say

- The module introduction defines Azure AI Search as a service for extracting, enriching, and exploring information from many data sources, and says the module teaches intelligent search and knowledge mining solutions. (SRC-130 L216)
- The service overview says Azure AI Search supports knowledge mining by using indexing to infer insights and extract granular data assets from documents for data analytics. (SRC-261 L224–228)
- The indexer unit describes the data-source and indexer mechanics at the heart of the solution. (SRC-92 L218–271)
- The enrichment unit supplies the built-in and custom skills that create additional fields during indexing. (SRC-52 L218–232)
- The knowledge-store unit supplies the persistence step for enriched projections. (SRC-181 L218–222)
- The module summary says the module covered indexing and enriching data from various sources, using AI skills, and persisting enriched data in a knowledge store. (SRC-215 L218–219)
- The episode transcript presents the same solution shape as a demo: create a knowledge mining solution with Azure AI Search, enrich with AI, and explore the knowledge store. (SRC-33 L19–25)

## How it works in Azure

The Azure service is [[azure-ai-search]]. The pipeline begins with a [[indexers-and-data-sources|data source and indexer]], which extracts fields and applies document cracking. (SRC-92 L218–221) The [[ai-enrichment-skillsets|skillset]] refines the document with built-in or custom AI skills. (SRC-52 L218–232) The result is a populated [[search-indexes|index]] that can be queried, filtered, sorted, and faceted. (SRC-187 L218–268) If enriched outputs are valuable outside search, a [[knowledge-store]] persists projections for analysis or integration. (SRC-181 L218–222)

## Code and configuration

The corpus is concept-heavy and portal/demo-oriented rather than SDK-heavy for knowledge mining. It names the design objects and configuration concerns: data source, indexer, index definition and field attributes, enrichment skillset, built-in or custom skills, field mappings, and knowledge-store projections. (SRC-92 L218–271; SRC-52 L218–232; SRC-187 L220–268; SRC-181 L218–222)

## Decision boundaries

| **Inference:** Pattern | Use when | Not the same as |
|---|---|---|
| Knowledge mining | You need an end-to-end pipeline to infer insights, extract granular assets, search them, or use them for analytics. (SRC-261 L224–228) | A single search query or a single index schema. |
| Enterprise search | Users need to find information in websites or applications. (SRC-261 L224–225) | Knowledge-store analytics over enriched projections. |
| RAG with Azure AI Search | A generative app needs retrieved grounding data from an index. (SRC-102 L240–256) | Knowledge mining's broader ETL/analytics-style extraction path. |
| Knowledge store | Enriched data must be persisted as JSON objects, tables, or files. (SRC-181 L218–222) | Querying the search index. (SRC-187 L218–231) |

**Inference:** Exam scenarios about ingestion, OCR, entity extraction, field mapping, and projections are usually testing the knowledge-mining pipeline; scenarios about a chat answer grounded in relevant chunks are usually testing RAG retrieval, though Azure AI Search can support both. (SRC-261 L224–228; SRC-102 L240–256)

## Failure modes and misconceptions

- Reducing knowledge mining to search misses enrichment and persistence. The module explicitly includes AI skills and knowledge stores. (SRC-130 L216–218; SRC-215 L218–219)
- Reducing it to RAG misses analytics/integration outputs such as JSON objects, tables, and image files. (SRC-181 L218–222)
- Treating document cracking, OCR, enrichment, mapping, indexing, and knowledge-store projection as interchangeable hides where failures occur. (SRC-92 L218–271; SRC-52 L218–232; SRC-181 L218–222)

## Solution Engineering transfer

**Inference:** Customer signal: *We have documents/images/files and need searchable insights plus reporting or downstream integration.* Discovery should separate: source location, content type, extracted fields, enrichment needs, search UX, and whether outputs must be persisted outside the search index. (SRC-92 L219–271; SRC-52 L220–232; SRC-181 L218–222)

## Connections

- [[azure-ai-search]] — service foundation for the pattern. (SRC-261 L218–228)
- [[indexers-and-data-sources]] — ingestion and document cracking. (SRC-92 L218–221)
- [[ai-enrichment-skillsets]] — enrichment with built-in and custom skills. (SRC-52 L218–232)
- [[search-indexes]] — queryable output. (SRC-187 L218–231)
- [[knowledge-store]] — persisted enriched projections. (SRC-181 L218–222)
- [[retrieval-augmented-generation]] — adjacent use of Azure AI Search indexes for grounding. (SRC-102 L240–256)
- [[extraction-options-compared]] — compare AI Search enrichment with other extraction services.
- [[src-130-introduction-create-knowledge-mining-solution-azure-ai-search]] — module framing.
- [[src-215-summary-create-knowledge-mining-solution-azure-ai-search]] — module summary.
- *Also linked from:* [[search-queries]]

## Sources

- SRC-33 — [[src-33-create-knowledge-mining-solution-azure-ai-search-episode-26]] — episode walkthrough framing.
- SRC-52 — [[src-52-enrich-extracted-data-ai-skills]] — skillset and enrichment details.
- SRC-92 — [[src-92-extract-data-indexer]] — indexer and mapping mechanics.
- SRC-102 — [[src-102-ground-model-retrieval-augmented-generation]] — RAG contrast.
- SRC-130 — [[src-130-introduction-create-knowledge-mining-solution-azure-ai-search]] — knowledge-mining module introduction.
- SRC-181 — [[src-181-persist-extracted-information-knowledge-store]] — knowledge-store persistence.
- SRC-187 — [[src-187-search-index]] — searchable index behavior.
- SRC-215 — [[src-215-summary-create-knowledge-mining-solution-azure-ai-search]] — module summary.
- SRC-261 — [[src-261-what-is-azure-ai-search]] — service overview and applications.

## Open questions

- The corpus does not provide a complete deployable knowledge-mining configuration or SDK implementation. (SRC-52 L218–232; SRC-92 L218–271; SRC-181 L218–222)
