---
title: "Knowledge Check — Develop AI agents with Microsoft Foundry and Visual Studio Code"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Knowledge check covering managed-service benefits, Responses API state, agent security practice, and automatic tool invocation."
area: agents
source_ids: [SRC-142]
objectives: []
tags: [knowledge-check, foundry-agent-service, responses-api, security, tool-calling]
aliases: ["SRC-142"]
source_kind: learn-unit
module: "Develop AI agents with Microsoft Foundry and Visual Studio Code"
learning_path: "Develop AI agents on Azure"
unit: "10 of 11"
presenters: []
raw_file: "142-Knowledge Check - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/develop-ai-agents-azure-vs-code/10-knowledge-check"
ingest_depth: full
---

# Knowledge Check — Develop AI agents with Microsoft Foundry and Visual Studio Code

*learn-unit · Develop AI agents with Microsoft Foundry and Visual Studio Code · unit 10 of 11 · SRC-142*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-142 |
| Raw file | 142-Knowledge Check - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Develop AI agents with Microsoft Foundry and Visual Studio Code |
| Unit / episode | 10 of 11 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/develop-ai-agents-azure-vs-code/10-knowledge-check |
| Teaching content | L214–243 of 273 |
| Content length | ~244 words |
| Capture quality | Medium; options are present but checked answers are not shown. |
| Ingest depth | full |

## TL;DR

The knowledge check tests four ideas: why Foundry Agent Service is preferable to standard APIs, how it handles conversation state, which agent security practice is not recommended, and what happens when an agent needs a tool. (SRC-142 L216–241) The capture lists options but does not show the checked answers. (SRC-142 L216–243)

## Key claims

- Question 1 asks for the primary benefit of Microsoft Foundry Agent Service compared with standard APIs. (SRC-142 L216–222)
- One option says the service handles tool calling, state management, and infrastructure automatically. (SRC-142 L219–221)
- Question 2 asks how Microsoft Foundry Agent Service handles conversation state. (SRC-142 L223–229)
- One option says conversation context is automatically managed through the Responses API. (SRC-142 L226–228)
- Question 3 asks which option is not a recommended AI-agent security practice. (SRC-142 L230–235)
- Question 4 asks what happens when an agent determines it needs a tool. (SRC-142 L236–241)

## How it works

The page is an assessment unit rather than an explanatory unit. (SRC-142 L216–243) Its distractors contrast managed service automation against model access alone, Azure subscription requirements, portal-only use, manual state handling, external databases, local files, unrestricted data access, and developer-interrupt tool handling. (SRC-142 L216–241)

## Code and API patterns

Not covered by this source. (SRC-142 L216–243)

## Key terms

- **Responses API** — named in a conversation-state option as automatically managing conversation context. (SRC-142 L226–228)
- **Tool calling** — assessed as automatic agent behavior when a tool is needed. (SRC-142 L236–240)
- **Role-based access controls** — listed as a security-practice option. (SRC-142 L231)

## Decision boundaries and exam cues

- **Inference:** The plausible answer to question 1 is the option about handling tool calling, state management, and infrastructure automatically because it matches the managed-service lesson. (SRC-142 L216–221; SRC-230 L270–276)
- **Inference:** The plausible answer to question 2 is the Responses API option because the module states service-managed data uses the Responses API. (SRC-142 L223–228; SRC-230 L271)
- **Inference:** The plausible answer to question 3 is unrestricted enterprise-data access because it conflicts with least privilege and RBAC practices. (SRC-142 L230–235; SRC-230 L253–257)
- **Inference:** The plausible answer to question 4 is automatic tool invocation, result processing, and response incorporation because that mirrors the tool lifecycle. (SRC-142 L236–240; SRC-91 L222–224)

## Assessment items

1. What is the primary benefit of using Microsoft Foundry Agent Service compared to building agents with standard APIs? Options: more powerful AI models; no Azure subscription; handles tool calling, state management, and infrastructure automatically; only works with the Azure portal. Answer not shown in capture. (SRC-142 L216–222)
2. How does Microsoft Foundry Agent Service handle conversation state? Options: developers manually manage history; external database connections; Responses API automatically manages context; local file storage on the client device. Answer not shown in capture. (SRC-142 L223–229)
3. Which option is not a recommended security practice for AI agents? Options: RBAC; prompt filtering and validation; logging and traceability; unrestricted access to all enterprise data. Answer not shown in capture. (SRC-142 L230–235)
4. What happens when an agent determines it needs a tool? Options: asks user permission; stops and waits for developer input; automatically invokes the tool, processes results, and incorporates them; sends request to a separate processing queue. Answer not shown in capture. (SRC-142 L236–241)

## Tensions, caveats and currency

- The capture includes the instruction that all questions must be answered before checking work, but it does not show which options Microsoft marked correct. (SRC-142 L242–243)

## Relation to other sources

- [[src-230-understand-ai-agents-microsoft-foundry-agent-service]] teaches the managed-service, Responses API, and security content tested here. (SRC-230 L250–276; SRC-142 L216–235)
- [[src-91-extend-agent-capabilities-tools]] teaches the automatic tool-calling lifecycle tested in question 4. (SRC-91 L222–224; SRC-142 L236–241)
- [[src-41-develop-ai-agents-microsoft-foundry-visual-studio-code-episode]] verbally answers the first two knowledge-check questions in the episode. (SRC-41 L900–940; SRC-142 L216–229)

## Connections

- [[foundry-agent-service]] — the assessment's main service. (SRC-142 L216–229)
- [[responses-api]] — assessed for conversation state. (SRC-142 L223–228)
- [[agent-tools]] — assessed for automatic tool invocation. (SRC-142 L236–241)
- [[keyless-authentication]] — RBAC and least privilege are related security practices. (SRC-142 L230–235)

## Open questions

- The exact checked answers are absent from the capture. (SRC-142 L242–243)

## Sources

- SRC-142 — raw file: [[142-Knowledge Check - Training - Microsoft Learn]]
