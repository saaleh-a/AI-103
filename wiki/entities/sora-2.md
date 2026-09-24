---
title: "Sora 2"
type: entity
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "OpenAI video-generation model available in Foundry for text, image-reference, and remix workflows."
area: vision
source_ids: [SRC-38, SRC-75, SRC-97, SRC-100, SRC-101, SRC-128, SRC-210]
objectives: [V02, V04, V05]
objective_gaps: []
tags: ["model"]
aliases: ["Sora", "OpenAI Sora 2", "Sora-2"]
---

# Sora 2

## Summary

Sora 2 is the named OpenAI video-generation model in the corpus. Microsoft Learn describes it as available in Microsoft Foundry and able to create realistic and imaginative video scenes from text instructions, input images, or existing videos (SRC-38 L214). The taught implementation is a deployed Foundry model used through the Video playground or OpenAI SDK video APIs (SRC-100 L220–230; SRC-101 L214–227).

## What it is

Sora 2 is an AI model for video generation, not a general chat model. It is deployed from the Foundry model catalog, then used to create video jobs from prompts, reference images, or remix requests (SRC-38 L220–227; SRC-128 L212–213). **Stale-risk:** the model name, availability, limits, and deployment controls are time-sensitive.

## What the sources say

- SRC-38 states that Sora 2 is an OpenAI model available in Microsoft Foundry, and that it creates video scenes from text instructions, input images, or existing videos (SRC-38 L214).
- SRC-38 gives the portal deployment path: sign into Foundry, create or select a project, open Build > Models, find Sora-2 in the model catalog, select it, and deploy with settings (SRC-38 L220–227).
- SRC-128 introduces the module as learning to deploy Sora 2, write effective prompts, and build a Python app that creates videos programmatically using the OpenAI SDK (SRC-128 L212–213).
- SRC-100 says once deployed, Sora 2 video generation is asynchronous: submit prompt and settings, then retrieve the completed video when ready (SRC-100 L214).
- SRC-101 says programmatic apps use the OpenAI Python SDK with a Sora 2 deployment in Microsoft Foundry and follow create, poll, download (SRC-101 L214–216).
- SRC-97’s episode filters Foundry models by Video Generation, chooses Sora 2, deploys with default settings, and uses a `videos` object to create, retrieve, and download generated clips (SRC-97 L441–466; SRC-97 L516–586).

## Capabilities and components

- Text-to-video: provide a descriptive prompt and settings such as resolution and duration (SRC-100 L220–227).
- Reference image: pass `input_reference`; the image anchors the first frame while the prompt defines what happens next (SRC-100 L250–254; SRC-101 L219–224).
- Remix: provide an existing video ID and focused prompt to modify specific aspects while preserving core layout and structure (SRC-100 L255–264; SRC-101 L225–227).
- Job states and operational constraints: jobs can fail, completed videos are available for download for 24 hours, up to two creation jobs can run simultaneously, and harmful prompts are filtered (SRC-101 L229–237). **Stale-risk:** these limits may change.

## How to use it

Use Sora 2 in the Foundry portal by deploying the model and opening the Video playground, where you enter a prompt, configure settings such as resolution and duration, and generate a clip; generation commonly takes 1 to 5 minutes depending on settings (SRC-100 L220–227). Use Sora 2 from Python by creating an OpenAI client for the Foundry deployment, calling `videos.create`, polling with `videos.retrieve`, and downloading with `videos.download_content` (SRC-97 L516–586; SRC-101 L214–216).

## Decision boundaries

- **Sora 2 vs image models:** Sora 2 is selected for video generation; the episode says image-generation models and video-generation models are not necessarily the same, then recommends Sora 2 for video generation (SRC-97 L122–133).
- **Sora 2 vs vision-enabled chat:** Sora 2 creates or revises video; vision-enabled chat analyzes image input and returns text answers (SRC-38 L214; SRC-210 L213–214).
- **Create vs remix:** **Inference:** choose create for a new clip from prompt or reference image; choose remix when preserving the structure of an existing generated video matters (SRC-100 L250–264).

## Naming and currency

The corpus uses both `Sora 2` and `Sora-2` in deployment instructions (SRC-38 L214–227). The episode also shows Sora, Sora 2, and an avatar feature as available Video Generation options at capture time (SRC-97 L451–463). **Stale-risk:** catalog entries, model branding, and featured models may change.

## Appearances in the corpus

- SRC-38 is the deployment Learn unit for the model (SRC-38 L214–227).
- SRC-75 is the exercise that asks learners to deploy Sora 2, generate videos from text prompts, and use reference images (SRC-75 L210–213).
- SRC-97 is the episode walkthrough that deploys Sora 2 and demonstrates create, poll, download, remix, and reference-image generation (SRC-97 L441–586; SRC-97 L600–748).
- SRC-100 is the prompt/playground unit for Sora 2 (SRC-100 L214–270).
- SRC-101 is the Python unit for Sora 2 app integration (SRC-101 L214–238).
- SRC-128 is the module introduction (SRC-128 L212–213).

## Connections

- [[video-generation]] — concept page for the end-to-end workflow.
- [[model-catalog]] — deployment starts with finding Sora-2 in Foundry models.
- [[openai-sdk]] — programmatic use in the corpus goes through the OpenAI Python SDK.
- [[image-generation]] — adjacent generative-media capability with different model and response pattern.
- [[guardrails-and-content-filters]] — harmful video prompts are moderated.
- [[src-38-deploy-video-generating-model]] — deployment source.
- [[src-101-generate-video-python]] — SDK source.

## Sources

- SRC-38 — [[src-38-deploy-video-generating-model]] — Sora 2 identity and deployment
- SRC-75 — [[src-75-exercise-generate-video-sora-2-microsoft-foundry]] — exercise scope
- SRC-97 — [[src-97-generate-images-video-episode-23]] — episode appearances and API demo
- SRC-100 — [[src-100-generate-video-prompt]] — prompt, playground, reference image, remix
- SRC-101 — [[src-101-generate-video-python]] — Python SDK job workflow and limits
- SRC-128 — [[src-128-introduction-generate-videos-microsoft-foundry]] — module introduction
- SRC-210 — [[src-210-summary-develop-vision-enabled-generative-ai-application]] — contrast with vision understanding
