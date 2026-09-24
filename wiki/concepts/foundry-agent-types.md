---
title: "Foundry agent types"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Foundry distinguishes declarative prompt agents, declarative workflow agents, and hosted agents by configuration style, orchestration needs, and code ownership."
area: agents
source_ids: [SRC-14, SRC-20, SRC-84, SRC-190, SRC-212, SRC-230]
objectives: [G10]
tags: []
aliases: ["prompt agents", "workflow agents", "hosted agents", "declarative agents", "prompt-based agents"]
objective_gaps: []
---

# Foundry agent types

## Summary

Microsoft Foundry supports declarative agents and hosted agents. Declarative agents include prompt-based agents and workflow agents; hosted agents are containerized agents created and deployed in code but hosted by the Foundry platform (SRC-230 L259–263). The module summary also contrasts declarative agents configured through visual designers and YAML with hosted agents created and deployed through code (SRC-212 L217–219).

## The problem it solves

Teams need different levels of control. A quick assistant can be configured through instructions and tools, a complex process may need a multi-agent YAML workflow, and custom logic may need a code-deployed container while still using managed Foundry infrastructure (SRC-230 L259–263; SRC-84 L258–280).

## Mental model

**Inference:** The type boundary is about where the agent’s behavior is authored. Prompt agents place most behavior in model instructions and tool configuration. Workflow agents place behavior in an explicit multi-agent orchestration definition. Hosted agents place behavior in code and deployment artifacts while Foundry manages the hosting substrate.

## What the sources say

- SRC-230 says prompt-based declarative agents are single agents configured with a model, instructions, tools, and prompts, and are the most common type and module focus (SRC-230 L260–262).
- SRC-230 says workflow agents are multi-agent orchestrations defined in YAML for complex collaboration (SRC-230 L262).
- SRC-230 says hosted agents are containerized agents created and deployed in code, giving full control over logic and execution while the platform manages infrastructure (SRC-230 L263).
- SRC-20 notes that its VS Code configuration workflow applies to declarative prompt-based agents, while hosted agents are configured through code and workflow agents use a different YAML schema (SRC-20 L218–224).
- SRC-190 says the VS Code extension Resources section includes declarative agents and hosted agents, and its Tools section includes deployment of hosted agents (SRC-190 L220–248).

## How it works in Azure

Prompt agents can be configured in the Foundry portal or Visual Studio Code by selecting a deployed model, writing instructions, tuning parameters, and adding tools (SRC-14 L225–244; SRC-20 L225–247). Workflow agents use YAML for multi-agent orchestration, and hosted agents are deployed as containerized code through the Foundry platform (SRC-20 L218–224; SRC-190 L239–248).

## Code and configuration

Declarative prompt agents have YAML configuration with metadata, model configuration, instructions, and tools; the VS Code extension keeps Designer and YAML settings synchronized (SRC-20 L248–269). Direct YAML editing supports version control, bulk updates, templates, code review, and automation (SRC-20 L257–269). Hosted agents are configured through code rather than the declarative-agent YAML described in that unit (SRC-20 L218–224).

## Decision boundaries

- Prompt-based declarative agent: choose it for a single assistant with instructions, a model, and tools; it is a single configured agent and the most common starting point (SRC-230 L260–262).
- Workflow agent: choose it when multiple agents collaborate in an explicit process; the corpus defines workflow agents as multi-agent orchestrations in YAML (SRC-230 L262).
- Hosted agent: choose it when you need full control over logic and execution in code; hosted agents are containerized and created/deployed in code while Foundry manages infrastructure (SRC-230 L263).

**Inference:** If the scenario emphasizes visual configuration or YAML for a single agent, think prompt agent. If it emphasizes orchestration among several agents, think workflow agent. If it emphasizes custom runtime logic or containerized code, think hosted agent.

## Failure modes and misconceptions

- Confusing all YAML as the same: SRC-20 says declarative prompt agents have the configuration workflow shown there, but workflow agents use a different YAML schema (SRC-20 L218–224).
- Assuming hosted agents are unmanaged: SRC-230 says the platform still manages infrastructure for hosted agents (SRC-230 L263).
- Treating portal vs VS Code as agent types: SRC-84 says both surfaces support the same overall workflow and differ mainly by interface style and team needs (SRC-84 L258–280).

## Solution Engineering transfer

**Inference:** Ask whether the customer needs a single assistant, a governed multi-step/multi-agent process, or custom code. Then choose the least complex agent type that still gives the required control, testing, versioning, and deployment path.

## Connections

- [[foundry-agent-service]] — the service that supports the agent types.
- [[foundry-workflows]] — workflow agents are the Foundry-side orchestration path.
- [[foundry-toolkit-for-vs-code]] — VS Code exposes declarative agents, hosted agents, YAML, and deployment tooling.
- [[agent-tools]] — prompt and workflow agents gain capability by adding tools.
- [[agent-building-options-compared]] — places these types among broader agent-building choices.
- [[src-230-understand-ai-agents-microsoft-foundry-agent-service]] — primary agent-type source.
- *Also linked from:* [[ai-agents]] · [[overview]]

## Sources

- SRC-14 — [[src-14-build-first-agent-microsoft-foundry]] — portal configuration for prompt agents.
- SRC-20 — [[src-20-configure-manage-agents-visual-studio-code]] — declarative prompt-agent configuration and YAML notes.
- SRC-84 — [[src-84-explore-development-approaches]] — portal and VS Code development approaches.
- SRC-190 — [[src-190-set-up-visual-studio-code-agent-development]] — VS Code resources include declarative and hosted agents.
- SRC-212 — [[src-212-summary-develop-ai-agents-microsoft-foundry-visual-studio-code]] — module summary of declarative and hosted agents.
- SRC-230 — [[src-230-understand-ai-agents-microsoft-foundry-agent-service]] — definitions of declarative, workflow, and hosted agents.

## Open questions

- The corpus names workflow agents and their YAML schema but does not include a complete workflow-agent schema on this page set; see [[foundry-workflows]] for workflow-specific coverage.
