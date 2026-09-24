---
title: "Introduction — Integrate custom tools into your agent"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Introduces custom tools as agent extensions for executing business-specific actions beyond built-in tools."
area: agents
source_ids: [SRC-122]
objectives: []
tags: [custom-tools, agents, foundry-agent-service, module-introduction]
aliases: ["SRC-122"]
source_kind: learn-unit
module: "Integrate custom tools into your agent"
learning_path: "Develop AI agents on Azure"
unit: "1 of 7"
presenters: []
raw_file: "122-Introduction - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/build-agent-with-custom-tools/1-introduction"
ingest_depth: full
---
# Introduction — Integrate custom tools into your agent
*learn-unit · Integrate custom tools into your agent · unit 1 of 7 · SRC-122*

## Source metadata
| Field | Value |
|---|---|
| Source ID | SRC-122 |
| Raw file | 122-Introduction - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Integrate custom tools into your agent |
| Unit / episode | 1 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/build-agent-with-custom-tools/1-introduction |
| Teaching content | L210–219 of 249 |
| Content length | ~241 words |
| Capture quality | High; concise Learn unit capture. |
| Ingest depth | full |

## TL;DR
Microsoft Foundry Agent Service lets builders create agents without extensive AI or machine-learning expertise, and tools let agents execute actions for the user. (SRC-122 L216) Built-in tools support knowledge gathering and code generation, but custom tools are needed when the agent must perform tasks the model cannot handle alone. (SRC-122 L217) The unit frames custom tools as a way to improve productivity, accuracy and tailored business outcomes. (SRC-122 L219)

## Key claims
- Foundry Agent Service is presented as a seamless way to build an agent without extensive AI or machine-learning expertise. (SRC-122 L216)
- Tools provide agent functionality to execute actions on the user's behalf. (SRC-122 L216)
- Built-in tools can gather knowledge and generate code, but some tasks require custom tools. (SRC-122 L217)
- A custom tool can be based on the builder's own code, a third-party service or an API. (SRC-122 L217)
- The retail example uses custom tools to look up customer orders so a FAQ agent can handle common inquiries and free support staff for harder issues. (SRC-122 L218)

## How it works
The unit's mental model is that an agent starts with model-driven behaviour and then gains action-taking capability through tools. (SRC-122 L216) Built-in tools are useful, but custom tools become necessary when the agent must complete actions that an AI model would struggle to handle alone. (SRC-122 L217) The retail scenario shows the agent receiving a business-specific capability: looking up customer orders as part of a custom FAQ workflow. (SRC-122 L218)

## Code and API patterns
Not covered by this source. The unit names custom tools based on code, third-party services or APIs, but it does not show SDK objects or request shapes. (SRC-122 L217)

## Key terms
- **Microsoft Foundry Agent Service** — the service this unit uses for building agents with tools. (SRC-122 L216)
- **Built-in tools** — tools for knowledge gathering and code generation. (SRC-122 L217)
- **Custom tool** — a tool based on your code, a third-party service or an API for tasks the model cannot handle by itself. (SRC-122 L217)

## Decision boundaries and exam cues
- **Inference:** Choose custom tools when a scenario requires the agent to act against a business system or API rather than only answer from model knowledge. (SRC-122 L217–218)
- **Inference:** Built-in tools fit generic knowledge or code-generation support; custom tools fit domain-specific actions such as order lookup. (SRC-122 L217–218)

## Assessment items
Not covered by this source.

## Tensions, caveats and currency
The source uses Microsoft Foundry Agent Service and AI Agent Service wording across adjacent sentences, so naming should be tracked with other custom-tool sources. (SRC-122 L216–217)

## Relation to other sources
- [[src-265-why-custom-tools]] expands this introduction into benefits and industry scenarios. (SRC-122 L219; SRC-265 L216–249)
- [[src-179-options-implementing-custom-tools]] lists the implementation options that this introduction previews. (SRC-122 L217; SRC-179 L218–222)
- [[src-110-integrate-custom-tools-agent-episode-8]] covers the same topic as a presenter-led walkthrough and demo. (SRC-122 L217–219; SRC-110 L691–699)

## Connections
- [[foundry-agent-service]] — the module's custom tools are integrated into this agent service.
- [[agent-tools]] — the page introduces tools as the mechanism that lets agents execute actions.
- [[custom-tool-options]] — later units describe the specific ways to implement the custom tool.
- [[function-calling]] — own-code custom tools are introduced here and detailed later.
- [[tool-options-compared]] — this source contributes the built-in versus custom distinction.

## Open questions
- The unit does not specify how a custom tool is registered, authenticated or approved. (SRC-122 L217)
- The retail example does not show the concrete API or data boundary for order lookup. (SRC-122 L218)

## Sources
- SRC-122 — raw file: [[122-Introduction - Training - Microsoft Learn]]
