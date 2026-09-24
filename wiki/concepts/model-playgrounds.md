---
title: "Playgrounds"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "No-code Foundry testing surfaces for model, agent, image, video and multimodal behavior before app integration."
area: models
source_ids: [SRC-14, SRC-39, SRC-53, SRC-86, SRC-90, SRC-100, SRC-189, SRC-197, SRC-248]
objectives: [G04]
objective_gaps: []
tags: []
aliases: ["chat playground", "agent playground", "model playground", "images playground", "video playground"]
---

# Playgrounds

## Summary

Playgrounds are the Microsoft Foundry portal's no-code proving ground: they let you send prompts to deployed models, compare responses, adjust settings, test agents or multimodal prompts, and copy starter code before you move behavior into an application (SRC-90 L218–225; SRC-39 L252–263; SRC-14 L236–238).

## The problem it solves

Before writing app code, you need a fast way to discover whether a deployment behaves well enough for the task. The corpus repeatedly uses playgrounds for this early loop: deploy or select a model, try prompts, inspect outputs, adjust settings, and only then move toward SDK or API integration (SRC-90 L218–225; SRC-39 L252–263). For agents, the same idea becomes a conversation-testing surface where you validate instructions, try scenarios, and refine behavior before deployment (SRC-14 L236–238).

## Mental model

A playground is an interactive test bench attached to a Foundry project or deployment. **Inference:** It is not the production app and it is not the evaluator service (SRC-39 L252; SRC-53 L223–225). It is where a developer manually changes input, instructions, model choice, and generation settings, observes output, and learns what configuration should later be captured in code or evaluation datasets (SRC-39 L252–263; SRC-53 L220–225).

## What the sources say

- The model playground in Foundry is an interactive environment for testing models before writing code; it can send prompts, adjust temperature and max tokens, add system messages, and experiment with models and configurations (SRC-90 L218–225).
- A deployment can be tested immediately in a playground. The playground preselects the deployment, displays both input and output, supports simple and complex prompts, system messages, generation parameters, and code samples for calling the deployed model programmatically (SRC-39 L252–263).
- The agent portal includes an integrated playground where you select the Playground tab, start a conversation, keep session history, test multi-turn interactions, and verify that the agent maintains context appropriately (SRC-14 L236–238).
- Image generation can be explored in the Foundry portal model playground by submitting prompts and viewing generated images; subject to model support, resolution and reference image options can be specified (SRC-86 L212–215). The image-generation summary names the Images playground as the exploration surface (SRC-197 L214).
- Video generation uses a Video playground after Sora 2 deployment: choose the Playground tab, enter a video prompt, configure settings such as resolution and duration, generate the video, and view prefilled cURL samples (SRC-100 L221–230).
- Vision-capable chat can be tested in the chat playground by uploading a local image and adding text to elicit a multimodal response (SRC-248 L219–221).
- The episode demo uses side-by-side playground comparison to see how models differ on the same prompt, then moves to automated evaluation when manual comparison is not enough (SRC-189 L661–760).

## How it works in Azure

The playground sits after model selection and deployment in the Foundry portal workflow. The deployment details page contains the information applications need; the playground lets you test that deployment manually and then use the Code tab samples for authentication, endpoint configuration, and request formatting in languages such as Python, C#, and JavaScript (SRC-39 L253–264).

For multimodal work, the same portal pattern changes by modality: image generation submits prompts and optional supported controls such as resolution or reference images, video generation submits an asynchronous generation request with prompt and settings, and vision-capable chat combines an uploaded image with text in the chat playground (SRC-86 L212–215; SRC-100 L214–230; SRC-248 L219–221).

## Code and configuration

The playground itself is a portal surface, but it can hand off to code. The deployment playground exposes a Code tab with examples for calling the deployed model, including authentication, endpoint configuration, and request formatting (SRC-39 L262–264). The video playground similarly exposes cURL samples that are prefilled according to the current video settings (SRC-100 L230). **Inference:** use these samples as a bridge from manual exploration to [[openai-sdk]], [[foundry-sdk]], [[responses-api]], or [[chat-completions-api]] implementation rather than as the final architecture.

## Decision boundaries

| **Inference:** Scenario detail | Playground | Automated evaluation | SDK/API app |
|---|---|---|---|
| Main job | Manual, qualitative exploration of a model, agent, image, video, or multimodal prompt (SRC-90 L218–225; SRC-14 L236–238). | Systematic scoring over datasets and metrics (SRC-53 L270–287). | Production or prototype integration in application code using endpoints and SDKs (SRC-39 L262–266). |
| Best when | You need to learn behavior quickly, compare prompts, or copy starter code (SRC-39 L252–263). | You need repeatable quality or safety evidence across many test rows (SRC-53 L270–287). | You are ready to build the user-facing app or workflow. |
| **Inference:** Closest confusion | Treating a playground pass as evaluation proof. | Treating metrics as interactive debugging. | Treating generated samples as the only required design. |

**Inference:** an exam scenario that says no code, immediate model testing, prompt experiments, or side-by-side manual comparison points to a playground. If it asks for grounded quality metrics, safety defect rates, or asynchronous jobs over datasets, move to [[model-and-app-evaluation]].

## Failure modes and misconceptions

- Assuming playground output is production validation. The evaluation source says manual playground testing is qualitative and time-intensive, while automated evaluation scales with consistent measurements (SRC-53 L220–225; SRC-53 L240–270).
- Forgetting that the playground is deployment-aware. The deployment unit says the playground preselects the deployment, so behavior depends on the selected deployed model and settings (SRC-39 L252–253).
- Confusing model, agent, image, video, and vision playgrounds. The corpus uses different playground surfaces for chat/model testing, agent conversations, image prompts, video generation, and image-based multimodal prompts (SRC-90 L218–225; SRC-14 L236–238; SRC-86 L212–215; SRC-100 L221–230; SRC-248 L219–221).
- Overgeneralizing controls. Image resolution and reference images are subject to model support, while video generation has its own settings such as resolution and duration (SRC-86 L212–215; SRC-100 L221–226).

## Solution Engineering transfer

**Inference:** customer signal: a team is choosing between models or prompt shapes and wants to see behavior before allocating engineering time. Start in the playground because the corpus presents it as the low-friction way to test deployed models before code (SRC-90 L218–225; SRC-39 L252–263).

**Inference:** discovery question: ask whether the team needs exploratory confidence or auditable evidence. Exploratory confidence maps to playground testing; auditable evidence maps to evaluation datasets, metrics, and result review (SRC-53 L220–225; SRC-53 L270–296).

## Connections

- [[microsoft-foundry]] — portal host for model, agent, image, video and multimodal playground workflows.
- [[model-catalog]] — playground testing usually follows model selection and deployment.
- [[model-selection]] — use playgrounds to compare candidate behavior qualitatively.
- [[model-deployment-types]] — deployments are what chat/model playgrounds test.
- [[prompt-engineering]] — prompts, system messages and formats are explored in the playground.
- [[generation-parameters]] — temperature, max tokens, top-p and media settings are adjusted in playgrounds when supported.
- [[model-and-app-evaluation]] — next step when manual testing must become repeatable evidence.
- [[image-generation]] — image playground path.
- [[video-generation]] — video playground path.
- [[vision-enabled-chat]] — chat playground with image input.
- [[ai-agents]] — agent playground tests instruction-following and multi-turn context.
- [[src-90-explore-model-playground]] — model playground source.
- [[src-39-deploy-models-endpoints]] — deployment playground and code samples.
- [[src-53-evaluate-model-performance]] — manual versus automated evaluation boundary.
- *Also linked from:* [[development-tools-and-approaches]] · [[overview]]

## Sources

- SRC-14 — [[src-14-build-first-agent-microsoft-foundry]] — agent playground and multi-turn testing.
- SRC-39 — [[src-39-deploy-models-endpoints]] — deployment playground, settings, and code samples.
- SRC-53 — [[src-53-evaluate-model-performance]] — manual playground testing as one evaluation approach.
- SRC-86 — [[src-86-explore-image-generation-models-microsoft-foundry-portal]] — image-generation playground.
- SRC-90 — [[src-90-explore-model-playground]] — model playground capabilities.
- SRC-100 — [[src-100-generate-video-prompt]] — video playground and cURL samples.
- SRC-189 — [[src-189-select-deploy-evaluate-microsoft-foundry-models-episode-2]] — side-by-side model comparison and transition to automated evaluation.
- SRC-197 — [[src-197-summary-generate-images-ai]] — Images playground summary.
- SRC-248 — [[src-248-vision-capable-model-microsoft-foundry-portal]] — multimodal chat playground with image upload.

## Open questions

- The corpus does not provide a full inventory of all Foundry playground names, regional availability, or exact portal navigation for every modality.
- The corpus does not state whether every code sample generated from a playground follows the same SDK surface or API version.
