---
title: "Translate text"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains Azure Translator in Foundry Tools for text translation, document translation, supported languages, translate and transliterate."
area: language
source_ids: [SRC-227]
objectives: [T03]
tags: [azure-translator, text-translation, transliteration, foundry-tools, sdk]
aliases: ["SRC-227"]
source_kind: learn-unit
module: "Translate text and speech with Microsoft Foundry Tools"
learning_path: "Develop natural language solutions in Azure"
unit: "3 of 7"
presenters: []
raw_file: "227-Translate text - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/translate-text-speech/3-azure-translator"
ingest_depth: full
---

# Translate text

*learn-unit · Translate text and speech with Microsoft Foundry Tools · unit 3 of 7 · SRC-227*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-227 |
| Raw file | `227-Translate text - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | Develop natural language solutions in Azure |
| Module | Translate text and speech with Microsoft Foundry Tools |
| Unit / episode | 3 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/translate-text-speech/3-azure-translator |
| Teaching content | L210–268 of 298 |
| Content length | ~674 words |
| Capture quality | High for prose; code blocks are captured only as placeholders. |
| Ingest depth | full |

## TL;DR

Azure Translator in Foundry Tools provides an API for text translation across more than 90 supported languages. (SRC-227 L216) Its capabilities include translation, transliteration, document translation, and custom translation models for domain-specific terms. (SRC-227 L217–219) Client applications can use REST or language SDKs, and can call methods such as `get_supported_language`, `translate`, and `transliterate`. (SRC-227 L225–229; SRC-227 L240–268)

## Key claims

- Azure Translator in Foundry Tools provides an API for translating text between more than 90 supported languages. (SRC-227 L216)
- Azure Translator can translate or transliterate text using the default translation model or an LLM. (SRC-227 L217)
- Azure Translator can translate documents synchronously or asynchronously while maintaining document structure. (SRC-227 L218)
- Azure Translator supports custom translation models for domain-specific terms. (SRC-227 L219)
- The Foundry portal offers playgrounds for text translation and document translation. (SRC-227 L221–223)
- Client code can call Azure Translator by REST API or by supported SDKs for Python, .NET, Java and JavaScript. (SRC-227 L224–229)
- Azure Translator endpoints include a global endpoint, regional endpoints and Foundry resource endpoints. (SRC-227 L230–235)

## How it works

The portal path is exploratory: use Microsoft Foundry playgrounds for text and document translation, compare the default model with LLM results, and view sample client-application code. (SRC-227 L221–223) The application-code path is programmatic: connect a client to an authenticated REST endpoint, either by naming the endpoint directly or by specifying the provisioned region. (SRC-227 L230–235) Once connected, the client can list supported languages, translate source text to one or more target languages, or transliterate text from one writing script to another. (SRC-227 L240–268)

## Code and API patterns

The capture contains placeholders for Python code rather than readable code blocks, so the page should rely on the described API objects and parameters rather than reconstructing snippets. (SRC-227 L236–245; SRC-227 L253–265)

- `TextTranslationClient` is the SDK client whose constructor is referenced for connecting to Azure Translator. (SRC-227 L236–239)
- `get_supported_language` returns available languages with names and ISO codes. (SRC-227 L240–247)
- `translate` translates text from a source language to one or more target languages. (SRC-227 L248–259)
- `InputTextItem` objects carry the source text strings passed to `translate`. (SRC-227 L249–250)
- `from_language` can specify the source language ISO code or be omitted for automatic language detection. (SRC-227 L251)
- `to_language` is a list of target-language codes, and Azure Translator returns a translation for each valid code. (SRC-227 L252)
- `transliterate` uses script parameters such as `from_script` and `to_script` to render the same words in a different writing script. (SRC-227 L260–268)

## Key terms

- Text translation changes source text into equivalent meaning in another language. (SRC-227 L248–253)
- Transliteration changes the script used to render text, such as Japanese Hiragana to Latin script, rather than translating meaning into a different language. (SRC-227 L260–262)
- Foundry resource endpoint is one of the endpoint forms a client can use for Azure Translator APIs. (SRC-227 L230–235)

## Decision boundaries and exam cues

- **Inference:** Choose `translate` when the required output is equivalent meaning in another language. (SRC-227 L248–253)
- **Inference:** Choose `transliterate` when the scenario keeps the same language but changes writing systems or scripts. (SRC-227 L260–262)
- **Inference:** Choose `get_supported_language` when the application must show users available languages and ISO codes. (SRC-227 L240–247)
- **Inference:** The document-translation feature is relevant when structure preservation is a requirement. (SRC-227 L218)
- **Inference:** A domain-specific vocabulary requirement points toward custom translation models rather than only the default model. (SRC-227 L219)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

The source says Azure Translator can translate or transliterate using either the default translation model or an LLM, but it does not explain how the caller selects between those model options. (SRC-227 L217)

## Relation to other sources

- [[src-229-translation-microsoft-foundry]] introduces Azure Translator as the text branch of the module. (SRC-229 L216–219)
- [[src-226-translate-speech]] is the parallel speech branch and uses different SDK objects for spoken input. (SRC-226 L12–17)
- [[src-166-module-assessment-translate-text-speech-microsoft-foundry-tools]] asks learners to distinguish `translate` from `transliterate`. (SRC-166 L212–220)
- [[src-228-translate-text-speech-microsoft-foundry-tools-episode-21]] demonstrates portal and code flow for text translation with `TextTranslationClient`. (SRC-228 L270–444)

## Connections

- [[azure-translator]] — the service described by this source.
- [[text-translation]] — the concept implemented through `translate`.
- [[foundry-tools]] — Azure Translator is presented as a Foundry Tool.
- [[microsoft-foundry]] — the portal surface used for playgrounds and sample code.
- [[endpoints-and-sdk-choice]] — relevant because the source lists endpoint forms and SDK choices.
- [[speech-and-language-options-compared]] — useful for separating text translation from speech translation.
- *Module units:* [[src-139-introduction-translate-text-speech-microsoft-foundry-tools|1 Introduction]] · [[src-229-translation-microsoft-foundry|2 Translation in Microsoft Foundry]] · [[src-226-translate-speech|4 Translate speech]] · [[src-81-exercise-translate-text-speech|5 Exercise - Translate text and speech]] · [[src-166-module-assessment-translate-text-speech-microsoft-foundry-tools|6 Module assessment]] · [[src-218-summary-translate-text-speech-microsoft-foundry-tools|7 Summary]] · [[src-228-translate-text-speech-microsoft-foundry-tools-episode-21|episode 21]]

## Open questions

- The source references code examples, but the raw capture includes only `Python` and `Copy` placeholders rather than code. (SRC-227 L236–245; SRC-227 L253–265)
- The source mentions custom translation models but does not teach training or deployment steps for them. (SRC-227 L219)

## Sources

- SRC-227 — raw file: [[227-Translate text - Training - Microsoft Learn]]
