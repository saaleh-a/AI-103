---
title: "Use Speech Synthesis Markup Language"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Introduces SSML as XML markup for controlling synthesized speech style, pauses, phonemes, prosody, say-as rules and audio insertion."
area: speech
source_ids: [SRC-246]
objectives: [T05]
tags: [ssml, speech-synthesis, text-to-speech, neural-voices, prosody]
aliases: ["SRC-246"]
source_kind: learn-unit
module: "Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools"
learning_path: "Develop natural language solutions in Azure"
unit: "6 of 9"
presenters: []
raw_file: "246-Use Speech Synthesis Markup Language - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/create-speech-enabled-apps/6-speech-synthesis-markup"
ingest_depth: full
---

# Use Speech Synthesis Markup Language

*learn-unit · Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools · unit 6 of 9 · SRC-246*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-246 |
| Raw file | 246-Use Speech Synthesis Markup Language - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop natural language solutions in Azure |
| Module | Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools |
| Unit / episode | 6 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/create-speech-enabled-apps/6-speech-synthesis-markup |
| Teaching content | L212–234 of 264 |
| Content length | ~239 words |
| Capture quality | Medium; SSML capabilities are listed, but XML and Python code bodies are omitted after Copy markers. |
| Ingest depth | full |

## TL;DR

Azure Speech SDK can synthesize plain text, and the service also supports an XML-based syntax for controlling how speech sounds. (SRC-246 L218) Speech Synthesis Markup Language, or SSML, can control speaking style, pauses, phonemes, prosody, `say-as` rules and inserted audio. (SRC-246 L218–224) SSML is submitted to the Speech service through an appropriate `SpeechSynthesizer` method. (SRC-246 L231–233)

## Key claims

- Azure Speech SDK can submit plain text for speech synthesis. (SRC-246 L218)
- The service also supports XML-based syntax for describing characteristics of generated speech. (SRC-246 L218)
- SSML provides greater control over how spoken output sounds. (SRC-246 L218)
- SSML can specify a speaking style such as `excited` or `cheerful` when using a neural voice. (SRC-246 L219)
- SSML can insert pauses or silence. (SRC-246 L220)
- SSML can specify phonemes, such as pronouncing `SQL` as `sequel`. (SRC-246 L221)
- SSML can adjust prosody, affecting pitch, timbre and speaking rate. (SRC-246 L222)
- SSML can use `say-as` rules for strings expressed as dates, times, telephone numbers or other forms. (SRC-246 L223)
- SSML can insert recorded speech or audio, such as a recorded message or simulated background noise. (SRC-246 L224)
- An SSML description can be submitted to the Speech service with an appropriate `SpeechSynthesizer` method. (SRC-246 L231–233)

## How it works

The source positions SSML as the richer alternative to plain-text synthesis. (SRC-246 L218) Instead of only passing text to be spoken, the application passes XML markup that describes how the speech should sound. (SRC-246 L218–224)

SSML controls multiple layers of output. (SRC-246 L219–224) Speaking style changes delivery for neural voices, pauses and silence control timing, phonemes control pronunciation, prosody changes pitch, timbre and rate, `say-as` rules control interpretation of structured strings, and inserted audio can mix in recorded speech or background sounds. (SRC-246 L219–224)

The source's example describes a spoken dialog between two neural voices and then says the SSML is submitted with an appropriate `SpeechSynthesizer` method. (SRC-246 L225–233)

## Code and API patterns

The XML and Python snippets are omitted from the capture, but the source identifies the pattern. (SRC-246 L225–233)

- Markup format: XML-based SSML describes speech characteristics. (SRC-246 L218)
- Synthesis client: `SpeechSynthesizer` submits the SSML description to the Speech service. (SRC-246 L231–233)
- Control elements: style, pause, phoneme, prosody, `say-as` and inserted audio are named SSML controls in this source. (SRC-246 L219–224)

## Key terms

- **Speech Synthesis Markup Language (SSML)** — XML-based syntax for describing characteristics of synthesized speech. (SRC-246 L218)
- **Speaking style** — a neural-voice style such as `excited` or `cheerful`. (SRC-246 L219)
- **Phoneme** — a phonetic pronunciation instruction, such as pronouncing `SQL` as `sequel`. (SRC-246 L221)
- **Prosody** — control over pitch, timbre and speaking rate. (SRC-246 L222)
- **`say-as`** — rules for expressing strings as dates, times, telephone numbers or other forms. (SRC-246 L223)

## Decision boundaries and exam cues

- **Inference:** If plain text synthesis does not provide enough control over how output sounds, SSML is the source's mechanism for richer control. (SRC-246 L218–224)
- **Inference:** If the scenario requires pronunciation control, choose phonemes in SSML rather than changing the output audio format. (SRC-246 L221; SRC-21 L219–223)
- **Inference:** If the scenario requires rate, pitch or timbre control, choose prosody in SSML. (SRC-246 L222)
- **Inference:** If the scenario requires a date, time or telephone number to be spoken in a particular form, the source points to `say-as` rules. (SRC-246 L223)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source announces XML and Python examples, but both code bodies are omitted from the capture. (SRC-246 L225–233)
- The source points readers to Azure Speech SDK documentation for more information about SSML, so detailed tag syntax is outside this capture. (SRC-246 L234)

## Relation to other sources

- [[src-253-text-speech-api]] teaches plain text synthesis with `SpeakTextAsync()`; this source adds markup-controlled synthesis. (SRC-253 L224; SRC-246 L218–231)
- [[src-21-configure-audio-format-voices]] configures format and selected voice, while this source controls how words are spoken. (SRC-21 L218–229; SRC-246 L218–224)
- [[src-192-summary-create-speech-enabled-apps-azure-speech-microsoft-foundry]] lists SSML as one of the module outcomes. (SRC-246 L218–233; SRC-192 L218–223)
- [[src-35-create-speech-enabled-apps-microsoft-foundry-episode-18]] explains SSML as XML that controls what is said and how it is said. (SRC-246 L218–224; SRC-35 L251–333)

## Connections

- [[ssml]] — this source directly introduces Speech Synthesis Markup Language. (SRC-246 L218)
- [[text-to-speech]] — SSML is used when synthesizing speech output. (SRC-246 L218–231)
- [[voices-and-audio-formats]] — SSML complements voice selection and output-format configuration. (SRC-21 L218–229; SRC-246 L219–224)
- [[azure-speech]] — the Speech service consumes SSML through `SpeechSynthesizer`. (SRC-246 L231–233)
- *Module units:* [[src-115-introduction-create-speech-enabled-apps-azure-speech-microsoft-foundry|1 Introduction]] · [[src-13-azure-speech-foundry-tools|2 Azure Speech in Foundry Tools]] · [[src-252-speech-text-api|3 Use the Speech to Text API]] · [[src-253-text-speech-api|4 Use the Text to Speech API]] · [[src-21-configure-audio-format-voices|5 Configure audio format and voices]] · [[src-65-exercise-create-speech-enabled-app|7 Exercise - Create a speech-enabled app]] · [[src-174-module-assessment-create-speech-enabled-apps-azure-speech-microsoft|8 Module assessment]] · [[src-192-summary-create-speech-enabled-apps-azure-speech-microsoft-foundry|9 Summary]] · [[src-35-create-speech-enabled-apps-microsoft-foundry-episode-18|episode 18]]

## Open questions

- The source does not include the actual SSML XML or Python syntax in the captured content. (SRC-246 L225–233)

## Sources

- SRC-246 — raw file: [[246-Use Speech Synthesis Markup Language - Training - Microsoft Learn]]
