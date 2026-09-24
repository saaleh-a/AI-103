---
title: "Add tools to Azure AI agent"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains service-provided tools, custom function tools, schema generation, multiple tools, approval mode, agent-as-tool composition, and tool-writing practices."
area: agents
source_ids: [SRC-4]
objectives: [G08, G09, G11, P16]
tags: [agent-tools, function-tools, tool-approval, service-provided-tools, custom-tools]
aliases: ["SRC-4"]
source_kind: learn-unit
module: "Develop an AI agent with Microsoft Agent Framework"
learning_path: "Develop AI agents on Azure"
unit: "4 of 7"
presenters: []
raw_file: "4-Add tools to Azure AI agent - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/develop-ai-agent-with-semantic-kernel/4-add-plugins-to-agent"
ingest_depth: full
---
# Add tools to Azure AI agent

*learn-unit · Develop an AI agent with Microsoft Agent Framework · unit 4 of 7 · SRC-4*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-4 |
| Raw file | 4-Add tools to Azure AI agent - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Develop an AI agent with Microsoft Agent Framework |
| Unit / episode | 4 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/develop-ai-agent-with-semantic-kernel/4-add-plugins-to-agent |
| Teaching content | L210–242 of 272 |
| Content length | ~695 words |
| Capture quality | High; core text is present, but the hosted-tool table is collapsed. |
| Ingest depth | full |

## TL;DR

Tools are the mechanism that lets an agent act beyond text generation by calling APIs, executing code, searching files, or interacting with external services. (SRC-4 L216) Microsoft Agent Framework supports service-provided tools hosted by the provider and custom function tools written by the developer. (SRC-4 L217–226) The framework can generate tool schemas from function signatures and descriptions, invoke tools automatically when the model selects them, support multiple tools, pause for human approval, and compose an agent as a tool for another agent. (SRC-4 L226–236)

## Key claims

- Without tools, an agent can only generate text from what it already knows; with tools, it can act on the world. (SRC-4 L216)
- The framework supports service-provided tools and custom function tools. (SRC-4 L217)
- Foundry provider hosted tools can be enabled in agent configuration, and the provider handles execution. (SRC-4 L218–219)
- Azure AI Search, Bing Grounding, SharePoint, and other tools are preview or experimental in this source and may have limited support across providers. (SRC-4 L222–223)
- Custom function tools can call internal APIs, query databases, perform calculations, or run any other Python-function logic. (SRC-4 L224–225)
- Registering a function directly with an agent lets the framework inspect its signature and generate a schema for the model. (SRC-4 L226)
- The framework supports tool descriptions through Python `Annotated` parameter descriptions and docstrings, or through the `@tool` decorator with explicit name and description. (SRC-4 L227–229)
- The framework handles schema generation and tool invocation automatically before the final response is generated. (SRC-4 L230)
- Multiple tools can be registered with one agent, and the model selects tools based on conversation context and descriptions without developer routing logic. (SRC-4 L231–232)
- Approval mode can pause tool invocation for confirmation, and it is configured per tool with `approval_mode` on the `@tool` decorator. (SRC-4 L233–234)
- An inner agent can be converted into a function tool for an outer coordinating agent. (SRC-4 L235–236)

## How it works

A tool expands the agent's action surface from text-only generation to external actions such as API calls, code execution, file search, or service interaction. (SRC-4 L216) Service-provided tools are enabled through configuration when the Foundry provider supports them, with execution handled by the provider. (SRC-4 L218–223) Custom function tools are ordinary developer-written Python functions registered at agent creation; the framework reads signatures, descriptions, and optional schemas so the model knows how to call them. (SRC-4 L224–230) When a model chooses a tool, the framework executes the function and returns the result to the model before the final response. (SRC-4 L230)

## Code and API patterns

The source names two custom-tool declaration patterns. With type annotations, Python `Annotated` descriptions document each parameter and the function docstring serves as the tool description. (SRC-4 L227–228) With the `@tool` decorator, the developer can explicitly specify the tool name and description and can provide a Pydantic model for precise input schema control. (SRC-4 L229) To register multiple tools, the developer passes a list of functions when creating the agent. (SRC-4 L231–232) Tool approval is configured per tool with the `approval_mode` parameter on the `@tool` decorator. (SRC-4 L233–234)

## Key terms

- Service-provided tools — hosted tools managed by the provider and enabled in agent configuration. (SRC-4 L217–219)
- Custom function tools — developer-written functions registered with the agent for actions such as API calls, database queries, or calculations. (SRC-4 L224–226)
- Tool schema — the model-facing description of what a function does, its parameters, and return value. (SRC-4 L226)
- `@tool` decorator — the mechanism for explicit tool name, description, approval mode, and optional schema control. (SRC-4 L229; SRC-4 L233–234)
- Tool approval — a pattern that pauses before tool invocation and requests confirmation. (SRC-4 L233–234)
- Agent as a tool — composition pattern where an inner specialized agent becomes a function tool for an outer agent. (SRC-4 L235–236)

## Decision boundaries and exam cues

- **Inference:** Choose service-provided tools when the needed capability is hosted by the provider and can be enabled by configuration, rather than implemented as Python code. (SRC-4 L217–223)
- **Inference:** Choose custom function tools when the agent must call internal APIs, query databases, calculate values, or perform other application-specific Python logic. (SRC-4 L224–226)
- **Inference:** Use approval mode when a tool action is irreversible, expensive, or sensitive, because the source explicitly names those scenarios. (SRC-4 L233–234)
- **Inference:** Use an agent-as-tool pattern when a coordinating agent should delegate a domain-specific task to a specialized inner agent. (SRC-4 L235–236)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** Azure AI Search, Bing Grounding, SharePoint, and other hosted tools are described as preview or experimental in this capture. (SRC-4 L222–223)
- **Stale-risk:** The URL slug uses `add-plugins-to-agent`, while the page title and current terminology use tools. (SRC-4 L216–217)
- **Stale-risk:** The table of commonly used service-provided tools is collapsed, so the source page preserves only the tool examples visible in text. (SRC-4 L220–223)

## Relation to other sources

- SRC-34 says tools are optional custom functions during agent creation; this source explains how they are described, registered, selected, and approved. (SRC-34 L227–231; SRC-4 L224–234)
- SRC-234 lists function calling and service-provided tools as out-of-the-box capabilities; this source explains their implementation categories. (SRC-234 L223–228; SRC-4 L216–242)
- SRC-48 demonstrates a `@tool`-style expense-claim function and emphasizes that the framework removes manual dispatch code. (SRC-4 L227–234; SRC-48 L454–500; SRC-48 L551–617)
- SRC-124 names tool functions as a module outcome; this source provides the detailed tool lesson. (SRC-124 L217–221; SRC-4 L216–242)

## Connections

- [[agent-tools]] — central mechanism described by the unit.
- [[function-calling]] — model selects and invokes registered functions.
- [[custom-tool-options]] — custom functions are one custom tool option.
- [[human-in-the-loop-approval]] — approval mode is a tool safeguard.
- [[multi-agent-orchestration]] — agent-as-tool composition supports delegation.
- [[azure-ai-search]] — named as a preview or experimental hosted tool example.
- [[file-search-tool]] — searching files is named as a possible tool action.
- *Module units:* [[src-124-introduction-develop-ai-agent-microsoft-agent-framework|1 Introduction]] · [[src-234-understand-microsoft-agent-framework-ai-agents|2 Understand Microsoft Agent Framework AI agents]] · [[src-34-create-azure-ai-agent-microsoft-agent-framework|3 Create an Azure AI agent with Microsoft Agent Framework]] · [[src-72-exercise-develop-azure-ai-agent-microsoft-agent-framework-sdk|5 Exercise - Develop an Azure AI agent with the Microsoft Agent Framework SDK - Training - Microsoft L]] · [[src-146-knowledge-check-develop-ai-agent-microsoft-agent-framework|6 Knowledge check]] · [[src-195-summary-develop-ai-agent-microsoft-agent-framework|7 Summary]] · [[src-48-develop-ai-agent-microsoft-agent-framework-episode-13|episode 13]]

## Open questions

- The collapsed table hides the full list of commonly used service-provided tools. (SRC-4 L220–223)

## Sources

- SRC-4 — raw file: [[4-Add tools to Azure AI agent - Training - Microsoft Learn]]
