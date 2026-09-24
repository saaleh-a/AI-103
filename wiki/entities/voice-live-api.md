---
title: "Azure Voice Live API"
type: entity
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Low-latency speech-to-speech API for interruptible voice agents using WebSockets, events, session settings, VAD, and optional avatars."
area: speech
source_ids: [SRC-17, SRC-31, SRC-49, SRC-87, SRC-88, SRC-159, SRC-208, SRC-221, SRC-225, SRC-226, SRC-236]
objectives: [P02, P12, T05, T06]
objective_gaps: []
tags: ["api"]
aliases: ["Voice Live", "Azure Speech Voice Live", "Voice Live API", "Voice Live client library", "Azure AI Voice Live"]
---

# Azure Voice Live API

## Summary

Azure Voice Live API is the corpus's low-latency voice-agent API: it creates real-time, bidirectional speech conversations over WebSocket connections, with client/server events, speech recognition, text-to-speech synthesis, audio processing, and optional avatar streaming (SRC-88 L216–218; SRC-208 L216).

## What it is

Voice Live is for live conversational experiences where the user and agent may speak in the same flowing exchange. The episode frames the problem as moving beyond push-to-talk into a full-duplex conversation where an agent can listen, think, speak, and be interrupted (SRC-49 L4–17; SRC-49 L45–58). The Learn unit states the same capability in product terms: real-time, bidirectional communication for voice-enabled applications (SRC-88 L216).

## What the sources say

- The API uses WebSocket connections and JSON-formatted events to manage conversations, audio streams, and responses (SRC-88 L218–241).
- Supported feature areas include speech recognition, text-to-speech synthesis, avatar streaming, audio processing, multiple audio formats such as PCM16 and G.711, OpenAI voices, Azure custom voices, noise reduction, and echo cancellation (SRC-88 L218–226; SRC-49 L72–124).
- Authentication can use Microsoft Entra ID keyless auth or an API key. The source recommends Microsoft Entra ID and says Cognitive Services User must be assigned to a user account or managed identity (SRC-88 L230–232).
- The Python client library is a real-time speech-to-speech client that opens a WebSocket session, streams microphone audio, and receives server events. The corpus notes it is async-only as of version 1.0.0 (SRC-87 L216–224).
- A Foundry agent can use Voice Live through voice mode in the agent playground or by adding Voice Live metadata to an agent definition in code (SRC-31 L216–232).

## Capabilities and components

**Synthesis:** Voice Live has three load-bearing parts in the corpus (SRC-88 L240–272):

1. **Session and events.** Client events such as `session.update`, `input_audio_buffer.append`, and `response.create` control configuration, audio buffering, and response generation; server events such as `session.updated`, `response.done`, and `conversation.item.created` report status (SRC-88 L240–249).
2. **Session settings.** The first event in a new session is often `session.update`, which can dynamically configure voices, modalities, turn detection, and audio formats. The source recommends Azure semantic VAD for turn detection and conversational flow (SRC-88 L252–258).
3. **Real-time audio and avatars.** Audio buffers can be appended, committed, or cleared; noise reduction and echo cancellation can improve audio quality. Avatar streaming uses WebRTC and can configure video, animation, blendshapes, and visemes (SRC-88 L259–272).

## How to use it

Direct API use means connecting to the Voice Live WebSocket endpoint. The corpus distinguishes a Foundry project connection from a direct model connection; both use `/voice-live/realtime` and differ by host plus required parameters such as model, `agent_id`, or `project_id` (SRC-88 L235–239). The Python client library wraps this pattern for async applications, including authentication and event handling (SRC-87 L216–224).

Agent use means enabling voice mode in the Foundry agent playground or configuring a Foundry Agent SDK definition with Voice Live metadata. The agent path centralizes instructions and business logic in the agent rather than in session code, and the client then connects to the agent, configures audio devices, starts a Voice Live session, and processes speech events (SRC-31 L216–244).

## Decision boundaries

**Synthesis:** The closest confusions separate by runtime shape and control surface:

- **Prefer Voice Live** when the core job is real-time, bidirectional, interruptible voice conversation using WebSocket sessions and events (SRC-88 L216–218; SRC-49 L45–58; SRC-88 L240–253). **Inference:** VAD, interruption handling, avatars, and session events are the deciding clues (SRC-87 L228; SRC-88 L252–270).
- **Prefer Speech SDK / Azure Speech** when the app needs explicit speech API control through SDK recognizers, synthesizers, configs, or speech translation objects (SRC-226 L14–28). **Inference:** this is app-code speech control rather than a live agent session.
- **Prefer speech-capable GPT-4o models** when the task is model-level audio transcription or synthesis through a deployed model endpoint (SRC-225 L223–224; SRC-221 L222–223). **Inference:** the model module lists transcribe and TTS use cases, not VAD, avatars, or speech translation (SRC-17 L218–221).
- **Prefer Azure Speech MCP server** when a text-first agent needs discoverable speech-to-text or text-to-speech tools and can work with audio files in Blob Storage (SRC-236 L226–248). **Inference:** that is a file/tool workflow, not a live duplex session.

## Naming and currency

The corpus uses both "Voice live" and "Voice Live" capitalization. It also labels the episode recording as preview-era: the presenter says Voice Live was in preview at recording time and might be out of preview by viewing time (SRC-49 L130–139). **Stale-risk:** model and region support, SDK version, preview status, and endpoint API version should be verified against current Microsoft documentation before production implementation (SRC-88 L227–228; SRC-87 L217–224).

## Appearances in the corpus

- SRC-88 is the direct Learn unit for API architecture, auth, endpoints, events, session settings, audio, and avatars.
- SRC-87 introduces the Python client library and interruption handling.
- SRC-31 explains using Voice Live through Foundry agents and the portal voice mode.
- SRC-49 is the episode walkthrough and supplies the first-principles full-duplex/interruptible framing.
- SRC-159 tests authentication methods, WebRTC avatar streaming, portal integration, and interruption handling.
- SRC-208 summarizes the module as WebSockets, recognition, synthesis, avatar streaming, and real-time speech-to-speech applications.

## Connections

- [[azure-speech]] — the broader Speech service family that includes Voice Live in the speech module.
- [[speech-capable-models]] — neighbouring model-based transcribe/TTS option, without Voice Live's session/event control.
- [[azure-speech-mcp-server]] — neighbouring agent-tool route for speech files, not a live duplex session.
- [[speech-to-text]] — one capability Voice Live includes inside real-time conversation.
- [[text-to-speech]] — one capability Voice Live includes inside real-time conversation.
- [[voices-and-audio-formats]] — voices and audio formats appear in Voice Live session configuration.
- [[foundry-agent-service]] — Foundry agents can encapsulate Voice Live instructions and configuration.
- [[speech-and-language-options-compared]] — synthesis page for the Speech SDK vs Voice Live vs models vs MCP boundary.
- [[src-88-explore-azure-voice-live-api]] — main API source.
- [[src-87-explore-ai-voice-live-client-library-python]] — client-library source.
- [[src-31-create-voice-live-agent]] — agent-integration source.
- *Also linked from:* [[overview]] · [[speech-translation]]

## Sources

- SRC-17 — [[src-17-choose-speech-capable-model]] — speech-capable model use cases used for option boundaries.
- SRC-31 — [[src-31-create-voice-live-agent]] — Foundry agent voice mode and client pattern.
- SRC-49 — [[src-49-develop-azure-speech-voice-live-agent-microsoft-foundry-episode]] — episode framing and feature walkthrough.
- SRC-87 — [[src-87-explore-ai-voice-live-client-library-python]] — Python client library and event handling.
- SRC-88 — [[src-88-explore-azure-voice-live-api]] — Voice Live API architecture, authentication, events, sessions, and avatars.
- SRC-159 — [[src-159-module-assessment-develop-azure-speech-voice-live-agent-microsoft]] — assessment cues for auth, WebRTC, portal setup, and interruptions.
- SRC-208 — [[src-208-summary-develop-azure-speech-voice-live-agent-microsoft-foundry]] — module summary.
- SRC-221 — [[src-221-synthesize-speech]] — TTS model boundary source.
- SRC-225 — [[src-225-transcribe-speech]] — transcription model boundary source.
- SRC-226 — [[src-226-translate-speech]] — Speech SDK boundary source.
- SRC-236 — [[src-236-understand-azure-speech-mcp-server]] — Speech MCP boundary source.
