---
title: "Create speech-enabled apps with Microsoft Foundry - AI-103 - Episode 18"
type: source
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Episode walkthrough of Azure Speech in Foundry: why use Speech tools, SpeechConfig, recognition, synthesis, SSML, voices and voicemail demo."
area: speech
source_ids: [SRC-35]
objectives: [T05]
tags: [episode, azure-speech, foundry-tools, speech-to-text, text-to-speech, ssml, demo]
aliases: ["SRC-35"]
source_kind: episode
module: "Create speech-enabled apps with Microsoft Foundry"
learning_path: null
unit: null
presenters: ["ROB FOULKROD", "STEFAN", "SERENA", "AVA", "ADAM"]
raw_file: "35-Create speech-enabled apps with Microsoft Foundry - AI-103 - Episode 18.md"
url: "https://www.youtube.com/watch?v=OQKQtqjZ1Wo"
ingest_depth: full
---

# Create speech-enabled apps with Microsoft Foundry - AI-103 - Episode 18

*episode · Create speech-enabled apps with Microsoft Foundry · SRC-35*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-35 |
| Raw file | 35-Create speech-enabled apps with Microsoft Foundry - AI-103 - Episode 18.md |
| Kind | episode |
| Learning path | null |
| Module | Create speech-enabled apps with Microsoft Foundry |
| Unit / episode | Episode 18 |
| Presenter(s) | ROB FOULKROD, STEFAN, SERENA, AVA, ADAM |
| URL | https://www.youtube.com/watch?v=OQKQtqjZ1Wo |
| Teaching content | L3–686 of 686 |
| Content length | ~3,020 words |
| Capture quality | Medium; the transcript is auto-captioned and includes repeated or misheard phrases, but the technical flow is clear. |
| Ingest depth | full |

## TL;DR

Rob Foulkrod presents Azure Speech and Foundry tools as the way to add reliable audio-to-text and text-to-audio capabilities without building them from scratch. (SRC-35 L4–18) He contrasts Azure Speech tools with large language model speech features: Speech tools provide more predictable latency and cost, explicit voice and audio-format control, and easier auditing/logging, while they do not reason about intent or understanding. (SRC-35 L29–92) The episode walks through `SpeechConfig`, `AudioConfig`, `SpeechRecognizer`, `SpeechSynthesizer`, SSML and a voicemail demo that generates greetings and transcribes messages. (SRC-35 L105–248; SRC-35 L251–333; SRC-35 L394–599)

## Key claims

- Speech is described as a natural human interface, and reliably turning audio into text and text into audio at scale across dozens of languages is not something the presenter recommends building from scratch. (SRC-35 L4–13)
- The session covers speech-to-text, text-to-speech, audio formats, the voice catalog and SSML. (SRC-35 L19–26)
- Azure Speech tools are presented as more predictable than large language models for latency and cost at scale. (SRC-35 L38–53)
- Azure Speech tools provide explicit control over voices and audio formats. (SRC-35 L54–69)
- Azure Speech tools provide more metadata for auditing, logging and troubleshooting than a model returning only audio output. (SRC-35 L70–84)
- The trade-off is that the system does not reason about text intent or understanding; it gives a consistent translation each time. (SRC-35 L85–92)
- SpeechConfig can use a Foundry project API key or, preferably, Entra ID authentication. (SRC-35 L113–129)
- For speech-to-text, `AudioConfig` determines whether audio comes from microphone or file, and `SpeechRecognizer` performs recognition. (SRC-35 L153–180)
- `RecognizeOnce` returns a transcript plus metadata such as duration, properties and reason values like no match or canceled. (SRC-35 L181–214)
- For text-to-speech, `AudioConfig` determines the output target, and the audio stream can go to a file or speaker. (SRC-35 L219–248)
- SSML is described as an XML document that controls both what should be said and how it should be said. (SRC-35 L251–274)
- The demo uses Default Azure Credential, `SpeechConfig`, `AudioConfig`, `SpeechSynthesizer`, voice changes and `SpeechRecognizer` to synthesize and transcribe voicemail messages. (SRC-35 L367–438; SRC-35 L471–549)
- The presenter says no large language models were used in the demo and that pre-built models were used for these purposes. (SRC-35 L588–599)

## How it works

The episode starts by explaining why a developer might choose Azure Speech in Foundry Tools over a large language model for speech tasks. (SRC-35 L29–43) The advantages named are predictable latency and cost, explicit voice and audio-format control, repeatable output when repeatability matters, and metadata that makes auditing, logging and troubleshooting easier. (SRC-35 L44–84) The trade-off is that these tools do not reason about intent or understanding. (SRC-35 L85–92)

The implementation pattern begins with a Foundry endpoint and credentials. (SRC-35 L105–129) The presenter says the same endpoint pattern used with text analytics appears here, with a Foundry resource host ending in `services.ai.azure.com`, and credentials can be a project API key or preferably Entra ID. (SRC-35 L107–119) Those values feed `SpeechConfig`, which becomes the connection to Azure Speech and the starting point for both text-to-speech and speech-to-text. (SRC-35 L120–135)

For speech-to-text, the app combines `SpeechConfig` with `AudioConfig`; `AudioConfig` states whether input audio comes from a microphone or a file. (SRC-35 L145–163) The app then creates a `SpeechRecognizer` and calls `RecognizeOnce` to produce a transcript plus metadata. (SRC-35 L171–198) The presenter names reason states such as no match or canceled as troubleshooting signals. (SRC-35 L203–214)

For text-to-speech, the same `SpeechConfig` is paired with output audio configuration so the result can be written to a file or played through a speaker. (SRC-35 L215–240) The returned audio stream is the primary output, with additional metadata properties and result information. (SRC-35 L241–248)

SSML adds more detailed control when standard text synthesis is not enough. (SRC-35 L249–270) The episode describes SSML controls for speaking style, pauses or silence, phonetic spelling, prosody, `say as`, recorded speech and background audio. (SRC-35 L275–333)

## Segment guide

- L3–28 — Opening and scope: Azure Speech in Foundry tools, speech-to-text, text-to-speech, audio formats, voice catalog and SSML. (SRC-35 L3–28)
- L29–104 — Decision context: why choose Azure Speech tools over large language model speech features, with trade-offs around predictability, control, logging and lack of intent reasoning. (SRC-35 L29–104)
- L105–144 — Shared setup: Foundry endpoint, API key or Entra ID authentication, `SpeechConfig` and optional `AudioConfig`. (SRC-35 L105–144)
- L145–214 — Speech-to-text pattern: input source, `SpeechRecognizer`, `RecognizeOnce`, transcript and result metadata. (SRC-35 L145–214)
- L215–248 — Text-to-speech pattern: output configuration, audio stream destination and synthesis metadata. (SRC-35 L215–248)
- L249–333 — SSML: XML markup for styles, pauses, phonemes, prosody, `say as`, recorded speech and background audio. (SRC-35 L249–333)
- L334–393 — Demo setup: a deployed Foundry project, environment configuration, Foundry endpoint/key, Default Azure Credential and `SpeechConfig`. (SRC-35 L334–393)
- L394–518 — Demo part 1: record a voicemail greeting, write it to a file and change voice from Serena to Stefan. (SRC-35 L394–518)
- L519–599 — Demo part 2: transcribe voicemail messages by looping through files with `AudioConfig`, `SpeechRecognizer` and recognize-once behavior. (SRC-35 L519–599)
- L603–638 — Knowledge-check answers: endpoint and key or endpoint and credential, `AudioConfig`, and voice name in `SpeechConfig`. (SRC-35 L603–638)
- L640–686 — Review and close: Speech SDK, `SpeechConfig`, recognizer, synthesizer, voice and format options, SSML and learning encouragement. (SRC-35 L640–686)

## Code and API patterns

The transcript describes code but does not preserve full source snippets. (SRC-35 L366–438; SRC-35 L524–549)

- Authentication pattern: use the Foundry project API key or preferably Entra ID; the demo uses Default Azure Credential. (SRC-35 L113–119; SRC-35 L372–382)
- Shared configuration: create `SpeechConfig` from the credential and endpoint as the connection to Azure Speech. (SRC-35 L120–135; SRC-35 L378–390)
- Speech-to-text input: create `AudioConfig` for microphone or file input before constructing `SpeechRecognizer`. (SRC-35 L136–163; SRC-35 L535–545)
- Recognition call: call recognize-once behavior and print the transcription if it works. (SRC-35 L175–186; SRC-35 L546–549)
- Text-to-speech output: create output `AudioConfig`, create `SpeechSynthesizer`, pass text to speak, and receive a result. (SRC-35 L219–248; SRC-35 L413–437)
- Voice selection: set the desired voice in configuration before synthesis. (SRC-35 L417–423; SRC-35 L471–496; SRC-35 L633–638)
- SSML pattern: pass an XML SSML string to `speak SSML async`. (SRC-35 L251–270; SRC-35 L331–333)

## Key terms

- **`SpeechConfig`** — the connection object for Azure Speech, built from endpoint and credentials and used for both directions. (SRC-35 L120–135)
- **`AudioConfig`** — the object that determines input source for recognition or output destination for synthesis. (SRC-35 L136–163; SRC-35 L223–240)
- **`SpeechRecognizer`** — the speech-to-text client that uses recognize-once behavior in the episode. (SRC-35 L171–186)
- **`SpeechSynthesizer`** — the text-to-speech client used to synthesize the voicemail greeting. (SRC-35 L421–437)
- **SSML** — Speech Synthesis Markup Language, an XML document for controlling what is said and how it is said. (SRC-35 L262–270)
- **Prosody** — speaking pitch, range and speed. (SRC-35 L295–303)

## Decision boundaries and exam cues

- **Inference:** If a scenario prioritizes predictable latency and cost, explicit voices/formats, or troubleshooting metadata, this episode favors Azure Speech tools over large language model speech features. (SRC-35 L44–84)
- **Inference:** If a scenario requires reasoning about intent or meaning of text, this episode says Azure Speech tools are not doing that reasoning. (SRC-35 L85–92)
- **Inference:** If a scenario asks for the shared setup object for either recognition or synthesis, choose `SpeechConfig`. (SRC-35 L120–135; SRC-35 L640–649)
- **Inference:** If a scenario asks where input audio comes from or where output audio goes, choose `AudioConfig`. (SRC-35 L136–163; SRC-35 L223–240)
- **Inference:** If a scenario asks for exact pronunciation, speaking style, pauses or structured string reading, use SSML rather than only changing voice or audio format. (SRC-35 L249–333)

## Assessment items

1. What information do you need from your Microsoft Foundry resource to consume it using the Azure Speech SDK? (SRC-35 L608–613)
   - Answer shown in transcript: endpoint and key; endpoint and credential is also described as a secondary option. (SRC-35 L614–621)
2. Which object should you use to specify that the speech input to be transcribed to text is an audio file? (SRC-35 L622–625)
   - Answer shown in transcript: `AudioConfig`. (SRC-35 L626–632)
3. How can you change the voice used in speech synthesis? (SRC-35 L633–634)
   - Answer shown in transcript: set the voice name inside `SpeechConfig`. (SRC-35 L635–638)

## Tensions, caveats and currency

- The episode uses `Azure Speech and Foundry tools`, `Azure AI Speech`, older `cognitive tools`, and Foundry packaging language; this naming drift should be preserved when comparing sources. (SRC-35 L12–20; SRC-35 L588–594)
- The transcript is auto-captioned and includes repeated phrases and possible caption errors such as `transcribeD message` and repeated prosody wording. (SRC-35 L295–303; SRC-35 L524–526)
- The presenter says no large language models were used and pre-built models were used, which clarifies the demo but does not enumerate those model internals. (SRC-35 L588–599)

## Relation to other sources

- [[src-115-introduction-create-speech-enabled-apps-azure-speech-microsoft-foundry]] introduces the same module scope in Learn-unit form. (SRC-115 L216–226; SRC-35 L19–26)
- [[src-13-azure-speech-foundry-tools]] aligns with the episode's setup around endpoint, key and `SpeechConfig`. (SRC-13 L222–234; SRC-35 L105–135)
- [[src-252-speech-text-api]] aligns with the episode's speech-to-text pattern using `AudioConfig`, `SpeechRecognizer` and recognize-once behavior. (SRC-252 L218–230; SRC-35 L145–214)
- [[src-253-text-speech-api]] aligns with the episode's synthesis pattern using output audio configuration and `SpeechSynthesizer`. (SRC-253 L218–230; SRC-35 L215–248)
- [[src-246-speech-synthesis-markup-language]] aligns with the episode's SSML segment. (SRC-246 L218–234; SRC-35 L249–333)

## Connections

- [[azure-speech]] — the episode is a speech-focused walkthrough. (SRC-35 L12–26)
- [[foundry-tools]] — the episode frames Azure Speech as packaged alongside Foundry tools. (SRC-35 L38–43; SRC-35 L588–594)
- [[speech-to-text]] — the episode teaches and demos transcription. (SRC-35 L145–214; SRC-35 L519–587)
- [[text-to-speech]] — the episode teaches and demos synthesis. (SRC-35 L215–248; SRC-35 L394–518)
- [[voices-and-audio-formats]] — voice and audio format control is a stated reason to choose Speech tools. (SRC-35 L54–69; SRC-35 L471–496)
- [[ssml]] — the episode explains and situates SSML. (SRC-35 L249–333)
- [[speech-capable-models]] — the episode contrasts Azure Speech tools with large language model speech features. (SRC-35 L29–92)
- [[speech-and-language-options-compared]] — the source contains decision-boundary evidence for Speech tools versus LLM speech features. (SRC-35 L44–92)
- *Module units:* [[src-115-introduction-create-speech-enabled-apps-azure-speech-microsoft-foundry|1 Introduction]] · [[src-13-azure-speech-foundry-tools|2 Azure Speech in Foundry Tools]] · [[src-252-speech-text-api|3 Use the Speech to Text API]] · [[src-253-text-speech-api|4 Use the Text to Speech API]] · [[src-21-configure-audio-format-voices|5 Configure audio format and voices]] · [[src-246-speech-synthesis-markup-language|6 Use Speech Synthesis Markup Language]] · [[src-65-exercise-create-speech-enabled-app|7 Exercise - Create a speech-enabled app]] · [[src-174-module-assessment-create-speech-enabled-apps-azure-speech-microsoft|8 Module assessment]] · [[src-192-summary-create-speech-enabled-apps-azure-speech-microsoft-foundry|9 Summary]]

## Open questions

- The transcript does not preserve full demo code, so exact syntax must be verified from the lab or SDK documentation. (SRC-35 L366–438; SRC-35 L524–549)
- The episode names future coverage of Voice Live and speech translation but does not teach those APIs here. (SRC-35 L99–104)

## Sources

- SRC-35 — raw file: [[35-Create speech-enabled apps with Microsoft Foundry - AI-103 - Episode 18]]
