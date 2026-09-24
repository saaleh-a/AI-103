---
title: "Train and use custom models"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains custom template, neural, classifier, and composed Document Intelligence models and the training artifacts they require."
area: extraction
source_ids: [SRC-224]
objectives: [I06]
tags: [custom-models, template-models, neural-models, classifiers, composed-models]
aliases: ["SRC-224"]
source_kind: learn-unit
module: "Extract data with Azure Document Intelligence"
learning_path: "Extract insights from visual data on Azure"
unit: "5 of 8"
presenters: []
raw_file: "224-Train and use custom models - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/extract-data-with-document-intelligence/5-train-custom-models"
ingest_depth: full
---

# Train and use custom models

*learn-unit · Extract data with Azure Document Intelligence · unit 5 of 8 · SRC-224*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-224 |
| Raw file | 224-Train and use custom models - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Extract insights from visual data on Azure |
| Module | Extract data with Azure Document Intelligence |
| Unit / episode | 5 of 8 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/extract-data-with-document-intelligence/5-train-custom-models |
| Teaching content | L211–263 of 293 |
| Content length | ~633 words |
| Capture quality | High, with one collapsed comparison table and omitted code snippets |
| Ingest depth | full |

## TL;DR

Custom Document Intelligence models are for document types not covered by prebuilt models, using supervised learning over labeled sample documents. (SRC-224 L217) The unit distinguishes template models, neural models, classifiers, REST/SDK training artifacts, custom-model analysis, and composed models. (SRC-224 L219–258)

## Key claims

- Custom models apply when prebuilt models do not cover the specific document type. (SRC-224 L217)
- Supervised machine learning uses labeled sample documents, where the labels identify the fields to extract and the service trains a model to recognize those fields in new documents. (SRC-224 L217)
- Document Intelligence offers custom template models, custom neural models, and classification models. (SRC-224 L218–219)
- Template models rely on a consistent visual template and work best for structured forms with static layout, such as questionnaires, applications, or standard government forms. (SRC-224 L220–221)
- Neural models use deep learning, are fine-tuned on labeled data, and combine layout and language features for structured, semi-structured, and unstructured documents. (SRC-224 L223–224)
- Neural models support overlapping fields, signature detection, and table, row, and cell-level confidence. (SRC-224 L224–228)
- A classifier can identify document type before invoking an extraction model and route incoming documents to the right extraction model. (SRC-224 L234–235)
- A composed model combines multiple custom models and classifies the submitted document to select the best component model. (SRC-224 L257–258)

## How it works

Custom extraction begins with labeled sample documents. (SRC-224 L217) Template models use consistent visual layout; they extract labeled key-value pairs, selection marks, tables, regions, and signatures, train in only a few minutes, support more than 100 languages, and are described as fast and cost-effective for uniform layouts. (SRC-224 L221–222)

Neural models are fine-tuned on the user's labeled data and combine layout and language features, which makes them suitable for structured, semi-structured, and unstructured documents. (SRC-224 L223–224) They can deliver higher accuracy than template models, especially when layout varies, but take longer to train and consume more resources. (SRC-224 L228)

Training with REST or an equivalent SDK method requires sample forms in Azure Blob Storage with JSON layout and label information: an `ocr.json` per sample form, one `fields.json`, and a `labels.json` per sample form. (SRC-224 L237–244) The source also recommends at least five to six sample forms and says larger, more varied datasets improve accuracy. (SRC-224 L246–247)

## Code and API patterns

- The REST/SDK training path uses a Blob container containing sample forms and JSON artifacts. (SRC-224 L237–241)
- `ocr.json` is generated using the Analyze document function for each sample form. (SRC-224 L238–239)
- `fields.json` describes the fields to extract. (SRC-224 L240)
- `labels.json` maps fields to locations in each sample form. (SRC-224 L241)
- Training uses the Build model REST API function or equivalent SDK method, then the Get model REST API function retrieves the trained model ID. (SRC-224 L242–244)
- Extraction with a custom model calls Analyze document with the model ID, using either a supported SDK or REST API. (SRC-224 L248–249)
- A successful response includes an `analyzeResult` object with extracted content and pages information. (SRC-224 L256)

## Key terms

- **Custom template model** — a custom extraction model for consistent visual templates and static layouts. (SRC-224 L220–222)
- **Custom neural model** — a deep-learning custom extraction model fine-tuned on labeled data for more variable layouts. (SRC-224 L223–228)
- **Custom classifier** — a model that identifies document type before invoking an extraction model. (SRC-224 L234–235)
- **Composed model** — a combination of multiple custom models that classifies an input document and returns results from the selected component model. (SRC-224 L257–258)

## Decision boundaries and exam cues

- **Inference:** Start with a custom template model when documents have consistent visual layout because it is faster and cheaper to train. (SRC-224 L221–222; SRC-224 L232–233)
- **Inference:** Switch to a custom neural model when template accuracy is insufficient or document formats vary. (SRC-224 L228; SRC-224 L232–233)
- **Inference:** Use a custom classifier or composed-model approach when multiple document types need routing to different extraction models. (SRC-224 L234–235; SRC-224 L257–258)
- **Inference:** If an exam scenario mentions REST API training artifacts, look for `ocr.json`, `fields.json`, and `labels.json` with forms in Blob Storage. (SRC-224 L237–244)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The comparison table for choosing between template and neural models is collapsed in this capture, so this page relies on the surrounding prose rather than table details. (SRC-224 L229–233)
- The capture contains C# and Python copy markers but no visible code snippets, so no SDK example can be extracted from this source. (SRC-224 L250–255)

## Relation to other sources

- [[src-249-prebuilt-models]] advises checking prebuilt availability before investing in custom model development. (SRC-249 L249–250)
- [[src-251-document-intelligence-studio]] explains the visual custom-model workflow and automatic JSON generation. (SRC-251 L231–240)
- [[src-165-module-assessment-extract-data-azure-document-intelligence]] asks about REST API training artifacts and routing invoices and receipts to the correct extraction model. (SRC-165 L220–229)

## Connections

- [[azure-document-intelligence]] — service that trains and runs these models.
- [[document-intelligence-custom-models]] — primary custom-model concept.
- [[document-intelligence-prebuilt-models]] — prebuilt models are the first alternative to check.
- [[extraction-options-compared]] — custom template, neural, classifier, and composed models are decision points.
- [[development-tools-and-approaches]] — custom models can be trained through Studio or REST/SDK.

## Open questions

- The capture does not show the omitted C# or Python SDK code, even though language tabs appear. (SRC-224 L250–255)

## Sources

- SRC-224 — raw file: [[224-Train and use custom models - Training - Microsoft Learn]]
