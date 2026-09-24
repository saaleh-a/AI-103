---
title: "Azure Speech"
type: entity
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Foundry Tools speech service and SDK capabilities for speech recognition, synthesis, SSML, translation, and real-time voice."
area: speech
source_ids: [SRC-13, SRC-17, SRC-21, SRC-88, SRC-96, SRC-115, SRC-140, SRC-192, SRC-236, SRC-246, SRC-252, SRC-253]
objectives: [T05, T06]
objective_gaps: []
tags: ["service"]
aliases: ["Azure Speech in Foundry Tools", "Azure AI Speech", "Speech service", "Speech SDK"]
---

# Azure Speech

## Summary

Azure Speech in Foundry Tools is the corpus's service family for adding speech support to Microsoft Foundry applications and agents: speech recognition, speech synthesis, speech translation, and Voice Live real-time conversation capabilities (SRC-115 L216–221; SRC-96 L225–226).

## What it is

Azure Speech in Foundry Tools is described as speech-related capabilities provided by a Foundry resource and used to add speech support to apps and agents built in Microsoft Foundry projects (SRC-13 L218–220). The same Foundry Tools overview places Azure Speech beside other out-of-the-box tools and says Foundry Tools can be more cost-effective and predictable than relying only on generative-AI agents for common AI tasks (SRC-96 L218–226).

**Synthesis:** In this corpus, Azure Speech has two main developer shapes: direct application code through the Speech SDK or REST APIs, and agent access through the Azure Speech MCP server so an agent can choose speech tools from natural-language requests (SRC-13 L223–227; SRC-140 L10–12; SRC-236 L234–243).

## What the sources say

- The introduction to speech-enabled apps names four Azure Speech APIs: Speech to text, Text to speech, Speech Translation, and Voice Live (SRC-115 L216–220).
- The core Azure Speech unit says a Foundry resource must be provisioned in an Azure subscription, then its endpoint and key are used from code through JSON REST requests or SDKs; its Python examples use the Python SDK for Azure Speech in Foundry Tools (SRC-13 L221–225).
- The same unit introduces `SpeechConfig` as the object that encapsulates connection details for the service in the Foundry resource (SRC-13 L226–230).
- The module summary confirms the module outcomes: connect to Azure Speech in Foundry Tools, use Speech to text, use Text to speech, configure audio format and voices, and use SSML (SRC-192 L218–224).
- The Azure Speech MCP material says the MCP server exposes speech-to-text and text-to-speech tools to agents, and the agent can decide which tool to call from the user's prompt (SRC-140 L10–12; SRC-236 L234–243).
- Voice Live is included as a real-time conversational speech API; its unit describes WebSocket-based, bidirectional communication with speech recognition, text-to-speech synthesis, avatar streaming, audio processing, and JSON events (SRC-88 L216–224).

## Capabilities and components

- Speech to text accepts spoken input and supports speech recognition for applications (SRC-115 L217). Its SDK pattern uses `SpeechConfig`, optional input `AudioConfig`, `SpeechRecognizer`, and a result whose `Reason` is checked for `RecognizedSpeech`, `NoMatch`, or `Canceled` (SRC-252 L218–230).
- Text to speech produces spoken output and supports speech synthesis for applications (SRC-115 L218). Its SDK pattern uses `SpeechConfig`, optional output `AudioConfig`, `SpeechSynthesizer`, and a result whose `Reason` becomes `SynthesizingAudioCompleted` when synthesis succeeds (SRC-253 L218–230).
- Audio format and voice configuration are part of synthesis: `SpeechConfig` can set output format, and voices are named by locale, person name, and other details such as `en-US-Brian:DragonHDLatestNeural` (SRC-21 L218–230).
- SSML gives XML-based control beyond plain text, including style, pauses, phonemes, prosody, `say-as` rules, and inserted audio (SRC-246 L218–224).
- Speech Translation is named as an API for translating spoken input into multiple languages, but this page leaves its implementation details to [[speech-translation]] (SRC-115 L219).
- Voice Live is the real-time voice-agent member of the family and supports audio formats such as PCM16 and G.711 plus voice options including OpenAI voices and Azure custom voices (SRC-88 L216–224).

## How to use it

The direct SDK object pattern is consistent across recognition and synthesis (SRC-252 L218–230; SRC-253 L218–230):

1. Create `SpeechConfig` with the Foundry resource endpoint or region and key (SRC-13 L226–234; SRC-252 L219; SRC-253 L221).
2. Add `AudioConfig` when you need a non-default input or output: an input audio file for recognition, a speaker/file/null stream choice for synthesis (SRC-252 L220; SRC-253 L222).
3. Create the task client: `SpeechRecognizer` for Speech to text or `SpeechSynthesizer` for Text to speech (SRC-252 L221; SRC-253 L223).
4. Call the async method: `RecognizeOnceAsync()` for a single utterance or `SpeakTextAsync()` for text synthesis (SRC-252 L222; SRC-253 L224).
5. Inspect the result's `Reason`: `RecognizedSpeech` plus `Text` for successful recognition, or `SynthesizingAudioCompleted` plus `AudioData` for successful synthesis (SRC-252 L223–230; SRC-253 L225–230).

**Stale-risk:** The corpus notes that Python SDK releases before 1.48.2 required region rather than endpoint, while the latest release in the capture supports either endpoint or region (SRC-13 L233–234).

## Decision boundaries

| **Inference:** Need | Use Azure Speech direct SDK/API | Use Azure Speech MCP server | Use Voice Live API | Use speech-capable generative models |
|---|---|---|---|---|
| Primary job | App code controls recognition or synthesis (SRC-252 L218–230; SRC-253 L218–230) | Agent dynamically selects STT/TTS tools (SRC-236 L234–243) | Real-time bidirectional voice app or agent (SRC-88 L216–224) | Deploy a model optimized for STT or TTS (SRC-17 L216–221) |
| **Inference:** Deciding detail | You are writing the speech operation directly | Prompt-driven agent should route the tool call | Low-latency real-time conversation | Foundry model catalog and OpenAI speech model deployment |

**Inference:** For exam scenarios, direct SDK clues include `SpeechConfig`, `AudioConfig`, recognizer/synthesizer objects, voice names, SSML, or output formats; MCP clues include agent tool discovery and tool selection; Voice Live clues include real-time bidirectional audio, WebSocket events, turn-like conversation, or avatar/audio streaming (SRC-252 L218–230; SRC-253 L218–230; SRC-236 L234–243; SRC-88 L216–224).

## Naming and currency

The corpus uses both "Azure Speech" and "Azure Speech in Foundry Tools" for this service family (SRC-96 L225–226; SRC-13 L218). **Stale-risk:** One source line says to call the "Azure Language APIs" while the surrounding unit, heading, `SpeechConfig`, and module summary are about Azure Speech; this appears to be a source wording error rather than a different service (SRC-13 L218–227; SRC-192 L218–224).

## Appearances in the corpus

- Speech-enabled apps module: core SDK and synthesis controls (SRC-13 L218–234; SRC-192 L218–224).
- Foundry Tools overview: Azure Speech as an out-of-the-box Foundry Tool (SRC-96 L218–226).
- Azure Speech MCP server module: agent tool exposure for STT and TTS (SRC-140 L10–13; SRC-236 L228–243).
- Voice Live module: real-time bidirectional speech API (SRC-88 L216–224).

## Connections

- [[speech-to-text]] — service-family page connects to the recognition side.
- [[text-to-speech]] — service-family page connects to the synthesis side.
- [[ssml]] — service-family page connects to markup control for synthesis.
- [[voices-and-audio-formats]] — service-family page connects to voice and output-format choices.
- [[speech-translation]] — service-family page connects to spoken-input translation.
- [[voice-live-api]] — service-family page connects to real-time conversational speech.
- [[azure-speech-mcp-server]] — service-family page connects to the agent tool wrapper.
- [[foundry-tools]] — service-family page sits under prebuilt Foundry APIs and models.
- [[speech-and-language-options-compared]] — service-family page connects to cross-option selection.
- *Also linked from:* [[azure-translator]] · [[speech-capable-models]] · [[text-translation]]

## Sources

- SRC-13 — [[src-13-azure-speech-foundry-tools]] — Azure Speech in Foundry Tools and `SpeechConfig`.`r`n- SRC-17 — [[src-17-choose-speech-capable-model]] — speech-capable model contrast.
- SRC-21 — [[src-21-configure-audio-format-voices]] — synthesis output format and voice configuration.
- SRC-88 — [[src-88-explore-azure-voice-live-api]] — Voice Live real-time audio features.
- SRC-96 — [[src-96-foundry-tools]] — Azure Speech as a Foundry Tool.
- SRC-115 — [[src-115-introduction-create-speech-enabled-apps-azure-speech-microsoft-foundry]] — API family overview.
- SRC-140 — [[src-140-introduction-develop-speech-agent-azure-speech-mcp-server]] — direct SDK/API versus MCP server use.
- SRC-192 — [[src-192-summary-create-speech-enabled-apps-azure-speech-microsoft-foundry]] — module outcomes.
- SRC-236 — [[src-236-understand-azure-speech-mcp-server]] — MCP capabilities and agent tool selection.
- SRC-246 — [[src-246-speech-synthesis-markup-language]] — SSML capabilities.
- SRC-252 — [[src-252-speech-text-api]] — Speech to text SDK pattern.
- SRC-253 — [[src-253-text-speech-api]] — Text to speech SDK pattern.
