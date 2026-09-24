---
title: "Explore Development Approaches"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Compares Foundry portal and VS Code development approaches, their workflows, required resources, and optional services for agents."
area: agents
source_ids: [SRC-84]
objectives: []
tags: [development-approaches, foundry-portal, visual-studio-code, agent-development]
aliases: ["SRC-84"]
source_kind: learn-unit
module: "Develop AI agents with Microsoft Foundry and Visual Studio Code"
learning_path: "Develop AI agents on Azure"
unit: "3 of 11"
presenters: []
raw_file: "84-Explore Development Approaches - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/develop-ai-agents-azure-vs-code/3-explore-development-approaches"
ingest_depth: full
---

# Explore Development Approaches

*learn-unit · Develop AI agents with Microsoft Foundry and Visual Studio Code · unit 3 of 11 · SRC-84*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-84 |
| Raw file | 84-Explore Development Approaches - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Develop AI agents with Microsoft Foundry and Visual Studio Code |
| Unit / episode | 3 of 11 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/develop-ai-agents-azure-vs-code/3-explore-development-approaches |
| Teaching content | L214–284 of 314 |
| Content length | ~917 words |
| Capture quality | High; comparison content and workflow are present. |
| Ingest depth | full |

## TL;DR

Microsoft Foundry Agent Service supports both visual portal development and developer-centric Visual Studio Code development. (SRC-84 L218–256) The portal fits quick prototyping, visual configuration, centralized management, collaboration, and dashboard oversight, while VS Code fits application-code integration, Git version control, rapid iteration, YAML editing, and local development. (SRC-84 L221–256)

## Key claims

- The Foundry portal is a web interface for creating and managing agents without writing code. (SRC-84 L220–221)
- Portal development is recommended for quick prototyping, visual configuration, centralized management, team collaboration, and resource oversight. (SRC-84 L222–229)
- The VS Code extension organizes capabilities into Resources, Tools, and Help and Feedback. (SRC-84 L233–248)
- VS Code resources include model deployments, declarative agents, hosted agents, connections, and vector stores. (SRC-84 L235–241)
- VS Code tools include model catalog, model playground, agent playgrounds, local visualizer, and hosted-agent deployment. (SRC-84 L242–247)
- The VS Code extension also provides Agent Designer, code generation, and direct YAML editing. (SRC-84 L248)
- A typical workflow connects to a project, creates an agent, configures instructions, adds tools, tests, iterates, deploys, and integrates into applications. (SRC-84 L258–266)
- Required resources are a Microsoft Foundry project and model deployments; optional services include Azure AI Search, Azure Storage, Azure Key Vault, and Azure Functions. (SRC-84 L267–277)

## How it works

The source treats portal and VS Code as alternate interfaces over the same agent-development lifecycle rather than separate capability sets. (SRC-84 L258–284) Both approaches require the same underlying Microsoft Foundry project and model deployments. (SRC-84 L267–277)

## Code and API patterns

The source does not show code, but it names direct YAML configuration editing, code generation for app integration, and Git-tracked agent configuration as VS Code capabilities. (SRC-84 L248–256)

## Key terms

- **Foundry portal development** — web-based, no-code agent creation and management. (SRC-84 L220–221)
- **Microsoft Foundry extension for Visual Studio Code** — the developer extension exposing Resources, Tools, Agent Designer, code generation, and YAML editing. (SRC-84 L233–249)
- **Microsoft Foundry project** — the project that organizes agents, models, and related assets. (SRC-84 L267–271)
- **Model deployments** — deployed models such as GPT-4.1 or Claude Sonnet 4.6 that power agents. (SRC-84 L271)

## Decision boundaries and exam cues

- **Inference:** Choose the Foundry portal when a scenario emphasizes no-code visual configuration, centralized management, stakeholder collaboration, or quick prototyping. (SRC-84 L220–231; SRC-84 L280–282)
- **Inference:** Choose Visual Studio Code when a scenario emphasizes developer workflows, application-code integration, Git version control, YAML precision, local development, or production deployment. (SRC-84 L232–256; SRC-84 L282–284)
- **Inference:** Do not choose optional Azure services as prerequisites for getting started; the source says they integrate as needed but are not required to start. (SRC-84 L271–277)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** Example model names such as GPT-4.1 and Claude Sonnet 4.6 are platform-currency details. (SRC-84 L271)
- The source says both portal and VS Code support the same workflow and differ primarily in interface style. (SRC-84 L258–284)

## Relation to other sources

- [[src-14-build-first-agent-microsoft-foundry]] expands the portal path by walking through agent creation. (SRC-84 L220–231; SRC-14 L218–246)
- [[src-190-set-up-visual-studio-code-agent-development]] expands the VS Code setup path. (SRC-84 L232–256; SRC-190 L218–268)
- [[src-20-configure-manage-agents-visual-studio-code]] expands YAML and Agent Designer configuration. (SRC-84 L248–256; SRC-20 L218–260)

## Connections

- [[development-tools-and-approaches]] — this source is the direct portal-versus-VS-Code comparison. (SRC-84 L218–284)
- [[microsoft-foundry]] — portal development starts from the Foundry project. (SRC-84 L220–231; SRC-84 L267–271)
- [[foundry-toolkit-for-vs-code]] — the VS Code extension is the main developer tool described. (SRC-84 L232–256)
- [[agent-building-options-compared]] — this source supplies the portal and VS Code side of that comparison. (SRC-84 L279–284)
- *Module units:* [[src-129-introduction-develop-ai-agents-microsoft-foundry-visual-studio-code|1 Introduction]] · [[src-230-understand-ai-agents-microsoft-foundry-agent-service|2 Understand AI Agents and Microsoft Foundry Agent Service]] · [[src-14-build-first-agent-microsoft-foundry|4 Build Your First Agent in Microsoft Foundry]] · [[src-190-set-up-visual-studio-code-agent-development|5 Set Up Visual Studio Code for Agent Development]] · [[src-20-configure-manage-agents-visual-studio-code|6 Configure and Manage Agents in Visual Studio Code]] · [[src-91-extend-agent-capabilities-tools|7 Extend Agent Capabilities with Tools]] · [[src-223-test-deploy-integrate-agents|8 Test, Deploy, and Integrate Agents]] · [[src-59-exercise-build-deploy-ai-agent|9 Exercise - Build and Deploy an AI Agent]] · [[src-142-knowledge-check-develop-ai-agents-microsoft-foundry-visual-studio|10 Knowledge Check]] · [[src-212-summary-develop-ai-agents-microsoft-foundry-visual-studio-code|11 Summary]] · [[src-41-develop-ai-agents-microsoft-foundry-visual-studio-code-episode|episode 7]]

## Open questions

- The unit names the workflow and optional services but does not show exact deployment commands, YAML schema, or integration code. (SRC-84 L248–277)

## Sources

- SRC-84 — raw file: [[84-Explore Development Approaches - Training - Microsoft Learn]]
