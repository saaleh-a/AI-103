import type { ObjectiveId } from './curriculum/learning-schema'
import type { ExamDomain } from './curriculum/schema'

/**
 * Official AI-103 objectives as a snapshot of the study guide supplied in the corpus (source 191).
 * The mapping to lessons is editorial judgement, recorded so gaps stay visible; it has not been
 * independently reviewed, and it is not a claim that any objective is mastered or release-ready.
 * `npm run check:coverage` compares topic counts with the live outline separately.
 */
export const OFFICIAL_OUTLINE = {
  title: 'Study guide for Exam AI-103: Developing AI Apps and Agents on Azure',
  url: 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103',
  effective: '2026-04-16',
  corpusSourceId: 191,
  reviewer: undefined as string | undefined,
} as const

export const OBJECTIVE_DOMAINS: { domain: ExamDomain; prefix: string; weight: string }[] = [
  { domain: 'Plan and manage an Azure AI solution', prefix: 'P', weight: '25–30%' },
  { domain: 'Implement generative AI and agentic solutions', prefix: 'G', weight: '30–35%' },
  { domain: 'Implement computer vision solutions', prefix: 'V', weight: '10–15%' },
  { domain: 'Implement text analysis solutions', prefix: 'T', weight: '10–15%' },
  { domain: 'Implement information extraction solutions', prefix: 'I', weight: '10–15%' },
]

export interface ObjectiveGap {
  /** `source`: the supplied corpus does not substantively teach it. `authoring`: it does, but no lesson teaches it yet. */
  kind: 'source' | 'authoring'
  note: string
}

export interface ObjectiveRecord {
  id: ObjectiveId
  domain: ExamDomain
  skill: string
  /** Official wording, verbatim from corpus source 191. */
  objective: string
  /** Lessons whose teaching substantively addresses this objective. */
  taughtBy: string[]
  /** Nearby lessons worth reading when an objective is not taught; not counted as coverage. */
  related?: string[]
  gaps?: ObjectiveGap[]
}

const PLAN = 'Plan and manage an Azure AI solution'
const GEN = 'Implement generative AI and agentic solutions'
const VISION = 'Implement computer vision solutions'
const TEXT = 'Implement text analysis solutions'
const EXTRACT = 'Implement information extraction solutions'

export const OBJECTIVES: ObjectiveRecord[] = [
  { id: 'P01', domain: PLAN, skill: 'Choose the appropriate Foundry services for generative AI and agents', objective: 'Choose an appropriate model for each task, including large language models (LLMs), small language models, multimodal models, and Foundry Tools', taughtBy: ['ai-foundations', 'model-catalog', 'model-benchmarks'] },
  { id: 'P02', domain: PLAN, skill: 'Choose the appropriate Foundry services for generative AI and agents', objective: 'Choose the appropriate Foundry services for generative tasks, grounding, vector search, agent workflows, or multimodal processing', taughtBy: ['ai-foundations', 'foundry-projects', 'rag-fundamentals', 'agents-types'] },
  { id: 'P03', domain: PLAN, skill: 'Choose the appropriate Foundry services for generative AI and agents', objective: 'Choose an appropriate method for retrieval and indexing', taughtBy: ['rag-fundamentals', 'ai-search-overview', 'foundry-iq-data-sources'] },
  { id: 'P04', domain: PLAN, skill: 'Choose the appropriate Foundry services for generative AI and agents', objective: 'Choose appropriate memory, tool, and knowledge integration services for agent solutions', taughtBy: ['agents-tools-overview', 'agents-builtin-tools', 'agents-framework', 'foundry-iq'] },
  { id: 'P05', domain: PLAN, skill: 'Set up AI solutions in Foundry', objective: 'Design Azure infrastructure for AI apps and agent-based solutions', taughtBy: ['foundry-projects', 'model-deployment'], gaps: [{ kind: 'source', note: 'Project, resource and deployment boundaries are taught; network design appears only in the study guide.' }] },
  { id: 'P06', domain: PLAN, skill: 'Set up AI solutions in Foundry', objective: 'Choose appropriate deployment options', taughtBy: ['model-deployment'] },
  { id: 'P07', domain: PLAN, skill: 'Set up AI solutions in Foundry', objective: 'Configure model and agent deployments', taughtBy: ['model-deployment', 'agents-vscode-lifecycle', 'agents-publishing'] },
  { id: 'P08', domain: PLAN, skill: 'Set up AI solutions in Foundry', objective: 'Integrate Foundry projects with continuous integration and continuous deployment (CI/CD) pipelines', taughtBy: [], related: ['foundry-projects', 'agents-vscode-lifecycle', 'agents-workflow-recovery'], gaps: [{ kind: 'source', note: 'The corpus only mentions automating Foundry assets and workflow tests in CI/CD pipelines (sources 155, 247 and 5); no source teaches a pipeline.' }] },
  { id: 'P09', domain: PLAN, skill: 'Manage, monitor, and secure AI systems', objective: 'Manage quotas, scaling, rate limits, and cost footprints for model and agent workloads', taughtBy: ['model-deployment', 'chat-responses', 'model-benchmarks'], gaps: [{ kind: 'authoring', note: 'Deployment types, provisioned throughput, token budgets and cost estimates are taught. Tokens-per-minute limits (source 189), rate-limit backoff and cost monitoring (sources 196 and 223) have no lesson yet.' }] },
  { id: 'P10', domain: PLAN, skill: 'Manage, monitor, and secure AI systems', objective: 'Monitor model performance, drift, safety events, and grounding quality', taughtBy: ['model-evaluation', 'responsible-ai-guardrails', 'foundry-iq'], gaps: [{ kind: 'source', note: 'Evaluation and release-time safety monitoring are taught; model drift is mentioned only in passing (sources 95 and 230).' }] },
  { id: 'P11', domain: PLAN, skill: 'Manage, monitor, and secure AI systems', objective: 'Monitor data ingestion quality, search index health, and relevance performance', taughtBy: ['ai-search-overview', 'knowledge-mining', 'search-query'] },
  { id: 'P12', domain: PLAN, skill: 'Manage, monitor, and secure AI systems', objective: 'Configure security, including managed identity, private networking, keyless credentials, and role policies', taughtBy: ['foundry-sdk-connections', 'agents-publishing', 'foundry-iq-data-sources', 'agents-work-iq-permissions'], gaps: [{ kind: 'source', note: 'Keyless, identity-based access and role checks are taught; private networking appears only in the study guide.' }] },
  { id: 'P13', domain: PLAN, skill: 'Implement responsible AI across generative AI and agentic systems', objective: 'Configure safety filters, guardrails, risk detection, and content moderation', taughtBy: ['responsible-ai-guardrails'] },
  { id: 'P14', domain: PLAN, skill: 'Implement responsible AI across generative AI and agentic systems', objective: 'Apply responsible AI instrumentation, including evaluators, safety evaluations, and explanation tooling', taughtBy: ['model-evaluation', 'responsible-ai-lifecycle'] },
  { id: 'P15', domain: PLAN, skill: 'Implement responsible AI across generative AI and agentic systems', objective: 'Implement auditing through trace logging, provenance metadata, and approval workflows', taughtBy: ['agents-workflows', 'agents-mcp', 'agents-workflow-recovery', 'foundry-iq'], gaps: [{ kind: 'authoring', note: 'Approval pauses, tool-call approval and citations are taught; audit trace logging is only briefly sourced (sources 18, 222 and 230).' }] },
  { id: 'P16', domain: PLAN, skill: 'Implement responsible AI across generative AI and agentic systems', objective: 'Govern agent behavior with oversight modes, constraints, and tool-access controls', taughtBy: ['agents-what-is-an-agent', 'agents-custom-functions', 'agents-mcp', 'agents-magentic-planning', 'agents-work-iq-permissions'] },

  { id: 'G01', domain: GEN, skill: 'Build generative applications by using Foundry', objective: 'Deploy and consume LLMs, small models, code models, and multimodal models', taughtBy: ['model-deployment', 'foundry-sdk-connections', 'chat-responses', 'vision-chat'] },
  { id: 'G02', domain: GEN, skill: 'Build generative applications by using Foundry', objective: 'Implement retrieval-augmented generation (RAG) in an application', taughtBy: ['rag-fundamentals', 'grounding-optimization', 'agents-builtin-tools'] },
  { id: 'G03', domain: GEN, skill: 'Build generative applications by using Foundry', objective: 'Design workflows, tool-augmented flows, and multistep reasoning pipelines', taughtBy: ['agents-workflows', 'agents-workflow-state', 'agents-custom-functions', 'agents-orchestration-patterns'] },
  { id: 'G04', domain: GEN, skill: 'Build generative applications by using Foundry', objective: 'Evaluate models and apps, including detecting fabrications, relevance, quality, and safety', taughtBy: ['model-evaluation', 'responsible-ai-lifecycle'] },
  { id: 'G05', domain: GEN, skill: 'Build generative applications by using Foundry', objective: 'Integrate generative workflows into applications by using Foundry SDKs and connectors', taughtBy: ['foundry-sdk-connections', 'agents-framework', 'agents-workflow-recovery'] },
  { id: 'G06', domain: GEN, skill: 'Build generative applications by using Foundry', objective: 'Configure an application to connect to a Foundry project', taughtBy: ['foundry-sdk-connections'] },
  { id: 'G07', domain: GEN, skill: 'Build agents by using Foundry', objective: 'Define agent roles, goals, conversation-tracking approach, and tool schemas', taughtBy: ['agents-what-is-an-agent', 'chat-responses', 'agents-custom-functions'] },
  { id: 'G08', domain: GEN, skill: 'Build agents by using Foundry', objective: 'Build agents that integrate retrieval, function-calling, and conversation memory', taughtBy: ['agents-builtin-tools', 'agents-custom-functions', 'agents-framework', 'foundry-iq'] },
  { id: 'G09', domain: GEN, skill: 'Build agents by using Foundry', objective: 'Integrate agent tools, including APIs, knowledge stores, search, content understanding, and custom functions', taughtBy: ['agents-custom-tool-integration', 'agents-mcp', 'agents-builtin-tools', 'foundry-iq', 'language-mcp', 'speech-mcp'] },
  { id: 'G10', domain: GEN, skill: 'Build agents by using Foundry', objective: 'Implement orchestrated multi-agent solutions', taughtBy: ['agents-orchestration-patterns', 'agents-handoff-group-chat', 'agents-magentic-planning', 'agents-a2a'] },
  { id: 'G11', domain: GEN, skill: 'Build agents by using Foundry', objective: 'Build autonomous or semiautonomous workflows with safeguards and approval flow controls', taughtBy: ['agents-workflow-state', 'agents-workflows', 'agents-mcp', 'agents-magentic-planning'] },
  { id: 'G12', domain: GEN, skill: 'Build agents by using Foundry', objective: 'Integrate monitoring into deployed agents, evaluate agent behavior, and perform error analysis', taughtBy: ['agents-vscode-lifecycle', 'agents-orchestration-patterns', 'agents-workflow-recovery', 'agents-publishing'], gaps: [{ kind: 'authoring', note: 'Regression checks, run inspection, trace reading and published-agent metrics are taught; setting up Application Insights tracing and alerts is only briefly sourced (sources 196, 222 and 223).' }] },
  { id: 'G13', domain: GEN, skill: 'Optimize and operationalize generative AI systems', objective: 'Tune generation behavior, such as prompt engineering and adjusting model parameters', taughtBy: ['prompt-engineering', 'model-fine-tuning'] },
  { id: 'G14', domain: GEN, skill: 'Optimize and operationalize generative AI systems', objective: 'Implement model reflection, chain-of-thought evaluations, and self-critique loops', taughtBy: ['prompt-engineering', 'agents-handoff-group-chat'], gaps: [{ kind: 'source', note: 'Maker-checker review (source 242) and asking for concise, verifiable justifications are taught. Source 178 describes chain-of-thought prompting; reflection and self-critique loops appear only in the study guide. Study them through observable traces and evaluations, never hidden chain-of-thought.' }] },
  { id: 'G15', domain: GEN, skill: 'Optimize and operationalize generative AI systems', objective: 'Set up observability by implementing tracing, token analytics, safety signals, and latency breakdowns', taughtBy: ['chat-responses', 'model-benchmarks', 'agents-vscode-lifecycle'], gaps: [{ kind: 'authoring', note: 'Token budgets, latency trade-offs and trace inspection are taught separately; setting up tracing and dashboards is only briefly sourced (sources 18, 222 and 223).' }] },
  { id: 'G16', domain: GEN, skill: 'Optimize and operationalize generative AI systems', objective: 'Orchestrate multiple models, flows, or hybrid LLM and rules engines', taughtBy: ['agents-workflow-state', 'agents-workflows', 'agents-orchestration-patterns'] },

  { id: 'V01', domain: VISION, skill: 'Design and implement image- and video-generation solutions', objective: 'Implement a solution that generates images from text prompts and reference media', taughtBy: ['image-video-generation', 'image-generation-apps'] },
  { id: 'V02', domain: VISION, skill: 'Design and implement image- and video-generation solutions', objective: 'Implement a solution that generates videos from text prompts and reference media', taughtBy: ['video-generation'] },
  { id: 'V03', domain: VISION, skill: 'Design and implement image- and video-generation solutions', objective: 'Configure image-editing workflows, including inpainting, mask‑based edits, and prompt‑driven modifications', taughtBy: [], related: ['image-video-generation'], gaps: [{ kind: 'source', note: 'Inpainting and mask-based edits appear only in the study guide; the image lesson teaches prompt refinement and warns against assuming an edit contract.' }] },
  { id: 'V04', domain: VISION, skill: 'Design and implement image- and video-generation solutions', objective: 'Implement workflows to edit generated videos', taughtBy: ['video-generation'] },
  { id: 'V05', domain: VISION, skill: 'Design and implement image- and video-generation solutions', objective: 'Select and apply appropriate generation and editing controls provided by the platform', taughtBy: ['image-video-generation', 'video-generation'] },
  { id: 'V06', domain: VISION, skill: 'Design and implement multimodal understanding workflows', objective: 'Build a solution that analyzes visual context by using multimodal models', taughtBy: ['vision-chat'] },
  { id: 'V07', domain: VISION, skill: 'Design and implement multimodal understanding workflows', objective: 'Configure apps to produce concise or detailed captions for single or multiple images', taughtBy: ['vision-chat'], gaps: [{ kind: 'source', note: 'Concise versus detailed captions for one image are taught; captioning multiple images appears only in the study guide.' }] },
  { id: 'V08', domain: VISION, skill: 'Design and implement multimodal understanding workflows', objective: 'Implement a solution that enables question‑answering grounded in visual evidence', taughtBy: ['vision-chat'] },
  { id: 'V09', domain: VISION, skill: 'Design and implement multimodal understanding workflows', objective: 'Configure generation of alt‑text and extended image descriptions aligned to accessibility guidelines', taughtBy: [], related: ['vision-chat'], gaps: [{ kind: 'source', note: 'Concise versus detailed descriptions are taught; alt text and accessibility guidelines appear only in the study guide.' }] },
  { id: 'V10', domain: VISION, skill: 'Design and implement multimodal understanding workflows', objective: 'Implement visual understanding by configuring Azure Content Understanding in Foundry Tools to extract visual characteristics', taughtBy: ['content-understanding-images'] },
  { id: 'V11', domain: VISION, skill: 'Design and implement multimodal understanding workflows', objective: 'Implement video analysis workflows to process and interpret video segments', taughtBy: ['content-understanding-audio-video'] },
  { id: 'V12', domain: VISION, skill: 'Design and implement multimodal understanding workflows', objective: 'Configure single‑task and pro‑mode Content Understanding pipelines', taughtBy: [], related: ['content-understanding-analyzer', 'content-understanding-overview'], gaps: [{ kind: 'source', note: 'Analyzers are taught; pro mode appears only in the study guide.' }] },
  { id: 'V13', domain: VISION, skill: 'Design and implement multimodal understanding workflows', objective: 'Implement solutions that identify objects, components, or regions within images or video', taughtBy: ['content-understanding-images', 'vision-chat'], gaps: [{ kind: 'source', note: 'Grounding extracted values to image regions and asking about visible objects are taught; locating objects in video appears only in the study guide.' }] },
  { id: 'V14', domain: VISION, skill: 'Implement responsible AI for multimodal content', objective: 'Implement filters to classify unsafe or disallowed visual content', taughtBy: ['responsible-ai-guardrails', 'content-understanding-images', 'video-generation'] },
  { id: 'V15', domain: VISION, skill: 'Implement responsible AI for multimodal content', objective: 'Detect and mitigate indirect prompt injection by using embedded text in images', taughtBy: ['vision-chat', 'responsible-ai-guardrails'], gaps: [{ kind: 'source', note: 'Treating image text as untrusted input and prompt shields (source 156) are taught briefly; detecting injection carried by image text appears only in the study guide.' }] },
  { id: 'V16', domain: VISION, skill: 'Implement responsible AI for multimodal content', objective: 'Enforce visual policy rules, such as applying watermarks, flagging prohibited symbols, upholding brand usage requirements, and detecting potentially inappropriate content', taughtBy: ['responsible-ai-guardrails'], gaps: [{ kind: 'source', note: 'Content filtering is taught; watermarking, prohibited-symbol and brand-policy rules appear only in the study guide.' }] },

  { id: 'T01', domain: TEXT, skill: 'Apply language model text analysis', objective: 'Implement solutions to extract entities, topics, summaries, and structured JSON outputs by using generative prompting and Foundry Tools', taughtBy: ['language-overview', 'language-detect-entities', 'prompt-engineering'] },
  { id: 'T02', domain: TEXT, skill: 'Apply language model text analysis', objective: 'Configure detection of sentiment, tone, safety issues, and sensitive content', taughtBy: ['language-overview', 'language-pii', 'responsible-ai-guardrails'], gaps: [{ kind: 'source', note: 'Safety filtering and PII detection are taught. Sentiment appears only as a deprecated capability or in passing (sources 12, 24, 235 and 262), and tone detection only in the study guide.' }] },
  { id: 'T03', domain: TEXT, skill: 'Apply language model text analysis', objective: 'Build solutions that translate text by using Azure Translator in Foundry Tools or LLM‑powered translation flows', taughtBy: ['language-translation'] },
  { id: 'T04', domain: TEXT, skill: 'Apply language model text analysis', objective: 'Customize language model outputs for domain tasks, such as compliance summarization and domain extraction', taughtBy: ['prompt-engineering', 'model-fine-tuning', 'content-understanding-analyzer'] },
  { id: 'T05', domain: TEXT, skill: 'Implement speech solutions', objective: 'Implement workflows to convert speech to text and text to speech for agentic interactions', taughtBy: ['speech-overview', 'speech-to-text', 'text-to-speech', 'speech-voices-formats', 'speech-ssml', 'speech-mcp'] },
  { id: 'T06', domain: TEXT, skill: 'Implement speech solutions', objective: 'Integrate speech as an agent modality, including custom speech models', taughtBy: ['voice-live', 'voice-live-events', 'speech-mcp'], gaps: [{ kind: 'source', note: 'Voice Live and Speech MCP agents are taught; custom speech models appear only in the study guide.' }] },
  { id: 'T07', domain: TEXT, skill: 'Implement speech solutions', objective: 'Enable multimodal reasoning from audio inputs', taughtBy: ['speech-generative-audio'] },
  { id: 'T08', domain: TEXT, skill: 'Implement speech solutions', objective: 'Translate speech into other languages by using language models and Foundry Tools', taughtBy: ['speech-translation'] },

  { id: 'I01', domain: EXTRACT, skill: 'Build retrieval and grounding pipelines', objective: 'Ingest and index content, such as documents, images, audio, and video', taughtBy: ['ai-search-overview', 'knowledge-mining', 'content-understanding-overview', 'content-understanding-audio-video'] },
  { id: 'I02', domain: EXTRACT, skill: 'Build retrieval and grounding pipelines', objective: 'Configure semantic search, hybrid search, and vector search for grounding', taughtBy: ['search-query', 'rag-fundamentals', 'grounding-optimization', 'foundry-iq-data-sources'], gaps: [{ kind: 'authoring', note: 'Keyword versus vector retrieval and semantic ranking are explained; hybrid search is only named (source 102), and no lesson configures vector fields, a semantic configuration or hybrid queries.' }] },
  { id: 'I03', domain: EXTRACT, skill: 'Build retrieval and grounding pipelines', objective: 'Implement enrichment by using custom or built-in skills for text, images, and layout', taughtBy: ['knowledge-mining', 'knowledge-store'] },
  { id: 'I04', domain: EXTRACT, skill: 'Build retrieval and grounding pipelines', objective: 'Configure RAG ingestion flow, including documents and using optical character recognition (OCR)', taughtBy: ['knowledge-mining', 'rag-fundamentals', 'foundry-iq-data-sources'] },
  { id: 'I05', domain: EXTRACT, skill: 'Build retrieval and grounding pipelines', objective: 'Connect retrieval pipelines directly to workflows and agent tools', taughtBy: ['foundry-iq', 'agents-builtin-tools'] },
  { id: 'I06', domain: EXTRACT, skill: 'Extract content from documents', objective: 'Extract information by using multimodal pipelines that combine OCR, layout analysis, and field extraction', taughtBy: ['document-intelligence-overview', 'document-intelligence-models', 'document-intelligence-custom', 'content-understanding-overview'] },
  { id: 'I07', domain: EXTRACT, skill: 'Extract content from documents', objective: 'Produce clean, grounded representations to use with agents and RAG by using Content Understanding', taughtBy: ['content-understanding-overview', 'content-understanding-api'] },
  { id: 'I08', domain: EXTRACT, skill: 'Extract content from documents', objective: 'Implement analyzers for generating structured or markdown outputs for downstream reasoning by using Content Understanding', taughtBy: ['content-understanding-analyzer', 'content-understanding-api'] },
]
