---
title: "Knowledge bases and knowledge sources"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Foundry IQ knowledge bases group related business knowledge and connect multiple source types for agent retrieval and citations."
area: retrieval
source_ids: [SRC-141, SRC-85, SRC-22, SRC-23, SRC-194, SRC-147, SRC-16]
objectives: [P03, P04, G08, G09, I05]
objective_gaps: []
tags: []
aliases: ["knowledge base", "knowledge sources", "agentic retrieval", "retrieval reasoning effort", "data sources for knowledge bases"]
---

# Knowledge bases and knowledge sources

## Summary

In Foundry IQ, a knowledge base groups related information by business domain and connects one or more data sources so agents can retrieve grounded, cited information. (SRC-85 L223–233; SRC-22 L12–15)

## The problem it solves

Agents need access to organizational policies, procedures, documentation, support articles, and domain expertise, but teams should not repeatedly build separate chunking, vector database, source-connection, and access-control systems for every agent. (SRC-141 L214–219; SRC-85 L217–221)

## Mental model

A knowledge base is the agent-facing knowledge product; a data source is where the raw information lives. Foundry IQ connects sources into a knowledge base, processes them for retrieval, and lets agents query the knowledge base as one unified source. (SRC-85 L223–238)

## What the sources say

- SRC-85 says knowledge bases organize information by business domain rather than technical storage location. (SRC-85 L223–224)
- SRC-85 says a knowledge base can combine technical specifications from SharePoint, API documentation from Azure Blob Storage, usage analytics from OneLake, and support tickets from an existing search index. (SRC-85 L226–231)
- SRC-22 says Foundry IQ supports six primary data source types: Azure AI Search Index, Azure Blob Storage, Web, SharePoint Remote, SharePoint Indexed, and OneLake. (SRC-22 L12–14)
- SRC-22 says real-time sources provide current information, while internal sources such as SharePoint or OneLake maintain security and governance for proprietary knowledge. (SRC-22 L15)
- SRC-23 says retrieval instructions are required so agents consistently use the knowledge base, cite sources, and handle missing information. (SRC-23 L217–237)
- SRC-194 says data quality determines retrieval effectiveness and lists scoring profiles, semantic ranking, and custom analyzers as improvement techniques. (SRC-194 L222–227)

## How it works in Azure

When a data source is added, Foundry IQ scans the storage location, chunks and embeds documents for semantic search, indexes content into the knowledge base, and monitors document changes for automatic reindexing. (SRC-85 L232–238)

Azure AI Search Index is best when an organization already has Azure AI Search investment or needs semantic ranking, filters, and custom scoring profiles. (SRC-22 L16–22)

Azure Blob Storage is for document files in Azure Storage and gives a more direct path from files to a knowledge base than building and maintaining an Azure AI Search index. (SRC-22 L26–36)

Web grounding provides current public information through Bing, but the source warns that it gives less control over exactly which sources the agent references; controlled indexed sources are preferred when accuracy and verification are critical. (SRC-22 L38–47)

SharePoint Remote queries sites and libraries in real time with Microsoft 365 governance and permissions; SharePoint Indexed preprocesses SharePoint content into Azure AI Search for advanced search and custom pipelines. (SRC-22 L48–68)

OneLake provides access to unstructured files and documents stored in Microsoft Fabric lakehouse data. (SRC-22 L69–72)

## Code and configuration

The corpus does not provide complete SDK or REST calls for creating a Foundry IQ knowledge base. It does provide configuration choices: select the source type based on where data lives and retrieval needs, combine multiple sources in a single knowledge base, write agent instructions for retrieval and citation behavior, and test/monitor retrieval quality. (SRC-22 L79–83; SRC-23 L229–278)

The knowledge check states that scoring profiles boost specific fields or attributes so more important results surface first. (SRC-147 L222–226)

## Decision boundaries

- **Azure AI Search Index:** choose when content is already indexed or advanced Azure AI Search capabilities such as semantic ranking, filters, or custom scoring profiles are needed. (SRC-22 L16–22; SRC-22 L79–81)
- **Azure Blob Storage:** choose for direct file access to documents in Azure Storage. (SRC-22 L26–36; SRC-22 L79–81)
- **Web:** choose for public, current information, but use controlled sources when accuracy and source verification are critical. (SRC-22 L38–47; SRC-22 L79–83)
- **SharePoint Remote:** choose for simple setup, live SharePoint content, and Microsoft 365 governance/permissions. (SRC-22 L48–59; SRC-147 L216–221)
- **SharePoint Indexed:** choose for advanced search features or combining SharePoint with other sources in an Azure AI Search index. (SRC-22 L60–68)
- **OneLake:** choose for unstructured data stored in Microsoft Fabric lakehouse content. (SRC-22 L69–72; SRC-22 L79–81)

## Failure modes and misconceptions

- A knowledge base is not automatically reliable because it exists: data quality and retrieval configuration determine effectiveness. (SRC-194 L222–227)
- Advanced ranking cannot replace agent instructions: the agent still needs directions for when to retrieve, how to cite, and what to do when no answer is found. (SRC-23 L217–237)
- Web grounding is not the same as controlled enterprise knowledge: the source warns that web grounding relies on Bing results and gives less control over referenced sources. (SRC-22 L38–47)
- SharePoint Remote and SharePoint Indexed are not interchangeable: Remote is real-time with no maintained index; Indexed preprocesses into Azure AI Search and enables fuller Azure AI Search capabilities. (SRC-22 L48–68)

## Solution Engineering transfer

**Inference:** Start discovery with four questions: where does the data live, how fresh must it be, who is allowed to see it, and does the agent need advanced search controls. The source decision guide maps those answers to SharePoint Remote, SharePoint Indexed, Blob Storage, OneLake, Azure AI Search Index, or Web. (SRC-22 L79–83)

## Connections

- [[foundry-iq]] — knowledge bases are the core Foundry IQ abstraction.
- [[azure-ai-search]] — provides existing indexes and advanced search capabilities.
- [[semantic-ranking]] — retrieval-quality capability available through Azure AI Search-backed sources.
- [[search-queries]] — filters, facets, and scoring profiles matter when Azure AI Search is the source.
- [[retrieval-augmented-generation]] — knowledge bases provide grounding context for agent answers.
- [[model-context-protocol]] — Foundry IQ uses MCP to connect agents to knowledge bases.
- [[src-22-configure-data-sources-knowledge-bases]] — main source-type decision guide.
- [[src-23-configure-retrieval-foundry-iq]] — retrieval behavior and instruction guidance.
- *Also linked from:* [[prompt-engineering]]

## Sources

- SRC-141 — [[src-141-introduction-build-knowledge-enhanced-ai-agents-foundry-iq]] — module framing for the agent knowledge problem.
- SRC-85 — [[src-85-explore-foundry-iq]] — knowledge bases, source integrations, automatic processing.
- SRC-22 — [[src-22-configure-data-sources-knowledge-bases]] — six source types and source decision guide.
- SRC-23 — [[src-23-configure-retrieval-foundry-iq]] — retrieval instructions, testing, monitoring.
- SRC-194 — [[src-194-summary-build-knowledge-enhanced-ai-agents-foundry-iq]] — summary of data quality and retrieval improvements.
- SRC-147 — [[src-147-knowledge-check-build-knowledge-enhanced-ai-agents-foundry-iq]] — assessment items for SharePoint Remote, scoring profiles, and retrieval behavior.
- SRC-16 — [[src-16-build-knowledge-enhanced-ai-agents-foundry-iq-episode-10]] — episode explanation of source categories and instruction importance.

## Open questions

- The corpus does not describe exact permission propagation for every source type, supported file limits, refresh intervals, or API objects for creating knowledge bases.
