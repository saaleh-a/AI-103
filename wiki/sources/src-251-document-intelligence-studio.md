---
title: "Use the Document Intelligence Studio"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains Document Intelligence Studio as the visual interface for testing, labeling, training, and reviewing document models."
area: extraction
source_ids: [SRC-251]
objectives: [I06]
tags: [document-intelligence-studio, visual-tooling, custom-models, prebuilt-models]
aliases: ["SRC-251"]
source_kind: learn-unit
module: "Extract data with Azure Document Intelligence"
learning_path: "Extract insights from visual data on Azure"
unit: "3 of 8"
presenters: []
raw_file: "251-Use the Document Intelligence Studio - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/extract-data-with-document-intelligence/3-use-document-intelligence-studio"
ingest_depth: full
---

# Use the Document Intelligence Studio

*learn-unit · Extract data with Azure Document Intelligence · unit 3 of 8 · SRC-251*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-251 |
| Raw file | 251-Use the Document Intelligence Studio - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Extract insights from visual data on Azure |
| Module | Extract data with Azure Document Intelligence |
| Unit / episode | 3 of 8 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/extract-data-with-document-intelligence/3-use-document-intelligence-studio |
| Teaching content | L211–249 of 279 |
| Content length | ~402 words |
| Capture quality | High |
| Ingest depth | full |

## TL;DR

Document Intelligence Studio is the online visual tool for exploring, understanding, and integrating Document Intelligence features. (SRC-251 L217–218) It supports document analysis models, prebuilt models, and custom models, including workflows for labeling, training, testing, and automatic generation of training artifact files. (SRC-251 L220–240)

## Key claims

- The Studio can analyze form layouts, extract data from prebuilt models, and train custom models through a visual interface. (SRC-251 L217)
- It supports document analysis projects for testing read and layout models against documents to see extracted text, tables, and structure. (SRC-251 L220–221)
- It supports prebuilt-model analysis for available models such as invoices, receipts, ID documents, and tax forms. (SRC-251 L222)
- It supports custom model projects for building, labeling, training, and testing custom extraction models and custom classifiers. (SRC-251 L223)
- For custom projects, Studio generates `ocr.json`, `labels.json`, and `fields.json` automatically. (SRC-251 L231–232)
- Some add-on capabilities are premium features and can incur extra costs. (SRC-251 L242–246)

## How it works

The Studio is a visual front end for several Document Intelligence workflows. (SRC-251 L217) For prebuilt analysis, the user creates an Azure Document Intelligence or Foundry Tools resource, opens the Studio, selects a prebuilt model, provides endpoint and key, uploads a document or URL, and reviews extracted fields and confidence scores. (SRC-251 L224–230)

For custom model projects, the Studio covers the full labeling, training, and testing process without manually creating JSON training files. (SRC-251 L231–232) The high-level workflow is to create a resource, upload at least five to six sample forms to Azure Blob Storage, configure CORS so Studio can access the container, create a project linked to the storage container and resource, label fields, train the model, review accuracy metrics, and test on a new document. (SRC-251 L233–240)

## Code and API patterns

Studio reduces manual file handling for custom models by generating `ocr.json`, `labels.json`, and `fields.json` automatically. (SRC-251 L231–232) It still uses resource endpoint and key information for prebuilt-model analysis. (SRC-251 L224–230)

## Key terms

- **Document Intelligence Studio** — an online tool for visually exploring, understanding, and integrating Document Intelligence features. (SRC-251 L217)
- **Document analysis models** — Studio project type for testing read and layout models against documents. (SRC-251 L220–221)
- **Prebuilt models** — Studio project type for analyzing documents using available prebuilt models. (SRC-251 L222)
- **Custom models** — Studio project type for building, labeling, training, and testing custom extraction models and classifiers. (SRC-251 L223)
- **CORS** — storage-container setting required so the Studio can access the container during custom-model projects. (SRC-251 L235–237)

## Decision boundaries and exam cues

- **Inference:** Choose Studio when the scenario emphasizes visual exploration, visual labeling, testing models, or avoiding manual JSON-file creation. (SRC-251 L217; SRC-251 L231–232)
- **Inference:** A prebuilt-model Studio workflow requires a resource, selected model, endpoint/key, document upload or URL, and review of fields and confidence scores. (SRC-251 L224–230)
- **Inference:** A custom-model Studio workflow requires sample forms in Blob Storage, CORS, linked resources, labeling, training, accuracy review, and testing with a held-out document. (SRC-251 L233–240)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source names both Azure Document Intelligence and Foundry Tools resources as usable in the Studio workflow. (SRC-251 L224–228; SRC-251 L233–237)
- **Stale-risk:** The Studio URL and premium add-on capability costs are operational details that should be checked against current documentation before implementation. (SRC-251 L218; SRC-251 L242–246)

## Relation to other sources

- [[src-263-what-is-azure-document-intelligence]] lists Studio as one access path for Document Intelligence. (SRC-263 L225–230)
- [[src-249-prebuilt-models]] supplies the read, layout, and prebuilt-model concepts that Studio can test. (SRC-251 L220–222; SRC-249 L217–250)
- [[src-224-train-custom-models]] explains the alternative REST API or SDK custom-training workflow referenced by this unit. (SRC-251 L241; SRC-224 L237–249)

## Connections

- [[azure-document-intelligence]] — Studio is the visual tool for this service.
- [[document-intelligence-prebuilt-models]] — Studio can analyze documents with prebuilt models.
- [[document-intelligence-custom-models]] — Studio can build and train custom models.
- [[development-tools-and-approaches]] — Studio is the portal-style visual approach.
- [[quotas-rate-limits-and-cost]] — premium add-on capabilities can affect cost.

## Open questions

- The capture does not enumerate the optional add-on capabilities; the table content is collapsed as `Expand table`. (SRC-251 L242–244)

## Sources

- SRC-251 — raw file: [[251-Use the Document Intelligence Studio - Training - Microsoft Learn]]
