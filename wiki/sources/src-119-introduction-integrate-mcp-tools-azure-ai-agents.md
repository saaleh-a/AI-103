---
title: "Introduction — Integrate MCP Tools with Azure AI Agents"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Introduces MCP as a way to give Azure AI Agents dynamically discovered tools through Microsoft Foundry Agent Service."
area: agents
source_ids: [SRC-119]
objectives: []
tags: [mcp, azure-ai-agents, foundry-agent-service, tools]
aliases: ["SRC-119"]
source_kind: learn-unit
module: "Integrate MCP Tools with Azure AI Agents"
learning_path: "Develop AI agents on Azure"
unit: "1 of 7"
presenters: []
raw_file: "119-Introduction - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/connect-agent-to-mcp-tools/1-introduction"
ingest_depth: full
---
# Introduction — Integrate MCP Tools with Azure AI Agents

*learn-unit · Integrate MCP Tools with Azure AI Agents · unit 1 of 7 · SRC-119*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-119 |
| Raw file | 119-Introduction - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Integrate MCP Tools with Azure AI Agents |
| Unit / episode | 1 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/connect-agent-to-mcp-tools/1-introduction |
| Teaching content | L210-219 of 249 |
| Content length | ~229 words |
| Capture quality | High: compact Learn introduction with complete teaching lines. |
| Ingest depth | full |

## TL;DR

AI agents can need APIs, databases, or internal services outside the large language model, and manual integration becomes complex as systems grow or change (SRC-119 L216). Model Context Protocol servers address this by giving an Azure AI Agent an on-demand catalog of tools (SRC-119 L217). The module frames the learner goal as setting up an MCP server and client, dynamically connecting tools to an Azure AI Agent, and creating an MCP tool solution with Microsoft Foundry Agent Service (SRC-119 L219).

## Key claims

- Agents may need external APIs, databases, or internal services, and maintaining those integrations can become complex when the system changes frequently (SRC-119 L216).
- Connecting an Azure AI Agent to an MCP server provides a tool catalog that is accessible on demand (SRC-119 L217).
- The source says this approach can make an AI solution more robust, scalable, and easier to maintain (SRC-119 L217).
- The retail example uses MCP to connect an assistant to inventory-assessment and recommendation tools for stock levels and sales trends (SRC-119 L218).
- The module teaches MCP server/client setup and dynamic connection of tools to an Azure AI Agent (SRC-119 L219).

## How it works

The source's causal chain is: agents need external capabilities, manual integration grows costly, and MCP servers supply a catalog of tools that an Azure AI Agent can access on demand (SRC-119 L216-L217). The example domain is cosmetics retail: an assistant checks product stock levels and recent sales trends by using tools exposed through an MCP server (SRC-119 L218). The module promises both setup knowledge and hands-on practice with Microsoft Foundry Agent Service (SRC-119 L219).

## Code and API patterns

Not covered by this source. The introduction names server/client setup and dynamic connection as module outcomes, but it does not show code or API calls (SRC-119 L219).

## Key terms

- **AI agent:** In this source, an agent is a system that can perform tasks but may need to interact with tools outside the large language model (SRC-119 L216).
- **Model Context Protocol (MCP) server:** A server that can provide an Azure AI Agent with a catalog of tools accessible on demand (SRC-119 L217).
- **Microsoft Foundry Agent Service:** The service named as the place where the learner will create an AI MCP tool solution (SRC-119 L219).

## Decision boundaries and exam cues

- **Inference:** Choose MCP when the scenario emphasizes many external tools, changing APIs, or tool access that should be maintained separately from the agent, because the source contrasts manual integrations with on-demand MCP tool catalogs (SRC-119 L216-L217).
- **Inference:** The retail inventory scenario points to MCP when the agent must use business tools for stock and sales trend analysis rather than answer only from the model's language knowledge (SRC-119 L218).

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** The source uses both Azure AI Agent and Microsoft Foundry Agent Service naming; product names and service boundaries may need comparison with newer Microsoft documentation before operational use (SRC-119 L217; SRC-119 L219).
- The introduction says MCP can improve robustness, scalability, and maintainability, but it does not state operational limits, security requirements, or failure modes in this unit (SRC-119 L217-L219).

## Relation to other sources

- [[src-233-understand-mcp-tool-discovery]] expands the dynamic discovery claim by defining MCP benefits and tool-catalog flow (SRC-233 L216-L239).
- [[src-108-integrate-agent-tools-mcp-server-client]] explains the MCP server/client setup promised by this introduction (SRC-108 L216-L234).
- [[src-240-azure-ai-agents-mcp-servers]] covers the managed Microsoft Foundry Agent Service path for remote MCP servers (SRC-240 L216-L240).
- [[src-109-integrate-mcp-tools-azure-ai-agents-episode-9]] demonstrates the same module topic in a video walkthrough (SRC-109 L20-L24; SRC-109 L662-L670).

## Connections

- [[model-context-protocol]] — central protocol introduced as the solution for tool access.
- [[mcp-tool-integration]] — the module's explicit implementation topic.
- [[foundry-agent-service]] — service named for the MCP tool solution.
- [[agent-tools]] — MCP is framed as a way to provide tools to agents.
- [[tool-options-compared]] — useful synthesis page for comparing MCP with other tool patterns.
- *Module units:* [[src-233-understand-mcp-tool-discovery|2 Understand MCP Tool Discovery]] · [[src-108-integrate-agent-tools-mcp-server-client|3 Integrate Agent Tools Using an MCP Server and Client]] · [[src-240-azure-ai-agents-mcp-servers|4 Use Azure AI agents with MCP servers]] · [[src-60-exercise-connect-mcp-tools-azure-ai-agents|5 Exercise - Connect MCP Tools to Azure AI Agents]] · [[src-158-module-assessment-integrate-mcp-tools-azure-ai-agents|6 Module Assessment]] · [[src-193-summary-integrate-mcp-tools-azure-ai-agents|7 Summary]] · [[src-109-integrate-mcp-tools-azure-ai-agents-episode-9|episode 9]]

## Open questions

- What authentication and approval settings are required for production MCP tool calls are not covered in this introduction (SRC-119 L216-L219).
- The introduction does not specify local versus remote MCP integration details; later units cover that split (SRC-119 L219).

## Sources

- SRC-119 — raw file: [[119-Introduction - Training - Microsoft Learn]]
