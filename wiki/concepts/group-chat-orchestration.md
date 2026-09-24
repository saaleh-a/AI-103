---
title: "Group chat orchestration"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "A chat manager coordinates a shared multi-agent conversation and optional human participation."
area: orchestration
source_ids: [SRC-143, SRC-180, SRC-231, SRC-242, SRC-243, SRC-244]
objectives: [G10]
objective_gaps: []
tags: [group-chat-orchestration, chat-manager, human-in-the-loop]
aliases: ["group chat manager", "GroupChatBuilder", "GroupChatManager", "maker-checker loop"]
---

# Group chat orchestration

## Summary

Group chat orchestration models a collaborative conversation among multiple agents and optionally a human participant, with a central chat manager deciding who responds next and when user input is needed. (SRC-242 L220)

## The problem it solves

Some tasks need iterative dialogue rather than a fixed pipeline or a one-way handoff. The source names brainstorming, debate, consensus, cross-disciplinary problem solving, quality control, validation, and creator-reviewer content workflows as group chat scenarios. (SRC-242 L223–234)

## Mental model

**Inference:** Group chat is a managed meeting. Agents share a single conversation thread, the chat manager controls turns, and a human can guide or intervene. (SRC-242 L220–227)

**Inference:** The episode stresses the shared-context point: responses return to the same middle chat, so agents have access to the whole conversation rather than starting separate conversations that lose prior context. (SRC-180 L187–240)

## What the sources say

SRC-231 defines group chat as coordinating a shared conversation among agents and optionally a human, managed by a chat manager that chooses who speaks next; it is best for brainstorming, collaborative problem solving, and consensus. (SRC-231 L253)

SRC-242 says it supports free-flowing ideation, formal role-based workflows, approval steps, and human-in-the-loop setups; agents typically contribute to the conversation rather than directly changing running systems. (SRC-242 L221–227)

SRC-242 says to avoid it when simple delegation or linear pipelines are enough, speed requirements make discussion overhead impractical, deterministic hierarchy is needed, completion cannot be clearly determined, or many agents make flow hard to manage. (SRC-242 L235–240)

The knowledge check maps “brainstorming and collaborative problem solving among multiple agents” to group chat. (SRC-143 L14–17)

## How it works in Azure

In Microsoft Agent Framework, a group chat workflow is built with participants and a chat manager. The manager can be customized to filter or summarize results, choose the next agent, request user input, and terminate the conversation. (SRC-242 L245–255)

During each round, the manager checks `should_request_user_input`, checks `should_terminate`, filters results if ending, and selects the next agent if continuing. (SRC-242 L259–263)

## Code and configuration

The code shape in the corpus is: create an `AzureOpenAIChatClient`, define agents with `create_agent`, use `GroupChatBuilder().participants(...).build()`, call `run`, extract outputs with `get_outputs()`, and process messages with author names and content. (SRC-242 L246–249)

For custom management, extend `GroupChatManager` and override manager methods such as `should_request_user_input`, `should_terminate`, `filter_results`, and `select_next_agent`. (SRC-242 L250–263)

**Stale-risk:** `GroupChatBuilder`, `GroupChatManager`, and manager method names are SDK details captured in this Learn unit. (SRC-242 L245–261)

## Decision boundaries

**Inference:** Group chat versus handoff is decided by shared conversation. Handoff transfers control to one specialist at a time; group chat keeps an auditable shared thread managed by a chat manager. (SRC-243 L221–222; SRC-242 L220–227)

**Inference:** Group chat versus Magentic is decided by planning authority and task shape. Group chat is a managed discussion; Magentic adds a dedicated manager that maintains shared context, tracks progress, builds a task ledger, and adapts a plan for open-ended tasks. (SRC-242 L220–227; SRC-244 L218–221)


## Failure modes and misconceptions

Do not choose group chat just because several agents are involved. If a simple fixed pipeline or straightforward delegation is enough, the source says to avoid group chat. (SRC-242 L235)

Group chat can add discussion overhead; the source warns against it for real-time speed requirements and says flow becomes complex with many agents, suggesting three or fewer for easier control. (SRC-242 L236–240)

## Solution Engineering transfer

**Inference:** Customer signal: "we need specialists to debate, review each other, and keep a visible audit trail" points to group chat. "Route to the right owner and move on" points to handoff instead. (SRC-242 L223–226; SRC-243 L224–228)

**Inference:** Discovery question: "Who decides the next speaker, and what counts as done?" matters because manager completion uncertainty is an explicit avoid condition. (SRC-242 L237, L256–261)

## Connections

- [[multi-agent-orchestration]] — group chat is one supported Agent Framework pattern. (SRC-231 L253)
- [[handoff-orchestration]] — closest contrast: transfer control instead of shared discussion. (SRC-243 L221–222; SRC-242 L220–227)
- [[magentic-orchestration]] — closest contrast: manager-led planning and task ledger. (SRC-244 L218–221)
- [[human-in-the-loop-approval]] — human input may be requested by the chat manager. (SRC-242 L220–227, L256)
- [[orchestration-patterns-compared]] — side-by-side discrimination set for the five patterns.
- [[src-242-group-chat-orchestration]] — source page for this pattern.
- *Also linked from:* [[a2a-agent-implementation]] · [[agent-framework-workflows]] · [[concurrent-orchestration]] · [[overview]]

## Sources

- SRC-143 — [[src-143-knowledge-check-orchestrate-multi-agent-solution-microsoft-agent-framework]] — assessment cue for group chat.
- SRC-180 — [[src-180-orchestrate-multi-agent-solution-microsoft-agent-framework-episode-14]] — episode explanation of shared conversation context.
- SRC-231 — [[src-231-understand-agent-orchestration]] — overview definition of group chat orchestration.
- SRC-242 — [[src-242-group-chat-orchestration]] — primary Learn unit for use, avoid, manager, and SDK shape.
- SRC-243 — [[src-243-handoff-orchestration]] — closest contrast for one-agent-at-a-time transfer.
- SRC-244 — [[src-244-magentic-orchestration]] — closest contrast for manager-led planning.

## Open questions

- The corpus does not include a full concrete custom `GroupChatManager` code listing. (SRC-242 L250–261)
