---
title: "Naming and currency"
type: synthesis
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Corpus product-name drift, rename signals, caption risks, and preview/currency risks to preserve while studying."
area: corpus
source_ids: [SRC-2, SRC-10, SRC-12, SRC-24, SRC-41, SRC-42, SRC-48, SRC-49, SRC-51, SRC-89, SRC-96, SRC-97, SRC-102, SRC-108, SRC-119, SRC-122, SRC-124, SRC-177, SRC-179, SRC-180, SRC-183, SRC-184, SRC-189, SRC-191, SRC-228, SRC-230, SRC-231, SRC-233, SRC-234, SRC-236, SRC-240]
objectives: []
objective_gaps: []
tags: []
aliases: ["renames", "product naming"]
---

# Naming and currency

## Summary

**Synthesis:** The corpus preserves platform naming at capture time: the study guide uses Microsoft Foundry, many Learn captures use Microsoft Foundry, and older captions or endpoint surfaces still expose Azure AI Foundry, Azure AI services, Cognitive Services, Azure AI Agent Service, AI Toolkit, Semantic Kernel, and auto-caption variants (SRC-191 L104; SRC-102 L251; SRC-234 L230; SRC-96 L236; SRC-228 L279–320; SRC-183 L228–231; SRC-183 L400; SRC-240 L216; SRC-124 L210–223).

## Scope and question

**Inference:** This page answers which names to preserve exactly because the corpus uses them, and which details are stale-risk because they can change before an AI-103 exam attempt (SRC-191 L101–102).

## Synthesis

### Product names and rename / inconsistency signals

| **Synthesis:** Old or alternate name | Corpus usage to preserve | Where the corpus shows it | Study risk |
|---|---|---|---|
| Azure AI Foundry | The guide audience builds solutions with Microsoft Foundry, while two Learn units still say Azure AI Foundry. | Study guide: Microsoft Foundry (SRC-191 L104). Learn units: "Implement RAG with the Azure AI Foundry SDK" (SRC-102 L251); "your Azure AI Foundry projects" (SRC-234 L230). | **Stale-risk:** Treat Microsoft Foundry as the exam-guide name, but preserve Azure AI Foundry where a source says it (SRC-191 L101–104; SRC-102 L251; SRC-234 L230). |
| Azure AI Agent Service / Azure AI Agent | The MCP, custom-tool and Agent Framework material still says *Azure AI Agent Service* (SRC-108 L220; SRC-240 L216), *AI Agent Service* (SRC-122 L217) or *Azure AI Agent* (SRC-119 L217; SRC-179 L221; SRC-233 L229), and the episode says *Azure AI Agent Client* (SRC-48 L625), while the agents unit presents the service as Microsoft Foundry Agent Service (SRC-230 L213). | Foundry Agent Service unit teaches Microsoft Foundry Agent Service concepts (SRC-230 L214–276); SRC-119 uses both names in one unit (SRC-119 L217–219). | **Stale-risk:** Agent-service naming is in a moving product family; cite the source term rather than normalising it (SRC-240 L216; SRC-230 L213). |
| Azure AI services / Cognitive Services | Translation episode demonstrates a Foundry portal path through AI Services, says these used to be called Cognitive Services / Azure AI Services, and notes the endpoint still looks like older cognitive services. | Translation episode (SRC-228 L279–320). Foundry Tools page presents the same capabilities as Foundry Tools (SRC-96 L218–236). | **Synthesis:** Foundry Tools may wrap or expose capabilities learners previously knew as Azure AI services / Cognitive Services (SRC-228 L279–320; SRC-96 L218–236). |
| Azure Language / Azure AI Language / Azure Language in Microsoft Foundry Tools | The Learn unit title is Azure Language in Microsoft Foundry Tools; language MCP pages expose language detection, NER and PII through the Language MCP server. | Azure Language unit (SRC-12 L211–237); Language MCP connection unit (SRC-24 L209–265). | **Inference:** Do not assume every language capability is an LLM task; corpus often treats it as a Foundry Tool or MCP server capability (SRC-12 L211–237; SRC-24 L209–265). |
| Foundry Toolkit for VS Code / Microsoft AI Toolkit / AI Toolkit | A tools unit names Foundry Toolkit; an episode caption says AI Toolkit, and another episode walks through Visual Studio Code agent work under Microsoft Foundry. | Developer tools unit (SRC-51 L212–238); text-analysis episode says AI Toolkit (SRC-10 L499–500); VS Code episode (SRC-41 L1–30). | **Stale-risk:** Toolkit names and VS Code extensions are susceptible to product rename and UI drift (SRC-51 L212–238; SRC-10 L499–500). |
| Semantic Kernel / AutoGen lineage | The Microsoft Agent Framework intro says it evolves from Semantic Kernel and AutoGen; the orchestration Learn content teaches Microsoft Agent Framework while older lineage names remain relevant. | Agent Framework introduction (SRC-124 L210–223); orchestration page URL/title evidence (SRC-231 L214–264). | **Synthesis:** Use Microsoft Agent Framework for the current corpus lesson, but preserve lineage terms when explaining why older material or older material mentions Semantic Kernel or AutoGen (SRC-124 L210–223). |
| Magentic / caption variants | The official orchestration pattern is Magentic; episode transcripts can be caption-sensitive around proper names. | Magentic pattern in Agent Framework material (SRC-231 L249–264); episode orchestration section (SRC-180 L200–300). | **Stale-risk:** Auto-captioned episode text can distort proper names; prefer Learn unit spelling when it exists (SRC-231 L249–264; SRC-180 L200–300). |
| OpenAI / Open API ambiguity | Episode captions discuss OpenAI endpoints; caption text can make OpenAI look like generic Open API. | Generative chat episode endpoint discussion (SRC-42 L451; SRC-42 L572–573). | **Stale-risk:** Treat episode API spelling as caption-sensitive unless a Learn text unit confirms it (SRC-42 L451; SRC-42 L572–573). |

### Preview and currency risks

- **Stale-risk:** The official guide says most questions cover GA features, but Preview features may appear if commonly used; it is explicitly measured as of April 16, 2026 (SRC-191 L101–102).
- **Stale-risk:** Work IQ is explicitly in preview and its features and APIs may change (SRC-2 L295–296).
- **Stale-risk:** Sora 2 video generation, model names, and video durations are time-sensitive; episode guidance tells learners to check supported lengths rather than treating transcript values as durable (SRC-97 L460–463; SRC-97 L206–217; SRC-191 L101).
- **Stale-risk:** The Content Understanding API setup uses default model names such as GPT-4.1 and GPT-4.1-mini in the capture; model defaults can change (SRC-184 L210–236; SRC-191 L101).
- **Stale-risk:** The model catalog and deployment episode discusses catalog size, leaderboards, tokens-per-minute and deployment trade-offs; catalog inventory, limits and costs should be rechecked near exam date (SRC-89 L209–244; SRC-189 L120–250; SRC-189 L500–610).
- **Stale-risk:** Speech MCP and Speech/Voice model details are source-time facts; the corpus includes tool-capability patterns but product models and supported audio formats can change (SRC-236 L225–262; SRC-49 L200–280).
- **Stale-risk:** Fine-tuning requirements and regions are operational details; the episode frames fine-tuning as a workflow with requirements rather than a permanent region list (SRC-177 L150–240; SRC-191 L101).

## Evidence map

| Synthesis: claim | Sources |
|---|---|
| Study-guide naming and GA/Preview policy are official but date-bound. | SRC-191 L101–104 |
| Foundry, Foundry Tools, Azure AI services and Cognitive Services names coexist in the corpus. | SRC-96 L218–236; SRC-228 L279–320 |
| Agent-framework names changed from Semantic Kernel/AutoGen lineage to Microsoft Agent Framework teaching. | SRC-124 L210–223; SRC-231 L214–264 |
| Toolkit and portal labels are inconsistent across Learn and episodes. | SRC-51 L212–238; SRC-10 L499–500; SRC-183 L120–190 |
| Work IQ, model names, catalog details and modality support are currency risks. | SRC-2 L295–296; SRC-184 L210–236; SRC-189 L120–250; SRC-236 L225–262 |

## Tensions

**Synthesis:** Naming drift is not treated as an error when different sources are from different surfaces or capture types; it becomes a study risk only if a learner silently modernises or merges terms that a scenario may distinguish (SRC-191 L101–104; SRC-228 L279–320; SRC-124 L210–223).

## Implications for the exam and for practice

**Inference:** In exam explanations, quote the name that the scenario uses first, then map it to the current corpus entity. For customer work, validate the current portal name, SDK package and preview status before implementation (SRC-191 L101–104).

## Open questions

- **Open question:** Which preview items from this 2026 corpus will still be preview at the learner's exam date? Close with current Microsoft Learn product pages and service release notes (SRC-191 L101–102).
- **Open question:** Whether Foundry Toolkit / AI Toolkit naming has converged in the learner's installed VS Code environment. Close with current extension marketplace names and Microsoft Learn setup docs (SRC-51 L212–238; SRC-10 L499–500).

## Sources

- SRC-2 — [[src-2-access-microsoft-365-data-work-iq]] — Work IQ preview warning.
- SRC-10 — [[src-10-analyze-text-azure-language-foundry-tools-episode-15]] — episode Toolkit and language naming.
- SRC-12 — [[src-12-azure-language-microsoft-foundry-tools]] — Azure Language in Microsoft Foundry Tools.
- SRC-24 — [[src-24-connect-language-mcp-server-agent]] — Language MCP server connection.
- SRC-41 — [[src-41-develop-ai-agents-microsoft-foundry-visual-studio-code-episode]] — VS Code agent episode.
- SRC-42 — [[src-42-develop-generative-ai-chat-app-microsoft-foundry-episode-3]] — OpenAI endpoint caption context.
- SRC-48 — [[src-48-develop-ai-agent-microsoft-agent-framework-episode-13]] — *Azure AI Agent Client* wording in the episode.
- SRC-49 — [[src-49-develop-azure-speech-voice-live-agent-microsoft-foundry-episode]] — Voice Live episode.
- SRC-51 — [[src-51-developer-tools-sdks]] — developer tooling names.
- SRC-89 — [[src-89-explore-model-catalog]] — model catalog.
- SRC-96 — [[src-96-foundry-tools]] — Foundry Tools.
- SRC-97 — [[src-97-generate-images-video-episode-23]] — image/video generation currency.
- SRC-102 — [[src-102-ground-model-retrieval-augmented-generation]] — RAG unit heading: "Implement RAG with the Azure AI Foundry SDK".
- SRC-124 — [[src-124-introduction-develop-ai-agent-microsoft-agent-framework]] — Agent Framework lineage.
- SRC-108 — [[src-108-integrate-agent-tools-mcp-server-client]] — *Azure AI Agent Service* wording in the MCP client unit.
- SRC-119 — [[src-119-introduction-integrate-mcp-tools-azure-ai-agents]] — *Azure AI Agent* and Microsoft Foundry Agent Service in one unit.
- SRC-122 — [[src-122-introduction-integrate-custom-tools-agent]] — *AI Agent Service* wording.
- SRC-179 — [[src-179-options-implementing-custom-tools]] — *Azure AI Agent* wording for OpenAPI tools.
- SRC-233 — [[src-233-understand-mcp-tool-discovery]] — *Azure AI Agent* wording in the MCP discovery pipeline.
- SRC-234 — [[src-234-understand-microsoft-agent-framework-ai-agents]] — Agent Framework unit: "your Azure AI Foundry projects".
- SRC-240 — [[src-240-azure-ai-agents-mcp-servers]] — *Azure AI Agent Service* supports remote MCP servers.
- SRC-177 — [[src-177-optimize-generative-ai-model-performance-microsoft-foundry-episode-5]] — fine-tuning workflow currency.
- SRC-180 — [[src-180-orchestrate-multi-agent-solution-microsoft-agent-framework-episode-14]] — orchestration episode captions.
- SRC-183 — [[src-183-plan-prepare-develop-ai-solutions-azure-episode-1]] — Foundry / Toolkit episode naming.
- SRC-184 — [[src-184-prepare-ai-content-understanding-api]] — Content Understanding model defaults.
- SRC-189 — [[src-189-select-deploy-evaluate-microsoft-foundry-models-episode-2]] — catalog, deployments and limit/cost talk.
- SRC-191 — [[src-191-study-guide-exam-ai-103-developing-ai-apps-agents]] — official guide and GA/Preview note.
- SRC-228 — [[src-228-translate-text-speech-microsoft-foundry-tools-episode-21]] — AI Services / Cognitive Services naming.
- SRC-230 — [[src-230-understand-ai-agents-microsoft-foundry-agent-service]] — Foundry Agent Service terminology.
- SRC-231 — [[src-231-understand-agent-orchestration]] — Agent Framework orchestration and URL drift.
- SRC-236 — [[src-236-understand-azure-speech-mcp-server]] — Speech MCP capabilities and auth.




