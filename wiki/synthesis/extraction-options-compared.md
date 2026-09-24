---
title: "Information extraction options compared"
type: synthesis
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Compares Content Understanding, Document Intelligence, Azure Language, vision-capable models, and AI Search enrichment for extraction."
area: extraction
source_ids: [SRC-8, SRC-10, SRC-12, SRC-29, SRC-30, SRC-40, SRC-52, SRC-93, SRC-94, SRC-96, SRC-117, SRC-126, SRC-165, SRC-168, SRC-224, SRC-249, SRC-251, SRC-263, SRC-264]
objectives: [P01, P02, G09, V10, V11, V13, T01, T02, I03, I04, I06, I07, I08]
objective_gaps: []
tags: []
aliases: []
---

# Information extraction options compared

## Summary

**Synthesis:** The extraction options separate by input and desired output: [[azure-document-intelligence]] is document OCR/layout/prebuilt/custom field extraction, [[azure-content-understanding]] is multimodal analyzer-based extraction to fields/JSON/markdown, [[azure-language]] extracts text-analysis signals such as language, entities and PII, [[ai-enrichment-skillsets]] runs extraction/enrichment during Azure AI Search indexing, and vision-capable generative models are for visual understanding rather than the structured analyzer workflows taught on this page (SRC-263 L217–224; SRC-264 L12–31; SRC-12 L217–220; SRC-52 L218–232).

## Scope and question

**Inference:** This page answers: when a scenario says *extract information*, which extraction service or pipeline should be selected, and which nearby option is only a preparation, enrichment, or broader reasoning layer?

## Synthesis

### Decision table

| **Synthesis:** Deciding detail | Content Understanding | Document Intelligence | Azure Language | AI Search enrichment skillset | Vision-capable / LLM prompting |
|---|---|---|---|---|---|
| Input | Documents, images, videos, audio and other content through analyzers (SRC-126 L214–216; SRC-264 L12). | Documents and forms, including PDFs/images/Office formats for document models (SRC-263 L217–245). | Text documents submitted to Language APIs (SRC-12 L217–235). | Source data during Azure AI Search indexing, including text/images in the indexer pipeline (SRC-52 L218–232). | Not covered by the extraction corpus as a full structured extraction service; use model-selection/vision pages for visual Q&A rather than inventing extraction guarantees. |
| Output | Schema-driven fields, confidence, grounding, markdown for search/RAG, JSON for automation (SRC-8 L232–248; SRC-264 L20–22). | OCR text, layout/tables/selection marks, prebuilt fields, custom field extraction, JSON with bounding boxes (SRC-249 L220–250; SRC-263 L217–224). | Language identifiers, entity categories, PII entities/redacted text (SRC-40 L217–229; SRC-93 L217–230; SRC-94 L217–225). | Enriched index fields such as language, entities, key phrases, translation, PII, OCR text, captions/tags, or custom skill output (SRC-52 L220–232). | **Inference:** Natural-language or multimodal model outputs; the corpus does not teach a stable field-schema contract on this option. |
| Best when | A reusable multimodal analyzer/schema is the contract for downstream automation, RAG or review (SRC-30 L216–243; SRC-264 L23–31). | The problem is document-only OCR/layout/forms, common prebuilt document types or business-specific form models (SRC-117 L217–223; SRC-249 L220–250; SRC-224 L217–235). | The text task is language detection, NER or PII redaction with categories/confidence/redacted output (SRC-12 L217–220). | Extraction must happen inside indexing so enriched fields land in a search index or knowledge store (SRC-52 L218–232). | **Inference:** A broader generative response is needed and structured extraction is not the load-bearing requirement. |
| Closest trap | Choosing Document Intelligence just because the input includes a document, when the scenario also includes image/audio/video analyzers (SRC-96 L229–232; SRC-264 L27–31). | Choosing Content Understanding for a standard invoice/read/layout/custom document model already covered by Document Intelligence (SRC-249 L230–250). | Choosing NER when privacy redaction is required, or choosing Translator for extraction (SRC-93 L217–230; SRC-94 L217–225). | Confusing indexing-time enrichment with query-time search/ranking (SRC-52 L218–232). | Filling missing extraction service details from general LLM knowledge; not covered by the corpus. |
| Corpus gaps | Full schema-method table and production limits are not covered (SRC-8 L223–248). | Full current prebuilt model list and production MLOps are not covered (SRC-249 L251–257; SRC-224 L248–256). | Full category taxonomy and redaction policy configuration are not covered (SRC-93 L225–226; SRC-94 L225). | Complete skillset JSON and custom skill HTTP contract are not covered (SRC-52 L218–232). | Structured extraction guarantees, rate-limit handling and eval recipes are not covered by these extraction sources. |

### Near-miss scenario contrasts

1. **Inference:** *A bank processes standard invoices and receipts and needs known fields.* Use Document Intelligence prebuilt models first because common document-type models extract standard business fields without training (SRC-249 L230–250). *The bank receives mixed PDFs, call recordings, site photos and videos and needs a single analyzer contract.* Use Content Understanding because it is explicitly multimodal and analyzer/schema based (SRC-126 L214–216; SRC-264 L12–31).
2. **Inference:** *A form layout is static across applications.* Use a custom template model because template models fit consistent visual layouts (SRC-224 L220–222). *Supplier forms vary by layout but labelled examples exist.* Use a custom neural model because neural models are described for structured, semi-structured and unstructured documents with varying layouts (SRC-224 L223–228).
3. **Inference:** *A news ingestion pipeline must tag people, organizations and places in article text.* Use Azure Language NER because the output is entity categories (SRC-93 L217–230; SRC-168 L213–216). *A testimonial publishing pipeline must hide emails and phone numbers.* Use Azure Language PII detection/redaction because the output is sensitive spans plus masked text (SRC-94 L217–225; SRC-168 L218–220).
4. **Inference:** *During search indexing, add OCR text from images and entity fields to the index.* Use AI enrichment skillsets because the indexer applies skills during enrichment and maps outputs into index fields (SRC-52 L218–232). *After indexing, improve which documents are returned for a user's query.* That is search/query/ranking, not extraction skillset configuration (SRC-52 L218–232).

## Evidence map

| **Synthesis:** Claim | Sources |
|---|---|
| Content Understanding is multimodal and analyzer-based, spanning documents/images/video/audio. | SRC-126 L214–216; SRC-264 L12–31 |
| Content Understanding outputs include markdown, fields, confidence and grounding. | SRC-8 L232–248; SRC-264 L20–22 |
| Document Intelligence is document-focused OCR/layout/prebuilt/custom extraction. | SRC-117 L217–223; SRC-263 L217–224 |
| Read, layout, prebuilt document models and custom models solve different document problems. | SRC-249 L220–250; SRC-224 L217–235 |
| Document Intelligence Studio supports analyze, prebuilt and custom workflows. | SRC-251 L217–241 |
| Azure Language covers language detection, NER and PII extraction/redaction in this corpus. | SRC-12 L217–220; SRC-40 L217–229; SRC-93 L217–230; SRC-94 L217–225 |
| AI Search skillsets enrich documents during indexing, including built-in and custom skills. | SRC-52 L218–232 |
| Foundry Tools overview separates Document Intelligence, Content Understanding, Language, Speech and Translator. | SRC-96 L223–233 |

## Tensions

- **Synthesis:** Document Intelligence and Content Understanding both process documents, but their corpus framing differs: Document Intelligence is a document model family; Content Understanding is a multimodal analyzer framework (SRC-263 L217–224; SRC-264 L12–31).
- **Inference:** A generative model can sometimes produce structured text, but this extraction comparison should not claim service guarantees the corpus does not teach. Use Content Understanding, Document Intelligence, Language or skillsets when the scenario requires stable extracted fields and confidence/grounding (SRC-8 L232–248; SRC-249 L220–250; SRC-93 L217–230).
- **Stale-risk:** File limits, model lists, analyzer deployment requirements and premium add-ons are time-sensitive in Document Intelligence and Content Understanding sources (SRC-263 L239–245; SRC-249 L251–257).

## Implications for the exam and for practice

- **Inference:** Exam cue *read/layout/tables/forms/invoices/custom classifier/composed model* points to Document Intelligence (SRC-249 L220–250; SRC-165 L215–229).
- **Inference:** Exam cue *analyzer, schema, markdown for RAG, confidence, grounding, documents/images/video/audio* points to Content Understanding (SRC-8 L232–248; SRC-264 L20–31).
- **Inference:** Exam cue *extract people/places/organizations, detect language, redact PII* points to Azure Language rather than a document or multimodal analyzer (SRC-40 L217–229; SRC-93 L217–230; SRC-94 L217–225).
- **Inference:** In practice, ask whether the source is text-only, document-only, multimodal, or already in an indexing pipeline; then ask whether the output must be categories, fields, markdown, redaction, or search-index enrichment (SRC-52 L218–232; SRC-96 L223–233).

## Open questions

- Hybrid RAG ingestion with OCR is named in objectives, but end-to-end production RAG ingestion flow, exact skillset JSON, analyzer API limits, and full prebuilt/custom model catalog coverage are not covered by the corpus (SRC-52 L218–232; SRC-249 L251–257).

## Sources

- SRC-8 — [[src-8-analyze-images-content-understanding]] — Content Understanding outputs, confidence and grounding.
- SRC-10 — [[src-10-analyze-text-azure-language-foundry-tools-episode-15]] — Azure Language episode and method cues.
- SRC-12 — [[src-12-azure-language-microsoft-foundry-tools]] — Language service capabilities.
- SRC-29 — [[src-29-create-content-understanding-analyzer]] — analyzer schema/API creation.
- SRC-30 — [[src-30-create-content-understanding-analyzer]] — Studio analyzer lifecycle.
- SRC-40 — [[src-40-detect-language]] — language detection.
- SRC-52 — [[src-52-enrich-extracted-data-ai-skills]] — Azure AI Search enrichment skillsets.
- SRC-93 — [[src-93-extract-entities]] — named entity recognition.
- SRC-94 — [[src-94-extract-personally-identifiable-information-pii]] — PII detection and redaction.
- SRC-96 — [[src-96-foundry-tools]] — Foundry Tools family boundary.
- SRC-117 — [[src-117-introduction-extract-data-azure-document-intelligence]] — Document Intelligence introduction.
- SRC-126 — [[src-126-introduction-create-multimodal-analysis-solution-azure-content-understanding]] — multimodal Content Understanding framing.
- SRC-165 — [[src-165-module-assessment-extract-data-azure-document-intelligence]] — Document Intelligence assessment boundaries.
- SRC-168 — [[src-168-module-assessment-analyze-text-azure-language-foundry-tools]] — Language assessment boundaries.
- SRC-224 — [[src-224-train-custom-models]] — custom Document Intelligence models.
- SRC-249 — [[src-249-prebuilt-models]] — prebuilt Document Intelligence models.
- SRC-251 — [[src-251-document-intelligence-studio]] — Studio workflows.
- SRC-263 — [[src-263-what-is-azure-document-intelligence]] — Document Intelligence service overview.
- SRC-264 — [[src-264-what-is-content-understanding]] — Content Understanding service overview.

