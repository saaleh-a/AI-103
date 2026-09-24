---
title: "Translation in Microsoft Foundry"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Positions Azure Translator and Azure Speech in Foundry Tools as the module's specialized translation services."
area: language
source_ids: [SRC-229]
objectives: [T03, T08]
tags: [translation, foundry-tools, azure-translator, azure-speech, llm-translation]
aliases: ["SRC-229"]
source_kind: learn-unit
module: "Translate text and speech with Microsoft Foundry Tools"
learning_path: "Develop natural language solutions in Azure"
unit: "2 of 7"
presenters: []
raw_file: "229-Translation in Microsoft Foundry - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/translate-text-speech/2-translation-foundry"
ingest_depth: full
---

# Translation in Microsoft Foundry

*learn-unit · Translate text and speech with Microsoft Foundry Tools · unit 2 of 7 · SRC-229*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-229 |
| Raw file | `229-Translation in Microsoft Foundry - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | Develop natural language solutions in Azure |
| Module | Translate text and speech with Microsoft Foundry Tools |
| Unit / episode | 2 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/translate-text-speech/2-translation-foundry |
| Teaching content | L210–219 of 249 |
| Content length | ~141 words |
| Capture quality | High: short overview of Foundry translation options. |
| Ingest depth | full |

## TL;DR

The source acknowledges that many LLMs can generate in multiple languages and translate phrases or documents. (SRC-229 L216) It then draws the module's main boundary: comprehensive multilingual translation generally needs specialized models, and Microsoft Foundry supports this through Foundry Tools. (SRC-229 L216) The two services named are Azure Translator for text and Azure Speech for speech-to-text and speech-to-speech translation. (SRC-229 L217–218)

## Key claims

- LLMs can generate output in multiple languages and can translate phrases or documents. (SRC-229 L216)
- Comprehensive multilanguage translation generally requires specialized models. (SRC-229 L216)
- Microsoft Foundry provides translation support through Foundry Tools. (SRC-229 L216)
- Azure Translator in Foundry Tools is described as a comprehensive text translation service with broad language support and custom translation models. (SRC-229 L217)
- Azure Speech in Foundry Tools includes speech-to-text and speech-to-speech translation in multiple languages simultaneously. (SRC-229 L218)
- Both Azure Translator and Azure Speech are reachable through a Microsoft Foundry resource endpoint and expose APIs and language-specific SDKs. (SRC-229 L219)

## How it works

The source sets up a two-track architecture. Text translation uses Azure Translator in Foundry Tools when the application needs text-language capabilities, broad language coverage, and potentially custom translation models. (SRC-229 L217) Speech translation uses Azure Speech in Foundry Tools when the application needs spoken input converted to translated text or translated speech. (SRC-229 L218) Both tracks are accessed from application code through the Foundry resource endpoint, APIs and language-specific SDKs. (SRC-229 L219)

## Code and API patterns

No concrete code is shown in this unit. The source does state that both Azure Translator and Azure Speech provide extensive APIs and language-specific SDKs through a Microsoft Foundry resource endpoint. (SRC-229 L219)

## Key terms

- Azure Translator in Foundry Tools: a comprehensive service for text translation with broad language support and custom translation model support. (SRC-229 L217)
- Azure Speech in Foundry Tools: a suite of speech tools that includes speech-to-text and speech-to-speech translation. (SRC-229 L218)
- Microsoft Foundry resource endpoint: the endpoint through which the source says both services are accessible. (SRC-229 L219)

## Decision boundaries and exam cues

- **Inference:** Choose Azure Translator when the scenario asks for text translation, text transliteration, documents, many supported text languages, or custom translation models. (SRC-229 L217)
- **Inference:** Choose Azure Speech when the scenario asks for spoken input, speech-to-text translation, speech-to-speech translation, or simultaneous speech translation into multiple languages. (SRC-229 L218)
- **Inference:** Treat an LLM as a possible translation option for simple phrase or document generation, but prefer specialized Foundry Tools when the scenario says comprehensive multilingual translation. (SRC-229 L216–218)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

The source uses Microsoft Foundry and Foundry Tools terminology while naming services that are also known as Azure Translator and Azure Speech. (SRC-229 L216–219)

## Relation to other sources

- [[src-139-introduction-translate-text-speech-microsoft-foundry-tools]] explains why translation is important for global solutions before this unit names the services. (SRC-139 L214–216)
- [[src-227-translate-text]] expands the Azure Translator branch named here. (SRC-227 L216–223)
- [[src-226-translate-speech]] expands the Azure Speech branch named here. (SRC-226 L12–17)
- [[src-228-translate-text-speech-microsoft-foundry-tools-episode-21]] makes a similar LLM-versus-specialized-tools distinction in the episode narrative. (SRC-228 L29–63)

## Connections

- [[foundry-tools]] — the family through which this source says Foundry provides translation support.
- [[azure-translator]] — the text translation service named in the source.
- [[azure-speech]] — the speech translation service named in the source.
- [[text-translation]] — the text branch of this module.
- [[speech-translation]] — the speech branch of this module.
- [[model-selection]] — useful because the source contrasts LLMs with specialized models.
- *Module units:* [[src-139-introduction-translate-text-speech-microsoft-foundry-tools|1 Introduction]] · [[src-227-translate-text|3 Translate text]] · [[src-226-translate-speech|4 Translate speech]] · [[src-81-exercise-translate-text-speech|5 Exercise - Translate text and speech]] · [[src-166-module-assessment-translate-text-speech-microsoft-foundry-tools|6 Module assessment]] · [[src-218-summary-translate-text-speech-microsoft-foundry-tools|7 Summary]] · [[src-228-translate-text-speech-microsoft-foundry-tools-episode-21|episode 21]]

## Open questions

- The source says Azure Translator can use custom translation models but does not explain how to create or train them. (SRC-229 L217)
- The source says both services have extensive APIs and SDKs but leaves the concrete objects to later units. (SRC-229 L219)

## Sources

- SRC-229 — raw file: [[229-Translation in Microsoft Foundry - Training - Microsoft Learn]]
