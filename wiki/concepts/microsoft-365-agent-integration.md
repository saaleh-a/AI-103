---
title: "Microsoft 365 agent integration"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Bringing Foundry agents into Teams and Microsoft 365 Copilot, with publishing, Work IQ data access, permissions, testing, and Toolkit extensions."
area: agents
source_ids: [SRC-2, SRC-5, SRC-111, SRC-125, SRC-185, SRC-209, SRC-222, SRC-232]
objectives: [P04, P05, P12, G09]
objective_gaps: []
tags: []
aliases: ["integrate your agent with Microsoft 365", "Microsoft 365 data access", "Teams agent integration", "Microsoft 365 Copilot agent integration"]
---

# Microsoft 365 agent integration

## Summary

Microsoft 365 agent integration means making a Foundry agent available in Microsoft 365 work surfaces and, when needed, giving agent development access to Microsoft 365 context. In this corpus the integration has three homes: [[agent-publishing]] owns distribution to Teams/Copilot, [[work-iq]] owns permission-trimmed Microsoft 365 data access, and [[microsoft-365-agents-toolkit]] owns advanced proxy-app integration. (SRC-125 L216–226; SRC-209 L218–224)

## The problem it solves

The source problem is workflow fit: users spend their day in Teams and Microsoft 365 Copilot, while a new agent may only exist in the Foundry playground. (SRC-125 L216–219) Integration lets users interact with custom agents in collaboration and productivity tools they already use. (SRC-125 L217–219)

## Mental model

Think of Microsoft 365 integration as three linked but distinct routes. First, publish the agent so it appears in Teams and Copilot surfaces. Second, recheck identity and permissions because publication creates a distinct agent identity. Third, use either Work IQ or the Microsoft 365 Agents Toolkit when the problem is data context or custom integration behavior rather than basic channel publication. (SRC-232 L225–249; SRC-2 L218–296; SRC-5 L218–241)

## What the sources say

SRC-125 says the module teaches publishing Foundry agents to Microsoft 365, the portal publishing workflow, advanced integration options, Work IQ access to emails, meetings and documents, and testing/troubleshooting integrated agents. (SRC-125 L219–226)

SRC-232 says publishing to Microsoft 365 enables an agent to appear in Teams and Copilot; it creates Azure Bot Service routing, a Microsoft 365 publishing package, an Entra application registration, and Teams agent-store discoverability. (SRC-232 L225–237)

SRC-2 says Work IQ connects AI agents to Microsoft 365 data such as emails, meetings, documents, Teams messages, and people information. It operates as a CLI and MCP server, with permission-based access through Microsoft Graph and the authenticated user's identity. (SRC-2 L218–220; SRC-2 L270–294)

SRC-5 says Microsoft 365 Agents Toolkit is for more complex enterprise scenarios, such as custom SSO, middleware for processing/logging/transformation, multi-environment deployment, advanced debugging, CI/CD, and a proxy app between Teams/Copilot and the Foundry agent. (SRC-5 L218–233)

SRC-222 says integrated agents must be tested after publishing because Teams can expose rendering, authentication, latency, and permission issues beyond the Foundry playground. (SRC-222 L219–226)

## How it works in Azure

For direct Microsoft 365 publication, the Foundry portal guides creation of an agent application, provisions Azure resources, and generates a Microsoft 365 publishing package. (SRC-185 L218–219) The publisher chooses shared scope for immediate limited availability or organization scope for broad distribution with admin approval. (SRC-185 L256–284)

The integrated agent does not simply inherit all development-time access. Published agents use a distinct identity, and tools that call resources such as Azure AI Search, storage, or Cosmos DB need RBAC assigned to the published identity. (SRC-185 L285–294; SRC-232 L249–254)

Work IQ integration is not publication. It gives an AI assistant or development workflow access to Microsoft 365 data through CLI or MCP server modes, using the same underlying data and permissions in both approaches. (SRC-2 L235–244; SRC-2 L280–294)

## Code and configuration

The corpus gives procedures rather than full code. Configuration appears as portal publication fields and Teams package upload steps, Work IQ installation/configuration steps, and Toolkit project scaffolding. (SRC-185 L239–277; SRC-2 L245–263; SRC-5 L229–233)

**Inference:** Keep the configuration split by responsibility: channel publication and scope in Foundry/Microsoft 365, resource permissions in Azure RBAC, data-context access in Work IQ, and proxy customization in the Agents Toolkit. (SRC-185 L256–294; SRC-2 L270–294; SRC-5 L223–233)

## Decision boundaries

| **Inference:** Requirement | Home page | Decision detail |
|---|---|---|
| Make a Foundry agent available in Teams or Copilot | [[agent-publishing]] | Use direct publishing for the normal path; choose shared or organization scope. (SRC-185 L256–284) |
| Give an assistant Microsoft 365 workplace context during development | [[work-iq]] | Work IQ is a CLI and MCP server over Microsoft 365 data with user's permissions. (SRC-2 L218–220; SRC-2 L270–294) |
| Add custom SSO, middleware, tracing, or multi-environment deployment | [[microsoft-365-agents-toolkit]] | Toolkit creates a proxy app and adds control at the integration layer. (SRC-5 L223–233) |
| Fix post-publish failures | [[agent-testing-and-evaluation]] | Test the channel and identity/permissions, not only the model prompt. (SRC-222 L219–261) |

## Failure modes and misconceptions

Do not treat Microsoft 365 integration as a single feature switch. The corpus separates publishing, data access, advanced proxy integration, and testing. (SRC-125 L219–226; SRC-209 L218–224)

Do not assume Microsoft 365 data access means users can read everything. Work IQ inherits Microsoft 365 Copilot security: it can only access data the authenticated user already has permission to view and uses Microsoft Graph with that identity. (SRC-2 L270–279)

Do not assume organization scope is immediate. Organization scope requires a Microsoft 365 admin approval path before broad availability. (SRC-111 L166–201; SRC-185 L278–284)

## Solution Engineering transfer

**Inference:** The first customer discovery question is which integration problem they have: meet users in Teams/Copilot, ground the agent in workplace context, customize the Teams/Copilot middleware path, or harden a published deployment. The corpus supports those four different workstreams. (SRC-125 L219–226; SRC-2 L218–296; SRC-5 L218–241; SRC-222 L219–285)

## Connections

- [[agent-publishing]] — canonical page for the Foundry-to-Teams/Copilot publishing route.
- [[work-iq]] — canonical page for Microsoft 365 data access through CLI and MCP.
- [[microsoft-365-agents-toolkit]] — canonical page for advanced proxy-app scenarios.
- [[agent-testing-and-evaluation]] — testing and monitoring after Microsoft 365 publication.
- [[model-context-protocol]] — Work IQ is built as an MCP server for Microsoft 365 data. (SRC-2 L228–234)
- [[microsoft-entra-id]] — Entra app registration and agent identities are part of publication. (SRC-232 L225–237; SRC-232 L249–254)
- [[src-125-introduction-integrate-agent-microsoft-365]] — module overview and learning objectives.
- *Also linked from:* [[keyless-authentication]] · [[overview]]

## Sources

- SRC-2 — [[src-2-access-microsoft-365-data-work-iq]] — Work IQ data access and security model
- SRC-5 — [[src-5-advanced-microsoft-365-agents-toolkit-complex-integration-scenarios]] — Toolkit proxy-app scenarios
- SRC-111 — [[src-111-integrate-agent-microsoft-365-episode-11]] — narrated Microsoft 365 publishing demonstration
- SRC-125 — [[src-125-introduction-integrate-agent-microsoft-365]] — integration module framing
- SRC-185 — [[src-185-publish-agent-foundry-portal-teams]] — portal publish procedure and scopes
- SRC-209 — [[src-209-summary-integrate-agent-microsoft-365]] — module summary tying publishing, Work IQ, Toolkit, scopes, and identity
- SRC-222 — [[src-222-test-iterate-integrated-agent]] — testing and troubleshooting published integrations
- SRC-232 — [[src-232-understand-foundry-agent-publishing-options]] — publishing mechanics and identity

## Open questions

- The corpus does not cover detailed Microsoft 365 admin-center policy configuration beyond the approval path.
