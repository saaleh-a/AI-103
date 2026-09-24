---
title: "Text to speech"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Converting text into spoken audio using Azure Speech synthesis, voices, audio output settings, SSML, agent tools, or TTS models."
area: speech
source_ids: [SRC-17, SRC-21, SRC-44, SRC-88, SRC-115, SRC-121, SRC-221, SRC-236, SRC-246, SRC-253]
objectives: [T05, T06]
objective_gaps: []
tags: []
aliases: ["speech synthesis", "TTS"]
---

# Text to speech

## Summary

Text to speech converts text into spoken audio. The corpus teaches it primarily through Azure Speech's Text to speech API and Speech SDK object pattern, then extends it with voice/output-format configuration, SSML, the Azure Speech MCP server for agents, and speech-capable TTS models (SRC-253 L218–230; SRC-21 L218–230; SRC-246 L218–234; SRC-236 L232–243; SRC-221 L216–220).

## The problem it solves

Text-only applications cannot speak to users, read messages aloud, generate audio responses, or create accessible audible interfaces. The corpus names audible user interfaces and hands-free assistants that read messages or emails aloud as synthesis scenarios (SRC-121 L214–219). Azure Speech's Text to speech API enables speech synthesis so an application can provide spoken output (SRC-115 L218).

## Mental model

Text to speech is an output adapter. An app starts with text, chooses how the voice should sound and where the audio should go, then receives or plays an audio stream containing vocalized speech (SRC-253 L218–230; SRC-221 L216–220).

## What the sources say

- Azure Speech in Foundry Tools offers a Text to speech API for speech synthesis, and most interactive speech-enabled applications use the Azure Speech SDK in practice (SRC-253 L218–220).
- The SDK pattern mirrors speech recognition: `SpeechConfig`, optional output `AudioConfig`, `SpeechSynthesizer`, method call, then result processing (SRC-253 L220–230).
- Model-based synthesis is described as submitting text to a model that returns an audio stream; example models include `gpt-4o-tts` and `gpt-4o-mini-tts` (SRC-221 L216–220).
- Foundry model selection lists text-to-speech as one of the two common speech-capable model use cases (SRC-17 L218–221).
- The episode walkthrough filters by Text to speech and deploys a GPT-4o-mini text-to-speech model with default settings (SRC-44 L175–182).
- The MCP server exposes a Synthesize capability that converts text input into audio files with neural voices and can return WAV, MP3, or other formats (SRC-236 L232–233).

## How it works in Azure

For the Speech SDK route (SRC-253 L218–230):

1. `SpeechConfig` holds the Azure Speech resource location and key (SRC-253 L221).
2. `AudioConfig` optionally defines the output destination: default speaker, audio file, or null so the returned audio stream object can be processed directly (SRC-253 L222).
3. `SpeechSynthesizer` combines `SpeechConfig` and `AudioConfig` and acts as the proxy client for the Text to speech API (SRC-253 L223).
4. `SpeakTextAsync()` converts text to spoken audio (SRC-253 L224).
5. `SpeechSynthesisResult` includes `AudioData`, `Properties`, `Reason`, and `ResultId` (SRC-253 L225–229).
6. Successful synthesis sets `Reason` to `SynthesizingAudioCompleted`; `AudioData` contains the stream, which may have already been sent to the configured speaker or file depending on `AudioConfig` (SRC-253 L230).

Voice and format configuration live on `SpeechConfig`: output format can be selected by required file type, sample rate, and bit depth, and the voice can be selected by voice name (SRC-21 L218–230). SSML is submitted through an appropriate method of `SpeechSynthesizer` when plain text is not enough (SRC-246 L218–234).

## Code and configuration

The corpus's raw capture does not include the full code block, but it preserves the object pattern and the key result reasons (SRC-253 L218–230).

**Illustrative:**

```text
SpeechConfig(location-or-endpoint, key)
SpeechConfig.speech_synthesis_voice_name = "voice name"
AudioConfig(default speaker, audio file, or null stream)
SpeechSynthesizer(speech_config, audio_config)
result = synthesizer.SpeakTextAsync(text)
if result.Reason == SynthesizingAudioCompleted: use result.AudioData
```

For more expressive output, use SSML rather than plain text and submit it through `SpeechSynthesizer` (SRC-246 L218–234).

## Decision boundaries

| **Inference:** Scenario clue | Best fit | Why |
|---|---|---|
| App must play, save, or process spoken output from text | Azure Speech SDK/API | `AudioConfig`, `SpeechSynthesizer`, `SpeakTextAsync()`, and `SpeechSynthesisResult` are the taught pattern (SRC-253 L218–230). |
| Need to choose voice or audio output characteristics | [[voices-and-audio-formats]] within Azure Speech | Output format and voice are configured through `SpeechConfig` (SRC-21 L218–230). |
| Need speaking style, pauses, pronunciation, prosody, `say-as`, or inserted audio | [[ssml]] | SSML provides XML-based control beyond plain text (SRC-246 L218–224). |
| Agent should generate speech from a prompt | Azure Speech MCP server | The agent selects the text-to-speech tool and the MCP server returns an audio-file link (SRC-236 L232–243). |
| Need a deployed model from Foundry model catalog | Speech-capable TTS model | The corpus names model-based TTS use cases and examples (SRC-17 L218–221; SRC-221 L216–220). |

**Inference:** The deciding detail is not merely "make audio"; it is whether the task is SDK-controlled synthesis, fine output control, agent tool use, model deployment, or real-time conversation (SRC-253 L218–230; SRC-21 L218–230; SRC-246 L218–224; SRC-236 L232–243; SRC-221 L216–220; SRC-88 L216–224).

## Failure modes and misconceptions

- Confusing output format with voice: output format concerns file type, sample rate, and bit depth; voice concerns locale/name/style identity such as a neural voice name (SRC-21 L220–230).
- Forgetting to check `Reason`: success is indicated by `SynthesizingAudioCompleted`, not just by receiving a result object (SRC-253 L225–230).
- Using plain text when SSML is required: SSML is the corpus's mechanism for pauses, phonemes, style, prosody, `say-as`, and inserted audio (SRC-246 L218–224).
- Treating Text to speech as only Azure Speech SDK: the corpus also teaches TTS models and the MCP server route (SRC-221 L216–220; SRC-236 L232–243).

## Solution Engineering transfer

**Inference:** Customer signals include accessibility narration, customer-service audio replies, IVR-like responses, multilingual voice experiences, and agents that speak back to users. Ask whether the customer needs direct SDK control, generated audio files, precise speech presentation, or real-time conversation; those answers separate Text to speech, SSML, voice/format choices, MCP, and Voice Live (SRC-121 L214–219; SRC-253 L218–230; SRC-246 L218–224; SRC-88 L216–224).

## Connections

- [[azure-speech]] — concept uses Azure Speech's Text to speech API.
- [[speech-to-text]] — concept is the opposite direction: audio becomes text.
- [[ssml]] — concept uses SSML for advanced speech-output control.
- [[voices-and-audio-formats]] — concept uses voice and output-format configuration.
- [[azure-speech-mcp-server]] — concept can be exposed as an agent tool.
- [[speech-capable-models]] — concept can be implemented by deployed TTS models.
- [[voice-live-api]] — concept appears inside real-time conversational speech.
- *Also linked from:* [[azure-openai]] · [[overview]] · [[speech-translation]]

## Sources

- SRC-17 — [[src-17-choose-speech-capable-model]] — speech-capable model use cases.
- SRC-21 — [[src-21-configure-audio-format-voices]] — voice and output-format configuration.
- SRC-44 — [[src-44-develop-speech-capable-generative-ai-application-episode-17]] — episode deployment of a TTS model.
- SRC-88 — [[src-88-explore-azure-voice-live-api]] — Voice Live boundary.
- SRC-115 — [[src-115-introduction-create-speech-enabled-apps-azure-speech-microsoft-foundry]] — synthesis definition.
- SRC-121 — [[src-121-introduction-develop-speech-capable-generative-ai-application]] — synthesis scenarios.
- SRC-221 — [[src-221-synthesize-speech]] — model-based synthesis definition.
- SRC-236 — [[src-236-understand-azure-speech-mcp-server]] — MCP Synthesize capability.
- SRC-246 — [[src-246-speech-synthesis-markup-language]] — SSML controls and synthesizer submission.
- SRC-253 — [[src-253-text-speech-api]] — Text to speech SDK pattern and result reasons.

## Open questions

- The corpus points to SDK documentation for full supported formats and voices but does not list the complete enumeration values (SRC-21 L224–233).
