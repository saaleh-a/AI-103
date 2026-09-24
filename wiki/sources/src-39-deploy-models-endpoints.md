---
title: "Deploy models to endpoints"
type: source
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Explains Foundry deployment types, deployment configuration, playground testing, and endpoint details needed by applications."
area: models
source_ids: [SRC-39]
objectives: [P06, P07, P09, G01, G06]
tags: [model-deployment, endpoints, playground]
aliases: ["SRC-39"]
source_kind: learn-unit
module: "Select, deploy, and evaluate Microsoft Foundry models"
learning_path: null
unit: "4 of 8"
presenters: []
raw_file: "39-Deploy models to endpoints - Training - Microsoft Learn.md"
url: "https://learn.microsoft.com/en-gb/training/modules/model-catalog-evaluate/4-deploy-models"
ingest_depth: full
---
# Deploy models to endpoints

*learn-unit · Select, deploy, and evaluate Microsoft Foundry models · unit 4 of 8 · SRC-39*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-39 |
| Raw file | 39-Deploy models to endpoints - Training - Microsoft Learn.md |
| Kind | learn-unit |
| Learning path | null |
| Module | Select, deploy, and evaluate Microsoft Foundry models |
| Unit / episode | 4 of 8 |
| Presenter(s) | none |
| URL | https://learn.microsoft.com/en-gb/training/modules/model-catalog-evaluate/4-deploy-models |
| Teaching content | L209–270 of 300 |
| Content length | ~1077 words |
| Capture quality | high |
| Ingest depth | full |

## TL;DR

After selection, a model must be deployed so applications can access it through an endpoint; Foundry offers deployment types that trade off data residency, throughput, billing, and hosting control. (SRC-39 L215–226)

## Key claims

- Foundry deployment makes a selected model accessible through endpoints that applications can use. (SRC-39 L215)
- Deployment types include Global Standard, Global Provisioned, Global Batch, Data Zone Standard, Data Zone Provisioned, Data Zone Batch, Standard, Regional Provisioned, and Developer. (SRC-39 L216–226)
- Global Standard is recommended whenever possible for Foundry resources because it provides maximum capabilities. (SRC-39 L227)
- Deployment configuration includes deployment name and deployment type; managed compute also requires VM SKU and instance count. (SRC-39 L235–240)
- After deployment, the Build > Models area shows deployment configuration/status, endpoint URL, authentication keys or tokens, monitoring/usage metrics, and settings/delete options. (SRC-39 L247–254)
- The playground lets a learner test a deployed model immediately, adjust system messages and generation parameters, and view code samples. (SRC-39 L255–264)
- Applications need the endpoint URL, authentication key or Entra ID token, and deployment name. (SRC-39 L265–270)

## How it works

The portal deployment path starts from a model card in Discover > Models. The learner selects **Deploy**, chooses default or custom settings, accepts Marketplace terms when required, configures deployment settings, and verifies the deployment succeeded. (SRC-39 L229–246)

Once deployed, the model appears in Build > Models. The deployment details bridge portal work and an application because they provide the endpoint, authentication material, deployment name, metrics, and operational controls. (SRC-39 L247–254)

## Code and API patterns

The source does not show code, but it identifies the parameters an application uses: endpoint URL, authentication key or Entra ID token, and deployment name passed as the model parameter to route requests to the deployment. (SRC-39 L265–270)

## Key terms

- Deployment name — the name used by code in the model parameter to route inference to the deployment. (SRC-39 L236)
- Global Standard — a pay-per-token deployment that can use any Azure region and provides the highest quota for general workloads. (SRC-39 L218)
- Provisioned throughput units — reserved throughput used by provisioned deployments for predictable high-throughput. (SRC-39 L219; SRC-39 L222; SRC-39 L225)
- Data Zone deployment — a deployment option that keeps data within a specific data zone. (SRC-39 L221–223)
- Managed compute deployment — a deployment that requires VM SKU and instance count. (SRC-39 L238–240)

## Decision boundaries and exam cues

- **Inference:** Choose Global Standard for general use and largest quota when no stricter residency or provisioned-throughput requirement is stated. (SRC-39 L218; SRC-39 L227)
- **Inference:** Choose Data Zone options when the scenario requires data to stay within a broad zone such as EU or US. (SRC-39 L221–223)
- **Inference:** Choose regional Standard or Regional Provisioned when the scenario requires single-region data residency or reserved regional throughput. (SRC-39 L224–225)
- **Inference:** Choose batch deployment when the work is large and asynchronous rather than interactive. (SRC-39 L220; SRC-39 L223)
- **Inference:** Use Entra ID authentication for production scenarios because the source explicitly recommends it. (SRC-39 L267–268)

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** Deployment types, Marketplace terms, VM SKUs, quotas, and portal navigation can change. (SRC-39 L216–240)
- The source contains the phrase Developer Developer deployments, but its meaning is fine-tuned model evaluation only. (SRC-39 L226)

## Relation to other sources

- [[src-188-select-models-benchmarks]] precedes deployment by comparing models before making them consumable. (SRC-188 L215–219; SRC-39 L215)
- [[src-53-evaluate-model-performance]] follows deployment by evaluating whether the deployed model meets requirements. (SRC-39 L215; SRC-53 L213–216)
- [[src-145-knowledge-check-select-deploy-evaluate-microsoft-foundry-models]] asks which deployment type is general-use with largest quota. (SRC-39 L218; SRC-145 L218–222)
- [[src-189-select-deploy-evaluate-microsoft-foundry-models-episode-2]] demonstrates Global Standard deployment and playground comparison. (SRC-39 L216–240; SRC-189 L184–309; SRC-189 L661–760)

## Connections

- [[model-deployment-types]] — deployment options are the source's core teaching point. (SRC-39 L216–226)
- [[endpoints-and-sdk-choice]] — applications consume endpoints with endpoint URL, auth, and deployment name. (SRC-39 L265–270)
- [[keyless-authentication]] — Entra ID is recommended for production authentication. (SRC-39 L267–268)
- [[model-playgrounds]] — deployed models can be tested without code. (SRC-39 L255–264)
- [[quotas-rate-limits-and-cost]] — deployment type affects quota, billing, and throughput. (SRC-39 L216–226)
- [[deployment-options-compared]] — this source provides the model-side deployment comparison. (SRC-39 L216–226)
- *Module units:* [[src-114-introduction-select-deploy-evaluate-microsoft-foundry-models|1 Introduction]] · [[src-89-explore-model-catalog|2 Explore the model catalog]] · [[src-188-select-models-benchmarks|3 Select models using benchmarks]] · [[src-53-evaluate-model-performance|5 Evaluate model performance]] · [[src-80-exercise-select-deploy-evaluate-models|6 Exercise - Select, deploy, and evaluate models]] · [[src-145-knowledge-check-select-deploy-evaluate-microsoft-foundry-models|7 Knowledge check]] · [[src-196-summary-select-deploy-evaluate-microsoft-foundry-models|8 Summary]] · [[src-189-select-deploy-evaluate-microsoft-foundry-models-episode-2|episode 2]]

## Open questions

- The source does not explain exact quota numbers, pricing, or how the portal selects a deployment type automatically. (SRC-39 L227–237)

## Sources

- SRC-39 — raw file: [[39-Deploy models to endpoints - Training - Microsoft Learn]]
