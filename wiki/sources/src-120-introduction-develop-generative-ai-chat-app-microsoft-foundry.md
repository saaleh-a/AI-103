---
title: "Introduction — Develop a generative AI chat app with Microsoft Foundry"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Introduces endpoint, SDK, authentication and chat API choices for building Microsoft Foundry chat apps."
area: generative-apps
source_ids: [SRC-120]
objectives: []
tags: [microsoft-foundry, chat-apps, sdk-choice]
aliases: ["SRC-120"]
source_kind: learn-unit
module: "Develop a generative AI chat app with Microsoft Foundry"
learning_path: "Develop generative AI apps in Azure"
unit: "1 of 8"
presenters: []
raw_file: "120-Introduction - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/foundry-sdk/01-introduction"
ingest_depth: full
---
# Introduction — Develop a generative AI chat app with Microsoft Foundry

*learn-unit · Develop a generative AI chat app with Microsoft Foundry · unit 1 of 8 · SRC-120*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-120 |
| Raw file | 120-Introduction - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop generative AI apps in Azure |
| Module | Develop a generative AI chat app with Microsoft Foundry |
| Unit / episode | 1 of 8 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/foundry-sdk/01-introduction |
| Teaching content | L211–220 of 250 |
| Content length | ~163 words |
| Capture quality | High; short introduction plus preview caution. |
| Ingest depth | full |

## TL;DR

The unit frames Foundry chat-app development as a choice among services, frameworks, endpoints, SDKs, authentication options and chat APIs. (SRC-120 L215–216) It also warns that some Microsoft Foundry features are in preview and may change. (SRC-120 L219–220)

## Key claims

- Developers building Microsoft Foundry AI solutions work with both services and software frameworks. (SRC-120 L215)
- A generative AI chat application can be built with multiple coding options on Azure. (SRC-120 L215)
- The module teaches how to choose an endpoint, SDK, authentication approach and chat API option. (SRC-120 L216)
- The text-and-images version is described as more detailed than the video version. (SRC-120 L217–218)
- Some Microsoft Foundry features in the module are preview features whose details may change. (SRC-120 L219–220)

## How it works

This introduction does not yet give implementation steps; it defines the decision space for the rest of the module: endpoint selection, SDK selection, authentication and chat API selection. (SRC-120 L216)

## Code and API patterns

Not covered by this source; the unit only names the choices that later units expand. (SRC-120 L216)

## Key terms

- **Endpoint:** A choice the module will teach for connecting an app to Microsoft Foundry. (SRC-120 L216)
- **SDK:** A software framework choice for writing the chat application. (SRC-120 L215–216)
- **Authentication:** A required design choice for a client app that will access Foundry. (SRC-120 L216)
- **Chat API:** A response-generation interface choice for the chat app. (SRC-120 L216)

## Decision boundaries and exam cues

- **Inference:** Treat questions about Foundry chat-app setup as multi-axis decisions, not just model-selection questions: endpoint, SDK, authentication and API all matter. (SRC-120 L216)
- **Stale-risk:** Because the unit explicitly says some Foundry features are in preview, implementation details from this module should be checked against current documentation before production use. (SRC-120 L219–220)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** The source flags preview Foundry features and says details are subject to change. (SRC-120 L219–220)
- The source title uses Microsoft Foundry, while the episode counterpart says Azure Foundry in its opening caption. (SRC-120 L215; SRC-42 L11–14)

## Relation to other sources

- [[src-90-explore-model-playground]] expands the first practical step by using the portal before code. (SRC-90 L217–225)
- [[src-18-choose-endpoint-sdk]] provides the detailed endpoint, SDK and authentication choices introduced here. (SRC-18 L217–222)
- [[src-42-develop-generative-ai-chat-app-microsoft-foundry-episode-3]] covers the same module as a demo-led episode. (SRC-42 L4–14)

## Connections

- [[microsoft-foundry]] — the platform named as the development environment. (SRC-120 L215)
- [[development-tools-and-approaches]] — the source frames development as choosing services and frameworks. (SRC-120 L215–216)
- [[endpoints-and-sdk-choice]] — endpoint and SDK choice is the unit's stated purpose. (SRC-120 L216)
- [[openai-sdk]] — later units connect one endpoint choice to OpenAI-compatible clients. (SRC-120 L216; SRC-18 L219)
- *Module units:* [[src-90-explore-model-playground|2 Explore with the model playground]] · [[src-18-choose-endpoint-sdk|3 Choose an endpoint and SDK]] · [[src-99-generate-responses-responses-api-foundry-sdk|4 Generate responses with the Responses API in the Foundry SDK]] · [[src-98-generate-responses-chatcompletions-api|5 Generate responses with the ChatCompletions API]] · [[src-62-exercise-create-generative-ai-chat-app|6 Exercise - Create a generative AI chat app]] · [[src-148-knowledge-check-develop-generative-ai-chat-app-microsoft-foundry|7 Knowledge check]] · [[src-214-summary-develop-generative-ai-chat-app-microsoft-foundry|8 Summary]] · [[src-42-develop-generative-ai-chat-app-microsoft-foundry-episode-3|episode 3]]

## Open questions

- Which preview details in this module have changed since the capture? (SRC-120 L219–220)

## Sources

- SRC-120 — raw file: [[120-Introduction - Training - Microsoft Learn]]
