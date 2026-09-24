---
title: "MCP tool integration"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "How agents connect to MCP servers, discover tools dynamically, invoke them, restrict access and handle approval."
area: agents
source_ids: [SRC-2, SRC-24, SRC-25, SRC-43, SRC-45, SRC-91, SRC-108, SRC-109, SRC-233, SRC-235, SRC-236, SRC-240]
objectives: [P04, P16, G07, G09, G11]
objective_gaps: []
tags: []
aliases: ["MCP tool discovery", "MCP server", "MCP client", "remote MCP server", "dynamic tool discovery", "MCPTool"]
---

# MCP tool integration

## Summary

MCP tool integration is the pattern of connecting an agent to an MCP server so the agent can discover tool definitions at runtime, choose tools from descriptions and call external capabilities without hardcoded routing logic (SRC-233 L217–239; SRC-235 L230–239). The corpus covers this in the MCP tools module, Azure Language MCP server module, Azure Speech MCP server module and Work IQ module (SRC-108 L217–233; SRC-24 L217–265; SRC-25 L217–270; SRC-2 L217–239).

## The problem it solves

Manually integrating every tool requires bespoke dispatcher code, function schemas and updates whenever tools change. MCP moves the live tool catalog to a server; the agent or client can list what is available and call tools through a standard protocol (SRC-109 L80–150; SRC-233 L225–239).

## Mental model

**Synthesis:** Think of the MCP server as a live catalog plus execution endpoint. It publishes tool names, descriptions and parameter expectations; the MCP client asks for the catalog; the agent reasons over that catalog; and when the model decides a tool is needed, the client calls the server-side tool and returns the result to the agent (SRC-108 L217–233; SRC-235 L230–239).

## What the sources say

- The MCP discovery unit says tools can be added, updated or removed centrally without modifying agent code, while the agent can always use the latest tool version (SRC-233 L225–239).
- The server/client unit says a FastMCP server hosts tool definitions decorated with `@mcp.tool`; the client discovers them with `session.list_tools()`, wraps them and registers a `FunctionTool` with the agent (SRC-108 L217–233).
- The managed Foundry unit says that when using Foundry Agent Service, you do not manually create a client session; instead you create an `MCPTool` object, point it at the MCP server and add server information to the agent thread or tool configuration (SRC-240 L217–239).
- The Language MCP module says the agent can call multiple text-analysis tools in one turn and synthesize the results (SRC-235 L230–239; SRC-24 L259–265).
- The Speech MCP module says the agent calls speech-to-text or text-to-speech based on the prompt, and Speech MCP requires blob storage/SAS URL handling for audio files (SRC-236 L236–253; SRC-25 L217–270).
- The Work IQ source says an MCP server can expose tools, resources and prompts, and Work IQ is the MCP server for Microsoft 365 workplace data (SRC-2 L229–239).

## How it works in Azure

### Local MCP server/client path

The local path is explicit and code-centric: initialize the server, expose functions as tools, initialize a client session, call `session.list_tools()`, wrap each tool in an async function that invokes `session.call_tool(tool_name, tool_args)`, bundle wrappers into `FunctionTool`, and register them with the Azure AI Agent (SRC-108 L217–233).

### Managed remote MCP path

The managed Foundry path is more declarative: create an `MCPTool` with `server_label` and `server_url`, optionally restrict `allowed_tools`, configure custom headers for authentication, set approval behavior, add the MCP tool to the agent, and let the agent run invoke tools when needed (SRC-240 L217–239).

### Foundry Tools MCP servers

For Azure Language, the portal path is Tools → Connect a tool → Azure Language in Foundry Tools, with Foundry resource name, key-based authentication and project key; after connecting, the agent has text-analysis tools and the playground logs tool calls and results (SRC-24 L217–255). For Azure Speech, the setup adds storage: create a blob container, generate a SAS URL with read/add/create/write/list permissions, connect Azure Speech in Foundry Tools with resource/key and `X-Blob-Container-Url`, then the agent can synthesize or transcribe audio (SRC-25 L217–270).

## Code and configuration

- `server_label`: unique identifier for the MCP server (SRC-240 L223).
- `server_url`: remote MCP endpoint (SRC-240 L224).
- `allowed_tools`: optional list restricting which tools the agent may access (SRC-240 L225–226).
- `require_approval`: controls approval before tool invocation; the managed source says `always` is the default if no value is provided and `never` disables approval (SRC-240 L226–239).
- Custom headers: used for API keys, OAuth tokens or other required server headers (SRC-240 L227–229).

## Decision boundaries

| Question (SRC-108 L217–233; SRC-240 L217–239; SRC-24 L217–265; SRC-25 L217–270) | Local/client wrapper | Managed `MCPTool` | Foundry Tools MCP server |
|---|---|---|---|
| Main job | Turn an MCP server catalog into function tools for an agent (SRC-108 L217–233). | Connect a Foundry agent directly to a remote MCP server (SRC-240 L217–239). | Give an agent prebuilt Azure Language or Speech tools (SRC-24 L217–265; SRC-25 L217–270). |
| Best when | You are building or testing custom MCP tools (SRC-91 L278–292). | You have a reachable remote MCP endpoint (SRC-240 L217–228). | You need packaged text or speech capabilities (SRC-24 L217–255; SRC-25 L217–270). |
| Special concern | Wrapper code and async calls (SRC-108 L226–233). | Headers, allowed tools and approval (SRC-240 L226–239). | Resource keys; Speech also needs SAS-backed storage (SRC-25 L217–270). |

**Inference:** Choose MCP over direct function tools when the key requirement is dynamic discovery or reusable tool servers; choose direct function tools when the tool set is small, application-owned and not meant to be discovered from a server (SRC-108 L217–234; SRC-233 L225–239).

## Failure modes and misconceptions

- Do not assume approval is always off. The managed MCP source says approval can be required and `always` is the default if no value is provided (SRC-240 L234–239).
- Do not grant every tool by default when least privilege matters; `allowed_tools` can restrict the MCP tools an agent may access (SRC-240 L225).
- Do not expose secrets casually. Speech MCP requires a SAS URL, and the source says SAS URLs should be treated as secrets, scoped narrowly and not embedded in source code, prompts or chat transcripts (SRC-236 L244–253).
- Do not add tools without purpose; the tools unit says each tool adds latency and should match a clear requirement (SRC-91 L287–292).

## Solution Engineering transfer

**Inference:** Customer signal: "We have many internal APIs and tools that change often, and we do not want to redeploy each agent when a team adds a tool." Discovery question: "Who owns the tool catalog, and does the agent need all tools or only an approved subset?" Trade-off: MCP reduces integration churn but increases the need for server governance, headers/secrets management and approval design (SRC-233 L225–239; SRC-240 L226–240).

## Connections

- [[model-context-protocol]] — protocol entity behind this pattern.
- [[custom-tool-options]] — MCP compared with other tool options.
- [[human-in-the-loop-approval]] — approval request/response and first-use approvals.
- [[azure-language-mcp-server]] — Azure Language tool server.
- [[azure-speech-mcp-server]] — Azure Speech tool server.
- [[work-iq]] — Microsoft 365 MCP server.
- [[foundry-tools]] — catalog containing Language and Speech MCP tools.
- [[src-240-azure-ai-agents-mcp-servers]] — managed MCP integration source.
- [[src-108-integrate-agent-tools-mcp-server-client]] — local server/client source.
- *Also linked from:* [[a2a-agent-implementation]] · [[agent-tools]] · [[agent2agent-protocol]] · [[foundry-agent-service]] · [[function-calling]] · [[overview]]

## Sources

- SRC-2 — [[src-2-access-microsoft-365-data-work-iq]] — Work IQ MCP server.
- SRC-24 — [[src-24-connect-language-mcp-server-agent]] — Language MCP portal and SDK connection.
- SRC-25 — [[src-25-connect-speech-mcp-server-agent]] — Speech MCP connection and storage setup.
- SRC-43 — [[src-43-develop-speech-agent-azure-speech-mcp-server-episode-19]] — episode speech MCP flow.
- SRC-45 — [[src-45-develop-text-analysis-agent-azure-language-mcp-server-episode]] — episode language MCP flow.
- SRC-91 — [[src-91-extend-agent-capabilities-tools]] — MCP server types and tool best practices.
- SRC-108 — [[src-108-integrate-agent-tools-mcp-server-client]] — local MCP server/client pattern.
- SRC-109 — [[src-109-integrate-mcp-tools-azure-ai-agents-episode-9]] — presenter walkthrough of dynamic catalog and approval.
- SRC-233 — [[src-233-understand-mcp-tool-discovery]] — dynamic discovery rationale.
- SRC-235 — [[src-235-understand-azure-language-mcp-server]] — Language MCP behavior.
- SRC-236 — [[src-236-understand-azure-speech-mcp-server]] — Speech MCP behavior and storage requirement.
- SRC-240 — [[src-240-azure-ai-agents-mcp-servers]] — managed `MCPTool`, headers, allowed tools and approval.

## Open questions

- The corpus does not fully show all code blocks for the Language and Speech MCP server SDK examples; verify current SDK syntax before implementing from scratch.
