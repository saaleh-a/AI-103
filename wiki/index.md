---
title: Index — AI-103 wiki
type: index
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: Catalogue of all 386 content pages — 265 sources, 70 concepts, 33 entities, 18 synthesis pages.
area: corpus
source_ids: []
tags: [index]
aliases: [index, home]
---

# AI-103 wiki — index

A compiled knowledge layer over the 265 raw sources in `corpus/` (SRC-1 … SRC-265) for
**AI-103: Developing AI Apps and Agents on Azure** — Microsoft Foundry, models, generative AI
apps, agents and orchestration, retrieval, vision, language, speech, information extraction
and responsible AI. **Start with the [[overview]].** Rules are in `schema.md`; the improvement
loop is in `program.md`; history is in [[log]]; health is in [[lint-report]]. Navigation:
[[corpus-map]] (the course structure, source by source) and [[objective-map]] (the 64 official
exam objectives → wiki pages → sources).

**386 content pages** · 265 sources · 70 concepts · 33 entities · 18 synthesis · regenerated 2026-09-24 by `scripts/build_index.py`.

Status flags: `disputed` holds an unresolved conflict · `stale` time-sensitive · `stub`
near-empty capture · `seed` thin but correct. Unflagged pages are `active`.

Graphs: raw sources — `graphify-out/graph.html`; this wiki — `graphify-out-wiki/graph.html`.

## Start here — synthesis

- [[overview|Overview — AI-103 in one page]] `stub` — Entry point: what the corpus teaches, how the domains fit, where to start.
- [[master-synthesis|Master synthesis — how an Azure AI solution fits together]] `stub` — The layered architecture across all domains: app, model, agent, tools, knowledge, identity, safety, evaluation, operations.
- [[learning-path|Learning path]] `stub` — A prerequisite-ordered route through the wiki aligned with exam domains and weights.
- [[decision-boundaries|Decision boundaries — confusable technologies]] `stub` — Hub of the pairs and groups the exam can confuse, with the deciding details and links to comparisons.
- [[key-tensions|Key tensions across sources]] `stub` — Where sources disagree or qualify each other.
- [[naming-and-currency|Naming and currency]] `stub` — Product renames and preview/currency risks found across the corpus.
- [[corpus-gaps|Corpus gaps]] `stub` — Official objectives and topics the corpus names but does not teach, and thin areas.
- [[open-questions|Open questions]] `stub` — Questions the corpus raises but does not answer; sources to seek.
- [[glossary|Glossary]] `stub` — Short definitions of the corpus's terms, each linked to its page.
- [[agent-building-options-compared|Agent-building options compared]] `stub` — Foundry Agent Service (portal/SDK), VS Code toolkit, Agent Framework, Microsoft 365 Agents Toolkit.
- [[deployment-options-compared|Deployment and access options compared]] `stub` — Deployment types, endpoints, authentication and cost/throughput trade-offs side by side.
- [[extraction-options-compared|Information extraction options compared]] `stub` — Content Understanding vs Document Intelligence vs Azure Language vs vision-capable models vs AI Search enrichment.
- [[optimization-strategies-compared|Optimization strategies compared]] `stub` — Prompt engineering, RAG and fine-tuning — what each fixes and how they combine.
- [[orchestration-patterns-compared|Orchestration patterns compared]] `stub` — Sequential, concurrent, handoff, group chat, Magentic; Foundry workflows vs Agent Framework workflows.
- [[retrieval-options-compared|Retrieval and grounding options compared]] `stub` — File search vs Azure AI Search vs Foundry IQ vs web search; keyword vs vector vs hybrid vs semantic.
- [[solution-engineering-transfer|Solution Engineering transfer]] `stub` — Customer signals, discovery questions and trade-offs that map to AI-103 capabilities.
- [[speech-and-language-options-compared|Speech and language options compared]] `stub` — Speech SDK vs Voice Live vs speech-capable models vs MCP servers; Translator vs LLM translation.
- [[tool-options-compared|Tool integration options compared]] `stub` — Built-in tools vs function tools vs OpenAPI vs Azure Functions vs MCP vs A2A.

## Concepts

### Microsoft Foundry platform, deployment, security and operations

- [[development-tools-and-approaches|Development tools and approaches]] `stub` — Portal vs VS Code vs SDKs vs REST vs CLI; which surface fits which task.
- [[endpoints-and-sdk-choice|Endpoints and SDK choice]] `stub` — Foundry project endpoint vs Azure OpenAI endpoint vs Foundry Tools endpoints, and which SDK talks to which.
- [[foundry-resources-and-projects|Foundry resources and projects]] `stub` — The Azure resource and project hierarchy, what each owns (deployments, connections, agents), and how apps address a project endpoint.
- [[keyless-authentication|Keyless authentication and role-based access]] `stub` — API keys vs Microsoft Entra ID (DefaultAzureCredential, managed identity) and the roles that grant access.
- [[model-deployment-types|Model deployment types]] `stub` — Standard / Global Standard / Data Zone / provisioned / batch / serverless / managed compute deployments and when each fits.
- [[observability-and-tracing|Observability and tracing]] `stub` — Tracing, token and latency analytics, monitoring and error analysis for models and agents.
- [[quotas-rate-limits-and-cost|Quotas, rate limits and cost]] `stub` — Quota and throughput units, rate limiting and cost trade-offs for model and agent workloads.

### Models: selection, prompting, tuning and evaluation

- [[fine-tuning|Fine-tuning]] `stub` — When and how to fine-tune (supervised, reinforcement, distillation), data format, cost and maintenance.
- [[generation-parameters|Generation parameters]] `stub` — Temperature, top-p, token limits and related settings, and their effect on output.
- [[generative-ai-fundamentals|Generative AI fundamentals]] `stub` — Layers of AI, machine learning and generative AI; language models, tokens, prompts and completions.
- [[model-and-app-evaluation|Model and app evaluation]] `stub` — Manual and automated evaluation, evaluator types and metrics (groundedness, relevance, coherence, fluency, safety).
- [[model-benchmarks|Model benchmarks]] `stub` — Quality, safety, cost and throughput benchmarks and how to read them when selecting models.
- [[model-selection|Model selection]] `stub` — Choosing between LLMs, small, reasoning, multimodal and specialised models (and Foundry Tools) for a task.
- [[model-playgrounds|Playgrounds]] `stub` — The Foundry playgrounds for trying models, agents, images and audio before writing code.
- [[prompt-engineering|Prompt engineering]] `stub` — Instructions, system messages, examples, output formats and grounding cues that shape model output.

### Responsible AI and safety

- [[guardrails-and-content-filters|Guardrails and content filters]] `stub` — Content filtering and guardrails on inputs and outputs: harm categories, severity, custom guardrails.
- [[prompt-injection-and-jailbreaks|Prompt injection and jailbreaks]] `stub` — Direct (jailbreak) and indirect injection attacks and the prompt-shield defences.
- [[responsible-ai-principles|Responsible AI principles]] `stub` — Fairness, reliability and safety, privacy and security, inclusiveness, transparency, accountability.
- [[responsible-ai-lifecycle|Responsible generative AI lifecycle]] `stub` — Plan → map → measure → mitigate → manage/operate for generative AI harms.

### Generative AI applications

- [[conversation-state|Conversation state]] `stub` — How chat apps and agents keep context: message lists, response chaining, conversation objects, threads.
- [[retrieval-augmented-generation|Retrieval-augmented generation (RAG)]] `stub` — Retrieve relevant data, add it to the prompt, generate a grounded answer with citations.

### Agents and tools

- [[agent-publishing|Agent publishing]] `stub` — Publishing Foundry agents to channels such as Teams and Microsoft 365 Copilot: scope, identity, admin approval.
- [[agent-testing-and-evaluation|Agent testing and evaluation]] `stub` — Testing agents across channels, multi-turn tests, evaluating behaviour and diagnosing failures.
- [[agent-tools|Agent tools]] `stub` — Why agents need tools, built-in vs custom tools, and how the model chooses a tool.
- [[ai-agents|AI agents]] `stub` — What makes an agent (model + instructions + tools + autonomy) and how it differs from a chat app.
- [[code-interpreter-tool|Code interpreter tool]] `stub` — The built-in tool that lets an agent write and run Python in a sandbox over files.
- [[custom-tool-options|Custom tool options]] `stub` — Function tools, Azure Functions, OpenAPI specs, Logic Apps and MCP as ways to give an agent custom actions.
- [[file-search-tool|File search tool]] `stub` — The built-in tool that grounds an agent in uploaded files through a vector store.
- [[foundry-agent-types|Foundry agent types]] `stub` — Prompt, workflow and hosted agents in Foundry Agent Service and when each fits.
- [[function-calling|Function calling]] `stub` — Declaring functions with schemas, the model's tool-call request, executing it and returning results.
- [[human-in-the-loop-approval|Human-in-the-loop and approvals]] `stub` — Pausing for human approval of tool calls or workflow steps; oversight and safeguards.
- [[mcp-tool-integration|MCP tool integration]] `stub` — How agents connect to MCP servers, discover tools dynamically and call them (local vs remote, approval).
- [[microsoft-365-agent-integration|Microsoft 365 agent integration]] `stub` — Bringing agents into Microsoft 365: Work IQ data access, permissions, Teams/Copilot surfaces, Agents Toolkit.
- [[web-search-tool|Web search tool]] `stub` — The built-in tool that grounds answers in current web results.

### Workflows, multi-agent orchestration and agent interoperability

- [[agent-framework-workflows|Agent Framework workflows]] `stub` — Workflows in code with Microsoft Agent Framework: executors, edges (direct, conditional, switch-case, fan-out, fan-in), events.
- [[concurrent-orchestration|Concurrent orchestration]] `stub` — The same task broadcast to several agents in parallel and the results aggregated.
- [[foundry-workflows|Foundry workflows]] `stub` — Building visual/YAML workflows of agents and logic in Foundry: nodes, variables, conditions, versions.
- [[group-chat-orchestration|Group chat orchestration]] `stub` — A managed shared conversation among agents (and optionally a human).
- [[handoff-orchestration|Handoff orchestration]] `stub` — Control transferred dynamically between agents, one at a time.
- [[a2a-agent-implementation|Implementing A2A agents]] `stub` — Defining an agent card, implementing an agent executor, hosting an A2A server and connecting a client.
- [[magentic-orchestration|Magentic orchestration]] `stub` — A manager agent that plans, delegates and adapts across specialised agents for open-ended tasks.
- [[multi-agent-orchestration|Multi-agent orchestration]] `stub` — Why and how multiple specialised agents are coordinated; the shared orchestration interface.
- [[sequential-orchestration|Sequential orchestration]] `stub` — Agents in a fixed order, each refining the previous output.
- [[workflow-patterns|Workflow patterns]] `stub` — The workflow templates/patterns Foundry offers and how to pick one.

### Retrieval, search and knowledge

- [[ai-enrichment-skillsets|AI enrichment and skillsets]] `stub` — Skillsets that enrich content during indexing with built-in or custom (Azure Function) skills.
- [[embeddings-and-vector-search|Embeddings, vector and hybrid search]] `stub` — Embedding models, vector similarity, and hybrid keyword+vector retrieval for grounding.
- [[indexers-and-data-sources|Indexers and data sources]] `stub` — How an indexer pulls content from a data source, cracks documents and maps fields into an index.
- [[knowledge-bases-and-sources|Knowledge bases and knowledge sources]] `stub` — Foundry IQ knowledge bases, their source types and retrieval configuration.
- [[knowledge-mining|Knowledge mining]] `stub` — The end-to-end pattern: ingest, enrich, index, store and search content for insight.
- [[knowledge-store|Knowledge store]] `stub` — Persisting enriched data to Azure Storage as table, object and file projections.
- [[search-indexes|Search indexes]] `stub` — Index definitions, fields and their attributes in Azure AI Search.
- [[search-queries|Search queries]] `stub` — Querying an index: simple vs full Lucene syntax, filters, facets, ordering.
- [[semantic-ranking|Semantic ranking]] `stub` — Re-ranking results by meaning for more relevant grounding.

### Computer vision and media generation

- [[image-generation|Image generation]] `stub` — Text-to-image models, prompts, parameters and client apps that handle generated images.
- [[video-generation|Video generation]] `stub` — Generating and revising video with Sora 2: prompts, inputs, asynchronous jobs.
- [[vision-enabled-chat|Vision-enabled chat]] `stub` — Sending images with prompts to multimodal models for description and grounded visual Q&A.

### Text analysis and translation

- [[language-detection|Language detection]] `stub` — Identifying a text's language with a confidence score.
- [[named-entity-recognition|Named entity recognition]] `stub` — Extracting and categorising entities from text.
- [[pii-detection-and-redaction|PII detection and redaction]] `stub` — Finding and redacting personal data in text.
- [[text-translation|Text translation]] `stub` — Translating and transliterating text with Translator or with language models.

### Speech and voice

- [[ssml|Speech Synthesis Markup Language (SSML)]] `stub` — Markup that controls voice, pauses, pronunciation and style in synthesis.
- [[speech-to-text|Speech to text]] `stub` — Transcribing audio with the Speech SDK/API or transcription models.
- [[speech-translation|Speech translation]] `stub` — Translating spoken audio into text and speech in other languages.
- [[speech-capable-models|Speech-capable generative models]] `stub` — Generative models that transcribe, speak or reason over audio (gpt-4o transcribe/TTS family) vs the Speech service.
- [[text-to-speech|Text to speech]] `stub` — Synthesising speech from text with neural voices.
- [[voices-and-audio-formats|Voices and audio formats]] `stub` — Choosing a voice and output audio format for synthesis.

### Information extraction

- [[content-understanding-analyzers|Content Understanding analyzers]] `stub` — Prebuilt and custom analyzers, field schemas and extraction methods across content types.
- [[content-understanding-client-apps|Content Understanding client applications]] `stub` — Calling analyzers from code: endpoints, authentication, analyze requests, polling and results.
- [[document-intelligence-custom-models|Document Intelligence custom models]] `stub` — Training custom template/neural models, composing them, and classifying documents.
- [[document-intelligence-prebuilt-models|Document Intelligence prebuilt models]] `stub` — Read, layout and document-type prebuilt models and what each returns.

## Entities

### Products and platforms

- [[foundry-tools|Foundry Tools]] `stub` — The family of prebuilt AI services in Foundry (Language, Speech, Translator, Content Understanding, Document Intelligence, Vision) and their legacy names.
- [[microsoft-foundry|Microsoft Foundry]] `stub` — The platform and portal: resources, projects, model catalog, playgrounds, agents, workflows, evaluation, guardrails.

### Services

- [[application-insights|Application Insights]] `stub` — Telemetry and tracing destination for deployed models and agents.
- [[azure-ai-content-safety|Azure AI Content Safety]] `stub` — The safety service behind content filtering and guardrails (harm categories, severity, prompt shields).
- [[azure-ai-search|Azure AI Search]] `stub` — The search service: indexes, indexers, skillsets, knowledge store, full-text/vector/hybrid/semantic querying; a grounding source for RAG and agents.
- [[azure-content-understanding|Azure Content Understanding]] `stub` — The generative-AI extraction service: analyzers turn documents, images, audio and video into structured fields and markdown.
- [[azure-document-intelligence|Azure Document Intelligence]] `stub` — The document-extraction service: read/layout and prebuilt models, custom template/neural models, composed models and classifiers.
- [[azure-functions|Azure Functions]] `stub` — Serverless functions used as custom agent tools and as custom skills in AI Search enrichment.
- [[azure-language|Azure Language]] `stub` — The text-analysis service: language detection, named entity recognition, PII detection and related features.
- [[azure-openai|Azure OpenAI]] `stub` — OpenAI models sold by Azure, their endpoint and API surface inside Foundry.
- [[azure-speech|Azure Speech]] `stub` — The speech service and SDK: speech to text, text to speech, SSML, speech translation, voices and audio formats.
- [[azure-translator|Azure Translator]] `stub` — The translation service: translate, transliterate, detect; contrasted with LLM-powered translation.
- [[microsoft-entra-id|Microsoft Entra ID]] `stub` — Identity for keyless authentication, managed identities, agent identities and role-based access.
- [[foundry-agent-service|Microsoft Foundry Agent Service]] `stub` — The managed service that hosts, runs and scales agents (prompt, workflow and hosted agents) with tools, threads/conversations and tracing.

### Platform features

- [[foundry-iq|Foundry IQ]] `stub` — Knowledge bases over multiple knowledge sources that agents query for grounded, cited answers (agentic retrieval).
- [[model-catalog|Foundry model catalog]] `stub` — The catalog of models (sold by Azure, partner and community), filters, model cards, lifecycle and deployment entry points.

### SDKs and frameworks

- [[microsoft-agent-framework|Microsoft Agent Framework]] `stub` — The open-source SDK for building agents (ChatAgent, AgentThread, tools) and multi-agent workflows/orchestrations in code; successor lineage of Semantic Kernel and AutoGen.
- [[foundry-sdk|Microsoft Foundry SDK]] `stub` — The project-level SDK (AIProjectClient): connect to a project endpoint, get an OpenAI-compatible client, manage agents, connections, deployments, evaluations.
- [[openai-sdk|OpenAI SDK]] `stub` — The OpenAI client libraries used against Foundry / Azure OpenAI endpoints (Responses and Chat Completions calls).

### APIs

- [[voice-live-api|Azure Voice Live API]] `stub` — The low-latency speech-to-speech API for interruptible voice agents: sessions, events, turn detection.
- [[chat-completions-api|Chat Completions API]] `stub` — The stateless message-list API (system/user/assistant roles) — contrast with the Responses API.
- [[responses-api|Responses API]] `stub` — The stateful response-generation API (previous_response_id, conversations, built-in tools, streaming) used by Foundry chat apps and agents.

### Protocols

- [[agent2agent-protocol|Agent2Agent (A2A) protocol]] `stub` — The protocol for agent-to-agent delegation across boundaries: agent card, agent executor, A2A server and client.
- [[model-context-protocol|Model Context Protocol (MCP)]] `stub` — The open protocol through which an MCP client (agent) discovers and calls tools exposed by MCP servers.

### Tools and servers

- [[azure-language-mcp-server|Azure Language MCP server]] `stub` — The MCP server that exposes Azure Language capabilities as tools an agent can call.
- [[azure-speech-mcp-server|Azure Speech MCP server]] `stub` — The MCP server that exposes Azure Speech capabilities as agent tools.
- [[foundry-toolkit-for-vs-code|Foundry Toolkit for Visual Studio Code]] `stub` — The VS Code extension for creating, configuring (YAML), testing and deploying Foundry agents from the editor.
- [[microsoft-365-agents-toolkit|Microsoft 365 Agents Toolkit]] `stub` — Tooling for advanced Microsoft 365 integration: custom SSO, middleware, multi-environment deployment, local testing.
- [[power-fx|Power Fx]] `stub` — The low-code expression language used in Foundry workflows for variables, conditions and loops.
- [[work-iq|Work IQ]] `stub` — The CLI and MCP server that gives agents permission-trimmed access to Microsoft 365 data.

### Models

- [[sora-2|Sora 2]] `stub` — The video-generation model deployed in Foundry: text/image/video inputs, asynchronous jobs.

### Courses, exams and works

- [[ai-103t00-course|Course AI-103T00-A]] `stub` — The instructor-led course and its learning paths, modules and episodes that make up this corpus.
- [[ai-103-exam|Exam AI-103: Developing AI Apps and Agents on Azure]] `stub` — The certification exam: audience, five skill domains and weights, skills measured, GA vs preview policy.

## Sources

One page per raw file, grouped by the course structure. The SRC-ID is the raw filename's
numeric prefix (the same numbers the app's lessons use as `sourceIds`).

### Exam, course and study aids

- [[src-1-ai-103-develop-ai-apps-agents-azure-study-cram|SRC-1 · study cram · AI-103 Develop AI Apps and Agents on Azure Study Cram]] — Cross-domain study-cram overview of AI-103 foundations, Foundry, models, agents, tools, RAG, media, speech, language, and extraction.
- [[src-27-course-ai-103t00-develop-ai-apps-agents-azure|SRC-27 · course page · Course AI-103T00-A- Develop AI apps and agents on Azure]] — Official AI-103T00-A course page with audience, prerequisites, duration, certification link, and four learning paths.
- [[src-28-course-preview-ai-103-develop-ai-apps-agents-azure|SRC-28 · course preview · Course Preview - AI-103 - Develop AI apps and agents on Azure]] — Short course-preview transcript positioning AI-103 as practical training for Foundry apps, agents, multimodal AI, and exam preparation.
- [[src-191-study-guide-exam-ai-103-developing-ai-apps-agents|SRC-191 · study guide · Study guide for Exam AI-103- Developing AI Apps and Agents on Azure - Microsoft Learn]] — Official AI-103 study guide listing audience profile, update policy, five exam domains, weights, and all skills measured as of April 16, 2026.

### Develop AI agents on Azure

**Build agent-driven workflows using Microsoft Foundry**

- [[src-118-introduction-build-agent-driven-workflows-microsoft-foundry|SRC-118 · unit 1 · Introduction — Build agent-driven workflows using Microsoft Foundry]] — Introduces Foundry workflows as agent orchestration with logic, routing, loops, escalation, and Power Fx.
- [[src-238-understand-workflows|SRC-238 · unit 2 · Understand workflows]] — Defines Foundry workflows as visual, declarative orchestration of nodes, agents, data, logic, and human oversight.
- [[src-105-identify-workflow-patterns|SRC-105 · unit 3 · Identify workflow patterns]] — Names sequential, human-in-the-loop, and group chat workflow patterns and the scenarios each supports.
- [[src-36-create-workflows-microsoft-foundry|SRC-36 · unit 4 · Create workflows in Microsoft Foundry]] — Explains the Foundry workflow designer, node types, variables, conversational execution, and tracing execution paths.
- [[src-3-add-agents-workflow|SRC-3 · unit 5 · Add agents to a workflow]] — Explains adding Invoke agent nodes, configuring agents, structured outputs, and storing agent outputs in variables.
- [[src-11-apply-power-fx-workflows|SRC-11 · unit 6 · Apply Power Fx in workflows]] — Explains Power Fx as the expression glue for workflow variables, conditions, loops, and data-driven control flow.
- [[src-151-maintain-workflows-microsoft-foundry|SRC-151 · unit 7 · Maintain workflows in Microsoft Foundry]] — Covers maintaining Foundry workflows with visual/YAML views, immutable versions, notes, and refinement practices.
- [[src-247-workflows-code|SRC-247 · unit 8 · Use Workflows in Code]] — Shows invoking saved Foundry workflows from code with AIProjectClient, conversations, Responses API streaming, and events.
- [[src-66-exercise-create-agent-driven-workflow|SRC-66 · unit 9 · Exercise - Create an agent-driven workflow]] `stub` — Thin exercise-launch page for practicing agent-driven workflows in the Microsoft Foundry portal.
- [[src-171-module-assessment-build-agent-driven-workflows-microsoft-foundry|SRC-171 · unit 10 · Module assessment — Build agent-driven workflows using Microsoft Foundry]] — Captures a partial module assessment on agent nodes, For-Each loops, and structured outputs in workflows.
- [[src-219-summary-build-agent-driven-workflows-microsoft-foundry|SRC-219 · unit 11 · Summary — Build agent-driven workflows using Microsoft Foundry]] — Summarizes workflow concepts: nodes, agents, structured outputs, variables, Power Fx, loops, versioning, notes, and YAML.

**Build knowledge-enhanced AI agents with Foundry IQ**

- [[src-141-introduction-build-knowledge-enhanced-ai-agents-foundry-iq|SRC-141 · unit 1 · Introduction — Build knowledge-enhanced AI agents with Foundry IQ]] — Introduces Foundry IQ as a shared knowledge platform for grounding agents in organizational data instead of custom RAG per project.
- [[src-239-understanding-rag-agents|SRC-239 · unit 2 · Understanding RAG for agents]] — Explains why simple agents fail in enterprise settings and how RAG retrieves, augments, and grounds responses in current organizational content.
- [[src-85-explore-foundry-iq|SRC-85 · unit 3 · Explore Foundry IQ]] — Explains Foundry IQ knowledge bases, data-source integration, built-in retrieval intelligence, and the value of sharing knowledge across agents.
- [[src-22-configure-data-sources-knowledge-bases|SRC-22 · unit 4 · Configure data sources for knowledge bases]] — Catalogs Foundry IQ knowledge-base source types and gives decision guidance for Azure AI Search, Blob Storage, web, SharePoint, and OneLake.
- [[src-23-configure-retrieval-foundry-iq|SRC-23 · unit 5 · Configure retrieval with Foundry IQ]] — Teaches how agent instructions, testing, and monitoring control whether Foundry IQ-backed agents retrieve, cite, and stay grounded.
- [[src-147-knowledge-check-build-knowledge-enhanced-ai-agents-foundry-iq|SRC-147 · unit 6 · Knowledge check — Build knowledge-enhanced AI agents with Foundry IQ]] — Checks RAG advantages, SharePoint Remote, scoring profiles, and why explicit retrieval instructions matter for Foundry IQ agents.
- [[src-76-exercise-integrate-ai-agent-foundry-iq|SRC-76 · unit 7 · Exercise - Integrate an AI agent with Foundry IQ]] `stub` — Thin exercise launcher inviting learners with an Azure subscription to explore Foundry IQ in Microsoft Foundry.
- [[src-194-summary-build-knowledge-enhanced-ai-agents-foundry-iq|SRC-194 · unit 8 · Summary — Build knowledge-enhanced AI agents with Foundry IQ]] — Summarizes RAG, shared Foundry IQ knowledge bases, retrieval-quality tuning, and instruction-driven agent behavior.

**Develop AI agents with Microsoft Foundry and Visual Studio Code**

- [[src-129-introduction-develop-ai-agents-microsoft-foundry-visual-studio-code|SRC-129 · unit 1 · Introduction — Develop AI agents with Microsoft Foundry and Visual Studio Code]] — Introduces Microsoft Foundry Agent Service and the module's portal, VS Code, tools, testing, deployment, and integration goals.
- [[src-230-understand-ai-agents-microsoft-foundry-agent-service|SRC-230 · unit 2 · Understand AI Agents and Microsoft Foundry Agent Service]] — Defines AI agents, their use cases, security practices, Foundry Agent Service, agent types, and core managed-service capabilities.
- [[src-84-explore-development-approaches|SRC-84 · unit 3 · Explore Development Approaches]] — Compares Foundry portal and VS Code development approaches, their workflows, required resources, and optional services for agents.
- [[src-14-build-first-agent-microsoft-foundry|SRC-14 · unit 4 · Build Your First Agent in Microsoft Foundry]] — Walks through creating, configuring, testing, adding tools to, and deploying a first Foundry portal agent.
- [[src-190-set-up-visual-studio-code-agent-development|SRC-190 · unit 5 · Set Up Visual Studio Code for Agent Development]] — Explains installing the Microsoft Foundry VS Code extension, connecting it to Azure and a project, deploying a model, and managing agents.
- [[src-20-configure-manage-agents-visual-studio-code|SRC-20 · unit 6 · Configure and Manage Agents in Visual Studio Code]] — Covers configuring declarative prompt-based agents in VS Code through Agent Designer and synchronized YAML.
- [[src-91-extend-agent-capabilities-tools|SRC-91 · unit 7 · Extend Agent Capabilities with Tools]] — Explains agent tools, the automatic tool-calling lifecycle, built-in tools, OpenAPI tools, MCP servers, and tool best practices.
- [[src-223-test-deploy-integrate-agents|SRC-223 · unit 8 · Test, Deploy, and Integrate Agents]] — Explains testing strategies, deployment, publishing Agent Applications, authentication, endpoint verification, updates, integration code, and production concerns.
- [[src-59-exercise-build-deploy-ai-agent|SRC-59 · unit 9 · Exercise - Build and Deploy an AI Agent]] `stub` — Launches an external exercise to build, configure, connect, deploy, and use a Foundry Agent Service agent.
- [[src-142-knowledge-check-develop-ai-agents-microsoft-foundry-visual-studio|SRC-142 · unit 10 · Knowledge Check — Develop AI agents with Microsoft Foundry and Visual Studio Code]] — Knowledge check covering managed-service benefits, Responses API state, agent security practice, and automatic tool invocation.
- [[src-212-summary-develop-ai-agents-microsoft-foundry-visual-studio-code|SRC-212 · unit 11 · Summary — Develop AI agents with Microsoft Foundry and Visual Studio Code]] — Summarizes the module's agent concepts, service features, portal and VS Code workflows, tools, testing, deployment, and integration skills.

**Develop an AI agent with Microsoft Agent Framework**

- [[src-124-introduction-develop-ai-agent-microsoft-agent-framework|SRC-124 · unit 1 · Introduction — Develop an AI agent with Microsoft Agent Framework]] — Introduces Microsoft Agent Framework as the SDK for Foundry-backed agents with tools, state, telemetry, and workflows.
- [[src-234-understand-microsoft-agent-framework-ai-agents|SRC-234 · unit 2 · Understand Microsoft Agent Framework AI agents]] — Explains Microsoft Agent Framework features, unified Agent base class, Foundry integration, service-side history, and provider flexibility.
- [[src-34-create-azure-ai-agent-microsoft-agent-framework|SRC-34 · unit 3 · Create an Azure AI agent with Microsoft Agent Framework]] — Gives the Foundry Agent Service setup sequence: project, credentials, chat client, agent instructions/tools, session, and run modes.
- [[src-4-add-tools-azure-ai-agent|SRC-4 · unit 4 · Add tools to Azure AI agent]] — Explains service-provided tools, custom function tools, schema generation, multiple tools, approval mode, agent-as-tool composition, and tool-writing practices.
- [[src-72-exercise-develop-azure-ai-agent-microsoft-agent-framework-sdk|SRC-72 · unit 5 · Exercise - Develop an Azure AI agent with the Microsoft Agent Framework SDK - Training - Microsoft L]] `stub` — Thin exercise launch page for building an SDK agent that creates an expense claim email; lab instructions are outside the capture.
- [[src-146-knowledge-check-develop-ai-agent-microsoft-agent-framework|SRC-146 · unit 6 · Knowledge check — Develop an AI agent with Microsoft Agent Framework]] — Knowledge-check capture with options for agent creation, AgentThread state management, and custom-function tools; answer key is not shown.
- [[src-195-summary-develop-ai-agent-microsoft-agent-framework|SRC-195 · unit 7 · Summary — Develop an AI agent with Microsoft Agent Framework]] — Summarizes the module: Agent Framework components, core concepts, and custom tools for dynamic agent solutions.

**Discover Azure AI Agents with A2A**

- [[src-134-introduction-discover-azure-ai-agents-a2a|SRC-134 · unit 1 · Introduction — Discover Azure AI Agents with A2A]] — Introduces A2A as a standard for remote agent discovery, communication, delegation, and coordinated Azure AI Agent workflows.
- [[src-37-define-a2a-agent|SRC-37 · unit 2 · Define an A2A Agent]] — Defines A2A Agent Skills and Agent Cards as the discoverable capability contract for multi-agent collaboration.
- [[src-107-implement-agent-executor|SRC-107 · unit 3 · Implement an Agent Executor]] — Explains the Agent Executor as the A2A component that receives requests, executes agent logic, streams events, and handles cancellation.
- [[src-103-host-a2a-server|SRC-103 · unit 4 · Host an A2A Server]] — Explains hosting an A2A agent with an Agent Card, request handler, task store, Starlette app, and Uvicorn server.
- [[src-26-connect-a2a-agent|SRC-26 · unit 5 · Connect to your A2A Agent]] — Explains A2A client responsibilities: discover the Agent Card, send streaming or non-streaming requests, and handle message or task responses.
- [[src-61-exercise-connect-remote-azure-ai-agents-a2a-protocol|SRC-61 · unit 6 · Exercise - Connect to remote Azure AI Agents with the A2A protocol]] `stub` — Thin exercise launch page for building an A2A client-server application that interacts with remote agents.
- [[src-157-module-assessment-discover-azure-ai-agents-a2a|SRC-157 · unit 7 · Module Assessment — Discover Azure AI Agents with A2A]] — Captures the A2A module assessment questions on server role, Agent Executor role, and Agent Card purpose.
- [[src-205-summary-discover-azure-ai-agents-a2a|SRC-205 · unit 8 · Summary — Discover Azure AI Agents with A2A]] — Summarizes connecting Python clients to Azure AI Agents with A2A, including Agent Cards, executors, and streaming/non-streaming messages.

**Integrate MCP Tools with Azure AI Agents**

- [[src-119-introduction-integrate-mcp-tools-azure-ai-agents|SRC-119 · unit 1 · Introduction — Integrate MCP Tools with Azure AI Agents]] — Introduces MCP as a way to give Azure AI Agents dynamically discovered tools through Microsoft Foundry Agent Service.
- [[src-233-understand-mcp-tool-discovery|SRC-233 · unit 2 · Understand MCP Tool Discovery]] — Explains dynamic MCP tool discovery, its benefits, and the server-client-agent pipeline for Azure AI Agents.
- [[src-108-integrate-agent-tools-mcp-server-client|SRC-108 · unit 3 · Integrate Agent Tools Using an MCP Server and Client]] — Details the local MCP server/client pattern: FastMCP, list_tools, call_tool, async wrappers, FunctionTool registration.
- [[src-240-azure-ai-agents-mcp-servers|SRC-240 · unit 4 · Use Azure AI agents with MCP servers]] — Explains managed remote MCP integration for Microsoft Foundry agents, including MCPTool parameters, headers, and approvals.
- [[src-60-exercise-connect-mcp-tools-azure-ai-agents|SRC-60 · unit 5 · Exercise - Connect MCP Tools to Azure AI Agents]] `stub` — Thin exercise launch page for developing an MCP client-server app that dynamically registers tools to an Azure AI Agent.
- [[src-158-module-assessment-integrate-mcp-tools-azure-ai-agents|SRC-158 · unit 6 · Module Assessment — Integrate MCP Tools with Azure AI Agents]] — Assessment capture with MCP server role, list_tools discovery, and async wrapper questions; first question stem is missing.
- [[src-193-summary-integrate-mcp-tools-azure-ai-agents|SRC-193 · unit 7 · Summary — Integrate MCP Tools with Azure AI Agents]] — Summarizes MCP integration with Foundry Agent Service: runtime discovery, wrapper generation, and adaptable toolsets.

**Integrate custom tools into your agent**

- [[src-122-introduction-integrate-custom-tools-agent|SRC-122 · unit 1 · Introduction — Integrate custom tools into your agent]] — Introduces custom tools as agent extensions for executing business-specific actions beyond built-in tools.
- [[src-265-why-custom-tools|SRC-265 · unit 2 · Why use custom tools]] — Explains why custom tools extend agents: productivity, accuracy, tailored workflows and industry-specific actions.
- [[src-179-options-implementing-custom-tools|SRC-179 · unit 3 · Options for implementing custom tools]] — Lists custom-tool implementation options: function calling, Azure Functions, OpenAPI specified tools and Azure Logic Apps.
- [[src-104-how-integrate-custom-tools|SRC-104 · unit 4 · How to integrate custom tools]] — Explains integration patterns for function calling, Azure Functions and OpenAPI tools, including declarative agent tool use.
- [[src-58-exercise-build-agent-custom-tools|SRC-58 · unit 5 · Exercise - Build an agent with custom tools]] `stub` — A thin exercise launch page directing learners to build an agent in code and connect a custom tool function.
- [[src-167-module-assessment-integrate-custom-tools-agent|SRC-167 · unit 6 · Module assessment — Integrate custom tools into your agent]] — Assessment capture with three questions on custom tools, OpenAPI specification tools and function calling.
- [[src-213-summary-integrate-custom-tools-agent|SRC-213 · unit 7 · Summary — Integrate custom tools into your agent]] — Summarizes custom tools as productivity boosters and names Azure Functions and OpenAPI specifications as integration options.

**Integrate your agent with Microsoft 365**

- [[src-125-introduction-integrate-agent-microsoft-365|SRC-125 · unit 1 · Introduction — Integrate your agent with Microsoft 365]] — Introduces publishing Foundry agents into Teams and Microsoft 365 Copilot, plus Work IQ for Microsoft 365 data access.
- [[src-232-understand-foundry-agent-publishing-options|SRC-232 · unit 2 · Understand Foundry agent publishing options]] — Explains Agent Application resources, Microsoft 365 publishing, direct portal publishing, Agents Toolkit, scopes, channels, identity, and prerequisites.
- [[src-185-publish-agent-foundry-portal-teams|SRC-185 · unit 3 · Publish an agent from Foundry portal to Teams]] — Walks through preparing, publishing, testing, approving, permissioning, and updating a Foundry agent for Teams and Microsoft 365 Copilot.
- [[src-5-advanced-microsoft-365-agents-toolkit-complex-integration-scenarios|SRC-5 · unit 4 · Advanced - Use Microsoft 365 Agents Toolkit for complex integration scenarios - Training - Microsoft]] — Explains when to use Microsoft 365 Agents Toolkit as a proxy-app approach for custom SSO, middleware, debugging, CI/CD, and multi-environment deployments.
- [[src-2-access-microsoft-365-data-work-iq|SRC-2 · unit 5 · Access Microsoft 365 data with Work IQ]] — Introduces Microsoft Work IQ as a CLI and MCP server for permission-trimmed Microsoft 365 data access during agent development.
- [[src-222-test-iterate-integrated-agent|SRC-222 · unit 6 · Test and iterate your integrated agent]] — Covers post-publication Teams testing, common troubleshooting scenarios, Foundry metrics, Application Insights, feedback, and republishing.
- [[src-79-exercise-publish-foundry-agent-teams|SRC-79 · unit 7 · Exercise - Publish a Foundry agent to Teams]] `stub` — Thin exercise launcher for publishing a Foundry agent to Teams, with an optional Work IQ exercise link.
- [[src-149-knowledge-check-integrate-agent-microsoft-365|SRC-149 · unit 8 · Knowledge check — Integrate your agent with Microsoft 365]] — Five-question knowledge check on Bot Service, publish scope, published identity permissions, Work IQ, and Agents Toolkit selection.
- [[src-209-summary-integrate-agent-microsoft-365|SRC-209 · unit 9 · Summary — Integrate your agent with Microsoft 365]] — Summarizes Teams and Microsoft 365 Copilot publishing, Bot Service and Entra registrations, scopes, agent identity, Work IQ, and next steps.

**Orchestrate a multi-agent solution using the Microsoft Agent Framework**

- [[src-133-introduction-orchestrate-multi-agent-solution-microsoft-agent-framework|SRC-133 · unit 1 · Introduction — Orchestrate a multi-agent solution using the Microsoft Agent Framework]] — Introduces multi-agent solutions through a DevOps collaboration scenario and the module goals.
- [[src-237-understand-microsoft-agent-framework|SRC-237 · unit 2 · Understand the Microsoft Agent Framework]] — Defines Microsoft Agent Framework as an open-source SDK for agents, orchestration, chat clients, tools, and sessions.
- [[src-231-understand-agent-orchestration|SRC-231 · unit 3 · Understand Agent Orchestration]] — Explains multi-agent orchestration, workflow components, orchestration patterns, and a unified SDK flow.
- [[src-241-concurrent-orchestration|SRC-241 · unit 4 · Use Concurrent Orchestration]] — Explains concurrent orchestration: parallel independent agents, result aggregation, fit, anti-fit, and SDK builder steps.
- [[src-245-sequential-orchestration|SRC-245 · unit 5 · Use Sequential Orchestration]] — Explains sequential orchestration: fixed agent pipelines where each output becomes the next input.
- [[src-242-group-chat-orchestration|SRC-242 · unit 6 · Use Group Chat Orchestration]] — Explains group chat orchestration with a chat manager, shared conversation, optional human input, and manager customization.
- [[src-243-handoff-orchestration|SRC-243 · unit 7 · Use Handoff Orchestration]] — Explains handoff orchestration: dynamic one-agent-at-a-time transfer based on context, rules, or classification.
- [[src-244-magentic-orchestration|SRC-244 · unit 8 · Use Magentic Orchestration]] — Explains Magentic orchestration: a manager-driven pattern for complex open-ended tasks with dynamic planning and delegation.
- [[src-69-exercise-develop-multi-agent-solution|SRC-69 · unit 9 · Exercise - Develop a multi-agent solution]] `stub` — Thin exercise launcher for a Microsoft Agent Framework incident-triage lab with incident manager and DevOps agents.
- [[src-143-knowledge-check-orchestrate-multi-agent-solution-microsoft-agent-framework|SRC-143 · unit 10 · Knowledge check — Orchestrate a multi-agent solution using the Microsoft Agent Framework]] — Knowledge-check capture with orchestration workflow options and questions on group chat and handoff patterns.
- [[src-199-summary-orchestrate-multi-agent-solution-microsoft-agent-framework|SRC-199 · unit 11 · Summary — Orchestrate a multi-agent solution using the Microsoft Agent Framework]] — Summarizes the module's multi-agent orchestration patterns and unified SDK interface.

### Develop generative AI apps in Azure

**Develop a generative AI chat app with Microsoft Foundry**

- [[src-120-introduction-develop-generative-ai-chat-app-microsoft-foundry|SRC-120 · unit 1 · Introduction — Develop a generative AI chat app with Microsoft Foundry]] — Introduces endpoint, SDK, authentication and chat API choices for building Microsoft Foundry chat apps.
- [[src-90-explore-model-playground|SRC-90 · unit 2 · Explore with the model playground]] — Shows how the Model playground helps test prompts, settings and generated SDK samples before coding.
- [[src-18-choose-endpoint-sdk|SRC-18 · unit 3 · Choose an endpoint and SDK]] — Explains Foundry project and Azure OpenAI endpoints, SDK choices, authentication options and when to use each SDK.
- [[src-99-generate-responses-responses-api-foundry-sdk|SRC-99 · unit 4 · Generate responses with the Responses API in the Foundry SDK]] — Explains the Responses API for stateful, multi-turn Foundry chat apps, including response IDs, parameters, streaming and async use.
- [[src-98-generate-responses-chatcompletions-api|SRC-98 · unit 5 · Generate responses with the ChatCompletions API]] — Explains ChatCompletions as a widely supported, stateless message-list API useful for compatibility and existing code.
- [[src-62-exercise-create-generative-ai-chat-app|SRC-62 · unit 6 · Exercise - Create a generative AI chat app]] `stub` — Thin lab launcher for deploying a generative model and creating a chat application in Microsoft Foundry.
- [[src-148-knowledge-check-develop-generative-ai-chat-app-microsoft-foundry|SRC-148 · unit 7 · Knowledge check — Develop a generative AI chat app with Microsoft Foundry]] — Knowledge-check questions on endpoint choice, the Python Foundry SDK package and the Responses API method.
- [[src-214-summary-develop-generative-ai-chat-app-microsoft-foundry|SRC-214 · unit 8 · Summary — Develop a generative AI chat app with Microsoft Foundry]] — Summarizes the module's SDK, endpoint, response-generation and conversation-management takeaways.

**Develop generative AI apps that use tools**

- [[src-123-introduction-develop-generative-ai-apps-that-tools|SRC-123 · unit 1 · Introduction — Develop generative AI apps that use tools]] — Introduces why tools extend generative AI beyond training data, text-only reasoning, and isolated chat.
- [[src-259-what-are-tools|SRC-259 · unit 2 · What are tools-]] — Defines model tools in Microsoft Foundry and shows where tools are specified in Responses API calls.
- [[src-254-code-interpreter-tool|SRC-254 · unit 3 · Use the code_interpreter tool]] — Explains how code_interpreter gives a model a sandboxed Python runtime for calculations, data analysis, and iterative code execution.
- [[src-257-web-search-tool|SRC-257 · unit 4 · Use the web_search tool]] — Explains how web_search lets a model retrieve current public web information during response generation.
- [[src-255-file-search-tool|SRC-255 · unit 5 · Use the file_search tool]] — Explains how file_search grounds model answers in uploaded documents indexed through vector stores.
- [[src-256-function-tool|SRC-256 · unit 6 · Use the function tool]] — Explains function calling: the model requests a named function call, the app executes it, and returns function output.
- [[src-63-exercise-create-generative-ai-chat-app-that-uses-tools|SRC-63 · unit 7 · Exercise - Create a generative AI chat app that uses tools]] `stub` — Exercise launch page for deploying a model and grounding a chat app with file_search.
- [[src-163-module-assessment-develop-generative-ai-apps-that-tools|SRC-163 · unit 8 · Module assessment — Develop generative AI apps that use tools]] — Assessment capture with three questions on file_search, function_call handling, and code_interpreter behavior.
- [[src-198-summary-develop-generative-ai-apps-that-tools|SRC-198 · unit 9 · Summary — Develop generative AI apps that use tools]] — Summarizes the four tool types and the shared implementation pattern for tool-augmented model responses.

**Implement a responsible generative AI solution in Microsoft Foundry**

- [[src-112-introduction-implement-responsible-generative-ai-solution-microsoft-foundry|SRC-112 · unit 1 · Introduction — Implement a responsible generative AI solution in Microsoft Foundry]] — Introduces why generative AI requires risk identification, measurement, and mitigation.
- [[src-182-plan-responsible-generative-ai-solution|SRC-182 · unit 2 · Plan a responsible generative AI solution]] — Defines the four responsible generative AI stages: map, measure, mitigate, and manage.
- [[src-153-map-potential-harms|SRC-153 · unit 3 · Map potential harms]] — Explains identifying, prioritizing, testing, verifying, documenting, and sharing potential harms.
- [[src-154-measure-potential-harms|SRC-154 · unit 4 · Measure potential harms]] — Shows how to baseline harmful outputs with prompts, generated responses, and strict criteria.
- [[src-156-mitigate-potential-harms|SRC-156 · unit 5 · Mitigate potential harms]] — Explains layered mitigation across model, safety system, prompting and grounding, and user experience.
- [[src-152-manage-responsible-generative-ai-solution|SRC-152 · unit 6 · Manage a responsible generative AI solution]] — Covers prerelease reviews, phased release, incident response, rollback, blocking, feedback, and telemetry.
- [[src-57-exercise-apply-guardrails-prevent-output-harmful-content|SRC-57 · unit 7 · Exercise - Apply guardrails to prevent the output of harmful content]] `stub` — Thin exercise launch page for deploying a model and observing the effect of Foundry guardrails.
- [[src-170-module-assessment-implement-responsible-generative-ai-solution-microsoft-foundry|SRC-170 · unit 8 · Module assessment — Implement a responsible generative AI solution in Microsoft Foundry]] — Assessment questions covering impact assessment, Foundry guardrails, and phased delivery.
- [[src-211-summary-implement-responsible-generative-ai-solution-microsoft-foundry|SRC-211 · unit 9 · Summary — Implement a responsible generative AI solution in Microsoft Foundry]] — Summarizes the process: identify harms, measure them, mitigate at multiple levels, and operate responsibly.

**Optimize generative AI model performance with Microsoft Foundry**

- [[src-116-introduction-optimize-generative-ai-model-performance-microsoft-foundry|SRC-116 · unit 1 · Introduction — Optimize generative AI model performance with Microsoft Foundry]] — Introduces complementary ways to optimize model quality, accuracy, consistency, tone, grounding, and format.
- [[src-178-optimize-model-output-prompt-engineering|SRC-178 · unit 2 · Optimize model output with prompt engineering]] — Teaches prompt components, system messages, prompt patterns, delimiters, and generation parameters.
- [[src-102-ground-model-retrieval-augmented-generation|SRC-102 · unit 3 · Ground your model with Retrieval Augmented Generation]] — Explains grounding, RAG's retrieve-augment-generate flow, embeddings, Azure AI Search, and when to use RAG.
- [[src-95-fine-tune-model-consistent-behavior|SRC-95 · unit 4 · Fine-tune a model for consistent behavior]] — Explains when to fine-tune, LoRA, SFT/RFT/DPO, JSONL training data, and fine-tuning costs and risks.
- [[src-19-compare-combine-optimization-strategies|SRC-19 · unit 5 · Compare and combine optimization strategies]] — Compares prompt engineering, RAG, and fine-tuning, then gives an incremental strategy-selection framework.
- [[src-77-exercise-optimize-generative-ai-model-performance|SRC-77 · unit 6 · Exercise - Optimize generative AI model performance]] `stub` — Thin exercise launch page for exploring fine-tuning in Microsoft Foundry; lab steps are not captured.
- [[src-161-module-assessment-optimize-generative-ai-model-performance-microsoft-foundry|SRC-161 · unit 7 · Module assessment — Optimize generative AI model performance with Microsoft Foundry]] — Assessment questions covering system messages, RAG, temperature, fine-tuning, and combined strategies.
- [[src-202-summary-optimize-generative-ai-model-performance-microsoft-foundry|SRC-202 · unit 8 · Summary — Optimize generative AI model performance with Microsoft Foundry]] — Summarizes prompt engineering, RAG, fine-tuning, and the combined travel-agency optimization pattern.

**Plan and prepare to develop AI solutions on Azure**

- [[src-113-introduction-plan-prepare-develop-ai-solutions-azure|SRC-113 · unit 1 · Introduction — Plan and prepare to develop AI solutions on Azure]] — Introduces planning considerations for Azure AI development and positions Microsoft Foundry as the development platform.
- [[src-260-what-is-ai|SRC-260 · unit 2 · What is AI-]] — Defines AI in this module and lists common application capabilities: generative AI, NLP, speech, vision, and extraction.
- [[src-96-foundry-tools|SRC-96 · unit 3 · Foundry Tools]] — Introduces Foundry Tools as prebuilt APIs and models for common AI tasks inside Microsoft Foundry resources.
- [[src-155-microsoft-foundry|SRC-155 · unit 4 · Microsoft Foundry]] — Explains Microsoft Foundry resources, projects, portal, SDK, and project assets such as models, agents, tools, and knowledge.
- [[src-51-developer-tools-sdks|SRC-51 · unit 5 · Developer Tools and SDKs]] — Surveys portal, IDE, VS Code Foundry Toolkit, GitHub Copilot, programming languages, APIs, and SDK choices for Azure AI development.
- [[src-186-responsible-ai|SRC-186 · unit 6 · Responsible AI]] — Introduces responsible AI motivation and Microsoft principles: fairness, reliability and safety, privacy and security, inclusiveness, transparency, accountability.
- [[src-78-exercise-prepare-ai-development-project|SRC-78 · unit 7 · Exercise - Prepare for an AI development project]] `stub` — Thin exercise launch page directing learners to explore Microsoft Foundry with an Azure subscription.
- [[src-162-module-assessment-plan-prepare-develop-ai-solutions-azure|SRC-162 · unit 8 · Module assessment — Plan and prepare to develop AI solutions on Azure]] — Module assessment with three questions on Foundry portal, Foundry Tools, and the VS Code Foundry Toolkit.
- [[src-203-summary-plan-prepare-develop-ai-solutions-azure|SRC-203 · unit 9 · Summary — Plan and prepare to develop AI solutions on Azure]] — Summarizes the module as planning for Azure AI development and becoming familiar with Microsoft Foundry.

### Develop natural language solutions in Azure

**Analyze text with Azure Language in Foundry Tools**

- [[src-127-introduction-analyze-text-azure-language-foundry-tools|SRC-127 · unit 1 · Introduction — Analyze text with Azure Language in Foundry Tools]] — Introduces Azure Language in Foundry Tools as an API for text analysis in apps and agents, with Python and other SDK options.
- [[src-12-azure-language-microsoft-foundry-tools|SRC-12 · unit 2 · Azure Language in Microsoft Foundry Tools]] — Explains Azure Language text-analysis tasks, Foundry resource provisioning, endpoint use, SDK or REST access, and key versus Entra authentication.
- [[src-40-detect-language|SRC-40 · unit 3 · Detect language]] — Explains Azure Language language detection, confidence scores, document and batch limits, mixed-language behavior, and unknown-language output.
- [[src-93-extract-entities|SRC-93 · unit 6 · Extract entities]] — Defines named entity recognition as extracting categorized entities from text, with example categories and response shape.
- [[src-94-extract-personally-identifiable-information-pii|SRC-94 · unit 7 · Extract personally identifiable information (PII)]] — Explains Azure Language PII detection and redaction, including sensitive categories, confidence scores, and masked output.
- [[src-56-exercise-analyze-text|SRC-56 · unit 8 · Exercise - Analyze text]] `stub` — Thin exercise launcher for building a client application that analyzes text with Azure Language in Foundry Tools.
- [[src-168-module-assessment-analyze-text-azure-language-foundry-tools|SRC-168 · unit 9 · Module assessment — Analyze text with Azure Language in Foundry Tools]] — Assesses choosing named entity extraction for indexing news entities and PII redaction for publishing customer testimonials.
- [[src-206-summary-analyze-text-azure-language-foundry-tools|SRC-206 · unit 10 · Summary — Analyze text with Azure Language in Foundry Tools]] — Summarizes the module outcomes: detecting language, recognizing named entities, and extracting PII from text.

**Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools**

- [[src-115-introduction-create-speech-enabled-apps-azure-speech-microsoft-foundry|SRC-115 · unit 1 · Introduction — Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools]] — Introduces Azure Speech APIs for speech-enabled apps and positions speech recognition and synthesis as the module focus.
- [[src-13-azure-speech-foundry-tools|SRC-13 · unit 2 · Azure Speech in Foundry Tools]] — Explains Azure Speech in Foundry Tools, Foundry resource provisioning, endpoint/key access and the SpeechConfig setup object.
- [[src-252-speech-text-api|SRC-252 · unit 3 · Use the Speech to Text API]] — Teaches the Speech to text SDK pattern: SpeechConfig, optional AudioConfig, SpeechRecognizer, RecognizeOnceAsync and result handling.
- [[src-253-text-speech-api|SRC-253 · unit 4 · Use the Text to Speech API]] — Teaches the Text to speech SDK pattern: SpeechConfig, optional AudioConfig, SpeechSynthesizer, SpeakTextAsync and result handling.
- [[src-21-configure-audio-format-voices|SRC-21 · unit 5 · Configure audio format and voices]] — Explains configuring synthesized speech output format and voice through SpeechConfig.
- [[src-246-speech-synthesis-markup-language|SRC-246 · unit 6 · Use Speech Synthesis Markup Language]] — Introduces SSML as XML markup for controlling synthesized speech style, pauses, phonemes, prosody, say-as rules and audio insertion.
- [[src-65-exercise-create-speech-enabled-app|SRC-65 · unit 7 · Exercise - Create a speech-enabled app]] `stub` — Exercise launch page for building a speech-enabled app with recognition and synthesis; lab details are outside the capture.
- [[src-174-module-assessment-create-speech-enabled-apps-azure-speech-microsoft|SRC-174 · unit 8 · Module assessment — Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools]] — Assessment capture with three unanswered questions about endpoint/key access, AudioConfig input files and changing synthesis voices.
- [[src-192-summary-create-speech-enabled-apps-azure-speech-microsoft-foundry|SRC-192 · unit 9 · Summary — Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools]] — Summarizes the module outcomes: connect to Azure Speech, implement speech recognition and synthesis, configure voices/formats and use SSML.

**Develop a speech agent with the Azure Speech MCP server**

- [[src-140-introduction-develop-speech-agent-azure-speech-mcp-server|SRC-140 · unit 1 · Introduction — Develop a speech agent with the Azure Speech MCP server]] — Introduces using the Azure Speech MCP server to give agents speech-to-text and text-to-speech capabilities.
- [[src-236-understand-azure-speech-mcp-server|SRC-236 · unit 2 · Understand the Azure Speech MCP server]] — Explains MCP roles, dynamic tool discovery, Speech MCP capabilities, storage requirements, prerequisites, and security.
- [[src-25-connect-speech-mcp-server-agent|SRC-25 · unit 3 · Connect and use the Speech MCP server with an agent]] — Shows portal setup, playground testing, prompt customization, SDK invocation, and code-defined MCP tool connection.
- [[src-82-exercise-azure-speech-agent|SRC-82 · unit 4 · Exercise - Use Azure Speech in an agent]] `stub` — Launches the hands-on lab for building and testing a Speech MCP-connected Foundry agent and Python client.
- [[src-144-knowledge-check-develop-speech-agent-azure-speech-mcp-server|SRC-144 · unit 5 · Knowledge check — Develop a speech agent with the Azure Speech MCP server]] — Assesses Speech MCP capabilities, storage requirements, connection credentials, and prompt-level voice selection.
- [[src-204-summary-develop-speech-agent-azure-speech-mcp-server|SRC-204 · unit 6 · Summary — Develop a speech agent with the Azure Speech MCP server]] — Summarizes using the Azure Speech MCP server for agent transcription, speech generation, storage, connection, and SDK invocation.

**Develop a speech-capable generative AI application**

- [[src-121-introduction-develop-speech-capable-generative-ai-application|SRC-121 · unit 1 · Introduction — Develop a speech-capable generative AI application]] — Introduces speech-capable generative AI models for transcription and synthesis in Microsoft Foundry.
- [[src-17-choose-speech-capable-model|SRC-17 · unit 2 · Choose a speech-capable model]] — Explains using Microsoft Foundry Models to find speech-capable models for transcription and synthesis.
- [[src-221-synthesize-speech|SRC-221 · unit 3 · Synthesize speech]] — Defines text-to-speech synthesis with Foundry speech-capable models and names gpt-4o TTS model options.
- [[src-225-transcribe-speech|SRC-225 · unit 3 · Transcribe speech]] — Defines speech-to-text transcription with Foundry speech-capable models and names gpt-4o transcribe options.
- [[src-83-exercise-speech-capable-generative-ai-models|SRC-83 · unit 4 · Exercise - Use speech-capable generative AI models]] `stub` — Launches an exercise to implement transcription and synthesis with speech-capable generative AI models.
- [[src-175-module-assessment-develop-speech-capable-generative-ai-application|SRC-175 · unit 5 · Module assessment — Develop a speech-capable generative AI application]] — Assessment asks learners to distinguish transcription and TTS model choices for speech-capable apps.
- [[src-207-summary-develop-speech-capable-generative-ai-application|SRC-207 · unit 6 · Summary — Develop a speech-capable generative AI application]] — Summarizes the module as learning speech-capable AI models for transcription and synthesis in Microsoft Foundry.

**Develop a text analysis agent with the Azure Language MCP server**

- [[src-135-introduction-develop-text-analysis-agent-azure-language-mcp-server|SRC-135 · unit 1 · Introduction — Develop a text analysis agent with the Azure Language MCP server]] — Introduces using the Azure Language MCP server to expose text analysis capabilities to a Microsoft Foundry agent.
- [[src-235-understand-azure-language-mcp-server|SRC-235 · unit 2 · Understand the Azure Language MCP server]] — Explains MCP architecture, dynamic tool discovery, Azure Language MCP capabilities, tool selection, and endpoints.
- [[src-24-connect-language-mcp-server-agent|SRC-24 · unit 3 · Connect and use the Language MCP server with an agent]] — Shows how to connect Azure Language MCP tools to a Foundry agent and call the agent through the Foundry SDK and Responses API.
- [[src-70-exercise-develop-text-analysis-agent|SRC-70 · unit 4 · Exercise - Develop a text analysis agent]] `stub` — Launch page for a lab that builds a Foundry agent connected to the Azure Language MCP server and a Python client.
- [[src-150-knowledge-check-develop-text-analysis-agent-azure-language-mcp|SRC-150 · unit 5 · Knowledge check — Develop a text analysis agent with the Azure Language MCP server]] — Knowledge check covering server role, tool selection, agent reference in Responses API, and key-based authentication.
- [[src-200-summary-develop-text-analysis-agent-azure-language-mcp-server|SRC-200 · unit 6 · Summary — Develop a text analysis agent with the Azure Language MCP server]] — Summarizes the module outcomes for using the Azure Language MCP server with agents, Foundry, playground testing, and Python clients.

**Develop an Azure Speech Voice Live Agent in Microsoft Foundry**

- [[src-132-introduction-develop-azure-speech-voice-live-agent-microsoft-foundry|SRC-132 · unit 1 · Introduction — Develop an Azure Speech Voice Live Agent in Microsoft Foundry]] — Introduces Voice Live as low-latency speech-to-speech interaction for Foundry voice agents.
- [[src-88-explore-azure-voice-live-api|SRC-88 · unit 2 · Explore the Azure Voice Live API]] — Explains Voice Live API features, authentication, WebSocket endpoints, events, session settings, audio buffering, and avatars.
- [[src-31-create-voice-live-agent|SRC-31 · unit 3 · Create a Voice Live agent]] — Shows why to use Voice Live through a Foundry Agent and what portal and client-app configuration is involved.
- [[src-87-explore-ai-voice-live-client-library-python|SRC-87 · unit 3 · Explore the AI Voice Live Client Library for Python]] — Introduces the async-only Python client library for Voice Live authentication, event handling, and session setup.
- [[src-68-exercise-develop-voice-live-agent|SRC-68 · unit 4 · Exercise - Develop a Voice Live Agent]] `stub` — Exercise launcher for creating a Voice Live agent, testing it in the playground, and connecting a client application.
- [[src-159-module-assessment-develop-azure-speech-voice-live-agent-microsoft|SRC-159 · unit 5 · Module Assessment — Develop an Azure Speech Voice Live Agent in Microsoft Foundry]] — Assessment questions cover Voice Live authentication, WebRTC avatars, portal voice mode, and interruption event handling.
- [[src-208-summary-develop-azure-speech-voice-live-agent-microsoft-foundry|SRC-208 · unit 6 · Summary — Develop an Azure Speech Voice Live Agent in Microsoft Foundry]] — Summarizes Voice Live features, Python client setup, event handlers, real-time audio, and a Flask web application exercise.

**Translate text and speech with Microsoft Foundry Tools**

- [[src-139-introduction-translate-text-speech-microsoft-foundry-tools|SRC-139 · unit 1 · Introduction — Translate text and speech with Microsoft Foundry Tools]] — Introduces translation as a global-solution requirement and frames Microsoft Foundry as the module's translation platform.
- [[src-229-translation-microsoft-foundry|SRC-229 · unit 2 · Translation in Microsoft Foundry]] — Positions Azure Translator and Azure Speech in Foundry Tools as the module's specialized translation services.
- [[src-227-translate-text|SRC-227 · unit 3 · Translate text]] — Explains Azure Translator in Foundry Tools for text translation, document translation, supported languages, translate and transliterate.
- [[src-226-translate-speech|SRC-226 · unit 4 · Translate speech]] — Teaches Azure Speech Translation API objects for speech-to-text and speech-to-speech translation, including manual and event-based synthesis.
- [[src-81-exercise-translate-text-speech|SRC-81 · unit 5 · Exercise - Translate text and speech]] `stub` — Thin exercise launch page for building apps that translate text and speech with Microsoft Foundry tools.
- [[src-166-module-assessment-translate-text-speech-microsoft-foundry-tools|SRC-166 · unit 6 · Module assessment — Translate text and speech with Microsoft Foundry Tools]] — Assessment capture testing translate vs transliterate and SpeechTranslationConfig for speech translation languages.
- [[src-218-summary-translate-text-speech-microsoft-foundry-tools|SRC-218 · unit 7 · Summary — Translate text and speech with Microsoft Foundry Tools]] — Summarizes the module's two outcomes: text translation with Azure Translator and speech translation with Azure Speech.

### Extract insights from visual data on Azure

**Create a knowledge mining solution with Azure AI Search**

- [[src-130-introduction-create-knowledge-mining-solution-azure-ai-search|SRC-130 · unit 1 · Introduction — Create a knowledge mining solution with Azure AI Search]] — Introduces the Azure AI Search module: connect data sources, create indexes, enrich with AI skills, query, filter, and persist enriched data.
- [[src-261-what-is-azure-ai-search|SRC-261 · unit 2 · What is Azure AI Search-]] — Defines Azure AI Search as cloud indexing and querying infrastructure for structured, semi-structured, and unstructured sources.
- [[src-92-extract-data-indexer|SRC-92 · unit 3 · Extract data with an indexer]] — Explains how an Azure AI Search indexer extracts source data, runs enrichment, builds hierarchical JSON documents, and maps fields into an index.
- [[src-52-enrich-extracted-data-ai-skills|SRC-52 · unit 4 · Enrich extracted data with AI skills]] — Explains Azure AI Search skillsets: built-in Foundry Tools skills and custom skills such as Azure Functions wrappers.
- [[src-187-search-index|SRC-187 · unit 5 · Search an index]] — Explains index field attributes, Lucene full-text search, query processing, filters, facets, and sorting in Azure AI Search.
- [[src-181-persist-extracted-information-knowledge-store|SRC-181 · unit 6 · Persist extracted information in a knowledge store]] — Explains why and how Azure AI Search persists enriched data in a knowledge store as object, table, or file projections.
- [[src-64-exercise-create-knowledge-mining-solution|SRC-64 · unit 7 · Exercise - Create a knowledge mining solution]] `stub` — Thin exercise launcher for using Azure AI Search to extract and enrich documents into a searchable index and knowledge store.
- [[src-176-module-assessment-create-knowledge-mining-solution-azure-ai-search|SRC-176 · unit 8 · Module assessment — Create a knowledge mining solution with Azure AI Search]] — Contains three knowledge-check questions on indexers, Foundry Tools built-in skills, and table projections.
- [[src-215-summary-create-knowledge-mining-solution-azure-ai-search|SRC-215 · unit 9 · Summary — Create a knowledge mining solution with Azure AI Search]] — Summarizes the module: Azure AI Search indexes and enriches data, uses AI skills, and persists enriched data in a knowledge store.

**Create a multimodal analysis solution with Azure Content Understanding**

- [[src-126-introduction-create-multimodal-analysis-solution-azure-content-understanding|SRC-126 · unit 1 · Introduction — Create a multimodal analysis solution with Azure Content Understanding]] — Introduces Azure Content Understanding as a multimodal service for extracting information from many content formats.
- [[src-262-what-is-azure-content-understanding|SRC-262 · unit 2 · What is Azure Content Understanding-]] — Defines Content Understanding as a Foundry generative AI service for extracting insights from documents, images, audio, and video.
- [[src-30-create-content-understanding-analyzer|SRC-30 · unit 3 · Create a Content Understanding analyzer]] — Explains the Studio workflow for defining schemas, testing them, and building Content Understanding analyzers.
- [[src-250-content-understanding-api|SRC-250 · unit 4 · Use the Content Understanding API]] — Explains the API flow for submitting content to an analyzer, polling an operation ID, and retrieving JSON results.
- [[src-73-exercise-extract-information-multimodal-content|SRC-73 · unit 5 · Exercise - Extract information from multimodal content]] `stub` — Launches a hands-on lab for extracting information from documents, images, audio files, and videos with Content Understanding.
- [[src-164-module-assessment-create-multimodal-analysis-solution-azure-content-understanding|SRC-164 · unit 6 · Module assessment — Create a multimodal analysis solution with Azure Content Understanding]] — Assesses that Content Understanding builds analyzers for documents, images, videos, and audio, using Studio and schemas.
- [[src-217-summary-create-multimodal-analysis-solution-azure-content-understanding|SRC-217 · unit 7 · Summary — Create a multimodal analysis solution with Azure Content Understanding]] — Summarizes Content Understanding as a multimodal AI service and the Studio analyzer-building outcome of the module.

**Create an Azure Content Understanding client application**

- [[src-138-introduction-create-azure-content-understanding-client-application|SRC-138 · unit 1 · Introduction — Create an Azure Content Understanding client application]] — Introduces using the Python SDK or REST API to send content to Azure Content Understanding analyzers and process results.
- [[src-184-prepare-ai-content-understanding-api|SRC-184 · unit 2 · Prepare to use the AI Content Understanding API]] — Lists the Foundry resource, endpoint, key, SDK, Python, and default model-deployment prerequisites for Content Understanding API clients.
- [[src-29-create-content-understanding-analyzer|SRC-29 · unit 3 · Create a Content Understanding analyzer]] — Explains analyzer creation from a JSON schema by using the Content Understanding Python SDK or REST PUT operation.
- [[src-6-analyze-content|SRC-6 · unit 4 · Analyze content]] — Explains submitting content to an analyzer, asynchronous polling, and processing SDK or REST analysis results.
- [[src-67-exercise-develop-content-understanding-client-application|SRC-67 · unit 5 · Exercise - Develop a Content Understanding client application]] `stub` — Launch page for a lab that builds a client app using the Azure Content Understanding API to submit files to analyzers.
- [[src-160-module-assessment-create-azure-content-understanding-client-application|SRC-160 · unit 6 · Module assessment — Create an Azure Content Understanding client application]] — Assessment questions for Content Understanding client setup, analyzer selection, and typed field results.
- [[src-201-summary-create-azure-content-understanding-client-application|SRC-201 · unit 7 · Summary — Create an Azure Content Understanding client application]] — Summarizes Content Understanding as multimodal extraction and client apps built with the Python SDK or REST API.

**Extract data with Azure Document Intelligence**

- [[src-117-introduction-extract-data-azure-document-intelligence|SRC-117 · unit 1 · Introduction — Extract data with Azure Document Intelligence]] — Introduces Azure Document Intelligence for automating document extraction from forms and documents.
- [[src-263-what-is-azure-document-intelligence|SRC-263 · unit 2 · What is Azure Document Intelligence-]] — Defines Document Intelligence model categories, access methods, resource choices, and input requirements.
- [[src-251-document-intelligence-studio|SRC-251 · unit 3 · Use the Document Intelligence Studio]] — Explains Document Intelligence Studio as the visual interface for testing, labeling, training, and reviewing document models.
- [[src-249-prebuilt-models|SRC-249 · unit 4 · Use prebuilt models]] — Explains read, layout, and document-type prebuilt models, including when to prefer prebuilt over custom models.
- [[src-224-train-custom-models|SRC-224 · unit 5 · Train and use custom models]] — Explains custom template, neural, classifier, and composed Document Intelligence models and the training artifacts they require.
- [[src-54-exercise-analyze-documents-document-intelligence|SRC-54 · unit 6 · Exercise - Analyze documents with Document Intelligence]] `stub` — Thin exercise launcher for analyzing documents with both a prebuilt and custom Document Intelligence model.
- [[src-165-module-assessment-extract-data-azure-document-intelligence|SRC-165 · unit 7 · Module assessment — Extract data with Azure Document Intelligence]] — Assessment questions test layout-model choice, REST training artifacts, and routing among extraction models.
- [[src-220-summary-extract-data-azure-document-intelligence|SRC-220 · unit 8 · Summary — Extract data with Azure Document Intelligence]] — Summarizes Document Intelligence capabilities and links them to Studio, prebuilt models, custom models, and broader Foundry services.

### Other modules

**Analyze documents with Content Understanding**

- [[src-7-analyze-documents-content-understanding-episode-25|SRC-7 · episode · Analyze documents with Content Understanding - AI-103 - Episode 25]] — Demonstrates Content Understanding analyzers across documents, slides, audio, and video, then shows a Python/API flow.

**Analyze images with Content Understanding**

- [[src-137-introduction-analyze-images-content-understanding|SRC-137 · unit 1 · Introduction — Analyze images with Content Understanding]] — Introduces Azure Content Understanding for extracting structured data from images, documents, and other unstructured content.
- [[src-264-what-is-content-understanding|SRC-264 · unit 2 · What is Content Understanding-]] — Defines Content Understanding as a Foundry Tool, covering components, analyzers, use cases, and responsible-use restrictions.
- [[src-8-analyze-images-content-understanding|SRC-8 · unit 3 · Analyze images with Content Understanding]] — Explains image analysis with Content Understanding, including prebuilt analyzers, schemas, API results, and confidence-score routing.
- [[src-55-exercise-analyze-images-content-understanding|SRC-55 · unit 4 · Exercise - Analyze images with Content Understanding]] `stub` — Thin exercise launcher for creating a custom image analyzer and Python app that calls the Content Understanding API.
- [[src-169-module-assessment-analyze-images-content-understanding|SRC-169 · unit 5 · Module assessment — Analyze images with Content Understanding]] — Assessment questions check grounding, confidence-score interpretation, and choosing the receipt prebuilt analyzer.
- [[src-216-summary-analyze-images-content-understanding|SRC-216 · unit 6 · Summary — Analyze images with Content Understanding]] — Summarizes module outcomes: components, prebuilt analyzers, field schemas, the API, and structured image-analysis output.
- [[src-9-analyze-images-content-understanding-episode-24|SRC-9 · episode · Analyze images with Content Understanding - AI-103 - Episode 24]] — Episode demo of using Content Understanding Studio and Python to build an image analyzer that extracts descriptions and tags.

**Analyze text with Azure Language in Foundry Tools**

- [[src-10-analyze-text-azure-language-foundry-tools-episode-15|SRC-10 · episode · Analyze text with Azure Language in Foundry Tools - AI-103 - Episode 15]] — Episode walkthrough of Azure Language text analysis, including why to use focused Foundry Tools, Foundry setup, and Python Text Analytics calls.

**Build agent-driven workflows using Microsoft Foundry**

- [[src-15-build-agent-driven-workflows-microsoft-foundry-episode-12|SRC-15 · episode · Build agent-driven workflows using Microsoft Foundry - AI-103 - Episode 12]] — Episode walkthrough of Foundry workflows, patterns, executors, edges, portal demo, structured outputs, branching, and code invocation.

**Build knowledge-enhanced AI agents with Foundry IQ**

- [[src-16-build-knowledge-enhanced-ai-agents-foundry-iq-episode-10|SRC-16 · episode · Build knowledge-enhanced AI agents with Foundry IQ - AI-103 - Episode 10]] — Episode walkthrough of RAG limits, Foundry IQ data-source categories, retrieval instructions, portal setup, and client-side approval handling.

**Create a knowledge mining solution with Azure AI Search**

- [[src-33-create-knowledge-mining-solution-azure-ai-search-episode-26|SRC-33 · episode · Create a knowledge mining solution with Azure AI Search - AI-103 - Episode 26]] — Episode walkthrough of Azure AI Search for RAG and knowledge mining: indexers, AI skills, field attributes, knowledge stores, and agent grounding.

**Create speech-enabled apps with Microsoft Foundry**

- [[src-35-create-speech-enabled-apps-microsoft-foundry-episode-18|SRC-35 · episode · Create speech-enabled apps with Microsoft Foundry - AI-103 - Episode 18]] — Episode walkthrough of Azure Speech in Foundry: why use Speech tools, SpeechConfig, recognition, synthesis, SSML, voices and voicemail demo.

**Develop AI agents with Microsoft Foundry and Visual Studio Code**

- [[src-41-develop-ai-agents-microsoft-foundry-visual-studio-code-episode|SRC-41 · episode · Develop AI agents with Microsoft Foundry and Visual Studio Code - AI-103 - Episode 7]] — Episode walkthrough defining agents, contrasting portal and code approaches, building an IT support agent, and calling it from Python.

**Develop a generative AI chat app with Microsoft Foundry**

- [[src-42-develop-generative-ai-chat-app-microsoft-foundry-episode-3|SRC-42 · episode · Develop a generative AI chat app with Microsoft Foundry - AI-103 - Episode 3]] — Episode walkthrough of playground tuning, endpoint choice, ChatCompletions vs Responses, local Python setup and sync/async chat demos.

**Develop a speech agent with the Azure Speech MCP server**

- [[src-43-develop-speech-agent-azure-speech-mcp-server-episode-19|SRC-43 · episode · Develop a speech agent with the Azure Speech MCP server - AI-103 - Episode 19]] — Video walkthrough of connecting a Foundry agent to Azure Speech through MCP, including storage, SAS, playground tests, and client code.

**Develop a speech-capable generative AI application**

- [[src-44-develop-speech-capable-generative-ai-application-episode-17|SRC-44 · episode · Develop a speech-capable generative AI application - AI-103 - Episode 17]] — Episode demo: choose, deploy, and call speech-to-text and text-to-speech GPT-4o models from a Foundry project.

**Develop a text analysis agent with the Azure Language MCP server**

- [[src-45-develop-text-analysis-agent-azure-language-mcp-server-episode|SRC-45 · episode · Develop a text analysis agent with the Azure Language MCP server - AI-103 - Episode 16]] — Episode walkthrough of connecting Azure Language in Foundry Tools to an agent, approving MCP calls, and invoking it from code.

**Develop a vision-enabled generative AI application**

- [[src-131-introduction-develop-vision-enabled-generative-ai-application|SRC-131 · unit 1 · Introduction — Develop a vision-enabled generative AI application]] — Introduces vision-enabled generative AI apps that respond to prompts mixing text and image data.
- [[src-248-vision-capable-model-microsoft-foundry-portal|SRC-248 · unit 2 · Use a vision-capable model in the Microsoft Foundry portal]] — Shows that image prompts require a deployed multimodal model and can be tested in the Foundry chat playground.
- [[src-46-develop-vision-based-chat-app|SRC-46 · unit 3 · Develop a vision-based chat app]] — Explains vision-based chat app prompts: connect to a deployed endpoint and send multi-part text-plus-image messages.
- [[src-71-exercise-develop-vision-enabled-chat-app|SRC-71 · unit 4 · Exercise - Develop a vision-enabled chat app]] `stub` — Thin exercise launch page for developing a vision-enabled chat app with an Azure subscription.
- [[src-173-module-assessment-develop-vision-enabled-generative-ai-application|SRC-173 · unit 5 · Module assessment — Develop a vision-enabled generative AI application]] — Assesses model choice, multi-part image-analysis prompts, and image message formats for vision-enabled chat.
- [[src-210-summary-develop-vision-enabled-generative-ai-application|SRC-210 · unit 6 · Summary — Develop a vision-enabled generative AI application]] — Summarizes vision-enabled models as image-understanding chat solutions that can reason over what they see.
- [[src-47-develop-vision-enabled-generative-ai-application-episode-22|SRC-47 · episode · Develop a vision-enabled generative AI application - AI-103 - Episode 22]] — Episode walkthrough for deploying a multimodal model and building a Python visual chat app with image URLs or Base64 image data.

**Develop an AI agent with the Microsoft Agent Framework**

- [[src-48-develop-ai-agent-microsoft-agent-framework-episode-13|SRC-48 · episode · Develop an AI agent with the Microsoft Agent Framework - AI-103 - Episode 13]] — Episode walkthrough of code-first Microsoft Agent Framework: successor framing, provider flexibility, tool dispatch, Foundry setup, credentials, and an expense-claim demo.

**Develop an Azure Speech Voice Live agent in Microsoft Foundry**

- [[src-49-develop-azure-speech-voice-live-agent-microsoft-foundry-episode|SRC-49 · episode · Develop an Azure Speech Voice Live agent in Microsoft Foundry - AI-103 - Episode 20]] — Episode walkthrough of Voice Live concepts, portal voice mode, agent testing, Python client structure, and assessment recap.

**Develop generative AI apps that use tools**

- [[src-50-develop-generative-ai-apps-that-tools-episode-4|SRC-50 · episode · Develop generative AI apps that use tools - AI-103 - Episode 4]] — Episode transcript walkthrough of model tools, Responses API calls, Foundry demos, vector stores, and function calling.

**Generate images and video**

- [[src-97-generate-images-video-episode-23|SRC-97 · episode · Generate images and video - AI-103 - Episode 23]] — Episode demo of image and video generation in Foundry: image models, Images API, Sora 2, video jobs, remix, and reference images.

**Generate images with AI**

- [[src-136-introduction-generate-images-ai|SRC-136 · unit 1 · Introduction — Generate images with AI]] — Introduces image generation in Microsoft Foundry and the module goal of building apps that generate original images.
- [[src-258-what-are-image-generation-models|SRC-258 · unit 2 · What are image-generation models-]] — Defines image-generation models as text-to-image generators and names gpt-image-1 and FLUX families in Foundry.
- [[src-86-explore-image-generation-models-microsoft-foundry-portal|SRC-86 · unit 3 · Explore image-generation models in Microsoft Foundry portal]] — Explains using a Foundry project and model playground to prompt image models, choose size, and optionally use a reference image.
- [[src-32-create-client-application-that-uses-image-generation-model|SRC-32 · unit 4 · Create a client application that uses an image generation model]] — Connects image-generation models to SDK-based client apps, naming OpenAI Python and Azure OpenAI .NET SDK options.
- [[src-74-exercise-generate-images-ai|SRC-74 · unit 5 · Exercise - Generate images with AI]] `stub` — Launches the hands-on image generation exercise covering project provisioning, model deployment, portal use, and Python consumption.
- [[src-172-module-assessment-generate-images-ai|SRC-172 · unit 6 · Module assessment — Generate images with AI]] — Captures the image module assessment questions about the text-to-image filter and OpenAI Image API.
- [[src-197-summary-generate-images-ai|SRC-197 · unit 7 · Summary — Generate images with AI]] — Summarizes the image module: prompts to images in Foundry, playground exploration, and REST or SDK app integration.

**Generate videos with Microsoft Foundry**

- [[src-128-introduction-generate-videos-microsoft-foundry|SRC-128 · unit 1 · Introduction — Generate videos with Microsoft Foundry]] — Introduces Sora 2 video generation in Foundry from prompts, reference images, remixing, and Python OpenAI SDK apps.
- [[src-38-deploy-video-generating-model|SRC-38 · unit 2 · Deploy a video generating model]] — Explains prerequisites and portal steps for deploying Sora 2 as a video-generation model in Microsoft Foundry.
- [[src-100-generate-video-prompt|SRC-100 · unit 3 · Generate video from a prompt]] — Teaches Sora 2 prompt generation, Video playground use, content filtering, reference images, remixing, and iteration tips.
- [[src-101-generate-video-python|SRC-101 · unit 4 · Generate video in Python]] — Describes Python video generation with OpenAI SDK as asynchronous jobs: create, poll, download, reference, remix, and handle failures.
- [[src-75-exercise-generate-video-sora-2-microsoft-foundry|SRC-75 · unit 5 · Exercise - Generate video with Sora 2 in Microsoft Foundry]] `stub` — Launches the Sora 2 video exercise covering deployment, text-prompt video generation, and reference images.

**Implement a responsible generative AI solution in Microsoft Foundry**

- [[src-106-implement-responsible-generative-ai-solution-microsoft-foundry-episode-6|SRC-106 · episode · Implement a responsible generative AI solution in Microsoft Foundry - AI-103 - Episode 6]] — Episode walkthrough of map, measure, mitigate, manage, and a Foundry guardrails demo.

**Integrate MCP tools with Azure AI agents**

- [[src-109-integrate-mcp-tools-azure-ai-agents-episode-9|SRC-109 · episode · Integrate MCP tools with Azure AI agents - AI-103 - Episode 9]] — Episode walkthrough of MCP discovery, remote and local MCP server integration, approvals, and Foundry agent demos.

**Integrate custom tools into your agent**

- [[src-110-integrate-custom-tools-agent-episode-8|SRC-110 · episode · Integrate custom tools into your agent - AI-103 - Episode 8]] — Episode walkthrough of custom tools: why agents need them, tool options, and a Python function-calling demo with dispatch logic.

**Integrate your agent with Microsoft 365**

- [[src-111-integrate-agent-microsoft-365-episode-11|SRC-111 · episode · Integrate your agent with Microsoft 365 - AI-103 - Episode 11]] — Video walkthrough of publishing a Foundry agent to Teams and Microsoft 365, including agent identity, user isolation, Bot Service, scopes, and a demo.

**Optimize generative AI model performance with Microsoft Foundry**

- [[src-177-optimize-generative-ai-model-performance-microsoft-foundry-episode-5|SRC-177 · episode · Optimize generative AI model performance with Microsoft Foundry - AI-103 - Episode 5]] — Episode walkthrough comparing prompt engineering, RAG, and fine-tuning, including a Foundry fine-tuning demo.

**Orchestrate a multi-agent solution using the Microsoft Agent Framework**

- [[src-180-orchestrate-multi-agent-solution-microsoft-agent-framework-episode-14|SRC-180 · episode · Orchestrate a multi-agent solution using the Microsoft Agent Framework - AI-103 - Episode 14]] — Episode recap and demo covering Microsoft Agent Framework orchestration patterns and a sequential multi-agent workflow.

**Plan and prepare to develop AI solutions on Azure**

- [[src-183-plan-prepare-develop-ai-solutions-azure-episode-1|SRC-183 · episode · Plan and prepare to develop AI solutions on Azure - AI-103 - Episode 1]] — Episode walkthrough of planning AI solutions on Microsoft Foundry, including projects, tools, SDKs, portal demo, and responsible AI.

**Select, deploy, and evaluate Microsoft Foundry models**

- [[src-114-introduction-select-deploy-evaluate-microsoft-foundry-models|SRC-114 · unit 1 · Introduction — Select, deploy, and evaluate Microsoft Foundry models]] — Introduces the Foundry model lifecycle: discover, benchmark, deploy, test, and evaluate models for a use case.
- [[src-89-explore-model-catalog|SRC-89 · unit 2 · Explore the model catalog]] — Explains the Foundry model catalog, model categories, filters, model cards, and major language and specialized model types.
- [[src-188-select-models-benchmarks|SRC-188 · unit 3 · Select models using benchmarks]] — Explains Foundry benchmark dimensions: quality, safety, cost, throughput, latency, leaderboards, trade-off charts, and side-by-side comparison.
- [[src-39-deploy-models-endpoints|SRC-39 · unit 4 · Deploy models to endpoints]] — Explains Foundry deployment types, deployment configuration, playground testing, and endpoint details needed by applications.
- [[src-53-evaluate-model-performance|SRC-53 · unit 5 · Evaluate model performance]] — Explains manual, automated, NLP, safety, and dataset-based evaluation approaches for deployed Foundry models and agents.
- [[src-80-exercise-select-deploy-evaluate-models|SRC-80 · unit 6 · Exercise - Select, deploy, and evaluate models]] `stub` — A thin exercise-launch page directing learners to practice selecting, deploying, testing, and evaluating language models in Foundry.
- [[src-145-knowledge-check-select-deploy-evaluate-microsoft-foundry-models|SRC-145 · unit 7 · Knowledge check — Select, deploy, and evaluate Microsoft Foundry models]] — Lists three knowledge-check questions about throughput, Global Standard deployment, and fluency; answers are not shown in this capture.
- [[src-196-summary-select-deploy-evaluate-microsoft-foundry-models|SRC-196 · unit 8 · Summary — Select, deploy, and evaluate Microsoft Foundry models]] — Summarizes the module's model catalog, benchmark, deployment, playground, evaluation, integration, safety, and monitoring takeaways.
- [[src-189-select-deploy-evaluate-microsoft-foundry-models-episode-2|SRC-189 · episode · Select, deploy, and evaluate Microsoft Foundry models - AI-103 - Episode 2]] — Episode walkthrough of catalog filtering, benchmarks, deployment choices, playground comparison, and automated evaluation in Foundry.

**Translate text and speech with Microsoft Foundry Tools**

- [[src-228-translate-text-speech-microsoft-foundry-tools-episode-21|SRC-228 · episode · Translate text and speech with Microsoft Foundry Tools - AI-103 - Episode 21]] — Episode walkthrough of text translation, transliteration, speech translation, and manual versus event-based speech synthesis.
