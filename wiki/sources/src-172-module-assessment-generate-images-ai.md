---
title: "Module assessment — Generate images with AI"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Captures the image module assessment questions about the text-to-image filter and OpenAI Image API."
area: vision
source_ids: [SRC-172]
objectives: []
tags: [assessment, image-generation, text-to-image, openai-api]
aliases: ["SRC-172"]
source_kind: learn-unit
module: "Generate images with AI"
learning_path: null
unit: "6 of 7"
presenters: []
raw_file: "172-Module assessment - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/generate-images-azure-openai/6-knowledge-check"
ingest_depth: partial
---

# Module assessment — Generate images with AI

*learn-unit · Generate images with AI · unit 6 of 7 · SRC-172*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-172 |
| Raw file | `172-Module assessment - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | None |
| Module | Generate images with AI |
| Unit / episode | 6 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/generate-images-azure-openai/6-knowledge-check |
| Teaching content | L208–221 of 251 |
| Content length | ~76 words |
| Capture quality | Partial: questions and options are captured, but checked answers are not shown. |
| Ingest depth | partial |

## TL;DR

The assessment checks two image-generation facts: which Foundry inference-task filter finds image models, and which OpenAI API is used with image-generation models. (SRC-172 L210–216) The capture does not show submitted answers or correctness feedback. (SRC-172 L217–221)

## Key claims

- The first captured question asks which inference task to filter by in Microsoft Foundry to generate images. (SRC-172 L210)
- The options for the first question are `Text to image`, `Image to text`, and `Embeddings`. (SRC-172 L211–213)
- The second captured question asks which OpenAI API can be used with image-generation models. (SRC-172 L215)
- The options for the second question are `Video`, `Image`, and `Graphics`. (SRC-172 L216–218)

## How it works

This is an assessment page, so it tests recognition of the Foundry inference-task filter and the OpenAI API surface rather than teaching a new procedure. (SRC-172 L210–216)

## Code and API patterns

The source names an API-choice question but does not show code. (SRC-172 L215–218)

## Key terms

- **Text to image:** one option for the Foundry inference-task filter. (SRC-172 L210–211)
- **Image API:** one option for the OpenAI API used with image-generation models. (SRC-172 L215–218)
- **Embeddings:** a distractor option in the inference-task question. (SRC-172 L210–213)

## Decision boundaries and exam cues

- **Inference:** The assessment reinforces the distinction between image generation and image analysis because `Image to text` is a distractor against `Text to image`. (SRC-172 L210–213)
- **Inference:** The API-object cue for this module is image generation, not video generation or a generic graphics API. (SRC-172 L215–218)

## Assessment items

1. You want to find a model in Microsoft Foundry to generate images. Which inference task should you filter by? Options: `Text to image`; `Image to text`; `Embeddings`. Answer not shown in capture. (SRC-172 L210–213)
2. Which OpenAI API can you use with image-generation models? Options: `Video`; `Image`; `Graphics`. Answer not shown in capture. (SRC-172 L215–218)

## Tensions, caveats and currency

- The raw capture does not show the correct choices or post-submit explanations. (SRC-172 L217–221)

## Relation to other sources

- [[src-258-what-are-image-generation-models]] states that the model catalog can be filtered by inference task to find text-to-image models. (SRC-258 L218)
- [[src-32-create-client-application-that-uses-image-generation-model]] names the OpenAI Images API in the client-app unit. (SRC-32 L213–214)
- [[src-97-generate-images-video-episode-23]] supplies the spoken answers for similar end-of-episode checks. (SRC-97 L752–766)

## Connections

- [[image-generation]] — the assessment checks image model filtering and API selection. (SRC-172 L210–216)
- [[model-catalog]] — the first item tests selecting models with an inference-task filter. (SRC-172 L210–213)
- [[openai-sdk]] — the second item tests the OpenAI API surface for image models. (SRC-172 L215–218)
- [[decision-boundaries]] — the distractors separate text-to-image from image-to-text and embeddings. (SRC-172 L210–213)
- *Module units:* [[src-136-introduction-generate-images-ai|1 Introduction]] · [[src-258-what-are-image-generation-models|2 What are image-generation models-]] · [[src-86-explore-image-generation-models-microsoft-foundry-portal|3 Explore image-generation models in Microsoft Foundry portal]] · [[src-32-create-client-application-that-uses-image-generation-model|4 Create a client application that uses an image generation model]] · [[src-74-exercise-generate-images-ai|5 Exercise - Generate images with AI]] · [[src-197-summary-generate-images-ai|7 Summary]] · [[src-97-generate-images-video-episode-23|episode 23]]

## Open questions

- The source does not show the selected answers or correctness feedback. (SRC-172 L217–221)

## Sources

- SRC-172 — raw file: [[172-Module assessment - Training - Microsoft Learn]]
