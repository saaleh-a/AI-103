---
title: "Select models using benchmarks"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains Foundry benchmark dimensions: quality, safety, cost, throughput, latency, leaderboards, trade-off charts, and side-by-side comparison."
area: models
source_ids: [SRC-188]
objectives: [P01, P09, G04]
tags: [model-benchmarks, model-selection, throughput]
aliases: ["SRC-188"]
source_kind: learn-unit
module: "Select, deploy, and evaluate Microsoft Foundry models"
learning_path: null
unit: "3 of 8"
presenters: []
raw_file: "188-Select models using benchmarks - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/model-catalog-evaluate/3-select-models-benchmarks"
ingest_depth: full
---
# Select models using benchmarks

*learn-unit · Select, deploy, and evaluate Microsoft Foundry models · unit 3 of 8 · SRC-188*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-188 |
| Raw file | 188-Select models using benchmarks - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | null |
| Module | Select, deploy, and evaluate Microsoft Foundry models |
| Unit / episode | 3 of 8 |
| Presenter(s) | none |
| URL | https://learn.microsoft.com/en-gb/training/modules/model-catalog-evaluate/3-select-models-benchmarks |
| Teaching content | L209–271 of 301 |
| Content length | ~978 words |
| Capture quality | high |
| Ingest depth | full |

## TL;DR

Benchmarks give objective comparison data before deployment, organized in Foundry around quality, safety, cost, and performance. (SRC-188 L215)

## Key claims

- Foundry benchmarks help compare models before deployment using measurable data rather than subjective preference. (SRC-188 L215)
- Benchmark entry points include the model leaderboard across available models and the Benchmarks tab on an individual model card. (SRC-188 L217–219)
- Quality benchmarks assess accuracy, coherence, contextual appropriateness, reasoning, knowledge, question answering, math, coding, and instruction following. (SRC-188 L217–227)
- Safety benchmarks include harmful behavior detection with HarmBench, toxic content detection with ToxiGen, and sensitive-domain knowledge with WMDP. (SRC-188 L228–242)
- Cost benchmarks show input-token cost, output-token cost, and estimated cost using a typical 3:1 input/output ratio. (SRC-188 L243–250)
- Performance benchmarks include latency percentiles, time to first token, generated tokens per second, total tokens per second, and time between tokens. (SRC-188 L251–264)
- Leaderboards, scenario leaderboards, trade-off charts, and side-by-side comparison support model selection by requirements rather than a single overall score. (SRC-188 L265–271)

## How it works

The source treats benchmark use as a narrowing and comparison workflow. A learner can start with the leaderboard to rank models by quality, safety, cost, or throughput; then inspect a model card's benchmark tab for detailed metrics and comparison charts. (SRC-188 L217–219)

The quality index summarizes multiple normalized benchmark datasets on a zero-to-one scale, while safety metrics expose risk surfaces such as harmful behavior, toxic content, and sensitive domain knowledge. (SRC-188 L218–242)

Cost and performance benchmarks add deployment economics and user-experience constraints: input/output token prices, estimated cost, latency percentiles, streaming time to first token, and token throughput. (SRC-188 L243–264)

## Code and API patterns

Not covered by this source.

## Key terms

- Quality index — an averaged accuracy overview across benchmark datasets for general language tasks. (SRC-188 L218–219)
- Attack Success Rate — the HarmBench safety measure where lower values indicate safer, more robust models. (SRC-188 L231–235)
- Estimated cost — a combined input/output cost estimate using a typical 3:1 input-to-output token ratio. (SRC-188 L246)
- Time to first token — the time until the first token arrives during streaming. (SRC-188 L256–258)
- Generated tokens per second — output tokens generated per second. (SRC-188 L259–261)

## Decision boundaries and exam cues

- **Inference:** If a question asks for objective predeployment comparison, choose benchmarks or leaderboards rather than playground testing alone. (SRC-188 L215–219)
- **Inference:** Use scenario leaderboards when the model must excel at a specific task such as reasoning, coding, math, question answering, or groundedness. (SRC-188 L264)
- **Inference:** Use trade-off charts when the scenario asks for a balanced choice such as quality versus cost, throughput, or safety. (SRC-188 L265)
- **Inference:** Throughput and latency matter most for interactive real-time applications, while batch processing can deprioritize speed in favor of other factors. (SRC-188 L251–264)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** Benchmark datasets, benchmark values, prices, and throughput measurements can change as models and infrastructure change. (SRC-188 L217–271)
- **Inference:** Benchmarks support predeployment comparison, while deployed evaluation remains a separate later workflow. (SRC-188 L215–219; SRC-53 L250–275)

## Relation to other sources

- [[src-89-explore-model-catalog]] explains model cards, which are one entry point for benchmark tabs. (SRC-89 L217–218; SRC-188 L217–219)
- [[src-53-evaluate-model-performance]] shifts from benchmark comparison to evaluating a deployed model or agent with test data and metrics. (SRC-188 L215; SRC-53 L250–275)
- [[src-145-knowledge-check-select-deploy-evaluate-microsoft-foundry-models]] checks that throughput is the benchmark for processing prompts and returning comprehensive responses quickly. (SRC-188 L251–264; SRC-145 L213–217)
- [[src-189-select-deploy-evaluate-microsoft-foundry-models-episode-2]] demonstrates the leaderboard, trade-off charts, and model comparison. (SRC-188 L265–271; SRC-189 L421–660)

## Connections

- [[model-benchmarks]] — this source's central concept. (SRC-188 L215)
- [[model-selection]] — benchmarks support choosing models. (SRC-188 L215–219)
- [[model-catalog]] — leaderboards and model cards live in the catalog experience. (SRC-188 L217–219)
- [[quotas-rate-limits-and-cost]] — cost and throughput benchmarks affect operational fit. (SRC-188 L243–264)
- [[model-and-app-evaluation]] — benchmark selection precedes deployed evaluation. (SRC-188 L215; SRC-53 L213)
- [[deployment-options-compared]] — supported endpoints appear in side-by-side comparison. (SRC-188 L269–271)
- *Module units:* [[src-114-introduction-select-deploy-evaluate-microsoft-foundry-models|1 Introduction]] · [[src-89-explore-model-catalog|2 Explore the model catalog]] · [[src-39-deploy-models-endpoints|4 Deploy models to endpoints]] · [[src-53-evaluate-model-performance|5 Evaluate model performance]] · [[src-80-exercise-select-deploy-evaluate-models|6 Exercise - Select, deploy, and evaluate models]] · [[src-145-knowledge-check-select-deploy-evaluate-microsoft-foundry-models|7 Knowledge check]] · [[src-196-summary-select-deploy-evaluate-microsoft-foundry-models|8 Summary]] · [[src-189-select-deploy-evaluate-microsoft-foundry-models-episode-2|episode 2]]

## Open questions

- The source does not prescribe thresholds for acceptable quality, safety, latency, or cost. (SRC-188 L217–271)

## Sources

- SRC-188 — raw file: [[188-Select models using benchmarks - Training - Microsoft Learn]]
