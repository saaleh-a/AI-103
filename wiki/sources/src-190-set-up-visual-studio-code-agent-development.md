---
title: "Set Up Visual Studio Code for Agent Development"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains installing the Microsoft Foundry VS Code extension, connecting it to Azure and a project, deploying a model, and managing agents."
area: agents
source_ids: [SRC-190]
objectives: [G07, G08]
tags: [visual-studio-code, foundry-extension, agent-development, model-deployments]
aliases: ["SRC-190"]
source_kind: learn-unit
module: "Develop AI agents with Microsoft Foundry and Visual Studio Code"
learning_path: "Develop AI agents on Azure"
unit: "5 of 11"
presenters: []
raw_file: "190-Set Up Visual Studio Code for Agent Development - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/develop-ai-agents-azure-vs-code/5-set-up-vs-code"
ingest_depth: full
---

# Set Up Visual Studio Code for Agent Development

*learn-unit · Develop AI agents with Microsoft Foundry and Visual Studio Code · unit 5 of 11 · SRC-190*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-190 |
| Raw file | 190-Set Up Visual Studio Code for Agent Development - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | Develop AI agents on Azure |
| Module | Develop AI agents with Microsoft Foundry and Visual Studio Code |
| Unit / episode | 5 of 11 |
| Presenter(s) | None |
| URL | https://learn.microsoft.com/en-gb/training/modules/develop-ai-agents-azure-vs-code/5-set-up-vs-code |
| Teaching content | L214–268 of 298 |
| Content length | ~654 words |
| Capture quality | High; installation and connection steps are present. |
| Ingest depth | full |

## TL;DR

The Microsoft Foundry extension turns Visual Studio Code into an environment for building, testing, and deploying agents. (SRC-190 L218–221) The setup flow is install the extension, sign in through Azure Resources, open a Foundry project in the extension, ensure a model deployment exists, and then manage agents across projects. (SRC-190 L223–268)

## Key claims

- The extension provides direct access to Microsoft Foundry Agent Service capabilities inside Visual Studio Code. (SRC-190 L220–221)
- The extension groups features into Resources, Tools, and Help and Feedback. (SRC-190 L222)
- Installation uses the VS Code Extensions pane, a marketplace search for Foundry, and the Microsoft Foundry extension result. (SRC-190 L224–231)
- Connecting to Azure uses the Azure icon, Azure Resources pane, subscription tree, Foundry section, and Open in Foundry Extension action. (SRC-190 L233–241)
- The extension displays project resources including agents, model deployments, connections, and vector stores. (SRC-190 L242–243)
- Agents require deployed AI models to function. (SRC-190 L245–246)
- The model deployment flow uses Resources, Model deployments, plus icon, model choice, deployment name, model version, capacity settings, and Deploy. (SRC-190 L247–256)
- Portal-created agents appear automatically in the extension and VS Code changes can be saved directly to Foundry. (SRC-190 L258–263)

## How it works

The extension connects VS Code to an Azure account and Foundry project, then surfaces deployed models, agents, connections, and vector stores in the editor. (SRC-190 L233–243) A model deployment must exist before the agent can function and appear in configuration dropdowns. (SRC-190 L245–257)

## Code and API patterns

Not covered by this source. (SRC-190 L218–268)

## Key terms

- **Resources** — the extension area for deployed models, agents, connections, and vector stores. (SRC-190 L222; SRC-190 L242–243)
- **Model deployments** — required deployed AI models that become available in agent configuration dropdowns. (SRC-190 L245–257)
- **Capacity settings** — deployment settings configured for throughput based on need. (SRC-190 L252–255)
- **Archive unused agents** — an organization action for keeping the workspace manageable. (SRC-190 L264–267)

## Decision boundaries and exam cues

- **Inference:** Choose the Microsoft Foundry extension when the scenario asks for agent development without leaving VS Code. (SRC-190 L218–221)
- **Inference:** If an agent cannot be configured with a model, verify model deployment first. (SRC-190 L245–257)
- **Inference:** Use the portal-to-VS-Code flow when the agent already exists in Foundry but needs code-editor management. (SRC-190 L258–263)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** Example models such as GPT-4o and GPT-4 are named as available choices, but model availability changes. (SRC-190 L250–252)
- The source names the extension Microsoft Foundry for Visual Studio Code; related corpus pages may use adjacent toolkit names. (SRC-190 L220–222)

## Relation to other sources

- [[src-84-explore-development-approaches]] motivates the VS Code approach that this unit sets up. (SRC-84 L232–256; SRC-190 L218–268)
- [[src-20-configure-manage-agents-visual-studio-code]] assumes this setup and then configures declarative prompt-based agents. (SRC-190 L258–263; SRC-20 L218–260)
- [[src-41-develop-ai-agents-microsoft-foundry-visual-studio-code-episode]] demonstrates the extension seeing a portal-created IT support agent. (SRC-190 L258–263; SRC-41 L620–700)

## Connections

- [[foundry-toolkit-for-vs-code]] — the extension is the source's central subject. (SRC-190 L220–222)
- [[microsoft-foundry]] — the extension connects to Foundry projects and resources. (SRC-190 L233–243)
- [[model-deployment-types]] — model deployments are required before agents function. (SRC-190 L245–257)
- [[development-tools-and-approaches]] — this unit is the setup branch for the VS Code approach. (SRC-190 L218–268)
- *Module units:* [[src-129-introduction-develop-ai-agents-microsoft-foundry-visual-studio-code|1 Introduction]] · [[src-230-understand-ai-agents-microsoft-foundry-agent-service|2 Understand AI Agents and Microsoft Foundry Agent Service]] · [[src-84-explore-development-approaches|3 Explore Development Approaches]] · [[src-14-build-first-agent-microsoft-foundry|4 Build Your First Agent in Microsoft Foundry]] · [[src-20-configure-manage-agents-visual-studio-code|6 Configure and Manage Agents in Visual Studio Code]] · [[src-91-extend-agent-capabilities-tools|7 Extend Agent Capabilities with Tools]] · [[src-223-test-deploy-integrate-agents|8 Test, Deploy, and Integrate Agents]] · [[src-59-exercise-build-deploy-ai-agent|9 Exercise - Build and Deploy an AI Agent]] · [[src-142-knowledge-check-develop-ai-agents-microsoft-foundry-visual-studio|10 Knowledge Check]] · [[src-212-summary-develop-ai-agents-microsoft-foundry-visual-studio-code|11 Summary]] · [[src-41-develop-ai-agents-microsoft-foundry-visual-studio-code-episode|episode 7]]

## Open questions

- The unit does not describe authentication failure troubleshooting, exact extension version, or generated file formats. (SRC-190 L233–268)

## Sources

- SRC-190 — raw file: [[190-Set Up Visual Studio Code for Agent Development - Training - Microsoft Learn]]
