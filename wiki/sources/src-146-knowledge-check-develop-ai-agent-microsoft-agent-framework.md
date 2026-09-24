---
title: "Knowledge check — Develop an AI agent with Microsoft Agent Framework"
type: source
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Knowledge-check capture with options for agent creation, AgentThread state management, and custom-function tools; answer key is not shown."
area: agents
source_ids: [SRC-146]
objectives: []
tags: [knowledge-check, agentthread, chatagent, azureaiagentclient, custom-tools]
aliases: ["SRC-146"]
source_kind: learn-unit
module: "Develop an AI agent with Microsoft Agent Framework"
learning_path: "Develop AI agents on Azure"
unit: "6"
presenters: []
raw_file: "146-Knowledge check - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/develop-ai-agent-with-semantic-kernel/6-knowledge-check"
ingest_depth: full
---
# Knowledge check — Develop an AI agent with Microsoft Agent Framework

*learn-unit · Develop an AI agent with Microsoft Agent Framework · unit 6 · SRC-146*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-146 |
| Raw file | 146-Knowledge check - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Develop an AI agent with Microsoft Agent Framework |
| Unit / episode | 6 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/develop-ai-agent-with-semantic-kernel/6-knowledge-check |
| Teaching content | L8–23 of 37 |
| Content length | ~132 words |
| Capture quality | Medium; question 1's stem is missing from the capture, and no answer key is shown. |
| Ingest depth | full |

## TL;DR

This knowledge-check capture tests the creation order for a Microsoft Foundry agent, the component that manages conversation state and stores messages, and how to add custom functionality. (SRC-146 L10–22) The capture does not show checked answers and includes only the options for the first question, not its stem. (SRC-146 L10–12; SRC-146 L23)

## Key claims

- One option describes the agent creation sequence as creating an `AzureAIAgentClient`, defining a `ChatAgent` with instructions and tools, and creating an `AgentThread` for conversations. (SRC-146 L10–12)
- The second question asks which component manages conversation state and stores messages, with options `AgentThread`, `ChatAgent`, and `AzureAIAgentClient`. (SRC-146 L13–17)
- The third question asks how to add custom functionality to a Microsoft Foundry Agent in the Microsoft Agent Framework. (SRC-146 L18–22)
- One option for custom functionality is to create Python functions with proper type annotations and descriptions, then pass them to the `ChatAgent` `tools` parameter. (SRC-146 L19–22)
- The capture says all questions must be answered before checking work, so the answer key is not shown. (SRC-146 L23)

## How it works

The page is an assessment page, not a teaching explanation. It surfaces questions and options about client/agent/thread creation order, `AgentThread` versus `ChatAgent` versus `AzureAIAgentClient`, and custom-function approaches. (SRC-146 L10–22)

## Code and API patterns

The capture names `AzureAIAgentClient`, `ChatAgent`, and `AgentThread` as Microsoft Agent Framework components in the knowledge-check options. (SRC-146 L10–17) It also includes an option where Python custom functions are passed to the `ChatAgent` `tools` parameter. (SRC-146 L19–22)

## Key terms

- `AzureAIAgentClient` — listed as part of one candidate sequence for creating a Microsoft Foundry agent. (SRC-146 L10–12)
- `ChatAgent` — listed as an agent definition component with instructions and tools. (SRC-146 L10–12)
- `AgentThread` — listed as a conversation component and as an option for the component that manages state and stores messages. (SRC-146 L12–17)
- `tools` parameter — listed as the way to pass custom Python functions to `ChatAgent`. (SRC-146 L19–22)

## Decision boundaries and exam cues

- **Inference:** Do not confuse model deployment or portal-only setup with SDK construction; the options contrast portal deployment, `AgentThread` model definition, and `AzureAIAgentClient` plus `ChatAgent` plus `AgentThread`. (SRC-146 L10–12)
- **Inference:** For custom functionality, the source's plausible SDK option is Python functions with annotations and descriptions passed to `ChatAgent.tools`, not connection strings or model-architecture modification. (SRC-146 L19–22)
- **Inference:** Conversation-state questions in this module likely point to `AgentThread`, because the question pairs that component with state and stored messages. (SRC-146 L13–17)

## Assessment items

1. Question stem not shown in capture. Options: deploy a custom AI model before creating an agent definition in the Azure portal; initialize the agent by defining a model in the `AgentThread` constructor; create an `AzureAIAgentClient`, define a `ChatAgent` with instructions and tools, and create an `AgentThread` for conversations. Answer not shown in capture. (SRC-146 L10–12; SRC-146 L23)
2. Which component in the Microsoft Agent Framework manages conversation state and stores messages? Options: `AgentThread`; `ChatAgent`; `AzureAIAgentClient`. Answer not shown in capture. (SRC-146 L13–17; SRC-146 L23)
3. How do you add custom functionality to a Microsoft Foundry Agent in the Microsoft Agent Framework? Options: configure custom functions in the Azure portal and link them through connection strings; create Python functions with proper type annotations and descriptions, then pass them to the `ChatAgent` `tools` parameter; modify the AI model's architecture directly. Answer not shown in capture. (SRC-146 L18–23)

## Tensions, caveats and currency

- The capture is incomplete for question 1 because it contains options but not the question stem. (SRC-146 L10–12)
- The capture does not show correct answers because it stops before checking work. (SRC-146 L23)
- **Stale-risk:** Component names in assessment options can lag SDK renames. (SRC-146 L10–22)

## Relation to other sources

- SRC-34 explains sessions as conversation-state containers, which aligns with the `AgentThread` state-management assessment item. (SRC-34 L232–238; SRC-146 L13–17)
- SRC-4 explains annotated Python functions and tool registration, which aligns with the custom-function assessment item. (SRC-4 L226–230; SRC-146 L18–22)
- SRC-48 shows the same knowledge-check answers in the episode transcript for creation steps and thread state management. (SRC-48 L621–639; SRC-146 L10–17)

## Connections

- [[microsoft-agent-framework]] — component names and assessment scope.
- [[conversation-state]] — `AgentThread` assessment item.
- [[agent-tools]] — custom functionality assessment item.
- [[function-calling]] — Python functions passed as tools.
- *Module units:* [[src-124-introduction-develop-ai-agent-microsoft-agent-framework|1 Introduction]] · [[src-234-understand-microsoft-agent-framework-ai-agents|2 Understand Microsoft Agent Framework AI agents]] · [[src-34-create-azure-ai-agent-microsoft-agent-framework|3 Create an Azure AI agent with Microsoft Agent Framework]] · [[src-4-add-tools-azure-ai-agent|4 Add tools to Azure AI agent]] · [[src-72-exercise-develop-azure-ai-agent-microsoft-agent-framework-sdk|5 Exercise - Develop an Azure AI agent with the Microsoft Agent Framework SDK - Training - Microsoft L]] · [[src-195-summary-develop-ai-agent-microsoft-agent-framework|7 Summary]] · [[src-48-develop-ai-agent-microsoft-agent-framework-episode-13|episode 13]]

## Open questions

- What the missing first question stem said is not recoverable from this capture. (SRC-146 L10–12)

## Sources

- SRC-146 — raw file: [[146-Knowledge check - Training - Microsoft Learn]]
