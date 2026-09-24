---
title: "Microsoft Foundry SDK"
type: entity
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Project-level SDK around AIProjectClient for Foundry project operations, OpenAI-compatible clients, agents, tracing, connections and evaluations."
area: platform
source_ids: [SRC-18, SRC-51, SRC-99, SRC-102, SRC-155, SRC-183]
objectives: [G02, G05, G06]
objective_gaps: []
tags: ["sdk"]
aliases: ["Foundry SDK", "azure-ai-projects", "AIProjectClient", "Azure AI Projects client library", "Azure AI Foundry SDK"]
---

# Microsoft Foundry SDK

## Summary

The Microsoft Foundry SDK is the corpus's project-level SDK path: it connects to a Foundry project endpoint with `AIProjectClient`, exposes Foundry-native project operations, and can provide an OpenAI-compatible client for model calls. (SRC-18 L223–256)

## What it is

Microsoft Foundry provides the Foundry SDK for programmatic AI solution development and project automation. (SRC-155 L13; SRC-155 L32) SRC-18 says it provides programmatic access to resources in Foundry projects through a REST API and language-specific libraries, including Azure AI Projects for Python, .NET and JavaScript. (SRC-18 L223–227)

In Python, the package named by the source is `azure-ai-projects`; the project client object named by the source is `AIProjectClient`. (SRC-18 L230–244)

## What the sources say

SRC-18 is the core SDK source. It says the Foundry SDK path uses the Project endpoint from the Foundry portal, authenticates with default Azure credentials, and creates an `AIProjectClient`. (SRC-18 L236–246) That project client can retrieve resource connections, access project configuration, enable tracing, and manage datasets and indexes. (SRC-18 L247–251)

The same source says a Foundry SDK chat app still needs an OpenAI-compatible client object, obtained through `get_openai_client()` on the project client. (SRC-18 L252–256) It also notes that when using the Foundry SDK for chat, the OpenAI SDK package is imported because chat client functionality derives from the OpenAI SDK. (SRC-18 L234–235)

SRC-51 states the higher-level positioning: the Microsoft Foundry SDK connects to Microsoft Foundry projects and accesses Foundry-specific assets such as agents and Foundry IQ knowledge stores. (SRC-51 L235–236)

## Capabilities and components

The named capabilities are project access, resource connections, project configuration, tracing, datasets and indexes, and OpenAI-compatible chat client creation. (SRC-18 L247–256) The endpoint-and-SDK decision page also lists the feature set for which Microsoft recommends the Foundry SDK: Foundry Agent Service, tool invocation and approval workflows, cloud evaluations, tracing and observability, Foundry direct models, and project metadata, connections and governance features. (SRC-18 L292–300)

RAG and chat pages show the SDK participating in generation workflows. SRC-102 says the `azure-ai-projects` SDK can get an authenticated OpenAI client and use the Responses API to generate grounded answers through a Microsoft Foundry project. (SRC-102 L251–256) SRC-99 says the Responses API can be accessed through an OpenAI-compatible client using either the Foundry SDK or the OpenAI SDK. (SRC-99 L217)

## How to use it

Use the project endpoint from the Foundry portal to create an `AIProjectClient` with default Azure credentials. (SRC-18 L236–246) Then use project-client operations for Foundry-native tasks, or call `get_openai_client()` when the app needs to submit prompts to models through an OpenAI-compatible client. (SRC-18 L247–256)

SRC-18 says the code must run in an authenticated Azure session for default Azure credentials, with Azure CLI `az login` named as an example sign-in method. (SRC-18 L240–246)

## Decision boundaries

- **Inference:** Use the Foundry SDK when the application needs project-level or Foundry-native features: agents, evaluations, tracing, project connections, governance, datasets, indexes, or Foundry IQ. (SRC-18 L247–251; SRC-18 L292–300; SRC-51 L235–236)
- **Inference:** Use the OpenAI SDK when the work is straightforward model inference and the priority is OpenAI API compatibility or minimal dependency on Foundry-specific concepts. (SRC-18 L301–307)
- **Inference:** Use a Foundry Tools SDK or REST API, not the Foundry SDK alone, when the task is directly calling a specific Foundry Tool such as Language, Speech or Translator. (SRC-51 L238)
- **Inference:** In mixed apps, use the Foundry SDK for project features and an OpenAI-compatible client for generation; SRC-18 explicitly supports combining SDKs as needed. (SRC-18 L308)

## Naming and currency

The sources use several overlapping names: Microsoft Foundry SDK, Azure AI Projects library, `azure-ai-projects`, `AIProjectClient`, and Azure AI Foundry SDK. (SRC-18 L223–244; SRC-102 L251–256) **Stale-risk:** SRC-18 says language-specific SDKs are developed and maintained independently, so some functionality may be at different implementation stages. (SRC-18 L228–229)

## Appearances in the corpus

The SDK appears in planning as a way to automate Foundry project operations and CI/CD actions, in endpoint choice as the project-endpoint SDK, in chat/RAG lessons as the way to get an authenticated OpenAI-compatible client, and in the episode as the higher-level platform SDK for tools and grounding. (SRC-155 L32; SRC-18 L223–256; SRC-102 L251–256; SRC-183 L479–500)

## Connections

- [[endpoints-and-sdk-choice]] — the page that decides between Foundry SDK and OpenAI SDK.
- [[microsoft-foundry]] — the platform whose projects the SDK manages.
- [[foundry-resources-and-projects]] — `AIProjectClient` connects to a project endpoint.
- [[openai-sdk]] — used directly or via the SDK's OpenAI-compatible client.
- [[responses-api]] — generation API accessible through the compatible client.
- [[retrieval-augmented-generation]] — RAG source names `azure-ai-projects` for grounded responses.
- [[observability-and-tracing]] — tracing is one Foundry-native operation.
- [[src-18-choose-endpoint-sdk]] — core SDK source.
- *Also linked from:* [[development-tools-and-approaches]] · [[microsoft-agent-framework]] · [[model-playgrounds]] · [[overview]]

## Sources

- SRC-18 — [[src-18-choose-endpoint-sdk]] — `AIProjectClient`, project endpoint and SDK choice.
- SRC-51 — [[src-51-developer-tools-sdks]] — SDK positioned for Foundry-specific project assets.
- SRC-99 — [[src-99-generate-responses-responses-api-foundry-sdk]] — Responses API through Foundry or OpenAI SDK.
- SRC-102 — [[src-102-ground-model-retrieval-augmented-generation]] — `azure-ai-projects` for grounded responses.
- SRC-155 — [[src-155-microsoft-foundry]] — SDK for programmatic project work and automation.
- SRC-183 — [[src-183-plan-prepare-develop-ai-solutions-azure-episode-1]] — episode distinction between OpenAI SDK and Foundry SDK.

