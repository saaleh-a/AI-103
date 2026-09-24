---
title: "Speech Synthesis Markup Language (SSML)"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "XML markup for controlling synthesized speech style, pauses, pronunciation, prosody, say-as rules, and inserted audio."
area: speech
source_ids: [SRC-21, SRC-35, SRC-192, SRC-246, SRC-253]
objectives: [T05]
objective_gaps: []
tags: []
aliases: ["SSML", "Speech Synthesis Markup Language"]
---

# Speech Synthesis Markup Language (SSML)

## Summary

Speech Synthesis Markup Language, or SSML, is the corpus's mechanism for controlling how synthesized speech sounds when plain text is not precise enough. Azure Speech supports SSML as XML syntax submitted through `SpeechSynthesizer` (SRC-246 L218–234).

## The problem it solves

Plain text says what to speak, but not enough about how to speak it. The corpus says SSML adds control over style, silence, pronunciation, prosody, `say-as` interpretation, and inserted audio (SRC-246 L218–224). The module summary lists SSML as a core learning outcome after voice and format configuration (SRC-192 L218–224).

## Mental model

**Inference:** SSML is a speech-control layer on top of text-to-speech. The text-to-speech system still produces audio, but the input is structured markup that tells the synthesizer how to vocalize words, pauses, emphasis, and other sound characteristics (SRC-246 L218–224).

## What the sources say

- Azure Speech SDK can synthesize plain text, but the service also supports XML-based SSML for more control over the generated speech (SRC-246 L218).
- SSML can specify speaking styles such as excited or cheerful with a neural voice (SRC-246 L219).
- SSML can insert pauses or silence (SRC-246 L220).
- SSML can specify phonemes, such as pronouncing `SQL` as `sequel` (SRC-246 L221).
- SSML can adjust prosody: pitch, timbre, and speaking rate (SRC-246 L222).
- SSML can use `say-as` rules for dates, times, telephone numbers, and other forms (SRC-246 L223).
- SSML can insert recorded speech or other audio, such as a standard message or background noise (SRC-246 L224).
- The source describes an SSML example as a dialog between two neural voices and says it is submitted to the Speech service with a method of `SpeechSynthesizer` (SRC-246 L225–233).

## How it works in Azure

SSML belongs inside the Text to speech flow. `SpeechConfig` and `AudioConfig` still define connection and output behavior; `SpeechSynthesizer` remains the client object, but the synthesizer receives SSML instead of plain text (SRC-253 L218–230; SRC-246 L231–233).

**Illustrative:**

```text
SpeechConfig(...)
AudioConfig(...)
SpeechSynthesizer(speech_config, audio_config)
synthesizer.<SSML synthesis method>(ssml_document)
```

**Inference:** The corpus does not preserve the exact method name in the raw capture, but it does state that an appropriate method of `SpeechSynthesizer` submits SSML to the Speech service (SRC-246 L231–233).

## Code and configuration

Use SSML when the output requirement is about speech behavior rather than only voice identity or audio encoding (SRC-246 L218–224). Use voice/output settings when the requirement is the voice name or audio stream format, such as file type, sample rate, or bit depth (SRC-21 L218–230).

The episode emphasizes predictability: repeated generative runs over the same text can return subtle differences, while some cases need predictable voice and audio-format control (SRC-35 L54–69). **Inference:** SSML is part of that broader "control the speech output" toolbox, but the specific predictability comparison in the episode is made around Speech tools and audio/voice control rather than a formal guarantee for every SSML element (SRC-35 L54–69; SRC-246 L218–224).

## Decision boundaries

| **Inference:** Need | Use |
|---|---|
| Change the selected speaker voice | [[voices-and-audio-formats]] through voice configuration on `SpeechConfig` (SRC-21 L228–230). |
| Change file type, sample rate, or bit depth | [[voices-and-audio-formats]] through output-format configuration (SRC-21 L218–227). |
| Add pauses, style, pronunciation, prosody, `say-as`, or inserted audio | SSML (SRC-246 L218–224). |
| Convert basic text to audio with no special speech control | Plain Text to speech pattern (SRC-253 L218–230). |

**Inference:** Exam clues for SSML are words like pause, silence, pronunciation, phoneme, prosody, speaking style, `say-as`, date/time reading, or background/recorded audio (SRC-246 L218–224).

## Failure modes and misconceptions

- Using SSML for output file encoding: audio file type, sample rate, and bit depth are output-format settings, not SSML controls in this corpus (SRC-21 L218–227; SRC-246 L218–224).
- Treating voice selection and SSML as the same thing: voice names personalize the selected voice, while SSML can orchestrate speech characteristics and even a dialog between voices (SRC-21 L228–230; SRC-246 L225–233).
- Expecting the raw corpus to teach full SSML syntax: it names capabilities and shows that an SSML example exists, but the captured raw lines do not preserve the full XML body (SRC-246 L225–234).

## Solution Engineering transfer

**Inference:** A customer is asking for SSML when they say, *Can it pronounce product names correctly?*, *Can it pause after warnings?*, *Can it read phone numbers naturally?*, or *Can the voice sound cheerful?* Those requirements map to phonemes, pauses, `say-as`, and style/prosody rather than just choosing a voice (SRC-246 L218–224).

## Connections

- [[text-to-speech]] — SSML extends the parent synthesis workflow.
- [[azure-speech]] — SSML is consumed through Azure Speech synthesis.
- [[voices-and-audio-formats]] — SSML is adjacent to voice identity and audio encoding controls.
- [[speech-and-language-options-compared]] — SSML participates in broader speech-option selection.
- *Also linked from:* [[overview]]

## Sources

- SRC-21 — [[src-21-configure-audio-format-voices]] — voice and output-format controls adjacent to SSML.
- SRC-35 — [[src-35-create-speech-enabled-apps-microsoft-foundry-episode-18]] — episode emphasis on explicit control and predictability.
- SRC-192 — [[src-192-summary-create-speech-enabled-apps-azure-speech-microsoft-foundry]] — module outcome listing SSML.
- SRC-246 — [[src-246-speech-synthesis-markup-language]] — SSML definition, capabilities, and `SpeechSynthesizer` submission.
- SRC-253 — [[src-253-text-speech-api]] — base Text to speech SDK pattern.

## Open questions

- The corpus does not preserve the full SSML XML sample or full SDK method name in the raw capture (SRC-246 L225–234).
