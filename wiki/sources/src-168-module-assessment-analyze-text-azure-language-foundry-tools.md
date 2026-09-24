---
title: "Module assessment — Analyze text with Azure Language in Foundry Tools"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Assesses choosing named entity extraction for indexing news entities and PII redaction for publishing customer testimonials."
area: language
source_ids: [SRC-168]
objectives: []
tags: [azure-language, module-assessment, named-entity-recognition, pii-redaction]
aliases: ["SRC-168"]
source_kind: learn-unit
module: "Analyze text with Azure Language in Foundry Tools"
learning_path: "Develop natural language solutions in Azure"
unit: "9 of 8"
presenters: []
raw_file: "168-Module assessment - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/analyze-text-ai-language/9-knowledge-check"
ingest_depth: full
---

# Module assessment — Analyze text with Azure Language in Foundry Tools

*learn-unit · Analyze text with Azure Language in Foundry Tools · unit 9 of 8 · SRC-168*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-168 |
| Raw file | 168-Module assessment - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop natural language solutions in Azure |
| Module | Analyze text with Azure Language in Foundry Tools |
| Unit / episode | 9 of 8 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/analyze-text-ai-language/9-knowledge-check |
| Teaching content | L211–224 of 254 |
| Content length | ~164 words |
| Capture quality | Medium; questions and options are visible, but the capture does not show checked-answer feedback. |
| Ingest depth | full |

## TL;DR

The assessment tests two decision boundaries. (SRC-168 L213–221) For news articles where the application needs key people, places, and dates for indexing, the shown correct option is Azure Language in Foundry Tools to extract named entities. (SRC-168 L213–217) For publishing customer testimonials after removing personal details, the matching episode gives the answer as Azure Language in Foundry Tools to find and redact PII, but this capture itself does not show checked-answer feedback for the second item. (SRC-168 L218–224; SRC-10 L799–810)

## Key claims

- A news-indexing scenario asks how to extract key people, places, and dates from news articles. (SRC-168 L213)
- The options contrast a generative AI model with custom regex, PII entity extraction, and named entity extraction. (SRC-168 L214–216)
- The capture shows option 2, Azure Language in Foundry Tools to extract named entities, after the first question. (SRC-168 L216–217)
- A testimonial-publishing scenario asks how to remove personal details before publishing customer text. (SRC-168 L218)
- The options contrast PII redaction, language detection with English-only publishing, and a gpt-4.1 model generating new reviews. (SRC-168 L219–221)
- The capture does not show post-submission feedback because it says all questions must be answered before checking work. (SRC-168 L222–224)

## How it works

This source is an assessment rather than a teaching unit. (SRC-168 L213–224) It maps scenario requirements to Azure Language capabilities: entity indexing maps to named entity extraction, while removal of personal details maps to PII finding and redaction. (SRC-168 L213–221)

## Code and API patterns

Not covered by this source. (SRC-168 L213–224)

## Key terms

- **Named entities** — the extracted people, places, and dates in the news-article indexing scenario. (SRC-168 L213–216)
- **PII entities** — personal details to find and redact before publishing testimonials. (SRC-168 L218–220)
- **Redact** — remove or mask personal details from text before publication. (SRC-168 L218–220)

## Decision boundaries and exam cues

- **Inference:** The phrase key people, places, and dates points to named entity extraction because those are entity categories rather than PII-only privacy targets. (SRC-168 L213–216; SRC-93 L217–224)
- **Inference:** The phrase remove personal details before publishing points to PII detection and redaction. (SRC-168 L218–220; SRC-94 L217–225)
- **Inference:** A regular-expression custom function is a distractor when the service already provides entity extraction for people, places, and dates. (SRC-168 L213–216; SRC-93 L217–224)
- **Inference:** Detecting language and publishing only English testimonials does not meet the requirement to remove personal details. (SRC-168 L218–220; SRC-40 L217–220)
- **Inference:** Generating new customer reviews does not satisfy the requirement to publish extracts from existing testimonials after removing personal details. (SRC-168 L218–221)

## Assessment items

1. **Question:** How should you create an application that analyzes news articles and extracts key people, places, and dates that are mentioned for indexing? (SRC-168 L213)
   - Option 0: Use a generative AI model with a custom function tool that matches strings using a regular expression. (SRC-168 L214)
   - Option 1: Use Azure Language in Foundry Tools to extract PII entities. (SRC-168 L215)
   - Option 2: Use Azure Language in Foundry Tools to extract named entities. (SRC-168 L216)
   - **Answer shown in capture:** Option 2. (SRC-168 L216–217)

2. **Question:** You want to publish extracts from customer testimonials on a web site, and you need to remove personal details from the text before publishing it. (SRC-168 L218)
   - Option 0: Use Azure Language in Foundry Tools to find and redact PII entities. (SRC-168 L219)
   - Option 1: Use Azure Language in Foundry Tools to detect the language and publish only the testimonials in English. (SRC-168 L220)
   - Option 2: Use a gpt-4.1 model to create new AI-generated customer reviews. (SRC-168 L221)
   - **Answer shown in capture:** answer not shown in capture. (SRC-168 L222–224)

## Tensions, caveats and currency

- The first assessment item visibly shows option 2 after the question, but the second item does not show a numbered answer before the Submit button in this capture. (SRC-168 L216–224)
- The capture includes the repeated warning that all questions must be answered before checking work, so official feedback is not visible. (SRC-168 L222–224)

## Relation to other sources

- [[src-93-extract-entities]] teaches the entity categories that support the first assessment answer. (SRC-93 L217–224; SRC-168 L213–216)
- [[src-94-extract-personally-identifiable-information-pii]] teaches PII detection and redaction for the second assessment scenario. (SRC-94 L217–225; SRC-168 L218–221)
- [[src-10-analyze-text-azure-language-foundry-tools-episode-15]] verbally reviews both assessment items and supplies the PII answer. (SRC-10 L787–810; SRC-168 L213–221)

## Connections

- [[named-entity-recognition]] — tested by the news-article indexing scenario. (SRC-168 L213–216)
- [[pii-detection-and-redaction]] — tested by the testimonial-publication scenario. (SRC-168 L218–220)
- [[azure-language]] — both assessment options use Azure Language in Foundry Tools. (SRC-168 L216; SRC-168 L219)
- [[ai-103-exam]] — this source is assessment material for the AI-103 learning corpus. (SRC-168 L213–224)

## Open questions

- The source does not show final checked-answer feedback for either question after submission. (SRC-168 L222–224)

## Sources

- SRC-168 — raw file: [[168-Module assessment - Training - Microsoft Learn]]
