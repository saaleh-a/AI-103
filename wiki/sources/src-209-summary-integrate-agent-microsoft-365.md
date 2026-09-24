---
title: "Summary — Integrate your agent with Microsoft 365"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Summarizes Teams and Microsoft 365 Copilot publishing, Bot Service and Entra registrations, scopes, agent identity, Work IQ, and next steps."
area: agents
source_ids: [SRC-209]
objectives: []
tags: [summary, microsoft-365, agent-publishing, work-iq, teams]
aliases: ["SRC-209"]
source_kind: learn-unit
module: "Integrate your agent with Microsoft 365"
learning_path: "Develop AI agents on Azure"
unit: "9 of 9"
presenters: []
raw_file: "209-Summary - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/integrate-foundry-agent-with-m365/9-summary"
ingest_depth: full
---

# Summary — Integrate your agent with Microsoft 365

*learn-unit · Integrate your agent with Microsoft 365 · unit 9 of 9 · SRC-209*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-209 |
| Raw file | 209-Summary - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Integrate your agent with Microsoft 365 |
| Unit / episode | 9 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/integrate-foundry-agent-with-m365/9-summary |
| Teaching content | L212–232 of 260 |
| Content length | ~198 words |
| Capture quality | High; concise module summary. |
| Ingest depth | full |

## TL;DR

The module summary says learners published Microsoft Foundry agents to Microsoft Teams and Microsoft 365 Copilot so assistants are available where users already work. (SRC-209 L218) It recaps direct Foundry portal publishing, automatic Bot Service provisioning, Microsoft Entra ID registrations, Microsoft 365 Agents Toolkit for complex cases, publish scopes, RBAC identity concerns, Work IQ through MCP, and next steps for tools, enterprise grounding, and multi-agent systems. (SRC-209 L217–232)

## Key claims

- The module taught publishing Microsoft Foundry agents to Microsoft Teams and Microsoft 365 Copilot. (SRC-209 L218)
- Direct Foundry portal publishing automatically provisions Azure Bot Service and creates Microsoft Entra ID registrations. (SRC-209 L219)
- Microsoft 365 Agents Toolkit is an alternative for complex enterprise scenarios. (SRC-209 L218–219)
- Shared scope is for testing, and organization scope is for broad distribution. (SRC-209 L220–221)
- The module covered agent identity considerations for RBAC permissions. (SRC-209 L220)
- Work IQ connects agents to Microsoft 365 data through Model Context Protocol. (SRC-209 L222–224)
- Suggested next steps include adding tools, grounding with enterprise data sources like Azure AI Search, and building multi-agent systems. (SRC-209 L229–232)

## How it works

This summary compresses the module into three phases. (SRC-209 L216–232) First, direct portal publishing moves agents into Teams and Microsoft 365 Copilot while provisioning Bot Service and Entra registrations. (SRC-209 L216–218) Second, deployment choices include Agents Toolkit for complex enterprise needs, shared versus organization scopes, and RBAC considerations for published-agent identity. (SRC-209 L218–222) Third, Work IQ adds Microsoft 365 data access through MCP, and follow-on learning extends agents with tools, Azure AI Search grounding, and multi-agent workflows. (SRC-209 L222–232)

## Code and API patterns

Not covered by this source.

## Key terms

- **Direct publishing workflow** — the Foundry portal route that provisions Bot Service and creates Entra registrations. (SRC-209 L219)
- **Microsoft 365 Agents Toolkit** — the alternative named for complex enterprise scenarios. (SRC-209 L218–219)
- **Publish scopes** — shared for testing and organization for broad distribution. (SRC-209 L220–221)
- **Work IQ** — the MCP-based route for connecting agents to Microsoft 365 data. (SRC-209 L222–224)

## Decision boundaries and exam cues

- **Inference:** If a scenario names broad distribution rather than testing, organization scope is implied; if it names testing, shared scope is implied. (SRC-209 L220–221)
- **Inference:** If a scenario requires Microsoft 365 data through MCP, Work IQ is the module-supported answer. (SRC-209 L222–224)
- **Inference:** If a scenario requires complex enterprise integration beyond portal publishing, Microsoft 365 Agents Toolkit is the alternative named by the module. (SRC-209 L217–219)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The summary states the outcomes but omits procedural detail; the operational steps are in earlier units. (SRC-209 L216–232)
- The source uses Microsoft Foundry naming and Microsoft 365 Copilot naming consistently with the rest of this module's Learn units. (SRC-209 L216–224)

## Relation to other sources

- [[src-185-publish-agent-foundry-portal-teams]] supplies the direct publishing details summarized here. (SRC-185 L216–299; SRC-209 L216–221)
- [[src-5-advanced-microsoft-365-agents-toolkit-complex-integration-scenarios]] supplies the advanced Toolkit alternative summarized here. (SRC-5 L216–241; SRC-209 L218–219)
- [[src-2-access-microsoft-365-data-work-iq]] supplies the Work IQ and MCP details summarized here. (SRC-2 L216–296; SRC-209 L222–224)
- [[src-222-test-iterate-integrated-agent]] supplies the testing and monitoring practices implied by completing the module. (SRC-222 L216–285; SRC-209 L216–232)

## Connections

- [[microsoft-365-agent-integration]] — this is the module summary for the integration topic. (SRC-209 L216–232)
- [[agent-publishing]] — direct portal publishing, scopes, Bot Service, and Entra registrations are summarized. (SRC-209 L216–222)
- [[work-iq]] — Work IQ data access through MCP is summarized. (SRC-209 L222–224)
- [[azure-ai-search]] — Azure AI Search appears as a suggested next enterprise grounding source. (SRC-209 L229–231)
- [[multi-agent-orchestration]] — multi-agent systems are named as a next step. (SRC-209 L231–232)
- *Module units:* [[src-125-introduction-integrate-agent-microsoft-365|1 Introduction]] · [[src-232-understand-foundry-agent-publishing-options|2 Understand Foundry agent publishing options]] · [[src-185-publish-agent-foundry-portal-teams|3 Publish an agent from Foundry portal to Teams]] · [[src-5-advanced-microsoft-365-agents-toolkit-complex-integration-scenarios|4 Advanced - Use Microsoft 365 Agents Toolkit for complex integration scenarios - Training - Microsoft]] · [[src-2-access-microsoft-365-data-work-iq|5 Access Microsoft 365 data with Work IQ]] · [[src-222-test-iterate-integrated-agent|6 Test and iterate your integrated agent]] · [[src-79-exercise-publish-foundry-agent-teams|7 Exercise - Publish a Foundry agent to Teams]] · [[src-149-knowledge-check-integrate-agent-microsoft-365|8 Knowledge check]] · [[src-111-integrate-agent-microsoft-365-episode-11|episode 11]]

## Open questions

- The summary does not provide new technical details beyond the module recap and next-step links. (SRC-209 L216–232)

## Sources

- SRC-209 — raw file: [[209-Summary - Training - Microsoft Learn]]
