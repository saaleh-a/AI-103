---
title: "Use the Speech to Text API"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Teaches the Speech to text SDK pattern: SpeechConfig, optional AudioConfig, SpeechRecognizer, RecognizeOnceAsync and result handling."
area: speech
source_ids: [SRC-252]
objectives: [T05]
tags: [speech-to-text, speechrecognizer, audioconfig, speechconfig, transcription]
aliases: ["SRC-252"]
source_kind: learn-unit
module: "Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools"
learning_path: "Develop natural language solutions in Azure"
unit: "3 of 9"
presenters: []
raw_file: "252-Use the Speech to Text API - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/create-speech-enabled-apps/3-speech-to-text"
ingest_depth: full
---

# Use the Speech to Text API

*learn-unit · Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools · unit 3 of 9 · SRC-252*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-252 |
| Raw file | 252-Use the Speech to Text API - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop natural language solutions in Azure |
| Module | Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools |
| Unit / episode | 3 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/create-speech-enabled-apps/3-speech-to-text |
| Teaching content | L212–234 of 264 |
| Content length | ~290 words |
| Capture quality | Medium; API pattern is clear, but the Python example body is omitted after the Copy marker. |
| Ingest depth | full |

## TL;DR

Azure Speech in Foundry Tools supports speech recognition through the Speech to text API. (SRC-252 L218) The source's SDK pattern is `SpeechConfig`, optional `AudioConfig`, `SpeechRecognizer`, a recognizer method such as `RecognizeOnceAsync()`, and response processing. (SRC-252 L219–223) A successful single-utterance result has `Reason` set to `RecognizedSpeech` and puts the transcription in `Text`. (SRC-252 L230)

## Key claims

- Azure Speech in Foundry Tools supports speech recognition through the Speech to text API. (SRC-252 L218)
- SDK details vary by language, but the source presents a consistent Speech to text pattern. (SRC-252 L218)
- `SpeechConfig` encapsulates the endpoint or region and key needed to connect to a Foundry resource. (SRC-252 L219)
- `AudioConfig` optionally defines the audio input source; the default is the system microphone, and an audio file can also be specified. (SRC-252 L220)
- `SpeechRecognizer` is created from `SpeechConfig` and `AudioConfig` and acts as a proxy client for the Speech to text API. (SRC-252 L221)
- `RecognizeOnceAsync()` asynchronously transcribes a single spoken utterance. (SRC-252 L222)
- `SpeechRecognitionResult` includes `Duration`, `OffsetInTicks`, `Properties`, `Reason`, `ResultId` and `Text`. (SRC-252 L223–229)
- A successful result uses `Reason = RecognizedSpeech` and places the transcription in `Text`. (SRC-252 L230)
- Other possible result values include `NoMatch` when audio parses but no speech is recognized, and `Canceled` when an error occurs. (SRC-252 L230)

## How it works

The flow begins with `SpeechConfig`, which holds the connection values for the Foundry resource. (SRC-252 L219) The application can then add `AudioConfig` when it needs to control the input source, such as choosing an audio file instead of the default system microphone. (SRC-252 L220)

`SpeechRecognizer` is the API proxy client for recognition. (SRC-252 L221) Calling `RecognizeOnceAsync()` asks Azure Speech to transcribe one spoken utterance asynchronously and returns a `SpeechRecognitionResult`. (SRC-252 L222–223) The application must inspect the result rather than assuming success: `Reason` distinguishes recognized speech, no match and cancellation, while `Text` contains the transcription only when recognition succeeds. (SRC-252 L223–230)

## Code and API patterns

The capture omits the Python code body, but it identifies the relevant SDK objects and result fields. (SRC-252 L231–234)

- Setup object: `SpeechConfig` with endpoint or region and key. (SRC-252 L219)
- Input object: `AudioConfig`, defaulting to system microphone unless an audio file is specified. (SRC-252 L220)
- Client object: `SpeechRecognizer`, created from `SpeechConfig` and `AudioConfig`. (SRC-252 L221)
- Recognition call: `RecognizeOnceAsync()` for one asynchronous spoken utterance. (SRC-252 L222)
- Result object: `SpeechRecognitionResult`, with `Reason` and `Text` as the key success indicators. (SRC-252 L223–230)

## Key terms

- **Speech to text** — the Azure Speech API capability for speech recognition. (SRC-252 L218)
- **`AudioConfig`** — the object used to define the audio input source, such as microphone or audio file. (SRC-252 L220)
- **`SpeechRecognizer`** — the proxy client for the Speech to text API. (SRC-252 L221)
- **`RecognizeOnceAsync()`** — the method that asynchronously transcribes a single spoken utterance. (SRC-252 L222)
- **`NoMatch`** — a result state where audio was parsed but no speech was recognized. (SRC-252 L230)
- **`Canceled`** — a result state indicating an error occurred, with details available through `Properties` and `CancellationReason`. (SRC-252 L230)

## Decision boundaries and exam cues

- **Inference:** If the scenario asks which object specifies that transcribed input is an audio file, choose `AudioConfig`, because it defines the audio input source. (SRC-252 L220; SRC-174 L219–222)
- **Inference:** If the scenario asks for the object that calls Speech to text, choose `SpeechRecognizer`, because the source calls it the proxy client. (SRC-252 L221)
- **Inference:** If the scenario is about a single spoken utterance rather than continuous transcription, `RecognizeOnceAsync()` is the method named by this source. (SRC-252 L222)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The Python example is announced but omitted from the capture, so this page records the API pattern from prose rather than exact code syntax. (SRC-252 L231–234)
- The source writes `Speech to text* API` with an asterisk after `text`; no footnote is captured in the teaching lines. (SRC-252 L218)

## Relation to other sources

- [[src-13-azure-speech-foundry-tools]] introduces the `SpeechConfig` setup that this source uses for recognition. (SRC-13 L226–227; SRC-252 L219)
- [[src-253-text-speech-api]] mirrors this pattern in the opposite direction with `SpeechSynthesizer`. (SRC-252 L219–223; SRC-253 L221–225)
- [[src-65-exercise-create-speech-enabled-app]] asks the learner to build speech recognition and synthesis in a lab. (SRC-252 L218–230; SRC-65 L214)
- [[src-35-create-speech-enabled-apps-microsoft-foundry-episode-18]] demonstrates a voicemail transcription flow using `AudioConfig`, `SpeechRecognizer` and recognize-once behavior. (SRC-252 L220–222; SRC-35 L524–549)

## Connections

- [[speech-to-text]] — this source teaches the core Speech to text flow. (SRC-252 L218–230)
- [[azure-speech]] — Speech to text is an Azure Speech in Foundry Tools capability. (SRC-252 L218)
- [[voices-and-audio-formats]] — `AudioConfig` is the input-side counterpart to output configuration in synthesis. (SRC-252 L220; SRC-253 L222)
- [[speech-and-language-options-compared]] — result states and input-source choices support decision boundaries for speech solutions. (SRC-252 L220–230)
- *Module units:* [[src-115-introduction-create-speech-enabled-apps-azure-speech-microsoft-foundry|1 Introduction]] · [[src-13-azure-speech-foundry-tools|2 Azure Speech in Foundry Tools]] · [[src-253-text-speech-api|4 Use the Text to Speech API]] · [[src-21-configure-audio-format-voices|5 Configure audio format and voices]] · [[src-246-speech-synthesis-markup-language|6 Use Speech Synthesis Markup Language]] · [[src-65-exercise-create-speech-enabled-app|7 Exercise - Create a speech-enabled app]] · [[src-174-module-assessment-create-speech-enabled-apps-azure-speech-microsoft|8 Module assessment]] · [[src-192-summary-create-speech-enabled-apps-azure-speech-microsoft-foundry|9 Summary]] · [[src-35-create-speech-enabled-apps-microsoft-foundry-episode-18|episode 18]]

## Open questions

- The source does not provide continuous recognition, streaming, or batch-transcription details in the captured teaching content. (SRC-252 L218–234)

## Sources

- SRC-252 — raw file: [[252-Use the Speech to Text API - Training - Microsoft Learn]]
