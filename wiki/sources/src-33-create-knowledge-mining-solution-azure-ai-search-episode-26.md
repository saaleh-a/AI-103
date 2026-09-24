---
title: "Create a knowledge mining solution with Azure AI Search - AI-103 - Episode 26"
type: source
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Episode walkthrough of Azure AI Search for RAG and knowledge mining: indexers, AI skills, field attributes, knowledge stores, and agent grounding."
area: retrieval
source_ids: [SRC-33]
objectives: [I01, I02, I03, I04, I05, G02, G09, P03]
tags: [episode, azure-ai-search, rag, knowledge-mining, foundry-agent, multimodal-rag]
aliases: ["SRC-33"]
source_kind: episode
module: "Create a knowledge mining solution with Azure AI Search"
learning_path: null
unit: null
presenters: ["ROB FOULKROD"]
raw_file: "33-Create a knowledge mining solution with Azure AI Search - AI-103 - Episode 26.md"
url: "https://www.youtube.com/watch?v=3E7ewqSwO8k"
ingest_depth: full
---
# Create a knowledge mining solution with Azure AI Search - AI-103 - Episode 26
*episode · Create a knowledge mining solution with Azure AI Search · SRC-33*

## Source metadata
| Field | Value |
|---|---|
| Source ID | SRC-33 |
| Raw file | 33-Create a knowledge mining solution with Azure AI Search - AI-103 - Episode 26.md |
| Kind | episode |
| Learning path | null |
| Module | Create a knowledge mining solution with Azure AI Search |
| Unit / episode | Episode 26 |
| Presenter(s) | ROB FOULKROD |
| URL | https://www.youtube.com/watch?v=3E7ewqSwO8k |
| Teaching content | L3–928 of 928 |
| Content length | ~4194 words |
| Capture quality | Medium: auto-captioned transcript with repetition and one inaudible marker |
| Ingest depth | full |

## TL;DR
Rob Foulkrod frames Azure AI Search as the backbone for serious RAG and knowledge solutions on Azure. (SRC-33 L11–25) The episode walks through the pipeline: index source documents, enrich them with AI skills, configure searchable/filterable/sortable/facetable/retrievable fields, persist non-text assets in a knowledge store, and make an AI Search-backed knowledge base available to a Foundry agent. (SRC-33 L111–170; SRC-33 L224–344; SRC-33 L577–720)

## Key claims
- Azure AI Search lets a solution break documents apart, find their pieces, and retrieve associated documents; it can index PDFs, text documents, video, and audio for generative AI apps or agentic systems. (SRC-33 L34–51)
- AI skills can translate, summarize, extract named entities, extract PII, extract image text, generate captions/tags, and perform image text vectorization during the ingestion pipeline. (SRC-33 L52–76; SRC-33 L181–203)
- An indexer understands the data source, performs document cracking, and participates in an enrichment pipeline. (SRC-33 L111–130)
- Field configuration controls whether fields are searchable, filterable, sortable, facetable, and retrievable. (SRC-33 L149–166; SRC-33 L235–305)
- A knowledge store can keep references or persisted copies of non-text outputs such as JSON documents, record versions of tables, and extracted images. (SRC-33 L77–104; SRC-33 L306–344)
- The demo uses managed identity access to storage, a Search import wizard, Foundry Tools enrichment, JSON search, RAG import, multimodal RAG import, image verbalization, text vectorization, image export, and a Foundry agent connected to an AI Search knowledge base. (SRC-33 L384–451; SRC-33 L524–720)

## How it works
The episode's conceptual pipeline starts with an indexer, which points to a data source and cracks documents to extract content. (SRC-33 L111–126) The enrichment pipeline then adds AI skills, including language detection, entity and key-phrase extraction, translation, PII extraction, image extraction, image captions/tags, and image text vectorization. (SRC-33 L167–203) Custom enrichment can use an Azure Function that receives one or more records and returns fields for storage in the search service. (SRC-33 L204–223) After enrichment, each field is configured for lookup and result behavior, such as searchable, filterable, sortable, facetable, or retrievable. (SRC-33 L224–305) The knowledge store handles enriched outputs beyond simple text by storing JSON documents, table-like records, and extracted images in storage and keeping them referenced from the original document context. (SRC-33 L306–344)

## Segment guide
- L3–27 — Opening: the presenter frames the problem as finding content after generation, analysis, and extraction, and names Azure AI Search as the backbone for RAG and knowledge solutions. (SRC-33 L3–27)
- L28–110 — Azure AI Search overview: indexing, AI skills, and knowledge stores over sources such as PDFs, text, video, and audio. (SRC-33 L28–110)
- L111–180 — Indexer and field planning: data source, document cracking, enrichment pipeline, fields, sortable/facetable attributes, and Foundry Tools skills. (SRC-33 L111–180)
- L181–223 — Built-in and custom enrichment: language, entities, key phrases, translation, PII, images, vectorization, and Azure Function custom skills. (SRC-33 L181–223)
- L224–344 — Index fields and knowledge store: searchable/filterable/sortable/facetable/retrievable fields and persistence of JSON, tables, and images. (SRC-33 L224–344)
- L345–540 — Portal demo: build an index, configure blob storage, managed identity, enrichments, fields, scheduling, and run JSON search. (SRC-33 L345–540)
- L541–568 — Query demo: `select` limits returned fields and keyword search for New York returns matching documents. (SRC-33 L541–568)
- L569–720 — RAG and agent demo: import for RAG, multimodal RAG, OCR/images, image verbalization, vectorization, image export, knowledge source/base, and Foundry agent setup. (SRC-33 L569–720)
- L721–765 — Agent results: MCP approval is prompted, New York hotel answers come from documents, and image queries find pyramids without text references. (SRC-33 L721–765)
- L766–831 — Knowledge-check recap and session summary: indexer, Foundry Tools, table projection, AI skills, field attributes, and knowledge store. (SRC-33 L766–831)
- L832–928 — Course wrap-up: the presenter places Azure AI Search in Topic 4 and the broader AI-103 course arc. (SRC-33 L832–928)

## Code and API patterns
The episode does not show application code, but it does show portal/API-facing patterns. (SRC-33 L384–720)

- Managed identity can be used for search-service access to blob data reader permissions on the storage account in the demo. (SRC-33 L411–419)
- JSON search view is used to query an index and return six documents from the demo index. (SRC-33 L518–540)
- `select` is compared to a SQL field list for returning only fields such as title and locations. (SRC-33 L543–555)
- The RAG import path uses managed identity, image verbalization by a model, text vectorization through embeddings, and image export to an output storage container. (SRC-33 L610–668)

## Key terms
- Indexer: the import component that points to a data source, performs document cracking, and brings records/fields into AI Search. (SRC-33 L111–130; SRC-33 L790–797)
- AI skills: enrichment steps that add extracted or transformed data during import. (SRC-33 L167–203; SRC-33 L798–813)
- Facetable: a field behavior used for UI-oriented refinement such as color or region selections. (SRC-33 L149–161; SRC-33 L291–299)
- Knowledge store: storage for more than simple text, including JSON documents, table-like records, and images. (SRC-33 L306–344; SRC-33 L822–825)
- Knowledge base: in the demo, a layer over an AI Search knowledge source that a Foundry agent can access. (SRC-33 L684–713)

## Decision boundaries and exam cues
- **Inference:** For extract-and-enrich population of an index, the episode's recap points to the indexer. (SRC-33 L768–776)
- **Inference:** For built-in AI skills in Azure AI Search, the episode's recap points to Foundry Tools. (SRC-33 L777–780)
- **Inference:** For a relational schema from extracted fields, the episode's recap points to table projection. (SRC-33 L781–785)
- **Inference:** For agent grounding over private documents, the demo path uses AI Search import to RAG/knowledge base and connects that knowledge base to a Foundry agent. (SRC-33 L569–720)

## Assessment items
1. Question: Which component of an Azure AI Search solution is scheduled to extract and enrich data to populate an index? Answer shown in transcript: indexer. (SRC-33 L768–776)
2. Question: Which service supports built-in AI skills in Azure AI Search? Answer shown in transcript: Foundry Tools. (SRC-33 L777–780)
3. Question: What kind of projection results in a relational data schema from extracted fields? Answer shown in transcript: table. (SRC-33 L781–785)

## Tensions, caveats and currency
- **Stale-risk:** The demo names portal options such as `RAG`, `Multimodal RAG`, image verbalization, and specific model-picking flows; portal labels and available models can change. (SRC-33 L577–681)
- The transcript is auto-captioned and includes repetition and an inaudible marker, so exact portal wording should be verified before operational instructions are written. (SRC-33 L371–399; SRC-33 L430–433)
- The episode connects Azure AI Search knowledge bases to a Foundry agent and says an MCP prompt appears, which is broader than the Learn unit text in this module. (SRC-33 L684–729)

## Relation to other sources
- [[src-261-what-is-azure-ai-search]] gives the concise Learn definition of Azure AI Search applications. (SRC-33 L11–25; SRC-261 L218–228)
- [[src-92-extract-data-indexer]] aligns with the episode's indexer, document-cracking, and field-mapping explanation. (SRC-33 L111–130; SRC-92 L218–221)
- [[src-52-enrich-extracted-data-ai-skills]] aligns with the episode's built-in and custom skill explanation. (SRC-33 L181–223; SRC-52 L218–230)
- [[src-187-search-index]] provides the formal query and field-attribute detail behind the demo's JSON search and `select`. (SRC-33 L524–568; SRC-187 L219–236)
- [[src-181-persist-extracted-information-knowledge-store]] provides the concise Learn description of projections. (SRC-33 L306–344; SRC-181 L218–222)

## Connections
- [[azure-ai-search]] — Central service of the episode. (SRC-33 L11–25)
- [[knowledge-mining]] — End-to-end pattern demonstrated. (SRC-33 L345–765)
- [[indexers-and-data-sources]] — Indexer and data-source setup are core to the episode. (SRC-33 L111–130)
- [[ai-enrichment-skillsets]] — Built-in and custom skills are covered. (SRC-33 L167–223)
- [[search-queries]] — The demo uses JSON search, `select`, and keyword search. (SRC-33 L524–568)
- [[knowledge-store]] — Persistence of JSON, tables, and images is explained. (SRC-33 L306–344)
- [[retrieval-augmented-generation]] — Azure AI Search is framed as RAG backbone and demoed for agent grounding. (SRC-33 L11–15; SRC-33 L569–720)
- [[foundry-agent-service]] — Foundry agent consumes the AI Search-backed knowledge base in the demo. (SRC-33 L693–720)
- *Module units:* [[src-130-introduction-create-knowledge-mining-solution-azure-ai-search|1 Introduction]] · [[src-261-what-is-azure-ai-search|2 What is Azure AI Search-]] · [[src-92-extract-data-indexer|3 Extract data with an indexer]] · [[src-52-enrich-extracted-data-ai-skills|4 Enrich extracted data with AI skills]] · [[src-187-search-index|5 Search an index]] · [[src-181-persist-extracted-information-knowledge-store|6 Persist extracted information in a knowledge store]] · [[src-64-exercise-create-knowledge-mining-solution|7 Exercise - Create a knowledge mining solution]] · [[src-176-module-assessment-create-knowledge-mining-solution-azure-ai-search|8 Module assessment]] · [[src-215-summary-create-knowledge-mining-solution-azure-ai-search|9 Summary]]

## Open questions
- The episode does not show generated code for creating the indexer, skillset, knowledge store, or agent connection. (SRC-33 L345–720)
- The transcript does not fully define how the AI Search knowledge base maps to MCP behind the approval prompt. (SRC-33 L721–729)

## Sources
- SRC-33 — raw file: [[33-Create a knowledge mining solution with Azure AI Search - AI-103 - Episode 26]]
