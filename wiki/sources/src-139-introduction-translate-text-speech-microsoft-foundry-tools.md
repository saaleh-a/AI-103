---
title: "Introduction — Translate text and speech with Microsoft Foundry Tools"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Introduces translation as a global-solution requirement and frames Microsoft Foundry as the module's translation platform."
area: language
source_ids: [SRC-139]
objectives: []
tags: [translation, microsoft-foundry, machine-translation, language, speech]
aliases: ["SRC-139"]
source_kind: learn-unit
module: "Translate text and speech with Microsoft Foundry Tools"
learning_path: "Develop natural language solutions in Azure"
unit: "1 of 7"
presenters: []
raw_file: "139-Introduction - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/translate-text-speech/1-introduction"
ingest_depth: full
---

# Introduction — Translate text and speech with Microsoft Foundry Tools

*learn-unit · Translate text and speech with Microsoft Foundry Tools · unit 1 of 7 · SRC-139*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-139 |
| Raw file | `139-Introduction - Training - Microsoft Learn.md` |
| Kind | learn-unit |
| Learning path | Develop natural language solutions in Azure |
| Module | Translate text and speech with Microsoft Foundry Tools |
| Unit / episode | 1 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/translate-text-speech/1-introduction |
| Teaching content | L210–218 of 248 |
| Content length | ~196 words |
| Capture quality | High: concise Learn introduction plus format note. |
| Ingest depth | full |

## TL;DR

Many global applications need users who speak different languages to exchange information, and translation is presented as a critical requirement for those solutions. (SRC-139 L214) Automated translation can reduce time and cost, but the source stresses that good translation requires software that understands linguistic rules and idioms in both source and target languages. (SRC-139 L215) The module will explore AI-powered translation solutions in Microsoft Foundry for both text-based documents and spoken language. (SRC-139 L216)

## Key claims

- Translation can be critical for global solutions because widely used languages differ across the world. (SRC-139 L214)
- Human translation is specialized, time-consuming and expensive, so automated or machine translation is often used to reduce effort and cost. (SRC-139 L215)
- Automated translation still depends on complex software that understands rules and idioms in both the source and target languages. (SRC-139 L215)
- AI models commonly sit at the heart of automated translation for both text documents and spoken language. (SRC-139 L216)
- The module positions Microsoft Foundry as the environment for exploring AI-powered translation solutions. (SRC-139 L216)

## How it works

The unit does not teach implementation yet; it establishes the problem and the module scope. (SRC-139 L214–216) The implied flow is: a global application receives text or speech in one language, an AI-powered translation component handles linguistic mapping, and the user receives useful output in another language. (SRC-139 L214–216) **Inference:** Because later module units split text and speech, this introduction should be read as the umbrella framing rather than a specific API lesson. (SRC-139 L216)

## Code and API patterns

Not covered by this source.

## Key terms

- Automated translation, also called machine translation in the source, is the use of software to reduce the time and cost of translation work. (SRC-139 L215)
- Source and target languages are the two sides whose linguistic rules and idioms the translation software must understand. (SRC-139 L215)
- AI-powered translation solutions are the module's term for translation solutions built with AI models and Microsoft Foundry. (SRC-139 L216)

## Decision boundaries and exam cues

- **Inference:** If a scenario emphasizes global users, many languages, or exchanging information across language boundaries, this module's translation capabilities are likely relevant. (SRC-139 L214–216)
- **Inference:** If the input is text or documents, expect the later Azure Translator path; if the input is spoken language, expect the later Azure Speech path. (SRC-139 L216)
- **Inference:** Do not reduce the scenario to word substitution; the source emphasizes rules and idioms, which is why specialized translation capability matters. (SRC-139 L215)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

The page says learners can choose video or text-and-images format and that the text may contain greater detail than the videos. (SRC-139 L217–218)

## Relation to other sources

- [[src-229-translation-microsoft-foundry]] names the two Foundry Tools services that implement this introduction's text and speech translation scope. (SRC-229 L216–219)
- [[src-227-translate-text]] expands the text-document side of the module with Azure Translator capabilities and APIs. (SRC-227 L216–223)
- [[src-226-translate-speech]] expands the spoken-language side with the Speech Translation API and SDK objects. (SRC-226 L12–17)
- [[src-228-translate-text-speech-microsoft-foundry-tools-episode-21]] restates the same global-language problem in presenter form. (SRC-228 L4–26)

## Connections

- [[microsoft-foundry]] — the module's named environment for building translation solutions.
- [[foundry-tools]] — the module later uses Foundry Tools for specialized language and speech services.
- [[text-translation]] — the text half of the module's translation scope.
- [[speech-translation]] — the spoken-language half of the module's translation scope.
- [[speech-and-language-options-compared]] — useful synthesis for distinguishing text translation, speech translation and LLM translation.

## Open questions

- The introduction does not identify the specific Foundry Tools services or SDK objects; those appear in later units. (SRC-139 L216)

## Sources

- SRC-139 — raw file: [[139-Introduction - Training - Microsoft Learn]]
