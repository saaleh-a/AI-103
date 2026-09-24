---
title: "Understand the Azure Speech MCP server"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains MCP roles, dynamic tool discovery, Speech MCP capabilities, storage requirements, prerequisites, and security."
area: speech
source_ids: [SRC-236]
objectives: [P04, T05, T06, G09]
tags: [azure-speech, mcp, dynamic-tool-discovery, blob-storage, sas-url]
aliases: ["SRC-236"]
source_kind: learn-unit
module: "Develop a speech agent with the Azure Speech MCP server"
learning_path: "Develop natural language solutions in Azure"
unit: "2 of 6"
presenters: []
raw_file: "236-Understand the Azure Speech MCP server - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/develop-speech-agent-speech-mcp/02-understand-speech-mcp"
ingest_depth: full
---

# Understand the Azure Speech MCP server

*learn-unit · Develop a speech agent with the Azure Speech MCP server · unit 2 of 6 · SRC-236*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-236 |
| Raw file | 236-Understand the Azure Speech MCP server - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop natural language solutions in Azure |
| Module | Develop a speech agent with the Azure Speech MCP server |
| Unit / episode | 2 of 6 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/develop-speech-agent-speech-mcp/02-understand-speech-mcp |
| Teaching content | L209–262 of 292 |
| Content length | ~861 words |
| Capture quality | High; prose is complete and table content is captured as text. |
| Ingest depth | full |

## TL;DR

MCP is an open client-server protocol for connecting agents to tools, data sources, and services. (SRC-236 L217–220) The Azure Speech MCP server exposes speech-to-text recognition and text-to-speech synthesis as discoverable tools, with Azure Blob Storage and a SAS URL used for audio-file input and output. (SRC-236 L226–248)

## Key claims

- The Azure Speech MCP server connects AI agents to Azure Speech in Foundry Tools through MCP. (SRC-236 L215)
- MCP defines how AI agents interact with external tools, data sources, and services through host, client, and server components. (SRC-236 L217–220)
- The host is the application that runs the agent, such as Microsoft Foundry or a custom app. (SRC-236 L218)
- The client is a host component that manages MCP server connections and communication. (SRC-236 L219)
- The server exposes tools, resources, and prompts that an agent can discover and call. (SRC-236 L220)
- Agents receive a catalog of tool descriptions from an MCP server and choose tools from the user's request. (SRC-236 L221)
- Dynamic tool discovery means the agent queries the MCP server at runtime rather than relying on hardcoded knowledge of each tool. (SRC-236 L221)
- The Azure Speech MCP server exposes speech-to-text recognition and text-to-speech synthesis as tools for MCP-compatible agents. (SRC-236 L226–233)
- Speech-to-text supports common audio formats and options for language selection, phrase hints, profanity filtering, and detailed or simple output. (SRC-236 L230–231)
- Text-to-speech supports neural voices, multiple languages, and output formats such as WAV or MP3. (SRC-236 L232–233)
- Audio files require Azure Storage: generated audio is saved to Blob Storage, and transcription can read public URLs or blob-container SAS URLs. (SRC-236 L245–248)
- The Speech MCP server uses key-based authentication with a resource key and blob-container SAS URL. (SRC-236 L257–258)

## How it works

MCP separates the application running the agent from the server that exposes external capabilities. (SRC-236 L217–220) When the agent connects, the server returns a catalog of tools and descriptions; the agent can then pick a tool based on the user's prompt. (SRC-236 L221)

For Azure Speech, the tool catalog contains recognition and synthesis capabilities. (SRC-236 L226–233) A transcription prompt leads the agent to call speech-to-text with an audio file URL, while a generation prompt leads it to call text-to-speech with text input. (SRC-236 L234–241) The server processes the request with Azure Speech and returns either transcribed text or a link to generated audio. (SRC-236 L240–242)

Audio files make storage part of the architecture. (SRC-236 L244–248) Text-to-speech writes generated files to a blob container, and speech-to-text reads either a public URL or a SAS URL for a blob container. (SRC-236 L246–248)

## Code and API patterns

No code is shown. The source identifies configuration and runtime patterns instead: MCP host, client, server, tool catalog, tool descriptions, audio-file URL or text inputs, Azure Speech processing, and transcribed-text or audio-link outputs. (SRC-236 L217–242)

## Key terms

- **Host** — the application that runs the agent, such as Microsoft Foundry or a custom app. (SRC-236 L218)
- **Client** — the host component that manages MCP server connections and communication. (SRC-236 L219)
- **Server** — a program that exposes tools, resources, and prompts for an agent to discover and call. (SRC-236 L220)
- **Dynamic tool discovery** — the agent queries the MCP server at runtime for available tools rather than hardcoding each tool. (SRC-236 L221)
- **Speech-to-text (Recognize)** — a tool that converts audio files to text with recognition options. (SRC-236 L230–231)
- **Text-to-speech (Synthesize)** — a tool that converts text into natural-sounding audio with neural voices and output formats. (SRC-236 L232–233)
- **SAS URL** — a blob-container URL granting the MCP server permission to read and write files in that container. (SRC-236 L248)

## Decision boundaries and exam cues

- **Inference:** If the requirement is maintainable agent access to tools that can change without modifying the agent, MCP fits because tools can be added, updated, or removed on the server while the agent reads the latest definitions. (SRC-236 L221–222)
- **Inference:** If the task is speech-to-text or text-to-speech inside an MCP-compatible agent, the Azure Speech MCP server is the specific server named by the source. (SRC-236 L226–234)
- **Inference:** If a scenario includes generated audio files, public audio URLs, or blob SAS URLs, storage is load-bearing rather than incidental because audio input/output is why the Speech MCP server requires Azure Storage. (SRC-236 L244–248)
- **Inference:** If a scenario asks for named-entity recognition or sentiment analysis, this source does not point to the Speech MCP server because its listed capabilities are recognition and synthesis. (SRC-236 L226–233)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source's key-based authentication guidance creates a security burden: resource keys and SAS URLs should be stored securely, rotated, scoped narrowly, and kept out of source code, prompts, scripts, documentation, and chat transcripts. (SRC-236 L250; SRC-236 L257–262)
- The source names Microsoft Foundry as a possible host and Azure Speech in Foundry Tools as the service layer, so product naming should not be flattened into only Azure Speech. (SRC-236 L215; SRC-236 L218)

## Relation to other sources

- [[src-140-introduction-develop-speech-agent-azure-speech-mcp-server]] introduces the same agent speech problem before this unit defines MCP and storage details. (SRC-140 L10–13; SRC-236 L215–262)
- [[src-25-connect-speech-mcp-server-agent]] operationalizes this source by creating blob storage, connecting the tool, testing the agent, and invoking it programmatically. (SRC-236 L244–258; SRC-25 L215–275)
- [[src-144-knowledge-check-develop-speech-agent-azure-speech-mcp-server]] assesses the core capabilities, storage reason, credentials, and prompt-level voice selection taught here and in the next unit. (SRC-236 L226–258; SRC-144 L211–229)
- [[src-43-develop-speech-agent-azure-speech-mcp-server-episode-19]] demonstrates the same MCP pattern and storage dependency in a portal walkthrough. (SRC-43 L56–83; SRC-43 L104–126)

## Connections

- [[model-context-protocol]] — the source defines MCP host, client, server, and dynamic tool discovery. (SRC-236 L217–222)
- [[azure-speech-mcp-server]] — the source's central server and tool catalog. (SRC-236 L215; SRC-236 L226–234)
- [[azure-speech]] — the underlying recognition and synthesis service used by the MCP server. (SRC-236 L240–241)
- [[speech-to-text]] — one of the two exposed capabilities. (SRC-236 L230–231)
- [[text-to-speech]] — one of the two exposed capabilities. (SRC-236 L232–233)
- [[mcp-tool-integration]] — the source explains runtime tool discovery and autonomous tool selection. (SRC-236 L221; SRC-236 L236–243)
- [[keyless-authentication]] — useful contrast, because this source says the Speech MCP server connection uses key-based authentication. (SRC-236 L257–258)

## Open questions

- The source does not provide exact tool schemas, request payloads, or code syntax for the MCP server. (SRC-236 L226–243)
- The source does not explain how the resource key is scoped or whether non-key authentication is supported for this preview server. (SRC-236 L257–258)

## Sources

- SRC-236 — raw file: [[236-Understand the Azure Speech MCP server - Training - Microsoft Learn]]
