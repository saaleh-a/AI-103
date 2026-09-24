---
title: "Develop an Azure Speech Voice Live agent in Microsoft Foundry - AI-103 - Episode 20"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Episode walkthrough of Voice Live concepts, portal voice mode, agent testing, Python client structure, and assessment recap."
area: speech
source_ids: [SRC-49]
objectives: [T05, T06]
tags: [voice-live, episode, agent-playground, python, websocket]
aliases: ["SRC-49"]
source_kind: episode
module: "Develop an Azure Speech Voice Live agent in Microsoft Foundry"
learning_path: null
unit: null
presenters: ["ROB FOULKROD", "ANDREW", "AGENT"]
raw_file: "49-Develop an Azure Speech Voice Live agent in Microsoft Foundry - AI-103 - Episode 20.md"
url: "https://www.youtube.com/watch?v=FMfX6qo4LII"
ingest_depth: full
---
# Develop an Azure Speech Voice Live agent in Microsoft Foundry - AI-103 - Episode 20

*episode · Develop an Azure Speech Voice Live agent in Microsoft Foundry · SRC-49*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-49 |
| Raw file | 49-Develop an Azure Speech Voice Live agent in Microsoft Foundry - AI-103 - Episode 20.md |
| Kind | episode |
| Learning path | null |
| Module | Develop an Azure Speech Voice Live agent in Microsoft Foundry |
| Unit / episode | Episode 20 |
| Presenter(s) | ROB FOULKROD; ANDREW; AGENT |
| URL | https://www.youtube.com/watch?v=FMfX6qo4LII |
| Teaching content | L3–743 of 743 |
| Content length | ~3309 words |
| Capture quality | Auto-captioned episode transcript; readable but with minor caption artifacts. |
| Ingest depth | full |

## TL;DR

Rob Foulkrod presents Voice Live as the move from push-to-talk toward real-time, low-latency, full-duplex voice-agent conversation that can be interrupted. (SRC-49 L4–15)
The episode explains Voice Live as an Azure Speech Foundry Tool usable over many Foundry models, then demonstrates portal voice mode, voice configuration, interruption in the playground, and a Python client using `azure-ai-voicelive`. (SRC-49 L28–46; SRC-49 L169–204; SRC-49 L376–462)

## Key claims

- Voice Live supports a real-time, low-latency, full-duplex exchange in which the agent can listen, think, speak, and be interrupted. (SRC-49 L4–15)
- Voice Live is shown as an Azure Speech tool inside Foundry that can enable a Voice Live session over different Foundry models. (SRC-49 L28–46)
- The episode says enabling Azure Speech Voice Live creates a bidirectional WebSocket connection between client and application. (SRC-49 L70–82)
- Voice Live authentication supports API key and keyless identity connection, with the presenter preferring the keyless direction. (SRC-49 L83–93)
- Advanced features include PCM16, G.711, OpenAI voices, Azure custom voices, WebRTC avatar integration, built-in noise reduction, and echo cancellation. (SRC-49 L94–162)
- At recording time, the presenter says the portal feature is in preview and may be out of preview by viewing time. (SRC-49 L174–177)

## How it works

The portal path starts by creating a chat agent, giving it concise instructions, and enabling **Voice Mode**. (SRC-49 L247–290)
Voice mode lets the presenter configure language detection, select a voice, and optionally enable interim response and proactive engagement. (SRC-49 L295–374)
The playground demonstration shows the agent responding by voice and being interrupted when the presenter asks for one more bullet. (SRC-49 L376–424)
For code, the episode configures environment variables for resource, project, and agent name before opening the application code. (SRC-49 L432–447)
The Python side adds `azure-ai-voicelive`, imports Voice Live namespaces, uses a helper to create bidirectional network communication, reads environment variables, uses CLI or default credentials, and passes endpoint, credential, and agent information into a custom voice assistant. (SRC-49 L456–506)
The custom assistant starts by using the connect helper to create WebSocket communication, stores the connection, uses an audio processor for speaker and microphone I/O, creates a request session with text and audio, configures audio format and turn detection, and processes session and speech events. (SRC-49 L507–628)

## Code and API patterns

The episode names the `azure-ai-voicelive` dependency as the component that provides back-and-forth voice communication. (SRC-49 L456–462)
It distinguishes demo-owned classes from SDK types by saying the `voice assistance` class is an internal class for the demo, not part of the standard SDK. (SRC-49 L489–495)
The SDK-relevant connection setup includes endpoint, credential, API version, and agent configuration passed to a connect helper. (SRC-49 L518–530)
The request session uses both text and audio, sets audio format, handles turn detection for interruption, and includes echo cancellation and noise reduction configuration. (SRC-49 L553–588)
The event-processing code starts microphone capture after a session update and handles speech and output events. (SRC-49 L604–628)

## Key terms

- Full duplex — the back-and-forth pattern where the user talks to the agent and the agent talks back in the same flowing exchange. (SRC-49 L8–15; SRC-49 L54–61)
- PCM16 — uncompressed standard audio format with larger payload and full fidelity. (SRC-49 L99–109)
- G.711 — compressed speech codec for human voice with smaller payload. (SRC-49 L110–119)
- Interim response — voice response used when the AI is taking time. (SRC-49 L360–366)
- Proactive engagement — a prompt after a long pause, such as checking whether the user is still there. (SRC-49 L367–373)
- Audio processor — demo class that handles playback through speakers and recording through the microphone. (SRC-49 L533–542)

## Decision boundaries and exam cues

- **Inference:** Use Voice Live when the scenario says users should naturally speak with an agent and interrupt it mid-response, because the episode foregrounds full duplex and interruption. (SRC-49 L4–15; SRC-49 L54–69)
- **Inference:** Use portal voice mode when the scenario asks for configuring and testing voice integration in Foundry without first writing code. (SRC-49 L169–204; SRC-49 L277–297)
- **Inference:** Use the Python client pattern when the scenario requires connecting a local client, configuring microphone/speaker devices, establishing a session, and processing events. (SRC-49 L205–246; SRC-49 L507–628)
- **Inference:** If the agent talks over the user, inspect turn detection and the input-audio-buffer speech-started event because the episode ties interruption to turn detection and the recap names the event. (SRC-49 L570–575; SRC-49 L704–710)

## Assessment items

1. What are the two authentication methods supported by Voice Live API? Answer given in the episode: Microsoft Entra ID and API key. (SRC-49 L688–697)
2. How do you configure and test Voice Live agent integration in the Foundry portal? Answer given in the episode: enable voice mode in the agent playground. (SRC-49 L698–703)
3. How do you stop audio playback when a user interrupts the voice? Answer given in the episode: handle the input audio buffer speech started event. (SRC-49 L704–710)

## Segment guide

- L4–27 — Opening problem: push-to-talk is contrasted with low-latency full-duplex voice agents that can be interrupted. (SRC-49 L4–27)
- L28–93 — Concept overview: Voice Live is introduced as an Azure Speech Foundry Tool with WebSocket sessioning and API key or keyless identity authentication. (SRC-49 L28–93)
- L94–162 — Feature overview: audio formats, voice options, WebRTC avatars, noise reduction, and echo cancellation. (SRC-49 L94–162)
- L164–204 — Portal enablement: a Foundry agent can enable Voice Live with a switch, language detection, voice configuration, and advanced settings. (SRC-49 L164–204)
- L205–246 — SDK setup preview: configure input and output devices, establish the Voice Live session, and listen for events. (SRC-49 L205–246)
- L247–424 — Portal demo: create a chat agent, enable **Voice Mode**, choose a voice, and interrupt the agent during a spoken answer. (SRC-49 L247–424)
- L432–628 — Code walkthrough: configure environment variables, install `azure-ai-voicelive`, connect with credentials, start audio processing, configure session modalities, and process events. (SRC-49 L432–628)
- L630–687 — Terminal demo: run the client, ask the agent a question, interrupt it, and receive spoken guidance about exiting the Python application. (SRC-49 L630–687)
- L688–743 — Recap and knowledge check: authentication, portal voice mode, interruption event, formats, SDK session establishment, and course wrap-up. (SRC-49 L688–743)

## Tensions, caveats and currency

- **Stale-risk:** The presenter says Voice Live is in preview at recording time and may no longer be preview by viewing time. (SRC-49 L174–177)
- The auto-caption transcript contains minor artifacts such as `theses` and incomplete phrasing, so precise API details should be checked against Learn units when available. (SRC-49 L36–39; SRC-49 L550–552)
- The episode uses `Live Voice` phrasing in some places while the module pages generally use Voice Live. (SRC-49 L125–126; SRC-88 L216)

## Relation to other sources

- [[src-88-explore-azure-voice-live-api]] provides official Learn text for the authentication, endpoint, event, audio, and avatar concepts presented in the episode. (SRC-49 L70–162; SRC-88 L216–278)
- [[src-31-create-voice-live-agent]] aligns with the episode's portal voice mode and client application pattern. (SRC-49 L169–246; SRC-31 L216–248)
- [[src-87-explore-ai-voice-live-client-library-python]] aligns with the episode's Python SDK and async client emphasis. (SRC-49 L456–628; SRC-87 L216–235)
- [[src-159-module-assessment-develop-azure-speech-voice-live-agent-microsoft]] captures the module assessment items that overlap the episode recap. (SRC-49 L688–710; SRC-159 L212–230)

## Connections

- [[voice-live-api]] — episode topic and core API. (SRC-49 L18–26)
- [[foundry-tools]] — Voice Live is presented as an Azure Speech tool inside Foundry. (SRC-49 L28–46)
- [[microsoft-foundry]] — the portal demo uses Foundry agent creation and voice mode. (SRC-49 L247–360)
- [[keyless-authentication]] — authentication includes keyless identity and API key. (SRC-49 L83–93)
- [[voices-and-audio-formats]] — the episode explains PCM16, G.711, and voice options. (SRC-49 L99–130)
- [[ai-agents]] — the episode builds a voice-enabled agent. (SRC-49 L18–26)
- *Module units:* [[src-132-introduction-develop-azure-speech-voice-live-agent-microsoft-foundry|1 Introduction]] · [[src-88-explore-azure-voice-live-api|2 Explore the Azure Voice Live API]] · [[src-31-create-voice-live-agent|3 Create a Voice Live agent]] · [[src-87-explore-ai-voice-live-client-library-python|3 Explore the AI Voice Live Client Library for Python]] · [[src-68-exercise-develop-voice-live-agent|4 Exercise - Develop a Voice Live Agent]] · [[src-159-module-assessment-develop-azure-speech-voice-live-agent-microsoft|5 Module Assessment]] · [[src-208-summary-develop-azure-speech-voice-live-agent-microsoft-foundry|6 Summary]]

## Open questions

- The episode does not show all exact code in a copyable block, so implementation should be triangulated with source code from the exercise if available outside the corpus. (SRC-49 L448–628)
- The episode does not give supported model or region tables. (SRC-49 L28–46)

## Sources

- SRC-49 — raw file: [[49-Develop an Azure Speech Voice Live agent in Microsoft Foundry - AI-103 - Episode 20]]
