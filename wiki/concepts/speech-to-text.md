---
title: "Speech to text"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Converting spoken audio into text with Azure Speech SDK/API, agent tools, or speech-capable models."
area: speech
source_ids: [SRC-17, SRC-44, SRC-88, SRC-115, SRC-121, SRC-140, SRC-225, SRC-236, SRC-252]
objectives: [T05, T06]
objective_gaps: []
tags: []
aliases: ["speech recognition", "transcription", "STT"]
---

# Speech to text

## Summary

Speech to text converts audio containing speech into a text transcript. The corpus teaches it through Azure Speech's Speech to text API and SDK pattern, the Azure Speech MCP server for agents, and speech-capable generative models deployed from the Foundry model catalog (SRC-252 L218–230; SRC-236 L228–243; SRC-17 L216–221).

## The problem it solves

Applications and agents often need to accept spoken input rather than typed input: documenting calls, generating captions, analyzing recorded audio, or letting a hands-free assistant receive a user's spoken request (SRC-121 L214–219). Speech recognition is the Azure Speech API that lets an application accept spoken input (SRC-115 L217).

## Mental model

Speech to text is an input adapter. Audio enters the system, a speech capability identifies spoken language content, and the application or agent receives text that downstream code can store, analyze, summarize, translate, or use as the next user message (SRC-225 L216–220; SRC-236 L230–241).

## What the sources say

- Azure Speech in Foundry Tools supports speech recognition through the Speech to text API (SRC-252 L218).
- The SDK pattern is: configure the connection, optionally configure the audio input, create a recognizer, call the recognizer, and inspect the result (SRC-252 L218–230).
- The speech-capable model module defines transcription as submitting audio content to a model and receiving a text-based transcript; it names `gpt-4o-transcribe`, `gpt-4o-mini-transcribe`, and `gpt-4o-transcribe-diarize` as examples (SRC-225 L216–220).
- The Foundry model-selection unit says speech-capable models cover two common use cases, one of which is transcribing speech to text (SRC-17 L216–221).
- The MCP server exposes a Recognize capability that converts audio files to text and supports common file formats, language selection, phrase hints, profanity filtering, and detailed or simple outputs (SRC-236 L228–231).
- The episode walkthrough filters the model catalog by inference task, selects Speech-to-text, and deploys a GPT-4o mini transcribe model with default settings (SRC-44 L147–174).

## How it works in Azure

For direct Azure Speech SDK use, the application owns the recognition call (SRC-252 L218–230):

1. `SpeechConfig` holds the endpoint or region plus key needed to connect to the Foundry resource (SRC-252 L219).
2. `AudioConfig` is optional and defines the input source; by default it is the system microphone, but it can point to an audio file (SRC-252 L220).
3. `SpeechRecognizer` combines the `SpeechConfig` and `AudioConfig` and acts as the proxy client for the Speech to text API (SRC-252 L221).
4. `RecognizeOnceAsync()` asynchronously transcribes a single spoken utterance (SRC-252 L222).
5. The `SpeechRecognitionResult` includes `Duration`, `OffsetInTicks`, `Properties`, `Reason`, `ResultId`, and `Text` (SRC-252 L223–229).
6. Successful recognition has `Reason = RecognizedSpeech` and the transcript in `Text`; `NoMatch` means audio parsed but no speech was recognized, and `Canceled` means an error occurred whose reason can be checked in `Properties` (SRC-252 L230).

For agent use, the Azure Speech MCP server can expose speech-to-text as a tool. The agent analyzes the user's prompt, matches it to the speech tool, passes the audio file URL through the MCP server, and returns the transcribed result in natural language (SRC-236 L234–243).

## Code and configuration

The corpus does not preserve full code snippets in the raw capture, but it does preserve the SDK object pattern: `SpeechConfig` → optional input `AudioConfig` → `SpeechRecognizer` → `RecognizeOnceAsync()` → `SpeechRecognitionResult.Reason` and `.Text` (SRC-252 L218–230).

**Illustrative:**

```text
SpeechConfig(endpoint-or-region, key)
AudioConfig(default microphone or audio file)
SpeechRecognizer(speech_config, audio_config)
result = recognizer.RecognizeOnceAsync()
if result.Reason == RecognizedSpeech: use result.Text
```

## Decision boundaries

| **Inference:** Scenario clue | Best fit | Why |
|---|---|---|
| App code must transcribe microphone or audio-file input | Azure Speech SDK/API | The source explicitly teaches `AudioConfig`, `SpeechRecognizer`, and `RecognizeOnceAsync()` for this pattern (SRC-252 L218–230). |
| Agent should decide from a prompt such as "Transcribe this audio file" | Azure Speech MCP server | The MCP server lets the agent select the speech-to-text tool and pass the audio file URL (SRC-236 L234–243). |
| You are choosing/deploying a Foundry model whose inference task is Speech-to-text | Speech-capable generative model | The model catalog can be filtered by inference task, and the corpus deploys `gpt-4o-mini-transcribe` this way (SRC-44 L147–174). |
| Need live bidirectional spoken conversation | [[voice-live-api]] rather than ordinary one-shot STT | Voice Live is described as real-time, bidirectional communication with speech recognition and audio processing (SRC-88 L216–224). |

**Inference:** The decisive exam detail is who owns the recognition step: application code, an agent tool layer, or a deployed speech-capable model (SRC-252 L218–230; SRC-236 L234–243; SRC-17 L216–221).

## Failure modes and misconceptions

- Confusing `SpeechConfig` and `AudioConfig`: `SpeechConfig` is for service connection information; `AudioConfig` is for the audio input source (SRC-252 L219–220).
- Treating any successful API call as recognized speech: the result `Reason` must be checked because `NoMatch` and `Canceled` are different outcomes from `RecognizedSpeech` (SRC-252 L223–230).
- Assuming Speech to text always means Azure Speech SDK: the corpus also teaches speech-capable generative models and the Azure Speech MCP server as different routes to transcription (SRC-225 L216–220; SRC-236 L228–243).

## Solution Engineering transfer

**Inference:** Customer signals include recorded-call analysis, meeting transcription, video captions, or hands-free assistant input. A useful discovery question is: *Is this a direct application workflow, an agent tool workflow, or a real-time conversational experience?* The answer separates Speech SDK, MCP tooling, and Voice Live (SRC-121 L214–219; SRC-252 L218–230; SRC-236 L234–243; SRC-88 L216–224).

## Connections

- [[azure-speech]] — concept uses Azure Speech's direct API and SDK pattern.
- [[text-to-speech]] — concept is the reverse direction: text becomes audio.
- [[azure-speech-mcp-server]] — concept can be exposed as an agent tool.
- [[speech-capable-models]] — concept can be implemented by deployed transcribe models.
- [[voice-live-api]] — concept appears inside real-time speech conversation.
- [[voices-and-audio-formats]] — concept uses input `AudioConfig`, the counterpart to synthesis output configuration.
- [[speech-and-language-options-compared]] — concept participates in broader speech-option selection.
- *Also linked from:* [[azure-openai]] · [[overview]] · [[speech-translation]]

## Sources

- SRC-17 — [[src-17-choose-speech-capable-model]] — speech-capable model use cases.
- SRC-44 — [[src-44-develop-speech-capable-generative-ai-application-episode-17]] — episode deployment of a transcribe model.
- SRC-88 — [[src-88-explore-azure-voice-live-api]] — Voice Live boundary.
- SRC-115 — [[src-115-introduction-create-speech-enabled-apps-azure-speech-microsoft-foundry]] — speech recognition definition.
- SRC-121 — [[src-121-introduction-develop-speech-capable-generative-ai-application]] — transcription scenarios.
- SRC-140 — [[src-140-introduction-develop-speech-agent-azure-speech-mcp-server]] — direct SDK/API versus MCP agent route.
- SRC-225 — [[src-225-transcribe-speech]] — model-based transcription definition.
- SRC-236 — [[src-236-understand-azure-speech-mcp-server]] — MCP Recognize capability and tool-selection flow.
- SRC-252 — [[src-252-speech-text-api]] — Speech to text SDK pattern and result reasons.

## Open questions

- The corpus names phrase hints and profanity filtering for the MCP server, but does not show their exact request shape (SRC-236 L230–231).
