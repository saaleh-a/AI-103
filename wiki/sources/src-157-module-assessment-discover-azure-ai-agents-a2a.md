---
title: "Module Assessment — Discover Azure AI Agents with A2A"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Captures the A2A module assessment questions on server role, Agent Executor role, and Agent Card purpose."
area: orchestration
source_ids: [SRC-157]
objectives: []
tags: [a2a, module-assessment, agent-executor, agent-card]
aliases: ["SRC-157"]
source_kind: learn-unit
module: "Discover Azure AI Agents with A2A"
learning_path: "Develop AI agents on Azure"
unit: "7 of 8"
presenters: []
raw_file: "157-Module Assessment - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/discover-agents-with-a2a/7-knowledge-check"
ingest_depth: full
---
# Module Assessment — Discover Azure AI Agents with A2A

*learn-unit · Discover Azure AI Agents with A2A · unit 7 of 8 · SRC-157*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-157 |
| Raw file | 157-Module Assessment - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Discover Azure AI Agents with A2A |
| Unit / episode | 7 of 8 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/discover-agents-with-a2a/7-knowledge-check |
| Teaching content | L211–229 of 259 |
| Content length | ~148 words |
| Capture quality | Medium: questions and options are captured, but no checked answers are shown. |
| Ingest depth | full |

## TL;DR

This assessment checks three A2A distinctions: the primary role of an A2A server, the Agent Executor's role, and the Agent Card's purpose. (SRC-157 L213–226) The capture shows the questions and options but not the selected or correct answers. (SRC-157 L227–229)

## Key claims

- The first assessment item asks for the primary role of an A2A server. (SRC-157 L213–216)
- The second assessment item asks what the Agent Executor does in an A2A agent. (SRC-157 L218–221)
- The third assessment item asks what an Agent Card is used for in A2A. (SRC-157 L223–226)
- The capture states that all questions must be answered before checking the work. (SRC-157 L227–229)

## How it works

The assessment is a three-question knowledge check about the server, executor, and card components of an A2A implementation. (SRC-157 L213–226)

## Code and API patterns

Not covered by this source.

## Key terms

- **A2A server** — the component whose primary role is queried in question 1. (SRC-157 L213–216)
- **Agent Executor** — the component whose request-processing role is queried in question 2. (SRC-157 L218–221)
- **Agent card** — the component whose metadata purpose is queried in question 3. (SRC-157 L223–226)

## Decision boundaries and exam cues

- **Inference:** The assessment distinguishes server routing from direct business-logic execution, because question 1 contrasts routing requests with executing business logic and storing static responses. (SRC-157 L213–216)
- **Inference:** The assessment distinguishes executor processing from network management or GUI monitoring, because question 2 contrasts those options. (SRC-157 L218–221)
- **Inference:** The assessment distinguishes Agent Card metadata from API-key storage or workflow visualization, because question 3 contrasts those options. (SRC-157 L223–226)

## Assessment items

1. What is the primary role of an A2A server? (SRC-157 L213)
   - It executes business logic for the agent directly. (SRC-157 L214)
   - It routes requests between clients and connected agents. (SRC-157 L215)
   - It stores static agent responses for reuse. (SRC-157 L216)
   - Answer shown: answer not shown in capture. (SRC-157 L227–229)
2. What does the Agent Executor do in an A2A agent? (SRC-157 L218)
   - Manages network connections between clients and servers. (SRC-157 L219)
   - Processes incoming requests and generates responses or events. (SRC-157 L220)
   - Provides a GUI for monitoring agent activity. (SRC-157 L221)
   - Answer shown: answer not shown in capture. (SRC-157 L227–229)
3. What is an agent card used for in A2A? (SRC-157 L223)
   - It stores the agent's API key for authentication. (SRC-157 L224)
   - It provides metadata about the agent, such as its capabilities and available functions. (SRC-157 L225)
   - It visualizes the agent's workflow in a GUI dashboard. (SRC-157 L226)
   - Answer shown: answer not shown in capture. (SRC-157 L227–229)

## Tensions, caveats and currency

- The capture does not show the correct answers, only the instruction that all questions must be answered before checking the work. (SRC-157 L227–229)

## Relation to other sources

- [[src-103-host-a2a-server]] provides the server role needed for assessment item 1. (SRC-103 L12–17; SRC-103 L24–31)
- [[src-107-implement-agent-executor]] provides the executor role needed for assessment item 2. (SRC-107 L12–18)
- [[src-37-define-a2a-agent]] provides the Agent Card purpose needed for assessment item 3. (SRC-37 L234–243)

## Connections

- [[a2a-agent-implementation]] — the assessment checks implementation components: server, executor, and Agent Card. (SRC-157 L213–226)
- [[agent2agent-protocol]] — all three questions concern components in an A2A solution. (SRC-157 L213–226)
- [[decision-boundaries]] — the assessment uses distractors that separate routing, execution, metadata, storage, and GUI concerns. (SRC-157 L213–226)
- *Module units:* [[src-134-introduction-discover-azure-ai-agents-a2a|1 Introduction]] · [[src-37-define-a2a-agent|2 Define an A2A Agent]] · [[src-107-implement-agent-executor|3 Implement an Agent Executor]] · [[src-103-host-a2a-server|4 Host an A2A Server]] · [[src-26-connect-a2a-agent|5 Connect to your A2A Agent]] · [[src-61-exercise-connect-remote-azure-ai-agents-a2a-protocol|6 Exercise - Connect to remote Azure AI Agents with the A2A protocol]] · [[src-205-summary-discover-azure-ai-agents-a2a|8 Summary]]

## Open questions

- The raw capture does not show the correct-answer feedback. (SRC-157 L227–229)

## Sources

- SRC-157 — raw file: [[157-Module Assessment - Training - Microsoft Learn]]
