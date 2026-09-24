---
title: "Responsible AI principles"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Microsoft's six responsible AI principles and how they guide design, testing, transparency, governance, and safety work."
area: responsible-ai
source_ids: [SRC-183, SRC-186]
objectives: []
tags: []
aliases: ["Microsoft responsible AI principles", "fairness", "reliability and safety", "privacy and security", "inclusiveness", "transparency", "accountability"]
---

# Responsible AI principles

## Summary

Microsoft's responsible AI principles are the foundation layer for AI-103 safety work: fairness, reliability and safety, privacy and security, inclusiveness, transparency, and accountability (SRC-186 L220–237; SRC-183 L514–523). They explain what a solution must protect, while [[responsible-ai-lifecycle]] explains how to turn those principles into a plan.

## The problem it solves

AI systems affect users and society through probabilistic models that depend on training data, so their outputs can be wrong, uneven, or harmful even when the software behaves as built (SRC-186 L218–219). The principles give teams a vocabulary for asking which kind of responsibility is at risk before they choose mitigations such as evaluation, guardrails, release controls, or governance (SRC-183 L526–539).

## Mental model

Think of the principles as design constraints, not product features. **Inference:** A model can pass through a content filter and still violate transparency if users do not understand its limits; it can be accurate on average and still violate fairness if performance is poor for a subgroup. The principles therefore sit above individual controls and guide what must be mapped, measured, mitigated, reviewed, and owned (SRC-186 L223–237).

## What the sources say

- SRC-186 introduces responsible AI because AI applications often inform decisions through probabilistic models trained on data, and human-like AI can make users over-trust the system (SRC-186 L218–219).
- Fairness means AI systems should treat all people fairly and avoid bias that gives specific groups unfair advantage or disadvantage; tooling can help evaluate unfairness, but the source says tooling alone is insufficient and fairness must be considered from the start with representative data and subgroup evaluation (SRC-186 L221–223).
- Reliability and safety mean systems should work as expected before release, with rigorous testing, deployment management, and appropriate thresholds for probabilistic confidence scores (SRC-186 L224–226).
- Privacy and security mean models and production systems must safeguard data and customer content, including new data used after deployment (SRC-186 L227–228).
- Inclusiveness means AI should empower everyone; the source gives diverse participation in design, development, and testing as one way to improve it (SRC-186 L229–231).
- Transparency means users should know a system's purpose, how it works, expected limitations, prediction factors, confidence scores, and how personal data is used and retained (SRC-186 L232–235).
- Accountability means people remain responsible for AI systems, including developers who trained and validated models and designers of decision logic, within governance and organizational principles (SRC-186 L236–237).
- SRC-183 repeats the six principles in the course introduction and says the course will revisit them through data grounding, prompt refinement, guardrails, user experience, and ongoing operations (SRC-183 L514–539).

## How it works in Azure

The corpus does not present a single Azure control that implements all six principles. Instead, it spreads the work across the solution: data and grounding choices, prompt refinement, [[guardrails-and-content-filters]], user experience, and operations are named as places where the principles are reinforced (SRC-183 L526–539). **Synthesis:** In this wiki, the principles page owns the ethical categories; [[responsible-ai-lifecycle]] owns the plan; [[guardrails-and-content-filters]] owns safety-system controls; and [[prompt-injection-and-jailbreaks]] owns subversion attacks and prompt-shield defences (SRC-183 L526–539; SRC-186 L220–237).

## Code and configuration

The corpus does not give SDK code for these principles. It gives design and governance behaviours: review data for representativeness, test subgroup performance, set confidence thresholds, safeguard data, include diverse perspectives, disclose purpose and limits, and define governance accountability (SRC-186 L223–237).

## Decision boundaries

| **Inference:** If the scenario emphasizes... | Principle most directly tested |
|---|---|
| Bias, representative training data, uneven subgroup performance | Fairness (SRC-186 L221–223) |
| Testing, deployment management, high-risk predictions, confidence thresholds | Reliability and safety (SRC-186 L224–226) |
| Personal data, customer content, access, retention, safeguards | Privacy and security (SRC-186 L227–228; SRC-186 L234–235) |
| Physical ability, gender, ethnicity, or diverse participation in design/testing | Inclusiveness (SRC-186 L229–231) |
| Purpose, limitations, influential features, confidence scores, data-use disclosure | Transparency (SRC-186 L232–235) |
| Who owns validation, decision logic, governance, legal standards | Accountability (SRC-186 L236–237) |

**Inference:** Do not choose this page's principles when a question asks for a concrete Foundry safety configuration; choose [[guardrails-and-content-filters]] or [[azure-ai-content-safety]] when the deciding detail is filtering, harm category, severity, or moderation.

## Failure modes and misconceptions

- Treating responsible AI as only content filtering misses fairness, privacy, inclusiveness, transparency, and accountability (SRC-186 L220–237).
- Treating fairness as a tool setting is too narrow: the source explicitly says tooling alone is not sufficient (SRC-186 L223).
- Treating autonomous AI as ownerless contradicts the accountability principle: people remain responsible for model training, validation, and decision logic (SRC-186 L236–237).

## Solution Engineering transfer

**Inference:** A customer signal such as "we need to prove this is safe for every user group" points to fairness evaluation and governance, while "we need the bot to stop unsafe outputs" points to guardrails. A useful discovery question is: which principle is the actual risk if the model is wrong, biased, unclear, misused, or unowned?

## Connections

- [[responsible-ai-lifecycle]] — turns principles into map, measure, mitigate, and manage work.
- [[guardrails-and-content-filters]] — concrete safety-system mitigation for harmful prompts and responses.
- [[model-and-app-evaluation]] — reliability, fairness, and safety require measurement and testing.
- [[observability-and-tracing]] — accountability and operations require evidence about what happened.
- [[src-186-responsible-ai]] — primary written source for the six principles.
- [[src-183-plan-prepare-develop-ai-solutions-azure-episode-1]] — course framing for how principles recur across platform choices.
- *Also linked from:* [[pii-detection-and-redaction]]

## Sources

- SRC-183 — [[src-183-plan-prepare-develop-ai-solutions-azure-episode-1]] — episode framing of responsible AI across grounding, prompts, guardrails, UX, and operations.
- SRC-186 — [[src-186-responsible-ai]] — primary source defining the six principles.

## Open questions

- The corpus does not provide detailed tooling for formal fairness analysis beyond saying tools exist and are insufficient by themselves (SRC-186 L223).
