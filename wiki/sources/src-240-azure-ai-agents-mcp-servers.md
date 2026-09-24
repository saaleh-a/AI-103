---
title: "Use Azure AI agents with MCP servers"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains managed remote MCP integration for Microsoft Foundry agents, including MCPTool parameters, headers, and approvals."
area: agents
source_ids: [SRC-240]
objectives: [P04, P16, G09]
tags: [mcp, mcp-tool, remote-mcp-server, approval, foundry-agent-service]
aliases: ["SRC-240"]
source_kind: learn-unit
module: "Integrate MCP Tools with Azure AI Agents"
learning_path: "Develop AI agents on Azure"
unit: "4 of 7"
presenters: []
raw_file: "240-Use Azure AI agents with MCP servers - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/connect-agent-to-mcp-tools/4-use-azure-ai-agents-with-mcp"
ingest_depth: full
---
# Use Azure AI agents with MCP servers

*learn-unit · Integrate MCP Tools with Azure AI Agents · unit 4 of 7 · SRC-240*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-240 |
| Raw file | 240-Use Azure AI agents with MCP servers - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Integrate MCP Tools with Azure AI Agents |
| Unit / episode | 4 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/connect-agent-to-mcp-tools/4-use-azure-ai-agents-with-mcp |
| Teaching content | L210-240 of 270 |
| Content length | ~533 words |
| Capture quality | High: complete Learn teaching section. |
| Ingest depth | full |

## TL;DR

Microsoft Foundry agents can connect to remote MCP servers so the agent can access tools and contextual data beyond built-in functions (SRC-240 L216). In this managed path, the developer creates an `MCPTool` object rather than manually creating an MCP client session or adding function tools (SRC-240 L217). The source highlights server labels, server URLs, allowed tools, custom headers, and approval handling through `mcp_approval_request` and `mcp_approval_response` (SRC-240 L222-L239).

## Key claims

- MCP servers provide tools and contextual data that extend a Microsoft Foundry agent beyond built-in functions (SRC-240 L216).
- Azure AI Agent Service supports remote MCP servers so an agent can connect to a server and access tools (SRC-240 L216).
- With Microsoft Foundry Agent Service, the developer does not manually create an MCP client session or add function tools; instead, they create an MCP tool object (SRC-240 L217).
- Multiple MCP servers can be connected by adding them as separate tools (SRC-240 L222).
- `MCPTool` can include `server_label`, `server_url`, optional `allowed_tools`, and optional `require_approval` parameters (SRC-240 L222-L226).
- Custom headers can pass authentication keys, OAuth tokens, or other required headers (SRC-240 L227-L229).
- If approval is required, the agent response includes an `mcp_approval_request`, and approval is sent back with an `mcp_approval_response` containing `approval_request_id` and `approve` (SRC-240 L239).

## How it works

The source describes a managed remote-server flow. First, the developer has a remote MCP endpoint and a Microsoft Foundry agent configured to use the MCP tool (SRC-240 L219-L221). Then the developer creates an `MCPTool` with the server label and URL, optionally restricts tools with `allowed_tools`, supplies headers with `update_headers`, and sets approval behavior with `require_approval` (SRC-240 L222-L235).

At run time, the Azure MCP Tool object handles invocation automatically; the developer does not wrap function tools or call `session.call_tool` manually (SRC-240 L231). The developer adds the MCP tool to the agent tools list, invokes a prompt, and receives results from invoked tools in the response (SRC-240 L237-L238). If the tool call requires approval, the model returns an approval request and waits for an approval response (SRC-240 L239).

## Code and API patterns

The source names these objects and parameters (SRC-240 L222-L239):

```text
MCPTool
server_label
server_url
allowed_tools
require_approval
update_headers
mcp_approval_request
mcp_approval_response
approval_request_id
approve
```

`server_label` identifies the server, `server_url` provides its endpoint, `allowed_tools` limits accessible tools, `require_approval` controls human approval, `update_headers` applies required headers, and the approval request/response objects carry approval workflow state (SRC-240 L222-L239).

## Key terms

- **Remote MCP server endpoint:** The URL of an MCP server, such as the example endpoint in the source (SRC-240 L219-L220).
- **MCPTool:** The object used to connect a Foundry agent to an MCP server in this source's managed integration path (SRC-240 L217-L222).
- **Approval request:** An `mcp_approval_request` in the agent response when a tool with required approval is about to be invoked (SRC-240 L239).
- **Custom headers:** Headers used for API keys, OAuth tokens, or other server requirements (SRC-240 L227-L229).

## Decision boundaries and exam cues

- **Inference:** Choose this managed `MCPTool` path when the scenario involves a remote MCP server and Microsoft Foundry Agent Service support, because the source explicitly says no manual MCP client session or function tools are needed (SRC-240 L216-L217).
- **Inference:** Choose the local client/wrapper pattern from SRC-108 when a local server must be wrapped into agent function tools, because this source's no-wrapper claim applies to the Azure MCP Tool object path (SRC-240 L231; SRC-108 L226-L233).
- **Inference:** If the question mentions human approval before invoking an MCP tool, look for `require_approval`, `mcp_approval_request`, and `mcp_approval_response` (SRC-240 L226; SRC-240 L234-L239).

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** The source gives `always` as the default approval value if no value is provided; verify SDK behavior before production use because approval defaults are safety-critical (SRC-240 L234-L236).
- The source says custom headers can pass authentication keys or OAuth tokens, but it does not specify secure storage or token refresh patterns (SRC-240 L227-L229).

## Relation to other sources

- [[src-108-integrate-agent-tools-mcp-server-client]] describes the lower-level client/session/function-wrapper flow that this source says is unnecessary for the managed remote `MCPTool` path (SRC-108 L220-L233; SRC-240 L217-L231).
- [[src-233-understand-mcp-tool-discovery]] explains the dynamic discovery concept that remote MCP integration builds on (SRC-233 L223-L239).
- [[src-109-integrate-mcp-tools-azure-ai-agents-episode-9]] demonstrates a remote Microsoft Learn MCP server with approval behavior (SRC-109 L241-L341; SRC-109 L385-L408).
- [[src-193-summary-integrate-mcp-tools-azure-ai-agents]] summarizes integrating external tools with Foundry Agent Service through MCP (SRC-193 L212-L216).

## Connections

- [[model-context-protocol]] — protocol behind the remote server integration.
- [[mcp-tool-integration]] — concept page for this managed integration pattern.
- [[human-in-the-loop-approval]] — approval behavior is central to this source.
- [[foundry-agent-service]] — service used to connect the agent to MCP servers.
- [[agent-tools]] — MCP servers add external tools to the agent.
- *Module units:* [[src-119-introduction-integrate-mcp-tools-azure-ai-agents|1 Introduction]] · [[src-233-understand-mcp-tool-discovery|2 Understand MCP Tool Discovery]] · [[src-108-integrate-agent-tools-mcp-server-client|3 Integrate Agent Tools Using an MCP Server and Client]] · [[src-60-exercise-connect-mcp-tools-azure-ai-agents|5 Exercise - Connect MCP Tools to Azure AI Agents]] · [[src-158-module-assessment-integrate-mcp-tools-azure-ai-agents|6 Module Assessment]] · [[src-193-summary-integrate-mcp-tools-azure-ai-agents|7 Summary]] · [[src-109-integrate-mcp-tools-azure-ai-agents-episode-9|episode 9]]

## Open questions

- The source does not show full SDK code for creating `MCPTool` or sending `mcp_approval_response` (SRC-240 L232-L239).
- The source does not explain how `allowed_tools` names are discovered or validated (SRC-240 L225).

## Sources

- SRC-240 — raw file: [[240-Use Azure AI agents with MCP servers - Training - Microsoft Learn]]

