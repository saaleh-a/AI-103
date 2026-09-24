---
title: "Introduction — Create an Azure Content Understanding client application"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Introduces using the Python SDK or REST API to send content to Azure Content Understanding analyzers and process results."
area: extraction
source_ids: [SRC-138]
objectives: []
tags: [content-understanding, client-application, python-sdk, rest-api]
aliases: ["SRC-138"]
source_kind: learn-unit
module: "Create an Azure Content Understanding client application"
learning_path: "Extract insights from visual data on Azure"
unit: "1 of 7"
presenters: []
raw_file: "138-Introduction - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/analyze-content-ai-api/01-introduction"
ingest_depth: full
---

# Introduction — Create an Azure Content Understanding client application

*learn-unit · Create an Azure Content Understanding client application · unit 1 of 7 · SRC-138*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-138 |
| Raw file | 138-Introduction - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Extract insights from visual data on Azure |
| Module | Create an Azure Content Understanding client application |
| Unit / episode | 1 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/analyze-content-ai-api/01-introduction |
| Teaching content | L210–218 of 248 |
| Content length | ~125 words |
| Capture quality | High; short Learn introduction with no code listing. |
| Ingest depth | full |

## TL;DR

Azure Content Understanding is presented as a multimodal service for creating analyzers that extract information from documents, images, audio, and video. (SRC-138 L214) This module narrows the learner's task to client code: using the Python SDK or REST API to submit a content file to an analyzer and process the results. (SRC-138 L217–218)

## Key claims

- Azure Content Understanding simplifies creation of AI-powered analyzers that extract information from documents, images, audio files, and videos. (SRC-138 L214)
- The module assumes analyzer-building is taught elsewhere and points to the multimodal analyzer module for that skill. (SRC-138 L215–216)
- Client applications can use Azure Content Understanding analyzers through either the Python SDK or the REST API. (SRC-138 L217)
- The stated learning outcome is writing code that submits a content file to an analyzer and processes the results. (SRC-138 L218)

## How it works

The source frames the flow as: a client application calls an existing Azure Content Understanding analyzer, submits a content file, and then processes the analyzer output. (SRC-138 L217–218) It does not describe analyzer schema design in this introduction; instead, it explicitly directs analyzer-building learners to a separate module. (SRC-138 L215–216)

## Code and API patterns

The source names two implementation surfaces: the Python SDK and the REST API. (SRC-138 L217–218) It does not include code in this introductory unit. (SRC-138 L217–218)

## Key terms

- **Azure Content Understanding** — a multimodal service for creating AI-powered analyzers over documents, images, audio files, and videos. (SRC-138 L214)
- **Analyzer** — in this source, the component a client application uses to extract information from submitted content. (SRC-138 L214; SRC-138 L217–218)
- **Client application** — code that uses analyzers via Python SDK or REST API to submit content and process results. (SRC-138 L217–218)

## Decision boundaries and exam cues

- **Inference:** Choose this module's client-application path when the scenario asks for application code that submits files to an existing analyzer and processes results, because that is the module's stated focus. (SRC-138 L217–218)
- **Inference:** Do not treat this introduction as the analyzer-design source; the page redirects analyzer creation to the separate multimodal analysis module. (SRC-138 L215–216)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source uses the name Azure Content Understanding while related setup sources require a Microsoft Foundry resource; a synthesis page should preserve both names rather than collapse them. (SRC-138 L214; SRC-184 L216)
- This introduction contains no API version, package version, or code details, so implementation specifics must come from later units. (SRC-138 L217–218)

## Relation to other sources

- [[src-184-prepare-ai-content-understanding-api]] extends this introduction by listing the Microsoft Foundry resource, endpoint, key, package, Python version, and model-deployment prerequisites needed before client code can run. (SRC-184 L216–234)
- [[src-29-create-content-understanding-analyzer]] covers creating an analyzer schema, which this source explicitly leaves to other material. (SRC-138 L215–216; SRC-29 L216–225)
- [[src-6-analyze-content]] provides the analysis call and result-processing flow promised by this introduction. (SRC-138 L218; SRC-6 L216–253)

## Connections

- [[azure-content-understanding]] — the service introduced as the multimodal extraction capability. (SRC-138 L214)
- [[content-understanding-client-apps]] — the client-application implementation path named by the unit. (SRC-138 L217–218)
- [[content-understanding-analyzers]] — analyzers are the target component used by the client application. (SRC-138 L214; SRC-138 L217)
- [[extraction-options-compared]] — useful later for comparing this multimodal extraction path with other extraction services. (SRC-138 L214)
- *Module units:* [[src-184-prepare-ai-content-understanding-api|2 Prepare to use the AI Content Understanding API]] · [[src-29-create-content-understanding-analyzer|3 Create a Content Understanding analyzer]] · [[src-6-analyze-content|4 Analyze content]] · [[src-67-exercise-develop-content-understanding-client-application|5 Exercise - Develop a Content Understanding client application]] · [[src-160-module-assessment-create-azure-content-understanding-client-application|6 Module assessment]] · [[src-201-summary-create-azure-content-understanding-client-application|7 Summary]]

## Open questions

- The introduction does not specify the request shape, authentication mechanics, or output schema; later units must supply those details. (SRC-138 L217–218)

## Sources

- SRC-138 — raw file: [[138-Introduction - Training - Microsoft Learn]]
