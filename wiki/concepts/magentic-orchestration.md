---
title: "Magentic orchestration"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Manager-led adaptive orchestration for complex open-ended tasks with planning, delegation, and a task ledger."
area: orchestration
source_ids: [SRC-180, SRC-231, SRC-242, SRC-244, SRC-245]
objectives: [G10]
objective_gaps: []
tags: [magentic-orchestration, planning, manager-agent]
aliases: ["Magentic manager", "MagenticBuilder", "Magentic-One", "magnetic orchestration"]
---

# Magentic orchestration

## Summary

Magentic orchestration is a flexible, manager-led multi-agent pattern for complex open-ended tasks where the route cannot be fully predetermined. (SRC-244 L218–221)

## The problem it solves

Some problems require planning, delegation, tool use, and adaptation as new information emerges. The source says Magentic is suited to complex or open-ended problems, multiple specialized agents, documented plans for human review, agents that can interact with external systems, and dynamically built execution plans. (SRC-244 L224–230)

## Mental model

Magentic orchestration is a project manager for agents. The Magentic manager maintains shared context, tracks progress, chooses which specialist acts next, and builds a task ledger of goals, subgoals, and execution plans. (SRC-244 L218–221)

The episode frames it as “group chat, but one generation past”: an orchestrator with higher sophistication handles a complicated issue by deciding which agent to send next based on what earlier agents return to the ledger. (SRC-180 L241–323)

## What the sources say

SRC-231 defines Magentic as a manager-driven approach that plans, delegates, and adapts across specialized agents for complex open-ended problems where the solution path evolves. (SRC-231 L254)

SRC-244 says the manager decides the next agent based on evolving context, task progress, and agent capabilities; it also maintains shared context, tracks progress, and adapts the workflow in real time. (SRC-244 L218–220)

SRC-244 says to avoid the pattern when the solution path is fixed or deterministic, no ledger or plan is needed, the task is simple enough for a lighter pattern, speed is the priority, or stalls and loops are expected. (SRC-244 L231–236)

## How it works in Azure

In Microsoft Agent Framework, Magentic orchestration uses specialized `ChatAgent` participants, an async callback for orchestration events, a `MagenticBuilder`, streaming, a standard manager, round/stall/reset limits, and `run_stream` execution. (SRC-244 L237–244)

## Code and configuration

The code shape in the corpus is: define specialized agents such as `ChatAgent`, create an async event callback for orchestrator messages, streaming updates, agent messages, and final results, build with `MagenticBuilder`, configure the standard manager with max round count, stall count, and reset count, call `run_stream`, then collect `WorkflowOutputEvent` final results. (SRC-244 L238–244)

**Stale-risk:** `MagenticBuilder`, standard-manager parameters, streaming event names, and `WorkflowOutputEvent` are capture-time SDK details. (SRC-244 L237–244)

## Decision boundaries

**Inference:** Magentic versus group chat is decided by planning burden. Group chat is a managed conversation; Magentic is manager-led planning and adaptive delegation with a ledger for evolving open-ended work. (SRC-242 L218–226; SRC-244 L218–230)

**Inference:** Magentic versus sequential is decided by whether the path is fixed. Sequential is a predetermined pipeline; Magentic is for cases where the solution path evolves and the plan is built during execution. (SRC-245 L220–221; SRC-244 L218–230)


## Failure modes and misconceptions

Do not choose Magentic simply because the task is multi-agent. The source explicitly says to avoid it for fixed deterministic paths, simple tasks, or when a lighter pattern is enough. (SRC-244 L231–233)

Magentic trades speed for planning. If fast execution is the priority, the source says to avoid this method because it emphasizes planning over fast execution. (SRC-244 L234)

Loops and stalls are first-class risks: the source mentions stall limits in implementation and says frequent stalls or loops without clear resolution are an avoid condition. (SRC-244 L235, L240)

## Solution Engineering transfer

**Inference:** Customer signal: "we need the system to figure out the plan, decide which tools or specialists to use, and document its approach" points to Magentic. "We just need a transparent debate or maker-checker review" points to group chat. (SRC-244 L220–230; SRC-242 L223–244)

**Inference:** Discovery question: "Is the value in adaptive planning, or can we define the route upfront?" decides between Magentic and lighter orchestration patterns. (SRC-244 L224–236; SRC-245 L220–221)

## Connections

- [[multi-agent-orchestration]] — Magentic is one supported Agent Framework pattern. (SRC-231 L254)
- [[group-chat-orchestration]] — closest neighbour: managed conversation without the same ledger/planning emphasis. (SRC-242 L218–226; SRC-244 L218–221)
- [[sequential-orchestration]] — contrast: fixed path instead of evolving plan. (SRC-244 L231; SRC-245 L220–221)
- [[agent-framework-workflows]] — implementation streams workflow events and final output. (SRC-244 L239–244)
- [[orchestration-patterns-compared]] — side-by-side discrimination set for the five patterns.
- [[src-244-magentic-orchestration]] — source page for this pattern.
- *Also linked from:* [[a2a-agent-implementation]] · [[overview]]

## Sources

- SRC-180 — [[src-180-orchestrate-multi-agent-solution-microsoft-agent-framework-episode-14]] — episode explanation of Magentic as more sophisticated orchestrator-led work.
- SRC-231 — [[src-231-understand-agent-orchestration]] — overview definition of Magentic orchestration.
- SRC-242 — [[src-242-group-chat-orchestration]] — closest contrast for managed shared conversation.
- SRC-244 — [[src-244-magentic-orchestration]] — primary Learn unit for use, avoid, manager, ledger, and SDK shape.
- SRC-245 — [[src-245-sequential-orchestration]] — closest contrast for fixed path.

## Open questions

- The corpus does not define how the Magentic task ledger is stored, serialized, or exposed after execution. (SRC-244 L220–221)
