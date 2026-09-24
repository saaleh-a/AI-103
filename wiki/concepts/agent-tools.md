---
title: "Agent tools"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "How models and agents use built-in or custom tools to retrieve, compute, act, and return grounded results."
area: agents
source_ids: [SRC-4, SRC-91, SRC-104, SRC-230, SRC-234, SRC-254, SRC-255, SRC-256, SRC-257, SRC-259]
objectives: [P02, P04, P16, G03, G07, G08, G09, I05]
objective_gaps: []
tags: []
aliases: ["tools", "built-in tools", "tool catalog", "tool calling", "service-provided tools"]
---

# Agent tools

## Summary

Tools are the bridge between model text generation and useful action: they let a model or agent search, run code, call APIs, retrieve private documents, or use external services instead of relying only on its training data. (SRC-4 L216–217; SRC-91 L220–223; SRC-259 L218–228)

## The problem it solves

Without tools, an agent can only generate text from what it already knows; tools let it call APIs, execute code, search files, or interact with external systems. (SRC-4 L216) Microsoft Foundry Agent Service presents this as an agent feature: automatic tool calling, built-in/community tools, and integrations such as code execution, file search, web search, Azure services, and external APIs. (SRC-230 L267–269)

## Mental model

Think of a tool as a declared capability with a name, description, inputs, execution environment, and returned result. The model decides whether a user request needs that capability, emits or invokes a tool call, receives the result, and incorporates the result into its final response. (SRC-91 L222–229; SRC-256 L240–247)

## What the sources say

- In the Responses API module, Microsoft Foundry Models can use tools when the application specifies tools in prompts sent through the OpenAI Responses API. By default, the model chooses whether and which tool to use, while tool-selection rules and instructions can guide that choice. (SRC-259 L218–221)
- The same module names four common Responses API tool types: `code_interpreter`, `web_search`, `file_search`, and `function`. (SRC-259 L222–228)
- In the Foundry agent module, tools are programmatic functions agents invoke to complete tasks; the lifecycle is user message, agent analysis, tool invocation, tool execution, result incorporation, and response. (SRC-91 L222–229)
- Foundry's agent tool catalog is described as Configured, Catalog, and Custom: ready-to-use built-ins, registry tools including MCP servers, and user tools through OpenAPI specifications or custom implementations. (SRC-91 L231–232)
- Microsoft Agent Framework separates service-provided tools hosted by the provider from custom function tools written and registered by the developer. (SRC-4 L217–220)
- Agent Framework also says every agent supports function calling and, where the provider supports them, service-provided tools such as code execution, file search, and web search. (SRC-234 L224–228)

## How it works in Azure

In a generative AI app, the application calls `responses.create()` and includes one or more tools in the request; the model can then use the specified tools while generating the response. (SRC-259 L230–232) In a Foundry Agent Service or Agent Framework context, tools are part of the agent configuration; the service or framework handles model execution, tool invocation, and returning results. (SRC-230 L267; SRC-4 L230–232)

The built-in tools have different execution boundaries: `code_interpreter` executes Python in a sandbox, `file_search` retrieves from uploaded indexed files, `web_search` retrieves current web information, and `function` asks the developer application to run named business logic. (SRC-254 L218–224; SRC-255 L218–227; SRC-257 L218–227; SRC-256 L219–227)

## Code and configuration

For Responses API apps, tools are specified in the request to the deployed model. (SRC-259 L230–232) For custom function tools, the application must run the requested function and submit a `function_call_output` back to the model. (SRC-256 L240–246) For Agent Framework, registering Python functions lets the framework inspect signatures, generate schemas, invoke the tool, and return the result to the model. (SRC-4 L225–230)

## Decision boundaries

- Calculations, data analysis, charts, or file processing: prefer [[code-interpreter-tool]] because it gives the model a Python runtime in a sandbox. (SRC-254 L218–224)
- Answers from uploaded private documents: prefer [[file-search-tool]] because it searches indexed file content and vector stores. (SRC-255 L218–227)
- Current public web information: prefer [[web-search-tool]] because it retrieves current external information at runtime. (SRC-257 L218–227)
- Calls to internal APIs, databases, workflows, or app logic: prefer [[function-calling]] because the model requests a structured call and the application controls execution. (SRC-256 L219–224)
- Enterprise-scale multi-source knowledge for Foundry agents: prefer [[foundry-iq]] because the file-search source says Foundry IQ should be considered for large quantities of data across multiple stores. (SRC-255 L255)

**Inference:** The exam cue is not just the word "tool"; the deciding detail is what the agent must reach: Python execution, uploaded files, the live web, or developer-owned systems. (SRC-254 L218–224; SRC-255 L218–227; SRC-257 L218–227; SRC-256 L219–224)

## Failure modes and misconceptions

- Adding every available tool is not a best practice: the Foundry tools source says to match tools to requirements and not add tools without clear purposes because each tool adds latency. (SRC-91 L288–291)
- Tool choice is declarative, not hard-coded routing in the prompt: the sources say the model or agent decides when to call tools based on the prompt, descriptions, and context. (SRC-259 L221; SRC-104 L248; SRC-4 L232)
- Tool outputs still need governance: function inputs should be validated, tool usage logged, sensitive operations limited, and human approval used for irreversible, expensive, or sensitive actions. (SRC-256 L248–254; SRC-4 L234)
- Built-in retrieval is not the same as enterprise search architecture: File Search is for uploaded indexed files, while Azure AI Search connects to existing enterprise-scale indexed data sources. (SRC-91 L234–241)

## Solution Engineering transfer

**Inference:** A useful customer signal is, "We need the assistant to do something, not just answer." Map the action to its boundary: compute with Code Interpreter, answer from private files with File Search, answer from public current facts with Web Search, or execute enterprise logic with functions/OpenAPI/Azure Functions/MCP. (SRC-4 L216–217; SRC-91 L231–243; SRC-104 L216–248)

**Inference:** Ask: What data or system must the model reach? Who owns execution? Does the action need approval? How current must the answer be? What latency and audit requirements apply? These questions follow from the sources' distinction between hosted tools, developer-run functions, latency, logging, and approval. (SRC-4 L217–234; SRC-91 L288–295; SRC-256 L248–254)

## Connections

- [[ai-agents]] — tools are what let agents move beyond text generation.
- [[foundry-agent-service]] — Foundry Agent Service handles automatic tool calling and provides a tool catalog.
- [[responses-api]] — Responses API requests specify tool availability for model responses.
- [[code-interpreter-tool]] — built-in Python execution tool.
- [[file-search-tool]] — built-in private-file retrieval tool.
- [[web-search-tool]] — built-in current-web retrieval tool.
- [[function-calling]] — custom function/request-and-return tool pattern.
- [[custom-tool-options]] — broader custom integration options including Azure Functions, OpenAPI, Logic Apps, and MCP.
- [[mcp-tool-integration]] — MCP servers provide reusable tool interfaces through the tool catalog.
- [[tool-options-compared]] — synthesis page for choosing among tool families.
- [[src-259-what-are-tools]] — Responses API overview of tool types.
- [[src-91-extend-agent-capabilities-tools]] — Foundry agent catalog and built-in/custom tools overview.
- *Also linked from:* [[a2a-agent-implementation]] · [[azure-functions]] · [[azure-language-mcp-server]] · [[azure-speech-mcp-server]] · [[decision-boundaries]] · [[foundry-agent-types]] · [[foundry-toolkit-for-vs-code]] · [[overview]] · [[work-iq]]

## Sources

- SRC-4 — [[src-4-add-tools-azure-ai-agent]] — Agent Framework service-provided and custom tools.
- SRC-91 — [[src-91-extend-agent-capabilities-tools]] — Foundry agent tool lifecycle, catalog, built-ins, and best practices.
- SRC-104 — [[src-104-how-integrate-custom-tools]] — Custom tools and declarative tool invocation.
- SRC-230 — [[src-230-understand-ai-agents-microsoft-foundry-agent-service]] — Foundry Agent Service automatic tool calling and catalog.
- SRC-234 — [[src-234-understand-microsoft-agent-framework-ai-agents]] — Agent Framework capabilities and service-provided tools.
- SRC-254 — [[src-254-code-interpreter-tool]] — `code_interpreter` tool behavior.
- SRC-255 — [[src-255-file-search-tool]] — `file_search` tool behavior.
- SRC-256 — [[src-256-function-tool]] — function tool behavior.
- SRC-257 — [[src-257-web-search-tool]] — `web_search` tool behavior.
- SRC-259 — [[src-259-what-are-tools]] — Responses API tool list and default model choice.

## Open questions

- The corpus does not enumerate every currently available tool in the Foundry catalog; it says the catalog continues to expand. (SRC-91 L245–247)


