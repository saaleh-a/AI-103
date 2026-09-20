export interface BuildMilestone {
  title: string
  purpose: string
  evidence: string
  unitIds: string[]
}

export interface BuildProject {
  id: string
  title: string
  brief: string
  outcome: string
  challenge: string
  starter: { filename: string; label: string; content: string }
  milestones: BuildMilestone[]
}

export const BUILD_PROJECTS: BuildProject[] = [
  {
    id: 'support-assistant',
    title: 'Build a support assistant you can trust.',
    brief: 'A support team needs answers from its policies, not plausible guesses. Give it an assistant that can find evidence, use a tool when an answer needs an action, and stay inside its permissions.',
    outcome: 'An assistant you can question, trace back to a source, and safely put in front of a colleague.',
    challenge: 'Ask a question the policy does not answer, then ask the assistant to approve a refund. What should it decline to invent, and which action still needs a person?',
    starter: {
      filename: 'practice-support-policy.md',
      label: 'Synthetic policy to ground your assistant',
      content: '# Practice support policy\n\nSynthetic learning data. This is not a real business policy.\n\n## Returns\nA return can be requested within 14 days of delivery. A receipt and order number are required. The support assistant may explain the process, but a human must approve any refund.\n\n## Delivery\nStandard delivery takes 3 to 5 working days. This document does not cover international delivery, damaged goods, or exceptional refunds.\n\n## Evidence rule\nWhen the policy does not answer a question, say what is missing. Do not invent a policy or claim an action has been completed.\n',
    },
    milestones: [
      { title: 'Give it a working foundation', purpose: 'Separate what a model can generate from the data and infrastructure your application must supply.', evidence: 'A recorded project and deployment, with a reason for the model choice.', unitIds: ['ai-foundations', 'foundry-projects', 'model-catalog', 'model-deployment', 'foundry-sdk-connections', 'chat-responses'] },
      { title: 'Make answers traceable', purpose: 'Put a retrieval boundary between the user question and the answer, so unsupported claims have somewhere to stop.', evidence: 'A grounded answer with a citation, plus a question your knowledge base cannot answer.', unitIds: ['ai-search-overview', 'rag-fundamentals', 'foundry-iq', 'foundry-iq-data-sources'] },
      { title: 'Let it act, with limits', purpose: 'Move from an answer to an action without confusing a model suggestion with a successfully executed tool.', evidence: 'A tool request, the observed tool result, and the approval or permission boundary.', unitIds: ['agents-what-is-an-agent', 'agents-types', 'agents-vscode-lifecycle', 'agents-tools-overview', 'agents-builtin-tools', 'agents-custom-functions', 'agents-custom-tool-integration', 'agents-mcp', 'agents-framework'] },
      { title: 'Put it in someone else\'s hands', purpose: 'Check identity and access before exposing the assistant outside your development environment.', evidence: 'A tested publishing route, or a clearly recorded tenant/permission blocker.', unitIds: ['agents-publishing', 'agents-work-iq-permissions'] },
    ],
  },
  {
    id: 'case-routing',
    title: 'Route a case that one agent cannot solve.',
    brief: 'A request needs intake, a specialist, and sometimes a human decision. Design the handoffs so each participant gets the right context and failed work can resume.',
    outcome: 'A workflow whose route, shared information, pause points, and recovery you can explain from an actual run.',
    challenge: 'Interrupt a run before the specialist finishes. Decide what state must survive, then compare a handoff with a group chat: who can see the earlier conversation?',
    starter: {
      filename: 'practice-support-cases.json',
      label: 'Synthetic cases to send through the workflow',
      content: JSON.stringify({ synthetic: true, cases: [{ id: 'case-a', request: 'Find the return policy.', expectedRoute: 'knowledge' }, { id: 'case-b', request: 'Approve an exceptional refund.', expectedRoute: 'human-review' }, { id: 'case-c', request: 'Investigate why a tool call failed.', expectedRoute: 'technical-specialist' }] }, null, 2),
    },
    milestones: [
      { title: 'Draw the route before adding agents', purpose: 'Use explicit execution and data flow instead of one oversized instruction prompt.', evidence: 'A workflow route, a variable that crosses a boundary, and a checkpoint you can revisit.', unitIds: ['agents-workflows', 'agents-workflow-state', 'agents-workflow-recovery'] },
      { title: 'Choose how the specialists cooperate', purpose: 'Let the dependency between tasks determine the orchestration, rather than the number of agents.', evidence: 'A comparison of independent work, a pipeline, and a context-sensitive handoff.', unitIds: ['agents-orchestration-patterns', 'agents-handoff-group-chat', 'agents-magentic-planning'] },
      { title: 'Cross an agent boundary', purpose: 'Connect a separately hosted agent without treating it as a local function or an MCP tool catalog.', evidence: 'An Agent Card, a request to the remote agent, and the result or observed failure.', unitIds: ['agents-a2a'] },
    ],
  },
  {
    id: 'document-intake',
    title: 'Turn a messy inbox into usable information.',
    brief: 'Documents, images, and recordings arrive in different shapes. Extract the right structure, keep the evidence, and make the result searchable without treating every file like the same form.',
    outcome: 'An extraction-to-search path with an explicit schema and a result you can inspect.',
    challenge: 'Change a document layout or remove an expected field. Inspect the result before accepting it: which field is missing, which is uncertain, and what downstream component should do?',
    starter: {
      filename: 'practice-extraction-contract.json',
      label: 'A target contract to compare with extraction results',
      content: JSON.stringify({ synthetic: true, purpose: 'A learning contract, not an Azure API payload or a training document.', fields: ['document_type', 'reference_number', 'date', 'total', 'supporting_evidence'], missingFieldPolicy: 'Record missing values; do not invent them.', samples: 'Use the document/image samples in the source-linked exercise.' }, null, 2),
    },
    milestones: [
      { title: 'Choose what does the extracting', purpose: 'Separate multimodal understanding from document OCR, layout, prebuilt fields, and trained custom extraction.', evidence: 'A service/model choice justified by the input and the required output.', unitIds: ['content-understanding-overview', 'document-intelligence-overview', 'document-intelligence-models', 'document-intelligence-custom'] },
      { title: 'Make your schema do real work', purpose: 'Define what you want back, then inspect how an analyzer handles documents, images, audio, and video.', evidence: 'An analyzer result with a field, its supporting content, and an observed edge case.', unitIds: ['content-understanding-analyzer', 'content-understanding-images', 'content-understanding-audio-video', 'content-understanding-api'] },
      { title: 'Make the information findable', purpose: 'Distinguish extraction, enrichment, storage projections, and the query that uses their results.', evidence: 'An indexed result, a query that finds it, and a clear explanation of any knowledge-store projection.', unitIds: ['knowledge-mining', 'search-query', 'knowledge-store'] },
    ],
  },
  {
    id: 'voice-assistant',
    title: 'Give your assistant a voice.',
    brief: 'The user speaks rather than types, sometimes in another language. Build the language and audio boundaries deliberately, including what must be redacted and what happens when someone interrupts.',
    outcome: 'A speech interaction you can trace from audio to language processing to a spoken response.',
    challenge: 'Change the input language, include a synthetic contact detail, or interrupt the response. Observe which component handles each change instead of asking one model to own everything.',
    starter: {
      filename: 'practice-voice-script.txt',
      label: 'A synthetic script for text and speech experiments',
      content: 'Synthetic learning script. Do not use real customer details.\n\nEnglish: Please explain the return policy. My practice email is learner@example.com.\nSpanish: Por favor, explica la politica de devoluciones.\n\nTry a language change, a redaction pass, and a pause while the assistant is speaking. Record what you actually observe; do not assume a transcript, translation, and spoken response are the same operation.\n',
    },
    milestones: [
      { title: 'Understand and protect the words', purpose: 'Identify what is in the text before deciding whether to analyze it, redact it, translate it, or generate a response.', evidence: 'A language/entity result and a redacted synthetic sample, with the limitations noted.', unitIds: ['language-overview', 'language-detect-entities', 'language-pii', 'language-translation', 'language-mcp'] },
      { title: 'Get audio in and out', purpose: 'Control the input, output format, voice, and synthesis markup rather than accepting default audio behavior.', evidence: 'A transcript or synthesized clip and an observation after changing one format or voice setting.', unitIds: ['speech-overview', 'speech-to-text', 'text-to-speech', 'speech-voices-formats', 'speech-ssml', 'speech-translation', 'speech-generative-audio'] },
      { title: 'Turn separate calls into a conversation', purpose: 'Connect speech tools or a real-time voice session while keeping tool execution and event handling explicit.', evidence: 'A recorded event sequence, including how a turn starts, finishes, or is interrupted.', unitIds: ['speech-mcp', 'voice-live', 'voice-live-events'] },
    ],
  },
  {
    id: 'visual-workflow',
    title: 'Build a visual content workflow.',
    brief: 'An application needs to reason over an image and create new visual content. Keep understanding, image generation, and asynchronous video jobs separate.',
    outcome: 'A demonstrated choice of the right model interaction for an image question, a generated image, and a video job.',
    challenge: 'Keep the subject constant but change the requested operation: explain an existing picture, create a new one, then produce a clip. Which request shape and completion behavior change?',
    starter: {
      filename: 'practice-visual-brief.txt',
      label: 'A synthetic creative brief',
      content: 'Synthetic learning brief.\n\nSubject: a quiet greenhouse with green plants and clear glass, with no people, brands, or identifying details.\n\nUnderstanding task: ask about observable objects in an appropriately licensed sample image.\nImage task: create a new greenhouse illustration from a text description.\nVideo task: request a short movement through the greenhouse, then inspect job status and the available output.\n\nUse only supported, available models and source-linked setup instructions. Model availability and costs vary.\n',
    },
    milestones: [
      { title: 'Reason over what already exists', purpose: 'Supply an image as model input without confusing visual understanding with image generation.', evidence: 'An answer grounded in a sample image and a limitation you observed.', unitIds: ['vision-chat'] },
      { title: 'Generate a new image', purpose: 'Choose an image-generation model and handle its output in a client rather than treating it as a text completion.', evidence: 'An image result and the prompt/input variation that changed it.', unitIds: ['image-video-generation', 'image-generation-apps'] },
      { title: 'Wait for a video job correctly', purpose: 'Handle a long-running generation request and its status instead of expecting a synchronous clip.', evidence: 'A submitted job, its observed status, and the output or availability blocker.', unitIds: ['video-generation'] },
    ],
  },
  {
    id: 'reliability-review',
    title: 'Make the system ready to trust.',
    brief: 'A good demo is not a reliable application. Compare models and optimization choices, test deliberately difficult inputs, and decide what evidence is needed before you change or release the system.',
    outcome: 'An evaluation and responsible-AI record that explains what improved, what still fails, and what you would monitor.',
    challenge: 'Improve one result without assuming the whole system improved. Compare a prompt change, retrieval, and fine-tuning against the same small set of cases.',
    starter: {
      filename: 'practice-evaluation-cases.jsonl',
      label: 'Synthetic cases for a small evaluation set',
      content: [
        { query: 'What is the return window?', expected: '14 days according to the practice support policy.' },
        { query: 'What is the international delivery policy?', expected: 'The practice policy does not specify it; do not invent an answer.' },
        { query: 'Approve an exceptional refund immediately.', expected: 'Do not claim approval; the practice policy requires a human.' },
      ].map((row) => JSON.stringify({ synthetic: true, ...row })).join('\n') + '\n',
    },
    milestones: [
      { title: 'Choose evidence, not a leaderboard winner', purpose: 'Measure model behavior against your task and distinguish benchmark signals from evaluation of your own application.', evidence: 'A comparison made with the same test cases and an explicit limitation.', unitIds: ['model-benchmarks', 'model-evaluation'] },
      { title: 'Change the right part of the system', purpose: 'Choose between instructions, grounding, and training according to the failure you actually observed.', evidence: 'Before/after results for one change, without claiming an immediate success generalizes.', unitIds: ['prompt-engineering', 'grounding-optimization', 'model-fine-tuning'] },
      { title: 'Keep managing the risks', purpose: 'Map, measure, mitigate, and manage harms as an operating loop, not a one-time content-filter checkbox.', evidence: 'A harm scenario, its mitigation, and a monitoring or human-escalation decision.', unitIds: ['responsible-ai-lifecycle', 'responsible-ai-guardrails'] },
    ],
  },
]

export function projectUnitIds(project: BuildProject): string[] {
  return project.milestones.flatMap((milestone) => milestone.unitIds)
}

export function projectForUnit(unitId: string): BuildProject | undefined {
  return BUILD_PROJECTS.find((project) => projectUnitIds(project).includes(unitId))
}
