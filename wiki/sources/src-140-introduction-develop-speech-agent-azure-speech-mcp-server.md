---
title: "Introduction — Develop a speech agent with the Azure Speech MCP server"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Introduces using the Azure Speech MCP server to give agents speech-to-text and text-to-speech capabilities."
area: speech
source_ids: [SRC-140]
objectives: [T05, T06, G09]
tags: [azure-speech, mcp, speech-agent, foundry-tools]
aliases: ["SRC-140"]
source_kind: learn-unit
module: "Develop a speech agent with the Azure Speech MCP server"
learning_path: "Develop natural language solutions in Azure"
unit: "1"
presenters: []
raw_file: "140-Introduction - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/develop-speech-agent-speech-mcp/01-introduction"
ingest_depth: full
---

# Introduction — Develop a speech agent with the Azure Speech MCP server

*learn-unit · Develop a speech agent with the Azure Speech MCP server · unit 1 · SRC-140*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-140 |
| Raw file | 140-Introduction - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop natural language solutions in Azure |
| Module | Develop a speech agent with the Azure Speech MCP server |
| Unit / episode | 1 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/develop-speech-agent-speech-mcp/01-introduction |
| Teaching content | L8–17 of 31 |
| Content length | ~275 words |
| Capture quality | High; compact Learn introduction with no missing code blocks. |
| Ingest depth | full |

## TL;DR

Azure Speech in Foundry Tools provides speech-to-text and text-to-speech capabilities for AI applications. (SRC-140 L10) The unit introduces the Azure Speech MCP server as a way to make those capabilities available to an AI agent so the agent can handle speech tasks from natural-language requests rather than separate operation-specific code. (SRC-140 L11–13)

## Key claims

- Azure Speech in Foundry Tools can transcribe audio to text and synthesize natural-sounding speech from text. (SRC-140 L10)
- The same capabilities can be called directly through the Speech SDK or REST APIs. (SRC-140 L11)
- The Azure Speech Model Context Protocol server can make speech-to-text and text-to-speech available to an AI agent. (SRC-140 L11)
- The MCP approach lets an agent handle speech tasks based on the user's natural language request, without requiring separate code for each speech operation. (SRC-140 L11)
- A customer-support scenario can combine recorded-call transcription and generated audio responses through one Speech MCP server tool connection. (SRC-140 L12)
- The module teaches how the server works, how to connect it to a Microsoft Foundry agent, and how to build a programmatic client application. (SRC-140 L13)
- The Azure Speech MCP server was in public preview at capture time, and module details were subject to change. (SRC-140 L16–17)

## How it works

The unit frames the Speech MCP server as an agent-facing layer over Azure Speech capabilities. (SRC-140 L10–11) Instead of writing separate application integrations for transcription and synthesis, the developer can create an AI agent that uses the Azure Speech MCP server for both operations through a single tool connection. (SRC-140 L12)

The module scope is introductory: it promises the conceptual server explanation, the Microsoft Foundry connection flow, and a programmatic client application that talks to the agent. (SRC-140 L13)

## Code and API patterns

Not covered by this source. The introduction names Speech SDK and REST APIs as direct-call alternatives but does not show syntax. (SRC-140 L11)

## Key terms

- **Azure Speech in Foundry Tools** — the source's name for speech-to-text and text-to-speech capabilities that can be integrated into AI applications. (SRC-140 L10)
- **Azure Speech MCP server** — the Model Context Protocol server that makes Azure Speech capabilities available to an AI agent. (SRC-140 L11)
- **Speech-to-text** — the capability to transcribe audio to text. (SRC-140 L10)
- **Text-to-speech** — the capability to synthesize natural-sounding speech from text. (SRC-140 L10)

## Decision boundaries and exam cues

- **Inference:** If the scenario asks for an agent to decide whether to transcribe audio or synthesize speech from a natural-language request, the Azure Speech MCP server is the relevant pattern because the source says the agent handles speech tasks without operation-specific code. (SRC-140 L11–13)
- **Inference:** If the scenario asks for direct application code without an agent tool connection, the Speech SDK or REST APIs remain named alternatives. (SRC-140 L11)
- **Stale-risk:** Public-preview status means exact setup details should be rechecked against current documentation before production use. (SRC-140 L16–17)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source explicitly marks the Azure Speech MCP server as public preview and says details are subject to change. (SRC-140 L16–17)
- The unit names both *Azure Speech in Foundry Tools* and the *Azure Speech Model Context Protocol (MCP) server*, so later pages need to preserve which layer is the speech service and which layer exposes tools to agents. (SRC-140 L10–11)

## Relation to other sources

- [[src-236-understand-azure-speech-mcp-server]] expands the introduction by defining MCP host, client, server, dynamic tool discovery, Speech MCP capabilities, storage, prerequisites, and security. (SRC-140 L13; SRC-236 L215–262)
- [[src-25-connect-speech-mcp-server-agent]] provides the connection, testing, prompt customization, and client-application workflow promised by the introduction. (SRC-140 L13; SRC-25 L215–275)
- [[src-43-develop-speech-agent-azure-speech-mcp-server-episode-19]] demonstrates the same module flow in video form, including storage setup, tool connection, playground tests, and a client app. (SRC-43 L15–22; SRC-43 L445–466)

## Connections

- [[azure-speech]] — the underlying speech-to-text and text-to-speech capability. (SRC-140 L10)
- [[azure-speech-mcp-server]] — the agent-facing MCP server introduced by the unit. (SRC-140 L11)
- [[model-context-protocol]] — the protocol named by the server. (SRC-140 L11)
- [[mcp-tool-integration]] — the pattern of giving an agent external tool access through MCP. (SRC-140 L11–13)
- [[speech-and-language-options-compared]] — useful for contrasting direct SDK or REST calls with agent tool integration. (SRC-140 L11)

## Open questions

- The introduction does not specify the tool schemas, authentication settings, or client code; those are deferred to later units. (SRC-140 L13)

## Sources

- SRC-140 — raw file: [[140-Introduction - Training - Microsoft Learn]]
