---
title: "Use the Content Understanding API"
type: source
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Explains the API flow for submitting content to an analyzer, polling an operation ID, and retrieving JSON results."
area: extraction
source_ids: [SRC-250]
objectives: [I07, I08]
tags: [content-understanding, api, analyzer-results, asynchronous-operations]
aliases: ["SRC-250"]
source_kind: learn-unit
module: "Create a multimodal analysis solution with Azure Content Understanding"
learning_path: "Extract insights from visual data on Azure"
unit: "4 of 7"
presenters: []
raw_file: "250-Use the Content Understanding API - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/analyze-content-ai/04-use-api"
ingest_depth: full
---

# Use the Content Understanding API

*learn-unit · Create a multimodal analysis solution with Azure Content Understanding · unit 4 of 7 · SRC-250*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-250 |
| Raw file | 250-Use the Content Understanding API - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Extract insights from visual data on Azure |
| Module | Create a multimodal analysis solution with Azure Content Understanding |
| Unit / episode | 4 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/analyze-content-ai/04-use-api |
| Teaching content | L210–233 of 263 |
| Content length | ~342 words |
| Capture quality | Medium; prose is intact, but JSON and HTTP example bodies are omitted after Copy markers. |
| Ingest depth | full |

## TL;DR

The Content Understanding API is a programmatic interface for creating, managing, and consuming analyzers. (SRC-250 L216) A client submits authenticated HTTP calls to the Content Understanding endpoint, sends content to an analyzer, receives an operation ID for an asynchronous task, polls for status, and receives JSON results when the operation completes. (SRC-250 L217–233)

## Key claims

- The Content Understanding API can create, manage, and consume analyzers. (SRC-250 L216)
- Client applications submit HTTP calls to the Content Understanding endpoint for a Microsoft Foundry resource. (SRC-250 L217)
- API calls pass one authorization key in the header. (SRC-250 L217)
- The endpoint and keys are available in Azure portal or Microsoft Foundry portal. (SRC-250 L217–218)
- The Microsoft Foundry API can connect to the project programmatically with Entra ID. (SRC-250 L218)
- A common API use is submitting content to an existing analyzer and retrieving analysis results. (SRC-250 L219)
- An analysis request returns an operation ID for an asynchronous task. (SRC-250 L219)
- The client sends another request with the operation ID to retrieve operation status, potentially polling until completion. (SRC-250 L219)
- Results are returned in JSON format when analysis completes. (SRC-250 L219; SRC-250 L232)
- Content can be provided by URL, or binary file data can be submitted with `analyzeBinary`. (SRC-250 L224)
- The `analyzerResults` endpoint is used with `GET` to check operation status until success or failure. (SRC-250 L228)

## How it works

The API flow starts with an already-built analyzer. (SRC-250 L219) The client sends a POST-style analysis request to the analyzer, either pointing to content by URL or sending binary data with `analyzeBinary`. (SRC-250 L222–224) The request does not immediately return final extracted fields; it returns an operation ID for an asynchronous task. (SRC-250 L219; SRC-250 L226–228) The client then calls `analyzerResults` with `GET` until the operation succeeds or fails, and successful completion returns the analyzer-specific JSON payload. (SRC-250 L228–233)

## Code and API patterns

The source names the API patterns, but the captured JSON and HTTP blocks contain only language and copy markers rather than bodies. (SRC-250 L222–233)

- Endpoint: Content Understanding endpoint for the Microsoft Foundry resource. (SRC-250 L217)
- Authentication: authorization key in request header, with Entra ID connection through the Microsoft Foundry API also mentioned. (SRC-250 L217–218)
- Content submission: analyze request with URL, or `analyzeBinary` for direct binary file data. (SRC-250 L222–224)
- Async status: operation ID returned by the request, then `GET` to `analyzerResults` until success or failure. (SRC-250 L219; SRC-250 L228)
- Output: JSON payload whose fields depend on the content and schema. (SRC-250 L232)

## Key terms

- **Operation ID** — the value returned by the analysis request to represent the asynchronous analysis task. (SRC-250 L219)
- **`analyzeBinary`** — the operation used to submit binary file data directly rather than using a URL. (SRC-250 L224)
- **`analyzerResults`** — the endpoint used to check operation status and retrieve results. (SRC-250 L228)

## Decision boundaries and exam cues

- **Inference:** If a scenario asks how to consume a built analyzer from code, look for an authenticated API call, an operation ID, and polling for JSON results. (SRC-250 L217–233)
- **Inference:** Choose URL submission when content is reachable by URL, and `analyzeBinary` when the client must send file bytes directly. (SRC-250 L222–224)
- **Inference:** If the answer choice expects synchronous results from the initial analysis request, it conflicts with this source's asynchronous operation-ID flow. (SRC-250 L219; SRC-250 L228)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source mentions both authorization-key headers and Entra ID through the Microsoft Foundry API, but does not explain when to prefer each in this unit. (SRC-250 L217–218)
- The actual JSON request and HTTP response examples are not visible in the capture. (SRC-250 L222–233)

## Relation to other sources

- [[src-30-create-content-understanding-analyzer]] explains building the analyzer that this API flow consumes. (SRC-30 L239–241; SRC-250 L219)
- [[src-184-prepare-ai-content-understanding-api]] provides setup details for endpoint, key, SDK package, and default model deployments. (SRC-184 L221–234; SRC-250 L217–218)
- [[src-7-analyze-documents-content-understanding-episode-25]] demonstrates the same create-analyzer and analyze-binary API pattern in a Python walkthrough. (SRC-250 L219–233; SRC-7 L938–1235)

## Connections

- [[content-understanding-client-apps]] — this source describes the client consumption flow. (SRC-250 L217–233)
- [[content-understanding-analyzers]] — the API submits content to existing analyzers. (SRC-250 L219)
- [[azure-content-understanding]] — the API belongs to the Content Understanding service. (SRC-250 L216)
- [[microsoft-entra-id]] — Entra ID is named as a programmatic connection option through Microsoft Foundry API. (SRC-250 L218)
- *Module units:* [[src-126-introduction-create-multimodal-analysis-solution-azure-content-understanding|1 Introduction]] · [[src-262-what-is-azure-content-understanding|2 What is Azure Content Understanding-]] · [[src-30-create-content-understanding-analyzer|3 Create a Content Understanding analyzer]] · [[src-73-exercise-extract-information-multimodal-content|5 Exercise - Extract information from multimodal content]] · [[src-164-module-assessment-create-multimodal-analysis-solution-azure-content-understanding|6 Module assessment]] · [[src-217-summary-create-multimodal-analysis-solution-azure-content-understanding|7 Summary]]

## Open questions

- The source does not show exact HTTP paths, request bodies, headers, or response payloads because the examples are omitted in the capture. (SRC-250 L222–233)

## Sources

- SRC-250 — raw file: [[250-Use the Content Understanding API - Training - Microsoft Learn]]
