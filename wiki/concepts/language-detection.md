---
title: "Language detection"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Identify a document or phrase's language and return a confidence score for the prediction."
area: language
source_ids: [SRC-10, SRC-12, SRC-40, SRC-206, SRC-227]
objectives: []
objective_gaps: []
tags: []
aliases: ["language identification", "detect_language"]
---

# Language detection

## Summary

Language detection is an Azure Language capability that evaluates text input and returns a language identifier plus a confidence score for each submitted document (SRC-40 L217–219).

## The problem it solves

Applications often receive text without a known language: content stores can collect arbitrary text, and chat applications may need to detect the user's language at the start of a session so responses can be configured appropriately (SRC-40 L218).

## Mental model

The service reads the submitted text, predicts the most likely language, and attaches a score from 0 to 1 that indicates confidence in the prediction (SRC-40 L217–219). **Inference:** Treat it as classification metadata about the text, not as translation or summarization (SRC-40 L217–224; SRC-227 L248–252).

## What the sources say

- Azure Language in Foundry Tools lists language detection as determining the language in which text is written (SRC-12 L217–218).
- The dedicated unit says language detection works with documents or single phrases, and the response contains one result per document (SRC-40 L220–224).
- The episode walkthrough calls `detect_language` and reads the returned `primary_language.name` (SRC-10 L672–682).
- The module summary includes detecting languages with Azure Language in Foundry Tools as a completed outcome (SRC-206 L215–216).

## How it works in Azure

Input can be a collection of documents, each with an ID and text; each document must be under 5,120 characters and a collection is restricted to 1,000 items (SRC-40 L220). The output includes the predicted language and confidence; values closer to 1 indicate higher confidence (SRC-40 L224–227).

Mixed-language text can produce ambiguity: the service returns the language with the largest representation in the content, but with a lower positive rating (SRC-40 L228). If the analyzer cannot parse the text, such as due to character-encoding issues, the language name and ISO code return as `(unknown)` and the score is 0 (SRC-40 L229).

## Code and configuration

The corpus's direct-code pattern is to provision a Foundry resource, create a `TextAnalyticsClient`, and submit requests through the Azure Language SDK or REST API (SRC-12 L224–235). The episode's concrete method cue is `ai_client.detect_language(...)` followed by reading `primary_language.name` from the result (SRC-10 L672–682).

## Decision boundaries

| **Inference:** Scenario detail | Choose language detection | Choose translation |
|---|---|---|
| Required output | Identify the source language and confidence (SRC-40 L220–227) | Produce equivalent text in target language(s) (SRC-227 L248–252) |
| Typical input | Unknown-language text, documents, or short phrases (SRC-40 L218–220) | Source text plus target language codes (SRC-227 L249–252) |
| **Inference:** Exam cue | determine which language, confidence score, `(unknown)` | `translate`, target language, source-to-target output |

**Inference:** If a scenario asks what language content is in before deciding how to process it, use language detection; if it asks to convert meaning into another language, use Azure Translator's `translate` method (SRC-40 L217–224; SRC-227 L248–252).

## Failure modes and misconceptions

- Do not assume language detection translates text; it returns identifiers and confidence scores, not a target-language rendering (SRC-40 L217–224; SRC-227 L248–252).
- Low confidence can be expected for mixed-language content, because the returned language may only be the largest representation in the document (SRC-40 L228).
- `(unknown)` with score 0 indicates the analyzer could not parse the content, which can happen with encoding issues (SRC-40 L229).
- **Stale-risk:** The character and batch limits are source-captured platform limits and should be rechecked for production designs (SRC-40 L220).

## Solution Engineering transfer

**Inference:** Customer signals include multilingual chat intake, unknown-language feedback stores, or ingestion pipelines that need a routing decision before translation, indexing, or response generation (SRC-40 L218). A useful discovery question is: *Do you need to identify the language, convert it, or both?* (SRC-40 L217–224; SRC-227 L248–252).

## Connections

- [[azure-language]] — parent service for this capability.
- [[text-translation]] — often follows detection but solves a different problem.
- [[azure-translator]] — service used when conversion to another language is required.
- [[azure-language-mcp-server]] — agents can call Language tools dynamically.
- *Also linked from:* [[named-entity-recognition]] · [[overview]]

## Sources

- SRC-10 — [[src-10-analyze-text-azure-language-foundry-tools-episode-15]] — episode method walkthrough.
- SRC-12 — [[src-12-azure-language-microsoft-foundry-tools]] — capability list and client setup.
- SRC-40 — [[src-40-detect-language]] — language detection behavior and edge cases.
- SRC-206 — [[src-206-summary-analyze-text-azure-language-foundry-tools]] — module outcome.
- SRC-227 — [[src-227-translate-text]] — translation contrast.

## Open questions

- The corpus does not show the full Python code body for the captured Learn unit; it names the client and method pattern but omits code snippets in the capture (SRC-12 L232–236; SRC-40 L221–226).
