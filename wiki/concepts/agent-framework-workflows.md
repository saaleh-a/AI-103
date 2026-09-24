---
title: "Agent Framework workflows"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Microsoft Agent Framework workflows are code-defined sequences of executors and edges with events, checkpointing, and orchestration builders."
area: orchestration
source_ids: [SRC-36, SRC-151, SRC-231, SRC-241, SRC-242, SRC-243, SRC-244, SRC-245, SRC-247]
objectives: [G03, G10, G11, G16]
objective_gaps: []
tags: []
aliases: ["executors", "edges", "workflow events", "workflows in code", "control workflows", "WorkflowBuilder"]
---

# Agent Framework workflows

## Summary

Agent Framework workflows are code-first structured sequences of executors and edges that coordinate agents and custom logic, support checkpointing, emit events for observability, and underpin orchestration patterns such as sequential, concurrent, handoff, group chat, and Magentic (SRC-231 L229–264).

## The problem it solves

Single-agent systems are limited by one prompt or instruction set; multi-agent workflows let developers assign specialised responsibilities, combine outputs, coordinate ordered steps, and dynamically route control based on context or rules (SRC-231 L220–228).

## Mental model

An Agent Framework workflow is a programmatic graph. Executors are workers, edges are routing rules, events are the runtime trace, and builder/runtime APIs start the graph and return results asynchronously (SRC-231 L229–263).

## What the sources say

SRC-231 defines workflows in Microsoft Agent Framework as structured sequences of steps used to complete a task; they can include one or more AI agents and other components, give developers control over execution, and support checkpointing to save and resume workflow state (SRC-231 L229–232).

Executors receive input messages, perform actions, and produce outputs; they can represent AI agents or custom logic components (SRC-231 L233–237).

Edges define message flow, logic, and order. The framework supports direct edges, conditional edges, switch-case edges, fan-out edges, and fan-in edges (SRC-231 L238–244).

Events improve observability and debugging by helping developers monitor progress, track errors, and analyze system performance (SRC-231 L245–247).

The framework also provides orchestration patterns directly in the SDK: concurrent, sequential, handoff, group chat, and Magentic, all under a unified interface for building and running orchestrations (SRC-231 L249–264).

## How it works in Azure

Although the workflow graph is authored in code, the agents and chat clients can still use Azure/Foundry providers. The pattern sources repeatedly start with a chat client such as `AzureOpenAIChatClient`, create agent instances with instructions and roles, build a workflow with a builder class, run it, and process workflow events or outputs (SRC-245 L234–242; SRC-241 L237–247; SRC-242 L244–250).

## Code and configuration

Sequential orchestration uses `SequentialBuilder`, participants, `build()`, `run_stream`, async iteration over workflow events, and `WorkflowOutputEvent` to collect results where each agent's output becomes the next agent's input (SRC-245 L234–242).

Concurrent orchestration uses `ConcurrentBuilder`, participants, `build()`, `run`, and `get_outputs()` so multiple agents work in parallel and their conversations/results are combined (SRC-241 L237–247).

Group chat orchestration uses `GroupChatBuilder`, participants, `run`, `get_outputs()`, and aggregated messages with author names; the source also says a central chat manager controls who responds next and when to ask a human (SRC-242 L218–250).

Handoff/control workflows use `WorkflowBuilder`, regular edges, switch-case edge groups, condition checkers, `Case` objects, and a default fallback to route classification results to specialised executors (SRC-243 L235–254).

Magentic orchestration uses `MagenticBuilder`, specialized `ChatAgent` instances, an event callback, a standard manager with max round/stall/reset parameters, `run_stream`, and workflow-event processing to plan, delegate, and adapt dynamically (SRC-244 L235–244).

## Decision boundaries

Choose Agent Framework workflows when orchestration needs code-level control: typed models, executor functions, custom logic, direct/conditional/switch/fan-out/fan-in edges, event callbacks, checkpointing, async event processing, or swapping orchestration builders without rewriting agent logic (SRC-231 L229–264; SRC-243 L235–254).

Choose [[foundry-workflows]] when the scenario is a Foundry portal/YAML workflow saved in a project, designed visually, configured with nodes/variables/Power Fx, versioned by Foundry, and invoked by name from application code (SRC-36 L220–236; SRC-151 L220–226; SRC-247 L12–16).

Closest confusion: Foundry workflows and Agent Framework workflows both orchestrate agents, but the former is a project asset produced by the Foundry visual designer and YAML; the latter is an SDK graph assembled with executors, edges, builders, runtime, and event handling (SRC-247 L12–16; SRC-231 L229–247).

Pattern boundary inside Agent Framework: choose sequential when each agent must build on the previous output, concurrent when independent specialised agents can work on the same task in parallel, handoff when the best specialist emerges during processing, group chat when the solution emerges through managed conversation, and Magentic when a manager must dynamically plan and delegate for open-ended tasks (SRC-245 L218–246; SRC-241 L218–247; SRC-243 L218–254; SRC-242 L218–250; SRC-244 L218–244).

## Failure modes and misconceptions

Do not model dynamic handoff as a fixed sequential pipeline: handoff is for cases where the number or order of agents is not determined in advance, while sequential is for fixed ordered stages (SRC-243 L218–231; SRC-245 L218–233).

Do not use concurrent orchestration when agents must build on shared context in a specific order, quotas make parallel execution inefficient, or conflicts are hard to resolve (SRC-241 L230–236).

Do not use Magentic for simple deterministic tasks where the solution path is fixed and speed matters more than planning; the source says Magentic emphasizes planning, task ledgers, and dynamic collaboration (SRC-244 L218–234).

## Solution Engineering transfer

**Inference:** Customer signal for Agent Framework workflows: "We need to encode orchestration as part of our application, test custom routing logic, inspect workflow events, and evolve specialised agents in code." That maps to the framework's executors, edges, events, checkpointing, and SDK builders (SRC-231 L229–264).

## Connections

- [[microsoft-agent-framework]] — SDK that supplies these workflow abstractions.
- [[multi-agent-orchestration]] — broader reason for coordinating specialised agents.
- [[sequential-orchestration]] — fixed ordered Agent Framework pattern.
- [[concurrent-orchestration]] — parallel Agent Framework pattern.
- [[handoff-orchestration]] — dynamic specialist routing pattern.
- [[group-chat-orchestration]] — managed conversation pattern.
- [[magentic-orchestration]] — manager-led open-ended planning pattern.
- [[foundry-workflows]] — closest portal/YAML boundary.
- [[src-231-understand-agent-orchestration]] — core workflow components and pattern overview.
- *Also linked from:* [[a2a-agent-implementation]] · [[agent2agent-protocol]] · [[observability-and-tracing]] · [[overview]] · [[power-fx]] · [[workflow-patterns]]

## Sources

- SRC-36 — [[src-36-create-workflows-microsoft-foundry]] — Foundry visual workflow contrast.
- SRC-151 — [[src-151-maintain-workflows-microsoft-foundry]] — Foundry YAML/versioning contrast.
- SRC-231 — [[src-231-understand-agent-orchestration]] — executors, edges, events, checkpointing, and pattern list.
- SRC-241 — [[src-241-concurrent-orchestration]] — concurrent workflow builder and use/avoid guidance.
- SRC-242 — [[src-242-group-chat-orchestration]] — group chat builder, chat manager, and use/avoid guidance.
- SRC-243 — [[src-243-handoff-orchestration]] — control workflow, switch-case routing, and handoff guidance.
- SRC-244 — [[src-244-magentic-orchestration]] — Magentic manager, event callback, and planning behaviour.
- SRC-245 — [[src-245-sequential-orchestration]] — sequential builder and ordered pipeline guidance.
- SRC-247 — [[src-247-workflows-code]] — Foundry project workflow invocation contrast.

## Open questions

- The corpus names checkpointing for Agent Framework workflows but does not show checkpoint API calls or storage configuration (SRC-231 L229–232).
