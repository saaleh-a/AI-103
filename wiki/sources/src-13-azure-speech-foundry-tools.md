---
title: "Azure Speech in Foundry Tools"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains Azure Speech in Foundry Tools, Foundry resource provisioning, endpoint/key access and the SpeechConfig setup object."
area: speech
source_ids: [SRC-13]
objectives: [T05]
tags: [azure-speech, foundry-tools, speechconfig, endpoint, key]
aliases: ["SRC-13"]
source_kind: learn-unit
module: "Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools"
learning_path: "Develop natural language solutions in Azure"
unit: "2 of 9"
presenters: []
raw_file: "13-Azure Speech in Foundry Tools - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/create-speech-enabled-apps/2-create-speech-service"
ingest_depth: full
---

# Azure Speech in Foundry Tools

*learn-unit · Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools · unit 2 of 9 · SRC-13*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-13 |
| Raw file | 13-Azure Speech in Foundry Tools - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop natural language solutions in Azure |
| Module | Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools |
| Unit / episode | 2 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/create-speech-enabled-apps/2-create-speech-service |
| Teaching content | L212–234 of 264 |
| Content length | ~397 words |
| Capture quality | Medium; the prose is usable, but the Python code body is omitted after the Copy marker. |
| Ingest depth | full |

## TL;DR

Azure Speech in Foundry Tools is described as speech-related capabilities provided by a Foundry resource and usable in apps and agents built in Microsoft Foundry projects. (SRC-13 L218) To use it, the source says to provision a Microsoft Foundry resource in an Azure subscription. (SRC-13 L222) The initial SDK setup object is `SpeechConfig`, which encapsulates connection details for the service in the Foundry resource. (SRC-13 L226–227)

## Key claims

- Azure Speech in Foundry Tools is a set of speech-related capabilities provided by a Foundry resource. (SRC-13 L218)
- Those capabilities can add speech support to apps and agents built in Microsoft Foundry projects. (SRC-13 L218)
- Example uses include transcribing recorded calls or meetings and creating an AI assistant that reads messages or emails aloud. (SRC-13 L219–220)
- To use Azure Speech in Foundry Tools, a Microsoft Foundry resource must be provisioned in an Azure subscription. (SRC-13 L222)
- After provisioning, code can use the resource endpoint and key to authenticate requests. (SRC-13 L223)
- Requests can be submitted in JSON format to a REST interface or through language-specific SDKs. (SRC-13 L223)
- `SpeechConfig` is the initial object for access to the Azure Speech in Foundry Tools endpoint because it encapsulates connection details. (SRC-13 L226–227)
- The Foundry portal home page shows the project endpoint and key, while the parent resource endpoint removes `/api/projects/{project_name}` from the project endpoint. (SRC-13 L228–229)
- Python SDK releases before 1.48.2 required the deployment region instead of the endpoint; the latest release can use either endpoint or region. (SRC-13 L233–234)

## How it works

The source's setup path starts with provisioning a Microsoft Foundry resource in an Azure subscription. (SRC-13 L222) Once provisioned, client code uses the resource endpoint and the associated key to authenticate requests, either by REST JSON requests or by a programming-language SDK. (SRC-13 L223–225)

The key object introduced here is `SpeechConfig`. (SRC-13 L226–227) The source states that `SpeechConfig` encapsulates the connection details for the Azure Speech service in the Foundry resource, making it the common starting point for later speech-to-text and text-to-speech flows. (SRC-13 L226–227; SRC-252 L219; SRC-253 L221)

The portal detail matters because the project endpoint and resource endpoint differ. (SRC-13 L228–229) The source says the project endpoint appends `/api/projects/{project_name}` to the resource endpoint, and the parent resource can be viewed in the `Admin` tab of the `Operate` page to see the key and endpoint. (SRC-13 L228–229)

## Code and API patterns

The capture omits the actual Python code body, but it identifies the setup pattern. (SRC-13 L230–234)

- SDK object: `SpeechConfig`, used to provide access to the Azure Speech in Foundry Tools endpoint. (SRC-13 L226–227)
- Connection values: endpoint and key from the Foundry resource or project portal context. (SRC-13 L223; SRC-13 L228–229)
- SDK version caveat: releases before Python SDK 1.48.2 required the region instead of endpoint; the latest release supports endpoint or region. (SRC-13 L233–234)

## Key terms

- **Foundry resource** — the resource that provides the speech-related capabilities in this source. (SRC-13 L218; SRC-13 L222)
- **Endpoint** — the address used from code to call APIs for the provisioned resource. (SRC-13 L223; SRC-13 L228–229)
- **Key** — the value associated with the resource that authenticates requests in the source's setup. (SRC-13 L223; SRC-13 L228–229)
- **`SpeechConfig`** — the initial object that encapsulates connection details for Azure Speech in the Foundry resource. (SRC-13 L226–227)

## Decision boundaries and exam cues

- **Inference:** A scenario asking what is needed from a Microsoft Foundry resource to use the Speech SDK points to endpoint and key, because those are the values the source says code uses to call and authenticate. (SRC-13 L223; SRC-174 L214–217)
- **Inference:** A scenario asking for the first SDK configuration object points to `SpeechConfig`, because this source defines it as the initial object for endpoint access. (SRC-13 L226–227)
- **Inference:** A scenario showing a project endpoint with `/api/projects/{project_name}` may require deriving the resource endpoint by removing the project suffix. (SRC-13 L228–229)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source says the endpoint can be used to call `Azure Language APIs`, even though the page is about Azure Speech; this appears to be naming drift or a capture/source typo rather than a separate Language-service lesson. (SRC-13 L218–223)
- **Stale-risk:** The SDK-version statement is time-sensitive because it contrasts releases before 1.48.2 with the latest release at capture time. (SRC-13 L233–234)
- The code body is not captured, so exact constructor syntax is not available in this source page. (SRC-13 L230–234)

## Relation to other sources

- [[src-115-introduction-create-speech-enabled-apps-azure-speech-microsoft-foundry]] introduces the speech capabilities that this source starts configuring. (SRC-115 L216–221; SRC-13 L218–227)
- [[src-252-speech-text-api]] uses `SpeechConfig` with `AudioConfig` to create a `SpeechRecognizer`. (SRC-13 L226–227; SRC-252 L219–222)
- [[src-253-text-speech-api]] uses `SpeechConfig` with `AudioConfig` to create a `SpeechSynthesizer`. (SRC-13 L226–227; SRC-253 L221–224)
- [[src-174-module-assessment-create-speech-enabled-apps-azure-speech-microsoft]] asks which Foundry resource information is needed to consume Speech with the SDK. (SRC-13 L223; SRC-174 L214–217)

## Connections

- [[azure-speech]] — the source defines how Azure Speech in Foundry Tools is accessed. (SRC-13 L218–227)
- [[foundry-tools]] — the speech capabilities are provided by a Foundry resource. (SRC-13 L218)
- [[foundry-resources-and-projects]] — the source distinguishes project endpoint and resource endpoint. (SRC-13 L228–229)
- [[endpoints-and-sdk-choice]] — endpoint, key, REST and SDK access are the core setup choices in this unit. (SRC-13 L223–225)

## Open questions

- The source does not include the actual Python `SpeechConfig` code block, so exact syntax must be verified in the SDK documentation or lab. (SRC-13 L230–234)

## Sources

- SRC-13 — raw file: [[13-Azure Speech in Foundry Tools - Training - Microsoft Learn]]
