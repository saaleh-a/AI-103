---
title: "Named entity recognition"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Extract and categorize entities such as people, organizations, locations, dates, addresses, email, and URLs from text."
area: language
source_ids: [SRC-10, SRC-12, SRC-40, SRC-93, SRC-94, SRC-168]
objectives: [T01]
objective_gaps: []
tags: []
aliases: ["NER", "entity recognition", "extract entities", "recognize_entities"]
---

# Named entity recognition

## Summary

Named Entity Recognition (NER) identifies entities mentioned in text and groups them into categories and subcategories (SRC-93 L217–224).

## The problem it solves

Large text collections contain names, places, organizations, dates, addresses, emails, and URLs that are useful as structured signals for tagging, indexing, filtering, and downstream analysis (SRC-10 L215–241; SRC-93 L217–224).

## Mental model

NER turns unstructured text into a list of things mentioned plus their categories. **Inference:** It does not answer an open-ended question about the document; it extracts structured entity spans that other systems can use (SRC-93 L217–230; SRC-10 L226–241).

## What the sources say

- Azure Language lists NER as detecting references to entities, including people, locations, time periods, organizations, and more (SRC-12 L217–219).
- The dedicated NER unit lists examples: Person, Location, DateTime, Organization, Address, Email, and URL (SRC-93 L217–224).
- The response includes a list of categorized entities found in each document (SRC-93 L227–230).
- The episode illustrates entity extraction with John Smith as a person, Contoso Bank as an organization, and Seattle as a place, then connects the output to tagging or the beginning of an index (SRC-10 L226–241).
- The assessment tests that an AI solution extracting people, organizations, and locations from news articles should use Azure Language in Foundry Tools named entity recognition (SRC-168 L213–216).

## How it works in Azure

NER is one Azure Language in Foundry Tools function and uses the same general input pattern as other Azure Language API functions (SRC-93 L227). In the episode, the code path calls `recognize_entities`, passes the text, and loops through returned entities to print each entity's text and category (SRC-10 L683–695).

## Code and configuration

Use a Foundry resource and Azure Language client as described by the Azure Language unit; the NER-specific operation in the episode is `recognize_entities` (SRC-12 L224–235; SRC-10 L688–695). **Stale-risk:** The Learn capture omits the full code blocks, so this page cites the named operation and response behavior rather than reconstructing full SDK syntax (SRC-93 L227–232).

## Decision boundaries

| **Inference:** Need | Named entity recognition | PII detection/redaction | Language detection |
|---|---|---|---|
| Primary output | Categorized entities in text (SRC-93 L217–230) | Sensitive personal data and optionally redacted text (SRC-94 L217–225) | Language identifier and confidence score (SRC-40 L217–224) |
| Typical categories | Person, Location, DateTime, Organization, Address, Email, URL (SRC-93 L217–224) | Names, addresses, phone numbers, email, social security, credit cards (SRC-94 L218) | Language name/ISO code and score (SRC-40 L224–229) |
| **Inference:** Exam cue | extract people, organizations, places, dates | protect privacy, mask PII | determine the language |

**Inference:** Choose NER when entities are useful because of what they are; choose PII redaction when the same or similar span matters because it is sensitive and must be protected (SRC-93 L217–230; SRC-94 L217–225).

## Failure modes and misconceptions

- NER is not the same as PII redaction: it can categorize many entity types, while PII detection is specifically privacy-focused and can return masked text (SRC-93 L217–230; SRC-94 L217–225).
- NER is not a replacement for a full search index; the episode frames extracted entities as a possible beginning of tagging or indexing, not as the whole retrieval system (SRC-10 L235–241).
- The source says the full category list is in documentation, so this page should not claim the listed examples are exhaustive (SRC-93 L225–226).

## Solution Engineering transfer

**Inference:** Customer signals include tagging articles by people and organizations, extracting places and dates from cases, or enriching an index with entity metadata (SRC-10 L235–241; SRC-168 L213–216). Ask whether the output should be structured metadata, privacy masking, or generated prose before choosing the service (SRC-93 L217–230; SRC-94 L217–225).

## Connections

- [[azure-language]] — parent service for NER.
- [[pii-detection-and-redaction]] — nearby privacy-focused extraction capability.
- [[language-detection]] — sibling Azure Language capability.
- [[ai-enrichment-skillsets]] — entity output can support enrichment and indexing.
- [[extraction-options-compared]] — broader extraction decision boundary.
- *Also linked from:* [[azure-language-mcp-server]]

## Sources

- SRC-10 — [[src-10-analyze-text-azure-language-foundry-tools-episode-15]] — episode explanation and method cue.
- SRC-12 — [[src-12-azure-language-microsoft-foundry-tools]] — capability list and client setup.
- SRC-40 — [[src-40-detect-language]] — language detection contrast.
- SRC-93 — [[src-93-extract-entities]] — NER definition and categories.
- SRC-94 — [[src-94-extract-personally-identifiable-information-pii]] — PII contrast.
- SRC-168 — [[src-168-module-assessment-analyze-text-azure-language-foundry-tools]] — assessment scenario.

## Open questions

- The corpus does not enumerate the full entity category taxonomy; it points to documentation for the full list (SRC-93 L225–226).
