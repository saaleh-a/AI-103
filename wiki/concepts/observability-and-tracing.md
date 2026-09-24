---
title: "Observability and tracing"
type: concept
status: seed
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "What the corpus does and does not teach about traces, metrics, telemetry, token analytics, latency and agent error analysis."
area: platform
source_ids: [SRC-5, SRC-23, SRC-151, SRC-152, SRC-191, SRC-196, SRC-222, SRC-223, SRC-231]
objectives: [P10, P15, G12, G15]
tags: []
aliases: ["tracing", "monitoring", "telemetry", "token analytics", "latency breakdowns", "error analysis"]
---

# Observability and tracing

## Summary

The corpus teaches observability as a set of runtime evidence loops: Foundry metrics for published agents, Application Insights traces and latency/error analysis when configured, workflow execution tracing, telemetry for user satisfaction and gaps, and retrieval-quality monitoring for Foundry IQ. It does not teach end-to-end setup of tracing dashboards, drift monitoring or latency breakdown instrumentation, despite those topics appearing in the study guide. (SRC-222 L262–275; SRC-151 L220–222; SRC-23 L269–278; SRC-191 L131–132; SRC-191 L154–158)

## The problem it solves

AI apps and agents can fail through slow responses, tool errors, poor retrieval, harmful or inaccurate output, or changing user behavior. The corpus says ongoing monitoring after deployment helps identify issues before users report them, and responsible operation should collect telemetry to determine user satisfaction and functional gaps. (SRC-222 L262–270; SRC-152 L229–233)

## Mental model

**Synthesis:** Observability is how the team answers "what happened, where, and with what cost/latency/error pattern?" The corpus divides this evidence across platform metrics, Application Insights traces, workflow events, retrieval-quality patterns and user feedback telemetry. (SRC-222 L262–275; SRC-231 L244–247; SRC-23 L271–277; SRC-152 L229–233)

## What the sources say

- SRC-222 says the Foundry portal provides published-agent metrics for request volume and patterns, response times, error rates and tool invocation statistics. (SRC-222 L262–270)
- SRC-222 says configured Application Insights integration can trace individual conversations, analyze error patterns and measure end-to-end latency. (SRC-222 L271–275)
- SRC-223 says production agents should track response times, tool invocation success rates, error patterns and token consumption using Application Insights integration. (SRC-223 L288–290)
- SRC-23 says production Foundry IQ agents should monitor usage patterns such as citation frequency, fallback frequency, query types and retrieval accuracy, then use that data to improve instructions, content and search configuration. (SRC-23 L269–278)
- SRC-231 says Microsoft Agent Framework has built-in events for observability and debugging, helping developers monitor progress, track errors and analyze performance. (SRC-231 L244–247)
- SRC-151 says the Foundry workflow visual canvas is useful for tracing execution paths; YAML supports version tracking and source-control integration. (SRC-151 L220–222)
- SRC-152 says responsible operation should track telemetry for user satisfaction and functional gaps while complying with privacy commitments. (SRC-152 L229–233)
- SRC-5 says the Microsoft 365 Agents Toolkit provides advanced debugging with detailed tracing beyond what the Foundry portal offers. (SRC-5 L221–224)
- SRC-191 names model drift, tracing, token analytics, safety signals and latency breakdowns in the official objectives; the corpus only covers those partially. (SRC-191 L131–132; SRC-191 L154–158)

## How it works in Azure

Use Foundry metrics to inspect request volume, response times, errors and tool invocation statistics for published agents. (SRC-222 L262–270)

Use Application Insights, when configured, to trace individual conversations, analyze error patterns, measure end-to-end latency and track token consumption for production agents. (SRC-222 L271–275; SRC-223 L288–290)

Use workflow-level visual tracing and framework events to understand execution paths, monitor progress, track errors and analyze performance. (SRC-151 L220–222; SRC-231 L244–247)

Use retrieval monitoring for Foundry IQ agents to track citation frequency, fallback frequency, query types and retrieval accuracy. (SRC-23 L271–277)

## Code and configuration

The corpus does not teach code for setting up Application Insights, OpenTelemetry, dashboards, alerts or latency-span instrumentation. It states what Application Insights can be used for after it is configured, and separately names framework events and workflow path tracing. (SRC-222 L271–275; SRC-231 L244–247; SRC-151 L220–222)

## Decision boundaries

| **Synthesis:** Need | Corpus-supported mechanism |
|---|---|
| Published-agent health trends | Foundry metrics: request volume, response times, error rates, tool invocation statistics. (SRC-222 L262–270) |
| Conversation trace or latency/error analysis | Application Insights if configured. (SRC-222 L271–275) |
| Agent token-consumption monitoring | Application Insights integration. (SRC-223 L288–290) |
| Workflow execution-path understanding | Foundry workflow visual canvas or Agent Framework events. (SRC-151 L220–222; SRC-231 L244–247) |
| Retrieval grounding quality | Citation/fallback/query/retrieval-accuracy patterns. (SRC-23 L271–277) |
| Responsible operation feedback loop | Telemetry and user issue reporting, subject to privacy commitments. (SRC-152 L229–233) |

**Inference:** If the scenario is about production agent runtime metrics, use Application Insights and Foundry metrics; if it is about a workflow not behaving as expected during design, workflow path tracing and framework events are the closer evidence.

## Failure modes and misconceptions

- Do not claim the corpus teaches model drift detection implementation; the study guide names drift, but the teaching sources here do not show a drift-monitoring setup. (SRC-191 L131–132)
- Do not claim Application Insights is automatically present; SRC-222 says "If you've configured Application Insights integration." (SRC-222 L271–275)
- Do not collapse retrieval quality into generic latency monitoring; Foundry IQ monitoring has its own signals such as citation frequency and retrieval accuracy. (SRC-23 L271–277)

## Solution Engineering transfer

**Inference:** Customer signal: "The agent is slow and sometimes fails with tools" maps to response-time, tool-invocation, error-pattern and latency tracing. (SRC-222 L262–275; SRC-223 L288–290)

**Inference:** Discovery question: "Do you need to debug one conversation, see trend metrics, or improve retrieval quality?" separates Application Insights traces, Foundry metrics and retrieval monitoring. (SRC-222 L262–275; SRC-23 L271–277)

## Connections

- [[application-insights]] — the service page for conversation traces, error patterns, latency and token consumption.
- [[foundry-agent-service]] — published agents are the main monitored workload in these sources.
- [[foundry-workflows]] — visual workflow tracing is a workflow maintenance aid.
- [[agent-framework-workflows]] — framework events support workflow observability and debugging.
- [[quotas-rate-limits-and-cost]] — token consumption and latency connect operations to cost and capacity.
- [[foundry-iq]] — retrieval quality monitoring belongs with Foundry IQ knowledge grounding.
- [[corpus-gaps]] — G15 and P10 setup gaps should remain visible.
- *Also linked from:* [[agent-testing-and-evaluation]] · [[foundry-sdk]] · [[human-in-the-loop-approval]] · [[microsoft-agent-framework]] · [[model-and-app-evaluation]] · [[model-benchmarks]] · [[overview]] · [[responsible-ai-lifecycle]] · [[responsible-ai-principles]]

## Sources

- SRC-5 — [[src-5-advanced-microsoft-365-agents-toolkit-complex-integration-scenarios]] — Toolkit tracing and debugging
- SRC-23 — [[src-23-configure-retrieval-foundry-iq]] — production retrieval monitoring patterns
- SRC-151 — [[src-151-maintain-workflows-microsoft-foundry]] — workflow execution-path tracing
- SRC-152 — [[src-152-manage-responsible-generative-ai-solution]] — telemetry and user feedback
- SRC-191 — [[src-191-study-guide-exam-ai-103-developing-ai-apps-agents]] — official objectives and gap boundary
- SRC-196 — [[src-196-summary-select-deploy-evaluate-microsoft-foundry-models]] — Azure Monitor and Application Insights summary
- SRC-222 — [[src-222-test-iterate-integrated-agent]] — Foundry metrics and Application Insights capabilities
- SRC-223 — [[src-223-test-deploy-integrate-agents]] — production agent Application Insights monitoring
- SRC-231 — [[src-231-understand-agent-orchestration]] — Agent Framework events for observability

## Open questions

- The corpus does not teach how to configure Application Insights integration, dashboards, alerts, drift monitoring, safety-signal pipelines or detailed latency breakdowns. (SRC-191 L131–132; SRC-191 L154–158; SRC-222 L271–275)

