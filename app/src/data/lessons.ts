export interface Lesson {
  /** What problem exists before this thing is introduced. */
  problem: string
  /** The mechanism, in plain language — not a product blurb. */
  mentalModel: string
  /** The actual Azure/Microsoft name and where it lives. */
  azureMapping: string
  /** A decision boundary, failure mode, or exam trap, when there's a real one. */
  watchFor?: string
}

// Hand-written, corpus-grounded lessons — not excerpts. Each one is my own
// synthesis of what the full corpus source says (not just the manifest's
// 500-char excerpt), structured per the constitution's first-principles
// layers (problem -> mental model -> Azure mapping -> decision boundary).
// The raw source stays available in the app as a collapsed reference.
export const LESSONS: Record<string, Lesson> = {
  'agents-what-is-an-agent': {
    problem:
      "A chat model answers one prompt and stops. It can't check something, take an action, or decide what to do next on its own — a human has to read the output and do the next step by hand.",
    mentalModel:
      "An agent is that same model wired into a loop: it can look at context, decide what action to take (not just what to say), call a tool to actually do it, look at the result, and decide again. The intelligence isn't new — GPT-class models could already reason. What's new is giving them a way to act and re-evaluate, not just talk.",
    azureMapping:
      'Microsoft Foundry Agent Service is the managed version of that loop: you give it a model, instructions and tools, and it runs the "decide → act → re-evaluate" cycle for you (tool calling, state, security) so you\'re not hand-rolling it.',
    watchFor:
      'The exam-relevant distinction is "agent" vs "chat model with a system prompt" — if there\'s no tool use and no multi-step decision loop, it\'s not really an agent yet.',
  },
  'agents-types': {
    problem:
      "Once you accept an agent needs a model, instructions and tools, you still have to decide how to define it: as configuration something else runs, or as code you write and deploy yourself.",
    mentalModel:
      "Declarative agents are described, not coded — you fill in model/instructions/tools and the platform runs it. Hosted agents are the opposite: you write and containerize the logic yourself, and the platform just gives you somewhere to run it. Within declarative, there's a second split: a single configured agent (prompt-based) vs. several agents wired together in YAML (workflow agents).",
    azureMapping:
      "Microsoft Foundry Agent Service supports both declarative types directly. Prompt-based declarative agents are the default path and the one most exam scenarios describe.",
    watchFor:
      'If a scenario needs full control over execution logic (custom code paths, non-standard runtime behaviour), that\'s hosted, not declarative — "I need to write the orchestration myself" is the tell.',
  },
  'agents-framework': {
    problem:
      "The Foundry portal is great for building one agent by clicking through a UI. It doesn't give you a single interface across different model providers, fine control over conversation state, or a code-first way to wire several agents together with version control.",
    mentalModel:
      "The Microsoft Agent Framework is an open-source SDK for exactly that. Chat clients give you one abstraction (BaseChatClient) over multiple providers — Azure OpenAI, OpenAI, Anthropic, and others — so switching providers doesn't mean rewriting your code. AgentSession tracks conversation history across turns using a structured message system with explicit roles (USER, ASSISTANT, SYSTEM, TOOL). Tools — both custom functions and built-ins like Code Interpreter, File Search, and Web Search — let agents act, not just answer. And orchestration patterns share one unified interface, so you can swap concurrent for sequential for handoff without rewriting your agents.",
    azureMapping:
      "It integrates with Microsoft Foundry Agent Service as the recommended production backend — the framework is how you build against the service in code; the portal is how you build against it declaratively.",
    watchFor:
      "The provider-agnostic design is the actual selling point in the source material: you can build against Foundry Agent Service, then swap to a different provider later without rearchitecting.",
  },
  'agents-workflows': {
    problem:
      "A single agent with a long instruction list gets brittle fast — one model trying to do intake, routing, and three different specialist tasks in one prompt.",
    mentalModel:
      'A workflow breaks that into executors — an agent or a piece of custom logic that does one job and passes its output on. Edges decide how work moves between executors: direct (A then B), conditional (only if a check passes), switch-case (route by category), fan-out (send to several at once), or fan-in (combine several results into one). The workflow is the wiring diagram; executors are the components.',
    azureMapping:
      "Workflows are a first-class concept in both the Microsoft Agent Framework SDK (code) and the Foundry portal's visual workflow designer (drag-and-drop nodes).",
    watchFor:
      'This is the layer underneath every orchestration pattern (concurrent, sequential, etc.) — those patterns are really just common edge configurations with a name.',
  },
  'agents-orchestration-patterns': {
    problem:
      "Different multi-agent problems need fundamentally different coordination shapes — running things in parallel isn't the same problem as escalating between specialists, and using the wrong shape either wastes work or breaks the collaboration.",
    mentalModel:
      "Five named patterns, each solving a different coordination problem: concurrent (same task to every agent at once, collect results independently — for parallel analysis), sequential (output of one feeds the next, fixed order — for pipelines), handoff (control passes between agents based on context, one agent working at a time — for escalation/routing), group chat (a shared conversation with a manager deciding who speaks next — for collaborative problem-solving), and Magentic (a manager plans and delegates adaptively — for open-ended problems where you don't know the steps up front).",
    azureMapping:
      "All five are built into the Microsoft Agent Framework SDK with one consistent interface — you swap the pattern without rewriting your agents.",
    watchFor:
      "The exam clue is almost always in the coordination shape described, not the domain: \"parallel/independent\" → concurrent, \"pipeline/in order\" → sequential, \"escalate/route to an expert\" → handoff, \"discussion/consensus\" → group chat, \"plans and adapts as it goes\" → Magentic.",
  },
  'agents-tools-overview': {
    problem:
      "Without tools, a model can only generate text from what it already knows — it can't look anything up, run anything, or change anything in the outside world.",
    mentalModel:
      'Tools are how a model reaches outside itself. You list which tools an agent can use in the request to the Responses API, and by default the model itself decides when to use which one, based on the prompt — you can constrain that with tool-selection rules or the system instructions, but the model is doing the picking.',
    azureMapping:
      "This is how Microsoft Foundry Models expose tool-calling: through the OpenAI Responses API, with tools declared per request.",
    watchFor:
      'A model "choosing" a tool badly is usually an instructions problem (the system prompt didn\'t constrain it enough), not a capability problem.',
  },
  'agents-builtin-tools': {
    problem:
      "Every agent capability beyond pure text generation needs some concrete tool behind it, and picking the wrong one is one of the most common scenario-question traps.",
    mentalModel:
      "Four built-in tools, four different jobs: code_interpreter runs Python for the model (math, data manipulation, generated charts); web_search reaches the open internet for anything past the model's training data; file_search grounds answers in documents you specifically uploaded to a vector index (not the open web); function calls your own application code for anything none of the other three cover.",
    azureMapping:
      "All four are available through the Responses API in Microsoft Foundry.",
    watchFor:
      'file_search vs. web_search is the classic confusion: "ground answers only in our internal policy documents" is file_search; "get me current information the model wasn\'t trained on" is web_search.',
  },
  'agents-mcp': {
    problem:
      "As agents gain access to more tools and services, registering, updating, and integrating each one by hand gets complex fast — and every time an API changes, you have to go back and update the hardcoded integration.",
    mentalModel:
      "MCP (Model Context Protocol) solves this with dynamic tool discovery: instead of the agent having hardcoded knowledge of every tool, it queries a centralized MCP server at runtime, which acts as a live catalog. An MCP server hosts functions exposed as tools (via an @mcp.tool decorator); an MCP client connects, fetches the current tool list, and wraps them as tool definitions the agent can call. Tools can be added, updated, or removed on the server without touching the agent's code at all.",
    azureMapping:
      "Microsoft ships MCP servers for its own services (Language, Speech) so an agent gets those capabilities as discoverable tools rather than direct SDK calls.",
    watchFor:
      "Two concrete benefits the corpus calls out beyond \"less code\": interoperability across LLMs (switch or evaluate models without reworking every tool integration) and standardized security (one consistent auth method across MCP servers, instead of managing separate keys per API). MCP gives an agent more tools — it's not about talking to another agent, which is A2A.",
  },
  'agents-a2a': {
    problem:
      "Sometimes the thing you need to delegate to isn't a tool you control — it's a whole agent someone else built, possibly on a completely different platform, and it needs to explain what it can do before anything can use it.",
    mentalModel:
      "A2A standardizes two artifacts. An Agent Skill is one capability the agent offers — with an ID, a human-readable name, a description, tags for discovery, example prompts, and its supported input/output formats. An Agent Card is the whole package: identity, the endpoint URL where the A2A service lives, supported capabilities (like streaming), default input/output modes, the list of skills, and whether authentication is required — effectively a digital business card a routing agent or client retrieves to discover what this agent does and how to call it.",
    azureMapping:
      "Azure AI Agents support A2A on both sides: hosting an A2A server (your agent, callable by others) and acting as a client that connects to someone else's A2A agent.",
    watchFor:
      'Two details worth holding onto for scenario questions: each A2A agent can use a different LLM (flexible model selection per agent, unlike some MCP setups tied to a single model connection), and authentication is built into the protocol itself rather than bolted on. The tell for A2A over MCP or an orchestration pattern is language like "a partner\'s agent," "hosted elsewhere," or "different platform."',
  },
  'agents-publishing': {
    problem:
      "An agent that only answers calls from your dev environment isn't reaching the people who'd actually use it — and publishing isn't just \"flip a switch,\" it changes what identity and permissions the agent runs under.",
    mentalModel:
      "Publishing promotes the agent from a development asset into a managed Azure resource: an Agent Application with a stable invocation URL (consistent across version updates — the Application acts as a routing layer so publishing a new version doesn't change the public endpoint), its own distinct Microsoft Entra identity separate from your dev project, and isolation so one user's data isn't visible to another. Publishing directly to Microsoft 365 from the Foundry portal creates an Azure Bot Service resource, registers a Microsoft Entra ID application, and generates a distribution package — fast, and keeps agent logic inside Foundry. The Microsoft 365 Agents Toolkit is the alternative for complex cases: custom single sign-on, advanced middleware, multi-environment pipelines.",
    azureMapping:
      "Beyond Teams/M365, Foundry agents can also publish to a web app preview, a stable REST API endpoint, or other Azure Bot Service channels (Slack, Telegram, Twilio SMS, Facebook).",
    watchFor:
      "The identity change is the real exam trap: the published agent authenticates with its own new identity, so development-time permissions don't transfer automatically — if your agent's tools call Azure AI Search or another service, you have to reconfigure permissions for the published agent's identity, not just for your dev project.",
  },

  'content-understanding-overview': {
    problem:
      "Real business content doesn't come in one format — an insurance claim might involve a PDF, a photo, a call recording, and a video walkthrough, and building four separate extraction pipelines for those four formats is expensive and inconsistent.",
    mentalModel:
      "Content Understanding is one generative-AI service with one consistent development pattern (define an analyzer schema, run content through it, get structured output) across documents, images, audio, and video — so you don't rebuild the extraction logic per content type.",
    azureMapping:
      "It's a Microsoft Foundry capability, usable from the Foundry portal, a dedicated Content Understanding Studio, or the Content Understanding API directly.",
    watchFor:
      "The scope is the whole point: if a scenario only ever mentions documents/forms, Document Intelligence is very likely the better answer — Content Understanding earns its keep when audio, video, or images are also in scope.",
  },
  'document-intelligence-overview': {
    problem:
      "Building an accurate document-extraction model from scratch (OCR plus structure understanding) takes deep learning expertise and a lot of training data most teams don't have.",
    mentalModel:
      "Document Intelligence gives you that as a pretrained capability: OCR locates text and draws bounding boxes around what it found, and on top of that it extracts key-value pairs, selection marks (checkboxes), and tables — returned as structured JSON that preserves the original layout.",
    azureMapping:
      "It's an Azure AI service, usable through its own dedicated resource or through a shared Foundry resource, via REST, an SDK (Python/C#/Java/JavaScript), or the Document Intelligence Studio for visual testing.",
    watchFor:
      "It only takes documents (JPEG/PNG/BMP/PDF/TIFF, plus Office formats for the read model) — not audio or video. That's the hard boundary with Content Understanding.",
  },
  'document-intelligence-models': {
    problem:
      "Not every document need is the same: sometimes you just need raw text, sometimes structure and tables too, sometimes specific fields from a known document type, and sometimes your documents are unique to your business and nothing prebuilt recognises their layout.",
    mentalModel:
      "Two document analysis models are the foundation everything else builds on: the read model extracts printed/handwritten text (detecting language per line, classifying handwritten vs. printed) and is the text-extraction base for every other model; the layout model adds table detection, selection marks, and optional key-value pairs on top. Prebuilt models sit above that, trained on specific document types — financial/legal, US tax, US mortgage, and personal ID documents (which the corpus specifically flags for handling data protected by privacy law). Custom models are for document types nothing prebuilt covers: template models need a consistent visual layout but train in minutes and are cheap to run; neural models use deep learning to handle varying or semi-structured layouts, support overlapping fields and signature detection, but cost more and train slower. A custom classifier routes an incoming document to the right extraction model when you handle several document types, and a composed model chains multiple custom models together, classifying first and then extracting with the matched model.",
    azureMapping:
      "All of these live under the same Document Intelligence service — the choice is about which model category fits the document, not a different Azure resource.",
    watchFor:
      "The source is explicit: always check whether a prebuilt model already exists before investing in custom model development. \"Fixed layout, cheap, fast\" points to template models; \"varying layouts, higher accuracy needed\" points to neural models.",
  },
  'content-understanding-analyzer': {
    problem:
      "Content Understanding needs to know exactly what fields you want pulled out of a piece of content — it can't guess your business's specific data needs.",
    mentalModel:
      "An analyzer is a JSON schema of the fields you want extracted — each field typed (e.g. string) and marked either as something to extract (the value already exists in the document, to be \"read\") or something to generate (inferred by the model rather than read verbatim), plus a models section specifying which generative models power the analyzer. Build it visually in Content Understanding Studio for most scenarios, or submit the JSON directly: through the Python SDK's ContentUnderstandingClient.begin_create_analyzer (handles the async creation for you), or as a raw REST PUT request, which returns an Operation-Location URL you poll to check creation status.",
    azureMapping:
      "Created and tested via Content Understanding Studio for most scenarios, or the Content Understanding API for programmatic/automated analyzer creation.",
    watchFor:
      "An analyzer is reusable — build it once for \"invoice fields\" and run every invoice through it, rather than redefining the schema per document.",
  },
  'knowledge-mining': {
    problem:
      "Once you've extracted structured data from documents, images, audio, and video, you still need a way to actually search and analyze it at scale, not just hold it as isolated extraction results.",
    mentalModel:
      "An index holds your searchable content; an indexer creates and updates it. The indexer pulls from a data source (a blob container, database, or similar), applies \"document cracking\" to extract the source content, and iteratively builds each document as a hierarchical JSON structure — starting from raw fields like content and metadata_storage_name. A skillset of AI skills then runs in order, and each skill adds a field to that structure: a language-detection skill might add a language field; an OCR skill run per-image (over a normalized_images collection) adds extracted text under each image; a merge skill can combine the original text with image-extracted text into one merged_content field. Built-in skills draw on Foundry Tools like Vision and Language — language detection, entity/key-phrase extraction, translation, PII identification and redaction, image text extraction, caption/tag generation — and need a Foundry Tools resource attached (a free, restricted one is available but capped at 20 documents). Custom skills wrap your own logic, often as an Azure Function, for anything the built-ins don't cover — such as routing a field's content through a Document Intelligence model. At the end, fields map to the index either implicitly (same name) or with an explicit mapping (rename or transform).",
    azureMapping:
      "Indexers and skillsets are Azure AI Search concepts — this is the knowledge-mining use of Search, distinct from using Search purely for RAG grounding.",
    watchFor:
      "This is the bridge between the extraction cluster (Content Understanding/Document Intelligence) and the Search/RAG cluster — extraction produces the enrichable content, Search indexes and makes it queryable.",
  },

  'language-overview': {
    problem:
      "Text data is everywhere in an app — support tickets, chat transcripts, form fields — but raw text isn't structured or actionable on its own.",
    mentalModel:
      "Azure Language in Foundry Tools gives you three current, actively-supported capabilities for turning text into structured signal: language detection, named entity recognition, and PII extraction. (Sentiment analysis, summarization, and key-phrase extraction still exist but are marked deprecated — kept only for apps already built on them, not for new exam-relevant design.)",
    azureMapping:
      "Provisioned as part of a Microsoft Foundry resource; called via REST or a language-specific SDK, authenticated by resource key or Microsoft Entra ID.",
    watchFor:
      "If a scenario asks you to design something new around sentiment analysis or summarization, treat that as a legacy/deprecated capability question, not a current best-practice one.",
  },
  'language-detect-entities': {
    problem:
      "Two very different problems: you don't know what language a piece of text is in, or you know the language but need to know what's actually being talked about (who, where, when, which organisation).",
    mentalModel:
      "Language detection reads each submitted document and returns a language identifier plus a confidence score between 0 and 1. It handles single phrases or whole documents (up to 5,120 characters, up to 1,000 items per request), and it's useful for content stores collecting arbitrary text, or determining which language a chat session should respond in. Named entity recognition finds references inside text and categorises them — Person, Location, DateTime, Organization, Address, Email, URL, and more — returning the category for each entity found.",
    azureMapping:
      "Both are core Azure Language capabilities, called against a provisioned Language/Foundry resource.",
    watchFor:
      "Two edge cases worth knowing for detection: mixed-language content returns the language with the largest share of the text, but with a lower confidence score reflecting that ambiguity; genuinely unparseable content (e.g. encoding issues) returns the language as \"(unknown)\" with a score of 0.",
  },
  'language-pii': {
    problem:
      "Text often contains personal data you're not supposed to store, log, or show to everyone who can see the rest of the document — a customer-feedback form or medical record with names, addresses, or card numbers embedded in the body.",
    mentalModel:
      "PII detection identifies sensitive spans — names, addresses, phone numbers, emails, social security numbers, credit card numbers — and gives you two distinct outputs from that same analysis: the extracted PII entities themselves (with category and confidence score, for review or logging), and a redacted version of the text with those spans masked by asterisks or a character you specify, ready to store or display safely.",
    azureMapping:
      "Part of Azure Language — the same resource and calling pattern as entity recognition and language detection, just a different capability within it.",
    watchFor:
      "\"Identify\" is entity recognition territory; \"identify and remove/redact so it's safe to store or show\" is specifically the PII capability, and it's worth remembering it gives you both the list of entities and a ready-to-use redacted string in one response.",
  },
  'language-translation': {
    problem:
      "Written content in one language is often needed in another — documentation, support replies, product descriptions — and that's a different problem from understanding text in a single language.",
    mentalModel:
      "Azure Translator supports 90+ languages and two related but distinct operations: translation, converting text from a source language to one or more target languages (you can specify the source or let the service auto-detect it), and transliteration, rendering text in a different script without changing the language — for example, converting Japanese written in Hiragana into Latin characters so it reads phonetically to an English speaker. You can translate with the default model or route through an LLM, translate whole documents synchronously or asynchronously while preserving structure, and train custom models for domain-specific terminology.",
    azureMapping:
      "Available through Microsoft Foundry Tools, callable via the global endpoint, regional endpoints, or a Foundry resource endpoint, with SDKs for Python, .NET, Java, and JavaScript.",
    watchFor:
      "Transliteration vs. translation is a genuine exam-style trap: transliteration changes the writing system, not the language — \"render this in Latin script so an English speaker can read it phonetically\" is transliteration, not translation, even though no meaning is being converted between languages.",
  },
  'language-mcp': {
    problem:
      "If an agent needs Language capabilities, hard-coding calls to the Language SDK into the agent's code works, but it means every agent that needs language analysis re-implements that integration — and MCP itself is a general pattern worth understanding before looking at any specific MCP server.",
    mentalModel:
      "MCP uses a client-server architecture: a host (the app running the agent, e.g. Foundry or a custom app), a client (the piece inside the host that manages MCP server connections), and a server (exposes tools, resources, and prompts the agent can discover). The Azure Language MCP server exposes Language capabilities as tools through that architecture. When connected, the agent's own model reads the prompt and decides which tool — or combination of tools — to call, in the same turn if needed (e.g. \"what language is this, and who's mentioned?\" can trigger both language detection and entity recognition together). You write no routing logic; the agent handles tool selection autonomously from the tool descriptions it received.",
    azureMapping:
      "A Microsoft-provided MCP server specifically for Azure Language, available as a remote endpoint tied to your Foundry/Language resource, or as a local server you host yourself.",
    watchFor:
      "This is the general MCP concept (agents-mcp) applied specifically to Language — same trade-off logic: use it when you want language capabilities exposed as discoverable tools rather than hard-coded integration.",
  },

  'speech-overview': {
    problem:
      "Speech is a genuinely different modality from text — audio in or audio out — and needs its own connection and configuration model, not just a different endpoint on the same client.",
    mentalModel:
      "Every Azure Speech SDK call starts from a SpeechConfig object, which holds the connection details (endpoint or region, and key) for your Speech resource. Everything else — transcription, synthesis, translation — builds on top of that one config object.",
    azureMapping:
      "Azure Speech in Foundry Tools, provisioned as part of a Microsoft Foundry resource, called via the Speech SDK (Python shown in the corpus, with C#/JavaScript following the same pattern).",
    watchFor:
      "Recent SDK versions (1.48.2+) accept either a Foundry resource endpoint or a region for SpeechConfig — older code you might see in examples may still assume region-only.",
  },
  'speech-to-text': {
    problem:
      "Recorded or live audio (a call, a meeting, a voice memo) isn't searchable, can't be fed into text-based analysis, and can't be read by someone who needs it in writing.",
    mentalModel:
      "A consistent pattern regardless of language SDK: a SpeechConfig holds the connection (endpoint/region + key); an optional AudioConfig sets the input source (defaults to the system microphone, or point it at a file); a SpeechRecognizer, built from those two, is your proxy client to the API; calling a method like RecognizeOnceAsync() runs one asynchronous transcription. The result is a SpeechRecognitionResult whose Reason tells you what happened — RecognizedSpeech (success, check the Text property), NoMatch (audio was parsed but no speech was found), or Canceled (an error — check the Properties collection's CancellationReason for why).",
    azureMapping:
      "The Speech to Text API within Azure Speech in Foundry Tools.",
    watchFor:
      "Transcription is a building block, not an endpoint in itself — most real scenarios chain it into something else (analysis, translation, summarisation of the transcript).",
  },
  'text-to-speech': {
    problem:
      "Some scenarios need spoken output — reading a message aloud, giving an app a voice — and plain text can't do that on its own, and sometimes you need real control over exactly how it sounds.",
    mentalModel:
      "The synthesis pattern mirrors recognition: a SpeechConfig for the connection; an optional AudioConfig for the output (default speaker, a file, or explicitly null to get the raw audio stream back for your own processing); a SpeechSynthesizer built from those; calling SpeakTextAsync() runs the synthesis. The result is a SpeechSynthesisResult — when Reason is SynthesizingAudioCompleted, the AudioData property holds the generated audio. For control beyond plain text, SSML (Speech Synthesis Markup Language) is an XML syntax you submit instead: it can set a speaking style (e.g. \"cheerful\" on a neural voice), insert pauses, specify phonemes for correct pronunciation (rendering \"SQL\" as \"sequel\"), adjust prosody (pitch, timbre, rate), apply say-as rules (read a string as a date, time, or phone number), or even insert prerecorded audio.",
    azureMapping:
      "The Text to Speech API within Azure Speech in Foundry Tools; SSML is submitted through the same SpeechSynthesizer object as plain text, just via a different method.",
    watchFor:
      "If a scenario needs specific control over how something sounds — a particular style, pronunciation, or pacing, not just that it's spoken — that's the SSML layer, not a different service or a configuration setting on SpeechConfig.",
  },
  'speech-translation': {
    problem:
      "Translating written text doesn't help when the input is spoken — you could transcribe first and translate second as two separate steps, but that's not the same as a service built for the combined case, and going from translated text back to translated speech has more than one valid approach.",
    mentalModel:
      "Speech translation connects via a SpeechTranslationConfig (not the plain SpeechConfig) and uses a TranslationRecognizer, configured with a source language and one or more target languages via add_target_language(). For speech-to-speech, there are two approaches: manual synthesis runs translation and synthesis as two separate, decoupled steps — get the text translations first, then loop through each target language and synthesize each one individually with a regular SpeechSynthesizer, which works for any number of target languages; event-based synthesis instead attaches a handler to the TranslationRecognizer's own Synthesizing event to capture translated audio as it's produced, but only works for a single target language (1:1 translation).",
    azureMapping:
      "Part of Azure Speech (not Azure Language) — it's a Speech-service capability specifically because the input is audio.",
    watchFor:
      "If a scenario needs multiple target languages from spoken input, that rules out event-based synthesis — manual synthesis (translate to text, then synthesize each language separately) is the only approach of the two that supports it.",
  },
  'voice-live': {
    problem:
      "A phone-call-style conversation needs the agent to listen, think, and speak in the same continuous exchange, including being interrupted mid-sentence — batch \"record, transcribe, respond, synthesize\" is too slow and too turn-based for that.",
    mentalModel:
      "The Voice Live API runs over a WebSocket for real-time, bidirectional communication, exchanging JSON-formatted client events (like session.update to change configuration, input_audio_buffer.append to stream in audio, response.create to trigger a reply) and server events (session.updated, response.done, conversation.item.created) rather than discrete request/response calls. It supports two connection shapes — a project connection through a Foundry agent, or a direct model connection — and two auth methods: the recommended keyless Microsoft Entra ID (a Bearer token, needing the Cognitive Services User role) or an API key (via a pre-handshake header, unavailable in browsers, or a query-string parameter). Built-in noise reduction, echo cancellation, and WebRTC-based avatar streaming round out the real-time feature set.",
    azureMapping:
      "Voice Live agents run through Microsoft Foundry; using an agent (rather than connecting directly to a model) adds encapsulated instructions/configuration and other agent-level benefits on top of raw Voice Live access.",
    watchFor:
      "\"Real-time,\" \"low latency,\" \"can be interrupted,\" and \"natural back-and-forth\" are the scenario words that point to Voice Live over chaining Speech to Text/Text to Speech calls. Entra ID auth being the recommended (not just supported) method is worth remembering for security-focused scenario questions.",
  },
  'speech-mcp': {
    problem:
      "Same problem as the Language MCP server, for Speech: hard-coding Speech SDK calls into every agent that needs speech capabilities duplicates integration work — and speech tools have a requirement text-based tools don't.",
    mentalModel:
      "The Azure Speech MCP server exposes exactly two tools: speech-to-text (\"Recognize\" — transcribes audio in formats like WAV, MP3, OGG, FLAC, MP4, M4A, AAC, with options for language selection, phrase hints, and profanity filtering) and text-to-speech (\"Synthesize\" — generates natural-sounding audio in multiple neural voices and output formats). The agent picks the right tool autonomously from the user's prompt, same as the Language MCP server. The real difference: because this server works with audio files rather than just text, it needs an Azure Storage account and a blob container. Text-to-speech writes generated audio to that container and returns a link; speech-to-text can read from a public URL or from the container via a SAS URL you provide when connecting the server.",
    azureMapping:
      "A Microsoft-provided MCP server for Azure Speech, connected to an agent like any MCP server, but configured with a SAS URL for its storage.",
    watchFor:
      "That storage/SAS-URL requirement is the concrete discrimination point against the Language MCP server, which needs no such storage. SAS URLs are treated as secrets: short expiry, scoped to one container, never embedded in code, prompts, or transcripts.",
  },

  'ai-search-overview': {
    problem:
      "Once you have structured, semi-structured, or unstructured data from many sources, you need infrastructure that can index it and answer queries against it at scale — building that indexing/query engine from scratch is a large undertaking on its own.",
    mentalModel:
      "Azure AI Search provides that infrastructure: it indexes documents and data from a range of sources, uses AI skills to enrich what it indexes, and stores the resulting insights so they're queryable. It's the engine underneath both knowledge mining (Section on knowledge-mining) and RAG grounding for generative AI apps.",
    azureMapping:
      "Azure AI Search, called directly or accessed indirectly through Foundry IQ's managed layer.",
    watchFor:
      "Same underlying service, two different use cases in this corpus: knowledge mining (structured extraction/analytics) and RAG (grounding an agent's answers) — the exam scenario tells you which one is in play by what happens with the results.",
  },
  'rag-fundamentals': {
    problem:
      "A model's training data goes stale the moment training ends, and it has no way to cite where an answer came from or guarantee it's grounded in your organisation's actual current content — that's a real barrier in settings where accuracy and traceability matter.",
    mentalModel:
      "RAG runs three coordinated steps every time it answers: retrieve (search a knowledge base for content relevant to the query), augment (combine that retrieved content with the user's question as context), generate (the agent answers using both its training and the retrieved material). This gets you real-time-current knowledge without retraining, source citations a user can verify, and grounding that reduces fabricated answers.",
    azureMapping:
      "RAG is a pattern, not one specific Azure product — Azure AI Search provides the retrieval half; Foundry IQ (next section) wraps the whole pattern into a managed service.",
    watchFor:
      "Don't confuse RAG with fine-tuning (see the models cluster's discrimination table) — RAG changes what context is available at answer time, it doesn't change the model's weights at all.",
  },
  'foundry-iq': {
    problem:
      "Building RAG properly means configuring vector databases, embedding pipelines, retrieval tuning, and search infrastructure — and if three different agents in your organisation each need RAG, doing that from scratch three times is a lot of duplicated, hard-to-maintain plumbing.",
    mentalModel:
      "Foundry IQ is Azure AI Search's retrieval capability, offered as a managed, shared service instead of infrastructure you build per agent. You create knowledge bases once — organised by business domain (\"Product Documentation,\" \"HR Policies\"), not by which storage system the data happens to live in — and any number of agents connect to the same knowledge base. It also runs the retrieval intelligence for you: it reads the query, picks a retrieval strategy (keyword for simple factual questions, semantic search plus query expansion for complex ones), ranks results, and returns citations.",
    azureMapping:
      "Foundry IQ is built on Azure AI Search but sits a layer above it — you configure knowledge bases and data source connections, not indexes and skillsets directly.",
    watchFor:
      "The tell for Foundry IQ over hand-built RAG-on-Search: the scenario mentions multiple agents needing the same or overlapping knowledge, or explicitly wants to avoid building/maintaining retrieval infrastructure.",
  },
  'foundry-iq-data-sources': {
    problem:
      "Real organisational knowledge lives scattered across SharePoint, Blob Storage, OneLake, existing search indexes, and the open web — and even once it's connected, an agent doesn't automatically know when to search it, how to cite it, or what to do when nothing relevant is found.",
    mentalModel:
      "Foundry IQ supports six data source types, each suited to a different situation. Azure AI Search Index reuses an index you've already built, when you need semantic ranking, custom scoring, or facets. Azure Blob Storage reads documents (PDF, docx, txt, md, HTML) directly from containers, no index to build or maintain. Web grounds answers in real-time content via Bing — good for current events or pricing, at the cost of less control over exact sources. SharePoint Remote queries SharePoint live, automatically respecting existing SharePoint permissions with no index to maintain, but with limited search sophistication. SharePoint Indexed preprocesses SharePoint content into Azure AI Search instead, trading index-maintenance overhead for faster responses and full Search capabilities — and permissions get configured at indexing time rather than enforced live. OneLake connects to unstructured data already sitting in a Microsoft Fabric lakehouse. You can combine several sources in one knowledge base — SharePoint as the primary source, with web grounding as a fallback for anything current the internal data doesn't cover. Beyond wiring up sources, retrieval behaviour itself has to be configured: vague agent instructions like \"use the knowledge base\" produce inconsistent results, so effective instructions specify exactly when to retrieve, how to cite sources, and what to do when nothing relevant is found — then get tested against groundedness, citation, relevance, and completeness.",
    azureMapping:
      "Configured in the Foundry IQ setup for a knowledge base — this is the concrete \"how\" behind the \"what\" described in the Foundry IQ overview.",
    watchFor:
      "SharePoint Remote vs. Indexed is a real exam-style trade-off: \"simple, always current, respects live permissions\" is Remote; \"advanced search, custom pipelines, faster responses\" is Indexed. A vague retrieval instruction is itself treated as a design flaw, not just a prompt-wording detail.",
  },

  'model-catalog': {
    problem:
      "With over 1,900 models from many providers, picking the right one by browsing isn't practical without a structured way to filter by what actually matters for your scenario.",
    mentalModel:
      "The catalog splits models along a few axes that matter for real decisions: source (Azure OpenAI direct-billed vs. partner/community models with their own licensing), size class (LLMs like GPT-5-class models for deep reasoning and complex generation vs. SLMs like Phi-4-class for cheaper, faster, common tasks — SLMs can even run on edge hardware), and task specialisation (chat/reasoning models for conversation and complex problem-solving; embedding models that convert text to vectors for semantic search and RAG; and dedicated image-generation, video-generation, image-analysis, text-to-speech, and speech-to-text models).",
    azureMapping:
      "The Foundry Models catalog in the Microsoft Foundry portal, filterable by collection, capabilities, source, inference task, fine-tuning support, and industry.",
    watchFor:
      "\"Deep reasoning, complex generation, more compute\" is the LLM description; \"fast, cheap, edge-capable, good enough for common tasks\" is the SLM description — a scenario emphasising cost or latency at the edge is pointing at an SLM, not a bigger model.",
  },
  'model-deployment': {
    problem:
      "A model sitting in the catalog isn't callable by anything — your application needs a live endpoint, and before that, decisions about which SDK/endpoint and which deployment shape fit the workload.",
    mentalModel:
      "Every Foundry project exposes two endpoints: a Project endpoint, used with the Foundry SDK for Foundry-native operations (connections, project config, tracing, datasets/indexes) beyond what OpenAI's API covers, and an Azure OpenAI endpoint, used with the OpenAI SDK directly in an OpenAI-compatible way across OpenAI-hosted, Azure OpenAI, and Foundry models alike — that choice is made before development starts, not fixed later. Deployment itself turns a catalog model into a callable endpoint with a name (used in the model parameter at inference time) and a deployment type that's really a data-residency/throughput decision: Global Standard (any region, pay-per-token, highest quota, the default for general workloads), Global Provisioned (reserved throughput units for predictable high-throughput), Global Batch (50% discount for large async jobs within 24 hours), Data Zone variants of each (same three shapes, constrained to a compliance data zone), single-region Standard/Provisioned variants for regional residency, and a Developer type reserved for fine-tuned model evaluation. Partner/community models may require accepting Azure Marketplace terms; Azure-direct models like GPT-4o-mini don't. After deploying, you land in the Foundry Playground to test immediately.",
    azureMapping:
      "Deployment happens through the Microsoft Foundry portal's Build section, which also shows endpoint URLs, auth keys, and usage metrics for managing deployments afterward.",
    watchFor:
      "Deployment type is a residency/throughput decision, not a performance knob: \"EU/US data zone compliance\" points to a Data Zone variant, \"predictable high-throughput\" points to a Provisioned variant, \"large async batch job\" points to Batch.",
  },
  'model-evaluation': {
    problem:
      "A model that looked good in a demo can still drift, regress, or simply not meet quality requirements once it's handling real traffic — deploying it isn't the same as knowing it's good, and \"evaluate it\" isn't one single activity.",
    mentalModel:
      "Manual evaluation captures what automated metrics can't: interactive playground testing (including side-by-side comparison of models on the same prompts), structured review where human raters score responses on relevance, informativeness, engagement, accuracy, and safety, and user studies that surface real-world issues like confusing phrasing. Automated metrics split into two families with a real dividing line between them. Generation-quality metrics — groundedness (is the answer based on the given context, not speculation; a binary \"Pro\" variant exists for strict factual checks), relevance, coherence, fluency — and risk/safety metrics (self-harm, hateful/unfair content, violence, sexual content, protected material, jailbreak vulnerability, reported as a defect rate) are judged by an AI evaluator model, with no reference answer needed. NLP metrics — F1-score, BLEU, METEOR, ROUGE, GLEU — instead need ground-truth reference answers to compare against, and work best for tasks with a genuinely correct answer (translation, summarisation, classification), not open-ended generation where many valid responses exist.",
    azureMapping:
      "The Microsoft Foundry portal's Evaluation feature runs systematic evaluations against test datasets, scoring a deployed model or an agent's responses with one or several metrics at once.",
    watchFor:
      "The real split among automated metrics isn't \"AI vs. non-AI\" — it's whether a ground-truth reference answer is required. Groundedness/relevance/coherence/fluency judge the response on its own; F1/BLEU/METEOR/ROUGE/GLEU require something to compare it against.",
  },
  'model-fine-tuning': {
    problem:
      "Some scenarios need a model to behave the same way every time — a specific output format, a consistent tone — regardless of what's asked, and neither prompting alone nor giving it more knowledge reliably guarantees that.",
    mentalModel:
      "Fine-tuning is one of several optimisation levers (alongside prompt engineering and RAG), and the one that actually changes the model's behaviour by adjusting its weights, rather than changing what context it has access to at answer time. These strategies aren't mutually exclusive — they're complementary and often combined.",
    azureMapping:
      "Fine-tuning, RAG, and prompt engineering are all covered as optimisation strategies for models deployed through Microsoft Foundry, with explicit guidance on combining them.",
    watchFor:
      "The discrimination table for fine-tuning vs. RAG is the single most exam-relevant distinction in this cluster: \"needs new/current knowledge\" is RAG; \"needs consistent behaviour/format/tone regardless of input\" is fine-tuning.",
  },
  'image-video-generation': {
    problem:
      "Generating visual content from a text description and analysing existing visual content are opposite directions of the same modality, and the catalog treats them as genuinely separate model categories, not one \"vision\" bucket.",
    mentalModel:
      "Image-generation models are generative, not a search system — the corpus is explicit that they don't retrieve images from a curated catalog, they create original graphical output from a natural-language description, trained to produce new images rather than find existing ones. Named examples in the catalog: OpenAI's gpt-image-1 series and Black Forest Labs' FLUX series, filterable by the \"text to image\" inference task. Video generation works the same way for a different medium: Sora 2 (from OpenAI, deployed like any catalog model — find it under Build > Models, then Deploy) generates video from text prompts, reference images, or by remixing existing video, across multiple resolutions and durations, described in Foundry as an all-in-one creative platform. Both are distinct from image-analysis/vision models, which go the other direction: accept images as input and produce text output describing them.",
    azureMapping:
      "Both generation categories are deployable through the Microsoft Foundry model catalog like any other model, with their own deployment considerations (video generation in particular is called out as its own deployment flow).",
    watchFor:
      "\"Create an image/video from a description\" is generation; \"tell me what's in this image\" is analysis — easy to conflate under \"vision,\" but they're different model categories with different deployment paths. The \"not a search system\" framing is worth remembering verbatim if a distractor option implies image generation retrieves from a library.",
  },
}
