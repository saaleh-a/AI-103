---
title: "Integrate MCP tools with Azure AI agents - AI-103 - Episode 9"
type: source
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Episode walkthrough of MCP discovery, remote and local MCP server integration, approvals, and Foundry agent demos."
area: agents
source_ids: [SRC-109]
objectives: [P04, P16, G09]
tags: [episode, mcp, azure-ai-agents, foundry, approval, fastmcp]
aliases: ["SRC-109"]
source_kind: episode
module: "Integrate MCP tools with Azure AI agents"
learning_path: null
unit: null
presenters: ["ROB FOULKROD"]
raw_file: "109-Integrate MCP tools with Azure AI agents - AI-103 - Episode 9.md"
url: "https://www.youtube.com/watch?v=pQ9yEEcXNeE"
ingest_depth: full
---
# Integrate MCP tools with Azure AI agents - AI-103 - Episode 9

*episode · Integrate MCP tools with Azure AI agents · SRC-109*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-109 |
| Raw file | 109-Integrate MCP tools with Azure AI agents - AI-103 - Episode 9.md |
| Kind | episode |
| Learning path | null |
| Module | Integrate MCP tools with Azure AI agents |
| Unit / episode | Episode 9 |
| Presenter(s) | ROB FOULKROD |
| URL | https://www.youtube.com/watch?v=pQ9yEEcXNeE |
| Teaching content | L3-691 of 691 |
| Content length | ~3,108 words |
| Capture quality | Medium: useful transcript, but auto-captioned with fragmented lines and one inaudible section. |
| Ingest depth | full |

## TL;DR

Rob Foulkrod frames MCP as a single open protocol through which tools and agents can find each other and work together (SRC-109 L4-L19). The episode contrasts manually describing and dispatching function tools with using an MCP server that carries a catalog of available tools, descriptions, and invocation handling (SRC-109 L26-L103). It demonstrates a remote Microsoft Learn MCP server with approval, then a local inventory MCP server wrapped into function tools for a Foundry agent (SRC-109 L241-L341; SRC-109 L421-L532).

## Key claims

- MCP promises a shared protocol so agents and tools can find each other and work together (SRC-109 L4-L14).
- The session covers MCP tool discovery, MCP client setup, and exposing tools to an agent (SRC-109 L20-L24).
- Manual function-tool setup requires describing functions, describing parameters, and writing dispatch code, which becomes burdensome for many tools (SRC-109 L26-L74).
- An MCP server can be remote or local and can expose a catalog of tools and descriptions while handling invocation of functions (SRC-109 L79-L90).
- An MCP client can ask for the collection of tools, treat the list as part of the agent context, and invoke a needed function automatically (SRC-109 L120-L138).
- The remote demo uses `AI project client`, `MCP tool`, `MCP approval response`, `DefaultAzureCredential`, and an OpenAI client from the project client (SRC-109 L200-L240).
- The local demo uses Python FastMCP for an inventory server and maps discovered MCP tools into function-tool wrappers for the agent (SRC-109 L421-L532).

## How it works

The episode's mental model is a tool catalog. Instead of manually writing JSON descriptions and dispatch glue for every function, the MCP server carries the tool menu and descriptions, and the agent or MCP client asks for available tools when needed (SRC-109 L26-L103). The presenter says the client can receive the list as part of the agent's context and use it to reason about which function to invoke (SRC-109 L120-L138).

The remote demo begins from a Foundry project with deployed models and a project endpoint stored in an environment file (SRC-109 L165-L192). The code uses `DefaultAzureCredential`, builds an `AI project client`, gets an OpenAI client, defines an MCP tool with a local label and URL, and requires approval before use (SRC-109 L203-L264). The agent is created with model, instructions, and the MCP tool, and the prompt asks for Azure CLI commands to create an Azure Container App with managed identity (SRC-109 L271-L299). When the agent wants to invoke the MCP server, it emits an approval request; the app can prompt the user and send an `MCP approval response` with approval set to true (SRC-109 L300-L341). The demo output includes CLI commands and a reference to where the information was found (SRC-109 L385-L408).

The local demo builds a FastMCP inventory server with inventory and weekly-sales tools, starts that server as a separate process, opens an MCP session, lists tools, and maps them into function-tool wrappers because the remote Foundry agent cannot directly reach the local machine (SRC-109 L421-L532). The agent then answers inventory prompts, including stock levels, restocking, clearance, and best-seller questions, by calling tools and evaluating responses (SRC-109 L548-L608).

## Segment guide

- **Opening and scope, L3-L25:** MCP is introduced as an open protocol for agents and tools; the episode will cover discovery, client setup, and exposing tools to an agent (SRC-109 L3-L25).
- **Why MCP exists, L26-L103:** The presenter contrasts manual function definitions, parameter descriptions, JSON documents, and dispatch code with MCP's server-side catalog and invocation handling (SRC-109 L26-L103).
- **Discovery model, L104-L164:** The presenter explains server-side tool definitions, client sessions that request available tools, and planned demos with remote and local MCP servers (SRC-109 L104-L164).
- **Remote MCP setup, L165-L240:** The demo uses a Foundry project endpoint, deployed model, `AI project client`, `MCP tool`, `MCP approval response`, `DefaultAzureCredential`, and an OpenAI client (SRC-109 L165-L240).
- **Remote MCP approval flow, L241-L408:** The demo labels the MCP server, supplies its URL, requires approval, creates an agent, sends a prompt, receives an approval request, sends approval, and gets CLI-command output with a reference (SRC-109 L241-L408).
- **Local FastMCP server, L412-L455:** The presenter explains that not every desired tool has an MCP wrapper, then builds a Python FastMCP inventory server with inventory and sales tools (SRC-109 L412-L455).
- **Local client and wrappers, L456-L532:** The client starts the server process, opens a session, lists tools, and maps MCP tools into function-call wrappers for the Foundry agent (SRC-109 L456-L532).
- **Inventory demo, L533-L608:** The agent calls inventory and sales tools to answer stock, restocking, clearance, and best-seller questions (SRC-109 L533-L608).
- **Review and close, L609-L691:** The presenter contrasts remote and local MCP servers, reviews server role and list-tools discovery, summarizes MCP standardization, and notes the ecosystem is evolving (SRC-109 L609-L691).

## Code and API patterns

The episode names these implementation elements (SRC-109 L200-L240; SRC-109 L421-L532):

```text
AI project client
MCP tool
MCP approval response
DefaultAzureCredential
Open AI client
FastMCP
list tools
function tool wrappers
```

`DefaultAzureCredential` authenticates, `AI project client` connects to the Foundry project, and the project client provides the OpenAI client in the remote demo (SRC-109 L225-L240). The `MCP tool` wraps the remote server's label and URL, and `MCP approval response` carries approval back after an approval request (SRC-109 L207-L223; SRC-109 L241-L341). In the local demo, FastMCP builds the server, a client session lists tools, and wrappers are built because the remote agent has no connection to the local machine (SRC-109 L421-L532).

## Key terms

- **MCP server:** A remote or local server with a catalog of tools, descriptions, and invocation handling (SRC-109 L79-L90).
- **MCP client:** The component that lists tools and invokes tool calls; in some cases the client can be the agent (SRC-109 L120-L143).
- **MCP approval response:** The object the demo sends after the app decides to approve a requested MCP tool call (SRC-109 L330-L341).
- **FastMCP:** The Python library the demo uses to build a local inventory MCP server (SRC-109 L421-L433).

## Decision boundaries and exam cues

- **Inference:** MCP is a fit when many tools would otherwise require repeated manual descriptions and dispatch code, because the presenter uses 10/20/40/50 tools as the scale problem (SRC-109 L68-L74).
- **Inference:** Use the remote `MCP tool` pattern when the MCP server is addressable by URL, and use local wrapper logic when the server lives on the developer machine and the remote agent cannot directly connect to it (SRC-109 L158-L163; SRC-109 L241-L270; SRC-109 L512-L532).
- **Inference:** If a scenario includes sensitive or consequential tool calls, the approval path matters; the demo requires approval instead of letting the agent call tools blindly (SRC-109 L255-L264; SRC-109 L300-L341).

## Assessment items

The episode includes review questions, but not a formal Learn assessment with option lists. It asks what role the MCP server plays and answers that the server hosts definitions and makes them discoverable to the client (SRC-109 L631-L638). It asks how the client retrieves tools and answers that a tool-list call retrieves the catalog (SRC-109 L639-L644).

## Tensions, caveats and currency

- **Stale-risk:** The presenter says MCP is moving fast and agent protocols and ecosystems are constantly evolving, so implementation details should be rechecked against current SDK documentation (SRC-109 L675-L682).
- The transcript is auto-captioned and includes an inaudible section during console navigation, so fine-grained code reconstruction should rely on Learn units or current SDK docs rather than this transcript alone (SRC-109 L343-L360).
- The presenter says the idea is from Anthropic; the source does not provide a standards document or version reference (SRC-109 L75-L79).

## Relation to other sources

- [[src-233-understand-mcp-tool-discovery]] is the text unit for the discovery model described in the episode (SRC-233 L216-L239; SRC-109 L79-L138).
- [[src-108-integrate-agent-tools-mcp-server-client]] is the text unit for the local server/client wrapper pattern shown in the inventory demo (SRC-108 L216-L234; SRC-109 L421-L532).
- [[src-240-azure-ai-agents-mcp-servers]] is the text unit for the remote `MCPTool`, headers, and approval path shown in the Microsoft Learn MCP demo (SRC-240 L216-L240; SRC-109 L241-L408).
- [[src-158-module-assessment-integrate-mcp-tools-azure-ai-agents]] tests the server role and list-tools discovery summarized in the episode review (SRC-158 L10-L22; SRC-109 L631-L644).

## Connections

- [[model-context-protocol]] — central protocol of the episode.
- [[mcp-tool-integration]] — remote and local tool integration demos.
- [[foundry-agent-service]] — Foundry agent is the agent host in the demos.
- [[human-in-the-loop-approval]] — approval is explicitly demonstrated.
- [[function-calling]] — local MCP tools are wrapped into function tools.
- [[custom-tool-options]] — MCP is presented as another way to add tools.
- [[tool-options-compared]] — useful for contrasting manual function tools and MCP.

## Open questions

- The transcript does not provide full source code for the demos, so exact imports and SDK syntax remain incomplete (SRC-109 L200-L240; SRC-109 L421-L532).
- The episode does not define production hosting patterns for local MCP servers or secure approval UX beyond the demonstration flow (SRC-109 L456-L532).

## Sources

- SRC-109 — raw file: [[109-Integrate MCP tools with Azure AI agents - AI-103 - Episode 9]]

