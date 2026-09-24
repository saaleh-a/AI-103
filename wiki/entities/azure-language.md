---
title: "Azure Language"
type: entity
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Foundry Tools text-analysis service for language detection, entity extraction, and PII detection/redaction."
area: language
source_ids: [SRC-10, SRC-12, SRC-40, SRC-93, SRC-94, SRC-96, SRC-127, SRC-206, SRC-227, SRC-235]
objectives: [P01, P02, T01, T02]
objective_gaps: []
tags: ["service"]
aliases: ["Azure Language in Foundry Tools", "Azure Language in Microsoft Foundry Tools", "Azure AI Language", "Azure AI Language service", "Language service", "Text Analytics"]
---

# Azure Language

## Summary

Azure Language in Foundry Tools is the corpus's text-analysis service for extracting information from text: language detection, named entity recognition, and PII detection/redaction are the module's core tasks (SRC-12 L217–220; SRC-206 L215–218).

## What it is

Azure Language in Foundry Tools provides APIs and models for analyzing natural-language text, and the Foundry Tools overview places it in the out-of-the-box API/model family that can be more predictable for common tasks than relying only on generative agents (SRC-96 L218–224). The introductory unit says it provides an API for common text-analysis techniques that can be integrated into applications and agents through language-specific SDKs (SRC-127 L216–217).

**Synthesis:** In this corpus, Azure Language has two developer shapes: direct app/API use through REST or SDK clients, and agent use through the Azure Language MCP server (SRC-12 L224–232; SRC-235 L225–239).

## What the sources say

- The main Azure Language unit says the service is designed to extract information from text and names language detection, named entity recognition, and PII extraction as the covered functions (SRC-12 L217–220).
- The same unit says a Microsoft Foundry resource is required for text analysis, and requests can be authenticated with a resource key or Microsoft Entra ID identity through REST or SDKs (SRC-12 L224–227).
- The episode explains the exam-relevant boundary with large language models: LLMs can translate and attempt PII identification, but choosing Foundry Tools versus LLMs depends on the task (SRC-10 L80–104).
- The episode also says Azure Language tools in Foundry have a broader collection of known languages than many general LLMs, while being smaller and more focused (SRC-10 L193–211).
- The module summary records the learning outcomes as detecting language, extracting named entities, extracting PII, and using Azure Language in Foundry Tools (SRC-206 L215–220).

## Capabilities and components

- Language detection evaluates text and returns language identifiers with confidence scores (SRC-40 L217–219).
- Named Entity Recognition identifies entities in text and groups them into categories and subcategories such as Person, Location, DateTime, Organization, Address, Email, and URL (SRC-93 L217–224).
- PII detection and redaction identifies sensitive information such as names, addresses, phone numbers, email addresses, social security numbers, and credit card numbers; it can extract PII entities or return text with PII masked (SRC-94 L217–225).
- **Stale-risk:** The corpus says sentiment analysis, summarization, key phrase extraction, and other common language tasks are provided to support existing applications and are deprecated in this Foundry Tools module (SRC-12 L221–222; SRC-235 L225–229).

## How to use it

For direct application code, provision a Microsoft Foundry resource, use its endpoint, authenticate with either a key or Microsoft Entra ID, and call the Azure Language APIs through JSON REST requests or an SDK (SRC-12 L224–227). The Python pattern named in the corpus creates a `TextAnalyticsClient` for the Foundry resource, and Microsoft recommends Microsoft Entra ID authentication for production (SRC-12 L232–235).

For agentic use, connect the Azure Language MCP server so the agent receives Language tools, chooses the matching tool from the prompt, calls it through MCP, and synthesizes the returned results into a natural-language response (SRC-235 L230–239).

## Decision boundaries

| **Inference:** Need | Azure Language | Azure Translator | LLM-only prompting |
|---|---|---|---|
| Primary job | Analyze text for language, entities, or PII (SRC-12 L217–220) | Translate or transliterate text (SRC-227 L216–220) | Generate or reason in natural language (SRC-10 L80–104) |
| Best when | The output is a structured text-analysis result (SRC-40 L217–224; SRC-93 L217–230; SRC-94 L217–225) | The output is another language or script (SRC-227 L248–262) | **Inference:** the scenario needs broad reasoning rather than a prebuilt text-analysis API (SRC-10 L80–104) |
| **Inference:** Exam cue | language identifier, entity categories, confidence, redaction | source/target language, `translate`, `transliterate` | open-ended generation, summarization, rewrite |

**Inference:** Choose Azure Language when the load-bearing requirement is a repeatable text-analysis operation with categories, confidence scores, or redaction; choose an LLM when the requirement is broader generation or reasoning and no specialized Foundry Tool output is needed (SRC-10 L80–104; SRC-12 L217–225).

## Naming and currency

The corpus uses current names such as "Azure Language in Foundry Tools" and older/adjacent names such as "Azure AI Language service" and "Language service" in episode narration (SRC-12 L217; SRC-10 L847–849). Foundry Tools themselves were previously called Azure AI Services and Azure Cognitive Services, and those older names still appear in some APIs and SDKs (SRC-96 L236).

**Stale-risk:** The page should preserve the module's specific statement that sentiment analysis, summarization, key phrase extraction, and other common language tasks are deprecated in this curriculum context, even though the broader product may still expose related features for existing apps (SRC-12 L221–222; SRC-235 L225–229).

## Appearances in the corpus

- Foundry Tools overview: Azure Language as one Foundry Tool (SRC-96 L218–224).
- Analyze text module: direct API/SDK use for language detection, NER, and PII (SRC-12 L217–235; SRC-40 L217–229; SRC-93 L217–230; SRC-94 L217–225).
- Episode 15: walkthrough and LLM-versus-Foundry-Tools discussion (SRC-10 L80–104; SRC-10 L672–716).
- Azure Language MCP module: agent-facing tool wrapper (SRC-235 L225–239).

## Connections

- [[language-detection]] — one core Azure Language capability.
- [[named-entity-recognition]] — one core Azure Language capability.
- [[pii-detection-and-redaction]] — one core Azure Language capability.
- [[azure-language-mcp-server]] — exposes Language capabilities to agents through MCP.
- [[foundry-tools]] — Azure Language is one prebuilt Foundry Tool.
- [[azure-translator]] — nearby language service for translation rather than analysis.
- [[text-translation]] — decision boundary with Translator and LLM translation.
- [[speech-and-language-options-compared]] — cross-service selection for language and speech tasks.
- *Also linked from:* [[extraction-options-compared]] · [[overview]]

## Sources

- SRC-10 — [[src-10-analyze-text-azure-language-foundry-tools-episode-15]] — episode walkthrough and LLM boundary.
- SRC-12 — [[src-12-azure-language-microsoft-foundry-tools]] — core Language service capabilities and authentication.
- SRC-40 — [[src-40-detect-language]] — language detection details.
- SRC-93 — [[src-93-extract-entities]] — NER categories and response shape.
- SRC-94 — [[src-94-extract-personally-identifiable-information-pii]] — PII extraction and redaction.
- SRC-96 — [[src-96-foundry-tools]] — Foundry Tools overview and naming drift.
- SRC-127 — [[src-127-introduction-analyze-text-azure-language-foundry-tools]] — module introduction.
- SRC-206 — [[src-206-summary-analyze-text-azure-language-foundry-tools]] — module outcomes.
- SRC-227 — [[src-227-translate-text]] — Translator contrast.
- SRC-235 — [[src-235-understand-azure-language-mcp-server]] — MCP server contrast and deprecated-capability note.
