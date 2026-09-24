---
title: "Overview \u2014 AI-103 in one page"
type: synthesis
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Entry point to the corpus, exam domains, architecture map, starting route, and navigation links."
area: exam
source_ids: [SRC-1, SRC-18, SRC-27, SRC-28, SRC-39, SRC-53, SRC-89, SRC-91, SRC-102, SRC-152, SRC-155, SRC-182, SRC-191, SRC-230]
objectives: []
objective_gaps: []
tags: []
aliases: ["overview"]
---
# Overview — AI-103 in one page

## Summary

**Synthesis:** The corpus frames AI-103 from four kinds of source: the study guide defines the exam's skills (SRC-191 L92–201), the course pages list its learning paths (SRC-27 L214–240; SRC-28 L76–95), and the study cram says AI-103 replaces AI-102 (SRC-1 “replaces the AI 102”); Learn units and episode transcripts teach the skills. [[corpus-map]] lists all 265 raw sources by learning path, module, unit and episode.

## Scope and question

**Synthesis:** The exam covers developing AI apps and agents on Azure across planning/managing Azure AI solutions, generative and agentic systems, computer vision, text and speech analysis, and information extraction (SRC-191 L113–201). **Stale-risk:** SRC-191 is time-bound to skills measured as of April 16, 2026, and allows commonly used Preview features, so production use needs live checks (SRC-191 L100–102).

## Synthesis

**Synthesis:** Domain priority is clear: **Implement generative AI and agentic solutions** is 30–35%; **Plan and manage an Azure AI solution** is 25–30%; **computer vision**, **text analysis**, and **information extraction** are each 10–15% (SRC-191 L113–201). **Inference:** Start with [[microsoft-foundry]], [[foundry-resources-and-projects]], [[model-selection]], [[model-catalog]], and [[model-deployment-types]] because those decisions support later apps, agents, retrieval, media, language, and extraction (SRC-155 L12–22; SRC-89 L221–244; SRC-39 L214–254).

**Synthesis:** The areas connect as one system: applications call deployed models through SDK/API choices; agents add instructions, state, and tools; retrieval and extraction produce trusted context; identity, responsible AI, observability, and evaluation control risk; media, language, and speech capabilities become app features or tools (SRC-18 L217–221; SRC-230 L258–276; SRC-91 L222–229; SRC-102 L227–256; SRC-53 L215–221; SRC-182 L12–18).

**Inference:** If you are new, read [[learning-path]] next. If you are revising, use [[decision-boundaries]], [[retrieval-options-compared]], [[tool-options-compared]], [[orchestration-patterns-compared]], [[optimization-strategies-compared]], [[deployment-options-compared]], [[speech-and-language-options-compared]], and [[extraction-options-compared]] to train the distinctions the exam is likely to test (SRC-191 L120–201).

## Evidence map

| **Synthesis:** Claim | Sources |
|---|---|
| The corpus includes official study-guide scope plus course/module/episode coverage. | SRC-191 L92–201; SRC-27 L214–240; SRC-28 L76–95 |
| Generative and agentic implementation has the highest domain weight. | SRC-191 L113–159 |
| Foundry projects, model deployment, SDK choice, agents, tools, retrieval, and evaluation recur across the architecture. | SRC-155 L12–22; SRC-18 L217–221; SRC-230 L258–276; SRC-91 L222–229; SRC-102 L227–256; SRC-53 L215–221 |

## Navigation map

**Inference:** Use this compact map to jump from an exam clue to a wiki page; linked pages carry local raw citations.

- **Inference:** **platform:** [[application-insights|Application Insights]], [[development-tools-and-approaches|Development tools and approaches]], [[endpoints-and-sdk-choice|Endpoints and SDK choice]], [[foundry-resources-and-projects|Foundry resources and projects]], [[foundry-tools|Foundry Tools]], [[keyless-authentication|Keyless authentication and role-based access]], [[microsoft-entra-id|Microsoft Entra ID]], [[microsoft-foundry|Microsoft Foundry]], [[foundry-sdk|Microsoft Foundry SDK]], [[model-deployment-types|Model deployment types]], [[observability-and-tracing|Observability and tracing]], [[quotas-rate-limits-and-cost|Quotas, rate limits and cost]].
- **Inference:** **models:** [[azure-openai|Azure OpenAI]], [[fine-tuning|Fine-tuning]], [[model-catalog|Foundry model catalog]], [[generation-parameters|Generation parameters]], [[generative-ai-fundamentals|Generative AI fundamentals]], [[model-and-app-evaluation|Model and app evaluation]], [[model-benchmarks|Model benchmarks]], [[model-selection|Model selection]], [[model-playgrounds|Playgrounds]], [[prompt-engineering|Prompt engineering]].
- **Inference:** **generative-apps:** [[chat-completions-api|Chat Completions API]], [[conversation-state|Conversation state]], [[openai-sdk|OpenAI SDK]], [[responses-api|Responses API]], [[retrieval-augmented-generation|Retrieval-augmented generation (RAG)]].
- **Inference:** **agents:** [[agent-publishing|Agent publishing]], [[agent-testing-and-evaluation|Agent testing and evaluation]], [[agent-tools|Agent tools]], [[ai-agents|AI agents]], [[azure-functions|Azure Functions]], [[code-interpreter-tool|Code interpreter tool]], [[custom-tool-options|Custom tool options]], [[file-search-tool|File search tool]], [[foundry-agent-types|Foundry agent types]], [[foundry-toolkit-for-vs-code|Foundry Toolkit for Visual Studio Code]], [[function-calling|Function calling]], [[human-in-the-loop-approval|Human-in-the-loop and approvals]], [[mcp-tool-integration|MCP tool integration]], [[microsoft-365-agent-integration|Microsoft 365 agent integration]], [[microsoft-365-agents-toolkit|Microsoft 365 Agents Toolkit]], [[foundry-agent-service|Microsoft Foundry Agent Service]], [[model-context-protocol|Model Context Protocol (MCP)]], [[web-search-tool|Web search tool]], [[work-iq|Work IQ]].
- **Inference:** **orchestration:** [[agent-framework-workflows|Agent Framework workflows]], [[agent2agent-protocol|Agent2Agent (A2A) protocol]], [[concurrent-orchestration|Concurrent orchestration]], [[foundry-workflows|Foundry workflows]], [[group-chat-orchestration|Group chat orchestration]], [[handoff-orchestration|Handoff orchestration]], [[a2a-agent-implementation|Implementing A2A agents]], [[magentic-orchestration|Magentic orchestration]], [[microsoft-agent-framework|Microsoft Agent Framework]], [[multi-agent-orchestration|Multi-agent orchestration]], [[power-fx|Power Fx]], [[sequential-orchestration|Sequential orchestration]], [[workflow-patterns|Workflow patterns]].
- **Inference:** **retrieval:** [[ai-enrichment-skillsets|AI enrichment and skillsets]], [[azure-ai-search|Azure AI Search]], [[embeddings-and-vector-search|Embeddings, vector and hybrid search]], [[foundry-iq|Foundry IQ]], [[indexers-and-data-sources|Indexers and data sources]], [[knowledge-bases-and-sources|Knowledge bases and knowledge sources]], [[knowledge-mining|Knowledge mining]], [[knowledge-store|Knowledge store]], [[search-indexes|Search indexes]], [[search-queries|Search queries]], [[semantic-ranking|Semantic ranking]].
- **Inference:** **responsible-ai:** [[azure-ai-content-safety|Azure AI Content Safety]], [[guardrails-and-content-filters|Guardrails and content filters]], [[prompt-injection-and-jailbreaks|Prompt injection and jailbreaks]], [[responsible-ai-principles|Responsible AI principles]], [[responsible-ai-lifecycle|Responsible generative AI lifecycle]].
- **Inference:** **vision:** [[image-generation|Image generation]], [[sora-2|Sora 2]], [[video-generation|Video generation]], [[vision-enabled-chat|Vision-enabled chat]].
- **Inference:** **language:** [[azure-language|Azure Language]], [[azure-language-mcp-server|Azure Language MCP server]], [[azure-translator|Azure Translator]], [[language-detection|Language detection]], [[named-entity-recognition|Named entity recognition]], [[pii-detection-and-redaction|PII detection and redaction]], [[text-translation|Text translation]].
- **Inference:** **speech:** [[azure-speech|Azure Speech]], [[azure-speech-mcp-server|Azure Speech MCP server]], [[voice-live-api|Azure Voice Live API]], [[ssml|Speech Synthesis Markup Language (SSML)]], [[speech-to-text|Speech to text]], [[speech-translation|Speech translation]], [[speech-capable-models|Speech-capable generative models]], [[text-to-speech|Text to speech]], [[voices-and-audio-formats|Voices and audio formats]].
- **Inference:** **extraction:** [[azure-content-understanding|Azure Content Understanding]], [[azure-document-intelligence|Azure Document Intelligence]], [[content-understanding-analyzers|Content Understanding analyzers]], [[content-understanding-client-apps|Content Understanding client applications]], [[document-intelligence-custom-models|Document Intelligence custom models]], [[document-intelligence-prebuilt-models|Document Intelligence prebuilt models]].
- **Inference:** **exam:** [[ai-103t00-course|Course AI-103T00-A]], [[ai-103-exam|Exam AI-103: Developing AI Apps and Agents on Azure]].
- **Inference:** **synthesis:** [[agent-building-options-compared]], [[corpus-gaps]], [[decision-boundaries]], [[deployment-options-compared]], [[extraction-options-compared]], [[glossary]], [[key-tensions]], [[learning-path]], [[master-synthesis]], [[naming-and-currency]], [[open-questions]], [[optimization-strategies-compared]], [[orchestration-patterns-compared]], [[overview]], [[retrieval-options-compared]], [[solution-engineering-transfer]], [[speech-and-language-options-compared]], [[tool-options-compared]].

## Tensions

**Synthesis:** The corpus mixes official Learn units, official exam/course pages, and auto-captioned episode transcripts, so objective wording and weights should come from the study guide while procedural or demo details should be treated as product-time-sensitive (SRC-191 L96–102; SRC-27 L214–240; SRC-28 L76–95). **Inference:** When a page says an area is thin, prefer [[corpus-gaps]] rather than inventing missing implementation detail.

## Implications for the exam and for practice

**Inference:** For the exam, route every scenario through four questions: required outcome, responsible component, confusable neighbour ruled out, and SDK/portal/configuration detail (SRC-191 L120–201). **Inference:** For Solution Engineering, translate the same route into discovery: desired output, required data, allowed actions, identity boundary, safety/evaluation evidence, and operations owner (SRC-230 L242–276; SRC-152 L218–233).

## Open questions

- **Stale-risk:** The wiki records captured corpus behaviour; verify live model names, API versions, portal UI, quotas, pricing, and preview availability before implementation (SRC-191 L100–102).

## Sources

- SRC-1 — [[src-1-ai-103-develop-ai-apps-agents-azure-study-cram]] — source evidence used on this page.
- SRC-18 — [[src-18-choose-endpoint-sdk]] — source evidence used on this page.
- SRC-27 — [[src-27-course-ai-103t00-develop-ai-apps-agents-azure]] — source evidence used on this page.
- SRC-28 — [[src-28-course-preview-ai-103-develop-ai-apps-agents-azure]] — source evidence used on this page.
- SRC-39 — [[src-39-deploy-models-endpoints]] — source evidence used on this page.
- SRC-53 — [[src-53-evaluate-model-performance]] — source evidence used on this page.
- SRC-89 — [[src-89-explore-model-catalog]] — source evidence used on this page.
- SRC-91 — [[src-91-extend-agent-capabilities-tools]] — source evidence used on this page.
- SRC-102 — [[src-102-ground-model-retrieval-augmented-generation]] — source evidence used on this page.
- SRC-152 — [[src-152-manage-responsible-generative-ai-solution]] — source evidence used on this page.
- SRC-155 — [[src-155-microsoft-foundry]] — source evidence used on this page.
- SRC-182 — [[src-182-plan-responsible-generative-ai-solution]] — source evidence used on this page.
- SRC-191 — [[src-191-study-guide-exam-ai-103-developing-ai-apps-agents]] — source evidence used on this page.
- SRC-230 — [[src-230-understand-ai-agents-microsoft-foundry-agent-service]] — source evidence used on this page.
