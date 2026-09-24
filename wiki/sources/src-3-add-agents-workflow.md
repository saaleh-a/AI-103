---
title: "Add agents to a workflow"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains adding Invoke agent nodes, configuring agents, structured outputs, and storing agent outputs in variables."
area: orchestration
source_ids: [SRC-3]
tags: [agents, workflows, structured-output, variables]
aliases: ["SRC-3"]
source_kind: learn-unit
module: "Build agent-driven workflows using Microsoft Foundry"
learning_path: "Develop AI agents on Azure"
unit: "5 of 11"
presenters: []
raw_file: "3-Add agents to a workflow - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/build-agent-workflows-microsoft-foundry/5-add-agents-to-workflow"
ingest_depth: full
---
# Add agents to a workflow
*learn-unit · Build agent-driven workflows using Microsoft Foundry · unit 5 of 11 · SRC-3*

## Source metadata
| Field | Value |
|---|---|
| Source ID | SRC-3 |
| Raw file | 3-Add agents to a workflow - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Build agent-driven workflows using Microsoft Foundry |
| Unit / episode | 5 of 11 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/build-agent-workflows-microsoft-foundry/5-add-agents-to-workflow |
| Teaching content | L214–225 of 255 |
| Content length | ~359 words |
| Capture quality | Complete short Learn unit text. |
| Ingest depth | full |

## TL;DR
This unit makes agents the reasoning components inside a Foundry workflow and explains that Invoke agent nodes add decision-making, classification, and response generation to a larger orchestration (SRC-3 L220). It also teaches that structured agent outputs can be stored in variables and used for routing, conditions, or later agent inputs (SRC-3 L223–224).

## Key claims
- Agents are the core reasoning components inside Microsoft Foundry workflows (SRC-3 L220).
- An Invoke agent node can reference an existing Foundry project agent or create a new agent in the workflow designer (SRC-3 L221).
- The Invoke agent editor can configure tools, knowledge bases, memory, and guardrails for the agent (SRC-3 L221).
- Agents can be reused across multiple workflows, supporting modular design and separation of concerns (SRC-3 L222).
- Agents can return structured output, such as JSON schema-shaped output, which can drive routing or variable assignment (SRC-3 L223).
- Agent output can be stored in variables and referenced throughout the workflow (SRC-3 L224).

## How it works
The workflow passes context, such as user input or previously set variables, into the Invoke agent node and receives a response for later steps (SRC-3 L221). The source highlights modular reuse: one categorization agent can classify requests across workflows while resolution agents perform follow-up actions (SRC-3 L222). Structured outputs make downstream control flow safer because later nodes can evaluate predictable fields rather than free text (SRC-3 L223–224).

## Code and API patterns
Not covered by this source.

## Key terms
- Invoke agent node: workflow node used to add or call an agent in the workflow (SRC-3 L221).
- Structured output: a response format, such as JSON schema, that makes agent output predictable (SRC-3 L223).
- Action settings: the Invoke agent node area where variable storage can be configured (SRC-3 L224).

## Decision boundaries and exam cues
- **Inference:** If the scenario needs AI reasoning, classification, recommendation, or response generation in a workflow, use an Invoke agent node (SRC-3 L220–221).
- **Inference:** If the agent response will drive routing or conditions, configure structured output rather than relying only on free-form text (SRC-3 L223).
- **Inference:** If later nodes need to use an agent result, store the result in a workflow variable (SRC-3 L224).

## Assessment items
Not covered by this source.

## Tensions, caveats and currency
- **Stale-risk:** The source refers to Details tab parameters and Action settings in the Invoke agent editor; portal UI labels may change (SRC-3 L223–224).

## Relation to other sources
- [[src-36-create-workflows-microsoft-foundry]] identifies Invoke as one of the main workflow node types (SRC-36 L222–223).
- [[src-11-apply-power-fx-workflows]] explains how formulas can evaluate variables and structured agent outputs in later conditions (SRC-11 L220–233).
- [[src-15-build-agent-driven-workflows-microsoft-foundry-episode-12]] demonstrates creating triage and resolution agents inside a workflow (SRC-15 L455–520; SRC-15 L700–765).

## Connections
- [[ai-agents]] — agents provide workflow reasoning components (SRC-3 L220).
- [[foundry-workflows]] — agents are inserted into Foundry workflows via Invoke nodes (SRC-3 L221).
- [[agent-tools]] — agent configuration can include tools (SRC-3 L221).
- [[guardrails-and-content-filters]] — the source says guardrails can be configured for the agent in the Invoke editor (SRC-3 L221).
- [[workflow-patterns]] — structured outputs and variables enable routing patterns (SRC-3 L223–224).
- *Module units:* [[src-118-introduction-build-agent-driven-workflows-microsoft-foundry|1 Introduction]] · [[src-238-understand-workflows|2 Understand workflows]] · [[src-105-identify-workflow-patterns|3 Identify workflow patterns]] · [[src-36-create-workflows-microsoft-foundry|4 Create workflows in Microsoft Foundry]] · [[src-11-apply-power-fx-workflows|6 Apply Power Fx in workflows]] · [[src-151-maintain-workflows-microsoft-foundry|7 Maintain workflows in Microsoft Foundry]] · [[src-247-workflows-code|8 Use Workflows in Code]] · [[src-66-exercise-create-agent-driven-workflow|9 Exercise - Create an agent-driven workflow]] · [[src-171-module-assessment-build-agent-driven-workflows-microsoft-foundry|10 Module assessment]] · [[src-219-summary-build-agent-driven-workflows-microsoft-foundry|11 Summary]] · [[src-15-build-agent-driven-workflows-microsoft-foundry-episode-12|episode 12]]

## Open questions
- The source does not specify the exact JSON schema UI or validation behaviour beyond predictable structured output (SRC-3 L223).

## Sources
- SRC-3 — raw file: [[3-Add agents to a workflow - Training - Microsoft Learn]]
