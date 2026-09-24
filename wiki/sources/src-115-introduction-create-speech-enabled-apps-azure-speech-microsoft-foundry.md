---
title: "Introduction — Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Introduces Azure Speech APIs for speech-enabled apps and positions speech recognition and synthesis as the module focus."
area: speech
source_ids: [SRC-115]
objectives: []
tags: [azure-speech, foundry-tools, speech-to-text, text-to-speech, speech-sdk]
aliases: ["SRC-115"]
source_kind: learn-unit
module: "Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools"
learning_path: "Develop natural language solutions in Azure"
unit: "1 of 9"
presenters: []
raw_file: "115-Introduction - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/create-speech-enabled-apps/1-introduction"
ingest_depth: full
---

# Introduction — Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools

*learn-unit · Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools · unit 1 of 9 · SRC-115*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-115 |
| Raw file | 115-Introduction - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop natural language solutions in Azure |
| Module | Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools |
| Unit / episode | 1 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/create-speech-enabled-apps/1-introduction |
| Teaching content | L212–228 of 258 |
| Content length | ~228 words |
| Capture quality | High; concise prose lists capabilities, focus, SDK languages and format note. |
| Ingest depth | full |

## TL;DR

Azure Speech in Foundry Tools provides APIs for building speech-enabled applications. (SRC-115 L216) The module names speech to text, text to speech, speech translation and Voice Live, then narrows its teaching focus to speech recognition and speech synthesis. (SRC-115 L217–221) Its examples use Python, but the source says Azure Speech SDK packages are available for Python, Microsoft .NET, JavaScript and Java. (SRC-115 L222–226)

## Key claims

- Azure Speech in Foundry Tools provides APIs for building speech-enabled applications. (SRC-115 L216)
- Speech to text enables speech recognition so an application can accept spoken input. (SRC-115 L217)
- Text to speech enables speech synthesis so an application can provide spoken output. (SRC-115 L218)
- Speech Translation translates spoken input into multiple languages. (SRC-115 L219)
- Voice Live can build AI agents that conduct real-time conversations. (SRC-115 L220)
- The module focuses on speech recognition and speech synthesis as core capabilities of a speech-enabled application. (SRC-115 L221)
- The examples are in Python, while SDK packages also exist for Microsoft .NET, JavaScript and Java. (SRC-115 L222–226)

## How it works

The source presents Azure Speech in Foundry Tools as a family of APIs rather than a single operation. (SRC-115 L216–220) It separates four capabilities by direction and interaction pattern: spoken input becomes text through speech recognition, text becomes spoken output through synthesis, spoken input can be translated, and Voice Live supports real-time conversational agents. (SRC-115 L217–220)

The unit frames speech recognition and synthesis as the module's core path. (SRC-115 L221) That sets up the later module flow: connect to a Foundry resource, transcribe audio, synthesize speech, configure voices and formats, and use SSML for richer synthesis. (SRC-115 L221; SRC-192 L218–223)

## Code and API patterns

The source does not provide code, but it states that the module's code examples are Python and that Azure Speech SDK packages are available for Python, Microsoft .NET, JavaScript and Java. (SRC-115 L222–226)

## Key terms

- **Speech to text** — the API capability that lets an application accept spoken input through speech recognition. (SRC-115 L217)
- **Text to speech** — the API capability that lets an application provide spoken output through speech synthesis. (SRC-115 L218)
- **Speech Translation** — the API capability for translating spoken input into multiple languages. (SRC-115 L219)
- **Voice Live** — the API capability for AI agents that conduct real-time conversations. (SRC-115 L220)
- **Azure Speech SDK packages** — SDK packages available for Python, Microsoft .NET, JavaScript and Java in this source. (SRC-115 L222–226)

## Decision boundaries and exam cues

- **Inference:** If a scenario asks for spoken input accepted by an application, the source's named capability is Speech to text. (SRC-115 L217)
- **Inference:** If a scenario asks for spoken output from application text, the source's named capability is Text to speech. (SRC-115 L218)
- **Inference:** If a scenario asks for spoken input translated into multiple languages, the source points to Speech Translation rather than the module's recognition-and-synthesis focus. (SRC-115 L219–221)
- **Inference:** If a scenario requires real-time conversational agents, Voice Live is the named capability, while this module does not teach that API in depth. (SRC-115 L220–221)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source includes both `Azure Speech in Foundry Tools` and `Voice Live`, but it explicitly states that this module focuses on speech recognition and speech synthesis. (SRC-115 L216–221)
- The source notes video and text/image formats and says the text can contain greater detail than the videos. (SRC-115 L228)

## Relation to other sources

- [[src-13-azure-speech-foundry-tools]] continues by explaining the Foundry resource, endpoint, key and `SpeechConfig` setup needed to use the APIs introduced here. (SRC-115 L216–222; SRC-13 L218–230)
- [[src-252-speech-text-api]] expands the Speech to text capability introduced here into the `SpeechRecognizer` pattern. (SRC-115 L217; SRC-252 L218–230)
- [[src-253-text-speech-api]] expands the Text to speech capability introduced here into the `SpeechSynthesizer` pattern. (SRC-115 L218; SRC-253 L218–230)
- [[src-35-create-speech-enabled-apps-microsoft-foundry-episode-18]] gives the episode version of the same focus: speech-to-text, text-to-speech, audio formats, voices and SSML. (SRC-115 L217–221; SRC-35 L19–26)

## Connections

- [[azure-speech]] — the source introduces Azure Speech capabilities for applications. (SRC-115 L216–221)
- [[foundry-tools]] — Azure Speech is presented as a Foundry Tools capability in this source. (SRC-115 L216)
- [[speech-to-text]] — speech recognition is one of the named APIs. (SRC-115 L217)
- [[text-to-speech]] — speech synthesis is one of the named APIs. (SRC-115 L218)
- [[speech-translation]] — speech translation is named but not explored by this unit. (SRC-115 L219)
- [[voice-live-api]] — Voice Live is named as the real-time conversation capability. (SRC-115 L220)
- *Module units:* [[src-13-azure-speech-foundry-tools|2 Azure Speech in Foundry Tools]] · [[src-252-speech-text-api|3 Use the Speech to Text API]] · [[src-253-text-speech-api|4 Use the Text to Speech API]] · [[src-21-configure-audio-format-voices|5 Configure audio format and voices]] · [[src-246-speech-synthesis-markup-language|6 Use Speech Synthesis Markup Language]] · [[src-65-exercise-create-speech-enabled-app|7 Exercise - Create a speech-enabled app]] · [[src-174-module-assessment-create-speech-enabled-apps-azure-speech-microsoft|8 Module assessment]] · [[src-192-summary-create-speech-enabled-apps-azure-speech-microsoft-foundry|9 Summary]] · [[src-35-create-speech-enabled-apps-microsoft-foundry-episode-18|episode 18]]

## Open questions

- The source names Speech Translation and Voice Live, but this module does not teach their implementation details. (SRC-115 L219–221)

## Sources

- SRC-115 — raw file: [[115-Introduction - Training - Microsoft Learn]]
