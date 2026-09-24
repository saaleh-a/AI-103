---
title: "Understand the Microsoft Agent Framework"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Defines Microsoft Agent Framework as an open-source SDK for agents, orchestration, chat clients, tools, and sessions."
area: orchestration
source_ids: [SRC-237]
objectives: [G07, G10]
tags: [microsoft-agent-framework, agents, tools]
aliases: ["SRC-237"]
source_kind: learn-unit
module: "Orchestrate a multi-agent solution using the Microsoft Agent Framework"
learning_path: "Develop AI agents on Azure"
unit: "2 of 11"
presenters: []
raw_file: "237-Understand the Microsoft Agent Framework - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/orchestrate-semantic-kernel-multi-agent-solution/2-understand-agent-framework"
ingest_depth: full
---
# Understand the Microsoft Agent Framework

*learn-unit · Orchestrate a multi-agent solution using the Microsoft Agent Framework · unit 2 of 11 · SRC-237*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-237 |
| Raw file | `237-Understand the Microsoft Agent Framework - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Orchestrate a multi-agent solution using the Microsoft Agent Framework |
| Unit / episode | 2 of 11 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/orchestrate-semantic-kernel-multi-agent-solution/2-understand-agent-framework |
| Teaching content | L214–232 of 262 |
| Content length | ~461 words |
| Capture quality | Clean Learn capture; teaching content starts after format controls. |
| Ingest depth | full |

## TL;DR

This source defines Microsoft Agent Framework as an open-source SDK for integrating AI models into applications. (SRC-237 L218) It presents the framework as a way to build agents that operate independently or collaborate with other agents using agents, orchestration, chat clients, tools, and conversation management. (SRC-237 L218–232)

## Key claims

- Microsoft Agent Framework enables developers to integrate AI models into applications. (SRC-237 L218)
- The framework supports AI-powered agents that can work independently or collaborate on complex tasks. (SRC-237 L218–219)
- Agents process user inputs, make decisions, and execute tasks with large language models and traditional programming logic. (SRC-237 L221)
- Orchestration lets multiple agents collaborate through several patterns behind a unified construction and invocation interface. (SRC-237 L224)
- Chat clients abstract connections to providers such as Azure OpenAI, OpenAI, and Anthropic through `BaseChatClient`. (SRC-237 L226)
- Tools include custom functions and built-in services such as Code Interpreter, File Search, and Web Search. (SRC-237 L227)
- `AgentSession` maintains conversation history with structured roles: `USER`, `ASSISTANT`, `SYSTEM`, and `TOOL`. (SRC-237 L228)

## How it works

The framework supplies structured components for AI-driven workflows so agents can interact with users, APIs, and external services. (SRC-237 L221) Agents combine language models, tools, and conversation history to reason and respond to needs dynamically. (SRC-237 L223) The framework can integrate agents from Microsoft Foundry Agent Service and supports both multi-agent collaboration and human-agent interaction. (SRC-237 L231)

## Code and API patterns

- `BaseChatClient` provides a common provider abstraction. (SRC-237 L226)
- `AgentSession` maintains conversation history across interactions. (SRC-237 L228)
- Structured message roles are `USER`, `ASSISTANT`, `SYSTEM`, and `TOOL`. (SRC-237 L228)

## Key terms

- **Agents** — AI-driven entities that reason and execute tasks using language models, tools, and conversation history. (SRC-237 L223)
- **Agent orchestration** — multiple agents collaborating toward a common goal through supported patterns. (SRC-237 L224)
- **Chat clients** — common abstractions for connecting to AI service providers. (SRC-237 L226)
- **Tools** — custom functions or built-in services that extend what an agent can do. (SRC-237 L227)

## Decision boundaries and exam cues

- **Inference:** Choose Microsoft Agent Framework when a scenario asks for code-level agents, provider-agnostic chat clients, tools, sessions, or SDK-defined orchestration. (SRC-237 L218–232)
- **Inference:** Do not treat the framework as only a chatbot wrapper because the source explicitly includes tools, sessions, workflows, human-in-the-loop interaction, and multi-agent collaboration. (SRC-237 L221–232)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** Provider names and built-in tool names are capture-time examples. (SRC-237 L226–227)
- The source connects the SDK to Microsoft Foundry Agent Service, so the SDK can integrate managed agents rather than replacing them. (SRC-237 L231)

## Relation to other sources

- [[src-133-introduction-orchestrate-multi-agent-solution-microsoft-agent-framework]] explains why the module needs multi-agent collaboration before this source defines the framework. (SRC-133 L218–231; SRC-237 L218–232)
- [[src-231-understand-agent-orchestration]] expands orchestration into workflows, executors, edges, events, and pattern choices. (SRC-237 L224; SRC-231 L229–264)
- [[src-180-orchestrate-multi-agent-solution-microsoft-agent-framework-episode-14]] explains that Agent Framework can implement orchestration patterns in code outside Foundry workflows. (SRC-180 L31–45)

## Connections

- [[microsoft-agent-framework]] — the core entity defined by the source. (SRC-237 L218–232)
- [[ai-agents]] — agents are the central component. (SRC-237 L223)
- [[agent-tools]] — tools are a core feature. (SRC-237 L227)
- [[conversation-state]] — `AgentSession` preserves conversation history. (SRC-237 L228)
- [[multi-agent-orchestration]] — orchestration is a framework concept. (SRC-237 L224)
- *Module units:* [[src-133-introduction-orchestrate-multi-agent-solution-microsoft-agent-framework|1 Introduction]] · [[src-231-understand-agent-orchestration|3 Understand Agent Orchestration]] · [[src-241-concurrent-orchestration|4 Use Concurrent Orchestration]] · [[src-245-sequential-orchestration|5 Use Sequential Orchestration]] · [[src-242-group-chat-orchestration|6 Use Group Chat Orchestration]] · [[src-243-handoff-orchestration|7 Use Handoff Orchestration]] · [[src-244-magentic-orchestration|8 Use Magentic Orchestration]] · [[src-69-exercise-develop-multi-agent-solution|9 Exercise - Develop a multi-agent solution]] · [[src-143-knowledge-check-orchestrate-multi-agent-solution-microsoft-agent-framework|10 Knowledge check]] · [[src-199-summary-orchestrate-multi-agent-solution-microsoft-agent-framework|11 Summary]] · [[src-180-orchestrate-multi-agent-solution-microsoft-agent-framework-episode-14|episode 14]]

## Open questions

- The source names API objects but does not provide an end-to-end code sample. (SRC-237 L226–228)

## Sources

- SRC-237 — raw file: [[237-Understand the Microsoft Agent Framework - Training - Microsoft Learn]]
