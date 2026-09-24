---
title: "Function calling"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Tool pattern where the model requests a named function call, application code runs it, and the result is returned to the model."
area: agents
source_ids: [SRC-4, SRC-104, SRC-254, SRC-255, SRC-256, SRC-257, SRC-259]
objectives: [P04, P16, G03, G07, G08, G09]
objective_gaps: []
tags: []
aliases: ["function tool", "tool calls", "FunctionTool", "custom function tools", "structured tool calls"]
---

# Function calling

## Summary

Function calling lets a model or agent request a named developer-defined function, but the model does not run the business logic directly; application or framework code executes the function and returns the result for the model to use. (SRC-256 L219–220; SRC-4 L225–230)

## The problem it solves

Models need controlled access to real systems: APIs, databases, workflows, utility code, or business actions. Function calling gives the model a structured way to ask for that access while leaving execution under developer control. (SRC-256 L219–225)

## Mental model

The model is a planner, not the executor. You describe callable functions and their parameters; the model decides a call is needed, emits a structured call, your code or framework validates and runs the matching function, returns output, and the model completes the answer. (SRC-256 L240–246)

## What the sources say

- The Responses API tool overview names `function` as the tool that enables the model to call custom functions in application code. (SRC-259 L228)
- The dedicated source says function calling lets a model decide when to call named tools exposed by the application and that the application runs the function before passing output back to the model. (SRC-256 L219–220)
- It lists structured tool calls, developer-controlled execution, API/internal-service/helper integration, multi-turn orchestration, and grounded responses as key features. (SRC-256 L222–227)
- The Foundry custom-tools source says function calling allows agents to execute predefined functions dynamically based on user input, including retrieving data, processing queries, calling other APIs, or initiating a program. (SRC-104 L218)
- Agent Framework says custom function tools can call internal APIs, query databases, perform calculations, or do anything else a Python function can do. (SRC-4 L224–225)

## How it works in Azure

In a Responses API app, provide function definitions in the tools array, let the model emit a function call, run the matching function in application code, send back a `function_call_output`, and let the model generate the final response. (SRC-256 L240–246)

In Agent Framework, pass functions to the agent during creation; the framework inspects the signature, generates a schema describing what the function does and what parameters it expects, invokes the function when the model selects it, and returns the result before the final response. (SRC-4 L225–230)

In Foundry Agent Service custom tools, function calling is one option alongside Azure Functions and OpenAPI-defined tools. (SRC-104 L216–236)

## Code and configuration

The corpus capture omits the full code blocks, but the required structure is clear: define one or more function definitions, expose them as tools, detect the model's function-call response, run the function, return the output, and continue the response. (SRC-256 L234–246) Agent Framework can derive schemas from function signatures, docstrings, annotated parameters, or an explicit tool decorator/schema. (SRC-4 L226–229)

## Decision boundaries

- Use [[function-calling]] when the model needs developer-owned logic, internal APIs, databases, workflows, or controlled side effects. (SRC-256 L219–225; SRC-4 L224–225)
- Use [[code-interpreter-tool]] when the model only needs sandboxed Python computation or file analysis and does not need external system access. (SRC-254 L218–224; SRC-254 L252–253)
- Use [[file-search-tool]] when the model should retrieve from uploaded indexed documents, not execute business logic. (SRC-255 L218–227)
- Use [[web-search-tool]] when the missing information is current public web content. (SRC-257 L218–227)
- Use [[azure-functions]] or OpenAPI tools when a Foundry agent should call deployed serverless code or standardized external APIs rather than an in-process function. (SRC-104 L226–246)

**Inference:** The deciding detail is who executes the action. If application/framework code must own validation, authorization, side effects, and auditing, use function calling or another custom-tool pattern rather than a hosted retrieval or code sandbox tool. (SRC-256 L224–255; SRC-4 L234; SRC-104 L216–248)

## Failure modes and misconceptions

- The model requests function calls, but the application must run them. (SRC-256 L255)
- Tool arguments can be incorrect or unexpected and should be validated. (SRC-256 L248–256)
- Sensitive or high-impact actions should be limited or require explicit authorization; Agent Framework also supports approval mode for irreversible, expensive, or sensitive tool calls. (SRC-256 L252–253; SRC-4 L234)
- Function descriptions matter: meaningful names, documented parameters, docstrings, annotations, and focused tools help the model choose and call tools correctly. (SRC-104 L248; SRC-4 L226–232; SRC-4 L237–242)
- Function calling is declarative; developers do not write prompt-specific code that explicitly calls a tool for every user message. (SRC-104 L248)

## Solution Engineering transfer

**Inference:** Customer signal: "The assistant needs to check our system or trigger an action." Discovery question: "Should this run in app code, an Azure Function, an OpenAPI-described service, or an MCP server?" Trade-off: in-process functions are direct and schema-driven, while Azure Functions/OpenAPI/MCP can fit deployed services, standardized APIs, or reusable tool surfaces. (SRC-104 L216–248; SRC-4 L224–230)

## Connections

- [[agent-tools]] — function calling is the custom code tool pattern inside the tool family.
- [[responses-api]] — Responses API supports the `function` tool and `function_call_output` loop.
- [[microsoft-agent-framework]] — Agent Framework can generate schemas and invoke function tools.
- [[custom-tool-options]] — function calling is one custom-tool option beside Azure Functions, OpenAPI, Logic Apps, and MCP.
- [[azure-functions]] — deployed serverless alternative for custom agent actions.
- [[mcp-tool-integration]] — nearby reusable tool integration pattern.
- [[human-in-the-loop-approval]] — approval is relevant for sensitive function/tool calls.
- [[src-256-function-tool]] — dedicated Responses API source for the function tool.
- [[src-104-how-integrate-custom-tools]] — Foundry Agent Service custom-tool source.
- *Also linked from:* [[model-context-protocol]]

## Sources

- SRC-4 — [[src-4-add-tools-azure-ai-agent]] — Agent Framework custom function tools, schema generation, multiple tools, and approvals.
- SRC-104 — [[src-104-how-integrate-custom-tools]] — Foundry Agent Service custom-tool options and declarative function calling.
- SRC-254 — [[src-254-code-interpreter-tool]] — Code Interpreter boundary for sandboxed Python.
- SRC-255 — [[src-255-file-search-tool]] — File Search boundary for retrieval.
- SRC-256 — [[src-256-function-tool]] — dedicated function tool behavior, flow, practices, and limits.
- SRC-257 — [[src-257-web-search-tool]] — Web Search boundary for current public information.
- SRC-259 — [[src-259-what-are-tools]] — Responses API tool overview.

## Open questions

- The corpus does not provide a full JSON schema example, exact `responses.create()` payload, or exhaustive security pattern for production function authorization. (SRC-256 L234–246; SRC-256 L248–256)




