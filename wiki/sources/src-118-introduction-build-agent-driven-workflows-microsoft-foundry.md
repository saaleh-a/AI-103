---
title: "Introduction — Build agent-driven workflows using Microsoft Foundry"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Introduces Foundry workflows as agent orchestration with logic, routing, loops, escalation, and Power Fx."
area: orchestration
source_ids: [SRC-118]
tags: [microsoft-foundry, workflows, agents, orchestration]
aliases: ["SRC-118"]
source_kind: learn-unit
module: "Build agent-driven workflows using Microsoft Foundry"
learning_path: "Develop AI agents on Azure"
unit: "1 of 11"
presenters: []
raw_file: "118-Introduction - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/build-agent-workflows-microsoft-foundry/1-introduction"
ingest_depth: full
---
# Introduction — Build agent-driven workflows using Microsoft Foundry
*learn-unit · Build agent-driven workflows using Microsoft Foundry · unit 1 of 11 · SRC-118*

## Source metadata
| Field | Value |
|---|---|
| Source ID | SRC-118 |
| Raw file | 118-Introduction - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Build agent-driven workflows using Microsoft Foundry |
| Unit / episode | 1 of 11 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/build-agent-workflows-microsoft-foundry/1-introduction |
| Teaching content | L214–228 of 258 |
| Content length | ~331 words |
| Capture quality | Complete Learn unit text, with navigation lines before and after the teaching content. |
| Ingest depth | full |

## TL;DR
This introduction frames Microsoft Foundry workflows as a way to orchestrate multiple agents, logic, and safeguards for business processes where full manual review does not scale and full automation may be unsafe (SRC-118 L218–220). The unit promises practice with workflow nodes, variables, structured outputs, conditional routing, loops, human escalation, and Power Fx expressions (SRC-118 L221–226).

## Key claims
- Microsoft Foundry agent workflows orchestrate multiple agents by combining agents, control flow, and runtime safeguards (SRC-118 L218).
- The visual workflow builder lets developers define agent invocation, data movement, decisions based on agent outputs, execution paths, and intermediate-result inspection without extensive code (SRC-118 L219).
- The example scenario is SaaS customer support triage, where tickets include billing disputes, API errors, and how-to questions, and workflows balance scale with reliability and control (SRC-118 L220).
- The module objectives include explaining nodes, variables, and agent outputs; routing with structured outputs and conditional logic; For-Each loops; human-in-the-loop escalation; and Power Fx expressions (SRC-118 L221–226).

## How it works
The source positions workflows as a structured layer above individual agents: agents analyze or decide, but workflow nodes and control flow decide how outputs move through the process (SRC-118 L218–220). The teaching path starts with the mechanics of nodes, variables, and outputs, then moves into structured outputs, conditions, loops, escalation, and Power Fx (SRC-118 L221–226).

## Code and API patterns
Not covered by this source.

## Key terms
- Agent workflow: a Microsoft Foundry workflow that orchestrates agents, control flow, and runtime safeguards (SRC-118 L218).
- Structured agent output: predictable output that can drive routing and workflow steps (SRC-118 L223).
- For-Each: a workflow loop for processing multiple inputs efficiently (SRC-118 L224).
- Human-in-the-loop escalation: a pattern for uncertainty or low-confidence responses (SRC-118 L225).
- Power Fx: expressions used to manipulate data, evaluate conditions, and control flow (SRC-118 L226).

## Decision boundaries and exam cues
- **Inference:** Choose Foundry workflows when a scenario requires several agents plus explicit routing, looping, escalation, or low-code control flow, because those are the module capabilities named here (SRC-118 L221–226).
- **Inference:** Do not treat the workflow as only an agent prompt; the source separates agent outputs from nodes, variables, conditions, loops, and Power Fx (SRC-118 L221–226).

## Assessment items
Not covered by this source.

## Tensions, caveats and currency
- **Stale-risk:** The source uses the Microsoft Foundry name and a 2026 Learn capture; product naming and portal surfaces can change (SRC-118 L218–228).
- The page notes that the text may contain more detail than the video presentation (SRC-118 L228).

## Relation to other sources
- [[src-238-understand-workflows]] expands the workflow concept into visual declarative steps, connected nodes, execution paths, and oversight patterns (SRC-238 L220–224).
- [[src-105-identify-workflow-patterns]] names the main workflow patterns introduced by this module: sequential, human-in-the-loop, and group chat (SRC-105 L220–224).
- [[src-15-build-agent-driven-workflows-microsoft-foundry-episode-12]] covers the same module as a presenter-led walkthrough and demo (SRC-15 L15–30).

## Connections
- [[foundry-workflows]] — core concept introduced by the unit (SRC-118 L218–226).
- [[microsoft-foundry]] — the platform in which the workflow builder runs (SRC-118 L218–219).
- [[workflow-patterns]] — later unit objective for routing, loops, and escalation patterns (SRC-118 L221–226).
- [[power-fx]] — expression language named as part of the module outcome (SRC-118 L226).
- [[human-in-the-loop-approval]] — escalation and human input are named module outcomes (SRC-118 L220; SRC-118 L225).

## Open questions
- The introduction does not define the workflow runtime, permissions model, or deployment model (SRC-118 L218–226).

## Sources
- SRC-118 — raw file: [[118-Introduction - Training - Microsoft Learn]]
