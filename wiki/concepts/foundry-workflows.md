---
title: "Foundry workflows"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Visual/YAML Foundry workflows orchestrate agents, nodes, variables, conditions, loops, human input, versions, and code invocation."
area: orchestration
source_ids: [SRC-3, SRC-11, SRC-36, SRC-105, SRC-118, SRC-151, SRC-171, SRC-231, SRC-238, SRC-243, SRC-245, SRC-247]
objectives: [P02, G03, G05, G11]
objective_gaps: []
tags: []
aliases: ["agent-driven workflows", "workflow nodes", "workflow variables", "Foundry workflow designer", "visual workflows"]
---

# Foundry workflows

## Summary

Foundry workflows are the portal-authored, visual/declarative way to orchestrate AI-driven actions with connected nodes, agents, variables, conditions, loops, chat, human input, runtime safeguards, and YAML/version maintenance (SRC-238 L220–224; SRC-36 L220–236; SRC-151 L220–233).

## The problem it solves

Modern AI solutions often need multiple agents, control flow, and safeguards rather than one model call; Foundry workflows package that orchestration into a canvas where teams can see how agents are invoked, how data moves, and how decisions are made from agent outputs (SRC-118 L218–220).

For customer-support-style automation, the corpus frames workflows as a way to triage many requests efficiently while preserving reliability and control through conditional logic and human escalation (SRC-118 L220–226).

## Mental model

A Foundry workflow is a flowchart that runs: requests enter, connected nodes perform actions, variables carry state, Power Fx formulas evaluate conditions or loop collections, and the runtime follows the configured path until an End node returns a result (SRC-36 L220–236; SRC-11 L220–236).

Agents are reasoning nodes inside the larger process, not the whole process: the workflow can invoke agents, store their output in variables, branch on structured output, ask users for input, or transform data before the next step (SRC-3 L220–224; SRC-36 L224–231).

## What the sources say

SRC-238 defines the concept: workflows in Microsoft Foundry are visual, declarative orchestrations of AI-driven actions; instead of writing code, you define connected steps and let the platform manage execution and state (SRC-238 L220–221). It also emphasizes multi-agent coordination and oversight patterns such as pausing, requesting human input, or escalating decisions (SRC-238 L222–224).

SRC-118 introduces the module outcomes: explain workflow nodes, variables, and agent outputs; use structured outputs and conditional logic for routing; implement For-Each loops; apply human-in-the-loop escalation; and use Power Fx to manipulate data, evaluate conditions, and control flow (SRC-118 L222–226).

SRC-36 describes the designer and node taxonomy: Invoke nodes call agents; Flow nodes include If/Else, Go To, and For Each; Data transformation nodes include Set Variable, Reset Variable, and Parse value; Basic chat collects or sends messages; End concludes the workflow (SRC-36 L220–233).

SRC-3 focuses on agents in workflows: an Invoke agent node can reference an existing project agent or create one, pass context such as user input or variables, receive free-text or structured output, and store that output for later decisions (SRC-3 L220–224).

SRC-151 adds maintainability: Foundry workflows have synchronized visual and YAML representations, immutable versions on each save, notes for maintainers, and best practices such as reviewing unused nodes and consistently handling structured outputs (SRC-151 L220–233).

SRC-247 shows code consumption of a Foundry workflow: after designing and testing in the visual designer, developers use the Azure AI Projects SDK and `AIProjectClient`/OpenAI-compatible conversation execution to invoke a saved workflow by name and stream workflow events (SRC-247 L12–27).

## How it works in Azure

Authoring happens in Microsoft Foundry's visual workflow designer, either from a blank canvas or a predefined pattern; the designer generates the underlying YAML definition and changes in visual or YAML views stay synchronized (SRC-36 L220–221; SRC-151 L220–223; SRC-247 L13).

Runtime execution is conversational: a workflow can be invoked through chat for testing, and application code can create a conversation, pass input, reference the workflow name as an agent reference, stream events, and handle pauses where human-in-the-loop patterns wait for user input (SRC-36 L234–236; SRC-247 L15–27).

Structured outputs are the bridge between agent reasoning and deterministic control flow: the corpus says predictable agent data can be stored in variables, evaluated with conditions, and used to trigger workflow steps (SRC-3 L223–224; SRC-171 L19–22).

## Code and configuration

Configuration is primarily visual/YAML: nodes, variables, output schemas, conditions, loops, notes, and versions are configured in the Foundry portal, with YAML available for advanced configuration, source control, and codebase inclusion (SRC-36 L220–233; SRC-151 L220–223; SRC-247 L13).

Code integration is consumption-oriented: `AIProjectClient` connects to the Foundry project, a conversation supplies state, and an OpenAI-compatible responses call invokes the saved workflow by name; streaming emits events such as `response.completed` and `response.output_item.done` for workflow actions (SRC-247 L15–27).

## Decision boundaries

**Inference:** Choose Foundry workflows when the task is business-process orchestration that benefits from a visual canvas, YAML representation, built-in node types, variable/condition/loop configuration, runtime inspection, version history, and easier collaboration with non-code stakeholders (SRC-36 L220–236; SRC-151 L220–233).

**Inference:** Choose [[agent-framework-workflows]] or [[microsoft-agent-framework]] when the scenario asks for code-first construction of executors, typed data models, builder classes, edge types, event callbacks, provider abstraction, or custom orchestration logic in an SDK (SRC-231 L229–264; SRC-245 L234–242; SRC-243 L235–254).

Closest confusion: both Foundry workflows and Agent Framework workflows orchestrate agents and logic, but the deciding detail is authoring/control surface. Foundry workflows are portal/YAML assets saved in a Foundry project and invoked by name; Agent Framework workflows are SDK workflows assembled in code with executors, edges, builders, runtimes, and events (SRC-247 L12–16; SRC-231 L229–247).

## Failure modes and misconceptions

Do not treat an agent node as the entire workflow: the sources define agents as one Invoke node type alongside Flow, Data transformation, Basic chat, and End nodes (SRC-36 L224–233).

Do not assume free-text agent output is enough for routing: the workflow units emphasize structured outputs, variables, and conditions when agent results drive later steps (SRC-3 L223–224; SRC-171 L19–22).

Do not forget persistence/versioning: workflows are not saved automatically while designing, and every save creates an immutable version that can be reviewed, compared, or rolled back (SRC-36 L221; SRC-151 L224–226).

## Solution Engineering transfer

**Inference:** Customer signal: "We need an AI support process, but some cases must route to different specialists or pause for approval." That maps to Foundry workflow nodes, structured outputs, variables, conditions, loops, and escalation (SRC-118 L220–226; SRC-36 L224–233).

**Inference:** Discovery question: "Who must approve or supply extra context when confidence is low, and what structured fields should the agent output for routing?" This follows from the corpus's emphasis on human input, escalation, variables, and structured output (SRC-118 L222–226; SRC-3 L223–224).

## Connections

- [[microsoft-foundry]] — portal and project surface where workflows are authored and saved.
- [[foundry-agent-service]] — provides the agents that workflows can invoke.
- [[power-fx]] — expression language for conditions, variables, and loops.
- [[workflow-patterns]] — predefined Foundry patterns used before designing a workflow.
- [[agent-framework-workflows]] — code-first workflow counterpart and closest decision boundary.
- [[human-in-the-loop-approval]] — oversight and pauses in workflow execution.
- [[observability-and-tracing]] — workflow events and runtime inspection support debugging.
- [[src-238-understand-workflows]] — foundational source definition.
- [[src-36-create-workflows-microsoft-foundry]] — node taxonomy and designer behaviour.
- [[src-247-workflows-code]] — invoking saved workflows from application code.
- *Also linked from:* [[foundry-agent-types]] · [[overview]]

## Sources

- SRC-3 — [[src-3-add-agents-workflow]] — adding agents and structured output to workflows.
- SRC-11 — [[src-11-apply-power-fx-workflows]] — Power Fx formulas in workflow control flow.
- SRC-36 — [[src-36-create-workflows-microsoft-foundry]] — visual designer, node types, variables, chat, and End nodes.
- SRC-105 — [[src-105-identify-workflow-patterns]] — predefined Foundry workflow patterns.
- SRC-118 — [[src-118-introduction-build-agent-driven-workflows-microsoft-foundry]] — module problem statement and outcomes.
- SRC-151 — [[src-151-maintain-workflows-microsoft-foundry]] — YAML, versioning, notes, and refinement.
- SRC-171 — [[src-171-module-assessment-build-agent-driven-workflows-microsoft-foundry]] — structured output and loop assessment cues.
- SRC-231 — [[src-231-understand-agent-orchestration]] — Agent Framework workflow components used for the decision boundary.
- SRC-238 — [[src-238-understand-workflows]] — conceptual definition of Foundry workflows.
- SRC-243 — [[src-243-handoff-orchestration]] — switch-case control workflow contrast.
- SRC-245 — [[src-245-sequential-orchestration]] — builder-based sequential workflow contrast.
- SRC-247 — [[src-247-workflows-code]] — code invocation and streaming events for saved workflows.

## Open questions

- The corpus does not show the complete YAML schema for Foundry workflows; it only says visual and YAML representations stay synchronized (SRC-151 L220–223).
- The corpus does not state deployment or CI/CD mechanics beyond downloading YAML, including it in a codebase, invoking saved workflows, and using automated testing scenarios (SRC-247 L13; SRC-247 L28–31).
