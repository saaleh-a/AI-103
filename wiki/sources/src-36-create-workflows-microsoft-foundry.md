---
title: "Create workflows in Microsoft Foundry"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains the Foundry workflow designer, node types, variables, conversational execution, and tracing execution paths."
area: orchestration
source_ids: [SRC-36]
tags: [microsoft-foundry, workflows, visual-designer, nodes]
aliases: ["SRC-36"]
source_kind: learn-unit
module: "Build agent-driven workflows using Microsoft Foundry"
learning_path: "Develop AI agents on Azure"
unit: "4 of 11"
presenters: []
raw_file: "36-Create workflows in Microsoft Foundry - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/build-agent-workflows-microsoft-foundry/4-create-workflows-microsoft-foundry"
ingest_depth: full
---
# Create workflows in Microsoft Foundry
*learn-unit · Build agent-driven workflows using Microsoft Foundry · unit 4 of 11 · SRC-36*

## Source metadata
| Field | Value |
|---|---|
| Source ID | SRC-36 |
| Raw file | 36-Create workflows in Microsoft Foundry - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Build agent-driven workflows using Microsoft Foundry |
| Unit / episode | 4 of 11 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/build-agent-workflows-microsoft-foundry/4-create-workflows-microsoft-foundry |
| Teaching content | L214–236 of 266 |
| Content length | ~526 words |
| Capture quality | Complete Learn unit text; one captured sentence starts mid-phrase at L234. |
| Ingest depth | full |

## TL;DR
This unit explains the Microsoft Foundry workflow designer as a visual canvas for connected nodes, execution order, configuration details, and saved workflow versions (SRC-36 L220–221). It lists the main node types: Invoke, Flow, Data transformation, Basic chat, and End (SRC-36 L222–233).

## Key claims
- The visual designer builds workflows as connected nodes, where nodes represent actions and connections define execution flow (SRC-36 L220).
- A workflow can start from a blank canvas or a predefined pattern, and workflows are not saved automatically (SRC-36 L221).
- Invoke nodes call an existing AI agent or create a new one, and can return free-text or structured outputs (SRC-36 L223).
- Flow nodes control execution through If/Else, Go To, and For Each (SRC-36 L224–227).
- Data transformation nodes manipulate data and variables through Set Variable, Reset Variable, and Parse value (SRC-36 L228–231).
- Basic chat nodes send messages or collect user input, and End nodes conclude the workflow with an optional result or status (SRC-36 L232–233).

## How it works
The source describes a workflow as an assembled set of nodes. Agent nodes are important, but automation depends on all node types working together with shared state (SRC-36 L223–234). Variables provide shared state across nodes so outputs from agents or users can drive later decisions or actions (SRC-36 L232–234). Workflows execute in a conversational context, allowing a developer to interact through chat, observe inputs moving through nodes, and validate behaviour before adding complexity (SRC-36 L235).

## Code and API patterns
Not covered by this source.

## Key terms
- Invoke: a node that invokes an AI agent from the project or creates a new one (SRC-36 L223).
- Flow: node category for execution path control, including If/Else, Go To, and For Each (SRC-36 L224–227).
- Data transformation: node category for data and variable manipulation (SRC-36 L228–231).
- Basic chat: a node that sends messages or collects input from a user (SRC-36 L232).
- End: the workflow conclusion node (SRC-36 L233).

## Decision boundaries and exam cues
- **Inference:** If a scenario asks for looping over items, the node clue is `For Each` (SRC-36 L227).
- **Inference:** If a scenario asks for branching based on a condition, the node clue is `If/Else` (SRC-36 L225).
- **Inference:** If a scenario asks for a final result or status, the node clue is `End` (SRC-36 L233).
- **Inference:** If a scenario asks for user messages or user input, the node clue is `Basic chat` rather than an agent node (SRC-36 L232).

## Assessment items
Not covered by this source.

## Tensions, caveats and currency
- The capture has a mid-sentence line at L234, but the surrounding lines make the variable/shared-state point clear (SRC-36 L232–235).
- **Stale-risk:** Visual designer node names and save behaviour are portal-surface details that may change (SRC-36 L220–236).

## Relation to other sources
- [[src-238-understand-workflows]] explains the abstract node-and-execution-path model that this unit makes concrete (SRC-238 L220–224).
- [[src-3-add-agents-workflow]] drills into the Invoke agent node and agent output storage (SRC-3 L220–224).
- [[src-11-apply-power-fx-workflows]] explains the expression language used in conditions, variables, and loops (SRC-11 L220–233).

## Connections
- [[foundry-workflows]] — the workflow designer is the concrete authoring surface (SRC-36 L220–236).
- [[workflow-patterns]] — predefined patterns can be selected when starting a workflow (SRC-36 L221).
- [[agent-tools]] — Invoke nodes can call agents that perform AI-driven work (SRC-36 L223).
- [[power-fx]] — conditions and variables connect to the next unit's expression language (SRC-36 L224–231; SRC-11 L220–233).
- *Module units:* [[src-118-introduction-build-agent-driven-workflows-microsoft-foundry|1 Introduction]] · [[src-238-understand-workflows|2 Understand workflows]] · [[src-105-identify-workflow-patterns|3 Identify workflow patterns]] · [[src-3-add-agents-workflow|5 Add agents to a workflow]] · [[src-11-apply-power-fx-workflows|6 Apply Power Fx in workflows]] · [[src-151-maintain-workflows-microsoft-foundry|7 Maintain workflows in Microsoft Foundry]] · [[src-247-workflows-code|8 Use Workflows in Code]] · [[src-66-exercise-create-agent-driven-workflow|9 Exercise - Create an agent-driven workflow]] · [[src-171-module-assessment-build-agent-driven-workflows-microsoft-foundry|10 Module assessment]] · [[src-219-summary-build-agent-driven-workflows-microsoft-foundry|11 Summary]] · [[src-15-build-agent-driven-workflows-microsoft-foundry-episode-12|episode 12]]

## Open questions
- The unit does not specify how workflow permissions, deployment, or runtime isolation are configured (SRC-36 L220–236).

## Sources
- SRC-36 — raw file: [[36-Create workflows in Microsoft Foundry - Training - Microsoft Learn]]
