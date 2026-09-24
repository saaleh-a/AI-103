---
title: "Azure Language MCP server"
type: entity
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "MCP server that exposes Azure Language text-analysis capabilities as agent tools in Foundry."
area: language
source_ids: [SRC-12, SRC-24, SRC-45, SRC-70, SRC-108, SRC-150, SRC-200, SRC-235]
objectives: [P04, G09]
objective_gaps: []
tags: ["tool"]
aliases: ["Language MCP server", "Azure Language tool", "Azure Language in Foundry Tools MCP server"]
---

# Azure Language MCP server

## Summary

The Azure Language MCP server connects AI agents to Azure Language text-analysis capabilities through Model Context Protocol so an agent can discover and call Language tools dynamically (SRC-235 L215–222; SRC-200 L215–221).

## What it is

MCP is described as an open protocol in which a host, client, and server let agents interact with external tools, data sources, and services; the server exposes tools, resources, and prompts that an agent can discover and call (SRC-235 L216–221). The Azure Language MCP server is the Language-specific server that exposes Azure Language NLP capabilities as tools any MCP-compatible agent can call (SRC-235 L225–226).

## What the sources say

- The server's primary role in the knowledge check is to expose Azure Language text-analysis capabilities as MCP tools for agents, not to train custom language models or deploy LLMs (SRC-150 L211–214).
- When connected, the agent receives a full list of available tools and its model chooses which tool or combination of tools to call from the user prompt (SRC-235 L230–239).
- The connection unit says to connect it in the Foundry portal from **Tools** → **Connect a tool** → **Azure Language in Foundry Tools**, using key-based authentication with `Ocp-Apim-Subscription-Key` (SRC-24 L222–231).
- The same unit says the first MCP tool use prompts for approval, and logs show each MCP tool call, input, and result (SRC-24 L240–245).
- The summary says the module teaches describing the server, dynamic MCP tool discovery and selection, portal connection, playground testing, and a Python client with the Foundry SDK (SRC-200 L215–221).

## Capabilities and components

The server exposes Azure Language NLP tools; the source explicitly associates examples such as language detection and named entity recognition with a multi-tool prompt, and the module exercise includes entity recognition and PII redaction tasks (SRC-235 L230; SRC-70 L211–212). The corpus also repeats that sentiment analysis, summarization, key phrase extraction, and other common language tasks are deprecated capabilities provided to support existing applications (SRC-235 L225–229).

**Synthesis:** The important components are the Foundry project and agent, the Language MCP connection, tool descriptions delivered through MCP, optional approval on first use, logs for verification, and client code that invokes the agent rather than calling Language APIs directly (SRC-24 L222–260; SRC-235 L230–239).

## How to use it

1. Create a Microsoft Foundry project with a deployed model and an agent with instructions (SRC-24 L215–221).
2. In the Foundry portal, open **Tools**, select **Connect a tool**, and choose **Azure Language in Foundry Tools** (SRC-24 L222–225).
3. Configure the Foundry resource name, key-based authentication, and `Ocp-Apim-Subscription-Key` credential (SRC-24 L226–229).
4. Use the connected tool in an agent; the agent then has access to all text-analysis tools exposed by the server (SRC-24 L230–231).
5. Test in the agent playground; prompts needing analysis cause the agent to identify tasks, call the relevant Language MCP tools, and return a combined response (SRC-24 L238–245).
6. Programmatic clients use `azure-ai-projects`, `azure-identity`, `AIProjectClient`, `get_openai_client()`, and `responses.create()`; the agent is referenced by name in `extra_body` (SRC-24 L247–255).
7. Instead of portal configuration, code can define an `MCPTool` connection with server label, URL, and `allowed_tools` to restrict which Language tools the agent can call (SRC-24 L256–260).

## Decision boundaries

| **Inference:** Need | Azure Language MCP server | Direct Azure Language SDK/API | Custom MCP server |
|---|---|---|---|
| Primary job | Let an agent discover and call Language tools (SRC-235 L225–239) | App code calls a specific Language operation (SRC-12 L224–235) | Expose custom tools you build (SRC-108 L216–234) |
| Tool selection | Agent matches prompt to tool descriptions (SRC-150 L216–219) | Developer chooses method in code | Developer defines custom tool descriptions |
| **Inference:** Exam cue | MCP, agent, tool discovery, approval, logs | `TextAnalyticsClient`, direct REST/SDK | `@mcp.tool`, custom server |

**Inference:** Choose the Azure Language MCP server when the scenario is an agent that should decide which text-analysis tool to call; choose direct SDK/API use when a normal application already knows the exact text-analysis operation to run (SRC-24 L240–260; SRC-235 L230–239).

## Naming and currency

The portal connection is named **Azure Language in Foundry Tools**, while the agent-facing wrapper is the Azure Language MCP server (SRC-24 L222–225; SRC-235 L225–226). **Stale-risk:** The server endpoint is available as a remote endpoint and the source also names a local MCP server option, but the captured line omits the actual URL format after the `Copy` marker (SRC-235 L240–245).

## Appearances in the corpus

- Understand unit: MCP roles, dynamic tool discovery, server capabilities, endpoint discussion (SRC-235 L215–245).
- Connect unit: portal connection, approval, logs, Foundry SDK Responses API client, `MCPTool` code configuration (SRC-24 L222–260).
- Exercise: build a text-analysis agent using entity recognition and PII redaction (SRC-70 L211–212).
- Knowledge check: primary role and tool-selection decision boundary (SRC-150 L211–219).
- Episode 16: says the server adds prebuilt Language capabilities such as PII, entity recognition, and language detection to an agent without custom code (SRC-45 L8–13; SRC-45 L57–69).

## Connections

- [[azure-language]] — underlying service exposed by the MCP server.
- [[model-context-protocol]] — protocol used by the server and client.
- [[mcp-tool-integration]] — broader pattern for MCP tools in agents.
- [[agent-tools]] — agents use the server as a tool source.
- [[language-detection]] — one Language capability the agent can call.
- [[named-entity-recognition]] — one Language capability the agent can call.
- [[pii-detection-and-redaction]] — one Language capability used in the exercise.
- *Also linked from:* [[overview]]

## Sources

- SRC-12 — [[src-12-azure-language-microsoft-foundry-tools]] — direct SDK/API contrast.
- SRC-24 — [[src-24-connect-language-mcp-server-agent]] — portal connection, testing, client pattern, `MCPTool` option.
- SRC-45 — [[src-45-develop-text-analysis-agent-azure-language-mcp-server-episode]] — episode explanation of the agent tool wrapper.
- SRC-70 — [[src-70-exercise-develop-text-analysis-agent]] — exercise tasks.
- SRC-108 — [[src-108-integrate-agent-tools-mcp-server-client]] — custom MCP server contrast.
- SRC-150 — [[src-150-knowledge-check-develop-text-analysis-agent-azure-language-mcp]] — assessed role and tool-selection boundary.
- SRC-200 — [[src-200-summary-develop-text-analysis-agent-azure-language-mcp-server]] — module outcomes.
- SRC-235 — [[src-235-understand-azure-language-mcp-server]] — core MCP and server behavior.

## Open questions

- Source issue: SRC-24 says a prompt requiring entity recognition and sentiment analysis calls `extract_named_entities_from_text` and `detect_language_from_text`; the second tool name appears inconsistent with sentiment analysis (SRC-24 L261–265).
