---
title: "Optimization strategies compared"
type: synthesis
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Compares prompt engineering, generation parameters, RAG, fine-tuning and evaluation as progressively heavier optimization levers."
area: models
source_ids: [SRC-19, SRC-23, SRC-53, SRC-89, SRC-95, SRC-99, SRC-102, SRC-161, SRC-177, SRC-178, SRC-202]
objectives: [G02, G04, G13, T04]
objective_gaps: [G14]
tags: []
aliases: ["prompt engineering vs RAG vs fine-tuning"]
---

# Optimization strategies compared

## Summary

**Synthesis:** The corpus presents optimization as a layered loop: prompt engineering and generation parameters are the lightest behavior controls, RAG adds missing trusted context, fine-tuning changes model behaviour through examples, and evaluation decides whether any change improved quality, safety, groundedness or consistency (SRC-178 L213–291; SRC-19 L216–239; SRC-102 L217–230; SRC-95 L217–256; SRC-53 L270–296).

## Scope and question

**Inference:** This page answers: when a model response is unsatisfactory, which lever should be tried first, which lever solves a different problem, and what evidence should prove the fix worked?

## Synthesis

### Decision table

| **Synthesis:** Failure or requirement | Prompt engineering / system instructions | Generation parameters | RAG | Fine-tuning | Evaluation |
|---|---|---|---|---|---|
| Wrong role, tone, format, boundaries, or task decomposition | Primary lever: system messages, examples, delimiters, format templates and prompt patterns (SRC-178 L221–272). | Supports prompt work by adjusting randomness and length (SRC-178 L273–279; SRC-99 L245–251). | Not the main lever unless missing facts caused the failure (SRC-19 L220–225). | Consider only after good prompts/examples still cannot achieve consistency (SRC-95 L217–224). | Measures whether changes improved quality and did not regress (SRC-53 L286–296). |
| Missing current, private, or domain-specific facts | Cannot supply information the model lacks (SRC-19 L227). | Does not add knowledge (SRC-178 L273–279). | Primary lever: retrieve external data at query time and add it to context (SRC-102 L217–230; SRC-19 L220). | Not the right lever for factual currency (SRC-19 L220–225). | Groundedness/relevance metrics can reveal whether context is used (SRC-53 L238–240). |
| Output is too random or too long | Prompt may specify desired style, but parameters provide runtime control (SRC-178 L232–279). | Primary lever: lower temperature/top_p or cap max tokens (SRC-178 L273–279; SRC-99 L249–251). | Not relevant unless randomness comes from conflicting retrieved context. | Too heavy for simple sampling/length control. | Compare outputs under recorded parameter settings (SRC-53 L220–287). |
| Persistent style, JSON shape, brand voice, or tool-call argument consistency after prompt work | First step and baseline lever (SRC-19 L222–227; SRC-95 L224–231). | May reduce variability but does not train pattern into model weights (SRC-99 L249–251). | Adds facts, not response-pattern consistency (SRC-19 L220). | Primary heavier lever with representative training examples (SRC-95 L225–246; SRC-177 L661–710). | Baseline before tuning and retest after tuning (SRC-95 L231; SRC-53 L286–296). |
| Need to know whether the fix worked | Ad hoc prompting is not enough by itself (SRC-178 L239–240). | Parameter changes must be recorded with test outputs. | Search/index quality affects result quality (SRC-19 L231–235). | Baseline required before fine-tuning (SRC-95 L245–247). | Primary lever: manual and automated evaluation, metrics, datasets and jobs (SRC-53 L213–296). |

### Recommended order

**Synthesis:** The source comparison explicitly says prompt engineering is the foundation, RAG optimizes for context, and fine-tuning optimizes behaviour consistency; the module summary says start with prompt engineering, add RAG for domain-specific factual accuracy, and consider fine-tuning when prompts cannot reliably achieve style/format consistency (SRC-19 L216–225; SRC-202 L211–224).

**Inference:** A practical optimization path is: define the failure, baseline with evaluation, improve prompt/parameters, add RAG if facts are missing, fine-tune only for persistent behaviour or format patterns, then evaluate again (SRC-53 L286–296; SRC-19 L252–258; SRC-95 L245–256).

### Near-miss scenario contrasts

1. **Inference:** *The assistant is polite but invents product prices.* Use RAG because the failure is missing current trusted data (SRC-102 L217–230). *The assistant knows the facts but answers in the wrong tone and structure.* Use prompt engineering first because the failure is behaviour/format guidance (SRC-178 L232–238).
2. **Inference:** *The assistant sometimes returns prose instead of required JSON despite strong few-shot examples over many runs.* Consider fine-tuning after baseline evaluation because the source names reliable structured formats as a tuning use case (SRC-95 L226–232; SRC-95 L245–247). *The assistant returns good JSON but with too many words in one field.* Adjust prompt/parameters before fine-tuning because token/length and instruction clarity are lighter levers (SRC-178 L271–279; SRC-99 L250).
3. **Inference:** *A brand assistant has thousands of approved answer examples and must consistently mimic the style.* Fine-tuning is plausible because consistency of style/tone is a core use case (SRC-95 L226–243). *A legal assistant must cite the latest policy from SharePoint.* RAG/Foundry IQ is the right family because the deciding detail is current private source material (SRC-102 L217–230; SRC-23 L223–237).
4. **Inference:** *The team changed the prompt and says outputs feel better.* Run evaluation because the corpus distinguishes manual impressions from automated evaluation jobs and metrics (SRC-53 L220–296). *The team has no baseline and wants to fine-tune immediately.* Do not tune yet; the fine-tuning source says baseline evaluation is required (SRC-95 L245–247).

## Evidence map

| **Synthesis:** Claim | Sources |
|---|---|
| Prompt engineering improves behavior with instructions, examples, delimiters and formats without extra infrastructure. | SRC-178 L213–272 |
| Temperature/top_p/max tokens steer randomness/diversity/length and are separate from adding knowledge. | SRC-178 L273–279; SRC-99 L245–251 |
| Prompt engineering cannot give a model missing private/current facts; RAG supplies query-time context. | SRC-19 L220–230; SRC-102 L217–230 |
| RAG quality depends on search index and chunking/indexing quality. | SRC-19 L231–235 |
| Fine-tuning trains a pretrained model on task-specific examples for consistent style, format, tone, distillation, prompt-length reduction or tool usage. | SRC-95 L217–243 |
| Fine-tuning requires baseline evaluation and representative examples. | SRC-95 L245–256; SRC-177 L661–710 |
| Foundry supports SFT, RFT and DPO, but exact model support is model-specific. | SRC-95 L248–256; SRC-89 L220–224 |
| Evaluation metrics and jobs are the measurement loop for quality, safety and improvement. | SRC-53 L213–296 |
| Assessment evidence tests combining RAG for product-catalog facts, fine-tuning for brand voice, and prompt engineering for instructions. | SRC-161 L228–235 |

## Tensions

- **Synthesis:** Prompting and generation parameters are cheap and immediate, but the corpus warns system messages influence rather than guarantee behaviour; testing, filtering and evaluation remain necessary (SRC-178 L239–240).
- **Synthesis:** Fine-tuning can reduce prompt length and improve consistency, but it has higher upfront investment, training data requirements, training compute, custom-model hosting and possible retraining (SRC-19 L227–231; SRC-95 L250–256).
- **Inference:** RAG and fine-tuning can combine: use RAG for product/catalog facts and fine-tuning for persistent format or brand voice, matching the module assessment's combined-strategy cue (SRC-161 L228–235).
- **Gap:** The corpus names model reflection, chain-of-thought evaluations and self-critique loops in objective G14, but this comparison does not teach implementation details for those loops beyond the prompt-engineering source's chain-of-thought discussion (SRC-178 L255–262).

## Implications for the exam and for practice

- **Inference:** Exam clue *current data, private data, product catalog, citations* points to RAG; *role, tone, output constraints, examples* points to prompt engineering; *temperature/randomness* points to generation parameters; *consistent brand voice/JSON after good prompts* points to fine-tuning; *prove quality/safety/groundedness* points to evaluation (SRC-19 L216–225; SRC-178 L232–279; SRC-95 L226–256; SRC-53 L240–287).
- **Inference:** In customer work, ask whether the failure is knowledge, behaviour, sampling variability, or measurement. That separates RAG, prompting, parameters/fine-tuning, and evaluation (SRC-19 L252–258; SRC-53 L213–219).
- **Inference:** Do not sell fine-tuning as a knowledge-ingestion shortcut; the corpus reserves external factual context for RAG and behaviour consistency for fine-tuning (SRC-19 L220–225; SRC-95 L226–243).

## Open questions

- The corpus does not provide production MLOps for fine-tuned model versioning/retirement, evaluator reliability limits, or implementation details for model reflection/self-critique loops (SRC-95 L245–256; SRC-53 L293–296).

## Sources

- SRC-19 — [[src-19-compare-combine-optimization-strategies]] — comparison of prompt engineering, RAG and fine-tuning.
- SRC-23 — [[src-23-configure-retrieval-foundry-iq]] — retrieval instructions and citations.
- SRC-53 — [[src-53-evaluate-model-performance]] — evaluation approaches, metrics and jobs.
- SRC-89 — [[src-89-explore-model-catalog]] — fine-tuning support is model-specific.
- SRC-95 — [[src-95-fine-tune-model-consistent-behavior]] — fine-tuning use cases, methods and baseline requirement.
- SRC-99 — [[src-99-generate-responses-responses-api-foundry-sdk]] — generation parameters and token/context behaviour.
- SRC-102 — [[src-102-ground-model-retrieval-augmented-generation]] — RAG definition and grounding problem.
- SRC-161 — [[src-161-module-assessment-optimize-generative-ai-model-performance-microsoft-foundry]] — assessment combinations.
- SRC-177 — [[src-177-optimize-generative-ai-model-performance-microsoft-foundry-episode-5]] — JSONL fine-tuning data shape.
- SRC-178 — [[src-178-optimize-model-output-prompt-engineering]] — prompt engineering patterns and generation parameters.
- SRC-202 — [[src-202-summary-optimize-generative-ai-model-performance-microsoft-foundry]] — strategy summary.
