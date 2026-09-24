---
title: "Speech-capable generative models"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Generative audio models in Foundry for speech-to-text and text-to-speech, including gpt-4o transcribe and TTS families."
area: speech
source_ids: [SRC-17, SRC-25, SRC-44, SRC-49, SRC-87, SRC-88, SRC-89, SRC-121, SRC-175, SRC-207, SRC-221, SRC-225, SRC-226, SRC-236]
objectives: [P01, G01, T05]
objective_gaps: [T07]
tags: []
aliases: ["gpt-4o transcribe", "gpt-4o tts", "audio-capable models", "multimodal audio", "speech-to-text models", "text-to-speech models"]
---

# Speech-capable generative models

## Summary

Speech-capable generative models are deployed models in Microsoft Foundry that either transcribe speech to text or synthesize text to speech. The corpus names specialized OpenAI `gpt-4o` family models for both use cases (SRC-17 L218–221; SRC-225 L216–224; SRC-221 L216–223).

## The problem it solves

Some applications need audio input or audio output but do not need the full Azure Speech service feature set. The model-focused module teaches how to use speech-capable generative AI models in Microsoft Foundry to convert speech to text and text to speech (SRC-121 L219). In the episode, the presenter frames the model choice as looking specifically for speech-to-text or text-to-speech capabilities in the model catalog (SRC-44 L50–68).

## Mental model

**Synthesis:** Treat these as **model endpoints for audio tasks** (SRC-17 L218–221; SRC-225 L223–224; SRC-221 L222–223):

- For transcription, send audio content to a deployed speech-to-text model and receive a text transcript (SRC-225 L216–224).
- For synthesis, send text to a deployed text-to-speech model and receive an audio stream of the spoken text (SRC-221 L216–223).

**Inference:** That is different from using Azure Speech SDK recognizers/synthesizers, different from a live Voice Live session, and different from letting an agent choose an MCP speech tool (SRC-226 L14–28; SRC-88 L216–218; SRC-236 L226–243).

## What the sources say

- The model-choice unit says there are two common speech-capable model use cases: generative models that transcribe speech to text and generative models that synthesize text to speech. Microsoft Foundry provides models for both, including specialized speech-capable models from the `gpt-4o` family (SRC-17 L218–221).
- The transcription unit defines speech-to-text as submitting audio content to a model, which returns a text transcript. It names `gpt-4o-transcribe`, `gpt-4o-mini-transcribe`, and `gpt-4o-transcribe-diarize` (SRC-225 L216–220).
- The synthesis unit defines text-to-speech as submitting text to a model, which returns an audio stream. It names `gpt-4o-tts` and `gpt-4o-mini-tts` (SRC-221 L216–219).
- Both transcription and synthesis units use the `AzureOpenAI` client in the OpenAI SDK against the endpoint for the Microsoft Foundry resource (SRC-225 L223–224; SRC-221 L222–223).
- The model catalog page lists text-to-speech models such as `GPT-4o-tts` and speech-to-text models such as `GPT-4o-transcribe` as specialized model categories (SRC-89 L237–238).
- The module summary says the learner used Microsoft Foundry to create generative AI solutions that work with speech-capable AI models (SRC-207 L216–220).

## How it works in Azure

The Azure mapping is Foundry model deployment plus the OpenAI-compatible client. The corpus does not present these as Azure Speech SDK calls; it says to connect with the `AzureOpenAI` client in the OpenAI SDK to the endpoint for the Microsoft Foundry resource (SRC-225 L223–224; SRC-221 L222–223). **Stale-risk:** the exact model names and availability are time-sensitive. The corpus's captured model names are `gpt-4o-transcribe`, `gpt-4o-mini-transcribe`, `gpt-4o-transcribe-diarize`, `gpt-4o-tts`, and `gpt-4o-mini-tts` (SRC-225 L217–220; SRC-221 L217–219).

## Code and configuration

**Synthesis:** The corpus gives the implementation shape rather than a durable full listing (SRC-17 L218–221; SRC-225 L216–224; SRC-221 L216–223):

1. Choose and deploy a speech-capable model for the task: transcription or synthesis (SRC-17 L218–221).
2. Use `AzureOpenAI` from the OpenAI SDK to connect to the Microsoft Foundry resource endpoint (SRC-225 L223–224; SRC-221 L222–223).
3. For transcription, upload audio contents to a speech-to-text model and read the text transcript (SRC-225 L216–224).
4. For synthesis, upload text to a text-to-speech model and handle the returned audio stream (SRC-221 L216–223).

## Decision boundaries

**Synthesis:** The closest confusions separate by client surface and feature set:

- **Speech-capable models:** choose a deployed `gpt-4o` family audio model when the requirement is model-centric transcription or synthesis, using the OpenAI SDK `AzureOpenAI` client against a Foundry endpoint (SRC-17 L218–221; SRC-225 L223–224; SRC-221 L222–223).
- **Azure Speech SDK / Speech service:** choose the Speech service when the requirement names SDK speech objects, translation, recognizers, synthesizers, voices, SSML, or Speech service configuration (SRC-226 L14–45).
- **Voice Live API:** choose Voice Live when the requirement is a live, low-latency, bidirectional voice-agent session with interruption handling or session events (SRC-49 L4–17; SRC-87 L216–228; SRC-88 L216–258).
- **Azure Speech MCP server:** choose Speech MCP when the requirement is an agent tool that discovers speech capabilities and handles audio files or generated audio links through Blob Storage (SRC-25 L216–248; SRC-236 L226–248).

## Failure modes and misconceptions

- Do not treat all speech features as Azure Speech SDK features. The corpus separately teaches model-based transcription/TTS via `AzureOpenAI` and Speech SDK/API translation via `SpeechTranslationConfig` (SRC-225 L223–224; SRC-221 L222–223; SRC-226 L14–28).
- Do not pick `gpt-4o-mini` when the task requires the speech-specific model. The assessment options distinguish `gpt-4o-mini`, `gpt-4o-mini-tts`, and `gpt-4o-mini-transcribe` (SRC-175 L213–220).
- Do not choose speech-capable models for live duplex voice agents solely because audio is involved. **Inference:** the model unit covers transcribe/TTS, while Voice Live covers real-time WebSocket conversation (SRC-17 L218–221; SRC-88 L216–218).
- Do not assume these pages cover speech translation. The corpus's speech-capable model module teaches speech-to-text and text-to-speech only; speech translation is covered separately through Azure Speech in Foundry Tools (SRC-17 L218–221; SRC-226 L12–14).

## Solution Engineering transfer

**Inference:** Use speech-capable models when the customer wants model-native audio input/output inside a generative app and the problem is simply "turn this audio into text" or "turn this text into speech." Ask whether they need live interruption, translation, custom voices/SSML, agent tool discovery, diarization, or file-based agent workflows; those details may move the design to Voice Live, Azure Speech SDK, or Speech MCP instead (SRC-225 L216–224; SRC-221 L216–223; SRC-88 L216–218; SRC-236 L226–248).

## Connections

- [[model-catalog]] — source of specialized speech-to-text and text-to-speech models.
- [[model-selection]] — model choice is the central exam decision.
- [[openai-sdk]] — client surface named by the corpus for these models.
- [[azure-openai]] — Azure OpenAI-compatible model endpoint surface used through Foundry.
- [[speech-to-text]] — one model use case.
- [[text-to-speech]] — one model use case.
- [[azure-speech]] — neighbouring Speech service route.
- [[voice-live-api]] — neighbouring real-time voice-agent route.
- [[azure-speech-mcp-server]] — neighbouring agent-tool route.
- [[speech-translation]] — separate Azure Speech translation capability.
- [[speech-and-language-options-compared]] — synthesis page for choosing among speech options.
- [[src-17-choose-speech-capable-model]] — main model-choice source.
- [[src-225-transcribe-speech]] — speech-to-text model source.
- [[src-221-synthesize-speech]] — text-to-speech model source.

## Sources

- SRC-17 — [[src-17-choose-speech-capable-model]] — model use cases and gpt-4o family statement.
- SRC-25 — [[src-25-connect-speech-mcp-server-agent]] — Speech MCP boundary source.
- SRC-44 — [[src-44-develop-speech-capable-generative-ai-application-episode-17]] — episode walkthrough of speech-capable model selection.
- SRC-49 — [[src-49-develop-azure-speech-voice-live-agent-microsoft-foundry-episode]] — Voice Live boundary source.
- SRC-87 — [[src-87-explore-ai-voice-live-client-library-python]] — Voice Live client boundary source.
- SRC-88 — [[src-88-explore-azure-voice-live-api]] — Voice Live API boundary source.
- SRC-89 — [[src-89-explore-model-catalog]] — model catalog categories for TTS and STT models.
- SRC-121 — [[src-121-introduction-develop-speech-capable-generative-ai-application]] — module introduction.
- SRC-175 — [[src-175-module-assessment-develop-speech-capable-generative-ai-application]] — assessment cue distinguishing generic and speech-specific model names.
- SRC-207 — [[src-207-summary-develop-speech-capable-generative-ai-application]] — module summary.
- SRC-221 — [[src-221-synthesize-speech]] — text-to-speech model source.
- SRC-225 — [[src-225-transcribe-speech]] — speech-to-text model source.
- SRC-226 — [[src-226-translate-speech]] — Speech SDK and translation boundary source.
- SRC-236 — [[src-236-understand-azure-speech-mcp-server]] — Speech MCP boundary source.

## Open questions

- The corpus does not teach live audio streaming, speech translation, SSML, or Speech service voice configuration through the speech-capable model path.
