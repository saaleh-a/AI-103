---
title: "Understand AI Agents and Microsoft Foundry Agent Service"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Defines AI agents, their use cases, security practices, Foundry Agent Service, agent types, and core managed-service capabilities."
area: agents
source_ids: [SRC-230]
objectives: [G07, G08, G09, P04, P16]
tags: [ai-agents, foundry-agent-service, agent-types, security, tool-calling]
aliases: ["SRC-230"]
source_kind: learn-unit
module: "Develop AI agents with Microsoft Foundry and Visual Studio Code"
learning_path: "Develop AI agents on Azure"
unit: "2 of 11"
presenters: []
raw_file: "230-Understand AI Agents and Microsoft Foundry Agent Service - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/develop-ai-agents-azure-vs-code/2-understand-ai-agents-foundry"
ingest_depth: full
---

# Understand AI Agents and Microsoft Foundry Agent Service

*learn-unit · Develop AI agents with Microsoft Foundry and Visual Studio Code · unit 2 of 11 · SRC-230*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-230 |
| Raw file | 230-Understand AI Agents and Microsoft Foundry Agent Service - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Develop AI agents with Microsoft Foundry and Visual Studio Code |
| Unit / episode | 2 of 11 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/develop-ai-agents-azure-vs-code/2-understand-ai-agents-foundry |
| Teaching content | L214–276 of 306 |
| Content length | ~1060 words |
| Capture quality | High, but the security-risks table is collapsed in the capture. |
| Ingest depth | full |

## TL;DR

An AI agent is a software service that uses generative AI to understand context, make decisions, and perform tasks for users or other programs. (SRC-230 L218–220) Microsoft Foundry Agent Service is the managed service for building, deploying, and scaling agents with custom instructions, tools, managed state, enterprise security, storage choices, and observability. (SRC-230 L255–274)

## Key claims

- AI agents differ from traditional applications because they can operate independently by understanding context, making decisions, and taking actions toward goals. (SRC-230 L218–220)
- Agents provide value through routine-task automation, enhanced decision-making, scalability, and continuous availability. (SRC-230 L223–233)
- Example use cases include personal productivity, research, sales, customer service, and developer agents. (SRC-230 L234–249)
- Agents require security-by-design because they can access sensitive data, make decisions, and act independently. (SRC-230 L250–253)
- Mitigations include RBAC and least privilege, prompt filtering, sandboxing or human-in-the-loop approvals, logging and traceability, dependency audits, and validation against drift or poisoning. (SRC-230 L247–253)
- Microsoft Foundry supports declarative agents, including prompt-based and workflow agents, and hosted containerized agents created and deployed in code. (SRC-230 L259–263)
- Key service features include automatic tool calling, Responses API state management, a tool catalog, model selection, enterprise security, customizable storage, and tracing. (SRC-230 L265–274)

## How it works

The source combines two layers: an agent combines an AI model with tools to adapt across scenarios, and Foundry Agent Service manages the infrastructure, state, tools, security, storage, and tracing around that pattern. (SRC-230 L218–220; SRC-230 L255–274)

## Code and API patterns

The unit says Microsoft Foundry Agent Service can enable agent-like experiences with fewer than 50 lines of code, but it does not show code. (SRC-230 L257) It says conversation state is securely managed through the Responses API. (SRC-230 L268)

## Key terms

- **AI agent** — a software service that uses generative AI to understand and perform tasks on behalf of users or other programs. (SRC-230 L218)
- **Declarative agents** — agents defined through configuration rather than code, including prompt-based and workflow agents. (SRC-230 L259–262)
- **Hosted agents** — containerized agents created and deployed in code while the platform manages infrastructure. (SRC-230 L263)
- **Automatic tool calling** — the service runs the model, invokes tools, and returns results. (SRC-230 L267)

## Decision boundaries and exam cues

- **Inference:** Choose Foundry Agent Service over direct standard APIs when a scenario values managed tool calling, state management, infrastructure, security, and observability. (SRC-230 L255–274)
- **Inference:** Choose declarative prompt-based agents for accessible configuration-led single-agent work; choose workflow agents for YAML-defined multi-agent orchestration; choose hosted agents for code-controlled containerized logic. (SRC-230 L259–263)
- **Inference:** Agent security answers should favor least privilege, prompt filtering, human approvals, comprehensive logs, dependency audits, and validation against drift or poisoning. (SRC-230 L247–253)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The security-risks table is collapsed, so the page preserves the visible mitigation list but cannot enumerate every hidden risk. (SRC-230 L247–253)
- **Stale-risk:** Agent types and service features can shift as Foundry Agent Service evolves. (SRC-230 L259–274)

## Relation to other sources

- [[src-129-introduction-develop-ai-agents-microsoft-foundry-visual-studio-code]] introduces this unit's objectives at module level. (SRC-129 L223–224; SRC-230 L218–276)
- [[src-84-explore-development-approaches]] takes this service definition and compares portal versus VS Code development approaches. (SRC-230 L255–274; SRC-84 L218–284)
- [[src-91-extend-agent-capabilities-tools]] expands automatic tool calling into concrete tool categories. (SRC-230 L267–269; SRC-91 L218–297)

## Connections

- [[ai-agents]] — the source defines agents and use cases. (SRC-230 L218–249)
- [[foundry-agent-service]] — the managed service described in detail. (SRC-230 L255–274)
- [[foundry-agent-types]] — declarative, workflow, and hosted agents are distinguished here. (SRC-230 L259–263)
- [[agent-tools]] — automatic tool calling and tool catalog are core service features. (SRC-230 L267–269)
- [[human-in-the-loop-approval]] — approvals are named as a mitigation. (SRC-230 L250)
- *Module units:* [[src-129-introduction-develop-ai-agents-microsoft-foundry-visual-studio-code|1 Introduction]] · [[src-84-explore-development-approaches|3 Explore Development Approaches]] · [[src-14-build-first-agent-microsoft-foundry|4 Build Your First Agent in Microsoft Foundry]] · [[src-190-set-up-visual-studio-code-agent-development|5 Set Up Visual Studio Code for Agent Development]] · [[src-20-configure-manage-agents-visual-studio-code|6 Configure and Manage Agents in Visual Studio Code]] · [[src-91-extend-agent-capabilities-tools|7 Extend Agent Capabilities with Tools]] · [[src-223-test-deploy-integrate-agents|8 Test, Deploy, and Integrate Agents]] · [[src-59-exercise-build-deploy-ai-agent|9 Exercise - Build and Deploy an AI Agent]] · [[src-142-knowledge-check-develop-ai-agents-microsoft-foundry-visual-studio|10 Knowledge Check]] · [[src-212-summary-develop-ai-agents-microsoft-foundry-visual-studio-code|11 Summary]] · [[src-41-develop-ai-agents-microsoft-foundry-visual-studio-code-episode|episode 7]]

## Open questions

- The unit does not show exact tool schemas, API request formats, or a full security-threat table because parts of the capture are collapsed. (SRC-230 L247–253; SRC-230 L267–274)

## Sources

- SRC-230 — raw file: [[230-Understand AI Agents and Microsoft Foundry Agent Service - Training - Microsoft Learn]]
