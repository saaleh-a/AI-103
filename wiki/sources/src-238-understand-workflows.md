---
title: "Understand workflows"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Defines Foundry workflows as visual, declarative orchestration of nodes, agents, data, logic, and human oversight."
area: orchestration
source_ids: [SRC-238]
tags: [microsoft-foundry, workflows, nodes, orchestration]
aliases: ["SRC-238"]
source_kind: learn-unit
module: "Build agent-driven workflows using Microsoft Foundry"
learning_path: "Develop AI agents on Azure"
unit: "2 of 11"
presenters: []
raw_file: "238-Understand workflows - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/build-agent-workflows-microsoft-foundry/2-understand-workflows"
ingest_depth: full
---
# Understand workflows
*learn-unit · Build agent-driven workflows using Microsoft Foundry · unit 2 of 11 · SRC-238*

## Source metadata
| Field | Value |
|---|---|
| Source ID | SRC-238 |
| Raw file | 238-Understand workflows - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Build agent-driven workflows using Microsoft Foundry |
| Unit / episode | 2 of 11 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/build-agent-workflows-microsoft-foundry/2-understand-workflows |
| Teaching content | L214–224 of 254 |
| Content length | ~267 words |
| Capture quality | Complete short Learn unit text. |
| Ingest depth | full |

## TL;DR
This source defines Microsoft Foundry workflows as visual, declarative orchestration: a developer defines steps and timing while the platform manages execution and state (SRC-238 L220). Workflows are made of connected nodes that invoke agents, evaluate conditions, manage data, communicate with users, and form the execution path (SRC-238 L221).

## Key claims
- Foundry workflows orchestrate AI-driven actions through a visual, declarative approach rather than by writing code (SRC-238 L220).
- A workflow is a set of connected nodes, and each node performs a function such as invoking agents, evaluating conditions, managing data, or communicating with users (SRC-238 L221).
- Workflows help coordinate multiple agents with responsibilities such as classification, decision-making, and resolution (SRC-238 L222).
- Workflow patterns can pause execution, request human input, or escalate decisions when confidence is low or more context is required (SRC-238 L223).

## How it works
The mental model in the source is a graph of connected nodes. Nodes do work, edges make an execution path, and the arrangement of nodes controls how information flows and how decisions are made (SRC-238 L221). The source contrasts this with single-agent solutions that can struggle with complex or ambiguous tasks, because workflows can combine specialized agents into a cohesive process (SRC-238 L222).

## Code and API patterns
Not covered by this source.

## Key terms
- Workflow: a visual, declarative sequence of steps in Microsoft Foundry that describes what should happen and when (SRC-238 L220).
- Node: an individual workflow step that performs a specific function (SRC-238 L221).
- Execution path: the route by which requests move through connected nodes (SRC-238 L221).
- Oversight pattern: a workflow behaviour that pauses, requests input, or escalates decisions when reliability requires control (SRC-238 L223).

## Decision boundaries and exam cues
- **Inference:** Select a workflow when the scenario names multi-step AI automation with explicit state, connected steps, and control over information flow (SRC-238 L220–221).
- **Inference:** Prefer workflows over a single agent prompt when separate responsibilities such as classification, decision-making, and resolution need coordination (SRC-238 L222).
- **Inference:** Human oversight is a workflow fit when the problem mentions low confidence, missing context, or escalation (SRC-238 L223).

## Assessment items
Not covered by this source.

## Tensions, caveats and currency
- **Stale-risk:** The page describes Microsoft Foundry workflow behaviour at capture time; portal features and names may change (SRC-238 L220–224).

## Relation to other sources
- [[src-118-introduction-build-agent-driven-workflows-microsoft-foundry]] introduces the module outcomes that this source begins to define (SRC-118 L221–226).
- [[src-36-create-workflows-microsoft-foundry]] turns the node model into concrete node types such as Invoke, Flow, Data transformation, Basic chat, and End (SRC-36 L220–233).
- [[src-15-build-agent-driven-workflows-microsoft-foundry-episode-12]] uses the same graph mental model and describes nodes and edges in the presenter walkthrough (SRC-15 L35–56; SRC-15 L195–246).

## Connections
- [[foundry-workflows]] — this is the module's foundational source for workflow meaning (SRC-238 L220–224).
- [[foundry-agent-service]] — workflows coordinate agents, though this unit does not define the service boundary (SRC-238 L221–222).
- [[human-in-the-loop-approval]] — pausing, requesting input, and escalation are explicit workflow behaviours (SRC-238 L223).
- [[multi-agent-orchestration]] — workflows coordinate agents with different responsibilities (SRC-238 L222).
- *Module units:* [[src-118-introduction-build-agent-driven-workflows-microsoft-foundry|1 Introduction]] · [[src-105-identify-workflow-patterns|3 Identify workflow patterns]] · [[src-36-create-workflows-microsoft-foundry|4 Create workflows in Microsoft Foundry]] · [[src-3-add-agents-workflow|5 Add agents to a workflow]] · [[src-11-apply-power-fx-workflows|6 Apply Power Fx in workflows]] · [[src-151-maintain-workflows-microsoft-foundry|7 Maintain workflows in Microsoft Foundry]] · [[src-247-workflows-code|8 Use Workflows in Code]] · [[src-66-exercise-create-agent-driven-workflow|9 Exercise - Create an agent-driven workflow]] · [[src-171-module-assessment-build-agent-driven-workflows-microsoft-foundry|10 Module assessment]] · [[src-219-summary-build-agent-driven-workflows-microsoft-foundry|11 Summary]] · [[src-15-build-agent-driven-workflows-microsoft-foundry-episode-12|episode 12]]

## Open questions
- The source does not state how workflow state is stored, secured, or versioned (SRC-238 L220–224).

## Sources
- SRC-238 — raw file: [[238-Understand workflows - Training - Microsoft Learn]]
