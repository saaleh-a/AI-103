---
title: "Configure data sources for knowledge bases"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Catalogs Foundry IQ knowledge-base source types and gives decision guidance for Azure AI Search, Blob Storage, web, SharePoint, and OneLake."
area: retrieval
source_ids: [SRC-22]
objectives: [P03, P04, G09, I01]
tags: [foundry-iq, data-sources, azure-ai-search, blob-storage, sharepoint, onelake, web-grounding]
aliases: ["SRC-22"]
source_kind: learn-unit
module: "Build knowledge-enhanced AI agents with Foundry IQ"
learning_path: "Develop AI agents on Azure"
unit: "4"
presenters: []
raw_file: "22-Configure data sources for knowledge bases - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/introduction-foundry-iq/4-data-requirements"
ingest_depth: full
---

# Configure data sources for knowledge bases

*learn-unit · Build knowledge-enhanced AI agents with Foundry IQ · unit 4 · SRC-22*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-22 |
| Raw file | 22-Configure data sources for knowledge bases - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Build knowledge-enhanced AI agents with Foundry IQ |
| Unit / episode | 4 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/introduction-foundry-iq/4-data-requirements |
| Teaching content | L8–83 of 97 |
| Content length | ~1069 words |
| Capture quality | High; compact Learn capture with tables flattened into text. |
| Ingest depth | full |

## TL;DR

Foundry IQ supports six primary knowledge-base data source types: Azure AI Search Index, Azure Blob Storage, Web, SharePoint Remote, SharePoint Indexed, and OneLake. (SRC-22 L13–14) The source's decision guide maps each option to where data lives and whether the implementation needs freshness, direct file access, existing search investment, current web information, or advanced search pipelines. (SRC-22 L75–83)

## Key claims

- A Foundry IQ knowledge base is only as useful as the data it contains, and data sources are configured when setting up the knowledge base. (SRC-22 L12)
- Azure AI Search Index is best when an organization already has processed and indexed data and wants enterprise-scale search capabilities. (SRC-22 L15–24)
- Azure Blob Storage retrieves documents and files directly from blob containers, including PDFs, Word files, text, Markdown, and HTML. (SRC-22 L25–36)
- Web access grounds an agent in real-time internet content via Bing, especially for recent or frequently changing information. (SRC-22 L37–48)
- SharePoint Remote queries SharePoint sites and libraries in real time and respects Microsoft 365 governance and existing SharePoint permissions. (SRC-22 L49–61)
- SharePoint Indexed preprocesses SharePoint content into Azure AI Search for faster responses and advanced search features. (SRC-22 L62–70)
- OneLake connects Foundry IQ to unstructured data stored in Microsoft Fabric lakehouses. (SRC-22 L69–70)
- Multiple sources can be combined in a single knowledge base. (SRC-22 L82–83)

## How it works

The source divides sources by access pattern. (SRC-22 L11–14) Indexed options such as Azure AI Search Index and SharePoint Indexed rely on preprocessed searchable content. (SRC-22 L15–24; SRC-22 L62–70) Direct options such as Blob Storage and OneLake connect files or lakehouse content to the knowledge base. (SRC-22 L25–36; SRC-22 L69–81) Real-time options such as Web and SharePoint Remote query current external or Microsoft 365 content at answer time. (SRC-22 L37–61)

## Code and API patterns

Not covered by this source.

## Key terms

- **Azure AI Search Index** — a source that connects to an existing Azure AI Search index for enterprise-scale search, semantic ranking, custom scoring, facets, and multilingual content. (SRC-22 L15–24)
- **Azure Blob Storage** — a direct source for documents and files in blob containers. (SRC-22 L25–36)
- **Web** — a real-time Bing-backed source for current public information. (SRC-22 L37–48)
- **SharePoint Remote** — real-time SharePoint querying with Microsoft 365 governance and existing permission handling. (SRC-22 L49–61)
- **SharePoint Indexed** — SharePoint content indexed into Azure AI Search for custom pipelines and advanced search. (SRC-22 L62–70)
- **OneLake** — access to unstructured data stored in a Microsoft Fabric lakehouse. (SRC-22 L69–70)

## Decision boundaries and exam cues

- **Inference:** Choose SharePoint Remote when the scenario prioritizes simplest setup, always-current SharePoint content, and existing permission enforcement. (SRC-22 L49–61; SRC-22 L75–83)
- **Inference:** Choose SharePoint Indexed when the scenario asks for advanced search, custom pipelines, custom analyzers, enrichment pipelines, or combining SharePoint data with other sources. (SRC-22 L62–70; SRC-22 L75–83)
- **Inference:** Choose Azure AI Search Index when the organization already has an Azure AI Search investment or needs semantic ranking, custom scoring, faceting, or multilingual search. (SRC-22 L15–24; SRC-22 L75–83)
- **Inference:** Choose Web for public, current information, but avoid relying on it as the controlled source when accuracy and source verification are critical. (SRC-22 L37–48)
- **Inference:** Choose OneLake when the content is in Microsoft Fabric and the agent should reference BI reports, data documentation, analytical findings, or research outputs. (SRC-22 L69–78)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The flattened capture compresses source-type comparison tables into prose-like text, so exact table cell boundaries should be treated cautiously. (SRC-22 L11–14; SRC-22 L49–56; SRC-22 L75–83)
- Web grounding uses Bing search results and gives less control over exact referenced sources than indexed, controlled data sources. (SRC-22 L43–48)

## Relation to other sources

- [[src-85-explore-foundry-iq]] introduces the data-source integration idea that this page expands into a source-by-source guide. (SRC-85 L234–241; SRC-22 L11–83)
- [[src-23-configure-retrieval-foundry-iq]] follows data-source setup by configuring how agents should retrieve, cite, and fall back. (SRC-22 L12; SRC-23 L214–278)
- [[src-147-knowledge-check-build-knowledge-enhanced-ai-agents-foundry-iq]] tests SharePoint Remote as the real-time SharePoint option and scoring profiles as a relevance feature. (SRC-22 L49–61; SRC-147 L217–225)

## Connections

- [[knowledge-bases-and-sources]] — the source's main topic is selecting data sources for Foundry IQ knowledge bases. (SRC-22 L8–14)
- [[foundry-iq]] — the product context for the data-source choices. (SRC-22 L12)
- [[azure-ai-search]] — both a direct source option and the indexing layer for SharePoint Indexed. (SRC-22 L15–24; SRC-22 L62–70)
- [[search-indexes]] — existing Azure AI Search indexes can become knowledge-base sources. (SRC-22 L15–24)
- [[retrieval-options-compared]] — this page supplies source-choice boundaries for grounding options. (SRC-22 L75–83)
- *Module units:* [[src-141-introduction-build-knowledge-enhanced-ai-agents-foundry-iq|1 Introduction]] · [[src-239-understanding-rag-agents|2 Understanding RAG for agents]] · [[src-85-explore-foundry-iq|3 Explore Foundry IQ]] · [[src-23-configure-retrieval-foundry-iq|5 Configure retrieval with Foundry IQ]] · [[src-147-knowledge-check-build-knowledge-enhanced-ai-agents-foundry-iq|6 Knowledge check]] · [[src-76-exercise-integrate-ai-agent-foundry-iq|7 Exercise - Integrate an AI agent with Foundry IQ]] · [[src-194-summary-build-knowledge-enhanced-ai-agents-foundry-iq|8 Summary]] · [[src-16-build-knowledge-enhanced-ai-agents-foundry-iq-episode-10|episode 10]]

## Open questions

- The source does not specify authentication setup, supported file-size limits, synchronization intervals, or permissions beyond the SharePoint Remote permission note. (SRC-22 L49–61; SRC-22 L75–83)

## Sources

- SRC-22 — raw file: [[22-Configure data sources for knowledge bases - Training - Microsoft Learn]]
