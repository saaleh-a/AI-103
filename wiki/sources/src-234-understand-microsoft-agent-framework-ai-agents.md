---
title: "Understand Microsoft Agent Framework AI agents"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains Microsoft Agent Framework features, unified Agent base class, Foundry integration, service-side history, and provider flexibility."
area: agents
source_ids: [SRC-234]
objectives: [G06, G07, G08, G09]
tags: [microsoft-agent-framework, foundry-agent-service, agent-base-class, service-side-history]
aliases: ["SRC-234"]
source_kind: learn-unit
module: "Develop an AI agent with Microsoft Agent Framework"
learning_path: "Develop AI agents on Azure"
unit: "2 of 7"
presenters: []
raw_file: "234-Understand Microsoft Agent Framework AI agents - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/develop-ai-agent-with-semantic-kernel/2-understand-semantic-kernel-agents"
ingest_depth: full
---
# Understand Microsoft Agent Framework AI agents

*learn-unit · Develop an AI agent with Microsoft Agent Framework · unit 2 of 7 · SRC-234*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-234 |
| Raw file | 234-Understand Microsoft Agent Framework AI agents - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Develop an AI agent with Microsoft Agent Framework |
| Unit / episode | 2 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/develop-ai-agent-with-semantic-kernel/2-understand-semantic-kernel-agents |
| Teaching content | L210–238 of 268 |
| Content length | ~469 words |
| Capture quality | High; Learn unit text is intact, although provider tables are collapsed. |
| Ingest depth | full |

## TL;DR

This unit explains Microsoft Agent Framework as the successor-generation framework from the Semantic Kernel and AutoGen engineering teams. (SRC-234 L216) Its key architecture claim is that every agent derives from a unified `Agent` base class, giving a consistent interface across model providers. (SRC-234 L217) Foundry Agent Service is recommended for production in this unit because it offers service-side chat history, persistent context across turns, MCP tool support, and Azure service integration. (SRC-234 L231–238)

## Key claims

- Microsoft Agent Framework combines AutoGen-style agent abstractions with Semantic Kernel features including session-based state management, type safety, execution filters, and telemetry. (SRC-234 L216)
- Graph-based workflows give developers explicit control over multi-agent execution paths. (SRC-234 L217)
- Every agent is derived from a unified `Agent` base class, so the interface is consistent regardless of model provider. (SRC-234 L217)
- The framework bundles memory, tool integration, and model access as composable building blocks. (SRC-234 L219)
- Out of the box, agents support function calling, multi-turn conversations, structured outputs, streaming responses, and service-provided tools where supported. (SRC-234 L223–228)
- With Azure credentials, developers can connect to Foundry projects and create agents that use Foundry Agent Service capabilities. (SRC-234 L230–231)
- Foundry Agent Service is recommended for production when maintaining context is critical because its service-side history persists across turns automatically. (SRC-234 L232–233)
- Provider flexibility means the underlying inference service can change without rewriting agent logic; only client configuration changes. (SRC-234 L234–235)

## How it works

The framework reduces manual wiring by bundling memory, tool integration, and model access into composable building blocks. (SRC-234 L219) The common `Agent` base class provides a shared capability surface, so application logic does not need provider-specific adaptations for basic agent behaviours. (SRC-234 L217; SRC-234 L222) When used with Azure AI Foundry projects, the framework supplies a consistent interface for connecting to Foundry, managing sessions, and integrating tools and services. (SRC-234 L229–230) Foundry Agent Service adds persistent chat history, dynamic tool discovery, and Azure service integration. (SRC-234 L231)

## Code and API patterns

This source names API patterns but does not include executable code. It identifies the shared `Agent` base class as the abstraction behind provider-independent agents. (SRC-234 L217) It also identifies function calling, structured outputs, streaming responses, and service-provided tools as standard agent capabilities. (SRC-234 L223–228)

## Key terms

- `Agent` base class — the unified base class from which every framework agent derives. (SRC-234 L217)
- Function calling — automatic invocation of registered tools to interact with external APIs and services. (SRC-234 L223–225)
- Multi-turn conversations — chat history maintained locally or through service-provided history management. (SRC-234 L225)
- Structured outputs — type-safe, schema-validated responses. (SRC-234 L226)
- Streaming responses — incremental results as they are generated. (SRC-234 L227)
- Service-side history — Foundry-backed persistence where the agent session persists automatically across turns. (SRC-234 L232–233)

## Decision boundaries and exam cues

- **Inference:** Choose Foundry Agent Service when a scenario stresses production context retention across turns, because this source names service-side history as the production differentiator. (SRC-234 L232–233)
- **Inference:** Choose Microsoft Agent Framework when the question asks for provider flexibility through a common agent interface, because the source says changing inference service requires only client configuration changes. (SRC-234 L217; SRC-234 L234–235)
- **Inference:** If the provider does not support a service-provided tool, the capability may not be uniformly available because the unit qualifies tools with where supported by the provider. (SRC-234 L228)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** The URL slug still refers to `semantic-kernel-agents` even though the page teaches Microsoft Agent Framework. (SRC-234 L216)
- **Stale-risk:** The provider matrix is collapsed in the capture, so the page confirms that multiple providers exist but not their full list. (SRC-234 L234–237)
- **Stale-risk:** Dynamic tool discovery, MCP tool support, and provider support can change as Foundry Agent Service evolves. (SRC-234 L231; SRC-234 L238)

## Relation to other sources

- SRC-124 introduces the same successor framing and states the module outcomes that this unit expands. (SRC-124 L214–221; SRC-234 L216–238)
- SRC-34 operationalizes the Foundry provider recommendation by showing the setup sequence for a Foundry-backed agent. (SRC-234 L232–238; SRC-34 L216–243)
- SRC-4 expands the tool capabilities listed here into service-provided tools, custom function tools, approval, and best practices. (SRC-234 L224–228; SRC-4 L216–242)
- SRC-48 echoes the provider-flexibility and dispatch-reduction themes in an episode demo. (SRC-234 L217; SRC-48 L103–142; SRC-48 L143–188)

## Connections

- [[microsoft-agent-framework]] — the SDK architecture and base agent abstraction.
- [[foundry-agent-service]] — recommended production provider in this unit.
- [[conversation-state]] — service-side and local chat-history handling.
- [[agent-tools]] — function calling and service-provided tools are agent capabilities.
- [[function-calling]] — registered tools are automatically invoked.
- [[model-context-protocol]] — Foundry provider support includes MCP tool support.
- [[observability-and-tracing]] — telemetry is named as an enterprise feature.

## Open questions

- The collapsed provider table prevents this source page from listing every provider named in the original Learn table. (SRC-234 L234–237)

## Sources

- SRC-234 — raw file: [[234-Understand Microsoft Agent Framework AI agents - Training - Microsoft Learn]]
