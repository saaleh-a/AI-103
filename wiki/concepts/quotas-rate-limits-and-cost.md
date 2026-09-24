---
title: "Quotas, rate limits and cost"
type: concept
status: seed
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Thin corpus coverage of quota, throughput, token usage, rate limits and cost for Foundry model and agent workloads."
area: platform
source_ids: [SRC-39, SRC-99, SRC-188, SRC-189, SRC-191, SRC-196, SRC-223]
objectives: [P09]
objective_gaps: [G15]
tags: []
aliases: ["tokens per minute", "TPM", "provisioned throughput units", "PTU", "token usage", "cost benchmarks", "rate limits"]
---

# Quotas, rate limits and cost

## Summary

The corpus teaches cost and throughput as model-selection and deployment trade-offs, token usage as a driver of conversational cost, and Application Insights as a place to monitor token consumption for agents. It does not substantively teach rate-limit handling, quota-increase workflows, scaling procedures or cost-monitoring dashboards, even though objective P09 names them. (SRC-188 L243–263; SRC-39 L217–226; SRC-99 L279–288; SRC-191 L130–131; SRC-223 L288–290)

## The problem it solves

Generative AI workloads consume tokens and capacity, so model and deployment choices affect user experience and budget. The corpus frames cost as dollars per input/output token, performance as latency and throughput, and deployment type as a billing and scaling decision. (SRC-188 L243–261; SRC-39 L217–226; SRC-196 L15–16)

## Mental model

**Synthesis:** In this corpus, quota/cost reasoning has three layers: choose a model whose benchmarked cost and throughput fit the use case, deploy it with a capacity/billing model that matches interactivity and predictability, then reduce avoidable token work by managing context. (SRC-188 L243–263; SRC-39 L217–226; SRC-99 L279–288)

## What the sources say

- SRC-188 says Foundry cost benchmarks show price for 1 million input tokens, 1 million output tokens, and an estimated cost based on a 3:1 input-to-output ratio. (SRC-188 L243–247)
- SRC-188 says latency and throughput metrics include latency percentiles, time to first token, generated tokens per second, total tokens per second and time between tokens; the leaderboard can be sorted by quality, safety, estimated cost and throughput. (SRC-188 L249–263)
- SRC-189 explains throughput as how quickly output comes from the model and cost as dollars per 1 million tokens, split between input and output tokens. (SRC-189 L190–208)
- SRC-39 ties deployment types to data residency, scaling and billing; it says Global Standard has the highest quota, provisioned deployments reserve PTUs for predictable throughput, and Global Batch can run large asynchronous jobs at a 50% discount within 24 hours. (SRC-39 L217–226)
- SRC-99 warns that conversation history, tool schemas, tool outputs and retrieved documents are concatenated and tokenized on every request, and that SDK-managed state does not automatically make token usage cheaper. (SRC-99 L279–288)
- SRC-223 says production agent monitoring should track response times, tool invocation success rates, error patterns and token consumption using Application Insights integration. (SRC-223 L288–290)
- SRC-191 names "Manage quotas, scaling, rate limits, and cost footprints" as an official objective; most of that phrase is thinner than the objective suggests in the teaching corpus. (SRC-191 L130–131)

## How it works in Azure

Model cost is surfaced in Foundry benchmarks and leaderboards, where models can be compared by cost, throughput, safety and quality. (SRC-188 L243–264)

Deployment controls the billing and throughput model: standard is pay-per-token, provisioned reserves PTUs for predictable throughput, and batch trades interactivity for lower-cost asynchronous processing. (SRC-39 L217–226; SRC-189 L295–340; SRC-196 L16)

Application code can accidentally increase token usage by carrying too much conversation history, tool schema, tool output or retrieval context into each request. (SRC-99 L279–288)

## Code and configuration

The corpus does not show a rate-limit retry or backoff implementation. It does teach that conversation context choices affect token usage. (SRC-99 L279–288)

Configuration choices that affect cost and throughput include deployment type, VM SKU and instance count for managed compute, and prompt/conversation pruning in application code. (SRC-39 L217–226; SRC-39 L239–240; SRC-99 L271–288)

## Decision boundaries

| **Synthesis:** Scenario pressure | Corpus-grounded response |
|---|---|
| Need cheapest model that is still good enough | Use Foundry cost benchmarks and trade-off charts with quality/throughput/safety. (SRC-188 L243–264) |
| Need predictable high throughput | Use provisioned deployments / PTUs rather than only pay-per-token standard. (SRC-39 L219; SRC-189 L304–314) |
| Need non-interactive large overnight work | Use batch rather than interactive deployment. (SRC-189 L317–340; SRC-196 L16) |
| Token usage unexpectedly high | Inspect context history, tool schemas, tool outputs and retrieved documents being sent each turn. (SRC-99 L279–288) |
| Agent production cost visibility | Monitor token consumption with Application Insights integration if configured. (SRC-223 L288–290) |

**Inference:** Rate-limit wording belongs here, but the corpus does not teach the actual retry/backoff pattern; do not invent it from general Azure practice.

## Failure modes and misconceptions

- Do not equate "small model" with universally better cost; the corpus says benchmarks and use-case leaderboards should guide quality, safety, cost and throughput comparisons. (SRC-188 L243–264)
- Do not assume SDK-managed conversation state reduces cost; the source explicitly says it does not automatically make token usage cheaper. (SRC-99 L279–288)
- Do not claim the corpus teaches rate-limit handling, quota requests or cost-alert setup. Those are official objective topics, but the available teaching evidence is thin. (SRC-191 L130–131)

## Solution Engineering transfer

**Inference:** Customer signal: "The app is getting expensive as conversations get longer" should trigger inspection of prompt, history, tools and retrieved context, not only a model swap. (SRC-99 L279–288)

**Inference:** Discovery question: "Is this interactive, guaranteed-throughput, or queued batch work?" maps cost/scaling requirements to deployment type. (SRC-39 L217–226; SRC-189 L317–340)

## Connections

- [[model-deployment-types]] — deployment type is the main home for standard/provisioned/batch mechanics.
- [[model-benchmarks]] — benchmarks are the main source for cost and throughput comparison.
- [[responses-api]] — response usage and context-window choices influence token cost.
- [[observability-and-tracing]] — runtime monitoring tracks token consumption, latency and errors where the corpus names it.
- [[corpus-gaps]] — the broader synthesis page should retain the P09 gap.
- [[src-188-select-models-benchmarks]] — strongest cost and throughput benchmark source.
- [[src-99-generate-responses-responses-api-foundry-sdk]] — strongest token-context source.
- *Also linked from:* [[application-insights]]

## Sources

- SRC-39 — [[src-39-deploy-models-endpoints]] — deployment type quota, billing and throughput details
- SRC-99 — [[src-99-generate-responses-responses-api-foundry-sdk]] — token usage and context-window considerations
- SRC-188 — [[src-188-select-models-benchmarks]] — cost and performance benchmarks
- SRC-189 — [[src-189-select-deploy-evaluate-microsoft-foundry-models-episode-2]] — throughput and cost explanation
- SRC-191 — [[src-191-study-guide-exam-ai-103-developing-ai-apps-agents]] — official objective wording and gap boundary
- SRC-196 — [[src-196-summary-select-deploy-evaluate-microsoft-foundry-models]] — deployment option summary
- SRC-223 — [[src-223-test-deploy-integrate-agents]] — Application Insights token-consumption monitoring for agents

## Open questions

- The corpus does not teach rate-limit errors, retry/backoff, quota request procedures, scaling runbooks or budget alert configuration. (SRC-191 L130–131)

