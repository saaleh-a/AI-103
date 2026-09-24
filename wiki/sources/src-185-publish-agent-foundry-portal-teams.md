---
title: "Publish an agent from Foundry portal to Teams"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Walks through preparing, publishing, testing, approving, permissioning, and updating a Foundry agent for Teams and Microsoft 365 Copilot."
area: agents
source_ids: [SRC-185]
objectives: [P07, P12, G12]
tags: [foundry-portal, teams, agent-publishing, azure-bot-service, rbac]
aliases: ["SRC-185"]
source_kind: learn-unit
module: "Integrate your agent with Microsoft 365"
learning_path: "Develop AI agents on Azure"
unit: "3 of 9"
presenters: []
raw_file: "185-Publish an agent from Foundry portal to Teams - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/integrate-foundry-agent-with-m365/3-publish-agent-foundry-portal"
ingest_depth: full
---

# Publish an agent from Foundry portal to Teams

*learn-unit · Integrate your agent with Microsoft 365 · unit 3 of 9 · SRC-185*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-185 |
| Raw file | 185-Publish an agent from Foundry portal to Teams - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Integrate your agent with Microsoft 365 |
| Unit / episode | 3 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/integrate-foundry-agent-with-m365/3-publish-agent-foundry-portal |
| Teaching content | L212–299 of 329 |
| Content length | ~902 words |
| Capture quality | High; one metadata table is collapsed, but the workflow and checks are clear. |
| Ingest depth | full |

## TL;DR

The Foundry portal guides publication by creating an agent application, provisioning Azure resources, and generating a package for Teams and Microsoft 365 Copilot distribution. (SRC-185 L216) Preparation includes testing in the Foundry playground, confirming roles and permissions, registering the Bot Service provider, and collecting visible metadata such as icons, contact details, privacy policy, and terms of use. (SRC-185 L217–239) After publishing, test the package in Teams, handle organization-scope admin approval, reassign Azure permissions to the new published agent identity, and republish when the Foundry agent changes. (SRC-185 L268–299)

## Key claims

- Portal publishing creates an agent application, provisions required Azure resources, and generates a publishing package. (SRC-185 L216)
- Before publishing, the source recommends testing varied inputs, checking tools, and verifying responses in the Foundry playground. (SRC-185 L218–221)
- Required permissions include Azure AI Project Manager on the Foundry project, Azure AI User for published-agent invocation, subscription resource-creation permissions, and Entra app registration permissions. (SRC-185 L222–227)
- The Microsoft.BotService provider must be registered because publishing creates an Azure Bot Service resource. (SRC-185 L228–230)
- Metadata includes display name, brief description, PNG icons, organization/contact details, privacy policy URL, and terms of use URL. (SRC-185 L231–238)
- The warning says not to include secrets, API keys, or sensitive information in metadata fields visible to users. (SRC-185 L239)
- Publishing uses `Publish`, then `Publish to Teams and Microsoft 365 Copilot`, and creates Azure Bot Service during configuration. (SRC-185 L240–254)
- Shared scope appears under `Your agents`, is available immediately, and fits testing or small teams. (SRC-185 L255–257)
- Organization scope appears under `Built by your org`, requires admin approval, and fits production deployments. (SRC-185 L257–258)
- A downloaded package can be uploaded as a custom app in Teams for local testing. (SRC-185 L263–273)
- Published agents get a distinct identity, so resource access must be reassigned with appropriate RBAC roles. (SRC-185 L281–292)

## How it works

The source presents publication as a staged operational workflow. (SRC-185 L216–299) First, the agent is validated in the Foundry playground, required Azure and Entra permissions are checked, the Bot Service resource provider is registered, and user-visible app metadata is prepared without secrets. (SRC-185 L217–239)

In the portal, the developer selects the agent version, starts publishing, chooses Teams and Microsoft 365 Copilot, lets the portal generate application and tenant identifiers, and creates an Azure Bot Service resource. (SRC-185 L240–254) Then the developer completes metadata, chooses a distribution scope, and prepares or downloads the package. (SRC-185 L255–267)

Testing and governance continue after packaging. (SRC-185 L268–299) A custom Teams upload validates the package, organization scope requires Microsoft 365 admin approval, Azure RBAC roles must be assigned to the published agent identity for any accessed resources, and updates require republishing. (SRC-185 L268–299)

## Code and API patterns

Not covered by this source.

## Key terms

- **Shared scope** — the scope where the agent appears under `Your agents`, is available immediately, and fits testing or small teams. (SRC-185 L255–257)
- **Organization scope** — the scope where the agent appears under `Built by your org`, requires admin approval, and fits production deployment. (SRC-185 L257–258)
- **Publishing package** — the package created by `Prepare Agent` that can be downloaded or used in the in-product publishing flow. (SRC-185 L259–267)
- **Published agent identity** — the new identity whose RBAC permissions must be granted for accessed Azure resources. (SRC-185 L281–292)

## Decision boundaries and exam cues

- **Inference:** If a scenario asks for immediate limited testing, shared scope is the stronger clue; if it asks for tenant-wide production availability, organization scope is the stronger clue. (SRC-185 L255–258)
- **Inference:** If a question mentions tools failing only after publishing, the likely issue is that the new published identity lacks RBAC roles on the accessed resources. (SRC-185 L281–292)
- **Inference:** If a scenario asks what Azure resource the portal creates, the answer is Azure Bot Service, not Functions, Cosmos DB, or Logic Apps. (SRC-185 L228–230; SRC-185 L248–254)
- **Inference:** If a scenario includes sensitive app metadata, the source's warning rules out placing secrets, API keys, or sensitive information in those metadata fields. (SRC-185 L231–239)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The required metadata table body is collapsed, so the page preserves the surrounding list of metadata fields rather than inventing table entries. (SRC-185 L231–238; SRC-185 L255)
- Updates for organization-scope agents might require re-approval depending on tenant policies, so update behavior is partly policy-dependent. (SRC-185 L294–299)

## Relation to other sources

- [[src-232-understand-foundry-agent-publishing-options]] explains why publishing creates a stable endpoint, Bot Service routing, Entra registration, and separate identity before this unit gives portal steps. (SRC-232 L216–256; SRC-185 L216–299)
- [[src-149-knowledge-check-integrate-agent-microsoft-365]] assesses Bot Service creation, scope approval, permission reassignment, Work IQ, and Toolkit selection from this unit and adjacent units. (SRC-185 L228–292; SRC-149 L216–244)
- [[src-222-test-iterate-integrated-agent]] extends the post-publishing test and monitor actions introduced here. (SRC-185 L268–299; SRC-222 L216–285)
- [[src-111-integrate-agent-microsoft-365-episode-11]] demonstrates a similar portal publishing flow with a Contoso knowledge agent. (SRC-185 L240–299; SRC-111 L138–292)

## Connections

- [[agent-publishing]] — this is the step-by-step portal publishing source. (SRC-185 L216–299)
- [[microsoft-365-agent-integration]] — Teams and Microsoft 365 Copilot are the target surfaces. (SRC-185 L216; SRC-185 L243–244)
- [[microsoft-entra-id]] — publishing involves Entra application registration and a new agent identity. (SRC-185 L226–227; SRC-185 L281–292)
- [[keyless-authentication]] — the page emphasizes identity and RBAC role assignment after publishing. (SRC-185 L281–292)
- [[agent-testing-and-evaluation]] — the package and published agent must be tested in Teams. (SRC-185 L268–277)

## Open questions

- The source does not include the exact expanded metadata table values beyond the surrounding list, because the capture only shows `Expand table`. (SRC-185 L231–255)

## Sources

- SRC-185 — raw file: [[185-Publish an agent from Foundry portal to Teams - Training - Microsoft Learn]]
