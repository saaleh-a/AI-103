---
title: "Foundry resources and projects"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "The Foundry hierarchy: an Azure resource hosts projects; projects organize models, agents, tools, knowledge, endpoints and app assets."
area: platform
source_ids: [SRC-14, SRC-18, SRC-84, SRC-96, SRC-155, SRC-183, SRC-190]
objectives: [P05, G06]
objective_gaps: []
tags: []
aliases: ["Foundry project", "Foundry resource", "Microsoft Foundry project", "Microsoft Foundry resource"]
---

# Foundry resources and projects

## Summary

A Microsoft Foundry resource is the Azure-side home for compute, storage, AI tools, and services; one or more Foundry projects live under it and organize the assets an AI solution uses. (SRC-155 L15–22)

## The problem it solves

Nontrivial AI solutions need more than a single model call. They may need deployed models, agents, tool connections, private knowledge, project configuration, endpoints, user access, tracing, and operations views. (SRC-155 L17–31; SRC-18 L247–251) The resource/project split gives those assets a shared Azure home without forcing the learner to manage every underlying cloud service separately. (SRC-155 L22)

## Mental model

**Inference:** Think of the Foundry resource as the Azure platform container, and the project as the solution workspace. The resource provides the shared cloud substrate; the project is where developers work with a particular solution's models, agents, tools, knowledge, data, code, endpoints and configuration. (SRC-155 L15–22)

**Inference:** SRC-183 phrases it similarly in the episode: the resource is the landing place for network and compute resources, and the project can contain multiple models, agents, tools, and knowledge. (SRC-183 L203–219)

## What the sources say

SRC-155 says each project belongs to a single Microsoft Foundry resource in Azure, and that a Foundry resource can support one or more child projects with one default project. (SRC-155 L15–16) Developers use projects to manage assets for AI solutions: models, agents, tools, and knowledge. (SRC-155 L17–21)

SRC-183's portal demo shows project creation deciding on a Foundry resource and a region, and notes that the chosen region matters for model deployments. (SRC-183 L590–651) It also says the Home page is where the presenter grabs endpoints consistently. (SRC-183 L669–697)

SRC-84 says both portal and VS Code agent-development approaches require the same underlying Azure resources: a Microsoft Foundry project and model deployments. (SRC-84 L267–277) SRC-190 shows the VS Code extension connecting to an Azure subscription and opening a Microsoft Foundry project, then displaying agents, model deployments, connections and vector stores. (SRC-190 L233–243)

## How it works in Azure

The project contains the solution-level asset graph. Models are deployed from Foundry Models and are accessed through the project endpoint with Foundry-specific APIs/SDKs or through the Azure OpenAI endpoint with OpenAI APIs/SDKs. (SRC-155 L18; SRC-18 L217–221) Agents are developed and consumed through Microsoft Foundry Agent Service using the project endpoint. (SRC-155 L19)

Tools can be built-in agent tools, custom/third-party tools through MCP connections, or Foundry Tools hosted in the Foundry resource associated with the projects. (SRC-155 L20) Knowledge can be connected through tools, and Foundry IQ can centralize multiple knowledge sources through an MCP-based knowledge connection. (SRC-155 L21)

## Code and configuration

The most important code-facing detail is the endpoint. The endpoint-and-SDK source says each Foundry project has a unique Project endpoint found on the project's Overview page, and that this endpoint is used to create an `AIProjectClient`. (SRC-18 L236–244) The same source says the `AIProjectClient` can retrieve connections, access project configuration, enable tracing, and manage datasets and indexes. (SRC-18 L247–251)

The portal and VS Code both surface project resources. The portal can create agents, add tools, test in a playground, and deploy for SDK or REST access. (SRC-14 L220–246) VS Code can display project resources and save agent changes back to Foundry. (SRC-190 L242–263)

## Decision boundaries

- **Inference:** If a scenario asks where to group models, agents, tools, knowledge, endpoints, and project configuration, choose a Foundry project rather than a standalone model deployment. (SRC-155 L15–22; SRC-18 L247–251)
- **Inference:** If a scenario asks what provides compute, data storage, AI tools, and other services for projects, choose the Microsoft Foundry resource rather than the project itself. (SRC-155 L15–16)
- **Inference:** If a task only needs a single isolated AI service, individual resources may be possible; the corpus says Foundry is recommended for all but the most simple solutions, not that isolated resources no longer exist. (SRC-155 L12; SRC-96 L235–236)
- **Inference:** Treat region selection during project/resource creation as deployment-relevant because the episode says the project region is where models will be deployed. (SRC-183 L621–651)

## Failure modes and misconceptions

A common misconception is that the project is the same thing as the Azure resource. The sources separate them: a project belongs to a resource, and the resource can host one or more child projects. (SRC-155 L15–16)

Another misconception is that portal and VS Code create separate infrastructure models. SRC-84 says both development approaches use the same underlying resources and differ primarily in interface style. (SRC-84 L258–284)

A third misconception is that all endpoints are interchangeable. The corpus distinguishes the project endpoint for Foundry-specific APIs and SDKs from the Azure OpenAI endpoint for OpenAI APIs and SDKs. (SRC-155 L18; SRC-18 L217–221)

## Solution Engineering transfer

**Inference:** Customer signal: "We have several agents, models, knowledge sources, and governance needs" maps to a Foundry project and resource because the sources place those assets inside projects under a Foundry resource. (SRC-155 L15–31)

**Inference:** Discovery question: ask which assets must be shared across teams and which should be isolated by project, because a resource can support multiple child projects and one default project. (SRC-155 L16)

## Connections

- [[microsoft-foundry]] — the broader platform that owns the resource/project model.
- [[endpoints-and-sdk-choice]] — endpoint choice is the project boundary that code sees.
- [[foundry-sdk]] — `AIProjectClient` uses the project endpoint for project operations.
- [[foundry-agent-service]] — agents are project assets consumed through the project endpoint.
- [[foundry-tools]] — prebuilt tools are hosted in the Foundry resource.
- [[foundry-iq]] — knowledge can be centralized through a project knowledge connection.
- [[model-deployment-types]] — model deployments are required project assets for model and agent work.
- [[src-155-microsoft-foundry]] — formal Learn source for the hierarchy.
- [[src-18-choose-endpoint-sdk]] — project endpoint and `AIProjectClient` source.
- *Also linked from:* [[overview]]

## Sources

- SRC-14 — [[src-14-build-first-agent-microsoft-foundry]] — portal-created agents deployed for SDK or REST access.
- SRC-18 — [[src-18-choose-endpoint-sdk]] — project and Azure OpenAI endpoints; AIProjectClient project operations.
- SRC-84 — [[src-84-explore-development-approaches]] — required project and model deployments for agent development.
- SRC-96 — [[src-96-foundry-tools]] — individual tool resources versus Foundry resource guidance.
- SRC-155 — [[src-155-microsoft-foundry]] — resource/project hierarchy and assets.
- SRC-183 — [[src-183-plan-prepare-develop-ai-solutions-azure-episode-1]] — episode explanation and portal project creation.
- SRC-190 — [[src-190-set-up-visual-studio-code-agent-development]] — VS Code connection to a Foundry project.

## Open questions

- The corpus does not fully teach network isolation, private networking, detailed RBAC, or migration from classic hub-based projects on this page's sources. (SRC-155 L33–34)


