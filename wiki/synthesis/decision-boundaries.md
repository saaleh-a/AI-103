---
title: "Decision boundaries — confusable technologies"
type: synthesis
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Hub of compact exam decision boundaries across APIs, agents, workflows, tools, retrieval, optimization, media, deployment and auth."
area: exam
source_ids: [SRC-4, SRC-5, SRC-8, SRC-12, SRC-13, SRC-17, SRC-18, SRC-19, SRC-20, SRC-22, SRC-23, SRC-25, SRC-26, SRC-31, SRC-34, SRC-36, SRC-37, SRC-39, SRC-43, SRC-46, SRC-84, SRC-85, SRC-88, SRC-91, SRC-95, SRC-96, SRC-98, SRC-99, SRC-102, SRC-104, SRC-108, SRC-110, SRC-115, SRC-126, SRC-178, SRC-179, SRC-185, SRC-189, SRC-223, SRC-225, SRC-226, SRC-227, SRC-229, SRC-230, SRC-231, SRC-232, SRC-233, SRC-236, SRC-237, SRC-238, SRC-240, SRC-241, SRC-242, SRC-243, SRC-244, SRC-245, SRC-247, SRC-255, SRC-256, SRC-257, SRC-259, SRC-263, SRC-264]
objectives: []
objective_gaps: []
tags: []
aliases: ["confusable technologies", "exam decision boundaries"]
---

# Decision boundaries — confusable technologies

## Summary

**Synthesis:** This page is the compact hub for AI-103 confusions: it reduces each pair or group to the deciding details, likely exam cue, and a navigation link to the deeper comparison or concept page. Each cue is an inference over corpus evidence, not a substitute for reading the linked page. (SRC-18 L217–221; SRC-231 L248–252; SRC-91 L231–242)

## Scope and question

**Synthesis:** The scope is corpus-covered decision boundaries for APIs, agent-building options, workflow/orchestration options, tools, retrieval, optimization, extraction, speech/language, deployments, and authentication. Where the corpus names but does not settle an implementation detail, the row says so. (SRC-96 L223–236; SRC-39 L217–268)

## Synthesis

| Confusable options | One or two deciding details | **Inference:** exam cue | Link |
|---|---|---|---|
| Responses API vs Chat Completions API | Responses is recommended for most new Foundry development, is stateful, and can link turns with `previous_response_id`; Chat Completions uses JSON message objects and requires app-managed history. (SRC-18 L221; SRC-99 L217–237; SRC-98 L217–233) | New Foundry app, response IDs, file search, stateful multi-turn → Responses; existing compatibility or manual message list → Chat Completions. (SRC-99 L225; SRC-98 L223–233) | [[responses-api]] · [[chat-completions-api]] |
| Foundry Agent Service vs Microsoft Agent Framework vs Microsoft 365 Agents Toolkit | Foundry Agent Service is the managed agent runtime; Agent Framework is the code-first SDK; Agents Toolkit creates an advanced Microsoft 365 proxy app for SSO/middleware/environments. (SRC-230 L258–276; SRC-237 L218–232; SRC-5 L222–233) | Managed hosted/published agent → Foundry Agent Service; agents/sessions/providers in code → Agent Framework; Teams proxy with custom SSO or middleware → Agents Toolkit. (SRC-232 L216–244; SRC-34 L218–260; SRC-5 L222–224) | [[agent-building-options-compared]] |
| Foundry portal vs Foundry Toolkit for VS Code | Portal is web/visual/centralized; VS Code is developer-centric with YAML, Git, local iteration, and integration code. (SRC-84 L220–257; SRC-20 L218–269) | Stakeholder visual prototype → portal; version-controlled YAML beside app code → VS Code. (SRC-84 L220–280) | [[agent-building-options-compared]] |
| Foundry workflows vs Agent Framework workflows | Foundry workflows are visual/YAML project assets with nodes, variables, Power Fx, and saved workflow invocation; Agent Framework workflows are code graphs with executors, edges, events, and builders. (SRC-36 L220–236; SRC-247 L12–27; SRC-231 L229–264) | Designer/YAML/nodes/Power Fx/workflow name → Foundry workflows; `WorkflowBuilder`, executors, edges, async events → Agent Framework workflows. (SRC-247 L12–16; SRC-231 L229–264) | [[orchestration-patterns-compared]] |
| Sequential vs concurrent vs handoff vs group chat vs Magentic | Fixed ordered dependency, independent parallelism, dynamic one-at-a-time routing, managed shared conversation, or adaptive manager-led planning. (SRC-245 L218–233; SRC-241 L218–236; SRC-243 L218–254; SRC-242 L218–261; SRC-244 L218–244) | First/then pipeline → sequential; independent experts in parallel → concurrent; route to specialist → handoff; debate/consensus → group chat; evolving plan/ledger → Magentic. (SRC-231 L248–252) | [[orchestration-patterns-compared]] |
| Function tools vs Azure Functions vs OpenAPI vs MCP vs A2A | Function tool executes in app/framework code; Azure Functions offloads to serverless compute; OpenAPI uses REST contract; MCP discovers tool catalogs; A2A calls another agent. (SRC-256 L219–248; SRC-104 L228–246; SRC-108 L217–233; SRC-37 L217–249) | App-owned validation → function tool; queue/serverless → Azure Functions; Swagger/OpenAPI → OpenAPI; dynamic tools → MCP; remote specialist agent → A2A. (SRC-110 L203–290; SRC-233 L225–239; SRC-37 L224–249) | [[tool-options-compared]] |
| File Search vs Azure AI Search vs Foundry IQ vs Web Search | File Search grounds uploaded files; Azure AI Search indexes enterprise sources; Foundry IQ is managed shared agent knowledge built on Azure AI Search; Web Search retrieves current public web information. (SRC-255 L218–241; SRC-91 L237–242; SRC-85 L219–246; SRC-257 L218–241) | Uploaded PDFs → File Search; existing index/semantic/vector/filtering → Azure AI Search; multi-agent shared knowledge base → Foundry IQ; latest public facts → Web Search. (SRC-22 L16–20; SRC-255 L255; SRC-257 L220–227) | [[retrieval-options-compared]] · [[file-search-tool]] · [[azure-ai-search]] · [[foundry-iq]] · [[web-search-tool]] |
| Prompt engineering vs RAG vs fine-tuning | Prompting steers behavior in the request; RAG adds external context at query time; fine-tuning changes model behavior from examples. (SRC-178 L221–279; SRC-102 L227–230; SRC-95 L217–225) | Wrong tone/format → prompt first; missing current/private facts → RAG; persistent style/format after prompts and baseline → fine-tuning. (SRC-19 L217–239; SRC-95 L245–256) | [[optimization-strategies-compared]] |
| Content Understanding vs Document Intelligence vs Azure Language vs vision-capable models | Content Understanding is multimodal analyzer extraction; Document Intelligence is document OCR/layout/prebuilt/custom extraction; Azure Language analyzes text; vision chat answers questions about images with a multimodal model. (SRC-264 L12–34; SRC-263 L217–224; SRC-12 L217–220; SRC-46 L213–221) | Multimodal fields/markdown/grounding → Content Understanding; invoices/forms/layout → Document Intelligence; NER/PII/language detection → Azure Language; ask about an image in chat → vision model. (SRC-96 L223–232; SRC-8 L232–248; SRC-263 L220–224) | [[extraction-options-compared]] · [[vision-enabled-chat]] |
| Speech SDK / Azure Speech vs Voice Live vs speech-capable models vs Speech MCP server | Speech SDK gives app-code recognizer/synthesizer/translation control; Voice Live is real-time bidirectional WebSocket voice; speech-capable models are deployed model endpoints for STT/TTS; Speech MCP gives agents discoverable file-based speech tools. (SRC-13 L218–230; SRC-88 L216–272; SRC-17 L218–221; SRC-236 L226–248) | `SpeechConfig`/recognizer/synthesizer/SSML → Speech SDK; VAD/events/interruptions/avatar → Voice Live; `gpt-4o-transcribe` or TTS model → speech model; Blob/SAS/MCP speech tool → Speech MCP. (SRC-225 L216–224; SRC-226 L14–45; SRC-25 L216–270) | [[speech-and-language-options-compared]] |
| Azure Translator vs LLM translation | Translator is specialized text/document translation and transliteration, with `translate`, `transliterate`, language lists, endpoints, and custom models; LLM translation is broader generative multilingual output. (SRC-227 L216–268; SRC-229 L216–219) | `TextTranslationClient`, source/target languages, transliteration, document translation → Translator; translation embedded in broader reasoning/generation → LLM flow. (SRC-227 L248–268; SRC-229 L216–219) | [[text-translation]] · [[azure-translator]] |
| Deployment types | Placement: global, data-zone, regional; capacity/billing: standard, provisioned, batch, managed compute, developer. (SRC-39 L217–240; SRC-189 L237–340) | Guaranteed throughput → provisioned; EU/US boundary → data zone; single region → regional; queued noninteractive jobs → batch; VM/instance choice → managed compute. (SRC-39 L217–226; SRC-189 L264–340) | [[deployment-options-compared]] · [[model-deployment-types]] |
| API keys vs Microsoft Entra ID | Keys are supported for some service calls; Entra ID is recommended for production and required for published Agent Applications. Role assignments control authorization. (SRC-18 L220; SRC-39 L265–268; SRC-88 L230–232; SRC-223 L261–264) | Production security/managed identity/keyless → Entra ID; published Agent Application → Entra ID only; simple dev key path may exist for specific tools. (SRC-12 L225–235; SRC-223 L261–264) | [[keyless-authentication]] · [[microsoft-entra-id]] |
| Foundry Tools vs agent tools | Foundry Tools are prebuilt service/API families such as Language, Speech, Translator, Document Intelligence, and Content Understanding; agent tools are capabilities attached to a model/agent for retrieval, code, web, functions, MCP, or APIs. (SRC-96 L218–233; SRC-91 L218–232; SRC-259 L222–228) | Specific AI service task → Foundry Tool; agent must decide/call capabilities while responding → agent tool. (SRC-96 L223–233; SRC-91 L222–229) | [[foundry-tools]] · [[agent-tools]] |

## Evidence map

| **Synthesis:** Boundary family | Sources |
|---|---|
| API choice and state | SRC-18 L217–221; SRC-98 L217–233; SRC-99 L217–237 |
| Agent building and publishing | SRC-5 L218–233; SRC-34 L218–260; SRC-84 L220–280; SRC-230 L258–276; SRC-232 L216–244; SRC-237 L218–232 |
| Workflows and orchestration | SRC-36 L220–236; SRC-231 L229–264; SRC-241 L218–236; SRC-242 L218–261; SRC-243 L218–254; SRC-244 L218–244; SRC-245 L218–242; SRC-247 L12–27 |
| Tool options and protocols | SRC-91 L218–297; SRC-104 L216–250; SRC-108 L217–233; SRC-179 L217–230; SRC-233 L225–239; SRC-240 L217–239; SRC-256 L219–263 |
| Retrieval and grounding | SRC-22 L16–20; SRC-85 L219–246; SRC-102 L227–256; SRC-255 L218–241; SRC-257 L218–241 |
| Model optimization | SRC-19 L217–239; SRC-95 L217–256; SRC-102 L227–230; SRC-178 L221–279 |
| Extraction, language, speech, deployment, and auth | SRC-12 L217–235; SRC-13 L218–230; SRC-17 L218–221; SRC-39 L217–268; SRC-88 L216–272; SRC-96 L223–233; SRC-223 L261–264; SRC-263 L217–224; SRC-264 L12–34 |

## Tensions

- **Synthesis:** Some boundaries are fully taught with implementation patterns, while some are named only at a high level. This page uses "where the corpus does not settle" instead of filling gaps from outside knowledge. (SRC-36 L220–236; SRC-231 L229–264)
- **Stale-risk:** Product naming, preview status, SDK class names, deployment labels, model names, and authentication capabilities move; preserve the cited corpus wording for exam study and verify current docs before production work. (SRC-18 L217–221; SRC-39 L217–226; SRC-88 L227–232; SRC-240 L234–239)
- **Synthesis:** Speech MCP authentication has a key-based Learn path in the corpus and an episode aside about possible managed identity; this hub treats key/SAS as the taught route and flags managed identity as not settled by the corpus when teaching Speech MCP. (SRC-236 L258; SRC-25 L234–237; SRC-43 L98–103)

## Implications for the exam and for practice

**Inference:** The exam cue is usually the operational noun: response ID, message list, Agent Card, MCP server, vector store, existing index, workflow node, executor, `SpeechConfig`, WebSocket event, deployment type, or Entra role. Map that noun to the boundary before choosing the product. (SRC-99 L279–280; SRC-98 L223–232; SRC-37 L232–249; SRC-108 L217–233; SRC-255 L235–241; SRC-231 L229–264; SRC-88 L240–258)

**Inference:** In practice, the same decision should start from ownership: who owns the data, who owns execution, who owns state, who owns identity, who owns routing, and who must inspect or version the solution. (SRC-18 L220; SRC-91 L287–292; SRC-223 L261–264)

## Open questions

- The corpus does not settle private networking implementation for the security objective; it names security topics elsewhere but does not teach a private networking procedure in the pages synthesized here. (SRC-223 L261–264)
- The corpus does not settle current regional/model availability or full production limits for model deployments, Foundry IQ, Voice Live, or MCP tools. (SRC-39 L227; SRC-85 L219–246; SRC-88 L227–228; SRC-240 L217–240)

## Sources

- SRC-4 — [[src-4-add-tools-azure-ai-agent]] — Agent Framework service-provided and custom tools.
- SRC-5 — [[src-5-advanced-microsoft-365-agents-toolkit-complex-integration-scenarios]] — Agents Toolkit boundary.
- SRC-8 — [[src-8-analyze-images-content-understanding]] — Content Understanding outputs and RAG-ready markdown.
- SRC-12 — [[src-12-azure-language-microsoft-foundry-tools]] — Azure Language and auth.
- SRC-13 — [[src-13-azure-speech-foundry-tools]] — Azure Speech SDK basics.
- SRC-17 — [[src-17-choose-speech-capable-model]] — speech-capable model choices.
- SRC-18 — [[src-18-choose-endpoint-sdk]] — endpoint, SDK, API, and auth boundaries.
- SRC-19 — [[src-19-compare-combine-optimization-strategies]] — prompt, RAG, and fine-tuning comparison.
- SRC-20 — [[src-20-configure-manage-agents-visual-studio-code]] — VS Code agent YAML and designer.
- SRC-22 — [[src-22-configure-data-sources-knowledge-bases]] — Foundry IQ data-source choices.
- SRC-23 — [[src-23-configure-retrieval-foundry-iq]] — Foundry IQ retrieval instructions.
- SRC-25 — [[src-25-connect-speech-mcp-server-agent]] — Speech MCP connection.
- SRC-26 — [[src-26-connect-a2a-agent]] — A2A client.
- SRC-31 — [[src-31-create-voice-live-agent]] — Voice Live agent path.
- SRC-34 — [[src-34-create-azure-ai-agent-microsoft-agent-framework]] — Agent Framework with Foundry provider.
- SRC-36 — [[src-36-create-workflows-microsoft-foundry]] — Foundry workflow designer.
- SRC-37 — [[src-37-define-a2a-agent]] — A2A skills and card.
- SRC-39 — [[src-39-deploy-models-endpoints]] — model deployment and endpoint consumption.
- SRC-43 — [[src-43-develop-speech-agent-azure-speech-mcp-server-episode-19]] — Speech MCP episode: managed-identity aside and key + SAS URL demo.
- SRC-46 — [[src-46-develop-vision-based-chat-app]] — vision-enabled chat API boundary.
- SRC-84 — [[src-84-explore-development-approaches]] — portal and VS Code comparison.
- SRC-85 — [[src-85-explore-foundry-iq]] — Foundry IQ.
- SRC-88 — [[src-88-explore-azure-voice-live-api]] — Voice Live API.
- SRC-91 — [[src-91-extend-agent-capabilities-tools]] — agent tool catalog.
- SRC-95 — [[src-95-fine-tune-model-consistent-behavior]] — fine-tuning.
- SRC-96 — [[src-96-foundry-tools]] — Foundry Tools.
- SRC-98 — [[src-98-generate-responses-chatcompletions-api]] — Chat Completions.
- SRC-99 — [[src-99-generate-responses-responses-api-foundry-sdk]] — Responses API.
- SRC-102 — [[src-102-ground-model-retrieval-augmented-generation]] — RAG and Azure AI Search.
- SRC-104 — [[src-104-how-integrate-custom-tools]] — custom tool options.
- SRC-108 — [[src-108-integrate-agent-tools-mcp-server-client]] — MCP client/server.
- SRC-110 — [[src-110-integrate-custom-tools-agent-episode-8]] — custom tool option comparisons.
- SRC-115 — [[src-115-introduction-create-speech-enabled-apps-azure-speech-microsoft-foundry]] — Azure Speech API family.
- SRC-126 — [[src-126-introduction-create-multimodal-analysis-solution-azure-content-understanding]] — Content Understanding scope.
- SRC-178 — [[src-178-optimize-model-output-prompt-engineering]] — prompt engineering.
- SRC-179 — [[src-179-options-implementing-custom-tools]] — custom tool catalogue.
- SRC-185 — [[src-185-publish-agent-foundry-portal-teams]] — publishing identity and roles.
- SRC-189 — [[src-189-select-deploy-evaluate-microsoft-foundry-models-episode-2]] — deployment trade-offs.
- SRC-223 — [[src-223-test-deploy-integrate-agents]] — Agent Application auth.
- SRC-225 — [[src-225-transcribe-speech]] — speech-to-text models.
- SRC-226 — [[src-226-translate-speech]] — Speech SDK translation boundary.
- SRC-227 — [[src-227-translate-text]] — Translator methods.
- SRC-229 — [[src-229-translation-microsoft-foundry]] — LLM versus specialized translation.
- SRC-230 — [[src-230-understand-ai-agents-microsoft-foundry-agent-service]] — Foundry Agent Service.
- SRC-231 — [[src-231-understand-agent-orchestration]] — orchestration components and patterns.
- SRC-232 — [[src-232-understand-foundry-agent-publishing-options]] — publishing choices.
- SRC-233 — [[src-233-understand-mcp-tool-discovery]] — MCP discovery.
- SRC-236 — [[src-236-understand-azure-speech-mcp-server]] — Speech MCP server.
- SRC-237 — [[src-237-understand-microsoft-agent-framework]] — Agent Framework.
- SRC-238 — [[src-238-understand-workflows]] — Foundry workflow definition.
- SRC-240 — [[src-240-azure-ai-agents-mcp-servers]] — managed MCP tools.
- SRC-241 — [[src-241-concurrent-orchestration]] — concurrent orchestration.
- SRC-242 — [[src-242-group-chat-orchestration]] — group chat orchestration.
- SRC-243 — [[src-243-handoff-orchestration]] — handoff orchestration.
- SRC-244 — [[src-244-magentic-orchestration]] — Magentic orchestration.
- SRC-245 — [[src-245-sequential-orchestration]] — sequential orchestration.
- SRC-247 — [[src-247-workflows-code]] — Foundry workflow invocation.
- SRC-255 — [[src-255-file-search-tool]] — File Search.
- SRC-256 — [[src-256-function-tool]] — function tool.
- SRC-257 — [[src-257-web-search-tool]] — Web Search.
- SRC-259 — [[src-259-what-are-tools]] — Responses API tools.
- SRC-263 — [[src-263-what-is-azure-document-intelligence]] — Document Intelligence.
- SRC-264 — [[src-264-what-is-content-understanding]] — Content Understanding.
