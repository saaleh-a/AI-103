---
title: "Use a vision-capable model in the Microsoft Foundry portal"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Shows that image prompts require a deployed multimodal model and can be tested in the Foundry chat playground."
area: vision
source_ids: [SRC-248]
objectives: [P01, G01, V06, V08]
tags: [multimodal-models, model-catalog, chat-playground, microsoft-foundry]
aliases: ["SRC-248"]
source_kind: learn-unit
module: "Develop a vision-enabled generative AI application"
learning_path: null
unit: "2 of 6"
presenters: []
raw_file: "248-Use a vision-capable model in the Microsoft Foundry portal - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/develop-generative-ai-vision-apps/2-deploy-multimodal-model"
ingest_depth: full
---

# Use a vision-capable model in the Microsoft Foundry portal

*learn-unit · Develop a vision-enabled generative AI application · unit 2 of 6 · SRC-248*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-248 |
| Raw file | `248-Use a vision-capable model in the Microsoft Foundry portal - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | null |
| Module | Develop a vision-enabled generative AI application |
| Unit / episode | 2 of 6 |
| Presenter(s) | none |
| URL | https://learn.microsoft.com/en-gb/training/modules/develop-generative-ai-vision-apps/2-deploy-multimodal-model |
| Teaching content | L207–221 of 251 |
| Content length | ~152 words |
| Capture quality | High; short Learn unit with specific model examples. |
| Ingest depth | full |

## TL;DR

Prompts that include images require deploying a multimodal generative AI model, meaning one that supports text-based input and image-based input, and sometimes audio-based input too. (SRC-248 L213) The unit names Microsoft Phi-4-multimodal-instruct, OpenAI gpt-4.1, and OpenAI gpt-4.1-mini as examples available in Microsoft Foundry. (SRC-248 L213–216) After deployment, the model can be tested in the Microsoft Foundry portal chat playground by uploading a local image and adding text to the message. (SRC-248 L219–221)

## Key claims

- Image prompts require a deployed multimodal generative AI model. (SRC-248 L213)
- A multimodal model supports text-based input and image-based input, and some also support audio-based input. (SRC-248 L213)
- Microsoft Foundry includes multimodal model examples such as Microsoft Phi-4-multimodal-instruct, OpenAI gpt-4.1, and OpenAI gpt-4.1-mini. (SRC-248 L213–216)
- The Microsoft Foundry Models overview is the place the source points to for more detail about available models. (SRC-248 L217–218)
- The Microsoft Foundry portal chat playground can test a deployed multimodal model with an uploaded local image plus text in the message. (SRC-248 L219–221)

## How it works

The workflow in this source has two steps: first deploy a multimodal model that can handle image-containing prompts, then test that deployment in the Microsoft Foundry portal chat playground. (SRC-248 L213; SRC-248 L219–221) The chat playground test combines an uploaded image from a local file with text in the same message to elicit a response from the model. (SRC-248 L221)

## Code and API patterns

Not covered by this source.

## Key terms

- **Multimodal generative AI model** — a model that supports text-based input and image-based input, and in some cases audio-based input. (SRC-248 L213)
- **Chat playground** — the Microsoft Foundry portal experience where a deployed multimodal model can be tested with a local image upload and text message. (SRC-248 L219–221)

## Decision boundaries and exam cues

- **Inference:** If a task asks for a response to visual input, choose a multimodal model rather than an embedding model or a text-only model. (SRC-248 L213)
- **Inference:** If the task is only to try an image prompt interactively after deployment, the Foundry portal chat playground is the source-backed surface. (SRC-248 L219–221)
- **Stale-risk:** Treat the named models as examples from the captured unit, not an exhaustive or permanent list of vision-capable models. (SRC-248 L213–218)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** Model names and availability in Microsoft Foundry can change; the source itself points readers to the Microsoft Foundry Models overview for available models. (SRC-248 L217–218)
- The source does not describe deployment settings, endpoint formats, authentication, or code. (SRC-248 L213–221)

## Relation to other sources

- SRC-131 introduces the module's problem: generative AI solutions that respond to prompts mixing text and image data. (SRC-131 L211–212)
- SRC-46 follows this portal-oriented unit with client-app implementation details for endpoint connections and API choices. (SRC-46 L213–223)
- SRC-47 demonstrates a similar workflow in the episode: select a model card with text and image processing, deploy it, upload a fruit image, and ask a question. (SRC-47 L185–219)

## Connections

- [[model-catalog]] — the source names model availability and points to the Foundry Models overview. (SRC-248 L213–218)
- [[model-playgrounds]] — the source uses the Foundry portal chat playground for image-prompt testing. (SRC-248 L219–221)
- [[model-selection]] — visual input is the deciding model capability in this unit. (SRC-248 L213)
- [[vision-enabled-chat]] — the playground message combines image and text input for a response. (SRC-248 L221)
- [[microsoft-foundry]] — the source's deployment and testing surface is Microsoft Foundry portal. (SRC-248 L219–221)

## Open questions

- Which deployment options and quota constraints apply to each vision-capable model in current Foundry?
- Which models in current Foundry support audio-based input in addition to text and image input?

## Sources

- SRC-248 — raw file: [[248-Use a vision-capable model in the Microsoft Foundry portal - Training - Microsoft Learn]]
