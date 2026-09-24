---
title: "Build agent-driven workflows using Microsoft Foundry - AI-103 - Episode 12"
type: source
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Episode walkthrough of Foundry workflows, patterns, executors, edges, portal demo, structured outputs, branching, and code invocation."
area: orchestration
source_ids: [SRC-15]
tags: [episode, workflows, microsoft-foundry, agents, code]
aliases: ["SRC-15"]
source_kind: episode
module: "Build agent-driven workflows using Microsoft Foundry"
learning_path: null
unit: null
presenters: ["ROB FOULKROD"]
raw_file: "15-Build agent-driven workflows using Microsoft Foundry - AI-103 - Episode 12.md"
url: "https://www.youtube.com/watch?v=ChGunV55YiU"
ingest_depth: full
---
# Build agent-driven workflows using Microsoft Foundry - AI-103 - Episode 12
*episode · Build agent-driven workflows using Microsoft Foundry · SRC-15*

## Source metadata
| Field | Value |
|---|---|
| Source ID | SRC-15 |
| Raw file | 15-Build agent-driven workflows using Microsoft Foundry - AI-103 - Episode 12.md |
| Kind | episode |
| Learning path | null |
| Module | Build agent-driven workflows using Microsoft Foundry |
| Unit / episode | Episode 12 |
| Presenter(s) | ROB FOULKROD |
| URL | https://www.youtube.com/watch?v=ChGunV55YiU |
| Teaching content | L3–1050 of 1050 |
| Content length | ~4806 words |
| Capture quality | Auto-captioned transcript with line breaks and likely caption errors. |
| Ingest depth | full |

## TL;DR
Rob Foulkrod presents workflows as coordinated, repeatable automation that combines agents with logic for multi-step business problems (SRC-15 L4–17). The episode covers workflow concepts, common patterns, portal creation, agent insertion, maintenance, and code invocation, then demos a Contoso Pay support triage workflow with triage and resolution agents (SRC-15 L18–30; SRC-15 L405–520; SRC-15 L700–835).

## Key claims
- Workflows become useful when agent logic needs a coordinated and repeatable structure for multi-step business problems (SRC-15 L4–17).
- Workflows provide a graphical surface with nodes and edges, similar in feel to Logic Apps or Power Automate (SRC-15 L35–56).
- The presenter warns against stuffing too much conditional logic into a single agent because agents are not logic engines (SRC-15 L60–100).
- Existing agents can be included in workflows; the presenter says there is no special workflow-agent type to create (SRC-15 L101–116).
- Workflow patterns include sequential, human-in-the-loop, group chat, fan-out, and fan-in structures (SRC-15 L123–190; SRC-15 L250–263).
- Nodes are described as executors that receive input and pass output, while edges connect systems and can be direct, conditional, switch, fan-out, or fan-in (SRC-15 L195–263).
- The demo creates support tickets, loops over them, uses a triage agent with structured JSON output, branches on confidence and category, escalates billing to humans, and sends other confident issues to a resolution agent (SRC-15 L335–390; SRC-15 L420–520; SRC-15 L525–785).
- The code demo invokes the saved workflow by project endpoint, project client, conversation, `responses.create`, `extra_body`, and streaming events (SRC-15 L855–930).

## How it works
The episode's conceptual model is a graph. Executors do work, such as setting a variable or calling an agent, and edges route data and execution between executors (SRC-15 L195–246). Direct edges always move to the next node, while conditional and switch edges choose different routes based on decisions (SRC-15 L220–249). The demo then applies that model: it sets a local `Support Tickets` array, uses a For-each loop, invokes a triage agent, forces a JSON schema with issue, category, and confidence, stores text and JSON outputs, branches at a confidence threshold, escalates billing, and invokes a resolution agent for other confident cases (SRC-15 L335–390; SRC-15 L420–785).

## Segment guide
- L4–30 — Opening and agenda: why workflows matter, what the session will cover, and the plan to build an agent-driven workflow (SRC-15 L4–30).
- L35–116 — Conceptual motivation: workflows look like graphical node-and-edge systems; avoid overloading agent instructions with logic; existing agents can be used in workflows (SRC-15 L35–116).
- L123–190 — Patterns: sequential, human-in-the-loop, and group chat patterns (SRC-15 L123–190).
- L195–263 — Execution model: nodes as executors and edges as direct, conditional, switch, fan-out, and fan-in routing (SRC-15 L195–263).
- L265–285 — Events and demo setup: developers can listen for workflow started, output created, and error events before the portal build begins (SRC-15 L265–285).
- L285–420 — Portal start: create a workflow, set layout, add a variable, name the workflow, and create a For-each loop over support tickets (SRC-15 L285–420).
- L455–600 — Triage agent: create an agent, write classification instructions, define structured JSON output, and store text and JSON results in variables (SRC-15 L455–600).
- L605–785 — Control flow: branch on confidence, request more details for low confidence, branch billing to a human, and route other issues to a resolution agent (SRC-15 L605–785).
- L790–835 — Preview result: run the workflow over three tickets and observe technical, general, and billing outcomes (SRC-15 L790–835).
- L840–977 — Code invocation: use the project endpoint and project client, start a conversation, call `responses.create`, stream events, print outputs, and delete the conversation (SRC-15 L840–977).
- L980–1050 — Knowledge checks and wrap-up: agent node, For-Each, executors, edges, events, and continuing learning (SRC-15 L980–1050).

## Code and API patterns
The episode's code path uses a project endpoint from environment variables, default credential, project client, AI client, workflow name, conversation, `responses.create`, `extra_body` with an agent reference to the workflow, streaming, output parsing, and conversation deletion (SRC-15 L855–930). The presenter emphasizes that server-side agentic workflow logic lets the client code stay straightforward while invoking a non-trivial workflow behind the scenes (SRC-15 L970–977).

## Key terms
- Executor: a workflow node that has its own abilities, receives input, and can pass output onward (SRC-15 L195–216).
- Edge: a connection that routes execution and data between nodes (SRC-15 L220–246).
- Fan-out and fan-in: patterns where parallel work branches out and later collects results (SRC-15 L250–263).
- Workflow action event: an event developers can listen to while the workflow runs (SRC-15 L265–274).

## Decision boundaries and exam cues
- **Inference:** If a scenario includes brittle prompt instructions such as always doing conditional logic inside one agent, workflows are a better fit because the presenter says agents are not logic engines (SRC-15 L60–100).
- **Inference:** If the scenario asks to process a list of tickets, use a For-each loop rather than duplicating nodes (SRC-15 L415–445; SRC-15 L985–991).
- **Inference:** If a scenario asks for predictable branching from an agent result, use structured JSON output stored in variables (SRC-15 L525–600; SRC-15 L615–685).
- **Inference:** If a scenario asks for application integration, invoke the saved workflow from code through a project client, conversation, Responses API call, and workflow agent reference (SRC-15 L855–930).

## Assessment items
The episode asks which node invokes an AI agent and answers that it is an agent node (SRC-15 L980–985). It asks which node handles multiple items without duplicating nodes and answers `For-Each` (SRC-15 L985–991).

## Tensions, caveats and currency
- **Stale-risk:** The presenter notes that workflows and orchestration patterns are still maturing (SRC-15 L1035–1043).
- The transcript is auto-captioned, so wording and product labels should be treated with medium confidence (SRC-15 L3–1050).
- The presenter says there is no special workflow-agent type to create, while the portal has a separate Workflows tab inside the agents section; this is a terminology nuance rather than a contradiction (SRC-15 L290–301; SRC-15 L101–116).

## Relation to other sources
- [[src-118-introduction-build-agent-driven-workflows-microsoft-foundry]] is the Learn introduction for the same module agenda (SRC-118 L218–226; SRC-15 L18–30).
- [[src-105-identify-workflow-patterns]] teaches sequential, human-in-the-loop, and group chat patterns in text form (SRC-105 L221–224; SRC-15 L123–190).
- [[src-247-workflows-code]] provides a compact Learn version of the code invocation pattern shown in the episode (SRC-247 L15–27; SRC-15 L855–930).

## Connections
- [[foundry-workflows]] — main topic of the episode (SRC-15 L4–30).
- [[workflow-patterns]] — patterns are explicitly explained and demonstrated (SRC-15 L123–190; SRC-15 L250–263).
- [[foundry-sdk]] — code invocation uses project client patterns (SRC-15 L855–930).
- [[responses-api]] — the episode uses `responses.create` for workflow invocation (SRC-15 L900–916).
- [[human-in-the-loop-approval]] — the demo escalates billing and low-confidence cases to humans or more detail (SRC-15 L640–655; SRC-15 L690–699).
- [[power-fx]] — the demo uses workflow conditions and variables, though the transcript does not name Power Fx in the cited demo lines (SRC-15 L615–685).
- *Module units:* [[src-118-introduction-build-agent-driven-workflows-microsoft-foundry|1 Introduction]] · [[src-238-understand-workflows|2 Understand workflows]] · [[src-105-identify-workflow-patterns|3 Identify workflow patterns]] · [[src-36-create-workflows-microsoft-foundry|4 Create workflows in Microsoft Foundry]] · [[src-3-add-agents-workflow|5 Add agents to a workflow]] · [[src-11-apply-power-fx-workflows|6 Apply Power Fx in workflows]] · [[src-151-maintain-workflows-microsoft-foundry|7 Maintain workflows in Microsoft Foundry]] · [[src-247-workflows-code|8 Use Workflows in Code]] · [[src-66-exercise-create-agent-driven-workflow|9 Exercise - Create an agent-driven workflow]] · [[src-171-module-assessment-build-agent-driven-workflows-microsoft-foundry|10 Module assessment]] · [[src-219-summary-build-agent-driven-workflows-microsoft-foundry|11 Summary]]

## Open questions
- The episode does not provide the full source files or complete formatted code listing (SRC-15 L840–977).
- The transcript does not specify the exact event schema beyond examples of events developers can observe (SRC-15 L265–274).

## Sources
- SRC-15 — raw file: [[15-Build agent-driven workflows using Microsoft Foundry - AI-103 - Episode 12]]
