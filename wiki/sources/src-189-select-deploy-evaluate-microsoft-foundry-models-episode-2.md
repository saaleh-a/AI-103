---
title: "Select, deploy, and evaluate Microsoft Foundry models - AI-103 - Episode 2"
type: source
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Episode walkthrough of catalog filtering, benchmarks, deployment choices, playground comparison, and automated evaluation in Foundry."
area: models
source_ids: [SRC-189]
objectives: [P01, P06, P07, P09, P10, G01, G04, G06]
tags: [episode, model-lifecycle, foundry-demo]
aliases: ["SRC-189"]
source_kind: episode
module: "Select, deploy, and evaluate Microsoft Foundry models"
learning_path: null
unit: null
presenters: []
raw_file: "189-Select, deploy, and evaluate Microsoft Foundry models - AI-103 - Episode 2.md"
url: "https://www.youtube.com/watch?v=71gi8ULxPZQ"
ingest_depth: full
---
# Select, deploy, and evaluate Microsoft Foundry models - AI-103 - Episode 2

*episode · Select, deploy, and evaluate Microsoft Foundry models · SRC-189*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-189 |
| Raw file | 189-Select, deploy, and evaluate Microsoft Foundry models - AI-103 - Episode 2.md |
| Kind | episode |
| Learning path | null |
| Module | Select, deploy, and evaluate Microsoft Foundry models |
| Unit / episode | null |
| Presenter(s) | none captured in task metadata |
| URL | https://www.youtube.com/watch?v=71gi8ULxPZQ |
| Teaching content | L3–974 of 974 |
| Content length | ~4448 words |
| Capture quality | medium; auto-captioned transcript |
| Ingest depth | full |

## TL;DR

Rob Foulkrod demonstrates the full model lifecycle: use the Foundry catalog and filters, compare models with benchmarks and trade-off charts, deploy a model, compare deployed outputs in the playground, and run an automated evaluation over generated test data. (SRC-189 L3–28; SRC-189 L421–910)

## Key claims

- The episode frames model choice, clean deployment, and proof of performance as consequential skills because the wrong model can drag an application down. (SRC-189 L3–24)
- Foundry models fall into models sold directly from Azure and models from partners/community, with billing and hosting differences. (SRC-189 L29–63)
- Useful catalog filters include featured models, capabilities such as image generation, language training, model size, context window, and fine-tuning support. (SRC-189 L64–93)
- Benchmark dimensions include quality, safety, throughput, and cost, and each dimension pushes selection toward different trade-offs. (SRC-189 L94–183)
- Deployment requires choosing global, data-zone, or regional placement and standard, provisioned, batch, or developer-style deployment characteristics. (SRC-189 L184–309)
- Evaluation is broader than speed: the episode names quality, relevance, fluency, and groundedness as model-performance attributes. (SRC-189 L310–359)
- Manual evaluation can compare prompt responses side by side, while automatic evaluation can run a larger prompt dataset through models and grade results with AI systems. (SRC-189 L360–420)
- The portal demo compares GPT-4.1 and GPT-4.1 mini by cost, throughput, safety, quality, modalities, context window, and training data. (SRC-189 L421–660)
- The demo deploys GPT-4.1 with Global Standard, compares GPT-4.1 and GPT-4.1 mini in the playground, and uses a river-crossing puzzle to inspect output differences. (SRC-189 L661–760)
- The demo creates an automated model evaluation with generated travel questions, a travel-assistant developer message, relevance and safety evaluators, and result analysis. (SRC-189 L761–910)

## How it works

The episode starts with selection. Foulkrod narrows the catalog by model category, capability, size, context window, and fine-tuning availability, then moves to benchmark dimensions that reveal quality, safety, throughput, and cost trade-offs. (SRC-189 L29–183)

Deployment is explained as two layered decisions: placement scope, from global to data zone to regional, and consumption model, such as standard, provisioned, batch, or developer. Global offers more routing options and therefore higher throughput, data zone constrains data to zones such as EU or US, and regional constrains traffic to a selected region. (SRC-189 L184–309)

Evaluation combines human judgement and automated scoring. Manual side-by-side testing helps inspect speed and response quality, but automated evaluation can run a larger dataset with expected answers and score the model outputs. (SRC-189 L360–420)

## Segment guide

- L3–28 — Introduction: why model choice, deployment, and evaluation matter, and what the episode will cover. (SRC-189 L3–28)
- L29–93 — Catalog and filters: model categories, provider differences, featured models, capabilities, model size, context window, and fine-tuning. (SRC-189 L29–93)
- L94–183 — Benchmark dimensions: quality, safety, throughput, and cost. (SRC-189 L94–183)
- L184–309 — Deployment options: global, data zone, regional, standard, provisioned, batch, and developer deployments. (SRC-189 L184–309)
- L310–420 — Evaluation concepts: quality, relevance, fluency, groundedness, manual evaluation, and automatic evaluation. (SRC-189 L310–420)
- L421–660 — Portal demo: leaderboard, trade-off chart, GPT-4.1 versus GPT-4.1 mini, cost, throughput, safety, quality, outputs, context window, and training data. (SRC-189 L421–660)
- L661–760 — Deployment and playground demo: Global Standard deployment, side-by-side model comparison, and river-crossing prompt. (SRC-189 L661–760)
- L761–910 — Automated evaluation demo: generated travel dataset, developer message, selected evaluators, progress, completed results, and analysis of one failure. (SRC-189 L761–910)
- L911–974 — Review: answers to the three knowledge-check questions and session wrap-up. (SRC-189 L911–974)

## Code and API patterns

Not covered by this source; the episode is a portal demonstration rather than a code walkthrough. (SRC-189 L421–910)

## Key terms

- Context window — how much information a model can reason over at a given time. (SRC-189 L80–87)
- Quality — usefulness, matching the requested input, readability, and appropriate style of the response. (SRC-189 L94–118)
- Safety — susceptibility or resistance to documented attacks, with lower attack susceptibility described as better in the episode. (SRC-189 L119–139)
- Throughput — how quickly output can be produced from the model. (SRC-189 L140–166)
- Global deployment — deployment without being hemmed into a single region. (SRC-189 L184–229)
- Fluency — whether language is in natural form and matches expectations. (SRC-189 L331–341)
- Groundedness — whether the response reflects the real world or internal business reality. (SRC-189 L342–359)

## Decision boundaries and exam cues

- **Inference:** Choose a smaller or cheaper model when throughput and cost matter more than richer reasoning, but verify the safety and quality trade-off before exposing it to customers. (SRC-189 L140–183; SRC-189 L521–640)
- **Inference:** Choose global deployment when highest routing flexibility and throughput matter more than regional residency; choose data-zone or regional deployment when data location is load-bearing. (SRC-189 L184–258)
- **Inference:** Choose batch when work can wait and price matters; choose provisioned when predictable throughput matters. (SRC-189 L259–295)
- **Inference:** Use automated evaluation when manual side-by-side testing is too small to judge model behavior at scale. (SRC-189 L360–420; SRC-189 L761–910)

## Assessment items

1. Which model benchmark indicates the model's ability to process prompts and return comprehensive responses quickly? Answer: throughput. (SRC-189 L911–919)
2. Which deployment in Microsoft Foundry is best for general use while offering the largest quota among the available choices? Answer: Global Standard. (SRC-189 L935–941)
3. Which evaluation metric measures linguistic correctness and natural language quality? Answer: fluency. (SRC-189 L944–946)

## Tensions, caveats and currency

- **Stale-risk:** The screenshot/model-count discussion mentions hundreds, thousands, and a screenshot with potentially 11,000 models, showing that catalog counts are time-sensitive and may be inconsistent across captured moments. (SRC-189 L29–43)
- **Stale-risk:** The model examples GPT-4.1 and GPT-4.1 mini are demo-era model choices, not permanent recommendations. (SRC-189 L491–760)
- The task metadata lists no presenters, but the transcript identifies Rob Foulkrod as the speaker. (SRC-189 L13–16)

## Relation to other sources

- [[src-89-explore-model-catalog]] covers the catalog model categories and filters that the episode demonstrates. (SRC-89 L213–225; SRC-189 L29–93)
- [[src-188-select-models-benchmarks]] gives the Learn-unit version of the benchmark dimensions demonstrated in the leaderboard. (SRC-188 L213–271; SRC-189 L94–183; SRC-189 L421–660)
- [[src-39-deploy-models-endpoints]] gives the detailed deployment-type taxonomy that the episode explains. (SRC-39 L214–225; SRC-189 L184–309)
- [[src-53-evaluate-model-performance]] gives the detailed evaluation metrics behind the episode's manual and automated evaluation demo. (SRC-53 L213–296; SRC-189 L310–420; SRC-189 L761–910)
- [[src-145-knowledge-check-select-deploy-evaluate-microsoft-foundry-models]] has the same three knowledge-check questions, while this episode gives the spoken answers. (SRC-145 L213–227; SRC-189 L911–941)

## Connections

- [[model-catalog]] — the demo begins by navigating catalog choices. (SRC-189 L29–93)
- [[model-selection]] — the episode is a model-selection walkthrough. (SRC-189 L3–28)
- [[model-benchmarks]] — benchmark dimensions and trade-off charts are central. (SRC-189 L94–183; SRC-189 L421–660)
- [[model-deployment-types]] — global/data-zone/regional and standard/provisioned/batch are explained. (SRC-189 L184–309)
- [[model-playgrounds]] — deployed models are compared in the playground. (SRC-189 L661–760)
- [[model-and-app-evaluation]] — automatic evaluation is demonstrated. (SRC-189 L761–910)
- [[quotas-rate-limits-and-cost]] — cost, throughput, quota, and token limits appear throughout selection and deployment. (SRC-189 L140–183; SRC-189 L184–309)
- [[guardrails-and-content-filters]] — safety and content-security test prompts are part of evaluation. (SRC-189 L119–139; SRC-189 L761–910)
- *Module units:* [[src-114-introduction-select-deploy-evaluate-microsoft-foundry-models|1 Introduction]] · [[src-89-explore-model-catalog|2 Explore the model catalog]] · [[src-188-select-models-benchmarks|3 Select models using benchmarks]] · [[src-39-deploy-models-endpoints|4 Deploy models to endpoints]] · [[src-53-evaluate-model-performance|5 Evaluate model performance]] · [[src-80-exercise-select-deploy-evaluate-models|6 Exercise - Select, deploy, and evaluate models]] · [[src-145-knowledge-check-select-deploy-evaluate-microsoft-foundry-models|7 Knowledge check]] · [[src-196-summary-select-deploy-evaluate-microsoft-foundry-models|8 Summary]]

## Open questions

- The episode does not show code samples for the deployed endpoint even though deployment leads to application integration in the Learn module. (SRC-189 L661–760)
- The episode's automated evaluation analysis identifies one inadequate response but does not define a pass/fail threshold for the full evaluation. (SRC-189 L879–910)

## Sources

- SRC-189 — raw file: [[189-Select, deploy, and evaluate Microsoft Foundry models - AI-103 - Episode 2]]
