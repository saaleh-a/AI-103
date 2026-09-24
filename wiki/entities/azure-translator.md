---
title: "Azure Translator"
type: entity
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Foundry Tools translation service for text, transliteration, documents, supported-language lists, and custom translation models."
area: language
source_ids: [SRC-96, SRC-139, SRC-166, SRC-218, SRC-227, SRC-228, SRC-229]
objectives: [P01, P02, T03]
objective_gaps: []
tags: ["service"]
aliases: ["Azure Translator in Foundry Tools", "Translator", "Azure AI Translator", "Azure AI Translate", "TextTranslationClient"]
---

# Azure Translator

## Summary

Azure Translator in Foundry Tools is the corpus's text translation service: it translates text between over 90 languages, transliterates scripts, supports document translation, and can use custom translation models for domain-specific terms (SRC-227 L216–220).

## What it is

Azure Translator is one of the Foundry Tools, and the Foundry Tools overview describes it as using state-of-the-art language models to translate text between many languages (SRC-96 L227–228). The translation module says LLMs can translate phrases or documents, but comprehensive multi-language solutions generally require specialized models, and Foundry provides those through Translator for text and Speech for spoken translation (SRC-229 L216–219).

## What the sources say

- The introductory translation unit says automated translation reduces time and cost, but needs software that understands the linguistic rules and idioms of both source and target languages (SRC-139 L215–216).
- The Translator unit says the service can translate or transliterate using the default translation model or an LLM, translate documents synchronously or asynchronously while preserving structure, and use custom translation models for domain terms (SRC-227 L216–219).
- Foundry portal playgrounds support text and document translation and let learners compare default-model results with LLM results and view sample client code (SRC-227 L221–223).
- Client applications can call REST or SDKs, including Python, .NET, Java, and JavaScript SDKs (SRC-227 L224–229).
- The episode says Azure Translator is a built-in Foundry Tool designed specifically for translation, and for spoken language Azure Speech can be stacked with it (SRC-228 L50–67).
- The module summary states the outcome simply: use Azure Translator in Foundry Tools for text translation (SRC-218 L217–220).

## Capabilities and components

- Supported languages: the corpus says Translator supports over 90 languages, and a client can retrieve the available language list (SRC-227 L216; SRC-227 L241–247).
- Translation: use the `translate` method with source text as `InputTextItem` values, optional `from_language`, and one or more `to_language` target codes (SRC-227 L248–253).
- Auto-detection: omit `from_language` and Translator automatically detects the source language (SRC-227 L251; SRC-228 L423–430).
- Transliteration: use `transliterate` to render text from one script to another, such as Japanese Hiragana to Latin script, without changing meaning (SRC-227 L260–268; SRC-228 L136–151).
- Document translation: the source says Translator can translate documents synchronously or asynchronously while maintaining document structure (SRC-227 L218).
- Custom translation models: the source says custom models can translate domain-specific terms (SRC-227 L219).

## How to use it

Azure Translator APIs are served through REST endpoints. The endpoint can be the global endpoint `api.cognitive.microsofttranslator.com`, regional endpoints such as `api-nam.cognitive.microsofttranslator.com`, `api-apc.cognitive.microsofttranslator.com`, or `api-eur.cognitive.microsofttranslator.com`, or a Foundry resource endpoint `{foundry-resource-name}.cognitiveservices.azure.com/` (SRC-227 L230–235).

The corpus's Python object cue is `TextTranslationClient`, constructed with an endpoint and either an API key or authorization token (SRC-228 L74–92; SRC-228 L330–349). The assessment asks for `translate` to convert Chinese text to English, and `transliterate` to convert Russian Cyrillic characters to Latin characters (SRC-166 L212–220).

## Decision boundaries

| **Inference:** Need | Azure Translator | Azure Speech | LLM translation |
|---|---|---|---|
| Primary job | Text and document translation/transliteration (SRC-227 L216–220) | Speech translation and speech-to-speech scenarios (SRC-229 L217–218) | General-purpose model output in multiple languages (SRC-229 L216) |
| Deciding detail | Source/target text, scripts, documents, custom translation terms | Spoken input/output or `SpeechTranslationConfig` | **Inference:** translation is embedded in broader reasoning/generation |
| **Inference:** Exam cue | `TextTranslationClient`, `translate`, `transliterate` | `SpeechTranslationConfig` | prompt asks an LLM to rewrite/answer in another language |

**Inference:** Use Azure Translator when the requirement is a specialized, supported-language text translation workflow; use an LLM when translation is a subtask inside broader generative reasoning and the corpus does not require Translator-specific features (SRC-229 L216–219; SRC-227 L216–223).

## Naming and currency

The corpus uses "Azure Translator in Foundry Tools", "Azure Translator", "Azure AI Translate" in episode requirements narration, and `TextTranslationClient` in code/object cues (SRC-227 L216; SRC-228 L330–344; SRC-166 L212–220). Foundry Tools were previously called Azure AI Services and Azure Cognitive Services, and those names may remain in APIs and SDKs (SRC-96 L236).

**Stale-risk:** Supported-language counts and endpoint hostnames are time-sensitive and should be verified for production use (SRC-227 L216; SRC-227 L230–235; SRC-228 L387–390).

## Appearances in the corpus

- Foundry Tools overview: Translator as a prebuilt Foundry Tool (SRC-96 L227–228).
- Translation module: LLM-versus-specialized-translation framing and text/speech split (SRC-229 L216–219).
- Translate text unit: APIs, endpoints, SDKs, `translate`, `transliterate`, documents, custom models (SRC-227 L216–268).
- Episode 21: `TextTranslationClient` walkthrough and Translator versus LLM language coverage clue (SRC-228 L50–151; SRC-228 L330–430).
- Assessment: distinguishes `translate` from `transliterate` and Speech translation configuration (SRC-166 L212–224).

## Connections

- [[text-translation]] — concept page for Translator and LLM translation boundary.
- [[foundry-tools]] — Translator is one prebuilt Foundry Tool.
- [[azure-speech]] — speech translation counterpart.
- [[speech-translation]] — spoken-language translation boundary.
- [[model-selection]] — Translator versus LLM choice.
- [[speech-and-language-options-compared]] — cross-option selection for language and speech.
- *Also linked from:* [[azure-language]] · [[language-detection]]

## Sources

- SRC-96 — [[src-96-foundry-tools]] — Foundry Tools overview and naming drift.
- SRC-139 — [[src-139-introduction-translate-text-speech-microsoft-foundry-tools]] — translation problem framing.
- SRC-166 — [[src-166-module-assessment-translate-text-speech-microsoft-foundry-tools]] — assessment boundary for translate/transliterate/speech translation.
- SRC-218 — [[src-218-summary-translate-text-speech-microsoft-foundry-tools]] — module summary.
- SRC-227 — [[src-227-translate-text]] — Translator API and SDK details.
- SRC-228 — [[src-228-translate-text-speech-microsoft-foundry-tools-episode-21]] — episode walkthrough.
- SRC-229 — [[src-229-translation-microsoft-foundry]] — LLM versus specialized translation services.
