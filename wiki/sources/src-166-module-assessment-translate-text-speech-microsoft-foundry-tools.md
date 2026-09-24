---
title: "Module assessment — Translate text and speech with Microsoft Foundry Tools"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Assessment capture testing translate vs transliterate and SpeechTranslationConfig for speech translation languages."
area: exam
source_ids: [SRC-166]
objectives: []
tags: [module-assessment, text-translation, transliteration, speechtranslationconfig]
aliases: ["SRC-166"]
source_kind: learn-unit
module: "Translate text and speech with Microsoft Foundry Tools"
learning_path: "Develop natural language solutions in Azure"
unit: "6 of 7"
presenters: []
raw_file: "166-Module assessment - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/translate-text-speech/6-knowledge-check"
ingest_depth: full
---

# Module assessment — Translate text and speech with Microsoft Foundry Tools

*learn-unit · Translate text and speech with Microsoft Foundry Tools · unit 6 of 7 · SRC-166*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-166 |
| Raw file | `166-Module assessment - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | Develop natural language solutions in Azure |
| Module | Translate text and speech with Microsoft Foundry Tools |
| Unit / episode | 6 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/translate-text-speech/6-knowledge-check |
| Teaching content | L210–228 of 258 |
| Content length | ~119 words |
| Capture quality | High for questions and options; answers are not revealed. |
| Ingest depth | full |

## TL;DR

The assessment checks three discriminations: converting a Chinese word to English meaning, converting Russian Cyrillic to Latin characters, and choosing the Speech SDK object that specifies speech translation languages. (SRC-166 L212–225) The capture shows the questions and options but stops before checked answers are displayed. (SRC-166 L226–228)

## Key claims

- The assessment asks which `TextTranslationClient` function converts Chinese `你好` to English `Hello`. (SRC-166 L212–215)
- The assessment asks which `TextTranslationClient` function converts Russian `спасибо` in Cyrillic characters to `spasibo` in Latin characters. (SRC-166 L217–220)
- The assessment asks which Azure Speech SDK object specifies the languages into which speech should be translated. (SRC-166 L221–225)
- The capture says all questions must be answered before checking work, so the correct choices are not shown in this raw source. (SRC-166 L226–228)

## How it works

This unit is an assessment page rather than an instructional page. It presents questions and options about meaning translation, script transliteration, and the Speech SDK object used to specify speech translation languages. (SRC-166 L212–225)

## Code and API patterns

- `TextTranslationClient` options shown are `get_supported_language`, `translate`, and `transliterate`. (SRC-166 L212–220)
- Azure Speech SDK object options shown are `SpeechConfig`, `SpeechTranslationConfig`, and `AudioConfig`. (SRC-166 L221–225)

## Key terms

- `translate` appears as an option for converting between Chinese and English words. (SRC-166 L212–215)
- `transliterate` appears as an option for converting Cyrillic characters to Latin characters. (SRC-166 L217–220)
- `SpeechTranslationConfig` appears as an option for specifying languages into which speech is translated. (SRC-166 L221–225)

## Decision boundaries and exam cues

- **Inference:** Meaning change across languages points to `translate`; script change without changing the underlying word points to `transliterate`. (SRC-166 L212–220; SRC-227 L248–262)
- **Inference:** For speech translation language selection, prefer `SpeechTranslationConfig` over `SpeechConfig` or `AudioConfig`. (SRC-166 L221–225; SRC-226 L20–23)

## Assessment items

1. What function of an Azure Translator `TextTranslationClient` object should be used to convert Chinese `你好` to English `Hello`? Options: `get_supported_language`, `translate`, `transliterate`. Answer: answer not shown in capture. (SRC-166 L212–215; SRC-166 L226–228)
2. What function of an Azure Translator `TextTranslationClient` object should be used to convert Russian `спасибо` in Cyrillic characters to `spasibo` in Latin characters? Options: `get_supported_language`, `translate`, `transliterate`. Answer: answer not shown in capture. (SRC-166 L217–220; SRC-166 L226–228)
3. Which Azure Speech SDK object should be used to specify the languages into which speech is translated? Options: `SpeechConfig`, `SpeechTranslationConfig`, `AudioConfig`. Answer: answer not shown in capture. (SRC-166 L221–225; SRC-166 L226–228)

## Tensions, caveats and currency

The source records assessment prompts before submission only; it does not capture the scored answer page. (SRC-166 L226–228)

## Relation to other sources

- [[src-227-translate-text]] teaches the `translate` and `transliterate` methods tested here. (SRC-227 L248–268)
- [[src-226-translate-speech]] teaches `SpeechTranslationConfig` as the speech translation language configuration object. (SRC-226 L20–23)
- [[src-228-translate-text-speech-microsoft-foundry-tools-episode-21]] verbally reviews the same assessment items and states two answers in the transcript. (SRC-228 L556–577)

## Connections

- [[text-translation]] — the first assessment item tests meaning translation.
- [[azure-translator]] — the assessed `TextTranslationClient` belongs to Azure Translator.
- [[speech-translation]] — the third assessment item tests speech translation configuration.
- [[azure-speech]] — the assessed SDK objects belong to Azure Speech.
- [[ai-103-exam]] — the page supplies exam-style checks for this module.
- *Module units:* [[src-139-introduction-translate-text-speech-microsoft-foundry-tools|1 Introduction]] · [[src-229-translation-microsoft-foundry|2 Translation in Microsoft Foundry]] · [[src-227-translate-text|3 Translate text]] · [[src-226-translate-speech|4 Translate speech]] · [[src-81-exercise-translate-text-speech|5 Exercise - Translate text and speech]] · [[src-218-summary-translate-text-speech-microsoft-foundry-tools|7 Summary]] · [[src-228-translate-text-speech-microsoft-foundry-tools-episode-21|episode 21]]

## Open questions

- The capture does not show the submitted correct answers. (SRC-166 L226–228)

## Sources

- SRC-166 — raw file: [[166-Module assessment - Training - Microsoft Learn]]
