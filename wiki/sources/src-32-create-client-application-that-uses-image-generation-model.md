---
title: "Create a client application that uses an image generation model"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Connects image-generation models to SDK-based client apps, naming OpenAI Python and Azure OpenAI .NET SDK options."
area: vision
source_ids: [SRC-32]
objectives: [V01, G05]
tags: [image-generation, openai-sdk, azure-openai-sdk, client-application]
aliases: ["SRC-32"]
source_kind: learn-unit
module: "Generate images with AI"
learning_path: null
unit: "4 of 7"
presenters: []
raw_file: "32-Create a client application that uses an image generation model - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/generate-images-azure-openai/4-dall-e-rest-api"
ingest_depth: partial
---

# Create a client application that uses an image generation model

*learn-unit · Generate images with AI · unit 4 of 7 · SRC-32*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-32 |
| Raw file | `32-Create a client application that uses an image generation model - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | None |
| Module | Generate images with AI |
| Unit / episode | 4 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/generate-images-azure-openai/4-dall-e-rest-api |
| Teaching content | L208–218 of 248 |
| Content length | ~95 words |
| Capture quality | Partial code capture: the code block body is absent in the raw text. |
| Ingest depth | partial |

## TL;DR

Client applications can use language-specific SDKs such as the OpenAI Python SDK or Azure OpenAI .NET SDK to call image-generation models. (SRC-32 L214) The described result is a binary stream containing the requested image. (SRC-32 L218)

## Key claims

- A client application can use a language-specific SDK to generate images with a model. (SRC-32 L214–215)
- The source names the OpenAI Python SDK and Azure OpenAI .NET SDK as example SDKs for image-generation clients. (SRC-32 L214)
- The example submits a request to generate an image of a robot eating a cheeseburger. (SRC-32 L213–216)
- The result is a binary stream containing the requested image. (SRC-32 L218)

## How it works

The page bridges image generation from portal experimentation to client applications: code submits a prompt to an image-capable model through an SDK, and the application receives image data back. (SRC-32 L212–218)

## Code and API patterns

The raw capture names the OpenAI Images API, but the actual Python code block is not present between the `Python` and `Copy` markers. (SRC-32 L213–217) The only captured response-shape detail is that the result is a binary stream containing the requested image. (SRC-32 L218)

## Key terms

- **Language-specific SDK:** the client-library approach named for application development. (SRC-32 L214)
- **OpenAI Images API:** the API named for submitting an image-generation request. (SRC-32 L213–214)
- **Binary stream:** the captured form of the requested image result. (SRC-32 L218)

## Decision boundaries and exam cues

- **Inference:** Use an SDK or image API when the requirement is to build a custom application, not merely try a prompt in the Foundry portal. (SRC-32 L212–218)
- **Inference:** If the scenario mentions Python and image generation, the OpenAI Python SDK is a named route in this source. (SRC-32 L214)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The code block is missing from the capture, so this source should not be used as evidence for exact method names or parameters. (SRC-32 L213–217)

## Relation to other sources

- [[src-86-explore-image-generation-models-microsoft-foundry-portal]] covers portal playground experimentation before application code. (SRC-86 L212–215)
- [[src-197-summary-generate-images-ai]] summarizes REST APIs and SDKs as routes for image-generating applications. (SRC-197 L213–214)
- [[src-97-generate-images-video-episode-23]] provides a fuller image-code walkthrough with OpenAI client, `images.generate`, and base64 decoding. (SRC-97 L338–437)

## Connections

- [[image-generation]] — this source covers application consumption of image-generation models. (SRC-32 L212–218)
- [[openai-sdk]] — the OpenAI Python SDK is named as a client option. (SRC-32 L214)
- [[azure-openai]] — the Azure OpenAI .NET SDK is named as a client option. (SRC-32 L214)
- [[endpoints-and-sdk-choice]] — this source is evidence that SDK choice matters for client applications. (SRC-32 L214)
- *Module units:* [[src-136-introduction-generate-images-ai|1 Introduction]] · [[src-258-what-are-image-generation-models|2 What are image-generation models-]] · [[src-86-explore-image-generation-models-microsoft-foundry-portal|3 Explore image-generation models in Microsoft Foundry portal]] · [[src-74-exercise-generate-images-ai|5 Exercise - Generate images with AI]] · [[src-172-module-assessment-generate-images-ai|6 Module assessment]] · [[src-197-summary-generate-images-ai|7 Summary]] · [[src-97-generate-images-video-episode-23|episode 23]]

## Open questions

- The source does not preserve the exact Python snippet, request parameters, authentication setup, or endpoint format. (SRC-32 L213–217)

## Sources

- SRC-32 — raw file: [[32-Create a client application that uses an image generation model - Training - Microsoft Learn]]
