---
title: "Use Concurrent Orchestration"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains concurrent orchestration: parallel independent agents, result aggregation, fit, anti-fit, and SDK builder steps."
area: orchestration
source_ids: [SRC-241]
objectives: [G10, G16]
tags: [concurrent-orchestration, parallel-agents, aggregation]
aliases: ["SRC-241"]
source_kind: learn-unit
module: "Orchestrate a multi-agent solution using the Microsoft Agent Framework"
learning_path: "Develop AI agents on Azure"
unit: "4 of 11"
presenters: []
raw_file: "241-Use Concurrent Orchestration - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/orchestrate-semantic-kernel-multi-agent-solution/4-use-concurrent-orchestration"
ingest_depth: full
---
# Use Concurrent Orchestration

*learn-unit · Orchestrate a multi-agent solution using the Microsoft Agent Framework · unit 4 of 11 · SRC-241*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-241 |
| Raw file | `241-Use Concurrent Orchestration - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Orchestrate a multi-agent solution using the Microsoft Agent Framework |
| Unit / episode | 4 of 11 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/orchestrate-semantic-kernel-multi-agent-solution/4-use-concurrent-orchestration |
| Teaching content | L214–249 of 279 |
| Content length | ~713 words |
| Capture quality | Clean Learn capture; teaching content starts after format controls. |
| Ingest depth | full |

## TL;DR

Concurrent orchestration lets multiple agents work on the same task simultaneously, then gathers and combines their outputs when needed. (SRC-241 L220) It fits independent, parallel work that benefits from speed or diverse approaches, but not ordered dependencies, strict sequencing, quota constraints, or unresolved conflicts. (SRC-241 L226–240)

## Key claims

- Concurrent orchestration runs multiple agents on the same task at the same time. (SRC-241 L220)
- Agents work independently, and their outputs can be combined or left as separate results. (SRC-241 L220–222)
- It supports brainstorming, ensemble reasoning, voting or consensus, and speed-sensitive work. (SRC-241 L226–232)
- Avoid it when agents must build on one another, when strict sequence matters, when quotas make parallelism inefficient, or when conflicts cannot be resolved. (SRC-241 L233–240)
- SDK implementation uses `ConcurrentBuilder`, `participants()`, `build()`, `run`, and `get_outputs()`. (SRC-241 L242–248)

## How it works

The same task is handled independently by multiple agents, and the system gathers outputs afterward. (SRC-241 L220) Agents do not share results with each other during the run, although an agent can call other agents through its own orchestration. (SRC-241 L223) The registered agents can be called every time or selected dynamically for a task. (SRC-241 L223)

## Code and API patterns

- `AzureOpenAIChatClient` is the example chat client for connecting to an AI service provider. (SRC-241 L243)
- `create_agent` creates named agents with role-specific instructions. (SRC-241 L244)
- `ConcurrentBuilder` creates the parallel workflow, `participants()` adds agents, and `build()` creates the workflow. (SRC-241 L245)
- `run` invokes the workflow, and `get_outputs()` extracts outputs from workflow events. (SRC-241 L246–247)

## Key terms

- **Concurrent orchestration** — a pattern where multiple agents work independently and simultaneously on the same task. (SRC-241 L220–223)
- **Aggregation** — gathering and combining outputs into a final answer when appropriate. (SRC-241 L220–222)
- **Ensemble reasoning** — combining different reasoning methods as a multi-agent decision technique. (SRC-241 L230)

## Decision boundaries and exam cues

- **Inference:** Choose concurrent orchestration when tasks are independent and speed, diversity, brainstorming, or voting matters. (SRC-241 L226–232)
- **Inference:** Avoid concurrent orchestration when later agents must depend on earlier outputs or when result conflicts have no clear resolution. (SRC-241 L233–240)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** Builder and method names reflect the SDK at capture time. (SRC-241 L242–248)
- Resource limits such as model quotas are an explicit caveat for parallel execution. (SRC-241 L237)

## Relation to other sources

- [[src-231-understand-agent-orchestration]] defines concurrent orchestration as broadcasting a task and collecting independent results. (SRC-231 L250; SRC-241 L220–249)
- [[src-245-sequential-orchestration]] is the closest contrast because it requires ordered dependent stages instead of parallel independence. (SRC-245 L218–244; SRC-241 L233–240)
- [[src-180-orchestrate-multi-agent-solution-microsoft-agent-framework-episode-14]] describes concurrent orchestration as fan-out that can merge results for faster work. (SRC-180 L91–110)

## Connections

- [[concurrent-orchestration]] — the page's core pattern. (SRC-241 L220–249)
- [[multi-agent-orchestration]] — the pattern coordinates multiple agents. (SRC-241 L220–223)
- [[orchestration-patterns-compared]] — the source gives use and avoid rules. (SRC-241 L226–240)
- [[microsoft-agent-framework]] — the implementation vehicle is Microsoft Agent Framework. (SRC-241 L242–248)
- *Module units:* [[src-133-introduction-orchestrate-multi-agent-solution-microsoft-agent-framework|1 Introduction]] · [[src-237-understand-microsoft-agent-framework|2 Understand the Microsoft Agent Framework]] · [[src-231-understand-agent-orchestration|3 Understand Agent Orchestration]] · [[src-245-sequential-orchestration|5 Use Sequential Orchestration]] · [[src-242-group-chat-orchestration|6 Use Group Chat Orchestration]] · [[src-243-handoff-orchestration|7 Use Handoff Orchestration]] · [[src-244-magentic-orchestration|8 Use Magentic Orchestration]] · [[src-69-exercise-develop-multi-agent-solution|9 Exercise - Develop a multi-agent solution]] · [[src-143-knowledge-check-orchestrate-multi-agent-solution-microsoft-agent-framework|10 Knowledge check]] · [[src-199-summary-orchestrate-multi-agent-solution-microsoft-agent-framework|11 Summary]] · [[src-180-orchestrate-multi-agent-solution-microsoft-agent-framework-episode-14|episode 14]]

## Open questions

- The source does not specify how to resolve conflicts between parallel outputs beyond warning that unresolved conflicts are a reason to avoid the pattern. (SRC-241 L239)

## Sources

- SRC-241 — raw file: [[241-Use Concurrent Orchestration - Training - Microsoft Learn]]
