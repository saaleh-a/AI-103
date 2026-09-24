---
title: "Keyless authentication and role-based access"
type: concept
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "How the corpus contrasts API keys with Microsoft Entra identity, DefaultAzureCredential, managed identities and RBAC."
area: platform
source_ids: [SRC-12, SRC-18, SRC-31, SRC-39, SRC-87, SRC-88, SRC-185, SRC-191, SRC-223]
objectives: [P12, G06]
tags: []
aliases: ["DefaultAzureCredential", "managed identity", "API key authentication", "Entra ID authentication", "RBAC", "keyless", "token-based authentication"]
---

# Keyless authentication and role-based access

## Summary

Keyless authentication in this corpus means using Microsoft Entra ID identity and tokens instead of presenting a reusable service key to Foundry, Foundry Tools, Voice Live, or an Agent Application endpoint. The sources repeatedly allow API keys for some development or service calls, but recommend Entra ID for production and connect successful access to role assignments. (SRC-18 L220; SRC-39 L267; SRC-87 L221–224; SRC-88 L230–232)

## The problem it solves

API keys are easy to copy into demos, but production applications need access tied to a user, app, or managed identity and constrained by role assignments. The corpus frames authentication as the step that grants a client application access to Foundry assets, and it says production applications should generally use Microsoft Entra ID authentication in the context of a specific identity. (SRC-18 L220)

The same security concern appears in publishing: metadata must not include secrets or API keys, and published agents can fail after release if the new agent identity lacks the required permissions. (SRC-185 L238–239; SRC-185 L286–291)

## Mental model

**Synthesis:** Treat keyless access as a three-part chain: the caller has an identity, the identity gets or presents a token, and Azure RBAC decides whether that identity may use the target resource. Foundry model access, Voice Live access, and published Agent Application access all show this identity-plus-role pattern, but the exact role and endpoint differ by resource. (SRC-18 L220; SRC-88 L230–231; SRC-223 L261–264)

## What the sources say

- SRC-18 says Foundry project clients can authenticate in multiple ways, but production applications should generally use Microsoft Entra ID authentication; it also notes that key-based or token-based authentication can be used in some scenarios. (SRC-18 L220)
- SRC-12 says Azure Language in Foundry Tools can be called with either the resource key or a Microsoft Entra ID identity, then recommends Microsoft Entra ID for greater production security. (SRC-12 L225; SRC-12 L229–235)
- SRC-39 says deployed model calls need an endpoint URL, an authentication key or token, and the deployment name; it recommends Entra ID authentication for production scenarios. (SRC-39 L265–268)
- SRC-87 says the Voice Live Python client can use an API key or Microsoft Entra ID token, and recommends `DefaultAzureCredential` for production authentication. (SRC-87 L220–224)
- SRC-88 names the two Voice Live authentication methods as Microsoft Entra keyless authentication and API key, then says keyless authentication requires the Cognitive Services User role for a user account or managed identity. (SRC-88 L230–232)
- SRC-223 says Agent Applications use Microsoft Entra ID, require Azure AI User on the Agent Application resource, and do not support API key authentication. (SRC-223 L261–264)
- SRC-191 names the exam objective that includes managed identity, private networking, keyless credentials, and role policies; the raw teaching sources here substantively cover the identity, keyless and role-policy parts, not private networking. (SRC-191 L130–134)

## How it works in Azure

For Foundry project and model clients, the application uses endpoint information and authenticates with either a key/token or Microsoft Entra ID, then uses the deployment name to route inference requests. (SRC-39 L265–268)

For Voice Live, a keyless client retrieves a Microsoft Entra token for a Foundry resource, uses the `https://ai.azure.com/.default` scope or legacy Cognitive Services scope, and sends the token on the WebSocket connection; the user or managed identity needs the Cognitive Services User role. (SRC-88 L230–231)

For published agents, publishing creates a dedicated Entra identity that is separate from the project shared identity; permissions do not transfer automatically, so RBAC roles must be reassigned to the published agent identity for resources it accesses. (SRC-223 L261–264; SRC-185 L286–291)

## Code and configuration

The corpus names `DefaultAzureCredential` as the production pattern in the Voice Live Python client material. It does not provide a complete visible code listing in the captured text, but it states that the sample implements `DefaultAzureCredential` for Microsoft Entra authentication. (SRC-87 L220–224)

Configuration work in the corpus is role assignment rather than secret handling: assign Cognitive Services User for Voice Live keyless access, Azure AI User to invoke Agent Applications, Azure AI Project Manager to publish agents, and resource-specific RBAC roles to a published agent identity when its tools call Azure resources. (SRC-88 L230–231; SRC-185 L223–228; SRC-185 L286–291; SRC-223 L261–264)

## Decision boundaries

| **Synthesis:** Decision | Prefer keyless / Entra ID | Key or token alternative |
|---|---|---|
| Production Foundry app | Recommended for production because access is tied to an identity. (SRC-18 L220; SRC-39 L267) | Some scenarios can use key-based or token-based authentication. (SRC-18 L220) |
| Azure Language in Foundry Tools | Recommended for greater security in production. (SRC-12 L235) | A resource key can authenticate Language calls. (SRC-12 L225; SRC-12 L229) |
| Voice Live API | Recommended keyless method; role-scoped to a user or managed identity. (SRC-88 L230–231) | API key can be supplied through a header or query string, with browser limitations. (SRC-88 L232) |
| Published Agent Application | Required: Microsoft Entra ID; callers need Azure AI User. (SRC-223 L261–264) | API key authentication is not supported. (SRC-223 L262) |

**Inference:** The exam cue for this page is wording about production security, managed identity, keyless credentials, or post-publish tool authorization; the deciding detail is usually whether the service supports API keys at all and which RBAC role is needed.

## Failure modes and misconceptions

- Assuming a keyless-capable service forbids keys is wrong for Azure Language and Voice Live, because both sources mention key-based alternatives. (SRC-12 L225; SRC-88 L230–232)
- Assuming development permissions automatically follow a published agent is wrong: the corpus says the published agent receives a distinct identity and permissions do not transfer automatically. (SRC-223 L263–264)
- The corpus does not teach private networking setup even though the study guide includes it in objective P12. (SRC-191 L130–134)

## Solution Engineering transfer

**Inference:** Customer signal: "We cannot store API keys in the app" maps to Entra ID, `DefaultAzureCredential`, managed identity and RBAC rather than a different model feature. (SRC-18 L220; SRC-87 L220–224)

**Inference:** Discovery question: "Which identity will call the model or tool after deployment, and what Azure resources will it need?" is especially important for published agents because their identity changes at publish time. (SRC-185 L286–291; SRC-223 L263–264)

## Connections

- [[microsoft-entra-id]] — the identity service behind keyless authentication and agent identities.
- [[endpoints-and-sdk-choice]] — endpoint and SDK selection changes which authentication path is used.
- [[model-deployment-types]] — deployed models expose endpoint, authentication and deployment-name details.
- [[foundry-agent-service]] — published Agent Applications use Entra ID and RBAC.
- [[microsoft-365-agent-integration]] — Teams publishing introduces app registration and agent identity concerns.
- [[src-18-choose-endpoint-sdk]] — primary source for endpoint, SDK and authentication choices.
- [[src-223-test-deploy-integrate-agents]] — primary source for Agent Application authentication.
- *Also linked from:* [[a2a-agent-implementation]] · [[agent2agent-protocol]] · [[azure-speech-mcp-server]] · [[content-understanding-client-apps]] · [[decision-boundaries]] · [[openai-sdk]] · [[overview]]

## Sources

- SRC-12 — [[src-12-azure-language-microsoft-foundry-tools]] — Azure Language key and Entra authentication
- SRC-18 — [[src-18-choose-endpoint-sdk]] — Foundry endpoint, SDK and production authentication guidance
- SRC-31 — [[src-31-create-voice-live-agent]] — Voice Live client pattern recommends Entra ID
- SRC-39 — [[src-39-deploy-models-endpoints]] — deployed model endpoint, auth and deployment-name details
- SRC-87 — [[src-87-explore-ai-voice-live-client-library-python]] — API key versus Entra token and `DefaultAzureCredential`
- SRC-88 — [[src-88-explore-azure-voice-live-api]] — Voice Live keyless authentication and role requirement
- SRC-185 — [[src-185-publish-agent-foundry-portal-teams]] — publish-time roles and published agent identity
- SRC-191 — [[src-191-study-guide-exam-ai-103-developing-ai-apps-agents]] — official security objective wording and gap boundary
- SRC-223 — [[src-223-test-deploy-integrate-agents]] — Agent Application Entra ID authentication and RBAC

## Open questions

- The corpus does not teach private networking configuration for P12; it only names the topic in the study guide. (SRC-191 L130–134)

