---
title: "Fine-tune a model for consistent behavior"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains when to fine-tune, LoRA, SFT/RFT/DPO, JSONL training data, and fine-tuning costs and risks."
area: models
source_ids: [SRC-95]
objectives: [G13, T04]
tags: [fine-tuning, lora, supervised-fine-tuning, dpo, jsonl]
aliases: ["SRC-95"]
source_kind: learn-unit
module: "Optimize generative AI model performance with Microsoft Foundry"
learning_path: "Develop generative AI apps in Azure"
unit: "4 of 8"
presenters: []
raw_file: "95-Fine-tune a model for consistent behavior - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/optimize-generative-ai-model-performance/4-fine-tune-model"
ingest_depth: full
---
# Fine-tune a model for consistent behavior

*learn-unit · Optimize generative AI model performance with Microsoft Foundry · unit 4 of 8 · SRC-95*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-95 |
| Raw file | 95-Fine-tune a model for consistent behavior - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop generative AI apps in Azure |
| Module | Optimize generative AI model performance with Microsoft Foundry |
| Unit / episode | 4 of 8 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/optimize-generative-ai-model-performance/4-fine-tune-model |
| Teaching content | L211–256 of 286 |
| Content length | ~886 words |
| Capture quality | High |
| Ingest depth | full |

## TL;DR

Fine-tuning is the heavier strategy for when prompts and few-shot examples still do not produce consistent style, tone, format, or behavior. (SRC-95 L217–224)
The unit explains LoRA-based fine-tuning, SFT/RFT/DPO options, JSONL chat training data, baseline evaluation, and costs such as hosting, data quality, maintenance, experimentation, and drift. (SRC-95 L221–256)

## Key claims

- Fine-tuning trains a pretrained model on a smaller task-specific dataset and adjusts internal weights toward training-data patterns. (SRC-95 L218)
- LoRA updates a smaller subset of important parameters instead of retraining all parameters, making training faster and more cost-effective while maintaining quality. (SRC-95 L221)
- Fine-tuning is suited to style, tone, structured output, shorter prompts, distillation, and tool-usage accuracy. (SRC-95 L223–229)
- A baseline evaluation should come before fine-tuning so improvement or degradation can be detected. (SRC-95 L230–231)
- Microsoft Foundry offers supervised fine-tuning, reinforcement fine-tuning, and Direct Preference Optimization. (SRC-95 L232–237)
- Chat fine-tuning data uses JSONL examples with system, user, and assistant messages. (SRC-95 L238–248)
- Training data should be high quality, representative, numerous enough, and aligned exactly to the desired style, format, and tone. (SRC-95 L242–248)
- Fine-tuning adds training cost, hosting cost, data-quality risk, maintenance, hyperparameter experimentation, and model-drift risk. (SRC-95 L249–256)

## How it works

Fine-tuning specializes a general foundation model by training it with additional examples that reflect the target requirement. (SRC-95 L220)
LoRA makes the process more efficient by approximating weight changes through a lower-rank representation and updating only a smaller parameter subset. (SRC-95 L221–222)
The source distinguishes supervised fine-tuning for prompt-response patterns, reinforcement fine-tuning for grader-rewarded iterative behavior, and DPO for preferred versus non-preferred response pairs. (SRC-95 L232–237)
Training data must include representative conversations and should keep the same system message across examples and inference. (SRC-95 L238–248)

## Code and API patterns

The unit identifies JSONL as the fine-tuning data format and says each chat-completion example is a conversation with system, user, and assistant messages. (SRC-95 L238–240)
The captured JSON block is not present beyond `JSON` and `Copy` placeholders. (SRC-95 L239–241)

## Key terms

- Fine-tuning — further training a pretrained language model on a smaller task-specific dataset. (SRC-95 L218)
- LoRA — Low-Rank Adaptation, a technique that approximates weight changes with a lower-rank representation. (SRC-95 L221)
- Supervised fine-tuning — training on labeled prompt-and-response pairs. (SRC-95 L233–234)
- Reinforcement fine-tuning — iterative optimization with a grader that rewards better responses. (SRC-95 L235)
- Direct Preference Optimization — alignment from preferred and non-preferred response pairs. (SRC-95 L236)
- Distillation — using outputs from a larger model to train a smaller model for lower cost and latency. (SRC-95 L228)

## Decision boundaries and exam cues

- **Inference:** Choose fine-tuning when the scenario says prompts, system messages, and few-shot examples are not reliably maintaining style, tone, or format. (SRC-95 L217–231)
- **Inference:** Do not jump to fine-tuning before baseline evaluation; the source warns that improvement or degradation is otherwise hard to detect. (SRC-95 L230–231)
- **Inference:** If the scenario mentions JSONL conversations, hundreds of examples, consistent system messages, epochs, batch size, or learning rate, it is pointing to fine-tuning. (SRC-95 L238–254)
- **Inference:** If data changes frequently, fine-tuning has maintenance risk because models may need retraining. (SRC-95 L253)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

**Stale-risk:** The source names GPT-4o and Microsoft Foundry fine-tuning techniques; model availability and supported customization methods can change. (SRC-95 L220; SRC-95 L232–237)
Fine-tuning can make a model less effective outside its narrow domain if the specialization is too tight. (SRC-95 L255)

## Relation to other sources

SRC-178 covers prompt engineering, which should be tried before heavier optimization. (SRC-178 L217; SRC-178 L280–286)
SRC-19 compares fine-tuning with RAG and prompt engineering and says to add fine-tuning only if consistency still matters after prompts. (SRC-19 L230–231; SRC-19 L252–258)
SRC-177 demonstrates fine-tuning through a travel-assistant project, data set, customization method, training, deployment, and comparison. (SRC-177 L570–780)

## Connections

- [[fine-tuning]] — central concept.
- [[model-selection]] — base model and fine-tunable model choice matter.
- [[model-and-app-evaluation]] — baseline evaluation is required before tuning.
- [[prompt-engineering]] — first strategy to try before fine-tuning.
- [[generation-parameters]] — another lighter optimization lever than fine-tuning.

## Open questions

- The source names hyperparameters but does not teach how to choose epochs, batch size, or learning rate. (SRC-95 L254)

## Sources

- SRC-95 — raw file: [[95-Fine-tune a model for consistent behavior - Training - Microsoft Learn]]
