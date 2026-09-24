---
title: "Image generation"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Generating original images from natural-language prompts with Foundry image models, playgrounds, and Images APIs."
area: vision
source_ids: [SRC-32, SRC-86, SRC-89, SRC-97, SRC-136, SRC-172, SRC-191, SRC-197, SRC-210, SRC-258]
objectives: [V01, V05]
objective_gaps: [V03]
tags: []
aliases: ["image-generation models", "gpt-image-1", "DALL-E", "text to image", "Images API"]
---

# Image generation

## Summary

Image generation uses a model that creates new graphical output from natural-language input; the output is original rather than retrieved from an image catalog (SRC-258 L219–223). The corpus teaches model discovery, playground experimentation, reference images, SDK/API consumption, and base64/binary handling, while inpainting and mask-based image editing are only named in the study guide (SRC-86 L214–215; SRC-32 L214–218; SRC-97 L398–402; SRC-191 L161–166).

## The problem it solves

When the desired asset can be described but does not already exist, image generation turns a natural-language description into an illustration, photorealistic image, logo, marketing visual, or similar graphic (SRC-136 L212–215). It is not a search system for finding a pre-existing image; it creates a new image from learned patterns (SRC-258 L219–223).

## Mental model

You choose a model with text-to-image capability, give it a prompt describing the desired scene, optionally constrain size or provide a reference image if the model supports it, and handle image bytes returned by the API (SRC-86 L214–215; SRC-97 L58–68; SRC-97 L370–407).

## What the sources say

- SRC-258 defines the mechanism: Foundry supports image-capable models such as OpenAI gpt-image-1 and FLUX, and the portal can filter the catalog by inference task to find text-to-image models (SRC-258 L214–219). **Stale-risk:** model families and catalog filters may change.
- SRC-89 places image generation in the model catalog as a specialized model category: image generation models like GPT-image-1 create images from text descriptions, for use cases such as marketing materials, illustrations, and design mockups (SRC-89 L235–238).
- SRC-86 teaches the portal workflow: create a Foundry project, use the model playground, submit prompts, view generated images, and where supported specify resolution and reference image (SRC-86 L214–215).
- SRC-32 teaches the application workflow: use a language-specific SDK such as the OpenAI Python SDK or Azure OpenAI .NET SDK; the example uses the OpenAI Images API and receives a binary stream containing the requested image (SRC-32 L214–218).
- SRC-97’s episode warns that a model used for chat and vision reading may not generate images; it demonstrates filtering to text-to-image, deploying an image model, using `client.images.generate`, and decoding base64 image data from the response (SRC-97 L33–57; SRC-97 L273–291; SRC-97 L370–407).
- SRC-172's assessment asks which inference task to filter by to find image-generation models and which OpenAI API to use with them, listing `Text to image` and `Image` among the options (SRC-172 L210–218); the capture shows no checked answers, but the teaching units carry both cues: filter the catalog by inference task to find text-to-image models (SRC-258 L218), and use the OpenAI Images API (SRC-32 L215).

## How it works in Azure

The Azure workflow is model-first: locate a text-to-image model in the Foundry model catalog, deploy it to a project, test prompts in the Images playground, then call the Images API or a language SDK from an app (SRC-258 L214–219; SRC-86 L214–215; SRC-197 L214). The episode’s code path builds an OpenAI client with an endpoint and token provider, calls `images.generate` with model, prompt, count, and size, then extracts the generated image from the response data array and writes decoded bytes to disk (SRC-97 L338–364; SRC-97 L370–407; SRC-97 L425–437).

## Code and configuration

The important API shape in the corpus is `client.images.generate`: supply the deployed model, prompt, number of images, and output size; the response contains a `data` array, so multiple requested images would appear as `data[0]`, `data[1]`, and so on (SRC-97 L83–115; SRC-97 L370–407). The raw Learn unit summarizes the same application idea as using the OpenAI Images API from a language-specific SDK and receiving a binary image stream (SRC-32 L214–218).

## Decision boundaries

- **Image generation vs vision-enabled chat:** choose image generation when the required output is a new image; choose vision-enabled chat when the model must understand an existing image and answer in text (SRC-258 L219–223; SRC-210 L213–214).
- **Text-to-image model vs general chat model:** the episode states GPT 4.1 can read images and text but does not generate new images, so a different image-capable model is needed (SRC-97 L33–57).
- **Reference media vs editing:** the corpus covers reference images in the playground and episode as guidance for generation, but V03 image-editing workflows with inpainting, masks, and prompt-driven modifications are only named in the study guide, not taught as a workflow in the image generation units (SRC-86 L214–215; SRC-97 L64–68; SRC-191 L161–166).
- **Generation controls:** the corpus shows prompt, image count, pixel size/resolution, and reference images as controls, but does not provide a full platform-control taxonomy (SRC-86 L214–215; SRC-97 L91–98; SRC-191 L166).

## Failure modes and misconceptions

- **Synthesis:** Do not assume image generation retains conversational context like chat; in the episode, when the presenter wants the generated robot image changed to include a restaurant, he repeats the whole prompt because the image playground is not carrying chat context forward (SRC-97 L310–324).
- **Stale-risk:** DALL-E, GPT Image, FLUX, Microsoft My Image 2 and gpt-image-1 appear as model examples across the corpus, but model availability and names are time-sensitive (SRC-97 L48–57; SRC-258 L214–216).
- Do not describe generated images as retrieved stock content; the source explicitly says they are original and not retrieved from a curated catalog (SRC-258 L219–223).

## Solution Engineering transfer

**Inference:** A customer signal is, "We need campaign visuals, concepts, or mockups from descriptions." Ask whether they need a one-off generated asset, many consistent variants, a reference-image guided style, or true editing/inpainting; the last item is an exam objective but not implemented in this corpus (SRC-136 L212–215; SRC-191 L164–166).

## Connections

- [[model-catalog]] — models are found by inference task, including text to image.
- [[model-selection]] — choosing an image model is the first decision.
- [[model-playgrounds]] — playgrounds are used for prompt testing before code.
- [[vision-enabled-chat]] — closest confusion: reading an image vs creating one.
- [[video-generation]] — adjacent media-generation workflow with slower asynchronous jobs.
- [[corpus-gaps]] — V03 inpainting and mask-based edits are named but not taught.
- [[src-258-what-are-image-generation-models]] — definition and model examples.
- [[src-97-generate-images-video-episode-23]] — episode with portal and code walkthrough.
- *Also linked from:* [[azure-openai]] · [[generation-parameters]] · [[overview]] · [[sora-2]]

## Sources

- SRC-32 — [[src-32-create-client-application-that-uses-image-generation-model]] — client app and Images API summary
- SRC-86 — [[src-86-explore-image-generation-models-microsoft-foundry-portal]] — playground and reference-image controls
- SRC-89 — [[src-89-explore-model-catalog]] — model catalog category
- SRC-97 — [[src-97-generate-images-video-episode-23]] — image generation episode walkthrough
- SRC-136 — [[src-136-introduction-generate-images-ai]] — module introduction and use cases
- SRC-172 — [[src-172-module-assessment-generate-images-ai]] — assessment cues
- SRC-191 — [[src-191-study-guide-exam-ai-103-developing-ai-apps-agents]] — official V01, V03 and V05 objective names
- SRC-197 — [[src-197-summary-generate-images-ai]] — module summary
- SRC-210 — [[src-210-summary-develop-vision-enabled-generative-ai-application]] — contrast with vision understanding
- SRC-258 — [[src-258-what-are-image-generation-models]] — image model definition

## Open questions

- Which current Foundry image models support inpainting, mask inputs, and prompt-driven edits?
- Which generation controls are exam-relevant beyond prompt, size, count, and reference media?
