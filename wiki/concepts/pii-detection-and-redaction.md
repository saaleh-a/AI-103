---
title: "PII detection and redaction"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Find sensitive personal data in text and optionally return masked/redacted text for privacy protection."
area: language
source_ids: [SRC-10, SRC-12, SRC-93, SRC-94, SRC-156, SRC-168]
objectives: [T02]
objective_gaps: []
tags: []
aliases: ["PII extraction", "personally identifiable information extraction", "PII redaction", "recognize_pii_entities"]
---

# PII detection and redaction

## Summary

PII detection and redaction is the Azure Language capability for identifying sensitive personal information in text and optionally returning a masked version of the text (SRC-94 L217–225).

## The problem it solves

Organizations often need to remove personally identifiable information from customer feedback, medical records, legal documents, or other text before sharing or publishing it (SRC-94 L217). The episode frames this as a privacy step in an import process before bringing documents into a system (SRC-10 L242–256).

## Mental model

The service scans text for sensitive spans, classifies them as PII categories, and can produce two useful outputs: a list of found PII entities and a redacted text version where those spans are masked (SRC-94 L218–225).

## What the sources say

- Azure Language lists PII extraction as identifying and redacting personal details in text (SRC-12 L217–220).
- The dedicated unit says PII capabilities identify names, addresses, phone numbers, email addresses, social security numbers, and credit card numbers (SRC-94 L218).
- The response includes identified PII entities with categories and confidence scores (SRC-94 L219–223).
- Redaction replaces PII with asterisks or a specified character (SRC-94 L225).
- The episode calls `recognize_pii_entities`, lists entity text and category, and shows redacted text where the PII units are hidden (SRC-10 L702–716).
- The module assessment asks what to use to remove personal details from customer testimonials before publishing them; its options include finding and redacting PII with Azure Language, which the episode review gives as the answer (SRC-168 L218–219; SRC-10 L799–810).

## How it works in Azure

PII detection uses the Azure Language API pattern of submitting one or more documents for analysis (SRC-94 L219). It returns structured PII entities and can return redacted text, so downstream systems can either analyze the categories or store/share the masked version (SRC-94 L222–228).

## Code and configuration

The corpus's method cue is `recognize_pii_entities` on the Azure Language client, with returned entity text, category, and redacted text (SRC-10 L702–716). The broader client setup is the Azure Language pattern: provision a Foundry resource, authenticate with key or Microsoft Entra ID, and call through REST or SDK (SRC-12 L224–235).

## Decision boundaries

| **Inference:** Need | PII detection/redaction | Named entity recognition | Content safety / moderation |
|---|---|---|---|
| Primary output | Sensitive personal data plus masked text (SRC-94 L217–225) | General entity categories (SRC-93 L217–230) | Harm classification: guardrail content filters classify content into four severity levels for five categories of potential harm (SRC-156 L230) |
| Use when | Privacy protection before sharing or publishing text (SRC-94 L217; SRC-168 L218–220) | Metadata extraction and tagging (SRC-10 L235–241) | **Inference:** harmful or disallowed content, not personal data, is the risk (SRC-156 L230) |
| **Inference:** Exam cue | hide email addresses, phone numbers, credit cards, redact | extract people, organizations, dates, places | hate and fairness, sexual, violence, self-harm and task-adherence categories (SRC-156 L230) |

**Inference:** If the scenario's success condition is privacy protection or redaction, PII detection is the better fit than generic NER, even when both capabilities can find person-like strings (SRC-93 L217–224; SRC-94 L217–225).

## Failure modes and misconceptions

- Do not treat PII detection as merely entity extraction; the redacted text output is a privacy-protection feature (SRC-94 L222–228).
- Do not assume every entity category is PII; NER includes categories such as organization, location, date, email, and URL, while PII detection focuses on sensitive personal details (SRC-93 L217–224; SRC-94 L218).
- **Inference:** PII redaction helps protect text before publication, but it is not by itself a full governance or data-loss-prevention program (SRC-94 L217–225).

## Solution Engineering transfer

**Inference:** Customer signals include removing personal data before sharing, publishing testimonials safely, or sanitizing intake records before indexing (SRC-94 L217; SRC-168 L218–220). Ask which types of personal data must be detected and whether the customer needs extracted categories, redacted text, or both (SRC-94 L218–225).

## Connections

- [[azure-language]] — parent service for PII detection.
- [[named-entity-recognition]] — closest extraction confusion.
- [[guardrails-and-content-filters]] — adjacent safety concept, but not the same as PII redaction.
- [[responsible-ai-principles]] — privacy and security context.
- [[extraction-options-compared]] — broader extraction decision boundary.
- *Also linked from:* [[azure-language-mcp-server]] · [[overview]]

## Sources

- SRC-10 — [[src-10-analyze-text-azure-language-foundry-tools-episode-15]] — episode method cue and redaction walkthrough.
- SRC-12 — [[src-12-azure-language-microsoft-foundry-tools]] — capability list and setup.
- SRC-93 — [[src-93-extract-entities]] — NER contrast.
- SRC-94 — [[src-94-extract-personally-identifiable-information-pii]] — PII definition, categories, redaction behavior.
- SRC-156 — [[src-156-mitigate-potential-harms]] — content-filter harm categories and severity levels (the content-safety contrast).
- SRC-168 — [[src-168-module-assessment-analyze-text-azure-language-foundry-tools]] — assessment scenario.

## Open questions

- The corpus does not define redaction policy configuration beyond replacing PII with asterisks or a specified character (SRC-94 L225).
