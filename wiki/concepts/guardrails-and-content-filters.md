---
title: "Guardrails and content filters"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Foundry guardrails and content filters suppress unsafe prompts and responses using harm categories, severity levels, and related controls."
area: responsible-ai
source_ids: [SRC-53, SRC-57, SRC-100, SRC-101, SRC-106, SRC-152, SRC-156, SRC-170, SRC-182, SRC-191, SRC-196]
objectives: [P13, T02]
objective_gaps: [P14, V14]
tags: []
aliases: ["content filters", "guardrails", "harm categories", "severity levels", "content moderation", "safety filters"]
---

# Guardrails and content filters

## Summary

Guardrails are Foundry safety controls that suppress unsafe inputs or outputs, including through content filters that classify harm by category and severity (SRC-156 L229–231). This page owns the filtering and guardrail mechanism; [[prompt-injection-and-jailbreaks]] owns subversion attacks, and [[azure-ai-content-safety]] owns the named Azure service used as an additional protection layer.

## The problem it solves

A generative model can produce or accept harmful content even when the application intent is benign. The responsible AI lifecycle treats content filtering as one mitigation layer after harms have been mapped and measured (SRC-156 L218–231). The exercise source calls guardrail controls one of the most effective ways to mitigate harmful responses from generative AI models in Microsoft Foundry (SRC-57 L214).

## Mental model

A guardrail is a safety checkpoint around the model. It can inspect user input before the model sees it and inspect generated output before it reaches the user. The episode describes intervention points before the model and after model generation (SRC-106 L439–445). **Inference:** Content filters are the category-and-severity part of that checkpoint; guardrails are the broader Foundry configuration that can include content safety, jailbreak controls, and protected-material controls (SRC-106 L419–428; SRC-156 L229–231).

## What the sources say

- SRC-156 places guardrails in the safety-system layer, alongside platform-level configurations and capabilities that mitigate harm (SRC-156 L229–231).
- Foundry guardrails classify prompts and responses into four severity levels — safe, low, medium, and high — for five harm categories: hate and fairness, sexual, violence, self-harm, and task-adherence (SRC-156 L229–230).
- Foundry guardrails also include prompt shields that use abuse detection algorithms to determine whether a solution is being systematically abused, such as by a user attempting to subvert the system prompt (SRC-156 L231).
- SRC-106 shows a default V2 guardrail with jailbreak systems and content safety for hate, self-harm, sexual, and violence prompts at a medium block level (SRC-106 L396–413).
- SRC-106 then shows custom guardrails with jailbreak, content safety, and protected material in place at medium level, and the presenter raises blocking to a higher level (SRC-106 L419–437).
- SRC-53 lists safety evaluation categories for content harms: self-harm, hateful and unfair, violent, sexual, protected material, and indirect attack/jailbreak; it says content-harm metrics aggregate as defect rate above a severity threshold, typically Medium (SRC-53 L244–250).
- SRC-196 says Azure AI Content Safety services can add a protection layer against harmful content, and content filters can block inappropriate inputs and outputs to complement model-level safety features (SRC-196 L24).
- Sora video generation sources say prompts are subject to moderation or content filtering, and harmful prompts do not generate a video (SRC-100 L229; SRC-101 L237).
- The official study guide names safety filters, guardrails, risk detection, content moderation, responsible AI instrumentation, safety evaluations, and multimodal unsafe-content filters as exam skills (SRC-191 L135–179).

## How it works in Azure

In Microsoft Foundry, guardrails are configured around model or agent use as part of the safety-system layer (SRC-156 L229–231). The episode demonstrates assigning a custom guardrail to a GPT-4.1 deployment, replacing the default guardrail, and waiting for the replacement to apply before comparing behaviour against a native deployment (SRC-106 L335–352). **Stale-risk:** The episode uses a specific GPT-4.1 deployment and a default V2 guardrail UI captured at course time; product UI, model names, and defaults can change (SRC-106 L335–352; SRC-106 L396–431).

## Code and configuration

The corpus does not provide SDK code for creating guardrails. It does show and describe configuration concepts: content safety categories and blocking levels, default versus custom guardrails, intervention points, and applying guardrails to deployments (SRC-106 L396–455; SRC-156 L229–231).

## Decision boundaries

| **Inference:** Decision | Choose guardrails/content filters when... | Choose a neighboring concept when... |
|---|---|---|
| Safety control | The requirement is to block or moderate unsafe prompts/responses by category or severity (SRC-156 L229–230) | [[responsible-ai-lifecycle]] if the requirement is the full plan/process |
| Safety service | The requirement names adding Azure AI Content Safety services or content filters (SRC-196 L24) | [[azure-ai-content-safety]] if the named service, not the pattern, is the target |
| Jailbreak/subversion | The guardrail includes jailbreak systems or prompt shields (SRC-106 L400–428; SRC-156 L231) | [[prompt-injection-and-jailbreaks]] if the question is about attack type and defence boundary |
| Model quality | Safety metrics flag harmful content (SRC-53 L244–250) | [[model-and-app-evaluation]] if the question is evaluation workflow or evaluator library |

**Inference:** Exam wording such as "configure safety filters," "content moderation," "harm category," "severity level," or "block harmful prompts and responses" points here (SRC-191 L135–179).

## Failure modes and misconceptions

- Guardrails are not a complete responsible AI plan; they are a mitigation layer inside a broader lifecycle (SRC-182 L12–18; SRC-156 L218–231).
- Default guardrails may not be strict enough for every use case; the episode demonstrates raising block levels after testing (SRC-106 L396–437).
- Filtering does not replace model choice, prompt/grounding mitigation, UX constraints, telemetry, or release planning (SRC-152 L226–233; SRC-156 L224–240).
- Content harm categories differ slightly by source context: SRC-156 lists five Foundry guardrail categories including task adherence, while SRC-53's evaluator list includes protected material and indirect attack/jailbreak as safety evaluation categories (SRC-53 L244–250; SRC-156 L229–231).

## Solution Engineering transfer

**Inference:** A customer saying "we need the chatbot to refuse unsafe requests" maps to guardrails/content filters. Ask which harms to block, at which severity, on input and/or output, and how blocked events will feed evaluation and operations.

## Connections

- [[azure-ai-content-safety]] — service named as an additional layer and integrated in other services.
- [[prompt-injection-and-jailbreaks]] — subversion attacks handled by prompt shields/jailbreak guardrails.
- [[responsible-ai-lifecycle]] — guardrails belong to mitigation and management.
- [[model-and-app-evaluation]] — safety metrics identify when filters or prompt hardening are needed.
- [[video-generation]] — video prompts are moderated before generation.
- [[src-156-mitigate-potential-harms]] — primary layered mitigation source.
- [[src-57-exercise-apply-guardrails-prevent-output-harmful-content]] — exercise focused on guardrails.
- [[src-106-implement-responsible-generative-ai-solution-microsoft-foundry-episode-6]] — guardrails demo.
- *Also linked from:* [[model-benchmarks]] · [[overview]] · [[pii-detection-and-redaction]] · [[responsible-ai-principles]] · [[sora-2]] · [[vision-enabled-chat]]

## Sources

- SRC-53 — [[src-53-evaluate-model-performance]] — safety metrics and mitigation actions.
- SRC-57 — [[src-57-exercise-apply-guardrails-prevent-output-harmful-content]] — guardrails exercise.
- SRC-100 — [[src-100-generate-video-prompt]] — prompt moderation for video generation.
- SRC-101 — [[src-101-generate-video-python]] — content filtering for video generation prompts.
- SRC-106 — [[src-106-implement-responsible-generative-ai-solution-microsoft-foundry-episode-6]] — guardrails demo and defaults.
- SRC-152 — [[src-152-manage-responsible-generative-ai-solution]] — release planning context for guardrails not being sufficient alone.
- SRC-156 — [[src-156-mitigate-potential-harms]] — safety-system layer and categories.
- SRC-170 — [[src-170-module-assessment-implement-responsible-generative-ai-solution-microsoft-foundry]] — assessment cue for guardrails.
- SRC-182 — [[src-182-plan-responsible-generative-ai-solution]] — lifecycle context for guardrails as mitigation.
- SRC-191 — [[src-191-study-guide-exam-ai-103-developing-ai-apps-agents]] — safety filters and moderation objectives.
- SRC-196 — [[src-196-summary-select-deploy-evaluate-microsoft-foundry-models]] — Azure AI Content Safety as additional protection.

## Open questions

- The corpus does not include exact API calls or limits for guardrail configuration.
