---
title: "Microsoft Entra ID"
type: entity
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Identity provider used for production Foundry access, keyless Voice Live, published agents, app registration and RBAC."
area: platform
source_ids: [SRC-12, SRC-18, SRC-39, SRC-88, SRC-185, SRC-191, SRC-223]
objectives: [P12]
tags: ["service"]
aliases: ["Entra ID", "Azure Active Directory", "Azure AD", "Microsoft Entra"]
---

# Microsoft Entra ID

## Summary

Microsoft Entra ID is the corpus's identity layer for production authentication to Foundry resources, keyless Voice Live connections, published Agent Applications, app registration and role-scoped access. (SRC-18 L220; SRC-88 L230–231; SRC-185 L223–228; SRC-223 L261–264)

## What it is

The corpus does not provide a standalone Microsoft Entra ID product lesson. It introduces Entra ID through tasks that need authentication, application registration, managed identity or RBAC: client applications need identities to access Foundry assets, Voice Live can use Entra keyless tokens, and published agents receive dedicated Entra identities. (SRC-18 L220; SRC-88 L230–231; SRC-223 L263–264)

## What the sources say

- SRC-18 says production applications should generally use Microsoft Entra ID authentication, which requires the application to run in the context of a specific identity. (SRC-18 L220)
- SRC-12 says Azure Language in Foundry Tools can authenticate requests with a resource key or a Microsoft Entra ID identity, and recommends Entra ID authentication for greater production security. (SRC-12 L225; SRC-12 L235)
- SRC-39 says model-consuming applications can use Microsoft Entra ID authentication and present an authentication token based on identity. (SRC-39 L265–268)
- SRC-88 says Voice Live supports Microsoft Entra keyless authentication and API key authentication; the Entra path requires a user account or managed identity with Cognitive Services User. (SRC-88 L230–231)
- SRC-185 says publishing an agent to Teams requires permissions to register applications in Microsoft Entra ID, and later says the published agent gets a distinct identity that needs RBAC on accessed resources. (SRC-185 L223–228; SRC-185 L286–291)
- SRC-223 says Agent Applications use Microsoft Entra ID for authentication, require Azure AI User for callers, and do not support API key authentication. (SRC-223 L261–264)

## Capabilities and components

- **Identities for callers:** production applications, users or managed identities can authenticate without a service key. (SRC-18 L220; SRC-88 L230–231)
- **Token-based access:** Voice Live keyless authentication uses a retrieved token with the `https://ai.azure.com/.default` scope or a legacy Cognitive Services scope. (SRC-88 L230–231)
- **Application registration:** Teams publishing requires permission to register applications in Microsoft Entra ID, and the portal generates an application ID and tenant ID during Bot Service configuration. (SRC-185 L223–228; SRC-185 L250–252)
- **Published agent identities:** published agents receive a distinct Entra identity, separate from the project shared identity. (SRC-223 L263–264)
- **RBAC boundary:** Azure AI User, Azure AI Project Manager, Cognitive Services User and resource-specific roles appear as access gates in the corpus. (SRC-185 L223–228; SRC-185 L286–291; SRC-88 L230–231; SRC-223 L261–264)

## How to use it

Use Entra ID when a production application needs to call Foundry or Azure Language without relying on a shared key. (SRC-18 L220; SRC-12 L235)

Use a user account or managed identity with the Cognitive Services User role for Voice Live keyless authentication, and send the resulting token in the WebSocket authorization flow. (SRC-88 L230–231)

When publishing agents, verify the human publisher has the required roles and application-registration permissions before publishing, then assign RBAC roles to the new published agent identity for downstream Azure resources. (SRC-185 L223–228; SRC-185 L286–291)

## Decision boundaries

Microsoft Entra ID is the identity mechanism; RBAC roles are the authorization grant. **Inference:** Do not treat "uses Entra ID" as sufficient by itself: the caller or agent still needs the correct role on the target resource. (SRC-88 L230–231; SRC-223 L261–264)

Entra ID is not always the only option. Azure Language, Foundry model calls and Voice Live mention key-based alternatives; published Agent Applications explicitly do not support API key authentication. (SRC-12 L225; SRC-18 L220; SRC-88 L230–232; SRC-223 L262)

## Naming and currency

The assigned aliases include Azure Active Directory and Azure AD, but these pages should use the current corpus wording, Microsoft Entra ID, unless quoting or describing older names. **Stale-risk:** product names and role names can change after the corpus capture; preserve source wording when teaching from these sources.

The corpus names private networking in the security objective but does not teach Entra ID integration with private networking. (SRC-191 L130–134)

## Appearances in the corpus

Entra ID appears in generative app endpoint selection, Foundry Tools authentication, Voice Live, and agent publishing/deployment material. (SRC-18 L220; SRC-12 L225; SRC-88 L230–231; SRC-185 L223–228; SRC-223 L261–264)

## Connections

- [[keyless-authentication]] — the concept page for API keys versus Entra ID and RBAC.
- [[endpoints-and-sdk-choice]] — Foundry clients choose endpoint, SDK and authentication together.
- [[application-insights]] — production agents monitored with Application Insights also rely on authenticated deployed endpoints.
- [[agent-publishing]] — publishing creates a distinct agent identity and role reassignment task.
- [[microsoft-365-agent-integration]] — Teams publishing requires Entra application registration.
- [[src-223-test-deploy-integrate-agents]] — strongest source for published Agent Application identity.
- *Also linked from:* [[azure-content-understanding]] · [[content-understanding-client-apps]] · [[decision-boundaries]] · [[microsoft-365-agents-toolkit]] · [[overview]] · [[work-iq]]

## Sources

- SRC-12 — [[src-12-azure-language-microsoft-foundry-tools]] — Azure Language key or Entra authentication
- SRC-18 — [[src-18-choose-endpoint-sdk]] — production Entra ID guidance
- SRC-39 — [[src-39-deploy-models-endpoints]] — deployed model auth token based on identity
- SRC-88 — [[src-88-explore-azure-voice-live-api]] — Voice Live keyless authentication and role requirement
- SRC-185 — [[src-185-publish-agent-foundry-portal-teams]] — publish permissions and distinct agent identity
- SRC-191 — [[src-191-study-guide-exam-ai-103-developing-ai-apps-agents]] — official security objective wording
- SRC-223 — [[src-223-test-deploy-integrate-agents]] — Agent Applications and Entra ID

