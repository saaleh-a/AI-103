---
title: "Choose an endpoint and SDK"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains Foundry project and Azure OpenAI endpoints, SDK choices, authentication options and when to use each SDK."
area: platform
source_ids: [SRC-18]
objectives: [G05, G06, P12]
tags: [endpoints, sdk-choice, authentication, foundry-sdk, openai-sdk]
aliases: ["SRC-18"]
source_kind: learn-unit
module: "Develop a generative AI chat app with Microsoft Foundry"
learning_path: "Develop generative AI apps in Azure"
unit: "3 of 8"
presenters: []
raw_file: "18-Choose an endpoint and SDK - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/foundry-sdk/03-microsoft-foundry-sdk"
ingest_depth: full
---
# Choose an endpoint and SDK

*learn-unit · Develop a generative AI chat app with Microsoft Foundry · unit 3 of 8 · SRC-18*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-18 |
| Raw file | 18-Choose an endpoint and SDK - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop generative AI apps in Azure |
| Module | Develop a generative AI chat app with Microsoft Foundry |
| Unit / episode | 3 of 8 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/foundry-sdk/03-microsoft-foundry-sdk |
| Teaching content | L211–308 of 338 |
| Content length | ~1196 words |
| Capture quality | High; code blocks are placeholders in the capture. |
| Ingest depth | full |

## TL;DR

This source is the module's main endpoint-and-SDK decision page. It says each Foundry project has a Project endpoint and an Azure OpenAI endpoint, and that the Foundry SDK and OpenAI SDK both expose OpenAI-compatible chat clients with different feature coverage. (SRC-18 L217–221)

## Key claims

- A Foundry project exposes both a Project endpoint and an Azure OpenAI endpoint for consuming project assets such as model deployments. (SRC-18 L217–218)
- The Microsoft Foundry SDK and OpenAI SDK can both be used for a generative AI chat app, depending on endpoint choice. (SRC-18 L219)
- Both SDKs support an OpenAI API compatible client object for submitting prompts to models. (SRC-18 L219)
- Production applications should generally use Microsoft Entra ID authentication, while some scenarios can use key-based or token-based authentication. (SRC-18 L220)
- The OpenAI client API supports both ChatCompletions and Responses; Responses is recommended for most new development. (SRC-18 L221)
- The Microsoft Foundry SDK provides project access through a REST API and language-specific libraries for Python, .NET and JavaScript. (SRC-18 L223–227)
- The project client `AIProjectClient` can retrieve connections, access project configuration, enable tracing and manage datasets and indexes. (SRC-18 L247–251)
- The OpenAI SDK handles HTTP requests, authentication, retries and response parsing across OpenAI-hosted models, Azure OpenAI deployments and Foundry models. (SRC-18 L257–258)

## How it works

The Foundry SDK path starts with the project endpoint from the Foundry portal and uses an `AIProjectClient` authenticated with default Azure credentials. (SRC-18 L236–246) That client can then produce an OpenAI-compatible chat client through `get_openai_client()`. (SRC-18 L252–256)

The OpenAI SDK path starts with the Azure OpenAI endpoint from the project's Overview page and creates an OpenAI client with the endpoint and Azure credentials. (SRC-18 L265–271) The source also says API key authentication and environment variables are possible, but API keys should be stored securely and not embedded in code. (SRC-18 L272–280)

## Code and API patterns

- Install the Azure AI Projects library with `azure-ai-projects`, and include supporting packages. (SRC-18 L230–231)
- When using the Foundry SDK for chat, also import the OpenAI SDK package because chat client functionality derives from the OpenAI SDK. (SRC-18 L234–235)
- Use `AIProjectClient` with default Azure credentials against the project endpoint. (SRC-18 L240–244)
- Use `get_openai_client()` on the project client to obtain a chat client. (SRC-18 L252–256)
- Install the OpenAI library with the `openai` package, and include `azure-identity` when using token-based Microsoft Entra ID credentials. (SRC-18 L259–264)
- Use an `AzureOpenAI` client only when functionality from a specific Azure OpenAI API version is required. (SRC-18 L286–289)

## Key terms

- **Project endpoint:** The Foundry project endpoint used with the Foundry SDK and `AIProjectClient`. (SRC-18 L236–247)
- **Azure OpenAI endpoint:** The endpoint used with the OpenAI SDK for model inference through the Azure OpenAI v1 endpoint. (SRC-18 L265–287)
- **Microsoft Entra ID authentication:** The generally recommended production authentication approach. (SRC-18 L220)
- **Foundry-specific capabilities:** Agents, tool approval workflows, cloud evaluations, tracing, direct models, metadata, connections and governance features. (SRC-18 L292–300)

## Decision boundaries and exam cues

- Use the Foundry SDK when the app needs agents, evaluations, tracing, connections, governance features or other Foundry-specific capabilities. (SRC-18 L292–300)
- Use the OpenAI SDK for model inference workloads that need OpenAI API compatibility, portability and minimal Foundry-specific dependencies. (SRC-18 L301–307)
- **Inference:** If the scenario says project configuration, tracing or connections, prefer the Foundry SDK path. (SRC-18 L247–251; SRC-18 L292–300)
- **Inference:** If the scenario says existing OpenAI code should work with minimal changes, prefer the OpenAI SDK path. (SRC-18 L301–307)
- **Inference:** Treat hard-coded API keys as a security smell because the source warns to use API keys cautiously and never include them directly in code. (SRC-18 L276–277)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The capture shows code placeholders rather than concrete code listings. (SRC-18 L232–242)
- The source says SDKs are independently maintained and functionality may be at different implementation stages. (SRC-18 L228–229)
- The final line contains a capture encoding artifact in the phrase about using both SDKs together. (SRC-18 L308)

## Relation to other sources

- [[src-90-explore-model-playground]] prepares for this decision page by generating code samples with an API, language and SDK choice. (SRC-90 L226–232)
- [[src-99-generate-responses-responses-api-foundry-sdk]] expands the recommended Responses API path. (SRC-99 L217–225)
- [[src-98-generate-responses-chatcompletions-api]] expands the compatibility and maintenance path for ChatCompletions. (SRC-98 L217–233)
- [[src-42-develop-generative-ai-chat-app-microsoft-foundry-episode-3]] demonstrates similar endpoint and SDK choices in a walkthrough. (SRC-42 L110–194)

## Connections

- [[endpoints-and-sdk-choice]] — this is the core source for the endpoint/SDK decision boundary. (SRC-18 L217–221)
- [[foundry-sdk]] — the source explains `AIProjectClient` and Foundry SDK capabilities. (SRC-18 L223–256)
- [[openai-sdk]] — the source explains OpenAI SDK inference and compatibility. (SRC-18 L257–307)
- [[keyless-authentication]] — the source recommends Microsoft Entra ID for production. (SRC-18 L220)
- [[microsoft-entra-id]] — Entra ID is the named production identity approach. (SRC-18 L220)
- [[responses-api]] — the source says Responses is recommended for most new development. (SRC-18 L221)
- [[chat-completions-api]] — the source positions ChatCompletions as established and broadly compatible. (SRC-18 L221)

## Open questions

- The capture does not include the actual endpoint URL formats or code snippets after the `Copy` markers. (SRC-18 L238–242; SRC-18 L267–271)

## Sources

- SRC-18 — raw file: [[18-Choose an endpoint and SDK - Training - Microsoft Learn]]
