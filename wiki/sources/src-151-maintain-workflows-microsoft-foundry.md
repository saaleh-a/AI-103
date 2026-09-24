---
title: "Maintain workflows in Microsoft Foundry"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Covers maintaining Foundry workflows with visual/YAML views, immutable versions, notes, and refinement practices."
area: orchestration
source_ids: [SRC-151]
tags: [microsoft-foundry, workflows, yaml, versioning, maintenance]
aliases: ["SRC-151"]
source_kind: learn-unit
module: "Build agent-driven workflows using Microsoft Foundry"
learning_path: "Develop AI agents on Azure"
unit: "7 of 11"
presenters: []
raw_file: "151-Maintain workflows in Microsoft Foundry - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/build-agent-workflows-microsoft-foundry/7-maintain-workflows"
ingest_depth: full
---
# Maintain workflows in Microsoft Foundry
*learn-unit · Build agent-driven workflows using Microsoft Foundry · unit 7 of 11 · SRC-151*

## Source metadata
| Field | Value |
|---|---|
| Source ID | SRC-151 |
| Raw file | 151-Maintain workflows in Microsoft Foundry - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Build agent-driven workflows using Microsoft Foundry |
| Unit / episode | 7 of 11 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/build-agent-workflows-microsoft-foundry/7-maintain-workflows |
| Teaching content | L214–233 of 263 |
| Content length | ~336 words |
| Capture quality | Complete Learn unit text. |
| Ingest depth | full |

## TL;DR
This unit treats workflow maintenance as reliability work: workflows evolve as business needs and AI models change (SRC-151 L220). Microsoft Foundry supports maintenance through synchronized visual and YAML representations, immutable versions on save, and notes for maintainers (SRC-151 L220–226).

## Key claims
- Maintaining and refining workflows keeps them reliable, understandable, and adaptable as business needs or AI models change (SRC-151 L220).
- Foundry workflows can be represented both on a visual canvas and in YAML, and changes in either view are reflected in the other (SRC-151 L222).
- Every save creates a new immutable version, supporting review, comparison, rollback, and collaboration (SRC-151 L224).
- The workflow visualizer can attach notes to nodes or workflow sections for context, design decisions, and variable usage (SRC-151 L226).
- Best practices include reviewing unused or redundant nodes, consistently handling structured outputs, documenting decisions, and using version history (SRC-151 L227–232).

## How it works
The visual canvas is framed as useful for conceptual understanding, tracing execution paths, and collaboration (SRC-151 L222). YAML is framed as a textual representation that supports advanced configuration, version tracking, and source-control integration (SRC-151 L222). Versioning creates an immutable safety net every time a workflow is saved, allowing earlier versions to be reviewed or restored (SRC-151 L224).

## Code and API patterns
This source mentions YAML as the textual representation of workflows, but it does not show a YAML sample (SRC-151 L222).

## Key terms
- YAML representation: textual workflow representation for advanced configuration, version tracking, or source control (SRC-151 L222).
- Immutable version: a saved workflow version that can be reviewed, compared, or rolled back to (SRC-151 L224).
- Notes: workflow visualizer annotations for context, design decisions, and variable usage (SRC-151 L226).

## Decision boundaries and exam cues
- **Inference:** If a scenario asks for rollback or comparing changes, the key Foundry feature is automatic immutable workflow versioning (SRC-151 L224).
- **Inference:** If a scenario asks for collaboration, traceability, or source control, the source points to visual/YAML synchronization and version history (SRC-151 L222–224).
- **Inference:** If maintainers misunderstand variables or decisions, attach notes to nodes or sections (SRC-151 L226).

## Assessment items
Not covered by this source.

## Tensions, caveats and currency
- **Stale-risk:** The unit describes Foundry's current visualizer, YAML editing, and versioning behaviour; portal implementation details can change (SRC-151 L220–233).

## Relation to other sources
- [[src-36-create-workflows-microsoft-foundry]] warns that workflows are not saved automatically, which makes this source's version-on-save point important (SRC-36 L221; SRC-151 L224).
- [[src-247-workflows-code]] says the portal visual designer generates YAML and that YAML can be downloaded into a codebase (SRC-247 L13).
- [[src-219-summary-build-agent-driven-workflows-microsoft-foundry]] summarizes versioning, notes, and dual visual/YAML representations as maintainability practices (SRC-219 L222).

## Connections
- [[foundry-workflows]] — this source covers maintaining workflow definitions (SRC-151 L220–233).
- [[observability-and-tracing]] — visual canvas tracing and execution-path understanding are maintenance aids, though the source does not discuss telemetry (SRC-151 L222).
- [[development-tools-and-approaches]] — YAML and visual canvas are alternative authoring/maintenance surfaces (SRC-151 L222).
- *Module units:* [[src-118-introduction-build-agent-driven-workflows-microsoft-foundry|1 Introduction]] · [[src-238-understand-workflows|2 Understand workflows]] · [[src-105-identify-workflow-patterns|3 Identify workflow patterns]] · [[src-36-create-workflows-microsoft-foundry|4 Create workflows in Microsoft Foundry]] · [[src-3-add-agents-workflow|5 Add agents to a workflow]] · [[src-11-apply-power-fx-workflows|6 Apply Power Fx in workflows]] · [[src-247-workflows-code|8 Use Workflows in Code]] · [[src-66-exercise-create-agent-driven-workflow|9 Exercise - Create an agent-driven workflow]] · [[src-171-module-assessment-build-agent-driven-workflows-microsoft-foundry|10 Module assessment]] · [[src-219-summary-build-agent-driven-workflows-microsoft-foundry|11 Summary]] · [[src-15-build-agent-driven-workflows-microsoft-foundry-episode-12|episode 12]]

## Open questions
- The unit does not specify the YAML schema, diff format, or source-control workflow (SRC-151 L222–224).

## Sources
- SRC-151 — raw file: [[151-Maintain workflows in Microsoft Foundry - Training - Microsoft Learn]]
