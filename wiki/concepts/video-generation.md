---
title: "Video generation"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Generating, polling, downloading, remixing, and reference-guiding videos with Sora 2 in Foundry."
area: vision
source_ids: [SRC-38, SRC-75, SRC-97, SRC-100, SRC-101, SRC-128, SRC-191]
objectives: [V02, V04, V05]
objective_gaps: []
tags: []
aliases: ["text-to-video", "video generation jobs", "video generation", "Sora video generation"]
---

# Video generation

## Summary

Video generation in this corpus means deploying Sora 2 in Microsoft Foundry, submitting a prompt plus video settings, polling an asynchronous job, and downloading the completed video (SRC-38 L214–227; SRC-100 L214–227; SRC-101 L214–216). The corpus also teaches reference images and remixing existing videos; the study guide separately names broader video editing and platform controls (SRC-100 L250–264; SRC-191 L161–166).

## The problem it solves

Text and image generation produce static outputs. Video generation adds time, motion, camera framing, duration, aspect ratio, and editing iteration so an app can create short generated scenes from text prompts, reference images, or existing videos (SRC-128 L212–213; SRC-38 L214).

## Mental model

Unlike image generation, a video request is a job. You ask the model to create or revise a clip, get back an object with an ID and status, poll until the status reaches a final state, and then download content with the video ID (SRC-97 L218–256; SRC-101 L214–216).

## What the sources say

- SRC-128 introduces the module: Sora 2 in Microsoft Foundry can generate realistic and imaginative video scenes from text prompts, reference images, or by remixing existing videos; the module covers deployment, effective prompts, and a Python app using the OpenAI SDK (SRC-128 L212–213).
- SRC-38 says Sora 2 is an OpenAI model available in Microsoft Foundry that creates realistic and imaginative scenes from text instructions, input images, or existing videos, and it lists the portal deployment steps through the model catalog (SRC-38 L214–227).
- SRC-100 says generation is asynchronous; submit a request with prompt and video settings, then retrieve the completed video when ready (SRC-100 L214). The playground lets you enter a prompt, configure settings such as resolution and duration, and generate; typical generation takes 1 to 5 minutes depending on settings (SRC-100 L220–227).
- SRC-100 teaches prompt anatomy: camera framing, subject details, action, lighting and palette, and style (SRC-100 L231–249).
- SRC-100 teaches reference images with `input_reference` and remixing: reference images anchor the first frame, while remix modifies an existing video while preserving core scene elements (SRC-100 L250–264).
- SRC-101 gives the app pattern: use the OpenAI Python SDK with a Sora 2 deployment, create the job, poll for completion, download the result, use `input_reference` for a starting frame, and use `remix` with an original video ID (SRC-101 L214–227).
- SRC-97 demonstrates the same pattern in episode form: filter Foundry models by Video Generation, deploy Sora 2, use `client.videos.create`, poll with `videos.retrieve`, and download with `videos.download_content` (SRC-97 L441–466; SRC-97 L531–586).

## How it works in Azure

1. In Foundry, choose a video generation model such as Sora 2 and deploy it to a project (SRC-38 L220–227; SRC-97 L441–466).
2. Test in the Video playground by describing the clip and setting resolution/duration (SRC-100 L220–227).
3. In code, create an OpenAI client pointed at the Foundry resource and Sora 2 deployment, then call the videos object to create a job (SRC-97 L516–540).
4. Poll job status with the video ID until the status is completed, failed, or canceled (SRC-97 L555–570; SRC-101 L229–232).
5. Download completed video content and write it to a file (SRC-97 L571–586).

## Code and configuration

The core SDK pattern is `videos.create` → `videos.retrieve` polling → `videos.download_content` (SRC-97 L531–586; SRC-101 L214–216). Reference-image generation passes `input_reference`; the reference image must match target video size and supported formats include JPEG, PNG, and WebP (SRC-100 L250–254; SRC-101 L219–224). Remixing uses the original video ID plus a focused new prompt through the remix endpoint or method (SRC-100 L255–264; SRC-101 L225–227).

## Decision boundaries

- **Video generation vs image generation:** use video generation when the output needs motion, timing, camera movement, duration, or remixing an existing clip; image generation returns static image data and does not require asynchronous polling in the taught pattern (SRC-97 L83–115; SRC-97 L218–256).
- **Text prompt vs reference image vs remix:** use text prompt for a new scene, `input_reference` when an image should anchor the first frame, and remix when an existing generated video should keep its structure but change a specific aspect (SRC-100 L250–264; SRC-97 L600–666).
- **Editing controls:** the corpus teaches remixing and reference images as revision controls, while the study guide’s broader V04/V05 language also names editing workflows and platform generation/editing controls without teaching a complete taxonomy (SRC-100 L255–270; SRC-191 L163–166).

## Failure modes and misconceptions

- Treating video like a synchronous image call is wrong; the sources repeat that video generation is asynchronous and must be polled (SRC-100 L214; SRC-101 L214–216; SRC-97 L218–256).
- Reference images are constrained: the Learn unit says their resolution must match the target video size, supported formats are JPEG, PNG, and WebP, and the Python unit notes reference images containing human faces are currently rejected (SRC-100 L250–254; SRC-101 L219–224). **Stale-risk:** limits and rejection rules may change.
- Content moderation applies to video generation prompts; harmful content will not return a generated video (SRC-100 L228–230; SRC-101 L233–237).

## Solution Engineering transfer

**Inference:** A customer asking for short product scenes, concept videos, or rapid storyboards needs video generation; a customer asking for precise edits to an existing generated clip may need remix rather than a fresh generation (SRC-128 L212–213; SRC-100 L255–264). Ask about duration, aspect ratio, reference frames, moderation requirements, and whether asynchronous job handling is acceptable (SRC-100 L214–227; SRC-101 L233–237).

## Connections

- [[sora-2]] — the named video model used throughout the taught workflow.
- [[image-generation]] — adjacent media generation but synchronous/static in the taught examples.
- [[model-catalog]] — Sora 2 is discovered and deployed from the catalog.
- [[openai-sdk]] — the Python app uses the OpenAI SDK against a Foundry deployment.
- [[guardrails-and-content-filters]] — moderation filters can block harmful prompts.
- [[corpus-gaps]] — broader V04/V05 editing-control coverage remains thin.
- [[src-100-generate-video-prompt]] — prompt, playground, reference image and remix guidance.
- [[src-101-generate-video-python]] — programmatic job pattern.
- *Also linked from:* [[generation-parameters]] · [[model-playgrounds]] · [[overview]] · [[prompt-engineering]]

## Sources

- SRC-38 — [[src-38-deploy-video-generating-model]] — Sora 2 deployment steps
- SRC-75 — [[src-75-exercise-generate-video-sora-2-microsoft-foundry]] — exercise scope
- SRC-97 — [[src-97-generate-images-video-episode-23]] — episode demo for video generation
- SRC-100 — [[src-100-generate-video-prompt]] — prompting, playground, reference images and remix
- SRC-101 — [[src-101-generate-video-python]] — Python asynchronous job pattern
- SRC-128 — [[src-128-introduction-generate-videos-microsoft-foundry]] — module introduction
- SRC-191 — [[src-191-study-guide-exam-ai-103-developing-ai-apps-agents]] — official V02, V04 and V05 objectives

## Open questions

- Which current Sora 2 video settings are available by region and deployment type?
- Which video-editing controls beyond remix are available in current Foundry and likely to appear in AI-103?
