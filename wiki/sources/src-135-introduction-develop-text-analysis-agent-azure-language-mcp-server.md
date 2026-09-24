---
title: "Introduction — Develop a text analysis agent with the Azure Language MCP server"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Introduces using the Azure Language MCP server to expose text analysis capabilities to a Microsoft Foundry agent."
area: language
source_ids: [SRC-135]
objectives: []
tags: [azure-language, mcp, agents, text-analysis]
aliases: ["SRC-135"]
source_kind: learn-unit
module: "Develop a text analysis agent with the Azure Language MCP server"
learning_path: "Develop natural language solutions in Azure"
unit: "1 of 6"
presenters: []
raw_file: "135-Introduction - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/develop-text-analysis-agent-language-mcp/01-introduction"
ingest_depth: full
---

# Introduction — Develop a text analysis agent with the Azure Language MCP server

*learn-unit · Develop a text analysis agent with the Azure Language MCP server · unit 1 of 6 · SRC-135*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-135 |
| Raw file | 135-Introduction - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop natural language solutions in Azure |
| Module | Develop a text analysis agent with the Azure Language MCP server |
| Unit / episode | 1 of 6 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/develop-text-analysis-agent-language-mcp/01-introduction |
| Teaching content | L209–220 of 250 |
| Content length | ~303 words |
| Capture quality | Full Learn unit capture; teaching content is short and followed by site chrome. |
| Ingest depth | full |

## TL;DR

Azure Language in Foundry Tools supplies NLP capabilities for text analysis, including language detection, named entity recognition and personally identifiable information extraction. (SRC-135 L213) The unit frames the Azure Language MCP server as a way to make those capabilities available to an AI agent, so the agent can choose the relevant tool from a user request instead of the developer writing one integration per capability. (SRC-135 L214–216)

## Key claims

- Azure Language in Foundry Tools can analyze text for language, named entities and PII. (SRC-135 L213)
- The capabilities can be called directly through REST APIs or SDKs, or exposed to an AI agent through the Azure Language MCP server. (SRC-135 L214)
- A customer-feedback scenario motivates the module: multilingual reviews need language detection, people and place extraction, and personal-detail redaction. (SRC-135 L215)
- The module teaches how the server works, how to connect it to an AI agent in Microsoft Foundry, and how to build a client application. (SRC-135 L216)
- The Azure Language MCP server is in public preview, so module details may change. (SRC-135 L217–218)

## How it works

The unit establishes the architecture at a high level: Azure Language remains the text-analysis capability, while the MCP server is the agent-facing bridge that lets the agent dynamically select and call the appropriate language tool from a prompt. (SRC-135 L213–216) In the example, one agent connection replaces separate integrations for detecting language, identifying people and places, and redacting personal details in customer reviews. (SRC-135 L215)

## Code and API patterns

REST APIs and SDKs are mentioned as direct ways to call Azure Language capabilities, but this introduction does not show request shapes or code. (SRC-135 L214) The unit says later module content will include building a client application that interacts with the agent programmatically. (SRC-135 L216)

## Key terms

- **Azure Language in Foundry Tools** — the place where NLP capabilities such as language detection, NER and PII extraction are available. (SRC-135 L213)
- **Azure Language MCP server** — the bridge that exposes Azure Language capabilities to an AI agent through MCP. (SRC-135 L214)
- **PII extraction** — one of the named text-analysis capabilities in the unit. (SRC-135 L213)

## Decision boundaries and exam cues

- **Inference:** Choose the MCP-server approach when a scenario asks an agent to choose among text-analysis tasks from natural-language requests, rather than when an app is simply making a fixed direct REST or SDK call. (SRC-135 L214–216)
- **Inference:** A scenario involving multilingual feedback plus entity extraction and personal-data redaction points toward Azure Language capabilities exposed through the Language MCP server when the solution is agent-based. (SRC-135 L213–215)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** The unit explicitly says the Azure Language MCP server is in public preview and that details are subject to change. (SRC-135 L217–218)
- The text version may contain greater detail than the videos. (SRC-135 L219–220)

## Relation to other sources

- [[src-235-understand-azure-language-mcp-server]] expands this introduction into MCP architecture, tool discovery and server capabilities. (SRC-135 L216; SRC-235 L215–226)
- [[src-24-connect-language-mcp-server-agent]] supplies the portal and SDK connection pattern promised by the introduction. (SRC-135 L216; SRC-24 L215–260)
- [[src-45-develop-text-analysis-agent-azure-language-mcp-server-episode]] gives a presenter walkthrough of connecting Azure Language capabilities to an agent through MCP. (SRC-135 L214–216; SRC-45 L16–24)

## Connections

- [[azure-language]] — underlying text-analysis service named by the unit.
- [[azure-language-mcp-server]] — agent-facing MCP server introduced here.
- [[model-context-protocol]] — protocol layer used to expose tools to agents.
- [[mcp-tool-integration]] — the integration pattern this module teaches.
- [[ai-agents]] — target runtime that uses the exposed tools.
- [[speech-and-language-options-compared]] — useful later for distinguishing language tools from other language and speech options.
- *Module units:* [[src-235-understand-azure-language-mcp-server|2 Understand the Azure Language MCP server]] · [[src-24-connect-language-mcp-server-agent|3 Connect and use the Language MCP server with an agent]] · [[src-70-exercise-develop-text-analysis-agent|4 Exercise - Develop a text analysis agent]] · [[src-150-knowledge-check-develop-text-analysis-agent-azure-language-mcp|5 Knowledge check]] · [[src-200-summary-develop-text-analysis-agent-azure-language-mcp-server|6 Summary]] · [[src-45-develop-text-analysis-agent-azure-language-mcp-server-episode|episode 16]]

## Open questions

- Which exact REST or SDK calls are equivalent to the MCP-exposed language tools is not shown in this introduction. (SRC-135 L214)
- The preview note does not say which details are most likely to change. (SRC-135 L217–218)

## Sources

- SRC-135 — raw file: [[135-Introduction - Training - Microsoft Learn]]
