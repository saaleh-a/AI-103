---
title: "Analyze images with Content Understanding"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains image analysis with Content Understanding, including prebuilt analyzers, schemas, API results, and confidence-score routing."
area: extraction
source_ids: [SRC-8]
objectives: []
tags: [content-understanding, image-analysis, prebuilt-analyzers, confidence-scores, grounding]
aliases: ["SRC-8"]
source_kind: learn-unit
module: "Analyze images with Content Understanding"
learning_path: null
unit: "3 of 6"
presenters: []
raw_file: "8-Analyze images with Content Understanding - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/analyze-images-with-content-understanding/3-analyze-images-with-content-understanding"
ingest_depth: full
---

# Analyze images with Content Understanding

*learn-unit · Analyze images with Content Understanding · unit 3 of 6 · SRC-8*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-8 |
| Raw file | 8-Analyze images with Content Understanding - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | null |
| Module | Analyze images with Content Understanding |
| Unit / episode | 3 of 6 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/analyze-images-with-content-understanding/3-analyze-images-with-content-understanding |
| Teaching content | L207–254 of 284 |
| Content length | ~417 words |
| Capture quality | Medium-high: main text is clear, but tables and code snippets are collapsed as placeholders. |
| Ingest depth | full |

## TL;DR

Content Understanding analyzes images to extract structured data, identify visual elements, and generate descriptions. (SRC-8 L213) The unit names common image analyzers, describes schema-driven extraction, and explains result fields: Markdown content, extracted fields with confidence scores, and source grounding. (SRC-8 L218–239)

## Key claims

- Content Understanding can analyze images to extract structured data, identify visual elements, and generate descriptions. (SRC-8 L213)
- Image analysis can use prebuilt analyzers for common scenarios or custom analyzers for specific needs. (SRC-8 L213)
- `prebuilt-image` provides general-purpose image analysis with content extraction and figure description. (SRC-8 L218–219)
- `prebuilt-receipt` extracts vendor names, items, totals, and dates from receipt images. (SRC-8 L220)
- `prebuilt-invoice` extracts invoice line items, amounts, and vendor information. (SRC-8 L221)
- `prebuilt-idDocument` extracts information from identity documents such as driver's licenses and passports. (SRC-8 L222)
- Analysis results include Markdown, schema-matching fields, confidence scores, and source grounding. (SRC-8 L236–239)

## How it works

The unit starts from an image and an analyzer choice. (SRC-8 L213; SRC-8 L218–222) If the goal is a common document-image scenario, a prebuilt analyzer can be selected; if the goal is specific information from an image, the user defines a field schema describing the desired data. (SRC-8 L218–224)

The source says image fields can use one of three extraction methods, but the captured table content is not present beyond the table placeholder. (SRC-8 L223–225)

The source then moves to the API pattern: install the Python SDK, submit a request to the analyze endpoint with an analyzer ID and image URL or file, and read extracted content after analysis completes. (SRC-8 L229–236)

Completed results include `markdown` for a text representation useful in search and RAG, `fields` for schema-matching extracted values with confidence scores, and `source` for grounding information showing where the image value was found. (SRC-8 L236–239)

Confidence scores are used as workflow signals: high confidence values can be processed automatically, medium confidence can be reviewed for critical use, and low confidence should be manually verified. (SRC-8 L243–248)

## Code and API patterns

The source names the Python SDK and an analyze endpoint request but the actual captured code blocks are represented only by language labels and `Copy` placeholders. (SRC-8 L229–235)

- Install the Python SDK before calling the service. (SRC-8 L229–232)
- Submit the analyzer ID and an image URL or file to the analyze endpoint. (SRC-8 L233–235)
- Read `markdown`, `fields`, and `source` from the completed result. (SRC-8 L236–239)

## Key terms

- **`prebuilt-image`** — general-purpose image analysis with content extraction and figure description. (SRC-8 L218–219)
- **`prebuilt-receipt`** — receipt-image extraction for vendor names, items, totals, and dates. (SRC-8 L220)
- **`prebuilt-invoice`** — invoice extraction for line items, amounts, and vendor information. (SRC-8 L221)
- **`prebuilt-idDocument`** — identity-document extraction for driver's licenses and passports. (SRC-8 L222)
- **`markdown`** — text representation of image content for search and RAG scenarios. (SRC-8 L236–237)
- **`fields`** — extracted field values matching the schema, with confidence scores. (SRC-8 L238)
- **`source`** — grounding information showing where a value was found in the image. (SRC-8 L239)

## Decision boundaries and exam cues

- **Inference:** Choose `prebuilt-receipt` when the scenario asks for vendor names, items, totals, and dates from receipt images. (SRC-8 L220)
- **Inference:** Choose `prebuilt-invoice` when the scenario asks for invoice details, line items, amounts, and vendor information. (SRC-8 L221)
- **Inference:** Choose `prebuilt-idDocument` when the input is an identity document such as a driver's license or passport. (SRC-8 L222)
- **Inference:** Route low-confidence extractions to manual review and high-confidence ones to automated processing. (SRC-8 L243–248)
- **Inference:** Improve image-analysis reliability by prioritizing higher resolution, visible text and elements, one clear subject, and upright orientation. (SRC-8 L249–253)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The supported-image-formats and extraction-method tables are collapsed in the capture, so this source does not preserve their entries. (SRC-8 L214–225)
- The source refers to code examples, but the captured code blocks are not included beyond language labels. (SRC-8 L226–235; SRC-8 L240–242)

## Relation to other sources

- [[src-264-what-is-content-understanding]] provides the general component model that this image unit applies. (SRC-264 L20–31; SRC-8 L213–248)
- [[src-55-exercise-analyze-images-content-understanding]] turns this unit into a portal-and-Python lab. (SRC-8 L229–239; SRC-55 L209)
- [[src-169-module-assessment-analyze-images-content-understanding]] assesses grounding, confidence scores, and receipt analyzer selection from this unit. (SRC-8 L220; SRC-8 L239; SRC-8 L243–248; SRC-169 L209–222)
- [[src-9-analyze-images-content-understanding-episode-24]] gives a live demo of building a schema with `description` and `tags`, then calling `client.begin_analyze`. (SRC-8 L223–239; SRC-9 L301–337; SRC-9 L413–421)

## Connections

- [[azure-content-understanding]] — the service used to analyze images. (SRC-8 L213)
- [[content-understanding-analyzers]] — prebuilt and custom analyzers are central to the unit. (SRC-8 L213; SRC-8 L218–224)
- [[content-understanding-client-apps]] — the source describes SDK installation, analyze requests, and results. (SRC-8 L229–239)
- [[retrieval-augmented-generation]] — Markdown output is positioned as useful for search and RAG. (SRC-8 L236–237)
- [[extraction-options-compared]] — the analyzer list supports extraction decision boundaries. (SRC-8 L218–222)

## Open questions

- The capture does not show the supported image input types table. (SRC-8 L214–216)
- The capture does not show the three extraction methods for image fields. (SRC-8 L223–225)
- The capture does not show the actual Python or JSON snippets. (SRC-8 L229–242)

## Sources

- SRC-8 — raw file: [[8-Analyze images with Content Understanding - Training - Microsoft Learn]]

