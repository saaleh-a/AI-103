---
title: "Introduction — Develop an AI agent with Microsoft Agent Framework"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Introduces Microsoft Agent Framework as the SDK for Foundry-backed agents with tools, state, telemetry, and workflows."
area: agents
source_ids: [SRC-124]
objectives: []
tags: [microsoft-agent-framework, foundry-agent-service, tools, agents]
aliases: ["SRC-124"]
source_kind: learn-unit
module: "Develop an AI agent with Microsoft Agent Framework"
learning_path: "Develop AI agents on Azure"
unit: "1 of 7"
presenters: []
raw_file: "124-Introduction - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/develop-ai-agent-with-semantic-kernel/1-introduction"
ingest_depth: full
---
# Introduction — Develop an AI agent with Microsoft Agent Framework

*learn-unit · Develop an AI agent with Microsoft Agent Framework · unit 1 of 7 · SRC-124*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-124 |
| Raw file | 124-Introduction - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Develop an AI agent with Microsoft Agent Framework |
| Unit / episode | 1 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/develop-ai-agent-with-semantic-kernel/1-introduction |
| Teaching content | L210–223 of 253 |
| Content length | ~291 words |
| Capture quality | High; compact Learn unit text is readable. |
| Ingest depth | full |

## TL;DR

This introduction frames AI agents as generative-AI systems that interpret data, make decisions, and complete tasks with minimal human intervention. (SRC-124 L214) It positions Microsoft Agent Framework as the next generation of Semantic Kernel and AutoGen, combining agent abstractions, enterprise features, and graph-based workflows for single-agent and multi-agent solutions. (SRC-124 L215) The module's practical target is building Foundry Agent Service agents that use tools and session management, such as an expense-report agent that formats and emails claims. (SRC-124 L216–221)

## Key claims

- AI agents use generative AI to interpret data, make decisions, and complete tasks with minimal human intervention. (SRC-124 L214)
- The framework is built by the teams behind Semantic Kernel and AutoGen and combines AutoGen-style abstractions with Semantic Kernel features such as session-based state management, type safety, middleware, and telemetry. (SRC-124 L215)
- The framework adds graph-based workflows for explicit multi-agent orchestration and is described as a production-ready SDK for single-agent and multi-agent solutions. (SRC-124 L215)
- The module focuses on using Microsoft Agent Framework with Microsoft Foundry Agent Service to build AI agents. (SRC-124 L216)
- The stated learning outcomes are connecting to a Microsoft Foundry project, creating Microsoft Foundry agents, and integrating tool functions. (SRC-124 L218–221)

## How it works

The source starts from the problem that complex workflows need agents that can act with limited human intervention while still being easy to build and reliable enough for enterprise use. (SRC-124 L214) Microsoft Agent Framework is presented as the SDK layer that combines agent abstractions, state management, type safety, middleware, telemetry, and explicit graph-based workflows. (SRC-124 L215) In the module scenario, an agent extracts data from submitted expense reports, formats the data, and emails the appropriate recipients; tool integration and session management are the capabilities that make this workflow straightforward to implement. (SRC-124 L216)

## Code and API patterns

Not covered by this source. The introduction names SDK-level outcomes but does not show code. (SRC-124 L217–221)

## Key terms

- AI agent — a generative-AI system that can interpret data, make decisions, and complete tasks with minimal human intervention. (SRC-124 L214)
- Microsoft Agent Framework — the SDK described as the next generation of Semantic Kernel and AutoGen for single-agent and multi-agent solutions. (SRC-124 L215)
- Tool functions — functions integrated with an AI agent as a stated module skill. (SRC-124 L217–221)
- Microsoft Foundry Agent Service — the service paired with Microsoft Agent Framework in this module. (SRC-124 L216)

## Decision boundaries and exam cues

- **Inference:** If a scenario asks for code-first agent construction with state management, tool integration, telemetry, and possible multi-agent orchestration, this source points toward Microsoft Agent Framework rather than only a portal-built agent. (SRC-124 L215–221)
- **Inference:** If the requirement is only to generate text without tools or workflow state, the source's agent framing is probably more capability than the scenario requires. (SRC-124 L214–216)
- **Inference:** Expense-report extraction and email dispatch is an example cue for tool-using agents because the source explicitly ties that workflow to tool integration and session management. (SRC-124 L216)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** The URL slug still contains `semantic-kernel`, while the page title and content teach Microsoft Agent Framework; preserve both as evidence of naming drift. (SRC-124 L215)
- **Stale-risk:** The source claims the framework is production-ready, but product maturity can change after capture. (SRC-124 L215)

## Relation to other sources

- SRC-234 expands the introduction's claims into common agent capabilities, provider flexibility, and why Foundry Agent Service is recommended. (SRC-124 L215–216; SRC-234 L216–238)
- SRC-34 turns the introduction's Foundry connection goal into a step sequence: project, authentication, chat client, agent, session, and run. (SRC-124 L218–221; SRC-34 L219–243)
- SRC-4 details the tool-function outcome named here, including service-provided tools, custom function tools, multiple tools, approval, and tool best practices. (SRC-124 L217–221; SRC-4 L216–242)
- SRC-48 gives an episode walkthrough of the same module theme, emphasizing code-first control, function tools, and a working expense-claim agent. (SRC-124 L216; SRC-48 L4–27; SRC-48 L503–617)

## Connections

- [[microsoft-agent-framework]] — central SDK named and positioned by the unit.
- [[foundry-agent-service]] — the module's service-side provider target.
- [[ai-agents]] — agent definition and autonomy framing.
- [[agent-tools]] — tool integration is a module outcome.
- [[function-calling]] — tool functions let an agent call external logic.
- [[multi-agent-orchestration]] — graph-based workflows are introduced for multi-agent solutions.

## Open questions

- The introduction does not show the actual SDK objects or method names; later units supply those details. (SRC-124 L217–221)

## Sources

- SRC-124 — raw file: [[124-Introduction - Training - Microsoft Learn]]
