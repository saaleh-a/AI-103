---
title: "Generate video in Python"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Describes Python video generation with OpenAI SDK as asynchronous jobs: create, poll, download, reference, remix, and handle failures."
area: vision
source_ids: [SRC-101]
objectives: [V02, V04, G05]
tags: [video-generation, python, openai-sdk, sora-2, input-reference, remix]
aliases: ["SRC-101"]
source_kind: learn-unit
module: "Generate videos with Microsoft Foundry"
learning_path: null
unit: "4 of 7"
presenters: []
raw_file: "101-Generate video in Python - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/generate-video-with-foundry/4-generate-video-in-python"
ingest_depth: partial
---

# Generate video in Python

*learn-unit · Generate videos with Microsoft Foundry · unit 4 of 7 · SRC-101*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-101 |
| Raw file | `101-Generate video in Python - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | None |
| Module | Generate videos with Microsoft Foundry |
| Unit / episode | 4 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/generate-video-with-foundry/4-generate-video-in-python |
| Teaching content | L208–238 of 268 |
| Content length | ~251 words |
| Capture quality | Partial code capture: code blocks are collapsed in the raw text. |
| Ingest depth | partial |

## TL;DR

Python applications can use the OpenAI Python SDK with a Sora 2 deployment in Microsoft Foundry. (SRC-101 L212) Video generation is asynchronous, so the application creates a job, polls for status, and downloads the result when ready. (SRC-101 L212–215)

## Key claims

- Programmatic video generation can use the OpenAI Python SDK with a Sora 2 deployment in Microsoft Foundry. (SRC-101 L212)
- Video generation is asynchronous: submit a job, poll for status, and download the result when ready. (SRC-101 L212–215)
- To use an image as a starting frame, pass it to the `input_reference` parameter. (SRC-101 L218–219)
- A reference image's resolution must match the target video size. (SRC-101 L219)
- Reference images containing human faces are currently rejected. (SRC-101 L222–223)
- To modify an existing video while preserving its structure, use the `remix` method with the original video's ID. (SRC-101 L224–226)
- Failed jobs should be diagnosed by checking `video.error`. (SRC-101 L230–231)
- The source states limits and lifecycle considerations: up to two simultaneous video creation jobs, completed videos downloadable for 24 hours, exact reference-image resolution matching, and content moderation for harmful prompts. (SRC-101 L232–237)

## How it works

The source describes video generation as a job workflow rather than an immediate response: create the video job, poll until the job reaches a final state, and then download the video result. (SRC-101 L212–215) It adds two programmatic variations: `input_reference` for starting from an image and `remix` for modifying an existing video through its original video ID. (SRC-101 L218–226)

## Code and API patterns

The code blocks are not preserved in the capture, but the source names the important API concepts: `input_reference`, `remix`, job status handling, and `video.error`. (SRC-101 L218–231) The source's captured algorithm is create job, poll, and download. (SRC-101 L214–215)

## Key terms

- **OpenAI Python SDK:** the SDK named for programmatic video generation. (SRC-101 L212)
- **input_reference:** the parameter for providing a starting image. (SRC-101 L218–219)
- **remix:** the method for modifying an existing video while preserving its structure. (SRC-101 L224–226)
- **video.error:** the property named for failure details. (SRC-101 L230–231)

## Decision boundaries and exam cues

- **Inference:** Choose asynchronous job handling for video generation; do not assume a single immediate response. (SRC-101 L212–215)
- **Inference:** Use `input_reference` for image-started generation and `remix` for targeted changes to an existing video. (SRC-101 L218–226)
- **Stale-risk:** The two-job concurrency limit and 24-hour download availability are operational limits that may change. (SRC-101 L232–234)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source says reference images containing human faces are currently rejected. (SRC-101 L222–223)
- The captured code blocks are collapsed, so exact Python syntax is not available from this source alone. (SRC-101 L214–230)

## Relation to other sources

- [[src-100-generate-video-prompt]] introduces the asynchronous prompt-and-retrieve pattern and the `input_reference` parameter. (SRC-100 L212–213; SRC-100 L249–251)
- [[src-38-deploy-video-generating-model]] provides the deployment prerequisite for the SDK workflow. (SRC-38 L212–226)
- [[src-97-generate-images-video-episode-23]] demonstrates `videos.create`, polling, download, remix, and `input_reference`. (SRC-97 L516–748)

## Connections

- [[video-generation]] — this source gives the asynchronous video job pattern. (SRC-101 L212–237)
- [[sora-2]] — the SDK workflow uses a Sora 2 deployment in Foundry. (SRC-101 L212)
- [[openai-sdk]] — the OpenAI Python SDK is the named client library. (SRC-101 L212)
- [[quotas-rate-limits-and-cost]] — the source names simultaneous job limits and download expiration. (SRC-101 L232–234)
- [[guardrails-and-content-filters]] — prompts are subject to content moderation. (SRC-101 L235–237)

## Open questions

- The source does not preserve exact Python code, the status-value table, authentication setup, or request schema. (SRC-101 L214–230)

## Sources

- SRC-101 — raw file: [[101-Generate video in Python - Training - Microsoft Learn]]
