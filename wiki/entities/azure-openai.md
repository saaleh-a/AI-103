---
title: "Azure OpenAI"
type: entity
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Azure-billed OpenAI models and the Azure OpenAI endpoint/API surface used from Microsoft Foundry projects."
area: models
source_ids: [SRC-17, SRC-18, SRC-32, SRC-44, SRC-89, SRC-99, SRC-221, SRC-225, SRC-258]
objectives: [G01, G06]
objective_gaps: []
tags: ["service"]
aliases: ["Azure OpenAI in Foundry Models", "Azure OpenAI Service", "Azure OpenAI endpoint"]
---

# Azure OpenAI

## Summary

Azure OpenAI appears in this corpus as both a model source in the Microsoft Foundry model catalog and as an endpoint/client surface for calling deployed models. Foundry model catalog pages say Foundry Models sold directly by Azure include Azure OpenAI models and models from Microsoft and other providers, billed through the Azure subscription (SRC-89 L216–218). Endpoint guidance says every Foundry project has both a Project endpoint and an Azure OpenAI endpoint for consuming project assets such as model deployments (SRC-18 L218).

## What it is

Azure OpenAI is not the whole of Microsoft Foundry. In this wiki boundary, Azure OpenAI is the Azure-hosted OpenAI-compatible model inference surface: a Foundry project exposes an Azure OpenAI endpoint, the OpenAI SDK can call Azure OpenAI deployments, and the optional `AzureOpenAI` client is used when code needs version-specific Azure OpenAI API functionality (SRC-18 L257–287). The broader [[model-catalog]] includes Azure OpenAI models alongside Microsoft, partner and community models (SRC-89 L216–224).

## What the sources say

- SRC-89 places Azure OpenAI inside the catalog's provider/source taxonomy: provider filters include Azure OpenAI, Microsoft, Cohere, Mistral, Meta, Anthropic and others (SRC-89 L220–224).
- SRC-18 states that each Foundry project has an Azure OpenAI endpoint, that the endpoint can be found on the project's Overview page, and that the OpenAI client handles inference operations including Responses, Chat Completions and image generation (SRC-18 L265–286).
- SRC-18 also says the OpenAI SDK works with OpenAI-hosted models, Azure OpenAI deployments and Foundry models using the same patterns (SRC-18 L257–258).
- SRC-99 says the Responses API can work with Azure OpenAI models and Foundry direct models when using the Foundry SDK or AzureOpenAI client to connect to a project endpoint (SRC-99 L253–256).
- SRC-32 says image-generation client apps can use language-specific SDKs such as the OpenAI Python SDK or Azure OpenAI .NET SDK (SRC-32 L214).
- SRC-221 and SRC-225 use the `AzureOpenAI` client in the OpenAI SDK for text-to-speech and speech-to-text model calls through a Microsoft Foundry resource endpoint (SRC-221 L223; SRC-225 L224).

## Capabilities and components

- **Catalog presence:** Azure OpenAI models are one of the model sources in Foundry Models (SRC-89 L216–224).
- **Endpoint:** a Foundry project includes an Azure OpenAI endpoint for client applications (SRC-18 L265–267).
- **SDK surface:** the OpenAI SDK is the maximum-compatibility path for model inference workloads such as Responses, Chat Completions and Images APIs (SRC-18 L281–307).
- **Version-specific client:** the `AzureOpenAI` client can be created by specifying the API version and Azure endpoint when version-specific Azure OpenAI API functionality is required (SRC-18 L286–287).
- **Media examples:** corpus examples mention image generation through OpenAI/Azure OpenAI SDKs and speech generation/transcription through `AzureOpenAI` audio APIs (SRC-32 L214; SRC-44 L236–254; SRC-221 L223; SRC-225 L224).

## How to use it

For straightforward model inference, use the OpenAI SDK with the Azure OpenAI endpoint when OpenAI API compatibility matters (SRC-18 L300–307). For Foundry project-level features such as agents, evaluations, tracing and connections, the corpus recommends the Foundry SDK with `AIProjectClient`; you can still get an OpenAI-compatible client for model calls (SRC-18 L240–256; SRC-18 L292–308). **Inference:** In architecture diagrams, keep Azure OpenAI as the model-inference endpoint, not as the owner of agents, evaluations or project governance; those are Foundry project concerns.

Authentication is part of the endpoint choice. SRC-18 says production applications should generally use Microsoft Entra ID authentication, while key-based or token-based authentication may also appear; it also warns to store API keys securely and never include them directly in code (SRC-18 L220; SRC-18 L269–280).

## Decision boundaries

| **Inference:** Choice | Use Azure OpenAI / OpenAI SDK when... | Use another Foundry surface when... |
|---|---|---|
| Endpoint | You need direct model inference through an OpenAI-compatible endpoint (SRC-18 L257–286). | You need project-native operations such as connections, tracing, datasets or indexes through `AIProjectClient` (SRC-18 L240–254). |
| Client | You need Chat Completions, Responses or Images APIs with minimal OpenAI-code changes (SRC-18 L300–307). | You need agents, evaluations, tracing, governance features or Foundry direct model management (SRC-18 L292–299). |
| Model source | The selected model is an Azure OpenAI model sold directly by Azure (SRC-89 L216–218). | The selected option is a partner/community model with its own licensing and pricing (SRC-89 L216–218). |

## Naming and currency

**Stale-risk:** The corpus includes time-sensitive model names and API details, including examples such as GPT-image-1, GPT-4o speech models and version-specific Azure OpenAI client creation (SRC-258 L214–218; SRC-17 L217–221; SRC-18 L286–287). Treat concrete model names and versions as captured examples, not permanent availability guarantees.

## Appearances in the corpus

Azure OpenAI appears in model discovery, endpoint selection, image generation, speech transcription and speech synthesis. It is repeatedly tied to OpenAI-compatible client libraries rather than to portal-only use (SRC-18 L257–287; SRC-32 L214; SRC-221 L223; SRC-225 L224).

## Connections

- [[model-catalog]] — Azure OpenAI is one source/provider in the catalog.
- [[endpoints-and-sdk-choice]] — owns the full endpoint/SDK decision boundary.
- [[openai-sdk]] — client library surface used against Azure OpenAI endpoints.
- [[responses-api]] — response generation API usable with Azure OpenAI models.
- [[chat-completions-api]] — older stateless chat API for compatibility.
- [[image-generation]] — image-generation examples can use OpenAI/Azure OpenAI SDKs.
- [[text-to-speech]] — speech synthesis can use an AzureOpenAI client.
- [[speech-to-text]] — transcription can use an AzureOpenAI client.
- *Also linked from:* [[generative-ai-fundamentals]] · [[model-selection]] · [[overview]] · [[speech-capable-models]]

## Sources

- SRC-17 — [[src-17-choose-speech-capable-model]] — speech-capable OpenAI-family model examples.
- SRC-18 — [[src-18-choose-endpoint-sdk]] — project endpoint, Azure OpenAI endpoint, OpenAI SDK and AzureOpenAI client guidance.
- SRC-32 — [[src-32-create-client-application-that-uses-image-generation-model]] — image-generation SDK options.
- SRC-44 — [[src-44-develop-speech-capable-generative-ai-application-episode-17]] — Azure OpenAI speech demo transcript.
- SRC-89 — [[src-89-explore-model-catalog]] — Azure OpenAI as a catalog source/provider.
- SRC-99 — [[src-99-generate-responses-responses-api-foundry-sdk]] — Responses API with Azure OpenAI and Foundry direct models.
- SRC-221 — [[src-221-synthesize-speech]] — AzureOpenAI client for text-to-speech.
- SRC-225 — [[src-225-transcribe-speech]] — AzureOpenAI client for speech-to-text.
- SRC-258 — [[src-258-what-are-image-generation-models]] — OpenAI image-generation model example.

## Open questions

- The corpus does not provide a full Azure OpenAI resource-management guide; it focuses on Foundry project endpoints and client consumption.
- The corpus does not fully enumerate which catalog models are Azure OpenAI versus other Azure-billed models.
