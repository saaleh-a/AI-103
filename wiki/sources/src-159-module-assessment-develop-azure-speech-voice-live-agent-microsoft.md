---
title: "Module Assessment — Develop an Azure Speech Voice Live Agent in Microsoft Foundry"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Assessment questions cover Voice Live authentication, WebRTC avatars, portal voice mode, and interruption event handling."
area: speech
source_ids: [SRC-159]
objectives: []
tags: [voice-live, assessment, authentication, webrtc, events]
aliases: ["SRC-159"]
source_kind: learn-unit
module: "Develop an Azure Speech Voice Live Agent in Microsoft Foundry"
learning_path: "Develop natural language solutions in Azure"
unit: "5 of 7"
presenters: []
raw_file: "159-Module Assessment - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/develop-voice-live-agent/5-knowledge-check"
ingest_depth: full
---
# Module Assessment — Develop an Azure Speech Voice Live Agent in Microsoft Foundry

*learn-unit · Develop an Azure Speech Voice Live Agent in Microsoft Foundry · unit 5 of 7 · SRC-159*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-159 |
| Raw file | 159-Module Assessment - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop natural language solutions in Azure |
| Module | Develop an Azure Speech Voice Live Agent in Microsoft Foundry |
| Unit / episode | 5 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/develop-voice-live-agent/5-knowledge-check |
| Teaching content | L210–233 of 263 |
| Content length | ~182 words |
| Capture quality | Good assessment capture; answers are present as captured option text. |
| Ingest depth | full |

## TL;DR

The assessment tests four facts: Voice Live supports Microsoft Entra keyless authentication and API keys, avatar streaming uses WebRTC, portal integration is configured by enabling voice mode in the agent playground, and interruption handling uses `ServerEventType.INPUT_AUDIO_BUFFER_SPEECH_STARTED`. (SRC-159 L212–229)

## Key claims

- The captured correct authentication option is Microsoft Entra keyless authentication and API key. (SRC-159 L212–215)
- The captured correct avatar-streaming protocol option is WebRTC. (SRC-159 L217–220)
- The captured correct portal configuration option is enabling voice mode in the agent playground. (SRC-159 L222–225)
- The captured correct interruption-handling option is handling `ServerEventType.INPUT_AUDIO_BUFFER_SPEECH_STARTED`. (SRC-159 L227–230)

## How it works

This source works as a knowledge check rather than a teaching unit, and it reinforces implementation details from the module. (SRC-159 L212–230)
It connects authentication choices, avatar transport, portal workflow, and event handling to specific answer options. (SRC-159 L212–230)

## Code and API patterns

The assessment names `ServerEventType.INPUT_AUDIO_BUFFER_SPEECH_STARTED` as the event to handle when stopping audio playback during user interruption. (SRC-159 L227–230)
No code snippet is captured in this source. (SRC-159 L227–230)

## Key terms

- Microsoft Entra (keyless) — one of the two supported Voice Live API authentication methods in the assessment. (SRC-159 L212–215)
- API key — the other supported Voice Live API authentication method in the assessment. (SRC-159 L212–215)
- WebRTC — the protocol selected for avatar streaming integration. (SRC-159 L217–220)
- `ServerEventType.INPUT_AUDIO_BUFFER_SPEECH_STARTED` — event named for stopping audio playback on user interruption. (SRC-159 L227–230)

## Decision boundaries and exam cues

- **Inference:** If an exam item contrasts OAuth/JWT, Basic/API keys, and Microsoft Entra/API key for Voice Live, choose Microsoft Entra keyless plus API key. (SRC-159 L212–215)
- **Inference:** If an item asks for avatar streaming transport in Voice Live, choose WebRTC over HTTP/2 or gRPC. (SRC-159 L217–220)
- **Inference:** If an item asks how to configure and test Voice Live agent integration in the portal, choose enabling voice mode in the agent playground. (SRC-159 L222–225)

## Assessment items

1. What are the two authentication methods supported by the Voice Live API? Options: OAuth 2.0 and JWT; Basic authentication and API keys; Microsoft Entra (keyless) and API key. Answer shown: Microsoft Entra (keyless) and API key. (SRC-159 L212–215)
2. Which protocol is used for avatar streaming integration in Voice Live API? Options: HTTP/2; WebRTC; gRPC. Answer shown: WebRTC. (SRC-159 L217–220)
3. How do you configure and test Voice Live agent integration in the Foundry Portal? Options: Voice Live is only accessible through REST API or Python SDK; Azure Speech in Foundry Tools Voice Live playground; Enable Voice mode in the agent playground. Answer shown: Enable Voice mode in the agent playground. (SRC-159 L222–225)
4. How can you stop audio playback when a user interrupts the voice agent? Options: user must wait; handle `ServerEventType.INPUT_AUDIO_BUFFER_SPEECH_STARTED`; reset the Voice Live session and clear conversation history. Answer shown: handle `ServerEventType.INPUT_AUDIO_BUFFER_SPEECH_STARTED`. (SRC-159 L227–230)

## Tensions, caveats and currency

- The capture includes the warning that all questions must be answered before checking work, so it preserves assessment UI text rather than only content. (SRC-159 L231–233)
- The assessment writes Foundry Portal with capital P, while other pages use Microsoft Foundry portal. (SRC-159 L222; SRC-31 L221–222)

## Relation to other sources

- [[src-88-explore-azure-voice-live-api]] teaches the authentication and WebRTC facts assessed here. (SRC-88 L230–234; SRC-88 L269–271; SRC-159 L212–220)
- [[src-31-create-voice-live-agent]] teaches the voice mode in agent playground fact assessed here. (SRC-31 L221–230; SRC-159 L222–225)
- [[src-87-explore-ai-voice-live-client-library-python]] explains why interruption handling must cancel playback immediately. (SRC-87 L227–228; SRC-159 L227–230)
- [[src-49-develop-azure-speech-voice-live-agent-microsoft-foundry-episode]] repeats the same check answers in the episode wrap-up. (SRC-49 L688–710; SRC-159 L212–230)

## Connections

- [[voice-live-api]] — assessment target. (SRC-159 L212–230)
- [[keyless-authentication]] — correct authentication option includes Microsoft Entra keyless. (SRC-159 L212–215)
- [[microsoft-entra-id]] — named authentication option. (SRC-159 L212–215)
- [[microsoft-foundry]] — portal agent playground configuration is assessed. (SRC-159 L222–225)
- [[agent-testing-and-evaluation]] — the assessment tests whether learners retained module behaviours. (SRC-159 L212–230)
- *Module units:* [[src-132-introduction-develop-azure-speech-voice-live-agent-microsoft-foundry|1 Introduction]] · [[src-88-explore-azure-voice-live-api|2 Explore the Azure Voice Live API]] · [[src-31-create-voice-live-agent|3 Create a Voice Live agent]] · [[src-87-explore-ai-voice-live-client-library-python|3 Explore the AI Voice Live Client Library for Python]] · [[src-68-exercise-develop-voice-live-agent|4 Exercise - Develop a Voice Live Agent]] · [[src-208-summary-develop-azure-speech-voice-live-agent-microsoft-foundry|6 Summary]] · [[src-49-develop-azure-speech-voice-live-agent-microsoft-foundry-episode|episode 20]]

## Open questions

- The capture does not show score feedback after submission. (SRC-159 L231–233)

## Sources

- SRC-159 — raw file: [[159-Module Assessment - Training - Microsoft Learn]]
