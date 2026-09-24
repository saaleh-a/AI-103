---
title: "Generate responses with the ChatCompletions API"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains ChatCompletions as a widely supported, stateless message-list API useful for compatibility and existing code."
area: generative-apps
source_ids: [SRC-98]
objectives: [G05]
tags: [chat-completions, conversation-state, openai-sdk]
aliases: ["SRC-98"]
source_kind: learn-unit
module: "Develop a generative AI chat app with Microsoft Foundry"
learning_path: "Develop generative AI apps in Azure"
unit: "5 of 8"
presenters: []
raw_file: "98-Generate responses with the ChatCompletions API - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/foundry-sdk/05-openai-api"
ingest_depth: full
---
# Generate responses with the ChatCompletions API

*learn-unit · Develop a generative AI chat app with Microsoft Foundry · unit 5 of 8 · SRC-98*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-98 |
| Raw file | 98-Generate responses with the ChatCompletions API - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop generative AI apps in Azure |
| Module | Develop a generative AI chat app with Microsoft Foundry |
| Unit / episode | 5 of 8 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/foundry-sdk/05-openai-api |
| Teaching content | L211–233 of 263 |
| Content length | ~201 words |
| Capture quality | High; code blocks are placeholders in the capture. |
| Ingest depth | full |

## TL;DR

The source positions ChatCompletions as a common API across generative AI models and platforms. (SRC-98 L217) It is no longer the preferred API for new Foundry development, but remains useful for maintenance and cross-platform compatibility. (SRC-98 L217)

## Key claims

- The ChatCompletions API is commonly used across generative AI models and platforms. (SRC-98 L217)
- The Responses API is recommended for new project development. (SRC-98 L217)
- ChatCompletions can still be useful for code maintenance or cross-platform compatibility. (SRC-98 L217)
- ChatCompletions uses collections of JSON message objects to encapsulate prompts. (SRC-98 L218–219)
- ChatCompletions does not provide stateful response tracking. (SRC-98 L222–223)
- To retain conversation context, developers must manually track previous prompts and responses. (SRC-98 L222–225)
- In a loop, each new prompt and completion is added to the conversation, and the whole conversation history is submitted each turn. (SRC-98 L226–232)

## How it works

The API works by sending a list of message objects rather than a single stateful response chain. (SRC-98 L218–223) For a chat loop, the app appends each new user prompt and model completion to the conversation list and resubmits the full history on the next turn. (SRC-98 L226–232)

## Code and API patterns

- The source names JSON message objects as the prompt structure. (SRC-98 L218–219)
- The message-list pattern is maintained by application code. (SRC-98 L222–232)

## Key terms

- **ChatCompletions API:** A widely used OpenAI-compatible chat API. (SRC-98 L217)
- **Message objects:** JSON objects used by the API to represent prompt content. (SRC-98 L218–219)
- **Conversation history:** The accumulated prompts and completions that the app resubmits to preserve context. (SRC-98 L222–232)

## Decision boundaries and exam cues

- Use ChatCompletions when maintaining existing code or when cross-platform compatibility matters. (SRC-98 L217)
- Prefer Responses for new Foundry projects when no compatibility constraint pushes toward ChatCompletions. (SRC-98 L217; SRC-99 L224–225)
- **Inference:** If a scenario emphasizes manual tracking of the full message history, that points to ChatCompletions rather than Responses. (SRC-98 L222–232; SRC-99 L279–280)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source explicitly subordinates ChatCompletions to Responses for new development, but preserves its value for maintenance and compatibility. (SRC-98 L217)
- The actual Python code blocks are not captured after the `Copy` markers. (SRC-98 L218–227)

## Relation to other sources

- [[src-99-generate-responses-responses-api-foundry-sdk]] explains the recommended stateful alternative. (SRC-99 L217–225)
- [[src-18-choose-endpoint-sdk]] introduces the two chat APIs and says Responses is recommended for most new projects. (SRC-18 L221)
- [[src-42-develop-generative-ai-chat-app-microsoft-foundry-episode-3]] explains why ChatCompletions requires the developer to feed history back each request. (SRC-42 L221–283)

## Connections

- [[chat-completions-api]] — this is the module's source page for ChatCompletions. (SRC-98 L217–233)
- [[conversation-state]] — the source explains manual state tracking. (SRC-98 L222–232)
- [[responses-api]] — the source uses Responses as the recommended contrast. (SRC-98 L217)
- [[openai-sdk]] — ChatCompletions is one of the OpenAI-compatible API surfaces discussed in the module. (SRC-18 L301–305)
- *Module units:* [[src-120-introduction-develop-generative-ai-chat-app-microsoft-foundry|1 Introduction]] · [[src-90-explore-model-playground|2 Explore with the model playground]] · [[src-18-choose-endpoint-sdk|3 Choose an endpoint and SDK]] · [[src-99-generate-responses-responses-api-foundry-sdk|4 Generate responses with the Responses API in the Foundry SDK]] · [[src-62-exercise-create-generative-ai-chat-app|6 Exercise - Create a generative AI chat app]] · [[src-148-knowledge-check-develop-generative-ai-chat-app-microsoft-foundry|7 Knowledge check]] · [[src-214-summary-develop-generative-ai-chat-app-microsoft-foundry|8 Summary]] · [[src-42-develop-generative-ai-chat-app-microsoft-foundry-episode-3|episode 3]]

## Open questions

- The capture does not show the concrete message-object JSON or Python loop. (SRC-98 L218–227)

## Sources

- SRC-98 — raw file: [[98-Generate responses with the ChatCompletions API - Training - Microsoft Learn]]
