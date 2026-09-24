---
title: "Understand the Azure Language MCP server"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains MCP architecture, dynamic tool discovery, Azure Language MCP capabilities, tool selection, and endpoints."
area: language
source_ids: [SRC-235]
objectives: [T01, T02, G09]
tags: [azure-language, mcp, dynamic-tool-discovery, agents]
aliases: ["SRC-235"]
source_kind: learn-unit
module: "Develop a text analysis agent with the Azure Language MCP server"
learning_path: "Develop natural language solutions in Azure"
unit: "2 of 6"
presenters: []
raw_file: "235-Understand the Azure Language MCP server - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/develop-text-analysis-agent-language-mcp/02-understand-language-mcp"
ingest_depth: full
---

# Understand the Azure Language MCP server

*learn-unit · Develop a text analysis agent with the Azure Language MCP server · unit 2 of 6 · SRC-235*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-235 |
| Raw file | 235-Understand the Azure Language MCP server - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop natural language solutions in Azure |
| Module | Develop a text analysis agent with the Azure Language MCP server |
| Unit / episode | 2 of 6 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/develop-text-analysis-agent-language-mcp/02-understand-language-mcp |
| Teaching content | L209–245 of 275 |
| Content length | ~631 words |
| Capture quality | Full Learn unit capture; a capability table is collapsed in the capture. |
| Ingest depth | full |

## TL;DR

The Azure Language MCP server connects agents to Azure Language services through MCP. (SRC-235 L215) MCP uses a host, client and server architecture, where the connected server exposes tools that the agent can discover and call at runtime. (SRC-235 L217–222) The Language MCP server exposes Azure Language NLP capabilities as tools, and the agent's model chooses the right tool or combination of tools from the prompt and descriptions. (SRC-235 L226; SRC-235 L230–239)

## Key claims

- MCP is an open protocol defining how AI agents interact with external tools, data sources and services. (SRC-235 L217)
- MCP has a host, a client inside the host, and a server that exposes tools, resources and prompts. (SRC-235 L217–220)
- Connected agents receive a catalog of tools with descriptions, enabling dynamic tool discovery instead of hardcoded tool knowledge. (SRC-235 L221)
- Tools can be added, updated or removed on the server without modifying the agent itself. (SRC-235 L222)
- The Azure Language MCP server exposes Azure Language NLP capabilities as tools any MCP-compatible agent can call. (SRC-235 L225–226)
- Azure Language also has deprecated capabilities, including sentiment analysis, summarization and key phrase extraction, to support existing applications. (SRC-235 L228–229)
- The agent handles tool selection autonomously based on tool descriptions, so the developer does not write routing logic for each tool. (SRC-235 L232–239)
- The remote MCP server endpoint uses the Foundry or Azure Language resource name, and a local MCP server option also exists. (SRC-235 L240–245)

## How it works

The source defines MCP as a client-server pattern: the host runs the agent, the client manages MCP server connections and communication, and the server exposes tools, resources and prompts. (SRC-235 L217–220) When the agent connects, it reads the server's tool catalog and descriptions at runtime; this is dynamic discovery, so the agent does not need hardcoded knowledge of every tool. (SRC-235 L221) For Azure Language, the server exposes NLP capabilities as MCP tools. (SRC-235 L225–226)

The operational loop is: the user sends a prompt, the agent determines needed tasks, matches them to available MCP tools, calls the selected tool through the MCP server with input text, receives Azure Language results, and combines them into a natural-language answer. (SRC-235 L232–238) A single turn can involve multiple tools, such as language detection plus named entity recognition. (SRC-235 L230)

## Code and API patterns

The endpoint is configured as a remote MCP server URL that includes the Foundry resource name or Azure Language resource name. (SRC-235 L240–243) The capture does not include the literal URL string after the Copy marker, so this page does not reconstruct it. (SRC-235 L241–243) The source also notes a local MCP server that can be hosted in the user's own environment, with setup guidance outside this capture. (SRC-235 L244–245)

## Key terms

- **Host** — the application that runs the agent, such as Microsoft Foundry or a custom app. (SRC-235 L218)
- **Client** — the component within the host that manages MCP server connections and communication. (SRC-235 L219)
- **Server** — a program that exposes tools, resources and prompts for discovery and calls. (SRC-235 L220)
- **Dynamic tool discovery** — the runtime process where the agent queries the MCP server for available tools rather than depending on hardcoded tool knowledge. (SRC-235 L221)
- **Azure Language MCP server** — the MCP server exposing Azure Language NLP capabilities as tools. (SRC-235 L225–226)

## Decision boundaries and exam cues

- **Inference:** If a scenario emphasizes runtime discovery, changing tools without agent changes, or an agent choosing language tools from descriptions, the tested concept is MCP integration rather than fixed SDK routing. (SRC-235 L221–222; SRC-235 L239)
- **Inference:** If a question asks who chooses the Language MCP tool, the source points to the agent's underlying model choosing from the received tool list, not the developer writing routing logic. (SRC-235 L230; SRC-235 L232–239)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The capture says the server supports a table of text-analysis capabilities, but the table contents are collapsed as Expand table and are not visible. (SRC-235 L226–227)
- **Stale-risk:** The source names some Azure Language capabilities as deprecated while still present for existing applications. (SRC-235 L228–229)
- The source mentions a remote URL format but the copied URL itself is not present in the capture. (SRC-235 L240–243)

## Relation to other sources

- [[src-135-introduction-develop-text-analysis-agent-azure-language-mcp-server]] introduces the same agent-based approach at a high level. (SRC-135 L213–216; SRC-235 L215–226)
- [[src-24-connect-language-mcp-server-agent]] turns this architecture into portal and SDK setup steps. (SRC-235 L240–245; SRC-24 L215–260)
- [[src-150-knowledge-check-develop-text-analysis-agent-azure-language-mcp]] assesses the role of the server and how agents choose tools. (SRC-235 L226; SRC-235 L230–239; SRC-150 L211–219)
- [[src-45-develop-text-analysis-agent-azure-language-mcp-server-episode]] restates the same agent flow and demonstrates it in Foundry. (SRC-235 L232–239; SRC-45 L70–93)

## Connections

- [[model-context-protocol]] — protocol defined and used throughout this source.
- [[azure-language-mcp-server]] — the source's core entity.
- [[mcp-tool-integration]] — dynamic discovery and server-hosted tools.
- [[agent-tools]] — tools are exposed to the agent and chosen from descriptions.
- [[azure-language]] — service whose NLP capabilities are exposed.
- [[named-entity-recognition]] — one example capability named in the multi-tool prompt.
- [[language-detection]] — another example capability used by the agent.
- [[pii-detection-and-redaction]] — nearby Language capability developed in the module.
- *Module units:* [[src-135-introduction-develop-text-analysis-agent-azure-language-mcp-server|1 Introduction]] · [[src-24-connect-language-mcp-server-agent|3 Connect and use the Language MCP server with an agent]] · [[src-70-exercise-develop-text-analysis-agent|4 Exercise - Develop a text analysis agent]] · [[src-150-knowledge-check-develop-text-analysis-agent-azure-language-mcp|5 Knowledge check]] · [[src-200-summary-develop-text-analysis-agent-azure-language-mcp-server|6 Summary]] · [[src-45-develop-text-analysis-agent-azure-language-mcp-server-episode|episode 16]]

## Open questions

- The visible capture does not enumerate every Language MCP tool because the capability table is collapsed. (SRC-235 L226–227)
- The source does not show the literal endpoint format even though it introduces it. (SRC-235 L240–243)

## Sources

- SRC-235 — raw file: [[235-Understand the Azure Language MCP server - Training - Microsoft Learn]]
