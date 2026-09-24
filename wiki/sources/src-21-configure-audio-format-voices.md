---
title: "Configure audio format and voices"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains configuring synthesized speech output format and voice through SpeechConfig."
area: speech
source_ids: [SRC-21]
objectives: [T05]
tags: [text-to-speech, voices, audio-format, speechconfig, speech-synthesis]
aliases: ["SRC-21"]
source_kind: learn-unit
module: "Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools"
learning_path: "Develop natural language solutions in Azure"
unit: "5 of 9"
presenters: []
raw_file: "21-Configure audio format and voices - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/create-speech-enabled-apps/5-audio-format-voices"
ingest_depth: full
---

# Configure audio format and voices

*learn-unit · Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools · unit 5 of 9 · SRC-21*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-21 |
| Raw file | 21-Configure audio format and voices - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop natural language solutions in Azure |
| Module | Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools |
| Unit / episode | 5 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/create-speech-enabled-apps/5-audio-format-voices |
| Teaching content | L212–233 of 263 |
| Content length | ~185 words |
| Capture quality | Medium; it names the configuration concepts, but Python code bodies are omitted after Copy markers. |
| Ingest depth | full |

## TL;DR

When synthesizing speech, a `SpeechConfig` object can customize audio returned by Azure Speech in Foundry Tools. (SRC-21 L218) The source names output format dimensions including audio file type, sample rate and bit depth. (SRC-21 L220–223) It also says Azure Speech provides multiple voices identified by names that include locale, a person's name and other details. (SRC-21 L228–229)

## Key claims

- `SpeechConfig` can customize audio returned by Azure Speech in Foundry Tools during speech synthesis. (SRC-21 L218)
- Azure Speech supports multiple output formats for the generated audio stream. (SRC-21 L219–220)
- Output format can be chosen based on audio file type, sample rate and bit depth requirements. (SRC-21 L220–223)
- The source's omitted Python example sets the speech output format for a previously defined `SpeechConfig` named `speech_config`. (SRC-21 L224–226)
- Azure Speech provides multiple voices for personalizing speech-enabled applications. (SRC-21 L228–229)
- Voice names indicate locale, a person's name and other details, with `en-US-Brian:DragonHDLatestNeural` given as an example. (SRC-21 L229)
- The source's omitted Python example sets the voice to be used. (SRC-21 L230–232)

## How it works

The source treats audio format and voice as customization choices layered onto speech synthesis. (SRC-21 L218–229) Audio format controls properties of the generated audio stream, and the source says the relevant requirements are file type, sample rate and bit depth. (SRC-21 L219–223)

Voices personalize the speech output. (SRC-21 L228–229) The source does not define a voice catalog in detail, but it says voice names include locale, a person's name and other details, then gives `en-US-Brian:DragonHDLatestNeural` as an example of the naming pattern. (SRC-21 L228–229)

## Code and API patterns

The capture omits the Python code bodies, but it states both examples operate on `SpeechConfig`. (SRC-21 L218; SRC-21 L224–232)

- Audio format pattern: set the speech output format for an existing `SpeechConfig` object named `speech_config`. (SRC-21 L224–226)
- Voice pattern: set the voice to be used for synthesis. (SRC-21 L230–234)
- Documentation lookup: the source directs readers to Azure Speech SDK documentation for supported format enumeration values and voice information. (SRC-21 L227; SRC-21 L233)

## Key terms

- **Audio format** — the output format of the synthesized audio stream, selected by file type, sample rate and bit depth needs. (SRC-21 L219–223)
- **Voice** — a selectable speech-synthesis voice used to personalize applications. (SRC-21 L228–229)
- **Voice name** — an identifier that includes locale, a person's name and other details. (SRC-21 L229)
- **`SpeechConfig`** — the object this source uses to customize returned speech audio. (SRC-21 L218)

## Decision boundaries and exam cues

- **Inference:** If a scenario asks about file type, sample rate or bit depth of synthesized output, the relevant concept is speech output format rather than voice. (SRC-21 L219–223)
- **Inference:** If a scenario asks how to change the synthesized speaker, the source points to setting the voice rather than changing `AudioConfig`. (SRC-21 L228–232; SRC-174 L223–227)
- **Inference:** If a scenario shows a value like `en-US-Brian:DragonHDLatestNeural`, treat it as a voice name because the source uses it as the example voice identifier. (SRC-21 L229)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The exact enumeration values for output formats and the available voice list are not captured; the source delegates both to Azure Speech SDK documentation. (SRC-21 L227; SRC-21 L233)
- **Stale-risk:** Voice names and supported formats can change over time, and this source captures only one example voice name. (SRC-21 L227–233)

## Relation to other sources

- [[src-253-text-speech-api]] introduces speech synthesis and `SpeechSynthesizer`; this source configures what the synthesized output sounds like and how it is formatted. (SRC-253 L218–230; SRC-21 L218–229)
- [[src-246-speech-synthesis-markup-language]] extends voice output control with SSML for speaking style, pauses, phonemes and prosody. (SRC-21 L228–232; SRC-246 L218–224)
- [[src-174-module-assessment-create-speech-enabled-apps-azure-speech-microsoft]] asks how to change the voice used in speech synthesis. (SRC-21 L228–232; SRC-174 L223–227)
- [[src-35-create-speech-enabled-apps-microsoft-foundry-episode-18]] demonstrates switching a voicemail greeting voice from Serena to Stefan. (SRC-21 L228–230; SRC-35 L471–496)

## Connections

- [[voices-and-audio-formats]] — this source directly teaches voice and output format configuration. (SRC-21 L218–229)
- [[text-to-speech]] — audio format and voices customize synthesized speech output. (SRC-21 L218–229)
- [[azure-speech]] — Azure Speech provides the multiple voices and output formats. (SRC-21 L219–229)
- [[ssml]] — SSML is the neighbouring mechanism for more detailed speech-output control. (SRC-246 L218–224)
- *Module units:* [[src-115-introduction-create-speech-enabled-apps-azure-speech-microsoft-foundry|1 Introduction]] · [[src-13-azure-speech-foundry-tools|2 Azure Speech in Foundry Tools]] · [[src-252-speech-text-api|3 Use the Speech to Text API]] · [[src-253-text-speech-api|4 Use the Text to Speech API]] · [[src-246-speech-synthesis-markup-language|6 Use Speech Synthesis Markup Language]] · [[src-65-exercise-create-speech-enabled-app|7 Exercise - Create a speech-enabled app]] · [[src-174-module-assessment-create-speech-enabled-apps-azure-speech-microsoft|8 Module assessment]] · [[src-192-summary-create-speech-enabled-apps-azure-speech-microsoft-foundry|9 Summary]] · [[src-35-create-speech-enabled-apps-microsoft-foundry-episode-18|episode 18]]

## Open questions

- The source does not list supported output format enumeration values or the voice catalog; it points to SDK documentation for those details. (SRC-21 L227; SRC-21 L233)

## Sources

- SRC-21 — raw file: [[21-Configure audio format and voices - Training - Microsoft Learn]]
