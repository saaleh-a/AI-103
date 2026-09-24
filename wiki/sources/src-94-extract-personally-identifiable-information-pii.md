---
title: "Extract personally identifiable information (PII)"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains Azure Language PII detection and redaction, including sensitive categories, confidence scores, and masked output."
area: language
source_ids: [SRC-94]
objectives: [T02]
tags: [azure-language, pii, redaction, sensitive-information, text-analysis]
aliases: ["SRC-94"]
source_kind: learn-unit
module: "Analyze text with Azure Language in Foundry Tools"
learning_path: "Develop natural language solutions in Azure"
unit: "7 of 8"
presenters: []
raw_file: "94-Extract personally identifiable information (PII) - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/analyze-text-ai-language/7-extract-personal-information"
ingest_depth: full
---

# Extract personally identifiable information (PII)

*learn-unit · Analyze text with Azure Language in Foundry Tools · unit 7 of 8 · SRC-94*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-94 |
| Raw file | 94-Extract personally identifiable information (PII) - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop natural language solutions in Azure |
| Module | Analyze text with Azure Language in Foundry Tools |
| Unit / episode | 7 of 8 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/analyze-text-ai-language/7-extract-personal-information |
| Teaching content | L211–230 of 260 |
| Content length | ~183 words |
| Capture quality | Medium; prose is complete, but Python and output blocks are omitted after Copy markers. |
| Ingest depth | full |

## TL;DR

This unit covers finding and protecting sensitive personal information in text. (SRC-94 L217) Azure Language can identify PII such as names, addresses, phone numbers, email addresses, social security numbers, and credit card numbers. (SRC-94 L218) The same capability can extract PII entities for analysis and redact them by replacing sensitive text with asterisks or another specified character. (SRC-94 L218; SRC-94 L225)

## Key claims

- Some scenarios require identifying and protecting sensitive personal information in documents. (SRC-94 L217)
- Example scenarios include removing PII from customer feedback, medical records, or legal documents before sharing them. (SRC-94 L217)
- Azure Language provides PII detection and redaction capabilities. (SRC-94 L218)
- The service can identify names, addresses, phone numbers, email addresses, social security numbers, and credit card numbers. (SRC-94 L218)
- The service can extract PII entities for analysis. (SRC-94 L218)
- The service can redact or mask PII to protect privacy. (SRC-94 L218)
- As with all Azure Language functions, clients can submit one or more documents for analysis. (SRC-94 L219)
- The response includes identified PII entities with categories and confidence scores. (SRC-94 L222)
- Redaction returns a version of text with PII replaced by asterisks or by a specified character. (SRC-94 L225)
- The redaction output masks the sensitive information. (SRC-94 L228–230)

## How it works

The PII flow has two related outputs. (SRC-94 L218; SRC-94 L222–225) First, Azure Language identifies PII entities and returns their categories and confidence scores, allowing an application to analyze what sensitive information was found. (SRC-94 L222) Second, Azure Language can return a redacted text version where PII has been replaced by masking characters. (SRC-94 L225; SRC-94 L228–230)

The input shape follows the same document-oriented pattern as other Azure Language functions: one or more documents can be submitted for analysis. (SRC-94 L219) The source's motivating use cases are sharing or publishing content only after sensitive details have been removed. (SRC-94 L217)

## Code and API patterns

The capture omits the code bodies, but the prose identifies the operation shape. (SRC-94 L219–230)

- Input pattern: submit one or more documents for analysis. (SRC-94 L219)
- Extraction output: PII entities with categories and confidence scores. (SRC-94 L222)
- Redaction output: text with PII replaced by asterisks or a specified character. (SRC-94 L225)
- Masking purpose: protect privacy by hiding sensitive information. (SRC-94 L218; SRC-94 L228–230)

## Key terms

- **Personally identifiable information (PII)** — sensitive personal information such as names, addresses, phone numbers, email addresses, social security numbers, and credit card numbers. (SRC-94 L217–218)
- **PII detection** — identifying sensitive information in text. (SRC-94 L218)
- **Redaction** — replacing PII in the text with asterisks or another specified character. (SRC-94 L225)
- **Confidence score** — a value returned with identified PII entities to indicate confidence. (SRC-94 L222)

## Decision boundaries and exam cues

- **Inference:** If a scenario requires removing personal details before sharing or publishing text, Azure Language PII detection and redaction is the direct fit. (SRC-94 L217–225; SRC-168 L218–221)
- **Inference:** If a scenario asks for people, places, dates, or organizations for indexing, named entity recognition is the closer fit than PII redaction. (SRC-93 L217–224; SRC-168 L213–216)
- **Inference:** If the requirement is only to know which language a user wrote in, language detection is the closer fit than PII detection. (SRC-40 L217–219; SRC-94 L217–225)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source names categories such as social security numbers and credit card numbers, but it does not provide a complete category list. (SRC-94 L218)
- The Python snippets and output examples are omitted in the capture, so exact SDK syntax and output schema must be verified elsewhere. (SRC-94 L219–230)

## Relation to other sources

- [[src-12-azure-language-microsoft-foundry-tools]] introduces PII extraction as an Azure Language task; this source expands it into detection, confidence scores, and redaction. (SRC-12 L217–220; SRC-94 L217–225)
- [[src-168-module-assessment-analyze-text-azure-language-foundry-tools]] tests PII redaction for publishing customer testimonials. (SRC-94 L217–225; SRC-168 L218–221)
- [[src-10-analyze-text-azure-language-foundry-tools-episode-15]] demonstrates `recognize_pii_entities` and redacted text in the lab. (SRC-10 L702–716; SRC-94 L222–225)

## Connections

- [[pii-detection-and-redaction]] — this source is the module's PII page. (SRC-94 L217–225)
- [[azure-language]] — PII detection and redaction are Azure Language capabilities. (SRC-94 L218)
- [[guardrails-and-content-filters]] — PII redaction is related to protecting sensitive content, though this source is about Azure Language rather than content filters. (SRC-94 L217–225)
- [[decision-boundaries]] — PII redaction must be distinguished from NER and language detection. (SRC-94 L217–225; SRC-93 L217–224; SRC-40 L217–220)

## Open questions

- The source does not show the full list of PII categories, offset handling, or exact SDK method syntax. (SRC-94 L218–230)

## Sources

- SRC-94 — raw file: [[94-Extract personally identifiable information (PII) - Training - Microsoft Learn]]
