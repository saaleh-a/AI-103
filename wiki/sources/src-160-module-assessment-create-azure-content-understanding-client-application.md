---
title: "Module assessment — Create an Azure Content Understanding client application"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Assessment questions for Content Understanding client setup, analyzer selection, and typed field results."
area: extraction
source_ids: [SRC-160]
objectives: []
tags: [content-understanding, assessment, endpoint, analyzer, extracted-fields]
aliases: ["SRC-160"]
source_kind: learn-unit
module: "Create an Azure Content Understanding client application"
learning_path: "Extract insights from visual data on Azure"
unit: "6 of 7"
presenters: []
raw_file: "160-Module assessment - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/analyze-content-ai-api/06-knowledge-check"
ingest_depth: full
---

# Module assessment — Create an Azure Content Understanding client application

*learn-unit · Create an Azure Content Understanding client application · unit 6 of 7 · SRC-160*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-160 |
| Raw file | 160-Module assessment - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Extract insights from visual data on Azure |
| Module | Create an Azure Content Understanding client application |
| Unit / episode | 6 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/analyze-content-ai-api/06-knowledge-check |
| Teaching content | L210–228 of 258 |
| Content length | ~135 words |
| Capture quality | Medium; questions and options are captured, but checked answers are not shown. |
| Ingest depth | full |

## TL;DR

The assessment tests three module takeaways: which configuration values are needed, what must be supplied when calling analyze, and how extracted fields are returned. (SRC-160 L212–225) The capture lists options but does not show validated answers after submission. (SRC-160 L226–228)

## Key claims

- The first assessment item asks what configuration values are needed to use the Azure Content Understanding API. (SRC-160 L212–215)
- The second assessment item asks what must be specified when calling the analyze method to extract fields from content. (SRC-160 L217–220)
- The third assessment item asks how extracted fields are returned. (SRC-160 L222–225)
- The capture requires answering all questions before checking work, so it does not show answer validation. (SRC-160 L226–228)

## How it works

This page functions as a module assessment rather than a teaching unit. (SRC-160 L212–228) Its distractors reveal the tested boundaries: endpoint/key versus Azure administrative identifiers, analyzer name versus Foundry resource name or creation-operation callback, and type-specific extracted values versus generic strings or blobs. (SRC-160 L212–225)

## Code and API patterns

No code is shown, but the assessment names the `analyze` method and asks what must be specified when using it to extract fields. (SRC-160 L217–220)

## Key terms

- **Endpoint and key** — an answer option for required Content Understanding API configuration values. (SRC-160 L212–215)
- **Analyzer** — an answer option for what must be specified when calling `analyze`. (SRC-160 L217–220)
- **Type-specific values** — an answer option for how extracted fields are returned. (SRC-160 L222–225)

## Decision boundaries and exam cues

- **Inference:** The endpoint-and-key option aligns with the setup unit's stated client connection requirements. (SRC-184 L221–223; SRC-160 L212–215)
- **Inference:** The analyzer-name option aligns with the analysis unit's statement that the analysis request includes the analyzer to be used. (SRC-6 L216; SRC-160 L217–220)
- **Inference:** The type-specific-values option aligns with the analysis unit's statement that SDK `AnalysisResult` gives typed access and content objects include fields. (SRC-6 L241–242; SRC-160 L222–225)

## Assessment items

1. What configuration values are needed to use the Azure Content Understanding API? (SRC-160 L212–215)
   - The name of the resource group where the Azure service is deployed. (SRC-160 L213)
   - The Azure subscription ID and tenant ID. (SRC-160 L214)
   - The endpoint and key for the Foundry resource. (SRC-160 L215)
   - Answer shown: answer not shown in capture. (SRC-160 L226–228)
2. What must be specified when calling the analyze method to extract fields from content? (SRC-160 L217–220)
   - The name of the Foundry resource. (SRC-160 L218)
   - The name of the analyzer. (SRC-160 L219)
   - The Operation-Location returned when the analyzer was created. (SRC-160 L220)
   - Answer shown: answer not shown in capture. (SRC-160 L226–228)
3. How are the extracted fields returned? (SRC-160 L222–225)
   - As type-specific values. (SRC-160 L223)
   - As a list of strings. (SRC-160 L224)
   - As a single blob. (SRC-160 L225)
   - Answer shown: answer not shown in capture. (SRC-160 L226–228)

## Tensions, caveats and currency

- The capture does not show which options were marked correct after submission, so the options are recorded without an official answer marker. (SRC-160 L226–228)
- **Inference:** The likely correct choices can be inferred from the module's teaching pages, but this source alone does not display them as checked answers. (SRC-184 L221–223; SRC-6 L216; SRC-6 L241–242; SRC-160 L212–225)

## Relation to other sources

- [[src-184-prepare-ai-content-understanding-api]] teaches endpoint and key as required configuration values. (SRC-184 L221–223; SRC-160 L212–215)
- [[src-6-analyze-content]] teaches that analysis requests include the analyzer and that SDK results provide typed access. (SRC-6 L216; SRC-6 L241–242; SRC-160 L217–225)
- [[src-201-summary-create-azure-content-understanding-client-application]] summarizes the module outcome that this page assesses. (SRC-201 L216; SRC-160 L212–225)

## Connections

- [[content-understanding-client-apps]] — the assessment tests the client app's configuration and result-handling concepts. (SRC-160 L212–225)
- [[content-understanding-analyzers]] — analyzer selection is directly tested. (SRC-160 L217–220)
- [[azure-content-understanding]] — the API named in the assessment. (SRC-160 L212)

## Open questions

- Which options the Microsoft Learn assessment marked correct are not shown in this capture. (SRC-160 L226–228)

## Sources

- SRC-160 — raw file: [[160-Module assessment - Training - Microsoft Learn]]
