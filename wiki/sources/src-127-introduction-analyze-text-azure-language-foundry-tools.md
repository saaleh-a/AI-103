---
title: "Introduction — Analyze text with Azure Language in Foundry Tools"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Introduces Azure Language in Foundry Tools as an API for text analysis in apps and agents, with Python and other SDK options."
area: language
source_ids: [SRC-127]
objectives: []
tags: [azure-language, foundry-tools, text-analysis, sdk]
aliases: ["SRC-127"]
source_kind: learn-unit
module: "Analyze text with Azure Language in Foundry Tools"
learning_path: "Develop natural language solutions in Azure"
unit: "1 of 8"
presenters: []
raw_file: "127-Introduction - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/analyze-text-ai-language/1-introduction"
ingest_depth: full
---

# Introduction — Analyze text with Azure Language in Foundry Tools

*learn-unit · Analyze text with Azure Language in Foundry Tools · unit 1 of 8 · SRC-127*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-127 |
| Raw file | 127-Introduction - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop natural language solutions in Azure |
| Module | Analyze text with Azure Language in Foundry Tools |
| Unit / episode | 1 of 8 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/analyze-text-ai-language/1-introduction |
| Teaching content | L211–222 of 252 |
| Content length | ~208 words |
| Capture quality | High; introductory prose is complete, with no code body in this unit. |
| Ingest depth | full |

## TL;DR

The unit frames text as a large share of generated data, including emails, social media posts, reviews, and business documents. (SRC-127 L215) It introduces Azure Language in Foundry Tools as an API for common text-analysis techniques that can be integrated into applications and agents. (SRC-127 L216) The module will use Python examples while noting Python, .NET, and JavaScript Text Analytics client libraries. (SRC-127 L217–220)

## Key claims

- Much generated data is text-based, with examples including emails, social media posts, online reviews, and business documents. (SRC-127 L215)
- Statistical and semantic AI models can support applications that extract meaning and insights from text-based data. (SRC-127 L215)
- Azure Language in Foundry Tools exposes an API for common text-analysis techniques. (SRC-127 L216)
- The API can be integrated into applications and agents. (SRC-127 L216)
- The module explores Azure Language in Foundry Tools with Python examples. (SRC-127 L217)
- Text analytics applications can be developed with language-specific SDKs for Python, .NET, and JavaScript. (SRC-127 L217–220)
- The text-and-images format contains more detail than the videos and may supplement the video presentation. (SRC-127 L221–222)

## How it works

This introductory unit positions Azure Language in Foundry Tools as a text-insight layer: applications and agents send text to an API for common text-analysis techniques, rather than treating unstructured text as manually inspected content. (SRC-127 L215–216) The source does not enumerate individual analysis operations here; it only previews that the module teaches application use with examples in Python and points to language-specific SDK options. (SRC-127 L217–220)

## Code and API patterns

The unit names SDK families but does not show code. (SRC-127 L217–220)

- Python option: Microsoft Azure Text Analytics Client Library for Python. (SRC-127 L217–218)
- .NET option: Microsoft Azure Text Analytics Client Library for .NET. (SRC-127 L217–219)
- JavaScript option: Microsoft Azure Text Analytics Client Library for JavaScript. (SRC-127 L217–220)

## Key terms

- **Text-based data** — data represented as text, with examples including emails, social posts, reviews, and business documents. (SRC-127 L215)
- **Azure Language in Foundry Tools** — an API for common text-analysis techniques that can be integrated into applications and agents. (SRC-127 L216)
- **Text Analytics Client Library** — language-specific SDK libraries available for Python, .NET, and JavaScript. (SRC-127 L217–220)

## Decision boundaries and exam cues

- **Inference:** If a scenario asks for extracting meaning or insights from text in an application or agent, this module's Azure Language path is relevant because the source defines Azure Language around common text-analysis APIs. (SRC-127 L215–216)
- **Inference:** If the task specifically asks for SDK-based integration, the named Text Analytics client libraries are the implementation clue. (SRC-127 L217–220)
- **Inference:** This unit does not yet decide between language detection, entity recognition, or PII extraction; later module units supply those boundaries. (SRC-127 L217; SRC-12 L217–220)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source title says Azure Language in Foundry Tools, while one SDK name still uses Microsoft Azure Text Analytics Client Library naming. (SRC-127 L216–220)
- The unit is introductory and does not yet state service limits, authentication, endpoint shape, or individual API operations. (SRC-127 L215–220)

## Relation to other sources

- [[src-12-azure-language-microsoft-foundry-tools]] expands this introduction into the specific Azure Language tasks and provisioning requirements. (SRC-127 L216–220; SRC-12 L217–225)
- [[src-40-detect-language]] supplies the first named capability previewed by this introduction's text-analysis framing. (SRC-127 L216–217; SRC-40 L217–220)
- [[src-10-analyze-text-azure-language-foundry-tools-episode-15]] presents the matching episode and explains why a focused tool may be used instead of a large language model. (SRC-127 L216; SRC-10 L103–176)

## Connections

- [[azure-language]] — this source introduces Azure Language in Foundry Tools. (SRC-127 L216)
- [[foundry-tools]] — Azure Language is presented as a Foundry Tools capability. (SRC-127 L216)
- [[development-tools-and-approaches]] — the unit names multiple SDK language options. (SRC-127 L217–220)
- [[speech-and-language-options-compared]] — the learning path context is natural language solutions. (SRC-127 L217)
- *Module units:* [[src-12-azure-language-microsoft-foundry-tools|2 Azure Language in Microsoft Foundry Tools]] · [[src-40-detect-language|3 Detect language]] · [[src-93-extract-entities|6 Extract entities]] · [[src-94-extract-personally-identifiable-information-pii|7 Extract personally identifiable information (PII)]] · [[src-56-exercise-analyze-text|8 Exercise - Analyze text]] · [[src-168-module-assessment-analyze-text-azure-language-foundry-tools|9 Module assessment]] · [[src-206-summary-analyze-text-azure-language-foundry-tools|10 Summary]] · [[src-10-analyze-text-azure-language-foundry-tools-episode-15|episode 15]]

## Open questions

- The source does not state the exact Python client object, endpoint format, or authentication mode; those appear in the following unit. (SRC-127 L217–220; SRC-12 L223–237)

## Sources

- SRC-127 — raw file: [[127-Introduction - Training - Microsoft Learn]]
