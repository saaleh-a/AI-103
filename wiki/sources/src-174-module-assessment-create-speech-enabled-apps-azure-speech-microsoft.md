---
title: "Module assessment — Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Assessment capture with three unanswered questions about endpoint/key access, AudioConfig input files and changing synthesis voices."
area: speech
source_ids: [SRC-174]
objectives: []
tags: [module-assessment, azure-speech, speech-sdk, audioconfig, voices]
aliases: ["SRC-174"]
source_kind: learn-unit
module: "Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools"
learning_path: "Develop natural language solutions in Azure"
unit: "8 of 9"
presenters: []
raw_file: "174-Module assessment - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/create-speech-enabled-apps/8-knowledge-check"
ingest_depth: full
---

# Module assessment — Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools

*learn-unit · Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools · unit 8 of 9 · SRC-174*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-174 |
| Raw file | 174-Module assessment - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop natural language solutions in Azure |
| Module | Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools |
| Unit / episode | 8 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/create-speech-enabled-apps/8-knowledge-check |
| Teaching content | L212–230 of 260 |
| Content length | ~142 words |
| Capture quality | Medium; questions and options are captured, but no checked answers are shown. |
| Ingest depth | full |

## TL;DR

This module assessment captures three questions but not the checked answers. (SRC-174 L214–230) The questions assess what Foundry resource information is needed for the Azure Speech SDK, which object specifies an audio-file input for transcription, and how to change the voice used in speech synthesis. (SRC-174 L214–227)

## Key claims

- The first assessment question asks what information is needed from a Microsoft Foundry resource to consume it with the Azure Speech SDK. (SRC-174 L214)
- The first question options are endpoint and key, primary and secondary keys, and Azure subscription ID plus resource group name. (SRC-174 L215–217)
- The second assessment question asks which object specifies that speech input to be transcribed is in an audio file. (SRC-174 L219)
- The second question options are `SpeechConfig`, `AudioConfig` and `SpeechRecognizer`. (SRC-174 L220–222)
- The third assessment question asks how to change the voice used in speech synthesis. (SRC-174 L224)
- The third question options are specifying a `SpeechSynthesisOutputFormat` enumeration, setting `speech_synthesis_voice_name` on `SpeechConfig`, or specifying a filename in `AudioConfig`. (SRC-174 L225–227)
- The capture says all questions must be answered before checking work, and it does not show the final selected answers. (SRC-174 L228–230)

## How it works

The assessment samples the module's setup, recognition and synthesis customization concepts. (SRC-174 L214–227) Its questions and options cover resource access values, unrelated Azure management values, `AudioConfig`, `SpeechConfig`, `SpeechRecognizer`, voice selection, output format, and filename selection. (SRC-174 L214–227)

## Code and API patterns

No code is shown, but the options name SDK objects and properties. (SRC-174 L220–227)

- `SpeechConfig` appears as an option for input-file selection and as the object containing the `speech_synthesis_voice_name` property option. (SRC-174 L220; SRC-174 L225–227)
- `AudioConfig` appears as an option for specifying speech input in an audio file. (SRC-174 L219–222)
- `SpeechRecognizer` appears as an option but the question asks about input-source specification. (SRC-174 L219–222)

## Key terms

- **Azure Speech SDK** — the SDK named in the resource-information assessment question. (SRC-174 L214)
- **`AudioConfig`** — one option for specifying that transcription input is an audio file. (SRC-174 L219–222)
- **`speech_synthesis_voice_name`** — the property option for changing the voice used in speech synthesis. (SRC-174 L224–227)
- **`SpeechSynthesisOutputFormat`** — an option contrasted with changing the synthesis voice. (SRC-174 L224–227)

## Decision boundaries and exam cues

- **Inference:** Resource-consumption wording points to endpoint and key because the setup source says code uses endpoint and key for API calls. (SRC-13 L223; SRC-174 L214–217)
- **Inference:** Audio-file input wording points to `AudioConfig` because the Speech to text source says `AudioConfig` defines the input source and can specify an audio file. (SRC-252 L220; SRC-174 L219–222)
- **Inference:** Voice-change wording points to `speech_synthesis_voice_name` on `SpeechConfig`, matching the assessment option and the module's voice-configuration source. (SRC-21 L228–232; SRC-174 L223–227)

## Assessment items

1. What information do you need from your Microsoft Foundry resource to consume it using the Azure Speech SDK? (SRC-174 L214)
   - The endpoint and key. (SRC-174 L215)
   - The primary and secondary keys. (SRC-174 L216)
   - The Azure subscription ID and resource group name. (SRC-174 L217)
   - Answer not shown in capture. (SRC-174 L228–230)
2. Which object should you use to specify that the speech input to be transcribed to text is in an audio file? (SRC-174 L219)
   - `SpeechConfig`. (SRC-174 L220)
   - `AudioConfig`. (SRC-174 L221)
   - `SpeechRecognizer`. (SRC-174 L222)
   - Answer not shown in capture. (SRC-174 L228–230)
3. How can you change the voice used in speech synthesis? (SRC-174 L223–224)
   - Specify a `SpeechSynthesisOutputFormat` enumeration in the `SpeechConfig` object. (SRC-174 L225)
   - Set the `speech_synthesis_voice_name` property of the `SpeechConfig` object to the desired voice name. (SRC-174 L226)
   - Specify a filename in the `AudioConfig` object. (SRC-174 L227)
   - Answer not shown in capture. (SRC-174 L228–230)

## Tensions, caveats and currency

- The raw capture does not show checked answers, so this source page records the assessment items without marking source-shown answers. (SRC-174 L228–230)
- The matching episode transcript does state answers for the same three questions, but those answers belong to SRC-35 rather than this source's capture. (SRC-35 L608–638)

## Relation to other sources

- [[src-13-azure-speech-foundry-tools]] provides the endpoint/key setup assessed by the first question. (SRC-13 L223; SRC-174 L214–217)
- [[src-252-speech-text-api]] provides the `AudioConfig` input-source concept assessed by the second question. (SRC-252 L220; SRC-174 L219–222)
- [[src-21-configure-audio-format-voices]] provides the voice configuration concept assessed by the third question. (SRC-21 L228–232; SRC-174 L223–227)
- [[src-35-create-speech-enabled-apps-microsoft-foundry-episode-18]] includes spoken answers to the same assessment concepts. (SRC-174 L214–227; SRC-35 L608–638)

## Connections

- [[azure-speech]] — all questions assess Azure Speech SDK usage. (SRC-174 L214–227)
- [[speech-to-text]] — the second question assesses audio-file input for transcription. (SRC-174 L219–222)
- [[text-to-speech]] — the third question assesses synthesis voice selection. (SRC-174 L223–227)
- [[voices-and-audio-formats]] — the third question lists voice configuration, output format and file output options. (SRC-174 L223–227)
- *Module units:* [[src-115-introduction-create-speech-enabled-apps-azure-speech-microsoft-foundry|1 Introduction]] · [[src-13-azure-speech-foundry-tools|2 Azure Speech in Foundry Tools]] · [[src-252-speech-text-api|3 Use the Speech to Text API]] · [[src-253-text-speech-api|4 Use the Text to Speech API]] · [[src-21-configure-audio-format-voices|5 Configure audio format and voices]] · [[src-246-speech-synthesis-markup-language|6 Use Speech Synthesis Markup Language]] · [[src-65-exercise-create-speech-enabled-app|7 Exercise - Create a speech-enabled app]] · [[src-192-summary-create-speech-enabled-apps-azure-speech-microsoft-foundry|9 Summary]] · [[src-35-create-speech-enabled-apps-microsoft-foundry-episode-18|episode 18]]

## Open questions

- The source capture does not show the checked answer state or feedback text after submission. (SRC-174 L228–230)

## Sources

- SRC-174 — raw file: [[174-Module assessment - Training - Microsoft Learn]]
