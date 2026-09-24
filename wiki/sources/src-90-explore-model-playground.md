---
title: "Explore with the model playground"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Shows how the Model playground helps test prompts, settings and generated SDK samples before coding."
area: models
source_ids: [SRC-90]
objectives: [G01, G05, G13]
tags: [model-playground, prompt-testing, code-samples]
aliases: ["SRC-90"]
source_kind: learn-unit
module: "Develop a generative AI chat app with Microsoft Foundry"
learning_path: "Develop generative AI apps in Azure"
unit: "2 of 8"
presenters: []
raw_file: "90-Explore with the model playground - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/foundry-sdk/02-chat-playground"
ingest_depth: full
---
# Explore with the model playground

*learn-unit · Develop a generative AI chat app with Microsoft Foundry · unit 2 of 8 · SRC-90*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-90 |
| Raw file | 90-Explore with the model playground - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop generative AI apps in Azure |
| Module | Develop a generative AI chat app with Microsoft Foundry |
| Unit / episode | 2 of 8 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/foundry-sdk/02-chat-playground |
| Teaching content | L211–241 of 271 |
| Content length | ~396 words |
| Capture quality | High; concise portal workflow. |
| Ingest depth | full |

## TL;DR

Before writing code, the source recommends using the Foundry portal to test what the project can do. (SRC-90 L217) The Model playground lets the learner send prompts, tune settings, add system messages and compare models before generating code samples. (SRC-90 L219–232)

## Key claims

- The Foundry portal provides interactive tools for testing models and generating code samples. (SRC-90 L217)
- The Model playground is an interactive environment for testing models before code is written. (SRC-90 L218–219)
- The playground can send prompts to deployed models, adjust temperature and token settings, add system messages and try different models. (SRC-90 L220–224)
- The no-code environment helps reveal how models respond to inputs and settings. (SRC-90 L225)
- The Code button can generate samples that reproduce a chat session in an application. (SRC-90 L226–227)
- Generated samples can vary by API, language and SDK. (SRC-90 L228–231)
- Generated samples are pre-populated with the project endpoint, model deployment name and current settings. (SRC-90 L232)

## How it works

The workflow is: test prompts and settings in the playground, use the Code tab for SDK samples, customize the generated code in the development environment, then return to the playground for further iteration. (SRC-90 L234–240)

## Code and API patterns

No code listing is captured, but the source says generated samples can be selected by API, language and SDK, including the Responses API or ChatCompletions. (SRC-90 L228–231) The generated code carries current project details such as endpoint, deployment name and settings. (SRC-90 L232)

## Key terms

- **Model playground:** A Foundry portal environment for testing models before writing code. (SRC-90 L218–219)
- **Code button:** The chat-pane feature that displays code samples to reproduce the chat session. (SRC-90 L226–227)
- **System message:** A playground customization for model behavior. (SRC-90 L222–223)
- **Temperature and max tokens:** Settings the playground exposes for experimentation. (SRC-90 L221–222)

## Decision boundaries and exam cues

- **Inference:** Use the playground when the task is to prototype prompts, model settings or SDK starter code before building the application. (SRC-90 L217–225)
- **Inference:** If a scenario asks for a ready starting point that includes endpoint, deployment and settings, the Code button is the relevant clue. (SRC-90 L226–233)
- **Inference:** The playground is not presented as the runtime app; it feeds the develop-and-iterate workflow. (SRC-90 L234–240)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source does not specify exact generated code contents; it states that samples are generated and pre-populated. (SRC-90 L227–233)

## Relation to other sources

- [[src-120-introduction-develop-generative-ai-chat-app-microsoft-foundry]] introduces the endpoint, SDK, authentication and API choices that follow playground exploration. (SRC-120 L215–216)
- [[src-18-choose-endpoint-sdk]] continues from this source by teaching endpoints and SDKs. (SRC-18 L217–222)
- [[src-42-develop-generative-ai-chat-app-microsoft-foundry-episode-3]] demonstrates the playground and mentions temperature, max tokens, system messages and code samples. (SRC-42 L24–78)

## Connections

- [[model-playgrounds]] — this source is directly about the Model playground. (SRC-90 L218–225)
- [[prompt-engineering]] — the playground supports prompt and system-message experimentation. (SRC-90 L220–224)
- [[generation-parameters]] — temperature and max tokens are named as adjustable settings. (SRC-90 L221–222)
- [[development-tools-and-approaches]] — the source contrasts no-code exploration with later code development. (SRC-90 L217–240)
- [[responses-api]] — generated samples can target the Responses API. (SRC-90 L228–229)
- [[chat-completions-api]] — generated samples can target ChatCompletions. (SRC-90 L228–229)

## Open questions

- The source does not show the actual generated code snippets in the capture. (SRC-90 L226–233)

## Sources

- SRC-90 — raw file: [[90-Explore with the model playground - Training - Microsoft Learn]]
