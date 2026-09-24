---
title: "Chat Completions API"
type: entity
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Established OpenAI-compatible message-list API useful for maintenance and compatibility, with conversation state managed by app code."
area: generative-apps
source_ids: [SRC-18, SRC-98, SRC-99, SRC-46]
objectives: [G05]
objective_gaps: []
tags: ["api"]
aliases: ["ChatCompletions API", "chat.completions.create", "OpenAI ChatCompletions API", "chat completions"]
---

# Chat Completions API

## Summary

The Chat Completions API is an established OpenAI-compatible chat API that uses JSON message objects and remains useful for code maintenance or cross-platform compatibility, but the corpus recommends Responses for new Foundry development. (SRC-98 L217; SRC-18 L221)

## What it is

Chat Completions sends prompts as collections of message objects in JSON format. (SRC-98 L219)

Unlike the Responses API, it does not provide stateful response tracking, so the application must manually track previous prompts and responses. (SRC-98 L223)

## What the sources say

- SRC-18 says the OpenAI client API supports two chat APIs: ChatCompletions and Responses. (SRC-18 L221)
- SRC-18 says Responses is recommended for most new development projects while ChatCompletions is well-established and compatible across many generative AI models and platforms. (SRC-18 L221)
- SRC-98 says ChatCompletions is useful for code maintenance or cross-platform compatibility. (SRC-98 L217)
- SRC-98 says each new user prompt and completion is added to the conversation, and the entire history is submitted each turn. (SRC-98 L232)
- SRC-99 says Responses replaces older ChatCompletions for most scenarios in Microsoft Foundry applications. (SRC-99 L225)
- SRC-46 says vision prompts can use Responses API and that, for models without Responses support, Chat Completions is another option. (SRC-46 L215–223)

## Capabilities and components

- **Messages:** JSON message objects encapsulate prompts. (SRC-98 L219)
- **Manual history:** application code stores user and assistant turns when context is needed. (SRC-98 L223)
- **Full-history resend:** the described loop submits the entire conversation history on each turn. (SRC-98 L232)
- **Ecosystem compatibility:** the source calls it well-established across the generative AI model ecosystem. (SRC-98 L233)
- **Vision fallback:** when a selected vision model does not support Responses, the corpus points to Chat Completions as another image-prompt API option. (SRC-46 L215–223)

## How to use it

Use Chat Completions when an existing application already uses the message-list pattern, when maintenance cost matters, or when cross-platform compatibility is a stated requirement. (SRC-98 L217)

To retain context, maintain a conversation list in the application, append each new prompt and completion, and submit the list on each turn. (SRC-98 L223–232)

## Decision boundaries

### Chat Completions API vs Responses API

| Decision detail | Chat Completions API | Responses API |
|---|---|---|
| Best fit from the corpus | Maintenance and cross-platform compatibility. (SRC-98 L217) | New Foundry response-generation development. (SRC-18 L221; SRC-99 L225) |
| Request shape | Collections of JSON message objects. (SRC-98 L219) | `responses.create()` with `input`; response object has `output_text`, `id`, `status`, `usage` and `model`. (SRC-99 L227–237) |
| Conversation state | No stateful response tracking; manually track prompts and responses. (SRC-98 L223) | `previous_response_id` links responses across calls. (SRC-99 L279–280) |
| Token/context implication | The described loop submits the entire conversation history each turn. (SRC-98 L232) | State management still sends active context, and history can increase token usage. (SRC-99 L281–288) |
| Platform coverage | Well-established in the generative AI model ecosystem. (SRC-98 L233) | Supports Azure OpenAI models and Foundry direct models through the described Foundry/AzureOpenAI path. (SRC-99 L253–254) |

**Inference:** If a question asks for the API that requires the developer to keep and resend the message list, select Chat Completions; if it asks for the recommended stateful Foundry API with response IDs, select Responses. (SRC-98 L223–232; SRC-99 L225; SRC-99 L279–280)

## Naming and currency

The corpus writes both `ChatCompletions` and `Chat Completions`; this page uses Chat Completions for readability and keeps aliases for the compact form. (SRC-18 L221; SRC-98 L217)

**Stale-risk:** The corpus's API preference is captured at source time; current SDK names or support details should be verified before implementing production code. (SRC-18 L221; SRC-99 L225)

## Appearances in the corpus

- Chat app API selection and manual state tracking. (SRC-98 L217–233)
- General endpoint/API decision guidance. (SRC-18 L221)
- Responses API contrast. (SRC-99 L217–225)
- Vision-enabled chat fallback for unsupported Responses models. (SRC-46 L215–223)

## Connections

- [[responses-api]] — the replacement/default for most new Foundry response-generation scenarios. (SRC-99 L225)
- [[conversation-state]] — manual history tracking is the main state lesson. (SRC-98 L223–232)
- [[openai-sdk]] — the OpenAI client API surface that includes Chat Completions. (SRC-18 L221; SRC-18 L282–285)
- [[vision-enabled-chat]] — one source uses Chat Completions as an alternative when Responses is unsupported. (SRC-46 L215–223)
- *Also linked from:* [[azure-openai]] · [[decision-boundaries]] · [[endpoints-and-sdk-choice]] · [[generative-ai-fundamentals]] · [[model-playgrounds]] · [[overview]] · [[prompt-engineering]]

## Sources

- SRC-18 — [[src-18-choose-endpoint-sdk]] — API selection summary.
- SRC-98 — [[src-98-generate-responses-chatcompletions-api]] — core Chat Completions behavior.
- SRC-99 — [[src-99-generate-responses-responses-api-foundry-sdk]] — Responses contrast.
- SRC-46 — [[src-46-develop-vision-based-chat-app]] — vision fallback mention.
