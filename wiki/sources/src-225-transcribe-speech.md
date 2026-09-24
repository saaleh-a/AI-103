---
title: "Transcribe speech"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Defines speech-to-text transcription with Foundry speech-capable models and names gpt-4o transcribe options."
area: speech
source_ids: [SRC-225]
objectives: [T05, T07]
tags: [speech-to-text, transcription, openai-sdk, azureopenai, microsoft-foundry]
aliases: ["SRC-225"]
source_kind: learn-unit
module: "Develop a speech-capable generative AI application"
learning_path: "Develop natural language solutions in Azure"
unit: "3 of 7"
presenters: []
raw_file: "225-Transcribe speech - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/develop-generative-ai-audio-apps/3-develop-audio-chat-app"
ingest_depth: full
---

# Transcribe speech

*learn-unit · Develop a speech-capable generative AI application · unit 3 of 7 · SRC-225*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-225 |
| Raw file | `225-Transcribe speech - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | Develop natural language solutions in Azure |
| Module | Develop a speech-capable generative AI application |
| Unit / episode | 3 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/develop-generative-ai-audio-apps/3-develop-audio-chat-app |
| Teaching content | L210–226 of 256 |
| Content length | ~126 words |
| Capture quality | Medium-high: teaching text is clear, but the Python sample body is not captured. |
| Ingest depth | full |

## TL;DR

Speech transcription, or speech-to-text, submits audio content to a model and receives a text-based transcript of the speech in the audio source. (SRC-225 L216) The source lists `gpt-4o-transcribe`, `gpt-4o-mini-transcribe`, and `gpt-4o-transcribe-diarize` as models that support speech-to-text operations. (SRC-225 L217–220)

## Key claims

- Speech transcription is speech-to-text. (SRC-225 L216)
- Speech-to-text involves submitting audio content to a model and receiving a text-based transcript of the speech in the audio source. (SRC-225 L216)
- `gpt-4o-transcribe`, `gpt-4o-mini-transcribe`, and `gpt-4o-transcribe-diarize` support speech-to-text operations. (SRC-225 L217–220)
- Model availability varies by region, and learners should review the Microsoft Foundry model regional availability table. (SRC-225 L221–222)
- Applications can use the `AzureOpenAI` client in the OpenAI SDK to connect to a Microsoft Foundry resource endpoint and upload an audio file for transcription. (SRC-225 L223–224)

## How it works

The input is audio content, the selected model performs transcription, and the output is a text-based transcript of the speech in that audio source. (SRC-225 L216) The application path named by the source is to connect to the Foundry resource endpoint with the OpenAI SDK and upload the audio file contents. (SRC-225 L223–224)

## Code and API patterns

The source names `AzureOpenAI` in the OpenAI SDK as the client and says the application uploads audio file contents to the model for transcription. (SRC-225 L223–224) The captured Python section contains only the language marker and `Copy`, not the actual code body. (SRC-225 L225–226)

## Key terms

- **Speech transcription:** speech-to-text; submitting audio content to a model and receiving a text transcript. (SRC-225 L216)
- **`gpt-4o-transcribe`:** a model listed as supporting speech-to-text operations. (SRC-225 L217–218)
- **`gpt-4o-mini-transcribe`:** a model listed as supporting speech-to-text operations. (SRC-225 L217–219)
- **`gpt-4o-transcribe-diarize`:** a model listed as supporting speech-to-text operations. (SRC-225 L217–220)

## Decision boundaries and exam cues

- **Inference:** If the desired output is a text transcript from spoken audio, choose a transcribe model rather than a TTS model. (SRC-225 L216–220)
- **Inference:** If the scenario mentions uploading the contents of an audio file to a model, this source points to speech-to-text transcription. (SRC-225 L223–224)
- **Stale-risk:** If region availability matters, the source says to review the model regional availability table. (SRC-225 L221–222)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source's Python code body is not captured after the `Python` and `Copy` lines. (SRC-225 L225–226)
- **Stale-risk:** The named model list and regional availability may change after the capture. (SRC-225 L217–222)

## Relation to other sources

- [[src-221-synthesize-speech]] covers the reverse operation: text in, audio stream out. (SRC-221 L216)
- [[src-17-choose-speech-capable-model]] frames transcription as one of two common speech-capable model use cases. (SRC-17 L218–221)
- [[src-44-develop-speech-capable-generative-ai-application-episode-17]] demonstrates deploying a GPT-4o mini transcribe model and calling audio transcriptions. (SRC-44 L147–174; SRC-44 L316–337)
- [[src-175-module-assessment-develop-speech-capable-generative-ai-application]] asks which model generates text from speech. (SRC-175 L212–215)

## Connections

- [[speech-to-text]] — the source defines the mechanism. (SRC-225 L216)
- [[speech-capable-models]] — the source names speech-capable transcription models. (SRC-225 L217–220)
- [[openai-sdk]] — the source uses the OpenAI SDK client path. (SRC-225 L223–224)
- [[azure-openai]] — the source names the `AzureOpenAI` client. (SRC-225 L223–224)
- [[speech-and-language-options-compared]] — the source supplies the transcription side of the speech decision boundary. (SRC-225 L216–224)
- *Module units:* [[src-121-introduction-develop-speech-capable-generative-ai-application|1 Introduction]] · [[src-17-choose-speech-capable-model|2 Choose a speech-capable model]] · [[src-221-synthesize-speech|3 Synthesize speech]] · [[src-83-exercise-speech-capable-generative-ai-models|4 Exercise - Use speech-capable generative AI models]] · [[src-175-module-assessment-develop-speech-capable-generative-ai-application|5 Module assessment]] · [[src-207-summary-develop-speech-capable-generative-ai-application|6 Summary]] · [[src-44-develop-speech-capable-generative-ai-application-episode-17|episode 17]]

## Open questions

- The source does not specify audio formats, transcription response schema, authentication details, or the complete Python request. (SRC-225 L223–226)

## Sources

- SRC-225 — raw file: [[225-Transcribe speech - Training - Microsoft Learn]]
