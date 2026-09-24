---
title: "Handoff orchestration"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Dynamic one-agent-at-a-time transfer of control to the specialist best suited to the evolving task."
area: orchestration
source_ids: [SRC-143, SRC-180, SRC-231, SRC-242, SRC-243, SRC-245]
objectives: [G10]
objective_gaps: []
tags: [handoff-orchestration, dynamic-routing, control-workflows]
aliases: ["HandoffBuilder", "handoff workflow", "expert routing"]
---

# Handoff orchestration

## Summary

Handoff orchestration lets agents transfer control to another agent based on task context or user request, so the best-suited specialist handles the next part of the work. (SRC-243 L218–220)

## The problem it solves

Some tasks require specialized knowledge, but the right specialist or order is not known before processing starts. Handoff orchestration fits when requirements emerge dynamically and clear signals or rules can decide when control should transfer. (SRC-243 L221–228)

## Mental model

**Inference:** Handoff orchestration is specialist routing. One agent works at a time, decides or helps determine the next specialist, then fully hands off control rather than running a parallel discussion. (SRC-243 L221–222)

**Inference:** The episode illustrates this with general support delegating to billing after input reveals the question belongs there; the path is not known at the beginning. (SRC-180 L111–186)

## What the sources say

SRC-231 defines handoff as dynamically transferring control between agents based on context or rules, useful for escalation, fallback, and expert routing where one agent works at a time. (SRC-231 L252)

SRC-243 says to use the pattern when the number or order of agents cannot be determined in advance, expertise requirements emerge during processing, multiple-domain problems require different specialists sequentially, and transfer signals can be defined. (SRC-243 L224–228)

SRC-243 says to avoid it when the agents and order are fixed, routing is simple and rule-based, bad routing would frustrate users, operations must run simultaneously, or infinite bouncing between agents is hard to prevent. (SRC-243 L229–234)

The knowledge check asks which pattern “dynamically transfers control between agents based on context or rules” and lists Handoff among the options (SRC-143 L19–22); the orchestration overview teaches that handoff dynamically transfers control between agents based on context or rules (SRC-231 L250–252).

## How it works in Azure

The Learn unit says handoff can be implemented in Microsoft Agent Framework with control workflows. Each agent processes the task in sequence, and the workflow decides which agent to call next based on output, using switch-case routing over classification results. (SRC-243 L235–236)

## Code and configuration

The code shape in the corpus is not a named `HandoffBuilder`; it is a control workflow shape: configure agents with instructions and `response_format` for structured JSON, create executor functions for storage, transformation, and handlers, build condition checkers, use `Case` objects and a `Default` fallback, then assemble edges with `WorkflowBuilder`. (SRC-243 L239–254)

**Stale-risk:** `response_format`, `Case`, `Default`, and `WorkflowBuilder` are capture-time SDK/API details. (SRC-243 L239–254)

## Decision boundaries

**Inference:** Handoff versus sequential is decided by whether the route is known upfront. Sequential has a fixed order decided beforehand; handoff is for dynamic routing as expertise needs emerge. (SRC-245 L221; SRC-243 L221–228)

**Inference:** Handoff versus group chat is decided by control and shared discussion: handoff has one active specialist at a time and fully transfers control, while group chat keeps a managed shared conversation with a chat manager. (SRC-243 L221–222; SRC-242 L218–226)


## Failure modes and misconceptions

Do not choose handoff for a known, fixed pipeline; that is a sequential orchestration cue. (SRC-243 L229; SRC-245 L220–221)

Do not choose handoff when operations must run at the same time; that conflicts with the one-agent-at-a-time control model. (SRC-243 L221–222, L233)

Handoff loops are an explicit risk: if preventing excessive bouncing is difficult, the source says to avoid the pattern. (SRC-243 L234)

## Solution Engineering transfer

**Inference:** Customer signal: "route the case to the right expert once we know what it is" points to handoff. "Have specialists debate together" points to group chat instead. (SRC-243 L218–228; SRC-242 L223–234)

**Inference:** Discovery question: "What are the clear transfer signals, and how do we prevent loops or bad routing?" follows from the source's transfer-signal and loop cautions. (SRC-243 L228, L232–234)

## Connections

- [[multi-agent-orchestration]] — handoff is one supported Agent Framework pattern. (SRC-231 L252)
- [[sequential-orchestration]] — closest contrast when order is fixed. (SRC-243 L229; SRC-245 L220–221)
- [[group-chat-orchestration]] — closest contrast when agents share a managed conversation. (SRC-243 L221–222; SRC-242 L218–226)
- [[agent-framework-workflows]] — implementation uses control workflows and switch-case edges. (SRC-243 L235–254)
- [[orchestration-patterns-compared]] — side-by-side discrimination set for the five patterns.
- [[src-243-handoff-orchestration]] — source page for this pattern.
- *Also linked from:* [[a2a-agent-implementation]] · [[overview]]

## Sources

- SRC-143 — [[src-143-knowledge-check-orchestrate-multi-agent-solution-microsoft-agent-framework]] — assessment cue for handoff.
- SRC-180 — [[src-180-orchestrate-multi-agent-solution-microsoft-agent-framework-episode-14]] — episode explanation of unknown-path specialist delegation.
- SRC-231 — [[src-231-understand-agent-orchestration]] — overview definition of handoff orchestration.
- SRC-242 — [[src-242-group-chat-orchestration]] — closest contrast for shared managed conversation.
- SRC-243 — [[src-243-handoff-orchestration]] — primary Learn unit for use, avoid, and control-workflow shape.
- SRC-245 — [[src-245-sequential-orchestration]] — closest contrast for fixed order.

## Open questions

- The corpus does not provide concrete strategies for detecting or breaking infinite handoff loops. (SRC-243 L234)
