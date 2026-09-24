---
title: "Create a Voice Live agent"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Shows why to use Voice Live through a Foundry Agent and what portal and client-app configuration is involved."
area: speech
source_ids: [SRC-31]
objectives: [G07, T05, T06]
tags: [voice-live, foundry-agent, agent-playground, vad, audio]
aliases: ["SRC-31"]
source_kind: learn-unit
module: "Develop an Azure Speech Voice Live Agent in Microsoft Foundry"
learning_path: "Develop natural language solutions in Azure"
unit: "3 of 7"
presenters: []
raw_file: "31-Create a Voice Live agent - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/develop-voice-live-agent/3b-voice-live-agent"
ingest_depth: full
---
# Create a Voice Live agent

*learn-unit · Develop an Azure Speech Voice Live Agent in Microsoft Foundry · unit 3 of 7 · SRC-31*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-31 |
| Raw file | 31-Create a Voice Live agent - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop natural language solutions in Azure |
| Module | Develop an Azure Speech Voice Live Agent in Microsoft Foundry |
| Unit / episode | 3 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/develop-voice-live-agent/3b-voice-live-agent |
| Teaching content | L210–248 of 278 |
| Content length | ~471 words |
| Capture quality | Good Learn unit capture; Python snippets are represented only as language/copy placeholders. |
| Ingest depth | full |

## TL;DR

This unit argues for connecting Voice Live to a Microsoft Foundry agent when instructions, configuration, and conversational logic should live with the agent rather than in session code. (SRC-31 L216–220)
It covers enabling voice mode in the Foundry portal, configuring Voice Live settings, creating an agent through SDK metadata, and building a client that handles audio devices, sessions, and events. (SRC-31 L221–248)

## Key claims

- Voice Live can be used with a Microsoft Foundry agent in an application. (SRC-31 L216)
- Agents encapsulate instructions and configuration instead of requiring instructions in session code. (SRC-31 L217)
- Agents support more complex logic and conversational flows without changing client code. (SRC-31 L218)
- Agent ID based integration reduces manual configuration in the client code. (SRC-31 L219)
- Separating agent logic from voice implementation improves maintainability and scalability for multiple conversational experiences or business logic variations. (SRC-31 L220)

## How it works

In the Microsoft Foundry portal, voice mode can be enabled while developing an agent, which lets the developer integrate Voice Live and test it in the playground. (SRC-31 L221–222)
The Configuration pane includes language, VAD settings, audio enhancement, voice selection and advanced voice settings, interim response, and avatar options. (SRC-31 L223–230)
When using code, the source says to use a Foundry Agent SDK, such as the Foundry SDK for Python, to create the agent and add Voice Live metadata to the agent definition. (SRC-31 L231–234)
A client application connects to the agent, configures input and output hardware, establishes a Voice Live session, monitors audio systems, and processes speech-input and agent-response events. (SRC-31 L235–241)
The recommended client pattern uses Microsoft Entra ID authentication, a custom `VoiceAssistant` class for typed agent configuration and event processing, and a custom `AudioProcessor` class for device input and output. (SRC-31 L242–248)

## Code and API patterns

The capture names Python examples for agent metadata and a PyAudio-based client implementation, but it does not include the actual code bodies. (SRC-31 L231–248)
The important object pattern is architectural: `VoiceAssistant` owns agent configuration, session startup, and voice-event processing, while `AudioProcessor` owns microphone and speaker input/output. (SRC-31 L242–245)

## Key terms

- Voice mode — the agent playground setting that integrates Voice Live and allows testing in the playground. (SRC-31 L221–222)
- VAD settings — configuration for detecting interruptions and end of speech. (SRC-31 L225–226)
- Interim response — generated speech while waiting for the model response. (SRC-31 L229)
- Avatar — a visual representation of the agent. (SRC-31 L230)
- `VoiceAssistant` — recommended custom class for typed agent configuration, session startup, and event processing. (SRC-31 L242–244)
- `AudioProcessor` — recommended custom class for audio device input and output. (SRC-31 L245)

## Decision boundaries and exam cues

- **Inference:** Choose a Foundry Agent with Voice Live when the question emphasizes reusable instructions, agent-side configuration, complex logic, or maintainability across conversational variants. (SRC-31 L216–220)
- **Inference:** Choose direct model connection when the source's agent advantages are not needed and manual session configuration is acceptable. (SRC-31 L217–220; SRC-88 L236–239)
- **Inference:** Portal wording such as enable voice mode, Configuration pane, and agent playground points to Foundry Agent integration rather than only REST or SDK use. (SRC-31 L221–230)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The source's Python code is not captured, so the page can document only the named pattern, not exact calls or parameters. (SRC-31 L231–248)
- The source uses both `Voice live session` and `Voice Live` naming across the same unit. (SRC-31 L239; SRC-31 L242)

## Relation to other sources

- [[src-88-explore-azure-voice-live-api]] supplies the event and endpoint details behind this agent integration. (SRC-88 L236–253; SRC-31 L216–248)
- [[src-87-explore-ai-voice-live-client-library-python]] supports the client-side authentication and event-handling side of this pattern. (SRC-87 L216–235; SRC-31 L242–248)
- [[src-68-exercise-develop-voice-live-agent]] asks learners to create and test a voice agent and implement a client application. (SRC-31 L221–248; SRC-68 L212)
- [[src-49-develop-azure-speech-voice-live-agent-microsoft-foundry-episode]] demonstrates enabling **Voice Mode**, choosing voice settings, and running a Python client. (SRC-31 L221–248; SRC-49 L289–360; SRC-49 L432–628)

## Connections

- [[foundry-agent-service]] — agent integration is the reason to connect using an agent ID. (SRC-31 L216–220)
- [[foundry-sdk]] — the source names the Foundry SDK for Python as an example SDK for creating the agent and adding metadata. (SRC-31 L231–232)
- [[voice-live-api]] — this source shows Voice Live used through a Foundry Agent. (SRC-31 L216)
- [[ai-agents]] — agent-side logic and configuration are central advantages. (SRC-31 L217–220)
- [[keyless-authentication]] — the recommended client pattern uses Microsoft Entra ID authentication. (SRC-31 L242–243)

## Open questions

- The unit does not expose the actual Voice Live metadata schema added to an agent definition. (SRC-31 L231–234)
- The unit does not include the actual PyAudio implementation body in the capture. (SRC-31 L246–248)

## Sources

- SRC-31 — raw file: [[31-Create a Voice Live agent - Training - Microsoft Learn]]
