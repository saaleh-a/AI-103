---
title: "Foundry Tools"
type: entity
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Prebuilt AI APIs and models in Microsoft Foundry for language, speech, translation, document extraction and multimodal content understanding."
area: platform
source_ids: [SRC-51, SRC-96, SRC-155, SRC-183]
objectives: [P01, P02]
objective_gaps: []
tags: ["product"]
aliases: ["Microsoft Foundry Tools", "Azure AI services", "Azure AI Services", "Cognitive Services", "Azure Cognitive Services", "AI Services"]
---

# Foundry Tools

## Summary

Foundry Tools are Microsoft Foundry's out-of-the-box prebuilt APIs and models for common AI tasks, including Azure Language, Azure Speech, Azure Translator, Azure Document Intelligence, and Azure Content Understanding. (SRC-96 L218–232)

## What it is

The corpus positions Foundry Tools as the purpose-built AI-service side of Foundry: useful when a common AI task is better served by a predictable prebuilt API or model than by relying on generative AI agents alone. (SRC-96 L218–219) They are hosted in the Foundry resource associated with a project. (SRC-155 L20)

## What the sources say

SRC-96 directly defines Foundry Tools as a set of prebuilt APIs and models that can be integrated into applications. (SRC-96 L218–219) It says these tools can make a solution more cost-effective and predictable than using generative-AI-based agents alone. (SRC-96 L219)

The tool table in SRC-96 lists the current family covered by that source. Azure Language analyzes natural language and supports entity extraction, sentiment analysis, summarization, conversational language models, and question answering. (SRC-96 L223–224) Azure Speech supports text-to-speech, speech-to-text, and real-time live speech for conversational apps and agents. (SRC-96 L225–226) Azure Translator translates text between many languages. (SRC-96 L227–228) Azure Document Intelligence extracts fields from complex documents using prebuilt or custom models. (SRC-96 L229–230) Azure Content Understanding provides multimodal content analysis over forms, documents, images, videos, and audio streams. (SRC-96 L231–232)

SRC-183 preserves the older course vocabulary: before Foundry and generative AI, these Azure AI tools were called Cognitive Services and Azure AI services, and the presenter says they remain relevant. (SRC-183 L220–242)

## Capabilities and components

Foundry Tools cover common language, speech, translation, document extraction, and multimodal extraction tasks. (SRC-96 L223–232) The episode lists the same broad areas as language, speech, translator, document intelligence, and multimodal understanding tools used through the course. (SRC-183 L251–299)

## How to use it

A client app connects to a tool-specific endpoint in the Microsoft Foundry resource and authenticates with a project authentication key or token-based authentication. (SRC-96 L233) The app then uses the tool-specific APIs and SDKs to call the capability, and some tools also provide portal UI for configuration and testing. (SRC-96 L233–234)

SRC-51 gives the developer-surface version of the same boundary: Foundry Tools SDKs are AI-service-specific libraries for multiple languages and frameworks, and Foundry Tools can also be consumed through REST APIs. (SRC-51 L238)

## Decision boundaries

- **Inference:** Choose Foundry Tools when the problem is a known AI task such as entity extraction, sentiment, speech-to-text, text-to-speech, translation, document field extraction, or multimodal content analysis. (SRC-96 L223–232)
- **Inference:** Choose an LLM or agent when the problem requires flexible reasoning, conversation, tool choice, or autonomous task handling; choose Foundry Tools when the requirement maps to a prebuilt service with a tool-specific endpoint and SDK. (SRC-96 L218–233; SRC-155 L19–20)
- **Inference:** Do not confuse Foundry Tools with the tools an agent can call. Foundry Tools are a product family; agent tools are action or data capabilities attached to an agent, which may include built-in tools, MCP-connected tools, or custom tools. (SRC-155 L19–20)
- **Inference:** For new projects, prefer the Foundry resource version of the tools because SRC-96 says individual Azure resources are still possible but recommends tools in a Microsoft Foundry resource for new projects. (SRC-96 L235–236)

## Naming and currency

The source explicitly records naming drift: Azure tools were previously called Azure AI Services and before that Azure Cognitive Services; those names remain in some APIs and SDKs. (SRC-96 L235–236)

**Stale-risk:** The exact set of tools and their portal placement can change. The page should preserve what the corpus lists rather than assuming that every current Azure AI service is covered by Foundry Tools. (SRC-96 L223–236)

## Appearances in the corpus

Foundry Tools appear first as a platform-planning concept in SRC-96, as assets hosted in a Foundry resource in SRC-155, and as a spoken course bridge from older Cognitive Services/Azure AI Services naming into Foundry terminology in SRC-183. (SRC-96 L218–236; SRC-155 L20; SRC-183 L220–299)

## Connections

- [[microsoft-foundry]] — Foundry Tools are hosted in the platform's Foundry resource.
- [[endpoints-and-sdk-choice]] — tools use tool-specific endpoints and SDKs rather than the project/OpenAI endpoint pattern.
- [[azure-language]] — text analysis tool in the family.
- [[azure-speech]] — speech tool in the family.
- [[azure-translator]] — translation tool in the family.
- [[azure-document-intelligence]] — document field extraction tool in the family.
- [[azure-content-understanding]] — multimodal extraction tool in the family.
- [[extraction-options-compared]] — the closest decision hub for choosing among extraction options.
- [[speech-and-language-options-compared]] — the closest decision hub for speech/language choices.
- [[naming-and-currency]] — legacy Azure AI Services and Cognitive Services names.
- [[src-96-foundry-tools]] — direct Learn definition.
- *Also linked from:* [[foundry-resources-and-projects]] · [[mcp-tool-integration]] · [[model-selection]]

## Sources

- SRC-51 — [[src-51-developer-tools-sdks]] — tool-specific SDKs and REST APIs.
- SRC-96 — [[src-96-foundry-tools]] — direct definition, tool list, endpoints and naming drift.
- SRC-155 — [[src-155-microsoft-foundry]] — Foundry Tools hosted in the resource.
- SRC-183 — [[src-183-plan-prepare-develop-ai-solutions-azure-episode-1]] — episode explanation and legacy names.

