---
title: "Understand Foundry agent publishing options"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains Agent Application resources, Microsoft 365 publishing, direct portal publishing, Agents Toolkit, scopes, channels, identity, and prerequisites."
area: agents
source_ids: [SRC-232]
objectives: [P07, P12]
tags: [agent-publishing, agent-application, azure-bot-service, microsoft-365, entra-id]
aliases: ["SRC-232"]
source_kind: learn-unit
module: "Integrate your agent with Microsoft 365"
learning_path: "Develop AI agents on Azure"
unit: "2 of 9"
presenters: []
raw_file: "232-Understand Foundry agent publishing options - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/integrate-foundry-agent-with-m365/2-understand-publishing-options"
ingest_depth: full
---

# Understand Foundry agent publishing options

*learn-unit · Integrate your agent with Microsoft 365 · unit 2 of 9 · SRC-232*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-232 |
| Raw file | 232-Understand Foundry agent publishing options - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Integrate your agent with Microsoft 365 |
| Unit / episode | 2 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/integrate-foundry-agent-with-m365/2-understand-publishing-options |
| Teaching content | L212–261 of 291 |
| Content length | ~547 words |
| Capture quality | High; table contents are collapsed, but surrounding prose captures the main publishing concepts. |
| Ingest depth | full |

## TL;DR

Publishing promotes a Foundry agent from a development asset into a managed Azure Agent Application with a stable URL, distinct Microsoft Entra identity, and user data isolation. (SRC-232 L216–224) Microsoft 365 publishing creates Bot Service routing, a publishing package, Entra registration, and Teams store discoverability; direct portal publishing fits quick deployment, while Microsoft 365 Agents Toolkit fits custom SSO, middleware, or multi-environment pipelines. (SRC-232 L225–242)

## Key claims

- Foundry agents run inside Foundry Agent Service infrastructure before publishing. (SRC-232 L218)
- Publishing creates an Agent Application resource with a dedicated invocation URL, an agent identity, and user data isolation. (SRC-232 L217–223)
- The Agent Application acts as a routing layer that keeps the public endpoint stable while traffic routes to updated versions. (SRC-232 L224)
- Microsoft 365 publishing creates an Azure Bot Service resource, generates a Microsoft 365 package, registers a Microsoft Entra ID application, and makes the agent discoverable in the Teams agent store. (SRC-232 L225–231)
- Direct publishing from the Foundry portal creates Bot Service, registers Entra ID, generates a package, and prepares the agent for distribution. (SRC-232 L232–237)
- The Agents Toolkit option is for custom SSO, advanced middleware logic, or multi-environment deployment pipelines. (SRC-232 L238–242)
- Other channels include web application preview, stable API endpoint, and Azure Bot Service channels such as Slack, Telegram, Twilio, Facebook, and others. (SRC-232 L245–250)
- Published agents authenticate to Azure resources using their own identity, so permissions used during development do not transfer automatically. (SRC-232 L251–256)

## How it works

The source separates the published agent from the development project. (SRC-232 L216–224) Publishing creates a managed Agent Application with a stable invocation endpoint, a distinct Microsoft Entra identity, and isolation between different users' inputs and interactions. (SRC-232 L217–224)

For Microsoft 365, the system adds integration resources around the agent. (SRC-232 L225–231) Azure Bot Service routes messages between Microsoft 365 and the agent, a Microsoft 365 publishing package supports distribution, an Entra ID application supports authentication, and the result can be discovered in the Teams agent store. (SRC-232 L225–231)

The direct portal path is the simplest option when the agent logic can stay inside Foundry. (SRC-232 L232–238) The Agents Toolkit path creates a proxy application for cases that need extra integration control, such as custom SSO, middleware, or deployment pipelines. (SRC-232 L238–242)

## Code and API patterns

Not covered by this source.

## Key terms

- **Agent Application** — the published managed Azure resource with endpoint, identity, user isolation, and routing behavior. (SRC-232 L217–224)
- **Dedicated invocation URL** — the stable endpoint created for the published agent. (SRC-232 L221)
- **Agent identity** — the distinct Microsoft Entra identity created for the agent, separate from the development project. (SRC-232 L222; SRC-232 L251–256)
- **Azure Bot Service** — the resource that routes messages between Microsoft 365 and the Foundry agent. (SRC-232 L227)
- **Microsoft 365 publishing package** — the generated package used to distribute the agent into Microsoft 365. (SRC-232 L227)

## Decision boundaries and exam cues

- **Inference:** Choose direct Foundry portal publishing when the scenario asks for quick Teams or Copilot availability and does not require custom middleware or deployment pipelines. (SRC-232 L237–239)
- **Inference:** Choose Microsoft 365 Agents Toolkit when the scenario explicitly requires custom SSO, advanced middleware, or multi-environment deployment. (SRC-232 L238–242)
- **Inference:** If tools worked during development but fail after publication, check the published agent identity's Azure permissions because project identity permissions do not transfer automatically. (SRC-232 L251–256)
- **Inference:** If users need a browser demo, custom app embedding, or non-Microsoft-365 chat channels, the other publishing channels may fit better than Microsoft 365 publishing. (SRC-232 L245–250)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source references a publish-scope table, but the captured table body is collapsed, so scope details must be read from neighboring units. (SRC-232 L243–244; SRC-185 L255–258)
- **Stale-risk:** The list of Bot Service channels and Microsoft 365 publishing behavior may change as platform capabilities evolve. (SRC-232 L245–250)

## Relation to other sources

- [[src-125-introduction-integrate-agent-microsoft-365]] introduces the module objectives that this unit begins to fill in. (SRC-125 L219–226; SRC-232 L216–261)
- [[src-185-publish-agent-foundry-portal-teams]] provides the concrete Foundry portal steps for the direct publishing path described here. (SRC-232 L232–238; SRC-185 L216–299)
- [[src-5-advanced-microsoft-365-agents-toolkit-complex-integration-scenarios]] expands the Agents Toolkit alternative mentioned here. (SRC-232 L238–242; SRC-5 L216–241)
- [[src-111-integrate-agent-microsoft-365-episode-11]] echoes the stable endpoint, identity, isolation, Bot Service, and scope concepts in a demo format. (SRC-232 L217–256; SRC-111 L34–120)

## Connections

- [[agent-publishing]] — the unit is the module's main publishing-options explanation. (SRC-232 L216–261)
- [[microsoft-365-agent-integration]] — Microsoft 365 publication creates Bot Service, package, Entra registration, and Teams discoverability. (SRC-232 L225–231)
- [[microsoft-365-agents-toolkit]] — Toolkit is the advanced alternative for custom integration needs. (SRC-232 L238–242)
- [[microsoft-entra-id]] — published agents have distinct Entra identities and application registration. (SRC-232 L220; SRC-232 L228)
- [[foundry-agent-service]] — agents run in the Foundry Agent Service infrastructure before publication. (SRC-232 L218)
- *Module units:* [[src-125-introduction-integrate-agent-microsoft-365|1 Introduction]] · [[src-185-publish-agent-foundry-portal-teams|3 Publish an agent from Foundry portal to Teams]] · [[src-5-advanced-microsoft-365-agents-toolkit-complex-integration-scenarios|4 Advanced - Use Microsoft 365 Agents Toolkit for complex integration scenarios - Training - Microsoft]] · [[src-2-access-microsoft-365-data-work-iq|5 Access Microsoft 365 data with Work IQ]] · [[src-222-test-iterate-integrated-agent|6 Test and iterate your integrated agent]] · [[src-79-exercise-publish-foundry-agent-teams|7 Exercise - Publish a Foundry agent to Teams]] · [[src-149-knowledge-check-integrate-agent-microsoft-365|8 Knowledge check]] · [[src-209-summary-integrate-agent-microsoft-365|9 Summary]] · [[src-111-integrate-agent-microsoft-365-episode-11|episode 11]]

## Open questions

- The source does not show the collapsed publish-scope table, so the exact shared-versus-organization scope comparison comes from later module sources. (SRC-232 L243–244; SRC-185 L255–258)

## Sources

- SRC-232 — raw file: [[232-Understand Foundry agent publishing options - Training - Microsoft Learn]]
