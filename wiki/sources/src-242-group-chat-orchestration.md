---
title: "Use Group Chat Orchestration"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains group chat orchestration with a chat manager, shared conversation, optional human input, and manager customization."
area: orchestration
source_ids: [SRC-242]
objectives: [G10, G16]
tags: [group-chat-orchestration, human-in-the-loop, chat-manager]
aliases: ["SRC-242"]
source_kind: learn-unit
module: "Orchestrate a multi-agent solution using the Microsoft Agent Framework"
learning_path: "Develop AI agents on Azure"
unit: "6 of 11"
presenters: []
raw_file: "242-Use Group Chat Orchestration - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/orchestrate-semantic-kernel-multi-agent-solution/6-use-group-chat-orchestration"
ingest_depth: full
---
# Use Group Chat Orchestration

*learn-unit · Orchestrate a multi-agent solution using the Microsoft Agent Framework · unit 6 of 11 · SRC-242*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-242 |
| Raw file | `242-Use Group Chat Orchestration - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Orchestrate a multi-agent solution using the Microsoft Agent Framework |
| Unit / episode | 6 of 11 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/orchestrate-semantic-kernel-multi-agent-solution/6-use-group-chat-orchestration |
| Teaching content | L214–265 of 295 |
| Content length | ~761 words |
| Capture quality | Clean Learn capture; teaching content starts after format controls. |
| Ingest depth | full |

## TL;DR

Group chat orchestration models a collaborative conversation among agents and optionally a human, with a central chat manager deciding who responds next and when user input is needed. (SRC-242 L218–219) It fits brainstorming, debate, maker-checker loops, transparent conversations, and human oversight, but not simple delegation or deterministic pipelines. (SRC-242 L220–240)

## Key claims

- A central chat manager controls the flow, next responder, and human-input requests. (SRC-242 L218–219)
- The pattern supports free-flowing ideation, formal workflows with roles and approvals, and human-in-the-loop setups. (SRC-242 L220–222)
- It is useful for spontaneous collaboration, maker-checker loops, real-time human oversight, and auditable single-thread conversations. (SRC-242 L223–226)
- Avoid it when simple delegation is enough, speed makes discussion overhead impractical, deterministic workflows are needed, completion is unclear, or too many agents make flow hard to manage. (SRC-242 L235–240)
- A custom manager can control filtering, next-agent selection, user-input requests, and termination. (SRC-242 L250–255)

## How it works

Agents contribute to a shared conversation under the chat manager's turn control. (SRC-242 L218–222) A maker-checker loop is a special case where one agent proposes content and another reviews it, repeating until satisfactory. (SRC-242 L241–244) During each round, the manager checks whether user input is needed, checks termination, filters results if ending, and selects the next agent if continuing. (SRC-242 L256–261)

## Code and API patterns

- `GroupChatBuilder` creates the workflow and accepts participants before `build()`. (SRC-242 L247)
- `GroupChatManager` can be extended to customize flow. (SRC-242 L250)
- Manager methods include `should_request_user_input`, `should_terminate`, `filter_results`, and `select_next_agent`. (SRC-242 L256–260)

## Key terms

- **Group chat orchestration** — a shared managed conversation among agents and optionally a human. (SRC-242 L218–219)
- **Chat manager** — the controller that chooses flow, speakers, user input, and termination. (SRC-242 L218–219, L250–260)
- **Maker-checker loop** — an iterative proposal-and-review process controlled by the manager. (SRC-242 L241–244)

## Decision boundaries and exam cues

- **Inference:** Choose group chat when wording emphasizes brainstorming, debate, consensus, transparent discussion, human oversight, or maker-checker review. (SRC-242 L223–234)
- **Inference:** Avoid group chat when a simple fixed pipeline, deterministic hierarchy, or low-latency execution is the main requirement. (SRC-242 L235–240)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** Builder and manager APIs are capture-time SDK names. (SRC-242 L245–261)
- The source says conversation flow can become too complex with many agents and suggests three or fewer for easier control. (SRC-242 L240)

## Relation to other sources

- [[src-231-understand-agent-orchestration]] defines group chat as a shared conversation managed by a chat manager. (SRC-231 L251; SRC-242 L218–265)
- [[src-244-magentic-orchestration]] is a related but more manager-driven pattern for complex open-ended planning and delegation. (SRC-244 L218–245; SRC-242 L218–240)
- [[src-180-orchestrate-multi-agent-solution-microsoft-agent-framework-episode-14]] emphasizes that group chat agents share the same central conversation context. (SRC-180 L187–240)

## Connections

- [[group-chat-orchestration]] — the page's core pattern. (SRC-242 L218–265)
- [[human-in-the-loop-approval]] — human input can be part of the manager's control flow. (SRC-242 L218–226, L256)
- [[multi-agent-orchestration]] — the pattern coordinates multiple agents in a shared conversation. (SRC-242 L218–240)
- [[orchestration-patterns-compared]] — the source gives use and avoid criteria. (SRC-242 L223–240)
- *Module units:* [[src-133-introduction-orchestrate-multi-agent-solution-microsoft-agent-framework|1 Introduction]] · [[src-237-understand-microsoft-agent-framework|2 Understand the Microsoft Agent Framework]] · [[src-231-understand-agent-orchestration|3 Understand Agent Orchestration]] · [[src-241-concurrent-orchestration|4 Use Concurrent Orchestration]] · [[src-245-sequential-orchestration|5 Use Sequential Orchestration]] · [[src-243-handoff-orchestration|7 Use Handoff Orchestration]] · [[src-244-magentic-orchestration|8 Use Magentic Orchestration]] · [[src-69-exercise-develop-multi-agent-solution|9 Exercise - Develop a multi-agent solution]] · [[src-143-knowledge-check-orchestrate-multi-agent-solution-microsoft-agent-framework|10 Knowledge check]] · [[src-199-summary-orchestrate-multi-agent-solution-microsoft-agent-framework|11 Summary]] · [[src-180-orchestrate-multi-agent-solution-microsoft-agent-framework-episode-14|episode 14]]

## Open questions

- The source does not provide concrete code for a custom `GroupChatManager`. (SRC-242 L250–261)

## Sources

- SRC-242 — raw file: [[242-Use Group Chat Orchestration - Training - Microsoft Learn]]
