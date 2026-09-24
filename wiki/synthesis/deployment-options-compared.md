---
title: "Deployment and access options compared"
type: synthesis
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Compares Foundry deployment types, endpoint/SDK paths, authentication, quota/cost trade-offs, and project/resource boundaries."
area: platform
source_ids: [SRC-12, SRC-18, SRC-39, SRC-51, SRC-87, SRC-88, SRC-90, SRC-96, SRC-99, SRC-155, SRC-185, SRC-188, SRC-189, SRC-191, SRC-196, SRC-223]
objectives: [P05, P06, P07, P09, P12, G01, G05, G06]
objective_gaps: []
tags: []
aliases: []
---

# Deployment and access options compared

## Summary

**Synthesis:** Deployment and access decisions in this corpus separate into four layers: the Foundry resource/project hierarchy groups assets, the model deployment type controls placement/capacity/billing, the endpoint/SDK choice controls which capabilities code can reach, and authentication/RBAC controls who or what can call the endpoint or published agent (SRC-155 L15–22; SRC-39 L217–268; SRC-18 L217–307; SRC-88 L230–232; SRC-223 L261–264).

## Scope and question

**Inference:** This page answers: when a scenario asks how to deploy, consume, authenticate or scale a Foundry model/app/agent, which decision is being tested and what should not be confused with it?

## Synthesis

### Layered decision table

| **Synthesis:** Layer | Main options taught by corpus | Use when | Not covered by corpus |
|---|---|---|---|
| Resource/project | Foundry resource hosts one or more projects; projects organize models, agents, tools, knowledge and endpoints (SRC-155 L15–22). | Scenario asks where to group solution assets or which endpoint belongs to a project (SRC-18 L236–251). | Detailed network isolation, migration and private networking setup are not taught (SRC-155 L33–34; SRC-191 L130–134). |
| Model deployment type | Global Standard/Provisioned/Batch, Data Zone Standard/Provisioned/Batch, Standard, Regional Provisioned, Developer, serverless API, managed compute, batch (SRC-39 L217–226; SRC-196 L16). | Scenario asks data residency, predictable throughput, asynchronous jobs, cost/discount or VM-hosted model control (SRC-189 L237–340). | Hands-on quota increase, autoscaling procedure and rate-limit retry handling are not covered (SRC-191 L130–131). |
| Endpoint and SDK | Project endpoint + Foundry SDK; Azure OpenAI endpoint + OpenAI SDK; tool-specific endpoint + tool SDK/API (SRC-18 L217–221; SRC-18 L292–307; SRC-96 L233). | Scenario asks whether code needs Foundry project features, OpenAI-compatible inference, or a specific Foundry Tool (SRC-18 L292–307). | Concrete endpoint URL formats are partly omitted from captures (SRC-18 L238–242; SRC-18 L267–271). |
| Authentication/access | Entra ID / `DefaultAzureCredential` / managed identity / RBAC; keys or tokens where supported; Agent Applications require Entra ID and Azure AI User (SRC-18 L220; SRC-39 L265–268; SRC-87 L220–224; SRC-88 L230–232; SRC-223 L261–264). | Scenario asks production security, keyless credentials, post-publish agent identity or role assignment (SRC-185 L286–291; SRC-223 L261–264). | Private networking implementation is not taught (SRC-191 L130–134). |
| Cost/quota/throughput | Benchmarks for token cost/latency/throughput; provisioned PTUs; standard token billing; batch cost-optimized asynchronous work; token usage from context/tools/retrieval (SRC-188 L243–263; SRC-189 L295–340; SRC-99 L279–288). | Scenario asks cheapest adequate model, predictable capacity, interactive vs batch, or token-cost growth (SRC-39 L217–226; SRC-99 L279–288). | Budget alerts, quota request workflow and rate-limit backoff are not covered (SRC-191 L130–131). |

### Deployment type decision table

| **Synthesis:** Requirement | Corpus-grounded choice |
|---|---|
| Highest quota/general workload with flexible routing | Global Standard (SRC-39 L218; SRC-189 L237–263). |
| Predictable high throughput | Provisioned deployment / PTUs, choosing placement as global, data zone or regional as required (SRC-39 L219; SRC-189 L304–314). |
| EU/US data boundary | Data Zone Standard or Data Zone Provisioned (SRC-39 L221–222; SRC-189 L264–274). |
| Single-region data residency or low-volume/regional control | Standard or Regional Provisioned depending on capacity needs (SRC-39 L224–225; SRC-189 L275–294). |
| Large asynchronous non-interactive work | Batch deployment; slower queued work can be cost-optimized (SRC-39 L220; SRC-189 L317–340; SRC-196 L16). |
| VM/SKU/instance control | Managed compute with VM SKU and instance count (SRC-39 L239–240; SRC-196 L16). |
| Fine-tuned model evaluation only | Developer deployments (SRC-39 L226). |

### Endpoint and SDK decision table

| **Synthesis:** Requirement | Project endpoint + Foundry SDK | Azure OpenAI endpoint + OpenAI SDK | Tool-specific endpoint |
|---|---|---|---|
| Foundry-native operations | Best fit for agents, tool approvals, evaluations, tracing, direct models, project metadata, connections and governance (SRC-18 L292–300). | Not the main path if these Foundry-native features are required (SRC-18 L292–307). | Not applicable unless a Foundry Tool is the target. |
| OpenAI API compatibility/portability | Can create an OpenAI-compatible client through Foundry SDK (SRC-18 L252–256). | Best fit for OpenAI-compatible model inference, Chat Completions, Responses, Images and minimal Foundry dependency (SRC-18 L301–307). | Not a generic model inference endpoint. |
| Foundry Tools such as Language, Speech, Translator, Document Intelligence or Content Understanding | Use project/resource context as needed, but the tool call itself uses service/tool-specific endpoint and SDK/API (SRC-96 L223–233). | Not the service-specific tool path. | Best fit (SRC-96 L233). |

### Near-miss scenario contrasts

1. **Inference:** *A company needs guaranteed throughput for a high-volume chat app.* Choose provisioned deployment/PTUs because the deciding detail is predictable throughput (SRC-39 L219; SRC-189 L304–314). *A company needs lower-cost overnight processing of many records.* Choose batch because the deciding detail is asynchronous queued work and cost optimization (SRC-189 L317–340; SRC-196 L16).
2. **Inference:** *The app already has OpenAI-compatible code and needs Responses API inference only.* Use Azure OpenAI endpoint/OpenAI SDK compatibility (SRC-18 L301–307). *The app must manage project connections, tracing, evaluations and agents.* Use the project endpoint/Foundry SDK because those are Foundry-native features (SRC-18 L292–300).
3. **Inference:** *A production web app cannot store service keys.* Use Entra ID/keyless credentials where supported because the corpus recommends Entra ID for production (SRC-18 L220; SRC-39 L267; SRC-87 L220–224). *A published Agent Application is being invoked by a caller.* API keys are not supported; callers need Entra ID and Azure AI User on the Agent Application resource (SRC-223 L261–264).
4. **Inference:** *The design asks for EU/US data-zone boundaries.* Choose a data-zone deployment type (SRC-39 L221–222; SRC-189 L264–274). *The design asks for private networking.* Say not covered by the corpus beyond the study guide naming it; do not fill in private endpoint steps from general knowledge (SRC-191 L130–134).

## Evidence map

| **Synthesis:** Claim | Sources |
|---|---|
| Foundry resources host projects; projects organize models, agents, tools and knowledge. | SRC-155 L15–22 |
| Foundry projects expose Project and Azure OpenAI endpoints for different SDK paths. | SRC-18 L217–221; SRC-18 L236–307 |
| Foundry Tools use tool-specific endpoints and SDKs/APIs. | SRC-96 L223–233 |
| Deployment types differ by data residency, scaling and billing. | SRC-39 L217–226; SRC-189 L237–340 |
| Deployment consumption requires endpoint URL, auth key/token and deployment name. | SRC-39 L265–268 |
| Model benchmarks expose cost and throughput dimensions before deployment. | SRC-188 L243–263 |
| Context history, tool schemas, tool outputs and retrieved documents increase token usage. | SRC-99 L279–288 |
| Entra ID is recommended for production in Foundry/Language/Voice contexts where supported. | SRC-18 L220; SRC-12 L225–235; SRC-87 L220–224; SRC-88 L230–232 |
| Published Agent Applications require Entra ID/RBAC and do not support API keys. | SRC-223 L261–264 |
| Published agent identities do not automatically inherit project shared identity permissions. | SRC-185 L286–291 |
| Official objectives name rate limits, cost and private networking, but detailed procedures are thin or absent. | SRC-191 L130–134 |

## Tensions

- **Synthesis:** The corpus has strong conceptual deployment-type coverage, but thin operational coverage for quota increase, autoscaling, rate-limit handling and private networking (SRC-39 L217–226; SRC-191 L130–134).
- **Synthesis:** Keyless authentication is recommended for production, but keys remain supported for several service calls; Agent Applications are stricter and do not support API keys (SRC-18 L220; SRC-12 L225–235; SRC-88 L230–232; SRC-223 L261–264).
- **Stale-risk:** Deployment-type labels, supported model/deployment combinations, PTU behaviour, endpoint formats and SDK capabilities can change; the corpus itself says model cards indicate supported deployment types (SRC-39 L227).

## Implications for the exam and for practice

- **Inference:** For exam questions, first classify the layer being tested: resource/project grouping, model deployment type, endpoint/SDK choice, authentication/RBAC, or cost/quota. Wrong answers often operate at the wrong layer (SRC-155 L15–22; SRC-39 L217–268; SRC-18 L292–307; SRC-223 L261–264).
- **Inference:** In practice, ask which matters most: data residency, predictable throughput, interactivity, endpoint compatibility, Foundry-native governance, or keyless access. Each maps to a different row in the decision tables rather than one universal deployment choice (SRC-189 L237–340; SRC-18 L292–307; SRC-88 L230–232).
- **Inference:** Do not claim the corpus teaches production networking or retry engineering. State those as not covered by the corpus and verify current Microsoft documentation before implementation (SRC-191 L130–134).

## Open questions

- Private networking, rate-limit retry/backoff, quota-increase workflow, autoscaling runbooks, cost-alert configuration and CI/CD integration are named by objectives but not substantively taught in the sources used here (SRC-191 L127–134).

## Sources

- SRC-12 — [[src-12-azure-language-microsoft-foundry-tools]] — Language key and Entra authentication.
- SRC-18 — [[src-18-choose-endpoint-sdk]] — endpoint, SDK and authentication choices.
- SRC-39 — [[src-39-deploy-models-endpoints]] — deployment types and endpoint consumption.
- SRC-51 — [[src-51-developer-tools-sdks]] — SDK target choices.
- SRC-87 — [[src-87-explore-ai-voice-live-client-library-python]] — Voice Live client auth.
- SRC-88 — [[src-88-explore-azure-voice-live-api]] — Voice Live keyless/API-key auth and roles.
- SRC-90 — [[src-90-explore-model-playground]] — generated starter code with endpoint/deployment settings.
- SRC-96 — [[src-96-foundry-tools]] — tool-specific endpoint pattern.
- SRC-99 — [[src-99-generate-responses-responses-api-foundry-sdk]] — token context cost.
- SRC-155 — [[src-155-microsoft-foundry]] — resource/project hierarchy.
- SRC-185 — [[src-185-publish-agent-foundry-portal-teams]] — publish-time roles and identities.
- SRC-188 — [[src-188-select-models-benchmarks]] — cost/throughput benchmark evidence.
- SRC-189 — [[src-189-select-deploy-evaluate-microsoft-foundry-models-episode-2]] — deployment trade-off explanation.
- SRC-191 — [[src-191-study-guide-exam-ai-103-developing-ai-apps-agents]] — objective wording and gap boundary.
- SRC-196 — [[src-196-summary-select-deploy-evaluate-microsoft-foundry-models]] — deployment option summary.
- SRC-223 — [[src-223-test-deploy-integrate-agents]] — Agent Application auth/RBAC and monitoring.

