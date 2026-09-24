---
title: "Master synthesis \u2014 whole AI-103 architecture"
type: synthesis
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "How apps, models, agents, tools, data, identity, safety, evaluation, and operations fit together across the corpus."
area: exam
source_ids: [SRC-4, SRC-8, SRC-12, SRC-13, SRC-18, SRC-19, SRC-23, SRC-39, SRC-51, SRC-53, SRC-85, SRC-89, SRC-91, SRC-95, SRC-98, SRC-99, SRC-102, SRC-104, SRC-152, SRC-153, SRC-154, SRC-155, SRC-156, SRC-170, SRC-178, SRC-182, SRC-183, SRC-184, SRC-188, SRC-191, SRC-229, SRC-230, SRC-231, SRC-233, SRC-237, SRC-241, SRC-242, SRC-243, SRC-244, SRC-245, SRC-254, SRC-255, SRC-256, SRC-257, SRC-261, SRC-263, SRC-264]
objectives: []
objective_gaps: []
tags: []
aliases: ["master synthesis", "whole architecture"]
---
# Master synthesis — how AI-103 fits together

## Summary

**Synthesis:** Across the corpus, an Azure AI solution is an application wrapped around a deployed model, optionally elevated into an agent or workflow, grounded by retrieval and extraction, constrained by identity and responsible AI controls, and improved through evaluation and monitoring (SRC-155 L12–22; SRC-18 L217–221; SRC-230 L258–276; SRC-102 L227–256; SRC-182 L12–18; SRC-53 L215–221). **Inference:** The exam repeatedly changes the surface story but tests which layer owns the decision.

## Scope and question

**Synthesis:** The official study guide covers planning and management, generative and agentic implementation, computer vision, text/speech analysis, and information extraction, with generative/agentic work weighted most heavily and planning/management second (SRC-191 L113–201). This page answers the cross-corpus question: how do those domains form one architecture rather than a list of services?

## Synthesis

### 1. Application and project layer

**Synthesis:** Microsoft Foundry is the main platform container: resources and projects organize model deployments, agents, tools, knowledge connections, endpoint access, and operations views (SRC-155 L12–22; SRC-183 L140–219). The application connects to that project through endpoint and SDK choices: the corpus distinguishes project endpoints, Azure OpenAI endpoints, Foundry SDK, Azure OpenAI SDK, and OpenAI-compatible clients (SRC-18 L217–221; SRC-51 L218–238). **Inference:** The app layer owns user experience, routing, identity acquisition, final validation, and whether a model response becomes a visible answer, a tool call, a stored result, or a workflow event.

### 2. Model layer

**Synthesis:** Model work starts in the catalog, where candidates can be filtered by capability, provider, task, fine-tuning support, and industry; the catalog distinguishes LLMs, SLMs, reasoning, embeddings, image, video, image-analysis, speech-to-text, and text-to-speech model categories (SRC-89 L221–246). Benchmarks compare quality, safety, cost, and performance before deployment, and deployment exposes the selected model through an endpoint for application use (SRC-188 L215–219; SRC-39 L214–254). **Inference:** Model choice is not a prestige contest: the deciding variables are task modality, capability, latency, cost, safety, and deployment compatibility.

### 3. Generation and optimization layer

**Synthesis:** A generative app sends prompt input and optional instructions, receives generated output and usage metadata, and may maintain conversation context through Responses API state or manual Chat Completions history (SRC-99 L230–236; SRC-99 L281–288; SRC-98 L223–233). Prompt engineering shapes behavior through system/user/assistant messages and examples, RAG supplies missing current or private facts, and fine-tuning targets consistent behavior when prompt/RAG approaches are insufficient (SRC-178 L217–239; SRC-102 L217–230; SRC-95 L214–238; SRC-19 L217–229). **Synthesis:** The recurring tension is behavior versus knowledge: prompts steer, RAG grounds, and fine-tuning changes learned behavior (SRC-19 L217–229).

### 4. Agent and orchestration layer

**Synthesis:** Agents combine a model with instructions, tools, and state so they can make decisions and perform tasks rather than only generate text (SRC-230 L220; SRC-91 L222–229; SRC-237 L223–230). Foundry Agent Service provides managed agent features such as automatic tool calling, storage/security, tracing, and deployment; Microsoft Agent Framework provides a code-first way to define agents, tools, workflows, and multi-agent patterns (SRC-230 L258–276; SRC-237 L223–232). **Synthesis:** When one agent is not enough, orchestration patterns coordinate specialized agents through concurrent, sequential, handoff, group chat, or Magentic manager-led designs (SRC-231 L221–252; SRC-241 L225–236; SRC-245 L222–233; SRC-243 L224–234; SRC-242 L223–240; SRC-244 L224–236).

### 5. Tools, retrieval, and data layer

**Synthesis:** Tools let models reach outside their training data and text-only response loop: code interpreter executes Python, file search retrieves uploaded indexed files, web search retrieves current public information, and function calling delegates structured execution to developer-owned logic (SRC-254 L218–224; SRC-255 L218–227; SRC-257 L218–227; SRC-256 L219–246). MCP and custom tool options generalize tool discovery and integration for agents (SRC-233 L218–230; SRC-104 L219–249).

**Synthesis:** Retrieval is the grounding layer. RAG retrieves relevant content, augments the prompt, and generates an answer grounded in trusted data (SRC-102 L227–230). Azure AI Search supplies indexes, AI skills, semantic and vector search for custom retrieval; Foundry IQ manages discovery, chunking, embeddings, indexing, and reindexing for agent knowledge; Content Understanding and Document Intelligence can turn visual, multimodal, and document content into structured or markdown representations for downstream use (SRC-261 L218–226; SRC-85 L232–238; SRC-8 L232–248; SRC-263 L217–224).

### 6. Identity, security, and governance layer

**Synthesis:** Security is not one feature; it appears as endpoint access, RBAC, prompt filtering, human approval, logging, dependency audit, validation, managed identity, keyless credentials, private networking, role policies, tool-access controls, and oversight modes across the objectives and agent sources (SRC-191 L134–139; SRC-230 L242–257; SRC-256 L248–254; SRC-4 L234). **Inference:** The identity question is always: which actor is calling which resource with what permission, and which actions need approval or audit?

**Synthesis:** Responsible AI is a lifecycle: map potential harms, measure outputs against criteria, mitigate at model/safety-system/prompt-grounding/UX layers, and manage release with reviews, phased delivery, incident response, rollback, blocking, feedback, and telemetry (SRC-182 L12–18; SRC-153 L217–246; SRC-154 L12–20; SRC-156 L218–240; SRC-152 L218–233). Guardrails and filters are controls inside that lifecycle, not a substitute for it (SRC-156 L229–231; SRC-170 L214–236).

### 7. Evaluation, monitoring, and operations layer

**Synthesis:** Evaluation starts before and after deployment: benchmarks compare candidate models, app/model evaluators inspect response quality and safety, and low scores can trigger prompt changes, RAG, fine-tuning, or other improvements (SRC-188 L215–219; SRC-53 L215–291). Operations also include quota, rate-limit, cost, drift, safety events, grounding quality, ingestion quality, index health, relevance, traces, token analytics, safety signals, and latency breakdowns in the official objectives (SRC-191 L131–133; SRC-191 L154; SRC-191 L158). **Inference:** Production readiness is the ability to prove the system works, explain when it fails, and change the right layer without overcorrecting another.

## Recurring architectural patterns

- **Synthesis:** **Grounded generation:** retrieve or extract trusted context, inject it into model input, cite or expose evidence, then evaluate factuality and relevance (SRC-102 L227–256; SRC-23 L224–252; SRC-53 L286–291).
- **Synthesis:** **Tool-mediated action:** describe capability, let the model request the tool, execute in a controlled boundary, return the result, log and validate sensitive operations (SRC-91 L222–229; SRC-256 L240–254; SRC-4 L225–234).
- **Synthesis:** **Managed specialization:** split work into services or agents when capabilities differ: speech, language, translation, vision, Content Understanding, Document Intelligence, search, or multi-agent experts (SRC-13 L217–224; SRC-12 L216–224; SRC-229 L216–220; SRC-264 L20–31; SRC-263 L217–224; SRC-231 L221–252).
- **Synthesis:** **Evaluate then repair:** use benchmarks/evaluators/measurement to identify weakness, then choose a repair layer: prompt, RAG, model, fine-tune, guardrail, UX, index, or orchestration (SRC-188 L215–219; SRC-53 L286–291; SRC-156 L218–240).

## Evidence map

| **Synthesis:** Claim | Sources |
|---|---|
| Foundry resources/projects organize model, agent, tool, knowledge, and operations assets. | SRC-155 L12–22; SRC-183 L140–219 |
| Apps consume models through endpoint and SDK choices. | SRC-18 L217–221; SRC-51 L218–238 |
| Catalog, benchmarks, deployment, and evaluation form the model lifecycle. | SRC-89 L221–246; SRC-188 L215–219; SRC-39 L214–254; SRC-53 L215–221 |
| Agents add instructions, tools, state, managed services, and code-first framework options. | SRC-230 L220–276; SRC-91 L222–229; SRC-237 L223–232 |
| Multi-agent orchestration has distinct patterns with different fits. | SRC-231 L221–252; SRC-241 L225–236; SRC-245 L222–233; SRC-242 L223–240; SRC-243 L224–234; SRC-244 L224–236 |
| RAG, Search, Foundry IQ, Content Understanding, and Document Intelligence supply grounding/extraction paths. | SRC-102 L227–256; SRC-261 L218–226; SRC-85 L232–238; SRC-8 L232–248; SRC-263 L217–224 |
| Responsible AI and operations are lifecycle concerns, not late-stage decorations. | SRC-182 L12–18; SRC-152 L218–233; SRC-191 L131–139; SRC-191 L154–158 |

## Tensions

- **Synthesis:** **Prompt engineering vs RAG vs fine-tuning:** the first steers behavior, the second supplies trusted context, and the third changes behavioral consistency; using the wrong repair wastes effort (SRC-19 L217–229).
- **Synthesis:** **Agent vs app logic:** agents are valuable when the model chooses tools or actions, but plain application orchestration may be simpler when every step is deterministic and known (SRC-230 L220–276; SRC-91 L288–291).
- **Synthesis:** **Managed convenience vs control:** Foundry IQ and built-in tools reduce infrastructure work, while Azure AI Search, functions, APIs, and Agent Framework give more explicit design control (SRC-85 L232–238; SRC-255 L255; SRC-256 L219–246; SRC-237 L223–232).
- **Stale-risk:** SDK names, portal flows, model names, default deployments, preview features, and quota details can move after capture; verify live documentation before production implementation (SRC-191 L100–102; SRC-155 L33–34; SRC-184 L234).

## Implications for the exam and for practice

**Inference:** For exam scenarios, identify the layer first: model choice, endpoint/SDK, prompt/grounding, tool/action, orchestration pattern, extraction service, responsible AI control, or monitoring/evaluation. Then rule out neighbours by their input/output boundary: model generates, Search retrieves, Content Understanding analyzes multimodal content, Document Intelligence extracts documents, tools act, and evaluation measures (SRC-191 L120–201; SRC-89 L221–246; SRC-261 L218–226; SRC-264 L20–31; SRC-263 L217–224; SRC-91 L222–229; SRC-53 L215–221).

**Inference:** For practice, run discovery in the same sequence: what user outcome, what modality, what data source, what action boundary, what identity, what safety risk, what evaluation signal, and what operational owner? This keeps the conversation architecture-first rather than product-name-first (SRC-230 L242–276; SRC-152 L218–233; SRC-191 L131–139).

## Open questions

- **Stale-risk:** Which currently available Foundry models, SDK API versions, and portal UI paths match the captured examples must be verified live (SRC-191 L100–102).
- **Inference:** The corpus provides many local recipes but fewer end-to-end production reference architectures; the synthesis pages should continue to preserve gaps rather than invent them.

## Sources

- SRC-4 — [[src-4-add-tools-azure-ai-agent]] — source evidence used on this page.
- SRC-8 — [[src-8-analyze-images-content-understanding]] — source evidence used on this page.
- SRC-12 — [[src-12-azure-language-microsoft-foundry-tools]] — source evidence used on this page.
- SRC-13 — [[src-13-azure-speech-foundry-tools]] — source evidence used on this page.
- SRC-18 — [[src-18-choose-endpoint-sdk]] — source evidence used on this page.
- SRC-19 — [[src-19-compare-combine-optimization-strategies]] — source evidence used on this page.
- SRC-23 — [[src-23-configure-retrieval-foundry-iq]] — source evidence used on this page.
- SRC-39 — [[src-39-deploy-models-endpoints]] — source evidence used on this page.
- SRC-51 — [[src-51-developer-tools-sdks]] — source evidence used on this page.
- SRC-53 — [[src-53-evaluate-model-performance]] — source evidence used on this page.
- SRC-85 — [[src-85-explore-foundry-iq]] — source evidence used on this page.
- SRC-89 — [[src-89-explore-model-catalog]] — source evidence used on this page.
- SRC-91 — [[src-91-extend-agent-capabilities-tools]] — source evidence used on this page.
- SRC-95 — [[src-95-fine-tune-model-consistent-behavior]] — source evidence used on this page.
- SRC-98 — [[src-98-generate-responses-chatcompletions-api]] — source evidence used on this page.
- SRC-99 — [[src-99-generate-responses-responses-api-foundry-sdk]] — source evidence used on this page.
- SRC-102 — [[src-102-ground-model-retrieval-augmented-generation]] — source evidence used on this page.
- SRC-104 — [[src-104-how-integrate-custom-tools]] — source evidence used on this page.
- SRC-152 — [[src-152-manage-responsible-generative-ai-solution]] — source evidence used on this page.
- SRC-153 — [[src-153-map-potential-harms]] — source evidence used on this page.
- SRC-154 — [[src-154-measure-potential-harms]] — source evidence used on this page.
- SRC-155 — [[src-155-microsoft-foundry]] — source evidence used on this page.
- SRC-156 — [[src-156-mitigate-potential-harms]] — source evidence used on this page.
- SRC-170 — [[src-170-module-assessment-implement-responsible-generative-ai-solution-microsoft-foundry]] — source evidence used on this page.
- SRC-178 — [[src-178-optimize-model-output-prompt-engineering]] — source evidence used on this page.
- SRC-182 — [[src-182-plan-responsible-generative-ai-solution]] — source evidence used on this page.
- SRC-183 — [[src-183-plan-prepare-develop-ai-solutions-azure-episode-1]] — source evidence used on this page.
- SRC-184 — [[src-184-prepare-ai-content-understanding-api]] — source evidence used on this page.
- SRC-188 — [[src-188-select-models-benchmarks]] — source evidence used on this page.
- SRC-191 — [[src-191-study-guide-exam-ai-103-developing-ai-apps-agents]] — source evidence used on this page.
- SRC-229 — [[src-229-translation-microsoft-foundry]] — source evidence used on this page.
- SRC-230 — [[src-230-understand-ai-agents-microsoft-foundry-agent-service]] — source evidence used on this page.
- SRC-231 — [[src-231-understand-agent-orchestration]] — source evidence used on this page.
- SRC-233 — [[src-233-understand-mcp-tool-discovery]] — source evidence used on this page.
- SRC-237 — [[src-237-understand-microsoft-agent-framework]] — source evidence used on this page.
- SRC-241 — [[src-241-concurrent-orchestration]] — source evidence used on this page.
- SRC-242 — [[src-242-group-chat-orchestration]] — source evidence used on this page.
- SRC-243 — [[src-243-handoff-orchestration]] — source evidence used on this page.
- SRC-244 — [[src-244-magentic-orchestration]] — source evidence used on this page.
- SRC-245 — [[src-245-sequential-orchestration]] — source evidence used on this page.
- SRC-254 — [[src-254-code-interpreter-tool]] — source evidence used on this page.
- SRC-255 — [[src-255-file-search-tool]] — source evidence used on this page.
- SRC-256 — [[src-256-function-tool]] — source evidence used on this page.
- SRC-257 — [[src-257-web-search-tool]] — source evidence used on this page.
- SRC-261 — [[src-261-what-is-azure-ai-search]] — source evidence used on this page.
- SRC-263 — [[src-263-what-is-azure-document-intelligence]] — source evidence used on this page.
- SRC-264 — [[src-264-what-is-content-understanding]] — source evidence used on this page.
