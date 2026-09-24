---
title: "Introduction — Analyze images with Content Understanding"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Introduces Azure Content Understanding for extracting structured data from images, documents, and other unstructured content."
area: extraction
source_ids: [SRC-137]
objectives: []
tags: [content-understanding, image-analysis, analyzers, structured-data]
aliases: ["SRC-137"]
source_kind: learn-unit
module: "Analyze images with Content Understanding"
learning_path: null
unit: "1"
presenters: []
raw_file: "137-Introduction - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/analyze-images-with-content-understanding/1-introduction"
ingest_depth: full
---

# Introduction — Analyze images with Content Understanding

*learn-unit · Analyze images with Content Understanding · unit 1 · SRC-137*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-137 |
| Raw file | 137-Introduction - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | null |
| Module | Analyze images with Content Understanding |
| Unit / episode | 1 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/analyze-images-with-content-understanding/1-introduction |
| Teaching content | L8–14 of 28 |
| Content length | ~146 words |
| Capture quality | High: compact Learn unit with clear teaching lines. |
| Ingest depth | full |

## TL;DR

Azure Content Understanding is introduced as a way to use generative AI to analyze hard-to-extract unstructured content and return structured data. (SRC-137 L10) The unit frames schemas as the learner-controlled description of the data to extract, and the output as usable in automation, analytics, and search. (SRC-137 L11)

## Key claims

- Images, documents, and other unstructured content can contain valuable information that is difficult to extract automatically. (SRC-137 L10)
- Azure Content Understanding uses generative AI to analyze that content and return structured data. (SRC-137 L10)
- The learner defines a schema that describes the desired data, and the service extracts it from images and documents. (SRC-137 L11)
- Extracted output is positioned for automation workflows, analytics, and search applications. (SRC-137 L11)
- The module teaches image analysis with both prebuilt and custom analyzers. (SRC-137 L12)

## How it works

The source presents a simple loop: start with unstructured content, define the schema for the data you want, and let Content Understanding extract that information into structured output. (SRC-137 L10–12)

For this module, the content scope narrows from images and documents in general to analyzing images with Content Understanding. (SRC-137 L11–12)

## Code and API patterns

Not covered by this source.

## Key terms

- **Azure Content Understanding** — a generative-AI-based service for analyzing content and returning structured data. (SRC-137 L10)
- **Schema** — the description of the data the user wants the service to extract. (SRC-137 L11)
- **Prebuilt analyzers** — analyzer option named as part of the module's image-analysis learning goal. (SRC-137 L12)
- **Custom analyzers** — analyzer option named as part of the module's image-analysis learning goal. (SRC-137 L12)

## Decision boundaries and exam cues

- **Inference:** Choose Content Understanding when the problem is to turn unstructured images or documents into structured data for downstream workflows, analytics, or search. (SRC-137 L10–12)
- **Inference:** If a scenario emphasizes defining fields up front, the schema is the mechanism this source highlights. (SRC-137 L11)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The unit says learners can use video or text-and-images, and notes the text has greater detail than the videos in some cases. (SRC-137 L14)

## Relation to other sources

- [[src-264-what-is-content-understanding]] expands this introduction with components, analyzer types, use cases, and restrictions. (SRC-137 L10–12; SRC-264 L12–40)
- [[src-8-analyze-images-content-understanding]] applies the same service specifically to image analyzers, schemas, result fields, and confidence scores. (SRC-137 L12; SRC-8 L213–254)
- [[src-9-analyze-images-content-understanding-episode-24]] demonstrates a portal-to-code flow for image analysis. (SRC-137 L12; SRC-9 L173–178)

## Connections

- [[azure-content-understanding]] — the service introduced by this unit. (SRC-137 L10)
- [[content-understanding-analyzers]] — the module goal includes prebuilt and custom analyzers. (SRC-137 L12)
- [[extraction-options-compared]] — Content Understanding is presented as structured extraction from unstructured content. (SRC-137 L10–11)
- *Module units:* [[src-264-what-is-content-understanding|2 What is Content Understanding-]] · [[src-8-analyze-images-content-understanding|3 Analyze images with Content Understanding]] · [[src-55-exercise-analyze-images-content-understanding|4 Exercise - Analyze images with Content Understanding]] · [[src-169-module-assessment-analyze-images-content-understanding|5 Module assessment]] · [[src-216-summary-analyze-images-content-understanding|6 Summary]] · [[src-9-analyze-images-content-understanding-episode-24|episode 24]] · [[src-7-analyze-documents-content-understanding-episode-25|episode 25]]

## Open questions

- The introduction does not specify supported image formats, analyzer names, SDK calls, or confidence-score interpretation. (SRC-137 L10–12)

## Sources

- SRC-137 — raw file: [[137-Introduction - Training - Microsoft Learn]]

