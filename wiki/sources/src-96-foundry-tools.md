---
title: "Foundry Tools"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Introduces Foundry Tools as prebuilt APIs and models for common AI tasks inside Microsoft Foundry resources."
area: platform
source_ids: [SRC-96]
tags: [foundry-tools, azure-language, azure-speech, translator, document-intelligence, content-understanding]
aliases: ["SRC-96"]
source_kind: learn-unit
module: "Plan and prepare to develop AI solutions on Azure"
learning_path: "Develop generative AI apps in Azure"
unit: "3 of 9"
presenters: []
raw_file: "96-Foundry Tools - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/prepare-azure-ai-development/3-azure-ai-services"
ingest_depth: full
---
# Foundry Tools
*learn-unit · Plan and prepare to develop AI solutions on Azure · unit 3 of 9 · SRC-96*

## Source metadata
| Field | Value |
|---|---|
| Source ID | SRC-96 |
| Raw file | 96-Foundry Tools - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop generative AI apps in Azure |
| Module | Plan and prepare to develop AI solutions on Azure |
| Unit / episode | 3 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/prepare-azure-ai-development/3-azure-ai-services |
| Teaching content | L212–236 of 266 |
| Content length | ~378 words |
| Capture quality | High; Learn unit includes a Foundry Tools table. |
| Ingest depth | full |

## TL;DR
Foundry Tools are out-of-the-box prebuilt APIs and models for common AI tasks inside Microsoft Foundry. (SRC-96 L218–219) The source says they can make solutions more cost-effective and predictable than relying only on generative-AI-based agents. (SRC-96 L219) It names Azure Language, Speech, Translator, Document Intelligence, and Content Understanding as tools. (SRC-96 L223–232)

## Key claims
- Common AI tasks may be better served by off-the-shelf functionality even when generative AI models and agents are the focus of a project. (SRC-96 L218)
- Microsoft Foundry includes Foundry Tools, defined here as prebuilt APIs and models integrated into applications. (SRC-96 L219)
- Azure Language analyzes natural language text and supports entity extraction, sentiment analysis, summarization, conversational language models, and question answering. (SRC-96 L223–224)
- Azure Speech supports text-to-speech, speech-to-text, and real-time live speech for conversational apps and agents. (SRC-96 L225–226)
- Azure Translator translates text between many languages using state-of-the-art language models. (SRC-96 L227–228)
- Azure Document Intelligence extracts fields from complex documents using prebuilt or custom models. (SRC-96 L229–230)
- Azure Content Understanding provides multimodal content analysis for extracting data from forms, documents, images, videos, and audio streams. (SRC-96 L231–232)

## How it works
A client application connects to the tool-specific endpoint in the Microsoft Foundry resource, using either the project authentication key or token-based authentication. (SRC-96 L233) The application then uses tool-specific APIs and SDKs to consume the functionality. (SRC-96 L233) Some tools also provide a Foundry portal user interface for configuration and testing. (SRC-96 L234)

## Code and API patterns
The source gives no code snippet, but it states the access pattern: tool-specific endpoint, project authentication key or token-based authentication, then tool-specific APIs and SDKs. (SRC-96 L233)

## Key terms
- Foundry Tools: Out-of-the-box prebuilt APIs and models for common AI tasks in Microsoft Foundry. (SRC-96 L218–219)
- Tool-specific endpoint: The endpoint a client application uses to connect to a specific Foundry Tool in a Microsoft Foundry resource. (SRC-96 L233)
- Token-based authentication: One supported authentication approach for connecting to Foundry Tools. (SRC-96 L233)

## Decision boundaries and exam cues
- **Inference:** If the scenario asks for predictable common AI functionality such as text analysis, speech, translation, document field extraction, or multimodal extraction, Foundry Tools are the module's alternative to building everything with a generative agent. (SRC-96 L218–232)
- **Inference:** If the scenario asks how to call a Foundry Tool from an app, look for a tool-specific endpoint plus key or token authentication and tool-specific APIs or SDKs. (SRC-96 L233)

## Assessment items
Not covered by this source. (SRC-96 L218–236)

## Tensions, caveats and currency
- The source records naming drift: Azure tools were previously called Azure AI Services and before that Azure Cognitive Services, and some APIs and SDKs still reflect those names. (SRC-96 L235–236)
- The source also says some tools can still be provisioned as individual Azure resources outside a Foundry resource, but recommends using the tools in a Microsoft Foundry resource for new projects. (SRC-96 L236)

## Relation to other sources
- SRC-260 supplies the higher-level capability taxonomy that Foundry Tools implement for language, speech, vision-adjacent, translation, and extraction tasks. ([[src-260-what-is-ai]]; SRC-260 L219–233)
- SRC-155 says Foundry Tools are hosted in the Foundry resource associated with the project. ([[src-155-microsoft-foundry]]; SRC-155 L20)
- SRC-183 repeats the naming history and explains that these tools remain relevant alongside generative AI. ([[src-183-plan-prepare-develop-ai-solutions-azure-episode-1]]; SRC-183 L220–242)

## Connections
- [[foundry-tools]] — this source directly defines the entity. (SRC-96 L218–219)
- [[azure-language]] — Azure Language is one Foundry Tool. (SRC-96 L223–224)
- [[azure-speech]] — Azure Speech is one Foundry Tool. (SRC-96 L225–226)
- [[azure-translator]] — Azure Translator is one Foundry Tool. (SRC-96 L227–228)
- [[azure-document-intelligence]] — Document Intelligence is one Foundry Tool. (SRC-96 L229–230)
- [[azure-content-understanding]] — Content Understanding is one Foundry Tool. (SRC-96 L231–232)
- [[naming-and-currency]] — the source preserves the Azure AI Services and Cognitive Services naming drift. (SRC-96 L235–236)

## Open questions
- The unit does not list pricing, regional availability, or detailed API shapes for each tool. (SRC-96 L223–236)

## Sources
- SRC-96 — raw file: [[96-Foundry Tools - Training - Microsoft Learn]]
