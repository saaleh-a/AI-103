---
title: "Module assessment — Extract data with Azure Document Intelligence"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Assessment questions test layout-model choice, REST training artifacts, and routing among extraction models."
area: extraction
source_ids: [SRC-165]
objectives: [I06]
tags: [module-assessment, azure-document-intelligence, layout-model, custom-models]
aliases: ["SRC-165"]
source_kind: learn-unit
module: "Extract data with Azure Document Intelligence"
learning_path: "Extract insights from visual data on Azure"
unit: "7 of 8"
presenters: []
raw_file: "165-Module assessment - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/extract-data-with-document-intelligence/7-knowledge-check"
ingest_depth: full
---

# Module assessment — Extract data with Azure Document Intelligence

*learn-unit · Extract data with Azure Document Intelligence · unit 7 of 8 · SRC-165*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-165 |
| Raw file | 165-Module assessment - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Extract insights from visual data on Azure |
| Module | Extract data with Azure Document Intelligence |
| Unit / episode | 7 of 8 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/extract-data-with-document-intelligence/7-knowledge-check |
| Teaching content | L211–232 of 262 |
| Content length | ~196 words |
| Capture quality | High, but answers are not revealed in capture |
| Ingest depth | full |

## TL;DR

The assessment asks three Document Intelligence decision questions: model choice for text plus table structure, training artifacts for REST API custom model training, and routing invoices and receipts through a single endpoint. (SRC-165 L213–229) The capture shows questions and options but does not reveal checked answers. (SRC-165 L230–232)

## Key claims

- The assessment instructs the learner to choose the best response for each question. (SRC-165 L213–214)
- One question asks which model extracts text and table structure from varying-format documents without identifying specific labeled fields. (SRC-165 L215–219)
- One question asks which training artifacts are required when building a custom model with the REST API. (SRC-165 L220–224)
- One question asks what to use for a single endpoint that routes invoices and receipts to the correct extraction model. (SRC-165 L225–229)
- The capture requires all questions to be answered before checking work, but it does not show the checked results. (SRC-165 L230–232)

## How it works

The assessment turns the module's model taxonomy into scenario choices. (SRC-165 L215–229) It tests whether the learner can distinguish read, layout, and invoice models for structure extraction; identify REST custom-training artifacts; and select a routing approach for multiple document types. (SRC-165 L216–229)

## Code and API patterns

The assessment references REST API training artifacts for a custom model: sample forms with `ocr.json`, `labels.json`, and `fields.json` in a Blob container. (SRC-165 L220–224)

## Key terms

- **Read model** — offered as an option in the model-choice question. (SRC-165 L216–218)
- **Layout model** — offered as an option in the model-choice question. (SRC-165 L216–219)
- **Invoice model** — offered as an option in the model-choice question. (SRC-165 L216–219)
- **Composed model** — offered as part of an option for routing invoices and receipts. (SRC-165 L225–229)
- **Custom classifier** — offered as part of an option for routing invoices and receipts. (SRC-165 L225–229)

## Decision boundaries and exam cues

- **Inference:** The first question is testing whether table structure without labeled fields points to layout rather than read-only extraction or a document-type invoice model. (SRC-165 L216–219; SRC-249 L224–227)
- **Inference:** The second question is testing that REST API custom training needs sample forms plus `ocr.json`, `labels.json`, and `fields.json`, not only forms or 100 forms. (SRC-165 L220–224; SRC-224 L237–244)
- **Inference:** The third question is testing routing among multiple document types, which aligns with composed models or custom classifiers. (SRC-165 L225–229; SRC-224 L234–235; SRC-224 L257–258)

## Assessment items

1. Question: You need to extract text and table structure from varying-format documents and do not need specific labeled fields; options are the read model, the layout model, or the invoice model. Answer not shown in capture. (SRC-165 L215–219)
2. Question: When building a custom model with the REST API, options are only sample forms, sample forms with `ocr.json`, `labels.json`, and `fields.json`, or at least 100 labeled forms plus a classifier. Answer not shown in capture. (SRC-165 L220–224)
3. Question: A company processes invoices and receipts and wants a single endpoint that routes each document to the correct extraction model; options are a custom neural model, a prebuilt read model, or a composed model/custom classifier paired with extraction models. Answer not shown in capture. (SRC-165 L225–229)

## Tensions, caveats and currency

- The capture does not reveal the correct answers after submission, so this page records the options and labels any answer reasoning as inference. (SRC-165 L230–232)

## Relation to other sources

- [[src-249-prebuilt-models]] provides the evidence for read, layout, and prebuilt model distinctions used by question 1. (SRC-165 L216–219; SRC-249 L220–227)
- [[src-224-train-custom-models]] provides the evidence for training artifacts and routing approaches used by questions 2 and 3. (SRC-165 L220–229; SRC-224 L237–258)
- [[src-220-summary-extract-data-azure-document-intelligence]] follows this assessment and summarizes the module outcomes. (SRC-220 L217–223)

## Connections

- [[azure-document-intelligence]] — assessment topic.
- [[document-intelligence-prebuilt-models]] — read and layout model distinction.
- [[document-intelligence-custom-models]] — custom model artifacts, classifiers, and composed models.
- [[decision-boundaries]] — assessment questions are model-selection decision boundaries.

## Open questions

- The source does not show which answers Microsoft marks correct after submission. (SRC-165 L230–232)

## Sources

- SRC-165 — raw file: [[165-Module assessment - Training - Microsoft Learn]]
