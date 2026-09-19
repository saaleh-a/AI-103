// User-approved primary domains: each topic belongs to exactly one domain.
// Weights come from the live official outline, never from this mapping.
export const PRIMARY_DOMAIN_MAP = [
  {
    domain: 'Plan and manage an Azure AI solution',
    topicIds: [
      'model-catalog',
      'model-deployment',
      'agents-publishing',
    ],
  },
  {
    domain: 'Implement generative AI and agentic solutions',
    topicIds: [
      'agents-what-is-an-agent',
      'agents-types',
      'agents-framework',
      'agents-workflows',
      'agents-orchestration-patterns',
      'agents-tools-overview',
      'agents-builtin-tools',
      'agents-mcp',
      'agents-a2a',
      'rag-fundamentals',
      'model-evaluation',
      'model-fine-tuning',
    ],
  },
  {
    domain: 'Implement computer vision solutions',
    topicIds: ['image-video-generation'],
  },
  {
    domain: 'Implement text analysis solutions',
    topicIds: [
      'language-overview',
      'language-detect-entities',
      'language-pii',
      'language-translation',
      'language-mcp',
      'speech-overview',
      'speech-to-text',
      'text-to-speech',
      'speech-translation',
      'voice-live',
      'speech-mcp',
    ],
  },
  {
    domain: 'Implement information extraction solutions',
    topicIds: [
      'content-understanding-overview',
      'document-intelligence-overview',
      'document-intelligence-models',
      'content-understanding-analyzer',
      'knowledge-mining',
      'ai-search-overview',
      'foundry-iq',
      'foundry-iq-data-sources',
    ],
  },
]
