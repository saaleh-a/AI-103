---
title: "Choose a speech-capable model"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains using Microsoft Foundry Models to find speech-capable models for transcription and synthesis."
area: speech
source_ids: [SRC-17]
objectives: [P01, T05, T07]
tags: [speech, model-selection, microsoft-foundry-models, transcription, synthesis]
aliases: ["SRC-17"]
source_kind: learn-unit
module: "Develop a speech-capable generative AI application"
learning_path: "Develop natural language solutions in Azure"
unit: "2 of 7"
presenters: []
raw_file: "17-Choose a speech-capable model - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/develop-generative-ai-audio-apps/2-deploy-multimodal-model"
ingest_depth: full
---

# Choose a speech-capable model

*learn-unit · Develop a speech-capable generative AI application · unit 2 of 7 · SRC-17*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-17 |
| Raw file | `17-Choose a speech-capable model - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | Develop natural language solutions in Azure |
| Module | Develop a speech-capable generative AI application |
| Unit / episode | 2 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/develop-generative-ai-audio-apps/2-deploy-multimodal-model |
| Teaching content | L210–223 of 253 |
| Content length | ~146 words |
| Capture quality | High: short Learn unit with clear model-selection claims. |
| Ingest depth | full |

## TL;DR

Microsoft Foundry Models is described as a catalog containing generative AI models from multiple providers, with different capabilities and optimizations. (SRC-17 L216) For speech-capable models, the source says to consider models that transcribe speech to text and models that synthesize text to speech. (SRC-17 L218–220)

## Key claims

- Microsoft Foundry Models is a model catalog containing generative AI models from multiple providers. (SRC-17 L216)
- Different models have different capabilities and are optimized for different use cases. (SRC-17 L216)
- The Microsoft Foundry Portal provides filter and search features for finding a suitable model. (SRC-17 L217)
- Speech-capable model use cases include transcription from speech to text and synthesis from text to speech. (SRC-17 L218–220)
- Microsoft Foundry provides models for both use cases, including specialized speech-capable models from the OpenAI gpt-4o family. (SRC-17 L221)

## How it works

The source's workflow is model-selection first: use filter and search in the Microsoft Foundry Portal, then choose by the speech task the application needs. (SRC-17 L217–220) The two task categories named are transcription and synthesis, and the source places both under speech-capable generative AI models. (SRC-17 L218–221)

## Code and API patterns

Not covered by this source.

## Key terms

- **Microsoft Foundry Models:** a model catalog with generative AI models from multiple providers. (SRC-17 L216)
- **Speech-to-text:** one speech-capable model use case in which a generative AI model transcribes speech to text. (SRC-17 L218–219)
- **Text-to-speech:** one speech-capable model use case in which a generative AI model synthesizes text to speech. (SRC-17 L218–220)
- **gpt-4o family:** the source names it as including specialized speech-capable models. (SRC-17 L221)

## Decision boundaries and exam cues

- **Inference:** Choose a transcribe model when the task output is text derived from audio. (SRC-17 L218–219)
- **Inference:** Choose a text-to-speech model when the task output is spoken audio derived from text. (SRC-17 L218–220)
- **Inference:** If the scenario asks how to discover a suitable model in Foundry, the source points to search and filters in the Microsoft Foundry Portal rather than hand-coding model discovery. (SRC-17 L217)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** The source names the gpt-4o family and points to the Microsoft Foundry Models overview for available models; model names and availability can change outside this capture. (SRC-17 L221–223)

## Relation to other sources

- [[src-121-introduction-develop-speech-capable-generative-ai-application]] introduces the same two conversion directions before this unit discusses model choice. (SRC-121 L214–219)
- [[src-225-transcribe-speech]] names gpt-4o transcribe model variants for the speech-to-text branch. (SRC-225 L216–220)
- [[src-221-synthesize-speech]] names gpt-4o TTS model variants for the text-to-speech branch. (SRC-221 L216–219)
- [[src-44-develop-speech-capable-generative-ai-application-episode-17]] demonstrates filtering by inference task in Foundry. (SRC-44 L147–182)

## Connections

- [[model-catalog]] — the source describes Microsoft Foundry Models as a catalog. (SRC-17 L216)
- [[model-selection]] — choosing by capability and use case is the unit's main action. (SRC-17 L216–221)
- [[speech-capable-models]] — the unit directly names speech-capable model use cases. (SRC-17 L218–221)
- [[speech-to-text]] — transcription is one branch of the decision. (SRC-17 L218–219)
- [[text-to-speech]] — synthesis is the other branch of the decision. (SRC-17 L218–220)
- *Module units:* [[src-121-introduction-develop-speech-capable-generative-ai-application|1 Introduction]] · [[src-221-synthesize-speech|3 Synthesize speech]] · [[src-225-transcribe-speech|3 Transcribe speech]] · [[src-83-exercise-speech-capable-generative-ai-models|4 Exercise - Use speech-capable generative AI models]] · [[src-175-module-assessment-develop-speech-capable-generative-ai-application|5 Module assessment]] · [[src-207-summary-develop-speech-capable-generative-ai-application|6 Summary]] · [[src-44-develop-speech-capable-generative-ai-application-episode-17|episode 17]]

## Open questions

- The source does not list deployment types, API versions, request bodies, voices, output formats, or regional availability details. (SRC-17 L217–223)

## Sources

- SRC-17 — raw file: [[17-Choose a speech-capable model - Training - Microsoft Learn]]
