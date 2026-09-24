---
title: "Deploy a video generating model"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains prerequisites and portal steps for deploying Sora 2 as a video-generation model in Microsoft Foundry."
area: vision
source_ids: [SRC-38]
objectives: [V02, P07]
tags: [video-generation, sora-2, deployment, model-catalog, microsoft-foundry]
aliases: ["SRC-38"]
source_kind: learn-unit
module: "Generate videos with Microsoft Foundry"
learning_path: null
unit: "2 of 7"
presenters: []
raw_file: "38-Deploy a video generating model - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/generate-video-with-foundry/2-deploy-video-model"
ingest_depth: full
---

# Deploy a video generating model

*learn-unit · Generate videos with Microsoft Foundry · unit 2 of 7 · SRC-38*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-38 |
| Raw file | `38-Deploy a video generating model - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | None |
| Module | Generate videos with Microsoft Foundry |
| Unit / episode | 2 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/generate-video-with-foundry/2-deploy-video-model |
| Teaching content | L208–233 of 263 |
| Content length | ~304 words |
| Capture quality | High |
| Ingest depth | full |

## TL;DR

To generate videos from text prompts, learners need to deploy a video-generation model. (SRC-38 L212) The unit names Sora 2 as an OpenAI model in Microsoft Foundry that creates realistic and imaginative video scenes from text instructions, input images, or existing videos. (SRC-38 L212–214)

## Key claims

- Text-prompt video generation requires deploying a video-generation model. (SRC-38 L212)
- Sora 2 creates video scenes from text instructions, input images, or existing videos. (SRC-38 L212–214)
- Before deployment, learners need an Azure subscription, access to the Microsoft Foundry portal, and deployment permissions in a Foundry project. (SRC-38 L215–218)
- The deployment path is to sign in to Foundry portal, create or select a project, select `Build`, select `Models`, find Sora-2, and deploy it with chosen settings. (SRC-38 L219–226)
- After deployment, Sora 2 can generate videos in various resolutions and durations. (SRC-38 L233)

## How it works

The source treats deployment as a prerequisite step: the user starts in a Foundry project, locates Sora-2 through the Models experience, deploys it, and then uses the deployment for video creation. (SRC-38 L215–226) The deployed model can then support text, reference-image, and remix workflows for video creation. (SRC-38 L233)

## Code and API patterns

Not covered by this source. The unit is about portal deployment, not a programmatic request. (SRC-38 L219–226)

## Key terms

- **Sora 2:** an OpenAI model available in Microsoft Foundry for video generation. (SRC-38 L212–214)
- **Foundry project:** the project where the learner needs permissions to deploy models. (SRC-38 L217–218)
- **Deployment settings:** the settings chosen after selecting the Sora-2 model and `Deploy`. (SRC-38 L224–226)

## Decision boundaries and exam cues

- **Inference:** If a scenario begins with no video model deployment, deployment is the required first step before generating videos. (SRC-38 L212–226)
- **Inference:** Sora 2 is the model named by this source when the inputs are text instructions, input images, or existing videos for video creation. (SRC-38 L212–214)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** Model availability, deployment settings, supported resolutions, and supported durations are platform details that may change. (SRC-38 L224–233)

## Relation to other sources

- [[src-128-introduction-generate-videos-microsoft-foundry]] introduces Sora 2 as the module's video-generation model. (SRC-128 L212–214)
- [[src-100-generate-video-prompt]] assumes a deployed Sora 2 model before playground testing. (SRC-100 L212–216)
- [[src-97-generate-images-video-episode-23]] demonstrates the model-filter and deploy path in Foundry. (SRC-97 L441–466)

## Connections

- [[video-generation]] — this source gives the deployment prerequisite for video generation. (SRC-38 L212–226)
- [[sora-2]] — Sora 2 is the named video-generation model. (SRC-38 L212–214)
- [[model-catalog]] — the deployment path uses the Models experience to find Sora-2. (SRC-38 L219–226)
- [[model-deployment-types]] — the source is evidence for deploying a model before consumption. (SRC-38 L212–226)
- [[microsoft-foundry]] — deployment occurs in the Foundry portal and project. (SRC-38 L215–226)
- *Module units:* [[src-128-introduction-generate-videos-microsoft-foundry|1 Introduction]] · [[src-100-generate-video-prompt|3 Generate video from a prompt]] · [[src-101-generate-video-python|4 Generate video in Python]] · [[src-75-exercise-generate-video-sora-2-microsoft-foundry|5 Exercise - Generate video with Sora 2 in Microsoft Foundry]]

## Open questions

- The source does not list exact deployment setting values, supported regions, quota, or pricing. (SRC-38 L224–233)

## Sources

- SRC-38 — raw file: [[38-Deploy a video generating model - Training - Microsoft Learn]]
