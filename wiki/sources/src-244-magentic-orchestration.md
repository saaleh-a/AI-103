---
title: "Use Magentic Orchestration"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains Magentic orchestration: a manager-driven pattern for complex open-ended tasks with dynamic planning and delegation."
area: orchestration
source_ids: [SRC-244]
objectives: [G10, G16]
tags: [magentic-orchestration, manager-agent, planning]
aliases: ["SRC-244"]
source_kind: learn-unit
module: "Orchestrate a multi-agent solution using the Microsoft Agent Framework"
learning_path: "Develop AI agents on Azure"
unit: "8 of 11"
presenters: []
raw_file: "244-Use Magentic Orchestration - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/orchestrate-semantic-kernel-multi-agent-solution/8-use-magentic-orchestration"
ingest_depth: full
---
# Use Magentic Orchestration

*learn-unit · Orchestrate a multi-agent solution using the Microsoft Agent Framework · unit 8 of 11 · SRC-244*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-244 |
| Raw file | `244-Use Magentic Orchestration - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Orchestrate a multi-agent solution using the Microsoft Agent Framework |
| Unit / episode | 8 of 11 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/orchestrate-semantic-kernel-multi-agent-solution/8-use-magentic-orchestration |
| Teaching content | L214–245 of 275 |
| Content length | ~575 words |
| Capture quality | Clean Learn capture; teaching content starts after format controls. |
| Ingest depth | full |

## TL;DR

Magentic orchestration is a manager-driven multi-agent pattern for complex open-ended tasks whose path is not predetermined. (SRC-244 L218–219, L224–230) A Magentic manager maintains context, tracks progress, builds a task ledger, delegates to specialists, and adapts the workflow in real time. (SRC-244 L219–221)

## Key claims

- Magentic orchestration uses a dedicated manager to coordinate specialized agents. (SRC-244 L218–219)
- The manager chooses the next agent from evolving context, progress, and capabilities. (SRC-244 L218–219)
- The manager maintains shared context, tracks progress, and adapts the workflow in real time. (SRC-244 L219–220)
- A dynamic task ledger records goals, subgoals, and execution plans. (SRC-244 L220–221)
- Use it for complex open-ended problems, documented plans, tool-using agents, and dynamically built execution plans. (SRC-244 L224–230)
- Avoid it when the path is fixed, the task is simple, speed is the priority, or stalls and loops are likely. (SRC-244 L231–236)
- Implementation uses `MagenticBuilder`, event callbacks, streaming mode, a standard manager, limits for rounds and stalls, `run_stream`, and `WorkflowOutputEvent`. (SRC-244 L237–244)

## How it works

The manager plans, delegates, tracks progress, and revises the approach as new information emerges. (SRC-244 L218–221, L245) The pattern focuses on documenting the approach as well as the final solution. (SRC-244 L220) This makes it heavier than simpler orchestration patterns and explicitly trades speed for planning. (SRC-244 L231–236)

## Code and API patterns

- `ChatAgent` is the example agent type for specialized agents. (SRC-244 L238)
- An async callback handles orchestrator messages, streaming updates, agent messages, and final results. (SRC-244 L239)
- `MagenticBuilder` creates the orchestration with participants, callbacks, streaming mode, and a standard manager. (SRC-244 L240)
- The standard manager uses a chat client and is configured with maximum round, stall, and reset limits. (SRC-244 L241)
- `run_stream` executes the task, and `WorkflowOutputEvent` contains final results. (SRC-244 L242–244)

## Key terms

- **Magentic orchestration** — a flexible manager-led pattern for open-ended multi-agent work. (SRC-244 L218–221)
- **Magentic manager** — the coordinator that selects agents, tracks progress, and adapts the workflow. (SRC-244 L218–220)
- **Task ledger** — a dynamic record of goals, subgoals, and execution plans. (SRC-244 L220–221)

## Decision boundaries and exam cues

- **Inference:** Choose Magentic orchestration when a scenario needs adaptive planning, a documented approach, tool-using specialists, and no fixed route. (SRC-244 L224–230)
- **Inference:** Avoid Magentic orchestration when a simpler, faster, fixed, or deterministic pattern is sufficient. (SRC-244 L231–236)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** Magentic manager parameters and builder names reflect the SDK at capture time. (SRC-244 L237–244)
- The source explicitly warns that Magentic orchestration emphasizes planning over fast execution. (SRC-244 L234)

## Relation to other sources

- [[src-231-understand-agent-orchestration]] introduces Magentic as a manager-driven approach for open-ended tasks. (SRC-231 L252; SRC-244 L218–245)
- [[src-242-group-chat-orchestration]] is nearby; Magentic is more planning- and manager-led. (SRC-242 L218–265; SRC-244 L218–245)
- [[src-180-orchestrate-multi-agent-solution-microsoft-agent-framework-episode-14]] describes Magentic as a more sophisticated AutoGen-derived orchestration with an orchestrator and troubleshooting flow. (SRC-180 L241–323)

## Connections

- [[magentic-orchestration]] — the page's core pattern. (SRC-244 L218–245)
- [[multi-agent-orchestration]] — the pattern coordinates specialized agents. (SRC-244 L218–230)
- [[agent-framework-workflows]] — implementation uses workflow events and streaming. (SRC-244 L239–244)
- [[orchestration-patterns-compared]] — use and avoid rules support pattern comparison. (SRC-244 L224–236)
- *Module units:* [[src-133-introduction-orchestrate-multi-agent-solution-microsoft-agent-framework|1 Introduction]] · [[src-237-understand-microsoft-agent-framework|2 Understand the Microsoft Agent Framework]] · [[src-231-understand-agent-orchestration|3 Understand Agent Orchestration]] · [[src-241-concurrent-orchestration|4 Use Concurrent Orchestration]] · [[src-245-sequential-orchestration|5 Use Sequential Orchestration]] · [[src-242-group-chat-orchestration|6 Use Group Chat Orchestration]] · [[src-243-handoff-orchestration|7 Use Handoff Orchestration]] · [[src-69-exercise-develop-multi-agent-solution|9 Exercise - Develop a multi-agent solution]] · [[src-143-knowledge-check-orchestrate-multi-agent-solution-microsoft-agent-framework|10 Knowledge check]] · [[src-199-summary-orchestrate-multi-agent-solution-microsoft-agent-framework|11 Summary]] · [[src-180-orchestrate-multi-agent-solution-microsoft-agent-framework-episode-14|episode 14]]

## Open questions

- The source does not define how the task ledger is stored or exposed after execution. (SRC-244 L220–221)

## Sources

- SRC-244 — raw file: [[244-Use Magentic Orchestration - Training - Microsoft Learn]]
