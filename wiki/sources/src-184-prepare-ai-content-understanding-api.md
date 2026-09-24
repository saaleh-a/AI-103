---
title: "Prepare to use the AI Content Understanding API"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Lists the Foundry resource, endpoint, key, SDK, Python, and default model-deployment prerequisites for Content Understanding API clients."
area: extraction
source_ids: [SRC-184]
objectives: []
tags: [content-understanding, microsoft-foundry, endpoint, api-key, python-sdk]
aliases: ["SRC-184"]
source_kind: learn-unit
module: "Create an Azure Content Understanding client application"
learning_path: "Extract insights from visual data on Azure"
unit: "2 of 7"
presenters: []
raw_file: "184-Prepare to use the AI Content Understanding API - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/analyze-content-ai-api/02-prepare-content-understanding"
ingest_depth: full
---

# Prepare to use the AI Content Understanding API

*learn-unit · Create an Azure Content Understanding client application · unit 2 of 7 · SRC-184*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-184 |
| Raw file | 184-Prepare to use the AI Content Understanding API - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Extract insights from visual data on Azure |
| Module | Create an Azure Content Understanding client application |
| Unit / episode | 2 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/analyze-content-ai-api/02-prepare-content-understanding |
| Teaching content | L210–236 of 266 |
| Content length | ~334 words |
| Capture quality | High; setup details are present, but command text after Bash/Copy is not captured. |
| Ingest depth | full |

## TL;DR

Before calling the Azure Content Understanding API, a client needs a Microsoft Foundry resource, the resource endpoint, and an API key. (SRC-184 L216–223) The Python path uses the `azure-ai-contentunderstanding` package, requires Python 3.9 or later, and can be replaced by direct REST calls from any HTTP-capable language. (SRC-184 L227–232) The source also flags required default model deployments for the Foundry resource: GPT-4.1, GPT-4.1-mini, and text-embedding-3-large. (SRC-184 L233–234)

## Key claims

- A Microsoft Foundry resource in an Azure subscription is required before using the Azure Content Understanding API. (SRC-184 L216)
- The resource can be provisioned directly in the Azure portal or by creating a Microsoft Foundry project that includes a Microsoft Foundry resource by default. (SRC-184 L216–218)
- Creating a Microsoft Foundry project enables visual tools for creating and managing Azure Content Understanding schemas and analyzers. (SRC-184 L219–220)
- Client applications need the Microsoft Foundry resource endpoint and one API key associated with the endpoint. (SRC-184 L221–223)
- In a Microsoft Foundry project, the associated resource endpoint and key are available on the Foundry portal project home page. (SRC-184 L225)
- Code can use the Microsoft Foundry SDK with Microsoft Entra ID authentication to retrieve the Microsoft Foundry resource connection details. (SRC-184 L226)
- The Content Understanding Python SDK package is `azure-ai-contentunderstanding`. (SRC-184 L227–228)
- The Python SDK requires Python 3.9 or later, while the REST API can be used from any language that supports HTTP requests. (SRC-184 L231–232)
- Content Understanding requires default deployments of GPT-4.1, GPT-4.1-mini, and text-embedding-3-large for the Microsoft Foundry resource. (SRC-184 L233–234)

## How it works

Preparation starts with provisioning a Microsoft Foundry resource, either directly in Azure portal or indirectly through a Microsoft Foundry project. (SRC-184 L216–218) Once provisioned, the client connection uses the resource endpoint plus an API key, both of which can be found in Azure portal or on the Foundry portal project home page for project-backed resources. (SRC-184 L221–225) A project-based application can alternatively use the Microsoft Foundry SDK with Microsoft Entra ID authentication to retrieve connection details rather than hard-coding them. (SRC-184 L226)

## Code and API patterns

The source identifies the Python SDK dependency as `azure-ai-contentunderstanding`, but the captured Bash command text is not present after the `Bash` and `Copy` markers. (SRC-184 L227–230) The source states that direct REST API calls are also supported from any language that supports HTTP requests. (SRC-184 L231–232)

## Key terms

- **Microsoft Foundry resource** — the required Azure resource that backs the Azure Content Understanding API call path in this source. (SRC-184 L216)
- **Microsoft Foundry project** — a project that includes a Microsoft Foundry resource by default and enables visual tools for schemas and analyzers. (SRC-184 L218–220)
- **Endpoint and key** — the connection values required by a client application. (SRC-184 L221–223)
- **Microsoft Entra ID authentication** — an authentication option when code uses the Microsoft Foundry SDK from a Foundry project to retrieve connection details. (SRC-184 L226)

## Decision boundaries and exam cues

- **Inference:** If a question asks what values a client must provide to call Content Understanding, the source points to endpoint plus key, not resource group, subscription ID, or tenant ID. (SRC-184 L221–223; SRC-160 L212–215)
- **Inference:** Use the Python SDK path when the app is Python 3.9+ and can install `azure-ai-contentunderstanding`; use the REST path when another HTTP-capable language or direct HTTP control is required. (SRC-184 L227–232)
- **Stale-risk:** The exact required default model names are time-sensitive platform configuration details and should be rechecked before production work. (SRC-184 L233–234)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** GPT-4.1, GPT-4.1-mini, and text-embedding-3-large are named as required default deployments, but model availability and deployment requirements can change. (SRC-184 L233–234)
- The source says endpoint and key are required for API connection, but also says Microsoft Foundry SDK code can use Microsoft Entra ID authentication to retrieve resource connection details. (SRC-184 L221–226)
- The captured SDK install command is incomplete because only `Bash` and `Copy` appear, not the command text. (SRC-184 L227–230)

## Relation to other sources

- [[src-138-introduction-create-azure-content-understanding-client-application]] introduces the Python SDK and REST API goal that this setup unit prepares. (SRC-138 L217–218; SRC-184 L227–232)
- [[src-29-create-content-understanding-analyzer]] depends on this setup because analyzer creation with the SDK or REST API needs the resource connection described here. (SRC-184 L216–223; SRC-29 L224–230)
- [[src-6-analyze-content]] uses the same endpoint and API-key setup for REST analysis requests. (SRC-184 L221–223; SRC-6 L226–228)
- [[src-160-module-assessment-create-azure-content-understanding-client-application]] assesses the endpoint-and-key configuration point from this unit. (SRC-184 L221–223; SRC-160 L212–215)

## Connections

- [[microsoft-foundry]] — the required resource/project context for the API. (SRC-184 L216–220)
- [[azure-content-understanding]] — the API being prepared. (SRC-184 L216)
- [[content-understanding-client-apps]] — the client setup path for SDK and REST calls. (SRC-184 L221–232)
- [[foundry-sdk]] — the source mentions using the Microsoft Foundry SDK to connect with Microsoft Entra ID and retrieve connection details. (SRC-184 L226)
- [[microsoft-entra-id]] — named as the authentication mechanism for that SDK-based connection. (SRC-184 L226)
- [[model-deployment-types]] — deployment setup matters because default model deployments are required before API use. (SRC-184 L233–234)
- *Module units:* [[src-138-introduction-create-azure-content-understanding-client-application|1 Introduction]] · [[src-29-create-content-understanding-analyzer|3 Create a Content Understanding analyzer]] · [[src-6-analyze-content|4 Analyze content]] · [[src-67-exercise-develop-content-understanding-client-application|5 Exercise - Develop a Content Understanding client application]] · [[src-160-module-assessment-create-azure-content-understanding-client-application|6 Module assessment]] · [[src-201-summary-create-azure-content-understanding-client-application|7 Summary]]

## Open questions

- The source does not show the actual package-install command, even though it introduces an installation step. (SRC-184 L227–230)
- The source does not explain how to configure the required default model deployments beyond pointing to Azure portal or API setup. (SRC-184 L233–234)

## Sources

- SRC-184 — raw file: [[184-Prepare to use the AI Content Understanding API - Training - Microsoft Learn]]
