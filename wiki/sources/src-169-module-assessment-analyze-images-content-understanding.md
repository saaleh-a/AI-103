---
title: "Module assessment — Analyze images with Content Understanding"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Assessment questions check grounding, confidence-score interpretation, and choosing the receipt prebuilt analyzer."
area: extraction
source_ids: [SRC-169]
objectives: []
tags: [content-understanding, assessment, grounding, confidence-scores, prebuilt-receipt]
aliases: ["SRC-169"]
source_kind: learn-unit
module: "Analyze images with Content Understanding"
learning_path: null
unit: "5 of 6"
presenters: []
raw_file: "169-Module assessment - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/analyze-images-with-content-understanding/5-knowledge-check"
ingest_depth: full
---

# Module assessment — Analyze images with Content Understanding

*learn-unit · Analyze images with Content Understanding · unit 5 of 6 · SRC-169*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-169 |
| Raw file | 169-Module assessment - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | null |
| Module | Analyze images with Content Understanding |
| Unit / episode | 5 of 6 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/analyze-images-with-content-understanding/5-knowledge-check |
| Teaching content | L207–225 of 255 |
| Content length | ~134 words |
| Capture quality | High: assessment text and options are captured; answers are implied by option markers/order but no checked-answer feedback is shown. |
| Ingest depth | full |

## TL;DR

The assessment checks three practical discriminators: grounding means locating where extracted values came from, a 0.95 confidence score supports automated processing, and receipt data should use `prebuilt-receipt`. (SRC-169 L209–222)

## Key claims

- The assessment asks the purpose of grounding in Content Understanding. (SRC-169 L209)
- One listed answer for grounding is identifying the specific content regions where each value was extracted. (SRC-169 L211)
- The assessment asks what a 0.95 confidence score indicates for an extracted field. (SRC-169 L214)
- One listed answer for a 0.95 confidence score is that the value can be trusted for automated processing. (SRC-169 L216)
- The assessment asks which prebuilt analyzer extracts vendor names and item totals from a purchase receipt. (SRC-169 L219)
- The listed analyzer options are `prebuilt-image`, `prebuilt-invoice`, and `prebuilt-receipt`. (SRC-169 L220–222)

## How it works

This assessment does not teach a new procedure. It validates whether the learner can map module concepts to choices: grounding maps to source regions, confidence maps to automation or review, and receipt extraction maps to the receipt analyzer. (SRC-169 L209–222)

## Code and API patterns

Not covered by this source.

## Key terms

- **Grounding** — assessed through the option that identifies the specific regions where extracted values were found. (SRC-169 L209–212)
- **Confidence score** — assessed through a 0.95 extracted-field score. (SRC-169 L214–217)
- **`prebuilt-receipt`** — one of the analyzer choices for receipt extraction. (SRC-169 L219–222)

## Decision boundaries and exam cues

- **Inference:** If a question asks where an extracted value came from in the content, the deciding concept is grounding. (SRC-169 L209–212)
- **Inference:** If a confidence score is very high, such as 0.95, the assessment points to automated processing rather than manual review. (SRC-169 L214–217)
- **Inference:** If the artifact is a purchase receipt and the fields are vendor names and item totals, the analyzer choice is `prebuilt-receipt`. (SRC-169 L219–222)

## Assessment items

1. **Question:** What is the purpose of grounding in Content Understanding? (SRC-169 L209)  
   **Options:** To connect Content Understanding to Azure storage; to identify the specific regions in content where each value was extracted; to filter out harmful content from images. (SRC-169 L210–212)  
   **Answer shown in capture:** The capture lists the region-identification option as the answer-bearing choice for the module concept. (SRC-169 L209–212)

2. **Question:** What does a confidence score of 0.95 indicate for an extracted field? (SRC-169 L214)  
   **Options:** The extraction failed and needs manual review; the value can be trusted for automated processing; the field was classified rather than extracted. (SRC-169 L215–217)  
   **Answer shown in capture:** The capture lists automated processing as the answer-bearing choice for a 0.95 score. (SRC-169 L214–217)

3. **Question:** Which prebuilt analyzer would you use to extract vendor names and item totals from a purchase receipt? (SRC-169 L219)  
   **Options:** `prebuilt-image`; `prebuilt-invoice`; `prebuilt-receipt`. (SRC-169 L220–222)  
   **Answer shown in capture:** The capture lists `prebuilt-receipt` as the answer-bearing choice for receipt extraction. (SRC-169 L219–222)

## Tensions, caveats and currency

- The raw capture includes option markers but does not include post-submit feedback text; the answers are inferred from the module's earlier teaching and the answer-bearing option text. (SRC-169 L209–225; SRC-8 L220; SRC-8 L239; SRC-8 L243–248)

## Relation to other sources

- [[src-8-analyze-images-content-understanding]] directly teaches the assessed concepts: grounding in `source`, confidence routing, and `prebuilt-receipt`. (SRC-8 L220; SRC-8 L239; SRC-8 L243–248; SRC-169 L209–222)
- [[src-264-what-is-content-understanding]] defines grounding and confidence scores in the broader component model. (SRC-264 L18; SRC-264 L22; SRC-169 L209–217)

## Connections

- [[content-understanding-analyzers]] — the assessment checks analyzer selection. (SRC-169 L219–222)
- [[azure-content-understanding]] — the assessment is about Content Understanding concepts. (SRC-169 L209–222)
- [[extraction-options-compared]] — receipt-vs-invoice-vs-image analyzer selection is a small extraction decision boundary. (SRC-169 L219–222)

## Open questions

- The capture does not show checked-answer feedback after submission. (SRC-169 L223–225)

## Sources

- SRC-169 — raw file: [[169-Module assessment - Training - Microsoft Learn]]

