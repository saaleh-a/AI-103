---
title: "Use Sequential Orchestration"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains sequential orchestration: fixed agent pipelines where each output becomes the next input."
area: orchestration
source_ids: [SRC-245]
objectives: [G10, G16]
tags: [sequential-orchestration, pipelines, agent-framework]
aliases: ["SRC-245"]
source_kind: learn-unit
module: "Orchestrate a multi-agent solution using the Microsoft Agent Framework"
learning_path: "Develop AI agents on Azure"
unit: "5 of 11"
presenters: []
raw_file: "245-Use Sequential Orchestration - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/orchestrate-semantic-kernel-multi-agent-solution/5-use-sequential-orchestration"
ingest_depth: full
---
# Use Sequential Orchestration

*learn-unit · Orchestrate a multi-agent solution using the Microsoft Agent Framework · unit 5 of 11 · SRC-245*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-245 |
| Raw file | `245-Use Sequential Orchestration - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Orchestrate a multi-agent solution using the Microsoft Agent Framework |
| Unit / episode | 5 of 11 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/orchestrate-semantic-kernel-multi-agent-solution/5-use-sequential-orchestration |
| Teaching content | L214–244 of 274 |
| Content length | ~547 words |
| Capture quality | Clean Learn capture; teaching content starts after format controls. |
| Ingest depth | full |

## TL;DR

Sequential orchestration arranges agents in a pipeline where each agent runs after the previous one and passes output forward. (SRC-245 L218–219) It fits ordered step-by-step refinement and should be avoided for independent parallel work or dynamic collaboration. (SRC-245 L220–233)

## Key claims

- The output from one agent becomes the input for the next agent. (SRC-245 L218)
- Sequential orchestration is ideal for document review, data transformation pipelines, and multi-stage reasoning. (SRC-245 L218)
- The order is fixed and decided beforehand, and agents do not decide what happens next. (SRC-245 L220)
- Use it for ordered dependent steps, stages that add needed data, and gradual improvements such as drafting, reviewing, and polishing. (SRC-245 L222–226)
- Avoid it when stages can run independently, one agent can do the task, early failures cannot be corrected, or dynamic routing is required. (SRC-245 L228–233)
- SDK implementation uses `SequentialBuilder`, `participants()`, `build()`, `run_stream`, async event iteration, and `WorkflowOutputEvent`. (SRC-245 L234–242)

## How it works

The pattern enforces an ordered dependency chain. (SRC-245 L218–220) Each stage adds or refines something that the next stage needs. (SRC-245 L222–226) Predictability is useful when agent performance, delays, or failures can be handled without stopping the whole process. (SRC-245 L227)

## Code and API patterns

- `AzureOpenAIChatClient` is named as the example chat client. (SRC-245 L235)
- `create_agent` creates named agents with pipeline-specific role instructions. (SRC-245 L236)
- `SequentialBuilder` creates the ordered workflow, `participants()` adds agents, and `build()` creates the workflow. (SRC-245 L237)
- `run_stream` streams workflow events, and `WorkflowOutputEvent` contains results. (SRC-245 L238–240)

## Key terms

- **Sequential orchestration** — a fixed-order agent pipeline where each output becomes the next input. (SRC-245 L218–220)
- **Pipeline** — the ordered sequence of agents that process and refine the task. (SRC-245 L218–226)
- **WorkflowOutputEvent** — event type containing sequential-processing results. (SRC-245 L239–240)

## Decision boundaries and exam cues

- **Inference:** Choose sequential orchestration when wording emphasizes fixed order, dependencies, staged refinement, or pipelines. (SRC-245 L218–227)
- **Inference:** Reject sequential orchestration when the task requires parallelism, dynamic routing, backtracking, or free collaboration. (SRC-245 L228–233)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** Builder and event names reflect the SDK at capture time. (SRC-245 L234–242)
- Uncorrected early-stage failure can contaminate downstream processing. (SRC-245 L230)

## Relation to other sources

- [[src-231-understand-agent-orchestration]] defines sequential orchestration as passing output from one agent to the next in fixed order. (SRC-231 L249; SRC-245 L218–244)
- [[src-241-concurrent-orchestration]] is the opposite pattern for independent parallel stages. (SRC-241 L218–236; SRC-245 L228)
- [[src-180-orchestrate-multi-agent-solution-microsoft-agent-framework-episode-14]] demos sequential orchestration with summarizer, classifier, and action agents. (SRC-180 L327–511)

## Connections

- [[sequential-orchestration]] — the page's core pattern. (SRC-245 L218–244)
- [[agent-framework-workflows]] — sequential orchestration is implemented as a workflow. (SRC-245 L237–242)
- [[orchestration-patterns-compared]] — the source provides use and avoid criteria. (SRC-245 L222–233)
- [[microsoft-agent-framework]] — the SDK supplies the builder and workflow execution. (SRC-245 L234–242)
- *Module units:* [[src-133-introduction-orchestrate-multi-agent-solution-microsoft-agent-framework|1 Introduction]] · [[src-237-understand-microsoft-agent-framework|2 Understand the Microsoft Agent Framework]] · [[src-231-understand-agent-orchestration|3 Understand Agent Orchestration]] · [[src-241-concurrent-orchestration|4 Use Concurrent Orchestration]] · [[src-242-group-chat-orchestration|6 Use Group Chat Orchestration]] · [[src-243-handoff-orchestration|7 Use Handoff Orchestration]] · [[src-244-magentic-orchestration|8 Use Magentic Orchestration]] · [[src-69-exercise-develop-multi-agent-solution|9 Exercise - Develop a multi-agent solution]] · [[src-143-knowledge-check-orchestrate-multi-agent-solution-microsoft-agent-framework|10 Knowledge check]] · [[src-199-summary-orchestrate-multi-agent-solution-microsoft-agent-framework|11 Summary]] · [[src-180-orchestrate-multi-agent-solution-microsoft-agent-framework-episode-14|episode 14]]

## Open questions

- The source does not show how to stop or repair the workflow after an early stage fails. (SRC-245 L230)

## Sources

- SRC-245 — raw file: [[245-Use Sequential Orchestration - Training - Microsoft Learn]]
