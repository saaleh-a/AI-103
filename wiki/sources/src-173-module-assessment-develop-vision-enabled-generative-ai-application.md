---
title: "Module assessment — Develop a vision-enabled generative AI application"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Assesses model choice, multi-part image-analysis prompts, and image message formats for vision-enabled chat."
area: vision
source_ids: [SRC-173]
objectives: []
tags: [module-assessment, multimodal-models, vision-enabled-chat]
aliases: ["SRC-173"]
source_kind: learn-unit
module: "Develop a vision-enabled generative AI application"
learning_path: null
unit: "5 of 6"
presenters: []
raw_file: "173-Module assessment - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/develop-generative-ai-vision-apps/5-knowledge-check"
ingest_depth: full
---

# Module assessment — Develop a vision-enabled generative AI application

*learn-unit · Develop a vision-enabled generative AI application · unit 5 of 6 · SRC-173*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-173 |
| Raw file | `173-Module assessment - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | null |
| Module | Develop a vision-enabled generative AI application |
| Unit / episode | 5 of 6 |
| Presenter(s) | none |
| URL | https://learn.microsoft.com/en-gb/training/modules/develop-generative-ai-vision-apps/5-knowledge-check |
| Teaching content | L207–225 of 255 |
| Content length | ~150 words |
| Capture quality | High; assessment questions and options are captured, but checked answers are not shown. |
| Ingest depth | full |

## TL;DR

The assessment asks which model kind can respond to visual input and includes multimodal models as the correct-looking option among distractors. (SRC-173 L209–212) It asks how to submit an image-analysis prompt and includes a multi-part user message with text and image content as the correct-looking option. (SRC-173 L214–217) It asks how to include an image in a message and includes URL or binary data as the correct-looking option. (SRC-173 L219–222)

## Key claims

- The assessment tests model selection for visual input. (SRC-173 L209)
- The options for responding to visual input are only OpenAI GPT models, embedding models, and multimodal models. (SRC-173 L209–212)
- The assessment tests prompt construction for asking a model to analyze an image. (SRC-173 L214)
- One option states that the prompt contains a multi-part user message with both text content and image content. (SRC-173 L215–216)
- The assessment tests whether an image can be included as a URL or binary data. (SRC-173 L219–222)
- The capture does not show checked answers; it ends with the requirement to submit all answers before checking work. (SRC-173 L223–225)

## How it works

The source is assessment-only, so it encodes module takeaways as questions rather than teaching a procedure. (SRC-173 L209–225) The three assessed decisions align with the module's implementation chain: choose a multimodal model, send a single multi-part user message with text and image content, and include the image by URL or binary data. (SRC-173 L209–222)

## Code and API patterns

Not covered by this source.

## Key terms

- **Multimodal models** — the assessment option associated with responding to visual input. (SRC-173 L209–212)
- **Multi-part user message** — the assessment option for a prompt that asks a model to analyze an image by containing both text and image content. (SRC-173 L214–216)
- **URL or binary data** — the assessment option for including an image in a message. (SRC-173 L219–222)

## Decision boundaries and exam cues

- **Inference:** The distractor **Only OpenAI GPT models** is too narrow because the module teaches the broader category of multimodal models. (SRC-173 L209–212; SRC-248 L213–216)
- **Inference:** The distractor **Embedding models** is wrong for visual response generation because the assessed capability is responding to visual input, not representing data for similarity. (SRC-173 L209–212)
- **Inference:** The distractor that splits image and text into separate prompts conflicts with the module's multi-part user-message pattern. (SRC-173 L214–217; SRC-46 L214)
- **Inference:** The distractors that limit images to only URL or only binary data are too narrow because the source assesses both URL and binary data. (SRC-173 L219–222)

## Assessment items

1. Which kind of model can you use to respond to visual input? (SRC-173 L209)
   - Only OpenAI GPT models. (SRC-173 L210)
   - Embedding models. (SRC-173 L211)
   - Multimodal models. (SRC-173 L212)
   - Answer shown in capture: answer not shown in capture; the module content supports multimodal models. (SRC-248 L213)
2. How can you submit a prompt that asks a model to analyze an image? (SRC-173 L214)
   - Submit one prompt with an image-based message followed by another prompt with a text-based message. (SRC-173 L215)
   - Submit a prompt that contains a multi-part user message, containing both text content and image content. (SRC-173 L216)
   - Submit the image as the system message and the instruction or question as the user message. (SRC-173 L217)
   - Answer shown in capture: answer not shown in capture; the module content supports the multi-part user message. (SRC-46 L214)
3. How can you include an image in a message? (SRC-173 L219)
   - As a URL or as binary data. (SRC-173 L220)
   - Only as a URL. (SRC-173 L221)
   - Only as binary data. (SRC-173 L222)
   - Answer shown in capture: answer not shown in capture; the module content supports web image URL or local Base64 data. (SRC-46 L216)

## Tensions, caveats and currency

- The raw capture includes the questions and answer options but not the post-submit checked answers. (SRC-173 L223–225)
- **Inference:** The correct-looking answers can be inferred from adjacent module content, but the source page itself must preserve that the capture does not show checked answers. (SRC-46 L214–216; SRC-248 L213)

## Relation to other sources

- SRC-248 teaches the model-selection fact assessed by question 1: prompts with images require a multimodal model. (SRC-248 L213)
- SRC-46 teaches the message-construction and image-format facts assessed by questions 2 and 3. (SRC-46 L214–216)
- SRC-47 repeats the same assessment answers in the episode wrap-up: multimodal models, multi-part user message, and URL or Base64 encoded data. (SRC-47 L421–440)

## Connections

- [[vision-enabled-chat]] — the assessment tests the core vision-chat prompt shape. (SRC-173 L214–222)
- [[model-selection]] — the assessment asks which model kind responds to visual input. (SRC-173 L209–212)
- [[responses-api]] — adjacent implementation content uses Responses API for image prompts. (SRC-46 L215–217)
- [[chat-completions-api]] — adjacent implementation content gives Chat Completions for unsupported Responses API cases. (SRC-46 L220–223)
- [[decision-boundaries]] — the assessment uses close distractors around model type and image-input format. (SRC-173 L209–222)

## Open questions

- Does the live assessment reveal explanations for each distractor after submission?
- Are binary image inputs always represented as Base64 data URLs in current API examples, or are other binary upload patterns supported?

## Sources

- SRC-173 — raw file: [[173-Module assessment - Training - Microsoft Learn]]
