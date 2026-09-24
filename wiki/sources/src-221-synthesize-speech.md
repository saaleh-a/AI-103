---
title: "Synthesize speech"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Defines text-to-speech synthesis with Foundry speech-capable models and names gpt-4o TTS model options."
area: speech
source_ids: [SRC-221]
objectives: [T05]
tags: [text-to-speech, speech-synthesis, openai-sdk, azureopenai, microsoft-foundry]
aliases: ["SRC-221"]
source_kind: learn-unit
module: "Develop a speech-capable generative AI application"
learning_path: "Develop natural language solutions in Azure"
unit: "3 of 7"
presenters: []
raw_file: "221-Synthesize speech - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/develop-generative-ai-audio-apps/3b-develop-speech-app"
ingest_depth: full
---

# Synthesize speech

*learn-unit · Develop a speech-capable generative AI application · unit 3 of 7 · SRC-221*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-221 |
| Raw file | `221-Synthesize speech - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | Develop natural language solutions in Azure |
| Module | Develop a speech-capable generative AI application |
| Unit / episode | 3 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/develop-generative-ai-audio-apps/3b-develop-speech-app |
| Teaching content | L210–225 of 255 |
| Content length | ~118 words |
| Capture quality | Medium-high: teaching text is clear, but the Python sample body is not captured. |
| Ingest depth | full |

## TL;DR

Speech synthesis, or text-to-speech, submits text to a model and receives an audio stream of the vocalized text. (SRC-221 L216) The source names `gpt-4o-tts` and `gpt-4o-mini-tts` as models that support text-to-speech operations. (SRC-221 L217–219)

## Key claims

- Speech synthesis is the reverse of speech-to-text. (SRC-221 L216)
- Text-to-speech involves submitting text to a model and receiving an audio stream of the vocalized text. (SRC-221 L216)
- `gpt-4o-tts` and `gpt-4o-mini-tts` support text-to-speech operations. (SRC-221 L217–219)
- Model availability varies by region, so the source tells learners to review the Microsoft Foundry model regional availability table. (SRC-221 L220–221)
- An application can use the `AzureOpenAI` client in the OpenAI SDK to connect to a Microsoft Foundry resource endpoint and upload text to a text-to-speech model. (SRC-221 L222–223)

## How it works

The input is text, the selected model performs speech synthesis, and the output is an audio stream containing the vocalized text. (SRC-221 L216) The source positions this as the reverse path from speech-to-text. (SRC-221 L216)

## Code and API patterns

The source names the `AzureOpenAI` client in the OpenAI SDK as the client used to connect to the Microsoft Foundry resource endpoint. (SRC-221 L222–223) The source says the app uploads text to a text-to-speech model for speech synthesis, but the captured Python code itself is not present beyond the language marker. (SRC-221 L222–225)

## Key terms

- **Speech synthesis:** text-to-speech; submitting text to a model and receiving an audio stream of vocalized text. (SRC-221 L216)
- **`gpt-4o-tts`:** a model listed as supporting text-to-speech operations. (SRC-221 L217–218)
- **`gpt-4o-mini-tts`:** a model listed as supporting text-to-speech operations. (SRC-221 L217–219)
- **`AzureOpenAI` client:** the OpenAI SDK client named for connecting to a Microsoft Foundry resource endpoint. (SRC-221 L222–223)

## Decision boundaries and exam cues

- **Inference:** If the required output is spoken audio from text, this source points to a TTS model rather than a transcription model. (SRC-221 L216–219)
- **Inference:** If the scenario asks for the application API surface, look for the OpenAI SDK `AzureOpenAI` client and a Microsoft Foundry resource endpoint. (SRC-221 L222–223)
- **Stale-risk:** If a scenario depends on region support, the source itself says to verify model regional availability. (SRC-221 L220–221)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The page points to Python content but the captured teaching lines contain no code body after `Python` and `Copy`. (SRC-221 L224–225)
- **Stale-risk:** The named models and regional availability may change after the capture. (SRC-221 L217–221)

## Relation to other sources

- [[src-225-transcribe-speech]] covers the opposite direction: audio content in, text transcript out. (SRC-225 L216)
- [[src-17-choose-speech-capable-model]] frames synthesis as one of two common speech-capable model use cases. (SRC-17 L218–221)
- [[src-44-develop-speech-capable-generative-ai-application-episode-17]] demonstrates TTS deployment and code using an audio speech streaming response. (SRC-44 L175–182; SRC-44 L247–297)
- [[src-175-module-assessment-develop-speech-capable-generative-ai-application]] asks which model synthesizes speech from text. (SRC-175 L217–220)

## Connections

- [[text-to-speech]] — the source defines the mechanism. (SRC-221 L216)
- [[speech-capable-models]] — the source names speech-capable TTS models. (SRC-221 L217–219)
- [[openai-sdk]] — the source uses the OpenAI SDK client path. (SRC-221 L222–223)
- [[azure-openai]] — the source names the `AzureOpenAI` client. (SRC-221 L222–223)
- [[voices-and-audio-formats]] — the source does not teach voices or formats, but the output is an audio stream. (SRC-221 L216)
- *Module units:* [[src-121-introduction-develop-speech-capable-generative-ai-application|1 Introduction]] · [[src-17-choose-speech-capable-model|2 Choose a speech-capable model]] · [[src-225-transcribe-speech|3 Transcribe speech]] · [[src-83-exercise-speech-capable-generative-ai-models|4 Exercise - Use speech-capable generative AI models]] · [[src-175-module-assessment-develop-speech-capable-generative-ai-application|5 Module assessment]] · [[src-207-summary-develop-speech-capable-generative-ai-application|6 Summary]] · [[src-44-develop-speech-capable-generative-ai-application-episode-17|episode 17]]

## Open questions

- The source does not specify voice parameters, output formats, streaming methods, authentication details, or a complete Python request. (SRC-221 L222–225)

## Sources

- SRC-221 — raw file: [[221-Synthesize speech - Training - Microsoft Learn]]
