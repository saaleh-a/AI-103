---
title: "Agent publishing"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Moving a Foundry agent into an Agent Application, Teams, Microsoft 365 Copilot, or a stable API endpoint with identity and governance."
area: agents
source_ids: [SRC-5, SRC-111, SRC-125, SRC-149, SRC-185, SRC-209, SRC-223, SRC-232]
objectives: [P05, P06, P07, P12]
objective_gaps: []
tags: []
aliases: ["publish to Teams", "publish to Microsoft 365 Copilot", "agent identity", "Agent Application publishing", "publish Foundry agent"]
---

# Agent publishing

## Summary

Agent publishing is the move from a development agent in a Foundry project to a managed Agent Application, a Teams/Microsoft 365 package, or another callable channel. The important shift is not only distribution: publication creates stable routing, a separate Entra identity, and production permission boundaries. (SRC-232 L218–224; SRC-223 L240–267)

## The problem it solves

The corpus frames the Microsoft 365 problem as a gap between where the agent was built and where users work: an agent can work in the Foundry playground, while users want to chat with it in Teams or Microsoft 365 Copilot without switching applications. (SRC-125 L216–219) Publishing bridges that gap by making Foundry agents available in those work surfaces. (SRC-125 L219–226)

## Mental model

Publishing is a controlled handoff from project workspace to a production-facing application. In general Foundry publishing, the Agent Application becomes the Azure resource with an invocation URL, authentication policy, and Entra agent identity. (SRC-223 L240–252) For Microsoft 365 publication, Azure Bot Service routes messages between Teams or Microsoft 365 Chat and the Foundry agent, while a Microsoft 365 package and Entra app registration support distribution and authentication. (SRC-232 L225–237; SRC-185 L241–247)

## What the sources say

SRC-232 says publishing creates an Agent Application with a stable invocation URL, a distinct Microsoft Entra identity, and user data isolation; new agent versions route through the same public endpoint. (SRC-232 L218–224) It also says Microsoft 365 publication creates Azure Bot Service, a publishing package, an Entra application registration, and discoverability in the Teams agent store. (SRC-232 L225–237)

SRC-185 gives the portal workflow: test the agent first, verify roles and subscription/application-registration permissions, register the Bot Service provider, prepare visible metadata, choose scope, package, test in Teams, request admin approval if needed, reassign permissions to the published identity, and republish updates. (SRC-185 L220–299)

SRC-223 generalizes publication beyond Microsoft 365: deploying saves the configuration inside the Foundry project, while publishing creates a dedicated endpoint external consumers can call without access to the project. (SRC-223 L228–252) Agent Application endpoints use the Responses API protocol and Microsoft Entra ID; API key authentication is not supported for Agent Applications. (SRC-223 L253–267)

SRC-111 demonstrates the same flow in a transcript: publishing gives a dedicated stable URL, an agent identity visible separately from the host app or user, and user-data isolation; the demo publishes a version to Teams and Microsoft 365. (SRC-111 L37–107; SRC-111 L291–319)

SRC-209 summarizes the module by naming direct portal publishing, Azure Bot Service and Entra registrations, publish scopes, agent identity considerations for RBAC, Work IQ, and the Toolkit alternative. (SRC-209 L218–224)

## How it works in Azure

For Microsoft 365, direct portal publishing provisions Azure Bot Service, registers an Entra application, creates a Microsoft 365 publishing package, and prepares distribution. (SRC-232 L231–237) The portal asks for display metadata and icons, then lets the publisher choose shared scope or organization scope. (SRC-185 L243–263)

Shared scope is immediate and fits testing or small teams; organization scope requires administrator approval and fits production distribution. (SRC-185 L256–263; SRC-149 L221–226) Once organization scope is approved, the agent appears in the Built by your org section of the Teams agent store, subject to app policies. (SRC-185 L279–285)

## Code and configuration

The corpus does not provide a complete publish command or code sample for Microsoft 365 publication. It describes portal steps and a stable Agent Application endpoint shape using the Responses API protocol. (SRC-185 L239–299; SRC-223 L253–258) **Inference:** Treat publication as a release operation: version selection, package metadata, channel/scope choice, identity/RBAC setup, and post-release smoke testing.

## Decision boundaries

| **Inference:** Scenario detail | Prefer | Why |
|---|---|---|
| Users need the agent in Teams or Microsoft 365 Copilot quickly | Direct Foundry portal publishing | The corpus calls it the straightforward/simplest path and says the wizard provisions the Bot Service, Entra app, and package. (SRC-185 L218–247; SRC-232 L231–237) |
| External apps need a stable API endpoint | Agent Application endpoint | Publishing creates a dedicated endpoint external consumers can call without project access. (SRC-223 L240–258) |
| Custom SSO, middleware, or multi-environment pipelines are required | [[microsoft-365-agents-toolkit]] | The Toolkit creates a proxy application for complex enterprise scenarios. (SRC-232 L238–239; SRC-5 L223–233) |
| You only changed and saved an agent inside the project | Deployment/save, not publication | Deploying keeps the agent in the project; publishing creates an Agent Application. (SRC-223 L228–252) |

**Exam cue:** If a question says a tool worked in development but fails after publishing, the deciding detail is the new published agent identity and missing RBAC, not the tool schema. (SRC-185 L285–294; SRC-223 L263–267)

## Failure modes and misconceptions

Do not assume project-time permissions transfer to the published agent. Both SRC-185 and SRC-223 say the published agent has a distinct identity and needs RBAC roles reassigned for resources such as Azure AI Search or storage. (SRC-185 L285–294; SRC-223 L263–267)

Do not confuse shared and organization scope. Shared scope is for immediate testing or limited use; organization scope requires admin approval before broad availability. (SRC-185 L256–263; SRC-149 L221–226)

Do not treat metadata as private configuration. SRC-185 warns not to include secrets or sensitive information in metadata fields because users can see them. (SRC-185 L233–239)

## Solution Engineering transfer

**Inference:** Customer signal: users say the agent works in Foundry but adoption is low because staff live in Teams and Microsoft 365 Copilot. The discovery question is: is this a pilot for a few users, an organization-wide app needing admin approval, or a custom channel integration with middleware requirements? (SRC-125 L216–226; SRC-185 L256–284; SRC-232 L238–247)

## Connections

- [[microsoft-365-agent-integration]] — publishing is the Microsoft 365 distribution mechanism.
- [[microsoft-365-agents-toolkit]] — the advanced proxy alternative when direct publishing is not enough.
- [[agent-testing-and-evaluation]] — published agents must be tested in Teams and monitored after release.
- [[foundry-agent-service]] — publishing starts from Foundry agents and creates managed agent applications.
- [[responses-api]] — Agent Application endpoints use the Responses API protocol. (SRC-223 L253–258)
- [[src-185-publish-agent-foundry-portal-teams]] — step-by-step portal publishing source.
- [[src-232-understand-foundry-agent-publishing-options]] — publishing options and identity source.
- *Also linked from:* [[human-in-the-loop-approval]] · [[microsoft-entra-id]] · [[overview]] · [[work-iq]]

## Sources

- SRC-5 — [[src-5-advanced-microsoft-365-agents-toolkit-complex-integration-scenarios]] — Toolkit comparison for advanced publishing scenarios
- SRC-111 — [[src-111-integrate-agent-microsoft-365-episode-11]] — transcript demonstration of Teams and Copilot publishing
- SRC-125 — [[src-125-introduction-integrate-agent-microsoft-365]] — module framing for publishing into Microsoft 365
- SRC-149 — [[src-149-knowledge-check-integrate-agent-microsoft-365]] — assessed publishing facts
- SRC-185 — [[src-185-publish-agent-foundry-portal-teams]] — portal procedure, scope, package testing, RBAC after publishing
- SRC-209 — [[src-209-summary-integrate-agent-microsoft-365]] — module summary of publishing, Toolkit, scopes, and identity
- SRC-223 — [[src-223-test-deploy-integrate-agents]] — deploy versus publish, Agent Application endpoint, authentication
- SRC-232 — [[src-232-understand-foundry-agent-publishing-options]] — publishing options, Agent Application, Microsoft 365 channel mechanics

## Open questions

- The corpus does not give exact role-assignment recipes for every downstream tool a published agent might call.
