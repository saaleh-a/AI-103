---
title: "Document Intelligence custom models"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Training labelled template or neural extraction models, using classifiers, and composing models for multiple document types."
area: extraction
source_ids: [SRC-54, SRC-165, SRC-224, SRC-249, SRC-251, SRC-263]
objectives: [I06]
tags: []
aliases: ["custom template model", "custom neural model", "composed model", "custom classifier"]
---

# Document Intelligence custom models

## Summary

Custom Document Intelligence models are supervised extraction models for business-specific forms: you label sample documents with target fields, and the service trains a model to recognize those fields in new documents (SRC-224 L217). The corpus names custom template models, custom neural models, custom classifiers, and composed models (SRC-224 L218–235; SRC-224 L257–258).

## The problem it solves

Prebuilt models cover common document types, but organizations also have industry-specific or unique forms (SRC-249 L249–250). Custom models solve that gap by learning from the organization's labelled examples rather than relying on Microsoft's common document-type models (SRC-224 L217; SRC-263 L224).

## Mental model

A custom extraction model is a trained field recognizer. You provide examples, labels, and layout information; Document Intelligence learns where the fields appear and how to extract them from new documents (SRC-224 L217; SRC-224 L236–247).

## What the sources say

- The service overview frames custom models as a category for extracting data from business-specific forms using your labelled datasets (SRC-263 L224).
- The custom-model unit says Document Intelligence supports two custom extraction model types plus a classification model (SRC-224 L217–219).
- Studio can build, label, train, and test custom extraction models and classifiers through a visual interface (SRC-251 L220–223).
- The exercise has learners analyze documents using both a prebuilt model and a custom model, but the detailed lab steps are not in the corpus (SRC-54 L213–217).

## How it works in Azure

### Custom template models

Template models rely on a consistent visual template and work best for structured forms where layout is static across instances, such as questionnaires, applications, or standard government forms (SRC-224 L220–221). They extract labelled key-value pairs, selection marks, tables, regions, and signatures; the corpus says training takes only a few minutes and more than 100 languages are supported (SRC-224 L222).

### Custom neural models

Neural models use deep learning fine-tuned on labelled data and combine layout and language features to extract fields from structured, semi-structured, and unstructured documents (SRC-224 L223–224). The corpus says they support overlapping fields, signature detection, and table/row/cell confidence, and that they can be more accurate for varying layouts but take longer and consume more resources (SRC-224 L224–228).

### Custom classifiers and composed models

A custom classifier identifies the document type before invoking an extraction model; this is useful when incoming documents include multiple form types (SRC-224 L234–235). A composed model combines multiple custom models; when a document is submitted, Document Intelligence classifies it, chooses the most appropriate component model, and returns that model's extraction results (SRC-224 L257–258).

## Code and configuration

For REST API or SDK training, the corpus lists required training artifacts in Azure Blob Storage: sample forms, an `ocr.json` for each sample, a single `fields.json`, and a `labels.json` for each sample (SRC-224 L236–244). The assessment reinforces that the required REST API training artifacts are sample forms plus `ocr.json`, `labels.json`, and `fields.json` in a blob container (SRC-165 L221–224).

The training path also requires a SAS URL for the container, a Build model REST API call or SDK equivalent, and a Get model REST API call to retrieve the trained model ID (SRC-224 L242–244). To use the custom model, call the Analyze document function with the model ID by SDK or REST API; a successful response contains an `analyzeResult` with extracted content and pages (SRC-224 L248–256).

Studio is an alternative workflow: it can generate `ocr.json`, `labels.json`, and `fields.json` automatically after you upload at least five to six sample forms, configure CORS, link storage and a Document Intelligence resource, label fields, train, review metrics, and test on a new document (SRC-251 L231–241).

## Decision boundaries

- **Inference:** Use a custom template model for a uniform visual layout; the deciding detail is a static form layout and faster, cheaper training (SRC-224 L220–233).
- **Inference:** Use a custom neural model for semi-structured or varying layouts; the deciding detail is higher accuracy for varying formats at the cost of longer training and more resources (SRC-224 L223–228).
- **Inference:** Use a custom classifier or composed model when multiple form types enter one pipeline and the system must route each document to the right extraction model (SRC-224 L234–235; SRC-165 L225–229).
- Check prebuilt models first for common invoice, receipt, ID, or tax forms before building a custom model (SRC-249 L249–250).

**Exam cue:** The module assessment asks for a composed model or custom classifier when a company processes both invoices and receipts and wants one endpoint that routes each document to the correct extraction model (SRC-165 L225–229).

## Failure modes and misconceptions

- Training without the JSON artifacts is not the REST API path described by the corpus; it requires forms plus `ocr.json`, `labels.json`, and `fields.json` (SRC-224 L236–244; SRC-165 L221–224).
- Using a neural model by default ignores the corpus's guidance to start with a template model when the layout is consistent and switch if accuracy is insufficient or formats vary (SRC-224 L232–233).
- Confusing composed models with a single extraction model misses the routing behavior: composed models classify the submitted document to choose the component model (SRC-224 L257–258).
- **Stale-risk:** The five-to-six sample guidance, language support, and cost/resource trade-offs are corpus-era training details and should be checked against current product docs for production planning (SRC-224 L222; SRC-224 L246–247).

## Solution Engineering transfer

**Inference:** Customer signal: *Our forms are specific to our business and the invoice model misses the fields we need*. Discovery question: *Are the forms visually consistent, or does the format vary by supplier, region, or submission channel?* Trade-off: template models are faster and cheaper for uniform layouts; neural models may improve accuracy on varying layouts but cost more time and resources (SRC-224 L220–233).

## Connections

- [[azure-document-intelligence]] — the service that trains and runs custom models.
- [[document-intelligence-prebuilt-models]] — the first alternative to check before custom training.
- [[azure-functions]] — custom skills can wrap Document Intelligence from AI Search pipelines.
- [[extraction-options-compared]] — compare custom Document Intelligence with other extraction approaches.
- [[src-224-train-custom-models]] — primary source page for this concept.
- *Also linked from:* [[overview]]

## Sources

- SRC-54 — [[src-54-exercise-analyze-documents-document-intelligence]] — exercise using prebuilt and custom models.
- SRC-165 — [[src-165-module-assessment-extract-data-azure-document-intelligence]] — assessment boundaries for artifacts and routing.
- SRC-224 — [[src-224-train-custom-models]] — custom template, neural, classifier, composed, and REST/SDK workflow.
- SRC-249 — [[src-249-prebuilt-models]] — prebuilt-vs-custom boundary.
- SRC-251 — [[src-251-document-intelligence-studio]] — visual custom model workflow.
- SRC-263 — [[src-263-what-is-azure-document-intelligence]] — custom model category in service overview.

## Open questions

- The corpus does not include the full C# or Python code blocks for custom model analysis; the captured page only preserves language tabs and the response description (SRC-224 L248–256).

