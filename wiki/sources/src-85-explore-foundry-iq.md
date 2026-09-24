---
title: "Explore Foundry IQ"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains Foundry IQ knowledge bases, data-source integration, built-in retrieval intelligence, and the value of sharing knowledge across agents."
area: retrieval
source_ids: [SRC-85]
objectives: [G02, G08, G09, P03, P04, I05]
tags: [foundry-iq, knowledge-bases, data-sources, mcp, azure-ai-search]
aliases: ["SRC-85"]
source_kind: learn-unit
module: "Build knowledge-enhanced AI agents with Foundry IQ"
learning_path: "Develop AI agents on Azure"
unit: "3 of 8"
presenters: []
raw_file: "85-Explore Foundry IQ - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/introduction-foundry-iq/3-foundry-iq"
ingest_depth: full
---

# Explore Foundry IQ

*learn-unit · Build knowledge-enhanced AI agents with Foundry IQ · unit 3 of 8 · SRC-85*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-85 |
| Raw file | 85-Explore Foundry IQ - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Build knowledge-enhanced AI agents with Foundry IQ |
| Unit / episode | 3 of 8 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/introduction-foundry-iq/3-foundry-iq |
| Teaching content | L211–263 of 293 |
| Content length | ~752 words |
| Capture quality | High; Learn unit with platform explanation and no visible code snippet. |
| Ingest depth | full |

## TL;DR

Foundry IQ is described as a managed knowledge platform for AI agents, built on Azure AI Search and usable as a shared service by multiple agents. (SRC-85 L219–221) The source emphasizes knowledge bases organized by business domain, data-source integrations for SharePoint, Blob Storage, OneLake, and search indexes, and automatic retrieval intelligence such as query analysis, strategy selection, ranking, and citations. (SRC-85 L225–251)

## Key claims

- Building separate RAG systems for multiple agents repeats vector database, embedding pipeline, retrieval tuning, and search-infrastructure work. (SRC-85 L214–216)
- Foundry IQ is a managed knowledge platform for AI agents built on Azure AI Search. (SRC-85 L219–220)
- Foundry IQ lets teams create knowledge bases once and connect any agent to them. (SRC-85 L221–224)
- Knowledge bases organize information by business domain rather than technical storage location. (SRC-85 L225–233)
- Foundry IQ handles indexing, embedding generation, and search optimization when data sources are connected. (SRC-85 L234–241)
- When an agent queries a knowledge base, Foundry IQ analyzes the question, selects retrieval strategies, ranks results, and provides citations. (SRC-85 L242–251)
- Foundry IQ uses the Model Context Protocol to connect agents to knowledge bases. (SRC-85 L262–263)

## How it works

Foundry IQ sits between agents and organizational content as a shared retrieval service. (SRC-85 L219–224) Administrators connect existing storage locations, and Foundry IQ discovers documents, processes them into chunks and embeddings, indexes them, and monitors changes for automatic reindexing. (SRC-85 L234–241) Agents query a knowledge base as a unified source, while the platform handles query analysis, retrieval strategy selection, relevance ranking, and citations. (SRC-85 L242–251)

## Code and API patterns

The capture introduces an example support agent connected to product documentation, but the actual Python code is not included in the text capture beyond the label. (SRC-85 L252–254) The source states the agent retrieves information from the knowledge base like any other tool, without custom retrieval logic or search-infrastructure management. (SRC-85 L254–255)

## Key terms

- **Foundry IQ** — a managed knowledge platform for AI agents built on Azure AI Search. (SRC-85 L219–220)
- **Knowledge base** — a business-domain organization of related information, independent of where the source data is stored. (SRC-85 L225–233)
- **Data source integration** — a connection from Foundry IQ to SharePoint sites, Blob containers, or OneLake instances. (SRC-85 L234–235)
- **Built-in retrieval intelligence** — automatic query analysis, retrieval strategy selection, result ranking, and citations. (SRC-85 L242–251)
- **Model Context Protocol (MCP)** — the standard the source says Foundry IQ uses to connect agents to knowledge bases securely. (SRC-85 L262–263)

## Decision boundaries and exam cues

- **Inference:** Choose Foundry IQ over custom RAG when a scenario emphasizes shared knowledge bases, multiple agents, and reduced search-infrastructure work. (SRC-85 L214–224; SRC-85 L256–261)
- **Inference:** Choose a business-domain knowledge base when the source data spans storage systems but should appear to agents as one source such as product documentation or HR policies. (SRC-85 L225–233)
- **Inference:** Treat citations as part of the desired retrieval behavior, because Foundry IQ provides citations so agents can reference source documents. (SRC-85 L249–251)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source states that Foundry IQ is built on Azure AI Search, while later units still require choices among Azure AI Search indexes, Blob Storage, web, SharePoint, and OneLake as data sources. (SRC-85 L219–220; SRC-22 L11–14)
- **Stale-risk:** The source identifies MCP as the connection mechanism for Foundry IQ knowledge bases; protocol and product integration details may change and should be verified for production work. (SRC-85 L262–263)

## Relation to other sources

- [[src-239-understanding-rag-agents]] explains the underlying RAG problem that Foundry IQ packages as a managed platform. (SRC-239 L219–231; SRC-85 L219–224)
- [[src-22-configure-data-sources-knowledge-bases]] expands the data-source integrations named here into a source-by-source decision guide. (SRC-85 L234–241; SRC-22 L11–83)
- [[src-23-configure-retrieval-foundry-iq]] continues from knowledge-base connection to agent instructions, testing, and production monitoring. (SRC-85 L252–255; SRC-23 L214–278)
- [[src-16-build-knowledge-enhanced-ai-agents-foundry-iq-episode-10]] demonstrates the same concepts with a product expert agent, Blob Storage data, Azure AI Search, and agent approvals. (SRC-85 L219–263; SRC-16 L285–763)

## Connections

- [[foundry-iq]] — the managed knowledge platform described by the unit. (SRC-85 L219–220)
- [[azure-ai-search]] — the service Foundry IQ is built on and an input source for existing indexes. (SRC-85 L219–220; SRC-85 L233)
- [[knowledge-bases-and-sources]] — the unit explains knowledge bases and source integrations. (SRC-85 L225–241)
- [[model-context-protocol]] — the source states MCP connects agents to knowledge bases. (SRC-85 L262–263)
- [[retrieval-augmented-generation]] — Foundry IQ implements RAG-style retrieval capabilities as a managed service. (SRC-85 L219–224)
- [[agent-tools]] — the source says agents retrieve from the knowledge base like they use any other tool. (SRC-85 L254–255)
- *Module units:* [[src-141-introduction-build-knowledge-enhanced-ai-agents-foundry-iq|1 Introduction]] · [[src-239-understanding-rag-agents|2 Understanding RAG for agents]] · [[src-22-configure-data-sources-knowledge-bases|4 Configure data sources for knowledge bases]] · [[src-23-configure-retrieval-foundry-iq|5 Configure retrieval with Foundry IQ]] · [[src-147-knowledge-check-build-knowledge-enhanced-ai-agents-foundry-iq|6 Knowledge check]] · [[src-76-exercise-integrate-ai-agent-foundry-iq|7 Exercise - Integrate an AI agent with Foundry IQ]] · [[src-194-summary-build-knowledge-enhanced-ai-agents-foundry-iq|8 Summary]] · [[src-16-build-knowledge-enhanced-ai-agents-foundry-iq-episode-10|episode 10]]

## Open questions

- The source does not expose the actual Python agent code or the exact MCP request shape used for Foundry IQ. (SRC-85 L252–255; SRC-85 L262–263)

## Sources

- SRC-85 — raw file: [[85-Explore Foundry IQ - Training - Microsoft Learn]]
