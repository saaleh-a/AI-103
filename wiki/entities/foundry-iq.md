---
title: "Foundry IQ"
type: entity
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Managed knowledge platform for AI agents, built on Azure AI Search, that shares knowledge bases and retrieval across agents."
area: retrieval
source_ids: [SRC-141, SRC-239, SRC-85, SRC-22, SRC-23, SRC-147, SRC-194, SRC-16, SRC-76, SRC-102, SRC-259]
objectives: [P02, P03, P04, G08, G09, I05]
objective_gaps: []
tags: ["feature"]
aliases: ["Microsoft Foundry IQ", "Foundry IQ knowledge platform"]
---

# Foundry IQ

## Summary

Foundry IQ is Microsoft's managed, shared knowledge platform for AI agents. The corpus presents it as a way to avoid rebuilding custom RAG infrastructure for every agent while still connecting agents to organizational knowledge. (SRC-141 L218–225; SRC-85 L217–221)

## What it is

Foundry IQ is a managed knowledge platform for AI agents built on Azure AI Search; it provides RAG-style retrieval as a shared service that multiple agents can use. (SRC-85 L219–221)

The module introduction frames it as a unified knowledge platform that gives multiple agents access to the same knowledge bases, so improvements to a knowledge base benefit every connected agent immediately. (SRC-141 L218–219)

## What the sources say

- SRC-239 says simple agents lack enterprise knowledge, and RAG connects agents to organizational knowledge sources in real time; Foundry IQ then provides a ready-made knowledge platform that removes custom RAG complexity. (SRC-239 L217–232)
- SRC-85 says Foundry IQ is built on Azure AI Search, creates knowledge bases once, and lets agents connect to them instead of indexing each source separately for each agent. (SRC-85 L219–221)
- SRC-85 says Foundry IQ handles indexing, embedding generation, and search optimization automatically when connecting data sources. (SRC-85 L232–238)
- SRC-85 says Foundry IQ implements retrieval strategies automatically, analyzes questions, selects strategies, ranks results, and provides citations. (SRC-85 L240–246)
- SRC-194 summarizes Foundry IQ as eliminating custom RAG infrastructure for every agent through business-domain knowledge bases connected to SharePoint, Azure Blob Storage, OneLake, or existing Azure AI Search indexes. (SRC-194 L220–221)
- SRC-16, an episode transcript, uses the same concept: Foundry IQ lets agents pull from many data sources, can manage and potentially auto-index/update information, and a source can be reused by multiple agents. (SRC-16 L95–161)

## Capabilities and components

Foundry IQ knowledge bases organize information by business domain rather than technical storage location; a Product Documentation knowledge base can combine SharePoint specifications, Blob Storage API documentation, OneLake analytics, and existing search-index content. (SRC-85 L223–231)

Data source integrations include SharePoint sites, Blob containers, OneLake instances, and existing Azure AI Search indexes in the Learn units, with the episode also mentioning SQL or APIs as possible sources. (SRC-85 L232–238; SRC-22 L13–18; SRC-16 L124–140)

Built-in retrieval intelligence includes question analysis, strategy selection, relevance ranking, and citations that let users verify source documents. (SRC-85 L240–246)

Foundry IQ uses Model Context Protocol to connect agents to knowledge bases, according to the Explore Foundry IQ unit. (SRC-85 L263–264)

## How to use it

A learner configures a knowledge base, connects data sources, configures agent instructions, tests retrieval, and monitors production behavior. The module learning objectives explicitly include data-source configuration, retrieval instructions, citations, and retrieval monitoring. (SRC-141 L223–226)

The retrieval unit says instructions determine retrieval behavior and should specify when to retrieve, how to cite, and what to do when information is not found. (SRC-23 L223–237)

The exercise capture is thin: it names the exercise (integrate an AI agent with Foundry IQ), invites learners with an Azure subscription to explore Foundry IQ in Microsoft Foundry, and says to launch the exercise and follow the instructions; the lab steps themselves are not in the corpus. (SRC-76 L210–216)

## Decision boundaries

- **Foundry IQ vs custom RAG:** Foundry IQ is for agents that need grounded knowledge without the team building vector databases, embedding pipelines, retrieval algorithms, and search infrastructure from scratch. (SRC-85 L217–221; SRC-239 L223–232)
- **Foundry IQ vs Azure AI Search directly:** Foundry IQ is a managed knowledge platform built on Azure AI Search and can use Azure AI Search indexes as sources; Azure AI Search remains the underlying search/index capability. (SRC-85 L219–221; SRC-22 L16–18)
- **Foundry IQ vs file search:** Foundry IQ is presented for shared, enterprise-scale knowledge bases across agents, while `file_search` is a Responses API tool over uploaded files in a dedicated vector search index. (SRC-85 L253–263; SRC-259 L224–226)
- **Inference:** Choose Foundry IQ when the requirement is a reusable, governed knowledge layer for multiple agents; choose a lower-level search/index approach when the task is to directly design and control the search index itself. (SRC-85 L217–221; SRC-22 L16–18)

## Naming and currency

**Stale-risk:** The corpus uses Foundry IQ as a Microsoft Foundry feature and states it is built on Azure AI Search. Platform naming and availability may change, so current Microsoft documentation should be checked before implementation. (SRC-85 L219–221)

## Appearances in the corpus

- The Foundry IQ Learn module introduces the product, source options, retrieval instructions, exercise, knowledge check, and summary. (SRC-141 L218–226; SRC-85 L219–264; SRC-22 L12–83; SRC-23 L217–278; SRC-147 L211–230; SRC-194 L217–231)
- Episode 10 demonstrates and explains Foundry IQ as a source for agents, with data from SharePoint, OneLake, and Blob Storage. (SRC-16 L700–756)
- The RAG unit outside the Foundry IQ module points to Foundry IQ for agents that need grounded knowledge without managing search infrastructure. (SRC-102 L265)

## Connections

- [[knowledge-bases-and-sources]] — knowledge bases and source choices are the main Foundry IQ configuration surface.
- [[retrieval-augmented-generation]] — Foundry IQ packages RAG-style grounding for agents.
- [[azure-ai-search]] — Foundry IQ is built on Azure AI Search and can connect to existing indexes.
- [[semantic-ranking]] — advanced Azure AI Search-backed source capability.
- [[embeddings-and-vector-search]] — Foundry IQ abstracts embedding and indexing work described in RAG.
- [[model-context-protocol]] — source says Foundry IQ uses MCP to connect agents to knowledge bases.
- [[src-85-explore-foundry-iq]] — primary product overview.
- [[src-22-configure-data-sources-knowledge-bases]] — source-type configuration.
- [[src-23-configure-retrieval-foundry-iq]] — retrieval behavior configuration.
- *Also linked from:* [[agent-tools]] · [[decision-boundaries]] · [[file-search-tool]] · [[foundry-resources-and-projects]] · [[observability-and-tracing]] · [[overview]] · [[retrieval-options-compared]]

## Sources

- SRC-141 — [[src-141-introduction-build-knowledge-enhanced-ai-agents-foundry-iq]] — module framing and objectives.
- SRC-239 — [[src-239-understanding-rag-agents]] — RAG problem and Foundry IQ as ready-made platform.
- SRC-85 — [[src-85-explore-foundry-iq]] — product definition, knowledge bases, retrieval intelligence, MCP.
- SRC-22 — [[src-22-configure-data-sources-knowledge-bases]] — source options and Azure AI Search-backed capabilities.
- SRC-23 — [[src-23-configure-retrieval-foundry-iq]] — agent instructions and retrieval behavior.
- SRC-147 — [[src-147-knowledge-check-build-knowledge-enhanced-ai-agents-foundry-iq]] — knowledge check for source choice and retrieval behavior.
- SRC-194 — [[src-194-summary-build-knowledge-enhanced-ai-agents-foundry-iq]] — summary of platform and retrieval-quality techniques.
- SRC-16 — [[src-16-build-knowledge-enhanced-ai-agents-foundry-iq-episode-10]] — episode walkthrough and demo commentary.
- SRC-76 — [[src-76-exercise-integrate-ai-agent-foundry-iq]] — thin exercise capture.
- SRC-102 — [[src-102-ground-model-retrieval-augmented-generation]] — RAG unit pointing to Foundry IQ.
- SRC-259 — [[src-259-what-are-tools]] — file-search contrast.

## Open questions

- The corpus does not show complete portal lab steps, exact APIs, permission model, regional availability, limits, or pricing for Foundry IQ.
