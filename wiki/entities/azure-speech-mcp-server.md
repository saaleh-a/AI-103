---
title: "Azure Speech MCP server"
type: entity
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "MCP server that lets agents discover and call Azure Speech speech-to-text and text-to-speech tools using audio files in Blob Storage."
area: speech
source_ids: [SRC-17, SRC-25, SRC-43, SRC-87, SRC-88, SRC-144, SRC-204, SRC-221, SRC-225, SRC-226, SRC-236]
objectives: [P04, P12, G09, T05, T06]
objective_gaps: []
tags: ["tool"]
aliases: ["Speech MCP server", "Azure Speech in Foundry Tools MCP server", "Azure Speech MCP Server"]
---

# Azure Speech MCP server

## Summary

The Azure Speech MCP server exposes Azure Speech in Foundry Tools to agents through Model Context Protocol (MCP): agents discover speech-to-text and text-to-speech tools, decide which one fits the user's prompt, call it, and return either transcribed text or a link to generated audio stored in Blob Storage (SRC-236 L215–243; SRC-25 L239–252).

## What it is

The server is an agent-facing tool layer, not a speech model and not the live voice transport. The source first explains MCP as a client-server protocol where a host runs an agent, a client manages the MCP connection, and a server exposes tools, resources, and prompts (SRC-236 L217–221). The Speech MCP server is the concrete server for Azure Speech capabilities: any MCP-compatible agent can call speech recognition or synthesis tools (SRC-236 L225–234).

## What the sources say

- MCP lets an agent receive a catalog of tools and choose one at runtime; tool definitions can be added, updated, or removed on the server without modifying the agent (SRC-236 L221–222).
- The Speech MCP server exposes two core capabilities: speech-to-text recognition and text-to-speech synthesis. Recognition supports common audio formats plus options such as language selection, phrase hints, profanity filtering, and detailed/simple outputs; synthesis supports neural voices, multiple languages, and output formats such as WAV or MP3 (SRC-236 L226–233).
- The agent selects a tool autonomously: it analyzes the user's prompt, checks available MCP tools, calls the selected tool with an audio URL or text, and receives transcribed text or an audio-file link (SRC-236 L234–243).
- Audio files require Azure Blob Storage. Generated speech is saved to a blob container; recognition can use a public URL or a SAS URL; the MCP connection receives a container SAS URL for read/write access (SRC-236 L244–250).
- The portal connection path uses the Foundry Tools catalog, a Foundry resource name, a project/resource key, and `X-Blob-Container-Url` for the SAS URL (SRC-25 L230–239).

## Capabilities and components

The useful mental model is: **agent prompt → MCP tool selection → Azure Speech operation → text or audio-file link**. For text-to-speech, the server saves generated audio files and the agent returns a link; for speech-to-text, the agent sends a file URL and returns transcription text (SRC-236 L245–248; SRC-25 L244–252). Prompt-level options can request voices such as `en-GB-SoniaNeural` or `en-US-JennyNeural`, recognition/synthesis language, phrase hints, and profanity-filtering behavior (SRC-25 L254–260).

The supporting components are a Microsoft Foundry project with a deployed model, the MCP tool connection, an Azure Storage account/container for audio files, and SAS permissions for read, add, create, write, and list (SRC-25 L216–237; SRC-236 L252–258).

## How to use it

In the portal, create or reuse Blob Storage, create a container, generate a SAS URL with read/add/create/write/list, create a Foundry project and agent, connect **Azure Speech in Foundry Tools** from the Tools page, and attach the tool to the agent (SRC-25 L216–239). The first tool call in the playground prompts for approval; the user can choose to always approve the Speech MCP Server tools (SRC-25 L244–248).

In code, the corpus's client-application path uses `AIProjectClient` with `DefaultAzureCredential`, gets an OpenAI client from the project client, and calls `responses.create()` with an agent reference in `extra_body`. The agent then calls the Speech MCP tool and returns `output_text` or an audio link (SRC-25 L263–270). The source also says the MCP tool connection can be defined in code with `MCPTool` from `azure-ai-projects` when creating an agent (SRC-25 L271–275).

## Decision boundaries

**Synthesis:** The closest confusions separate by who chooses the speech operation and what shape the audio takes:

- **Speech MCP server:** the agent discovers speech-to-text and text-to-speech tools, sends an audio URL or text, and receives transcription text or an audio link (SRC-236 L226–248). **Inference:** choose it when the agent should select the speech tool dynamically and the workflow can use Blob Storage.
- **Voice Live API:** the client streams microphone audio and receives events over a WebSocket for real-time, bidirectional conversation (SRC-87 L216; SRC-88 L216–260). **Inference:** choose it for interruptible live conversation, VAD, or avatar-style voice agents (SRC-87 L228; SRC-88 L252–270).
- **Speech SDK / API:** the application calls SDK speech objects directly, such as translation config and recognizer/synthesizer objects (SRC-226 L14–45). **Inference:** choose it when the application, not the agent, owns the speech control flow.
- **Speech-capable GPT-4o models:** the app submits audio or text to a deployed model for transcription or synthesis (SRC-17 L218–221; SRC-225 L223–224; SRC-221 L222–223). **Inference:** choose it when the scenario is model-centric transcribe/TTS and does not require Speech service tool options.

## Naming and currency

The Learn unit calls the tool connection **Azure Speech in Foundry Tools** and the server **Azure Speech MCP server** (SRC-25 L230–239; SRC-236 L215). **Disputed:** authentication wording differs across sources. SRC-236 says the Azure Speech MCP server uses key-based authentication, requiring a resource key and blob-container SAS URL (SRC-236 L258–260). The episode says Speech MCP configuration is done "potentially by API key or by something like a managed identity" while still demonstrating key-based setup (SRC-43 L74–83; SRC-43 L250–263). The module assessment also expects a Foundry resource key and a SAS URL (SRC-144 L220–226). Treat key-based authentication as the documented Learn path and managed identity as an episode-mentioned possibility that the corpus does not fully specify.

## Appearances in the corpus

- SRC-236 defines MCP, dynamic discovery, the Speech MCP server capabilities, storage requirements, and key-based security guidance.
- SRC-25 gives the connection steps, tool approval behaviour, prompt-level customization, Responses API client pattern, and `MCPTool` option.
- SRC-43 is the episode walkthrough and explicitly raises the managed-identity/key-based tension.
- SRC-144 contains assessment items that reinforce the two core capabilities, storage requirement, credentials, and voice selection via prompt.
- SRC-204 summarizes the module as using the server to build an agent that can transcribe audio and generate speech.

## Connections

- [[model-context-protocol]] — protocol that supplies dynamic tool discovery and server/client roles.
- [[mcp-tool-integration]] — general integration pattern for MCP tools and approval.
- [[custom-tool-options]] — MCP is one custom-tool option for agents.
- [[agent-tools]] — Speech MCP tools are agent tools selected from a catalog.
- [[azure-speech]] — underlying Foundry Tools speech capability.
- [[speech-to-text]] — one tool exposed by the server.
- [[text-to-speech]] — one tool exposed by the server.
- [[voice-live-api]] — neighbouring live voice-agent option, not file-based MCP tooling.
- [[keyless-authentication]] — relevant because the corpus has an auth tension.
- [[speech-and-language-options-compared]] — synthesis page for speech option boundaries.
- [[src-236-understand-azure-speech-mcp-server]] — main capability source.
- [[src-25-connect-speech-mcp-server-agent]] — portal and code connection source.
- [[src-43-develop-speech-agent-azure-speech-mcp-server-episode-19]] — episode source with auth tension.
- *Also linked from:* [[overview]] · [[speech-capable-models]] · [[voices-and-audio-formats]]

## Sources

- SRC-17 — [[src-17-choose-speech-capable-model]] — speech-capable model use cases used for option boundaries.
- SRC-25 — [[src-25-connect-speech-mcp-server-agent]] — connecting and using the Speech MCP server.
- SRC-43 — [[src-43-develop-speech-agent-azure-speech-mcp-server-episode-19]] — episode walkthrough and managed-identity/key wording.
- SRC-144 — [[src-144-knowledge-check-develop-speech-agent-azure-speech-mcp-server]] — knowledge-check cues for capabilities, storage, credentials, and voice selection.
- SRC-204 — [[src-204-summary-develop-speech-agent-azure-speech-mcp-server]] — module summary.
- SRC-236 — [[src-236-understand-azure-speech-mcp-server]] — definition, capabilities, storage, and security considerations.
- SRC-87 — [[src-87-explore-ai-voice-live-client-library-python]] — Voice Live client boundary source.
- SRC-88 — [[src-88-explore-azure-voice-live-api]] — Voice Live API boundary source.
- SRC-221 — [[src-221-synthesize-speech]] — TTS model boundary source.
- SRC-225 — [[src-225-transcribe-speech]] — transcription model boundary source.
- SRC-226 — [[src-226-translate-speech]] — Speech SDK boundary source.
