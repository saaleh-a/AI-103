---
title: "Use prebuilt models"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains read, layout, and document-type prebuilt models, including when to prefer prebuilt over custom models."
area: extraction
source_ids: [SRC-249]
objectives: [I06]
tags: [prebuilt-models, read-model, layout-model, document-intelligence]
aliases: ["SRC-249"]
source_kind: learn-unit
module: "Extract data with Azure Document Intelligence"
learning_path: "Extract insights from visual data on Azure"
unit: "4 of 8"
presenters: []
raw_file: "249-Use prebuilt models - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/extract-data-with-document-intelligence/4-use-prebuilt-models"
ingest_depth: full
---

# Use prebuilt models

*learn-unit · Extract data with Azure Document Intelligence · unit 4 of 8 · SRC-249*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-249 |
| Raw file | 249-Use prebuilt models - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Extract insights from visual data on Azure |
| Module | Extract data with Azure Document Intelligence |
| Unit / episode | 4 of 8 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/extract-data-with-document-intelligence/4-use-prebuilt-models |
| Teaching content | L211–257 of 287 |
| Content length | ~597 words |
| Capture quality | High, with collapsed model-list tables |
| Ingest depth | full |

## TL;DR

Prebuilt models extract data from common form types without training a custom model. (SRC-249 L217) The unit distinguishes the read model for text, the layout model for structure, and domain-specific prebuilt models for common business documents, then recommends checking prebuilt coverage before investing in custom development. (SRC-249 L220–250)

## Key claims

- Microsoft trains prebuilt models on large numbers of sample documents, supporting accurate and reliable results for standard document types. (SRC-249 L217)
- The read model extracts printed and handwritten text, detects the language of each text line, and classifies text as handwritten or printed. (SRC-249 L220–221)
- The read model is the foundation for text extraction in all other Document Intelligence models. (SRC-249 L221)
- For multi-page PDF or TIFF files, the `pages` parameter can specify a page range for analysis. (SRC-249 L222)
- The layout model extends read with selection marks, tables, document structure, and optional `keyValuePairs`. (SRC-249 L224–225)
- Prebuilt features include text extraction, key-value pairs, selection marks, tables, and fixed fields for specific form types. (SRC-249 L242–248)
- If a form is industry-specific or unique, a custom model might be more accurate, but custom models require time and sample data to train. (SRC-249 L249–250)

## How it works

The source presents document analysis models as the foundation under domain-specific prebuilt models. (SRC-249 L217–219) The read model handles words and lines in printed or handwritten text, detects line language, classifies handwriting versus print, and can limit analysis to a page range for multi-page PDF or TIFF inputs. (SRC-249 L220–223)

The layout model builds on read by detecting selection marks, tables, document structure, and optional key-value pairs. (SRC-249 L224–225) It is described as handling practical digitization problems such as angled documents, merged table cells, and incomplete rows, with table cells returned along with content, bounding boxes, and row/column indexes. (SRC-249 L226–227)

Domain-specific prebuilt models are trained for document types such as financial/legal documents, US tax documents, US mortgage documents, and personal identification documents, though the capture collapses the detailed tables. (SRC-249 L230–239)

## Code and API patterns

- Use the `pages` parameter to specify a page range when analyzing multi-page PDF or TIFF files with the read model. (SRC-249 L222)
- The layout model supports an optional `keyValuePairs` feature for key-value extraction. (SRC-249 L224–225)
- Table extraction returns cell content, bounding-box position, and row/column indexes. (SRC-249 L226)

## Key terms

- **Read model** — extracts printed and handwritten text, detects line language, and classifies handwriting versus print. (SRC-249 L220–221)
- **Layout model** — extends text extraction with selection marks, tables, structure, and optional key-value pairs. (SRC-249 L224–225)
- **Selection marks** — checkboxes and radio buttons, including selected state, bounding box, and confidence. (SRC-249 L227; SRC-249 L246)
- **Fields** — fixed form-type outputs identified by models trained for a specific form type, such as `CustomerName` and `InvoiceTotal` for invoices. (SRC-249 L248)

## Decision boundaries and exam cues

- **Inference:** Use the read model when the requirement is words and lines from documents without fixed or predictable structure. (SRC-249 L220–223)
- **Inference:** Use the layout model when the requirement includes table structure, selection marks, document structure, or key-value pairs without identifying specific labeled business fields. (SRC-249 L224–227)
- **Inference:** Use a document-type prebuilt model when the form matches a supported common business document and fixed fields are needed. (SRC-249 L230–248)
- **Inference:** Before building a custom model, check whether a prebuilt model exists for the scenario. (SRC-249 L249–250)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The general document model was deprecated in the 2023-10-31-preview release, with key-value and entity extraction functionality incorporated into the layout model and other features. (SRC-249 L228–229)
- The ID document model extracts personal information covered by data-protection laws in most jurisdictions, so permission and legal compliance are required before storing the data. (SRC-249 L240–241)
- The detailed prebuilt-model lists are collapsed in this capture as `Expand table`, so this page cannot enumerate them from source evidence. (SRC-249 L232–239)

## Relation to other sources

- [[src-263-what-is-azure-document-intelligence]] introduces document analysis, prebuilt, and custom model categories before this unit expands them. (SRC-263 L221–224)
- [[src-251-document-intelligence-studio]] describes using Studio to analyze documents with prebuilt models. (SRC-251 L224–230)
- [[src-224-train-custom-models]] expands the custom-model alternative that this unit recommends only when prebuilt models do not fit. (SRC-249 L249–250; SRC-224 L217–258)
- [[src-165-module-assessment-extract-data-azure-document-intelligence]] includes an assessment scenario asking for a model that extracts text and table structure without labeled fields. (SRC-165 L215–219)

## Connections

- [[azure-document-intelligence]] — service that hosts these models.
- [[document-intelligence-prebuilt-models]] — primary concept for read, layout, and document-type prebuilt models.
- [[document-intelligence-custom-models]] — alternative when prebuilt coverage is insufficient.
- [[extraction-options-compared]] — prebuilt vs custom is a core extraction decision.
- [[naming-and-currency]] — general document model deprecation is a currency note.
- *Module units:* [[src-117-introduction-extract-data-azure-document-intelligence|1 Introduction]] · [[src-263-what-is-azure-document-intelligence|2 What is Azure Document Intelligence-]] · [[src-251-document-intelligence-studio|3 Use the Document Intelligence Studio]] · [[src-224-train-custom-models|5 Train and use custom models]] · [[src-54-exercise-analyze-documents-document-intelligence|6 Exercise - Analyze documents with Document Intelligence]] · [[src-165-module-assessment-extract-data-azure-document-intelligence|7 Module assessment]] · [[src-220-summary-extract-data-azure-document-intelligence|8 Summary]]

## Open questions

- Which exact financial, legal, tax, mortgage, and identification models are in the collapsed tables is not visible in this capture. (SRC-249 L230–239)

## Sources

- SRC-249 — raw file: [[249-Use prebuilt models - Training - Microsoft Learn]]
