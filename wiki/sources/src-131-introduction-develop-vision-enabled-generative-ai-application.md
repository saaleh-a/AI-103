---
title: "Introduction — Develop a vision-enabled generative AI application"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Introduces vision-enabled generative AI apps that respond to prompts mixing text and image data."
area: vision
source_ids: [SRC-131]
objectives: []
tags: [vision-enabled-chat, multimodal-models, microsoft-foundry]
aliases: ["SRC-131"]
source_kind: learn-unit
module: "Develop a vision-enabled generative AI application"
learning_path: null
unit: "1 of 6"
presenters: []
raw_file: "131-Introduction - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/develop-generative-ai-vision-apps/1-introduction"
ingest_depth: full
---

# Introduction — Develop a vision-enabled generative AI application

*learn-unit · Develop a vision-enabled generative AI application · unit 1 of 6 · SRC-131*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-131 |
| Raw file | `131-Introduction - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | null |
| Module | Develop a vision-enabled generative AI application |
| Unit / episode | 1 of 6 |
| Presenter(s) | none |
| URL | https://learn.microsoft.com/en-gb/training/modules/develop-generative-ai-vision-apps/1-introduction |
| Teaching content | L207–214 of 244 |
| Content length | ~149 words |
| Capture quality | High; concise Learn introduction with video/text option note. |
| Ingest depth | full |

## TL;DR

Generative AI chat applications can reason over and respond to inputs that are often text prompts, while multimodal models that respond to visual input are increasingly available. (SRC-131 L211) This module frames vision-enabled generative AI as Microsoft Foundry solutions that respond to prompts containing a mix of text and image data. (SRC-131 L212)

## Key claims

- Generative AI models support chat-based applications that reason over and respond to input. (SRC-131 L211)
- The input to those applications often takes the form of a text-based prompt. (SRC-131 L211)
- Multimodal models that respond to visual input are becoming available. (SRC-131 L211)
- The module explores using Microsoft Foundry to create generative AI solutions whose prompts include both text and image data. (SRC-131 L212)
- The source says the text version contains greater detail than the videos and can supplement the video presentation. (SRC-131 L214)

## How it works

The source introduces the problem space rather than a procedure: a chat application receives input, and the model reasons over and responds to that input. (SRC-131 L211) The new capability is visual input, handled by multimodal models rather than by text-only prompting. (SRC-131 L211) The module scope is to use Microsoft Foundry for prompts that combine text with image data. (SRC-131 L212)

## Code and API patterns

Not covered by this source.

## Key terms

- **Generative AI models** — models used to develop chat-based applications that reason over and respond to input. (SRC-131 L211)
- **Multimodal models** — models that can respond to visual input, contrasted in this source with text-based prompts. (SRC-131 L211)
- **Vision-enabled generative AI** — generative AI solutions that respond to prompts containing mixed text and image data. (SRC-131 L212)

## Decision boundaries and exam cues

- **Inference:** If a scenario requires a model to respond to visual input, the source points away from a purely text-only prompt pattern and toward a multimodal model capability. (SRC-131 L211)
- **Inference:** If a scenario mentions Microsoft Foundry plus prompts containing both text and images, this unit is the module entry point for vision-enabled chat rather than image generation or document extraction. (SRC-131 L212)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** The source says multimodal models that can respond to visual input are increasingly becoming available, so specific model availability should be checked against current Foundry model listings. (SRC-131 L211)
- The source is an introduction and does not name particular models, endpoints, APIs, or implementation steps. (SRC-131 L211–212)

## Relation to other sources

- SRC-248 extends this introduction by naming example multimodal models in Microsoft Foundry and describing chat playground testing with image uploads. (SRC-248 L213–221)
- SRC-46 extends this introduction into client-app implementation using endpoint connections and multi-part user messages. (SRC-46 L213–223)
- SRC-210 summarizes the same module outcome: implementing chat solutions that include image-based input. (SRC-210 L213)

## Connections

- [[vision-enabled-chat]] — the source introduces chat prompts that mix text and image data. (SRC-131 L212)
- [[model-selection]] — the source makes visual-input support a model capability question. (SRC-131 L211)
- [[microsoft-foundry]] — the source places the module's solution-building surface in Microsoft Foundry. (SRC-131 L212)

## Open questions

- Which current Microsoft Foundry models support the visual-input scenarios beyond the examples given later in the module?
- Which visual reasoning tasks are reliable enough for exam scenarios versus requiring evaluation in practice?

## Sources

- SRC-131 — raw file: [[131-Introduction - Training - Microsoft Learn]]
