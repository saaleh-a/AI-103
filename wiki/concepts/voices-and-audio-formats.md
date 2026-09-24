---
title: "Voices and audio formats"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Choosing neural voices and output/input audio formats for Azure Speech synthesis, MCP tools, and real-time voice scenarios."
area: speech
source_ids: [SRC-21, SRC-35, SRC-49, SRC-88, SRC-144, SRC-174, SRC-236, SRC-246, SRC-253]
objectives: [T05]
objective_gaps: []
tags: []
aliases: ["neural voices", "audio output format", "speech output format", "voice names"]
---

# Voices and audio formats

## Summary

Voices and audio formats are the corpus's practical controls for how synthesized speech sounds and how audio is represented. In Azure Speech synthesis, `SpeechConfig` can set output format and voice; related agent and Voice Live sources also mention neural voice names, WAV/MP3 outputs, and real-time formats such as PCM16 and G.711 (SRC-21 L218–230; SRC-236 L232–233; SRC-88 L216–224).

## The problem it solves

Text-to-speech is not finished when text becomes "some audio." Applications may need a particular speaker identity, locale, pronunciation quality, audio file type, sample rate, bit depth, file output, stream processing, or real-time codec (SRC-21 L218–230; SRC-253 L222; SRC-88 L222–223).

## Mental model

**Synthesis:** Voice choice answers "who speaks?" Audio format answers "what kind of audio comes out?" Output destination answers "where does it go?" SSML answers "how exactly should the words be spoken?" (SRC-21 L218–230; SRC-253 L222; SRC-246 L218–224).

## What the sources say

- Azure Speech supports multiple output formats for the generated synthesis audio stream; the choice can be based on audio file type, sample rate, and bit depth (SRC-21 L218–224).
- The Azure Speech service provides multiple voices for personalizing speech-enabled applications, and voice names indicate locale, a person's name, and other details, for example `en-US-Brian:DragonHDLatestNeural` (SRC-21 L228–230).
- Text to speech `AudioConfig` controls the output device: default system speaker, audio file, or null so the returned audio stream object can be processed directly (SRC-253 L222).
- The module assessment distinguishes changing voice from output format and file destination: voice changes through the `speech_synthesis_voice_name` property of `SpeechConfig` (SRC-174 L223–227).
- The Azure Speech MCP server's Synthesize capability supports multiple languages and neural voices such as `en-US-JennyNeural` or `en-GB-SoniaNeural`, and generates WAV, MP3, or other formats (SRC-236 L232–233).
- A knowledge check says a particular voice can be specified for the agent by including the voice name in the natural-language prompt to the agent (SRC-144 L226–228).
- Voice Live sources mention real-time audio processing with formats such as PCM16 and G.711 and voice options including OpenAI voices and Azure custom voices (SRC-88 L222–223; SRC-49 L99–130).

## How it works in Azure

In the Speech SDK synthesis pattern, `SpeechConfig` is where the corpus places output format and voice configuration (SRC-21 L218–230). `AudioConfig` is a different object: it decides output destination, such as speaker, file, or returned stream processing (SRC-253 L222). SSML is a third layer for speech behavior like pauses, pronunciation, style, and prosody (SRC-246 L218–224).

**Illustrative:**

```text
SpeechConfig
  - connection details
  - speech output format
  - speech_synthesis_voice_name
AudioConfig
  - default speaker, audio file, or returned stream
SpeechSynthesizer
  - uses both configs to synthesize audio
```

This map is an illustration of the relationships preserved in the corpus, not a verbatim code listing (SRC-21 L218–230; SRC-253 L221–223; SRC-174 L223–227).

## Code and configuration

For output format, choose based on the required file type, sample rate, and bit depth (SRC-21 L220–224). For voice, set the desired voice name on `SpeechConfig`; assessment material specifically identifies `speech_synthesis_voice_name` as the property for changing the synthesis voice (SRC-174 L223–227).

For agent speech through the MCP server, the prompt can include the desired voice name, and the server-side tool can generate audio files in formats such as WAV or MP3 (SRC-144 L226–228; SRC-236 L233–234).

For Voice Live, format choices include PCM16, described in the episode as uncompressed and higher payload but full fidelity, and G.711, described as a compressed speech codec that is smaller while conveying human voice well (SRC-49 L99–119). **Stale-risk:** The exact list of supported voices and formats can change; the sources point readers to Azure Speech SDK documentation for full enumeration values rather than listing them (SRC-21 L227; SRC-21 L233).

## Decision boundaries

| **Inference:** Requirement | Home page / control | Evidence |
|---|---|---|
| Change the speaker voice | Voice setting on `SpeechConfig` or voice name in MCP prompt | `speech_synthesis_voice_name` changes voice; MCP voice can be requested in natural language (SRC-174 L223–227; SRC-144 L226–228). |
| Change encoding characteristics | Output format setting | Output format is based on file type, sample rate, and bit depth (SRC-21 L220–224). |
| Change output destination | `AudioConfig` | `AudioConfig` can target speaker, file, or returned stream processing (SRC-253 L222). |
| Change pronunciation, pauses, style, or prosody | [[ssml]] | SSML controls style, silence, phonemes, prosody, and `say-as` behavior (SRC-246 L218–224). |
| Real-time bidirectional voice codec | [[voice-live-api]] | Voice Live supports audio processing with PCM16 and G.711 (SRC-88 L222–223; SRC-49 L99–119). |

**Inference:** If a scenario says "voice name," choose voice configuration; if it says "MP3/WAV/sample rate/bit depth," choose output format; if it says "speaker/file/stream," choose `AudioConfig`; if it says "pronounce this string as..." choose SSML (SRC-21 L218–230; SRC-253 L222; SRC-246 L218–224).

## Failure modes and misconceptions

- Using `AudioConfig` to change the voice: the assessment identifies the voice property on `SpeechConfig`, while `AudioConfig` is about output destination (SRC-174 L223–227; SRC-253 L222).
- Confusing output format with SSML: output format is file type/sample rate/bit depth, whereas SSML controls speech characteristics such as pauses and pronunciation (SRC-21 L220–224; SRC-246 L218–224).
- Assuming a single voice list applies everywhere: Voice Live mentions OpenAI voices and Azure custom voices, while Azure Speech synthesis examples use Azure neural voice names (SRC-49 L120–130; SRC-21 L228–230; SRC-236 L232–233).

## Solution Engineering transfer

**Inference:** Ask customers three separate questions: *What should the voice sound like?*, *Where should the audio be delivered?*, and *What encoding or latency constraints exist?* These map to voice name, `AudioConfig`, and output/real-time audio format respectively (SRC-21 L218–230; SRC-253 L222; SRC-49 L99–119).

## Connections

- [[text-to-speech]] — voices and formats configure the synthesis flow.
- [[ssml]] — adjacent control layer for pronunciation, style, pauses, and prosody.
- [[azure-speech]] — service family that provides the synthesis controls.
- [[azure-speech-mcp-server]] — agent route where voice names can be requested in prompts.
- [[voice-live-api]] — real-time voice route with PCM16, G.711, and voice options.
- *Also linked from:* [[overview]] · [[speech-to-text]]

## Sources

- SRC-21 — [[src-21-configure-audio-format-voices]] — output format and voice configuration.
- SRC-35 — [[src-35-create-speech-enabled-apps-microsoft-foundry-episode-18]] — explicit control and predictability context.
- SRC-49 — [[src-49-develop-azure-speech-voice-live-agent-microsoft-foundry-episode]] — PCM16, G.711, and Voice Live voice options.
- SRC-88 — [[src-88-explore-azure-voice-live-api]] — Voice Live audio and voice features.
- SRC-144 — [[src-144-knowledge-check-develop-speech-agent-azure-speech-mcp-server]] — MCP prompt voice selection.
- SRC-174 — [[src-174-module-assessment-create-speech-enabled-apps-azure-speech-microsoft]] — assessment boundary for voice versus format/file output.
- SRC-236 — [[src-236-understand-azure-speech-mcp-server]] — MCP neural voices and output formats.
- SRC-246 — [[src-246-speech-synthesis-markup-language]] — SSML boundary.
- SRC-253 — [[src-253-text-speech-api]] — `AudioConfig` output destination.

## Open questions

- The corpus does not list all supported `SpeechSynthesisOutputFormat` enumeration values or all supported voice names; it refers to Azure Speech SDK documentation for those lists (SRC-21 L227; SRC-21 L233).
