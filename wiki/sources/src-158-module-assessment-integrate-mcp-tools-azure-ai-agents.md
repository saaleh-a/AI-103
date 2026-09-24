---
title: "Module Assessment — Integrate MCP Tools with Azure AI Agents"
type: source
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Assessment capture with MCP server role, list_tools discovery, and async wrapper questions; first question stem is missing."
area: agents
source_ids: [SRC-158]
objectives: []
tags: [assessment, mcp, list-tools, async-tools]
aliases: ["SRC-158"]
source_kind: learn-unit
module: "Integrate MCP Tools with Azure AI Agents"
learning_path: "Develop AI agents on Azure"
unit: "6"
presenters: []
raw_file: "158-Module Assessment - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/connect-agent-to-mcp-tools/6-knowledge-check"
ingest_depth: partial
---
# Module Assessment — Integrate MCP Tools with Azure AI Agents

*learn-unit · Integrate MCP Tools with Azure AI Agents · unit 6 · SRC-158*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-158 |
| Raw file | 158-Module Assessment - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Integrate MCP Tools with Azure AI Agents |
| Unit / episode | 6 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/connect-agent-to-mcp-tools/6-knowledge-check |
| Teaching content | L8-23 of 37 |
| Content length | ~123 words |
| Capture quality | Medium: assessment options are captured, but question 1's stem and explicit checked answers are missing. |
| Ingest depth | partial |

## TL;DR

This assessment capture tests MCP server role, MCP client tool discovery, and async client-side wrappers (SRC-158 L10-L22). It shows the complete second and third question stems, but the first question stem is not present in the captured text (SRC-158 L10-L14). The capture does not mark checked answers, so answers are recorded as not shown in capture (SRC-158 L10-L23).

## Key claims

- One assessment item includes the option that an MCP server hosts tool definitions and makes them discoverable by the client (SRC-158 L10-L12).
- The second assessment item asks how an MCP client retrieves available tools from the MCP server (SRC-158 L13-L17).
- One listed option for tool retrieval is calling `session.list_tools()` to get the current tool catalog (SRC-158 L15).
- The third assessment item asks why MCP tools should be wrapped in async functions on the client side (SRC-158 L18-L22).
- One listed option says async wrappers enable asynchronous invocation so the agent can call tools without blocking (SRC-158 L21).

## How it works

The capture functions as a knowledge check rather than a teaching unit. It reinforces that the server is responsible for making tool definitions discoverable, the client retrieves tools with a list-tools call, and async wrappers matter for invocation behavior (SRC-158 L10-L22).

## Code and API patterns

The assessment names one client discovery call (SRC-158 L14-L15):

```text
session.list_tools()
```

The option says this call gets the current tool catalog from the MCP server (SRC-158 L14-L15).

## Key terms

- **MCP client:** The component in the assessment question that retrieves available tools from the MCP server (SRC-158 L14-L17).
- **Async functions:** Client-side wrappers mentioned in the assessment as a way to avoid blocking during tool calls (SRC-158 L19-L22).
- **Tool catalog:** The current catalog retrieved by `session.list_tools()` in the assessment option (SRC-158 L14-L15).

## Decision boundaries and exam cues

- **Inference:** If an assessment asks for MCP tool discovery, prefer `session.list_tools()` over static files or WebSocket subscriptions, because that is the option aligned with the module's client/server unit (SRC-158 L14-L17; SRC-108 L221-L230).
- **Inference:** If an assessment asks about async wrappers, connect them to nonblocking tool invocation rather than user input or automatic REST endpoint generation (SRC-158 L19-L22).

## Assessment items

1. **Question 1:** Stem not shown in capture (SRC-158 L10-L12).  
   - Runs the AI agent and processes user prompts directly (SRC-158 L10).  
   - Manages network connections between multiple agents (SRC-158 L11).  
   - Hosts tool definitions and makes them available for discovery by the client (SRC-158 L12).  
   - Answer: answer not shown in capture (SRC-158 L10-L23).

2. **Question 2:** How does an MCP client retrieve available tools from the MCP server? (SRC-158 L13-L14)  
   - By calling `session.list_tools()` to get the current tool catalog (SRC-158 L15).  
   - By reading a static JSON file from the server directory (SRC-158 L16).  
   - By subscribing to server events via a WebSocket connection (SRC-158 L17).  
   - Answer: answer not shown in capture (SRC-158 L10-L23).

3. **Question 3:** Why should MCP tools be wrapped in async functions on the client-side? (SRC-158 L18-L19)  
   - To allow the agent to wait for user input (SRC-158 L20).  
   - To enable asynchronous invocation so the agent can call tools without blocking (SRC-158 L21).  
   - To convert the functions into REST API endpoints automatically (SRC-158 L22).  
   - Answer: answer not shown in capture (SRC-158 L10-L23).

## Tensions, caveats and currency

- The first question stem is absent, so the page cannot reconstruct the full assessment item without inference (SRC-158 L10-L12).
- The capture does not show which answers were selected or marked correct (SRC-158 L10-L23).

## Relation to other sources

- [[src-108-integrate-agent-tools-mcp-server-client]] directly teaches `session.list_tools()`, async wrappers, and server tool definitions tested here (SRC-108 L218-L233).
- [[src-233-understand-mcp-tool-discovery]] supplies the conceptual background for discovery and tool catalogs (SRC-233 L223-L239).
- [[src-193-summary-integrate-mcp-tools-azure-ai-agents]] summarizes discovery, wrappers, and dynamic registration at module end (SRC-193 L212-L213).

## Connections

- [[mcp-tool-integration]] — assessment topic.
- [[model-context-protocol]] — protocol being assessed.
- [[agent-tools]] — assessed concepts all concern tool access.
- [[function-calling]] — async wrappers and function tools overlap with function-style tool invocation.
- *Module units:* [[src-119-introduction-integrate-mcp-tools-azure-ai-agents|1 Introduction]] · [[src-233-understand-mcp-tool-discovery|2 Understand MCP Tool Discovery]] · [[src-108-integrate-agent-tools-mcp-server-client|3 Integrate Agent Tools Using an MCP Server and Client]] · [[src-240-azure-ai-agents-mcp-servers|4 Use Azure AI agents with MCP servers]] · [[src-60-exercise-connect-mcp-tools-azure-ai-agents|5 Exercise - Connect MCP Tools to Azure AI Agents]] · [[src-193-summary-integrate-mcp-tools-azure-ai-agents|7 Summary]] · [[src-109-integrate-mcp-tools-azure-ai-agents-episode-9|episode 9]]

## Open questions

- What was the missing stem for question 1 is not recoverable from this capture (SRC-158 L10-L12).
- Which answers the Learn page marked correct are not shown in this capture (SRC-158 L10-L23).

## Sources

- SRC-158 — raw file: [[158-Module Assessment - Training - Microsoft Learn]]


