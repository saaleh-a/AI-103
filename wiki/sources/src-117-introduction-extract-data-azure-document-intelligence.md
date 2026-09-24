---
title: "Introduction — Extract data with Azure Document Intelligence"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Introduces Azure Document Intelligence for automating document extraction from forms and documents."
area: extraction
source_ids: [SRC-117]
objectives: []
tags: [azure-document-intelligence, document-extraction, module-introduction]
aliases: ["SRC-117"]
source_kind: learn-unit
module: "Extract data with Azure Document Intelligence"
learning_path: "Extract insights from visual data on Azure"
unit: "1 of 8"
presenters: []
raw_file: "117-Introduction - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/extract-data-with-document-intelligence/1-introduction"
ingest_depth: full
---

# Introduction — Extract data with Azure Document Intelligence

*learn-unit · Extract data with Azure Document Intelligence · unit 1 of 8 · SRC-117*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-117 |
| Raw file | 117-Introduction - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Extract insights from visual data on Azure |
| Module | Extract data with Azure Document Intelligence |
| Unit / episode | 1 of 8 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/extract-data-with-document-intelligence/1-introduction |
| Teaching content | L211–228 of 258 |
| Content length | ~288 words |
| Capture quality | High |
| Ingest depth | full |

## TL;DR

Azure Document Intelligence is introduced as the Microsoft Foundry service for automating extraction from forms and documents, using OCR and deep learning to extract text, key-value pairs, tables, and structured data. (SRC-117 L216–217) The module sets up a progression through service components, Studio exploration, prebuilt models, and custom models for industry-specific forms. (SRC-117 L219–223)

## Key claims

- Forms and documents carry information across industries, and many organizations still manually extract data from forms for work such as claims, patient enrolment, expenses, and operations review. (SRC-117 L215)
- Azure Document Intelligence addresses high-volume document scenarios such as invoices, receipts, and tax forms by automating key-data extraction to reduce manual effort and improve accuracy. (SRC-117 L216)
- The service uses OCR and deep learning to extract text, key-value pairs, tables, and structured data from forms and documents. (SRC-117 L217)
- The module objective set includes describing Document Intelligence components, using Studio, using prebuilt models, and training custom models. (SRC-117 L219–223)
- The stated prerequisites are familiarity with Azure and the Azure portal, plus programming experience with C# or Python. (SRC-117 L224–226)

## How it works

The source frames Document Intelligence around a manual-processing problem: organizations receive documents and forms at scale, then need specific fields extracted accurately. (SRC-117 L215–216) It then maps that problem to a Foundry cloud service that combines OCR with deep learning, so extraction can cover plain text, key-value pairs, tables, and structured fields rather than only raw character recognition. (SRC-117 L217)

The module roadmap is sequential: first understand the service and its components, then use Document Intelligence Studio to explore and test models, then use prebuilt models for common document types, and finally train custom models for industry-specific forms. (SRC-117 L219–223)

## Code and API patterns

Not covered by this source. The prerequisites name C# or Python programming experience, but this introduction does not show SDK calls or REST request structure. (SRC-117 L224–226)

## Key terms

- **Azure Document Intelligence** — a cloud-based service in Microsoft Foundry for extracting text, key-value pairs, tables, and structured data from forms and documents. (SRC-117 L217)
- **OCR** — one technique named as part of how the service extracts document content. (SRC-117 L217)
- **Prebuilt models** — models for common document types, introduced as one of the module outcomes. (SRC-117 L217; SRC-117 L222)
- **Custom models** — trained models for specific forms, introduced as one of the module outcomes. (SRC-117 L217; SRC-117 L223)

## Decision boundaries and exam cues

- **Inference:** Choose Document Intelligence when the scenario is about extracting information from forms or documents, especially invoices, receipts, tax forms, tables, and key-value fields. (SRC-117 L216–217)
- **Inference:** A scenario that asks for common document types points toward prebuilt models, while forms specific to an industry or organization point toward custom models. (SRC-117 L217; SRC-117 L222–223)
- **Inference:** This introduction does not teach generic image description, free-form summarization, or search indexing; it scopes the module to document data extraction. (SRC-117 L216–223)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source names Azure Document Intelligence as a service in Microsoft Foundry; related captures may also mention Foundry Tools or a dedicated Azure Document Intelligence resource. (SRC-117 L217)
- The source says the text-and-images version contains greater detail than the video version in some cases. (SRC-117 L227–228)

## Relation to other sources

- [[src-263-what-is-azure-document-intelligence]] expands this introduction with model categories, access methods, resource choices, and input requirements. (SRC-263 L217–245)
- [[src-251-document-intelligence-studio]] covers the Studio objective named in this introduction. (SRC-117 L221; SRC-251 L217–232)
- [[src-249-prebuilt-models]] covers the prebuilt-model objective named in this introduction. (SRC-117 L222; SRC-249 L217–250)
- [[src-224-train-custom-models]] covers the custom-model objective named in this introduction. (SRC-117 L223; SRC-224 L217–258)

## Connections

- [[azure-document-intelligence]] — the service introduced by this unit.
- [[document-intelligence-prebuilt-models]] — prebuilt models are one of the module outcomes.
- [[document-intelligence-custom-models]] — custom models are one of the module outcomes.
- [[extraction-options-compared]] — useful later for distinguishing Document Intelligence from other extraction options.

## Open questions

- The introduction does not specify exact SDK classes, REST endpoints, or response schema details. (SRC-117 L219–226)

## Sources

- SRC-117 — raw file: [[117-Introduction - Training - Microsoft Learn]]
