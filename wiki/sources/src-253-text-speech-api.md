---
title: "Use the Text to Speech API"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Teaches the Text to speech SDK pattern: SpeechConfig, optional AudioConfig, SpeechSynthesizer, SpeakTextAsync and result handling."
area: speech
source_ids: [SRC-253]
objectives: [T05]
tags: [text-to-speech, speechsynthesizer, speechconfig, audioconfig, synthesis]
aliases: ["SRC-253"]
source_kind: learn-unit
module: "Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools"
learning_path: "Develop natural language solutions in Azure"
unit: "4 of 9"
presenters: []
raw_file: "253-Use the Text to Speech API - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/create-speech-enabled-apps/4-text-to-speech"
ingest_depth: full
---

# Use the Text to Speech API

*learn-unit · Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools · unit 4 of 9 · SRC-253*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-253 |
| Raw file | 253-Use the Text to Speech API - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop natural language solutions in Azure |
| Module | Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools |
| Unit / episode | 4 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/create-speech-enabled-apps/4-text-to-speech |
| Teaching content | L212–234 of 264 |
| Content length | ~295 words |
| Capture quality | Medium; prose identifies the SDK pattern, but the Python example body is omitted after the Copy marker. |
| Ingest depth | full |

## TL;DR

Azure Speech in Foundry Tools offers a Text to speech API for speech synthesis. (SRC-253 L218) The source says most interactive speech-enabled applications use the Azure Speech SDK in practice, and the synthesis pattern mirrors speech recognition. (SRC-253 L219–220) The core objects are `SpeechConfig`, optional `AudioConfig`, `SpeechSynthesizer`, a method such as `SpeakTextAsync()`, and a `SpeechSynthesisResult`. (SRC-253 L221–230)

## Key claims

- Azure Speech in Foundry Tools offers a Text to speech API for speech synthesis. (SRC-253 L218)
- Most interactive speech-enabled applications are built using the Azure Speech SDK in practice. (SRC-253 L219)
- The speech-synthesis pattern is similar to the speech-recognition pattern. (SRC-253 L220)
- `SpeechConfig` encapsulates the location and key required to connect to the Azure Speech resource. (SRC-253 L221)
- `AudioConfig` optionally defines the output device; by default it is the system speaker. (SRC-253 L222)
- Output can be an audio file, or a null value can be used so the application processes the returned audio stream directly. (SRC-253 L222)
- `SpeechSynthesizer` is created from `SpeechConfig` and `AudioConfig` and acts as a proxy client for Text to speech. (SRC-253 L223)
- `SpeakTextAsync()` converts text to spoken audio through the Azure Speech service. (SRC-253 L224)
- `SpeechSynthesisResult` includes `AudioData`, `Properties`, `Reason` and `ResultId`. (SRC-253 L225–229)
- Successful synthesis sets `Reason` to `SynthesizingAudioCompleted`, and `AudioData` contains the audio stream. (SRC-253 L230)

## How it works

The flow begins by configuring access to the Azure Speech resource with `SpeechConfig`. (SRC-253 L221) The application can then use `AudioConfig` to decide where synthesized audio should go: the default speaker, a file, or direct stream processing when the value is explicitly set to null. (SRC-253 L222)

`SpeechSynthesizer` is the proxy client for Text to speech, created from the speech and audio configuration objects. (SRC-253 L223) Calling `SpeakTextAsync()` sends text to Azure Speech and receives a `SpeechSynthesisResult`. (SRC-253 L224–225) The app checks `Reason` for `SynthesizingAudioCompleted` and then uses `AudioData` as the generated audio stream, whether that stream has already gone to a speaker or file or is handled directly. (SRC-253 L225–230)

## Code and API patterns

The source's Python example body is omitted, but the SDK pattern is explicit in the prose. (SRC-253 L231–234)

- Setup object: `SpeechConfig` with resource location and key. (SRC-253 L221)
- Output object: `AudioConfig`, defaulting to the system speaker but able to target a file or enable direct stream handling. (SRC-253 L222)
- Client object: `SpeechSynthesizer`, created from `SpeechConfig` and `AudioConfig`. (SRC-253 L223)
- Synthesis call: `SpeakTextAsync()` converts text into spoken audio. (SRC-253 L224)
- Result object: `SpeechSynthesisResult`, where `Reason` and `AudioData` indicate completion and output. (SRC-253 L225–230)

## Key terms

- **Text to speech** — the Azure Speech API capability for speech synthesis. (SRC-253 L218)
- **`SpeechSynthesizer`** — the proxy client for the Text to speech API. (SRC-253 L223)
- **`SpeakTextAsync()`** — the method named by the source for converting text to spoken audio. (SRC-253 L224)
- **`SpeechSynthesisResult`** — the result object that contains `AudioData`, `Properties`, `Reason` and `ResultId`. (SRC-253 L225–229)
- **`SynthesizingAudioCompleted`** — the `Reason` value indicating successful synthesis. (SRC-253 L230)

## Decision boundaries and exam cues

- **Inference:** If a scenario asks for the client object that converts text to speech, choose `SpeechSynthesizer`, because the source calls it the proxy client for Text to speech. (SRC-253 L223)
- **Inference:** If a scenario asks where synthesized audio is sent, focus on `AudioConfig`, because it defines the output device, file or stream handling. (SRC-253 L222)
- **Inference:** If a scenario asks how to check successful synthesis, inspect `Reason` for `SynthesizingAudioCompleted` and use `AudioData`. (SRC-253 L225–230)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The Python example is announced but not captured, so this source page records the prose-described SDK pattern rather than exact syntax. (SRC-253 L231–234)
- The source says `SpeechConfig` uses location and key, while neighbouring sources describe endpoint or region and key; this is a minor terminology variation in the same module. (SRC-253 L221; SRC-252 L219; SRC-13 L233–234)

## Relation to other sources

- [[src-252-speech-text-api]] provides the parallel Speech to text pattern that this source mirrors. (SRC-252 L218–230; SRC-253 L218–224)
- [[src-21-configure-audio-format-voices]] extends synthesis by configuring returned audio format and voice. (SRC-253 L218–230; SRC-21 L218–230)
- [[src-246-speech-synthesis-markup-language]] extends synthesis from plain text to SSML. (SRC-253 L224; SRC-246 L218–231)
- [[src-35-create-speech-enabled-apps-microsoft-foundry-episode-18]] demonstrates synthesized voicemail greetings with `SpeechSynthesizer`, `AudioConfig` and voice changes. (SRC-253 L222–224; SRC-35 L403–437; SRC-35 L471–496)

## Connections

- [[text-to-speech]] — this source teaches the core Text to speech SDK pattern. (SRC-253 L218–230)
- [[azure-speech]] — Text to speech is an Azure Speech in Foundry Tools capability. (SRC-253 L218)
- [[voices-and-audio-formats]] — output device, audio file and stream choices are part of synthesis output configuration. (SRC-253 L222)
- [[ssml]] — the next synthesis source expands from text input to markup-controlled speech. (SRC-253 L224; SRC-246 L218–231)

## Open questions

- The source does not capture continuous, streaming or SSML synthesis code in this unit. (SRC-253 L231–234)

## Sources

- SRC-253 — raw file: [[253-Use the Text to Speech API - Training - Microsoft Learn]]
