---
title: "Agent testing and evaluation"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Testing agents before and after release, using playgrounds, channel tests, metrics, Application Insights, and evaluation jobs."
area: agents
source_ids: [SRC-20, SRC-53, SRC-125, SRC-185, SRC-194, SRC-212, SRC-222, SRC-223]
objectives: [P10, P14, G04, G12]
objective_gaps: []
tags: []
aliases: ["test and iterate agents", "agent evaluation", "agent troubleshooting", "agent monitoring", "published agent testing"]
---

# Agent testing and evaluation

## Summary

Agent testing and evaluation covers three levels: development playground tests, systematic evaluation of model or agent outputs, and post-publication channel monitoring. The corpus treats these as complementary: test before publishing, verify the published Teams experience, monitor metrics and traces, then iterate. (SRC-185 L220–224; SRC-222 L218–285; SRC-53 L276–296)

## The problem it solves

An agent can look correct in a playground but fail when published because of channel rendering, authentication, response latency, permissions, user phrasing, or tool access. SRC-222 explicitly says the Foundry playground is valuable but does not simulate the full published experience. (SRC-222 L219–224)

## Mental model

**Synthesis:** Testing asks whether the agent behaves correctly in a known situation. Evaluation measures quality, safety, relevance, groundedness, or other criteria across a dataset or review process. Monitoring checks the deployed system over time for request patterns, response times, errors, tool calls, and conversation traces. (SRC-223 L220–227; SRC-53 L216–296; SRC-222 L262–276)

## What the sources say

SRC-223 lists agent test strategies: happy path testing, edge cases, boundary testing, multi-turn conversation testing, and tool invocation testing; it also says to record test results to track improvements and regressions. (SRC-223 L220–227)

SRC-20 gives a configuration-level habit: after each change, use the integrated playground because small instruction changes can have unexpected effects. (SRC-20 L257–260)

SRC-185 requires thorough Foundry playground testing before publication: verify varied user inputs, configured tools, and response suitability before defects become harder to fix. (SRC-185 L220–224) It also requires a Teams package smoke test if the package is downloaded. (SRC-185 L268–277)

SRC-222 is the main post-publication source. It requires testing in Teams for UI rendering, authentication flows, production response times, and permissions; it recommends multiple users and different Teams clients; and it gives troubleshooting paths for no response, tool failures, discoverability, and latency. (SRC-222 L219–261)

SRC-53 covers formal evaluation. It says Foundry evaluation can evaluate a model, an agent, or an existing dataset; agent/model evaluation needs a dataset with inputs; metrics can include groundedness, relevance, coherence, fluency, risk and safety defects, and NLP metrics. (SRC-53 L216–296)

## How it works in Azure

During development, use Foundry or Visual Studio Code playgrounds for interactive tests and regression checks. (SRC-223 L220–227; SRC-212 L218–221) Before publishing to Microsoft 365, test in the Foundry playground; after publishing, test in Teams because the channel adds rendering, authentication, identity, and latency factors. (SRC-185 L220–224; SRC-222 L219–226)

For systematic evaluation, Foundry Evaluation can run jobs over uploaded, existing, or synthetic datasets. The evaluation job maps fields, uses selected metrics, and runs asynchronously, producing aggregate scores and per-prompt details. (SRC-53 L276–296)

For deployed agents, the Foundry portal provides published-agent metrics for request volume, response times, error rates, and tool invocation statistics. If Application Insights is configured, it can trace individual conversations, analyze error patterns, measure end-to-end latency, and alert on anomalies. (SRC-222 L262–276)

## Code and configuration

The corpus does not provide a single agent test harness script for these pages. It does provide configuration actions: use playgrounds, record test results, set up Application Insights when needed, and run Foundry evaluation jobs with datasets, metrics, field mappings, and a system prompt. (SRC-223 L220–227; SRC-222 L262–276; SRC-53 L276–296)

## Decision boundaries

| **Inference:** Need | Use | Closest confusion |
|---|---|---|
| Explore behavior after a prompt or YAML change | Playground testing | Not the same as production channel validation. (SRC-20 L257–260; SRC-222 L219–224) |
| Verify multi-turn context, boundary handling, and tools | Structured agent test cases | Not just one happy-path chat. (SRC-223 L220–227) |
| Measure groundedness, relevance, safety, or fluency at scale | Foundry evaluation | Not the same as informal user feedback. (SRC-53 L251–300) |
| Diagnose a published Teams agent | Teams/channel tests, Foundry metrics, Application Insights | Not solved only by editing instructions if identity, Bot Service, or admin approval is broken. (SRC-222 L228–276) |

**Inference:** AI-103 scenario wording about published-agent failures usually asks which layer changed: channel, Bot Service, published identity, admin approval, network, tool configuration, or the model/prompt itself. (SRC-222 L228–261)

## Failure modes and misconceptions

A common false pass is testing only in the Foundry playground; SRC-222 says Teams can reveal UI, authentication, latency, and permission issues that the playground does not simulate. (SRC-222 L219–226)

A common troubleshooting mistake is to rework the agent's instructions when a tool fails after publication. SRC-222 says the likely cause can be the published agent identity lacking permissions; the resolution is to find that identity and assign RBAC roles to accessed resources. (SRC-222 L238–245)

A common evaluation mistake is relying only on automated metrics. SRC-53 says manual evaluation captures subjective quality aspects such as user satisfaction, contextual appropriateness, and brand alignment that metrics alone cannot measure. (SRC-53 L228–250)

## Solution Engineering transfer

**Inference:** For a customer pilot, ask for a release checklist: representative prompts, out-of-scope prompts, multi-turn tests, tool-call tests, target-channel tests, monitoring ownership, and a feedback path. The corpus supports each piece as a testing or monitoring concern, but the checklist structure is assembled. (SRC-223 L220–227; SRC-222 L219–285; SRC-53 L276–296)

## Connections

- [[agent-publishing]] — post-publication testing depends on the published channel and agent identity.
- [[observability-and-tracing]] — Application Insights and Foundry metrics are monitoring paths for published agents.
- [[model-and-app-evaluation]] — formal evaluator metrics and datasets sit behind agent evaluation.
- [[microsoft-365-agent-integration]] — Teams and Copilot integration add channel-specific test cases.
- [[application-insights]] — conversation traces and latency analysis for configured deployments. (SRC-222 L271–276)
- [[src-222-test-iterate-integrated-agent]] — main post-publication testing and troubleshooting source.
- [[src-53-evaluate-model-performance]] — main formal evaluation source.
- *Also linked from:* [[microsoft-365-agents-toolkit]] · [[overview]]

## Sources

- SRC-20 — [[src-20-configure-manage-agents-visual-studio-code]] — test after configuration changes
- SRC-53 — [[src-53-evaluate-model-performance]] — manual, automated, and comprehensive evaluation
- SRC-125 — [[src-125-introduction-integrate-agent-microsoft-365]] — module objective includes testing and troubleshooting Microsoft 365 agents
- SRC-185 — [[src-185-publish-agent-foundry-portal-teams]] — pre-publication and Teams package tests
- SRC-194 — [[src-194-summary-build-knowledge-enhanced-ai-agents-foundry-iq]] — retrieval-agent instruction testing and production monitoring
- SRC-212 — [[src-212-summary-develop-ai-agents-microsoft-foundry-visual-studio-code]] — integrated playground testing summary
- SRC-222 — [[src-222-test-iterate-integrated-agent]] — post-publication testing, troubleshooting, monitoring, and iteration
- SRC-223 — [[src-223-test-deploy-integrate-agents]] — testing strategies and deploy/publish distinction

## Open questions

- The corpus does not define a required minimum evaluation dataset size for agent evaluation.
