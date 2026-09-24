---
title: "Introduction — Develop an Azure Speech Voice Live Agent in Microsoft Foundry"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Introduces Voice Live as low-latency speech-to-speech interaction for Foundry voice agents."
area: speech
source_ids: [SRC-132]
objectives: []
tags: [voice-live, azure-speech, microsoft-foundry, introduction]
aliases: ["SRC-132"]
source_kind: learn-unit
module: "Develop an Azure Speech Voice Live Agent in Microsoft Foundry"
learning_path: "Develop natural language solutions in Azure"
unit: "1 of 7"
presenters: []
raw_file: "132-Introduction - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/develop-voice-live-agent/1-introduction"
ingest_depth: full
---
# Introduction — Develop an Azure Speech Voice Live Agent in Microsoft Foundry

*learn-unit · Develop an Azure Speech Voice Live Agent in Microsoft Foundry · unit 1 of 7 · SRC-132*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-132 |
| Raw file | 132-Introduction - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop natural language solutions in Azure |
| Module | Develop an Azure Speech Voice Live Agent in Microsoft Foundry |
| Unit / episode | 1 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/develop-voice-live-agent/1-introduction |
| Teaching content | L210–221 of 251 |
| Content length | ~193 words |
| Capture quality | Good Learn unit capture; teaching content is concise. |
| Ingest depth | full |

## TL;DR

This introduction frames Voice Live as an Azure Speech in Foundry Tools capability for low-latency, high-quality speech-to-speech interactions in voice agents. (SRC-132 L214)
The module promises practice with the Voice Live API, session configuration, event handlers, and using Voice Live with a Foundry Agent. (SRC-132 L215–219)

## Key claims

- Voice-enabled applications are positioned as changing how users interact with technology. (SRC-132 L214)
- The Voice Live API enables low-latency, high-quality speech-to-speech interactions for voice agents. (SRC-132 L214)
- The API is intended to avoid manually orchestrating multiple components for scalable voice-driven experiences. (SRC-132 L214)
- Learners should be able to implement real-time bidirectional communication, configure an agent session, manage event handlers, and use Voice Live with a Foundry Agent. (SRC-132 L216–219)

## How it works

The unit does not detail protocol mechanics, but it places Voice Live between a voice-enabled application and a Foundry Agent as the capability that carries real-time speech-to-speech interaction. (SRC-132 L214; SRC-132 L219)
It previews four implementation concerns: API use, session setup, event-handler development, and Foundry Agent integration. (SRC-132 L216–219)

## Code and API patterns

Not covered by this source.

## Key terms

- Voice Live API — Azure Speech in Foundry Tools capability for low-latency, high-quality speech-to-speech interactions for voice agents. (SRC-132 L214)
- Agent session — a session learners are expected to set up and configure in the module. (SRC-132 L217)
- Event handlers — code learners are expected to develop and manage for dynamic interactive experiences. (SRC-132 L218)

## Decision boundaries and exam cues

- **Inference:** Choose Voice Live when the scenario requires real-time bidirectional speech interaction with a voice agent, not a batch speech operation. (SRC-132 L214; SRC-132 L216)
- **Inference:** Treat session configuration and event handling as load-bearing clues because the unit names them as explicit outcomes. (SRC-132 L217–218)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The page uses both *Voice live API* casing and *Voice Live* naming, so preserve source casing when quoting or mapping terminology. (SRC-132 L214; SRC-132 L219)
- The source says the text tab can contain greater detail than videos, so video-only consumption may omit details present in text. (SRC-132 L221)

## Relation to other sources

- [[src-88-explore-azure-voice-live-api]] expands the API architecture, authentication, endpoints, event categories, session updates, audio buffers, and avatar streaming introduced here. (SRC-132 L216; SRC-88 L216–278)
- [[src-31-create-voice-live-agent]] expands the Foundry Agent integration outcome named here. (SRC-132 L219; SRC-31 L216–248)
- [[src-87-explore-ai-voice-live-client-library-python]] expands the event-handler and client-library outcomes. (SRC-132 L218; SRC-87 L216–235)
- [[src-49-develop-azure-speech-voice-live-agent-microsoft-foundry-episode]] presents the same module as a live walkthrough. (SRC-132 L214–219; SRC-49 L18–26)

## Connections

- [[voice-live-api]] — API named as the module's core capability. (SRC-132 L214)
- [[azure-speech]] — Voice Live is described under Azure Speech in Foundry Tools. (SRC-132 L214)
- [[foundry-tools]] — the introduction locates Voice Live in Foundry Tools. (SRC-132 L214)
- [[microsoft-foundry]] — the module includes using Voice Live with a Foundry Agent. (SRC-132 L219)
- [[ai-agents]] — voice agents are the target application pattern. (SRC-132 L214)
- *Module units:* [[src-88-explore-azure-voice-live-api|2 Explore the Azure Voice Live API]] · [[src-31-create-voice-live-agent|3 Create a Voice Live agent]] · [[src-87-explore-ai-voice-live-client-library-python|3 Explore the AI Voice Live Client Library for Python]] · [[src-68-exercise-develop-voice-live-agent|4 Exercise - Develop a Voice Live Agent]] · [[src-159-module-assessment-develop-azure-speech-voice-live-agent-microsoft|5 Module Assessment]] · [[src-208-summary-develop-azure-speech-voice-live-agent-microsoft-foundry|6 Summary]] · [[src-49-develop-azure-speech-voice-live-agent-microsoft-foundry-episode|episode 20]]

## Open questions

- The introduction does not specify supported models, regions, SDK versions, or endpoint formats. (SRC-132 L214–219)

## Sources

- SRC-132 — raw file: [[132-Introduction - Training - Microsoft Learn]]
