---
title: "Endpoints and SDK choice"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Which endpoint and SDK to use: project endpoint with Foundry SDK, Azure OpenAI endpoint with OpenAI SDK, or tool-specific endpoints."
area: platform
source_ids: [SRC-18, SRC-51, SRC-90, SRC-96, SRC-99, SRC-102, SRC-155, SRC-183, SRC-191]
objectives: [G05, G06]
objective_gaps: [P12]
tags: []
aliases: ["project endpoint", "tool-specific endpoint"]
---

# Endpoints and SDK choice

## Summary

Foundry code starts by choosing the endpoint that matches the job: Project endpoint with the Foundry SDK for project-native features, Azure OpenAI endpoint with the OpenAI SDK for compatible model inference, or tool-specific endpoints with service-specific SDKs for Foundry Tools. (SRC-18 L217–221; SRC-18 L292–307; SRC-96 L233)

## The problem it solves

A Foundry project exposes several ways to reach AI capabilities. Using the wrong endpoint or SDK can hide the feature you need: model inference, project configuration, tracing, agents, evaluations, or a specific Foundry Tool. (SRC-18 L217–221; SRC-18 L247–251; SRC-51 L235–238)

## Mental model

The endpoint is the door; the SDK is the handle. A project endpoint opens Foundry-specific project features. An Azure OpenAI endpoint opens OpenAI-compatible model inference. A tool-specific endpoint opens a purpose-built Foundry Tool. (SRC-18 L236–307; SRC-96 L233)

## What the sources say

SRC-18 is the central decision source. It says Microsoft Foundry projects provide two endpoints for consuming project assets such as model deployments: a Project endpoint and an Azure OpenAI endpoint. (SRC-18 L217–218) Depending on endpoint choice, developers can use the Microsoft Foundry SDK or OpenAI SDK, and both SDKs can support an OpenAI API compatible client object for prompts to models. (SRC-18 L219)

The same source says production applications should generally use Microsoft Entra ID authentication, though some scenarios can use key-based or token-based authentication. (SRC-18 L220) It says the OpenAI client API supports ChatCompletions and Responses, with Responses recommended for most new development. (SRC-18 L221)

SRC-96 adds the Foundry Tools branch: client apps connect to a tool-specific endpoint in the Microsoft Foundry resource, using a project authentication key or token-based authentication, and then use tool-specific APIs and SDKs. (SRC-96 L233)

## How it works in Azure

For the Foundry SDK path, each Foundry project has a unique project endpoint found on the project's Overview page. (SRC-18 L236–238) That endpoint is used to create an `AIProjectClient`, which provides access to Foundry-native operations such as retrieving connections, project configuration, tracing, datasets and indexes. (SRC-18 L240–251)

For the OpenAI SDK path, each Foundry project includes an Azure OpenAI endpoint found on the same Overview page. (SRC-18 L265–267) The OpenAI client handles model inference operations such as Responses, Chat Completions, image generation, and Foundry direct model access. (SRC-18 L281–285)

For Foundry Tools, the tool endpoint is not the generic project/OpenAI endpoint choice; it is specific to the tool in the Foundry resource. (SRC-96 L233)

## Code and configuration

The Model playground can generate starter code samples by API, language and SDK, pre-populated with project endpoint, model deployment name and current settings. (SRC-90 L226–232) This makes the playground a source of endpoint-and-SDK starter configuration rather than only a testing UI. (SRC-90 L234–240)

The Foundry SDK can produce an OpenAI-compatible client through `get_openai_client()`, after the app has created an `AIProjectClient` against the project endpoint. (SRC-18 L252–256) The Responses API page says an OpenAI-compatible client can access Responses through either the Foundry SDK or the OpenAI SDK. (SRC-99 L217)

For RAG, the corpus states that after an Azure AI Search index is created, it can be connected to a model through a Microsoft Foundry project; the `azure-ai-projects` SDK can get an authenticated OpenAI client and use the Responses API for grounded answers. (SRC-102 L251–256)

## Decision boundaries

- Use the Foundry SDK with the project endpoint when the app needs Foundry Agent Service, tool approval workflows, cloud evaluations, tracing and observability, Foundry direct models, project metadata, connections, or governance features. (SRC-18 L292–300)
- Use the OpenAI SDK with the Azure OpenAI endpoint when the app needs OpenAI API compatibility, portability between OpenAI and Azure OpenAI deployments, Chat Completions, Responses, Images APIs, or minimal dependency on Foundry-specific concepts. (SRC-18 L301–307)
- **Inference:** Use tool-specific endpoints and SDKs/REST APIs when consuming Foundry Tools capabilities directly. (SRC-51 L238; SRC-96 L233)
- Use `AzureOpenAI` specifically when the app needs functionality from a specific version of the Azure OpenAI API. (SRC-18 L286–289)
- **Inference:** If the scenario mentions generated code samples from the playground, inspect its selected API, language and SDK because those choices determine which endpoint pattern the sample uses. (SRC-90 L226–232)

## Failure modes and misconceptions

One mistake is to assume the Foundry SDK replaces the OpenAI SDK for every model call. SRC-18 says Foundry SDK chat client functionality derives from the OpenAI SDK and that both SDKs can be combined in the same application. (SRC-18 L234–235; SRC-18 L308)

Another mistake is to use OpenAI-compatible inference when the app needs Foundry-specific features like evaluations, tracing, approval workflows, or project connections. (SRC-18 L292–307)

A third mistake is to treat Foundry Tools as ordinary model deployments. The Foundry Tools source says they use tool-specific endpoints, APIs and SDKs. (SRC-96 L233)

## Solution Engineering transfer

**Inference:** Customer signal: "We already have OpenAI code and just need to point it at Azure" points toward OpenAI SDK compatibility, unless the same requirement adds Foundry-specific assets such as agents, evaluations or tracing. (SRC-18 L301–307)

**Inference:** Customer signal: "We need agents with governed tools, tracing, evaluations and connections" points to the Foundry SDK and project endpoint. (SRC-18 L292–300)

**Inference:** Customer signal: "We need speech-to-text or document field extraction" points to a Foundry Tool endpoint and service-specific SDK rather than generic chat inference. (SRC-96 L223–233)

## Connections

- [[foundry-sdk]] — project endpoint and `AIProjectClient` path.
- [[openai-sdk]] — Azure OpenAI endpoint and compatible model-inference path.
- [[foundry-tools]] — tool-specific endpoint path.
- [[responses-api]] — recommended new response-generation API in this source set.
- [[chat-completions-api]] — established compatibility API named beside Responses.
- [[keyless-authentication]] — production authentication guidance points to Microsoft Entra ID.
- [[foundry-resources-and-projects]] — endpoints belong to projects and resources.
- [[deployment-options-compared]] — related synthesis for endpoint/deployment/access choices.
- [[src-18-choose-endpoint-sdk]] — core source for this concept.
- *Also linked from:* [[azure-openai]] · [[development-tools-and-approaches]] · [[microsoft-entra-id]] · [[microsoft-foundry]] · [[overview]]

## Sources

- SRC-18 — [[src-18-choose-endpoint-sdk]] — core endpoint, SDK and authentication decisions.
- SRC-51 — [[src-51-developer-tools-sdks]] — SDK choices by project, model and tool target.
- SRC-90 — [[src-90-explore-model-playground]] — generated code samples with API/language/SDK choices.
- SRC-96 — [[src-96-foundry-tools]] — tool-specific endpoint pattern.
- SRC-99 — [[src-99-generate-responses-responses-api-foundry-sdk]] — Responses through Foundry or OpenAI SDK.
- SRC-102 — [[src-102-ground-model-retrieval-augmented-generation]] — RAG through project SDK and Responses.
- SRC-155 — [[src-155-microsoft-foundry]] — projects expose project and Azure OpenAI endpoint access paths.
- SRC-183 — [[src-183-plan-prepare-develop-ai-solutions-azure-episode-1]] — episode-level REST, OpenAI SDK, Foundry SDK and tool SDK distinction.
- SRC-191 — [[src-191-study-guide-exam-ai-103-developing-ai-apps-agents]] — official study guide: objective wording for the recorded corpus gap.

## Open questions

- The captures omit concrete endpoint URL formats in code blocks, so this page preserves the conceptual endpoint choice without inventing exact URL shapes. (SRC-18 L238–242; SRC-18 L267–271)
- **Synthesis:** Gap P12 — the study guide lists private networking among the security configuration it expects (SRC-191 L134); the corpus does not teach private-networking configuration for Foundry endpoints. Recorded in [[corpus-gaps]].

