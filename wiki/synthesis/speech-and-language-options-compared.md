---
title: "Speech and language options compared"
type: synthesis
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Compares Speech SDK, Voice Live, speech-capable models, Speech/Language MCP, Translator, Azure Language, and LLM translation."
area: speech
source_ids: [SRC-10, SRC-12, SRC-17, SRC-25, SRC-40, SRC-49, SRC-88, SRC-94, SRC-96, SRC-115, SRC-139, SRC-166, SRC-221, SRC-225, SRC-226, SRC-227, SRC-229, SRC-235, SRC-236, SRC-252, SRC-253]
objectives: [P01, P02, P04, G01, G09, T01, T02, T03, T05, T06, T08]
objective_gaps: []
tags: []
aliases: []
---

# Speech and language options compared

## Summary

**Synthesis:** Speech and language choices separate by modality and control surface: Azure Speech SDK/API gives application-controlled STT/TTS/translation, Voice Live gives low-latency bidirectional voice-agent sessions, speech-capable models provide model-endpoint transcription/TTS, Speech and Language MCP servers expose tools to agents, Azure Translator handles text/document translation and transliteration, and Azure Language handles text analysis such as language detection, NER and PII redaction (SRC-252 L218–230; SRC-253 L218–230; SRC-226 L12–45; SRC-88 L216–224; SRC-17 L218–221; SRC-236 L225–248; SRC-235 L225–239; SRC-227 L216–220; SRC-12 L217–220).

## Scope and question

**Inference:** This page answers: when a scenario names audio, voice agents, translation, language detection, entity extraction, PII redaction or agent tools, which Microsoft Foundry/Speech/Language option does the corpus support?

## Synthesis

### Speech decision table

| **Synthesis:** Deciding detail | Azure Speech SDK/API | Voice Live API | Speech-capable generative models | Azure Speech MCP server |
|---|---|---|---|---|
| Primary job | App code calls STT, TTS or Speech Translation through SDK objects such as `SpeechConfig`, `SpeechRecognizer`, `SpeechSynthesizer`, `SpeechTranslationConfig` and `TranslationRecognizer` (SRC-252 L218–230; SRC-253 L218–230; SRC-226 L14–28). | Real-time bidirectional voice app/agent over WebSockets with JSON events, session settings, VAD, audio streaming and optional avatars (SRC-88 L216–272; SRC-49 L45–58). | Deployed model endpoint transcribes audio or synthesizes speech through OpenAI-compatible clients (SRC-17 L218–221; SRC-225 L216–224; SRC-221 L216–223). | Agent discovers STT/TTS tools through MCP and exchanges audio file URLs or generated audio links using Blob Storage (SRC-236 L225–250; SRC-25 L230–252). |
| Best when | The application owns the exact speech operation and result handling (SRC-252 L218–230; SRC-253 L218–230). | Users need interruptible, low-latency spoken conversation, turn detection, or avatar streaming (SRC-88 L252–272). | The model-catalog task is simply speech-to-text or text-to-speech using deployed `gpt-4o` family audio models (SRC-17 L218–221). | A text-first agent should choose speech tools dynamically from user prompts (SRC-236 L234–243). |
| Not covered / limits | Custom speech models are named in the official objective but not taught by the corpus's speech pages; do not invent them. | Production region/model support and preview status are stale-risk (SRC-49 L130–139; SRC-88 L227–228). | Live streaming, translation, SSML and Speech service voice configuration are not taught through the model path (SRC-17 L218–221; SRC-226 L12–14). | Exact phrase-hint/profanity request shapes and non-key auth implementation are not fully covered (SRC-236 L230–260). |

### Language and translation decision table

| **Synthesis:** Deciding detail | Azure Language | Azure Language MCP server | Azure Translator | LLM translation flow | Speech Translation |
|---|---|---|---|---|---|
| Primary job | Text analysis: detect language, extract named entities, detect/redact PII (SRC-12 L217–220; SRC-40 L217–229; SRC-94 L217–225). | Agent discovers and calls Azure Language text-analysis tools through MCP (SRC-235 L225–239). | Text/document translation, transliteration, supported languages, custom translation models (SRC-227 L216–220). | **Inference:** Translation embedded inside broader generative reasoning; corpus says LLMs can translate but comprehensive multilingual translation generally needs specialized Foundry Tools (SRC-229 L216–219). | Spoken input translation using `SpeechTranslationConfig` and `TranslationRecognizer` (SRC-226 L12–45). |
| Exam cue | language identifier, entities, PII, redacted text (SRC-40 L217–229; SRC-12 L217–220; SRC-94 L217–225). | MCP, agent tool discovery, approval/logging (SRC-235 L230–239). | `TextTranslationClient`, `translate`, `transliterate`, target language codes (SRC-227 L248–268; SRC-166 L212–220). | Prompt asks an LLM to answer/rewrite in another language as part of a larger task (SRC-229 L216–219). | `SpeechTranslationConfig`, target spoken languages, translated speech/text (SRC-166 L222–224; SRC-226 L16–45). |
| Not covered / limits | Full category taxonomy and deprecated broader Language capabilities are not fully taught (SRC-12 L221–222). | Exact remote endpoint URL format is not preserved (SRC-235 L240–245). | Supported-language counts and endpoints are stale-risk (SRC-227 L216; SRC-227 L230–235). | Corpus does not provide a decision tree for default Translator model vs LLM-backed translation (SRC-227 L217–223). | Exact supported language list, latency and pricing are not covered (SRC-226 L12–45). |

### Near-miss scenario contrasts

1. **Inference:** *A mobile app records one utterance and needs a transcript in app code.* Use Azure Speech SDK STT because the deciding objects are recognizer/config/result handling (SRC-252 L218–230). *A Foundry agent should accept a link to an audio file and decide to transcribe it as a tool call.* Use Azure Speech MCP server because the deciding detail is agent tool selection over an audio URL (SRC-236 L234–248).
2. **Inference:** *A voice assistant must support live interruptions and turn detection while the user speaks.* Use Voice Live because the deciding detail is real-time bidirectional WebSocket conversation with VAD/session events (SRC-88 L216–258). *A batch process needs to synthesize written notices into audio files.* Use Azure Speech TTS or a TTS model, not Voice Live, because the workload is not live duplex conversation (SRC-253 L218–230; SRC-221 L216–223).
3. **Inference:** *A multilingual text site needs translation and transliteration of documents/text.* Use Azure Translator because `translate` and `transliterate` are Translator operations (SRC-227 L248–268; SRC-166 L212–220). *A call-centre app needs spoken English translated into French audio.* Use Speech Translation plus optional synthesis because the source input is audio (SRC-226 L12–45).
4. **Inference:** *A pipeline needs to find people, organizations and locations in text.* Use Azure Language NER because the output is text-analysis entity categories (SRC-12 L217–220; SRC-10 L226–241). *The pipeline needs to mask emails and phone numbers before publishing.* Use Azure Language PII detection/redaction because the output includes redacted text (SRC-94 L217–225; SRC-10 L702–716).

## Evidence map

| **Synthesis:** Claim | Sources |
|---|---|
| Azure Speech includes Speech to text, Text to speech, Speech Translation and Voice Live. | SRC-115 L216–220 |
| Speech SDK STT uses `SpeechConfig`, optional `AudioConfig`, `SpeechRecognizer`, `RecognizeOnceAsync()` and result reasons. | SRC-252 L218–230 |
| Speech SDK TTS uses `SpeechConfig`, optional output `AudioConfig`, `SpeechSynthesizer`, `SpeakTextAsync()` and result reasons. | SRC-253 L218–230 |
| Speech Translation uses `SpeechTranslationConfig`, `AudioConfig` and `TranslationRecognizer`. | SRC-226 L12–45; SRC-166 L222–224 |
| Voice Live is WebSocket/event-based real-time bidirectional speech. | SRC-88 L216–272; SRC-49 L45–58 |
| Speech-capable models are deployed model endpoints for STT/TTS. | SRC-17 L218–221; SRC-225 L216–224; SRC-221 L216–223 |
| Speech MCP exposes STT/TTS to agents through MCP and Blob Storage. | SRC-236 L225–250; SRC-25 L230–252 |
| Azure Language covers language detection, NER and PII in this corpus. | SRC-12 L217–220; SRC-40 L217–229; SRC-10 L672–716 |
| Language MCP exposes Language tools to agents. | SRC-235 L225–239 |
| Translator supports translate, transliterate, documents and custom translation models; comprehensive multilingual translation generally uses specialized tools. | SRC-227 L216–268; SRC-229 L216–219 |

## Tensions

- **Disputed:** Speech MCP authentication wording differs: the Learn page and assessment emphasize key plus SAS URL, while an episode mentions possible managed identity without specifying the full implementation; preserve key-based setup as the documented path (SRC-236 L258–260; SRC-25 L230–239).
- **Stale-risk:** Voice Live preview status, model names, endpoint formats, supported language counts and SDK version details are time-sensitive (SRC-49 L130–139; SRC-88 L227–228; SRC-227 L216; SRC-227 L230–235).
- **Inference:** Custom speech models are named in objective T06, but the captured corpus pages used for this comparison do not teach creating or training custom speech models.

## Implications for the exam and for practice

- **Inference:** For AI-103, inspect whether the input is text, audio file, live microphone stream, or agent prompt. That single detail often decides among Language, Translator, Speech SDK, Voice Live, model-based audio, and MCP (SRC-12 L217–220; SRC-227 L216–220; SRC-252 L218–230; SRC-88 L216–224; SRC-236 L234–243).
- **Inference:** For customer design, ask who controls the operation: application code, a deployed model endpoint, a live voice session, or an agent tool. That separates Speech SDK, speech-capable models, Voice Live, and MCP server patterns (SRC-17 L218–221; SRC-88 L216–272; SRC-236 L225–250).
- **Inference:** Do not choose a general LLM solely because translation or text analysis is linguistic; the corpus repeatedly presents specialized Foundry Tools for repeatable translation and Language analysis (SRC-96 L218–228; SRC-229 L216–219; SRC-12 L217–220).

## Open questions

- Custom speech models, complete language support lists, speech latency/pricing, Voice Live regional availability, and exact MCP request schemas are not covered by the corpus (SRC-17 L218–221; SRC-226 L12–45; SRC-236 L230–260).

## Sources

- SRC-10 — [[src-10-analyze-text-azure-language-foundry-tools-episode-15]] — Language episode and method cues.
- SRC-12 — [[src-12-azure-language-microsoft-foundry-tools]] — Azure Language capabilities.
- SRC-17 — [[src-17-choose-speech-capable-model]] — speech-capable model use cases.
- SRC-25 — [[src-25-connect-speech-mcp-server-agent]] — Speech MCP connection and usage.
- SRC-40 — [[src-40-detect-language]] — language detection.
- SRC-49 — [[src-49-develop-azure-speech-voice-live-agent-microsoft-foundry-episode]] — Voice Live episode framing.
- SRC-88 — [[src-88-explore-azure-voice-live-api]] — Voice Live API.
- SRC-94 — [[src-94-extract-personally-identifiable-information-pii]] — PII detection and redaction.
- SRC-96 — [[src-96-foundry-tools]] — Foundry Tools overview.
- SRC-115 — [[src-115-introduction-create-speech-enabled-apps-azure-speech-microsoft-foundry]] — Azure Speech API family.
- SRC-139 — [[src-139-introduction-translate-text-speech-microsoft-foundry-tools]] — translation problem framing.
- SRC-166 — [[src-166-module-assessment-translate-text-speech-microsoft-foundry-tools]] — translate/transliterate/speech assessment boundary.
- SRC-221 — [[src-221-synthesize-speech]] — model-based TTS.
- SRC-225 — [[src-225-transcribe-speech]] — model-based transcription.
- SRC-226 — [[src-226-translate-speech]] — Speech Translation API/SDK flow.
- SRC-227 — [[src-227-translate-text]] — Translator methods and endpoints.
- SRC-229 — [[src-229-translation-microsoft-foundry]] — LLM vs specialized translation framing.
- SRC-235 — [[src-235-understand-azure-language-mcp-server]] — Azure Language MCP server.
- SRC-236 — [[src-236-understand-azure-speech-mcp-server]] — Azure Speech MCP server.
- SRC-252 — [[src-252-speech-text-api]] — Speech to text SDK pattern.
- SRC-253 — [[src-253-text-speech-api]] — Text to speech SDK pattern.

