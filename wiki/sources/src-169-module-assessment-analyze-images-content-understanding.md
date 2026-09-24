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

The assessment asks about three practical discriminators — what grounding is for, what a 0.95 confidence score means, and which prebuilt analyzer fits receipts — and the capture shows no checked answers. (SRC-169 L209–224) The image-analysis unit teaches the answers: grounding shows where in the image each value was found, a confidence of 0.9 or more can be trusted for automated processing, and `prebuilt-receipt` extracts vendor names, items and totals from receipts. (SRC-8 L239; SRC-8 L245; SRC-8 L220)

## Key claims

- The assessment asks the purpose of grounding in Content Understanding. (SRC-169 L209)
- One listed option for grounding is identifying the specific content regions where each value was extracted. (SRC-169 L211)
- The assessment asks what a 0.95 confidence score indicates for an extracted field. (SRC-169 L214)
- One listed option for a 0.95 confidence score is that the value can be trusted for automated processing. (SRC-169 L216)
- The assessment asks which prebuilt analyzer extracts vendor names and item totals from a purchase receipt. (SRC-169 L219)
- The listed analyzer options are `prebuilt-image`, `prebuilt-invoice`, and `prebuilt-receipt`. (SRC-169 L220–222)

## How it works

This assessment does not teach a new procedure. Its questions and options cover grounding/source regions, confidence and automation/review, and receipt-extraction analyzer choices. (SRC-169 L209–222)

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
   **Answer:** not shown in capture; the unit teaches that grounding shows where each value was found. (SRC-8 L239)

2. **Question:** What does a confidence score of 0.95 indicate for an extracted field? (SRC-169 L214)  
   **Options:** The extraction failed and needs manual review; the value can be trusted for automated processing; the field was classified rather than extracted. (SRC-169 L215–217)  
   **Answer:** not shown in capture; the unit teaches that 0.9+ confidence can be trusted for automated processing. (SRC-8 L245)

3. **Question:** Which prebuilt analyzer would you use to extract vendor names and item totals from a purchase receipt? (SRC-169 L219)  
   **Options:** `prebuilt-image`; `prebuilt-invoice`; `prebuilt-receipt`. (SRC-169 L220–222)  
   **Answer:** not shown in capture; the unit lists `prebuilt-receipt` for vendor names, items and totals from receipts. (SRC-8 L220)

## Tensions, caveats and currency

- The raw capture includes option markers but does not include post-submit feedback text; the answers are inferred from the module's earlier teaching and the answer-bearing option text. (SRC-169 L209–225; SRC-8 L220; SRC-8 L239; SRC-8 L243–248)

## Relation to other sources

- [[src-8-analyze-images-content-understanding]] directly teaches the assessed concepts: grounding in `source`, confidence routing, and `prebuilt-receipt`. (SRC-8 L220; SRC-8 L239; SRC-8 L243–248; SRC-169 L209–222)
- [[src-264-what-is-content-understanding]] defines grounding and confidence scores in the broader component model. (SRC-264 L18; SRC-264 L22; SRC-169 L209–217)

## Connections

- [[content-understanding-analyzers]] — the assessment checks analyzer selection. (SRC-169 L219–222)
- [[azure-content-understanding]] — the assessment is about Content Understanding concepts. (SRC-169 L209–222)
- [[extraction-options-compared]] — receipt-vs-invoice-vs-image analyzer selection is a small extraction decision boundary. (SRC-169 L219–222)
- *Module units:* [[src-137-introduction-analyze-images-content-understanding|1 Introduction]] · [[src-264-what-is-content-understanding|2 What is Content Understanding-]] · [[src-8-analyze-images-content-understanding|3 Analyze images with Content Understanding]] · [[src-55-exercise-analyze-images-content-understanding|4 Exercise - Analyze images with Content Understanding]] · [[src-216-summary-analyze-images-content-understanding|6 Summary]] · [[src-9-analyze-images-content-understanding-episode-24|episode 24]] · [[src-7-analyze-documents-content-understanding-episode-25|episode 25]]

## Open questions

- The capture does not show checked-answer feedback after submission. (SRC-169 L223–225)

## Sources

- SRC-169 — raw file: [[169-Module assessment - Training - Microsoft Learn]]
