---
title: "Explore image-generation models in Microsoft Foundry portal"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains using a Foundry project and model playground to prompt image models, choose size, and optionally use a reference image."
area: vision
source_ids: [SRC-86]
objectives: [V01, V05]
tags: [image-generation, model-playground, microsoft-foundry, reference-image]
aliases: ["SRC-86"]
source_kind: learn-unit
module: "Generate images with AI"
learning_path: null
unit: "3 of 7"
presenters: []
raw_file: "86-Explore image-generation models in Microsoft Foundry portal - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/generate-images-azure-openai/3-dall-e-in-openai-studio"
ingest_depth: full
---

# Explore image-generation models in Microsoft Foundry portal

*learn-unit · Generate images with AI · unit 3 of 7 · SRC-86*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-86 |
| Raw file | `86-Explore image-generation models in Microsoft Foundry portal - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | None |
| Module | Generate images with AI |
| Unit / episode | 3 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/generate-images-azure-openai/3-dall-e-in-openai-studio |
| Teaching content | L208–215 of 245 |
| Content length | ~90 words |
| Capture quality | High but brief |
| Ingest depth | full |

## TL;DR

The unit says learners can create a Microsoft Foundry project and use the model playground in the Foundry portal to submit prompts and view generated images. (SRC-86 L212–214) The playground can expose image settings such as generated-image resolution and reference-image input, subject to model support. (SRC-86 L215)

## Key claims

- To experiment with image generation models, create a Microsoft Foundry project. (SRC-86 L212)
- The model playground in Microsoft Foundry portal can submit prompts and show generated images. (SRC-86 L212–214)
- When the model supports it, the playground can specify generated image resolution. (SRC-86 L215)
- When the model supports it, the playground can include a reference image for the model to base its output on. (SRC-86 L215)

## How it works

This source presents the portal workflow as a low-code exploration loop: create or use a Foundry project, open the playground, submit prompts, and inspect generated image results. (SRC-86 L212–214) It also introduces controllable inputs, including size and reference image, as model-dependent playground options. (SRC-86 L215)

## Code and API patterns

Not covered by this source. The source covers the portal playground rather than application code. (SRC-86 L212–215)

## Key terms

- **Microsoft Foundry project:** the project context needed to experiment with image-generation models. (SRC-86 L212)
- **Model playground:** the Foundry portal surface used to submit image prompts and view generated images. (SRC-86 L212–214)
- **Reference image:** an optional image that a supporting model can use as a basis for output. (SRC-86 L215)

## Decision boundaries and exam cues

- **Inference:** Use the playground when the task is to test prompts and settings before building an application. (SRC-86 L212–215)
- **Inference:** If a scenario asks for generated-image size or reference-image control in the portal, this source points to the model playground, subject to model support. (SRC-86 L215)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source qualifies resolution and reference-image support with model support, so those options should not be assumed for every image-generation model. (SRC-86 L215)

## Relation to other sources

- [[src-258-what-are-image-generation-models]] says the model catalog can be filtered by inference task to find text-to-image models. (SRC-258 L215)
- [[src-32-create-client-application-that-uses-image-generation-model]] contrasts this portal path with SDK-based client development. (SRC-32 L212–218)
- [[src-97-generate-images-video-episode-23]] demonstrates a Foundry image playground prompt and prompt revision. (SRC-97 L292–334)

## Connections

- [[model-playgrounds]] — this source uses the model playground for image prompt testing. (SRC-86 L212–214)
- [[image-generation]] — the playground is used to generate images from prompts. (SRC-86 L212–215)
- [[microsoft-foundry]] — the workflow is inside a Foundry project and portal. (SRC-86 L212–214)
- [[generation-parameters]] — generated-image resolution is a controllable setting when supported. (SRC-86 L215)
- *Module units:* [[src-136-introduction-generate-images-ai|1 Introduction]] · [[src-258-what-are-image-generation-models|2 What are image-generation models-]] · [[src-32-create-client-application-that-uses-image-generation-model|4 Create a client application that uses an image generation model]] · [[src-74-exercise-generate-images-ai|5 Exercise - Generate images with AI]] · [[src-172-module-assessment-generate-images-ai|6 Module assessment]] · [[src-197-summary-generate-images-ai|7 Summary]] · [[src-97-generate-images-video-episode-23|episode 23]]

## Open questions

- The source does not list exact supported sizes, model-specific limits, or the reference-image file requirements. (SRC-86 L215)

## Sources

- SRC-86 — raw file: [[86-Explore image-generation models in Microsoft Foundry portal - Training - Microsoft Learn]]
