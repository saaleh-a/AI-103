---
title: "Sequential orchestration"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Fixed-order agent pipeline where each agent's output becomes the next agent's input."
area: orchestration
source_ids: [SRC-180, SRC-231, SRC-241, SRC-243, SRC-245]
objectives: [G10]
objective_gaps: []
tags: [sequential-orchestration, agent-framework, pipelines]
aliases: ["SequentialBuilder", "agent pipeline"]
---

# Sequential orchestration

## Summary

Sequential orchestration arranges agents in a fixed pipeline: each agent processes the task after the previous agent, and the previous output becomes the next input. (SRC-245 L220–221)

## The problem it solves

Some multi-agent tasks are not independent; each step needs the result from the previous step. The source names document review, data transformation pipelines, multi-stage reasoning, and drafting-reviewing-polishing as examples where ordered refinement matters. (SRC-245 L220–227)

## Mental model

Sequential orchestration is an assembly line for agents. The path is known before execution, agents do not decide the next step, and every stage hands its work to the next stage. (SRC-245 L220–221)

The episode explains the same idea with a summarizer, translator, and Q&A builder: each input must complete before the next agent can move forward. (SRC-180 L64–90)

## What the sources say

SRC-231 defines the pattern tersely: sequential orchestration passes output from one agent to the next in a fixed order and is ideal for step-by-step workflows, pipelines, and progressive refinement. (SRC-231 L251)

SRC-245 expands the use criteria: choose it for ordered dependent steps, data workflows where each stage adds needed information, non-parallel stages, gradual improvements, and systems whose delays or failures you can handle. (SRC-245 L223–228)

SRC-245 also gives anti-fits: avoid it when stages can run independently, one agent can do the entire task, early failures cannot be stopped or corrected, agents need dynamic collaboration, or the workflow needs iteration, backtracking, or dynamic routing. (SRC-245 L230–234)

## How it works in Azure

In Microsoft Agent Framework, sequential orchestration is built as a workflow that executes agents one after another, processes a task through all agents, and exposes workflow events as it runs. (SRC-245 L237–242)

## Code and configuration

The code shape in the corpus is: create a chat client such as `AzureOpenAIChatClient`, define named agents with role instructions through `create_agent`, pass the ordered agents to `SequentialBuilder().participants(...).build()`, call `run_stream`, iterate workflow events asynchronously, and collect `WorkflowOutputEvent` results. (SRC-245 L235–242)

The episode demo uses `SequentialBuilder` with summarizer, classifier, and action agents; it builds clients, creates named agents, passes them as an ordered participants array, runs the workflow, gathers output events as messages, and prints the result. (SRC-180 L337–511)

**Stale-risk:** `SequentialBuilder`, `run_stream`, and `WorkflowOutputEvent` are capture-time SDK names. (SRC-245 L234–242)

## Decision boundaries

**Inference:** Sequential versus concurrent is decided by dependency: if each stage needs the prior output, choose sequential; if agents can work independently at the same time, choose concurrent. (SRC-245 L220–231; SRC-241 L218–236)

**Inference:** Sequential versus handoff is decided by whether the route is predetermined. Sequential has a fixed order decided beforehand; handoff is for cases where the best agent or order is not known upfront. (SRC-245 L221; SRC-243 L221–228)


## Failure modes and misconceptions

Do not choose sequential just because there are multiple agents. If a single agent can perform the task effectively, or if independent stages can run in parallel without quality loss, the source says to avoid sequential orchestration. (SRC-245 L228–229)

A brittle sequential design can propagate a poor early output downstream if there is no way to stop or correct processing after an early failure. (SRC-245 L233)

## Solution Engineering transfer

**Inference:** Customer signal: "first summarize, then classify, then create an action," or "the review must happen after the draft" points to sequential orchestration because the order and data dependency are load-bearing. (SRC-245 L220–228; SRC-180 L64–90)

**Inference:** Discovery question: "Can these stages run independently, or does each stage require the previous stage's output?" decides between sequential and concurrent. (SRC-245 L223–231; SRC-241 L225–236)

## Connections

- [[multi-agent-orchestration]] — sequential is one supported Agent Framework orchestration pattern. (SRC-231 L251)
- [[concurrent-orchestration]] — closest opposite: parallel independent work. (SRC-245 L231; SRC-241 L218–236)
- [[handoff-orchestration]] — contrast when the order is not known upfront. (SRC-245 L221; SRC-243 L221)
- [[agent-framework-workflows]] — implementation uses Agent Framework workflows and events. (SRC-245 L237–242)
- [[orchestration-patterns-compared]] — side-by-side discrimination set for the five patterns.
- [[src-245-sequential-orchestration]] — source page for this pattern.
- *Also linked from:* [[magentic-orchestration]] · [[overview]]

## Sources

- SRC-180 — [[src-180-orchestrate-multi-agent-solution-microsoft-agent-framework-episode-14]] — episode explanation and sequential demo.
- SRC-231 — [[src-231-understand-agent-orchestration]] — overview definition of sequential orchestration.
- SRC-241 — [[src-241-concurrent-orchestration]] — closest contrast for parallel independence.
- SRC-243 — [[src-243-handoff-orchestration]] — closest contrast for dynamic routing.
- SRC-245 — [[src-245-sequential-orchestration]] — primary Learn unit for use, avoid, and SDK code shape.

## Open questions

- The corpus does not show a concrete recovery pattern for correcting an early-stage failure before downstream agents run. (SRC-245 L233)
