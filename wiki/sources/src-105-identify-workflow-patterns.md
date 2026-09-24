---
title: "Identify workflow patterns"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Names sequential, human-in-the-loop, and group chat workflow patterns and the scenarios each supports."
area: orchestration
source_ids: [SRC-105]
tags: [workflow-patterns, sequential, human-in-the-loop, group-chat]
aliases: ["SRC-105"]
source_kind: learn-unit
module: "Build agent-driven workflows using Microsoft Foundry"
learning_path: "Develop AI agents on Azure"
unit: "3 of 11"
presenters: []
raw_file: "105-Identify workflow patterns - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/build-agent-workflows-microsoft-foundry/3-identify-workflow-patterns"
ingest_depth: full
---
# Identify workflow patterns
*learn-unit · Build agent-driven workflows using Microsoft Foundry · unit 3 of 11 · SRC-105*

## Source metadata
| Field | Value |
|---|---|
| Source ID | SRC-105 |
| Raw file | 105-Identify workflow patterns - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Build agent-driven workflows using Microsoft Foundry |
| Unit / episode | 3 of 11 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/build-agent-workflows-microsoft-foundry/3-identify-workflow-patterns |
| Teaching content | L214–224 of 254 |
| Content length | ~325 words |
| Capture quality | Complete short Learn unit text. |
| Ingest depth | full |

## TL;DR
This unit says workflow structure matters as much as the agents themselves because different problems vary in decision-making, data flow, and the need for human input (SRC-105 L220). It identifies three Foundry workflow patterns: sequential, human-in-the-loop, and group chat (SRC-105 L221–224).

## Key claims
- Microsoft Foundry provides predefined workflow patterns for modelling agent interactions, control flow, and human input clearly and consistently (SRC-105 L220; SRC-105 L224).
- A sequential workflow follows a fixed path where each node executes in order and passes output to the next step (SRC-105 L221).
- A human-in-the-loop workflow pauses for user input or approval before continuing (SRC-105 L222).
- A group chat workflow lets control shift dynamically between multiple agents based on context, rules, or intermediate results (SRC-105 L223).

## How it works
The source frames pattern choice as a design decision made before building the workflow. Sequential workflows fit predictable pipelines such as input validation, enrichment, and final response generation (SRC-105 L221). Human-in-the-loop workflows fit approvals, confirmations, and missing-context situations where automation must be balanced with oversight (SRC-105 L222). Group chat workflows fit complex requests where specialized agents collaborate and adapt to changing inputs (SRC-105 L223).

## Code and API patterns
Not covered by this source.

## Key terms
- Sequential workflow: a fixed step-by-step workflow in which each node passes output to the next node (SRC-105 L221).
- Human-in-the-loop workflow: a pattern that asks a question, waits for a response, and resumes based on that input (SRC-105 L222).
- Group chat workflow: a dynamic pattern in which multiple specialized agents can collaborate and control can shift based on context or results (SRC-105 L223).

## Decision boundaries and exam cues
- **Inference:** Choose sequential when the scenario describes a predictable pipeline or multi-stage process with no need to revisit earlier steps (SRC-105 L221).
- **Inference:** Choose human-in-the-loop when the scenario requires approvals, confirmations, oversight, or missing information from a person (SRC-105 L222).
- **Inference:** Choose group chat when several specialized agents must collaborate and adapt rather than follow a fixed path (SRC-105 L223).

## Assessment items
Not covered by this source.

## Tensions, caveats and currency
- **Stale-risk:** The source names three predefined patterns, but does not claim they are the only possible workflow patterns in Foundry (SRC-105 L220–224).

## Relation to other sources
- [[src-238-understand-workflows]] provides the node-and-execution-path foundation behind these patterns (SRC-238 L220–224).
- [[src-36-create-workflows-microsoft-foundry]] explains how the visual designer starts from a blank canvas or a predefined pattern (SRC-36 L221).
- [[src-15-build-agent-driven-workflows-microsoft-foundry-episode-12]] adds presenter examples for sequential, human-in-the-loop, and group chat patterns (SRC-15 L123–190).

## Connections
- [[workflow-patterns]] — main concept taught by this source (SRC-105 L220–224).
- [[sequential-orchestration]] — maps to the fixed step-by-step pattern (SRC-105 L221).
- [[human-in-the-loop-approval]] — maps to pause, approval, and context-gathering scenarios (SRC-105 L222).
- [[group-chat-orchestration]] — maps to multiple specialized agents collaborating dynamically (SRC-105 L223).
- [[orchestration-patterns-compared]] — the source provides decision boundaries for a later comparison (SRC-105 L221–224).

## Open questions
- The source does not describe the implementation details or limits of each predefined pattern (SRC-105 L220–224).

## Sources
- SRC-105 — raw file: [[105-Identify workflow patterns - Training - Microsoft Learn]]
