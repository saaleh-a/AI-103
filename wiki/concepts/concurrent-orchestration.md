---
title: "Concurrent orchestration"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Parallel independent agents receive the same task, then their separate outputs are gathered or combined."
area: orchestration
source_ids: [SRC-180, SRC-231, SRC-241, SRC-242, SRC-245]
objectives: [G10]
objective_gaps: []
tags: [concurrent-orchestration, parallel-agents, aggregation]
aliases: ["ConcurrentBuilder", "parallel orchestration", "fan-out orchestration"]
---

# Concurrent orchestration

## Summary

Concurrent orchestration sends the same task to multiple agents at the same time; each agent works independently, and the workflow gathers or combines their outputs afterward. (SRC-241 L218–221)

## The problem it solves

When a task benefits from diverse independent perspectives or speed, sequential processing wastes time and narrows the solution space. The source names brainstorming, ensemble reasoning, voting or consensus, and speed-sensitive work as fits for concurrent orchestration. (SRC-241 L225–231)

## Mental model

Concurrent orchestration is a fan-out/fan-in team review. The task fans out to agents with different roles, agents do not depend on each other's intermediate results, and the system later fans results back in when a combined answer is needed. (SRC-231 L241–242; SRC-241 L218–222)

The episode describes the pattern as work farmed out in parallel and then merged, with parallelism optimizing for getting things done more quickly. (SRC-180 L91–110)

## What the sources say

SRC-231 defines the pattern as broadcasting the same task to multiple agents at once and collecting their independent results; it is useful for parallel analysis, independent subtasks, or ensemble decision making. (SRC-231 L248)

SRC-241 says the results are usually combined into a final answer, but each agent can also produce a separate result, such as calling tools or updating different data stores independently. (SRC-241 L220–221)

SRC-241 warns against the pattern when agents must build on each other's work, strict sequence or repeatability is required, quotas make parallelism inefficient, shared-data coordination is unreliable, conflicts cannot be resolved, or combining results lowers quality. (SRC-241 L232–236)

## How it works in Azure

In Microsoft Agent Framework, a concurrent workflow runs multiple agent participants in parallel and returns events containing their results. (SRC-241 L240–247)

The source also says agents need to know which other agents are available, and the orchestration can call all registered agents every time or choose agents dynamically based on the task. (SRC-241 L222)

## Code and configuration

The code shape in the corpus is: create an `AzureOpenAIChatClient`, create named role agents with `create_agent`, use `ConcurrentBuilder().participants(...).build()` to build a parallel workflow, call `workflow.run(...)`, then use `get_outputs()` to extract messages that include author names and content. (SRC-241 L238–247)

**Stale-risk:** `ConcurrentBuilder`, `run`, and `get_outputs()` are SDK details captured in the Learn unit. (SRC-241 L237–247)

## Decision boundaries

**Inference:** Concurrent versus sequential is decided by dependence and time: use concurrent when work can run independently and diversity or speed matters; use sequential when each stage must build on the previous output. (SRC-241 L225–236; SRC-245 L218–228)

**Inference:** Concurrent versus group chat is decided by interaction: concurrent agents work independently and do not share results during the run, while group chat agents contribute to one managed shared conversation. (SRC-241 L222; SRC-242 L218–226)


## Failure modes and misconceptions

Do not choose concurrent merely because several agents exist. If agents need shared context in a specific order, if results conflict without a clear resolver, or if quotas make parallel calls inefficient, the source says to avoid concurrent orchestration. (SRC-241 L232–236)

Do not confuse the low-level fan-out edge with the full pattern. A fan-out edge sends one message to multiple executors, while concurrent orchestration is the agent pattern that broadcasts a task and gathers results. (SRC-231 L241–248)

## Solution Engineering transfer

**Inference:** Customer signal: "we want several independent expert opinions quickly" points to concurrent orchestration. "Each expert must see and respond to the others" points away from concurrent and toward group chat. (SRC-241 L225–231; SRC-242 L223–234)

**Inference:** Discovery question: "How will we resolve contradictory outputs?" matters because unresolved conflicts are an explicit reason to avoid this pattern. (SRC-241 L235)

## Connections

- [[multi-agent-orchestration]] — concurrent is one supported Agent Framework pattern. (SRC-231 L248)
- [[sequential-orchestration]] — closest contrast: ordered dependent stages. (SRC-241 L232; SRC-245 L218–228)
- [[group-chat-orchestration]] — contrast: shared conversation rather than independent parallel work. (SRC-241 L222; SRC-242 L218–226)
- [[agent-framework-workflows]] — fan-out/fan-in workflow mechanics are related. (SRC-231 L241–242)
- [[orchestration-patterns-compared]] — side-by-side discrimination set for the five patterns.
- [[src-241-concurrent-orchestration]] — source page for this pattern.
- *Also linked from:* [[overview]]

## Sources

- SRC-180 — [[src-180-orchestrate-multi-agent-solution-microsoft-agent-framework-episode-14]] — episode explanation of fan-out parallelism.
- SRC-231 — [[src-231-understand-agent-orchestration]] — overview definition and workflow edge context.
- SRC-241 — [[src-241-concurrent-orchestration]] — primary Learn unit for use, avoid, and SDK code shape.
- SRC-242 — [[src-242-group-chat-orchestration]] — closest contrast for shared conversation.
- SRC-245 — [[src-245-sequential-orchestration]] — closest contrast for ordered pipelines.

## Open questions

- The corpus does not specify a built-in conflict-resolution strategy beyond warning that unclear conflict resolution is a reason to avoid the pattern. (SRC-241 L235)
