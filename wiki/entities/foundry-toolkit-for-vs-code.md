---
title: "Foundry Toolkit for Visual Studio Code"
type: entity
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "VS Code extension for browsing Foundry projects, configuring agents in Designer/YAML, testing in playgrounds, and deploying hosted agents."
area: agents
source_ids: [SRC-20, SRC-51, SRC-84, SRC-190]
objectives: [P07, G07]
tags: ["tool"]
aliases: ["Microsoft Foundry VS Code extension", "Microsoft Foundry extension for Visual Studio Code", "Foundry extension for Visual Studio Code", "Foundry Toolkit extension for Visual Studio Code"]
objective_gaps: []
---

# Foundry Toolkit for Visual Studio Code

## Summary

The Foundry Toolkit for Visual Studio Code is the developer-editor surface for Microsoft Foundry work: it helps browse project resources, deploy models, test models and agents, configure declarative and hosted agents through visual designer and YAML files, and generate integration code (SRC-51 L221–227). In the agent module, the same tool is called the Microsoft Foundry extension for Visual Studio Code and is described as bringing Foundry Agent Service capabilities into the editor (SRC-190 L220–222).

## What it is

The extension connects VS Code to a Microsoft Foundry project and exposes resources such as deployed models, declarative agents, hosted agents, connections, and vector stores (SRC-190 L220–248). It is designed for developers who prefer working in a familiar code editor and want tight integration with application code and development workflow (SRC-84 L232–257).

## What the sources say

- SRC-51 introduces the Foundry Toolkit extension for VS Code as a way to simplify key workflow tasks for Foundry-based generative AI applications (SRC-51 L221–227).
- SRC-84 says the Microsoft Foundry extension for VS Code organizes capabilities into Resources, Tools, and Help/Feedback, including resources, playgrounds, local visualization, YAML editing, and hosted-agent deployment (SRC-84 L233–248).
- SRC-190 gives installation and connection steps: install the Microsoft Foundry extension from the VS Code Marketplace, sign in to Azure, expand the Foundry section under an Azure subscription, right-click a project, and open it in the Foundry extension (SRC-190 L220–238).
- SRC-20 describes configuration through Agent Designer and direct YAML editing for declarative prompt-based agents (SRC-20 L218–269).

## Capabilities and components

The Resources section includes model deployments, declarative agents, hosted agents, connections, and vector stores (SRC-84 L235–240; SRC-190 L220–248). The Tools section includes model catalog access, model playground, agent playgrounds, local visualizer, and deployed hosted-agent support (SRC-84 L241–246; SRC-190 L239–248). Agent development features include a visual Agent Designer, direct YAML editing, real-time YAML validation, testing in integrated playgrounds, and generated integration code (SRC-20 L218–269; SRC-84 L248–256).

## How to use it

Install the extension from the VS Code Extensions pane by searching for Foundry, then sign in through the Azure Resources pane and open a Microsoft Foundry project in the extension (SRC-190 L226–238). Before working with agents, deploy a model in the project if needed; agents require deployed models and the deployment becomes available in agent configuration dropdowns (SRC-190 L239–252). Agents are often created in the Foundry portal and then managed in VS Code, and saved changes can be written back to Foundry (SRC-190 L253–260).

For configuration, open a declarative agent in Agent Designer, set name, model, description, system instructions, and model parameters such as temperature and top-p, then use the synchronized YAML file for precise edits (SRC-20 L225–256). Direct YAML editing supports version control, bulk updates, templates, code review, and automation (SRC-20 L257–269).

## Decision boundaries

- Portal boundary: choose the VS Code extension for Git-tracked YAML, developer-centric workflow, local/code-adjacent iteration, or integration with app code (SRC-84 L233–280). Choose the portal for visual configuration, centralized management, stakeholder collaboration, or quick prototyping (SRC-84 L220–232).
- SDK/code-only boundary: choose the extension when you need to configure, test, and deploy agents while staying close to source files and generated integration code (SRC-51 L221–227; SRC-84 L253–257). **Inference:** use SDK-only workflows when automation or application code should own the entire lifecycle without editor interaction.
- Hosted-agent boundary: the extension can deploy hosted agents and show hosted agents in resources (SRC-84 L238; SRC-84 L246; SRC-190 L220–248). Hosted-agent behavior itself is configured through code, not the declarative prompt-agent YAML workflow (SRC-20 L218–224).

## Naming and currency

**Stale-risk:** Source wording varies. SRC-51 calls it the “Foundry Toolkit extension for Visual Studio Code” (SRC-51 L221–227). Later agent-development pages call it the “Microsoft Foundry extension for Visual Studio Code” (SRC-190 L220–222; SRC-84 L232). This page uses the registry title “Foundry Toolkit for Visual Studio Code” and keeps the other names as aliases.

## Appearances in the corpus

The extension appears in the general developer-tools unit as part of the Foundry application development toolchain (SRC-51 L221–227). It appears in the agent-development module as a full agent configuration, testing, and deployment surface for Microsoft Foundry Agent Service (SRC-84 L233–280; SRC-190 L220–260; SRC-20 L218–269).

## Connections

- [[foundry-agent-service]] — the extension configures and tests agents backed by this service.
- [[foundry-agent-types]] — resources include declarative and hosted agents.
- [[development-tools-and-approaches]] — portal, SDK, REST, CLI, and VS Code choices.
- [[agent-tools]] — tools can be added through visual design or YAML.
- [[model-catalog]] — the extension exposes model catalog and deployment features.
- [[src-190-set-up-visual-studio-code-agent-development]] — installation and connection steps.
- [[src-20-configure-manage-agents-visual-studio-code]] — Agent Designer and YAML configuration.
- *Also linked from:* [[generation-parameters]] · [[microsoft-365-agents-toolkit]] · [[model-context-protocol]] · [[overview]]

## Sources

- SRC-20 — [[src-20-configure-manage-agents-visual-studio-code]] — Agent Designer, properties, parameters, and YAML workflow.
- SRC-51 — [[src-51-developer-tools-sdks]] — general Foundry Toolkit extension capabilities.
- SRC-84 — [[src-84-explore-development-approaches]] — portal vs VS Code development approach.
- SRC-190 — [[src-190-set-up-visual-studio-code-agent-development]] — installation, Azure connection, model deployment, and agent management.
