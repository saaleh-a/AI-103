---
title: "Use Handoff Orchestration"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains handoff orchestration: dynamic one-agent-at-a-time transfer based on context, rules, or classification."
area: orchestration
source_ids: [SRC-243]
objectives: [G10, G16]
tags: [handoff-orchestration, routing, control-workflows]
aliases: ["SRC-243"]
source_kind: learn-unit
module: "Orchestrate a multi-agent solution using the Microsoft Agent Framework"
learning_path: "Develop AI agents on Azure"
unit: "7 of 11"
presenters: []
raw_file: "243-Use Handoff Orchestration - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/orchestrate-semantic-kernel-multi-agent-solution/7-use-handoff-orchestration"
ingest_depth: full
---
# Use Handoff Orchestration

*learn-unit · Orchestrate a multi-agent solution using the Microsoft Agent Framework · unit 7 of 11 · SRC-243*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-243 |
| Raw file | `243-Use Handoff Orchestration - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Orchestrate a multi-agent solution using the Microsoft Agent Framework |
| Unit / episode | 7 of 11 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/orchestrate-semantic-kernel-multi-agent-solution/7-use-handoff-orchestration |
| Teaching content | L214–256 of 286 |
| Content length | ~582 words |
| Capture quality | Clean Learn capture; teaching content starts after format controls. |
| Ingest depth | full |

## TL;DR

Handoff orchestration transfers control between agents based on task context or user requests so the best-suited specialist handles each part. (SRC-243 L220) It fits dynamic delegation when the next agent is not known upfront, but not fixed orders, simple rules, parallel operations, or loop-prone routing. (SRC-243 L221–234)

## Key claims

- Handoff orchestration lets agents hand off a conversation to another agent with the right expertise. (SRC-243 L220)
- It fits scenarios where the best agent is not known upfront or requirements become clearer during processing. (SRC-243 L221)
- Unlike parallel patterns, agents work one at a time and fully hand off control. (SRC-243 L221–222)
- Use it for dynamically emerging expertise needs, multi-domain sequential problems, and clear transfer signals. (SRC-243 L224–228)
- Avoid it when order is fixed, routing is simple, bad routing would frustrate users, parallel operations are required, or infinite handoff loops are hard to prevent. (SRC-243 L229–234)
- Implementation can use control workflows, structured JSON responses, switch-case edge groups, `Case` objects, and a `Default` fallback. (SRC-243 L235–254)

## How it works

Each agent processes the task, and the workflow decides the next agent from the output. (SRC-243 L235–236) The source describes a classification-oriented design: agents produce structured JSON, transformation logic turns responses into typed routing objects, handler executors guard each classification outcome, and switch-case edges route to the matching handler or a default case. (SRC-243 L239–253)

## Code and API patterns

- `response_format` configures agents for structured JSON output. (SRC-243 L239–243)
- Factory functions generate condition checkers for classification values. (SRC-243 L247)
- `Case` objects define switch-case branches, and a `Default` case handles unexpected scenarios. (SRC-243 L249–250)
- `WorkflowBuilder` connects executors and switch-case edge groups. (SRC-243 L252–254)

## Key terms

- **Handoff orchestration** — dynamic transfer of control from one agent to another. (SRC-243 L220–222)
- **Control workflow** — a workflow where agent output determines which agent runs next. (SRC-243 L235–236)
- **Switch-case routing** — routing based on classification results. (SRC-243 L236, L250–253)

## Decision boundaries and exam cues

- **Inference:** Choose handoff when the next specialist emerges from task context during execution. (SRC-243 L221–228)
- **Inference:** Do not choose handoff when the sequence is already fixed or work must happen concurrently. (SRC-243 L229–234)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** Pydantic, `Case`, and `WorkflowBuilder` are capture-time implementation details. (SRC-243 L239–254)
- Infinite handoff loops or excessive bouncing are explicit risks. (SRC-243 L234)

## Relation to other sources

- [[src-231-understand-agent-orchestration]] defines handoff as dynamically transferring control based on context or rules. (SRC-231 L252; SRC-243 L220–256)
- [[src-245-sequential-orchestration]] contrasts with handoff because sequential orchestration has a known fixed order. (SRC-245 L220–221; SRC-243 L229)
- [[src-180-orchestrate-multi-agent-solution-microsoft-agent-framework-episode-14]] describes handoff as delegation to a specialist when the path is unknown at the beginning. (SRC-180 L111–186)

## Connections

- [[handoff-orchestration]] — the page's core pattern. (SRC-243 L220–256)
- [[agent-framework-workflows]] — implementation uses control workflows and switch-case edges. (SRC-243 L235–254)
- [[multi-agent-orchestration]] — the pattern routes among specialist agents. (SRC-243 L220–228)
- [[orchestration-patterns-compared]] — the source gives use and avoid criteria. (SRC-243 L224–234)
- *Module units:* [[src-133-introduction-orchestrate-multi-agent-solution-microsoft-agent-framework|1 Introduction]] · [[src-237-understand-microsoft-agent-framework|2 Understand the Microsoft Agent Framework]] · [[src-231-understand-agent-orchestration|3 Understand Agent Orchestration]] · [[src-241-concurrent-orchestration|4 Use Concurrent Orchestration]] · [[src-245-sequential-orchestration|5 Use Sequential Orchestration]] · [[src-242-group-chat-orchestration|6 Use Group Chat Orchestration]] · [[src-244-magentic-orchestration|8 Use Magentic Orchestration]] · [[src-69-exercise-develop-multi-agent-solution|9 Exercise - Develop a multi-agent solution]] · [[src-143-knowledge-check-orchestrate-multi-agent-solution-microsoft-agent-framework|10 Knowledge check]] · [[src-199-summary-orchestrate-multi-agent-solution-microsoft-agent-framework|11 Summary]] · [[src-180-orchestrate-multi-agent-solution-microsoft-agent-framework-episode-14|episode 14]]

## Open questions

- The source does not specify concrete strategies for detecting or breaking handoff loops. (SRC-243 L234)

## Sources

- SRC-243 — raw file: [[243-Use Handoff Orchestration - Training - Microsoft Learn]]
