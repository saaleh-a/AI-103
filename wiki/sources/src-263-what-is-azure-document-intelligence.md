---
title: "What is Azure Document Intelligence-"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Defines Document Intelligence model categories, access methods, resource choices, and input requirements."
area: extraction
source_ids: [SRC-263]
objectives: [I06]
tags: [azure-document-intelligence, ocr, document-analysis, input-requirements]
aliases: ["SRC-263"]
source_kind: learn-unit
module: "Extract data with Azure Document Intelligence"
learning_path: "Extract insights from visual data on Azure"
unit: "2 of 8"
presenters: []
raw_file: "263-What is Azure Document Intelligence- - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/extract-data-with-document-intelligence/2-what-is-document-intelligence"
ingest_depth: full
---

# What is Azure Document Intelligence-

*learn-unit · Extract data with Azure Document Intelligence · unit 2 of 8 · SRC-263*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-263 |
| Raw file | 263-What is Azure Document Intelligence- - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Extract insights from visual data on Azure |
| Module | Extract data with Azure Document Intelligence |
| Unit / episode | 2 of 8 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/extract-data-with-document-intelligence/2-what-is-document-intelligence |
| Teaching content | L211–248 of 278 |
| Content length | ~562 words |
| Capture quality | High |
| Ingest depth | full |

## TL;DR

Azure Document Intelligence is a Microsoft Foundry AI service that uses OCR and deep learning to extract text, key-value pairs, selection marks, and tables from documents. (SRC-263 L217) The unit divides the service into document analysis models, prebuilt models, and custom models, then explains access paths, resource choices, and input limits. (SRC-263 L221–245)

## Key claims

- OCR captures document structure by creating bounding boxes around detected objects, with coordinates recorded relative to the rest of the page. (SRC-263 L218)
- Document Intelligence returns bounding-box data and related information in structured JSON that preserves relationships from the original document. (SRC-263 L218)
- Building a high-accuracy extraction model from scratch would require deep learning expertise, large compute, and long training times; Document Intelligence provides underlying models already trained on thousands of form examples. (SRC-263 L219)
- Document analysis models extract text, structure, tables, and selection marks; the read model extracts text and detects languages, while the layout model adds table and structure extraction. (SRC-263 L221–222)
- Prebuilt models extract from common document types such as invoices, receipts, tax forms, and ID documents without training. (SRC-263 L223)
- Custom models use labeled datasets for business-specific forms, including template, neural, composed, and classifier options. (SRC-263 L224)

## How it works

The source starts with the extraction mechanism: OCR detects objects in document images, records bounding boxes as coordinates, and Document Intelligence returns that spatial information in structured JSON so original document relationships are preserved. (SRC-263 L218)

It then organizes the service into three model categories. Document analysis models provide general text, structure, table, and selection-mark extraction; within that category, read handles text and language detection while layout adds table and structure extraction. (SRC-263 L221–222) Prebuilt models target common document categories with no training requirement. (SRC-263 L223) Custom models are trained on the organization's labeled data for forms specific to the business. (SRC-263 L224)

The source also distinguishes access and provisioning. The service can be called through REST, SDKs for Python, C#, Java, and JavaScript, Document Intelligence Studio, or the Microsoft Foundry portal. (SRC-263 L225–230) A Foundry resource provides multi-service access under one endpoint and key, while an Azure Document Intelligence resource is single-service. (SRC-263 L233–238)

## Code and API patterns

- REST API access means calling the service directly with HTTP requests. (SRC-263 L225–227)
- Client library SDK access is available for Python, C#, Java, and JavaScript. (SRC-263 L228)
- The exercise focuses on the Python SDK, but the underlying REST services can be used by any language. (SRC-263 L231–232)
- The service returns structured JSON with bounding-box data and preserved document relationships. (SRC-263 L218)

## Key terms

- **Read model** — extracts text and detects languages. (SRC-263 L222)
- **Layout model** — adds table and structure extraction. (SRC-263 L222)
- **Prebuilt models** — models for common document types that do not require training. (SRC-263 L223)
- **Custom template models** — custom-model option described as fast and cost-effective for fixed layouts. (SRC-263 L224)
- **Custom neural models** — custom-model option described as higher accuracy for varying layouts. (SRC-263 L224)
- **Foundry resource** — a multi-service subscription under a single endpoint and key. (SRC-263 L235)
- **Azure Document Intelligence resource** — a single-service resource used only with Document Intelligence. (SRC-263 L236)

## Decision boundaries and exam cues

- **Inference:** Use a Foundry resource when the scenario needs multiple Foundry tools behind one endpoint and key; use a dedicated Document Intelligence resource when the scenario is only Document Intelligence. (SRC-263 L233–238)
- **Inference:** Use document analysis models for general text, structure, table, and selection-mark extraction rather than document-type-specific fields. (SRC-263 L221–222)
- **Inference:** Use prebuilt models when the document matches common types, and custom models when the extraction target is a business-specific form with labeled examples. (SRC-263 L223–224)
- **Stale-risk:** File-size, image-dimension, PDF-size, and format limits can change over time; this capture states JPEG, PNG, BMP, PDF, TIFF, and read-model Microsoft Office support, with standard-tier and free-tier size limits. (SRC-263 L240–245)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source uses both Microsoft Foundry and Azure Document Intelligence resource language; the resource choice depends on whether multiple Foundry tools are needed or Document Intelligence alone is enough. (SRC-263 L230; SRC-263 L233–238)
- **Stale-risk:** The input requirements and size limits are operational details that may need live documentation verification before implementation. (SRC-263 L240–245)

## Relation to other sources

- [[src-117-introduction-extract-data-azure-document-intelligence]] introduces the same service and module objectives at a higher level. (SRC-117 L216–223)
- [[src-251-document-intelligence-studio]] expands the Studio access path named here. (SRC-263 L229; SRC-251 L217–232)
- [[src-249-prebuilt-models]] expands read, layout, and prebuilt models named here. (SRC-263 L221–223; SRC-249 L217–250)
- [[src-224-train-custom-models]] expands custom template, neural, composed, and classifier options named here. (SRC-263 L224; SRC-224 L217–258)

## Connections

- [[azure-document-intelligence]] — core service entity.
- [[document-intelligence-prebuilt-models]] — read, layout, and prebuilt model family.
- [[document-intelligence-custom-models]] — template, neural, composed, and classifier family.
- [[microsoft-foundry]] — service is described as part of Microsoft Foundry.
- [[endpoints-and-sdk-choice]] — resource and access-path choice affects endpoint and SDK use.
- *Module units:* [[src-117-introduction-extract-data-azure-document-intelligence|1 Introduction]] · [[src-251-document-intelligence-studio|3 Use the Document Intelligence Studio]] · [[src-249-prebuilt-models|4 Use prebuilt models]] · [[src-224-train-custom-models|5 Train and use custom models]] · [[src-54-exercise-analyze-documents-document-intelligence|6 Exercise - Analyze documents with Document Intelligence]] · [[src-165-module-assessment-extract-data-azure-document-intelligence|7 Module assessment]] · [[src-220-summary-extract-data-azure-document-intelligence|8 Summary]]

## Open questions

- The source does not show the exact REST endpoint, SDK client class, or JSON response sample. (SRC-263 L225–232)

## Sources

- SRC-263 — raw file: [[263-What is Azure Document Intelligence- - Training - Microsoft Learn]]
