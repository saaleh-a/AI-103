---
title: "Microsoft 365 Agents Toolkit"
type: entity
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Advanced Microsoft 365 tooling for proxy-app integration, custom SSO, middleware, multi-environment deployment, debugging, and CI/CD."
area: agents
source_ids: [SRC-5, SRC-149, SRC-209, SRC-232]
objectives: [P08, G05, G12]
objective_gaps: []
tags: ["tool"]
aliases: ["Agents Toolkit", "Microsoft 365 Agents Playground", "Microsoft 365 Agents SDK", "Custom Engine Agent"]
---

# Microsoft 365 Agents Toolkit

## Summary

Microsoft 365 Agents Toolkit is the advanced alternative to direct Foundry portal publishing when an enterprise needs a custom integration layer between Microsoft 365 surfaces and a Foundry agent. The corpus repeatedly positions it as optional and complexity-bearing, not the default path. (SRC-5 L218–223; SRC-232 L238–239)

## What it is

SRC-5 defines the Toolkit as a suite of development tools available as extensions for Visual Studio Code and Visual Studio. It is considered when the agent requires custom SSO beyond the default Entra ID setup, middleware for processing/logging/transformation, multi-environment deployment, advanced debugging, or CI/CD integration through GitHub Actions or Azure DevOps. (SRC-5 L222–224)

## What the sources say

SRC-232 introduces the Toolkit as a way to create a proxy application that connects to a Foundry agent when complex scenarios require custom single sign-on, advanced middleware logic, or multi-environment deployment pipelines. (SRC-232 L238–239)

SRC-5 expands that decision. It says direct Foundry publishing is simplest for most scenarios, while the Toolkit gives more control over the integration layer. (SRC-5 L218–224) It also says the unit can be skipped by learners getting started, then revisited when a Toolkit requirement appears. (SRC-5 L219–221)

SRC-149 assesses the boundary: consider the Toolkit instead of direct publishing when you need custom SSO, middleware logic, or multi-environment deployment. (SRC-149 L237–244)

## Capabilities and components

The core component in the corpus is a proxy application. Instead of publishing directly from Foundry, you create a proxy app with the Toolkit that sits between Microsoft 365 and the Foundry agent. (SRC-5 L225–228)

That proxy receives messages from Teams or Copilot through Azure Bot Service, processes them through custom middleware, forwards the request to the Foundry agent, and returns the response through the same path. This gives control over each message-flow step but adds deployment complexity. (SRC-5 L226–228)

The Toolkit also includes Microsoft 365 Agents Playground, a local testing environment that simulates Teams. Debug mode opens the playground in a browser so you can send test messages before provisioning Azure resources, deploying the proxy app, and registering it in Teams. (SRC-5 L231–233)

## How to use it

The corpus gives a high-level setup sequence: install the Microsoft 365 Agents Toolkit extension from the Visual Studio Code marketplace, create a new agent/app, choose Custom Engine Agent, configure the AI model source, and then connect the scaffolded project to an existing Foundry agent by calling its endpoint, setting up authentication with the agent credentials, and implementing middleware. (SRC-5 L229–233)

After local testing in the Microsoft 365 Agents Playground, use the Toolkit to provision Azure resources, deploy the proxy application, and register it in Teams. (SRC-5 L233)

## Decision boundaries

| **Inference:** Requirement | Direct Foundry publishing | Microsoft 365 Agents Toolkit |
|---|---|---|
| Simple route into Teams/Copilot | Best default path for most scenarios. (SRC-5 L218–221) | Unnecessary extra complexity unless a specific advanced requirement exists. (SRC-5 L241) |
| Custom SSO beyond default Entra setup | Not the corpus's fit. | Toolkit fit. (SRC-5 L222–224; SRC-232 L238–239) |
| Middleware for logging, transformation, or custom processing | Not the corpus's fit. | Toolkit proxy app processes messages through middleware. (SRC-5 L223–228) |
| Separate dev/stage/prod and CI/CD | Not the corpus's fit. | Toolkit supports multi-environment deployment and CI/CD integration. (SRC-5 L224) |
| Local Teams-like testing | Foundry playground tests agent behavior, but not a Teams simulation. | Agents Playground simulates Teams locally. (SRC-5 L231–233) |

## Naming and currency

The corpus uses Microsoft 365 Agents Toolkit and Agents Toolkit for the same tool. It also names Microsoft 365 Agents Playground as a local testing environment inside the Toolkit flow. (SRC-5 L222–233)

**Stale-risk:** The source points readers to external Toolkit documentation for detailed guidance, so version-specific commands and templates should be verified against current docs before implementation. (SRC-5 L237–239)

## Appearances in the corpus

- SRC-232 introduces the Toolkit as the advanced alternative to direct publishing. (SRC-232 L238–239)
- SRC-5 is the dedicated Toolkit source for when to use it and how the proxy approach works. (SRC-5 L218–241)
- SRC-149 asks when to choose it over direct publishing. (SRC-149 L237–244)
- SRC-209 summarizes it as an alternative for complex enterprise scenarios. (SRC-209 L218–220)

## Connections

- [[microsoft-365-agent-integration]] — Toolkit is one of the three main Microsoft 365 integration routes.
- [[agent-publishing]] — direct publishing is the default alternative this page contrasts with.
- [[agent-testing-and-evaluation]] — the Agents Playground supports local testing before deployment.
- [[foundry-toolkit-for-vs-code]] — related VS Code-oriented agent tooling, but a different page in this wiki.
- [[microsoft-entra-id]] — custom SSO and agent credentials are part of the Toolkit boundary. (SRC-5 L223–232)
- [[src-5-advanced-microsoft-365-agents-toolkit-complex-integration-scenarios]] — dedicated Toolkit source.
- *Also linked from:* [[work-iq]]

## Sources

- SRC-5 — [[src-5-advanced-microsoft-365-agents-toolkit-complex-integration-scenarios]] — Toolkit definition, proxy architecture, setup, and decision boundary
- SRC-149 — [[src-149-knowledge-check-integrate-agent-microsoft-365]] — assessed Toolkit selection cue
- SRC-209 — [[src-209-summary-integrate-agent-microsoft-365]] — module summary mention
- SRC-232 — [[src-232-understand-foundry-agent-publishing-options]] — Toolkit introduced as advanced alternative
