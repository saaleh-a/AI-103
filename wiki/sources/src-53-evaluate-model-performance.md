---
title: "Evaluate model performance"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains manual, automated, NLP, safety, and dataset-based evaluation approaches for deployed Foundry models and agents."
area: models
source_ids: [SRC-53]
objectives: [P10, P14, G04, G12, G15]
tags: [model-evaluation, evaluators, safety-metrics]
aliases: ["SRC-53"]
source_kind: learn-unit
module: "Select, deploy, and evaluate Microsoft Foundry models"
learning_path: null
unit: "5 of 8"
presenters: []
raw_file: "53-Evaluate model performance - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/model-catalog-evaluate/5-evaluate-performance"
ingest_depth: full
---
# Evaluate model performance

*learn-unit · Select, deploy, and evaluate Microsoft Foundry models · unit 5 of 8 · SRC-53*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-53 |
| Raw file | 53-Evaluate model performance - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | null |
| Module | Select, deploy, and evaluate Microsoft Foundry models |
| Unit / episode | 5 of 8 |
| Presenter(s) | none |
| URL | https://learn.microsoft.com/en-gb/training/modules/model-catalog-evaluate/5-evaluate-performance |
| Teaching content | L209–296 of 326 |
| Content length | ~1299 words |
| Capture quality | high |
| Ingest depth | full |

## TL;DR

Evaluation checks whether a deployed model is accurate, relevant, safe, and improving; Foundry supports manual testing, AI-assisted evaluation, NLP metrics, evaluator libraries, and systematic jobs over datasets. (SRC-53 L213–296)

## Key claims

- Evaluation supports quality assurance, user satisfaction, continuous improvement, and compliance/safety verification. (SRC-53 L214–219)
- Manual evaluation includes playground testing, side-by-side model testing, structured human review, and user studies. (SRC-53 L220–241)
- Automated metrics include generation quality metrics such as groundedness, relevance, coherence, and fluency. (SRC-53 L237–242)
- Risk and safety metrics include self-harm, hateful and unfair content, violent content, sexual content, protected material, and indirect attack. (SRC-53 L243–250)
- NLP metrics include F1-score, BLEU, METEOR, ROUGE, and GLEU, and these usually require ground truth data. (SRC-53 L252–259)
- Evaluations can be based on a deployed model, an agent, or a dataset of pre-generated outputs. (SRC-53 L260–265)
- Evaluation results should drive iteration through prompt engineering, model choice, RAG, fine-tuning, content filters, prompt hardening, output validation, and re-running evaluations. (SRC-53 L283–296)

## How it works

Manual evaluation begins with human inspection: prompts are tried in the playground, models can be tested side by side with synchronized prompts and instructions, and structured reviewers rate outputs for relevance, informativeness, engagement, accuracy, and safety. (SRC-53 L220–237)

Automated evaluation scales the process by applying standard metrics. Foundry quality metrics evaluate whether the response is grounded, relevant, coherent, and fluent, while safety metrics calculate defect rates for content harms and attack-related issues. (SRC-53 L236–251)

Comprehensive evaluations can evaluate a model, agent, or existing dataset. A dataset may be uploaded as CSV/JSONL, selected from existing project datasets, or synthetically generated from a topic description. (SRC-53 L260–271)

## Code and API patterns

Not covered by this source.

## Key terms

- Groundedness — whether responses are based on provided context rather than speculation. (SRC-53 L239)
- Relevance — whether responses address the user's question or request appropriately. (SRC-53 L240)
- Coherence — whether responses flow logically and maintain consistent ideas. (SRC-53 L241)
- Fluency — linguistic correctness and natural language quality. (SRC-53 L242)
- Defect rate — percentage of responses exceeding a severity threshold for harms, or true instances divided by total instances for protected material and indirect attack. (SRC-53 L250)
- Evaluator library — the project area for Microsoft-curated and custom evaluators, prompts, definitions, severity levels, files, and versions. (SRC-53 L274–282)

## Decision boundaries and exam cues

- **Inference:** Use manual evaluation when the scenario asks for qualitative inspection, brand fit, user satisfaction, or subjective appropriateness. (SRC-53 L220–241)
- **Inference:** Use AI-assisted evaluation when the scenario requires scalable assessment of generation quality or safety across many prompts. (SRC-53 L236–251)
- **Inference:** Use NLP metrics when the scenario has ground truth or reference answers; avoid treating them as sufficient for open-ended generation without definitive correct answers. (SRC-53 L252–259)
- **Inference:** Choose evaluation jobs and datasets when the scenario asks for systematic assessment across many test cases. (SRC-53 L260–282)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** Available evaluators, safety metrics, severity thresholds, and generated dataset features are portal capabilities that can change. (SRC-53 L237–282)
- The source says AI-assisted evaluation requires specifying a GPT model as evaluator, so evaluator choice itself is a design variable. (SRC-53 L264–265)

## Relation to other sources

- [[src-39-deploy-models-endpoints]] explains deployment details required before evaluating a deployed model. (SRC-39 L213; SRC-53 L213)
- [[src-188-select-models-benchmarks]] covers benchmark comparison before deployment; this source covers evaluating model outputs after deployment or generation. (SRC-188 L213–216; SRC-53 L260–282)
- [[src-145-knowledge-check-select-deploy-evaluate-microsoft-foundry-models]] asks for the metric that measures linguistic correctness and natural language quality. (SRC-53 L252; SRC-145 L223–227)
- [[src-189-select-deploy-evaluate-microsoft-foundry-models-episode-2]] demonstrates automated model evaluation with generated travel prompts and safety/relevance evaluators. (SRC-53 L260–296; SRC-189 L761–910)

## Connections

- [[model-and-app-evaluation]] — this source directly teaches evaluation approaches and metrics. (SRC-53 L213–296)
- [[model-playgrounds]] — playground testing is the first manual evaluation surface. (SRC-53 L220–225)
- [[guardrails-and-content-filters]] — safety metrics and mitigation options connect evaluation to guardrails. (SRC-53 L243–250; SRC-53 L291–294)
- [[azure-ai-content-safety]] — content filters are suggested when safety metrics show concerns. (SRC-53 L291–292)
- [[retrieval-augmented-generation]] — RAG is a remediation path when outputs need grounding. (SRC-53 L288)
- [[fine-tuning]] — fine-tuning is a later, potentially more complex improvement path. (SRC-53 L289)
- [[observability-and-tracing]] — repeated evaluation aligns with operational quality. (SRC-53 L295–296)
- *Module units:* [[src-114-introduction-select-deploy-evaluate-microsoft-foundry-models|1 Introduction]] · [[src-89-explore-model-catalog|2 Explore the model catalog]] · [[src-188-select-models-benchmarks|3 Select models using benchmarks]] · [[src-39-deploy-models-endpoints|4 Deploy models to endpoints]] · [[src-80-exercise-select-deploy-evaluate-models|6 Exercise - Select, deploy, and evaluate models]] · [[src-145-knowledge-check-select-deploy-evaluate-microsoft-foundry-models|7 Knowledge check]] · [[src-196-summary-select-deploy-evaluate-microsoft-foundry-models|8 Summary]] · [[src-189-select-deploy-evaluate-microsoft-foundry-models-episode-2|episode 2]]

## Open questions

- The source does not define numeric pass thresholds for evaluation scores or defect rates. (SRC-53 L236–296)

## Sources

- SRC-53 — raw file: [[53-Evaluate model performance - Training - Microsoft Learn]]
