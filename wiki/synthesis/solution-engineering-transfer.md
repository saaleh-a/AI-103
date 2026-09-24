---
title: "Solution Engineering transfer"
type: synthesis
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Customer-signal, discovery and trade-off prompts that transfer AI-103 capability areas into solution conversations."
area: exam
source_ids: [SRC-8, SRC-10, SRC-11, SRC-12, SRC-91, SRC-102, SRC-105, SRC-156, SRC-178, SRC-187, SRC-191, SRC-222, SRC-223, SRC-228, SRC-235, SRC-236]
objectives: []
objective_gaps: []
tags: []
aliases: ["customer conversations"]
---

# Solution Engineering transfer

## Summary

**Synthesis:** The corpus includes customer-support, travel, inventory, workflow, document/image, responsible-AI and speech/translation scenarios that can be turned into Solution Engineering discovery patterns without claiming the sources explicitly teach sales playbooks (SRC-10 L41–63; SRC-102 L260–263; SRC-11 L233; SRC-8 L207–254; SRC-236 L225–262).

## Scope and question

**Inference:** This page applies the transfer frame from `CLAUDE.md` section 19: customer signal, discovery question, architecture translation, trade-off, plain-language explanation, and risk/misconception. Transfer advice is labelled **Inference:** unless a source states the scenario directly.

## Synthesis

### Foundry planning and model/service selection

- **Customer signal:** *We need to build AI apps and agents on Azure and choose between models, Foundry Tools, grounding, vector search, agent workflows and multimodal processing.* This is anchored in the study guide's planning objectives (SRC-191 L121–124).
- **Inference — discovery question:** Which user outcome is primary: generation, retrieval/grounding, structured extraction, workflow automation, speech/translation, or safety evaluation (SRC-191 L121–124)?
- **Inference — architecture translation:** Map the requirement to a model, Foundry Tool, retrieval/indexing method, agent tool, or workflow before choosing implementation code (SRC-191 L121–124).
- **Inference — trade-off:** A general model can be flexible; a Foundry Tool can be a better fit when the task is a focused capability such as language, translation, speech or extraction (SRC-12 L211–237; SRC-228 L279–314).
- **Inference — plain-language explanation:** First choose the job the AI component must do, then choose the Microsoft capability designed for that job (SRC-191 L121–124).
- **Inference — risk or misconception:** Do not treat every AI requirement as an LLM prompt; the corpus repeatedly separates Foundry Tools, RAG, agents and model deployment choices (SRC-191 L121–124; SRC-12 L211–237).

### Retrieval, grounding and search

- **Customer signal:** *Our data changes frequently, such as inventory, pricing, news, destinations or booking policies.* The RAG unit gives those examples and says RAG retrieves current data at query time (SRC-102 L260–263).
- **Inference — discovery question:** What data source is authoritative, how often does it change, and what should happen when retrieval returns weak evidence (SRC-102 L241–263)?
- **Inference — architecture translation:** Put Azure AI Search or another retrieval layer between the application/model and the customer's content, then ground generation on retrieved documents rather than retraining for every content update (SRC-102 L241–263).
- **Inference — trade-off:** Use prompt engineering for behaviour and format; use RAG when the model lacks the customer's catalogue or current facts (SRC-178 L275–286; SRC-102 L260–263).
- **Inference — plain-language explanation:** The model answers with help from current customer content instead of relying only on what it already learned (SRC-102 L260–263).
- **Inference — risk or misconception:** Search-index querying is taught, but monitoring ingestion quality and hybrid-search configuration remain corpus gaps, so do not overpromise implementation detail from this corpus alone (SRC-187 L212–268; SRC-191 L133; SRC-191 L194).

### Agent tools and workflows

- **Customer signal:** *We need an agent that can use APIs, knowledge, search, content understanding or custom functions.* The guide names those tool integrations, and tool lessons teach extending agents with tools (SRC-191 L151; SRC-91 L214–297).
- **Inference — discovery question:** Which actions must be autonomous, which need approval, and which external systems are tools rather than knowledge (SRC-91 L214–297; SRC-105 L220–225)?
- **Inference — architecture translation:** Represent external capabilities as tools or MCP servers, and represent business process structure with sequential, concurrent, handoff, group chat or other workflow patterns (SRC-91 L214–297; SRC-105 L220–225).
- **Inference — trade-off:** Use a deterministic workflow when routing and order matter; use group chat for collaborative agent problem solving and dynamic adaptation (SRC-105 L220–225).
- **Inference — plain-language explanation:** An agent is useful when the AI must decide which approved tool to use and then act through that tool (SRC-91 L214–297).
- **Inference — risk or misconception:** Tool access is not the same as permission to do anything; approval modes and tool schemas are part of the control surface (SRC-91 L214–297; SRC-191 L153).

### Responsible AI, safety and evaluation

- **Customer signal:** *We need the solution to avoid harmful output, prompt attacks or unsafe behaviour.* The mitigation unit describes layers across model, safety system, system message/grounding and user experience (SRC-156 L212–240).
- **Inference — discovery question:** Which harms are in scope, where can the harm enter, and how will you measure the baseline before and after mitigation (SRC-156 L212–240)?
- **Inference — architecture translation:** Layer mitigations: choose appropriate models, configure Foundry guardrails/content filters, use prompt shields, ground prompts, and constrain the user experience (SRC-156 L218–240).
- **Inference — trade-off:** A more capable model is not always lower risk; for narrow classification a simpler model may meet the need with lower harmful-output risk (SRC-156 L218–224).
- **Inference — plain-language explanation:** Safety is not one switch; it is several controls around the model, prompt, data and app experience (SRC-156 L212–240).
- **Inference — risk or misconception:** The corpus does not teach the visual-policy objectives in detail, so image safety and watermark/brand enforcement require external current docs (SRC-191 L177–179; SRC-156 L222–232).

### Text analysis, language and translation

- **Customer signal:** *We need to route support tickets, detect language, extract names or redact sensitive information.* The language episode frames language detection, mentions and sensitive information as prerequisites for conversations, summarization and support-ticket routing (SRC-10 L41–63).
- **Inference — discovery question:** Does the customer need deterministic text analysis such as language/NER/PII, translation, or open-ended generation/summarization (SRC-10 L41–63; SRC-12 L211–237)?
- **Inference — architecture translation:** Use Azure Language / Language MCP capabilities for language detection, entity recognition and PII-style tasks; use Translator / speech translation for translation flows (SRC-12 L211–237; SRC-228 L90–150).
- **Inference — trade-off:** Foundry Tools can be preferable for focused text/translation tasks; LLMs are better when the requirement is open-ended reasoning or generation (SRC-10 L94–176; SRC-228 L279–314).
- **Inference — plain-language explanation:** Use the specialist language tool when the job is to identify, redact or translate; use a generative model when the job is to reason or compose (SRC-10 L94–176; SRC-12 L211–237).
- **Inference — risk or misconception:** Tone detection and full sentiment/tone coverage are only partial in this corpus, so validate current Language docs before teaching or promising that scope (SRC-191 L183; SRC-235 L209–245).

### Speech and voice agents

- **Customer signal:** *Users need to speak to the system or receive spoken responses.* Speech MCP exposes speech-to-text and text-to-speech tools to agents (SRC-236 L225–247).
- **Inference — discovery question:** Is the task transcription, speech synthesis, speech translation, or a real-time voice-agent experience (SRC-236 L225–247; SRC-228 L250–330)?
- **Inference — architecture translation:** For Speech MCP, connect an MCP-compatible agent to speech tools and provide storage/SAS access for audio files; for translation, combine speech recognition, translation configuration and synthesis where needed (SRC-236 L225–262; SRC-228 L250–330).
- **Inference — trade-off:** Batch file transcription/synthesis through Speech MCP is different from real-time voice interaction; select the capability based on latency and interaction pattern (SRC-236 L225–247).
- **Inference — plain-language explanation:** The agent does not speak by magic; it calls a speech tool that converts audio to text or text to audio (SRC-236 L225–247).
- **Inference — risk or misconception:** Speech MCP setup in this corpus uses keys and SAS URLs, which are secrets; do not embed them in prompts, code or transcripts (SRC-236 L248–262).

### Content Understanding and information extraction

- **Customer signal:** *We need to turn receipts, invoices, IDs, product images or other visual content into structured fields for automation.* Content Understanding image analysis supports structured extraction, prebuilt analyzers and custom schemas (SRC-8 L207–254).
- **Inference — discovery question:** Which document or image types matter, what fields are required, and what confidence threshold needs human review (SRC-8 L214–250)?
- **Inference — architecture translation:** Use prebuilt or custom analyzers to extract markdown, fields, confidence scores and source grounding for downstream search/RAG or automation (SRC-8 L214–250).
- **Inference — trade-off:** Automate high-confidence fields; route medium/low-confidence or critical fields to review (SRC-8 L241–250).
- **Inference — plain-language explanation:** The service turns messy visual content into structured data plus confidence and location evidence (SRC-8 L241–250).
- **Inference — risk or misconception:** Collapsed code captures mean this corpus does not preserve all SDK details; implementation should be checked against current API docs (SRC-8 L219–241).

### Observability and production readiness

- **Customer signal:** *We need to know whether deployed agents are fast, reliable, costly and safe.* Agent deployment material says production agents should track response times, tool invocations, error rates and token consumption with Application Insights integration (SRC-223 L288–294).
- **Inference — discovery question:** Which production signals matter most: latency, errors, tool failures, token consumption, cost, safety events or user satisfaction (SRC-223 L288–294; SRC-222 L260–285)?
- **Inference — architecture translation:** Combine Foundry testing/iteration with Application Insights-style telemetry for deployed systems (SRC-222 L260–285; SRC-223 L288–294).
- **Inference — trade-off:** Portal testing is useful before release; production telemetry is needed after real users and tools are involved (SRC-222 L260–285; SRC-223 L288–294).
- **Inference — plain-language explanation:** Testing tells whether the agent works in the lab; telemetry tells how it behaves in production (SRC-222 L260–285; SRC-223 L288–294).
- **Inference — risk or misconception:** The corpus mentions Application Insights but does not teach dashboard or alert setup, so implementation requires external docs (SRC-222 L260–285; SRC-223 L288–294).

## Evidence map

| Synthesis: area | Corpus anchor |
|---|---|
| Planning and service selection | Official planning objectives (SRC-191 L121–124) |
| RAG and travel/inventory-current data | RAG current-data and travel-agency examples (SRC-102 L260–263) |
| Workflow / support tickets | Workflow pattern source and support-ticket iteration example (SRC-105 L220–225; SRC-11 L233) |
| Text analysis / support routing | Language episode support-ticket framing (SRC-10 L41–63) |
| Responsible AI | Four-layer mitigation source (SRC-156 L212–240) |
| Speech agents | Speech MCP capabilities and security requirements (SRC-236 L225–262) |
| Content extraction | Content Understanding image extraction and confidence scores (SRC-8 L207–254) |
| Observability | Application Insights production signal mention (SRC-222 L260–285; SRC-223 L288–294) |

## Tensions

**Synthesis:** Transfer advice here is deliberately an inference layer. The raw corpus provides scenarios and technical facts; customer discovery language is constructed for Solution Engineering practice and should not be mistaken for quoted Microsoft guidance (SRC-10 L41–63; SRC-102 L260–263; SRC-156 L212–240).

## Implications for the exam and for practice

**Inference:** For exam study, each customer signal becomes a decision boundary; for practice, each signal becomes a discovery path that tests whether the customer needs a model, tool, retrieval layer, agent workflow, safety control or telemetry layer (SRC-191 L121–201).

## Open questions

- **Open question:** Which transfer prompts should be tailored for the learner's actual customer segment after corpus coverage is complete? Close with real account scenarios, not by inventing corpus evidence.
- **Open question:** Which implementation details are missing because code captures collapsed? Close with current SDK docs before customer delivery (SRC-8 L219–241).

## Sources

- SRC-8 — [[src-8-analyze-images-content-understanding]] — Content Understanding image extraction.
- SRC-10 — [[src-10-analyze-text-azure-language-foundry-tools-episode-15]] — text analysis and support-ticket/customer framing.
- SRC-11 — [[src-11-apply-power-fx-workflows]] — support-ticket workflow example.
- SRC-12 — [[src-12-azure-language-microsoft-foundry-tools]] — Azure Language in Foundry Tools.
- SRC-91 — [[src-91-extend-agent-capabilities-tools]] — agent tools.
- SRC-102 — [[src-102-ground-model-retrieval-augmented-generation]] — RAG, current data and travel scenario.
- SRC-105 — [[src-105-identify-workflow-patterns]] — workflow pattern selection.
- SRC-156 — [[src-156-mitigate-potential-harms]] — responsible AI mitigation layers.
- SRC-178 — [[src-178-optimize-model-output-prompt-engineering]] — prompt engineering and RAG boundary.
- SRC-187 — [[src-187-search-index]] — search index querying.
- SRC-191 — [[src-191-study-guide-exam-ai-103-developing-ai-apps-agents]] — official capability areas.
- SRC-222 — [[src-222-test-iterate-integrated-agent]] — testing and tracing.
- SRC-223 — [[src-223-test-deploy-integrate-agents]] — deployed-agent monitoring signals.
- SRC-228 — [[src-228-translate-text-speech-microsoft-foundry-tools-episode-21]] — translation and speech translation scenario.
- SRC-236 — [[src-236-understand-azure-speech-mcp-server]] — Speech MCP capabilities and secrets.


