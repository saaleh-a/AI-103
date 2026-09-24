---
title: "Explore the AI Voice Live Client Library for Python"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Introduces the async-only Python client library for Voice Live authentication, event handling, and session setup."
area: speech
source_ids: [SRC-87]
objectives: [T05, T06]
tags: [voice-live, python, sdk, async, events]
aliases: ["SRC-87"]
source_kind: learn-unit
module: "Develop an Azure Speech Voice Live Agent in Microsoft Foundry"
learning_path: "Develop natural language solutions in Azure"
unit: "3 of 7"
presenters: []
raw_file: "87-Explore the AI Voice Live Client Library for Python - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/develop-voice-live-agent/3-voice-live-sdk"
ingest_depth: full
---
# Explore the AI Voice Live Client Library for Python

*learn-unit · Develop an Azure Speech Voice Live Agent in Microsoft Foundry · unit 3 of 7 · SRC-87*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-87 |
| Raw file | 87-Explore the AI Voice Live Client Library for Python - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop natural language solutions in Azure |
| Module | Develop an Azure Speech Voice Live Agent in Microsoft Foundry |
| Unit / episode | 3 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/develop-voice-live-agent/3-voice-live-sdk |
| Teaching content | L210–235 of 265 |
| Content length | ~291 words |
| Capture quality | Partial code capture; prose is readable but code bodies are omitted. |
| Ingest depth | full |

## TL;DR

The Azure AI Voice Live client library for Python is a real-time speech-to-speech client for the Azure AI Voice Live API. (SRC-87 L216)
It opens a WebSocket session, streams microphone audio to the service, and receives server events for responsive conversations. (SRC-87 L216)
Version 1.0.0 is async-only, and the source says synchronous APIs are deprecated. (SRC-87 L217–218)

## Key claims

- The Python client library provides real-time speech-to-speech access to the Azure AI Voice Live API. (SRC-87 L216)
- The library opens a WebSocket session to stream microphone audio and receive server events. (SRC-87 L216)
- As of version 1.0.0, examples and samples use `async`/`await`, and the synchronous API is deprecated. (SRC-87 L217–218)
- Authentication can use either an API key or a Microsoft Entra ID token. (SRC-87 L220–221)
- Production applications should use Microsoft Entra authentication with `DefaultAzureCredential`. (SRC-87 L224–226)

## How it works

The client library wraps the Voice Live API into an async Python client pattern that authenticates, opens a WebSocket session, streams microphone audio, and receives server events. (SRC-87 L216–219)
The unit's examples cover API key authentication, Microsoft Entra authentication, event handling, and a minimal authenticated session configuration. (SRC-87 L220–235)
For interruption handling, the client must cancel agent audio playback immediately when the user interrupts; otherwise, playback can continue until the API processes the interruption, causing the agent to talk over the user. (SRC-87 L227–228)

## Code and API patterns

The capture names code samples for API key authentication, `DefaultAzureCredential`, event handling, and a minimal session, but the code bodies are omitted. (SRC-87 L220–235)
The only explicit implementation requirement captured is that samples use async/await syntax because the SDK is async-only as of version 1.0.0. (SRC-87 L217–218)
The event-handling pattern requires the client to react to an interruption by cancelling audio playback immediately. (SRC-87 L227–228)

## Key terms

- Azure AI Voice Live client library for Python — real-time speech-to-speech client for the Azure AI Voice Live API. (SRC-87 L216)
- WebSocket session — the session used to stream microphone audio and receive server events. (SRC-87 L216)
- `DefaultAzureCredential` — the Microsoft Entra authentication pattern shown for production applications. (SRC-87 L224–226)
- Server events — events received by the client to drive responsive conversation behavior. (SRC-87 L216)

## Decision boundaries and exam cues

- **Inference:** If the question mentions Python implementation, async/await, microphone streaming, and server events, this unit points to the Voice Live Python client library. (SRC-87 L216–219)
- **Inference:** If production authentication is part of the scenario, prefer Microsoft Entra with `DefaultAzureCredential` over API keys. (SRC-87 L220–226)
- **Inference:** If a user interrupts and the agent keeps talking, inspect client event handling and audio playback cancellation. (SRC-87 L227–228)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** The async-only statement is version-specific to 1.0.0. (SRC-87 L217–218)
- The source says code samples exist, but this capture preserves only placeholders, not the code bodies. (SRC-87 L220–235)

## Relation to other sources

- [[src-88-explore-azure-voice-live-api]] provides the API events that the Python client receives and sends. (SRC-88 L240–253; SRC-87 L216–228)
- [[src-31-create-voice-live-agent]] recommends a `VoiceAssistant` and `AudioProcessor` pattern for a Python client using audio devices. (SRC-31 L242–248; SRC-87 L216–235)
- [[src-49-develop-azure-speech-voice-live-agent-microsoft-foundry-episode]] demonstrates the `azure-ai-voicelive` dependency, helper connection, credentials, and custom classes in a walkthrough. (SRC-49 L456–528; SRC-49 L533–628)

## Connections

- [[voice-live-api]] — the library is a client for the API. (SRC-87 L216)
- [[keyless-authentication]] — production use recommends Microsoft Entra authentication. (SRC-87 L224–226)
- [[microsoft-entra-id]] — Microsoft Entra ID token authentication is supported. (SRC-87 L220–224)
- [[conversation-state]] — server events support responsive conversational behavior. (SRC-87 L216)
- [[voices-and-audio-formats]] — the client streams microphone audio as part of the speech-to-speech path. (SRC-87 L216)

## Open questions

- The source does not show the exact import names, client constructor, or event enum names in the captured teaching content. (SRC-87 L220–235)

## Sources

- SRC-87 — raw file: [[87-Explore the AI Voice Live Client Library for Python - Training - Microsoft Learn]]
