---
title: "What are image-generation models-"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Defines image-generation models as text-to-image generators and names gpt-image-1 and FLUX families in Foundry."
area: vision
source_ids: [SRC-258]
objectives: [V01, P01]
tags: [image-generation, text-to-image, model-catalog, flux, gpt-image-1]
aliases: ["SRC-258"]
source_kind: learn-unit
module: "Generate images with AI"
learning_path: null
unit: "2 of 7"
presenters: []
raw_file: "258-What are image-generation models- - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/generate-images-azure-openai/2-what-is-dall-e"
ingest_depth: full
---

# What are image-generation models-

*learn-unit · Generate images with AI · unit 2 of 7 · SRC-258*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-258 |
| Raw file | `258-What are image-generation models- - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | None |
| Module | Generate images with AI |
| Unit / episode | 2 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/generate-images-azure-openai/2-what-is-dall-e |
| Teaching content | L208–223 of 253 |
| Content length | ~204 words |
| Capture quality | High |
| Ingest depth | full |

## TL;DR

Microsoft Foundry supports multiple image-capable model families, including OpenAI `gpt-image-1` and Black Forest Labs FLUX models. (SRC-258 L212–214) Image-generation models create graphical data from natural-language input, producing original images rather than retrieving catalogued images. (SRC-258 L216–223)

## Key claims

- Microsoft Foundry supports multiple image-generating models, including the OpenAI `gpt-image-1` series and the Black Forest Labs FLUX series. (SRC-258 L212–214)
- The Foundry model catalog can be filtered by inference task to find text-to-image models. (SRC-258 L215)
- Image-generation models create graphical data from natural-language input. (SRC-258 L216)
- A prompt such as `A robot eating spaghetti` can produce graphical output. (SRC-258 L218–220)
- Generated images are original and are not retrieved from a curated image catalog. (SRC-258 L221–223)

## How it works

The unit frames the model interaction as text-to-image generation: the user provides a natural-language description, and the model returns an appropriate image. (SRC-258 L216–220) The source explicitly distinguishes generation from search by saying generated images are original, not retrieved from a curated catalog. (SRC-258 L221–223)

## Code and API patterns

Not covered by this source. It identifies model families and the model catalog filter, but it does not show a client request. (SRC-258 L212–216)

## Key terms

- **Image-generation model:** a generative AI model that creates graphical data from natural-language input. (SRC-258 L216)
- **Text to image:** the inference-task filter named for finding image-generation models in the Foundry portal. (SRC-258 L215)
- **gpt-image-1:** an OpenAI model series named as image-capable in Foundry. (SRC-258 L213)
- **FLUX:** a Black Forest Labs model series named as image-capable in Foundry. (SRC-258 L214)

## Decision boundaries and exam cues

- **Inference:** Choose an image-generation model when the user needs a new image produced from a description, not when the task is to retrieve an existing image. (SRC-258 L216–223)
- **Inference:** In the Foundry model catalog, `text to image` is the key inference-task clue for this capability. (SRC-258 L215)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** The named model families and catalog availability can change over time. (SRC-258 L212–215)

## Relation to other sources

- [[src-136-introduction-generate-images-ai]] frames the module around apps that generate original images from descriptions. (SRC-136 L212–215)
- [[src-86-explore-image-generation-models-microsoft-foundry-portal]] extends the model-catalog idea into playground use. (SRC-86 L212–215)
- [[src-172-module-assessment-generate-images-ai]] asks learners which inference task finds image models in Foundry. (SRC-172 L210–213)
- [[src-97-generate-images-video-episode-23]] names similar model families and demonstrates the `text to image` filter. (SRC-97 L52–57; SRC-97 L282–291)

## Connections

- [[image-generation]] — the source defines the mechanism of text-to-image generation. (SRC-258 L216–223)
- [[model-catalog]] — the source tells learners to use the catalog and filter by inference task. (SRC-258 L215)
- [[model-selection]] — the source lists image-capable model families. (SRC-258 L212–214)
- [[microsoft-foundry]] — Foundry is the platform where the models are selected. (SRC-258 L212–215)

## Open questions

- The source does not state exact deployment settings, supported regions, pricing, or SDK request shape. (SRC-258 L212–223)

## Sources

- SRC-258 — raw file: [[258-What are image-generation models- - Training - Microsoft Learn]]
