---
title: "Model and app evaluation"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Manual and automated ways to measure model, app and agent quality, safety, groundedness and regression risk."
area: models
source_ids: [SRC-53, SRC-95, SRC-114, SRC-145, SRC-154, SRC-178, SRC-186, SRC-189, SRC-191, SRC-196]
objectives: [P14, G04]
objective_gaps: [P10, G12, G15]
tags: []
aliases: ["evaluation", "evaluators", "groundedness", "relevance metrics", "fluency", "coherence", "defect rate"]
---

# Model and app evaluation

## Summary

Model and app evaluation is the measurement loop that checks whether a model, agent, dataset, or application response is accurate, relevant, safe, grounded, fluent, coherent, and good enough to ship or improve (SRC-53 L213–219; SRC-53 L240–296).

## The problem it solves

Generative AI behavior can look acceptable in a few examples while still failing on quality, safety, grounding, or user expectations. Evaluation catches those failures before production, supports continuous improvement as prompts or models change, and verifies compliance and safety requirements (SRC-53 L213–219). The AI-103 study guide also makes evaluation a recurring requirement across model performance, drift, safety events, grounding quality, fabrications, and agent behavior (SRC-191 L132–154).

## Mental model

Evaluation turns subjective model behavior into evidence. Manual evaluation uses people to inspect responses and understand nuance; automated evaluation applies metrics and evaluators over test data at scale; comprehensive Foundry evaluations run jobs against models, agents, or datasets and report aggregate and per-row results (SRC-53 L220–296). The result is not merely a score: it decides whether to change prompts, try another model, add RAG, fine-tune, apply filters, or validate that a change did not regress quality (SRC-53 L288–296).

## What the sources say

- Evaluation serves quality assurance, user satisfaction, continuous improvement, and compliance or safety verification (SRC-53 L213–219).
- Manual evaluation includes interactive playground testing, side-by-side model comparison, structured review with rating criteria, and user studies. It captures subjective quality aspects that metrics alone may miss (SRC-53 L220–239).
- Automated evaluation metrics include generation quality metrics: groundedness, relevance, coherence, and fluency (SRC-53 L240–253). A knowledge check asks which metric measures linguistic correctness and natural language quality; the listed correct answer is Fluency (SRC-145 L223–226).
- Risk and safety metrics include self-harm, hateful and unfair content, violent content, sexual content, protected material, and indirect attack or jailbreak vulnerability (SRC-53 L254–260).
- For content harm metrics, results aggregate as defect rate over a severity threshold, and protected material or indirect attack defect rate is true instances divided by total instances times 100 (SRC-53 L261–262).
- AI-assisted evaluation uses a GPT model as an evaluator that analyzes deployed-model responses and assigns scores based on selected criteria (SRC-53 L263–265).
- NLP metrics such as F1, BLEU, METEOR, ROUGE, and GLEU compare generated outputs with ground truth or reference texts and are less suitable for open-ended generation with many valid responses (SRC-53 L266–269).
- Foundry evaluations can target a model, agent, or dataset. Model or agent evaluations need input datasets; dataset evaluations use pre-generated outputs (SRC-53 L270–278).
- Test data can be uploaded as CSV or JSONL, selected from existing datasets, or generated synthetically from a topic description and optional uploaded files (SRC-53 L279–285).
- Evaluation jobs run asynchronously after configuring metrics, field mappings, and system prompt, then produce aggregate scores and prompt-level details (SRC-53 L286–287).
- The evaluator library lists Microsoft-curated and custom evaluators, supports details such as parameters and annotation prompts, and supports version management (SRC-53 L293–296).

## How it works in Azure

The corpus places evaluation in Foundry as part of the model lifecycle: select a model, deploy it, test it in the playground, and assess model performance using evaluation approaches and metrics (SRC-114 L216–222; SRC-196 L14–15). The episode demo shows the same path: manual side-by-side comparison in the playground, then an automated evaluation configured for a model, generated dataset, developer message, relevance, safety evaluators, asynchronous run status, completion results, analysis, failed sample inspection, and suggestions for prompt improvement (SRC-189 L661–760; SRC-189 L761–910).

Responsible AI sources widen the purpose: reliability and safety require rigorous testing, validation, and monitoring, while fairness requires assessing systems against fairness criteria and taking mitigations (SRC-186 L221–226). Harm measurement begins with manual testing and evaluation, then can scale with automated measurements such as classification models (SRC-154 L19–23).

## Code and configuration

**Synthesis:** The corpus describes Foundry evaluation configuration more than application code. The load-bearing configuration objects are (SRC-53 L270–296; SRC-189 L761–910):

- Evaluation target: model, agent, or dataset (SRC-53 L270–273).
- Dataset: uploaded CSV/JSONL, existing project dataset, or synthetic dataset generated from a topic description and optional files (SRC-53 L274–285).
- Metrics/evaluators: quality, safety, NLP, Microsoft-curated, or custom evaluators (SRC-53 L240–269; SRC-53 L293–296).
- Field mappings and system prompt: required to map evaluation data and model context before the asynchronous job starts (SRC-53 L286).
- Results: aggregate scores plus details for each test prompt; episode analysis shows failed examples and recommendations for improvement (SRC-53 L287; SRC-189 L850–910).

**Inference:** for app evaluation, persist the prompt, model/deployment, generation parameters, retrieval context, expected answer if any, and safety policy version with each test row so failures can be diagnosed rather than only scored.

## Decision boundaries

| **Inference:** Scenario detail | Evaluation approach |
|---|---|
| Early exploration or qualitative debugging | Manual playground testing and side-by-side comparison (SRC-53 L220–225; SRC-189 L661–760). |
| Repeatable quality evidence across many examples | Foundry evaluation job with datasets, metrics, field mappings and asynchronous results (SRC-53 L270–287). |
| Subjective brand fit or user satisfaction | Structured human review or user studies (SRC-53 L226–239). |
| Factual grounding in supplied context | Groundedness or Groundedness Pro (SRC-53 L246–248). |
| Linguistic correctness | Fluency (SRC-53 L252; SRC-145 L223–226). |
| Harmful content or jailbreak vulnerability | Risk and safety metrics and defect rate (SRC-53 L254–262). |
| Exact-answer or reference-text comparison | NLP metrics such as F1, BLEU, METEOR, ROUGE, or GLEU (SRC-53 L266–269). |

**Inference:** an exam scenario asking whether answers are based on provided context points to groundedness; whether the wording is natural and linguistically correct points to fluency; whether the answer addresses the prompt points to relevance; whether it flows logically points to coherence (SRC-53 L246–253).

## Failure modes and misconceptions

- Mistaking playground success for full evaluation. Playground testing is useful but manual and qualitative; automated evaluation scales and gives consistent measurements (SRC-53 L220–225; SRC-53 L240–270).
- Choosing NLP metrics for open-ended generation. The source says NLP metrics work best with definitive correct answers or reference texts and are less suitable for open-ended generation (SRC-53 L266–269).
- Evaluating without enough test data. The episode notes more samples generally improve thoroughness, even though a smaller set was used for demonstration (SRC-189 L720–735).
- Treating a single aggregate score as the whole answer. The Foundry results include aggregate scores and details for each test prompt; the episode drills into a failed conversation and improvement suggestions (SRC-53 L287; SRC-189 L850–910).
- Optimizing without a baseline. The fine-tuning source warns that without baseline performance it is hard to detect whether a change improved or degraded behavior (SRC-95 L245–247).
- Treating prompt instructions as sufficient safety or quality proof. The prompt source says system messages influence behavior but require testing, iteration, content filtering, and evaluation (SRC-178 L239–240).

## Solution Engineering transfer

**Inference:** customer signal: the customer asks how they will know whether a model or agent is safe and accurate enough, or whether a prompt/model change made things better. Map this to evaluation datasets, metrics, and repeated runs rather than ad hoc demos (SRC-53 L213–219; SRC-53 L270–296).

**Inference:** discovery question: ask what failure matters most: unsupported facts, irrelevant answers, unsafe content, poor language, user dissatisfaction, or regression after changes. That selects groundedness, relevance, safety defect rate, fluency, manual review, or benchmark-style regression tests (SRC-53 L226–269).

**Inference:** trade-off: manual review is slower but sees nuance; automated evaluation scales but depends on metric fit, data quality, and evaluator configuration (SRC-53 L220–270).

## Connections

- [[model-playgrounds]] — manual testing and side-by-side comparison surface.
- [[model-benchmarks]] — pre-selection signals before deployed evaluation.
- [[model-selection]] — evaluation results can drive model choice.
- [[prompt-engineering]] — evaluation results often lead to prompt refinement.
- [[retrieval-augmented-generation]] — groundedness measures whether answers use provided context.
- [[fine-tuning]] — baseline and post-tuning measurement.
- [[guardrails-and-content-filters]] — safety metrics can lead to filtering or guardrail changes.
- [[responsible-ai-lifecycle]] — evaluation is part of measuring and managing harms.
- [[observability-and-tracing]] — deployed evaluation complements runtime monitoring and error analysis.
- [[agent-testing-and-evaluation]] — agent-specific evaluation and multi-turn behavior.
- [[src-53-evaluate-model-performance]] — central evaluation unit.
- [[src-189-select-deploy-evaluate-microsoft-foundry-models-episode-2]] — evaluation walkthrough.
- *Also linked from:* [[azure-ai-content-safety]] · [[generative-ai-fundamentals]] · [[overview]] · [[prompt-injection-and-jailbreaks]] · [[responsible-ai-principles]]

## Sources

- SRC-53 — [[src-53-evaluate-model-performance]] — main evaluation approaches, metrics and Foundry evaluation flow.
- SRC-95 — [[src-95-fine-tune-model-consistent-behavior]] — baseline requirement before fine-tuning.
- SRC-114 — [[src-114-introduction-select-deploy-evaluate-microsoft-foundry-models]] — module scope for model selection, deployment and evaluation.
- SRC-145 — [[src-145-knowledge-check-select-deploy-evaluate-microsoft-foundry-models]] — metric knowledge check.
- SRC-154 — [[src-154-measure-potential-harms]] — manual and automated harm measurement.
- SRC-178 — [[src-178-optimize-model-output-prompt-engineering]] — system messages require testing, iteration, filters and evaluation.
- SRC-186 — [[src-186-responsible-ai]] — reliability, safety and fairness require testing and assessment.
- SRC-189 — [[src-189-select-deploy-evaluate-microsoft-foundry-models-episode-2]] — episode demo of playground comparison and automated evaluation.
- SRC-191 — [[src-191-study-guide-exam-ai-103-developing-ai-apps-agents]] — official objective coverage for evaluation, drift, safety and grounding quality.
- SRC-196 — [[src-196-summary-select-deploy-evaluate-microsoft-foundry-models]] — module summary naming evaluation approaches.

## Open questions

- The corpus does not define exact scoring thresholds for passing each metric in a production release gate.
- The corpus does not specify every evaluator's prompt, model, version, or statistical reliability limits.
