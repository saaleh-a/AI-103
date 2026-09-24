---
title: "AI-103 Develop AI Apps and Agents on Azure Study Cram"
type: source
status: active
confidence: medium
created: 2026-09-24
updated: 2026-09-24
summary: "Cross-domain study-cram overview of AI-103 foundations, Foundry, models, agents, tools, RAG, media, speech, language, and extraction."
area: exam
source_ids: [SRC-1]
tags: [study-cram, ai-103, exam-overview, microsoft-foundry, agents]
aliases: ["SRC-1"]
source_kind: study-cram
module: null
learning_path: null
unit: null
presenters: []
raw_file: "1-AI-103 Develop AI Apps and Agents on Azure Study Cram.md"
url: "https://www.youtube.com/watch?v=WK2BvjOYTCQ&pp=ygUGYWkgMTAz0gcJCf4LAYcqIYzv"
ingest_depth: full
---

# AI-103 Develop AI Apps and Agents on Azure Study Cram

*study-cram · exam aid · SRC-1*

## Source metadata

| Field | Value |
|---|---|
| Source ID | SRC-1 |
| Raw file | `1-AI-103 Develop AI Apps and Agents on Azure Study Cram.md` |
| Kind | study-cram |
| Learning path | null |
| Module | null |
| Unit / episode | null |
| Presenter(s) | Not shown in capture. |
| URL | https://www.youtube.com/watch?v=WK2BvjOYTCQ&pp=ygUGYWkgMTAz0gcJCf4LAYcqIYzv |
| Teaching content | L3–3 of 3; single-line caption transcript cited by anchors |
| Content length | ~15,704 words |
| Capture quality | Single-line, auto-captioned, unpunctuated captions with product-name noise. |
| Ingest depth | full |

## TL;DR

This study cram is a one-pass map across the AI-103 landscape: it starts from AI and responsible AI foundations, then moves through Microsoft Foundry resources, projects, endpoints, SDKs, models, deployments, playgrounds, model router, evaluations, Responses API, Chat Completions API, tools, knowledge, RAG, optimization, guardrails, agents, orchestration, workflows, and Foundry Agent Service (SRC-1 “hey everyone welcome to this AI 103”). It then surveys Foundry Tools and modalities: Language, Speech, Translator, multimodal vision, image and video generation, and Azure Content Understanding (SRC-1 “these pre-built capabilities”). The source is broad and practical, but it is a study aid rather than official exam guidance (SRC-1 “go through the Microsoft exam site”).

## Key claims

- AI-103 is presented as replacing AI-102, with the recommendation to use the official exam site, Learn modules, hands-on practice, and the exam sandbox (SRC-1 “replaces the AI 102”; SRC-1 “exam sandbox”).
- The cram frames AI as a layered hierarchy: broad AI, machine learning from data, deep learning through neural networks, and generative AI for new text, code, images, audio, and reasoning (SRC-1 “artificial intelligence which is very broad”; SRC-1 “machine learning is where”; SRC-1 “generative AI”).
- Responsible AI is treated as cross-cutting, with fairness, reliability and safety, privacy and security, inclusiveness, transparency, and accountability all named (SRC-1 “fairness so AI systems”; SRC-1 “reliability and safety”; SRC-1 “privacy and security”; SRC-1 “inclusiveness”; SRC-1 “transparency”; SRC-1 “accountability”).
- Microsoft Foundry is the central platform in the cram: a Foundry resource in Azure contains projects, and projects are used to work with models, agents, tools, and knowledge (SRC-1 “Microsoft Foundry so I can think”; SRC-1 “foundry resource”; SRC-1 “models agents tools knowledge”).
- The source distinguishes a Foundry endpoint from an OpenAI endpoint and explains APIs and SDKs as the programmatic layers developers use to call the service (SRC-1 “foundry endpoint”; SRC-1 “open AI endpoint”; SRC-1 “APIs application program interfaces”; SRC-1 “software development kit”).
- The model catalog includes Microsoft/OpenAI and non-OpenAI providers, closed-weight and open-weight models, direct-from-Azure models, partner/community models, serverless options, managed compute, benchmarks, and deployment choices (SRC-1 “catalog of models”; SRC-1 “closed weight”; SRC-1 “open weight”; SRC-1 “direct from Azure”; SRC-1 “serverless”; SRC-1 “managed compute”; SRC-1 “view leaderboard”).
- Deployment options are explained through regional, data-zone, global, batch, and provisioned-throughput choices, including the latency and data-boundary trade-off of broader versus narrower deployment scope (SRC-1 “global standard data zone”; SRC-1 “provision throughput units”; SRC-1 “batch”).
- Playgrounds are used to test deployments, parameters, instructions, tools, guardrails, code snippets, token metrics, and references before coding against the model (SRC-1 “open this in the playground”; SRC-1 “configure tools”; SRC-1 “guard rails”; SRC-1 “showing me the code”).
- The model router is described as a deployed model-like endpoint that chooses among configured models to optimize response and cost for a request (SRC-1 “model router”; SRC-1 “routes”; SRC-1 “optimize the cost”).
- Evaluations are needed because generative AI is not deterministic; the source describes automated evaluation, evaluator catalogs, red teaming, rubrics, and model-as-judge checks (SRC-1 “generative AI is not deterministic”; SRC-1 “evaluation catalog”; SRC-1 “language model as a judge”; SRC-1 “autogenerate rubric”).
- The code walkthrough contrasts the stateful Responses API with Chat Completions, where the application must carry the full message history (SRC-1 “responses API”; SRC-1 “stateful”; SRC-1 “chat completions API”; SRC-1 “full history”).
- Tooling is a major theme: the source covers response tools such as code interpreter, Foundry services, IQ tools, MCP, A2A, Azure Functions, Logic Apps, skills, and toolboxes (SRC-1 “tools are critical”; SRC-1 “code interpreter”; SRC-1 “MCP model context protocol”; SRC-1 “A to A agent to agent”; SRC-1 “Azure function”; SRC-1 “logic app”; SRC-1 “skill.mmd file”; SRC-1 “tool box”).
- Foundry IQ and Azure AI Search are framed as ways to bring cited, private, current, and indexed knowledge into answers rather than relying only on model pretraining (SRC-1 “Foundry IQ”; SRC-1 “knowledge bases”; SRC-1 “citations”; SRC-1 “Azure AI search index”; SRC-1 “semantic reranking”).
- The optimization section distinguishes prompt engineering, RAG, and fine-tuning, and says the approaches can be combined (SRC-1 “prompt engineering”; SRC-1 “retrieval augmented generation”; SRC-1 “fine-tuning”; SRC-1 “use multiple approaches”).
- Guardrails are described as safety controls for jailbreaks, indirect prompt injection, harm categories, block lists, protected material, PII leakage, task adherence, and egress rules (SRC-1 “guardrails”; SRC-1 “jailbreaking”; SRC-1 “indirect prompt injection”; SRC-1 “PII leakage”).
- Agents are described as moving beyond assistant-style human interaction into autonomous or event-triggered work, with identity and governance concerns (SRC-1 “agents are a step beyond”; SRC-1 “own identity”; SRC-1 “full governance”).
- Microsoft Agent Framework is identified as the main AI-103 focus for creating agents, with capabilities around multi-agent patterns, multi-turn conversation, sessions, tool calling, and memory (SRC-1 “Microsoft agent framework”; SRC-1 “multi- aent”; SRC-1 “multi-turn conversations”; SRC-1 “agent session”; SRC-1 “memory is huge”).
- The cram names concurrent, sequential, group chat, handoff, and Magentic orchestration patterns, then separates those from deterministic workflows and agent harnesses (SRC-1 “concurrent”; SRC-1 “sequential”; SRC-1 “group chat”; SRC-1 “hand off”; SRC-1 “magentic”; SRC-1 “workflows enable us”; SRC-1 “agent harness”).
- Foundry Agent Service is presented as a managed platform for hosting and scaling prompt agents and hosted agents, with publishing paths such as web, Teams, and Microsoft 365 Copilot (SRC-1 “agent service”; SRC-1 “prompt agent”; SRC-1 “hosted agents”; SRC-1 “publish it to teams”).
- The modality survey covers Language features, Speech, Translator, multimodal vision, image generation, video generation, and Azure Content Understanding analyzers (SRC-1 “language detection”; SRC-1 “text to speech”; SRC-1 “Azure translator”; SRC-1 “multimodal”; SRC-1 “text to image”; SRC-1 “video generation”; SRC-1 “Azure content understanding”).

## How it works

The study cram works as a compressed conceptual route rather than as a single product tutorial: it introduces broad AI and responsible AI, maps the Foundry platform, then layers models, endpoints, SDKs, tools, knowledge, optimization, safety, agents, orchestration, services, and modalities into one architecture-level story (SRC-1 “refresh the really core concepts”). The repeated operating pattern is: deploy or select a capability in Foundry, test it in a playground, inspect endpoints and code, use API key or Entra authentication, wire in tools or knowledge, evaluate behavior, guard it, trace it, and then publish or operationalize it (SRC-1 “use the APIs use the SDK”; SRC-1 “use an API key use entra”; SRC-1 “traces that have gone to app insights”).

## Code and API patterns

- The OpenAI SDK pattern shown for Responses creates a client, calls `responses.create`, passes `input` plus `instructions`, prints the response identifier, and sends a second turn with the prior response ID to keep state server-side (SRC-1 “open SDK”; SRC-1 “responses.create”; SRC-1 “responses identifier”).
- The Chat Completions pattern calls `chat.completions.create` and uses a `messages` array whose first item is a `system` role entry; the source says the application must preserve and resend history because nothing is stored server-side (SRC-1 “chat.comp completions.create”; SRC-1 “messages array”; SRC-1 “ro of system”; SRC-1 “nothing is stored server side”).
- The Foundry SDK example uses Azure AI Projects, creates a project client, gets an OpenAI-compatible client from the project, and can also list broader project assets such as model deployments (SRC-1 “Azure AI projects”; SRC-1 “project client”; SRC-1 “model deployments”).
- The tool-call code example adds a `code_interpreter` tool and instructs the model to use Python for math, then inspects the response output to show that the tool was called (SRC-1 “tool code interpreter”; SRC-1 “use a Python tool”; SRC-1 “called the code interpreter”).
- The vision code example sends text and image input to a multimodal deployment and asks what is in the picture (SRC-1 “sending it what's in this picture”; SRC-1 “sending it the picture”; SRC-1 “multimodal model”).

## Key terms

- **Foundry resource** — the Azure-side resource under which the source places one or more Foundry projects (SRC-1 “foundry resource”).
- **Foundry project** — an isolated working environment for models, agents, tools, and knowledge inside the Foundry experience (SRC-1 “isolated work environments”; SRC-1 “models agents tools knowledge”).
- **API** — the request/response programmatic interface exposed by an endpoint, usually RESTful in the source explanation (SRC-1 “APIs application program interfaces”).
- **SDK** — a language-specific abstraction over the API for languages such as Python, JavaScript, C, and Java (SRC-1 “software development kit”).
- **Serverless model deployment** — a deployment where Microsoft or the provider runs shared capacity and the user pays by work performed, such as token usage (SRC-1 “serverless”; SRC-1 “pay for what you actually use”).
- **Managed compute** — a deployment where an open model runs on dedicated CPU or GPU instances and billing is per hour by instance type and count (SRC-1 “managed compute”; SRC-1 “pay per hour”).
- **Responses API** — a stateful API pattern that stores prior interactions server-side and uses an ID to continue a session (SRC-1 “responses API”; SRC-1 “server is actually storing the state”).
- **Chat Completions API** — a message-array API pattern where the application sends the system and user messages and must manage history itself (SRC-1 “chat completions”; SRC-1 “messages array”).
- **MCP** — the source describes Model Context Protocol as a standard way for an MCP client to discover and call MCP server capabilities (SRC-1 “MCP model context protocol”; SRC-1 “reflects back its capabilities”).
- **A2A** — agent-to-agent discovery and communication (SRC-1 “A to A agent to agent”).
- **Foundry IQ** — a knowledge-base approach that connects knowledge sources and returns cited information or natural-language answers (SRC-1 “Foundry IQ”; SRC-1 “knowledge bases”).
- **Guardrails** — configurable controls for jailbreaks, indirect prompt injection, content harms, protected material, PII leakage, task adherence, and egress rules (SRC-1 “guardrails”; SRC-1 “PII leakage”).

## Decision boundaries and exam cues

- **Inference:** If the scenario asks for the official exam outline or domain weights, SRC-191 is more authoritative than this study cram; this source itself points learners to the official exam site (SRC-1 “Microsoft exam site”; SRC-191 L113–119).
- **Inference:** Use Responses API rather than Chat Completions when the scenario values server-side conversation state; use Chat Completions when a stateless message-list pattern or model support restriction points there (SRC-1 “stateful”; SRC-1 “chat completions API”).
- **Inference:** Use RAG or Foundry IQ when the problem is current or private knowledge with citations; consider fine-tuning when the problem is stable behavior, domain style, preference, or repeated static knowledge (SRC-1 “citations”; SRC-1 “rag is better”; SRC-1 “domain fine-tuning”).
- **Inference:** Use broader global or data-zone deployments when the scenario permits wider routing for availability and latency, but use regional or data-zone boundaries when data sovereignty or geopolitical constraints matter (SRC-1 “geopolitical boundary”; SRC-1 “broader area is allowed”).
- **Inference:** Use Microsoft Agent Framework when the scenario asks for code-first AI-103 agent construction or orchestration patterns, and use Foundry Agent Service when the scenario asks for a managed hosting/scaling platform for agents (SRC-1 “Microsoft agent framework”; SRC-1 “agent service”).

## Assessment items

Not covered by this source.

## Tensions, caveats and currency

- **Stale-risk:** The cram names specific models, previews, model counts, prices, and portal UI states that are time-sensitive and should not be treated as durable exam facts without current verification (SRC-1 “Grock”; SRC-1 “over 10,000”; SRC-1 “40 cents”).
- The capture is auto-captioned and contains noisy names such as `Grock`, `DeepSync`, `MCB`, and `exam crap`, so exact product naming should be checked against Learn source pages before synthesis (SRC-1 “Grock”; SRC-1 “DeepSync”; SRC-1 “MCB server”; SRC-1 “exam crap”).
- The source says graphical Foundry workflow capability is being retired and that Microsoft Agent Framework workflow should be used instead; because this is platform-currency sensitive, treat it as stale-risk until verified in a Learn unit (SRC-1 “being retired”; SRC-1 “Microsoft agent framework workflow”).

## Relation to other sources

- SRC-191 is the official study guide and gives the five domains, weights, audience profile, and objective list that this cram informally tours (SRC-191 L102–201; SRC-1 “Microsoft exam site”).
- SRC-27 is the official course page for the four-day AI-103T00-A course and names the same broad learning paths that this cram surveys in detail (SRC-27 L203–240; SRC-1 “go through the Microsoft learn”).
- SRC-28 is a short course-preview transcript; it overlaps with this cram on moving from prototypes to deployable AI apps, agents, multimodal experiences, and responsible AI guardrails (SRC-28 L39–68; SRC-1 “move from prototype to production”).

## Segment guide

- **Exam orientation and how to study** — The speaker introduces AI-103, says it replaces AI-102, recommends the official exam site, Learn modules, hands-on practice, exam sandbox, and exam-day logistics (SRC-1 “replaces the AI 102”; SRC-1 “exam sandbox”).
- **AI layers and generative AI** — The source distinguishes broad AI, machine learning, deep learning, and generative AI as the current driver of text, code, image, audio, and reasoning capabilities (SRC-1 “artificial intelligence which is very broad”; SRC-1 “generate new text code images audio”).
- **Responsible AI principles** — Fairness, reliability and safety, privacy and security, inclusiveness, transparency, and accountability are introduced as cross-cutting responsibilities for AI systems (SRC-1 “fairness so AI systems”; SRC-1 “reliability and safety”; SRC-1 “accountability”).
- **Foundry resource, project, and portals** — Foundry is introduced through an Azure-created resource, projects as isolated workspaces, the Azure portal, and the Foundry portal at `ai.azure.com` (SRC-1 “foundry resource”; SRC-1 “isolated work environments”; SRC-1 “ai.asure.com”).
- **Lifecycle and endpoints** — The cram frames Foundry work through discover, build, and operate phases and distinguishes Foundry and OpenAI endpoints (SRC-1 “discover build operate”; SRC-1 “foundry endpoint”; SRC-1 “open AI endpoint”).
- **APIs, SDKs, development tools, and GitHub** — APIs, SDKs, VS Code extensions, GitHub Copilot, Git, GitHub repositories, and pipelines are introduced as the developer toolchain around AI apps (SRC-1 “APIs application program interfaces”; SRC-1 “VS code”; SRC-1 “GitHub via Git”).
- **Model catalog and providers** — The catalog is shown with OpenAI, Anthropic, Microsoft AI, DeepSeek, xAI, Mistral, Hugging Face, Fireworks, and other provider categories (SRC-1 “catalog of models”; SRC-1 “Anthropic”; SRC-1 “hugging face”; SRC-1 “fireworks AI”).
- **Closed weights, open weights, direct Azure, partner, and community models** — The source explains closed/open weights and separates direct-from-Azure serverless options from partner/community and managed-compute deployments (SRC-1 “closed weights”; SRC-1 “open weight”; SRC-1 “direct from Azure”; SRC-1 “managed compute”).
- **Benchmarks and model comparison** — Leaderboards compare quality, safety, throughput, cost, and scenario-specific metrics such as harmful behavior and copyright violations (SRC-1 “view leaderboard”; SRC-1 “quality safety throughput”; SRC-1 “copyright violations”).
- **Deployment options** — Standard regional, data zone, global, provisioned throughput, spillover, priority, and batch deployment options are described through latency, throughput, cost, and data-boundary trade-offs (SRC-1 “global standard data zone”; SRC-1 “provision throughput units”; SRC-1 “spillover”; SRC-1 “batch”).
- **Playground testing and parameters** — The speaker opens a deployed model in the playground, changes model-specific parameters, instructions, tools, memory, guardrails, authentication method, and code language (SRC-1 “open this in the playground”; SRC-1 “instructions”; SRC-1 “memory as a service”; SRC-1 “authentication method”).
- **Model router** — The model router is deployed like a model, configured with allowed models, and used to choose a suitable model at request time (SRC-1 “model router”; SRC-1 “which models is it allowed”).
- **Evaluations and rubrics** — Automated evaluation, red teaming, evaluator catalogs, model-as-judge, and rubric generation are presented as the way to build trust in nondeterministic AI systems (SRC-1 “generative AI is not deterministic”; SRC-1 “red teaming”; SRC-1 “autogenerate rubric”).
- **Responses API code** — The code sample uses OpenAI SDK, Entra authentication, `responses.create`, `instructions`, and response IDs for multi-turn state (SRC-1 “open SDK”; SRC-1 “responses.create”; SRC-1 “responses identifier”).
- **Chat Completions code** — The alternate code path uses `chat.completions.create`, a `messages` array, a `system` role item, and client-managed history (SRC-1 “chat.comp completions.create”; SRC-1 “messages array”; SRC-1 “ro of system”).
- **Foundry SDK code** — The Foundry SDK sample uses Azure AI Projects and a project client, then demonstrates broader project operations such as listing deployments (SRC-1 “Azure AI projects”; SRC-1 “project client”; SRC-1 “model deployments”).
- **Response tools and code interpreter** — Built-in tools for code, web search, file search, and functions are introduced; the code-interpreter example solves a math problem with generated Python (SRC-1 “code interpreter”; SRC-1 “web searching file searching”; SRC-1 “math dots square”).
- **Foundry services and the tool catalog** — Foundry services are introduced as prebuilt capabilities for speech, translation, document understanding, and similar common needs (SRC-1 “pre-built capabilities”; SRC-1 “speech to text text to speech”; SRC-1 “use the catalog”).
- **IQ tools, MCP, A2A, custom tools, skills, and toolbox** — Foundry IQ, Work IQ, Fabric IQ, Web IQ, MCP, A2A, Azure Functions, Logic Apps, `skill.mmd`, progressive disclosure, and toolbox endpoints are surveyed (SRC-1 “Foundry IQ”; SRC-1 “Work IQ”; SRC-1 “MCP model context protocol”; SRC-1 “A to A agent to agent”; SRC-1 “skill.mmd file”; SRC-1 “toolbox”).
- **Knowledge, knowledge bases, and Azure AI Search** — Knowledge bases combine knowledge sources such as Azure AI Search, web, blobs, Fabric IQ, Work IQ, SharePoint, SQL, files, and MCP; Azure AI Search indexing is described through chunking, cracking, lexical, vector, hybrid, and semantic reranking (SRC-1 “knowledge bases”; SRC-1 “knowledge sources”; SRC-1 “chunks up the document”; SRC-1 “semantic reranking”).
- **Optimization strategies** — The source distinguishes prompt engineering, RAG, and fine-tuning, then says system prompts and RAG are often context engineering and can combine with fine-tuning (SRC-1 “prompt engineering”; SRC-1 “retrieval augmented generation”; SRC-1 “fine-tuning”; SRC-1 “context engineering”).
- **Guardrails and safety** — Guardrails are configured for jailbreaks, indirect prompt injection, harm categories, block lists, protected material, PII leakage, task adherence, and egress rules (SRC-1 “guardrails”; SRC-1 “jailbreaking”; SRC-1 “indirect prompt injection”; SRC-1 “egress rule”).
- **Agent architecture** — The agent combines model, evaluations, tools, skills, toolbox, knowledge, guardrails, observability, and tracing around an input/output loop (SRC-1 “create my agent”; SRC-1 “evaluations running”; SRC-1 “observability the tracing”).
- **Microsoft Agent Framework basics** — The framework is presented as the main AI-103 focus for agents, workflows, and agent harnesses, including sessions, tool calling, memory, and multi-agent support (SRC-1 “Microsoft agent framework”; SRC-1 “agent session”; SRC-1 “memory is huge”).
- **Multi-agent patterns** — Concurrent, sequential, group chat, handoff, and Magentic patterns are drawn and explained, including a hashtag creator and critic group-chat demo (SRC-1 “concurrent”; SRC-1 “sequential”; SRC-1 “group chat”; SRC-1 “hand off”; SRC-1 “magentic”; SRC-1 “hashtag creator”).
- **Workflows and agent harness** — Workflows are framed as deterministic, code-based sequences with executors, logic splits, human approval, and generative AI nodes; agent harnesses wrap agents with prebuilt capabilities for research, coding, data analysis, long-running work, compaction, skills, web search, approval, and telemetry (SRC-1 “workflows enable us”; SRC-1 “executors”; SRC-1 “agent harness”; SRC-1 “compaction”).
- **Foundry Agent Service, prompt agents, hosted agents, and publishing** — Foundry Agent Service hosts and scales prompt agents and hosted code agents, with tracing, monitoring, optimization, and publishing to web, Teams, and Microsoft 365 Copilot (SRC-1 “agent service”; SRC-1 “prompt agent”; SRC-1 “hosted agents”; SRC-1 “publish it to teams”).
- **Language services** — Language detection, named entity detection, and PII redaction are demonstrated through the Foundry services playground and a `TextAnalyticsClient` code sample (SRC-1 “language detection”; SRC-1 “named entities”; SRC-1 “PII redaction”; SRC-1 “text analytics client”).
- **Speech services and speech-capable models** — Speech-to-text, text-to-speech, speech translation, avatars, Voice Live, custom versions, and markup for pronunciation are surveyed (SRC-1 “text to speech”; SRC-1 “speech to text”; SRC-1 “voice live”; SRC-1 “advanced markup formats”).
- **Translator** — Translator is separated from speech translation by focusing on text or document translation and transliteration (SRC-1 “Azure translator”; SRC-1 “translate so translate”; SRC-1 “transliterate”).
- **Vision and multimodal models** — The source describes text/image input to multimodal models and contrasts multimodal with multimodel; it demonstrates asking a model to describe an image (SRC-1 “multimodal models”; SRC-1 “text and an image”; SRC-1 “multimodel”).
- **Image generation** — Text-to-image models are found through the model catalog, deployed, tested in the playground, and called with image generation APIs (SRC-1 “text to image”; SRC-1 “cartoon of a cheeseburger”; SRC-1 “client images generate”).
- **Video generation** — Sora 2 and other video-generation models are explored through prompt, duration, aspect ratio, attached image, job history, monitoring, and cost (SRC-1 “video generation”; SRC-1 “Sora 2”; SRC-1 “4 secondond video”; SRC-1 “estimated cost”).
- **Azure Content Understanding** — Content Understanding is framed as a prebuilt extraction service over images, documents, forms, audio, and video that uses analyzers to emit structured data and markdown (SRC-1 “Azure content understanding”; SRC-1 “runs it through an analyzer”; SRC-1 “structured data”; SRC-1 “markdown”).
- **Closing exam advice** — The cram closes by urging the learner to use Microsoft Learn, try technologies, use APIs and SDKs, practice API key and Entra flows, and use exam score feedback after any failed attempt (SRC-1 “go through the Microsoft learn”; SRC-1 “use the APIs use the SDK”; SRC-1 “look at the scoring”).

## Connections

- [[ai-103-exam]] — the cram is an unofficial overview of the exam's replacement course and concepts (SRC-1 “replaces the AI 102”).
- [[microsoft-foundry]] — Foundry is the platform through which the cram organizes models, agents, tools, and knowledge (SRC-1 “Microsoft Foundry”).
- [[foundry-resources-and-projects]] — the source explicitly explains resource/project hierarchy (SRC-1 “foundry resource”).
- [[model-catalog]] — the model catalog and provider/deployment filters are a large segment (SRC-1 “catalog of models”).
- [[model-deployment-types]] — the source compares regional, data-zone, global, provisioned, and batch choices (SRC-1 “global standard data zone”).
- [[responses-api]] — the source provides a direct Responses API code walkthrough (SRC-1 “responses API”).
- [[chat-completions-api]] — the source contrasts Chat Completions with Responses (SRC-1 “chat completions API”).
- [[microsoft-agent-framework]] — the source calls this a major AI-103 focus for agents and workflows (SRC-1 “Microsoft agent framework”).
- [[orchestration-patterns-compared]] — the source names concurrent, sequential, group chat, handoff, and Magentic patterns (SRC-1 “concurrent”; SRC-1 “magentic”).
- [[extraction-options-compared]] — the source surveys Content Understanding, Document Intelligence-like extraction, Language, and Vision capabilities (SRC-1 “Azure content understanding”; SRC-1 “language detection”).

## Open questions

- Which specific model names, counts, deployment options, and pricing details from the cram remain current in the live Foundry portal? (SRC-1 “over 10,000”; SRC-1 “40 cents”)
- Which Learn unit currently verifies the statement that the graphical Foundry workflow capability is being retired? (SRC-1 “being retired”)
- How should the wiki normalize auto-captioned product-name noise such as `Grock`, `DeepSync`, and `MCB` without losing evidence of the raw source? (SRC-1 “Grock”; SRC-1 “DeepSync”; SRC-1 “MCB server”)

## Sources

- SRC-1 — raw file: [[1-AI-103 Develop AI Apps and Agents on Azure Study Cram]]
