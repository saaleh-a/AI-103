---
title: "Extend Agent Capabilities with Tools"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains agent tools, the automatic tool-calling lifecycle, built-in tools, OpenAPI tools, MCP servers, and tool best practices."
area: agents
source_ids: [SRC-91]
objectives: [G08, G09, P04]
tags: [agent-tools, code-interpreter, file-search, web-search, openapi, mcp]
aliases: ["SRC-91"]
source_kind: learn-unit
module: "Develop AI agents with Microsoft Foundry and Visual Studio Code"
learning_path: "Develop AI agents on Azure"
unit: "7 of 11"
presenters: []
raw_file: "91-Extend Agent Capabilities with Tools - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/develop-ai-agents-azure-vs-code/7-extend-agent-capabilities"
ingest_depth: full
---

# Extend Agent Capabilities with Tools

*learn-unit · Develop AI agents with Microsoft Foundry and Visual Studio Code · unit 7 of 11 · SRC-91*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-91 |
| Raw file | 91-Extend Agent Capabilities with Tools - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Develop AI agents with Microsoft Foundry and Visual Studio Code |
| Unit / episode | 7 of 11 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/develop-ai-agents-azure-vs-code/7-extend-agent-capabilities |
| Teaching content | L214–297 of 327 |
| Content length | ~1228 words |
| Capture quality | High, except one additional-tool table and YAML example are collapsed. |
| Ingest depth | full |

## TL;DR

Tools let agents perform actions, access data, execute code, search knowledge bases, and integrate with external systems. (SRC-91 L220–229) Microsoft Foundry provides configured built-in tools, catalog tools, custom tools, OpenAPI tools, and MCP server integrations, with VS Code supporting visual and YAML-based configuration. (SRC-91 L232–297)

## Key claims

- Tools are programmatic functions that agents can invoke to complete tasks. (SRC-91 L222)
- The tool-calling lifecycle is message analysis, tool invocation, tool result return, result incorporation, and user response. (SRC-91 L223–229)
- The Foundry tool catalog uses Configured, Catalog, and Custom categories. (SRC-91 L232)
- Code Interpreter writes and executes Python in a secure sandbox for calculations, analysis, charts, file processing, and problem solving. (SRC-91 L235)
- File Search provides RAG over uploaded documents by indexing them in a vector store. (SRC-91 L237–238)
- Bing Web Search adds current internet information and automatic citations. (SRC-91 L240)
- Azure AI Search connects agents to existing enterprise-scale search indexes. (SRC-91 L242)
- OpenAPI tools let agents call external APIs defined by OpenAPI 3.0 specifications. (SRC-91 L244)
- MCP provides a standardized way to add custom tools through remote, local, or custom MCP servers. (SRC-91 L268–273)
- Best practices include starting with built-ins, matching tools to requirements, clear instructions, current knowledge bases, and thorough testing. (SRC-91 L288–294)

## How it works

A tool-augmented agent decides whether a tool is needed, passes parameters, receives results, and turns those results into a response. (SRC-91 L220–224) Foundry supports this through a tool catalog, Agent Designer, YAML configuration, OpenAPI integration, and MCP server integration. (SRC-91 L232–297)

## Code and API patterns

OpenAPI tools use OpenAPI 3.0 specifications, and Foundry handles parameter mapping and response parsing. (SRC-91 L244) The source says YAML can define a tools array with enabled tools and configuration, but the actual YAML snippet is missing from the capture. (SRC-91 L261–266)

## Key terms

- **Code Interpreter** — sandboxed Python execution for calculations, analysis, charts, files, and problem-solving. (SRC-91 L235)
- **File Search** — RAG over uploaded files indexed in a vector store. (SRC-91 L237–238)
- **Bing Web Search** — web grounding for current information and citations. (SRC-91 L240)
- **Azure AI Search** — enterprise indexed-data retrieval for agents. (SRC-91 L242)
- **OpenAPI tools** — external API integrations described by OpenAPI 3.0. (SRC-91 L244)
- **MCP servers** — standardized tool providers that can be remote, local, or custom. (SRC-91 L268–273)

## Decision boundaries and exam cues

- **Inference:** Choose File Search for documents uploaded to the agent; choose Azure AI Search for existing enterprise search indexes. (SRC-91 L237–242)
- **Inference:** Choose Code Interpreter for calculation, file analysis, charts, and Python-backed analysis tasks. (SRC-91 L235)
- **Inference:** Choose OpenAPI tools for an external API with an OpenAPI 3.0 contract; choose MCP when the scenario emphasizes standardized reusable tool interfaces. (SRC-91 L244–273)
- **Inference:** Avoid tools without a clear purpose because the source warns each tool adds latency. (SRC-91 L288–291)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** The tool catalog continues to expand, and the source tells readers to check the portal for latest tools. (SRC-91 L245–248)
- The YAML example is absent in the capture. (SRC-91 L261–266)

## Relation to other sources

- [[src-14-build-first-agent-microsoft-foundry]] introduces the portal tool catalog categories. (SRC-14 L239–244; SRC-91 L225–227)
- [[src-20-configure-manage-agents-visual-studio-code]] introduces YAML and a tools section that this source expands. (SRC-20 L241–248; SRC-91 L252–257)
- [[src-142-knowledge-check-develop-ai-agents-microsoft-foundry-visual-studio]] assesses automatic tool calling. (SRC-91 L222–224; SRC-142 L236–241)

## Connections

- [[agent-tools]] — the source's main topic. (SRC-91 L218–297)
- [[code-interpreter-tool]] — one built-in tool described. (SRC-91 L235)
- [[file-search-tool]] — one built-in tool described. (SRC-91 L237–238)
- [[web-search-tool]] — Bing Web Search is described as a web grounding tool. (SRC-91 L240)
- [[azure-ai-search]] — enterprise indexed-data retrieval option. (SRC-91 L242)
- [[mcp-tool-integration]] — MCP server integration is described. (SRC-91 L268–287)
- *Module units:* [[src-129-introduction-develop-ai-agents-microsoft-foundry-visual-studio-code|1 Introduction]] · [[src-230-understand-ai-agents-microsoft-foundry-agent-service|2 Understand AI Agents and Microsoft Foundry Agent Service]] · [[src-84-explore-development-approaches|3 Explore Development Approaches]] · [[src-14-build-first-agent-microsoft-foundry|4 Build Your First Agent in Microsoft Foundry]] · [[src-190-set-up-visual-studio-code-agent-development|5 Set Up Visual Studio Code for Agent Development]] · [[src-20-configure-manage-agents-visual-studio-code|6 Configure and Manage Agents in Visual Studio Code]] · [[src-223-test-deploy-integrate-agents|8 Test, Deploy, and Integrate Agents]] · [[src-59-exercise-build-deploy-ai-agent|9 Exercise - Build and Deploy an AI Agent]] · [[src-142-knowledge-check-develop-ai-agents-microsoft-foundry-visual-studio|10 Knowledge Check]] · [[src-212-summary-develop-ai-agents-microsoft-foundry-visual-studio-code|11 Summary]] · [[src-41-develop-ai-agents-microsoft-foundry-visual-studio-code-episode|episode 7]]

## Open questions

- The source does not enumerate the collapsed additional-tools table or provide exact YAML syntax. (SRC-91 L245–266)

## Sources

- SRC-91 — raw file: [[91-Extend Agent Capabilities with Tools - Training - Microsoft Learn]]
