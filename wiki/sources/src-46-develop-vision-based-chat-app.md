---
title: "Develop a vision-based chat app"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains vision-based chat app prompts: connect to a deployed endpoint and send multi-part text-plus-image messages."
area: vision
source_ids: [SRC-46]
objectives: [G06, V06, V08]
tags: [vision-enabled-chat, responses-api, chat-completions-api, multimodal-models]
aliases: ["SRC-46"]
source_kind: learn-unit
module: "Develop a vision-enabled generative AI application"
learning_path: null
unit: "3 of 6"
presenters: []
raw_file: "46-Develop a vision-based chat app - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/develop-generative-ai-vision-apps/3-develop-visual-chat-app"
ingest_depth: full
---

# Develop a vision-based chat app

*learn-unit · Develop a vision-enabled generative AI application · unit 3 of 6 · SRC-46*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-46 |
| Raw file | `46-Develop a vision-based chat app - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | null |
| Module | Develop a vision-enabled generative AI application |
| Unit / episode | 3 of 6 |
| Presenter(s) | none |
| URL | https://learn.microsoft.com/en-gb/training/modules/develop-generative-ai-vision-apps/3-develop-visual-chat-app |
| Teaching content | L207–223 of 253 |
| Content length | ~220 words |
| Capture quality | High; Learn capture references code examples but omits the actual snippets. |
| Ingest depth | full |

## TL;DR

A vision-based chat app uses the same basic techniques as a text-based chat app: connect to the endpoint where the model is deployed, submit message-based prompts, and process responses. (SRC-46 L213) The key difference is that the user message is multi-part and contains both a text content item and an image content item. (SRC-46 L214) The source says the Responses API can include a web image URL or a local image encoded as Base64 in a data URL, while Chat Completions is used when the Azure OpenAI endpoint targets models that do not support the Responses API. (SRC-46 L215–223)

## Key claims

- A client app can engage in vision-based chats with a multimodal model using the same basic techniques as text-based chats. (SRC-46 L213)
- The app needs a connection to the endpoint where the model is deployed. (SRC-46 L213)
- The app submits prompts consisting of messages to the model and processes the responses. (SRC-46 L213)
- Vision-based chat prompts use multi-part user messages containing both text content and image content. (SRC-46 L214)
- With the Responses API, an image can be supplied as a web-based image-file URL or as local image data encoded in Base64 and placed in a `data:image/jpeg;base64,{image_data}` URL. (SRC-46 L215–216)
- When using an Azure OpenAI endpoint for models that do not support the Responses API, the source points to the Chat Completions API. (SRC-46 L220–223)

## How it works

The source reduces the app pattern to endpoint connection, prompt submission, and response processing. (SRC-46 L213) For visual input, the prompt changes from a text-only user message to a multi-part user message with one text content item and one image content item. (SRC-46 L214) The image part can reference a web-based file URL or carry local file bytes encoded as Base64 inside a data URL whose media type should match the image format. (SRC-46 L216)

## Code and API patterns

The Responses API pattern accepts an image prompt by specifying a web image URL or a local image encoded in Base64 as a data URL. (SRC-46 L215–217)

```text
data:image/jpeg;base64,{image_data}
```

For Azure OpenAI endpoint calls to models that do not support the Responses API, the source identifies the Chat Completions API as the alternative. (SRC-46 L220–223) The captured Learn page shows `Python` and `Copy` placeholders but does not include the actual code snippets in the raw text. (SRC-46 L217–223)

## Key terms

- **Vision-based chat** — chat with a multimodal model where prompts include messages that can contain image content as well as text content. (SRC-46 L213–214)
- **Multi-part user message** — a user message containing both a text content item and an image content item. (SRC-46 L214)
- **Data URL** — the source's format for sending Base64 local image data, such as `data:image/jpeg;base64,{image_data}`. (SRC-46 L216)
- **Responses API** — the API the source uses for submitting image-based prompts when available. (SRC-46 L215–217)
- **Chat Completions API** — the API the source uses with Azure OpenAI endpoint models that do not support the Responses API. (SRC-46 L220–223)

## Decision boundaries and exam cues

- **Inference:** If the model supports the Responses API, the source-backed image prompt route is Responses API with either an image URL or Base64 data URL. (SRC-46 L215–217)
- **Inference:** If a scenario says the model on an Azure OpenAI endpoint does not support Responses API, use Chat Completions API instead. (SRC-46 L220–223)
- **Inference:** If a question contrasts sending separate prompts with sending a single multi-part message, the source supports the single multi-part user message with text and image content. (SRC-46 L214)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The raw capture references Python examples but does not preserve their code, so implementation details beyond the described URL/Base64 pattern are absent from this Learn unit. (SRC-46 L217–223)
- **Stale-risk:** API support can change by model and endpoint; this source's boundary is Responses API when supported and Chat Completions for Azure OpenAI endpoint models that do not support it. (SRC-46 L215–223)

## Relation to other sources

- SRC-248 establishes the prerequisite that the deployed model must be multimodal before this app pattern can handle image prompts. (SRC-248 L213)
- SRC-173 assesses the same key facts: multimodal models, multi-part text-plus-image prompts, and image input by URL or binary data. (SRC-173 L209–222)
- SRC-47 supplies episode-level walkthrough details for both APIs, endpoint configuration, OpenAI client use, remote image URLs, and Base64-uploaded local images. (SRC-47 L87–169; SRC-47 L230–399)

## Connections

- [[vision-enabled-chat]] — this is the source's main application pattern. (SRC-46 L213–214)
- [[responses-api]] — the source describes using Responses API for image prompts. (SRC-46 L215–217)
- [[chat-completions-api]] — the source gives Chat Completions as the fallback for models without Responses API support. (SRC-46 L220–223)
- [[endpoints-and-sdk-choice]] — the source distinguishes endpoint connection and API choice. (SRC-46 L213; SRC-46 L220–223)
- [[conversation-state]] — the source says prompts consist of messages, but it does not cover long-running state. (SRC-46 L213)
- *Module units:* [[src-131-introduction-develop-vision-enabled-generative-ai-application|1 Introduction]] · [[src-248-vision-capable-model-microsoft-foundry-portal|2 Use a vision-capable model in the Microsoft Foundry portal]] · [[src-71-exercise-develop-vision-enabled-chat-app|4 Exercise - Develop a vision-enabled chat app]] · [[src-173-module-assessment-develop-vision-enabled-generative-ai-application|5 Module assessment]] · [[src-210-summary-develop-vision-enabled-generative-ai-application|6 Summary]] · [[src-47-develop-vision-enabled-generative-ai-application-episode-22|episode 22]]

## Open questions

- What exact Python request shape did the omitted Learn snippets show for Responses API and Chat Completions?
- Which current deployed models support the Responses API for image prompts?

## Sources

- SRC-46 — raw file: [[46-Develop a vision-based chat app - Training - Microsoft Learn]]
