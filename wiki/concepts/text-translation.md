---
title: "Text translation"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Convert text meaning between languages with Azure Translator or LLM-powered translation flows, and distinguish translation from transliteration."
area: language
source_ids: [SRC-40, SRC-139, SRC-166, SRC-218, SRC-227, SRC-228, SRC-229]
objectives: [T03, P01]
objective_gaps: []
tags: []
aliases: ["machine translation", "LLM translation", "transliteration"]
---

# Text translation

## Summary

Text translation converts source-language text into target-language text; in this corpus, the main specialized service is Azure Translator in Foundry Tools, while LLMs can also translate phrases or documents in some scenarios (SRC-227 L216–220; SRC-229 L216–219).

## The problem it solves

Translation between languages is specialized and can be time-consuming and expensive without automation, because effective translation has to account for linguistic rules and idioms of both source and target languages (SRC-139 L215–216).

## Mental model

**Inference:** Text translation is meaning transfer: text in language A becomes equivalent text in language B. Transliteration is script transfer: the pronunciation or writing system changes, but the meaning is not translated (SRC-228 L120–151).

## What the sources say

- Azure Translator in Foundry Tools translates text between over 90 supported languages (SRC-227 L216).
- Translator can translate or transliterate using the default translation model or an LLM, translate documents while maintaining structure, and use custom translation models for domain terms (SRC-227 L217–219).
- Many LLMs can generate in multiple languages and translate phrases or documents, but comprehensive multi-language translation generally requires specialized models through Foundry Tools (SRC-229 L216–219).
- The portal provides text and document translation playgrounds that compare default-model results with LLM results and show sample client code (SRC-227 L221–223).
- The module summary says the text outcome is to use Azure Translator in Foundry Tools for text translation (SRC-218 L217–220).

## How it works in Azure

With Translator, source text is submitted to the `translate` method as a list of `InputTextItem` objects (SRC-227 L248–250). The caller can specify `from_language` with an ISO source code, or omit it so Translator detects the source language automatically (SRC-227 L251). Target languages are provided as a list of language codes in `to_language`, and Translator returns a translation for each valid target code (SRC-227 L252).

For transliteration, submit text to `transliterate` with `from_script` and `to_script`; the source example uses Japanese text in Hiragana and converts it to Latin script (SRC-227 L260–268). The episode clarifies that transliteration moves from one writing system or script to another and is not meaning translation (SRC-228 L136–151).

## Code and configuration

The main SDK object cue is `TextTranslationClient`; the episode creates it from a Foundry resource endpoint and credential, then calls language-list and translation methods (SRC-228 L74–92; SRC-228 L330–390). Translator REST endpoints can be global, regional, or Foundry resource endpoints (SRC-227 L230–235).

The module assessment asks which function converts Chinese text to English and which converts Russian Cyrillic characters to Latin characters, listing `translate` and `transliterate` among the options (SRC-166 L212–220); the Translator unit teaches both methods, with `transliterate` converting text from one script to another (SRC-227 L217; SRC-227 L261–262).

## Decision boundaries

| **Inference:** Requirement | Azure Translator | LLM-powered translation flow | Language detection |
|---|---|---|---|
| Primary output | Target-language text, document translation, or transliteration (SRC-227 L216–220) | **Inference:** translated output as part of broader generation/reasoning (SRC-229 L216) | Language identifier and confidence score (SRC-40 L217–224) |
| Best when | Need supported languages, `translate`, `transliterate`, documents, custom terms (SRC-227 L216–223) | Need a generative response that happens to be multilingual (SRC-229 L216–219) | Need to know what language text is in before processing |
| Limitation clue | Specialized translation service, not general reasoning | May not be comprehensive for multi-language solutions (SRC-229 L216–219) | Does not produce target-language text |

**Inference:** The Translator-versus-LLM boundary belongs on the requirement, not the wording \"AI\": use Translator when the core capability is durable translation/transliteration/document translation; use an LLM when translation is embedded in a broader task such as explanation, summarization, or conversational generation (SRC-227 L216–223; SRC-229 L216–219).

## Failure modes and misconceptions

- Do not confuse translation with transliteration: translation changes meaning into another language; transliteration changes script or writing system without translating meaning (SRC-228 L120–151).
- Do not choose Speech SDK objects for text-only translation; the assessment reserves `SpeechTranslationConfig` for speech translation languages, not text `translate` or `transliterate` (SRC-166 L212–224).
- Do not assume LLM translation is always the specialized choice: the corpus says comprehensive multi-language translation generally requires specialized Foundry Tools (SRC-229 L216–219).
- **Stale-risk:** Supported-language counts, endpoint hostnames, and model options can change and should be checked for a live build (SRC-227 L216; SRC-227 L230–235).

## Solution Engineering transfer

**Inference:** Customer signals include translating documents and preserving layout, supporting many language pairs, converting names into a Latin script, or using domain-specific terminology (SRC-227 L216–220; SRC-227 L260–268). Discovery question: *Do you need exact translation workflow features, or a generative answer in another language as part of a larger task?* (SRC-229 L216–219).

## Connections

- [[azure-translator]] — service entity for Translator in Foundry Tools.
- [[language-detection]] — often precedes translation, but does not translate.
- [[azure-language]] — nearby text-analysis service, not the translation service.
- [[azure-speech]] — service family for spoken translation when audio is involved.
- [[speech-translation]] — speech-specific translation concept.
- [[model-selection]] — choose specialized service versus LLM.
- [[speech-and-language-options-compared]] — broader comparison hub.
- *Also linked from:* [[decision-boundaries]] · [[overview]]

## Sources

- SRC-40 — [[src-40-detect-language]] — language-detection contrast.
- SRC-139 — [[src-139-introduction-translate-text-speech-microsoft-foundry-tools]] — translation problem framing.
- SRC-166 — [[src-166-module-assessment-translate-text-speech-microsoft-foundry-tools]] — translate/transliterate/speech assessment boundary.
- SRC-218 — [[src-218-summary-translate-text-speech-microsoft-foundry-tools]] — module summary.
- SRC-227 — [[src-227-translate-text]] — Translator methods, endpoints, SDKs, document/custom features.
- SRC-228 — [[src-228-translate-text-speech-microsoft-foundry-tools-episode-21]] — episode method and transliteration explanation.
- SRC-229 — [[src-229-translation-microsoft-foundry]] — LLM translation versus specialized Foundry Tools.

## Open questions

- The corpus does not provide a full decision tree for when to choose default Translator models versus LLM-backed translation inside Translator; it only states both are available in the portal for comparison (SRC-227 L217–223).
