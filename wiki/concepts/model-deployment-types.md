---
title: "Model deployment types"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Deployment choices in Foundry: global, data-zone, regional, provisioned, batch, serverless API, managed compute and developer deployments."
area: platform
source_ids: [SRC-39, SRC-188, SRC-189, SRC-191, SRC-196]
objectives: [P05, P06, P07, G01]
tags: []
aliases: ["deployment types", "Global Standard", "provisioned throughput", "serverless API", "data zone deployment", "PTU", "batch deployment", "managed compute"]
---

# Model deployment types

## Summary

Foundry deployment type is the choice that turns a selected model into an endpoint with particular data-residency, scaling, billing, quota and operational characteristics. The corpus distinguishes global, data-zone and regional placement; standard, provisioned and batch consumption; managed compute for VM-hosted models; and developer deployments for fine-tuned model evaluation. (SRC-39 L217–226; SRC-189 L237–314; SRC-196 L16)

## The problem it solves

Selecting a model is not enough: applications need a deployed endpoint, and different workloads need different trade-offs for data residency, throughput predictability, latency, cost and control. (SRC-39 L217–226; SRC-188 L249–261)

## Mental model

**Synthesis:** The deployment decision has two axes. The first axis is placement: global maximizes routing flexibility, data zone confines data to a broad zone such as EU or US, and regional confines it to a single region. The second axis is capacity and billing: standard pays per token, provisioned reserves predictable throughput, batch accepts slower asynchronous processing for cost-optimized jobs, and managed compute exposes VM/instance choices. (SRC-39 L217–226; SRC-39 L239–240; SRC-189 L237–314; SRC-189 L317–340)

## What the sources say

- SRC-39 lists Global Standard, Global Provisioned, Global Batch, Data Zone Standard, Data Zone Provisioned, Data Zone Batch, Standard, Regional Provisioned and Developer deployments, with differences in data residency, scaling and billing. (SRC-39 L217–226)
- SRC-189 explains the placement decision as global, data zone or regional: global can route broadly and increase throughput; data zone keeps data within a larger zone such as EU or US; regional keeps conversations in one selected region but may bottleneck there. (SRC-189 L237–294)
- SRC-189 explains standard as token-based usage with high quota, provisioned as guaranteed predictable throughput, and batch as slower, potentially cheaper processing for queued asynchronous work. (SRC-189 L295–340)
- SRC-39 says managed compute deployments require a virtual machine SKU and instance count, and require Azure Machine Learning compute quota for the selected SKU. (SRC-39 L239–240)
- SRC-196 summarizes deployment options as serverless API for pay-per-call flexibility, provisioned deployments for consistent high-volume workloads, managed compute for VM-based hosting, and batch processing for cost-optimized non-interactive jobs. (SRC-196 L16)

## How it works in Azure

In the Foundry portal, the model card shows supported deployment types; the portal can use default settings or custom settings, and it automatically selects an appropriate deployment type based on the model and environment. (SRC-39 L227–238)

After deployment, Foundry shows deployment configuration and status, endpoint URL, authentication keys or tokens, monitoring and usage metrics, and options to adjust settings or delete the deployment. (SRC-39 L242–250)

Applications consume the deployment with three details: endpoint URL, authentication key or token, and deployment name. The deployment name is used in the `model` parameter to route the request to the chosen deployment. (SRC-39 L265–268)

## Code and configuration

Configuration fields explicitly named by the corpus include deployment name, deployment type, VM SKU, instance count, endpoint URL, authentication and deployment name. (SRC-39 L234–240; SRC-39 L265–268)

**Stale-risk:** The specific deployment-type labels and supported models are platform-moving details; the corpus says each model in the catalog indicates which deployment types it supports. (SRC-39 L227)

## Decision boundaries

| **Synthesis:** Requirement | Deployment cue in corpus |
|---|---|
| General workload, highest quota | Global Standard. (SRC-39 L218) |
| Predictable high throughput | Provisioned / Global Provisioned / Regional Provisioned, based on reserved PTUs. (SRC-39 L219; SRC-39 L225; SRC-189 L304–314) |
| EU/US data-zone compliance | Data Zone Standard or Data Zone Provisioned. (SRC-39 L221–222; SRC-189 L264–274) |
| Single-region data residency or low volume | Standard regional deployment. (SRC-39 L224; SRC-189 L275–289) |
| Large asynchronous non-interactive jobs | Batch deployment; the corpus says it can be cheaper/slower and suited to overnight queued work. (SRC-39 L220; SRC-189 L317–340; SRC-196 L16) |
| VM-hosted model control | Managed compute with VM SKU and instance count. (SRC-39 L239–240; SRC-196 L16) |
| Fine-tuned model evaluation | Developer deployments are for fine-tuned model evaluation only. (SRC-39 L226) |

**Inference:** If a scenario mentions endpoint consumption only, deployment is the home idea; if it asks how to authenticate that endpoint, use [[keyless-authentication]] instead.

## Failure modes and misconceptions

- Do not treat global, data zone and regional as quality levels; the corpus frames them as placement and data-residency choices with throughput consequences. (SRC-189 L237–294)
- Do not treat provisioned as "more accurate"; it is about predictable throughput, not model quality. (SRC-39 L219; SRC-189 L304–314)
- Do not use batch for interactive chat where the user waits for a response; the corpus positions batch for slower asynchronous work. (SRC-189 L317–340; SRC-196 L16)

## Solution Engineering transfer

**Inference:** Customer signal: "We need guaranteed capacity during peak usage" points to provisioned throughput; "we need EU/US data boundaries" points to data-zone deployment; "we process queued documents overnight" points to batch. (SRC-39 L219–223; SRC-189 L264–274; SRC-189 L317–340)

**Inference:** Discovery question: "Which matters most: data residency, throughput predictability, interactivity, or cost?" maps directly to the deployment axes in this page. (SRC-39 L217–226; SRC-196 L16)

## Connections

- [[quotas-rate-limits-and-cost]] — cost, quota and throughput trade-offs are consequences of deployment choice.
- [[keyless-authentication]] — every deployed model still needs endpoint authentication.
- [[model-selection]] — deployment follows model selection.
- [[model-benchmarks]] — throughput and cost benchmarks inform deployment choice.
- [[deployment-options-compared]] — synthesis home for deployment, endpoint and authentication comparisons.
- [[src-39-deploy-models-endpoints]] — primary deployment-type source.
- [[src-189-select-deploy-evaluate-microsoft-foundry-models-episode-2]] — episode explanation of deployment trade-offs.
- *Also linked from:* [[application-insights]] · [[decision-boundaries]] · [[foundry-resources-and-projects]] · [[model-catalog]] · [[model-playgrounds]] · [[overview]]

## Sources

- SRC-39 — [[src-39-deploy-models-endpoints]] — model deployment types and endpoint consumption
- SRC-188 — [[src-188-select-models-benchmarks]] — cost and throughput benchmark context
- SRC-189 — [[src-189-select-deploy-evaluate-microsoft-foundry-models-episode-2]] — deployment trade-off explanation
- SRC-196 — [[src-196-summary-select-deploy-evaluate-microsoft-foundry-models]] — deployment option summary

## Open questions

- The corpus names deployment options and trade-offs, but it does not teach a hands-on quota increase or autoscaling procedure for model deployments. (SRC-39 L217–226; SRC-191 L130–131)


