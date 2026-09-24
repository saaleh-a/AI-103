---
title: "Conversation state"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "How chat and agent apps preserve context across turns: message lists, response IDs, manual history and agent session abstractions."
area: generative-apps
source_ids: [SRC-98, SRC-99, SRC-237, SRC-234]
objectives: [G07, G08]
objective_gaps: []
tags: []
aliases: ["conversation history", "multi-turn conversation", "stateful response tracking", "AgentSession", "service-side chat history"]
---

# Conversation state

## Summary

Conversation state is the context a chat app or agent carries across turns; in this corpus, it appears as manual message history for Chat Completions, response chaining with `previous_response_id` for Responses, and session/history abstractions in agent frameworks. (SRC-98 L223–232; SRC-99 L279–288; SRC-237 L230; SRC-234 L233)

## The problem it solves

A single model call only sees the active context sent with that call. For a conversation, the system must decide which previous instructions, user messages, assistant responses, tool schemas, tool outputs and retrieved documents should be present in that active context window. (SRC-99 L281–288)

## Mental model

Think of conversation state as the app's memory budget for the next request. **Synthesis:** Chat Completions makes the app carry the message list; Responses can link turns by response ID; agent frameworks can wrap history in sessions or service-side history. (SRC-98 L223–232; SRC-99 L279–280; SRC-237 L230; SRC-234 L233)

## What the sources say

- SRC-98 says ChatCompletions does not provide stateful response tracking, so developers manually track previous prompts and responses. (SRC-98 L223)
- SRC-98 says each new user prompt and completion is added to the conversation and the entire history is submitted each turn. (SRC-98 L232)
- SRC-99 says Responses is stateful and multi-turn. (SRC-99 L217)
- SRC-99 says `previous_response_id` links responses and maintains context across API calls. (SRC-99 L279–280)
- SRC-99 says manual conversation chaining is useful when selecting context, pruning, storing or restoring history. (SRC-99 L267–274)
- SRC-99 warns that state does not make token use cheaper; the active context can include instructions, prompt, history, tool schemas, tool outputs and retrieved memory or documents. (SRC-99 L281–288)
- SRC-237 says `AgentSession` lets agents maintain conversation history across multiple interactions using structured roles. (SRC-237 L230)
- SRC-234 says Foundry Agent Service supports service-side chat history where an agent session persists across turns automatically, so developers do not manage state themselves. (SRC-234 L233)

## How it works in Azure

For Chat Completions, the application is responsible for assembling the message list each turn. (SRC-98 L223–232)

For Responses, a response object has an `id`, and a later request can use `previous_response_id` to connect the new input to prior context. (SRC-99 L233–234; SRC-99 L279–280)

For Microsoft Agent Framework and Foundry Agent Service, the corpus names `AgentSession` and service-side chat history as higher-level state mechanisms. (SRC-237 L230; SRC-234 L233)

## Code and configuration

- Chat Completions: maintain a conversation collection in app code and resubmit it each turn. (SRC-98 L223–232)
- Responses: store or pass the prior response ID when linking turns. (SRC-99 L276–280)
- Responses manual mode: build message history yourself when you need pruning or database persistence. (SRC-99 L267–274)
- Agent sessions: rely on `AgentSession` or service-side history when the framework/provider should preserve context. (SRC-237 L230; SRC-234 L233)

## Decision boundaries

| **Synthesis:** State approach | Use when | Closest confusion |
|---|---|---|
| Manual message history | Existing Chat Completions code or compatibility requires message-list control. (SRC-98 L217; SRC-98 L223–232) | Do not assume Chat Completions tracks response state for you. (SRC-98 L223) |
| `previous_response_id` | New Foundry Responses API chat needs stateful turn linking. (SRC-99 L217; SRC-99 L279–280) | Do not assume this reduces token cost automatically. (SRC-99 L281–288) |
| Manual Responses chaining | The app must choose, prune, store or restore exact context. (SRC-99 L267–274) | Do not rely on automatic state when governance or persistence needs exact control. **Inference:** (SRC-99 L267–288) |
| Agent session/service history | The system is an agent framework or hosted agent rather than a plain chat loop. (SRC-237 L230; SRC-234 L233) | Do not treat every state abstraction as the same API object. **Inference:** (SRC-237 L230; SRC-234 L233) |

## Failure modes and misconceptions

- Assuming a model remembers prior turns without sending or linking context is a failure of architecture. **Inference:** (SRC-98 L223–232; SRC-99 L279–288)
- Assuming Responses state is free is wrong; SRC-99 says history and other context are concatenated, tokenized and sent to the model on every request. (SRC-99 L281–288)
- Keeping too much history can increase token use; pruning is named as a reason to manage conversations manually. (SRC-99 L267–274; SRC-99 L281–288)

## Solution Engineering transfer

**Inference:** A customer signal such as "the bot forgets what I just said" is a state-management requirement, not necessarily a model-quality problem. (SRC-98 L223–232; SRC-99 L279–288)

**Inference:** Discovery question: "Do you need exact retention, pruning and audit of conversation history, or just conversational continuity during the session?" (SRC-99 L267–288)

## Connections

- [[responses-api]] — stateful response IDs are the main new Foundry state mechanism. (SRC-99 L279–280)
- [[chat-completions-api]] — manual message-list tracking is the contrast. (SRC-98 L223–232)
- [[microsoft-agent-framework]] — `AgentSession` stores conversation state in framework code. (SRC-237 L230)
- [[foundry-agent-service]] — service-side chat history persists sessions across turns. (SRC-234 L233)
- [[retrieval-augmented-generation]] — retrieved memory or documents can be part of the active context window. (SRC-99 L281–288)
- *Also linked from:* [[ai-agents]] · [[overview]]

## Sources

- SRC-98 — [[src-98-generate-responses-chatcompletions-api]] — manual Chat Completions history.
- SRC-99 — [[src-99-generate-responses-responses-api-foundry-sdk]] — response IDs, manual chaining and token context.
- SRC-237 — [[src-237-understand-microsoft-agent-framework]] — `AgentSession` history.
- SRC-234 — [[src-234-understand-microsoft-agent-framework-ai-agents]] — service-side chat history.

## Open questions

The corpus uses response IDs, sessions and service-side history across different SDKs, but it does not give a single unified lifecycle model for retention, storage duration or deletion across all services. (SRC-99 L276–288; SRC-237 L230; SRC-234 L233)

