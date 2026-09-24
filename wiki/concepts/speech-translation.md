---
title: "Speech translation"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Translating spoken input with Azure Speech: configure source and target languages, recognize translations as text, then optionally synthesize translated speech."
area: speech
source_ids: [SRC-49, SRC-88, SRC-115, SRC-139, SRC-166, SRC-218, SRC-226, SRC-228, SRC-229]
objectives: [T08]
objective_gaps: []
tags: []
aliases: ["Speech Translation API", "speech-to-speech translation", "SpeechTranslationConfig", "TranslationRecognizer"]
---

# Speech translation

## Summary

Speech translation uses Azure Speech in Foundry Tools to translate spoken input into one or more target languages. In code, the central objects are `SpeechTranslationConfig` for resource/source/target-language settings and `TranslationRecognizer` for performing translation (SRC-115 L219; SRC-226 L12–28).

## The problem it solves

Text translation starts after you already have text. Speech translation starts with audio. The corpus frames translation as specialized because good translation requires linguistic rules and idioms across source and target languages (SRC-139 L215). Azure Speech adds the spoken-language path: it can translate spoken input, return translated text, and, when needed, synthesize translated speech output (SRC-226 L12–14; SRC-226 L33–45).

## Mental model

**Synthesis:** Speech translation is a pipeline (SRC-226 L16–45):

1. Configure where Azure Speech is and which spoken language is being recognized (SRC-226 L16–22).
2. Add one or more target languages (SRC-226 L21–22).
3. Provide audio input, such as the microphone or another stream (SRC-226 L21–22).
4. Recognize once or continuously and read translated text results (SRC-226 L27–32).
5. If the experience needs speech-to-speech, synthesize those text translations into audio (SRC-226 L33–45).

That split matters because the source says manual speech-to-speech synthesis is essentially two separate operations: translate speech into text, then use `SpeechSynthesizer` to synthesize each translation (SRC-226 L33–39).

## What the sources say

- The broad Azure Speech module names Speech Translation as an API for translating spoken input into multiple languages (SRC-115 L219).
- The translation overview says many LLMs can translate, but comprehensive multilingual translation generally requires specialized models; Foundry exposes Azure Translator for text and Azure Speech for speech-to-text and speech-to-speech translation in multiple languages simultaneously (SRC-229 L216–218).
- The speech unit says the Speech Translation API returns translation as text or speech, and is used from application code through `TranslationRecognizer` connected with `SpeechTranslationConfig` (SRC-226 L12–17).
- `SpeechTranslationConfig` configures the source and target languages, and `AudioConfig` specifies the source audio stream (SRC-226 L21–22).
- The module assessment tests that `SpeechTranslationConfig` is the SDK object for specifying target translation language(s) (SRC-166 L222–224).
- The summary states the learning outcome as using Azure Speech in Foundry Tools for speech translation (SRC-218 L218).

## How it works in Azure

The corpus uses Azure Speech in Foundry Tools as the Azure mapping. A client app connects to a Foundry resource endpoint or a regional Speech resource with `SpeechTranslationConfig`, sets `speech_recognition_language`, adds target languages, configures audio input, then creates a `TranslationRecognizer` (SRC-226 L16–28). The episode walkthrough reinforces the same object names: `SpeechTranslationConfig`, `TranslationRecognizer`, and later `SpeechSynthesizer` for speech output (SRC-228 L173–186; SRC-228 L253–261).

## Code and configuration

The load-bearing configuration is:

- Resource connection: `SpeechTranslationConfig` with Foundry key/endpoint or subscription/region (SRC-226 L16–19).
- Source language: `speech_recognition_language`, such as `en-US` (SRC-226 L21–22).
- Target languages: add one or more targets such as French and Japanese (SRC-226 L21–22).
- Audio input: `AudioConfig`, for example the default system microphone (SRC-226 L21–22).
- Recognition: `TranslationRecognizer` performs the speech translation and returns translations (SRC-226 L27–32).
- Speech output: either manually synthesize returned translations with `SpeechSynthesizer`, or use event-based synthesis for 1:1 translation by handling the recognizer's `Synthesizing` event (SRC-226 L33–45).

## Decision boundaries

**Synthesis:** The deciding details are the input form and required output:

- **Prefer speech translation** when the input is spoken audio and the output is translated text or translated speech (SRC-115 L219; SRC-226 L12–14; SRC-226 L33–45). Exam clues include `SpeechTranslationConfig`, `TranslationRecognizer`, target spoken languages, and speech-to-speech translation (SRC-166 L222–224; SRC-226 L14–28).
- **Prefer text translation** when the input is already text and the requirement names Translator rather than Speech SDK objects (SRC-229 L217).
- **Prefer speech-to-text plus LLM translation** only when the design explicitly wants generative-language behaviour after transcription. **Inference:** the corpus says LLMs can translate, but comprehensive multilingual translation generally needs specialized models (SRC-229 L216).
- **Prefer Voice Live** when the requirement is low-latency, interruptible, bidirectional voice-agent conversation rather than translation (SRC-49 L4–17; SRC-88 L216–218; SRC-88 L240–270).

## Failure modes and misconceptions

- Do not confuse the config object with the recognizer. `SpeechTranslationConfig` holds resource and language settings; `TranslationRecognizer` performs translation (SRC-226 L14–28).
- Do not assume speech-to-speech is a single mandatory call. The corpus gives manual synthesis as a combination of translation plus synthesis and event-based synthesis for 1:1 translation (SRC-226 L33–45).
- Do not choose text translation when the source content is audio. The corpus's speech API is explicitly for spoken input (SRC-115 L219; SRC-226 L12–14).
- Do not choose Voice Live solely because speech is involved. **Inference:** Voice Live is for real-time bidirectional agent conversation, while speech translation is a translation API/SDK flow (SRC-88 L216–218; SRC-226 L14–28).

## Solution Engineering transfer

**Inference:** A customer signal for speech translation is "Our users speak in one language, but agents or downstream users need another language as text or audio." Ask whether they need translated text only, speech-to-speech output, one target language or many, live turn-taking, and domain vocabulary. Choose Azure Speech translation when audio translation is the core workload; choose Voice Live when the requirement is a real-time conversational agent; choose Translator when the input is already text (SRC-229 L216–218; SRC-88 L216–218; SRC-226 L33–45).

## Connections

- [[azure-speech]] — the service family that includes Speech Translation.
- [[azure-translator]] — neighbouring text translation capability.
- [[text-translation]] — text-only translation path.
- [[speech-to-text]] — speech translation starts with speech recognition.
- [[text-to-speech]] — speech-to-speech translation synthesizes translated text.
- [[voice-live-api]] — nearby live voice-agent route, not the same SDK flow.
- [[speech-capable-models]] — nearby model-based audio capabilities.
- [[speech-and-language-options-compared]] — synthesis page for choosing among speech and language options.
- [[src-226-translate-speech]] — main SDK/object source.
- [[src-229-translation-microsoft-foundry]] — translation overview.
- *Also linked from:* [[overview]]

## Sources

- SRC-49 — [[src-49-develop-azure-speech-voice-live-agent-microsoft-foundry-episode]] — Voice Live boundary source.
- SRC-88 — [[src-88-explore-azure-voice-live-api]] — Voice Live API boundary source.
- SRC-115 — [[src-115-introduction-create-speech-enabled-apps-azure-speech-microsoft-foundry]] — names Speech Translation and Voice Live in Azure Speech.
- SRC-139 — [[src-139-introduction-translate-text-speech-microsoft-foundry-tools]] — translation problem framing.
- SRC-166 — [[src-166-module-assessment-translate-text-speech-microsoft-foundry-tools]] — assessment cue for `SpeechTranslationConfig`.
- SRC-218 — [[src-218-summary-translate-text-speech-microsoft-foundry-tools]] — module summary.
- SRC-226 — [[src-226-translate-speech]] — main Speech Translation API and SDK flow.
- SRC-228 — [[src-228-translate-text-speech-microsoft-foundry-tools-episode-21]] — episode walkthrough of SDK objects.
- SRC-229 — [[src-229-translation-microsoft-foundry]] — translation overview and LLM-vs-specialized boundary.

## Open questions

- The corpus does not cover pricing, region support, latency characteristics, or exact list of supported source/target languages for Speech Translation.
