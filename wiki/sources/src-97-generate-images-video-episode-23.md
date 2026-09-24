---
title: "Generate images and video - AI-103 - Episode 23"
type: source
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Episode demo of image and video generation in Foundry: image models, Images API, Sora 2, video jobs, remix, and reference images."
area: vision
source_ids: [SRC-97]
objectives: [V01, V02, V04, V05, G05, G13]
tags: [episode, image-generation, video-generation, sora-2, openai-sdk, foundry-playground]
aliases: ["SRC-97"]
source_kind: episode
module: "Generate images and video"
learning_path: null
unit: null
presenters: ["ROB FOULKROD"]
raw_file: "97-Generate images and video - AI-103 - Episode 23.md"
url: "https://www.youtube.com/watch?v=XNeW6L8wj9k"
ingest_depth: full
---

# Generate images and video - AI-103 - Episode 23

*episode · Generate images and video · SRC-97*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-97 |
| Raw file | `97-Generate images and video - AI-103 - Episode 23.md` |
| Kind | episode |
| Learning path | None |
| Module | Generate images and video |
| Unit / episode | Episode 23 |
| Presenter(s) | ROB FOULKROD |
| URL | https://www.youtube.com/watch?v=XNeW6L8wj9k |
| Teaching content | L3–828 of 828 |
| Content length | ~3,758 words |
| Capture quality | Medium: auto-caption transcript with hard line breaks and likely caption errors. |
| Ingest depth | full |

## TL;DR

Rob Foulkrod presents image and video generation as a shift from consuming visual content to having apps generate new images or clips from prompts. (SRC-97 L4–18) The episode covers image models, Foundry playground exploration, OpenAI Image API code, Sora 2 video generation, polling for asynchronous video jobs, remixing, and reference-image video generation. (SRC-97 L19–30; SRC-97 L181–256; SRC-97 L614–666)

## Key claims

- A short prompt can become a new image or video clip in the described style and subject. (SRC-97 L10–14)
- GPT 4.1 is presented as a model that can read visual content but does not generate new images in the demo context. (SRC-97 L33–45)
- Image generation uses different models such as GPT Image, FLUX models, or Microsoft's My Image 2 model. (SRC-97 L46–57)
- Image prompts can include reference images and always include a prompt describing the scene. (SRC-97 L60–68)
- The OpenAI client exposes an `images` property and image generation supplies model, prompt, number of images, and output size. (SRC-97 L82–98)
- The returned image data is base64 encoded and must be decoded before writing to disk. (SRC-97 L99–115)
- Video generation uses different models from image generation, with Sora 2 named as a video-generation model deployable in Microsoft Foundry. (SRC-97 L122–133)
- Stronger video prompts can specify camera framing, subject, action, and lighting. (SRC-97 L134–178)
- Video generation uses `videos.create`, then polling and final download through the videos object. (SRC-97 L181–256)
- The episode demonstrates image model deployment, image playground prompting, image code, video model deployment, video playground testing, video code, remixing, and reference-image generation. (SRC-97 L257–272; SRC-97 L273–437; SRC-97 L441–748)

## How it works

For images, the presenter says a Foundry project may already have a GPT model, but that model lacks text-to-image capability in the demo, so a new model is deployed through the `text to image` task filter. (SRC-97 L273–291) The playground prompt changes from a robot eating spaghetti to a robot eating spaghetti in a restaurant, and the presenter notes that the image prompt should include the whole requested change rather than relying on chat-style retained context. (SRC-97 L296–324)

For image code, the app imports OpenAI and DefaultAzureCredential, builds an OpenAI client with endpoint and token provider, calls `client.images.generate`, and reads image data from a returned JSON document. (SRC-97 L338–382) The response has a `Data` array, the first item contains base64 JSON data, and the program decodes it into bytes before writing an image file. (SRC-97 L383–437)

For video, the presenter filters Foundry models by Video Generation, selects Sora 2, deploys it with default settings, and tests a four-second video in the playground. (SRC-97 L441–484) The code loads environment variables for the resource and Sora 2 deployment, creates an OpenAI client, uses the `videos` object, calls `create`, then polls with `videos.retrieve` until a final status appears. (SRC-97 L516–570) After completion, the app calls download content on the videos object, passes the video ID, and writes the video to disk. (SRC-97 L571–586)

The video demo creates one blue-green mountain-lake video, remixes it by passing the old video ID to `videos.remix` with a prompt that shifts the palette to warm sunset tones, and creates a third video from a reference image using `input_reference`. (SRC-97 L589–666) The presenter summarizes the API surface as the videos object with `create`, `remix`, and `create` with `input_reference`. (SRC-97 L736–748)

## Segment guide

- L4–32 — Opening: the session changes from consuming visual content to generating images and videos, and previews image models, the Foundry portal playground, Image API code, video deployment, and prompt-to-video generation. (SRC-97 L4–32)
- L33–68 — Image model selection: GPT 4.1 is contrasted with image-capable models such as GPT Image, FLUX, and Microsoft My Image 2, with prompts and optional reference images. (SRC-97 L33–68)
- L69–121 — Image API overview: the OpenAI client has an `images` property, accepts model, prompt, number of images, and size, and returns base64 image data to decode and write. (SRC-97 L69–121)
- L122–180 — Video model and prompting overview: video uses different models such as Sora 2, and quality depends on descriptive prompts with framing, subject, action, and lighting. (SRC-97 L122–180)
- L181–256 — Video API overview: `videos.create` supplies model, prompt, size, and duration, then polling checks status until completion, failure, or cancellation before download. (SRC-97 L181–256)
- L257–437 — Image demo: the presenter deploys a FLUX image model, tries the playground, then runs Python code using OpenAI and DefaultAzureCredential to save a generated robot image. (SRC-97 L257–437)
- L438–586 — Video deployment and basic code: the presenter filters models by Video Generation, deploys Sora 2, tests a conference-room video, creates an OpenAI client, uses `videos.create`, polls, and downloads the result. (SRC-97 L438–586)
- L589–748 — Remix and reference-image demo: the app creates a blue-green video, remixes it to warm sunset tones, and generates a video from a reference image using `input_reference`. (SRC-97 L589–748)
- L752–811 — Checks and wrap-up: the presenter asks about the text-to-image filter and the videos object, then summarizes images, videos, prompts, base64 image data, and video polling. (SRC-97 L752–811)

## Code and API patterns

- **Image generation:** Build an OpenAI client, use `client.images.generate`, pass model, prompt, number of images, and size, then decode the returned base64 data and write bytes to disk. (SRC-97 L82–115; SRC-97 L338–407)
- **Video generation:** Use the same OpenAI client pattern but call the client's `videos` object and `videos.create` with model, prompt, size, and duration. (SRC-97 L181–205; SRC-97 L516–540)
- **Video polling:** Retrieve the video job status repeatedly until it reaches completed, failed, or canceled; the demo sleeps for 20 seconds between checks. (SRC-97 L218–241; SRC-97 L555–570)
- **Video download:** When completed, use the videos object to download content using the video ID and write it to disk. (SRC-97 L246–256; SRC-97 L571–586)
- **Remix:** Pass the old video ID to `videos.remix` and provide a new prompt for a targeted change. (SRC-97 L614–625)
- **Reference image:** Pass an image path through `input_reference` when calling create so the image becomes the base for generated video. (SRC-97 L629–666)

## Key terms

- **Text to image:** the inference-task filter used to find image-generation models in the demo. (SRC-97 L282–286; SRC-97 L756–762)
- **Video Generation:** the inference-task filter used to find video-generation models. (SRC-97 L441–455)
- **images.generate:** the image API call named in the code walkthrough. (SRC-97 L369–382)
- **videos object:** the OpenAI API object used for video creation, retrieval, download, and remixing. (SRC-97 L531–540; SRC-97 L763–766)
- **input_reference:** the parameter used to pass a reference image to video creation. (SRC-97 L661–666)

## Decision boundaries and exam cues

- **Inference:** The episode separates image-capable models from vision-reading models; image generation requires a model with text-to-image capability rather than a general GPT model used for prior chat demos. (SRC-97 L33–57; SRC-97 L273–291)
- **Inference:** Image generation returns base64 image data to decode, while video generation returns a job-like object requiring polling and later download. (SRC-97 L99–115; SRC-97 L218–256)
- **Inference:** Use remix when the requirement is to change an existing video while preserving much of its structure, and use `input_reference` when the requirement is to animate from a starting image. (SRC-97 L614–666; SRC-97 L713–748)

## Assessment items

1. The presenter asks which inference task to filter by in Microsoft Foundry to generate images; the spoken answer is `Text to images`. (SRC-97 L756–762)
2. The presenter asks which OpenAI API object is used to download video from a video-generation model; the spoken answer is the `videos` object. (SRC-97 L763–766)

## Tensions, caveats and currency

- The transcript is auto-captioned and includes likely transcription artifacts such as `generating images in video`, so exact product phrasing should be checked against Learn units when precision matters. (SRC-97 L17–18)
- **Stale-risk:** Model names such as GPT Image, FLUX, Microsoft My Image 2, and Sora 2 reflect the episode capture and can change in Foundry. (SRC-97 L52–57; SRC-97 L128–133)
- **Stale-risk:** The presenter says video durations may have set supported values such as 4, 8, or 12 and tells learners to look up the API for supported length. (SRC-97 L206–217)

## Relation to other sources

- [[src-136-introduction-generate-images-ai]] introduces the same idea of generating original graphical content from descriptions. (SRC-136 L212–215)
- [[src-258-what-are-image-generation-models]] gives the Learn-unit definition that generated images are original and not catalog retrieval. (SRC-258 L216–223)
- [[src-32-create-client-application-that-uses-image-generation-model]] names SDK-based image-generation clients; the episode shows the code flow in more detail. (SRC-32 L212–218; SRC-97 L338–437)
- [[src-38-deploy-video-generating-model]] gives the Learn-unit Sora 2 deployment steps that the episode demonstrates in the portal. (SRC-38 L219–226; SRC-97 L441–466)
- [[src-100-generate-video-prompt]] teaches prompt anatomy, reference images, and remixing that the episode demonstrates. (SRC-100 L231–270; SRC-97 L589–748)
- [[src-101-generate-video-python]] describes the same create-poll-download video job pattern used in the episode. (SRC-101 L212–237; SRC-97 L516–586)

## Connections

- [[image-generation]] — the episode demonstrates image generation in portal and code. (SRC-97 L273–437)
- [[video-generation]] — the episode demonstrates Sora 2 video deployment, prompting, polling, remixing, and reference images. (SRC-97 L441–748)
- [[sora-2]] — Sora 2 is the deployed video-generation model in the demo. (SRC-97 L441–466)
- [[openai-sdk]] — the episode uses the OpenAI client for images and videos. (SRC-97 L338–382; SRC-97 L516–540)
- [[model-playgrounds]] — the episode uses both image and video playgrounds before code. (SRC-97 L292–334; SRC-97 L467–484)
- [[prompt-engineering]] — the presenter stresses detailed image/video prompts and uses generative AI to help create prompts. (SRC-97 L134–178; SRC-97 L780–788)
- [[keyless-authentication]] — the image and video code use DefaultAzureCredential and token providers. (SRC-97 L338–364; SRC-97 L522–529)
- *Module units:* [[src-136-introduction-generate-images-ai|1 Introduction]] · [[src-258-what-are-image-generation-models|2 What are image-generation models-]] · [[src-86-explore-image-generation-models-microsoft-foundry-portal|3 Explore image-generation models in Microsoft Foundry portal]] · [[src-32-create-client-application-that-uses-image-generation-model|4 Create a client application that uses an image generation model]] · [[src-74-exercise-generate-images-ai|5 Exercise - Generate images with AI]] · [[src-172-module-assessment-generate-images-ai|6 Module assessment]] · [[src-197-summary-generate-images-ai|7 Summary]]

## Open questions

- The episode does not provide exact code listings in the transcript, so method signatures and imports should be verified against SDK documentation or preserved Learn code when available. (SRC-97 L338–437; SRC-97 L516–666)
- The episode tells learners to look up supported video lengths for the model rather than giving a durable list. (SRC-97 L206–217)

## Sources

- SRC-97 — raw file: [[97-Generate images and video - AI-103 - Episode 23]]
