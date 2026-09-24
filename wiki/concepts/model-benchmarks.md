---
title: "Model benchmarks"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Quality, safety, cost and performance metrics used in Foundry leaderboards and model cards to compare model trade-offs before deployment."
area: models
source_ids: [SRC-114, SRC-188, SRC-191]
objectives: [P01]
objective_gaps: []
tags: []
aliases: ["benchmarks", "model leaderboards", "Foundry model leaderboard", "model cards benchmarks"]
---

# Model benchmarks

## Summary

Model benchmarks are comparative measurements that help decide whether a model is good enough for a use case before and after deployment. SRC-188 states that benchmark data helps compare models and make informed selection decisions, and that Microsoft Foundry organizes benchmarking tools into quality, safety, cost and performance metrics (SRC-188 L215). The select/deploy/evaluate introduction says the portal lets you compare models using industry-standard benchmarks for quality, safety, cost and performance before deploying to an endpoint and evaluating the model's behaviour (SRC-114 L215–216).

## The problem it solves

A model name alone does not tell you whether it is accurate enough, safe enough, fast enough or affordable enough. Benchmarks give an objective starting point for comparison across candidates, but they do not replace application-specific evaluation. **Synthesis:** The corpus's workflow is benchmark before selection/deployment, then evaluate whether the deployed model meets your quality and safety requirements (SRC-188 L215–219; SRC-114 L215–216).

## Mental model

**Synthesis:** Think of benchmarks as a trade-off dashboard, not a single ranking. Quality asks whether the model answers well. Safety asks whether it resists harmful or toxic behaviour. Cost asks how much input and output tokens cost. Performance asks how quickly it starts and continues producing output. The right model is the one whose benchmark profile matches the workload's constraints, not necessarily the one that tops one metric (SRC-188 L220–271).

## What the sources say

- SRC-188 says benchmarks are accessed from the model catalog leaderboard for comparative rankings or from a model card's **Benchmarks** tab for detailed model-specific charts (SRC-188 L216–219).
- Quality benchmarks assess accurate, coherent and contextually appropriate responses; the quality index averages scores across datasets for reasoning, knowledge, question answering, math and coding; benchmark scores are normalized from zero to one where higher is better (SRC-188 L220–231).
- Safety metrics evaluate harmful behaviour, toxic content and sensitive domain knowledge, including HarmBench Attack Success Rate where lower values indicate safer, more robust models (SRC-188 L232–241).
- Cost benchmarks display prices for serverless API deployments and Azure OpenAI models, including cost per million input tokens, cost per million output tokens and an estimated cost using a typical 3:1 input-to-output ratio (SRC-188 L242–247).
- Performance benchmarks measure latency and throughput, including time to first token, generated tokens per second and related percentile latency measures (SRC-188 L248–261).
- The model leaderboard and comparison features allow sorting by quality, safety, estimated cost and throughput; scenario leaderboards target use cases such as reasoning, coding, math, question answering or groundedness (SRC-188 L262–271).

## How it works in Azure

Benchmarks surface in [[model-catalog]] in two places: the Model leaderboard and the **Benchmarks** tab on a model card (SRC-188 L216–219). Use the leaderboard to create a candidate shortlist, then compare two or three models side by side across quality, safety, throughput, model details, supported endpoints and feature support (SRC-188 L266–271). **Inference:** Benchmarks should be read with deployment and evaluation pages nearby: supported endpoints and feature support can rule out a high-scoring model if it cannot be consumed the way the application needs.

## Code and configuration

Model benchmarks are a portal/comparison concept in this corpus, not a direct SDK call. Code is affected indirectly: benchmark performance and token-cost findings determine whether an application should stream responses, use a smaller model, change context size, or use a different deployment. The corpus specifically connects user experience to low latency and high throughput for interactive applications, while batch processing can prioritize other factors (SRC-188 L261).

## Decision boundaries

| **Inference:** Scenario clue | Benchmark dimension to prioritise | Source basis |
|---|---|---|
| General answer quality, reasoning, knowledge, coding or math | Quality index and scenario leaderboard | Quality covers reasoning, knowledge, QA, math and coding datasets; scenario leaderboards target specific use cases (SRC-188 L220–231; SRC-188 L263–264). |
| Public/customer-facing or regulated app | Safety | Safety benchmarks matter for end-user applications and regulated/customer-facing scenarios (SRC-188 L232–241). |
| High-volume token usage or budget constraint | Cost | Cost benchmarks expose input/output token costs and estimated cost (SRC-188 L242–247). |
| Interactive chat or real-time UX | Performance: TTFT, latency, generated tokens/sec | Low-latency, high-throughput models improve interactive user experience (SRC-188 L248–261). |
| Conflicting requirements | Trade-off charts and side-by-side comparison | Trade-off charts compare two metrics, and a cheaper/faster model may be better despite slightly lower accuracy (SRC-188 L263–271). |

## Failure modes and misconceptions

- **Misconception:** Benchmarks are the same as application evaluation. **Correction:** Benchmarks compare models before deployment; the module still says to evaluate the deployed model using automated metrics and manual testing (SRC-114 L215–216).
- **Misconception:** Higher is always safer. **Correction:** Some safety metrics differ; HarmBench Attack Success Rate is safer when lower (SRC-188 L235–237).
- **Misconception:** Cost is only one number. **Correction:** The source separates input-token price, output-token price and estimated cost with a 3:1 input-output assumption (SRC-188 L242–247).
- **Misconception:** Overall quality index is enough. **Correction:** Scenario leaderboards may be better when the application maps to reasoning, coding, math, question answering or groundedness (SRC-188 L263–264).

## Solution Engineering transfer

**Inference:** In customer conversations, translate "best model" into a benchmark question: best for which dimension? Ask for the user's tolerance on quality, safety risk, response time and operating cost. Then show the trade-off rather than pretending there is a universally best model.

## Connections

- [[model-catalog]] — place where leaderboard and model-card benchmark views are accessed.
- [[model-selection]] — uses benchmark evidence to make model choices.
- [[model-and-app-evaluation]] — post-deployment evaluation that benchmarks do not replace.
- [[quotas-rate-limits-and-cost]] — operational cost and throughput concerns after selection.
- [[observability-and-tracing]] — ongoing monitoring beyond static benchmark data.
- [[guardrails-and-content-filters]] — safety controls that complement model safety benchmarks.
- *Also linked from:* [[generative-ai-fundamentals]] · [[model-deployment-types]] · [[overview]]

## Sources

- SRC-114 — [[src-114-introduction-select-deploy-evaluate-microsoft-foundry-models]] — workflow context for benchmarks and evaluation.
- SRC-188 — [[src-188-select-models-benchmarks]] — benchmark categories, leaderboards, metrics and comparisons.
- SRC-191 — [[src-191-study-guide-exam-ai-103-developing-ai-apps-agents]] — official objectives for model choice, performance monitoring and evaluation.

## Open questions

- The corpus does not specify how often benchmark data is refreshed.
- The corpus does not provide a formula for weighting quality, safety, cost and performance; the choice remains scenario-dependent.
