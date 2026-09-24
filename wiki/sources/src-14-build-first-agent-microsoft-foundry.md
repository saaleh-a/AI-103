---
title: "Build Your First Agent in Microsoft Foundry"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Walks through creating, configuring, testing, adding tools to, and deploying a first Foundry portal agent."
area: agents
source_ids: [SRC-14]
objectives: [G07, G08, G09]
tags: [foundry-portal, ai-agents, agent-instructions, agent-tools, playground]
aliases: ["SRC-14"]
source_kind: learn-unit
module: "Develop AI agents with Microsoft Foundry and Visual Studio Code"
learning_path: "Develop AI agents on Azure"
unit: "4 of 11"
presenters: []
raw_file: "14-Build Your First Agent in Microsoft Foundry - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/develop-ai-agents-azure-vs-code/4-build-agent-azure-portal"
ingest_depth: full
---

# Build Your First Agent in Microsoft Foundry

*learn-unit · Develop AI agents with Microsoft Foundry and Visual Studio Code · unit 4 of 11 · SRC-14*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-14 |
| Raw file | 14-Build Your First Agent in Microsoft Foundry - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Develop AI agents with Microsoft Foundry and Visual Studio Code |
| Unit / episode | 4 of 11 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/develop-ai-agents-azure-vs-code/4-build-agent-azure-portal |
| Teaching content | L214–246 of 276 |
| Content length | ~524 words |
| Capture quality | High; portal steps and tool categories are present. |
| Ingest depth | full |

## TL;DR

This unit presents the Foundry portal as the accessible, visual entry point for agent creation. (SRC-14 L218–219) The flow is create an agent, define name/description/model, configure instructions and parameters, test in the playground, add tools, and deploy for SDK or REST API access. (SRC-14 L220–246)

## Key claims

- The Foundry portal supports code-free agent creation through a visual interface. (SRC-14 L218–219)
- Agent creation starts at Microsoft Foundry, a selected project, Build > Agents, and Create. (SRC-14 L220–225)
- Agent details include name, description, and model selection from a deployed model or new deployment. (SRC-14 L225–229)
- Instructions define the agent's role, response behavior, and scenario handling. (SRC-14 L230–232)
- Temperature and Top P are configurable model parameters in the portal. (SRC-14 L232–233)
- The Playground tab supports testing, multi-turn conversation history, and behavior refinement. (SRC-14 L235–238)
- The tool catalog is organized into Configured, Catalog, and Custom categories. (SRC-14 L239–244)
- After deployment, the agent can be accessed through the Microsoft Foundry SDK or REST APIs. (SRC-14 L245–246)

## How it works

The portal creates a configured agent resource with name, purpose, model, instructions, and optional model parameters. (SRC-14 L220–233) The same interface provides a playground for validation and a tool catalog for extending behavior before production deployment. (SRC-14 L235–246)

## Code and API patterns

The source does not include code, but it states that a deployed agent can be integrated through the Microsoft Foundry SDK or REST APIs. (SRC-14 L245–246)

## Key terms

- **Instructions** — the field that defines how the agent understands its role, responds to users, and handles scenarios. (SRC-14 L230–232)
- **Temperature** — a model parameter that controls response randomness. (SRC-14 L232–233)
- **Top P** — a model parameter that controls response diversity. (SRC-14 L232–233)
- **Tool catalog** — the portal area for adding Configured, Catalog, or Custom tools. (SRC-14 L239–244)

## Decision boundaries and exam cues

- **Inference:** Choose the Foundry portal when the scenario says build an agent visually or without code. (SRC-14 L218–229)
- **Inference:** Use the portal playground when the scenario asks how to validate multi-turn context before deployment. (SRC-14 L235–238)
- **Inference:** OpenAPI specifications and MCP servers fit the Custom tool category in this portal flow. (SRC-14 L239–244)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** Tool catalog categories and examples can change as Foundry adds tools. (SRC-14 L239–244)
- Later units provide deeper coverage of instructions, parameters, tools, and deployment. (SRC-14 L230–246)

## Relation to other sources

- [[src-84-explore-development-approaches]] positions this portal workflow as one of two development approaches. (SRC-84 L220–231; SRC-14 L218–246)
- [[src-20-configure-manage-agents-visual-studio-code]] expands instruction and parameter configuration in VS Code. (SRC-14 L230–233; SRC-20 L218–260)
- [[src-91-extend-agent-capabilities-tools]] expands the tool catalog categories introduced here. (SRC-14 L239–244; SRC-91 L218–297)

## Connections

- [[microsoft-foundry]] — the portal and project environment used to create the agent. (SRC-14 L220–225)
- [[ai-agents]] — the created artifact is an agent with instructions, model, and tools. (SRC-14 L225–244)
- [[agent-tools]] — the portal tool catalog extends the agent. (SRC-14 L239–244)
- [[model-playgrounds]] — the playground is used to test agent behavior. (SRC-14 L235–238)

## Open questions

- The unit does not show exact REST endpoint shapes, SDK code, or deployment-status fields. (SRC-14 L245–246)

## Sources

- SRC-14 — raw file: [[14-Build Your First Agent in Microsoft Foundry - Training - Microsoft Learn]]
