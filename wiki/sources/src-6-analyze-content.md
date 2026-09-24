---
title: "Analyze content"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains submitting content to an analyzer, asynchronous polling, and processing SDK or REST analysis results."
area: extraction
source_ids: [SRC-6]
objectives: [I08]
tags: [content-understanding, analyze, asynchronous-operation, python-sdk, rest-api]
aliases: ["SRC-6"]
source_kind: learn-unit
module: "Create an Azure Content Understanding client application"
learning_path: "Extract insights from visual data on Azure"
unit: "4 of 7"
presenters: []
raw_file: "6-Analyze content - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/analyze-content-ai-api/04-analyze"
ingest_depth: full
---

# Analyze content

*learn-unit · Create an Azure Content Understanding client application · unit 4 of 7 · SRC-6*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-6 |
| Raw file | 6-Analyze content - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Extract insights from visual data on Azure |
| Module | Create an Azure Content Understanding client application |
| Unit / episode | 4 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/analyze-content-ai-api/04-analyze |
| Teaching content | L210–253 of 283 |
| Content length | ~524 words |
| Capture quality | Medium; prose is detailed, but Python and JSON code bodies are omitted after Copy markers. |
| Ingest depth | full |

## TL;DR

Content analysis submits a file to a Content Understanding endpoint and names the analyzer to use. (SRC-6 L216) The operation is asynchronous: submission returns an operation ID, and the client checks status and retrieves results after completion. (SRC-6 L217) The SDK path uses `ContentUnderstandingClient`, `begin_analyze`, a poller, and `AnalysisResult`; the REST path sends HTTP requests with an API key and parses JSON results. (SRC-6 L220–249)

## Key claims

- A client can submit content to the Azure Content Understanding API endpoint and specify the analyzer used for the analysis request. (SRC-6 L216)
- The content can be specified by Internet-accessible URL or uploaded directly as binary data, including PDF, PNG, MP3, or MP4 examples. (SRC-6 L216)
- Analysis is asynchronous: after request submission, the client receives an operation ID for checking status and retrieving results. (SRC-6 L217)
- The Content Understanding Python SDK package provides `ContentUnderstandingClient` to simplify service interaction. (SRC-6 L219–220)
- The SDK handles authentication, request formatting, and automatic polling for asynchronous operations. (SRC-6 L220)
- The SDK `begin_analyze` method returns a poller; calling `.result()` waits until the operation completes. (SRC-6 L224–225)
- REST analysis submits HTTP calls to the Content Understanding endpoint for the Microsoft Foundry resource and passes an API key in the header. (SRC-6 L226–228)
- A URL can be used for file location, and direct binary data uses the `analyzeBinary` operation. (SRC-6 L231–232)
- Result shape depends on the content kind, analyzer schema, and actual content analyzed. (SRC-6 L233–237)
- A document-based business-card analyzer response can include extracted fields and OCR layout for lines, words, and paragraphs on each page. (SRC-6 L238–240)
- The SDK `AnalysisResult` provides typed access, and its `contents` property contains content objects with fields, markdown, and metadata. (SRC-6 L241–242)
- REST responses are JSON payloads that applications must parse to retrieve field values. (SRC-6 L245–249)

## How it works

The request sends content to the Content Understanding endpoint and includes the analyzer name so the service knows which analyzer to apply. (SRC-6 L216) The source distinguishes two content input patterns: URL-based content for an Internet-accessible file and direct binary upload for local file data such as documents, images, audio, or video. (SRC-6 L216; SRC-6 L231–232)

The source emphasizes asynchronous execution. (SRC-6 L217) With the SDK, `ContentUnderstandingClient` hides much of the mechanics by handling authentication, request formatting, and polling; `begin_analyze` returns a poller, and `.result()` waits for completion. (SRC-6 L220–225) With REST, the client performs the HTTP calls itself, sends the API key in the header, polls until completion, and parses JSON output. (SRC-6 L226–249)

Result interpretation is analyzer-dependent. (SRC-6 L233–237) For the business-card example, the response contains extracted fields and OCR layout elements, including locations of text lines, words, and paragraphs on each page. (SRC-6 L238–240)

## Code and API patterns

The capture omits the actual code bodies, but the surrounding prose identifies the relevant API objects and operations. (SRC-6 L221–253)

- SDK client: `ContentUnderstandingClient`, which simplifies interaction with the service. (SRC-6 L219–220)
- SDK method: `begin_analyze`, which returns a poller for an asynchronous operation. (SRC-6 L224–225)
- Poller pattern: call `.result()` on the poller to wait for completion instead of writing a polling loop. (SRC-6 L224–225)
- REST pattern: send HTTP calls to the Content Understanding endpoint with an API key header, then poll until operation completion. (SRC-6 L226–228)
- Binary upload pattern: use `analyzeBinary` for direct binary data rather than a URL. (SRC-6 L231–232)
- SDK result object: `AnalysisResult`, whose `contents` property contains content objects with `fields`, `markdown`, and `metadata`. (SRC-6 L241–242)
- REST result pattern: parse the JSON payload to retrieve field values. (SRC-6 L245–249)

## Key terms

- **Analysis request** — a request sent to the Content Understanding endpoint that includes the content and analyzer to use. (SRC-6 L216)
- **Operation ID** — the identifier returned after submitting an asynchronous analysis request, used to check status and retrieve results. (SRC-6 L217)
- **Poller** — the SDK object returned by `begin_analyze`; `.result()` automatically polls until completion. (SRC-6 L224–225)
- **`AnalysisResult`** — the SDK result object with typed access to `contents`, `fields`, `markdown`, and `metadata`. (SRC-6 L241–242)
- **OCR layout** — layout data in a document analyzer response with text lines, individual words, and paragraphs and their locations. (SRC-6 L238–240)

## Decision boundaries and exam cues

- **Inference:** If a scenario emphasizes less client code for asynchronous polling, the SDK poller path is a strong clue because `.result()` handles polling automatically. (SRC-6 L220–225)
- **Inference:** If a scenario emphasizes direct HTTP control or non-Python language access, the REST path is more aligned because it submits HTTP calls and parses JSON. (SRC-6 L226–249; SRC-184 L231–232)
- **Inference:** If content is hosted in an Internet-accessible location, URL submission fits; if the app has local bytes, `analyzeBinary` fits. (SRC-6 L216; SRC-6 L231–232)
- **Inference:** Analyzer name is load-bearing in analysis calls because the source states the analysis request includes the analyzer to be used. (SRC-6 L216; SRC-160 L217–220)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source describes SDK and REST code examples, but the captured Python and JSON blocks are omitted, so only the prose-described API shape is available here. (SRC-6 L221–253)
- The source's business-card response is illustrative of a document-based analyzer, not a universal result shape, because results depend on content kind, analyzer schema, and file contents. (SRC-6 L233–240)

## Relation to other sources

- [[src-29-create-content-understanding-analyzer]] explains how an analyzer can be created before it is used in the analysis request described here. (SRC-29 L216–230; SRC-6 L216)
- [[src-184-prepare-ai-content-understanding-api]] supplies the Foundry endpoint and key needed by the REST calls described here. (SRC-184 L221–225; SRC-6 L226–228)
- [[src-67-exercise-develop-content-understanding-client-application]] turns this analysis flow into the hands-on lab task. (SRC-6 L216–249; SRC-67 L212–216)
- [[src-160-module-assessment-create-azure-content-understanding-client-application]] assesses analyzer-name and typed-field result details taught here. (SRC-6 L216; SRC-6 L241–242; SRC-160 L217–225)

## Connections

- [[content-understanding-client-apps]] — the source describes the client application analysis path. (SRC-6 L216–249)
- [[content-understanding-analyzers]] — the analysis request must specify which analyzer to use. (SRC-6 L216)
- [[azure-content-understanding]] — the API endpoint being called. (SRC-6 L216)
- [[extraction-options-compared]] — result shape and OCR layout matter when comparing extraction services. (SRC-6 L238–249)
- *Module units:* [[src-138-introduction-create-azure-content-understanding-client-application|1 Introduction]] · [[src-184-prepare-ai-content-understanding-api|2 Prepare to use the AI Content Understanding API]] · [[src-29-create-content-understanding-analyzer|3 Create a Content Understanding analyzer]] · [[src-67-exercise-develop-content-understanding-client-application|5 Exercise - Develop a Content Understanding client application]] · [[src-160-module-assessment-create-azure-content-understanding-client-application|6 Module assessment]] · [[src-201-summary-create-azure-content-understanding-client-application|7 Summary]]

## Open questions

- The source does not expose the actual JSON payload or SDK code, so exact syntax must be verified from documentation or the lab. (SRC-6 L221–253)

## Sources

- SRC-6 — raw file: [[6-Analyze content - Training - Microsoft Learn]]
