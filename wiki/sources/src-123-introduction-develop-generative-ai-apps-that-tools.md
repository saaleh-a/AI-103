---
title: "Introduction — Develop generative AI apps that use tools"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Introduces why tools extend generative AI beyond training data, text-only reasoning, and isolated chat."
area: agents
source_ids: [SRC-123]
objectives: [G03, G05, G09]
tags: [tools, generative-ai, responses-api, agents]
aliases: ["SRC-123"]
source_kind: learn-unit
module: "Develop generative AI apps that use tools"
learning_path: "Develop generative AI apps in Azure"
unit: "1 of 9"
presenters: []
raw_file: "123-Introduction - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/use-generative-ai-tools/01-introduction"
ingest_depth: full
---

# Introduction — Develop generative AI apps that use tools

*learn-unit · Develop generative AI apps that use tools · unit 1 of 9 · SRC-123*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-123 |
| Raw file | `123-Introduction - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | Develop generative AI apps in Azure |
| Module | Develop generative AI apps that use tools |
| Unit / episode | 1 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/use-generative-ai-tools/01-introduction |
| Teaching content | L212–231 of 261 |
| Content length | ~384 words |
| Capture quality | High: compact Learn unit text with navigation excluded. |
| Ingest depth | full |

## TL;DR

Generative AI models are limited to reasoning over training data unless tools extend them with current information, actions, facts, systems, and workflows (SRC-123 L216; SRC-123 L220–225). This module focuses on tool specifications in prompts submitted by a client application to a model, with the client application managing tool configuration (SRC-123 L227). Tool use here is a step toward agentic AI, where the model, instructions, and tools are persisted in a named agent (SRC-123 L227).

## Key claims

- Generative AI models have a knowledge boundary because they can only reason about information in their training data (SRC-123 L216).
- Tools can unlock capabilities beyond what the model alone can do (SRC-123 L216).
- Tools should not be confused with Foundry Tools, which are Azure AI APIs used in applications and agents (SRC-123 L217–218).
- Tools enable applications to access real-time information, take actions, ground responses in facts, extend functionality, and build intelligent workflows (SRC-123 L220–225).
- With tools, generative AI can observe, reason, and act instead of working in isolation (SRC-123 L226).
- This module teaches client-managed tool configuration in prompts rather than persisted agent configuration (SRC-123 L227).

## How it works

A tool-augmented generative AI app starts with a model that can reason over text but lacks current data, private data, and direct action capability (SRC-123 L216; SRC-123 L220–225). The client application submits prompts to the model and manages the tool configuration for that interaction (SRC-123 L227). The resulting pattern creates a custom generative AI-powered assistant inside application logic rather than a fully persisted named agent (SRC-123 L227).

## Code and API patterns

This introductory source does not show code, but it frames the pattern as specifying tools in prompts submitted by the client application to a model (SRC-123 L227). The later module units attach that pattern to OpenAI Responses API requests (SRC-259 L218–231).

## Key terms

- Tool: a capability integrated into generative AI interactions to access information, take action, ground answers, connect systems, or coordinate workflows (SRC-123 L216; SRC-123 L220–225).
- Foundry Tools: Azure AI APIs used in applications and agents, distinct from prompt-specified model tools in this module (SRC-123 L217–218).
- Agentic AI solution: a solution where the model, instructions, and tools are encapsulated and persisted in a named agent (SRC-123 L227).

## Decision boundaries and exam cues

- **Inference:** Use tool calling when a scenario requires current data, private facts, business-system action, or multi-step application behavior beyond a model's training data (SRC-123 L216; SRC-123 L220–225).
- **Inference:** Do not treat this unit's tools as the same thing as Foundry Tools; the source explicitly separates prompt tools from Azure AI APIs branded as Foundry Tools (SRC-123 L217–218).
- **Inference:** If the scenario says the client app manages tool configuration per prompt, this module's pattern fits better than a persisted named agent (SRC-123 L227).

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source uses both generic tool language and the product name Foundry Tools, then explicitly warns that these are not the same thing (SRC-123 L217–218).
- **Stale-risk:** Tool and agent terminology can shift as Foundry evolves; this source captures the distinction as presented in the Learn unit (SRC-123 L217–218; SRC-123 L227).

## Relation to other sources

- [[src-259-what-are-tools]] expands the introduction into concrete Responses API tool choices such as `code_interpreter`, `web_search`, `file_search`, and `function` (SRC-259 L218–231).
- [[src-198-summary-develop-generative-ai-apps-that-tools]] restates the module outcome as extending a generative AI model from text-only reasoning to grounded action (SRC-198 L218–225).
- [[src-50-develop-generative-ai-apps-that-tools-episode-4]] gives a transcript version of the same motivation: tools extend a model that does not know yesterday's information, enterprise information, or how to take action by itself (SRC-50 L41–55; SRC-50 L70–88).

## Connections

- [[agent-tools]] — central concept for extending model behavior with tools.
- [[responses-api]] — later units use the Responses API as the tool-calling surface.
- [[foundry-tools]] — linked because the source explicitly distinguishes prompt tools from Foundry Tools.
- [[ai-agents]] — named agents are the next step beyond this client-managed tool pattern.
- [[tool-options-compared]] — useful synthesis for separating built-in and custom tool approaches.

## Open questions

- The source does not enumerate which models support tool calling; it only says later units will focus on tools in prompts (SRC-123 L227).

## Sources

- SRC-123 — raw file: [[123-Introduction - Training - Microsoft Learn]]
