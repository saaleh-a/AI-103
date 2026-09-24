---
title: "OpenAI SDK"
type: entity
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "OpenAI-compatible client libraries for model inference against OpenAI, Azure OpenAI deployments and Foundry models."
area: generative-apps
source_ids: [SRC-18, SRC-99, SRC-98, SRC-102]
objectives: [G05, G06]
objective_gaps: []
tags: ["sdk"]
aliases: ["OpenAI Python library", "OpenAI client", "AzureOpenAI client", "Azure OpenAI SDK", "openai package"]
---

# OpenAI SDK

## Summary

The OpenAI SDK is the official client library for calling the OpenAI API; in this corpus, it handles HTTP requests, authentication, retries and response parsing for OpenAI-hosted models, Azure OpenAI deployments and Foundry models using the same patterns. (SRC-18 L257–258)

## What it is

The SDK is the OpenAI-compatible inference client path for applications that primarily need model calls rather than Foundry project management. (SRC-18 L282–287; SRC-18 L301–307)

In Microsoft Foundry chat application planning, the endpoint and SDK choice matters because each project has a Project endpoint and an Azure OpenAI endpoint, and the SDK choice determines which capabilities are directly available. (SRC-18 L217–221)

## What the sources say

- SRC-18 says both the Foundry SDK and OpenAI SDK support an OpenAI API-compatible client object for prompts, but differ in available functionality. (SRC-18 L219)
- SRC-18 says the OpenAI client API supports both ChatCompletions and Responses, with Responses recommended for most new development and ChatCompletions retained for broad compatibility. (SRC-18 L221)
- SRC-18 says the `openai` package is installed from PyPI, with `azure-identity` needed when using token-based Microsoft Entra ID credentials. (SRC-18 L259–265)
- SRC-18 says API keys should be stored securely in Azure Key Vault and not included directly in code. (SRC-18 L274–277)
- SRC-99 says the Responses API can be accessed through an OpenAI-compatible client using either the Foundry SDK or the OpenAI SDK. (SRC-99 L217)
- SRC-98 positions ChatCompletions as an older but still useful OpenAI-compatible API surface for maintenance and cross-platform compatibility. (SRC-98 L217)
- SRC-102 says the `azure-ai-projects` SDK can get an authenticated OpenAI client and use the Responses API to generate grounded answers over an Azure AI Search index. (SRC-102 L251–256)

## Capabilities and components

- Client operations: the SDK handles HTTP requests, authentication, retries and response parsing. (SRC-18 L257–258)
- Model coverage: the same SDK patterns work with OpenAI-hosted models, Azure OpenAI deployments and Foundry models. (SRC-18 L257–258)
- Authentication choices: Microsoft Entra ID is recommended, while API keys and environment variables are also described. (SRC-18 L269–282)
- API surfaces: the OpenAI client handles model inference operations including Responses API generation, Chat Completions and image generation. (SRC-18 L282–285)
- Optional `AzureOpenAI` client: SRC-18 says to generally use the OpenAI client with the Azure OpenAI v1 endpoint, but use `AzureOpenAI` when a specific Azure OpenAI API version is required. (SRC-18 L286–287)

## How to use it

Use the OpenAI SDK when you want maximum compatibility with the OpenAI API, portability between OpenAI and Azure OpenAI deployments, Chat Completions, Responses and Images APIs, and minimal dependency on Foundry-specific concepts. (SRC-18 L301–306)

Use the Foundry SDK when the app needs Foundry-specific capabilities such as agents, tool invocation and approval workflows, cloud evaluations, tracing, direct models, project metadata, connections and governance features. (SRC-18 L292–300)

**Inference:** A common exam distinction is SDK scope: OpenAI SDK for inference compatibility; Foundry SDK for project, agent, evaluation, tracing and governance features. (SRC-18 L292–308)

## Decision boundaries

| **Synthesis:** Scenario detail | Prefer OpenAI SDK | Prefer Foundry SDK |
|---|---|---|
| Existing OpenAI code should work with minimal changes | Yes; the source calls it ideal for model inference workloads with existing OpenAI code. (SRC-18 L307) | No; Foundry project abstractions may be unnecessary. **Inference:** (SRC-18 L292–308) |
| The app needs agents, evaluations, tracing or project connections | No; the source says this approach does not provide Foundry-specific features like agents or evaluations. (SRC-18 L307) | Yes; those are named Foundry SDK capabilities. (SRC-18 L292–300) |
| The chat API must be chosen | The SDK can call both Responses and Chat Completions. (SRC-18 L221; SRC-18 L282–285) | Foundry SDK also derives chat client functionality from OpenAI SDK. (SRC-18 L235) |
| A specific Azure OpenAI API version is required | Use `AzureOpenAI`, specifying API version and endpoint. (SRC-18 L286–287) | Not the boundary described by this source. **Inference:** (SRC-18 L286–287) |

## Naming and currency

The source uses OpenAI SDK, OpenAI client, OpenAI-compatible client and `AzureOpenAI` for related but distinct client paths. (SRC-18 L257–287)

**Stale-risk:** Client package names and endpoint defaults can change; the corpus states the captured pattern rather than a current package guarantee. (SRC-18 L259–287)

## Appearances in the corpus

- Endpoint and SDK choice for Foundry chat apps. (SRC-18 L217–221)
- Responses API access through OpenAI-compatible clients. (SRC-99 L217)
- ChatCompletions maintenance and compatibility scenarios. (SRC-98 L217)
- RAG implementation where `azure-ai-projects` supplies an authenticated OpenAI client. (SRC-102 L251–256)

## Connections

- [[foundry-sdk]] — closest SDK decision boundary: project features versus inference compatibility. (SRC-18 L292–308)
- [[endpoints-and-sdk-choice]] — endpoint and client selection drives how apps connect. (SRC-18 L217–221)
- [[responses-api]] — recommended new Foundry response-generation API reachable through an OpenAI-compatible client. (SRC-99 L217; SRC-99 L225)
- [[chat-completions-api]] — compatible message-list API supported by the OpenAI client. (SRC-18 L221; SRC-98 L217)
- [[keyless-authentication]] — Microsoft Entra ID is recommended for production authentication. (SRC-18 L219; SRC-18 L269–277)
- *Also linked from:* [[azure-openai]] · [[development-tools-and-approaches]] · [[microsoft-agent-framework]] · [[model-playgrounds]] · [[overview]] · [[sora-2]] · [[speech-capable-models]] · [[video-generation]]

## Sources

- SRC-18 — [[src-18-choose-endpoint-sdk]] — endpoint and SDK choice, OpenAI SDK capabilities and Foundry SDK boundary.
- SRC-99 — [[src-99-generate-responses-responses-api-foundry-sdk]] — Responses API through OpenAI-compatible clients.
- SRC-98 — [[src-98-generate-responses-chatcompletions-api]] — ChatCompletions compatibility use case.
- SRC-102 — [[src-102-ground-model-retrieval-augmented-generation]] — RAG implementation with an authenticated OpenAI client.
