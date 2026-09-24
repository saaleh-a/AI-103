---
title: "Work IQ"
type: entity
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "A preview CLI and MCP server that lets AI assistants query Microsoft 365 Copilot data through Microsoft Graph with user permissions."
area: agents
source_ids: [SRC-2, SRC-5, SRC-79, SRC-149, SRC-185, SRC-209]
objectives: [P04, G08, G09]
objective_gaps: []
tags: ["tool"]
aliases: ["Microsoft Work IQ", "workiq", "Work IQ MCP server", "Work IQ CLI"]
---

# Work IQ

## Summary

Work IQ is a Microsoft 365 data-access tool for agent development: the corpus defines it as a command-line interface and server that connects AI assistants to Microsoft 365 Copilot data. It is currently preview in the captured source. (SRC-2 L218–220; SRC-2 L296)

## What it is

Microsoft Work IQ connects AI assistants to Microsoft 365 data including emails, meetings, documents, Teams messages, and people information. It lets agents query workplace information using natural language so responses can use richer workplace context. (SRC-2 L218–226)

Work IQ is built on the Model Context Protocol. As an MCP server, it exposes capabilities that an agent can discover and use; the source lists MCP capabilities such as tools, resources, and prompts, then says Work IQ acts as an MCP server specifically for Microsoft 365 data. (SRC-2 L228–234)

## What the sources say

SRC-2 is the dedicated Work IQ source. It says Work IQ runs in CLI mode for direct terminal queries and MCP server mode for AI assistants such as GitHub Copilot in Visual Studio Code. (SRC-2 L235–244) It also says both approaches access the same underlying data with the same permissions. (SRC-2 L280–294)

SRC-209 summarizes the module by saying Work IQ connects agents to Microsoft 365 data through MCP. (SRC-209 L218–224) SRC-149 asks what Microsoft Work IQ is and lists the CLI/MCP-server definition among the options (SRC-149 L232–236). The Work IQ unit defines it as a CLI and server that connects AI assistants to Microsoft 365 Copilot data (SRC-2 L218–220).

SRC-79 is only an exercise launch page, but it points learners to optional Work IQ practice in the Microsoft 365 publishing exercise context. (SRC-79 L217–218)

## Capabilities and components

The corpus's examples include questions about a manager's project deadline comments, recent Q4 planning documents, today's Engineering channel messages, and who is working on a project. (SRC-2 L221–226) **Inference:** These examples show Work IQ is positioned for workplace-context retrieval rather than general web search or public knowledge retrieval.

The two operating modes are separate front doors over the same security model. CLI mode is for quick queries, scripting, or one-off terminal use; MCP server mode lets an AI assistant decide when to query Work IQ behind the scenes during a natural chat. (SRC-2 L235–244; SRC-2 L280–294)

## How to use it

The source lists installation paths through npm, GitHub Copilot CLI plugin installation, and VS Code MCP configuration, but the captured code blocks do not include the exact commands except plugin steps such as installing `workiq@copilot-plugins`. (SRC-2 L245–263)

Prerequisites are Node.js for local CLI use, a Microsoft 365 subscription with a Copilot license, and administrative consent for the Work IQ application in the Microsoft Entra tenant. (SRC-2 L263–269)

## Decision boundaries

| **Inference:** Need | Work IQ fit? | Why |
|---|---|---|
| Query Microsoft 365 workplace context from an assistant | Yes | Work IQ connects to Microsoft 365 Copilot data and Microsoft 365 services. (SRC-2 L218–226) |
| Add a Foundry agent to Teams/Copilot | No, use [[agent-publishing]] | Work IQ is data access, not publication. (SRC-2 L218–220; SRC-185 L218–219) |
| Build custom SSO/middleware around a Teams agent | No, use [[microsoft-365-agents-toolkit]] | Toolkit is the advanced integration layer. (SRC-5 L223–233) |
| Ground answers in Azure Search indexes | Not the page's purpose | Work IQ is Microsoft 365 data; the corpus treats Azure AI Search and Foundry IQ as separate grounding routes. (SRC-2 L218–226) |

## Naming and currency

**Stale-risk:** SRC-2 explicitly says Work IQ is currently in preview and that features and APIs may change as the product evolves. (SRC-2 L296)

## Appearances in the corpus

- SRC-2 is the main Learn unit for Work IQ installation, modes, permissions, and security. (SRC-2 L218–296)
- SRC-149 includes a knowledge-check question that defines Work IQ. (SRC-149 L232–236)
- SRC-209 summarizes Work IQ as Microsoft 365 data access through MCP. (SRC-209 L218–224)
- SRC-79 mentions optional Work IQ practice from a Microsoft 365 publishing exercise. (SRC-79 L217–218)

## Connections

- [[microsoft-365-agent-integration]] — Work IQ is the Microsoft 365 data-access route inside that broader integration topic.
- [[model-context-protocol]] — Work IQ is built on MCP and runs as an MCP server. (SRC-2 L228–234)
- [[mcp-tool-integration]] — Work IQ is an example of MCP server integration for agents.
- [[microsoft-entra-id]] — administrative consent and authenticated identity are required. (SRC-2 L263–279)
- [[agent-tools]] — Work IQ exposes external data capabilities that assistants can call.
- [[src-2-access-microsoft-365-data-work-iq]] — dedicated Work IQ source page.
- *Also linked from:* [[overview]]

## Sources

- SRC-2 — [[src-2-access-microsoft-365-data-work-iq]] — Work IQ definition, modes, prerequisites, and security
- SRC-5 — [[src-5-advanced-microsoft-365-agents-toolkit-complex-integration-scenarios]] — Toolkit comparison boundary
- SRC-79 — [[src-79-exercise-publish-foundry-agent-teams]] — optional Work IQ practice mention
- SRC-149 — [[src-149-knowledge-check-integrate-agent-microsoft-365]] — assessed definition of Work IQ
- SRC-185 — [[src-185-publish-agent-foundry-portal-teams]] — publishing contrast for Teams/Copilot distribution
- SRC-209 — [[src-209-summary-integrate-agent-microsoft-365]] — module summary tying Work IQ to MCP and Microsoft 365 data
