---
title: "Generate video from a prompt"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Teaches Sora 2 prompt generation, Video playground use, content filtering, reference images, remixing, and iteration tips."
area: vision
source_ids: [SRC-100]
objectives: [V02, V04, V05, G13]
tags: [video-generation, sora-2, prompt-engineering, reference-image, remix, content-filtering]
aliases: ["SRC-100"]
source_kind: learn-unit
module: "Generate videos with Microsoft Foundry"
learning_path: null
unit: "3 of 7"
presenters: []
raw_file: "100-Generate video from a prompt - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/generate-video-with-foundry/3-generate-video-from-prompt"
ingest_depth: partial
---

# Generate video from a prompt

*learn-unit · Generate videos with Microsoft Foundry · unit 3 of 7 · SRC-100*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-100 |
| Raw file | `100-Generate video from a prompt - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | None |
| Module | Generate videos with Microsoft Foundry |
| Unit / episode | 3 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/generate-video-with-foundry/3-generate-video-from-prompt |
| Teaching content | L208–270 of 300 |
| Content length | ~724 words |
| Capture quality | High, with collapsed tables and omitted example prompt body. |
| Ingest depth | partial |

## TL;DR

After deploying Sora 2, video generation is asynchronous: submit a request with prompt and video settings, then retrieve the completed video when it is ready. (SRC-100 L212–213) The unit covers the Video playground, content moderation, prompt anatomy, reference images, remixing existing videos, and iteration tips. (SRC-100 L216–270)

## Key claims

- Video generation uses an asynchronous submit-and-retrieve pattern. (SRC-100 L212–213)
- The Video playground in Microsoft Foundry portal can test a deployed Sora 2 model. (SRC-100 L216–222)
- Video generation typically takes 1 to 5 minutes, depending on settings. (SRC-100 L223)
- Content generation APIs include a content moderation filter, and harmful prompts do not return generated video. (SRC-100 L224–226)
- The playground can show prefilled cURL code samples through `View code`. (SRC-100 L227–228)
- Effective prompts can specify framing, subject, action, lighting and palette, and style. (SRC-100 L231–239)
- Reference images use the `input_reference` parameter as an anchor for the first frame while the prompt defines what happens next. (SRC-100 L249–251)
- Remixing modifies specific aspects of an existing video while preserving scene transitions, visual layout, and overall structure. (SRC-100 L256–258)

## How it works

The portal flow is to navigate to the deployed Sora 2 model, open the Playground tab, enter a prompt, configure settings such as resolution and duration, and select `Generate`. (SRC-100 L216–222) Prompting is presented as briefing a cinematographer: the source recommends controlling shot type, subject details, movement beats, mood, and style while leaving some room for creative results. (SRC-100 L230–239) For remixing, the source says to generate a video, note its ID, call the remix endpoint with the original ID and an updated prompt, and describe only focused changes. (SRC-100 L259–266)

## Code and API patterns

The source names `input_reference` for supplying a visual reference to the model. (SRC-100 L249–251) It also names the remix endpoint pattern but does not show the exact request body in the captured text. (SRC-100 L259–262)

## Key terms

- **Video playground:** the Foundry portal surface for testing a deployed Sora 2 model. (SRC-100 L216–222)
- **Prompt anatomy:** the source's structure of framing, subject, action, lighting and palette, and style. (SRC-100 L233–239)
- **input_reference:** the parameter used to provide a visual reference for the first frame. (SRC-100 L249–251)
- **Remix:** a feature for targeted changes to an existing video while preserving core structure. (SRC-100 L256–266)

## Decision boundaries and exam cues

- **Inference:** Use prompt generation for a new video, use `input_reference` when the first-frame composition or style should be anchored, and use remix when modifying an existing video without regenerating from scratch. (SRC-100 L249–266)
- **Inference:** If a prompt is harmful, the content moderation filter can prevent generated video from being returned. (SRC-100 L224–226)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The parameter table and weak-vs-strong prompt table are collapsed in the capture, so their details are not available here. (SRC-100 L214–215; SRC-100 L241–242)
- **Stale-risk:** Supported sizes, durations, moderation behavior, and sample-code surfaces can change over time. (SRC-100 L216–228; SRC-100 L252–255)

## Relation to other sources

- [[src-38-deploy-video-generating-model]] provides the deployment prerequisite this source assumes. (SRC-38 L212–226)
- [[src-101-generate-video-python]] translates the asynchronous video pattern into Python SDK usage. (SRC-101 L212–237)
- [[src-97-generate-images-video-episode-23]] demonstrates the Video playground, polling, remix, and reference-image flow. (SRC-97 L441–748)

## Connections

- [[video-generation]] — this source is the main prompt, playground, reference-image, and remix unit. (SRC-100 L212–270)
- [[sora-2]] — the workflow assumes a deployed Sora 2 model. (SRC-100 L212–216)
- [[model-playgrounds]] — the Video playground is used to test generation. (SRC-100 L216–228)
- [[prompt-engineering]] — the source teaches video prompt anatomy and iteration. (SRC-100 L230–270)
- [[guardrails-and-content-filters]] — video prompts are subject to moderation. (SRC-100 L224–226)
- *Module units:* [[src-128-introduction-generate-videos-microsoft-foundry|1 Introduction]] · [[src-38-deploy-video-generating-model|2 Deploy a video generating model]] · [[src-101-generate-video-python|4 Generate video in Python]] · [[src-75-exercise-generate-video-sora-2-microsoft-foundry|5 Exercise - Generate video with Sora 2 in Microsoft Foundry]]

## Open questions

- The source does not show the full parameter table, weak-vs-strong prompt table, or exact remix request schema. (SRC-100 L214–215; SRC-100 L241–242; SRC-100 L259–262)

## Sources

- SRC-100 — raw file: [[100-Generate video from a prompt - Training - Microsoft Learn]]
