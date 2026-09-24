---
title: "Generate responses with the Responses API in the Foundry SDK"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains the Responses API for stateful, multi-turn Foundry chat apps, including response IDs, parameters, streaming and async use."
area: generative-apps
source_ids: [SRC-99]
objectives: [G05, G06, G13]
tags: [responses-api, conversation-state, streaming, async]
aliases: ["SRC-99"]
source_kind: learn-unit
module: "Develop a generative AI chat app with Microsoft Foundry"
learning_path: "Develop generative AI apps in Azure"
unit: "4 of 8"
presenters: []
raw_file: "99-Generate responses with the Responses API in the Foundry SDK - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/foundry-sdk/04-responses-api"
ingest_depth: full
---
# Generate responses with the Responses API in the Foundry SDK

*learn-unit · Develop a generative AI chat app with Microsoft Foundry · unit 4 of 8 · SRC-99*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-99 |
| Raw file | 99-Generate responses with the Responses API in the Foundry SDK - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop generative AI apps in Azure |
| Module | Develop a generative AI chat app with Microsoft Foundry |
| Unit / episode | 4 of 8 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/foundry-sdk/04-responses-api |
| Teaching content | L211–305 of 335 |
| Content length | ~865 words |
| Capture quality | High; code blocks are placeholders in the capture. |
| Ingest depth | full |

## TL;DR

The source presents the Responses API as a unified, stateful approach to multi-turn response generation. (SRC-99 L217–225) It covers `responses.create()`, response fields, instructions, generation parameters, direct-model support, manual and automatic conversation handling, context-window costs, streaming and asynchronous calls. (SRC-99 L226–305)

## Key claims

- The Responses API combines capabilities from ChatCompletions and Assistants in a unified experience. (SRC-99 L217)
- It provides stateful, multi-turn response generation for conversational AI apps. (SRC-99 L217)
- It can be accessed through an OpenAI-compatible client using either the Foundry SDK or OpenAI SDK. (SRC-99 L217)
- Advantages over traditional chat completions include stateful conversations, unified patterns, Foundry direct-model support and simple OpenAI-compatible integration. (SRC-99 L219–223)
- The source says the Responses API is the recommended approach for generating AI responses in Microsoft Foundry applications. (SRC-99 L224–225)
- A response object includes `output_text`, `id`, `status`, `usage` and `model`. (SRC-99 L231–237)
- The `previous_response_id` parameter links responses together across API calls. (SRC-99 L279–280)
- Keeping conversation history can increase token usage because instructions, prompt, history, tools, tool outputs and retrieved memory may be sent together on every request. (SRC-99 L281–288)

## How it works

A simple call uses `responses.create()` with an `input` string, and the model generates a response from that input. (SRC-99 L226–230) Instructions can be supplied separately to guide model behavior, and parameters such as `temperature`, `max_output_tokens` and `top_p` shape generation. (SRC-99 L241–251)

For multi-turn chat, the API can ground a new input in the previous model response, or the developer can manually build message history when they need control over context inclusion, pruning, storage or restoration. (SRC-99 L256–274) The source warns that the SDK manages state but does not automatically make token use cheaper. (SRC-99 L279–288)

## Code and API patterns

- `responses.create()` is the method named for generating responses. (SRC-99 L226–230)
- Use `input` for the prompt text. (SRC-99 L230)
- Use `instructions` as the system-prompt-like guidance channel. (SRC-99 L241–242)
- Use `temperature`, `max_output_tokens` and `top_p` to control generation. (SRC-99 L245–251)
- Use `previous_response_id` to link responses for conversation context. (SRC-99 L279–280)
- Use streaming for long responses so output can appear incrementally. (SRC-99 L289–297)
- Use `AsyncOpenAI` and `await` for non-blocking calls; async streaming follows the same pattern. (SRC-99 L298–304)

## Key terms

- **Responses API:** A stateful, multi-turn API for response generation. (SRC-99 L217–225)
- **`output_text`:** The generated text response field. (SRC-99 L231–233)
- **`id`:** The unique response identifier. (SRC-99 L233–234)
- **`previous_response_id`:** The parameter used to link responses across API calls. (SRC-99 L279–280)
- **Streaming:** Incremental output delivery for long responses. (SRC-99 L291–295)
- **Async usage:** Non-blocking API calls using `AsyncOpenAI` and `await`. (SRC-99 L298–304)

## Decision boundaries and exam cues

- Use Responses for most new Microsoft Foundry response-generation work. (SRC-99 L224–225)
- Use manual conversation chaining when context selection, pruning, persistence or restoration must be customized. (SRC-99 L267–274)
- Use streaming when response latency would make the app feel frozen. (SRC-99 L289–295)
- Use async clients for long-running requests or concurrent request handling. (SRC-99 L298–304)
- **Inference:** If a scenario needs stateful multi-turn chat with Foundry direct models, Responses is favored over ChatCompletions. (SRC-99 L217–225; SRC-98 L222–233)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source says Responses replaces older ChatCompletions for most scenarios, while the ChatCompletions page says ChatCompletions remains useful for maintenance or compatibility. (SRC-99 L224–225; SRC-98 L217)
- **Stale-risk:** The source names Foundry direct models such as Microsoft Phi and DeepSeek as examples of direct models. (SRC-99 L252–254)
- The capture does not preserve the actual Python code snippets after the `Copy` markers. (SRC-99 L226–248)

## Relation to other sources

- [[src-18-choose-endpoint-sdk]] says Responses is recommended for most new development. (SRC-18 L221)
- [[src-98-generate-responses-chatcompletions-api]] contrasts Responses with the older stateless message-list approach. (SRC-98 L217–233)
- [[src-42-develop-generative-ai-chat-app-microsoft-foundry-episode-3]] demonstrates `responses.create`, response IDs and async variants. (SRC-42 L757–992)

## Connections

- [[responses-api]] — the page is the core source for this API. (SRC-99 L217–225)
- [[conversation-state]] — the source explains response linking and history. (SRC-99 L256–288)
- [[openai-sdk]] — Responses is accessed through an OpenAI-compatible client. (SRC-99 L217)
- [[foundry-sdk]] — Responses can be used through the Foundry SDK. (SRC-99 L217; SRC-99 L305)
- [[generation-parameters]] — temperature, max output tokens and top-p are listed. (SRC-99 L245–251)
- [[chat-completions-api]] — the source explicitly contrasts and replaces ChatCompletions for most scenarios. (SRC-99 L217–225)

## Open questions

- The source does not show the omitted Python examples, so exact syntax beyond method and parameter names must be verified elsewhere. (SRC-99 L226–304)

## Sources

- SRC-99 — raw file: [[99-Generate responses with the Responses API in the Foundry SDK - Training - Microsoft Learn]]
