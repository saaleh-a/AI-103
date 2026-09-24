---
title: "Advanced - Use Microsoft 365 Agents Toolkit for complex integration scenarios - Training - Microsoft"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains when to use Microsoft 365 Agents Toolkit as a proxy-app approach for custom SSO, middleware, debugging, CI/CD, and multi-environment deployments."
area: agents
source_ids: [SRC-5]
objectives: [P07]
tags: [microsoft-365-agents-toolkit, proxy-application, custom-sso, middleware, ci-cd]
aliases: ["SRC-5"]
source_kind: learn-unit
module: "Integrate your agent with Microsoft 365"
learning_path: "Develop AI agents on Azure"
unit: "4 of 9"
presenters: []
raw_file: "5-Advanced - Use Microsoft 365 Agents Toolkit for complex integration scenarios - Training - Microsoft.md"
url: "https://learn.microsoft.com/en-gb/training/modules/integrate-foundry-agent-with-m365/4-agents-toolkit-advanced"
ingest_depth: full
---

# Advanced - Use Microsoft 365 Agents Toolkit for complex integration scenarios - Training - Microsoft

*learn-unit · Integrate your agent with Microsoft 365 · unit 4 of 9 · SRC-5*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-5 |
| Raw file | 5-Advanced - Use Microsoft 365 Agents Toolkit for complex integration scenarios - Training - Microsoft.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Integrate your agent with Microsoft 365 |
| Unit / episode | 4 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/integrate-foundry-agent-with-m365/4-agents-toolkit-advanced |
| Teaching content | L212–241 of 271 |
| Content length | ~558 words |
| Capture quality | Medium; high-level prose is clear, but diagrams/tables are collapsed as Copy/Expand table markers. |
| Ingest depth | full |

## TL;DR

Direct portal publishing is the simplest route for most Teams and Microsoft 365 Copilot scenarios, but complex enterprise scenarios may need a separate integration layer. (SRC-5 L218) Microsoft 365 Agents Toolkit is the advanced option when custom SSO, middleware, multi-environment deployment, advanced debugging, or CI/CD integration is required. (SRC-5 L223–224)

## Key claims

- Direct publishing from Foundry is the simplest path for most Teams and Microsoft 365 Copilot scenarios. (SRC-5 L218)
- The unit is an advanced, high-level topic that beginners can skip until they need the Toolkit approach. (SRC-5 L219–221)
- Microsoft 365 Agents Toolkit is available as extensions for Visual Studio Code and Visual Studio. (SRC-5 L222–223)
- The Toolkit is appropriate for custom SSO beyond default Entra ID or middleware for custom processing, logging, or transformation. (SRC-5 L223)
- The Toolkit also helps with separate development, staging, and production configurations, detailed tracing, and CI/CD through GitHub Actions or Azure DevOps. (SRC-5 L224)
- The Toolkit approach creates a proxy application between Microsoft 365 and the Foundry agent. (SRC-5 L226)
- The proxy receives messages from Teams or Copilot through Azure Bot Service, applies custom middleware, forwards requests to the Foundry agent, and returns the response along the same path. (SRC-5 L228)
- The proxy approach gives control over message flow but adds deployment complexity. (SRC-5 L228)
- Setup starts with the Toolkit extension, `Create a New Agent/App`, and `Custom Engine Agent`; local testing uses the Microsoft 365 Agents Playground. (SRC-5 L231–233)

## How it works

The source positions the Toolkit as an alternative to direct Foundry publication only when extra control is justified. (SRC-5 L218–224) Instead of letting Foundry own the integration layer, the developer creates a proxy app that sits between Teams or Copilot and the Foundry agent. (SRC-5 L226–228)

The message path is Teams or Copilot to Azure Bot Service, then into the proxy application's middleware, then to the Foundry agent endpoint, and finally back through the same path. (SRC-5 L228) That architecture enables custom SSO, logging, transformation, debugging, CI/CD, and multi-environment deployment, while increasing operational complexity. (SRC-5 L223–228)

The setup path begins in Visual Studio Code with the Agents Toolkit extension, a new Custom Engine Agent project, configuration of the Foundry agent endpoint and credentials, middleware implementation, local testing in Microsoft 365 Agents Playground, and then Azure provisioning, deployment, and Teams registration. (SRC-5 L231–233)

## Code and API patterns

The source does not show code, but it identifies these implementation patterns. (SRC-5 L228–233)

- Create a proxy application rather than publishing directly from Foundry. (SRC-5 L226–228)
- Configure the proxy to call the Foundry agent endpoint using the agent's credentials. (SRC-5 L232)
- Implement middleware for the custom processing, logging, or transformation that direct publishing does not provide. (SRC-5 L223; SRC-5 L232)
- Use Microsoft 365 Agents Playground for local testing that simulates Teams. (SRC-5 L233)

## Key terms

- **Microsoft 365 Agents Toolkit** — Visual Studio Code and Visual Studio tooling for advanced Microsoft 365 agent integration scenarios. (SRC-5 L223–224)
- **Proxy application** — the application between Microsoft 365 and the Foundry agent that receives, processes, forwards, and returns messages. (SRC-5 L226–228)
- **Custom Engine Agent** — the project type selected when creating the Toolkit app in the wizard. (SRC-5 L231)
- **Microsoft 365 Agents Playground** — local testing environment that simulates Teams. (SRC-5 L233)

## Decision boundaries and exam cues

- **Inference:** Prefer direct Foundry portal publishing unless the scenario explicitly names custom SSO, middleware, multi-environment deployment, detailed tracing, or CI/CD. (SRC-5 L218–224)
- **Inference:** If the requirement is full control over every step of message flow, the proxy approach is relevant; if simplicity is the requirement, it is likely overkill. (SRC-5 L226–228)
- **Inference:** If a scenario mentions local Teams simulation during Toolkit development, the Microsoft 365 Agents Playground is the source-supported testing environment. (SRC-5 L233)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source says direct publishing handles the majority of integration scenarios and to reserve Toolkit for identified requirements, so Toolkit is not the default answer for all production agents. (SRC-5 L241)
- The comparison summary table is collapsed in the capture, so this page cannot preserve the table's detailed entries. (SRC-5 L241)

## Relation to other sources

- [[src-232-understand-foundry-agent-publishing-options]] first introduces the Toolkit as an advanced alternative for custom SSO, middleware, or pipelines. (SRC-232 L238–242; SRC-5 L218–241)
- [[src-185-publish-agent-foundry-portal-teams]] covers the simpler direct portal flow that this source contrasts with. (SRC-185 L216–299; SRC-5 L218)
- [[src-149-knowledge-check-integrate-agent-microsoft-365]] includes an assessment item asking when to choose the Toolkit. (SRC-5 L223–224; SRC-149 L237–244)

## Connections

- [[microsoft-365-agents-toolkit]] — this source defines the Toolkit's role in the module. (SRC-5 L223–233)
- [[agent-building-options-compared]] — the source is a direct-vs-Toolkit decision boundary. (SRC-5 L218–241)
- [[microsoft-365-agent-integration]] — the proxy app integrates Microsoft 365 surfaces with a Foundry agent. (SRC-5 L226–228)
- [[observability-and-tracing]] — detailed tracing is one reason to use the Toolkit. (SRC-5 L224)
- *Module units:* [[src-125-introduction-integrate-agent-microsoft-365|1 Introduction]] · [[src-232-understand-foundry-agent-publishing-options|2 Understand Foundry agent publishing options]] · [[src-185-publish-agent-foundry-portal-teams|3 Publish an agent from Foundry portal to Teams]] · [[src-2-access-microsoft-365-data-work-iq|5 Access Microsoft 365 data with Work IQ]] · [[src-222-test-iterate-integrated-agent|6 Test and iterate your integrated agent]] · [[src-79-exercise-publish-foundry-agent-teams|7 Exercise - Publish a Foundry agent to Teams]] · [[src-149-knowledge-check-integrate-agent-microsoft-365|8 Knowledge check]] · [[src-209-summary-integrate-agent-microsoft-365|9 Summary]] · [[src-111-integrate-agent-microsoft-365-episode-11|episode 11]]

## Open questions

- The source does not provide exact Toolkit code, YAML, or deployment commands; it points readers to detailed documentation instead. (SRC-5 L231–241)

## Sources

- SRC-5 — raw file: [[5-Advanced - Use Microsoft 365 Agents Toolkit for complex integration scenarios - Training - Microsoft]]
