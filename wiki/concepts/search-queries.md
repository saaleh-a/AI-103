---
title: "Search queries"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "How Azure AI Search queries use Lucene syntax, searchable/filterable/sortable/facetable fields, facets, filters, select, and scoring."
area: retrieval
source_ids: [SRC-187, SRC-33]
objectives: [P03]
objective_gaps: []
tags: []
aliases: ["Lucene query syntax", "simple query syntax", "filters", "facets", "OData filter", "orderby", "searchMode"]
---

# Search queries

## Summary

Search queries are how an application turns an Azure AI Search index into answers: the query expression finds matching documents, while field attributes and query parameters control which fields can be searched, filtered, sorted, faceted, and returned. (SRC-187 L217–236)

## The problem it solves

An index is only useful if client applications can retrieve, narrow, and order its JSON documents. The source states that applications query an index to retrieve, filter, and sort information from fields extracted during indexing. (SRC-187 L217–218)

## Mental model

**Inference:** Think of a query as three layers: first, searchable text finds candidate documents; second, filters and facets narrow or present the candidate set; third, scoring and ordering decide which results appear first. (SRC-187 L228–241; SRC-187 L245–264)

## What the sources say

- SRC-187 defines the index as JSON documents with fields, and lists field attributes: `key`, `searchable`, `filterable`, `sortable`, `facetable`, and `retrievable`. (SRC-187 L217–225)
- SRC-187 says full-text search parses text-based document content, uses Lucene query syntax, and supports simple and full variants. (SRC-187 L226–230)
- SRC-187 lists common query parameters: `search`, `queryType`, `searchFields`, `select`, and `searchMode`; `searchMode` `Any` can match either term, while `All` requires all submitted terms. (SRC-187 L232–236)
- SRC-187 breaks query processing into parsing, lexical analysis, document retrieval, and TF/IDF scoring. (SRC-187 L237–241)
- SRC-33 demonstrates the portal/JSON view: selecting all documents, then using `select` to return only title and locations, and searching for `New York` as a keyword. (SRC-33 L524–568)

## How it works in Azure

Fields must be configured for the operations the app expects: a field cannot support filtering unless it is `filterable`, sorting unless it is `sortable`, or facets unless it is `facetable`. (SRC-187 L222–225) The episode reinforces this design-time choice by describing index fields that can be sortable or facetable before later query use. (SRC-33 L640–658)

A query can filter results either by including filter criteria in a simple search expression or by using an OData `$filter` parameter with full syntax; OData filter expressions are case-sensitive. (SRC-187 L245–256)

Facets are returned from facetable fields so a UI can present discrete values for users to select; a later query can use the selected facet value as a filter. (SRC-187 L257–261)

By default, Azure AI Search sorts by relevance score with highest-scoring matches first; apps can override this with an OData `orderby` parameter over sortable fields and an `asc` or `desc` direction. (SRC-187 L263–264)

## Code and configuration

The corpus does not provide a complete SDK query example for Azure AI Search. It does, however, name the query parameters an application submits: `search`, `queryType`, `searchFields`, `select`, and `searchMode`. (SRC-187 L232–236)

**Illustrative:** A minimal request shape from the named parameters is: set `search` to the user terms, `queryType` to `simple` or `full`, `searchFields` to the fields to search, and `select` to the returned fields. This example is derived from the documented parameter list, not quoted code. (SRC-187 L232–236)

## Decision boundaries

- **Simple vs full Lucene:** Use simple syntax for basic literal term searches; use full syntax when the query needs complex filtering, regular expressions, or more sophisticated operations. (SRC-187 L228–230)
- **Filter vs facet:** A filter constrains returned documents; a facet is a UI-friendly set of known field values returned so the user can pick a constraint. (SRC-187 L245–261)
- **Relevance sort vs explicit order:** Default sorting follows relevance score; use `orderby` only when a sortable business field should override relevance. (SRC-187 L263–264)
- **Inference:** In exam scenarios, wording about search boxes and returned fields points to query parameters; wording about left-hand filter panels or category counts points to facets. This is inferred from the corpus's parameter and facet descriptions. (SRC-187 L232–264)

## Failure modes and misconceptions

- Treating every field as queryable is wrong: the index must mark fields with the relevant attribute, such as `searchable`, `filterable`, `sortable`, or `facetable`. (SRC-187 L219–225)
- Confusing `searchMode` with scoring is wrong: `searchMode` controls whether multiple submitted terms are optional or all required, while scoring assigns relevance after retrieval. (SRC-187 L236–241)
- Assuming filters are always case-insensitive is unsafe because the corpus explicitly says OData `$filter` expressions are case-sensitive. (SRC-187 L253–256)

## Solution Engineering transfer

**Inference:** Ask customers which fields users search, which values they filter by, which fields must appear in result cards, and which business field should override relevance. Those answers map directly to `searchable`, `filterable`, `facetable`, `retrievable`, and `sortable` field choices. (SRC-187 L219–225; SRC-187 L232–264)

## Connections

- [[azure-ai-search]] — search queries run against Azure AI Search indexes.
- [[search-indexes]] — field attributes determine what query operations are possible.
- [[knowledge-mining]] — query results are the searchable output of indexing and enrichment.
- [[semantic-ranking]] — semantic ranking changes relevance quality after initial retrieval.
- [[embeddings-and-vector-search]] — vector and hybrid retrieval are neighbouring grounding techniques.
- [[src-187-search-index]] — main Learn unit for querying an index.
- [[src-33-create-knowledge-mining-solution-azure-ai-search-episode-26]] — episode demo of JSON search and `select`.
- *Also linked from:* [[knowledge-bases-and-sources]] · [[overview]]

## Sources

- SRC-187 — [[src-187-search-index]] — Azure AI Search index querying, Lucene syntax, filters, facets, sorting.
- SRC-33 — [[src-33-create-knowledge-mining-solution-azure-ai-search-episode-26]] — portal demo of JSON search and index field attributes.

## Open questions

- The corpus does not provide complete REST or SDK request bodies for query execution.
