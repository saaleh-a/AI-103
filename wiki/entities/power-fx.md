---
title: "Power Fx"
type: entity
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Power Fx is the low-code Excel-like formula language used in Foundry workflows for variables, conditions, transformations, and loops."
area: orchestration
source_ids: [SRC-11, SRC-36, SRC-118, SRC-219, SRC-231]
objectives: [G03, G11]
objective_gaps: []
tags: ["tool"]
aliases: ["Power Fx formulas", "Power Fx expressions", "low-code formula language"]
---

# Power Fx

## Summary

Power Fx is the low-code, Excel-like formula language used as the glue of Foundry workflows: it manipulates data, evaluates conditions, controls execution flow, sets or reads variables, and drives For-Each loops (SRC-11 L220–236; SRC-219 L221).

## What it is

In the AI-103 workflow corpus, Power Fx is not presented as a general Power Platform topic; it is presented as the expression language inside Microsoft Foundry workflows, used wherever decisions are made, variables are set, or loops are applied (SRC-11 L220–221).

## What the sources say

SRC-11 defines Power Fx as a low-code, Excel-like language that acts as workflow glue, letting workflows react dynamically to user input, agent outputs, or stored data without complex code (SRC-11 L220).

A Power Fx formula is an expression that evaluates to a value and can reference system and local variables (SRC-11 L222). System variables provide context such as current activity, last message, or user info, while local variables store data captured or created during workflow execution (SRC-11 L223–225).

The source's examples include `Upper(Local.Input)`, `Local.Confidence > 0.8`, and `Sum(Local.ItemList, Amount)`, showing transformation, threshold checking, and aggregation over a list/records (SRC-11 L226–229).

Power Fx expressions are commonly used in If/Else nodes for branching, including decisions over confidence scores, structured agent outputs, and other workflow data (SRC-11 L230–232).

For-Each nodes use Power Fx to iterate over collections so a workflow can apply the same actions to many inputs, such as multiple support tickets, without duplicating nodes or logic (SRC-11 L233–235).

SRC-118 names Power Fx as a module outcome for manipulating data, evaluating conditions, and controlling flow within workflows (SRC-118 L226). SRC-219 summarizes it as the low-code glue language that enables workflows to transform data, evaluate conditions, and iterate over multiple items using loops (SRC-219 L221).

## Capabilities and components

Power Fx formulas can reference system variables for runtime/conversation context and local variables for captured or computed workflow state (SRC-11 L222–225).

Power Fx supports data transformation, conditional branching, and loop control in workflow nodes, especially If/Else and For-Each nodes (SRC-11 L230–235).

## How to use it

Use Power Fx when configuring Foundry workflow nodes that need an expression: set or transform variables, evaluate an If/Else condition, check structured agent output, compare a confidence score, or iterate over a collection in a For-Each node (SRC-11 L220–236).

**Illustrative:** A confidence-gated triage workflow could evaluate `Local.Confidence > 0.8`; if true, it continues automatically, and if false, it routes to a human approval path. This example is directly patterned on the source's confidence-threshold example and escalation explanation (SRC-11 L227–232).

## Decision boundaries

Choose Power Fx when the logic is expression-level workflow control: variable references, transformations, conditions, or collection iteration inside Foundry workflows (SRC-11 L220–236).

**Inference:** Do not use Power Fx as a replacement for code-first custom orchestration in Microsoft Agent Framework. Agent Framework workflows use SDK constructs such as executors, edges, builders, callbacks, and events; Power Fx is described only as Foundry workflow expression glue (SRC-11 L220–236; SRC-231 L229–247).

**Inference:** Do not use an agent for deterministic formula work just because the workflow is AI-driven. If the decision can be expressed as a direct condition over variables or structured outputs, the corpus places that work in Power Fx/If-Else rather than an agent prompt (SRC-11 L230–232; SRC-36 L224–231).

## Naming and currency

The corpus consistently uses the name Power Fx for this workflow expression language and points readers to Power Fx documentation for more information (SRC-11 L238). It does not describe Power Fx licensing, full syntax, or Power Platform feature parity in this AI-103 slice (SRC-11 L220–238).

## Appearances in the corpus

Power Fx appears in the Foundry workflow module introduction as a learning outcome, in its dedicated unit as formulas for variables/conditions/loops, and in the module summary as the low-code glue language for data transformation, conditions, and iteration (SRC-118 L226; SRC-11 L220–236; SRC-219 L221).

## Connections

- [[foundry-workflows]] — Power Fx is used inside Foundry workflow nodes.
- [[workflow-patterns]] — conditions and loops help implement workflow patterns.
- [[human-in-the-loop-approval]] — confidence conditions can route to human escalation.
- [[agent-framework-workflows]] — code-first contrast where orchestration is in SDK code, not Power Fx.
- [[src-11-apply-power-fx-workflows]] — dedicated Power Fx workflow source.
- *Also linked from:* [[overview]]

## Sources

- SRC-11 — [[src-11-apply-power-fx-workflows]] — Power Fx definition, variables, conditions, loops, and examples.
- SRC-36 — [[src-36-create-workflows-microsoft-foundry]] — Foundry node types that use expressions and variables.
- SRC-118 — [[src-118-introduction-build-agent-driven-workflows-microsoft-foundry]] — module outcome for Power Fx in workflows.
- SRC-219 — [[src-219-summary-build-agent-driven-workflows-microsoft-foundry]] — summary of Power Fx as low-code workflow glue.
- SRC-231 — [[src-231-understand-agent-orchestration]] — code-first Agent Framework workflow contrast.
