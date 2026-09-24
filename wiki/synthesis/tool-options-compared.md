---
title: "Tool integration options compared"
type: synthesis
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Decision table for built-in tools, function tools, Azure Functions, OpenAPI, Logic Apps, MCP, and A2A boundaries."
area: agents
source_ids: [SRC-4, SRC-25, SRC-26, SRC-37, SRC-91, SRC-103, SRC-104, SRC-107, SRC-108, SRC-110, SRC-134, SRC-179, SRC-205, SRC-233, SRC-236, SRC-240, SRC-254, SRC-255, SRC-256, SRC-257, SRC-259, SRC-265]
objectives: [P04, P16, G07, G08, G09, G10, G11, I05]
objective_gaps: []
tags: []
aliases: []
---

# Tool integration options compared

## Summary

**Synthesis:** Tools are the corpus's bridge from model text to action or grounded data: built-in service tools handle common hosted capabilities, function calling asks developer code to execute business logic, Azure Functions moves that logic to serverless Azure compute, OpenAPI specified tools expose REST APIs, Logic Apps provide low-code workflow connectivity, MCP servers publish dynamic reusable tool catalogs, and A2A connects to another agent rather than to a tool. (SRC-91 L218–297; SRC-104 L216–250; SRC-179 L217–230; SRC-108 L217–233; SRC-240 L217–239; SRC-37 L217–249)

## Scope and question

**Synthesis:** This page compares integration choices for agent or model capabilities: how the capability is described, who executes it, what changes without redeployment, what security/approval boundary is visible in the corpus, and when A2A is not a tool choice at all. (SRC-256 L219–263; SRC-104 L216–250; SRC-233 L217–239; SRC-37 L217–249)

## Synthesis

### Decision table

| **Synthesis:** Need or clue | Prefer | Deciding detail | Main caveat |
|---|---|---|---|
| Run Python analysis, calculations, charts, or file processing in a sandbox | Built-in Code Interpreter | The model gets a Python runtime in a sandbox. (SRC-254 L218–224) | Not for arbitrary external system access. (SRC-254 L252–253) |
| Answer from uploaded private files | Built-in File Search | Uploaded documents are indexed in a vector store and retrieved as chunks. (SRC-255 L218–241) | For enterprise indexes, use Azure AI Search instead of direct uploaded files. (SRC-91 L237–242) |
| Answer from current public web information | Built-in Web Search | The model retrieves fresh web information while generating. (SRC-257 L218–241) | Web quality, access, latency, and repeatability vary. (SRC-257 L247–252) |
| Run app-owned business logic or internal API logic | Function tool / function calling | The model requests a structured call, but application/framework code validates, runs, and returns output. (SRC-256 L219–248; SRC-4 L225–230) | The application must validate arguments, handle errors, authorize side effects, and return results. (SRC-256 L248–263) |
| Offload custom code to Azure serverless compute | Azure Functions tool | A deployed function handles serverless/event-driven work; the Foundry example sends requests through a storage queue. (SRC-104 L228–234) | The corpus gives a high-level pattern, not complete syntax. (SRC-104 L230–234) |
| Call an existing REST API with a machine-readable contract | OpenAPI specified tool | Foundry Agent Service can use an OpenAPI 3.0 spec with anonymous, API key, or managed identity auth at capture time. (SRC-104 L236–243) | **Stale-risk:** authentication support is platform-moving. (SRC-104 L238–240) |
| Connect low-code/no-code workflows across apps/data/services | Logic Apps | The corpus names Logic Apps as a low-code/no-code workflow option. (SRC-179 L222; SRC-110 L272–290) | This corpus does not provide full Logic Apps implementation steps. (SRC-179 L222) |
| Reuse a changing catalog of tools across agents | MCP | Tool definitions live on an MCP server; clients list and call tools dynamically. (SRC-233 L225–239; SRC-108 L217–233) | Govern server headers, approvals, and allowed tools. (SRC-240 L226–239) |
| Delegate to another autonomous remote agent | A2A | The callee has Agent Skills, an Agent Card, endpoint, executor, server, and client flow. (SRC-37 L224–249; SRC-107 L12–36; SRC-103 L12–39; SRC-26 L217–240) | A2A is agent-to-agent delegation, not a normal tool catalog. (SRC-37 L217–223; SRC-108 L217–233) |

### Custom tool boundary

| **Synthesis:** Question | Function tool | Azure Functions | OpenAPI | MCP | A2A |
|---|---|---|---|---|---|
| Who owns execution? | Application/framework code. (SRC-256 L219–248; SRC-4 L225–230) | Azure-hosted function. (SRC-104 L228–234) | External REST API described by OpenAPI 3.0. (SRC-104 L236–246) | MCP server tools invoked by client/session or managed `MCPTool`. (SRC-108 L217–233; SRC-240 L217–239) | Remote agent server/executor. (SRC-103 L12–39; SRC-107 L12–36) |
| What is discovered? | Function schema or signature; not a live server catalog. (SRC-4 L226–230; SRC-256 L234–246) | The function is configured as an agent tool after deployment. (SRC-104 L230–234) | API operations from the OpenAPI file. (SRC-104 L241–246) | Tool definitions from `session.list_tools()` or remote MCP config. (SRC-108 L221–233; SRC-240 L226–229) | Agent skills and metadata from Agent Card. (SRC-37 L224–249) |
| Best exam cue | `function_call_output`, custom functions, developer validation. (SRC-256 L240–263) | Serverless, triggers, queue messages, bindings. (SRC-104 L228–234; SRC-110 L203–250) | Swagger/OpenAPI 3.0, REST API contract. (SRC-104 L236–246; SRC-110 L250–271) | MCP server/client, `MCPTool`, dynamic catalog, approvals. (SRC-108 L217–233; SRC-240 L217–239) | Agent Card, Agent Executor, A2A server/client, remote agent delegation. (SRC-37 L232–249; SRC-205 L217–218) |

### Near-miss scenario contrasts

1. **Inference:** If a claims agent must call an in-process eligibility function and the app must validate every side effect, use function calling; if the same code should scale independently behind queues or triggers, use Azure Functions. (SRC-256 L219–263; SRC-104 L228–234; SRC-110 L203–250)

2. **Inference:** If the backend already has a REST API with a formal OpenAPI 3.0 description, use OpenAPI specified tools; if the backend is a set of evolving tools owned by several teams, use MCP so the tool catalog changes server-side. (SRC-104 L236–246; SRC-233 L225–239)

3. **Inference:** If the current agent needs speech-to-text as a discoverable tool over audio files, use the Azure Speech MCP server; if the requirement is live, interruptible conversation over audio streams, use Voice Live rather than an MCP file-tool flow. (SRC-236 L226–248; SRC-25 L239–270)

4. **Inference:** If the current agent must delegate to a specialist with its own model, advertised skills, endpoint, and executor, choose A2A; if it only needs a deterministic capability such as translate/transcribe/search, choose a tool path such as MCP, OpenAPI, or function calling. (SRC-37 L217–249; SRC-108 L217–233)

## Evidence map

| **Synthesis:** Claim | Sources |
|---|---|
| Foundry Agent Service exposes built-in, catalog, and custom tool categories. | SRC-91 L231–232 |
| Responses API tool types include code interpreter, web search, file search, and function. | SRC-259 L222–228 |
| Function calling is model-requested but application-executed. | SRC-256 L219–248; SRC-4 L225–230 |
| Custom tool options include function calling, Azure Functions, OpenAPI specified tools, Logic Apps, and MCP. | SRC-104 L216–250; SRC-179 L217–230; SRC-108 L217–233; SRC-240 L217–239 |
| MCP supports dynamic tool discovery and managed remote MCP configuration. | SRC-233 L225–239; SRC-108 L217–233; SRC-240 L217–239 |
| A2A publishes agent capabilities and connects clients to remote agents through cards, executors, servers, and clients. | SRC-37 L224–249; SRC-107 L12–36; SRC-103 L12–39; SRC-26 L217–240; SRC-205 L217–218 |

## Tensions

- **Stale-risk:** OpenAPI authentication modes, MCP approval defaults, and tool catalog contents are platform-moving details; preserve corpus wording and verify before production implementation. (SRC-104 L238–240; SRC-240 L234–239; SRC-91 L245–247)
- **Synthesis:** The corpus strongly explains tool architecture but collapses many code blocks, so this page should not be used as copy-paste SDK guidance. (SRC-104 L220–246; SRC-256 L233–246)
- **Synthesis:** Speech MCP is treated here as a key/SAS tool path because the cited Learn sources specify a Foundry resource key and blob-container SAS URL; this page does not teach an alternative managed-identity implementation. (SRC-236 L258–260; SRC-25 L230–239)

## Implications for the exam and for practice

**Inference:** In exam questions, do not stop at the word "tool"; identify what must be reached: Python runtime, uploaded files, public web, app-owned code, serverless function, REST API, low-code workflow, dynamic tool catalog, or another agent. (SRC-254 L218–224; SRC-255 L218–227; SRC-257 L218–227; SRC-256 L219–224; SRC-104 L228–246; SRC-108 L217–233; SRC-37 L217–249)

**Inference:** In practice, start with built-in tools when they fit, because custom integration adds execution, authentication, latency, validation, approval, and observability responsibilities; the corpus explicitly warns not to add tools without a clear purpose because each tool adds latency. (SRC-91 L287–292; SRC-256 L248–263; SRC-240 L226–239)

## Open questions

- The corpus does not provide full production governance patterns for tool approval, audit logging, secret rotation, or tool sandboxing across every option. (SRC-256 L248–263; SRC-240 L226–245)
- The corpus does not settle a universal A2A-versus-MCP deployment topology beyond the agent-versus-tool boundary. (SRC-37 L217–249; SRC-108 L217–233)

## Sources

- SRC-4 — [[src-4-add-tools-azure-ai-agent]] — Agent Framework service-provided and custom function tools.
- SRC-25 — [[src-25-connect-speech-mcp-server-agent]] — Speech MCP portal and code path.
- SRC-26 — [[src-26-connect-a2a-agent]] — A2A client discovery and requests.
- SRC-37 — [[src-37-define-a2a-agent]] — A2A skills and Agent Card.
- SRC-91 — [[src-91-extend-agent-capabilities-tools]] — Foundry agent tool catalog and best practices.
- SRC-103 — [[src-103-host-a2a-server]] — A2A server hosting.
- SRC-104 — [[src-104-how-integrate-custom-tools]] — function, Azure Functions, and OpenAPI custom tools.
- SRC-107 — [[src-107-implement-agent-executor]] — A2A executor.
- SRC-108 — [[src-108-integrate-agent-tools-mcp-server-client]] — MCP server/client wrapper path.
- SRC-110 — [[src-110-integrate-custom-tools-agent-episode-8]] — presenter comparison of custom functions, Azure Functions, OpenAPI, and Logic Apps.
- SRC-134 — [[src-134-introduction-discover-azure-ai-agents-a2a]] — A2A routing-agent scenario.
- SRC-179 — [[src-179-options-implementing-custom-tools]] — custom-tool option catalogue.
- SRC-205 — [[src-205-summary-discover-azure-ai-agents-a2a]] — A2A module summary.
- SRC-233 — [[src-233-understand-mcp-tool-discovery]] — dynamic MCP discovery.
- SRC-236 — [[src-236-understand-azure-speech-mcp-server]] — Speech MCP capabilities and storage.
- SRC-240 — [[src-240-azure-ai-agents-mcp-servers]] — managed `MCPTool`, headers, allowed tools, approval.
- SRC-254 — [[src-254-code-interpreter-tool]] — Code Interpreter boundary.
- SRC-255 — [[src-255-file-search-tool]] — File Search boundary.
- SRC-256 — [[src-256-function-tool]] — function tool behavior and practices.
- SRC-257 — [[src-257-web-search-tool]] — Web Search boundary.
- SRC-259 — [[src-259-what-are-tools]] — Responses API tool list.
- SRC-265 — [[src-265-why-custom-tools]] — motivation for custom business tools.
