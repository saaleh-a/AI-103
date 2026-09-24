---
title: "Why use custom tools"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains why custom tools extend agents: productivity, accuracy, tailored workflows and industry-specific actions."
area: agents
source_ids: [SRC-265]
objectives: [G09]
tags: [custom-tools, agents, productivity, tool-use]
aliases: ["SRC-265"]
source_kind: learn-unit
module: "Integrate custom tools into your agent"
learning_path: "Develop AI agents on Azure"
unit: "2 of 7"
presenters: []
raw_file: "265-Why use custom tools - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/build-agent-with-custom-tools/2-why-use-custom-tools"
ingest_depth: full
---
# Why use custom tools
*learn-unit · Integrate custom tools into your agent · unit 2 of 7 · SRC-265*

## Source metadata
| Field | Value |
|---|---|
| Source ID | SRC-265 |
| Raw file | 265-Why use custom tools - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Integrate custom tools into your agent |
| Unit / episode | 2 of 7 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/build-agent-with-custom-tools/2-why-use-custom-tools |
| Teaching content | L210–249 of 279 |
| Content length | ~575 words |
| Capture quality | High; Learn unit text and scenario bullets are present. |
| Ingest depth | full |

## TL;DR
Custom tools in Microsoft Foundry Agent Service are positioned as a way to enhance productivity and tailor agents to specific business needs. (SRC-265 L216) They automate repetitive tasks, streamline use-case-specific workflows, improve accuracy and reduce human error. (SRC-265 L218–221) The source's central mechanism is agent-selected tool use: the agent decides whether a custom function is needed for the user prompt, calls it, receives the result and informs the user. (SRC-265 L222–226)

## Key claims
- Custom tools can improve operational efficiency and effectiveness by extending Foundry Agent Service for business-specific needs. (SRC-265 L216)
- The source names three benefits: enhanced productivity, improved accuracy and tailored solutions. (SRC-265 L218–221)
- Adding tools makes custom functionality available for the agent to use depending on how it decides to respond to the prompt. (SRC-265 L222)
- In the weather example, the agent determines it has access to a meteorological API tool, calls it, receives the weather report and informs the user. (SRC-265 L223–226)
- Custom tools are illustrated across customer support, inventory, healthcare scheduling, IT helpdesk and e-learning scenarios. (SRC-265 L229–248)

## How it works
The source presents custom-tool use as an agent-driven decision loop. (SRC-265 L222–226) A user asks for information, the agent determines that a tool can satisfy part of the task, the tool returns external information and the agent uses that result in its response. (SRC-265 L224–226) Business examples follow the same pattern: the tool bridges the agent to CRM, inventory, patient-record, ticketing, knowledge-base or LMS systems. (SRC-265 L230–247)

## Code and API patterns
No code is shown. The source gives an API-shaped example in which a custom weather tool retrieves data from an external meteorological service. (SRC-265 L222–226)

## Key terms
- **Enhanced productivity** — automating repetitive tasks and streamlining workflows. (SRC-265 L219)
- **Improved accuracy** — producing precise and consistent outputs to reduce human error. (SRC-265 L220)
- **Tailored solutions** — addressing specific business needs and optimizing processes. (SRC-265 L221)
- **Custom tool** — custom functionality available for agent use when the agent decides it is relevant to a prompt. (SRC-265 L222)

## Decision boundaries and exam cues
- **Inference:** Pick custom tools when the scenario requires the agent to use systems of record, operational systems or current external data instead of answering from model knowledge alone. (SRC-265 L222–247)
- **Inference:** The decisive clue is not the industry; it is the need for an agent action such as retrieving order history, processing refunds, checking stock, suggesting appointment slots or tracking tickets. (SRC-265 L230–247)
- **Inference:** Weather data is a useful exam cue for tool use because the source emphasizes changing external data that the agent should retrieve through a tool. (SRC-265 L222–226)

## Assessment items
Not covered by this source.

## Tensions, caveats and currency
The source uses broad business examples rather than implementation details; authentication, authorization, data privacy and approval controls are not discussed. (SRC-265 L229–248)

## Relation to other sources
- [[src-122-introduction-integrate-custom-tools-agent]] introduces custom tools as own-code, third-party-service or API extensions. (SRC-122 L217; SRC-265 L222–226)
- [[src-179-options-implementing-custom-tools]] names the tool types that can implement the scenarios in this source. (SRC-179 L218–222; SRC-265 L229–248)
- [[src-104-how-integrate-custom-tools]] adds registration and integration patterns after this motivation unit. (SRC-104 L216–249; SRC-265 L222–226)

## Connections
- [[agent-tools]] — custom tools are a subset of the tools an agent may decide to call.
- [[custom-tool-options]] — the source motivates why several custom-tool implementations matter.
- [[function-calling]] — callable functions are one way to expose the functionality described here.
- [[azure-functions]] — several scenarios could be implemented as external event-driven functions.
- [[tool-options-compared]] — the page supplies use cases for comparing built-in and custom tools.
- *Module units:* [[src-122-introduction-integrate-custom-tools-agent|1 Introduction]] · [[src-179-options-implementing-custom-tools|3 Options for implementing custom tools]] · [[src-104-how-integrate-custom-tools|4 How to integrate custom tools]] · [[src-58-exercise-build-agent-custom-tools|5 Exercise - Build an agent with custom tools]] · [[src-167-module-assessment-integrate-custom-tools-agent|6 Module assessment]] · [[src-213-summary-integrate-custom-tools-agent|7 Summary]] · [[src-110-integrate-custom-tools-agent-episode-8|episode 8]]

## Open questions
- The source does not say how the agent chooses among multiple custom tools with overlapping capabilities. (SRC-265 L222)
- The source does not describe how access to CRM, patient records or ticket systems is secured. (SRC-265 L230–244)

## Sources
- SRC-265 — raw file: [[265-Why use custom tools - Training - Microsoft Learn]]
