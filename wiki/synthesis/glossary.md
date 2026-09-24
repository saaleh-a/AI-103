---
title: "Glossary"
type: synthesis
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Alphabetical one-line definitions linking every compiled concept and entity page to raw-source evidence."
area: exam
source_ids: [SRC-2, SRC-4, SRC-5, SRC-6, SRC-11, SRC-12, SRC-14, SRC-17, SRC-18, SRC-19, SRC-21, SRC-22, SRC-23, SRC-25, SRC-27, SRC-28, SRC-30, SRC-32, SRC-36, SRC-37, SRC-38, SRC-39, SRC-40, SRC-51, SRC-52, SRC-53, SRC-84, SRC-85, SRC-86, SRC-87, SRC-88, SRC-89, SRC-90, SRC-91, SRC-92, SRC-93, SRC-94, SRC-95, SRC-96, SRC-98, SRC-99, SRC-100, SRC-101, SRC-102, SRC-103, SRC-104, SRC-105, SRC-107, SRC-108, SRC-110, SRC-114, SRC-115, SRC-117, SRC-124, SRC-125, SRC-126, SRC-130, SRC-131, SRC-134, SRC-141, SRC-151, SRC-153, SRC-155, SRC-156, SRC-178, SRC-179, SRC-181, SRC-182, SRC-183, SRC-184, SRC-185, SRC-186, SRC-187, SRC-188, SRC-189, SRC-190, SRC-191, SRC-194, SRC-196, SRC-200, SRC-205, SRC-206, SRC-208, SRC-209, SRC-210, SRC-212, SRC-215, SRC-219, SRC-221, SRC-222, SRC-223, SRC-224, SRC-225, SRC-226, SRC-227, SRC-229, SRC-230, SRC-231, SRC-232, SRC-233, SRC-234, SRC-235, SRC-236, SRC-237, SRC-238, SRC-240, SRC-241, SRC-242, SRC-243, SRC-244, SRC-245, SRC-246, SRC-249, SRC-250, SRC-251, SRC-252, SRC-253, SRC-254, SRC-255, SRC-256, SRC-257, SRC-258, SRC-259, SRC-260, SRC-261, SRC-263, SRC-264]
objectives: []
objective_gaps: []
tags: []
aliases: ["glossary", "terms"]
---
# Glossary

## Summary

**Synthesis:** This glossary gives one-line definitions for every compiled concept and entity page in `wiki/concepts` and `wiki/entities`; each entry links to the detailed page and cites raw corpus evidence through that page's source citations (SRC-191 L113–201).

## Scope and question

**Inference:** Use the glossary for quick recall, not mastery. The linked concept/entity pages contain the mental model, decision boundary, implementation notes, and source map.

## Synthesis

- **[[agent-framework-workflows|Agent Framework workflows]]** — Microsoft Agent Framework workflows are code-defined sequences of executors and edges with events, checkpointing, and orchestration builders. (SRC-231 L229–264)
- **[[agent-publishing|Agent publishing]]** — Moving a Foundry agent into an Agent Application, Teams, Microsoft 365 Copilot, or a stable API endpoint with identity and governance. (SRC-232 L218–224; SRC-223 L240–267)
- **[[agent-testing-and-evaluation|Agent testing and evaluation]]** — Testing agents before and after release, using playgrounds, channel tests, metrics, Application Insights, and evaluation jobs. (SRC-185 L220–224; SRC-222 L218–285; SRC-53 L276–296)
- **[[agent-tools|Agent tools]]** — How models and agents use built-in or custom tools to retrieve, compute, act, and return grounded results. (SRC-4 L216–217; SRC-91 L220–223; SRC-259 L218–228)
- **[[agent2agent-protocol|Agent2Agent (A2A) protocol]]** — A protocol for discoverable, secure agent-to-agent communication, delegation, routing, and distributed multi-agent workflows. (SRC-134 L216–218; SRC-205 L217–218; SRC-37 L218–249)
- **[[ai-agents|AI agents]]** — Agents combine models, instructions, tools, state, and controlled action to perform tasks beyond ordinary chat completion. (SRC-230 L220; SRC-28 L35–59; SRC-91 L218–230)
- **[[ai-enrichment-skillsets|AI enrichment and skillsets]]** — Skillsets are ordered AI skills run by an indexer to add enriched fields before mapping content into an Azure AI Search index. (SRC-52 L218–232; SRC-92 L237–257)
- **[[application-insights|Application Insights]]** — Telemetry destination named for tracing conversations, latency, errors and token consumption in deployed AI apps and agents. (SRC-196 L26; SRC-222 L271–275; SRC-223 L288–290)
- **[[azure-ai-content-safety|Azure AI Content Safety]]** — Azure safety service used for harmful-content detection, content filters, and additional protection in Foundry-related workflows. (SRC-196 L24; SRC-264 L36–39)
- **[[azure-ai-search|Azure AI Search]]** — Azure search service for indexing, enriching, querying and grounding data; supports knowledge mining, RAG and agent retrieval. (SRC-261 L218–228; SRC-102 L240–252)
- **[[azure-content-understanding|Azure Content Understanding]]** — Foundry Tool for multimodal extraction: analyzers turn documents, images, audio, and video into fields, JSON, and markdown. (SRC-126 L214–216; SRC-264 L12; SRC-250 L216–219)
- **[[azure-document-intelligence|Azure Document Intelligence]]** — Document-extraction service for OCR, layout, prebuilt document models, custom models, classifiers, and composed models. (SRC-117 L215–217; SRC-263 L217–218; SRC-263 L220–224)
- **[[azure-functions|Azure Functions]]** — Serverless Azure compute used in the corpus as an agent custom-tool option and an AI Search custom skill host. (SRC-104 L228–234; SRC-52 L228–230; SRC-110 L250–290)
- **[[azure-language|Azure Language]]** — Foundry Tools text-analysis service for language detection, entity extraction, and PII detection/redaction. (SRC-12 L217–220; SRC-206 L215–218)
- **[[azure-language-mcp-server|Azure Language MCP server]]** — MCP server that exposes Azure Language text-analysis capabilities as agent tools in Foundry. (SRC-235 L215–222; SRC-200 L215–221)
- **[[azure-openai|Azure OpenAI]]** — Azure-billed OpenAI models and the Azure OpenAI endpoint/API surface used from Microsoft Foundry projects. (SRC-89 L216–218; SRC-18 L218)
- **[[azure-speech|Azure Speech]]** — Foundry Tools speech service and SDK capabilities for speech recognition, synthesis, SSML, translation, and real-time voice. (SRC-115 L216–221; SRC-96 L225–226)
- **[[azure-speech-mcp-server|Azure Speech MCP server]]** — MCP server that lets agents discover and call Azure Speech speech-to-text and text-to-speech tools using audio files in Blob Storage. (SRC-236 L215–243; SRC-25 L239–252)
- **[[azure-translator|Azure Translator]]** — Foundry Tools translation service for text, transliteration, documents, supported-language lists, and custom translation models. (SRC-227 L216–220)
- **[[voice-live-api|Azure Voice Live API]]** — Low-latency speech-to-speech API for interruptible voice agents using WebSockets, events, session settings, VAD, and optional avatars. (SRC-88 L216–218; SRC-208 L216)
- **[[chat-completions-api|Chat Completions API]]** — Established OpenAI-compatible message-list API useful for maintenance and compatibility, with conversation state managed by app code. (SRC-98 L217; SRC-18 L221)
- **[[code-interpreter-tool|Code interpreter tool]]** — Built-in tool that lets a model or agent generate and run Python in a sandbox for computation and file analysis. (SRC-254 L218–224; SRC-91 L233)
- **[[concurrent-orchestration|Concurrent orchestration]]** — Parallel independent agents receive the same task, then their separate outputs are gathered or combined. (SRC-241 L218–221)
- **[[content-understanding-analyzers|Content Understanding analyzers]]** — Reusable Content Understanding artifacts that combine a base type, models, field schema, extraction methods, confidence, and grounding. (SRC-264 L23–31; SRC-30 L216–222; SRC-264 L20–22)
- **[[content-understanding-client-apps|Content Understanding client applications]]** — Client flow for Content Understanding: get endpoint/auth, call an analyzer, poll the async operation, and read fields, markdown, metadata, and JSON. (SRC-184 L218–234; SRC-250 L216–229; SRC-6 L216–243)
- **[[conversation-state|Conversation state]]** — How chat and agent apps preserve context across turns: message lists, response IDs, manual history and agent session abstractions. (SRC-98 L223–232; SRC-99 L279–288; SRC-237 L230)
- **[[ai-103t00-course|Course AI-103T00-A]]** — Four-day intermediate course for developers building Foundry AI apps and agents, organized into four learning paths. (SRC-27 L199–210; SRC-28 L39–43)
- **[[custom-tool-options|Custom tool options]]** — Ways to extend Foundry agents with custom actions: function tools, Azure Functions, OpenAPI, Logic Apps and MCP. (SRC-179 L217–230; SRC-104 L216–250; SRC-91 L274–292)
- **[[development-tools-and-approaches|Development tools and approaches]]** — How to choose between the Foundry portal, playgrounds, VS Code, GitHub, SDKs, REST APIs and tool-specific SDKs. (SRC-51 L218–238; SRC-84 L218–284)
- **[[document-intelligence-custom-models|Document Intelligence custom models]]** — Training labelled template or neural extraction models, using classifiers, and composing models for multiple document types. (SRC-224 L217; SRC-224 L218–235; SRC-224 L257–258)
- **[[document-intelligence-prebuilt-models|Document Intelligence prebuilt models]]** — Read, layout, and document-type models for extracting text, structure, and common business fields without custom training. (SRC-249 L230–231; SRC-263 L221–223; SRC-251 L220–223)
- **[[embeddings-and-vector-search|Embeddings, vector and hybrid search]]** — Embeddings turn text into vectors for similarity search; the corpus defines vector search and only briefly names hybrid search for grounding. (SRC-102 L232–250)
- **[[endpoints-and-sdk-choice|Endpoints and SDK choice]]** — Which endpoint and SDK to use: project endpoint with Foundry SDK, Azure OpenAI endpoint with OpenAI SDK, or tool-specific endpoints. (SRC-18 L217–221; SRC-18 L292–307; SRC-96 L233)
- **[[ai-103-exam|Exam AI-103: Developing AI Apps and Agents on Azure]]** — Certification exam for Azure AI engineers building Foundry-based AI apps and agents, with five weighted domains. (SRC-191 L102–105; SRC-191 L100–118)
- **[[file-search-tool|File search tool]]** — Built-in retrieval tool that grounds a model or agent in uploaded, indexed files through semantic/vector search. (SRC-255 L218–227; SRC-91 L234–235)
- **[[fine-tuning|Fine-tuning]]** — Adapting a pretrained model with task-specific examples for consistent style, format, tool use or distilled behavior. (SRC-95 L217–225; SRC-95 L245–256)
- **[[foundry-agent-types|Foundry agent types]]** — Foundry distinguishes declarative prompt agents, declarative workflow agents, and hosted agents by configuration style, orchestration needs, and code ownership. (SRC-230 L263–269; SRC-212 L217–219)
- **[[foundry-iq|Foundry IQ]]** — Managed knowledge platform for AI agents, built on Azure AI Search, that shares knowledge bases and retrieval across agents. (SRC-141 L218–225; SRC-85 L217–221)
- **[[model-catalog|Foundry model catalog]]** — Microsoft Foundry's portal catalog for discovering, filtering, comparing and starting deployment of models from Azure, partners and community sources. (SRC-89 L215; SRC-114 L213–216)
- **[[foundry-resources-and-projects|Foundry resources and projects]]** — The Foundry hierarchy: an Azure resource hosts projects; projects organize models, agents, tools, knowledge, endpoints and app assets. (SRC-155 L15–22)
- **[[foundry-toolkit-for-vs-code|Foundry Toolkit for Visual Studio Code]]** — VS Code extension for browsing Foundry projects, configuring agents in Designer/YAML, testing in playgrounds, and deploying hosted agents. (SRC-51 L221–227; SRC-190 L220–222)
- **[[foundry-tools|Foundry Tools]]** — Prebuilt AI APIs and models in Microsoft Foundry for language, speech, translation, document extraction and multimodal content understanding. (SRC-96 L218–232)
- **[[foundry-workflows|Foundry workflows]]** — Visual/YAML Foundry workflows orchestrate agents, nodes, variables, conditions, loops, human input, versions, and code invocation. (SRC-238 L220–224; SRC-36 L220–236; SRC-151 L220–233)
- **[[function-calling|Function calling]]** — Tool pattern where the model requests a named function call, application code runs it, and the result is returned to the model. (SRC-256 L219–220; SRC-4 L225–230)
- **[[generation-parameters|Generation parameters]]** — Runtime controls such as temperature, top_p and token limits that shape response variability and length. (SRC-178 L273–279; SRC-99 L245–251; SRC-39 L261)
- **[[generative-ai-fundamentals|Generative AI fundamentals]]** — AI apps use models to interpret inputs and generate responses; generative AI uses LLMs, prompts, context and output tokens. (SRC-260 L218; SRC-260 L223–224)
- **[[group-chat-orchestration|Group chat orchestration]]** — A chat manager coordinates a shared multi-agent conversation and optional human participation. (SRC-242 L218–219)
- **[[guardrails-and-content-filters|Guardrails and content filters]]** — Foundry guardrails and content filters suppress unsafe prompts and responses using harm categories, severity levels, and related controls. (SRC-156 L229–231)
- **[[handoff-orchestration|Handoff orchestration]]** — Dynamic one-agent-at-a-time transfer of control to the specialist best suited to the evolving task. (SRC-243 L218–220)
- **[[human-in-the-loop-approval|Human-in-the-loop and approvals]]** — Patterns for pausing agent or workflow execution for approval, extra context, escalation or admin publishing review. (SRC-240 L226–239; SRC-105 L222–224; SRC-242 L217–226)
- **[[image-generation|Image generation]]** — Generating original images from natural-language prompts with Foundry image models, playgrounds, and Images APIs. (SRC-258 L219–223; SRC-86 L214–215; SRC-32 L214–218)
- **[[a2a-agent-implementation|Implementing A2A agents]]** — Implementation path for A2A agents: define skills and card, implement executor logic, host HTTP server, then connect clients. (SRC-37 L218–249; SRC-107 L12–36; SRC-103 L12–39)
- **[[indexers-and-data-sources|Indexers and data sources]]** — Indexers start from source data, crack documents, run enrichment and map the final structure into an Azure AI Search index. (SRC-92 L218–221; SRC-92 L269–271)
- **[[keyless-authentication|Keyless authentication and role-based access]]** — How the corpus contrasts API keys with Microsoft Entra identity, DefaultAzureCredential, managed identities and RBAC. (SRC-18 L220; SRC-39 L267; SRC-87 L221–224)
- **[[knowledge-bases-and-sources|Knowledge bases and knowledge sources]]** — Foundry IQ knowledge bases group related business knowledge and connect multiple source types for agent retrieval and citations. (SRC-85 L223–233; SRC-22 L12–15)
- **[[knowledge-mining|Knowledge mining]]** — Knowledge mining uses Azure AI Search to ingest, enrich, index, optionally persist and query data for insight and analytics. (SRC-261 L218–228; SRC-130 L216–218; SRC-215 L218–219)
- **[[knowledge-store|Knowledge store]]** — A knowledge store persists enriched outputs from an Azure AI Search skillset as JSON object, table or image-file projections. (SRC-181 L218–222)
- **[[language-detection|Language detection]]** — Identify a document or phrase's language and return a confidence score for the prediction. (SRC-40 L217–219)
- **[[magentic-orchestration|Magentic orchestration]]** — Manager-led adaptive orchestration for complex open-ended tasks with planning, delegation, and a task ledger. (SRC-244 L218–221)
- **[[mcp-tool-integration|MCP tool integration]]** — How agents connect to MCP servers, discover tools dynamically, invoke them, restrict access and handle approval. (SRC-233 L217–239; SRC-235 L236–243; SRC-108 L217–233)
- **[[microsoft-365-agent-integration|Microsoft 365 agent integration]]** — Bringing Foundry agents into Teams and Microsoft 365 Copilot, with publishing, Work IQ data access, permissions, testing, and Toolkit extensions. (SRC-125 L216–226; SRC-209 L218–224)
- **[[microsoft-365-agents-toolkit|Microsoft 365 Agents Toolkit]]** — Advanced Microsoft 365 tooling for proxy-app integration, custom SSO, middleware, multi-environment deployment, debugging, and CI/CD. (SRC-5 L218–223; SRC-232 L238–239)
- **[[microsoft-agent-framework|Microsoft Agent Framework]]** — Open-source SDK for single and multi-agent apps: agents, chat clients, sessions, tools, providers, and graph-based workflows. (SRC-124 L215–220; SRC-237 L218–232; SRC-234 L219–238)
- **[[microsoft-entra-id|Microsoft Entra ID]]** — Identity provider used for production Foundry access, keyless Voice Live, published agents, app registration and RBAC. (SRC-18 L220; SRC-88 L230–231; SRC-185 L223–228)
- **[[microsoft-foundry|Microsoft Foundry]]** — Azure AI development platform that organizes projects, models, agents, tools, knowledge, endpoints, evaluation and operations. (SRC-155 L12–22; SRC-183 L140–219)
- **[[foundry-agent-service|Microsoft Foundry Agent Service]]** — Managed Foundry service for creating, hosting, scaling, securing, tracing, publishing, and integrating AI agents with tools and conversation state. (SRC-230 L258–262; SRC-84 L258–280; SRC-230 L270–276)
- **[[foundry-sdk|Microsoft Foundry SDK]]** — Project-level SDK around AIProjectClient for Foundry project operations, OpenAI-compatible clients, agents, tracing, connections and evaluations. (SRC-18 L223–256)
- **[[model-and-app-evaluation|Model and app evaluation]]** — Manual and automated ways to measure model, app and agent quality, safety, groundedness and regression risk. (SRC-53 L213–219; SRC-53 L240–296)
- **[[model-benchmarks|Model benchmarks]]** — Quality, safety, cost and performance metrics used in Foundry leaderboards and model cards to compare model trade-offs before deployment. (SRC-188 L215; SRC-114 L215–216)
- **[[model-context-protocol|Model Context Protocol (MCP)]]** — Open client-server protocol for agents to discover and call external tools, data sources, resources and prompts. (SRC-235 L217–223; SRC-236 L217–223; SRC-233 L217–239)
- **[[model-deployment-types|Model deployment types]]** — Deployment choices in Foundry: global, data-zone, regional, provisioned, batch, serverless API, managed compute and developer deployments. (SRC-39 L217–226; SRC-189 L237–314; SRC-196 L16)
- **[[model-selection|Model selection]]** — A requirements-first process for choosing LLMs, SLMs, multimodal, speech, image, video, embedding or Foundry Tool options. (SRC-191 L121; SRC-114 L213–216)
- **[[multi-agent-orchestration|Multi-agent orchestration]]** — Coordinating specialized agents through Agent Framework workflows, shared patterns, runtime execution, and async results. (SRC-231 L218–226)
- **[[named-entity-recognition|Named entity recognition]]** — Extract and categorize entities such as people, organizations, locations, dates, addresses, email, and URLs from text. (SRC-93 L217–224)
- **[[observability-and-tracing|Observability and tracing]]** — What the corpus does and does not teach about traces, metrics, telemetry, token analytics, latency and agent error analysis. (SRC-222 L262–275; SRC-151 L220–222; SRC-23 L269–278)
- **[[openai-sdk|OpenAI SDK]]** — OpenAI-compatible client libraries for model inference against OpenAI, Azure OpenAI deployments and Foundry models. (SRC-18 L257–258)
- **[[pii-detection-and-redaction|PII detection and redaction]]** — Find sensitive personal data in text and optionally return masked/redacted text for privacy protection. (SRC-94 L217–225)
- **[[model-playgrounds|Playgrounds]]** — No-code Foundry testing surfaces for model, agent, image, video and multimodal behavior before app integration. (SRC-90 L218–225; SRC-39 L255–264; SRC-14 L236–238)
- **[[power-fx|Power Fx]]** — Power Fx is the low-code Excel-like formula language used in Foundry workflows for variables, conditions, transformations, and loops. (SRC-11 L220–236; SRC-219 L221)
- **[[prompt-engineering|Prompt engineering]]** — Designing instructions, messages, examples and prompt structure to steer model behavior before heavier optimization. (SRC-178 L213–220; SRC-19 L223–225)
- **[[prompt-injection-and-jailbreaks|Prompt injection and jailbreaks]]** — Direct jailbreaks and indirect prompt injection are attempts to subvert AI behaviour; Foundry prompt shields and guardrails detect abuse. (SRC-153 L237–242; SRC-156 L231)
- **[[quotas-rate-limits-and-cost|Quotas, rate limits and cost]]** — Thin corpus coverage of quota, throughput, token usage, rate limits and cost for Foundry model and agent workloads. (SRC-188 L243–263; SRC-39 L217–226; SRC-99 L279–288)
- **[[responses-api|Responses API]]** — Recommended Foundry response API for stateful, multi-turn generation, response chaining, direct models, streaming and async use. (SRC-99 L217; SRC-99 L225)
- **[[responsible-ai-principles|Responsible AI principles]]** — Microsoft's six responsible AI principles and how they guide design, testing, transparency, governance, and safety work. (SRC-186 L220–237; SRC-183 L514–523)
- **[[responsible-ai-lifecycle|Responsible generative AI lifecycle]]** — The map, measure, mitigate, and manage loop for planning, testing, reducing, releasing, and operating generative AI harms. (SRC-182 L12–18)
- **[[retrieval-augmented-generation|Retrieval-augmented generation (RAG)]]** — Grounding pattern that retrieves trusted content, adds it to the prompt, and generates answers with current, domain-specific context. (SRC-102 L227–230)
- **[[search-indexes|Search indexes]]** — Search indexes are JSON-document collections with configured fields that apps query, filter, facet and sort in Azure AI Search. (SRC-187 L218–231)
- **[[search-queries|Search queries]]** — How Azure AI Search queries use Lucene syntax, searchable/filterable/sortable/facetable fields, facets, filters, select, and scoring. (SRC-187 L217–236)
- **[[semantic-ranking|Semantic ranking]]** — The corpus names semantic ranking as an AI-based retrieval-quality technique beyond keyword matching, but gives limited configuration detail. (SRC-102 L248; SRC-194 L223–227)
- **[[sequential-orchestration|Sequential orchestration]]** — Fixed-order agent pipeline where each agent's output becomes the next agent's input. (SRC-245 L218–220)
- **[[sora-2|Sora 2]]** — OpenAI video-generation model available in Foundry for text, image-reference, and remix workflows. (SRC-38 L214; SRC-100 L220–230; SRC-101 L214–227)
- **[[ssml|Speech Synthesis Markup Language (SSML)]]** — XML markup for controlling synthesized speech style, pauses, pronunciation, prosody, say-as rules, and inserted audio. (SRC-246 L218–234)
- **[[speech-to-text|Speech to text]]** — Converting spoken audio into text with Azure Speech SDK/API, agent tools, or speech-capable models. (SRC-252 L218–230; SRC-236 L228–243; SRC-17 L216–221)
- **[[speech-translation|Speech translation]]** — Translating spoken input with Azure Speech: configure source and target languages, recognize translations as text, then optionally synthesize translated speech. (SRC-115 L219; SRC-226 L12–28)
- **[[speech-capable-models|Speech-capable generative models]]** — Generative audio models in Foundry for speech-to-text and text-to-speech, including gpt-4o transcribe and TTS families. (SRC-17 L218–221; SRC-225 L216–224; SRC-221 L216–223)
- **[[text-to-speech|Text to speech]]** — Converting text into spoken audio using Azure Speech synthesis, voices, audio output settings, SSML, agent tools, or TTS models. (SRC-253 L218–230; SRC-21 L218–230; SRC-246 L218–234)
- **[[text-translation|Text translation]]** — Convert text meaning between languages with Azure Translator or LLM-powered translation flows, and distinguish translation from transliteration. (SRC-227 L216–220; SRC-229 L216–219)
- **[[video-generation|Video generation]]** — Generating, polling, downloading, remixing, and reference-guiding videos with Sora 2 in Foundry. (SRC-38 L214–227; SRC-100 L214–227; SRC-101 L214–216)
- **[[vision-enabled-chat|Vision-enabled chat]]** — Chat patterns where a multimodal model receives text plus image input and returns grounded visual answers. (SRC-131 L211–212; SRC-210 L213–214; SRC-191 L168–179)
- **[[voices-and-audio-formats|Voices and audio formats]]** — Choosing neural voices and output/input audio formats for Azure Speech synthesis, MCP tools, and real-time voice scenarios. (SRC-21 L218–230; SRC-236 L232–233; SRC-88 L216–224)
- **[[web-search-tool|Web search tool]]** — Built-in grounding tool that lets a model or agent search current public web content during response generation. (SRC-257 L218–220)
- **[[work-iq|Work IQ]]** — A preview CLI and MCP server that lets AI assistants query Microsoft 365 Copilot data through Microsoft Graph with user permissions. (SRC-2 L218–220; SRC-2 L296)
- **[[workflow-patterns|Workflow patterns]]** — Foundry workflow patterns are predefined shapes: sequential, human-in-the-loop, and group chat, chosen by data flow and oversight needs. (SRC-105 L220–224)

## Evidence map

| **Synthesis:** Claim | Sources |
|---|---|
| The glossary covers the wiki's compiled concept and entity layer for AI-103 study and navigation. | SRC-191 L113–201 |
| **Synthesis:** Individual definitions cite the raw sources shown inline beside each term. | See each glossary entry. |

## Tensions

**Stale-risk:** Product names, service names, model names, SDK surfaces, and portal labels can change after capture; use [[naming-and-currency]] before treating a term as current production wording (SRC-191 L100–102).

## Implications for the exam and for practice

**Inference:** A definition is only the first layer. For exam readiness, follow each linked page until you can state the problem it solves, when to use it, when not to use it, and the closest confusion.

## Open questions

- **Inference:** Terms with fast-moving product names should be rechecked against live Microsoft documentation before customer-facing use.

## Sources

- SRC-2 — [[src-2-access-microsoft-365-data-work-iq]] — source evidence used on this page.
- SRC-4 — [[src-4-add-tools-azure-ai-agent]] — source evidence used on this page.
- SRC-5 — [[src-5-advanced-microsoft-365-agents-toolkit-complex-integration-scenarios]] — source evidence used on this page.
- SRC-6 — [[src-6-analyze-content]] — source evidence used on this page.
- SRC-11 — [[src-11-apply-power-fx-workflows]] — source evidence used on this page.
- SRC-12 — [[src-12-azure-language-microsoft-foundry-tools]] — source evidence used on this page.
- SRC-14 — [[src-14-build-first-agent-microsoft-foundry]] — source evidence used on this page.
- SRC-17 — [[src-17-choose-speech-capable-model]] — source evidence used on this page.
- SRC-18 — [[src-18-choose-endpoint-sdk]] — source evidence used on this page.
- SRC-19 — [[src-19-compare-combine-optimization-strategies]] — source evidence used on this page.
- SRC-21 — [[src-21-configure-audio-format-voices]] — source evidence used on this page.
- SRC-22 — [[src-22-configure-data-sources-knowledge-bases]] — source evidence used on this page.
- SRC-23 — [[src-23-configure-retrieval-foundry-iq]] — source evidence used on this page.
- SRC-25 — [[src-25-connect-speech-mcp-server-agent]] — source evidence used on this page.
- SRC-27 — [[src-27-course-ai-103t00-develop-ai-apps-agents-azure]] — source evidence used on this page.
- SRC-28 — [[src-28-course-preview-ai-103-develop-ai-apps-agents-azure]] — source evidence used on this page.
- SRC-30 — [[src-30-create-content-understanding-analyzer]] — source evidence used on this page.
- SRC-32 — [[src-32-create-client-application-that-uses-image-generation-model]] — source evidence used on this page.
- SRC-36 — [[src-36-create-workflows-microsoft-foundry]] — source evidence used on this page.
- SRC-37 — [[src-37-define-a2a-agent]] — source evidence used on this page.
- SRC-38 — [[src-38-deploy-video-generating-model]] — source evidence used on this page.
- SRC-39 — [[src-39-deploy-models-endpoints]] — source evidence used on this page.
- SRC-40 — [[src-40-detect-language]] — source evidence used on this page.
- SRC-51 — [[src-51-developer-tools-sdks]] — source evidence used on this page.
- SRC-52 — [[src-52-enrich-extracted-data-ai-skills]] — source evidence used on this page.
- SRC-53 — [[src-53-evaluate-model-performance]] — source evidence used on this page.
- SRC-84 — [[src-84-explore-development-approaches]] — source evidence used on this page.
- SRC-85 — [[src-85-explore-foundry-iq]] — source evidence used on this page.
- SRC-86 — [[src-86-explore-image-generation-models-microsoft-foundry-portal]] — source evidence used on this page.
- SRC-87 — [[src-87-explore-ai-voice-live-client-library-python]] — source evidence used on this page.
- SRC-88 — [[src-88-explore-azure-voice-live-api]] — source evidence used on this page.
- SRC-89 — [[src-89-explore-model-catalog]] — source evidence used on this page.
- SRC-90 — [[src-90-explore-model-playground]] — source evidence used on this page.
- SRC-91 — [[src-91-extend-agent-capabilities-tools]] — source evidence used on this page.
- SRC-92 — [[src-92-extract-data-indexer]] — source evidence used on this page.
- SRC-93 — [[src-93-extract-entities]] — source evidence used on this page.
- SRC-94 — [[src-94-extract-personally-identifiable-information-pii]] — source evidence used on this page.
- SRC-95 — [[src-95-fine-tune-model-consistent-behavior]] — source evidence used on this page.
- SRC-96 — [[src-96-foundry-tools]] — source evidence used on this page.
- SRC-98 — [[src-98-generate-responses-chatcompletions-api]] — source evidence used on this page.
- SRC-99 — [[src-99-generate-responses-responses-api-foundry-sdk]] — source evidence used on this page.
- SRC-100 — [[src-100-generate-video-prompt]] — source evidence used on this page.
- SRC-101 — [[src-101-generate-video-python]] — source evidence used on this page.
- SRC-102 — [[src-102-ground-model-retrieval-augmented-generation]] — source evidence used on this page.
- SRC-103 — [[src-103-host-a2a-server]] — source evidence used on this page.
- SRC-104 — [[src-104-how-integrate-custom-tools]] — source evidence used on this page.
- SRC-105 — [[src-105-identify-workflow-patterns]] — source evidence used on this page.
- SRC-107 — [[src-107-implement-agent-executor]] — source evidence used on this page.
- SRC-108 — [[src-108-integrate-agent-tools-mcp-server-client]] — source evidence used on this page.
- SRC-110 — [[src-110-integrate-custom-tools-agent-episode-8]] — source evidence used on this page.
- SRC-114 — [[src-114-introduction-select-deploy-evaluate-microsoft-foundry-models]] — source evidence used on this page.
- SRC-115 — [[src-115-introduction-create-speech-enabled-apps-azure-speech-microsoft-foundry]] — source evidence used on this page.
- SRC-117 — [[src-117-introduction-extract-data-azure-document-intelligence]] — source evidence used on this page.
- SRC-124 — [[src-124-introduction-develop-ai-agent-microsoft-agent-framework]] — source evidence used on this page.
- SRC-125 — [[src-125-introduction-integrate-agent-microsoft-365]] — source evidence used on this page.
- SRC-126 — [[src-126-introduction-create-multimodal-analysis-solution-azure-content-understanding]] — source evidence used on this page.
- SRC-130 — [[src-130-introduction-create-knowledge-mining-solution-azure-ai-search]] — source evidence used on this page.
- SRC-131 — [[src-131-introduction-develop-vision-enabled-generative-ai-application]] — source evidence used on this page.
- SRC-134 — [[src-134-introduction-discover-azure-ai-agents-a2a]] — source evidence used on this page.
- SRC-141 — [[src-141-introduction-build-knowledge-enhanced-ai-agents-foundry-iq]] — source evidence used on this page.
- SRC-151 — [[src-151-maintain-workflows-microsoft-foundry]] — source evidence used on this page.
- SRC-153 — [[src-153-map-potential-harms]] — source evidence used on this page.
- SRC-155 — [[src-155-microsoft-foundry]] — source evidence used on this page.
- SRC-156 — [[src-156-mitigate-potential-harms]] — source evidence used on this page.
- SRC-178 — [[src-178-optimize-model-output-prompt-engineering]] — source evidence used on this page.
- SRC-179 — [[src-179-options-implementing-custom-tools]] — source evidence used on this page.
- SRC-181 — [[src-181-persist-extracted-information-knowledge-store]] — source evidence used on this page.
- SRC-182 — [[src-182-plan-responsible-generative-ai-solution]] — source evidence used on this page.
- SRC-183 — [[src-183-plan-prepare-develop-ai-solutions-azure-episode-1]] — source evidence used on this page.
- SRC-184 — [[src-184-prepare-ai-content-understanding-api]] — source evidence used on this page.
- SRC-185 — [[src-185-publish-agent-foundry-portal-teams]] — source evidence used on this page.
- SRC-186 — [[src-186-responsible-ai]] — source evidence used on this page.
- SRC-187 — [[src-187-search-index]] — source evidence used on this page.
- SRC-188 — [[src-188-select-models-benchmarks]] — source evidence used on this page.
- SRC-189 — [[src-189-select-deploy-evaluate-microsoft-foundry-models-episode-2]] — source evidence used on this page.
- SRC-190 — [[src-190-set-up-visual-studio-code-agent-development]] — source evidence used on this page.
- SRC-191 — [[src-191-study-guide-exam-ai-103-developing-ai-apps-agents]] — source evidence used on this page.
- SRC-194 — [[src-194-summary-build-knowledge-enhanced-ai-agents-foundry-iq]] — source evidence used on this page.
- SRC-196 — [[src-196-summary-select-deploy-evaluate-microsoft-foundry-models]] — source evidence used on this page.
- SRC-200 — [[src-200-summary-develop-text-analysis-agent-azure-language-mcp-server]] — source evidence used on this page.
- SRC-205 — [[src-205-summary-discover-azure-ai-agents-a2a]] — source evidence used on this page.
- SRC-206 — [[src-206-summary-analyze-text-azure-language-foundry-tools]] — source evidence used on this page.
- SRC-208 — [[src-208-summary-develop-azure-speech-voice-live-agent-microsoft-foundry]] — source evidence used on this page.
- SRC-209 — [[src-209-summary-integrate-agent-microsoft-365]] — source evidence used on this page.
- SRC-210 — [[src-210-summary-develop-vision-enabled-generative-ai-application]] — source evidence used on this page.
- SRC-212 — [[src-212-summary-develop-ai-agents-microsoft-foundry-visual-studio-code]] — source evidence used on this page.
- SRC-215 — [[src-215-summary-create-knowledge-mining-solution-azure-ai-search]] — source evidence used on this page.
- SRC-219 — [[src-219-summary-build-agent-driven-workflows-microsoft-foundry]] — source evidence used on this page.
- SRC-221 — [[src-221-synthesize-speech]] — source evidence used on this page.
- SRC-222 — [[src-222-test-iterate-integrated-agent]] — source evidence used on this page.
- SRC-223 — [[src-223-test-deploy-integrate-agents]] — source evidence used on this page.
- SRC-224 — [[src-224-train-custom-models]] — source evidence used on this page.
- SRC-225 — [[src-225-transcribe-speech]] — source evidence used on this page.
- SRC-226 — [[src-226-translate-speech]] — source evidence used on this page.
- SRC-227 — [[src-227-translate-text]] — source evidence used on this page.
- SRC-229 — [[src-229-translation-microsoft-foundry]] — source evidence used on this page.
- SRC-230 — [[src-230-understand-ai-agents-microsoft-foundry-agent-service]] — source evidence used on this page.
- SRC-231 — [[src-231-understand-agent-orchestration]] — source evidence used on this page.
- SRC-232 — [[src-232-understand-foundry-agent-publishing-options]] — source evidence used on this page.
- SRC-233 — [[src-233-understand-mcp-tool-discovery]] — source evidence used on this page.
- SRC-234 — [[src-234-understand-microsoft-agent-framework-ai-agents]] — source evidence used on this page.
- SRC-235 — [[src-235-understand-azure-language-mcp-server]] — source evidence used on this page.
- SRC-236 — [[src-236-understand-azure-speech-mcp-server]] — source evidence used on this page.
- SRC-237 — [[src-237-understand-microsoft-agent-framework]] — source evidence used on this page.
- SRC-238 — [[src-238-understand-workflows]] — source evidence used on this page.
- SRC-240 — [[src-240-azure-ai-agents-mcp-servers]] — source evidence used on this page.
- SRC-241 — [[src-241-concurrent-orchestration]] — source evidence used on this page.
- SRC-242 — [[src-242-group-chat-orchestration]] — source evidence used on this page.
- SRC-243 — [[src-243-handoff-orchestration]] — source evidence used on this page.
- SRC-244 — [[src-244-magentic-orchestration]] — source evidence used on this page.
- SRC-245 — [[src-245-sequential-orchestration]] — source evidence used on this page.
- SRC-246 — [[src-246-speech-synthesis-markup-language]] — source evidence used on this page.
- SRC-249 — [[src-249-prebuilt-models]] — source evidence used on this page.
- SRC-250 — [[src-250-content-understanding-api]] — source evidence used on this page.
- SRC-251 — [[src-251-document-intelligence-studio]] — source evidence used on this page.
- SRC-252 — [[src-252-speech-text-api]] — source evidence used on this page.
- SRC-253 — [[src-253-text-speech-api]] — source evidence used on this page.
- SRC-254 — [[src-254-code-interpreter-tool]] — source evidence used on this page.
- SRC-255 — [[src-255-file-search-tool]] — source evidence used on this page.
- SRC-256 — [[src-256-function-tool]] — source evidence used on this page.
- SRC-257 — [[src-257-web-search-tool]] — source evidence used on this page.
- SRC-258 — [[src-258-what-are-image-generation-models]] — source evidence used on this page.
- SRC-259 — [[src-259-what-are-tools]] — source evidence used on this page.
- SRC-260 — [[src-260-what-is-ai]] — source evidence used on this page.
- SRC-261 — [[src-261-what-is-azure-ai-search]] — source evidence used on this page.
- SRC-263 — [[src-263-what-is-azure-document-intelligence]] — source evidence used on this page.
- SRC-264 — [[src-264-what-is-content-understanding]] — source evidence used on this page.
