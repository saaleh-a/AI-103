---
title: "Knowledge check — Integrate your agent with Microsoft 365"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Five-question knowledge check on Bot Service, publish scope, published identity permissions, Work IQ, and Agents Toolkit selection."
area: agents
source_ids: [SRC-149]
objectives: []
tags: [knowledge-check, agent-publishing, teams, work-iq, agents-toolkit]
aliases: ["SRC-149"]
source_kind: learn-unit
module: "Integrate your agent with Microsoft 365"
learning_path: "Develop AI agents on Azure"
unit: "8 of 9"
presenters: []
raw_file: "149-Knowledge check - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/integrate-foundry-agent-with-m365/8-knowledge-check"
ingest_depth: full
---

# Knowledge check — Integrate your agent with Microsoft 365

*learn-unit · Integrate your agent with Microsoft 365 · unit 8 of 9 · SRC-149*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-149 |
| Raw file | 149-Knowledge check - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Integrate your agent with Microsoft 365 |
| Unit / episode | 8 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/integrate-foundry-agent-with-m365/8-knowledge-check |
| Teaching content | L212–247 of 277 |
| Content length | ~273 words |
| Capture quality | Medium; options are captured, but checked answers are not shown. |
| Ingest depth | full |

## TL;DR

This knowledge check asks five questions about Microsoft 365 agent integration. (SRC-149 L214–244) It assesses Bot Service creation, shared versus organization publishing scope, published identity permissions, Work IQ, and when to choose Microsoft 365 Agents Toolkit. (SRC-149 L216–244)

## Key claims

- The knowledge check asks what Azure resource the Foundry portal creates when publishing an agent to Microsoft Teams. (SRC-149 L216–220)
- The knowledge check asks the main difference between shared scope and organization scope. (SRC-149 L221–225)
- The knowledge check asks what happens to tool permissions when publishing from Foundry to Teams. (SRC-149 L226–231)
- The knowledge check asks what Microsoft Work IQ is. (SRC-149 L232–236)
- The knowledge check asks when to use Microsoft 365 Agents Toolkit instead of direct Foundry publishing. (SRC-149 L237–244)
- The capture requires all questions to be answered before checking work, and it does not display the checked answer state. (SRC-149 L245–247)

## How it works

The source is an assessment page rather than explanatory teaching content. (SRC-149 L214–247) Its answer options mirror the module's decision points: Azure Bot Service as the resource created by portal publication, admin approval for organization scope, a new published agent identity needing permission reassignment, Work IQ as CLI plus MCP server, and Agents Toolkit for custom SSO, middleware, or multi-environment deployment. (SRC-149 L216–244)

## Code and API patterns

Not covered by this source.

## Key terms

- **Azure Bot Service** — one answer option for the publishing-created Azure resource. (SRC-149 L216–220)
- **Organization scope** — one answer option says it requires admin approval before the agent is available to all users. (SRC-149 L221–225)
- **Published agent identity** — one answer option says the published agent gets a new identity and needs permissions reassigned. (SRC-149 L226–231)
- **Microsoft Work IQ** — one answer option defines it as a CLI and MCP server connecting AI agents to Microsoft 365 data. (SRC-149 L232–236)
- **Microsoft 365 Agents Toolkit** — one answer option ties it to custom SSO, middleware logic, or multi-environment deployment. (SRC-149 L237–244)

## Decision boundaries and exam cues

- **Inference:** The most source-aligned answer to question 1 is `Azure Bot Service`, because earlier units state the portal creates Bot Service for Teams publishing. (SRC-149 L216–220; SRC-185 L228–230)
- **Inference:** The most source-aligned answer to question 2 is organization scope requiring admin approval before tenant-wide availability. (SRC-149 L221–225; SRC-185 L255–258)
- **Inference:** The most source-aligned answer to question 3 is that the published agent gets a new identity and needs permissions reassigned. (SRC-149 L226–231; SRC-185 L281–292)
- **Inference:** The most source-aligned answer to question 4 is that Work IQ is a CLI and MCP server connecting agents to Microsoft 365 data. (SRC-149 L232–236; SRC-2 L219–239)
- **Inference:** The most source-aligned answer to question 5 is to use Agents Toolkit for custom SSO, middleware, or multi-environment deployment. (SRC-149 L237–244; SRC-5 L222–227)

## Assessment items

1. What Azure resource does the Foundry portal automatically create when you publish an agent to Microsoft Teams? Options: Azure Functions; Azure Bot Service; Azure Cosmos DB; Azure Logic Apps. Answer not shown in capture. (SRC-149 L216–220)
2. What is the main difference between shared scope and organization scope when publishing an agent? Options: Shared scope requires more Azure resources; organization scope requires admin approval before the agent is available to all users; shared scope only works in the Foundry playground; organization scope provides better agent performance. Answer not shown in capture. (SRC-149 L221–225)
3. What happens to tool permissions when you publish an agent from Foundry to Teams? Options: Permissions are automatically transferred to the published agent; tools are disabled after publishing; the published agent gets a new identity and needs permissions reassigned; permissions only work in organization scope. Answer not shown in capture. (SRC-149 L226–231)
4. What is Microsoft Work IQ? Options: a machine learning model for workplace analytics; a CLI and MCP server that connects AI agents to Microsoft 365 data; a replacement for Microsoft Teams; a Visual Studio Code extension for building agents. Answer not shown in capture. (SRC-149 L232–236)
5. When should you consider using the Microsoft 365 Agents Toolkit instead of direct publishing from Foundry? Options: for all production deployments; when you need custom SSO, middleware logic, or multi-environment deployment; when publishing to shared scope; when your agent does not use any tools. Answer not shown in capture. (SRC-149 L237–244)

## Tensions, caveats and currency

- The answer key is not visible in the capture because the page says all questions must be answered before checking work. (SRC-149 L245–247)
- This page is useful for confirming module decision boundaries, but it does not independently teach the mechanisms. (SRC-149 L214–247)

## Relation to other sources

- [[src-185-publish-agent-foundry-portal-teams]] teaches the Bot Service, scope, and permission concepts assessed here. (SRC-185 L228–292; SRC-149 L216–231)
- [[src-2-access-microsoft-365-data-work-iq]] teaches the Work IQ definition assessed here. (SRC-2 L219–239; SRC-149 L232–236)
- [[src-5-advanced-microsoft-365-agents-toolkit-complex-integration-scenarios]] teaches the Toolkit selection criteria assessed here. (SRC-5 L222–227; SRC-149 L237–244)

## Connections

- [[agent-publishing]] — most questions assess publishing mechanics. (SRC-149 L216–231)
- [[work-iq]] — question 4 assesses Work IQ. (SRC-149 L232–236)
- [[microsoft-365-agents-toolkit]] — question 5 assesses Toolkit selection. (SRC-149 L237–244)
- [[decision-boundaries]] — the options expose distractors around resource type, scope, permissions, and Toolkit use. (SRC-149 L216–244)
- *Module units:* [[src-125-introduction-integrate-agent-microsoft-365|1 Introduction]] · [[src-232-understand-foundry-agent-publishing-options|2 Understand Foundry agent publishing options]] · [[src-185-publish-agent-foundry-portal-teams|3 Publish an agent from Foundry portal to Teams]] · [[src-5-advanced-microsoft-365-agents-toolkit-complex-integration-scenarios|4 Advanced - Use Microsoft 365 Agents Toolkit for complex integration scenarios - Training - Microsoft]] · [[src-2-access-microsoft-365-data-work-iq|5 Access Microsoft 365 data with Work IQ]] · [[src-222-test-iterate-integrated-agent|6 Test and iterate your integrated agent]] · [[src-79-exercise-publish-foundry-agent-teams|7 Exercise - Publish a Foundry agent to Teams]] · [[src-209-summary-integrate-agent-microsoft-365|9 Summary]] · [[src-111-integrate-agent-microsoft-365-episode-11|episode 11]]

## Open questions

- The capture does not reveal the page's submitted answer feedback or checked-answer markings. (SRC-149 L245–247)

## Sources

- SRC-149 — raw file: [[149-Knowledge check - Training - Microsoft Learn]]
