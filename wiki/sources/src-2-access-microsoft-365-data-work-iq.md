---
title: "Access Microsoft 365 data with Work IQ"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Introduces Microsoft Work IQ as a CLI and MCP server for permission-trimmed Microsoft 365 data access during agent development."
area: agents
source_ids: [SRC-2]
objectives: [G09]
tags: [work-iq, microsoft-365, mcp, microsoft-graph, permissions]
aliases: ["SRC-2"]
source_kind: learn-unit
module: "Integrate your agent with Microsoft 365"
learning_path: "Develop AI agents on Azure"
unit: "5 of 9"
presenters: []
raw_file: "2-Access Microsoft 365 data with Work IQ - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/integrate-foundry-agent-with-m365/5-access-m365-data-workiq"
ingest_depth: full
---

# Access Microsoft 365 data with Work IQ

*learn-unit · Integrate your agent with Microsoft 365 · unit 5 of 9 · SRC-2*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-2 |
| Raw file | 2-Access Microsoft 365 data with Work IQ - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Integrate your agent with Microsoft 365 |
| Unit / episode | 5 of 9 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/integrate-foundry-agent-with-m365/5-access-m365-data-workiq |
| Teaching content | L212–296 of 326 |
| Content length | ~913 words |
| Capture quality | Medium; prose is rich, but command and JSON blocks are collapsed after Copy markers. |
| Ingest depth | full |

## TL;DR

Microsoft Work IQ connects AI agents to Microsoft 365 data such as emails, meetings, documents, Teams messages, and people information. (SRC-2 L216–218) The source defines Work IQ as a command-line interface and server for Microsoft 365 Copilot data, and explains that it is built on Model Context Protocol as an MCP server for Microsoft 365 data. (SRC-2 L219–239) It can be used directly from the CLI or as an MCP server for AI assistants, with Microsoft 365 Copilot permissions and security controls applying to the data access. (SRC-2 L240–296)

## Key claims

- Microsoft Work IQ connects AI agents to Microsoft 365 data, including emails, meetings, documents, Teams messages, and people information. (SRC-2 L216–218)
- Work IQ is a CLI and server that connects AI assistants to Microsoft 365 Copilot data. (SRC-2 L219–221)
- Example questions include asking what a manager said about a deadline, finding recent planning documents, summarizing Teams channel messages, or identifying people on a project. (SRC-2 L222–227)
- Work IQ is built on Model Context Protocol, which lets AI assistants connect to external data sources and tools. (SRC-2 L229–239)
- MCP server capabilities can include tools, resources, and prompts. (SRC-2 L232–236)
- Work IQ runs in CLI mode for terminal queries and MCP server mode for AI assistants such as GitHub Copilot in Visual Studio Code. (SRC-2 L240–249)
- Work IQ requires Node.js for local CLI use, a Microsoft 365 subscription with a Copilot license, and tenant admin consent for the Work IQ application. (SRC-2 L264–269)
- Work IQ inherits the Microsoft 365 Copilot security model, including permission-based access, no data storage, enterprise security policies, and admin visibility. (SRC-2 L272–279)
- Work IQ accesses data through Microsoft Graph with the authenticated identity, so users cannot access documents they lack permission to view. (SRC-2 L276–279)
- Work IQ is currently in preview. (SRC-2 L296)

## How it works

Work IQ provides Microsoft 365 context to agents through two interaction modes. (SRC-2 L240–249; SRC-2 L285–295) In CLI mode, the developer runs terminal queries, which fits scripts, one-off queries, and quick answers outside an IDE. (SRC-2 L240–244; SRC-2 L286–289) In MCP server mode, an AI assistant discovers and calls Work IQ tools behind the scenes so the developer can ask natural questions in an assistant chat. (SRC-2 L245–249; SRC-2 L290–294)

The underlying protocol explanation is MCP. (SRC-2 L229–239) The source says an MCP server exposes capabilities such as tools, resources, and prompts; Work IQ is the MCP server specialized for Microsoft 365 data. (SRC-2 L232–239)

Security is permission-trimmed to the authenticated user's Microsoft 365 permissions. (SRC-2 L272–284) The source says Work IQ does not store Microsoft 365 data, retrieves information on demand, follows organization policies, and is auditable by administrators. (SRC-2 L272–284)

## Code and API patterns

The capture omits exact commands and JSON bodies, but identifies the surrounding setup patterns. (SRC-2 L250–265)

- CLI installation can use npm. (SRC-2 L247–250)
- GitHub Copilot CLI installation uses Copilot CLI, a plugin marketplace, and `workiq@copilot-plugins`. (SRC-2 L254–259)
- Visual Studio Code configuration adds Work IQ as an MCP server in MCP settings. (SRC-2 L257–260)
- Before first use, the user must accept the End User License Agreement. (SRC-2 L260)
- CLI use runs `workiq ask` from the terminal for ad-hoc queries. (SRC-2 L283; SRC-2 L286)

## Key terms

- **Microsoft Work IQ** — a CLI and server that connects AI assistants to Microsoft 365 Copilot data. (SRC-2 L219–221)
- **Model Context Protocol** — an open protocol for connecting AI assistants to external data sources and tools. (SRC-2 L229–231)
- **MCP server** — a server exposing tools, resources, and prompts that agents can discover and use. (SRC-2 L232–238)
- **CLI mode** — Work IQ mode for running direct terminal queries. (SRC-2 L240–244)
- **MCP server mode** — Work IQ mode where an AI assistant calls Work IQ tools behind the scenes. (SRC-2 L245–249; SRC-2 L290–294)

## Decision boundaries and exam cues

- **Inference:** Choose Work IQ when the scenario requires Microsoft 365 workplace context such as emails, meetings, documents, Teams messages, or people information. (SRC-2 L216–227)
- **Inference:** Choose CLI mode for scripted or quick terminal queries, and MCP server mode for integrated assistant workflows in an IDE. (SRC-2 L240–249; SRC-2 L286–295)
- **Inference:** If a scenario asks why a user cannot retrieve a document through Work IQ, check whether the authenticated identity has permission to view it. (SRC-2 L272–284)
- **Inference:** Administrative consent is a prerequisite when the issue is tenant-level access approval. (SRC-2 L266–271)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** Work IQ is in preview, so the source warns that features and APIs may change. (SRC-2 L296)
- The capture collapses install commands and MCP JSON configuration after Copy markers, so exact syntax is not recoverable from this source page. (SRC-2 L250–265)
- Work IQ is described as accessing Microsoft 365 Copilot data and as using Microsoft Graph with the authenticated identity; the source does not detail exact Graph endpoints or permissions. (SRC-2 L220; SRC-2 L276–279)

## Relation to other sources

- [[src-125-introduction-integrate-agent-microsoft-365]] first names Work IQ as the module's Microsoft 365 data access topic. (SRC-125 L219–225; SRC-2 L216–296)
- [[src-149-knowledge-check-integrate-agent-microsoft-365]] assesses Work IQ as a CLI and MCP server connecting agents to Microsoft 365 data. (SRC-2 L219–239; SRC-149 L232–236)
- [[src-209-summary-integrate-agent-microsoft-365]] summarizes Work IQ as connecting agents to Microsoft 365 data through MCP. (SRC-2 L229–239; SRC-209 L216–224)

## Connections

- [[work-iq]] — this is the corpus's dedicated Work IQ unit. (SRC-2 L216–296)
- [[model-context-protocol]] — Work IQ is built on MCP and acts as an MCP server. (SRC-2 L229–239)
- [[microsoft-365-agent-integration]] — Work IQ provides Microsoft 365 data context for agents. (SRC-2 L216–227)
- [[mcp-tool-integration]] — AI assistants discover and call Work IQ MCP tools. (SRC-2 L232–239; SRC-2 L290–294)
- [[microsoft-entra-id]] — tenant administrator consent is required for the Work IQ application. (SRC-2 L266–271)
- *Module units:* [[src-125-introduction-integrate-agent-microsoft-365|1 Introduction]] · [[src-232-understand-foundry-agent-publishing-options|2 Understand Foundry agent publishing options]] · [[src-185-publish-agent-foundry-portal-teams|3 Publish an agent from Foundry portal to Teams]] · [[src-5-advanced-microsoft-365-agents-toolkit-complex-integration-scenarios|4 Advanced - Use Microsoft 365 Agents Toolkit for complex integration scenarios - Training - Microsoft]] · [[src-222-test-iterate-integrated-agent|6 Test and iterate your integrated agent]] · [[src-79-exercise-publish-foundry-agent-teams|7 Exercise - Publish a Foundry agent to Teams]] · [[src-149-knowledge-check-integrate-agent-microsoft-365|8 Knowledge check]] · [[src-209-summary-integrate-agent-microsoft-365|9 Summary]] · [[src-111-integrate-agent-microsoft-365-episode-11|episode 11]]

## Open questions

- The source does not expose exact `workiq ask` command syntax, npm package names, or MCP JSON configuration because the capture omits code blocks. (SRC-2 L250–265)

## Sources

- SRC-2 — raw file: [[2-Access Microsoft 365 data with Work IQ - Training - Microsoft Learn]]
