---
title: "Orchestrate a multi-agent solution using the Microsoft Agent Framework - AI-103 - Episode 14"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Episode recap and demo covering Microsoft Agent Framework orchestration patterns and a sequential multi-agent workflow."
area: orchestration
source_ids: [SRC-180]
objectives: [G10, G16]
tags: [episode, multi-agent-orchestration, sequential-orchestration, magentic]
aliases: ["SRC-180"]
source_kind: episode
module: "Orchestrate a multi-agent solution using the Microsoft Agent Framework"
learning_path: null
unit: null
presenters: ["ROB FOULKROD"]
raw_file: "180-Orchestrate a multi-agent solution using the Microsoft Agent Framework - AI-103 - Episode 14.md"
url: "https://www.youtube.com/watch?v=l3oAcAWySlE"
ingest_depth: full
---
# Orchestrate a multi-agent solution using the Microsoft Agent Framework - AI-103 - Episode 14

*episode · Orchestrate a multi-agent solution using the Microsoft Agent Framework · SRC-180*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-180 |
| Raw file | `180-Orchestrate a multi-agent solution using the Microsoft Agent Framework - AI-103 - Episode 14.md` |
| Kind | episode |
| Learning path | null |
| Module | Orchestrate a multi-agent solution using the Microsoft Agent Framework |
| Unit / episode | Episode 14 |
| Presenter(s) | ROB FOULKROD |
| URL | https://www.youtube.com/watch?v=l3oAcAWySlE |
| Teaching content | L3–594 of 594 |
| Content length | ~2620 words |
| Capture quality | Auto-captioned episode transcript; mostly coherent, with possible caption drift such as magnetic/Magentic. |
| Ingest depth | full |

## TL;DR

Rob Foulkrod frames multi-agent orchestration as teams of role-specific agents collaborating on problems too large for one agent. (SRC-180 L4–30) The episode reviews five orchestration patterns, explains why Microsoft Agent Framework can implement them in code outside Foundry workflows, and demos a sequential workflow with summarizer, classifier, and action agents. (SRC-180 L31–63, L64–323, L327–511)

## Key claims

- The session covers orchestrating a multi-agent solution using Microsoft Agent Framework and reviews different orchestration patterns. (SRC-180 L16–30)
- The presenter distinguishes Foundry workflow-system patterns from the need to implement orchestration in an application's own codebase. (SRC-180 L31–45)
- The presenter says orchestration capabilities came from AutoGen when Semantic Kernel and AutoGen were melded together. (SRC-180 L46–54)
- Sequential orchestration passes one agent's output as the next agent's input. (SRC-180 L64–90)
- Concurrent orchestration fans work out in parallel and can merge results for speed. (SRC-180 L91–110)
- Handoff orchestration delegates control to a specialist agent when the path is not known at the start. (SRC-180 L111–186)
- Group chat orchestration uses a manager and a shared central conversation where agents retain access to prior context. (SRC-180 L187–240)
- Magentic orchestration uses a more sophisticated orchestrator for complicated tasks whose path emerges during execution. (SRC-180 L241–323)
- The demo builds three agents and organizes them with `SequentialBuilder` and `workflow.run`. (SRC-180 L361–485)

## How it works

The episode first contrasts code-based Agent Framework orchestration with Foundry workflow patterns. (SRC-180 L31–45) It then walks up a pattern ladder: sequential is predictable and ordered, concurrent branches out and rejoins, handoff chooses a specialist after input arrives, group chat uses a manager and shared thread, and Magentic relies on an orchestrator that self-organizes agents for complex tasks. (SRC-180 L64–323)

The demo uses a Foundry project endpoint and model deployment name, imports Agent Framework and `SequentialBuilder`, and defines summarizer, classifier, and action instructions. (SRC-180 L337–390) It creates a credential, an Azure AI agent client, an AI chat client, and three agents with instructions and names. (SRC-180 L395–409) It then hardcodes customer feedback about wanting dark mode, passes the agents to `SequentialBuilder` as an ordered participants array, builds the workflow, runs it, collects output events as messages, and prints the result. (SRC-180 L416–511)

## Code and API patterns

- The demo requires a Foundry project endpoint and model deployment name. (SRC-180 L337–354)
- `SequentialBuilder` is imported from orchestration-related Agent Framework code in the captioned transcript. (SRC-180 L355–369)
- The demo defines separate instructions for summarizer, classifier, and action agents. (SRC-180 L370–394)
- A CLI credential and Azure AI agent client are used to obtain an AI chat client. (SRC-180 L395–402)
- Agents are created with instructions and names, then ordered through `SequentialBuilder` participants before `build`. (SRC-180 L403–451)
- `workflow.run` produces events; output events are converted to messages and appended for printing. (SRC-180 L452–470)

## Key terms

- **Sequential orchestration** — a predictable chain where output from one agent becomes input to the next. (SRC-180 L64–90)
- **Concurrent orchestration** — a fan-out pattern that handles work in parallel and merges results. (SRC-180 L91–110)
- **Handoff orchestration** — dynamic specialist delegation when the path is not known upfront. (SRC-180 L111–186)
- **Group chat orchestration** — a manager-led shared conversation where agents retain central chat context. (SRC-180 L187–240)
- **Magentic orchestration** — an orchestrator-led pattern for complex tasks without a fixed execution order. (SRC-180 L241–323)

## Decision boundaries and exam cues

- **Inference:** If the order is known and every stage must finish before the next, choose sequential orchestration. (SRC-180 L64–90)
- **Inference:** If parts can be farmed out in parallel for speed, choose concurrent orchestration. (SRC-180 L91–110)
- **Inference:** If the correct specialist is chosen after input arrives, choose handoff orchestration. (SRC-180 L111–186)
- **Inference:** If a managed shared discussion is central, choose group chat orchestration. (SRC-180 L187–240)
- **Inference:** If a complicated problem requires an orchestrator to decide the route and keep a ledger of investigation, choose Magentic orchestration. (SRC-180 L241–323)

## Assessment items

- The presenter asks the first step in the Microsoft Agent Framework unified orchestration workflow and states that the first step is to define the agents and describe their capabilities. (SRC-180 L512–517)
- The presenter asks which pattern fits brainstorming and collaborative problem solving; he says group chat makes sense first, while Magentic may be arguable for a more complicated problem. (SRC-180 L518–535)

## Segment guide

- **Opening and topic framing, L3–30:** Multi-agent orchestration is framed as teams of role-specific agents solving problems too big for one agent. (SRC-180 L3–30)
- **Why Agent Framework orchestration in code, L31–63:** The episode contrasts Foundry workflow patterns with application-code orchestration and notes AutoGen lineage. (SRC-180 L31–63)
- **Sequential and concurrent patterns, L64–110:** The presenter describes fixed pipelines and parallel fan-out/merge. (SRC-180 L64–110)
- **Handoff pattern, L111–186:** The presenter explains dynamic routing to specialists when the path is not known at the start. (SRC-180 L111–186)
- **Group chat pattern, L187–240:** The presenter explains the manager, one-at-a-time turns, shared middle chat, and persistent conversation context. (SRC-180 L187–240)
- **Magentic pattern, L241–323:** The presenter describes a more sophisticated orchestrator and an AI on-call troubleshooting example. (SRC-180 L241–323)
- **Sequential demo setup, L327–409:** The demo sets up Foundry context, imports `SequentialBuilder`, defines three agents, and builds clients. (SRC-180 L327–409)
- **Sequential demo run, L416–511:** The demo hardcodes feedback, orders agents through `SequentialBuilder`, runs the workflow, and shows summarizer/classifier/action output. (SRC-180 L416–511)
- **Knowledge-check review and wrap-up, L512–594:** The presenter reviews assessment answers, summarizes all patterns, and closes the course topic. (SRC-180 L512–594)

## Tensions, caveats and currency

- **Stale-risk:** The transcript is auto-captioned and uses `magnetic` in places, while the Learn unit title uses Magentic. (SRC-180 L241–248; SRC-244 L220)
- **Stale-risk:** The Semantic Kernel and AutoGen lineage statement should be checked against current product history before becoming a live-product claim. (SRC-180 L46–54)
- The presenter says Magentic could be arguable for the brainstorming question if the learner imagines a more complicated problem, and settles on group chat as the answer to the knowledge-check question. (SRC-180 L523–535; SRC-143 L14–17)

## Relation to other sources

- [[src-133-introduction-orchestrate-multi-agent-solution-microsoft-agent-framework]] introduces the module outcomes that this episode completes. (SRC-133 L226–231; SRC-180 L550–559)
- [[src-231-understand-agent-orchestration]] provides canonical Learn definitions for the same five patterns reviewed in the episode. (SRC-231 L248–252; SRC-180 L64–323)
- [[src-245-sequential-orchestration]] aligns with the episode demo's fixed summarizer-classifier-action pipeline. (SRC-245 L218–244; SRC-180 L327–511)
- [[src-143-knowledge-check-orchestrate-multi-agent-solution-microsoft-agent-framework]] captures the knowledge-check items the presenter verbally reviews. (SRC-143 L10–22; SRC-180 L512–535)
- [[src-199-summary-orchestrate-multi-agent-solution-microsoft-agent-framework]] summarizes the same pattern set and SDK themes. (SRC-199 L218–220; SRC-180 L536–559)

## Connections

- [[multi-agent-orchestration]] — the episode's central teaching target. (SRC-180 L4–30)
- [[microsoft-agent-framework]] — the code-based framework used throughout the episode. (SRC-180 L20–22, L355–369)
- [[sequential-orchestration]] — the demo pattern. (SRC-180 L64–90, L327–511)
- [[concurrent-orchestration]] — reviewed as fan-out parallelism. (SRC-180 L91–110)
- [[handoff-orchestration]] — reviewed as dynamic specialist delegation. (SRC-180 L111–186)
- [[group-chat-orchestration]] — reviewed as a managed shared conversation. (SRC-180 L187–240)
- [[magentic-orchestration]] — reviewed as sophisticated orchestrator-led problem solving. (SRC-180 L241–323)
- [[orchestration-patterns-compared]] — the episode compares available patterns. (SRC-180 L64–323)
- *Module units:* [[src-133-introduction-orchestrate-multi-agent-solution-microsoft-agent-framework|1 Introduction]] · [[src-237-understand-microsoft-agent-framework|2 Understand the Microsoft Agent Framework]] · [[src-231-understand-agent-orchestration|3 Understand Agent Orchestration]] · [[src-241-concurrent-orchestration|4 Use Concurrent Orchestration]] · [[src-245-sequential-orchestration|5 Use Sequential Orchestration]] · [[src-242-group-chat-orchestration|6 Use Group Chat Orchestration]] · [[src-243-handoff-orchestration|7 Use Handoff Orchestration]] · [[src-244-magentic-orchestration|8 Use Magentic Orchestration]] · [[src-69-exercise-develop-multi-agent-solution|9 Exercise - Develop a multi-agent solution]] · [[src-143-knowledge-check-orchestrate-multi-agent-solution-microsoft-agent-framework|10 Knowledge check]] · [[src-199-summary-orchestrate-multi-agent-solution-microsoft-agent-framework|11 Summary]]

## Open questions

- The transcript does not include the full source code listing, so exact imports and object names should be verified against the lab or SDK documentation before reuse. (SRC-180 L355–485)

## Sources

- SRC-180 — raw file: [[180-Orchestrate a multi-agent solution using the Microsoft Agent Framework - AI-103 - Episode 14]]
