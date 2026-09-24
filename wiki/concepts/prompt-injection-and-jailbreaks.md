---
title: "Prompt injection and jailbreaks"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Direct jailbreaks and indirect prompt injection are attempts to subvert AI behaviour; Foundry prompt shields and guardrails detect abuse."
area: responsible-ai
source_ids: [SRC-53, SRC-106, SRC-153, SRC-156, SRC-182, SRC-191]
objectives: [P13]
objective_gaps: [V15]
tags: []
aliases: ["prompt shields", "indirect prompt injection", "jailbreak", "indirect attack", "system prompt subversion"]
---

# Prompt injection and jailbreaks

## Summary

Prompt injection and jailbreaks are abuse patterns that try to manipulate a model or agent away from its intended instructions. The corpus names two defences: red-team testing to discover harmful behaviours and Foundry guardrails/prompt shields to detect abuse such as subverting the system prompt (SRC-153 L237–242; SRC-156 L231).

## The problem it solves

Generative AI systems can accept inputs from users, tools, RAG systems, the web, or other content sources, so harmful instructions may arrive from places other than a trusted UI (SRC-106 L50–75). AI-103 treats this as a responsible AI and safety objective: the study guide explicitly names indirect prompt injection in embedded image text as a multimodal skill (SRC-191 L176–179).

## Mental model

A jailbreak is an attack on the instruction hierarchy: the attacker tries to make the system ignore or override its intended behaviour. **Inference:** Direct jailbreaks usually come from a user prompt; indirect prompt injection arrives through content the model is asked to read, such as retrieved documents, web pages, or image text. The corpus supports the boundary by naming user attempts to subvert the system prompt in guardrails and separately naming indirect prompt injection embedded in images (SRC-156 L231; SRC-191 L176–179).

## What the sources say

- SRC-153 recommends red-team testing, where testers deliberately probe the solution for weaknesses and attempt to produce harmful results; it presents red teaming as a responsible AI process that complements cybersecurity practices (SRC-153 L237–242).
- SRC-106 broadens the input surface beyond users: text can come from users, tools, RAG systems, or the web, and those sources can be used against the application (SRC-106 L50–75).
- SRC-156 says Foundry guardrails include prompt shields that use abuse detection algorithms to determine whether the solution is being systematically abused, for example by a user attempting to subvert the system prompt (SRC-156 L231).
- SRC-106's guardrail demo shows jailbreak systems in the default V2 guardrail, and later shows custom guardrails where jailbreak, content safety, and protected material are in place (SRC-106 L396–428).
- SRC-53 names "Indirect attack (jailbreak)" as a safety evaluation category that assesses vulnerability to manipulation attempts (SRC-53 L248–250).
- SRC-191 names detection and mitigation of indirect prompt injection using embedded text in images as an official multimodal-content objective (SRC-191 L176–179).

## How it works in Azure

In Microsoft Foundry, the corpus places jailbreak and prompt-injection defences inside guardrails and safety evaluation. Prompt shields are part of Foundry guardrails at the safety-system layer (SRC-156 L229–231). The evaluator source treats indirect attack/jailbreak as something to measure as a defect rate, and the study guide makes indirect prompt injection a required visual-content skill (SRC-53 L248–250; SRC-191 L176–179).

## Code and configuration

The corpus does not provide prompt-shield SDK code. It describes configuration and evaluation concepts: enable or configure guardrails that include jailbreak/prompt-shield controls, red-team the system, and evaluate indirect attack/jailbreak vulnerability (SRC-53 L248–250; SRC-106 L396–428; SRC-153 L237–242; SRC-156 L231).

## Decision boundaries

| **Inference:** Attack or control | Page that owns it | Deciding detail |
|---|---|---|
| Harmful content category, severity, or blocking level | [[guardrails-and-content-filters]] | The issue is content classification or moderation (SRC-156 L229–230) |
| User or content tries to override instructions | This page | The issue is subversion, jailbreak, prompt shield, or indirect attack (SRC-53 L248–250; SRC-156 L231) |
| Image contains embedded attack text | This page plus [[vision-enabled-chat]] | The official objective names indirect prompt injection in embedded image text (SRC-191 L176–179) |
| Whole release process for finding attacks | [[responsible-ai-lifecycle]] | The issue is map, measure, mitigate, manage and red-team process (SRC-153 L237–242; SRC-182 L12–18) |

**Inference:** In exam wording, "jailbreak," "subvert the system prompt," "indirect attack," "embedded text in images," and "prompt shield" are the strongest cues for this page.

## Failure modes and misconceptions

- Treating all unsafe output as prompt injection is too broad; content filters classify harm categories, while prompt shields target abuse and subversion attempts (SRC-156 L229–231).
- Treating user prompts as the only input surface misses tool, RAG, web, and multimodal content sources (SRC-106 L50–75; SRC-191 L176–179).
- Treating a prompt shield as the whole mitigation is too narrow; red teaming, measurement, guardrails, prompt/grounding design, UX constraints, and operations all contribute (SRC-153 L237–242; SRC-156 L218–240).

## Solution Engineering transfer

**Inference:** A customer signal is "the agent read a document that told it to ignore previous instructions" or "users are trying to bypass the bot's rules." Ask where instructions can enter the system, which sources are trusted, whether the attack is direct or indirect, and how jailbreak events are measured and escalated.

## Connections

- [[guardrails-and-content-filters]] — prompt shields and jailbreak systems live inside guardrails.
- [[azure-ai-content-safety]] — related safety service, but this page owns subversion attacks.
- [[responsible-ai-lifecycle]] — red-team, measure, mitigate, and operate these risks.
- [[vision-enabled-chat]] — multimodal context for embedded text in images.
- [[model-and-app-evaluation]] — indirect attack/jailbreak is a safety metric.
- [[src-156-mitigate-potential-harms]] — prompt shields source.
- [[src-153-map-potential-harms]] — red-team testing source.
- [[src-53-evaluate-model-performance]] — indirect attack/jailbreak metric.
- *Also linked from:* [[overview]] · [[responsible-ai-principles]]

## Sources

- SRC-53 — [[src-53-evaluate-model-performance]] — indirect attack/jailbreak safety metric.
- SRC-106 — [[src-106-implement-responsible-generative-ai-solution-microsoft-foundry-episode-6]] — input surfaces and guardrail demo.
- SRC-153 — [[src-153-map-potential-harms]] — red-team testing.
- SRC-156 — [[src-156-mitigate-potential-harms]] — prompt shields in Foundry guardrails.
- SRC-182 — [[src-182-plan-responsible-generative-ai-solution]] — lifecycle context for mitigating harms.
- SRC-191 — [[src-191-study-guide-exam-ai-103-developing-ai-apps-agents]] — official indirect prompt injection objective.

## Open questions

- The corpus does not give detailed detection algorithms or code-level prompt-shield configuration.
