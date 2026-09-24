---
title: "Test and iterate your integrated agent"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Covers post-publication Teams testing, common troubleshooting scenarios, Foundry metrics, Application Insights, feedback, and republishing."
area: agents
source_ids: [SRC-222]
objectives: [G12]
tags: [agent-testing, teams, troubleshooting, monitoring, application-insights]
aliases: ["SRC-222"]
source_kind: learn-unit
module: "Integrate your agent with Microsoft 365"
learning_path: "Develop AI agents on Azure"
unit: "6 of 9"
presenters: []
raw_file: "222-Test and iterate your integrated agent - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/integrate-foundry-agent-with-m365/6-test-iterate-agent"
ingest_depth: full
---

# Test and iterate your integrated agent

*learn-unit · Integrate your agent with Microsoft 365 · unit 6 of 9 · SRC-222*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-222 |
| Raw file | 222-Test and iterate your integrated agent - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Integrate your agent with Microsoft 365 |
| Unit / episode | 6 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/integrate-foundry-agent-with-m365/6-test-iterate-agent |
| Teaching content | L212–285 of 315 |
| Content length | ~534 words |
| Capture quality | High; troubleshooting and monitoring guidance is complete prose. |
| Ingest depth | full |

## TL;DR

The Foundry playground is useful for development testing, but it does not simulate the full published Teams experience. (SRC-222 L216–220) After publication, testing should cover Teams rendering, authentication, response time, and the published agent identity's permissions. (SRC-222 L216–220) Troubleshooting focuses on no-response issues, tool failures, discoverability, and slow responses, while monitoring uses Foundry metrics, Application Insights, and user feedback. (SRC-222 L223–285)

## Key claims

- Ongoing testing and monitoring help ensure the published agent performs reliably for users. (SRC-222 L216)
- After publishing, the source says to test in Teams for UI rendering, authentication flows, production response times, and published identity permissions. (SRC-222 L217–220)
- Multiple-user testing can reveal phrasing differences, confusing responses, and platform-specific issues across desktop, web, and mobile Teams clients. (SRC-222 L221–222)
- If an agent does not respond in Teams, possible causes include Bot Service not running, bad Bot Service configuration, or network issues. (SRC-222 L223–231)
- If tools work in Foundry but fail in Teams, the likely cause is missing permissions on the published agent identity. (SRC-222 L232–238)
- If users cannot find the agent, possible causes include wrong publish scope, pending admin approval, or tenant policies that block custom apps. (SRC-222 L239–247)
- Slow responses can come from complex instructions, large tool queries, or network latency. (SRC-222 L248–255)
- Foundry metrics include request volume and patterns, response times, error rates, and tool invocation statistics. (SRC-222 L258–265)
- Application Insights can trace conversations, analyze error patterns, measure end-to-end latency, and set up anomaly alerts. (SRC-222 L266–271)
- User feedback channels and a reusable testing checklist support iteration and release quality. (SRC-222 L272–285)

## How it works

The source treats testing as a post-deployment discipline, not only playground verification. (SRC-222 L216–222) Published agents should be validated in Teams because Teams rendering, authentication, production latency, and agent-identity permissions differ from the playground experience. (SRC-222 L217–220)

Troubleshooting is organized around symptoms. (SRC-222 L223–255) No response in Teams points to Bot Service, configuration, package upload, or network checks; tool failures point to the published identity's RBAC roles; discoverability issues point to publish scope, admin approval, or tenant policies; slow responses point to instruction complexity, large data queries, or network latency. (SRC-222 L223–255)

Monitoring closes the loop after deployment. (SRC-222 L256–285) Foundry metrics reveal request, latency, error, and tool-invocation patterns; Application Insights can trace conversations and errors; user feedback informs improvement; updates are made in Foundry and republished. (SRC-222 L256–285)

## Code and API patterns

Not covered by this source.

## Key terms

- **Foundry metrics** — portal metrics for request volume, response times, error rates, and tool invocation statistics. (SRC-222 L258–265)
- **Application Insights integration** — configured monitoring that can trace conversations, analyze errors, measure latency, and alert on anomalies. (SRC-222 L266–271)
- **Testing checklist** — an agent-specific list of release scenarios used before each release for consistent quality. (SRC-222 L284–285)

## Decision boundaries and exam cues

- **Inference:** If the symptom is tools failing only in Teams, choose published-agent identity permissions rather than agent instructions as the first check. (SRC-222 L232–238)
- **Inference:** If users cannot find the agent, check publish scope, organization-scope approval, and tenant custom-app policies. (SRC-222 L239–247)
- **Inference:** If the question asks what to monitor after deployment, Foundry metrics and Application Insights are directly named monitoring paths. (SRC-222 L258–271)
- **Inference:** If quality differs across users or clients, test with multiple users and Teams desktop, web, and mobile clients. (SRC-222 L221–222)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source says updates for organization-scope deployments may require re-approval depending on tenant policies, so deployment iteration can be organization-policy dependent. (SRC-222 L280–282)
- The source says `If you've configured Application Insights integration`, so tracing and alerts depend on prior configuration not detailed in this unit. (SRC-222 L266–271)

## Relation to other sources

- [[src-185-publish-agent-foundry-portal-teams]] introduces Teams package testing and permission reassignment; this source expands those actions into ongoing troubleshooting and monitoring. (SRC-185 L268–299; SRC-222 L216–285)
- [[src-209-summary-integrate-agent-microsoft-365]] summarizes testing and iteration as part of the module outcome. (SRC-209 L216–232; SRC-222 L216–285)
- [[src-111-integrate-agent-microsoft-365-episode-11]] includes demo validation in Teams and Copilot before wrapping up with iteration language. (SRC-111 L231–292; SRC-222 L216–285)

## Connections

- [[agent-testing-and-evaluation]] — the source is focused on published-agent test, troubleshoot, monitor, and iterate loops. (SRC-222 L216–285)
- [[observability-and-tracing]] — Foundry metrics and Application Insights are monitoring mechanisms. (SRC-222 L258–271)
- [[application-insights]] — Application Insights appears as the tracing and alerting destination. (SRC-222 L266–271)
- [[agent-publishing]] — testing validates the published Microsoft 365 agent. (SRC-222 L216–220)
- *Module units:* [[src-125-introduction-integrate-agent-microsoft-365|1 Introduction]] · [[src-232-understand-foundry-agent-publishing-options|2 Understand Foundry agent publishing options]] · [[src-185-publish-agent-foundry-portal-teams|3 Publish an agent from Foundry portal to Teams]] · [[src-5-advanced-microsoft-365-agents-toolkit-complex-integration-scenarios|4 Advanced - Use Microsoft 365 Agents Toolkit for complex integration scenarios - Training - Microsoft]] · [[src-2-access-microsoft-365-data-work-iq|5 Access Microsoft 365 data with Work IQ]] · [[src-79-exercise-publish-foundry-agent-teams|7 Exercise - Publish a Foundry agent to Teams]] · [[src-149-knowledge-check-integrate-agent-microsoft-365|8 Knowledge check]] · [[src-209-summary-integrate-agent-microsoft-365|9 Summary]] · [[src-111-integrate-agent-microsoft-365-episode-11|episode 11]]

## Open questions

- The source does not provide setup steps for Application Insights integration, only what it can do after configuration. (SRC-222 L266–271)

## Sources

- SRC-222 — raw file: [[222-Test and iterate your integrated agent - Training - Microsoft Learn]]
