---
title: "Extract entities"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Defines named entity recognition as extracting categorized entities from text, with example categories and response shape."
area: language
source_ids: [SRC-93]
objectives: [T01]
tags: [azure-language, named-entity-recognition, entities, text-analysis]
aliases: ["SRC-93"]
source_kind: learn-unit
module: "Analyze text with Azure Language in Foundry Tools"
learning_path: "Develop natural language solutions in Azure"
unit: "6 of 8"
presenters: []
raw_file: "93-Extract entities - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/analyze-text-ai-language/6-extract-entities"
ingest_depth: full
---

# Extract entities

*learn-unit · Analyze text with Azure Language in Foundry Tools · unit 6 of 8 · SRC-93*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-93 |
| Raw file | 93-Extract entities - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop natural language solutions in Azure |
| Module | Analyze text with Azure Language in Foundry Tools |
| Unit / episode | 6 of 8 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/analyze-text-ai-language/6-extract-entities |
| Teaching content | L211–232 of 262 |
| Content length | ~95 words |
| Capture quality | Medium; short prose is complete, but input and output code blocks are omitted after Copy markers. |
| Ingest depth | full |

## TL;DR

Named Entity Recognition identifies entities mentioned in text. (SRC-93 L217) The unit says entities are grouped into categories and subcategories, with examples including Person, Location, DateTime, Organization, Address, Email, and URL. (SRC-93 L217–224) The response contains categorized entities found in each document. (SRC-93 L230)

## Key claims

- Named Entity Recognition identifies entities mentioned in text. (SRC-93 L217)
- Entities are grouped into categories and subcategories. (SRC-93 L217)
- Example categories include Person, Location, DateTime, Organization, Address, Email, and URL. (SRC-93 L218–224)
- The documentation contains the full list of categories. (SRC-93 L225–226)
- Input for entity recognition is similar to input for other Azure Language API functions. (SRC-93 L227)
- The response includes a list of categorized entities found in each document. (SRC-93 L230)

## How it works

The unit presents entity recognition as a document analysis operation: input follows the same general pattern as other Azure Language API functions, and the response returns categorized entities for each document. (SRC-93 L227–230) The most concrete mechanism in this capture is categorization: detected text spans are grouped into categories and subcategories such as Person, Organization, Address, Email, and URL. (SRC-93 L217–224)

## Code and API patterns

The code and output bodies are not present in the capture, but the source states the input and response pattern. (SRC-93 L227–232)

- Input pattern: similar to other Azure Language API functions. (SRC-93 L227)
- Response pattern: a list of categorized entities for each document. (SRC-93 L230)
- Category examples: Person, Location, DateTime, Organization, Address, Email, URL. (SRC-93 L218–224)

## Key terms

- **Named Entity Recognition** — the capability that identifies entities mentioned in text. (SRC-93 L217)
- **Entity category** — a grouping assigned to a detected entity, such as Person or Location. (SRC-93 L217–224)
- **Subcategory** — a more specific grouping under an entity category; the source states entities are grouped into categories and subcategories. (SRC-93 L217)

## Decision boundaries and exam cues

- **Inference:** If a scenario asks for key people, places, dates, organizations, addresses, emails, or URLs in text, named entity recognition is the matching Azure Language capability. (SRC-93 L217–224; SRC-168 L213–216)
- **Inference:** If the scenario asks to protect or mask personal data before publishing, PII detection and redaction is the closer capability than general entity recognition. (SRC-94 L217–225; SRC-168 L218–221)
- **Inference:** If the scenario asks what language text is written in, language detection is the nearby capability rather than entity recognition. (SRC-40 L217–220; SRC-93 L217)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The capture is thin and omits the actual request and response examples after the Copy markers. (SRC-93 L227–232)
- The page defers the complete category list to documentation, so this source only supports the listed examples. (SRC-93 L225–226)

## Relation to other sources

- [[src-12-azure-language-microsoft-foundry-tools]] introduces named entity recognition as one Azure Language task; this source gives the categories and response shape. (SRC-12 L217–219; SRC-93 L217–230)
- [[src-168-module-assessment-analyze-text-azure-language-foundry-tools]] tests named entity recognition for extracting people, places, and dates from news articles. (SRC-93 L217–224; SRC-168 L213–216)
- [[src-10-analyze-text-azure-language-foundry-tools-episode-15]] demonstrates `recognize_entities` and prints entity text and category in the lab. (SRC-10 L688–695; SRC-93 L217–230)

## Connections

- [[named-entity-recognition]] — this source defines the NER capability and examples. (SRC-93 L217–224)
- [[azure-language]] — NER is an Azure Language capability. (SRC-93 L217)
- [[extraction-options-compared]] — entity extraction is a language-based extraction option. (SRC-93 L217–230)
- [[decision-boundaries]] — NER must be distinguished from PII redaction and language detection. (SRC-93 L217–224; SRC-94 L217–225; SRC-40 L217–220)
- *Module units:* [[src-127-introduction-analyze-text-azure-language-foundry-tools|1 Introduction]] · [[src-12-azure-language-microsoft-foundry-tools|2 Azure Language in Microsoft Foundry Tools]] · [[src-40-detect-language|3 Detect language]] · [[src-94-extract-personally-identifiable-information-pii|7 Extract personally identifiable information (PII)]] · [[src-56-exercise-analyze-text|8 Exercise - Analyze text]] · [[src-168-module-assessment-analyze-text-azure-language-foundry-tools|9 Module assessment]] · [[src-206-summary-analyze-text-azure-language-foundry-tools|10 Summary]] · [[src-10-analyze-text-azure-language-foundry-tools-episode-15|episode 15]]

## Open questions

- The source does not show confidence scores, offsets, exact SDK method names, or the full entity category list. (SRC-93 L225–232)

## Sources

- SRC-93 — raw file: [[93-Extract entities - Training - Microsoft Learn]]
