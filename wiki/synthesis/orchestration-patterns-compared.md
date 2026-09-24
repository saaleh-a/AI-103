---
title: "Orchestration patterns compared"
type: synthesis
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Decision table for sequential, concurrent, handoff, group chat, Magentic, and Foundry vs Agent Framework workflow surfaces."
area: orchestration
source_ids: [SRC-36, SRC-118, SRC-151, SRC-180, SRC-231, SRC-241, SRC-242, SRC-243, SRC-244, SRC-245, SRC-247]
objectives: [G03, G10, G11, G16]
objective_gaps: []
tags: []
aliases: []
---

# Orchestration patterns compared

## Summary

**Synthesis:** The corpus separates orchestration into two decisions: first choose the authoring surface, then choose the runtime pattern. Foundry workflows are visual/YAML project assets with nodes, variables, Power Fx, versions, and code invocation by workflow name; Microsoft Agent Framework workflows are code-defined graphs of executors, edges, events, checkpointing, and pattern builders. (SRC-36 L220–236; SRC-151 L220–233; SRC-247 L12–27; SRC-231 L229–264)

**Synthesis:** Inside Agent Framework, the five pattern cues are dependence, independence, dynamic routing, managed shared conversation, and adaptive planning: sequential passes output along a fixed chain, concurrent fans the same task out in parallel, handoff transfers one-agent-at-a-time control, group chat runs a manager-led shared conversation, and Magentic uses a manager to plan, delegate, track a task ledger, and adapt. (SRC-245 L218–233; SRC-241 L218–236; SRC-243 L218–254; SRC-242 L218–261; SRC-244 L218–244)

## Scope and question

**Synthesis:** This page answers two exam and practice questions: whether a scenario asks for a Foundry portal/YAML workflow or an Agent Framework code workflow, and which Agent Framework orchestration pattern fits the collaboration shape. (SRC-118 L222–226; SRC-36 L220–236; SRC-231 L229–264)

## Synthesis

### Workflow surface decision

| **Synthesis:** Decision question | Foundry workflows | Agent Framework workflows |
|---|---|---|
| Primary authoring surface | Visual workflow designer with synchronized YAML in Microsoft Foundry. (SRC-36 L220–221; SRC-151 L220–223) | Code-defined workflow graph with executors, edges, events, builders, runtimes, and async results. (SRC-231 L229–264) |
| Building blocks | Invoke agent, Flow, Data transformation, Basic chat, and End nodes; variables, conditions, loops, and Power Fx. (SRC-36 L224–233; SRC-118 L222–226) | Executors, direct/conditional/switch/fan-out/fan-in edges, events, checkpointing, and pattern builders. (SRC-231 L229–264) |
| Persistence and maintenance | Saves create immutable versions; notes and YAML support maintainability. (SRC-151 L220–233) | Workflow state can be checkpointed, but the corpus does not show checkpoint API details. (SRC-231 L229–232) |
| Code interaction | Application code invokes a saved workflow by name and streams workflow events. (SRC-247 L12–27) | Application code constructs and runs the workflow itself. (SRC-231 L254–264; SRC-245 L234–242) |
| **Inference:** exam cue | Visual designer, YAML, nodes, variables, Power Fx, saved workflow name. (SRC-36 L220–236; SRC-247 L12–16) | `SequentialBuilder`, `ConcurrentBuilder`, `GroupChatBuilder`, `WorkflowBuilder`, `MagenticBuilder`, executors, edges, events. (SRC-241 L237–247; SRC-242 L245–261; SRC-243 L235–254; SRC-244 L237–244; SRC-245 L234–242) |

### Pattern decision table

| **Synthesis:** Pattern | Use when | Avoid when | Exam cue | Wiki link |
|---|---|---|---|---|
| Sequential | Ordered dependent stages where each output becomes the next input. (SRC-245 L218–227) | Stages can run independently, one agent can do the task, or dynamic routing/iteration is required. (SRC-245 L228–233) | Fixed pipeline, progressive refinement, draft-review-polish. (SRC-231 L249; SRC-245 L222–227) | [[sequential-orchestration]] |
| Concurrent | Independent agents can work on the same task in parallel and results can be gathered. (SRC-241 L218–231) | Agents must build on each other, strict sequence is required, quota/conflict/merge issues dominate. (SRC-241 L232–236) | Parallel analysis, ensemble, voting, speed-sensitive independent work. (SRC-231 L248; SRC-241 L225–231) | [[concurrent-orchestration]] |
| Handoff | The right specialist or order emerges during processing, with one active agent at a time. (SRC-243 L218–228) | The order is fixed, operations must run simultaneously, or handoff loops are hard to prevent. (SRC-243 L229–234) | Dynamic transfer based on context/rules; expert routing; escalation. (SRC-231 L250; SRC-243 L218–228) | [[handoff-orchestration]] |
| Group chat | Agents and optionally a human collaborate in one shared conversation managed by a chat manager. (SRC-242 L218–234) | Simple delegation or a linear pipeline is enough, speed matters more than discussion, or completion cannot be determined. (SRC-242 L235–240) | Brainstorming, debate, consensus, maker-checker, human-in-the-loop chat manager. (SRC-231 L251; SRC-242 L223–261) | [[group-chat-orchestration]] |
| Magentic | Complex open-ended work needs a manager that plans, delegates, adapts, and tracks a task ledger. (SRC-244 L218–230) | The route is fixed/deterministic, the task is simple, speed is the priority, or stalls/loops are likely. (SRC-244 L231–236) | Manager-led planning, evolving path, task ledger, adaptive delegation. (SRC-231 L252; SRC-244 L218–244) | [[magentic-orchestration]] |

### Near-miss scenario contrasts

1. **Inference:** If a customer says, *summarize, then classify, then produce an action*, choose sequential because each step depends on the previous output; if the same customer says, *get three independent specialist opinions quickly*, choose concurrent because independence and speed are decisive. (SRC-245 L218–227; SRC-241 L225–231)

2. **Inference:** If a support case starts general and then routes to billing after the user's details emerge, choose handoff because the specialist is not known upfront; if the route is always triage → diagnosis → response, choose sequential because the order is predetermined. (SRC-243 L221–228; SRC-245 L218–220)

3. **Inference:** If reviewers must see and react to one another in a shared thread, choose group chat; if each reviewer should work blind and a later step merges answers, choose concurrent. (SRC-242 L218–226; SRC-241 L218–222)

4. **Inference:** If the task needs an agent manager to form a plan and adapt as tools return results, choose Magentic; if it only needs a managed debate or maker-checker conversation, choose group chat. (SRC-244 L218–230; SRC-242 L223–234)

## Evidence map

| **Synthesis:** Claim | Sources |
|---|---|
| Foundry workflows are visual/declarative, platform-managed, and support connected nodes/state. | SRC-36 L220–236; SRC-118 L222–226 |
| Foundry workflow YAML, versioning, notes, and maintainability are platform features. | SRC-151 L220–233 |
| Saved Foundry workflows can be invoked by application code by name and stream events. | SRC-247 L12–27 |
| Agent Framework workflows use executors, edges, events, checkpointing, and shared pattern interfaces. | SRC-231 L229–264 |
| Sequential, concurrent, handoff, group chat, and Magentic have distinct use/avoid criteria. | SRC-241 L218–236; SRC-242 L218–261; SRC-243 L218–254; SRC-244 L218–244; SRC-245 L218–242 |
| Episode narration supports intuitive pattern contrasts for sequential, concurrent, handoff, group chat, and Magentic. | SRC-180 L64–323 |

## Tensions

- **Stale-risk:** Builder and event class names such as `SequentialBuilder`, `ConcurrentBuilder`, `GroupChatBuilder`, `WorkflowBuilder`, `MagenticBuilder`, and `WorkflowOutputEvent` are SDK details captured in the Learn units; verify current SDK syntax before implementation. (SRC-241 L237–247; SRC-242 L245–261; SRC-243 L239–254; SRC-244 L237–244; SRC-245 L234–242)
- **Synthesis:** The corpus says Agent Framework workflows support checkpointing but does not teach checkpoint storage or API calls, so checkpointing should be recognized as a capability but not taught as an implementation recipe from this corpus. (SRC-231 L229–232)
- **Synthesis:** Foundry workflow CI/CD mechanics are thin: the corpus covers YAML, versions, code invocation, and automated testing scenarios, but not a full deployment pipeline. (SRC-151 L220–233; SRC-247 L12–31)

## Implications for the exam and for practice

**Inference:** For exam reasoning, identify the one detail that changes the answer: fixed order, independent parallelism, dynamic expert transfer, shared conversation, or adaptive manager planning. (SRC-231 L248–252; SRC-241 L225–236; SRC-242 L223–240; SRC-243 L224–234; SRC-244 L224–236; SRC-245 L222–233)

**Inference:** For practice, choose Foundry workflows when collaboration, visual inspection, versions, nodes, variables, Power Fx, and portal governance matter; choose Agent Framework workflows when orchestration is application code with custom executors, typed routing, event handling, and SDK-level tests. (SRC-36 L220–236; SRC-151 L220–233; SRC-231 L229–264)

## Open questions

- The corpus does not settle a production rule for when to migrate a mature Foundry visual workflow into code or keep it as a Foundry workflow asset. (SRC-36 L220–236; SRC-231 L229–264)
- The corpus does not provide detailed checkpoint storage, retry, compensation, or CI/CD implementation patterns for Agent Framework workflows. (SRC-231 L229–264)

## Sources

- SRC-36 — [[src-36-create-workflows-microsoft-foundry]] — Foundry visual workflow designer and node types.
- SRC-118 — [[src-118-introduction-build-agent-driven-workflows-microsoft-foundry]] — Foundry workflow module outcomes.
- SRC-151 — [[src-151-maintain-workflows-microsoft-foundry]] — YAML, versions, notes, and workflow maintenance.
- SRC-180 — [[src-180-orchestrate-multi-agent-solution-microsoft-agent-framework-episode-14]] — episode intuition for orchestration patterns.
- SRC-231 — [[src-231-understand-agent-orchestration]] — Agent Framework workflow components and pattern list.
- SRC-241 — [[src-241-concurrent-orchestration]] — concurrent use, avoid, and SDK shape.
- SRC-242 — [[src-242-group-chat-orchestration]] — group chat use, avoid, and manager shape.
- SRC-243 — [[src-243-handoff-orchestration]] — handoff use, avoid, and control workflow shape.
- SRC-244 — [[src-244-magentic-orchestration]] — Magentic use, avoid, manager, and ledger.
- SRC-245 — [[src-245-sequential-orchestration]] — sequential use, avoid, and SDK shape.
- SRC-247 — [[src-247-workflows-code]] — invoking saved Foundry workflows from code.
