---
title: "Configure and Manage Agents in Visual Studio Code"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Covers configuring declarative prompt-based agents in VS Code through Agent Designer and synchronized YAML."
area: agents
source_ids: [SRC-20]
objectives: [G07, G08, G13]
tags: [agent-configuration, yaml, visual-studio-code, agent-designer, generation-parameters]
aliases: ["SRC-20"]
source_kind: learn-unit
module: "Develop AI agents with Microsoft Foundry and Visual Studio Code"
learning_path: "Develop AI agents on Azure"
unit: "6 of 11"
presenters: []
raw_file: "20-Configure and Manage Agents in Visual Studio Code - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/develop-ai-agents-azure-vs-code/6-configure-manage-agents"
ingest_depth: full
---

# Configure and Manage Agents in Visual Studio Code

*learn-unit · Develop AI agents with Microsoft Foundry and Visual Studio Code · unit 6 of 11 · SRC-20*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-20 |
| Raw file | 20-Configure and Manage Agents in Visual Studio Code - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Develop AI agents with Microsoft Foundry and Visual Studio Code |
| Unit / episode | 6 of 11 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/develop-ai-agents-azure-vs-code/6-configure-manage-agents |
| Teaching content | L214–260 of 290 |
| Content length | ~724 words |
| Capture quality | Medium-high; the YAML example body is missing after the Copy marker. |
| Ingest depth | full |

## TL;DR

This unit applies to declarative prompt-based agents and shows that VS Code configuration happens through a visual Agent Designer and direct YAML editing. (SRC-20 L218–222) Configurable properties include name, model, description, system instructions, agent ID, temperature, and Top P, while YAML supports version control, templates, review, and automation. (SRC-20 L223–260)

## Key claims

- The described workflow applies to declarative prompt-based agents; hosted agents use code and workflow agents use a different YAML schema. (SRC-20 L220–222)
- Agent Designer configures core properties that define agent behavior and performance. (SRC-20 L223–224)
- Essential properties include agent name, model selection, description, system instructions, and agent ID. (SRC-20 L225–232)
- Temperature controls response creativity and randomness. (SRC-20 L233–237)
- Top P controls diversity by limiting vocabulary choices. (SRC-20 L235)
- Model settings remain synchronized across Designer and YAML views. (SRC-20 L236)
- YAML contains metadata, model configuration, instructions, and tools sections. (SRC-20 L243)
- YAML editing supports version control, bulk updates, templates, code review, and automation. (SRC-20 L249–256)
- Best practices include committing YAML, descriptive names and tags, documenting complex instructions, testing after every change, starting simple, and focused instructions. (SRC-20 L257–260)

## How it works

VS Code provides two synchronized views of the same declarative agent: a visual Agent Designer for core settings and a YAML file for precise text editing. (SRC-20 L223–240) YAML makes configuration reviewable and automatable, while the integrated playground tests behavior after changes. (SRC-20 L249–260)

## Code and API patterns

The source says a complete YAML example is provided, but the capture contains only `YAML` and `Copy` markers and not the snippet. (SRC-20 L237–242) The source still describes the YAML sections as metadata, model configuration, instructions, and tools. (SRC-20 L243)

## Key terms

- **System instructions** — the configuration that defines agent behavior, personality, response style, and role. (SRC-20 L230–231)
- **Agent ID** — an extension-generated unique identifier used when calling the agent through APIs. (SRC-20 L231–232)
- **Temperature** — a parameter controlling creativity and randomness. (SRC-20 L233–237)
- **Top P** — a parameter controlling vocabulary diversity during generation. (SRC-20 L235)

## Decision boundaries and exam cues

- **Inference:** If the question specifies hosted agents, do not apply this declarative Agent Designer/YAML workflow because hosted agents are configured through code. (SRC-20 L220–222)
- **Inference:** Use lower temperature for consistent structured tasks and higher temperature for creative varied responses. (SRC-20 L233–237)
- **Inference:** Choose YAML editing when the scenario values Git history, code review, templates, bulk changes, or automation. (SRC-20 L249–256)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- The captured YAML example is incomplete, so exact schema keys must come from another source or current documentation before implementation. (SRC-20 L237–243)
- **Stale-risk:** Parameter ranges and defaults may need rechecking against current model behavior. (SRC-20 L233–239)

## Relation to other sources

- [[src-190-set-up-visual-studio-code-agent-development]] sets up the extension this unit uses. (SRC-190 L218–268; SRC-20 L218–260)
- [[src-91-extend-agent-capabilities-tools]] expands the tools section that this unit says appears in YAML. (SRC-20 L247–248; SRC-91 L218–297)
- [[src-223-test-deploy-integrate-agents]] uses testing after configuration changes as a step toward deployment. (SRC-20 L257–260; SRC-223 L218–294)

## Connections

- [[foundry-toolkit-for-vs-code]] — the configuration surface for Agent Designer and YAML. (SRC-20 L218–224)
- [[generation-parameters]] — temperature and Top P are explained here. (SRC-20 L233–240)
- [[prompt-engineering]] — system instructions shape behavior and response style. (SRC-20 L230–231)
- [[agent-testing-and-evaluation]] — the source recommends testing after each change. (SRC-20 L257–260)
- *Module units:* [[src-129-introduction-develop-ai-agents-microsoft-foundry-visual-studio-code|1 Introduction]] · [[src-230-understand-ai-agents-microsoft-foundry-agent-service|2 Understand AI Agents and Microsoft Foundry Agent Service]] · [[src-84-explore-development-approaches|3 Explore Development Approaches]] · [[src-14-build-first-agent-microsoft-foundry|4 Build Your First Agent in Microsoft Foundry]] · [[src-190-set-up-visual-studio-code-agent-development|5 Set Up Visual Studio Code for Agent Development]] · [[src-91-extend-agent-capabilities-tools|7 Extend Agent Capabilities with Tools]] · [[src-223-test-deploy-integrate-agents|8 Test, Deploy, and Integrate Agents]] · [[src-59-exercise-build-deploy-ai-agent|9 Exercise - Build and Deploy an AI Agent]] · [[src-142-knowledge-check-develop-ai-agents-microsoft-foundry-visual-studio|10 Knowledge Check]] · [[src-212-summary-develop-ai-agents-microsoft-foundry-visual-studio-code|11 Summary]] · [[src-41-develop-ai-agents-microsoft-foundry-visual-studio-code-episode|episode 7]]

## Open questions

- The unit does not expose the actual YAML snippet, hosted-agent code configuration, or workflow-agent YAML schema. (SRC-20 L220–248)

## Sources

- SRC-20 — raw file: [[20-Configure and Manage Agents in Visual Studio Code - Training - Microsoft Learn]]
