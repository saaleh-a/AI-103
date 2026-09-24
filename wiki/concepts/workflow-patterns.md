---
title: "Workflow patterns"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Foundry workflow patterns are predefined shapes: sequential, human-in-the-loop, and group chat, chosen by data flow and oversight needs."
area: orchestration
source_ids: [SRC-36, SRC-105, SRC-118, SRC-171, SRC-219, SRC-231, SRC-247]
objectives: [G03, G10, G11]
objective_gaps: []
tags: []
aliases: ["sequential workflow", "group chat workflow", "human-in-the-loop workflow", "workflow templates"]
---

# Workflow patterns

## Summary

Foundry workflow patterns are starting structures for agent-driven workflows: sequential pipelines, human-in-the-loop pauses, and group chat collaboration. The deciding details are whether the process is fixed, requires explicit human input, or needs dynamic multi-agent collaboration (SRC-105 L220–224).

## The problem it solves

Workflow structure matters as much as agent prompts: different problems require different orchestration approaches depending on how decisions are made, how data flows, and whether human input is required (SRC-105 L220).

## Mental model

A pattern is the workflow's control-flow skeleton before the nodes are filled in. Sequential is a conveyor belt, human-in-the-loop is a conveyor belt with a stop for a person, and group chat is a collaborative room where control can shift between agents based on context, rules, or intermediate results (SRC-105 L221–224).

## What the sources say

SRC-105 is the central pattern source. It says Microsoft Foundry provides predefined workflow patterns to model agent interactions clearly and consistently, then defines sequential, human-in-the-loop, and group chat workflows (SRC-105 L220–224).

Sequential workflow follows a fixed step-by-step path in which each node executes in order and passes output to the next node; the source names validation, enrichment, and final response generation as examples, and calls it predictable and easy to reason about (SRC-105 L221).

Human-in-the-loop workflow pauses for user input or approval before continuing; the workflow asks a question, waits for a response, and resumes based on that input, which fits approvals, confirmations, or missing context (SRC-105 L222).

Group chat workflow enables dynamic orchestration across multiple agents; instead of a fixed path, control can shift between agents based on context, rules, or intermediate results, fitting complex requests such as customer support or multi-domain question answering (SRC-105 L223).

SRC-118 names related mechanics that patterns use in practice: structured outputs and conditional logic for routing, For-Each loops for multiple inputs, and human-in-the-loop escalation for uncertainty or low confidence (SRC-118 L222–226).

SRC-219 summarizes the same mechanics: workflows combine agents, logic, data transformation, and chat; structured outputs are captured in variables; decisions include routing, escalation, or continuation; Power Fx supports transforms, conditions, and loops (SRC-219 L220–223).

## How it works in Azure

Pattern choice happens before detailed workflow design: Foundry lets you start from a blank canvas or select a predefined pattern such as sequential, then add and configure nodes (SRC-36 L220–221). Pattern execution depends on the same Foundry workflow primitives: agent Invoke nodes, Flow nodes, variables, structured outputs, Basic chat, and End nodes (SRC-36 L224–233).

## Code and configuration

Pattern configuration is visual/declarative in Foundry workflows. The corpus does not provide separate SDK classes for Foundry's predefined patterns; instead it teaches selecting a pattern in the designer and then configuring nodes, variables, conditions, loops, and human input (SRC-105 L220–224; SRC-36 L220–233).

**Inference:** In application code, a workflow pattern is not invoked differently from any other saved Foundry workflow: code references the workflow by name and passes input through the conversation/responses flow (SRC-247 L12–27).

## Decision boundaries

Choose sequential when the work is a known pipeline with clear stages and predictable handoff from one node to the next (SRC-105 L221).

Choose human-in-the-loop when the process must pause for approval, confirmation, missing context, uncertainty, or low-confidence escalation (SRC-105 L222; SRC-118 L224–225).

Choose group chat when multiple specialised agents must collaborate and adapt to changing inputs rather than follow a fixed path (SRC-105 L223).

**Inference:** If the exam wording says "multiple tickets without duplicating nodes," the pattern mechanics point to For-Each looping rather than creating repeated branches, because the module explicitly tests For-Each for multiple tickets (SRC-171 L14–17; SRC-118 L224).

Closest confusion: Foundry workflow patterns are not the same taxonomy as Microsoft Agent Framework orchestration patterns. Foundry's pattern unit names sequential, human-in-the-loop, and group chat; Agent Framework's orchestration overview names concurrent, sequential, handoff, group chat, and Magentic as SDK patterns (SRC-105 L221–224; SRC-231 L249–255).

## Failure modes and misconceptions

Do not choose group chat merely because multiple agents exist: the source says group chat is for dynamic collaboration where control can shift, while sequential workflows can also contain multiple nodes/agents in a fixed order (SRC-105 L221–223).

Do not choose human-in-the-loop only for safety review: the source also names approvals, confirmations, and missing context as reasons to pause (SRC-105 L222).

Do not ignore structured outputs: the module assessment says structured outputs provide predictable data that can be stored in variables, evaluated with conditions, and trigger workflow steps (SRC-171 L19–22).

## Solution Engineering transfer

**Inference:** Customer signal for sequential: "Every case must go through validate, enrich, respond." Customer signal for human-in-the-loop: "Some cases need approval or missing context." Customer signal for group chat: "Several specialists need to collaborate and adapt as the answer emerges." These map directly to the pattern descriptions (SRC-105 L221–224).

## Connections

- [[foundry-workflows]] — patterns are selected and implemented inside Foundry workflows.
- [[power-fx]] — formulas implement the branching and looping that make patterns adaptive.
- [[human-in-the-loop-approval]] — the oversight pattern in Foundry workflows.
- [[agent-framework-workflows]] — separate code-first workflow taxonomy.
- [[multi-agent-orchestration]] — broader multi-agent coordination concept.
- [[orchestration-patterns-compared]] — synthesis page for comparing pattern families.
- [[src-105-identify-workflow-patterns]] — main source for Foundry pattern definitions.
- *Also linked from:* [[overview]]

## Sources

- SRC-36 — [[src-36-create-workflows-microsoft-foundry]] — selecting a pattern in the workflow designer.
- SRC-105 — [[src-105-identify-workflow-patterns]] — predefined Foundry workflow patterns and choosing among them.
- SRC-118 — [[src-118-introduction-build-agent-driven-workflows-microsoft-foundry]] — routing, loops, and human escalation outcomes.
- SRC-171 — [[src-171-module-assessment-build-agent-driven-workflows-microsoft-foundry]] — assessment cues for loops and structured outputs.
- SRC-219 — [[src-219-summary-build-agent-driven-workflows-microsoft-foundry]] — summary of workflow composition and decisions.
- SRC-231 — [[src-231-understand-agent-orchestration]] — Agent Framework orchestration taxonomy for contrast.
- SRC-247 — [[src-247-workflows-code]] — saved workflow invocation from code.

## Open questions

- The corpus does not list every predefined pattern available in the live Foundry UI; it only teaches sequential, human-in-the-loop, and group chat in this unit (SRC-105 L221–224).
