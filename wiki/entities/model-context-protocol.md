---
title: "Model Context Protocol (MCP)"
type: entity
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Open client-server protocol for agents to discover and call external tools, data sources, resources and prompts."
area: agents
source_ids: [SRC-2, SRC-37, SRC-91, SRC-108, SRC-109, SRC-233, SRC-235, SRC-236, SRC-240, SRC-256]
objectives: [P04, G09]
objective_gaps: []
tags: ["protocol"]
aliases: ["MCP", "Model Context Protocol", "MCP server", "MCP client", "MCP host"]
---

# Model Context Protocol (MCP)

## Summary

The Model Context Protocol is an open protocol that lets AI agents interact with external tools, data sources and services through a host, client and server architecture (SRC-235 L217–223; SRC-236 L217–223). Its central value in the corpus is dynamic tool discovery: an agent can query an MCP server at runtime, receive tool descriptions and call the right tool without hardcoding every integration (SRC-233 L217–239).

## What it is

MCP defines how an AI host, an MCP client and an MCP server communicate. The host is the application that runs the agent, the client manages server connections and communication, and the server exposes tools, resources and prompts that an agent can discover and call (SRC-235 L217–223; SRC-236 L217–223). Work IQ is also built on MCP and acts as an MCP server for Microsoft 365 data (SRC-2 L229–239).

## What the sources say

- SRC-233 describes MCP benefits: dynamic tool discovery, interoperability across LLMs and standardized security (SRC-233 L217–223).
- SRC-108 teaches the build pattern: a FastMCP server hosts tool definitions, a client initializes a session, uses `session.list_tools()`, generates wrappers and registers them with the agent (SRC-108 L217–233).
- SRC-109 presents MCP as a way out of hand-written dispatcher code: the server has a menu/catalog of tools and descriptions, and the agent can dynamically wire to the server and invoke tools (SRC-109 L80–150).
- SRC-235 and SRC-236 reuse the same protocol model for Azure Language and Azure Speech MCP servers; both say the agent receives a catalog and autonomously chooses tools from descriptions (SRC-235 L217–243; SRC-236 L217–243).
- SRC-2 extends the pattern to Work IQ: MCP servers can expose tools, resources and prompts; Work IQ is a Microsoft 365 data-focused MCP server (SRC-2 L229–239).
- SRC-91 says MCP servers appear in the Foundry Toolkit tool catalog and distinguishes remote, local and custom MCP servers (SRC-91 L274–292).

## Capabilities and components

- Host: the app running the agent, such as Microsoft Foundry or a custom app (SRC-235 L219–220).
- Client: the component inside the host that manages MCP server connections and communication (SRC-235 L220–221).
- Server: a program exposing tools, resources and prompts for discovery and calls (SRC-235 L221–223; SRC-2 L229–239).
- Tool catalog: the list of available tools and descriptions returned to the agent when it connects (SRC-235 L222–224; SRC-109 L80–150).
- Runtime calls: the client can list tools and invoke tool calls; in the local pattern this is represented by `session.list_tools()` and `session.call_tool()` (SRC-108 L221–233; SRC-109 L648–655).

## How to use it

There are two corpus patterns (SRC-108 L217–233; SRC-240 L217–239).

1. Local/client wrapping pattern: initialize an MCP server, decorate tools with `@mcp.tool`, initialize an MCP client session, fetch tools with `session.list_tools()`, wrap each tool in an async function that calls `session.call_tool`, bundle wrappers into `FunctionTool`, and register them to the agent (SRC-108 L217–233).
2. Managed Foundry remote pattern: create an `MCPTool` with a server label and URL, optionally set `allowed_tools`, `require_approval` and custom headers, add it to the agent's tools list, and let the agent automatically invoke server tools during a run (SRC-240 L217–239 on [[mcp-tool-integration]]).

## Decision boundaries

- MCP vs function calling: function calling defines tools directly in the application and leaves execution to the application; MCP moves tool definitions to a server that the agent/client can discover dynamically (SRC-108 L217–235; SRC-256 L219–263 on [[function-calling]]).
- MCP vs A2A: MCP is for agent-to-tool/data/service access; A2A is for agent-to-agent communication and collaboration (SRC-235 L217–223; SRC-37 L217–224).
- MCP vs a fixed API integration: MCP is strongest when tools change or many teams own tool servers; dynamic discovery allows tools to be added, updated or removed centrally without modifying agent code (SRC-233 L225–239).

## Naming and currency

The corpus consistently uses Model Context Protocol and MCP. **Stale-risk:** SRC-109 explicitly says MCP is moving fast, so implementation details and SDK helper classes should be checked against current documentation before production use (SRC-109 L655–681).

## Appearances in the corpus

- MCP tools module: source units and episode teach server/client discovery, local tools and managed MCP tool approval (SRC-108 L217–233; SRC-109 L80–150).
- Azure Language MCP server module: MCP exposes text-analysis tools such as language detection and named entity recognition for agent use (SRC-235 L217–250).
- Azure Speech MCP server module: MCP exposes speech-to-text and text-to-speech tools, with storage requirements for audio files (SRC-236 L217–253).
- Work IQ module: Work IQ uses MCP to expose Microsoft 365 workplace data to agents (SRC-2 L217–239).

## Connections

- [[mcp-tool-integration]] — implementation mechanics and approval behavior.
- [[custom-tool-options]] — MCP is one custom-tool option.
- [[azure-language-mcp-server]] — prebuilt Language MCP server.
- [[azure-speech-mcp-server]] — prebuilt Speech MCP server.
- [[work-iq]] — Microsoft 365 MCP server.
- [[agent2agent-protocol]] — closest protocol confusion.
- [[foundry-toolkit-for-vs-code]] — catalog surface for MCP servers.
- [[src-233-understand-mcp-tool-discovery]] — dynamic discovery source.
- [[src-108-integrate-agent-tools-mcp-server-client]] — server/client source.
- *Also linked from:* [[a2a-agent-implementation]] · [[foundry-iq]] · [[knowledge-bases-and-sources]] · [[microsoft-365-agent-integration]] · [[overview]]

## Sources

- SRC-2 — [[src-2-access-microsoft-365-data-work-iq]] — Work IQ and MCP servers.
- SRC-37 — [[src-37-define-a2a-agent]] — A2A contrast.
- SRC-91 — [[src-91-extend-agent-capabilities-tools]] — MCP server types in Foundry Toolkit.
- SRC-108 — [[src-108-integrate-agent-tools-mcp-server-client]] — MCP server/client integration.
- SRC-109 — [[src-109-integrate-mcp-tools-azure-ai-agents-episode-9]] — episode walkthrough and currency note.
- SRC-233 — [[src-233-understand-mcp-tool-discovery]] — dynamic tool discovery.
- SRC-235 — [[src-235-understand-azure-language-mcp-server]] — MCP definition in Language module.
- SRC-236 — [[src-236-understand-azure-speech-mcp-server]] — MCP definition in Speech module.
- SRC-240 — [[src-240-azure-ai-agents-mcp-servers]] — managed MCP tool object.
- SRC-256 — [[src-256-function-tool]] — function tool contrast.
