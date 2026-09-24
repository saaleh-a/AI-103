---
title: "Azure Document Intelligence"
type: entity
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Document-extraction service for OCR, layout, prebuilt document models, custom models, classifiers, and composed models."
area: extraction
source_ids: [SRC-52, SRC-54, SRC-96, SRC-117, SRC-165, SRC-220, SRC-224, SRC-249, SRC-251, SRC-263]
objectives: [I06]
tags: ["service"]
aliases: ["Document Intelligence", "Azure AI Document Intelligence", "Form Recognizer", "Document Intelligence Studio"]
---

# Azure Document Intelligence

## Summary

Azure Document Intelligence is the corpus's document-extraction service in Microsoft Foundry: it uses OCR and deep learning to extract text, key-value pairs, selection marks, tables, and structured data from documents (SRC-117 L215–217; SRC-263 L217–218). The service is taught as a model family: document analysis models, prebuilt models, and custom models (SRC-263 L220–224).

## What it is

The problem is manual document processing: claims, patient enrolment, receipts, invoices, tax forms, and operational documents still require humans to pull structured values from files (SRC-117 L215–216). Document Intelligence automates that extraction, returning bounding boxes and structured JSON that preserve relationships from the original document (SRC-263 L217–218).

**Synthesis:** The service sits in the extraction layer, not the generation layer: it turns documents into machine-readable structure that can later feed search, knowledge mining, RAG, summarization, or agent tools (SRC-52 L230; SRC-220 L223).

## What the sources say

- The introduction defines Document Intelligence as a Microsoft Foundry cloud service using OCR and deep learning for text, key-value pairs, tables, and structured data, with prebuilt, document-analysis, and custom model options (SRC-117 L217–223).
- The core unit says the service returns bounding boxes and structured JSON and avoids the need to build high-accuracy extraction models from scratch (SRC-263 L217–219).
- The Foundry Tools overview places Azure Document Intelligence inside Foundry Tools for extracting fields from complex documents such as invoices, receipts, and forms (SRC-96 L229–230).
- The module summary connects the service to other Foundry services, including Azure AI Search for knowledge mining and generative AI models for summarization (SRC-220 L217–223).

## Capabilities and components

- **Document analysis models:** read extracts text and languages; layout adds table and structure extraction (SRC-263 L221–222).
- **Prebuilt models:** extract information from common document types such as invoices, receipts, tax forms, and ID documents without training (SRC-263 L223; SRC-249 L230–231).
- **Custom models:** use your labelled datasets for business-specific forms; the corpus names custom template, custom neural, composed models, and custom classifiers (SRC-224 L217; SRC-263 L224).
- **Document Intelligence Studio:** a visual interface for analyzing layouts, extracting with prebuilt models, and training custom models (SRC-251 L217–223).
- **Integration path:** custom Azure AI Search skills can wrap Document Intelligence, passing indexer data into a model that extracts fields from forms (SRC-52 L230).

## How to use it

Document Intelligence can be accessed through REST APIs, client SDKs for Python, C#, Java, and JavaScript, Document Intelligence Studio, or the Microsoft Foundry portal (SRC-263 L225–230). To use it, the corpus says you need either a multi-service Foundry resource or a dedicated Azure Document Intelligence resource; it recommends the Foundry resource when you plan to use multiple Foundry tools and a dedicated resource for Document Intelligence only (SRC-263 L233–238).

Supported inputs include JPEG, PNG, BMP, PDF, and TIFF; the read model also accepts Microsoft Office formats (SRC-263 L239–241). The corpus gives size and dimension constraints, including 500 MB in standard tier, 4 MB in free tier, 50 x 50 to 10,000 x 10,000 pixel images, A3-size PDFs, and no password-protected PDFs (SRC-263 L240–245). **Stale-risk:** file-size and tier limits can change, so use these as corpus-era constraints rather than permanent platform guarantees.

## Decision boundaries

- Use **read** when you need words and lines from documents with no fixed or predictable structure (SRC-249 L220–223).
- **Inference:** Use **layout** when you need text plus tables, selection marks, structure, and optional key-value pairs; the assessment tests this exact boundary for varying-format documents with tables (SRC-249 L224–229; SRC-165 L215–219).
- Use **prebuilt document-type models** when Microsoft already covers the common document type; the corpus explicitly says to check for a prebuilt model before investing in custom model development (SRC-249 L249–250).
- **Inference:** Use **custom models** when prebuilt models do not cover the document type or the form is specific to the business (SRC-224 L217; SRC-263 L224).
- **Inference:** Compare with [[azure-content-understanding]] when the source content is broader than document extraction. This page's corpus evidence is document-centric; Content Understanding has its own analyzer pages for multimodal structured and markdown outputs.

## Naming and currency

The assigned corpus calls the service Azure Document Intelligence and also places it under Microsoft Foundry and Foundry Tools (SRC-117 L217; SRC-96 L229–230). The aliases retain older and adjacent names because the service historically appears near Form Recognizer and Azure AI Document Intelligence naming, but this page cites only the names found in the assigned corpus. **Stale-risk:** resource names, endpoints, model lists, add-on capabilities, and pricing are time-sensitive; the Studio unit also notes that some add-ons are premium features (SRC-251 L242–246).

## Appearances in the corpus

- Introductory unit and summary establish the module outcomes and service scope (SRC-117 L217–223; SRC-220 L217–223).
- The core service unit covers model categories, access paths, resources, and input requirements (SRC-263 L220–245).
- Studio, prebuilt, and custom units provide the operational paths (SRC-251 L217–241; SRC-249 L220–250; SRC-224 L217–258).
- Exercise and assessment pages show the corpus expects hands-on use of both prebuilt and custom models and exam-style discrimination between layout, custom artifacts, and composed/classifier routing (SRC-54 L213–219; SRC-165 L215–229).

## Connections

- [[document-intelligence-prebuilt-models]] — read, layout, and document-type prebuilt extraction.
- [[document-intelligence-custom-models]] — template, neural, classifier, and composed model workflow.
- [[foundry-tools]] — the broader Foundry Tools family that includes Document Intelligence.
- [[azure-ai-search]] — downstream knowledge-mining integration through custom skills.
- [[extraction-options-compared]] — compare extraction choices across Document Intelligence, Content Understanding, Language, and AI Search enrichment.
- [[src-263-what-is-azure-document-intelligence]] — primary source page for the service overview.
- *Also linked from:* [[ai-enrichment-skillsets]] · [[azure-functions]] · [[content-understanding-analyzers]] · [[content-understanding-client-apps]] · [[overview]]

## Sources

- SRC-52 — [[src-52-enrich-extracted-data-ai-skills]] — custom AI Search skill wrapping a Document Intelligence model.
- SRC-54 — [[src-54-exercise-analyze-documents-document-intelligence]] — hands-on exercise using prebuilt and custom models.
- SRC-96 — [[src-96-foundry-tools]] — Foundry Tools placement.
- SRC-117 — [[src-117-introduction-extract-data-azure-document-intelligence]] — module introduction and outcomes.
- SRC-165 — [[src-165-module-assessment-extract-data-azure-document-intelligence]] — assessment boundaries.
- SRC-220 — [[src-220-summary-extract-data-azure-document-intelligence]] — module summary and integrations.
- SRC-224 — [[src-224-train-custom-models]] — custom model workflow.
- SRC-249 — [[src-249-prebuilt-models]] — read, layout, and prebuilt model behavior.
- SRC-251 — [[src-251-document-intelligence-studio]] — Studio workflows.
- SRC-263 — [[src-263-what-is-azure-document-intelligence]] — service components, access, resources, and input requirements.
