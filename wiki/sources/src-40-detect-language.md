---
title: "Detect language"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains Azure Language language detection, confidence scores, document and batch limits, mixed-language behavior, and unknown-language output."
area: language
source_ids: [SRC-40]
objectives: []
tags: [azure-language, language-detection, confidence-score, text-analysis]
aliases: ["SRC-40"]
source_kind: learn-unit
module: "Analyze text with Azure Language in Foundry Tools"
learning_path: "Develop natural language solutions in Azure"
unit: "3 of 8"
presenters: []
raw_file: "40-Detect language - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/analyze-text-ai-language/3-detect-language"
ingest_depth: full
---

# Detect language

*learn-unit · Analyze text with Azure Language in Foundry Tools · unit 3 of 8 · SRC-40*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-40 |
| Raw file | 40-Detect language - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop natural language solutions in Azure |
| Module | Analyze text with Azure Language in Foundry Tools |
| Unit / episode | 3 of 8 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/analyze-text-ai-language/3-detect-language |
| Teaching content | L211–229 of 259 |
| Content length | ~460 words |
| Capture quality | Medium; prose is detailed, but JSON, Python, and output code blocks are omitted after Copy markers. |
| Ingest depth | full |

## TL;DR

The Azure Language detection API evaluates text and returns language identifiers plus a score per submitted document. (SRC-40 L217) It is useful when stored content has unknown language or when a chat application needs to configure responses to the user's language. (SRC-40 L218) The source also states document and collection limits, confidence-score interpretation, mixed-language behavior, and unknown-language output. (SRC-40 L219–229)

## Key claims

- The language detection API evaluates text input and returns language identifiers for each submitted document. (SRC-40 L217)
- Each language-detection result includes a score indicating the strength of the analysis. (SRC-40 L217)
- Language detection is useful for content stores that collect arbitrary text where the language is unknown. (SRC-40 L218)
- A chat application can use language detection at session start to determine the user's language and configure responses appropriately. (SRC-40 L218)
- The response score reflects model confidence as a value from 0 to 1. (SRC-40 L219)
- Language detection can work with documents or single phrases. (SRC-40 L220)
- Each document must be under 5,120 characters. (SRC-40 L220)
- Each collection is restricted to 1,000 items or IDs. (SRC-40 L220)
- A request body contains a collection of documents, each with a unique ID and text to analyze. (SRC-40 L220)
- The response includes one result per document, including predicted language and confidence level. (SRC-40 L224)
- Confidence values closer to 1 indicate higher confidence. (SRC-40 L224)
- Simple text can produce high confidence values because it is easier to identify. (SRC-40 L227)
- Mixed-language content returns the language with the largest representation, with a lower positive rating when the assessment is marginal. (SRC-40 L228)
- If text cannot be parsed, the language name and ISO code are returned as `(unknown)`, and score is returned as 0. (SRC-40 L229)

## How it works

The request pattern is document-oriented. (SRC-40 L217; SRC-40 L220) A client submits a collection of documents, each with a unique ID and text, and the service returns a result for each document. (SRC-40 L220; SRC-40 L224) The core output is the predicted language plus a confidence score, where 0 to 1 represents confidence and values closer to 1 mean higher confidence. (SRC-40 L219; SRC-40 L224)

The unit emphasizes limits and ambiguity. (SRC-40 L220; SRC-40 L228–229) Each document must stay under 5,120 characters, and each collection is capped at 1,000 items. (SRC-40 L220) If one document mixes languages, the service chooses the language with the largest representation but lowers the positive rating to reflect ambiguity. (SRC-40 L228) If parsing fails, such as because of character encoding issues, the response returns `(unknown)` for language name and ISO code and 0 for score. (SRC-40 L229)

## Code and API patterns

The code body is omitted in the capture, but the source describes the request and response shape. (SRC-40 L220–226)

- Request body: a collection of documents. (SRC-40 L220)
- Per-document fields: a unique `id` and the `text` to analyze. (SRC-40 L220)
- Response granularity: one result for each document. (SRC-40 L224)
- Response fields: predicted language and confidence value. (SRC-40 L224)
- Confidence range: 0 to 1, with values closer to 1 indicating higher confidence. (SRC-40 L219; SRC-40 L224)

## Key terms

- **Language identifier** — the language result returned for a submitted document. (SRC-40 L217)
- **Score / confidence level** — a value from 0 to 1 that reflects the strength or confidence of the language analysis. (SRC-40 L217; SRC-40 L219; SRC-40 L224)
- **Collection** — the submitted group of documents, restricted to 1,000 items or IDs. (SRC-40 L220)
- **`(unknown)`** — the language name and ISO code returned when text cannot be parsed. (SRC-40 L229)

## Decision boundaries and exam cues

- **Inference:** If a scenario says the user's or document's language is unknown, language detection is the matching Azure Language capability. (SRC-40 L217–218)
- **Inference:** If a scenario begins a chat session and needs to set response language, language detection fits because the source gives that as a chat scenario. (SRC-40 L218)
- **Inference:** If a scenario involves extracting people, places, organizations, or dates, named entity recognition is the nearby capability rather than language detection. (SRC-12 L218–219; SRC-93 L217–224)
- **Inference:** If a scenario involves removing personal details, PII detection and redaction is the nearby capability rather than language detection. (SRC-12 L220; SRC-94 L217–225)
- **Inference:** If a single document is multilingual, expect the dominant language rather than multiple full-language outputs because the source states mixed content returns the language with largest representation. (SRC-40 L228)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source describes Python and output examples, but the captured code and output blocks are omitted. (SRC-40 L221–226)
- **Stale-risk:** The document-size and collection limits are point-in-time platform details and should be rechecked for current implementation decisions. (SRC-40 L220)

## Relation to other sources

- [[src-12-azure-language-microsoft-foundry-tools]] names language detection as one of Azure Language's text tasks; this source explains the detailed behavior. (SRC-12 L217–218; SRC-40 L217–229)
- [[src-10-analyze-text-azure-language-foundry-tools-episode-15]] demonstrates `detect-language` and prints `primary-language.name` in the episode lab. (SRC-10 L672–682; SRC-40 L217–224)
- [[src-206-summary-analyze-text-azure-language-foundry-tools]] lists detecting language from text as a module outcome. (SRC-40 L217–224; SRC-206 L215–216)

## Connections

- [[language-detection]] — this source is the module's detailed language-detection unit. (SRC-40 L217–229)
- [[azure-language]] — the API capability belongs to Azure Language. (SRC-40 L217)
- [[speech-and-language-options-compared]] — this source helps distinguish text-language detection from speech and translation capabilities. (SRC-40 L217–218)
- [[decision-boundaries]] — mixed-language and unknown outputs are exam-relevant boundaries. (SRC-40 L228–229)
- *Module units:* [[src-127-introduction-analyze-text-azure-language-foundry-tools|1 Introduction]] · [[src-12-azure-language-microsoft-foundry-tools|2 Azure Language in Microsoft Foundry Tools]] · [[src-93-extract-entities|6 Extract entities]] · [[src-94-extract-personally-identifiable-information-pii|7 Extract personally identifiable information (PII)]] · [[src-56-exercise-analyze-text|8 Exercise - Analyze text]] · [[src-168-module-assessment-analyze-text-azure-language-foundry-tools|9 Module assessment]] · [[src-206-summary-analyze-text-azure-language-foundry-tools|10 Summary]] · [[src-10-analyze-text-azure-language-foundry-tools-episode-15|episode 15]]

## Open questions

- The source does not show the exact request JSON or Python SDK syntax in the captured code blocks. (SRC-40 L220–226)

## Sources

- SRC-40 — raw file: [[40-Detect language - Training - Microsoft Learn]]
