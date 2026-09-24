---
title: "Custom tool options"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Ways to extend Foundry agents with custom actions: function tools, Azure Functions, OpenAPI, Logic Apps and MCP."
area: agents
source_ids: [SRC-91, SRC-104, SRC-108, SRC-110, SRC-179, SRC-233, SRC-240, SRC-256, SRC-265]
objectives: [P04, G07, G08, G09]
objective_gaps: []
tags: []
aliases: ["custom tools", "OpenAPI tools", "Azure Functions tools", "function tools", "Logic Apps tools", "MCP tools"]
---

# Custom tool options

## Summary

Custom tools turn an agent from a text-only responder into a system that can retrieve live data, call business logic, trigger workflows and interact with external services. The corpus presents five main options: function tools/function calling, Azure Functions, OpenAPI specified tools, Azure Logic Apps and MCP servers (SRC-179 L217–230; SRC-104 L216–249; SRC-91 L267–273).

## The problem it solves

Without tools, an agent can only generate text from its model context; with tools, it can act on user requests by calling APIs, executing code, searching files or using external services (SRC-91 L217–221). Custom tools are useful when built-in tools do not cover the business-specific system, data source or action the agent needs, such as querying a CRM, processing refunds or fetching weather data (SRC-265 L217–233).

## Mental model

**Synthesis:** A custom tool is a contract between the model and executable capability. The contract describes what the tool does, its parameters and when it should be used; the model decides whether the user's request needs that tool, and the surrounding agent framework or application executes the tool and returns results for the final answer (SRC-104 L248–249; SRC-256 L219–248).

## What the sources say

- SRC-179 is the option catalogue: Foundry Agent Service custom tool options include OpenAPI specified tools, Azure Functions and function calling; it also names Azure Logic Apps as a low-code/no-code workflow option (SRC-179 L217–230).
- SRC-104 operationalizes the options: function calling executes predefined functions based on user input, Azure Functions provide serverless event-driven processing, and OpenAPI tools use OpenAPI 3.0 specifications for external APIs (SRC-104 L217–240).
- SRC-110 adds the presenter decision boundary: custom functions run dispatcher code locally, Azure Functions offload compute, OpenAPI fits REST/Swagger-described APIs, and Logic Apps are a low-code sibling to Azure Functions that can expose HTTP endpoints (SRC-110 L180–290).
- SRC-256 explains the generic function tool pattern: the model emits a structured function call, application code runs the function, and the application returns a function output so the model can finish the response (SRC-256 L219–248).
- SRC-233 and SRC-108 introduce MCP as a dynamic-discovery option: tools live on an MCP server, the client discovers them with `session.list_tools()`, wraps them and registers them with the agent (SRC-233 L217–239; SRC-108 L217–233).
- SRC-91 places MCP servers in the Foundry tool catalog and distinguishes remote, local and custom MCP servers (SRC-91 L268–273).

## How it works in Azure

- Function tools / function calling keep execution under the application or framework's control: the model requests a function call, but the application must validate arguments, run the code, handle errors and return the result (SRC-256 L243–259).
- Azure Functions move the executable logic into Azure serverless compute. In the Foundry Agent Service example, the agent sends requests to an Azure Function through a storage queue and processes the results (SRC-104 L228–234).
- OpenAPI specified tools let the agent call an external HTTP API described by an OpenAPI 3.0 spec. The corpus says the Foundry Agent Service uses OpenAPI 3.0 specified tools and supports anonymous, API key and managed identity authentication for those tools at capture time (SRC-104 L236–243).
- Logic Apps provide a low-code/no-code workflow option that connects apps, data and services (SRC-179 L222).
- MCP servers publish a live catalog of tools. With the managed Foundry MCP tool path, you create an `MCPTool` pointing at a server URL, optionally restrict `allowed_tools`, pass headers and choose approval behavior (SRC-240 L217–239).

## Code and configuration

The corpus captures show several examples as collapsed `Python Copy` blocks, so this page preserves the architecture rather than inventing syntax (SRC-104 L220–246; SRC-256 L233–238). The reliable implementation structures are:

1. Function tool: define functions, expose them in the `tools` array, let the model emit a function call, run the function in application code, return `function_call_output`, then let the model complete the answer (SRC-256 L243–248).
2. Azure Function tool: deploy the function first, then add it to the agent definition as an Azure Function tool; the example uses queue-mediated request and result handling (SRC-104 L230–234).
3. OpenAPI tool: create a JSON OpenAPI file and register it in the agent definition (SRC-104 L241–246).
4. MCP local/client pattern: run an MCP server, fetch tools with `session.list_tools()`, wrap each as an async function that calls `session.call_tool`, bundle those wrappers into `FunctionTool`, and register that with the agent (SRC-108 L221–233).
5. Managed MCP tool: create an `MCPTool` with `server_label` and `server_url`, update headers if needed, add it to the agent tools list, and handle approval requests if approval is required (SRC-240 L217–239).

## Decision boundaries

| If the need is... (SRC-104 L216–249; SRC-179 L217–222) | Prefer... | Why |
|---|---|---|
| Small custom logic controlled by your app | Function tool | The application remains the executor and validator (SRC-256 L219–259). |
| Event-driven or compute-offloaded custom code | Azure Functions | Functions provide serverless processing and triggers such as HTTP or queues (SRC-104 L228–234). |
| Existing REST API with a machine-readable contract | OpenAPI specified tool | The agent can use an OpenAPI 3.0 spec rather than hand-written routing code (SRC-104 L236–246). |
| Low-code workflow across apps/data/services | Logic Apps | The corpus names Logic Apps as low-code/no-code workflow connectivity (SRC-179 L222). |
| Many evolving tools, reusable across agents | MCP | Tool definitions stay on the server and can change without redeploying the agent (SRC-108 L217–234; SRC-233 L217–239). |

**Inference:** The closest exam confusion is function tool vs Azure Function. The deciding detail is where the execution lives: local application/framework code for a function tool, Azure serverless infrastructure for Azure Functions (SRC-110 L180–250; SRC-256 L219–259).

## Failure modes and misconceptions

- Assuming the model executes business logic directly is wrong: in function calling, the model requests a function call and your application executes it (SRC-256 L219–224).
- Tool descriptions are not cosmetic. The corpus says the agent chooses tools from meaningful names and well-documented parameters (SRC-104 L248–249).
- Adding unnecessary tools increases latency; the tools unit advises starting with built-in tools and matching tools to clear requirements (SRC-91 L287–292).
- **Stale-risk:** Authentication modes and preview status can change; the corpus specifically marks some hosted tools as preview or experimental, and names OpenAPI auth types at capture time (SRC-91 L224–226; SRC-104 L238–240).

## Solution Engineering transfer

**Inference:** Customer signal: "Our agent must check order status, process refunds, or call internal systems." Discovery question: "Is the capability already exposed as an API, an Azure Function, a workflow, or a tool server?" Trade-off: choose the least custom option that keeps execution, approval and observability under the right owner (SRC-179 L217–230; SRC-265 L217–233).

## Connections

- [[agent-tools]] — custom options sit within the wider tool family.
- [[function-calling]] — function tools are the base model-to-code pattern.
- [[azure-functions]] — one serverless custom-tool implementation.
- [[model-context-protocol]] — protocol behind MCP tool options.
- [[mcp-tool-integration]] — dynamic-discovery and approval details.
- [[human-in-the-loop-approval]] — sensitive tool calls can require approval.
- [[tool-options-compared]] — synthesis page for option choice.
- [[src-179-options-implementing-custom-tools]] — option catalogue.
- [[src-104-how-integrate-custom-tools]] — implementation unit.
- *Also linked from:* [[agent2agent-protocol]] · [[azure-speech-mcp-server]] · [[overview]]

## Sources

- SRC-91 — [[src-91-extend-agent-capabilities-tools]] — Foundry Toolkit tool catalog and MCP server types.
- SRC-104 — [[src-104-how-integrate-custom-tools]] — custom tool implementation options.
- SRC-108 — [[src-108-integrate-agent-tools-mcp-server-client]] — MCP server/client wrapping pattern.
- SRC-110 — [[src-110-integrate-custom-tools-agent-episode-8]] — presenter comparison of custom functions, Azure Functions, OpenAPI and Logic Apps.
- SRC-179 — [[src-179-options-implementing-custom-tools]] — custom tool option catalogue.
- SRC-233 — [[src-233-understand-mcp-tool-discovery]] — dynamic tool discovery.
- SRC-240 — [[src-240-azure-ai-agents-mcp-servers]] — managed Foundry MCP tool object and approval behavior.
- SRC-256 — [[src-256-function-tool]] — function tool mechanics and limitations.
- SRC-265 — [[src-265-why-custom-tools]] — motivation and business scenarios.

## Open questions

- The corpus does not show full uncollapsed code for every option; the syntax should be verified in current SDK documentation before using these pages as copy-paste implementation guidance.
