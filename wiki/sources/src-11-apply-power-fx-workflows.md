---
title: "Apply Power Fx in workflows"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains Power Fx as the expression glue for workflow variables, conditions, loops, and data-driven control flow."
area: orchestration
source_ids: [SRC-11]
tags: [power-fx, workflows, variables, conditions, loops]
aliases: ["SRC-11"]
source_kind: learn-unit
module: "Build agent-driven workflows using Microsoft Foundry"
learning_path: "Develop AI agents on Azure"
unit: "6 of 11"
presenters: []
raw_file: "11-Apply Power Fx in workflows - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/build-agent-workflows-microsoft-foundry/6-apply-power-fx"
ingest_depth: full
---
# Apply Power Fx in workflows
*learn-unit · Build agent-driven workflows using Microsoft Foundry · unit 6 of 11 · SRC-11*

## Source metadata
| Field | Value |
|---|---|
| Source ID | SRC-11 |
| Raw file | 11-Apply Power Fx in workflows - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Build agent-driven workflows using Microsoft Foundry |
| Unit / episode | 6 of 11 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/build-agent-workflows-microsoft-foundry/6-apply-power-fx |
| Teaching content | L214–238 of 268 |
| Content length | ~360 words |
| Capture quality | Complete Learn unit text; a collapsed examples table is not expanded in the capture. |
| Ingest depth | full |

## TL;DR
This unit defines Power Fx as the low-code, Excel-like language that glues workflow logic together by manipulating data, evaluating conditions, and controlling flow (SRC-11 L220). Formulas reference system and local variables, power If/Else conditions, and drive For-each loops over collections (SRC-11 L222–233).

## Key claims
- Power Fx formulas are used where decisions are made, variables are set, or loops are applied in a workflow (SRC-11 L220).
- A Power Fx formula is an expression that evaluates to a value and can reference system or local variables (SRC-11 L222).
- System variables provide workflow or conversation context, while local variables store data created or captured during workflow execution (SRC-11 L223–224).
- If/Else nodes commonly use Power Fx expressions to evaluate conditions and branch execution (SRC-11 L230–231).
- For-each nodes use Power Fx to iterate over collections and apply the same actions to each item (SRC-11 L232–233).

## How it works
Power Fx gives workflow nodes a shared expression language for dynamic behaviour. The source examples include `Upper(Local.Input)`, `Local.Confidence > 0.8`, and `Sum(Local.ItemList, Amount)` (SRC-11 L225–228). Those examples show three different jobs: transforming input, testing a threshold, and aggregating values (SRC-11 L225–228). The source then connects formulas to decisions and loops: conditions can evaluate variables or structured agent outputs, and loops can process lists without duplicating nodes (SRC-11 L230–233).

## Code and API patterns
Power Fx formula examples appear directly in the source: `Upper(Local.Input)`, `Local.Confidence > 0.8`, and `Sum(Local.ItemList, Amount)` (SRC-11 L225–228).

## Key terms
- Power Fx: low-code, Excel-like expression language used in Foundry workflows (SRC-11 L220).
- System variables: contextual variables about the workflow or conversation (SRC-11 L223).
- Local variables: workflow-created or captured data available to subsequent nodes (SRC-11 L224).
- Formula: an expression that evaluates to a value (SRC-11 L222).

## Decision boundaries and exam cues
- **Inference:** If a workflow must branch based on an agent confidence score or structured output, look for Power Fx in an If/Else condition (SRC-11 L227; SRC-11 L230–231).
- **Inference:** If a workflow must process a list of items, Power Fx appears with For-each iteration over a collection (SRC-11 L232–233).
- **Inference:** If the scenario asks for dynamic data-driven behaviour without complex code, Power Fx is the source's named mechanism (SRC-11 L220; SRC-11 L236).

## Assessment items
Not covered by this source.

## Tensions, caveats and currency
- The capture references an expandable Power Fx formula examples table, but the table content is not present beyond the earlier examples (SRC-11 L225–235).
- **Stale-risk:** Power Fx documentation is linked but not included in the corpus capture (SRC-11 L237–238).

## Relation to other sources
- [[src-36-create-workflows-microsoft-foundry]] lists Flow and Data transformation node types that need expressions and variables (SRC-36 L224–231).
- [[src-3-add-agents-workflow]] explains structured agent outputs and variables, which Power Fx can evaluate (SRC-3 L223–224; SRC-11 L230–231).
- [[src-15-build-agent-driven-workflows-microsoft-foundry-episode-12]] demonstrates confidence and category conditions that correspond to Power Fx-style workflow logic (SRC-15 L615–685).

## Connections
- [[power-fx]] — direct entity taught by the source (SRC-11 L220–236).
- [[foundry-workflows]] — Power Fx is used inside workflow nodes and control flow (SRC-11 L220–233).
- [[workflow-patterns]] — Power Fx supports conditions and loops used by workflow patterns (SRC-11 L230–233).
- [[human-in-the-loop-approval]] — a confidence condition can escalate to a human (SRC-11 L231).

## Open questions
- The source does not include syntax beyond three examples and does not describe error handling for formulas (SRC-11 L225–235).

## Sources
- SRC-11 — raw file: [[11-Apply Power Fx in workflows - Training - Microsoft Learn]]
