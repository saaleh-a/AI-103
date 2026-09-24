---
title: "Introduction — Generate videos with Microsoft Foundry"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Introduces Sora 2 video generation in Foundry from prompts, reference images, remixing, and Python OpenAI SDK apps."
area: vision
source_ids: [SRC-128]
objectives: []
tags: [video-generation, sora-2, microsoft-foundry, openai-sdk]
aliases: ["SRC-128"]
source_kind: learn-unit
module: "Generate videos with Microsoft Foundry"
learning_path: null
unit: "1 of 7"
presenters: []
raw_file: "128-Introduction - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/generate-video-with-foundry/1-introduction"
ingest_depth: full
---

# Introduction — Generate videos with Microsoft Foundry

*learn-unit · Generate videos with Microsoft Foundry · unit 1 of 7 · SRC-128*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-128 |
| Raw file | `128-Introduction - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | None |
| Module | Generate videos with Microsoft Foundry |
| Unit / episode | 1 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/generate-video-with-foundry/1-introduction |
| Teaching content | L208–215 of 245 |
| Content length | ~140 words |
| Capture quality | High |
| Ingest depth | full |

## TL;DR

The introduction says generative AI has expanded beyond text and images into video creation. (SRC-128 L212) With Sora 2 in Microsoft Foundry, learners can generate realistic and imaginative video scenes from text prompts, reference images, or by remixing existing videos. (SRC-128 L212–213)

## Key claims

- Generative AI has expanded beyond text and images to video creation. (SRC-128 L212)
- Sora 2 in Microsoft Foundry can generate realistic and imaginative video scenes. (SRC-128 L212–213)
- Sora 2 can use text prompts, reference images, or remixing existing videos. (SRC-128 L213)
- The module teaches deploying Sora 2, writing effective prompts, and building a Python application that creates videos programmatically with the OpenAI SDK. (SRC-128 L213)

## How it works

The source frames video generation as an extension of generative media workflows: deploy Sora 2, direct it with prompts or visual/video inputs, and create videos programmatically through Python and the OpenAI SDK. (SRC-128 L212–214)

## Code and API patterns

The source names a Python application and the OpenAI SDK as part of the module outcome, but it does not show code in the introduction. (SRC-128 L213)

## Key terms

- **Sora 2:** the video-generation model named for Microsoft Foundry. (SRC-128 L212–214)
- **Reference images:** one input type named for Sora 2 video generation. (SRC-128 L213)
- **Remixing existing videos:** one named way to generate or revise video scenes. (SRC-128 L213)
- **OpenAI SDK:** the SDK named for building a Python video-generation application. (SRC-128 L213)

## Decision boundaries and exam cues

- **Inference:** Choose Sora 2 when the requirement is video creation from text, reference images, or existing videos, rather than still-image generation. (SRC-128 L212–214)
- **Inference:** If a scenario asks for programmatic video creation in Python, this module points to the OpenAI SDK path. (SRC-128 L213)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** Sora 2 availability and supported input modes should be checked against current Foundry model availability before implementation. (SRC-128 L212–214)

## Relation to other sources

- [[src-38-deploy-video-generating-model]] gives the Foundry portal deployment path for Sora 2. (SRC-38 L218–226)
- [[src-100-generate-video-prompt]] describes playground prompting, reference images, and remixing. (SRC-100 L216–270)
- [[src-101-generate-video-python]] describes the asynchronous SDK pattern for video jobs. (SRC-101 L212–233)
- [[src-97-generate-images-video-episode-23]] demonstrates deploying Sora 2 and calling the video API from code. (SRC-97 L441–586)

## Connections

- [[video-generation]] — this source introduces video generation as the module topic. (SRC-128 L212–214)
- [[sora-2]] — Sora 2 is the named model for the module. (SRC-128 L212–214)
- [[openai-sdk]] — the module includes Python application development with the OpenAI SDK. (SRC-128 L213)
- [[microsoft-foundry]] — Sora 2 is described as being in Microsoft Foundry. (SRC-128 L212–213)
- *Module units:* [[src-38-deploy-video-generating-model|2 Deploy a video generating model]] · [[src-100-generate-video-prompt|3 Generate video from a prompt]] · [[src-101-generate-video-python|4 Generate video in Python]] · [[src-75-exercise-generate-video-sora-2-microsoft-foundry|5 Exercise - Generate video with Sora 2 in Microsoft Foundry]]

## Open questions

- The introduction does not state deployment settings, supported durations, file formats, or API call shapes. (SRC-128 L212–214)

## Sources

- SRC-128 — raw file: [[128-Introduction - Training - Microsoft Learn]]
