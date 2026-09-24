---
title: "Create a Content Understanding analyzer"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains the Studio workflow for defining schemas, testing them, and building Content Understanding analyzers."
area: extraction
source_ids: [SRC-30]
objectives: [I06, I08, V10, V12]
tags: [content-understanding, analyzers, schema, content-understanding-studio]
aliases: ["SRC-30"]
source_kind: learn-unit
module: "Create a multimodal analysis solution with Azure Content Understanding"
learning_path: "Extract insights from visual data on Azure"
unit: "3 of 7"
presenters: []
raw_file: "30-Create a Content Understanding analyzer - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/analyze-content-ai/03-create-analyzer"
ingest_depth: full
---

# Create a Content Understanding analyzer

*learn-unit · Create a multimodal analysis solution with Azure Content Understanding · unit 3 of 7 · SRC-30*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-30 |
| Raw file | 30-Create a Content Understanding analyzer - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Extract insights from visual data on Azure |
| Module | Create a multimodal analysis solution with Azure Content Understanding |
| Unit / episode | 3 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/analyze-content-ai/03-create-analyzer |
| Teaching content | L210–243 of 273 |
| Content length | ~613 words |
| Capture quality | High; prose workflow is intact. |
| Ingest depth | full |

## TL;DR

Content Understanding solutions center on analyzers trained to extract specific information from a particular content type according to a schema. (SRC-30 L214) The Studio workflow is: create a Foundry resource, define a schema, build an analyzer, and use it on new content. (SRC-30 L215–219)

## Key claims

- Content Understanding solutions are based on creating an analyzer trained for a particular content type and a schema-defined extraction target. (SRC-30 L214)
- The high-level process is to create a Foundry resource, define a schema, build an analyzer, and then use it to extract or generate fields from new content. (SRC-30 L215–219)
- The schema can be based on a content sample and analyzer template. (SRC-30 L216)
- Analyzer templates help developers create analyzers quickly. (SRC-30 L220)
- Because Content Understanding has generative AI capabilities, minimal training data can define a schema by example. (SRC-30 L220)
- The service can often identify data values in sample content that map to schema elements automatically. (SRC-30 L221)
- Developers can explicitly label fields in documents to improve analyzer performance. (SRC-30 L221)
- Content Understanding Studio provides a visual interface to create projects, define schemas, and build and test analyzers. (SRC-30 L222–223)
- Custom analyzer creation and testing should use Content Understanding Studio rather than only the limited prebuilt models available in Microsoft Foundry portal. (SRC-30 L225–226)
- Creating a Content Understanding project provisions supporting Azure resources, including storage and a key vault for credentials and keys. (SRC-30 L227)
- Schema templates and field types depend on the content type of the file used to define the schema. (SRC-30 L233)
- Analyzer testing returns extracted field values and the JSON output that client applications receive. (SRC-30 L237–238)
- Building an analyzer makes it accessible to client applications through the Microsoft Foundry resource endpoint. (SRC-30 L239–241)

## How it works

The source describes analyzers as schema-driven extraction assets. (SRC-30 L214) In Studio, a developer creates a project associated with a Microsoft Foundry resource, uploads a representative document, image, audio, or video file, applies a template, and defines fields for the analyzer to identify. (SRC-30 L227–233) Testing can happen during development and shows both extracted values and the JSON payload returned to client applications. (SRC-30 L237–238) Building the analyzer publishes it behind the associated Microsoft Foundry resource endpoint so applications can use it. (SRC-30 L239–241)

## Code and API patterns

The source states that a complete solution can be developed through the API or a language-specific SDK, but this unit focuses on Content Understanding Studio and does not show code. (SRC-30 L222–223)

## Key terms

- **Analyzer** — the Content Understanding artifact trained to extract specific information from a particular type of content. (SRC-30 L214)
- **Schema** — the definition of the information the analyzer will extract or generate from content. (SRC-30 L216–219)
- **Analyzer template** — a starting point that helps developers define an appropriate analyzer quickly. (SRC-30 L216; SRC-30 L220)
- **Content Understanding Studio** — the visual interface for project creation, schema definition, analyzer building, and analyzer testing. (SRC-30 L222–223)

## Decision boundaries and exam cues

- **Inference:** Choose Content Understanding Studio when a scenario asks for a visual interface to create a project, define a schema, and build or test a custom analyzer. (SRC-30 L222–226)
- **Inference:** Choose analyzer schema work when the scenario asks what fields should be extracted from content. (SRC-30 L214–219)
- **Inference:** The endpoint becomes relevant after the analyzer is built, because building makes it available to client applications through the associated Foundry resource endpoint. (SRC-30 L239–241)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** The source says Content Understanding schemas can only be created in supported Azure locations, so region support must be checked before implementation. (SRC-30 L228–229)
- The source distinguishes the Microsoft Foundry portal, where only certain prebuilt models are available, from Content Understanding Studio for custom analyzer creation and testing. (SRC-30 L225–226)
- Templates and field types vary by content type, so a schema pattern from one modality may not transfer unchanged to another. (SRC-30 L233–236)

## Relation to other sources

- [[src-262-what-is-azure-content-understanding]] identifies the modalities that can feed the analyzer workflow described here. (SRC-262 L219–230; SRC-30 L214–243)
- [[src-250-content-understanding-api]] starts after an analyzer has been built and shows how clients submit content to it. (SRC-30 L239–241; SRC-250 L216–233)
- [[src-7-analyze-documents-content-understanding-episode-25]] demonstrates similar Studio analyzer creation for invoices, slides, audio, and video. (SRC-30 L222–243; SRC-7 L281–939)
- [[src-29-create-content-understanding-analyzer]] overlaps on analyzer creation but belongs to the client-application module and emphasizes SDK/REST creation from JSON. (SRC-30 L222–243; SRC-29 L216–230)

## Connections

- [[content-understanding-analyzers]] — this source is a direct analyzer-building guide. (SRC-30 L214–243)
- [[azure-content-understanding]] — analyzers are the core Content Understanding solution artifact. (SRC-30 L214)
- [[microsoft-foundry]] — projects and analyzer endpoints are associated with Microsoft Foundry resources. (SRC-30 L215; SRC-30 L227; SRC-30 L239–241)
- [[content-understanding-client-apps]] — built analyzers become callable by client applications. (SRC-30 L239–241)
- [[extraction-options-compared]] — analyzer schemas are a key differentiator for structured multimodal extraction. (SRC-30 L214–219)

## Open questions

- The source does not show the exact schema JSON or API request for building an analyzer. (SRC-30 L222–243)
- The source points to product documentation for content-type-specific templates and options rather than enumerating them. (SRC-30 L233–236)

## Sources

- SRC-30 — raw file: [[30-Create a Content Understanding analyzer - Training - Microsoft Learn]]
