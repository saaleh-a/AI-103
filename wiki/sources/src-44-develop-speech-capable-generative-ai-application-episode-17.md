---
title: "Develop a speech-capable generative AI application - AI-103 - Episode 17"
type: source
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Episode demo: choose, deploy, and call speech-to-text and text-to-speech GPT-4o models from a Foundry project."
area: speech
source_ids: [SRC-44]
objectives: [P01, G01, T05]
tags: [episode, speech, transcription, text-to-speech, microsoft-foundry, openai-sdk]
aliases: ["SRC-44"]
source_kind: episode
module: "Develop a speech-capable generative AI application"
learning_path: null
unit: null
presenters: ["ROB FOULKROD"]
raw_file: "44-Develop a speech-capable generative AI application - AI-103 - Episode 17.md"
url: "https://www.youtube.com/watch?v=C5ZE-mzU1wA"
ingest_depth: full
---

# Develop a speech-capable generative AI application - AI-103 - Episode 17

*episode · Develop a speech-capable generative AI application · SRC-44*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-44 |
| Raw file | `44-Develop a speech-capable generative AI application - AI-103 - Episode 17.md` |
| Kind | episode |
| Learning path | null |
| Module | Develop a speech-capable generative AI application |
| Unit / episode | Episode 17 |
| Presenter(s) | ROB FOULKROD |
| URL | https://www.youtube.com/watch?v=C5ZE-mzU1wA |
| Teaching content | L3–414 of 414 |
| Content length | ~1764 words |
| Capture quality | Medium: auto-captioned transcript with useful demo detail and possible wording artifacts. |
| Ingest depth | full |

## TL;DR

Rob Foulkrod presents a multimodal audio chat session that deploys models that understand audio, builds an audio chat application, and extends the pattern into a speech-enabled app. (SRC-44 L13–24) The demo chooses speech-to-text and text-to-speech models by inference task in Foundry, deploys `GPT-4o mini transcribe` and `GPT-4o-mini text to speech`, then uses Azure OpenAI client patterns for synthesis and transcription. (SRC-44 L147–190; SRC-44 L228–337)

## Key claims

- The session frames voice, tone, pacing, and intent as parts of real conversation that text chat alone does not capture. (SRC-44 L4–12)
- Only a small fraction of Foundry's large model collection is usable for speech-capable services. (SRC-44 L26–41)
- Foundry can be searched or filtered by inference tasks such as speech-to-text and text-to-speech. (SRC-44 L42–68; SRC-44 L153–178)
- `GPT-4o mini transcribe` is presented as a speech-to-text-capable model. (SRC-44 L52–56; SRC-44 L168–174)
- `GPT-4o mini-tts` or `GPT-4o-mini text to speech` is presented as a text-to-speech model. (SRC-44 L57–68; SRC-44 L175–182)
- Speech-capable models are described as optimized for tasks such as transcription from audio or video and text-to-speech output for listening scenarios. (SRC-44 L69–85)
- The presenter says some models account for intent and emotion, making them richer than just producing appropriate sounds. (SRC-44 L97–116)
- A typical pattern is to deploy one or both models in Microsoft Foundry, then use transcription for binary audio input to text and TTS for text input to binary audio output. (SRC-44 L117–135)

## How it works

The episode uses a two-model architecture: a transcription deployment accepts binary audio content and produces underlying text, while a TTS deployment accepts text and produces binary audio output. (SRC-44 L117–135) The demo begins from a Foundry project, searches models by inference task, deploys a speech-to-text model with default settings, and then deploys a text-to-speech model with default settings. (SRC-44 L147–190)

For client configuration, the presenter copies the Foundry endpoint, states it is the same for both models, and stores endpoint and deployment names in environment variables. (SRC-44 L193–227) For synthesis, the code path sets up a token provider with default credential, builds an Azure OpenAI endpoint/client, calls audio speech with a streaming response, passes deployment, voice, input text, and instructions, and streams the bytes to `speech.mp3`. (SRC-44 L228–297) For transcription, the code uses a WAV file path, default credential, an Azure OpenAI client, audio transcriptions create, an audio file, and an output format before displaying the transcript. (SRC-44 L300–337)

## Segment guide

- L3–25 — Opening: text chat is contrasted with audio conversations that include voice, tone, pacing, and intent, and the session goal is set. (SRC-44 L3–25)
- L26–68 — Model discovery: Foundry has many models, but speech-capable work requires filtering to inference tasks such as speech-to-text and text-to-speech. (SRC-44 L26–68)
- L69–145 — Conceptual split: transcription extracts text from audio or video, while TTS produces spoken output from text, possibly with richer intent and emotion. (SRC-44 L69–145)
- L147–190 — Portal demo: the presenter searches by inference task and deploys `GPT-4o mini transcribe` and `GPT-4o-mini text to speech` with default settings. (SRC-44 L147–190)
- L193–227 — Project configuration: the demo copies the Foundry endpoint and sets environment variables for the endpoint and deployment names. (SRC-44 L193–227)
- L228–299 — Speech generation code: the demo builds a credentialed Azure OpenAI client, calls audio speech with streaming response, writes `speech.mp3`, and plays it. (SRC-44 L228–299)
- L300–357 — Transcription code: the demo plays a WAV file, sends it to audio transcriptions, and displays the resulting text. (SRC-44 L300–357)
- L359–389 — Oral assessment and recap: the presenter asks which model generates text from speech and which synthesizes speech from text, then restates the model choice. (SRC-44 L359–389)
- L390–414 — Closing: the session is summarized as crossing from text into voice and building an audio chat and speech-enabled experience. (SRC-44 L390–414)

## Code and API patterns

The synthesis demo uses default credential and a token provider, then builds an Azure OpenAI endpoint/client with endpoint, token provider, and model API version inputs. (SRC-44 L236–246) It uses audio speech with `with streaming response`, then passes deployment, voice, text input, and instructions before streaming bytes to a file. (SRC-44 L247–297)

The transcription demo uses a local WAV file, a token provider with default Azure credential, an Azure OpenAI client, and audio transcriptions create with the audio file and output format. (SRC-44 L316–337)

**Inference:** The episode's code path aligns with the Learn-unit pattern that speech synthesis and transcription use the `AzureOpenAI` client in the OpenAI SDK against a Microsoft Foundry resource endpoint. (SRC-44 L236–246; SRC-221 L222–223; SRC-225 L223–224)

## Key terms

- **Speech-to-text:** an inference task used to find models such as GPT-4o mini transcribe. (SRC-44 L42–56)
- **Text-to-speech:** an inference task used to find models such as GPT-4o mini-tts. (SRC-44 L57–68)
- **TTS:** the presenter uses it for text-to-speech that takes text and reads it out appropriately. (SRC-44 L126–131)
- **Foundry endpoint:** the endpoint copied from the project and shared by both deployed models in the demo. (SRC-44 L211–215)
- **Binary audio output:** the presenter's description of what the text-to-speech model returns. (SRC-44 L132–135)

## Decision boundaries and exam cues

- **Inference:** Choose a transcribe model when the scenario asks for text from speech or extracting a transcript from an audio or video source. (SRC-44 L69–78; SRC-44 L363–369)
- **Inference:** Choose a TTS model when the scenario asks for speech synthesized from text or spoken output for a listener. (SRC-44 L79–85; SRC-44 L370–374)
- **Inference:** The Foundry portal cue is inference-task filtering; the code cue is the audio namespace split between speech generation and transcriptions. (SRC-44 L153–178; SRC-44 L247–253; SRC-44 L329–333)
- **Inference:** Deployment is a prerequisite in this episode before the client app calls the models. (SRC-44 L117–140; SRC-44 L168–190)

## Assessment items

1. The presenter asks which model generates text from speech and answers that it is the mini transcribe model. (SRC-44 L361–369)
2. The presenter asks which model synthesizes speech from text and answers `GPT-4o-mini-tts`, or text-to-speech. (SRC-44 L370–374)

## Tensions, caveats and currency

- **Stale-risk:** The presenter mentions Foundry having about 11,000 models at one point; the number is explicitly anecdotal and time-sensitive. (SRC-44 L26–33)
- **Stale-risk:** Model names and portal labels such as inference tasks, `GPT-4o mini transcribe`, and `GPT-4o-mini text to speech` may drift over time. (SRC-44 L42–68; SRC-44 L168–182)
- The episode is auto-captioned, and some code identifiers are paraphrased by captions rather than shown as exact source code. (SRC-44 L228–337)

## Relation to other sources

- [[src-17-choose-speech-capable-model]] states the same two model-selection use cases in a shorter Learn unit. (SRC-17 L216–221)
- [[src-225-transcribe-speech]] names the supported transcription models that the episode demonstrates with `GPT-4o mini transcribe`. (SRC-225 L216–220; SRC-44 L168–174)
- [[src-221-synthesize-speech]] names the supported text-to-speech models that the episode demonstrates with `GPT-4o-mini text to speech`. (SRC-221 L216–219; SRC-44 L175–182)
- [[src-175-module-assessment-develop-speech-capable-generative-ai-application]] contains the written module assessment version of the two oral questions in the episode. (SRC-175 L212–220; SRC-44 L361–374)

## Connections

- [[microsoft-foundry]] — the demo happens inside a Foundry project and model catalog. (SRC-44 L117–190)
- [[model-catalog]] — the episode demonstrates searching by inference task in Foundry. (SRC-44 L147–178)
- [[speech-capable-models]] — the source's main topic is speech-capable model choice and use. (SRC-44 L26–68)
- [[speech-to-text]] — the episode deploys and calls a transcription model. (SRC-44 L147–174; SRC-44 L316–337)
- [[text-to-speech]] — the episode deploys and calls a TTS model. (SRC-44 L175–182; SRC-44 L228–297)
- [[openai-sdk]] — the episode uses Azure OpenAI client patterns and audio APIs. (SRC-44 L236–253; SRC-44 L316–337)
- [[azure-openai]] — the code demo is described as using Azure OpenAI with default credential. (SRC-44 L233–246; SRC-44 L316–328)
- [[speech-and-language-options-compared]] — this source supplies a compact transcription-vs-synthesis decision boundary. (SRC-44 L363–389)
- *Module units:* [[src-121-introduction-develop-speech-capable-generative-ai-application|1 Introduction]] · [[src-17-choose-speech-capable-model|2 Choose a speech-capable model]] · [[src-221-synthesize-speech|3 Synthesize speech]] · [[src-225-transcribe-speech|3 Transcribe speech]] · [[src-83-exercise-speech-capable-generative-ai-models|4 Exercise - Use speech-capable generative AI models]] · [[src-175-module-assessment-develop-speech-capable-generative-ai-application|5 Module assessment]] · [[src-207-summary-develop-speech-capable-generative-ai-application|6 Summary]]

## Open questions

- The transcript does not preserve exact code syntax, imports, package versions, or API version strings. (SRC-44 L228–337)
- The episode does not compare speech-capable generative models against Azure Speech service, Voice Live API, or Speech MCP server alternatives. (SRC-44 L117–145)

## Sources

- SRC-44 — raw file: [[44-Develop a speech-capable generative AI application - AI-103 - Episode 17]]
