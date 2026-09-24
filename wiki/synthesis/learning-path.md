---
title: "Learning path"
type: synthesis
status: active
confidence: high
created: 2026-09-24
updated: 2026-09-24
summary: "Prerequisite-ordered route through the wiki, weighted by exam domains and focused on capabilities after each step."
area: exam
source_ids: [SRC-2, SRC-8, SRC-12, SRC-13, SRC-14, SRC-18, SRC-19, SRC-21, SRC-30, SRC-32, SRC-37, SRC-38, SRC-39, SRC-40, SRC-51, SRC-52, SRC-53, SRC-84, SRC-85, SRC-88, SRC-89, SRC-90, SRC-91, SRC-92, SRC-93, SRC-94, SRC-95, SRC-98, SRC-99, SRC-102, SRC-105, SRC-107, SRC-152, SRC-153, SRC-155, SRC-156, SRC-178, SRC-181, SRC-182, SRC-186, SRC-187, SRC-188, SRC-191, SRC-224, SRC-226, SRC-227, SRC-229, SRC-230, SRC-231, SRC-232, SRC-233, SRC-235, SRC-236, SRC-237, SRC-238, SRC-241, SRC-242, SRC-243, SRC-244, SRC-245, SRC-246, SRC-248, SRC-249, SRC-250, SRC-252, SRC-253, SRC-254, SRC-255, SRC-256, SRC-257, SRC-258, SRC-260, SRC-261, SRC-263, SRC-264]
objectives: []
objective_gaps: []
tags: []
aliases: ["study route", "curriculum path"]
---
# Learning path — prerequisite-ordered route

## Summary

**Synthesis:** This route follows foundation, mechanism, Azure implementation, distinctions, code, and scenarios; it weights the first pass toward generative/agentic and plan/manage domains because those are 30–35% and 25–30% of the exam (SRC-191 L113–159). **Inference:** Each step names prerequisites explicitly so the learner can resume from the first missing capability rather than restart the wiki.

## Scope and question

**Synthesis:** The official domains are plan/manage, generative and agentic implementation, computer vision, text/speech, and information extraction (SRC-191 L113–201). This page asks what to read first and what the learner should be able to do after each step.

## Synthesis

1. **Foundation — AI, Foundry, and the exam.** Prerequisites: none. Read [[ai-103-exam]], [[generative-ai-fundamentals]], [[microsoft-foundry]], [[foundry-resources-and-projects]], [[development-tools-and-approaches]]. Be able to explain what the exam tests, what Foundry organizes, and why project/resource boundaries matter (SRC-191 L113–201; SRC-260 L218–230; SRC-155 L12–22; SRC-51 L218–238).

2. **Model discovery and deployment.** Prerequisites: Step 1. Read [[model-selection]], [[model-catalog]], [[model-benchmarks]], [[model-deployment-types]], [[model-playgrounds]]. Be able to choose a model family by modality and constraints, justify the choice with benchmarks, and describe deployment to an endpoint (SRC-89 L221–246; SRC-188 L215–219; SRC-39 L214–254; SRC-90 L217–240).

3. **Endpoint and SDK mechanics.** Prerequisites: Steps 1–2. Read [[endpoints-and-sdk-choice]], [[foundry-sdk]], [[openai-sdk]], [[azure-openai]], [[responses-api]], [[chat-completions-api]], [[conversation-state]]. Be able to decide which endpoint/client surface fits a Foundry project, Azure OpenAI model, or OpenAI-compatible call, and explain stateful versus manually tracked chat context (SRC-18 L217–221; SRC-99 L217–236; SRC-98 L223–233).

4. **Prompt and output control.** Prerequisites: Steps 1–3. Read [[prompt-engineering]], [[generation-parameters]], [[guardrails-and-content-filters]]. Be able to separate prompt structure, generation settings, and safety filters rather than treating all output problems as prompt problems (SRC-178 L217–239; SRC-99 L242–251; SRC-156 L229–231).

5. **Grounding and search.** Prerequisites: Steps 1–4. Read [[retrieval-augmented-generation]], [[embeddings-and-vector-search]], [[azure-ai-search]], [[indexers-and-data-sources]], [[search-indexes]], [[search-queries]], [[semantic-ranking]], [[knowledge-mining]], [[ai-enrichment-skillsets]], [[knowledge-store]]. Be able to build a RAG pipeline: ingest/index/enrich, retrieve with keyword/semantic/vector/hybrid search, inject context, and evaluate grounded answers (SRC-102 L227–256; SRC-261 L218–226; SRC-92 L217–239; SRC-52 L216–228; SRC-187 L216–259; SRC-181 L214–224).

6. **Optimization decisions.** Prerequisites: Steps 2–5. Read [[fine-tuning]], [[model-and-app-evaluation]], [[optimization-strategies-compared]]. Be able to choose between prompt engineering, RAG, and fine-tuning, then use evaluation results to repair the right layer (SRC-19 L217–229; SRC-95 L214–238; SRC-53 L215–291).

7. **Agents and tools.** Prerequisites: Steps 1–6. Read [[ai-agents]], [[foundry-agent-service]], [[foundry-agent-types]], [[agent-tools]], [[code-interpreter-tool]], [[file-search-tool]], [[web-search-tool]], [[function-calling]], [[custom-tool-options]], [[mcp-tool-integration]], [[tool-options-compared]]. Be able to explain how agents differ from chat apps and choose the tool boundary for compute, uploaded files, web, functions, APIs, Azure Functions, OpenAPI, or MCP (SRC-230 L220–276; SRC-91 L222–295; SRC-254 L218–224; SRC-255 L218–227; SRC-257 L218–227; SRC-256 L219–254; SRC-233 L218–230).

8. **Agent implementation surfaces.** Prerequisites: Step 7. Read [[microsoft-agent-framework]], [[agent-framework-workflows]], [[agent-testing-and-evaluation]], [[agent-publishing]], [[microsoft-365-agent-integration]], [[microsoft-365-agents-toolkit]], [[work-iq]], [[agent-building-options-compared]]. Be able to choose portal, VS Code, Foundry Agent Service, Agent Framework, Teams publishing, or Microsoft 365 integration by required surface and destination (SRC-84 L232–284; SRC-14 L218–246; SRC-237 L223–232; SRC-232 L216–228; SRC-2 L216–241).

9. **Workflows and multi-agent orchestration.** Prerequisites: Steps 7–8. Read [[foundry-workflows]], [[workflow-patterns]], [[human-in-the-loop-approval]], [[multi-agent-orchestration]], [[concurrent-orchestration]], [[sequential-orchestration]], [[handoff-orchestration]], [[group-chat-orchestration]], [[magentic-orchestration]], [[orchestration-patterns-compared]]. Be able to choose concurrent, sequential, handoff, group chat, Magentic, or workflow approval patterns by dependency and routing shape (SRC-238 L216–227; SRC-105 L216–236; SRC-231 L221–252; SRC-241 L225–236; SRC-245 L222–233; SRC-242 L223–240; SRC-243 L224–234; SRC-244 L224–236).

10. **Agent-to-agent and protocol integration.** Prerequisites: Steps 7–9. Read [[agent2agent-protocol]], [[a2a-agent-implementation]], [[model-context-protocol]], [[azure-language-mcp-server]], [[azure-speech-mcp-server]], [[azure-speech-mcp-server]], [[azure-language-mcp-server]]. Be able to distinguish A2A remote agent communication from MCP tool discovery and execution (SRC-37 L218–249; SRC-107 L12–36; SRC-233 L218–230; SRC-236 L216–236; SRC-235 L217–234).

11. **Responsible AI, identity, security, and operations.** Prerequisites: Steps 1–10. Read [[responsible-ai-principles]], [[responsible-ai-lifecycle]], [[prompt-injection-and-jailbreaks]], [[keyless-authentication]], [[observability-and-tracing]], [[quotas-rate-limits-and-cost]], [[application-insights]]. Be able to map/measure/mitigate/manage harms, select guardrails, identify approval/audit needs, and name what to monitor (SRC-186 L216–238; SRC-182 L12–18; SRC-153 L217–246; SRC-152 L218–233; SRC-191 L131–139; SRC-191 L154–158).

12. **Language and translation.** Prerequisites: Steps 1–4. Read [[azure-language]], [[foundry-tools]], [[language-detection]], [[named-entity-recognition]], [[pii-detection-and-redaction]], [[azure-translator]], [[text-translation]], [[speech-and-language-options-compared]]. Be able to choose detection, entity extraction, PII redaction, or translation and explain when a Foundry Tool is the right focused service (SRC-12 L216–224; SRC-40 L218–234; SRC-93 L216–220; SRC-94 L216–225; SRC-229 L216–220; SRC-227 L216–230).

13. **Speech and real-time audio.** Prerequisites: Steps 1–4 and 12. Read [[azure-speech]], [[speech-to-text]], [[text-to-speech]], [[voices-and-audio-formats]], [[ssml]], [[speech-translation]], [[speech-capable-models]], [[voice-live-api]], [[voice-live-api]]. Be able to choose transcription, synthesis, SSML/voice configuration, speech translation, speech-capable models, or Voice Live events (SRC-13 L217–224; SRC-252 L216–226; SRC-253 L216–226; SRC-21 L216–228; SRC-246 L216–229; SRC-226 L16–30; SRC-88 L216–248).

14. **Vision, images, and video.** Prerequisites: Steps 1–4 and 2. Read [[vision-enabled-chat]], [[image-generation]], [[image-generation]], [[video-generation]], [[sora-2]], [[azure-content-understanding]], [[content-understanding-analyzers]]. Be able to distinguish image input to a multimodal model from image generation, video generation, and Content Understanding image analysis (SRC-248 L213–221; SRC-258 L218–223; SRC-32 L214; SRC-38 L216–226; SRC-264 L27–31; SRC-8 L218–248).

15. **Information extraction.** Prerequisites: Steps 5 and 14. Read [[azure-content-understanding]], [[content-understanding-analyzers]], [[content-understanding-client-apps]], [[content-understanding-client-apps]], [[content-understanding-analyzers]], [[azure-document-intelligence]], [[document-intelligence-prebuilt-models]], [[document-intelligence-custom-models]], [[extraction-options-compared]]. Be able to choose Content Understanding for multimodal analyzer contracts, Document Intelligence for document model extraction, and Search/RAG when the task is retrieval rather than extraction (SRC-264 L20–31; SRC-30 L216–243; SRC-250 L219; SRC-263 L217–224; SRC-249 L216–234; SRC-224 L216–236; SRC-261 L218–226).

16. **Final discrimination and scenario synthesis.** Prerequisites: Steps 1–15. Read [[decision-boundaries]], [[deployment-options-compared]], [[retrieval-options-compared]], [[tool-options-compared]], [[speech-and-language-options-compared]], [[solution-engineering-transfer]], [[key-tensions]], [[glossary]], [[corpus-gaps]], [[open-questions]], [[naming-and-currency]]. Be able to solve mixed scenarios by identifying the layer, ruling out confusable neighbours, citing the implementation surface, and naming any corpus gap or stale-risk (SRC-191 L96–102; SRC-191 L120–201).

## Evidence map

| **Synthesis:** Route principle | Sources |
|---|---|
| Weight generative/agentic and plan/manage first. | SRC-191 L113–159 |
| Teach platform/project/model before SDKs, agents, and operations. | SRC-155 L12–22; SRC-89 L221–246; SRC-18 L217–221 |
| Teach RAG/search before extraction-to-grounding and agent knowledge. | SRC-102 L227–256; SRC-261 L218–226; SRC-85 L232–238 |
| Teach agents before tools, workflows, and orchestration patterns. | SRC-230 L220–276; SRC-91 L222–229; SRC-231 L221–252 |
| Teach responsibility and monitoring as cross-cutting, not a final add-on. | SRC-182 L12–18; SRC-152 L218–233; SRC-191 L131–139 |

## Tensions

**Inference:** This path is not strict document order. It is prerequisite order: the app's curriculum prerequisites are useful hints, but the wiki route prioritizes concepts that unlock multiple domains and high-weight distinctions (SRC-191 L113–201).

## Implications for the exam and for practice

**Inference:** After each step, do one retrieval check and one discrimination check before moving on; finishing a page is not evidence of mastery. **Inference:** The final exam skill is not remembering page names but recognizing which responsibility boundary the scenario is testing (SRC-191 L120–201).

## Open questions

- **Stale-risk:** Model names, preview features, default deployments, and portal steps in this path require live verification for production work (SRC-191 L100–102).

## Sources

- SRC-2 — [[src-2-access-microsoft-365-data-work-iq]] — source evidence used on this page.
- SRC-8 — [[src-8-analyze-images-content-understanding]] — source evidence used on this page.
- SRC-12 — [[src-12-azure-language-microsoft-foundry-tools]] — source evidence used on this page.
- SRC-13 — [[src-13-azure-speech-foundry-tools]] — source evidence used on this page.
- SRC-14 — [[src-14-build-first-agent-microsoft-foundry]] — source evidence used on this page.
- SRC-18 — [[src-18-choose-endpoint-sdk]] — source evidence used on this page.
- SRC-19 — [[src-19-compare-combine-optimization-strategies]] — source evidence used on this page.
- SRC-21 — [[src-21-configure-audio-format-voices]] — source evidence used on this page.
- SRC-30 — [[src-30-create-content-understanding-analyzer]] — source evidence used on this page.
- SRC-32 — [[src-32-create-client-application-that-uses-image-generation-model]] — source evidence used on this page.
- SRC-37 — [[src-37-define-a2a-agent]] — source evidence used on this page.
- SRC-38 — [[src-38-deploy-video-generating-model]] — source evidence used on this page.
- SRC-39 — [[src-39-deploy-models-endpoints]] — source evidence used on this page.
- SRC-40 — [[src-40-detect-language]] — source evidence used on this page.
- SRC-51 — [[src-51-developer-tools-sdks]] — source evidence used on this page.
- SRC-52 — [[src-52-enrich-extracted-data-ai-skills]] — source evidence used on this page.
- SRC-53 — [[src-53-evaluate-model-performance]] — source evidence used on this page.
- SRC-84 — [[src-84-explore-development-approaches]] — source evidence used on this page.
- SRC-85 — [[src-85-explore-foundry-iq]] — source evidence used on this page.
- SRC-88 — [[src-88-explore-azure-voice-live-api]] — source evidence used on this page.
- SRC-89 — [[src-89-explore-model-catalog]] — source evidence used on this page.
- SRC-90 — [[src-90-explore-model-playground]] — source evidence used on this page.
- SRC-91 — [[src-91-extend-agent-capabilities-tools]] — source evidence used on this page.
- SRC-92 — [[src-92-extract-data-indexer]] — source evidence used on this page.
- SRC-93 — [[src-93-extract-entities]] — source evidence used on this page.
- SRC-94 — [[src-94-extract-personally-identifiable-information-pii]] — source evidence used on this page.
- SRC-95 — [[src-95-fine-tune-model-consistent-behavior]] — source evidence used on this page.
- SRC-98 — [[src-98-generate-responses-chatcompletions-api]] — source evidence used on this page.
- SRC-99 — [[src-99-generate-responses-responses-api-foundry-sdk]] — source evidence used on this page.
- SRC-102 — [[src-102-ground-model-retrieval-augmented-generation]] — source evidence used on this page.
- SRC-105 — [[src-105-identify-workflow-patterns]] — source evidence used on this page.
- SRC-107 — [[src-107-implement-agent-executor]] — source evidence used on this page.
- SRC-152 — [[src-152-manage-responsible-generative-ai-solution]] — source evidence used on this page.
- SRC-153 — [[src-153-map-potential-harms]] — source evidence used on this page.
- SRC-155 — [[src-155-microsoft-foundry]] — source evidence used on this page.
- SRC-156 — [[src-156-mitigate-potential-harms]] — source evidence used on this page.
- SRC-178 — [[src-178-optimize-model-output-prompt-engineering]] — source evidence used on this page.
- SRC-181 — [[src-181-persist-extracted-information-knowledge-store]] — source evidence used on this page.
- SRC-182 — [[src-182-plan-responsible-generative-ai-solution]] — source evidence used on this page.
- SRC-186 — [[src-186-responsible-ai]] — source evidence used on this page.
- SRC-187 — [[src-187-search-index]] — source evidence used on this page.
- SRC-188 — [[src-188-select-models-benchmarks]] — source evidence used on this page.
- SRC-191 — [[src-191-study-guide-exam-ai-103-developing-ai-apps-agents]] — source evidence used on this page.
- SRC-224 — [[src-224-train-custom-models]] — source evidence used on this page.
- SRC-226 — [[src-226-translate-speech]] — source evidence used on this page.
- SRC-227 — [[src-227-translate-text]] — source evidence used on this page.
- SRC-229 — [[src-229-translation-microsoft-foundry]] — source evidence used on this page.
- SRC-230 — [[src-230-understand-ai-agents-microsoft-foundry-agent-service]] — source evidence used on this page.
- SRC-231 — [[src-231-understand-agent-orchestration]] — source evidence used on this page.
- SRC-232 — [[src-232-understand-foundry-agent-publishing-options]] — source evidence used on this page.
- SRC-233 — [[src-233-understand-mcp-tool-discovery]] — source evidence used on this page.
- SRC-235 — [[src-235-understand-azure-language-mcp-server]] — source evidence used on this page.
- SRC-236 — [[src-236-understand-azure-speech-mcp-server]] — source evidence used on this page.
- SRC-237 — [[src-237-understand-microsoft-agent-framework]] — source evidence used on this page.
- SRC-238 — [[src-238-understand-workflows]] — source evidence used on this page.
- SRC-241 — [[src-241-concurrent-orchestration]] — source evidence used on this page.
- SRC-242 — [[src-242-group-chat-orchestration]] — source evidence used on this page.
- SRC-243 — [[src-243-handoff-orchestration]] — source evidence used on this page.
- SRC-244 — [[src-244-magentic-orchestration]] — source evidence used on this page.
- SRC-245 — [[src-245-sequential-orchestration]] — source evidence used on this page.
- SRC-246 — [[src-246-speech-synthesis-markup-language]] — source evidence used on this page.
- SRC-248 — [[src-248-vision-capable-model-microsoft-foundry-portal]] — source evidence used on this page.
- SRC-249 — [[src-249-prebuilt-models]] — source evidence used on this page.
- SRC-250 — [[src-250-content-understanding-api]] — source evidence used on this page.
- SRC-252 — [[src-252-speech-text-api]] — source evidence used on this page.
- SRC-253 — [[src-253-text-speech-api]] — source evidence used on this page.
- SRC-254 — [[src-254-code-interpreter-tool]] — source evidence used on this page.
- SRC-255 — [[src-255-file-search-tool]] — source evidence used on this page.
- SRC-256 — [[src-256-function-tool]] — source evidence used on this page.
- SRC-257 — [[src-257-web-search-tool]] — source evidence used on this page.
- SRC-258 — [[src-258-what-are-image-generation-models]] — source evidence used on this page.
- SRC-260 — [[src-260-what-is-ai]] — source evidence used on this page.
- SRC-261 — [[src-261-what-is-azure-ai-search]] — source evidence used on this page.
- SRC-263 — [[src-263-what-is-azure-document-intelligence]] — source evidence used on this page.
- SRC-264 — [[src-264-what-is-content-understanding]] — source evidence used on this page.
