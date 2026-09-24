---
title: "Explore the Azure Voice Live API"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains Voice Live API features, authentication, WebSocket endpoints, events, session settings, audio buffering, and avatars."
area: speech
source_ids: [SRC-88]
objectives: [T05, T06]
tags: [voice-live, websocket, events, authentication, avatar]
aliases: ["SRC-88"]
source_kind: learn-unit
module: "Develop an Azure Speech Voice Live Agent in Microsoft Foundry"
learning_path: "Develop natural language solutions in Azure"
unit: "2 of 7"
presenters: []
raw_file: "88-Explore the Azure Voice Live API - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/develop-voice-live-agent/2-voice-live-api"
ingest_depth: full
---
# Explore the Azure Voice Live API

*learn-unit · Develop an Azure Speech Voice Live Agent in Microsoft Foundry · unit 2 of 7 · SRC-88*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-88 |
| Raw file | 88-Explore the Azure Voice Live API - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop natural language solutions in Azure |
| Module | Develop an Azure Speech Voice Live Agent in Microsoft Foundry |
| Unit / episode | 2 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/develop-voice-live-agent/2-voice-live-api |
| Teaching content | L210–278 of 308 |
| Content length | ~779 words |
| Capture quality | Good Learn unit capture; code blocks are represented only as language/copy placeholders. |
| Ingest depth | full |

## TL;DR

The Voice Live API supports real-time bidirectional voice applications over WebSocket connections. (SRC-88 L216–218)
Its implementation surface includes authentication, project or model endpoints, client/server JSON events, dynamic `session.update` settings, audio-buffer operations, and WebRTC avatar streaming. (SRC-88 L229–278)

## Key claims

- The API enables real-time bidirectional communication for voice-enabled applications. (SRC-88 L216)
- Real-time communication uses WebSocket connections and includes speech recognition, text-to-speech synthesis, avatar streaming, and audio processing. (SRC-88 L218)
- JSON events manage conversations, audio streams, and responses, with client events sent client-to-server and server events sent server-to-client. (SRC-88 L219–220)
- Voice Live supports PCM16 and G.711 audio formats, OpenAI voices, Azure custom voices, WebRTC avatars, noise reduction, and echo cancellation. (SRC-88 L222–225)
- The source recommends Microsoft Foundry resources for full feature availability and integration experience. (SRC-88 L226–228)

## How it works

A client connects to the Voice Live API over WebSocket and authenticates either with Microsoft Entra token-based authentication or an API key. (SRC-88 L229–234)
For keyless access, the source requires the Cognitive Services User role for a user account or managed identity, and it says the token can use the `https://ai.azure.com/.default` scope or the legacy `https://cognitiveservices.azure.com/.default` scope. (SRC-88 L230–231)
The endpoint differs by access path: a Foundry project connection uses the `services.ai.azure.com` host, while a direct model connection uses the `cognitiveservices.azure.com` host. (SRC-88 L235–239)
Client events include `session.update`, `input_audio_buffer.append`, and `response.create`; server events include `session.updated`, `response.done`, and `conversation.item.created`. (SRC-88 L240–248)
A new session often begins with `session.update`, which configures voice types, modalities, turn detection, and audio formats and can be updated dynamically. (SRC-88 L252–253)
Audio processing uses append, commit, and clear operations on the input audio buffer, and noise reduction can improve VAD accuracy and model performance. (SRC-88 L259–268)
Avatar streaming uses WebRTC and the `session.avatar.connect` event, including SDP offer, video settings, and animation outputs such as blendshapes and visemes. (SRC-88 L269–278)

## Code and API patterns

The capture names JSON configuration examples but does not include the actual JSON bodies. (SRC-88 L254–256; SRC-88 L264–266; SRC-88 L274–276)
The endpoint patterns shown are: `wss://<your-ai-foundry-resource-name>.services.ai.azure.com/voice-live/realtime?api-version=2025-10-01` for a project connection and `wss://<your-ai-foundry-resource-name>.cognitiveservices.azure.com/voice-live/realtime?api-version=2025-10-01` for a model connection. (SRC-88 L237–238)
The source says model connections require a model query parameter, while Agent service use requires `agent_id` and `project_id` parameters. (SRC-88 L239)

## Key terms

- `session.update` — client event that modifies session configuration and is often the first event sent after a new session is established. (SRC-88 L242; SRC-88 L252–253)
- `input_audio_buffer.append` — client event that adds audio data to the buffer. (SRC-88 L243)
- `response.create` — client event that generates responses through model inference. (SRC-88 L244)
- `session.updated` — server event confirming session configuration changes. (SRC-88 L245–246)
- `response.done` — server event indicating response generation completion. (SRC-88 L247)
- `conversation.item.created` — server event notifying that a conversation item was added. (SRC-88 L248)
- Azure semantic VAD — the turn-detection option the source recommends for intelligent turn detection and improved conversational flow. (SRC-88 L257–258)

## Decision boundaries and exam cues

- **Inference:** If the scenario says real-time, bidirectional, interruptible voice interaction, prefer Voice Live over a one-shot speech-to-text or text-to-speech flow. (SRC-88 L216–218; SRC-88 L252–260)
- **Inference:** If the scenario connects through a Foundry project or agent, look for project endpoint parameters such as `agent_id` and `project_id`; if it connects directly to a model, look for a model parameter. (SRC-88 L236–239)
- **Inference:** Browser client scenarios should avoid the `api-key` prehandshake header because the source says that option is unavailable in a browser environment. (SRC-88 L232–234)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** API version `2025-10-01`, supported models, and regions are time-sensitive; the source points readers to the Voice Live API overview for the table. (SRC-88 L228; SRC-88 L237–238)
- The source recommends Microsoft Foundry resources but also describes a direct model connection through `cognitiveservices.azure.com`. (SRC-88 L227; SRC-88 L236–239)
- The captured code examples are missing their JSON bodies, leaving only language and copy placeholders. (SRC-88 L254–256; SRC-88 L264–266; SRC-88 L274–276)

## Relation to other sources

- [[src-132-introduction-develop-azure-speech-voice-live-agent-microsoft-foundry]] introduces the same API outcomes at module level. (SRC-132 L214–219; SRC-88 L216–278)
- [[src-31-create-voice-live-agent]] uses the API through a Foundry Agent and the agent playground. (SRC-88 L236–239; SRC-31 L216–248)
- [[src-87-explore-ai-voice-live-client-library-python]] maps the API to the Python client library. (SRC-88 L240–253; SRC-87 L216–235)
- [[src-159-module-assessment-develop-azure-speech-voice-live-agent-microsoft]] checks authentication, WebRTC, portal configuration, and interruption handling. (SRC-88 L230–234; SRC-88 L269–271; SRC-159 L212–229)

## Connections

- [[voice-live-api]] — direct entity page for this API. (SRC-88 L216)
- [[endpoints-and-sdk-choice]] — endpoint choice differs by project connection versus direct model connection. (SRC-88 L236–239)
- [[keyless-authentication]] — Microsoft Entra authentication is recommended and role-scoped. (SRC-88 L230–231)
- [[voices-and-audio-formats]] — the unit names PCM16, G.711, OpenAI voices, and Azure custom voices. (SRC-88 L222–223)
- [[conversation-state]] — JSON events manage conversations and conversation items. (SRC-88 L219–220; SRC-88 L248)
- *Module units:* [[src-132-introduction-develop-azure-speech-voice-live-agent-microsoft-foundry|1 Introduction]] · [[src-31-create-voice-live-agent|3 Create a Voice Live agent]] · [[src-87-explore-ai-voice-live-client-library-python|3 Explore the AI Voice Live Client Library for Python]] · [[src-68-exercise-develop-voice-live-agent|4 Exercise - Develop a Voice Live Agent]] · [[src-159-module-assessment-develop-azure-speech-voice-live-agent-microsoft|5 Module Assessment]] · [[src-208-summary-develop-azure-speech-voice-live-agent-microsoft-foundry|6 Summary]] · [[src-49-develop-azure-speech-voice-live-agent-microsoft-foundry-episode|episode 20]]

## Open questions

- The source does not include the JSON configuration examples that its text introduces. (SRC-88 L254–256; SRC-88 L264–266; SRC-88 L274–276)
- The source does not list supported model and region values in the captured teaching content. (SRC-88 L228)

## Sources

- SRC-88 — raw file: [[88-Explore the Azure Voice Live API - Training - Microsoft Learn]]
