---
title: "Introduction — Integrate your agent with Microsoft 365"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Introduces publishing Foundry agents into Teams and Microsoft 365 Copilot, plus Work IQ for Microsoft 365 data access."
area: agents
source_ids: [SRC-125]
objectives: []
tags: [microsoft-365, teams, copilot, agent-publishing, work-iq]
aliases: ["SRC-125"]
source_kind: learn-unit
module: "Integrate your agent with Microsoft 365"
learning_path: "Develop AI agents on Azure"
unit: "1 of 9"
presenters: []
raw_file: "125-Introduction - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/integrate-foundry-agent-with-m365/1-introduction"
ingest_depth: full
---

# Introduction — Integrate your agent with Microsoft 365

*learn-unit · Integrate your agent with Microsoft 365 · unit 1 of 9 · SRC-125*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-125 |
| Raw file | 125-Introduction - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Integrate your agent with Microsoft 365 |
| Unit / episode | 1 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/integrate-foundry-agent-with-m365/1-introduction |
| Teaching content | L212–230 of 260 |
| Content length | ~359 words |
| Capture quality | High; concise introduction with objectives and prerequisites. |
| Ingest depth | full |

## TL;DR

This unit frames the problem as moving a Microsoft Foundry agent from the Foundry playground into the collaboration surfaces where users already work, especially Teams and Microsoft 365 Copilot. (SRC-125 L216–218) The module promises coverage of publishing options, the Foundry portal publishing workflow, Work IQ access to Microsoft 365 data, and testing or troubleshooting the integrated agent. (SRC-125 L219–226)

## Key claims

- Foundry agents can be published directly to Microsoft Teams and Microsoft 365 Copilot so users can interact with custom agents in familiar productivity tools. (SRC-125 L217–218)
- Example use cases include support agents for IT questions, knowledge assistants for employee onboarding, and specialized advisors for business domains. (SRC-125 L218)
- The module teaches publishing options, portal publishing to Teams and Copilot, Work IQ access to emails, meetings, and documents, and testing or troubleshooting. (SRC-125 L219–226)
- The stated prerequisites are Azure and Azure portal familiarity, experience building agents in Microsoft Foundry, and a Microsoft 365 subscription with Teams access. (SRC-125 L227–229)
- The unit says the text format contains greater detail than the video format, so the text can supplement video-based learning. (SRC-125 L230)

## How it works

The unit starts with a workplace adoption problem: a useful Foundry agent can still miss users if it only lives in the Foundry playground while users spend their day in Teams or Microsoft 365 Copilot. (SRC-125 L216–218) The module's solution path is to publish Foundry agents into Microsoft 365 surfaces and then enrich agents with Microsoft 365 data through Work IQ. (SRC-125 L217–226)

The source is an overview, not a procedure. (SRC-125 L219–226) It establishes the module sequence: first understand publishing options, then publish from the portal, then use Work IQ for Microsoft 365 data, and finally test and troubleshoot the integrated agent. (SRC-125 L219–226)

## Code and API patterns

Not covered by this source.

## Key terms

- **Microsoft Foundry agent** — the agent built before publishing into Microsoft 365 surfaces in the module scenario. (SRC-125 L216–219)
- **Microsoft Teams** — the collaboration surface where users can interact with the published agent. (SRC-125 L216–218)
- **Microsoft 365 Copilot** — another Microsoft 365 surface named as a target for published agents. (SRC-125 L217–218)
- **Work IQ** — the capability named for giving agents access to Microsoft 365 data such as emails, meetings, and documents. (SRC-125 L219–225)

## Decision boundaries and exam cues

- **Inference:** If a scenario says the agent works in the Foundry playground but users want it in Teams or Microsoft 365 Copilot, this module's publishing path is the relevant area. (SRC-125 L216–224)
- **Inference:** If the requirement adds Microsoft 365 data such as emails, meetings, or documents, Work IQ becomes part of the integration story rather than plain publishing alone. (SRC-125 L219–225)
- **Inference:** If the learner lacks Azure, Foundry agent, or Teams prerequisites, the module assumes those foundations rather than teaching them from scratch. (SRC-125 L227–229)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source names Microsoft Foundry, Microsoft Teams, Microsoft 365 Copilot, and Work IQ but does not yet define the publishing resources or permissions; later units provide those details. (SRC-125 L217–226)
- The source recommends prior experience with Foundry agent building, so it is not the first agent-development unit in the learning path. (SRC-125 L227–229)

## Relation to other sources

- [[src-232-understand-foundry-agent-publishing-options]] expands this introduction by explaining Agent Application resources, Bot Service, publish scopes, and prerequisites. (SRC-125 L219–226; SRC-232 L216–261)
- [[src-185-publish-agent-foundry-portal-teams]] turns the publishing objective into portal steps and post-publish permission reassignment. (SRC-125 L222–224; SRC-185 L216–299)
- [[src-2-access-microsoft-365-data-work-iq]] expands the Work IQ objective named here. (SRC-125 L224–225; SRC-2 L216–296)
- [[src-111-integrate-agent-microsoft-365-episode-11]] presents the same module topic as a video walkthrough and demo. (SRC-125 L219–226; SRC-111 L14–21)

## Connections

- [[microsoft-365-agent-integration]] — the source introduces bringing agents into Microsoft 365 surfaces. (SRC-125 L217–226)
- [[agent-publishing]] — publishing is the module's first stated capability. (SRC-125 L219–224)
- [[work-iq]] — Work IQ is named as the data-access route for Microsoft 365 content. (SRC-125 L224–225)
- [[agent-testing-and-evaluation]] — the module includes testing and troubleshooting integrated agents. (SRC-125 L225–226)

## Open questions

- The source does not yet specify which Azure resources, identities, or admin approvals publishing creates. (SRC-125 L219–226)

## Sources

- SRC-125 — raw file: [[125-Introduction - Training - Microsoft Learn]]
