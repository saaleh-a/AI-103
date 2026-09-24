---
title: "Document Intelligence prebuilt models"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Read, layout, and document-type models for extracting text, structure, and common business fields without custom training."
area: extraction
source_ids: [SRC-117, SRC-165, SRC-224, SRC-249, SRC-251, SRC-263]
objectives: [I06]
tags: []
aliases: ["prebuilt models", "read model", "layout model", "invoice model"]
---

# Document Intelligence prebuilt models

## Summary

Prebuilt models in Azure Document Intelligence extract data from common document types without training your own model (SRC-249 L230–231). The family includes document analysis models such as read and layout plus prebuilt models trained for specific forms such as invoices, receipts, tax forms, and ID documents (SRC-263 L221–223; SRC-251 L220–223).

## The problem it solves

Organizations often need information from standard document types but do not want to collect labelled samples, train models, or maintain custom extraction projects (SRC-117 L215–217; SRC-249 L249–250). Prebuilt models solve the first-pass extraction problem when the document type is common enough for Microsoft to have trained a model already (SRC-249 L230–231).

## Mental model

**Inference:** Think of prebuilt models as ready-made extractors. The read model extracts the text substrate; the layout model adds page structure; domain-specific prebuilt models recognize a fixed set of fields for known document types (SRC-249 L220–248).

## What the sources say

- The service overview says document analysis models extract text, structure, tables, and selection marks; read extracts text and language, and layout adds table and structure extraction (SRC-263 L221–222).
- The prebuilt unit says the read model is the foundation for text extraction in all other Document Intelligence models (SRC-249 L220–221).
- The same unit says the layout model extends read with selection marks, tables, structure, and optional key-value pairs (SRC-249 L224–225).
- Prebuilt document-type models extract fields from common business documents and include examples from financial/legal, tax, mortgage, and personal identification documents (SRC-249 L230–239).

## How it works in Azure

Use a Document Intelligence or Foundry Tools resource, open Document Intelligence Studio or call the service programmatically, select the model, provide the endpoint and key, upload or link a document, and review extracted fields and confidence scores (SRC-251 L224–230; SRC-263 L225–238). For multi-page PDF or TIFF files, the read model supports a `pages` request parameter to specify a page range (SRC-249 L220–222).

## Code and configuration

The corpus does not include a full prebuilt-model code listing in this unit. It does state that Document Intelligence is accessible through REST, Python, C#, Java, and JavaScript SDKs (SRC-263 L225–230). **Inference:** In an implementation lesson, the conceptually important pieces are the resource endpoint/credential, the selected model ID, the input document, and the analyze result containing extracted content and fields.

## Decision boundaries

- **Inference:** Use the read model for words and lines only; it extracts printed/handwritten text, detects language per line, and is ideal when structure is not fixed or predictable (SRC-249 L220–223).
- **Inference:** Use the layout model for text plus tables, selection marks, structure, or optional key-value pairs; it extends read with structural extraction and handles angled documents and complex tables (SRC-249 L224–229).
- **Inference:** Use a prebuilt document-type model for fixed fields from a common business document; form-specific models identify a fixed field set, such as `CustomerName` and `InvoiceTotal` for invoices (SRC-249 L242–248).
- **Inference:** Use a custom model for an industry-specific or unique form; prebuilt models cover common document types, while unique forms may need custom training (SRC-249 L249–250).

**Exam cue:** The assessment asks for the layout model when the task is to extract text and table structure from varying-format documents without identifying specific labelled fields (SRC-165 L215–219).

## Failure modes and misconceptions

- Treating read as a table extractor is too broad; read is for words and lines, while layout adds tables and structure (SRC-249 L220–226).
- Jumping straight to custom models wastes effort when a prebuilt model already covers the document type; the corpus explicitly says to check prebuilt coverage first (SRC-249 L249–250).
- Forgetting data protection: the ID document model extracts personal information, so the corpus warns to get permission and comply with applicable legal requirements (SRC-249 L238–241).
- **Stale-risk:** The general document model note is version-specific: the corpus says it was deprecated in the 2023-10-31-preview release and its key-value/entity functionality moved into layout and other features (SRC-249 L228–229).

## Solution Engineering transfer

**Inference:** A customer signal for prebuilt models is, *We process lots of standard invoices, receipts, or IDs and need the fields automatically*. A useful discovery question is, *Is this document type one Microsoft already has a model for, and do you need raw text, layout, or named business fields?* The trade-off is speed and no training versus less control over unusual fields (SRC-249 L230–250).

## Connections

- [[azure-document-intelligence]] — the service that hosts the prebuilt models.
- [[document-intelligence-custom-models]] — the alternative when prebuilt coverage is insufficient.
- [[content-understanding-analyzers]] — adjacent extraction option for structured/markdown outputs.
- [[extraction-options-compared]] — broader decision boundary for extraction services.
- [[src-249-prebuilt-models]] — primary source page for this concept.
- *Also linked from:* [[overview]]

## Sources

- SRC-117 — [[src-117-introduction-extract-data-azure-document-intelligence]] — module purpose and outcomes.
- SRC-165 — [[src-165-module-assessment-extract-data-azure-document-intelligence]] — assessment cue for layout vs read.
- SRC-224 — [[src-224-train-custom-models]] — custom-model alternative when prebuilt models do not fit.
- SRC-249 — [[src-249-prebuilt-models]] — read, layout, and prebuilt document-type behavior.
- SRC-251 — [[src-251-document-intelligence-studio]] — Studio workflow for prebuilt analysis.
- SRC-263 — [[src-263-what-is-azure-document-intelligence]] — service model categories and access paths.

## Open questions

- The corpus does not enumerate the full current list of prebuilt models; it points to Learn pages for the model-specific list (SRC-249 L251–257).

