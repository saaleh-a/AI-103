import type { Topic } from '@/lib/types'

// v1 curriculum map (Section 6/38): a representative, prerequisite-ordered
// slice of the 265-file corpus, grouped into the domain clusters the exam
// itself weights. Not exhaustive — the AI chat panel can still retrieve from
// the full corpus for anything not listed here.
export const TOPICS: Topic[] = [
  // --- Agents & orchestration ---
  {
    id: 'agents-what-is-an-agent',
    cluster: 'agents-orchestration',
    title: 'What an AI agent is, and Foundry Agent Service',
    orient: 'The foundation everything else in this cluster builds on: what makes something an "agent" rather than a chat model, and the managed service that hosts them.',
    corpusIds: ['230-Understand AI Agents and Microsoft Foundry Agent Service - Training - Microsoft Learn'],
  },
  {
    id: 'agents-types',
    cluster: 'agents-orchestration',
    title: 'Declarative vs. hosted agents, prompt-based vs. workflow agents',
    orient: 'How you choose to build an agent (config vs. code) — sits directly below the "what is an agent" foundation.',
    corpusIds: ['230-Understand AI Agents and Microsoft Foundry Agent Service - Training - Microsoft Learn'],
  },
  {
    id: 'agents-framework',
    cluster: 'agents-orchestration',
    title: 'Microsoft Agent Framework SDK',
    orient: 'The code-first path to building agents, as opposed to the declarative Foundry portal path.',
    corpusIds: ['237-Understand the Microsoft Agent Framework - Training - Microsoft Learn', '234-Understand Microsoft Agent Framework AI agents - Training - Microsoft Learn'],
  },
  {
    id: 'agents-workflows',
    cluster: 'agents-orchestration',
    title: 'Workflows: executors and edges',
    orient: 'The structural layer multi-agent orchestration is built on top of.',
    corpusIds: ['231-Understand Agent Orchestration - Training - Microsoft Learn', '238-Understand workflows - Training - Microsoft Learn'],
  },
  {
    id: 'agents-orchestration-patterns',
    cluster: 'agents-orchestration',
    title: 'Orchestration patterns: concurrent, sequential, handoff, group chat, Magentic',
    orient: 'The five ways the Agent Framework lets multiple agents coordinate — a classic discrimination cluster.',
    corpusIds: [
      '231-Understand Agent Orchestration - Training - Microsoft Learn',
      '241-Use Concurrent Orchestration - Training - Microsoft Learn',
      '245-Use Sequential Orchestration - Training - Microsoft Learn',
      '243-Use Handoff Orchestration - Training - Microsoft Learn',
      '242-Use Group Chat Orchestration - Training - Microsoft Learn',
      '244-Use Magentic Orchestration - Training - Microsoft Learn',
    ],
  },
  {
    id: 'agents-tools-overview',
    cluster: 'agents-orchestration',
    title: 'What tools are, and the Responses API',
    orient: 'How an agent reaches outside its own text generation to act on the world.',
    corpusIds: ['259-What are tools- - Training - Microsoft Learn'],
  },
  {
    id: 'agents-builtin-tools',
    cluster: 'agents-orchestration',
    title: 'Built-in tools: code_interpreter, web_search, file_search, function',
    orient: 'The four named tool types the exam expects you to recognise and pick between.',
    corpusIds: [
      '254-Use the code_interpreter tool - Training - Microsoft Learn',
      '257-Use the web_search tool - Training - Microsoft Learn',
      '255-Use the file_search tool - Training - Microsoft Learn',
      '256-Use the function tool - Training - Microsoft Learn',
    ],
  },
  {
    id: 'agents-mcp',
    cluster: 'agents-orchestration',
    title: 'MCP tool discovery and MCP servers',
    orient: 'A protocol-level way to give an agent tools, distinct from the built-in Responses API tools.',
    corpusIds: ['233-Understand MCP Tool Discovery - Training - Microsoft Learn'],
  },
  {
    id: 'agents-a2a',
    cluster: 'agents-orchestration',
    title: 'Agent-to-Agent (A2A) protocol',
    orient: 'How agents built in different frameworks or by different teams talk to each other — distinct from orchestration patterns, which coordinate agents you built together.',
    corpusIds: ['37-Define an A2A Agent - Training - Microsoft Learn', '26-Connect to your A2A Agent - Training - Microsoft Learn'],
  },
  {
    id: 'agents-publishing',
    cluster: 'agents-orchestration',
    title: 'Publishing agents (Teams, Microsoft 365)',
    orient: 'What happens after an agent works: getting it in front of users.',
    corpusIds: ['232-Understand Foundry agent publishing options - Training - Microsoft Learn'],
  },

  // --- Content Understanding & Document Intelligence ---
  {
    id: 'content-understanding-overview',
    cluster: 'content-document',
    title: 'What Azure Content Understanding is',
    orient: 'A multimodal (documents, images, audio, video) extraction service — the broader of the two services in this cluster.',
    corpusIds: ['262-What is Azure Content Understanding- - Training - Microsoft Learn', '264-What is Content Understanding- - Training - Microsoft Learn'],
  },
  {
    id: 'document-intelligence-overview',
    cluster: 'content-document',
    title: 'What Azure Document Intelligence is',
    orient: 'A documents-only OCR + structure-extraction service, and Content Understanding\'s closest confusable neighbour.',
    corpusIds: ['263-What is Azure Document Intelligence- - Training - Microsoft Learn'],
  },
  {
    id: 'document-intelligence-models',
    cluster: 'content-document',
    title: 'Document Intelligence: prebuilt vs. custom models',
    orient: 'The three model categories (analysis, prebuilt, custom) and when you need to train your own.',
    corpusIds: ['249-Use prebuilt models - Training - Microsoft Learn', '224-Train and use custom models - Training - Microsoft Learn'],
  },
  {
    id: 'content-understanding-analyzer',
    cluster: 'content-document',
    title: 'Content Understanding analyzers and the API',
    orient: 'How you configure Content Understanding to extract a specific schema of fields from content.',
    corpusIds: ['29-Create a Content Understanding analyzer - Training - Microsoft Learn', '250-Use the Content Understanding API - Training - Microsoft Learn'],
  },
  {
    id: 'knowledge-mining',
    cluster: 'content-document',
    title: 'Knowledge mining with an indexer and AI skills',
    orient: 'Where document/content extraction feeds into Azure AI Search to become a searchable knowledge base — the bridge into the Search/RAG cluster.',
    corpusIds: ['92-Extract data with an indexer - Training - Microsoft Learn', '52-Enrich extracted data with AI skills - Training - Microsoft Learn'],
  },

  // --- Language ---
  {
    id: 'language-overview',
    cluster: 'language',
    title: 'Azure Language in Foundry Tools',
    orient: 'The text-analysis service: language detection, entity recognition, PII extraction.',
    corpusIds: ['12-Azure Language in Microsoft Foundry Tools - Training - Microsoft Learn'],
  },
  {
    id: 'language-detect-entities',
    cluster: 'language',
    title: 'Language detection and entity extraction',
    orient: 'The two most exam-tested Language capabilities.',
    corpusIds: ['40-Detect language - Training - Microsoft Learn', '93-Extract entities - Training - Microsoft Learn'],
  },
  {
    id: 'language-pii',
    cluster: 'language',
    title: 'PII extraction and redaction',
    orient: 'A specific, high-signal entity-recognition use case the exam calls out on its own.',
    corpusIds: ['94-Extract personally identifiable information (PII) - Training - Microsoft Learn'],
  },
  {
    id: 'language-translation',
    cluster: 'language',
    title: 'Text translation',
    orient: 'A distinct Language capability from detection/entities — translating content, not analysing it.',
    corpusIds: ['227-Translate text - Training - Microsoft Learn', '229-Translation in Microsoft Foundry - Training - Microsoft Learn'],
  },
  {
    id: 'language-mcp',
    cluster: 'language',
    title: 'The Azure Language MCP server',
    orient: 'How an agent gets Language capabilities as callable tools, rather than your app code calling the Language SDK directly.',
    corpusIds: ['235-Understand the Azure Language MCP server - Training - Microsoft Learn'],
  },

  // --- Speech ---
  {
    id: 'speech-overview',
    cluster: 'speech',
    title: 'Azure Speech in Foundry Tools',
    orient: 'The speech service family: transcription, synthesis, translation, and the SpeechConfig object every call starts from.',
    corpusIds: ['13-Azure Speech in Foundry Tools - Training - Microsoft Learn'],
  },
  {
    id: 'speech-to-text',
    cluster: 'speech',
    title: 'Speech to Text (transcription)',
    orient: 'Audio in, text out.',
    corpusIds: ['252-Use the Speech to Text API - Training - Microsoft Learn', '225-Transcribe speech - Training - Microsoft Learn'],
  },
  {
    id: 'text-to-speech',
    cluster: 'speech',
    title: 'Text to Speech (synthesis) and SSML',
    orient: 'Text in, audio out — and the markup language that controls how it sounds.',
    corpusIds: ['253-Use the Text to Speech API - Training - Microsoft Learn', '221-Synthesize speech - Training - Microsoft Learn', '246-Use Speech Synthesis Markup Language - Training - Microsoft Learn'],
  },
  {
    id: 'speech-translation',
    cluster: 'speech',
    title: 'Speech translation',
    orient: 'Distinct from text translation — translating spoken audio, often in real time.',
    corpusIds: ['226-Translate speech - Training - Microsoft Learn'],
  },
  {
    id: 'voice-live',
    cluster: 'speech',
    title: 'Voice Live API and Voice Live agents',
    orient: 'Real-time, low-latency conversational speech — a different shape of problem from batch transcription/synthesis.',
    corpusIds: ['88-Explore the Azure Voice Live API - Training - Microsoft Learn', '31-Create a Voice Live agent - Training - Microsoft Learn'],
  },
  {
    id: 'speech-mcp',
    cluster: 'speech',
    title: 'The Azure Speech MCP server',
    orient: 'The speech equivalent of the Language MCP server — speech capabilities exposed as agent tools.',
    corpusIds: ['236-Understand the Azure Speech MCP server - Training - Microsoft Learn'],
  },

  // --- Search / RAG ---
  {
    id: 'ai-search-overview',
    cluster: 'search-rag',
    title: 'What Azure AI Search is',
    orient: 'The indexing/query infrastructure underneath both knowledge mining and RAG.',
    corpusIds: ['261-What is Azure AI Search- - Training - Microsoft Learn'],
  },
  {
    id: 'rag-fundamentals',
    cluster: 'search-rag',
    title: 'RAG for agents: retrieve, augment, generate',
    orient: 'Why agents need grounding at all, and the three-step process that provides it.',
    corpusIds: ['239-Understanding RAG for agents - Training - Microsoft Learn'],
  },
  {
    id: 'foundry-iq',
    cluster: 'search-rag',
    title: 'Foundry IQ: managed, shared knowledge bases',
    orient: 'A managed layer on top of Azure AI Search that turns per-agent RAG plumbing into a shared, reusable service — the key discrimination point against building RAG "by hand" on Azure AI Search directly.',
    corpusIds: ['85-Explore Foundry IQ - Training - Microsoft Learn'],
  },
  {
    id: 'foundry-iq-data-sources',
    cluster: 'search-rag',
    title: 'Configuring data sources and retrieval in Foundry IQ',
    orient: 'How knowledge bases actually connect to SharePoint/Blob/OneLake, and how retrieval strategy gets tuned.',
    corpusIds: ['22-Configure data sources for knowledge bases - Training - Microsoft Learn', '23-Configure retrieval with Foundry IQ - Training - Microsoft Learn'],
  },

  // --- Models: catalog, deployment, evaluation ---
  {
    id: 'model-catalog',
    cluster: 'models-deploy-eval',
    title: 'The Foundry Models catalog',
    orient: 'Where every model decision starts: what is available and how it is categorised (LLM/SLM, chat/reasoning, embedding, image/video/speech).',
    corpusIds: ['89-Explore the model catalog - Training - Microsoft Learn'],
  },
  {
    id: 'model-deployment',
    cluster: 'models-deploy-eval',
    title: 'Deploying models to endpoints',
    orient: 'Turning a catalog entry into a callable endpoint.',
    corpusIds: ['39-Deploy models to endpoints - Training - Microsoft Learn', '18-Choose an endpoint and SDK - Training - Microsoft Learn'],
  },
  {
    id: 'model-evaluation',
    cluster: 'models-deploy-eval',
    title: 'Evaluating model performance',
    orient: 'How you know a deployed model is actually good enough, before and after shipping.',
    corpusIds: ['53-Evaluate model performance - Training - Microsoft Learn'],
  },
  {
    id: 'model-fine-tuning',
    cluster: 'models-deploy-eval',
    title: 'Fine-tuning for consistent behaviour',
    orient: 'One of several optimisation levers — and the one most often confused with prompt engineering or RAG.',
    corpusIds: ['95-Fine-tune a model for consistent behavior - Training - Microsoft Learn', '19-Compare and combine optimization strategies - Training - Microsoft Learn'],
  },
  {
    id: 'image-video-generation',
    cluster: 'models-deploy-eval',
    title: 'Image- and video-generation models',
    orient: 'A specialised model category from the catalog, with its own deployment considerations.',
    corpusIds: ['258-What are image-generation models- - Training - Microsoft Learn', '38-Deploy a video generating model - Training - Microsoft Learn'],
  },
]

export const CLUSTER_LABELS: Record<Topic['cluster'], string> = {
  'agents-orchestration': 'Agents & Orchestration',
  'content-document': 'Content Understanding & Document Intelligence',
  language: 'Azure AI Language',
  speech: 'Azure AI Speech',
  'search-rag': 'Azure AI Search & RAG',
  'models-deploy-eval': 'Models: Catalog, Deployment & Evaluation',
}

export const CLUSTER_ORDER: Topic['cluster'][] = [
  'models-deploy-eval',
  'agents-orchestration',
  'content-document',
  'language',
  'speech',
  'search-rag',
]
