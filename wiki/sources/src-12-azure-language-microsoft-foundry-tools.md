---
title: "Azure Language in Microsoft Foundry Tools"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains Azure Language text-analysis tasks, Foundry resource provisioning, endpoint use, SDK or REST access, and key versus Entra authentication."
area: language
source_ids: [SRC-12]
objectives: [T01, T02]
tags: [azure-language, foundry-tools, text-analytics, authentication, endpoint]
aliases: ["SRC-12"]
source_kind: learn-unit
module: "Analyze text with Azure Language in Foundry Tools"
learning_path: "Develop natural language solutions in Azure"
unit: "2 of 8"
presenters: []
raw_file: "12-Azure Language in Microsoft Foundry Tools - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/analyze-text-ai-language/2-provision-resource"
ingest_depth: full
---

# Azure Language in Microsoft Foundry Tools

*learn-unit · Analyze text with Azure Language in Foundry Tools · unit 2 of 8 · SRC-12*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-12 |
| Raw file | 12-Azure Language in Microsoft Foundry Tools - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop natural language solutions in Azure |
| Module | Analyze text with Azure Language in Foundry Tools |
| Unit / episode | 2 of 8 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/analyze-text-ai-language/2-provision-resource |
| Teaching content | L211–237 of 267 |
| Content length | ~425 words |
| Capture quality | Medium; prose is complete, but Python code blocks are omitted after Copy markers. |
| Ingest depth | full |

## TL;DR

Azure Language in Foundry Tools is for extracting information from text. (SRC-12 L217) The source names language detection, named entity recognition, and PII extraction as module tasks. (SRC-12 L217–220) To use it, provision a Microsoft Foundry resource, call the Azure Language APIs through the resource endpoint, and authenticate with a resource key or Microsoft Entra ID. (SRC-12 L223–225)

## Key claims

- Azure Language in Foundry Tools is designed to help extract information from text. (SRC-12 L217)
- Language detection determines the language in which text is written. (SRC-12 L217–218)
- Named entity recognition detects references to entities such as people, locations, time periods, and organizations. (SRC-12 L217–219)
- PII extraction identifies and redacts personal details in text. (SRC-12 L217–220)
- Sentiment analysis, summarization, key phrase extraction, and other language tasks are described as deprecated capabilities that support existing applications. (SRC-12 L221–222)
- A Microsoft Foundry resource in an Azure subscription is required for Azure Language text analysis. (SRC-12 L223–224)
- Code can call Azure Language APIs through the Foundry resource endpoint. (SRC-12 L225)
- Requests can authenticate either with the resource key or with a Microsoft Entra ID identity. (SRC-12 L225)
- API calls can be JSON requests to REST or use language-specific SDKs. (SRC-12 L225)
- The module's examples use the Python SDK for Azure Language in Foundry Tools, and other languages follow a similar pattern. (SRC-12 L226–227)
- The default Foundry portal home page shows the endpoint and key for the project. (SRC-12 L229–231)
- The project and Foundry resource keys are the same, and the project endpoint is the resource endpoint with `/api/projects/{project_name}` appended. (SRC-12 L231)
- Microsoft recommends Microsoft Entra ID authentication for greater security in production solutions. (SRC-12 L235)

## How it works

The service boundary starts with a Microsoft Foundry resource: the source states that Azure Language text analysis requires a Foundry resource in an Azure subscription. (SRC-12 L223–224) Client code then calls the Azure Language APIs using the resource endpoint. (SRC-12 L225) The portal exposes endpoint and key information, and the source clarifies the relationship between the project endpoint and the resource endpoint: the project endpoint adds `/api/projects/{project_name}` to the resource endpoint. (SRC-12 L229–231)

The access pattern has two implementation surfaces. (SRC-12 L225) A client can send JSON requests to the REST interface, or it can use one of the available SDKs. (SRC-12 L225) The module uses Python SDK examples and says common languages such as C# and JavaScript follow a similar pattern. (SRC-12 L226–227)

Authentication has two paths. (SRC-12 L225) Key-based authentication uses the key associated with the Foundry resource, which the Foundry portal exposes. (SRC-12 L229–231) For production, the source recommends Microsoft Entra ID authentication and introduces code that uses the default Azure identity of the running application context. (SRC-12 L235)

## Code and API patterns

The capture omits the actual Python bodies, but the prose identifies the API shape. (SRC-12 L232–237)

- `TextAnalyticsClient` is the Python client object used to submit requests to Azure Language APIs in a Foundry resource. (SRC-12 L232)
- Key authentication uses the key associated with the Foundry resource. (SRC-12 L229)
- Microsoft Entra ID authentication can use the default Azure identity of the client application's running context. (SRC-12 L235)
- REST calls submit JSON payloads to the Azure Language APIs. (SRC-12 L225)
- SDK calls use language-specific libraries, with Python as the module's example language. (SRC-12 L225–227)

## Key terms

- **Language detection** — determining the language in which text is written. (SRC-12 L217–218)
- **Named entity recognition** — detecting entity references, including people, locations, time periods, and organizations. (SRC-12 L217–219)
- **PII extraction** — identifying and redacting personal details in text. (SRC-12 L217–220)
- **Microsoft Foundry resource** — the Azure subscription resource that must be provisioned to analyze text with Azure Language in Foundry Tools. (SRC-12 L223–224)
- **Resource endpoint** — the endpoint used by code to call Azure Language APIs; the project endpoint is this endpoint plus `/api/projects/{project_name}`. (SRC-12 L225; SRC-12 L231)

## Decision boundaries and exam cues

- **Inference:** If the scenario asks for language detection, named entity recognition, or PII redaction over text, Azure Language in Foundry Tools is the directly named service family in this source. (SRC-12 L217–220)
- **Inference:** If a question asks for production authentication, Microsoft Entra ID is favored because the source explicitly recommends it for greater security in production. (SRC-12 L235)
- **Inference:** If a question asks where to get endpoint and key values, the Foundry portal is a clue because the source says the default home page and Admin tab expose them. (SRC-12 L229–231)
- **Inference:** If a task names sentiment analysis, summarization, or key phrase extraction, this capture treats those as deprecated Azure Language capabilities for existing applications, not the core module path. (SRC-12 L221–222)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The page title says Microsoft Foundry Tools, while the body repeatedly says Azure Language in Foundry Tools. (SRC-12 L217; SRC-12 L223)
- The source says sentiment analysis, summarization, key phrase extraction, and other common language tasks are deprecated capabilities for existing applications. (SRC-12 L221–222)
- The Python code snippets are not present in the capture after the Copy markers, so this source supports object names and authentication shape, not exact syntax. (SRC-12 L232–237)

## Relation to other sources

- [[src-127-introduction-analyze-text-azure-language-foundry-tools]] introduces the same module and SDK families before this page enumerates tasks and provisioning. (SRC-127 L216–220; SRC-12 L217–225)
- [[src-40-detect-language]] expands the language-detection bullet into inputs, limits, confidence scores, and ambiguity behavior. (SRC-12 L217–218; SRC-40 L217–229)
- [[src-93-extract-entities]] expands the entity-recognition bullet into categories and response shape. (SRC-12 L217–219; SRC-93 L217–230)
- [[src-94-extract-personally-identifiable-information-pii]] expands the PII bullet into extraction, confidence scores, and redaction. (SRC-12 L217–220; SRC-94 L217–225)
- [[src-10-analyze-text-azure-language-foundry-tools-episode-15]] demonstrates the same Text Analytics client flow with Foundry project setup and method calls. (SRC-12 L225–237; SRC-10 L264–320)

## Connections

- [[azure-language]] — this source defines the Azure Language text-analysis capabilities covered by the module. (SRC-12 L217–220)
- [[foundry-tools]] — the source places Azure Language inside Foundry Tools. (SRC-12 L217)
- [[language-detection]] — one of the three named core tasks. (SRC-12 L217–218)
- [[named-entity-recognition]] — one of the three named core tasks. (SRC-12 L217–219)
- [[pii-detection-and-redaction]] — one of the three named core tasks. (SRC-12 L217–220)
- [[keyless-authentication]] — the source contrasts key authentication with Microsoft Entra ID authentication. (SRC-12 L225; SRC-12 L235)
- *Module units:* [[src-127-introduction-analyze-text-azure-language-foundry-tools|1 Introduction]] · [[src-40-detect-language|3 Detect language]] · [[src-93-extract-entities|6 Extract entities]] · [[src-94-extract-personally-identifiable-information-pii|7 Extract personally identifiable information (PII)]] · [[src-56-exercise-analyze-text|8 Exercise - Analyze text]] · [[src-168-module-assessment-analyze-text-azure-language-foundry-tools|9 Module assessment]] · [[src-206-summary-analyze-text-azure-language-foundry-tools|10 Summary]] · [[src-10-analyze-text-azure-language-foundry-tools-episode-15|episode 15]]

## Open questions

- The exact Python imports and constructor syntax are not visible in the captured code blocks. (SRC-12 L232–237)
- The source does not explain which roles are required for Microsoft Entra ID access. (SRC-12 L235)

## Sources

- SRC-12 — raw file: [[12-Azure Language in Microsoft Foundry Tools - Training - Microsoft Learn]]
