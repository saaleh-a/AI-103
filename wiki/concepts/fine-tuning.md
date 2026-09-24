---
title: "Fine-tuning"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Adapting a pretrained model with task-specific examples for consistent style, format, tool use or distilled behavior."
area: models
source_ids: [SRC-19, SRC-53, SRC-89, SRC-95, SRC-161, SRC-177, SRC-202]
objectives: [G13, T04]
objective_gaps: []
tags: []
aliases: ["supervised fine-tuning", "reinforcement fine-tuning", "Direct Preference Optimization", "DPO", "distillation", "LoRA"]
---

# Fine-tuning

## Summary

Fine-tuning further trains a pretrained language model on task-specific examples so its internal weights better reproduce the target style, tone, format, tool-use behavior, or distilled capability. The corpus presents it as a heavier optimization step after baseline evaluation and prompt engineering (SRC-95 L218–222; SRC-95 L230–237).

## The problem it solves

Prompt engineering and RAG can still leave a model inconsistent. The fine-tuning source introduces the trigger: prompt engineering alone may not achieve the consistency needed for style, tone, or structured format (SRC-95 L224–227). Fine-tuning addresses that by training on examples that demonstrate the pattern you want, making responses more consistently match the training data (SRC-95 L218–222).

## Mental model

**Inference:** Fine-tuning specializes a generalist. The base model keeps broad language ability, but additional examples move it toward a narrower response pattern. The corpus says Foundry fine-tuning uses LoRA, which updates a smaller subset of important parameters rather than retraining every parameter, making customization faster and more cost-effective than full retraining (SRC-95 L220–222).

## What the sources say

- Fine-tuning is the process of taking a pretrained language model and further training it on a smaller, task-specific dataset so responses are consistent with the patterns in that data (SRC-95 L218–220).
- The key benefit over training from scratch is efficiency: less time, fewer compute resources, and significantly less data (SRC-95 L222).
- Common use cases include consistent style and tone, reliable structured formats such as JSON, reducing long prompt length, distillation from a large model to a smaller one, and improving tool selection and parameter generation (SRC-95 L224–229).
- Baseline evaluation is required before tuning; without a baseline it is hard to tell whether fine-tuning improved or degraded performance (SRC-95 L230–231). The evaluation source lists fine-tuning as one possible next step when evaluation scores are lower than required, but notes complexity and cost can grow (SRC-53 L288–292).
- Microsoft Foundry offers supervised fine-tuning, reinforcement fine-tuning, and Direct Preference Optimization. SFT uses labeled prompt-and-response pairs; RFT uses a grader and iterative feedback; DPO uses preferred and non-preferred response pairs and is computationally lighter than traditional reinforcement learning approaches (SRC-95 L232–237).
- The episode demonstration shows fine-tuning data in JSONL or lines format with a standard system prompt, user content, and assistant responses that demonstrate the desired style (SRC-177 L661–710).
- The comparison source says fine-tuning has the highest upfront investment: training data, training compute, custom-model hosting, and possible retraining when base models or requirements change (SRC-19 L231).
- The model catalog can be filtered by supported fine-tuning methods, so fine-tuning availability is model-specific (SRC-89 L220–224).
- The module assessment tests fine-tuning as optimizing consistency of behavior, style, and output format, and combines it with RAG for product-catalog data and prompt engineering for conversation-specific instructions (SRC-161 L228–235).
- The module summary gives the same boundary: start with prompt engineering, add RAG for domain-specific factual accuracy, and consider fine-tuning when consistent style and format cannot be achieved reliably with prompting alone (SRC-202 L211–224).

## How it works in Azure

In Foundry, fine-tuning is part of the model optimization path rather than the first step. The comparison source says prompt engineering is the foundation, RAG optimizes for context, and fine-tuning optimizes the model for response format, style, tone, and behavior consistency (SRC-19 L217–224). The fine-tuning source describes choosing a supported method, while the comparison source identifies cost and maintenance trade-offs (SRC-95 L248–256; SRC-19 L235–239).

The episode source demonstrates the portal path at a high level by moving from prompt engineering to fine-tuning, preparing data in JSONL form, and tuning a model for travel-assistant behavior (SRC-177 L203–218; SRC-177 L661–670). **Stale-risk:** portal screens, supported base models, and fine-tuning method availability can change; the corpus itself says catalog filters expose model-specific fine-tuning methods (SRC-89 L220–224).

## Code and configuration

**Synthesis:** The corpus provides the data-shape requirements more clearly than a reusable code template (SRC-95 L248–256; SRC-177 L661–710):

- Format: JSONL or lines format for fine-tuning data (SRC-177 L661–670).
- Chat shape: a standard system prompt, user content, and assistant response examples (SRC-177 L671–710).
- Desired pattern: the assistant responses demonstrate the style the tuned model should learn, such as repeated response phrasing and tone (SRC-177 L681–704).

## Decision boundaries

| **Inference:** Scenario detail | Fine-tuning fits | Use something else first |
|---|---|---|
| Persistent tone, style, or format inconsistency after good prompts | Yes; this is the central use case (SRC-95 L213–220; SRC-95 L226–232). | Start with prompt engineering and generation parameters if not tried (SRC-19 L252–258). |
| Missing current, private, or product-catalog facts | No; use RAG for context and current data (SRC-19 L220; SRC-19 L230–231). | [[retrieval-augmented-generation]]. |
| Prompt is too long because it carries many examples | Fine-tuning can embed patterns and reduce per-request prompt size (SRC-95 L227). | First verify the examples are actually needed. |
| Need a cheaper smaller model to mimic a stronger one | Distillation is a fine-tuning use case (SRC-95 L228). | Model selection or deployment changes if behavior transfer is not needed. |
| No baseline or insufficient examples | Do not tune yet; evaluate baseline and prepare representative JSONL examples first (SRC-95 L245–247; SRC-177 L661–710). | [[model-and-app-evaluation]] and data preparation. |

**Inference:** keep the prompt-engineering versus RAG versus fine-tuning comparison in [[optimization-strategies-compared]]. This page owns fine-tuning mechanics, data requirements, and costs.

## Failure modes and misconceptions

- Fine-tuning before measuring. The corpus explicitly warns to baseline a standard model first (SRC-95 L230–231).
- Fine-tuning to add factual knowledge. The comparison source says RAG is for external data and factual context, while fine-tuning is for consistent behavior (SRC-19 L220–225; SRC-19 L230–231).
- Underestimating training and hosting work. The comparison source says fine-tuning requires training data, training compute, custom-model hosting, and possible retraining when base models or requirements change (SRC-19 L231).
- Providing examples that do not show the desired output pattern. The episode's JSONL demonstration relies on repeated assistant-response style across examples (SRC-177 L681–710).
- Assuming every model can be tuned the same way. The catalog source exposes fine-tuning methods as a filter, implying support varies by model (SRC-89 L220–224).

## Solution Engineering transfer

**Inference:** customer signal: brand voice, compliance summary format, tool-call arguments, or JSON schema shape must be consistent across many interactions, and prompts have already been tested. Fine-tuning becomes plausible because the source targets style, format, tone, prompt-length reduction, distillation, and tool usage (SRC-95 L224–229).

**Inference:** discovery question: ask for baseline results, example shape, update frequency, and acceptable training/hosting cost before recommending fine-tuning (SRC-95 L245–256; SRC-19 L235–239; SRC-177 L661–710).

## Connections

- [[prompt-engineering]] — first optimization layer before fine-tuning.
- [[generation-parameters]] — another lightweight behavior-control lever before tuning.
- [[retrieval-augmented-generation]] — use for missing facts rather than behavior consistency.
- [[model-and-app-evaluation]] — baseline and post-tuning measurement.
- [[model-catalog]] — model-specific fine-tuning support is discoverable in the catalog.
- [[model-selection]] — tuning is only available for supported models and may change model choice.
- [[optimization-strategies-compared]] — canonical comparison of prompt engineering, RAG and fine-tuning.
- [[src-95-fine-tune-model-consistent-behavior]] — main fine-tuning unit.
- [[src-19-compare-combine-optimization-strategies]] — optimization strategy boundary.
- *Also linked from:* [[overview]]

## Sources

- SRC-19 — [[src-19-compare-combine-optimization-strategies]] — fine-tuning in the optimization spectrum.
- SRC-53 — [[src-53-evaluate-model-performance]] — fine-tuning as an evaluation-driven improvement option.
- SRC-89 — [[src-89-explore-model-catalog]] — catalog filters for fine-tuning methods.
- SRC-95 — [[src-95-fine-tune-model-consistent-behavior]] — main fine-tuning mechanics, use cases, data, and costs.
- SRC-161 — [[src-161-module-assessment-optimize-generative-ai-model-performance-microsoft-foundry]] — assessment combinations including fine-tuning for brand voice.
- SRC-177 — [[src-177-optimize-generative-ai-model-performance-microsoft-foundry-episode-5]] — episode fine-tuning demonstration and JSONL data.
- SRC-202 — [[src-202-summary-optimize-generative-ai-model-performance-microsoft-foundry]] — summary of tuning when prompts alone cannot achieve consistency.

## Open questions

- The corpus does not list all currently supported fine-tunable models, regions, costs, or hyperparameter ranges.
- The corpus does not give a complete production MLOps process for versioning, approving, and retiring fine-tuned models.
