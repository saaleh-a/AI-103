---
title: "Integrate your agent with Microsoft 365 - AI-103 - Episode 11"
type: source
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Video walkthrough of publishing a Foundry agent to Teams and Microsoft 365, including agent identity, user isolation, Bot Service, scopes, and a demo."
area: agents
source_ids: [SRC-111]
objectives: [P07, P12, G12]
tags: [episode, agent-publishing, teams, microsoft-365-copilot, bot-service]
aliases: ["SRC-111"]
source_kind: episode
module: "Integrate your agent with Microsoft 365"
learning_path: null
unit: null
presenters: ["ROB FOULKROD"]
raw_file: "111-Integrate your agent with Microsoft 365 - AI-103 - Episode 11.md"
url: "https://www.youtube.com/watch?v=eWYOZkFoNn4"
ingest_depth: full
---

# Integrate your agent with Microsoft 365 - AI-103 - Episode 11

*episode · Integrate your agent with Microsoft 365 · SRC-111*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-111 |
| Raw file | 111-Integrate your agent with Microsoft 365 - AI-103 - Episode 11.md |
| Kind | episode |
| Learning path | None |
| Module | Integrate your agent with Microsoft 365 |
| Unit / episode | Episode 11 |
| Presenter(s) | ROB FOULKROD |
| URL | https://www.youtube.com/watch?v=eWYOZkFoNn4 |
| Teaching content | L3–467 of 467 |
| Content length | ~2,085 words |
| Capture quality | Medium; auto-captioned transcript with some inaudible text but a clear publishing demo. |
| Ingest depth | full |

## TL;DR

Rob Foulkrod frames Microsoft 365 integration as meeting users inside Teams, Microsoft 365 Chat, and daily Microsoft 365 apps rather than forcing them to come to the agent. (SRC-111 L4–21) The episode explains publishing from Foundry as a direct portal flow that creates a stable endpoint, agent identity, user data isolation, and Azure Bot Service routing, then demonstrates publishing an enterprise knowledge agent into Teams and Copilot. (SRC-111 L22–120; SRC-111 L138–292)

## Key claims

- Users already work inside Microsoft 365 and Teams, so the integration goal is to bring the agent to those surfaces. (SRC-111 L4–21)
- Foundry offers a direct publishing option described as a click and a few dialogs. (SRC-111 L22–34)
- Publishing provides a dedicated URL that remains stable as versions are updated. (SRC-111 L35–45)
- Publishing creates an agent identity in Entra ID, allowing monitoring to distinguish the agent from the host app or user. (SRC-111 L46–72)
- Published apps preserve user data isolation, so one user's prompts are not visible to another user. (SRC-111 L73–96)
- Publishing selects a specific saved agent version, and later agent edits do not automatically change production. (SRC-111 L97–113)
- Azure Bot Service is created underneath to route between Teams or Microsoft 365 Chat and the Foundry agent. (SRC-111 L114–120)
- Organizational scope requires admin approval in Microsoft 365 admin, while a developer-only/test scope can be used first. (SRC-111 L129–157; SRC-111 L207–229)
- The demo builds an enterprise knowledge agent over two uploaded policy files, validates answers in Foundry, publishes version 2, and tests the agent in Teams and Copilot. (SRC-111 L158–292)
- The presenter summarizes that Bot Service powers Teams integration, each agent gets its own Entra ID, conversations stay isolated, and scope selection controls distribution. (SRC-111 L323–376)

## How it works

The episode gives the same architecture as the Learn units but in demo form. (SRC-111 L22–120) Publishing creates a stable endpoint for the agent, introduces an Entra ID agent identity, keeps users' data isolated, and uses Azure Bot Service for Microsoft 365 and Teams routing. (SRC-111 L35–120)

Versioning is explicit. (SRC-111 L97–113) The presenter says agents increment versions when saved, the publisher chooses which version to publish, and later changes require a deliberate update rather than automatically breaking production. (SRC-111 L97–113)

The demo then creates an enterprise knowledge agent, chooses GPT-4.1, gives Contoso policy instructions, uploads IT security and remote-work files, validates password and core-hours answers, saves the agent, publishes version 2 to Teams and Microsoft 365, and tests the published result in Teams and Copilot. (SRC-111 L158–292)

## Segment guide

- L4–21 — Opening problem and session scope: Microsoft 365 users should meet the agent in Teams, Chat, and daily apps. (SRC-111 L4–21)
- L22–45 — Direct Foundry publishing and dedicated URL: Foundry can publish into Microsoft 365 with minimal dialogs and a stable endpoint. (SRC-111 L22–45)
- L46–96 — Agent identity and user isolation: Entra ID agent identity provides visibility, and user prompts remain isolated. (SRC-111 L46–96)
- L97–120 — Version selection and Bot Service routing: publication selects a saved version and uses Azure Bot Service under the covers. (SRC-111 L97–120)
- L121–157 — Metadata and publishing scope: developer-only testing and organization approval are contrasted. (SRC-111 L121–157)
- L158–205 — Demo agent build: the enterprise knowledge agent uses GPT-4.1, instructions, and uploaded policy files. (SRC-111 L158–205)
- L206–230 — Publish version 2: the presenter publishes to Teams and Microsoft 365 and notes Bot Services as the go-between resource. (SRC-111 L206–230)
- L231–292 — Teams and Copilot tests: the published agent is opened in Teams and then called from Copilot. (SRC-111 L231–292)
- L293–376 — Review questions and recap: Bot Service, stable endpoint, identity, isolation, and scope are restated. (SRC-111 L293–376)
- L377–467 — Closing: the session emphasizes moving agents from development into tools people use and continuing to explore Microsoft Learn. (SRC-111 L377–467)

## Code and API patterns

Not covered by this source.

## Key terms

- **Dedicated URL** — the stable endpoint that remains consistent as updates happen. (SRC-111 L35–45)
- **Agent identity** — an Entra ID identity that lets monitoring distinguish what the agent does. (SRC-111 L46–72)
- **User data isolation** — isolation that prevents one user's prompts and agent interactions from being visible to another user. (SRC-111 L73–96)
- **Azure Bot Service** — the Azure resource created to route between Teams or Microsoft 365 Chat and the Foundry agent. (SRC-111 L114–120)
- **Publishing scope** — the choice between developer-only testing and organization distribution with admin approval. (SRC-111 L129–157; SRC-111 L207–229)

## Decision boundaries and exam cues

- **Inference:** If the question asks what direct publishing creates to route Teams messages, the episode supports Azure Bot Service. (SRC-111 L114–120; SRC-111 L293–306)
- **Inference:** If a scenario asks why production is not changed by every agent edit, version selection and deliberate republishing are the relevant concepts. (SRC-111 L97–113)
- **Inference:** If a scenario mentions organization-wide publishing, expect Microsoft 365 admin review and approval rather than immediate availability. (SRC-111 L140–157; SRC-111 L216–229)
- **Inference:** If a scenario asks why agent activity can be distinguished from the hosting app or user, the agent identity in Entra ID is the relevant detail. (SRC-111 L46–72)

## Assessment items

The episode includes two spoken review prompts rather than a captured interactive quiz. (SRC-111 L293–322)

1. What Azure resource does the Foundry portal automatically create when publishing an agent to Microsoft Teams? The presenter answers Bot Service. (SRC-111 L293–306)
2. What is a key benefit of the agent application created when publishing an agent? The presenter answers stable endpoint and user isolation. (SRC-111 L307–322)

## Tensions, caveats and currency

- **Stale-risk:** The presenter says Teams, Chat, and Microsoft 365 surfaces are constantly gaining new agent capabilities, so channel behavior may evolve. (SRC-111 L431–445)
- The transcript is auto-captioned and includes at least one inaudible section during the Copilot demo, so detailed UI wording should be treated cautiously. (SRC-111 L273–285)
- The episode uses `GPT-4.1` in the demo, which is a time-sensitive model choice rather than a general requirement for Microsoft 365 publishing. (SRC-111 L167–172)

## Relation to other sources

- [[src-232-understand-foundry-agent-publishing-options]] provides the formal Learn-unit explanation of Agent Application, Bot Service, identity, scope, and channel options that this episode narrates. (SRC-232 L216–261; SRC-111 L22–120)
- [[src-185-publish-agent-foundry-portal-teams]] provides the text procedure matching the episode's portal demo. (SRC-185 L216–299; SRC-111 L206–292)
- [[src-222-test-iterate-integrated-agent]] expands the testing and iteration ideas after publication. (SRC-222 L216–285; SRC-111 L377–392)
- [[src-149-knowledge-check-integrate-agent-microsoft-365]] asks the same Bot Service and agent-application benefit checks spoken in the episode. (SRC-149 L216–231; SRC-111 L293–322)

## Connections

- [[microsoft-365-agent-integration]] — the episode's core theme is bringing agents into Teams and Microsoft 365 Chat. (SRC-111 L4–21)
- [[agent-publishing]] — direct Foundry publishing is the main mechanism demonstrated. (SRC-111 L22–120; SRC-111 L206–292)
- [[microsoft-entra-id]] — the episode emphasizes agent identity in Entra ID. (SRC-111 L46–72)
- [[foundry-iq]] — the presenter references checking connectivity to Foundry IQ endpoints in the published environment. (SRC-111 L129–139)
- [[file-search-tool]] — the demo grounds the agent with uploaded policy files and an index. (SRC-111 L176–205)

## Open questions

- The episode does not show the exact admin-center approval screens or detailed RBAC role assignment steps after publishing. (SRC-111 L140–157; SRC-111 L323–376)

## Sources

- SRC-111 — raw file: [[111-Integrate your agent with Microsoft 365 - AI-103 - Episode 11]]
