import type { CourseUnit } from './schema'

export const LANGUAGE_SPEECH_UNITS: CourseUnit[] = [
  {
    id: 'language-overview',
    title: 'Turn text into useful signals',
    cluster: 'language',
    examDomain: 'Implement text analysis solutions',
    summary: 'Choose structured language analysis rather than asking a model to invent an answer.',
    minutes: 6,
    order: 300,
    prerequisites: ['foundry-projects'],
    sourceIds: [127, 12, 56, 206, 10],
    steps: [
      {
        title: 'Start with the decision, not the product',
        body: 'A support message arrives as a string, but the application needs decisions: which language queue should receive it, which places are mentioned, and whether personal details need protection. Text analysis turns that string into structured signals. Azure Language in Foundry Tools supplies purpose-built models for those jobs. The application still decides what to do with their results; a language label does not route a ticket or grant permission to publish it by itself.',
        example: 'Synthetic message: “Maya visited Bristol in June.” Language, person, place, and date are separate observations about the same text.',
      },
      {
        title: 'Analysis and generation have different contracts',
        body: 'Language detection identifies the language. Named entity recognition locates and categorizes mentions. PII detection identifies sensitive spans and can return redacted text. These operations analyze supplied material rather than compose a new reply. A generative model can attempt similar tasks, but it also introduces prompting and generation behavior. Compare accuracy, latency, cost, and output structure for your workload; neither “a larger model” nor “a specialized service” automatically guarantees the better result.',
        example: '“Find locations in this review” asks for analysis. “Write a welcoming reply to the reviewer” asks for generation.',
      },
      {
        title: 'Connect to the resource that owns the capability',
        body: 'A Foundry resource provides the Language capability; its project organizes your application assets. TextAnalyticsClient needs the resource endpoint and a credential, not the agent project path. The corpus resource endpoint ends at services.ai.azure.com; the project endpoint adds /api/projects/{project_name}. A resource key or an authorized Microsoft Entra identity can authenticate the client. DefaultAzureCredential can use your development sign-in, but signing in does not create missing access permissions. No chat-model deployment is needed for these prebuilt operations.',
        example: 'Application → TextAnalyticsClient → Language API → structured result. A language model or agent is optional, not an obligatory middle layer.',
      },
      {
        title: 'Keep the scope and the uncertainty visible',
        body: 'The corpus also mentions sentiment analysis, summarization, and key-phrase extraction as legacy capabilities for existing applications. Sentiment estimates attitude, summarization condenses content, and key phrases identify prominent terms; none replaces the three decisions above. Treat the supplied module’s lifecycle wording as source context, not a universal promise about every API version. After a call, inspect the actual result and any error. Completing a connection setup alone is not evidence that analysis ran successfully.',
      },
    ],
    lab: {
      title: 'Optional rehearsal: choose an analysis path',
      goal: 'Plan language identification without adding an unnecessary generative model.',
      context: 'This YAML is a conceptual plan only. It sends no text to Azure. The guided Azure exercise is the real hands-on activity.',
      fields: [
        {
          id: 'operation',
          label: 'Operation for an unknown-language message',
          hint: 'You need a language label, not a rewritten message.',
          options: [
            { value: 'language-detection', label: 'Detect the language' },
            { value: 'generate-reply', label: 'Generate a reply' },
            { value: 'pii-redaction', label: 'Redact personal information' },
          ],
          expected: 'language-detection',
          explanation: 'Detection produces the routing signal. Generation changes the task, while PII redaction protects content without identifying its language.',
        },
        {
          id: 'endpoint',
          label: 'Endpoint for TextAnalyticsClient',
          hint: 'The capability belongs to the Foundry resource, not an agent project.',
          options: [
            { value: 'resource-endpoint', label: 'Foundry resource endpoint' },
            { value: 'project-agent-endpoint', label: 'Project endpoint with /api/projects/…' },
          ],
          expected: 'resource-endpoint',
          explanation: 'The resource endpoint addresses Language APIs. The project endpoint is used by project and agent clients, not interchangeably by every SDK.',
        },
      ],
      template: 'kind: conceptual-plan\noperation: {{operation}}\nendpoint_kind: {{endpoint}}\ninput: "Bonjour, le train arrive."\n',
      language: 'yaml',
      expectedOutput: 'Illustrative only: a language label such as French, its ISO code, and a confidence score. No Azure request has run here.',
      takeaway: 'Choose the output you need, then the capability and endpoint that produce it.',
      azure: {
        title: 'Provision Language and inspect one real result',
        sourceId: 56,
        environment: 'portal-and-code',
        minutes: 30,
        cost: 'Requires your own Azure subscription. Language requests can incur usage charges; check your resource pricing before running. This is not a free sandbox.',
        prerequisites: [
          'Permission to create a Foundry resource and project in an isolated lab resource group, or permission to use an existing resource.',
          'The source 56 Launch exercise instructions, VS Code, Git, Azure CLI, and the Python version required there; the linked lab uses Python 3.13.',
          'Only synthetic review text; no customer records or credentials in learning notes.',
        ],
        steps: [
          {
            title: 'Open the actual exercise',
            surface: 'Browser',
            instruction: 'Open source 56, “Exercise - Analyze text”, and select Launch exercise. Keep those instructions beside this guide. Check the subscription you will use and the expected charges before creating anything.',
            expected: 'The MicrosoftLearning Analyze text exercise is open; you know which subscription and isolated resource group you intend to use.',
          },
          {
            title: 'Create the resource and project',
            surface: 'Microsoft Foundry',
            instruction: 'At ai.azure.com, use the project selector to create a project. In Advanced options, choose your subscription, an isolated lab resource group, and a supported region. Use New Foundry if the exercise requires it. Do not deploy a chat model for this exercise.',
            expected: 'If provisioning succeeds, the project home page identifies the project and its parent Foundry resource.',
            hint: 'If creation is blocked by policy or region availability, record that blocker rather than treating the rehearsal as a completed deployment.',
          },
          {
            title: 'Distinguish the two endpoints',
            surface: 'Microsoft Foundry',
            instruction: 'Compare the project endpoint on Home with the parent resource shown under Operate → Admin. For the Language client, use the resource base URL, without /api/projects/{project_name}. Keep keys in credential settings, never in notes or this tutor.',
            expected: 'You can identify which URL addresses the resource and which addresses a project, without copying a key.',
          },
          {
            title: 'Prepare the source-backed client',
            surface: 'Cloud Shell / local editor',
            instruction: 'In local VS Code, follow the linked lab to obtain MicrosoftLearning/mslearn-ai-language. Open Labfiles\\01-analyze-text\\Python\\text-analysis, create the prescribed environment, and install its requirements. Set the resource endpoint in the local configuration and sign into the correct tenant with Azure CLI.',
            expected: 'The lab environment is active, the endpoint is configured, and the signed-in identity is the one authorized for this resource.',
          },
          {
            title: 'Make a small analysis call',
            surface: 'Cloud Shell / local editor',
            instruction: 'Follow the exercise’s Get language section in text-analysis.py. Use a synthetic review containing “The train arrives tomorrow.” Run the client, inspect the language result, then change only that review to “Le train arrive demain.” and run it again.',
            expected: 'Successful calls show language results for the submitted reviews. Compare the observed labels; if a call fails, retain its non-secret error category instead.',
          },
          {
            title: 'Record the boundary you tested',
            surface: 'Browser',
            instruction: 'Record the two observed language labels and that no generative model was deployed. Save your next action as entity extraction, then stop if this is enough for today.',
            expected: 'Your note distinguishes a service result you observed from setup work or an unexecuted plan.',
          },
        ],
        success: 'You can explain the resource/project distinction and show your own observed Language response, or clearly identify the step that blocked execution. This site cannot verify your account.',
        evidencePrompt: 'What language labels did the two synthetic texts produce, and which endpoint kind did you use? Do not include keys, tenant details, or private text.',
        cleanup: 'When finished, stop the client. In Azure portal, inspect the lab resource group and delete only the resources you created for this isolated exercise. Delete the whole group only if every resource in it is yours to remove; preserve shared resources.',
      },
    },
    check: {
      question: 'A ticket router needs a language label and mentions of places, but must not generate a reply. Which starting design fits?',
      options: [
        { id: 'a', text: 'Use Language detection and named entity recognition, then route using their structured results.', explanation: 'These operations supply the required signals without making reply generation part of the workflow.' },
        { id: 'b', text: 'Deploy a chat model first; Language APIs cannot work without it.', explanation: 'Prebuilt Language capabilities belong to the Foundry resource and do not require a chat-model deployment.' },
        { id: 'c', text: 'Redact PII and use the remaining text as the detected language.', explanation: 'Redacted text is a privacy-oriented output, not a language identifier or a complete entity-indexing result.' },
      ],
      correctOptionId: 'a',
      explanation: 'The failure to avoid is conflating analysis with generation. Start with the required output contract, then choose the service that supplies it.',
    },
    recall: {
      prompt: 'Without looking back, name the three core Language operations and explain why a project endpoint is not the same as a resource endpoint.',
      answer: 'Detection identifies a language; named entity recognition categorizes mentions; PII detection identifies sensitive spans and can redact them. The resource endpoint serves the Language capability; the project endpoint additionally addresses a project used by project/agent clients.',
    },
    transfer: 'A customer says, “We need AI to understand incoming reviews.” Ask which downstream decision they need first, then distinguish extracting signals from generating a response.',
    sourceNote: 'Sources 12 and 235 label sentiment, summarization, and key-phrase features as deprecated support for existing apps. Episode 15 uses “deterministic” comparatively; this lesson does not promise immutable predictions across model versions. Source 56 is a portal-plus-Python exercise, not a browser execution sandbox.',
  },
  {
    id: 'language-detect-entities',
    title: 'Detect languages and extract entities',
    cluster: 'language',
    examDomain: 'Implement text analysis solutions',
    summary: 'Read language confidence and categorized mentions without mistaking either for translation.',
    minutes: 8,
    order: 310,
    prerequisites: ['language-overview'],
    sourceIds: [40, 93, 56, 168, 206, 10],
    steps: [
      {
        title: 'A language label is an estimate',
        body: 'Language detection compares the text with learned language patterns and returns a primary language, an ISO language code, and a confidence score between zero and one. It does not translate the message. Mixed-language input can produce the language with the largest representation but weaker confidence. Very short or unreadable text can be ambiguous; the corpus describes an unknown result with score zero. Use uncertainty to request review or more context, not to invent a confident route.',
        example: '“Good morning, merci beaucoup” mixes English and French. Do not interpret one primary-language result as proof that every word uses that language.',
      },
      {
        title: 'Keep each document identifiable',
        body: 'You can submit a collection of documents rather than merge every message into one long string. The response contains a result per document, so preserve identifiers when connecting results back to their inputs. Source 40 describes documents under 5,120 characters and collections up to 1,000 items; check the selected API’s current limits before production batching. Joining unrelated reviews can dilute language evidence, hide individual errors, and make it unclear which result belongs to which customer message.',
      },
      {
        title: 'Entities answer a different question',
        body: 'Named entity recognition asks which spans refer to things such as people, organizations, locations, dates, addresses, emails, or URLs. Each recognized mention has a category and sometimes a subcategory. That makes entities useful as structured index tags without rewriting the document. It is not a list of everything private, nor proof that a mentioned fact is true. A person and a location may both matter for search even when you are not performing a privacy workflow.',
        example: 'In “Nora joined Cedar Tours in York on 8 May,” plausible categories are Person, Organization, Location, and DateTime. Actual boundaries and categories must be inspected.',
      },
      {
        title: 'Use one client, separate operations',
        body: 'An authenticated TextAnalyticsClient exposes detect_language and recognize_entities as distinct operations. Both take a documents collection; the return values are collections too, even for one input. Inspect is_error before reading language or entity properties. The excerpt assumes the client already exists and runs only in your configured Azure lab. Keeping the operations separate lets you diagnose whether the failure is authentication, input handling, an uncertain language prediction, or the entity extraction itself.',
        code: `documents = ["Nora visited York in May."]
for result in client.detect_language(documents=documents):
    if result.is_error:
        print(result.error.code)
    else:
        language = result.primary_language
        print(language.iso6391_name, language.confidence_score)`,
      },
    ],
    lab: {
      title: 'Optional rehearsal: keep two outputs distinct',
      goal: 'Choose an uncertainty policy and the right operation for index tags.',
      context: 'This is a conceptual YAML plan. Its feedback checks your choices; it does not detect a real document’s language or call an entity API.',
      fields: [
        {
          id: 'uncertainty',
          label: 'Handling an ambiguous language result',
          hint: 'A low-confidence prediction is not a reliable routing decision.',
          options: [
            { value: 'review-or-more-context', label: 'Review or ask for more context' },
            { value: 'force-english', label: 'Treat every ambiguous result as English' },
          ],
          expected: 'review-or-more-context',
          explanation: 'Review preserves uncertainty. Forcing a language changes an unknown into an unsupported claim and can send the ticket to the wrong team.',
        },
        {
          id: 'indexer',
          label: 'Operation for people, places, and dates',
          hint: 'Indexing needs categorized mentions, not translated sentences.',
          options: [
            { value: 'named-entity-recognition', label: 'Named entity recognition' },
            { value: 'language-detection', label: 'Language detection' },
            { value: 'translation', label: 'Text translation' },
          ],
          expected: 'named-entity-recognition',
          explanation: 'Entity recognition produces the categories the index needs. Detection produces a language label; translation produces text in a target language.',
        },
      ],
      template: 'kind: conceptual-plan\nuncertain_language: {{uncertainty}}\nindex_operation: {{indexer}}\nkeep_document_ids: true\n',
      language: 'yaml',
      expectedOutput: 'Illustrative only: a language code with confidence, plus separate Person, Location, and DateTime mentions for a synthetic travel note.',
      takeaway: 'A language result and an entity list describe different properties of the same input.',
      azure: {
        title: 'Compare actual language and entity results',
        sourceId: 56,
        environment: 'portal-and-code',
        minutes: 25,
        cost: 'Language requests can be billed. Reuse your isolated lab resource if appropriate and run only a few short synthetic documents.',
        prerequisites: [
          'An authorized Foundry resource from the Language setup exercise, or permission to create one.',
          'Source 56 open at its Language detection and Extract entities sections; its local Python environment and Azure sign-in.',
          'Two short synthetic reviews kept as separate documents.',
        ],
        steps: [
          {
            title: 'Check the resource before running',
            surface: 'Microsoft Foundry',
            instruction: 'Open the project used in source 56. Compare Home and Operate → Admin to confirm the parent resource and region. If it was deleted, use the source exercise to create a new isolated project rather than pointing at someone else’s resource.',
            expected: 'The resource selected for the lab is one you are permitted to call; you have its resource endpoint, not the agent project endpoint.',
          },
          {
            title: 'Open the two operations',
            surface: 'Cloud Shell / local editor',
            instruction: 'In the source exercise’s text-analysis.py, complete Get language and Get entities using the linked instructions. Keep the document/result association visible. Include language ISO code and confidence in the output and inspect each entity’s text and category.',
            expected: 'The client has separate detection and entity-recognition calls, with a way to inspect errors rather than assume success.',
          },
          {
            title: 'Prepare a controlled pair',
            surface: 'Cloud Shell / local editor',
            instruction: 'Use separate synthetic reviews: “Nora visited York on 8 May.” and “Nora a visité Paris le 8 mai.” Keep the files UTF-8. Run the lab client against those reviews.',
            expected: 'For successful calls, each document has its own language result and entity list; the categories need not be identical between languages.',
          },
          {
            title: 'Inspect rather than infer',
            surface: 'Cloud Shell / local editor',
            instruction: 'Compare the returned language names, ISO codes, confidence scores, and entity categories. Check whether a date was detected and whether it stayed associated with the right document. Record the actual output even when it differs from your prediction.',
            expected: 'You can distinguish a primary-language prediction from an extracted span and its category.',
          },
          {
            title: 'Change only the language evidence',
            surface: 'Cloud Shell / local editor',
            instruction: 'Change only the first review to “Nora visited York on 8 May, merci beaucoup.” Run it again, leaving the second review untouched. Compare the first review’s confidence and entities with its earlier result.',
            expected: 'You have a controlled comparison. Confidence might change or remain high; neither outcome proves the service translates the mixed text.',
          },
          {
            title: 'Save one observation',
            surface: 'Browser',
            instruction: 'Write one sentence about the language result and one about the extracted entities. Note how you would handle an unknown or low-confidence language in a real routing workflow. Stop here or continue to PII protection later.',
            expected: 'Your observation names the two different outputs and a safe uncertainty policy.',
          },
        ],
        success: 'You have inspected a real per-document response and a one-input-change comparison, or recorded the non-secret execution blocker. The tutor does not verify Azure execution.',
        evidencePrompt: 'Which language code and one entity category did you observe? What changed when you added the French phrase? Share no private text or credentials.',
        cleanup: 'Stop the client and remove only your synthetic lab files if no longer needed. Delete only isolated Azure resources you created for the exercise; retain shared resources and any lab resource you intentionally need for the next exercise.',
      },
    },
    check: {
      question: 'An article is mostly English with a short French quotation. An index also needs the people and dates mentioned. What should the application do?',
      options: [
        { id: 'a', text: 'Treat the detected language as a translation of the whole article.', explanation: 'Detection returns a label and confidence, not translated content. A mixed document can retain words in several languages.' },
        { id: 'b', text: 'Inspect the primary language and confidence, and separately extract named entities for indexing.', explanation: 'The two operations supply different outputs, and confidence preserves the ambiguity introduced by mixed-language content.' },
        { id: 'c', text: 'Use PII redaction alone because every indexable entity is private.', explanation: 'The privacy boundary and the indexing boundary are not identical. Named entities include mentions useful for search that are not necessarily sensitive.' },
      ],
      correctOptionId: 'b',
      explanation: 'The scenario needs two independent signals. Confusing a language label with translation or an entity index with a privacy filter loses required information.',
    },
    recall: {
      prompt: 'Explain what a low-confidence primary language means, then name two outputs you would inspect from named entity recognition.',
      answer: 'It means the language prediction is weak or ambiguous, not that the text has been translated. For entities, inspect the recognized text span and category, with subcategory or confidence where returned; preserve which document produced them.',
    },
    transfer: 'A customer wants to search multilingual support notes by place and date. Ask how mixed-language or uncertain documents should be routed, then explain why entity indexing is a separate operation.',
    sourceNote: 'Source 40 supplies the 5,120-character and 1,000-document limits; these are module context, not a promise for every current API. Source 168 checks the indexing/PII boundary. Python SDK names use snake_case even where episode narration verbalizes them differently.',
  },
  {
    id: 'language-pii',
    title: 'Redact personal details deliberately',
    cluster: 'language',
    examDomain: 'Implement text analysis solutions',
    summary: 'Separate finding sensitive spans from deciding which text can leave a trusted boundary.',
    minutes: 7,
    order: 320,
    prerequisites: ['language-detect-entities'],
    sourceIds: [94, 93, 56, 168, 206, 10],
    steps: [
      {
        title: 'Detection does not remove anything by itself',
        body: 'A document may mention a person, an email address, or a phone number that must not appear in a public extract. PII recognition identifies sensitive spans and returns their categories and confidence. That entity list helps explain what the service found, but the original document is still the original document. Redaction creates a different text value with detected sensitive spans masked. Your application must deliberately choose that value for the next stage.',
        example: 'Synthetic input: “Please contact Maya Chen at maya@example.com.” An entity list is not a safe replacement for the sentence; it can contain the very details you intend to hide.',
      },
      {
        title: 'NER and PII overlap, but optimize different decisions',
        body: 'Named entity recognition is useful when you want to index people, organizations, places, or dates. PII recognition is useful when the decision concerns protection of personal details. Some mentions appear in both outputs, but that overlap does not make the APIs interchangeable. A travel index might keep a city for search while a publication policy removes a person’s contact details. Choose the operation from the downstream requirement rather than from the fact that both return entities.',
      },
      {
        title: 'Move the redacted output across the boundary',
        body: 'With an authenticated TextAnalyticsClient, recognize_pii_entities returns a result containing entities and redacted_text. Inspect errors before consuming either. The excerpt demonstrates selecting the redacted value, not a complete publishing policy. Do not log raw PII entities to a public console or send the original document to a later model by accident. A successful API response is evidence of processing, not a guarantee that every sensitive detail was found or that legal obligations are satisfied.',
        code: `result = client.recognize_pii_entities(
    documents=["Please contact Maya Chen at maya@example.com."]
)[0]
if result.is_error:
    raise RuntimeError(result.error.code)
redacted_for_review = result.redacted_text`,
      },
      {
        title: 'Test the smallest privacy failure',
        body: 'Use synthetic samples with a known name and contact detail, inspect which spans were detected, and compare the redacted version with the original locally. Then change one detail and repeat. This exposes missed categories, unexpected masking, and the common wiring error of publishing the wrong variable. If analysis fails, pause the publication path instead of silently passing raw text through. Decide separately how protected originals, diagnostics, and reviewer access should be retained.',
      },
    ],
    lab: {
      title: 'Optional rehearsal: choose what leaves the boundary',
      goal: 'Plan a PII-aware publication path that does not leak the original text.',
      context: 'This conceptual plan does not redact actual content. The example is synthetic and Azure execution happens only in your separate lab.',
      fields: [
        {
          id: 'analyzer',
          label: 'Analysis before publication',
          hint: 'The requirement is personal-detail protection, not search tagging.',
          options: [
            { value: 'pii-recognition', label: 'PII recognition and redaction' },
            { value: 'named-entities-only', label: 'Named entity recognition only' },
          ],
          expected: 'pii-recognition',
          explanation: 'PII recognition provides a privacy-focused result and redacted text. General entity categories alone do not implement a redaction policy.',
        },
        {
          id: 'publishValue',
          label: 'Value sent for publication review',
          hint: 'Finding PII does not mutate the original input.',
          options: [
            { value: 'inspected-redacted-text', label: 'Inspected redacted text' },
            { value: 'original-text', label: 'Original text after running detection' },
            { value: 'raw-entity-list', label: 'Detected entities with their text' },
          ],
          expected: 'inspected-redacted-text',
          explanation: 'Only the inspected redacted value follows the intended protection path. The original and raw entity list can both expose personal details.',
        },
        {
          id: 'failure',
          label: 'Behavior if analysis fails',
          hint: 'A service error must not silently turn protection off.',
          options: [
            { value: 'hold-for-review', label: 'Hold publication for review' },
            { value: 'publish-original', label: 'Publish the original to avoid delay' },
          ],
          expected: 'hold-for-review',
          explanation: 'Holding preserves the privacy boundary. Publishing raw text on failure makes the protection disappear exactly when the system is least certain.',
        },
      ],
      template: 'kind: conceptual-plan\nanalyzer: {{analyzer}}\npublication_input: {{publishValue}}\non_analysis_error: {{failure}}\n',
      language: 'yaml',
      expectedOutput: 'Synthetic illustration only: “Please contact [PERSON] at [EMAIL].” These category markers explain the idea; actual Azure redacted_text commonly uses asterisks.',
      takeaway: 'Privacy protection depends on the chosen output and failure path, not merely on making a detection call.',
      azure: {
        title: 'Inspect PII spans and redacted text',
        sourceId: 56,
        environment: 'portal-and-code',
        minutes: 25,
        cost: 'Uses billable Language requests in your subscription. Use a small synthetic sample and review resource pricing; no customer data is required.',
        prerequisites: [
          'Your authorized isolated Foundry resource and the source 56 text-analysis client environment.',
          'Access to the original exercise’s Add code to redact PII section.',
          'A fictional person and example.com email address; no real identities, payment details, or medical records.',
        ],
        steps: [
          {
            title: 'Confirm the protected destination',
            surface: 'Microsoft Foundry',
            instruction: 'Open the source 56 project and confirm its parent resource in Operate → Admin. Check that your local client still points to this resource. Identify a local, private place to inspect the synthetic outputs; do not use a public log or shared paste.',
            expected: 'You know which resource will process the sample and where you will inspect it.',
          },
          {
            title: 'Use the PII exercise section',
            surface: 'Cloud Shell / local editor',
            instruction: 'Open text-analysis.py in Labfiles\\01-analyze-text\\Python\\text-analysis. Follow source 56’s PII section, using recognize_pii_entities and redacted_text. Keep the original and redacted values distinguishable and stop on document errors.',
            expected: 'The code has an explicit PII operation and an explicit redacted output, rather than assuming the input string changes.',
          },
          {
            title: 'Prepare a safe sample',
            surface: 'Cloud Shell / local editor',
            instruction: 'Use the fictional review “Maya Chen enjoyed the museum. Please reply to maya@example.com.” Save it as a synthetic review in the exercise’s reviews folder and run the authenticated lab client.',
            expected: 'A successful call returns the detected entities and redacted text for this sample; a failure remains visible instead of triggering publication.',
          },
          {
            title: 'Inspect the actual masking',
            surface: 'Cloud Shell / local editor',
            instruction: 'Compare detected span text, categories, and confidence with redacted_text. Check whether the name and email are masked, and whether useful non-sensitive context remains. Do not declare all PII removed merely because the call succeeded.',
            expected: 'You have an observed account of what was masked and what remained, including unexpected results.',
          },
          {
            title: 'Change one personal-detail cue',
            surface: 'Cloud Shell / local editor',
            instruction: 'Remove only the email sentence from the review, leaving the person’s name and museum sentence unchanged. Run again. Compare the entity set and redacted result; verify that your review path still selects redacted_text, not the original.',
            expected: 'The two runs let you investigate the email cue independently from the name and the publication-variable choice.',
          },
          {
            title: 'Record a safe observation',
            surface: 'Browser',
            instruction: 'Record only detected categories and whether masking matched your expectation. Note one additional review rule you would need before publishing real testimonials. You can stop after this comparison.',
            expected: 'Your evidence describes the privacy mechanism without retaining any real personal information.',
          },
        ],
        success: 'You can distinguish detected entities, the original text, and observed redacted output, and explain which one crosses the publication boundary. Execution is self-reported, not verified by this app.',
        evidencePrompt: 'Which categories were detected, what changed after removing the email sentence, and which value would you send for review? Include no keys or private records.',
        cleanup: 'Stop the client and remove synthetic outputs you no longer need. Delete only the isolated Azure resources created for this lab when finished; preserve shared resources. Do not delete shared logs or records as part of this exercise.',
      },
    },
    check: {
      question: 'A service identifies PII in a testimonial, but the publishing code still sends the original input string to the website. What is the missing fix?',
      options: [
        { id: 'a', text: 'Run language detection before publishing the original.', explanation: 'The language does not determine whether personal details remain in the string being published.' },
        { id: 'b', text: 'Publish the entity list instead of the testimonial.', explanation: 'Entity text can itself contain the personal details. Replacing prose with a raw PII list does not protect them.' },
        { id: 'c', text: 'Route inspected redacted_text to publication review and hold the path when analysis fails.', explanation: 'This changes the actual data crossing the boundary and avoids leaking the original on an error.' },
      ],
      correctOptionId: 'c',
      explanation: 'The causal failure is output wiring, not lack of another model call: detection ran, but the application selected the unprotected value.',
    },
    recall: {
      prompt: 'Why is a list of detected PII not itself safe to publish, and which result value supports the redaction workflow?',
      answer: 'The list can contain the original sensitive span text. redacted_text is the masked version to inspect and route onward; the original remains unchanged, and failed or incomplete detection needs a defined review policy.',
    },
    transfer: 'A customer wants to publish support testimonials automatically. Ask where raw text is stored, which PII categories matter, who reviews uncertain results, and what happens when the analysis service fails.',
  },
  {
    id: 'language-translation',
    title: 'Translate meaning or change script',
    cluster: 'language',
    examDomain: 'Implement text analysis solutions',
    summary: 'Distinguish detection, translation, and transliteration, then choose source and target parameters.',
    minutes: 8,
    order: 330,
    prerequisites: ['language-detect-entities'],
    sourceIds: [81, 139, 229, 227, 166, 218, 228],
    steps: [
      {
        title: 'Preserve meaning across a language boundary',
        body: 'Translation converts a message into another language while trying to preserve its meaning, including expressions that do not map word for word. Language detection only identifies the source language. Azure Translator in Foundry Tools provides a specialized translation API; multilingual generative models can also translate, but their supported languages and operational behavior differ. Choose using language coverage, terminology needs, quality checks, and workload constraints rather than assuming any chat model provides a complete translation service.',
        example: 'Detecting that “Le train arrive” is French does not supply an English sentence. Translating it should convey that the train is arriving.',
      },
      {
        title: 'Separate the source from the targets',
        body: 'TextTranslationClient connects to a Translator endpoint with an appropriate credential. The translate operation takes text items and one or more target language codes in to_language. from_language is optional: supply it when known, or omit it to allow detection. Inspect the returned target-language entries rather than treating the response as one undifferentiated string. This excerpt assumes an authenticated client and the InputTextItem import from the source exercise; it is not executable inside this site.',
        code: `result = client.translate(
    body=[InputTextItem(text="The train arrives at noon.")],
    from_language="en",
    to_language=["fr", "ja"],
)
for translation in result[0].translations:
    print(translation.to, translation.text)`,
      },
      {
        title: 'A different script is not a different language',
        body: 'Transliteration changes the writing system used to represent words; it does not replace them with words of another language. Translator’s transliterate operation needs the language and supported source and target scripts, such as Cyrillic to Latin. The reader may find the new characters easier to pronounce while still not understanding the meaning. This distinction matters when rendering names, travel information, or a pronunciation aid: readable letters are not evidence of a semantic translation.',
        example: 'Russian “спасибо” rendered as “spasibo” changes script. “Thank you” changes language and conveys meaning in English.',
      },
      {
        title: 'Discover support instead of hard-coding assumptions',
        body: 'Ask the service for supported languages and check which operations and script pairs each supports. The corpus also describes document translation that preserves document structure, synchronous or asynchronous processing, and custom translation models for domain terminology. Those are distinct requirements from translating a short input string. In Foundry, the text and document translation playgrounds help you explore those boundaries. For production, validate important terminology with knowledgeable reviewers; an API response alone does not establish translation quality.',
      },
    ],
    lab: {
      title: 'Optional rehearsal: choose translation parameters',
      goal: 'Plan a French translation of a known English sentence, not a Latin-script rendering.',
      context: 'This YAML records intent only. It is not a Translator SDK payload and makes no Azure call.',
      fields: [
        {
          id: 'operation',
          label: 'Operation when meaning must become French',
          hint: 'Changing the alphabet would leave the language unchanged.',
          options: [
            { value: 'translate', label: 'Translate' },
            { value: 'transliterate', label: 'Transliterate' },
            { value: 'detect', label: 'Detect language' },
          ],
          expected: 'translate',
          explanation: 'Translation changes language while preserving meaning. Transliteration changes script; detection only identifies the language.',
        },
        {
          id: 'target',
          label: 'Target language code',
          hint: 'The requested destination is French, not the English source.',
          options: [
            { value: 'fr', label: 'fr — French' },
            { value: 'en', label: 'en — English' },
            { value: 'Latn', label: 'Latn — Latin script' },
          ],
          expected: 'fr',
          explanation: 'fr is a target language code. en identifies the source here, while Latn is a script identifier for a different operation.',
        },
      ],
      template: 'kind: conceptual-plan\noperation: {{operation}}\nsource_language: en\ntarget_language: {{target}}\ntext: "The museum opens tomorrow."\n',
      language: 'yaml',
      expectedOutput: 'Illustrative only: French text conveying that the museum opens tomorrow. This plan has not contacted Azure or validated a translation.',
      takeaway: 'Choose meaning versus script first, then use the right language or script parameters.',
      azure: {
        title: 'Compare translations in the Foundry playground',
        sourceId: 81,
        environment: 'portal-and-code',
        minutes: 30,
        cost: 'Translator usage and any optional LLM-backed translation can incur separate charges. Use a few short synthetic sentences and check pricing before selecting a model.',
        prerequisites: [
          'An Azure subscription and permission to use a Foundry project and its Translator capability.',
          'Source 81 Launch exercise; for its code section, the prescribed local Python, VS Code, Git, and Azure CLI setup.',
          'A supported target language and synthetic text without personal details.',
        ],
        steps: [
          {
            title: 'Open the translation exercise',
            surface: 'Browser',
            instruction: 'Open source 81 and select Launch exercise. Follow its project-creation section if needed, choosing an isolated resource group. Use the current exercise labels if your portal differs from the recorded episode.',
            expected: 'You have the Translate text and speech exercise and an authorized Foundry project, or a clearly recorded provisioning blocker.',
          },
          {
            title: 'Find the text translator',
            surface: 'Microsoft Foundry',
            instruction: 'In your project, open Build → Models → AI services and select Azure Translator - Text translation, as shown in the exercise. The equivalent entry may be reached through Explore playgrounds. Select the ordinary translation capability before comparing any optional LLM mode.',
            expected: 'The text translation playground shows a source-text area and target-language selection.',
          },
          {
            title: 'Inspect a baseline translation',
            surface: 'Microsoft Foundry',
            instruction: 'Enter “The museum opens tomorrow.” Set French as the target and let the service detect the source if that option is available. Select Translate. Read the returned text and any detected-language information.',
            expected: 'If the request succeeds, you can inspect a French output. A displayed output still needs meaning and terminology review.',
          },
          {
            title: 'Change only the target',
            surface: 'Microsoft Foundry',
            instruction: 'Keep the source sentence unchanged and select Japanese as the target, if supported. Translate again. Compare the outputs and identify which setting changed; do not interpret a script difference alone as proof of correctness.',
            expected: 'You have two observed outputs from the same input with different target languages.',
          },
          {
            title: 'Inspect the API boundary',
            surface: 'Microsoft Foundry',
            instruction: 'Open the playground’s Code tab. Locate the Translator endpoint and language parameters without copying its key. The source exercise uses a cognitiveservices.azure.com resource endpoint; do not substitute the project’s /api/projects/ URL.',
            expected: 'You can connect the visible target-language choice to the request configuration.',
          },
          {
            title: 'Run the source-backed text client',
            surface: 'Cloud Shell / local editor',
            instruction: 'Follow the text portion of source 81 in Labfiles\\07-translation\\Python\\translators. Configure its endpoint, environment, and Azure sign-in, then run translate-text.py. Choose French from the supported languages and submit the same synthetic sentence. Inspect detected source and target entries.',
            expected: 'A successful local call exposes the same source/target distinction as the playground; a failed call remains a blocker, not a simulated result.',
            hint: 'For a transliteration extension, use source 227’s supported-script example with its matching SDK. Do not assume the text playground has a transliteration button.',
          },
          {
            title: 'Record meaning versus script',
            surface: 'Browser',
            instruction: 'Record your selected targets and one observed phrase. Explain why rendering “спасибо” as “spasibo” would be a different operation. Leave speech translation for its own exercise.',
            expected: 'Your evidence separates translation, detection, and transliteration instead of grouping them as one feature.',
          },
        ],
        success: 'You can explain a real target-language change and the corresponding API parameters, or identify a concrete execution blocker. The app cannot verify your subscription or translation quality.',
        evidencePrompt: 'Which target did you change, what output did you observe, and how would a transliteration request differ? Share only synthetic phrases, never credentials.',
        cleanup: 'Stop the local client. Delete optional deployments and isolated resources you created only for this exercise when finished. Preserve shared resources; remove the entire lab resource group only after checking all its contents are disposable.',
      },
    },
    check: {
      question: 'A travel app must show a Russian station name in Latin characters without replacing it with an English meaning. Which operation fits?',
      options: [
        { id: 'a', text: 'Translate into English.', explanation: 'Translation changes the language and meaning representation; the requirement is to keep the name’s language and change its script.' },
        { id: 'b', text: 'Transliterate using a supported Cyrillic-to-Latin script pair.', explanation: 'Transliteration changes the writing system while retaining the source-language word rather than translating its meaning.' },
        { id: 'c', text: 'Detect the source language and display its ISO code.', explanation: 'Detection can identify Russian, but it does not produce the Latin-character name the traveler needs.' },
      ],
      correctOptionId: 'b',
      explanation: 'The load-bearing detail is “without replacing it with an English meaning.” That selects script conversion, not language translation.',
    },
    recall: {
      prompt: 'Explain detection, translation, and transliteration in one sentence each, then say what from_language and to_language control.',
      answer: 'Detection identifies a language. Translation expresses meaning in another language. Transliteration represents source-language words in another script. from_language identifies a known source and can be omitted for detection; to_language lists the requested target languages.',
    },
    transfer: 'A customer needs multilingual manuals and readable names. Ask separately about preserving document layout, translating specialist terminology, and changing scripts for pronunciation; these imply different capabilities.',
    sourceNote: 'Source 227 says “over 90” languages; Episode 21 observes 137. Discover current support rather than treating either count as fixed. Training text names get_supported_language, while the linked exercise uses get_supported_languages; follow the installed SDK. Translator’s resource endpoint differs from the project endpoint.',
  },
  {
    id: 'language-mcp',
    title: 'Give an agent Language tools',
    cluster: 'language',
    examDomain: 'Implement text analysis solutions',
    summary: 'Trace tool discovery, connection authentication, approvals, and actual Language results.',
    minutes: 9,
    order: 340,
    prerequisites: ['language-pii', 'agents-mcp', 'model-deployment'],
    sourceIds: [135, 235, 24, 70, 150, 200, 45],
    steps: [
      {
        title: 'Expose capabilities instead of hard-coding routing',
        body: 'An agent can reason about a request while Azure Language performs specialized text analysis. MCP connects those responsibilities: the host runs the agent, an MCP client manages the connection, and the server exposes tool descriptions. The model uses those descriptions and its instructions to choose an available tool. The Language MCP server supplies analysis capabilities; it does not train the model or independently decide the whole task. A multi-part request can lead to several tool calls.',
        example: '“Identify the language and list the places” needs language detection and entity extraction. The agent combines the results after those operations, rather than calling a nonexistent all-purpose analysis function.',
      },
      {
        title: 'Separate the two authentication boundaries',
        body: 'In the corpus portal workflow, the tool connection uses the Foundry resource name and key-based authentication with Ocp-Apim-Subscription-Key. Separately, a client application authenticates to the Foundry project to invoke the agent. Connecting the user to the project does not automatically authorize every remote tool. Use the credential fields, not an instruction or prompt, for secrets. Limit exposed tools to those needed and follow your organization’s permitted authentication options rather than disabling an access policy.',
      },
      {
        title: 'A plausible answer is not proof of a tool call',
        body: 'An unconstrained model may answer a PII or entity question using its own capabilities. Give the agent instructions to use the connected Language tool for those tasks, then inspect the playground Logs for actual tool names, arguments, and results. Tool approval is separate from authentication: an authorized request can still wait for approval. Episode 16 demonstrates a client appearing stuck because approval was not handled. Diagnose that state before changing endpoints or assuming the Language service failed.',
      },
      {
        title: 'Invoke the configured agent, not just its model',
        body: 'The source client creates AIProjectClient with the project endpoint and DefaultAzureCredential, obtains get_openai_client(), then uses the Responses API. extra_body contains an agent_reference with the saved agent’s case-sensitive name and type. That references the agent’s instructions and tools; passing only a model name would not express the same configuration. The excerpt assumes project_client already exists. In a real client, also handle approval requests and inspect tool results rather than relying only on output_text.',
        code: `openai_client = project_client.get_openai_client()
response = openai_client.responses.create(
    input=[{"role": "user", "content": "Find places in: Nora visited York."}],
    extra_body={
        "agent_reference": {"name": agent_name, "type": "agent_reference"}
    },
)
print(response.output_text)`,
      },
    ],
    lab: {
      title: 'Optional rehearsal: trace the tool boundary',
      goal: 'Plan how to prove that an agent used Language rather than guessed.',
      context: 'This YAML is an architectural rehearsal, not an MCP connection or a runnable agent definition. No credentials belong in it.',
      fields: [
        {
          id: 'selection',
          label: 'Who selects the Language tool?',
          hint: 'The server advertises capabilities; the agent reasons about the request.',
          options: [
            { value: 'agent-from-tool-descriptions', label: 'Agent, using tool descriptions and instructions' },
            { value: 'mcp-server-routes-every-prompt', label: 'MCP server, independently routing the user prompt' },
          ],
          expected: 'agent-from-tool-descriptions',
          explanation: 'The agent chooses a tool from its catalog. The MCP server exposes and executes the chosen capability rather than replacing the agent’s task selection.',
        },
        {
          id: 'evidence',
          label: 'Evidence of actual analysis',
          hint: 'An answer can look correct even when no tool ran.',
          options: [
            { value: 'approved-call-and-tool-result', label: 'Approved tool call and returned result in Logs' },
            { value: 'confident-final-answer', label: 'A confident final answer only' },
          ],
          expected: 'approved-call-and-tool-result',
          explanation: 'A tool trace establishes which capability executed. The final wording alone cannot distinguish tool output from the model’s own analysis.',
        },
      ],
      template: 'kind: conceptual-plan\ntool_selection: {{selection}}\nexecution_evidence: {{evidence}}\nsecrets_in_prompts: false\n',
      language: 'yaml',
      expectedOutput: 'Illustrative trace only: user request → selected Language tool → approval → tool result → agent response. No MCP server is connected here.',
      takeaway: 'Configuration, approval, and execution evidence are separate requirements.',
      azure: {
        title: 'Connect Language MCP and inspect its calls',
        sourceId: 70,
        environment: 'portal-and-code',
        minutes: 35,
        cost: 'Agent/model tokens and Language tool calls may both be billed. Check deployment availability, quota, and pricing; use a short synthetic prompt and an isolated lab project.',
        prerequisites: [
          'Source 70 Launch exercise and permission to configure agents and tool connections in Foundry.',
          'A compatible deployed reasoning model in a supported region; the corpus uses gpt-4.1, while the linked lab may use a newer model.',
          'An approved credential method for Language MCP, plus local tooling only for the exercise’s client section.',
        ],
        steps: [
          {
            title: 'Create an isolated text-analysis agent',
            surface: 'Microsoft Foundry',
            instruction: 'Follow source 70’s project setup, then open Build → Agents and create a text-analysis agent. Select a deployed model supported in your region. Give it concise instructions to analyze supplied synthetic text, then save its exact name.',
            expected: 'If creation succeeds, the agent playground shows the saved model and instructions; this alone does not demonstrate a Language call.',
          },
          {
            title: 'Connect the Language tool',
            surface: 'Microsoft Foundry',
            instruction: 'Open Tools → Tools → Connect a tool, then choose Azure Language in Foundry Tools from the Catalog. Enter the Foundry resource name, not the project name. In the corpus key-based workflow, put the resource key only in Ocp-Apim-Subscription-Key. Follow the linked exercise’s permitted alternative if keys are disabled.',
            expected: 'The connection details identify the Language MCP server and an allowed authentication method without placing a secret in agent instructions.',
          },
          {
            title: 'Attach and constrain the connection',
            surface: 'Microsoft Foundry',
            instruction: 'Select Use in an agent and choose your agent. Verify the tool appears in its tool list. Update instructions to use Azure Language for detection, named entities, and PII redaction. Save. Keep approval review enabled for the first call and expose only the tools needed.',
            expected: 'The agent has the actual connection attached, not merely a text instruction naming a service it cannot call.',
          },
          {
            title: 'Test a synthetic privacy request',
            surface: 'Microsoft Foundry',
            instruction: 'Ask: “Use the Language tool to identify PII and return a redacted version: Maya Chen visited York. Contact maya@example.com.” Review and approve the relevant call when prompted. Inspect Logs and compare the tool result with the final answer.',
            expected: 'If the tool executes, Logs show its name, input, and result. An approval request or error is a different state from completed analysis.',
          },
          {
            title: 'Change the task, not the text',
            surface: 'Microsoft Foundry',
            instruction: 'Keep the synthetic sentence but now ask for its language and named entities. Inspect the calls selected and their results. Do not ask for sentiment here: that legacy capability is not required for this exercise’s decision boundary.',
            expected: 'You can compare how a changed task affects tool selection while keeping the analyzed content controlled.',
          },
          {
            title: 'Invoke the same agent from the lab client',
            surface: 'Cloud Shell / local editor',
            instruction: 'Follow source 70’s client section in Labfiles\\02-language-agent\\Python\\text-agent. Use its environment, project endpoint, Azure sign-in, and exact agent name. Run text-agent.py with the synthetic entity request. Handle pending approvals; if the lab uses auto-approval, scope it to these approved lab tools and restore review afterward.',
            expected: 'The client either returns a tool-backed response or exposes a specific approval, access, or configuration blocker. The endpoint includes the project path for this client.',
          },
          {
            title: 'Record only non-secret evidence',
            surface: 'Browser',
            instruction: 'Record one tool name, its task, and whether approval was needed. Keep only a synthetic result excerpt, not a full response dump containing credentials or private inputs. Save the next action and stop.',
            expected: 'Your evidence explains why you know a tool ran, without relying on a confident answer alone.',
          },
        ],
        success: 'You can trace a real Language MCP invocation from the agent to a tool result, or name the blocked boundary. This app cannot inspect or approve your Azure connection.',
        evidencePrompt: 'Which tool executed, what output did you inspect, and did the second request change tool selection? Exclude keys, full endpoints, and private text.',
        cleanup: 'Restore any lab-only auto-approval setting, stop the client, and remove this lab’s agent, tool connection, and unneeded model deployment. Delete the resource/group only if isolated and entirely yours; preserve shared connections and resources.',
      },
    },
    check: {
      question: 'The playground asks you to approve a Language tool call, but a new client returns no useful answer. Its project authentication already works. What should you inspect first?',
      options: [
        { id: 'a', text: 'Whether the client handles the pending MCP approval request.', explanation: 'Approval is a separate gate. The episode demonstrates this exact class of failure even when the project connection is valid.' },
        { id: 'b', text: 'Whether the user prompt includes the Foundry resource key.', explanation: 'A key belongs in the connection’s credential field, never in the user prompt. Adding it would leak a secret rather than correctly handle approval.' },
        { id: 'c', text: 'Whether a larger model can perform the task without tools.', explanation: 'That bypasses the required tool-backed analysis and does not repair the blocked approval path.' },
      ],
      correctOptionId: 'a',
      explanation: 'The symptom points to the approval boundary, not model size. Check the response state and tool trace before changing a working connection.',
    },
    recall: {
      prompt: 'Reconstruct the path from a user request to a Language MCP result. Where do tool selection, credentials, and approval belong?',
      answer: 'The agent selects from tool descriptions and instructions; the MCP client calls the server; the server invokes Language and returns a result. Connection credentials authorize access, approval permits the selected action, and the agent then presents the result. Logs establish what actually ran.',
    },
    transfer: 'A customer wants an agent to redact reviews and claims the prompt is enough. Ask how tool use will be verified, who approves it, and which identity or credential authorizes each hop.',
    sourceNote: 'The corpus marks Language MCP as preview. Source 24’s sentiment example incorrectly names detect_language_from_text as a sentiment tool; it is not one. Sources 12/235 describe sentiment as legacy support. The linked lab now uses a newer model than the corpus gpt-4.1 example; preserve the tool-selection mechanism, not a fixed model name.',
  },
  {
    id: 'speech-overview',
    title: 'Separate listening from speaking',
    cluster: 'speech',
    examDomain: 'Implement text analysis solutions',
    summary: 'Place recognition, synthesis, translation, and conversation in the right part of an application.',
    minutes: 6,
    order: 400,
    prerequisites: ['foundry-projects'],
    sourceIds: [115, 13, 65, 192, 35],
    steps: [
      {
        title: 'Audio and text are different representations',
        body: 'A microphone captures a changing audio signal, not words already stored as text. Speech recognition estimates the words in that signal and returns a transcript. Speech synthesis moves in the opposite direction: supplied text becomes an audio stream that a speaker or file can receive. Neither direction, by itself, decides what the application should do next. Keep that application decision separate from the conversion so that you can inspect and troubleshoot each part.',
        example: 'Voicemail audio → recognition → transcript → application decision. Reply text → synthesis → audio file. The decision in the middle is not performed merely by transcribing.',
      },
      {
        title: 'Match the boundary to the capability',
        body: 'Azure Speech in Foundry Tools includes speech-to-text, text-to-speech, speech translation, and Voice Live. Recognition preserves spoken words as text; translation crosses a language boundary; Voice Live manages a real-time conversational experience. A pair of separate recognition and synthesis calls can support a voice interface, but does not automatically handle turn-taking or interruption. Generative audio models offer another implementation route, covered later; the existence of audio input does not make every task a chat-model problem.',
      },
      {
        title: 'Configure the service and the device separately',
        body: 'SpeechConfig holds the connection to the Speech capability, including the resource endpoint or region and an allowed credential. AudioConfig chooses input such as a microphone or audio file. For synthesized output, the Python SDK uses AudioOutputConfig to select a speaker or file. These choices answer different questions: where is the service, and where do the sound bytes come from or go? The prebuilt Speech capability does not require you to deploy a generative audio model.',
        example: 'Changing a file path changes the audio source. Changing a resource endpoint changes the service destination. Neither action fixes the other kind of configuration error.',
      },
      {
        title: 'Distinguish cloud processing from local hardware',
        body: 'Your browser or local process owns microphone and playback permissions; Azure does not gain access to a laptop microphone just because a resource exists. A cloud-hosted shell also does not automatically share your local audio devices. Use a supported file when live capture is unavailable. Check actual output and operation status before claiming success, and use synthetic recordings or speech you have permission to process. Starting a session, creating a client, and obtaining useful audio are different milestones.',
      },
    ],
    lab: {
      title: 'Optional rehearsal: draw the audio boundary',
      goal: 'Assign conversion and device configuration to the right component.',
      context: 'This conceptual YAML does not record your microphone or generate sound. Real audio processing happens in the Azure exercise.',
      fields: [
        {
          id: 'direction',
          label: 'Operation for reading a prepared greeting aloud',
          hint: 'The input already consists of words as text.',
          options: [
            { value: 'text-to-speech', label: 'Text-to-speech synthesis' },
            { value: 'speech-to-text', label: 'Speech-to-text recognition' },
          ],
          expected: 'text-to-speech',
          explanation: 'Synthesis converts existing text into sound. Recognition needs sound as input and produces text instead.',
        },
        {
          id: 'device',
          label: 'Configuration for a saved spoken greeting',
          hint: 'The service connection and the output destination are different concerns.',
          options: [
            { value: 'audio-output-file', label: 'AudioOutputConfig targeting a file' },
            { value: 'resource-group-name', label: 'Resource group name only' },
            { value: 'microphone-input', label: 'AudioConfig targeting the microphone' },
          ],
          expected: 'audio-output-file',
          explanation: 'An output configuration directs synthesized bytes to a file. The resource group organizes Azure resources; microphone configuration selects an input.',
        },
      ],
      template: 'kind: conceptual-plan\noperation: {{direction}}\naudio_destination: {{device}}\ntext: "The museum opens at nine."\n',
      language: 'yaml',
      expectedOutput: 'Illustrative only: synthesized audio of the prepared greeting, with a separate operation status. This site has not recorded, synthesized, or played it.',
      takeaway: 'Choose the conversion direction, then configure its service and audio endpoints independently.',
      azure: {
        title: 'Hear one controlled Speech result',
        sourceId: 65,
        environment: 'foundry',
        minutes: 20,
        cost: 'Requires an Azure subscription. Audio content creation is a portal tool, but its Speech usage can be billed. Preview only a few short sentences.',
        prerequisites: [
          'Permission to create or use an isolated Foundry project with Speech available in its region.',
          'Source 65 Launch exercise for the original setup; this portal prelude uses the documented Speech playground.',
          'Browser audio playback and headphones or speakers. No microphone permission is needed for text-to-speech.',
        ],
        steps: [
          {
            title: 'Set up only the lab resources',
            surface: 'Microsoft Foundry',
            instruction: 'Open source 65’s Launch exercise and follow its Foundry project setup. Select your subscription, an isolated resource group, and a supported region. Do not deploy a generative model for the prebuilt Speech capability.',
            expected: 'If setup succeeds, you can identify your project and parent resource. Resource creation is not yet evidence of speech processing.',
          },
          {
            title: 'Find the Speech playground',
            surface: 'Microsoft Foundry',
            instruction: 'In the portal experience described by the Audio content creation documentation, open Playgrounds → Speech playground → Try the Speech playground, then Text to speech → Audio content creation. If those labels are absent, consult the current documentation linked in this unit’s source note rather than inventing an equivalent button.',
            expected: 'The audio content creation editor is visible for your authorized project, or you have recorded a portal/feature-availability blocker.',
          },
          {
            title: 'Prepare a synthetic greeting',
            surface: 'Microsoft Foundry',
            instruction: 'Select New → Text file. Enter “The museum opens at nine.” Choose an available English voice, save the tuning file, and check your speaker volume. Do not grant microphone access merely to synthesize this text.',
            expected: 'A short text input and a supported voice are selected; no private recording or identity data is needed.',
          },
          {
            title: 'Listen to the actual result',
            surface: 'Microsoft Foundry',
            instruction: 'Select the text and use Play to request a preview. Listen for the words you entered. If nothing plays, inspect the operation message and browser playback settings before assuming the service returned silence.',
            expected: 'A successful preview produces audible speech; a visible service error or blocked playback is recorded as such.',
          },
          {
            title: 'Change just one word',
            surface: 'Microsoft Foundry',
            instruction: 'Change “nine” to “ten,” keeping the voice and other settings unchanged. Stop the old preview, then select Play again to regenerate. Compare the spoken word with the edited text.',
            expected: 'The new preview, if successful, reflects the changed input rather than replaying an old result.',
          },
          {
            title: 'Save the conversion you observed',
            surface: 'Browser',
            instruction: 'Record the input type, output type, and the word you changed. Stop playback. The original source 65 exercise continues with a Python voicemail client; you can tackle that in the recognition and synthesis units.',
            expected: 'You can explain the observed text-to-audio conversion without claiming that a microphone or reasoning model was involved.',
          },
        ],
        success: 'You have heard an actual Speech preview and can explain the conversion direction, or identified the real availability/playback blocker. This app cannot verify the portal result.',
        evidencePrompt: 'What did you enter, what did you hear, and did this task require a microphone or a deployed chat model? Share no resource keys or private audio.',
        cleanup: 'Stop previews and close the audio editor. Remove your tuning files when no longer needed. In Azure portal, delete only isolated resources created for this lab; preserve shared resources and inspect all contents before deleting an entire group.',
      },
    },
    check: {
      question: 'A voicemail assistant transcribes a recording and later reads a prepared reply aloud. Which description keeps the responsibilities separate?',
      options: [
        { id: 'a', text: 'Recognition turns audio into text; application logic chooses the reply; synthesis turns reply text into audio.', explanation: 'Each stage has a distinct input, output, and responsibility, which makes the system easier to test and troubleshoot.' },
        { id: 'b', text: 'Recognition automatically chooses the correct business response and speaks it.', explanation: 'A transcript is not a business decision or synthesized reply. Those require additional application behavior.' },
        { id: 'c', text: 'Creating a Speech resource automatically records the user’s microphone.', explanation: 'Audio capture remains the responsibility of the browser or client process and its device permissions.' },
      ],
      correctOptionId: 'a',
      explanation: 'Do not collapse conversion, decision-making, and hardware access into one invisible step.',
    },
    recall: {
      prompt: 'Describe recognition and synthesis as input → output, then distinguish SpeechConfig from audio device configuration.',
      answer: 'Recognition is audio → text; synthesis is text → audio. SpeechConfig addresses and authenticates the service. AudioConfig selects recognition input; AudioOutputConfig selects synthesized output such as a speaker or file.',
    },
    transfer: 'A customer says, “Make our app voice-enabled.” Ask whether they need recorded transcription, spoken output, translation, or an interruptible conversation, and where the microphone actually runs.',
    sourceNote: 'Source 13 accidentally says “Language APIs” inside a Speech setup section. Its subject and SDK are Speech. It also notes endpoint support from Speech SDK 1.48.2; older code uses region configuration. The portal prelude supplements source 65 using https://learn.microsoft.com/azure/ai-services/speech-service/how-to-audio-content-creation; it does not replace the original SDK exercise.',
  },
  {
    id: 'speech-to-text',
    title: 'Transcribe and inspect the result',
    cluster: 'speech',
    examDomain: 'Implement text analysis solutions',
    summary: 'Connect SpeechConfig, AudioConfig, and SpeechRecognizer, then distinguish success from no match or cancellation.',
    minutes: 8,
    order: 410,
    prerequisites: ['speech-overview'],
    sourceIds: [252, 13, 65, 174, 192, 35],
    steps: [
      {
        title: 'Recognition estimates words from a signal',
        body: 'A recognizer needs audio that actually contains usable speech. Noise, silence, the wrong input device, or a mismatched recognition language can make the task harder even when your Azure connection is correct. Choose a short, known recording for the first test so you can compare the transcript with what was spoken. A transcript is not a translation, a summary, or a response to the speaker; those are separate operations after recognition.',
      },
      {
        title: 'Compose service, input, and recognizer',
        body: 'SpeechConfig holds the authorized resource connection and recognition settings such as speech_recognition_language. AudioConfig chooses a source: the default microphone or a file. SpeechRecognizer combines those configurations and calls the service. In the excerpt, speech_config is already authenticated and speech_sdk is imported by the source exercise. The file must exist on the machine running the client. Setting a local filename in a cloud process does not upload that file from your laptop.',
        code: `speech_config.speech_recognition_language = "en-US"
audio_config = speech_sdk.audio.AudioConfig(filename="sample.wav")
recognizer = speech_sdk.SpeechRecognizer(
    speech_config=speech_config, audio_config=audio_config
)
result = recognizer.recognize_once_async().get()
if result.reason == speech_sdk.ResultReason.RecognizedSpeech:
    print(result.text)
else:
    print(result.reason)`,
      },
      {
        title: 'Read the reason before trusting the text',
        body: 'The recognition result includes text and metadata, such as duration, offset, result identifier, and the result reason. RecognizedSpeech means the recognizer produced a transcription. NoMatch means it did not recognize speech in the processed input; it does not prove authentication is broken. Canceled means the operation was canceled or failed and needs its cancellation details inspected. Treat these as different diagnostic branches, not three spellings for an empty successful transcript.',
        example: 'NoMatch on a silent test file calls for checking the audio. A cancellation carrying an authentication error calls for checking credentials and resource configuration.',
      },
      {
        title: 'One utterance is not an entire meeting',
        body: 'recognize_once_async recognizes one utterance, which is useful for a short command or the small voicemail samples in the exercise. Do not assume one call transcribes every turn in a long recording. A longer recording or ongoing conversation needs an appropriate continuous or batch workflow selected from the service documentation. First prove the smallest path with a supported file, a known spoken sentence, and an explicit language; only then expand the duration or capture method.',
      },
    ],
    lab: {
      title: 'Optional rehearsal: choose the recognition input',
      goal: 'Plan transcription of a short file and a reason-aware result check.',
      context: 'This plan does not accept uploaded audio or produce a transcript. The synthetic result below illustrates a possible outcome only.',
      fields: [
        {
          id: 'source',
          label: 'Input for a saved voicemail file',
          hint: 'Select the recording, not whatever happens to reach the microphone.',
          options: [
            { value: 'audio-config-file', label: 'AudioConfig with the file path' },
            { value: 'default-microphone', label: 'Default microphone' },
            { value: 'speech-config-voice', label: 'Synthesis voice in SpeechConfig' },
          ],
          expected: 'audio-config-file',
          explanation: 'AudioConfig identifies the file to transcribe. A microphone supplies different audio, and the synthesis voice concerns the opposite conversion direction.',
        },
        {
          id: 'accept',
          label: 'Condition before using the transcript',
          hint: 'An empty string is not an adequate description of an operation’s outcome.',
          options: [
            { value: 'recognized-speech', label: 'Result reason is RecognizedSpeech' },
            { value: 'any-result-object', label: 'Any result object was returned' },
            { value: 'no-match', label: 'Result reason is NoMatch' },
          ],
          expected: 'recognized-speech',
          explanation: 'RecognizedSpeech establishes that recognition produced text. NoMatch and Canceled need their own handling instead of being treated as successful transcriptions.',
        },
      ],
      template: 'kind: conceptual-plan\ninput: {{source}}\nrecognition_locale: en-US\naccept_transcript_when: {{accept}}\nutterance_scope: single\n',
      language: 'yaml',
      expectedOutput: 'Synthetic illustration: reason = RecognizedSpeech; text = “The museum opens at nine.” No real recording has been processed by this rehearsal.',
      takeaway: 'Configuration chooses the audio; the result reason tells you what happened to it.',
      azure: {
        title: 'Transcribe a known short recording',
        sourceId: 65,
        environment: 'portal-and-code',
        minutes: 30,
        cost: 'Speech recognition is metered. Check your resource’s rate and run a few short synthetic recordings, not a long meeting or customer archive.',
        prerequisites: [
          'An authorized Foundry resource and source 65’s local VS Code/Python/Azure CLI environment.',
          'A short supported WAV sample from the exercise, or a recording you create from a fictional sentence.',
          'For recording your own sample, local operating-system microphone permission; Cloud Shell cannot directly use your laptop’s default microphone.',
        ],
        steps: [
          {
            title: 'Confirm the Speech resource',
            surface: 'Microsoft Foundry',
            instruction: 'Open source 65 and its Launch exercise. Use its isolated project setup if needed, then inspect the parent resource and endpoint. Follow the exercise’s Speech SDK version and endpoint form rather than mixing an old region-only sample with new constructor arguments.',
            expected: 'The resource and permitted credential method match the client configuration you are about to use.',
          },
          {
            title: 'Prepare the actual client',
            surface: 'Cloud Shell / local editor',
            instruction: 'In local VS Code, open Labfiles\\04-azure-speech\\Python\\voice-mail. Follow the exercise to create its environment, install requirements, configure the endpoint, and sign in. Complete the transcribe_messages section with AudioConfig and SpeechRecognizer.',
            expected: 'The source-backed client is configured to process files in its messages folder, not to pretend a browser upload occurred.',
          },
          {
            title: 'Listen before measuring',
            surface: 'Cloud Shell / local editor',
            instruction: 'Choose a supplied short sample, or record “The museum opens at nine” as a supported WAV using your local recorder. Place only the intended short test files in your lab copy’s messages folder. Listen to the sample and note the words you expect.',
            expected: 'You have a known, audible input on the machine running the client, with no private conversation in it.',
          },
          {
            title: 'Run one recognition path',
            surface: 'Cloud Shell / local editor',
            instruction: 'Run voice-mail.py and choose the transcription option. Inspect the result reason and transcript. Compare words, names, and numbers with the recording. If canceled, inspect non-secret cancellation details; if NoMatch, check the selected file and audible speech.',
            expected: 'The result is classified as recognized, unmatched, or canceled. A successful transcript can be compared with the known input.',
          },
          {
            title: 'Change one input',
            surface: 'Cloud Shell / local editor',
            instruction: 'Replace the test recording with a second short recording saying “The museum opens at ten,” leaving the resource and language settings unchanged. Run again and compare the returned time. If using only supplied samples, change only the selected file and compare its known wording instead.',
            expected: 'Your comparison isolates the audio-input change rather than changing the endpoint and recognition language simultaneously.',
          },
          {
            title: 'Record a diagnostic observation',
            surface: 'Browser',
            instruction: 'Record the reason and one word-level observation, not the full audio. Name the configuration that selected the file. Stop the client; the next unit covers producing an audio file in the opposite direction.',
            expected: 'Your evidence distinguishes what you heard, what the service returned, and which configuration supplied the input.',
          },
        ],
        success: 'You can inspect a real recognition reason and compare a transcript with a known recording, or describe the blocked step. The browser tutor does not execute Speech SDK code.',
        evidencePrompt: 'What result reason did you observe, did the changed word appear, and which object selected the file? Include no credentials or private recording.',
        cleanup: 'Stop recording and the client, then remove unneeded synthetic audio copies. Delete only isolated Azure resources created for your lab when finished. Preserve shared resources and do not delete other people’s recordings.',
      },
    },
    check: {
      question: 'The client connects successfully, but a short file returns NoMatch. Which first investigation best fits that result?',
      options: [
        { id: 'a', text: 'Assume the resource key is invalid and rotate every shared key.', explanation: 'NoMatch means no speech was recognized; it does not by itself diagnose a credential error, and changing shared keys is unrelated and disruptive.' },
        { id: 'b', text: 'Check the AudioConfig-selected file, whether it contains audible speech, and the recognition language.', explanation: 'These directly affect recognition quality while preserving the distinction between a valid request and recognizable input.' },
        { id: 'c', text: 'Treat the empty transcript as success and continue as if the caller said nothing.', explanation: 'That hides an unrecognized-input condition and can trigger incorrect application behavior.' },
      ],
      correctOptionId: 'b',
      explanation: 'Use the result reason to localize the failure. NoMatch starts an input/recognition investigation; a cancellation with an authentication error starts a different one.',
    },
    recall: {
      prompt: 'Name the three objects in the recognition setup and explain RecognizedSpeech, NoMatch, and Canceled.',
      answer: 'SpeechConfig supplies the service connection and language; AudioConfig supplies the audio source; SpeechRecognizer performs recognition. RecognizedSpeech carries a transcript, NoMatch means no speech was recognized, and Canceled requires cancellation/error inspection.',
    },
    transfer: 'A customer reports that “Azure missed part of a meeting.” Ask about recording duration, the single-utterance versus longer-audio workflow, language, input format, and result reasons before proposing a different model.',
    sourceNote: 'Source 252 uses cross-language names such as RecognizeOnceAsync and Reason. The Python API uses recognize_once_async and reason. The linked source 65 exercise uses current Entra-capable Speech SDK configuration; use its matching dependencies.',
  },
  {
    id: 'text-to-speech',
    title: 'Speak a prepared response',
    cluster: 'speech',
    examDomain: 'Implement text analysis solutions',
    summary: 'Choose the voice and audio destination, then verify a real synthesis result.',
    minutes: 7,
    order: 420,
    prerequisites: ['speech-overview'],
    sourceIds: [253, 13, 21, 65, 174, 192, 35],
    steps: [
      {
        title: 'Synthesis voices text; it does not decide the answer',
        body: 'Text-to-speech takes words you have already chosen and produces spoken audio. An application might synthesize a prepared voicemail greeting, an accessibility prompt, or a translated sentence. The synthesizer is not responsible for verifying those words or inventing a helpful response. Keep the text available for inspection before sending it to speech, especially when another model generated it. That separation lets you diagnose wrong content independently from pronunciation, voice, or playback problems.',
      },
      {
        title: 'Send the audio to an explicit destination',
        body: 'Create SpeechSynthesizer with an authorized SpeechConfig and an AudioOutputConfig. The output configuration can target the default speaker or a file; explicitly using no audio output configuration lets code handle the returned audio stream. In the excerpt, speech_config and the speech_sdk import already come from the source exercise. The method receives the text itself. The filename controls where bytes are saved, not which words are spoken or which voice the service uses.',
        code: `audio_output = speech_sdk.audio.AudioOutputConfig(filename="greeting.wav")
synthesizer = speech_sdk.SpeechSynthesizer(
    speech_config=speech_config, audio_config=audio_output
)
result = synthesizer.speak_text_async(
    "The museum opens at nine."
).get()
print(result.reason)`,
      },
      {
        title: 'Choose a supported voice, not a filename',
        body: 'The speech_synthesis_voice_name property on SpeechConfig chooses a service voice. Voice names identify a locale and voice variant; available voices and features can depend on the resource and region. Changing an output filename does not select a new voice, and selecting a French voice does not translate English text into French. First provide the correct words, then choose a compatible voice and output format. Preview the result rather than assuming the name guarantees the desired pronunciation.',
      },
      {
        title: 'Separate generation from playback',
        body: 'A successful synthesis result has the reason SynthesizingAudioCompleted and provides audio data, which may already have been directed to a speaker or file. Other reasons require error inspection. A generated file can still fail to play if the local device, browser, codec, or file access is wrong. Conversely, hearing an old preview does not prove your latest request succeeded. Inspect the operation status and the intended output, then compare the audible words with the supplied text.',
      },
    ],
    lab: {
      title: 'Optional rehearsal: route synthesized audio',
      goal: 'Choose where a prepared greeting goes and how success is checked.',
      context: 'This is a conceptual plan, not a live Speech request. It does not save a WAV file or produce audio in your browser.',
      fields: [
        {
          id: 'destination',
          label: 'Destination for a reusable greeting',
          hint: 'The requirement is a saved file, not immediate speaker output only.',
          options: [
            { value: 'audio-output-file', label: 'AudioOutputConfig with a filename' },
            { value: 'microphone-input', label: 'AudioConfig with the default microphone' },
            { value: 'language-detection-result', label: 'Language detection result' },
          ],
          expected: 'audio-output-file',
          explanation: 'An output-file configuration persists the synthesized bytes. A microphone is an input and language detection returns no speech audio.',
        },
        {
          id: 'verification',
          label: 'Verification before accepting the greeting',
          hint: 'Check both the service outcome and the content you will use.',
          options: [
            { value: 'completed-and-inspected-audio', label: 'Completed synthesis and inspected audio' },
            { value: 'filename-exists-only', label: 'A file with the expected name exists' },
          ],
          expected: 'completed-and-inspected-audio',
          explanation: 'A filename alone may refer to an old or unusable file. The completion reason plus inspection connects the current request to useful audio.',
        },
      ],
      template: 'kind: conceptual-plan\noperation: text-to-speech\noutput: {{destination}}\nverification: {{verification}}\ntext: "The museum opens at nine."\n',
      language: 'yaml',
      expectedOutput: 'Synthetic illustration: a completed synthesis result and a greeting file containing the requested sentence. No file is generated by this plan.',
      takeaway: 'The service connection, spoken words, voice, and output destination are separate controls.',
      azure: {
        title: 'Preview and save a spoken greeting',
        sourceId: 65,
        environment: 'portal-and-code',
        minutes: 30,
        cost: 'Speech synthesis previews and SDK requests can incur usage charges. Use a short synthetic greeting and check your resource’s pricing before repeated runs.',
        prerequisites: [
          'Your authorized Foundry project with Speech and access to source 65’s original exercise.',
          'Browser playback, and the source exercise’s local Python/VS Code/Azure CLI environment for saving audio from code.',
          'An available voice in the chosen region. Text-to-speech needs no microphone permission.',
        ],
        steps: [
          {
            title: 'Confirm the lab resource',
            surface: 'Microsoft Foundry',
            instruction: 'Open your isolated source 65 project or follow its creation instructions. Check the resource and subscription before sending text. Keep the original exercise open for the later client steps.',
            expected: 'You know which authorized Speech resource will process the greeting.',
          },
          {
            title: 'Open the speech editor',
            surface: 'Microsoft Foundry',
            instruction: 'Use the documented Playgrounds → Speech playground → Text to speech → Audio content creation route. In the portal version that shows it, select Try the Speech playground first. If unavailable, use source 65’s SDK path rather than a guessed portal control.',
            expected: 'You have the real audio content editor, or a recorded reason to use the source-backed SDK workflow instead.',
          },
          {
            title: 'Preview the baseline words',
            surface: 'Microsoft Foundry',
            instruction: 'Create a text tuning file with “The museum opens at nine. Please use the east entrance.” Select an available English voice and Play the selected text. Inspect whether both sentences are spoken.',
            expected: 'A successful request produces a preview corresponding to your synthetic input, not a generated answer to an imagined question.',
          },
          {
            title: 'Change only the message',
            surface: 'Microsoft Foundry',
            instruction: 'Change “east entrance” to “west entrance,” keeping the voice unchanged. Stop and regenerate the preview. Compare the last two words rather than judging the whole voice experience at once.',
            expected: 'You can report whether the observed output reflects the one changed phrase.',
          },
          {
            title: 'Connect the source exercise client',
            surface: 'Cloud Shell / local editor',
            instruction: 'Follow source 65 in Labfiles\\04-azure-speech\\Python\\voice-mail: configure the environment, endpoint, and Azure sign-in. Complete record_greeting with SpeechConfig, AudioOutputConfig, and SpeechSynthesizer as directed by the exercise.',
            expected: 'The lab client has a real service connection and an explicit file destination; the tutor has not executed these steps for you.',
          },
          {
            title: 'Inspect the generated file and reason',
            surface: 'Cloud Shell / local editor',
            instruction: 'Run voice-mail.py, select the greeting option, and enter your synthetic message. Inspect the returned reason. After completed synthesis, release or close the client if needed and play the new greeting.wav. Compare its contents with your text.',
            expected: 'You can distinguish successful synthesis from file-lock or playback trouble, and from a request that never completed.',
          },
          {
            title: 'Record one observed result',
            surface: 'Browser',
            instruction: 'Record the result reason, selected voice if known, and the changed phrase you heard. Stop playback and the client. Save format and SSML experiments for separate, resumable units.',
            expected: 'Your evidence relates a specific request to its actual audio outcome.',
          },
        ],
        success: 'You can identify a completed synthesis result and inspect its spoken content, or describe the specific blocker without treating a saved filename as proof.',
        evidencePrompt: 'Which phrase changed, what synthesis reason did you observe, and did playback match the latest input? Do not include private audio or credentials.',
        cleanup: 'Stop playback and the client; remove unneeded generated greetings and tuning files. Delete only your isolated lab resources when finished, not shared Foundry resources or other users’ audio.',
      },
    },
    check: {
      question: 'The greeting saves successfully, but the team wants a different voice without changing its words or filename. Which setting should change?',
      options: [
        { id: 'a', text: 'speech_synthesis_voice_name on SpeechConfig.', explanation: 'That property selects the service voice while leaving the input text and output destination independent.' },
        { id: 'b', text: 'The filename in AudioOutputConfig.', explanation: 'The filename determines where audio is written, not how the speaker sounds.' },
        { id: 'c', text: 'The recognition input in AudioConfig.', explanation: 'Recognition input belongs to speech-to-text, not the synthesis voice selection.' },
      ],
      correctOptionId: 'a',
      explanation: 'The failure to avoid is confusing the service’s voice setting with audio I/O configuration.',
    },
    recall: {
      prompt: 'Describe the path from prepared text to a saved greeting, including the result reason you check.',
      answer: 'An authenticated SpeechConfig and an AudioOutputConfig feed SpeechSynthesizer. speak_text_async receives the prepared text. Check SynthesizingAudioCompleted, then inspect the generated file; the voice comes from speech_synthesis_voice_name.',
    },
    transfer: 'A customer wants spoken accessibility prompts. Ask who owns the exact wording, which languages and voices are required, whether output is streamed or saved, and how users can also access the text.',
    sourceNote: 'Source 253 uses AudioConfig generically in prose; the Python output object is audio.AudioOutputConfig, as the linked lab shows. Sources 13/35 describe both key and Entra-based approaches across SDK versions. Portal previews are an extension of source 65 supported by the Audio content creation documentation, not an in-app simulator.',
  },
  {
    id: 'speech-voices-formats',
    title: 'Choose a voice and audio format',
    cluster: 'speech',
    examDomain: 'Implement text analysis solutions',
    summary: 'Separate voice identity from encoding, sample rate, bit depth, and playback compatibility.',
    minutes: 7,
    order: 430,
    prerequisites: ['text-to-speech'],
    sourceIds: [21, 65, 174, 192, 35],
    steps: [
      {
        title: 'The same words can have different byte representations',
        body: 'An audio format describes how the sound is represented for storage or playback. File type, sample rate, and bit depth affect compatibility, fidelity, and size; they do not choose the words. Uncompressed PCM and compressed MP3 serve different delivery needs. Select a format your destination supports instead of assuming the largest file is best. Renaming an MP3 to .wav changes the label, not the encoded audio, and cannot repair a format mismatch.',
      },
      {
        title: 'Set the format where synthesis is configured',
        body: 'SpeechConfig exposes set_speech_synthesis_output_format with a SpeechSynthesisOutputFormat value. The corpus example Riff24Khz16BitMonoPcm describes a RIFF/WAV container, 24-kHz sampling, 16-bit samples, and one channel. These properties form one output choice, not four unrelated promises about quality. Use a matching file extension and compatible player. Increasing the output sample rate does not change the sentence, translate it, or recover information that was absent from the source material.',
        code: `speech_config.set_speech_synthesis_output_format(
    speech_sdk.SpeechSynthesisOutputFormat.Riff24Khz16BitMonoPcm
)`,
      },
      {
        title: 'Voice names address a different control',
        body: 'A voice name identifies a locale and a specific voice or voice family, such as the corpus example en-US-Brian:DragonHDLatestNeural. Set speech_synthesis_voice_name to choose among voices actually offered for your resource. Voice support, speaking styles, and availability can vary; a custom voice is not automatically available just because standard voices are. Changing voice affects delivery, while changing format affects the output representation. Neither operation translates the input text into another language.',
      },
      {
        title: 'Compare one variable at a time',
        body: 'To evaluate a voice, keep text and format constant and change only the voice. To evaluate a format, keep the text and voice constant and compare compatible encodings or sample rates. Listen for intelligibility and inspect file metadata and size rather than relying on filenames. The goal is a delivery choice that works in the target application, not collecting the maximum number of settings. Record a small comparison you can reproduce later.',
      },
    ],
    lab: {
      title: 'Optional rehearsal: select compatible output',
      goal: 'Plan a mono WAV greeting for a player that requires 24-kHz, 16-bit PCM.',
      context: 'This YAML is a conceptual delivery plan, not an SDK request. It does not encode audio or measure a file’s size.',
      fields: [
        {
          id: 'format',
          label: 'Format choice for the required player',
          hint: 'The requirement describes container, sampling, bit depth, and channels.',
          options: [
            { value: 'riff-24khz-16bit-mono-pcm', label: 'RIFF/WAV, 24 kHz, 16-bit, mono PCM' },
            { value: 'rename-mp3-to-wav', label: 'Generate MP3 and rename the file .wav' },
          ],
          expected: 'riff-24khz-16bit-mono-pcm',
          explanation: 'The actual encoding must match the player contract. A filename extension cannot transform compressed MP3 bytes into PCM.',
        },
        {
          id: 'voice',
          label: 'How to select the voice',
          hint: 'Choose a voice offered by the service, not an arbitrary person’s name.',
          options: [
            { value: 'supported-voice-name', label: 'Supported locale-specific voice name' },
            { value: 'output-filename', label: 'Put a person’s name in the output filename' },
          ],
          expected: 'supported-voice-name',
          explanation: 'The voice catalog and speech_synthesis_voice_name control delivery. A filename only locates output and does not select or create a voice.',
        },
      ],
      template: 'kind: conceptual-plan\nformat: {{format}}\nvoice_selection: {{voice}}\nkeep_text_constant: true\n',
      language: 'yaml',
      expectedOutput: 'Illustrative only: a compatible mono PCM WAV and a chosen supported voice. No file has been generated or inspected by this plan.',
      takeaway: 'Voice, format, and destination solve different requirements.',
      azure: {
        title: 'Compare real voices and exported formats',
        sourceId: 65,
        environment: 'foundry',
        minutes: 25,
        cost: 'Speech previews and exports use your Azure resource and may be charged. Limit the experiment to a short sentence and a small number of outputs.',
        prerequisites: [
          'An authorized Foundry project with the Speech audio content creation tool available.',
          'Source 65 for the underlying Speech exercise; source 21 for voice and format configuration.',
          'A local player and file-properties view capable of inspecting exported audio. No microphone is required.',
        ],
        steps: [
          {
            title: 'Open the configured Speech tool',
            surface: 'Microsoft Foundry',
            instruction: 'Use your isolated source 65 resource. Open the documented Playgrounds → Speech playground → Text to speech → Audio content creation route. If the portal layout differs, follow the current Audio content creation guide linked in the source note.',
            expected: 'You can select available voices and edit a tuning file in the real service, or record an availability blocker.',
          },
          {
            title: 'Establish a baseline',
            surface: 'Microsoft Foundry',
            instruction: 'Create a tuning file with “The museum opens at nine.” Select an available English voice and preview it. Write down only the voice name and the text, not resource credentials.',
            expected: 'You have heard a baseline voice for a fixed synthetic sentence.',
          },
          {
            title: 'Change only the voice',
            surface: 'Microsoft Foundry',
            instruction: 'Choose a second available English voice while leaving the text unchanged. Stop and regenerate playback. Compare articulation or pace without attributing every difference to a different audio format.',
            expected: 'You can describe one observed delivery difference, or report that the difference was not meaningful to you.',
          },
          {
            title: 'Export a compatible WAV',
            surface: 'Microsoft Foundry',
            instruction: 'Keep the selected voice and text fixed. Select Export, choose an available WAV/RIFF 24-kHz, 16-bit, mono PCM option, and monitor Task list. Once completed, download your own output from Audio library. If unavailable, record the offered options rather than relabeling another format.',
            expected: 'A completed export provides an actual downloadable WAV, with an observable task status.',
          },
          {
            title: 'Compare an alternative encoding',
            surface: 'Microsoft Foundry',
            instruction: 'Export the same text and voice as an available 24-kHz MP3, leaving other choices unchanged. Download it, then inspect both files’ metadata and size locally and try playback. Do not merely rename an extension.',
            expected: 'You have two real encodings to compare; record their actual size and compatibility instead of assuming a fixed size ratio.',
          },
          {
            title: 'Record the delivery decision',
            surface: 'Browser',
            instruction: 'Record one voice observation and one file-format observation. State which format your intended player supports. Stop playback and keep only the outputs needed as lab evidence.',
            expected: 'Your note separates how a voice sounds from how its audio is encoded.',
          },
        ],
        success: 'You can identify an actual exported format and a controlled voice comparison, or the exact unavailable option. The tutor does not validate downloaded files.',
        evidencePrompt: 'Which format and sample rate did you export, and what changed when only the voice changed? Share no signed download links or private audio.',
        cleanup: 'Stop previews and remove your unneeded tuning/export files. Delete only isolated Azure resources created for these exercises after checking their contents; leave shared resources intact.',
      },
    },
    check: {
      question: 'A device requires mono, 24-kHz, 16-bit PCM in a WAV container. The app currently produces MP3. What addresses the requirement?',
      options: [
        { id: 'a', text: 'Change the synthesis output format to the compatible RIFF PCM option and regenerate.', explanation: 'This changes the actual audio representation to match the device’s contract.' },
        { id: 'b', text: 'Keep MP3 encoding but rename the output file .wav.', explanation: 'The bytes remain MP3; a new extension does not provide the required container or PCM representation.' },
        { id: 'c', text: 'Choose a different English voice and keep the format unchanged.', explanation: 'Voice selection changes delivery but does not satisfy an encoding requirement.' },
      ],
      correctOptionId: 'a',
      explanation: 'The decisive constraint is the destination’s audio contract, not voice identity or the displayed filename.',
    },
    recall: {
      prompt: 'Decode Riff24Khz16BitMonoPcm, then name the separate setting that changes the voice.',
      answer: 'It selects a RIFF/WAV container with 24-kHz, 16-bit, single-channel PCM. speech_synthesis_voice_name selects the voice independently of that format.',
    },
    transfer: 'A customer needs spoken prompts on a low-bandwidth device. Ask for its supported codecs, sampling requirements, storage and network limits, then compare compatible outputs with the same text and voice.',
    sourceNote: 'Source 21 provides the format enum and a DragonHD voice example; neither makes every voice available in every region. The source 65 SDK exercise is extended here with documented portal exports: https://learn.microsoft.com/azure/ai-services/speech-service/how-to-audio-content-creation.',
  },
  {
    id: 'speech-ssml',
    title: 'Control pauses and pronunciation',
    cluster: 'speech',
    examDomain: 'Implement text analysis solutions',
    summary: 'Use SSML for deliberate spoken delivery instead of changing the audio format.',
    minutes: 7,
    order: 440,
    prerequisites: ['speech-voices-formats'],
    sourceIds: [246, 21, 65, 192, 35],
    steps: [
      {
        title: 'Plain text leaves delivery choices implicit',
        body: 'A sentence may contain a code that should be spelled out, a date that should sound like a date, or a deliberate pause between instructions. Plain text does not express all those choices reliably. Speech Synthesis Markup Language, or SSML, is XML that describes how supplied words should be spoken. It changes delivery instructions for synthesis, not the application’s business answer. An output codec cannot substitute for these pronunciation and pacing controls.',
      },
      {
        title: 'Choose the control that explains the problem',
        body: 'Use a break for a pause, prosody for properties such as rate and pitch, phoneme for a pronunciation, and say-as for an interpretation such as a date or telephone number. A supported speaking style can convey a requested tone. SSML can also include recorded audio and multiple voices. These are distinct controls: slowing the whole sentence is not the same as pausing between two instructions. Start with the smallest control that fixes the observed listening problem.',
        example: '“Your code is 48111” may need an explicit reading rule. “Wait here. Then enter” may need a pause rather than a different voice or sample rate.',
      },
      {
        title: 'Keep the markup small and valid',
        body: 'An SSML document has a speak root with a language and synthesis namespace, then a supported voice containing the text and delivery elements. This original example changes only the pause between two short sentences. It is XML, not a Python program or a request executed by the tutor. Choose a voice available in your resource, and do not assume every voice family implements every SSML extension or speaking style.',
        code: `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US">
  <voice name="en-US-JennyNeural">
    The museum opens at nine.
    <break time="500ms"/>
    Please use the east entrance.
  </voice>
</speak>`,
      },
      {
        title: 'Use the SSML synthesis path',
        body: 'The Speech SDK provides speak_ssml_async for marked-up input, while speak_text_async handles ordinary text. Keep that boundary explicit instead of passing XML into the plain-text path and hoping it is interpreted. When constructing markup from variable content, preserve valid XML and escape text where needed. Inspect the synthesis result, then listen for the intended change. A successful parse establishes neither good pacing nor accessible delivery; compare the actual audio with your listening goal.',
      },
    ],
    lab: {
      title: 'Optional rehearsal: choose a delivery control',
      goal: 'Plan a pause between two sentences without changing the words or encoding.',
      context: 'This YAML describes an SSML experiment. It is not SSML itself and does not synthesize or play audio.',
      fields: [
        {
          id: 'control',
          label: 'Control for a deliberate pause',
          hint: 'The problem occurs between sentences, not throughout the voice.',
          options: [
            { value: 'ssml-break', label: 'SSML break' },
            { value: 'output-sample-rate', label: 'Output sample rate' },
            { value: 'recognition-language', label: 'Recognition language' },
          ],
          expected: 'ssml-break',
          explanation: 'A break directly inserts a pause. Sampling changes audio representation, while recognition language belongs to converting input speech to text.',
        },
        {
          id: 'method',
          label: 'SDK input path for the markup',
          hint: 'The service must interpret the delivery elements, not treat them as ordinary words.',
          options: [
            { value: 'speak-ssml-async', label: 'speak_ssml_async' },
            { value: 'speak-text-async', label: 'speak_text_async' },
          ],
          expected: 'speak-ssml-async',
          explanation: 'The SSML method communicates marked-up synthesis instructions. The plain-text method is intended for unmarked text.',
        },
      ],
      template: 'kind: conceptual-plan\ndelivery_control: {{control}}\nsynthesis_path: {{method}}\ncompare_pause_ms: [500, 1000]\nkeep_voice_and_text_constant: true\n',
      language: 'yaml',
      expectedOutput: 'Illustrative only: the second preview has a longer pause between otherwise unchanged sentences. No preview has run inside this rehearsal.',
      takeaway: 'Use a delivery control for a delivery problem, then listen to a controlled comparison.',
      azure: {
        title: 'Hear an SSML pause change',
        sourceId: 65,
        environment: 'foundry',
        minutes: 20,
        cost: 'SSML previews invoke Speech synthesis and can be billed. Use only the short synthetic sample and a few previews.',
        prerequisites: [
          'Your authorized source 65 Foundry project and access to Speech Audio content creation.',
          'Source 246’s SSML explanation and a supported standard neural voice.',
          'Browser audio playback and a UTF-8 text editor for preparing the small SSML file. No microphone is needed.',
        ],
        steps: [
          {
            title: 'Open the synthesis surface',
            surface: 'Microsoft Foundry',
            instruction: 'Open your isolated project and follow the documented Playgrounds → Speech playground → Text to speech → Audio content creation route. Keep source 65’s original exercise and source 246’s SSML unit available for the equivalent SDK path.',
            expected: 'The editor supports text or SSML tuning files for the selected resource, or you can identify the unavailable capability.',
          },
          {
            title: 'Prepare one valid document',
            surface: 'Cloud Shell / local editor',
            instruction: 'Save the teaching example’s XML alone as a UTF-8 .txt file. Use one complete speak document, not a YAML plan or Python assignment. Confirm that the named voice is supported; if necessary replace only its name with an offered voice.',
            expected: 'The file contains valid SSML for two synthetic sentences and a 500-ms pause.',
          },
          {
            title: 'Import and preview',
            surface: 'Microsoft Foundry',
            instruction: 'Use Upload → Text file to import the SSML file into Audio content creation. Select the content and Play. Listen specifically for the pause between “nine” and “Please,” and inspect any validation or synthesis error.',
            expected: 'A successful preview interprets the markup as delivery instructions rather than speaking tag names.',
          },
          {
            title: 'Change only the pause duration',
            surface: 'Microsoft Foundry',
            instruction: 'Change the break from 500ms to 1000ms in the SSML editor. If your editor uses uploaded files, upload a uniquely named copy with just that change. Stop and regenerate playback, keeping the voice and words identical.',
            expected: 'The controlled comparison lets you hear whether the longer requested pause changes the pacing as intended.',
          },
          {
            title: 'Connect the observation to code',
            surface: 'Browser',
            instruction: 'Revisit source 246 and identify speak_ssml_async as the method that would submit this markup in the source 65 SpeechSynthesizer client. Distinguish that from the plain-text call; do not claim you ran the SDK if you only used the portal.',
            expected: 'You can name the implementation path while accurately describing which environment you actually used.',
          },
          {
            title: 'Save a small listening result',
            surface: 'Browser',
            instruction: 'Record which pause was easier to follow and why. Stop playback. If both sounded identical, record that observation and verify that the latest SSML was regenerated rather than changing several controls at once.',
            expected: 'Your evidence describes an observed delivery difference or a precise follow-up check, not a guaranteed outcome.',
          },
        ],
        success: 'You have inspected a real SSML preview and a one-parameter comparison, or documented a validation/availability blocker. The site cannot hear or verify the audio.',
        evidencePrompt: 'Which SSML control changed, what did you hear, and how would the SDK submit the same markup? Share no private audio, keys, or signed links.',
        cleanup: 'Stop previews and remove unneeded tuning files and local synthetic SSML copies. Delete only your isolated lab resources when done; preserve shared resources and other users’ audio assets.',
      },
    },
    check: {
      question: 'An instruction sounds rushed because two sentences run together. The voice and file format are already correct. What is the smallest useful change?',
      options: [
        { id: 'a', text: 'Increase the WAV sample rate.', explanation: 'That changes audio representation, not the intended timing between sentences.' },
        { id: 'b', text: 'Switch to language detection before synthesis.', explanation: 'Detecting a language does not specify a pause or adjust delivery.' },
        { id: 'c', text: 'Insert an SSML break and submit through the SSML synthesis path.', explanation: 'The break directly controls the boundary between sentences while preserving the chosen words, voice, and format.' },
      ],
      correctOptionId: 'c',
      explanation: 'The failure is pacing, so fix pacing explicitly rather than changing unrelated audio or language settings.',
    },
    recall: {
      prompt: 'Name SSML controls for a pause, speaking rate, pronunciation, and reading a value as a particular kind of item. Which SDK method submits them?',
      answer: 'break controls pauses, prosody can control rate, phoneme controls pronunciation, and say-as specifies interpretation such as a date. Submit the marked-up content with SpeechSynthesizer.speak_ssml_async.',
    },
    transfer: 'A customer’s spoken instructions overload listeners. Ask which phrase is hard to follow, then compare one pause or rate change while keeping the same text and voice.',
    sourceNote: 'Source 246 uses an Aria voice in XML but calls it “Ariana” in the prose; actual supported voice identifiers govern requests. Portal editing extends source 65 using https://learn.microsoft.com/azure/ai-services/speech-service/how-to-audio-content-creation. Do not assume all standard and HD voices support identical SSML features.',
  },
  {
    id: 'speech-translation',
    title: 'Translate speech into usable outputs',
    cluster: 'speech',
    examDomain: 'Implement text analysis solutions',
    summary: 'Configure source and target languages, then choose single-target event synthesis or multi-target manual synthesis.',
    minutes: 9,
    order: 450,
    prerequisites: ['language-translation', 'speech-to-text', 'text-to-speech'],
    sourceIds: [226, 81, 139, 166, 218, 229, 228],
    steps: [
      {
        title: 'Cross the language boundary after listening',
        body: 'Speech translation accepts spoken input and returns its meaning in one or more target languages. That differs from transcription, which turns speech into text without necessarily changing language. Keep the recognized source text visible when diagnosing a wrong translation: the error might have started when the system heard the words, not when it translated them. Azure Speech provides the TranslationRecognizer path so your application can inspect source recognition and target-language results together.',
        example: 'An English “The museum opens tomorrow” can produce French and Japanese text. Hearing a French voice is a further synthesis step, not proof that recognition and translation were correct.',
      },
      {
        title: 'Put language settings in the translation configuration',
        body: 'SpeechTranslationConfig combines the authorized Speech connection with translation settings. speech_recognition_language specifies the spoken source locale, such as en-US; add_target_language adds target codes such as fr or ja. AudioConfig still chooses the microphone or file. TranslationRecognizer receives both configurations. The excerpt assumes translation_cfg is already connected and the SDK is imported. A microphone here belongs to the local process running the code, not automatically to a browser or remote cloud shell.',
        code: `translation_cfg.speech_recognition_language = "en-US"
translation_cfg.add_target_language("fr")
translation_cfg.add_target_language("ja")
audio_in = speech_sdk.audio.AudioConfig(use_default_microphone=True)
translator = speech_sdk.translation.TranslationRecognizer(
    translation_config=translation_cfg, audio_config=audio_in
)
result = translator.recognize_once_async().get()
print(result.reason, result.text)`,
      },
      {
        title: 'Use manual synthesis for multiple spoken targets',
        body: 'The translation result contains target-language text entries. With manual synthesis, inspect those entries, then send each to SpeechSynthesizer using a voice suitable for that target language. SpeechConfig and AudioOutputConfig govern the separate synthesis operation. This supports several spoken languages and lets you save one output per language. Manual does not mean the user translates the sentence by hand; it means your application explicitly coordinates translation results and the subsequent synthesis calls.',
        example: 'One English recording → French and Japanese text → two synthesis calls, each with an appropriate voice and its own output destination.',
      },
      {
        title: 'Use event synthesis for a single target',
        body: 'For the corpus’s event-based approach, configure one target language and a voice in SpeechTranslationConfig, then handle the TranslationRecognizer synthesizing event to receive translated audio. This is not the multi-target route. Process arriving audio chunks in order and finish the output when the stream completes; repeatedly overwriting one file can discard earlier chunks. In Python the event result exposes audio bytes. Whichever approach you choose, inspect recognition, translation, and playback separately before accepting the complete experience.',
      },
    ],
    lab: {
      title: 'Optional rehearsal: plan two spoken translations',
      goal: 'Choose the settings and orchestration for French and Japanese audio from one English input.',
      context: 'This YAML is a conceptual plan only. It does not listen, translate, or synthesize speech.',
      fields: [
        {
          id: 'languageOwner',
          label: 'Object that owns source and target languages',
          hint: 'The microphone configuration chooses the device, not the translation targets.',
          options: [
            { value: 'speech-translation-config', label: 'SpeechTranslationConfig' },
            { value: 'audio-config', label: 'AudioConfig' },
            { value: 'audio-output-config', label: 'AudioOutputConfig' },
          ],
          expected: 'speech-translation-config',
          explanation: 'SpeechTranslationConfig defines the recognized locale and target languages. Audio configurations select input and output devices or files.',
        },
        {
          id: 'synthesis',
          label: 'Synthesis strategy for two target languages',
          hint: 'The source’s event-based synthesis path is one-to-one.',
          options: [
            { value: 'manual-per-target', label: 'Translate, then synthesize each target separately' },
            { value: 'one-event-voice-for-all', label: 'One event-based synthesis voice for all targets' },
          ],
          expected: 'manual-per-target',
          explanation: 'Manual synthesis iterates through target-language texts with suitable voices. The described event-based audio path supports a single target, not simultaneous multi-language synthesis.',
        },
      ],
      template: 'kind: conceptual-plan\nlanguage_settings: {{languageOwner}}\nsource_locale: en-US\ntargets: [fr, ja]\nsynthesis: {{synthesis}}\n',
      language: 'yaml',
      expectedOutput: 'Synthetic illustration: one recognized English sentence, two translated text entries, and separately synthesized French and Japanese audio. Nothing is executed here.',
      takeaway: 'Target-language configuration and audio-device configuration are independent; multi-target audio needs an explicit synthesis strategy.',
      azure: {
        title: 'Translate a short spoken sentence',
        sourceId: 81,
        environment: 'portal-and-code',
        minutes: 35,
        cost: 'Speech translation and additional synthesis can incur charges; text playground comparisons also use Translator. Keep recordings short and check pricing for the selected resource.',
        prerequisites: [
          'An authorized Foundry resource and source 81’s translation exercise environment.',
          'Local Python and Speech SDK versions matching the linked lab, with Azure CLI sign-in.',
          'A microphone with operating-system permission and headphones, or a supported synthetic audio file. Cloud Shell does not inherit local audio devices.',
        ],
        steps: [
          {
            title: 'Confirm the translation resource',
            surface: 'Microsoft Foundry',
            instruction: 'Open source 81’s Launch exercise and select your isolated project. Review the resource endpoint and region before running the speech section. Follow the lab’s supported endpoint and SDK combination rather than assuming every Foundry URL is interchangeable.',
            expected: 'You have a known authorized resource and the original text-and-speech instructions.',
          },
          {
            title: 'Establish a text-only comparison',
            surface: 'Microsoft Foundry',
            instruction: 'Open Build → Models → AI services → Azure Translator - Text translation. Translate “The museum opens tomorrow” into French and note the text result. This is a comparison point, not proof of what the speech recognizer will hear.',
            expected: 'A successful Translator call gives you a text-only output against which to reason about later differences.',
          },
          {
            title: 'Prepare the source speech client',
            surface: 'Cloud Shell / local editor',
            instruction: 'In local VS Code, follow source 81 in Labfiles\\07-translation\\Python\\translators. Configure its environment, endpoint, and Azure sign-in. Open translate-speech.py and complete the SpeechTranslationConfig, AudioConfig, and TranslationRecognizer sections.',
            expected: 'The real client has an explicit source locale and selected target languages, separate from its audio input.',
          },
          {
            title: 'Select two targets and their voices',
            surface: 'Cloud Shell / local editor',
            instruction: 'Use en-US recognition and two supported targets, such as fr and ja. Follow source 226’s mapping to supported French and Japanese voices for manual synthesis. Keep output directed to your local speaker or distinct files. Confirm local microphone permission before starting.',
            expected: 'Each target has a translation code and a compatible synthesis voice; two targets are not forced through the one-target event-synthesis path.',
          },
          {
            title: 'Inspect recognition before judging translation',
            surface: 'Cloud Shell / local editor',
            instruction: 'Run the source-backed client and say “The museum opens tomorrow.” Inspect the recognized source text, each translation, and the synthesis status before listening. If the recognized source is wrong, investigate audio and language settings first.',
            expected: 'A successful run exposes the source transcript and separate target entries, making the failure layer observable.',
          },
          {
            title: 'Change only one target',
            surface: 'Cloud Shell / local editor',
            instruction: 'Replace the Japanese target with Spanish and its supported voice, keeping the English source sentence and French target unchanged. Run the same short input again. Compare which result entries changed and whether each spoken output matches its target.',
            expected: 'You can distinguish a target-language change from a recognition or audio-device change.',
          },
          {
            title: 'Record the three-stage path',
            surface: 'Browser',
            instruction: 'Record the recognized sentence, target codes, and one observation about translated speech. Label any translation quality uncertainty rather than guessing. Stop the client and microphone capture.',
            expected: 'Your evidence separates recognition, translation, and synthesis, with a clear stopping point.',
          },
        ],
        success: 'You can inspect an actual source transcript and target-language results and explain your synthesis strategy, or identify the blocked stage. The app cannot verify cloud execution or linguistic accuracy.',
        evidencePrompt: 'What source text was recognized, which target changed, and why did you use manual synthesis? Share only synthetic content and no credentials.',
        cleanup: 'Stop microphone capture, playback, and the client. Remove unneeded synthetic audio. Delete only isolated lab resources when finished; preserve shared Foundry resources and inspect the group before deleting it.',
      },
    },
    check: {
      question: 'One English utterance must produce both French and Japanese audio. Which design matches the corpus’s synthesis boundary?',
      options: [
        { id: 'a', text: 'Choose one French voice in SpeechTranslationConfig and use its event audio for both targets.', explanation: 'The described event-based synthesis path is one-to-one; a single configured voice does not produce two independently voiced target-language outputs.' },
        { id: 'b', text: 'Translate into two text results, then synthesize each with a suitable target-language voice.', explanation: 'Manual synthesis explicitly handles each target text and voice, which supports the required multiple spoken outputs.' },
        { id: 'c', text: 'Set AudioConfig to the two target language codes.', explanation: 'AudioConfig chooses an input source. SpeechTranslationConfig owns the translation languages.' },
      ],
      correctOptionId: 'b',
      explanation: 'The key requirement is more than one spoken target. Keep language configuration distinct from audio I/O and use per-target synthesis.',
    },
    recall: {
      prompt: 'Reconstruct speech translation from source audio to two spoken target outputs, naming the configuration and client objects.',
      answer: 'SpeechTranslationConfig sets the connection, source locale, and target codes; AudioConfig chooses input; TranslationRecognizer returns recognized source and translations. For multiple spoken targets, use SpeechConfig, AudioOutputConfig, and SpeechSynthesizer separately for each target text and suitable voice.',
    },
    transfer: 'A customer needs multilingual meeting announcements. Ask whether listeners need one or several target languages, whether output is live or saved, and how source-recognition and translation errors will be distinguished.',
    sourceNote: 'Source 226 mixes .NET-style GetAudio wording with Python evt.result.audio and generically calls output configuration AudioConfig. Its file-writing callback is a minimal illustration; real chunked output must preserve earlier chunks. Episode 21’s manual/event contrast should not be read as “manual synthesis is only for batch work.”',
  },
  {
    id: 'speech-generative-audio',
    title: 'Choose speech-capable models',
    cluster: 'speech',
    examDomain: 'Implement text analysis solutions',
    summary: 'Deploy models for the correct audio direction and handle actual binary input or output.',
    minutes: 9,
    order: 460,
    prerequisites: ['speech-to-text', 'text-to-speech', 'model-deployment'],
    sourceIds: [17, 83, 121, 175, 207, 221, 225, 44],
    steps: [
      {
        title: 'Capability comes from the model, not its family name',
        body: 'The Foundry catalog contains models with different input and output capabilities. Filter by inference task rather than assuming every model in a family can process audio. The corpus uses gpt-4o-mini-transcribe for speech-to-text and gpt-4o-mini-tts for text-to-speech. A normal text-chat model name is not a substitute for either deployment. Inspect the model card, supported operations, region, and quota before deploying; availability is a practical requirement, not a promise made by this lesson.',
      },
      {
        title: 'Distinguish model inference from the Speech SDK',
        body: 'The earlier units used prebuilt Speech capabilities through SpeechConfig and recognizer or synthesizer objects. Here, an AzureOpenAI client addresses a deployed audio-capable model using its supported API. The deployment name supplied to model identifies your deployment, which may differ from the catalog model name. Match the endpoint, API version, and authentication to the source exercise. Compare the two routes using supported languages, voice controls, output requirements, latency, and measured quality rather than assuming one is universally better.',
      },
      {
        title: 'Transcription sends audio bytes, not a filename story',
        body: 'The transcription API needs the contents of an audio file. Open the file in binary mode and pass it to audio.transcriptions.create; a path mentioned in a prompt is not the same thing. Select an output format supported by the deployed model. The excerpt assumes an authenticated AzureOpenAI client and a real deployment name. Its file is read by your local client and uploaded when you execute the lab, not by this tutor.',
        code: `with open("sample.wav", "rb") as audio_file:
    transcript = client.audio.transcriptions.create(
        model=transcription_deployment,
        file=audio_file,
        response_format="text",
    )
print(transcript)`,
      },
      {
        title: 'Synthesis returns a stream you must consume',
        body: 'For the source’s text-to-speech model, audio.speech.with_streaming_response.create accepts the deployment, a supported voice, the words to speak, and model-supported delivery instructions. The response contains audio bytes that can be streamed to a file. Instructions such as a calm tone are different from the exact SSML controls used earlier, and support varies by model. These transcription and synthesis calls do not automatically form an interruptible conversation; real-time orchestration is a separate concern.',
        code: `with client.audio.speech.with_streaming_response.create(
    model=synthesis_deployment,
    voice="alloy",
    input="The museum opens at nine.",
    instructions="Use a calm, clear tone.",
) as response:
    response.stream_to_file("greeting.mp3")`,
      },
    ],
    lab: {
      title: 'Optional rehearsal: match models to data flow',
      goal: 'Choose distinct model capabilities for a transcription and a spoken greeting.',
      context: 'This YAML is a conceptual deployment plan. It does not deploy models, upload audio, or execute an OpenAI API request.',
      fields: [
        {
          id: 'transcriber',
          label: 'Model capability for audio → text',
          hint: 'The deployment must explicitly support transcription.',
          options: [
            { value: 'gpt-4o-mini-transcribe', label: 'gpt-4o-mini-transcribe' },
            { value: 'gpt-4o-mini-tts', label: 'gpt-4o-mini-tts' },
            { value: 'text-chat-only', label: 'A text-only chat deployment' },
          ],
          expected: 'gpt-4o-mini-transcribe',
          explanation: 'The transcription model accepts audio for text output. The TTS deployment serves the reverse direction, and a text-only model does not gain audio support from a prompt.',
        },
        {
          id: 'synthesizer',
          label: 'Model capability for text → audio',
          hint: 'Choose the reverse direction, not a larger transcription model.',
          options: [
            { value: 'gpt-4o-mini-tts', label: 'gpt-4o-mini-tts' },
            { value: 'gpt-4o-mini-transcribe', label: 'gpt-4o-mini-transcribe' },
          ],
          expected: 'gpt-4o-mini-tts',
          explanation: 'The TTS model synthesizes speech. A transcription deployment is not interchangeable merely because both belong to the gpt-4o family.',
        },
        {
          id: 'input',
          label: 'What the transcription request sends',
          hint: 'The remote model cannot open an arbitrary path on your computer.',
          options: [
            { value: 'binary-audio-file', label: 'The opened binary audio file' },
            { value: 'filename-in-chat', label: 'A local filename in a chat message' },
          ],
          expected: 'binary-audio-file',
          explanation: 'The API needs actual audio content. A filename string alone does not upload its bytes or grant the service access to your filesystem.',
        },
      ],
      template: 'kind: conceptual-plan\ntranscription_model: {{transcriber}}\nsynthesis_model: {{synthesizer}}\ntranscription_input: {{input}}\ncheck_region_and_quota: true\n',
      language: 'yaml',
      expectedOutput: 'Synthetic illustration: a transcript from uploaded audio and a separate generated MP3 greeting. The plan has neither sent audio nor generated a file.',
      takeaway: 'Verify capability and deployment identity before choosing an API operation.',
      azure: {
        title: 'Deploy and compare real audio models',
        sourceId: 83,
        environment: 'portal-and-code',
        minutes: 35,
        cost: 'Audio-model inference is billable under the selected deployment’s pricing. Check quota and deployment type before creating resources; run only short synthetic samples and remove unneeded deployments.',
        prerequisites: [
          'An Azure subscription with model-deployment permissions and quota in a region supporting the chosen audio models.',
          'Source 83 Launch exercise and its local Python, VS Code, Git, Azure CLI, and OpenAI SDK environment.',
          'A supported short sample audio file and local playback. A microphone is optional; the file-based exercise does not require browser capture.',
        ],
        steps: [
          {
            title: 'Choose a supported project region',
            surface: 'Microsoft Foundry',
            instruction: 'Open source 83’s Launch exercise. Create or choose your isolated Foundry project. The linked lab recommends East US 2, but verify current model availability and quota before deploying; a region recommendation is not a guarantee for your subscription.',
            expected: 'You know whether both required audio capabilities are available, or have a clear availability/quota blocker.',
          },
          {
            title: 'Inspect and deploy transcription',
            surface: 'Microsoft Foundry',
            instruction: 'Open Discover → Models and filter by the speech-to-text inference task. Inspect gpt-4o-mini-transcribe or an exercise-supported alternative. Review its model card and deployment pricing, then deploy it if permitted. Record the deployment name, not its key.',
            expected: 'If deployment succeeds, its details show a model explicitly supporting transcription and a deployment name you can reference.',
          },
          {
            title: 'Inspect and deploy synthesis',
            surface: 'Microsoft Foundry',
            instruction: 'Filter the catalog by text-to-speech and inspect gpt-4o-mini-tts or a supported alternative. Deploy it after checking cost and availability. In Build → Deployments, inspect both entries and their endpoint details.',
            expected: 'The two deployments have different audio directions; neither is inferred merely from a similar family name.',
          },
          {
            title: 'Prepare the real local clients',
            surface: 'Cloud Shell / local editor',
            instruction: 'Follow source 83 in Labfiles\\03-gen-ai-speech\\Python, using its generate-speech and transcribe-speech folders. Install the prescribed requirements, configure each deployment and endpoint, and sign into the authorized tenant. Keep credentials out of code and learning notes.',
            expected: 'Each client points to the intended deployment with an API version and authentication method supported by the exercise.',
          },
          {
            title: 'Inspect binary input and its transcript',
            surface: 'Cloud Shell / local editor',
            instruction: 'Listen to the supplied short sample or your own synthetic WAV, then run the source’s transcription client. Inspect the binary-file upload and returned transcript. Compare the text with the audible sample rather than assuming the printed path means an upload occurred.',
            expected: 'A successful inference produces actual transcript output; errors remain observable instead of being replaced with illustrative text.',
          },
          {
            title: 'Change only a synthesis instruction',
            surface: 'Cloud Shell / local editor',
            instruction: 'Use the synthesis client to speak “The museum opens at nine” with a supported voice. Save and listen to the output. Change only a supported delivery instruction from calm to serious, regenerate to a distinct file, and compare the two.',
            expected: 'You can inspect real generated audio and describe any observed delivery difference without claiming byte-for-byte repeatability.',
          },
          {
            title: 'Record the capability boundary',
            surface: 'Browser',
            instruction: 'Record the two model capabilities, one transcript observation, and one synthesis observation. Note any unsupported parameter or unavailable model instead of silently substituting an untested configuration.',
            expected: 'Your evidence ties each result to the correct deployed capability and records uncertainty honestly.',
          },
        ],
        success: 'You can distinguish real transcription and synthesis model requests and inspect their outputs, or specify the deployment/inference blocker. The tutor neither uploads audio nor verifies these deployments.',
        evidencePrompt: 'Which model handled each direction, what did the transcript show, and what changed when you changed only the delivery instruction? Exclude keys, private audio, and signed URLs.',
        cleanup: 'Stop clients and playback. Remove only the audio-model deployments, files, and isolated resources you created and no longer need. Preserve shared deployments; delete a whole resource group only after checking that all contents are disposable.',
      },
    },
    check: {
      question: 'A developer has deployed gpt-4o-mini-tts and tries to upload a voicemail to obtain a transcript. What is the fundamental mismatch?',
      options: [
        { id: 'a', text: 'They need to change the synthesized voice name first.', explanation: 'Voice selection affects text-to-speech output; it cannot change the deployment into a transcription model.' },
        { id: 'b', text: 'They need a speech-to-text-capable deployment and a transcription call with the audio bytes.', explanation: 'The required data flow is audio → text, while the current deployment serves text → audio.' },
        { id: 'c', text: 'They should put the local voicemail path into a plain chat prompt.', explanation: 'A path in a prompt does not upload audio or create missing model capabilities.' },
      ],
      correctOptionId: 'b',
      explanation: 'The mistake is capability selection before syntax. Match the model, request operation, and actual input representation.',
    },
    recall: {
      prompt: 'Contrast the Speech SDK route with the generative audio route, then explain why a deployment name and binary-file input matter.',
      answer: 'Speech SDK uses prebuilt capabilities through SpeechConfig and recognizer/synthesizer objects. The generative route uses an AzureOpenAI client and a deployed model’s audio APIs. model references the actual deployment; transcription needs uploaded audio bytes rather than a filename mentioned in text.',
    },
    transfer: 'A customer wants voice features in an existing generative app. Ask whether they need specialized recognition, precise SSML control, model-driven delivery instructions, or real-time conversation, then compare supported options using a short measured sample.',
    sourceNote: 'Source 221 lists gpt-4o-tts as well as gpt-4o-mini-tts; the exercise uses the mini model. Source 225 also lists transcribe and transcribe-diarize variants. Use actual catalog availability and supported parameters rather than assuming every listed name is deployable in every region. The linked exercise pins an API version; do not silently mix it with a different client generation.',
  },
  {
    id: 'speech-mcp',
    title: 'Give an agent Speech tools',
    cluster: 'speech',
    examDomain: 'Implement text analysis solutions',
    summary: 'Connect speech tools, secure their storage boundary, and verify transcription and generated audio.',
    minutes: 9,
    order: 470,
    prerequisites: ['speech-to-text', 'text-to-speech', 'agents-mcp', 'model-deployment'],
    sourceIds: [140, 236, 25, 82, 144, 204, 43],
    steps: [
      {
        title: 'An agent chooses a speech operation',
        body: 'A model that reasons well does not need native audio capability to use an external Speech tool. The Speech MCP server exposes recognition and synthesis through discoverable tool descriptions. The agent selects an operation, supplies a file URL or text, and presents the returned transcript or audio link. Inspect tool calls and approvals to establish that the service actually ran. This file-oriented tool workflow is not the same as a persistent Voice Live conversation with interruption handling.',
      },
      {
        title: 'Audio needs somewhere to live',
        body: 'Speech MCP differs from a text-only tool because synthesized output is an audio file. The server stores generated audio in an Azure Blob Storage container and returns a link. Transcription can read an accessible audio URL. The corpus connection therefore has two credential concerns: Ocp-Apim-Subscription-Key authorizes the Foundry Speech resource, while X-Blob-Container-Url supplies a container SAS URL for storage access. A valid Speech key does not automatically grant permission to write to a storage account.',
      },
      {
        title: 'Treat storage links as capabilities, not harmless text',
        body: 'A SAS URL contains authorization to the scoped storage resource for a limited time. The exercise requires read, add, create, write, and list permissions on its container. Use the shortest practical expiry and HTTPS, keep the container private, and put the SAS only in the connection’s protected configuration. Do not paste it into prompts or evidence. Use the exercise’s public sample URL for transcription; generated download links may also carry secrets and should not be shared casually.',
      },
      {
        title: 'Inspect parameters as well as final answers',
        body: 'Speech tools can accept a requested voice, recognition locale, phrase hints, profanity handling, and output detail or format options. These shape the service call, so inspect the tool arguments rather than assuming the model followed every requested setting. A programmatic client uses AIProjectClient with the project endpoint, get_openai_client(), and a Responses request containing the saved agent_reference name. The resource key and storage SAS belong to the tool connection, not that natural-language request. Handle pending approvals explicitly.',
        example: '“Generate this greeting using en-GB-SoniaNeural” requests a voice. A phrase hint helps recognition of a domain term; it is not a replacement for the correct recognition language.',
      },
    ],
    lab: {
      title: 'Optional rehearsal: authorize the two boundaries',
      goal: 'Plan Speech authorization and storage access separately.',
      context: 'This YAML contains credential kinds, never credential values. It does not create storage, generate a SAS, or connect an MCP server.',
      fields: [
        {
          id: 'speechAuth',
          label: 'Corpus connection credential for Speech',
          hint: 'This authorizes the Foundry capability, not blob storage.',
          options: [
            { value: 'foundry-resource-key', label: 'Foundry resource key in the credential field' },
            { value: 'storage-container-name-only', label: 'Container name without a credential' },
          ],
          expected: 'foundry-resource-key',
          explanation: 'The corpus’s key-based connection uses the resource key for Speech. A container name supplies neither that authentication nor storage authorization.',
        },
        {
          id: 'storage',
          label: 'Storage access for generated audio',
          hint: 'The tool must write files, but it does not need unrestricted account access.',
          options: [
            { value: 'short-lived-container-sas', label: 'Short-lived, scoped container SAS with required permissions' },
            { value: 'public-account-with-no-expiry', label: 'Broad public access with no expiry' },
            { value: 'read-only-container-sas', label: 'Read-only container SAS' },
          ],
          expected: 'short-lived-container-sas',
          explanation: 'A scoped SAS can grant the required writes without opening all storage. Read-only access cannot save synthesized output; broad public access is unnecessary.',
        },
      ],
      template: 'kind: conceptual-plan\nspeech_authentication: {{speechAuth}}\nstorage_access: {{storage}}\nsecrets_in_prompts: false\nverify_tool_logs: true\n',
      language: 'yaml',
      expectedOutput: 'Illustrative only: a tool-backed transcript or a link to generated audio in the permitted container. No connection or SAS is created here.',
      takeaway: 'Tool execution can cross separate service and storage authorization boundaries.',
      azure: {
        title: 'Connect Speech MCP with isolated storage',
        sourceId: 82,
        environment: 'portal-and-code',
        minutes: 40,
        cost: 'Agent/model calls, Speech operations, blob storage, and storage transactions may all be billed. Keep audio short and delete isolated storage when finished.',
        prerequisites: [
          'Source 82 Launch exercise and permission to create an isolated storage account/container and configure Foundry tools.',
          'A Foundry project with a supported deployed model and an organization-approved tool authentication method.',
          'Ability to issue a narrowly scoped SAS under your policy. Do not disable account security policies to make the example run.',
          'Local source-exercise tooling only for the final client step; browser playback does not require a microphone.',
        ],
        steps: [
          {
            title: 'Create the audio container',
            surface: 'Azure portal',
            instruction: 'Follow source 82’s Launch exercise. Create a Standard, locally redundant storage account in an isolated lab resource group if your policy permits. Open Data storage → Containers and add a private container named files. Use only this lab’s audio there.',
            expected: 'If creation succeeds, the container is visible in your isolated account and anonymous public access is not required.',
          },
          {
            title: 'Scope storage authorization',
            surface: 'Azure portal',
            instruction: 'Use the files container menu → Generate SAS. Select Read, Add, Create, Write, and List as required by the source, HTTPS only, and the shortest practical lab expiry. Keep the SAS URL in a secure credential location for the connection; do not save it in a learning note or prompt.',
            expected: 'The credential is limited to the intended container and time window, or policy has produced a clear blocker.',
          },
          {
            title: 'Create the speech agent',
            surface: 'Microsoft Foundry',
            instruction: 'In the isolated Foundry project, open Build → Agents and create a speech agent with a supported deployed model. Instruct it to use Azure Speech tools for transcription and synthesis. Save its exact name. Confirm the region and model are available before continuing.',
            expected: 'The agent’s saved instructions describe speech tool use, but it still needs the actual connection attached.',
          },
          {
            title: 'Connect both credential paths',
            surface: 'Microsoft Foundry',
            instruction: 'Open Tools → Tools → Connect a tool and select Azure Speech MCP Server, also called Azure Speech in Foundry Tools. Enter the Foundry resource name. Follow the approved authentication path; the corpus uses Ocp-Apim-Subscription-Key and X-Blob-Container-Url. Attach the connection with Use in an agent and verify its tool list.',
            expected: 'The selected agent has the Speech connection and scoped storage configuration without credentials in its instructions.',
          },
          {
            title: 'Inspect a generated audio artifact',
            surface: 'Microsoft Foundry',
            instruction: 'Ask the agent to synthesize “The museum opens at nine” using an available voice. Review and approve the call once. Inspect Logs, then open the returned audio link and listen. In Azure portal, check that your files container has the generated object. Do not share the link if it contains a SAS.',
            expected: 'A successful call produces a trace and stored audio; failure to write storage is distinct from failure to authenticate to Speech.',
          },
          {
            title: 'Change a voice and test recognition',
            surface: 'Microsoft Foundry',
            instruction: 'Keep the sentence unchanged and request another supported voice; compare the tool arguments and audio. Then use the original exercise’s public speech_2.wav transcription URL: https://microsoftlearning.github.io/mslearn-ai-language/Labfiles/05-speech-tool/speech_2.wav. Inspect the actual recognition call and transcript.',
            expected: 'You have observed the two tool directions and a controlled voice change without placing a private SAS in the prompt.',
          },
          {
            title: 'Use the source client and record the trace',
            surface: 'Cloud Shell / local editor',
            instruction: 'Follow source 82’s client section in Labfiles\\05-speech-tool\\Python\\speech-client, using its environment, project endpoint, Azure sign-in, and exact agent name. Repeat one synthetic request, handling approvals. Record only the operation, result kind, and any non-secret error; stop the client afterward.',
            expected: 'The programmatic path can be connected to the same configured agent, or a specific client/approval blocker is visible.',
          },
        ],
        success: 'You can trace a real Speech tool call to a transcript or stored audio and explain both authorization boundaries, or name the blocked boundary. The app cannot validate the connection.',
        evidencePrompt: 'Which tool ran, where was output stored, and what changed with the voice request? Include no resource keys, SAS URLs, signed links, or private recordings.',
        cleanup: 'Stop the client and restore any lab-only approval relaxation. Remove your generated blobs, agent, and tool connection. Let the short-lived SAS expire or follow your approved revocation procedure; never rotate a shared account key casually. Delete only isolated lab storage and Foundry resources, preserving shared ones.',
      },
    },
    check: {
      question: 'Speech requests authenticate, but synthesis cannot save generated audio. The connection’s container SAS has only Read permission. What should you repair?',
      options: [
        { id: 'a', text: 'Put the Speech resource key into the agent’s prompt.', explanation: 'That leaks a credential and does not grant the tool permission to write a blob.' },
        { id: 'b', text: 'Deploy a model with a larger context window.', explanation: 'Model capacity does not change the storage authorization carried by the SAS.' },
        { id: 'c', text: 'Replace the connection’s SAS with a short-lived container-scoped credential having the required storage permissions.', explanation: 'The failure is at the storage write boundary, which is independent from the already-working Speech authentication.' },
      ],
      correctOptionId: 'c',
      explanation: 'A successful service call does not imply access to its output destination. Repair the specific storage permission rather than changing unrelated model or prompt settings.',
    },
    recall: {
      prompt: 'Why does Speech MCP need Blob Storage, and what do the resource credential and container SAS each authorize?',
      answer: 'Generated audio needs persistent storage and is returned by link; transcription can read accessible files. The Foundry credential authorizes Speech, while the scoped SAS authorizes the required container operations. Neither should appear in prompts or learner evidence.',
    },
    transfer: 'A customer wants an agent to process recorded support calls. Ask where audio is stored, who can access it, how long links remain valid, and how they will prove the correct tool and voice were used.',
    sourceNote: 'Sources 140/236 describe Speech MCP as preview and teach key-based authentication. The linked exercise now also mentions a policy-dependent Entra alternative; do not bypass organizational restrictions. Its longer sample SAS expiry is not a security default: source 236 requires the shortest practical expiry and treating SAS URLs as secrets.',
  },
  {
    id: 'voice-live',
    title: 'Build an interruptible conversation',
    cluster: 'speech',
    examDomain: 'Implement text analysis solutions',
    summary: 'Use Voice Live for a managed real-time session rather than manually chaining isolated audio calls.',
    minutes: 8,
    order: 480,
    prerequisites: ['speech-overview', 'agents-what-is-an-agent', 'model-deployment'],
    sourceIds: [132, 88, 31, 68, 159, 208, 49],
    steps: [
      {
        title: 'Conversation requires more than two conversions',
        body: 'A natural voice exchange has overlapping responsibilities: listen for the user, recognize a turn, obtain a response, play it, and react when the user interrupts. Chaining one transcription call and one synthesis call does not automatically coordinate that lifecycle. Voice Live provides a real-time, bidirectional session that combines these concerns with supported models and agents. The application still owns its audio devices and user experience, but it does not have to assemble every service interaction independently.',
        example: 'A museum assistant begins explaining opening hours. The visitor interrupts with “Only tell me the closing time.” A useful experience must stop the old spoken answer and respond to the new turn.',
      },
      {
        title: 'Choose an agent or a direct model connection',
        body: 'Voice Live can connect directly to a supported model or integrate with a Foundry agent. An agent keeps instructions, tools, and behavior in its saved definition so voice clients need not duplicate that business logic. Authentication can use a resource API key or Microsoft Entra identity; the corpus recommends Entra for production. Match identity permissions and endpoint configuration to the chosen SDK/API version. A key in a browser URL can leak through logs even when transport encryption protects the connection.',
      },
      {
        title: 'Tune turn-taking and audio separately',
        body: 'Voice activity detection identifies speech activity and turn boundaries; semantic VAD helps manage conversational flow. Noise reduction and echo cancellation address different audio problems, especially when a speaker’s output reaches the microphone. Configure a known language or supported detection mode, and choose an available voice. PCM16 and G.711 represent different audio-format choices, not different agent intelligence. Interim responses and proactive engagement can add speech during waiting or silence; keep them off initially if they create unnecessary interruption or cognitive load.',
      },
      {
        title: 'Know which connection carries what',
        body: 'Voice Live uses WebSocket communication and JSON events to manage the session and streamed audio. Optional avatars use WebRTC for video and animation, rather than turning the audio WebSocket into a video transport. Avatar setup can involve an SDP offer, video settings, visemes, or blendshapes; none is required for a useful audio-only conversation. Begin with microphone, voice, and turn behavior, then add visual features only for a concrete user need and supported regional configuration.',
      },
    ],
    lab: {
      title: 'Optional rehearsal: choose conversation controls',
      goal: 'Plan a real-time conversation that handles turns rather than only producing audio files.',
      context: 'This YAML is a conceptual session plan. It does not open a microphone, connect a WebSocket, or launch a Voice Live agent.',
      fields: [
        {
          id: 'interaction',
          label: 'Approach for an interruptible voice exchange',
          hint: 'The requirement includes session coordination, not just individual conversions.',
          options: [
            { value: 'voice-live-session', label: 'Voice Live session with event handling' },
            { value: 'uncoordinated-file-calls', label: 'Independent file transcription and synthesis calls only' },
          ],
          expected: 'voice-live-session',
          explanation: 'Voice Live supplies real-time conversation orchestration. Independent calls need additional coordination to deliver the same turn-taking and interruption behavior.',
        },
        {
          id: 'turns',
          label: 'Mechanism for conversational turn boundaries',
          hint: 'A file codec represents audio; it does not decide whose turn it is.',
          options: [
            { value: 'configured-voice-activity-detection', label: 'Configured voice activity detection' },
            { value: 'rename-audio-files', label: 'Rename each audio file' },
            { value: 'voice-name-only', label: 'Choose a different voice name only' },
          ],
          expected: 'configured-voice-activity-detection',
          explanation: 'Turn detection interprets speech activity. A filename or voice identity does not establish turn boundaries.',
        },
      ],
      template: 'kind: conceptual-plan\ninteraction: {{interaction}}\nturn_detection: {{turns}}\ninterim_responses: off\navatar: off\n',
      language: 'yaml',
      expectedOutput: 'Illustrative only: listening → processing → speaking, with an interruption creating a new turn. No live session runs in this rehearsal.',
      takeaway: 'An interactive voice experience depends on session and turn behavior, not just the ability to create an audio file.',
      azure: {
        title: 'Test Voice Live in the agent playground',
        sourceId: 68,
        environment: 'foundry',
        minutes: 30,
        cost: 'Voice Live and the connected model can incur usage charges while you interact. Check pricing and availability, keep the test brief, and explicitly end sessions.',
        prerequisites: [
          'Source 68 Launch exercise and permission to create an isolated Foundry project and supported agent deployment.',
          'Voice Live support for the selected region/model; missing availability is a blocker, not a reason to invent a portal feature.',
          'A microphone, headphones or speakers, and permission to allow browser microphone access. Use only your own synthetic spoken prompts.',
        ],
        steps: [
          {
            title: 'Check project and feature availability',
            surface: 'Microsoft Foundry',
            instruction: 'Open source 68’s Launch exercise and follow its isolated project setup. Check the model and Voice Live availability in the selected region before deploying. Confirm the subscription and cost assumptions; keep optional avatar features off for this first test.',
            expected: 'You have a supported project/model combination or a specific availability or permission blocker.',
          },
          {
            title: 'Create a concise agent',
            surface: 'Microsoft Foundry',
            instruction: 'Open Build → Agents and create a lab agent with a supported model. Give it a small fictional task, such as answering questions about a museum that opens at nine and closes at five, in no more than two sentences. Save its exact name and instructions.',
            expected: 'The saved agent owns the conversational task and facts before audio is enabled.',
          },
          {
            title: 'Enable the real voice mode',
            surface: 'Microsoft Foundry',
            instruction: 'In the agent playground, enable Voice mode beneath the model selection. Open the Configuration pane using its settings control if needed. If the switch is unavailable, check source 68’s current prerequisites rather than assuming a chat text box is a voice session.',
            expected: 'The Voice Live configuration is available for this agent, or the unsupported feature is explicitly recorded.',
          },
          {
            title: 'Choose a controlled audio setup',
            surface: 'Microsoft Foundry',
            instruction: 'Select English or the supported language you will speak and one available voice. Review VAD and audio-enhancement settings. Leave interim responses, proactive engagement, and avatars off for the first comparison. Save the configuration and use headphones where possible.',
            expected: 'You can identify the language, voice, and turn-detection settings independently.',
          },
          {
            title: 'Start with explicit microphone permission',
            surface: 'Microsoft Foundry',
            instruction: 'Select Start session and allow microphone access only for the intended browser site. Ask “When does the museum open and close?” Observe Listening, Processing, or Speaking states as available, and enable captions with the cc control to compare recognized text and the answer.',
            expected: 'A successful session yields an observable spoken exchange and captions. A blocked microphone or service error remains a separate recorded outcome.',
          },
          {
            title: 'Try one interruption',
            surface: 'Microsoft Foundry',
            instruction: 'During a response, say “Just the closing time, please.” Observe whether playback yields to the new input and whether the answer addresses it. Keep the same model, language, and voice so this tests turn behavior rather than several changed settings.',
            expected: 'You can describe the actual interruption behavior, including delay or failure, rather than assuming it worked because voice mode was enabled.',
          },
          {
            title: 'Change one voice and end the session',
            surface: 'Microsoft Foundry',
            instruction: 'End the session, select one different available voice, save, and start a new short session with the same opening-hours question. Compare delivery, then use the session’s end control. Record only a synthetic transcript excerpt and your interruption observation.',
            expected: 'You have a controlled voice comparison and have deliberately ended microphone capture and the cloud session.',
          },
        ],
        success: 'You can describe a real voice exchange and interruption attempt, or the precise microphone/feature/service blocker. Enabling Voice mode alone is not proof that the exercise succeeded.',
        evidencePrompt: 'What did you observe when you interrupted, and what changed when only the voice changed? Do not include keys, private speech, or account details.',
        cleanup: 'End every live session and revoke browser microphone permission if you no longer want it. Remove only your lab agent, optional deployment, and isolated resource group when finished; preserve shared resources and inspect group contents before deletion.',
      },
    },
    check: {
      question: 'A voice assistant must yield when a user interrupts and continue with a new turn. What is missing from a design containing only independent transcription and synthesis calls?',
      options: [
        { id: 'a', text: 'A longer output filename.', explanation: 'File naming does not coordinate microphone input, turn boundaries, and ongoing playback.' },
        { id: 'b', text: 'A session and event-handling layer for turn-taking and interruption, such as Voice Live.', explanation: 'That layer coordinates the real-time exchange instead of treating each conversion as an isolated file task.' },
        { id: 'c', text: 'An avatar, because audio-only sessions cannot be interrupted.', explanation: 'Avatars are optional visual output. Audio-only Voice Live conversations can support turn-taking and interruption.' },
      ],
      correctOptionId: 'b',
      explanation: 'The load-bearing requirement is real-time coordination. Neither a nicer voice nor a visual avatar replaces it.',
    },
    recall: {
      prompt: 'Explain why Voice Live differs from two separate audio calls, and name the protocols used for its session and optional avatar.',
      answer: 'Voice Live manages a bidirectional real-time conversation with turn detection and events; separate calls do not automatically coordinate interruption. The session uses WebSocket communication, while optional avatar video/animation uses WebRTC.',
    },
    transfer: 'A customer wants a hands-free assistant in a noisy room. Ask about interruptions, echo, available devices, language, latency, and whether extra interim speech helps or distracts before proposing an avatar.',
    sourceNote: 'Source 49 records Voice mode in preview; availability and labels can change. Sources 31/88 discuss agent identifiers while the linked source 68 client uses version-specific named agent configuration. Use the matching exercise/API version, not a hybrid of those examples. An arbitrary model is not guaranteed Voice Live support.',
  },
  {
    id: 'voice-live-events',
    title: 'Handle the Voice Live lifecycle',
    cluster: 'speech',
    examDomain: 'Implement text analysis solutions',
    summary: 'Trace asynchronous session events and stop buffered playback immediately when the user interrupts.',
    minutes: 9,
    order: 490,
    prerequisites: ['voice-live', 'speech-to-text', 'text-to-speech'],
    sourceIds: [87, 88, 31, 68, 159, 208, 49],
    steps: [
      {
        title: 'A connection starts a lifecycle, not a single request',
        body: 'The Voice Live Python client is async-only from version 1.0.0 in the supplied corpus. Its asynchronous connect helper opens a WebSocket session; your application then configures the session, sends audio, and consumes server events. The source exercise’s VoiceAssistant and AudioProcessor are application-defined helper classes, not magic SDK classes that appear after an import. One manages conversation behavior; the other manages real microphone capture, playback, and shutdown on the machine running the client.',
      },
      {
        title: 'Distinguish commands from acknowledgments',
        body: 'Client events request actions: session.update changes configuration, input_audio_buffer.append sends audio chunks, and response.create requests generation when required by the selected turn mode. Server events report what happened: session.updated acknowledges settings, conversation.item.created reports a conversation item, and response.done marks response-generation completion. Configure modalities, audio formats, turn detection, noise reduction, and echo cancellation deliberately. Keep automatic VAD and manual buffer commit behavior consistent; sending redundant turn triggers can create confusing duplicate work.',
        example: 'Sending session.update is an intention. Observing session.updated is evidence that the service accepted a session update. Neither event alone proves useful microphone audio has arrived.',
      },
      {
        title: 'Stop local playback at the interruption boundary',
        body: 'When the server reports INPUT_AUDIO_BUFFER_SPEECH_STARTED, the user has begun speaking. The client must immediately stop its current playback and discard queued old response audio. Waiting only for server-side cancellation can leave already-buffered audio playing over the user. Preserve the new user input and follow the sample’s cancellation behavior for the active response; do not reset the whole conversation simply to silence a speaker. This is why interruption handling belongs near the audio playback queue.',
      },
      {
        title: 'Finish streams and release devices explicitly',
        body: 'Audio arrives in chunks, so append, commit, and clear have different jobs: add input, finalize a turn when needed, or discard buffered input. Likewise, response.done does not mean every queued output sample has already been heard; inspect response status and local playback separately. Handle failures and close the connection cleanly, then stop capture and release audio hardware in a shutdown path. Record event types and timings for diagnosis without retaining private utterances or credentials in unrestricted logs.',
      },
    ],
    lab: {
      title: 'Optional rehearsal: repair talking over the user',
      goal: 'Choose the event and local action needed for responsive interruption.',
      context: 'This YAML is a conceptual event-handling plan, not a Voice Live API payload or an audio simulation.',
      fields: [
        {
          id: 'event',
          label: 'Event that signals the user has started speaking',
          hint: 'Do not wait until the old response has finished generating.',
          options: [
            { value: 'input-audio-buffer-speech-started', label: 'INPUT_AUDIO_BUFFER_SPEECH_STARTED' },
            { value: 'response-done', label: 'response.done' },
            { value: 'session-updated', label: 'session.updated' },
          ],
          expected: 'input-audio-buffer-speech-started',
          explanation: 'Speech-started is the interruption signal. Response completion or session acknowledgment does not identify that the user has begun a new turn.',
        },
        {
          id: 'action',
          label: 'Immediate action on the client',
          hint: 'Bytes already queued for the speaker are outside a server response’s future generation.',
          options: [
            { value: 'stop-playback-and-clear-old-output', label: 'Stop playback and clear queued old response audio' },
            { value: 'wait-for-server-only', label: 'Wait for the server while queued playback continues' },
            { value: 'erase-conversation', label: 'Erase all conversation history' },
          ],
          expected: 'stop-playback-and-clear-old-output',
          explanation: 'Stopping and clearing old local output prevents talking over the user. Waiting leaves queued sound playing, while erasing history is an unrelated and destructive workaround.',
        },
      ],
      template: 'kind: conceptual-plan\ninterrupt_event: {{event}}\nclient_action: {{action}}\nretain_new_user_turn: true\nrelease_devices_on_exit: true\n',
      language: 'yaml',
      expectedOutput: 'Synthetic event sketch: speech-started → local playback stops → new turn proceeds. It is an expected lifecycle, not a recorded live trace.',
      takeaway: 'Real-time correctness includes what the local audio queue is doing, not just what the service generated.',
      azure: {
        title: 'Observe events in the source Voice Live client',
        sourceId: 68,
        environment: 'portal-and-code',
        minutes: 35,
        cost: 'The client opens real billable Voice Live/model sessions. Keep tests short, inspect current pricing, and stop both client and session explicitly after observation.',
        prerequisites: [
          'Your authorized source 68 Foundry agent with Voice mode configured in a supported region.',
          'A local microphone/headset and operating-system audio permissions; remote Cloud Shell is not a substitute for local audio hardware.',
          'The exact Voice Live SDK and API versions in the current linked exercise, with the required Entra permissions; the corpus names Cognitive Services User for Voice Live access.',
          'Source 68’s local VS Code, Python, Git, Azure CLI, and audio-library requirements.',
        ],
        steps: [
          {
            title: 'Inspect the saved agent configuration',
            surface: 'Microsoft Foundry',
            instruction: 'Open the isolated source 68 agent in Build → Agents. Confirm its saved voice configuration and exact case-sensitive name. Note the project name and the resource base endpoint separately; use the current lab’s configuration contract instead of substituting a project URL into a resource field.',
            expected: 'The client connection values can be related to real portal objects without copying any secret into learner evidence.',
          },
          {
            title: 'Establish a short portal baseline',
            surface: 'Microsoft Foundry',
            instruction: 'Start a voice session in the playground, allow the intended browser’s microphone, and ask one synthetic question. Try a short interruption, then end the session. This separates a cloud/agent problem from a later local-client hardware problem.',
            expected: 'You have a recorded portal outcome, successful or blocked, before testing a second client environment.',
          },
          {
            title: 'Use the source-backed async client',
            surface: 'Cloud Shell / local editor',
            instruction: 'Open Labfiles\\06-voice-live\\Python\\chat-client from the linked exercise. Create its required local environment and install the exact prescribed dependencies. Configure the resource endpoint, project, and agent name, and sign in with the authorized Azure identity. Do not combine stable REST identifiers with a different preview SDK’s named AgentConfig.',
            expected: 'The local sample has a consistent SDK/API configuration and access to the actual audio hardware.',
          },
          {
            title: 'Trace connection and configuration',
            surface: 'Cloud Shell / local editor',
            instruction: 'Complete the exercise’s connect, AudioProcessor, session setup, playback, and event-loop sections. Inspect the supplied event handlers before running. Locate session configuration acknowledgment and the speech-started handler; distinguish these from your own helper classes and device code.',
            expected: 'You can point to the real connection, session configuration, and event-processing paths rather than assuming the SDK performs all local I/O automatically.',
          },
          {
            title: 'Observe one ordinary turn',
            surface: 'Cloud Shell / local editor',
            instruction: 'Run chat-client.py locally with a headset. Ask a short synthetic question and inspect the sample’s status/event output as it configures the session, captures speech, and plays a response. If additional diagnostic output is needed, log event types only, not audio bytes, tokens, or private utterances.',
            expected: 'A successful run exposes an actual asynchronous lifecycle; an access or device error is preserved as the observed result.',
          },
          {
            title: 'Change input by interrupting',
            surface: 'Cloud Shell / local editor',
            instruction: 'Ask a question that produces a few sentences, then say “Stop. One sentence, please” while it speaks. Observe the speech-started event and whether old playback stops promptly. If old sound continues, inspect the local playback queue and shutdown/cancel path before changing the model.',
            expected: 'You have a concrete interruption observation connecting an event to audible client behavior, including any lag or failure.',
          },
          {
            title: 'Close and record the lifecycle',
            surface: 'Cloud Shell / local editor',
            instruction: 'Use the exercise’s exit control, normally Ctrl+C, and verify capture and playback stop. Record a short event sequence and whether interruption stopped the old audio. Keep only non-secret diagnostic notes and a next action if something was blocked.',
            expected: 'The client has released audio devices and ended the connection; your note distinguishes generation completion from completed local playback.',
          },
        ],
        success: 'You can explain an observed event sequence and local interruption behavior, or identify the specific blocked layer. A planned event sequence is not proof that the client ran.',
        evidencePrompt: 'Which event preceded your interruption handling, did old playback stop, and how did you verify shutdown? Include no tokens, private speech, or full diagnostic dumps.',
        cleanup: 'Stop the local process and all portal sessions, release the microphone, and remove unneeded synthetic recordings. Delete only your isolated agent/deployments/resources when no longer needed; preserve shared Azure resources and credentials.',
      },
    },
    check: {
      question: 'The service notices a user interruption, but the app keeps speaking buffered audio from the old answer. Which fix addresses the failure directly?',
      options: [
        { id: 'a', text: 'Wait for response.done before touching the local playback queue.', explanation: 'Waiting allows already-buffered audio to continue talking over the user; generation completion is not the same as playback state.' },
        { id: 'b', text: 'Handle INPUT_AUDIO_BUFFER_SPEECH_STARTED by immediately stopping playback and clearing queued old response audio.', explanation: 'This acts at the client boundary where the unwanted sound is still being played, while preserving the new input turn.' },
        { id: 'c', text: 'Delete the conversation history and reconnect for every utterance.', explanation: 'That discards useful context without directly repairing the playback queue’s interruption behavior.' },
      ],
      correctOptionId: 'b',
      explanation: 'The causal failure is local buffered output. Server-side recognition of an interruption does not retroactively remove bytes already queued at the speaker.',
    },
    recall: {
      prompt: 'Explain session.update versus session.updated, then describe what the client must do when the user interrupts.',
      answer: 'session.update is a client request; session.updated acknowledges accepted session settings. On speech-started, stop local playback and discard queued old response audio, handle the active response according to the sample, preserve new user input, and eventually release devices and the connection cleanly.',
    },
    transfer: 'A customer says its voice agent “talks over people.” Ask for the speech-start event timing, local playback-buffer behavior, and shutdown/cancellation handling before blaming recognition quality or replacing the model.',
    sourceNote: 'Source 87 states that the SDK is async-only from 1.0.0. Source 88 shows REST API 2025-10-01 with agent_id/project_id; the current source 68 lab uses a matched preview SDK/API and named AgentConfig. Keep those contracts separate. Source 208 mentions a Flask app, but the demonstrated source 68/49 client is a local Python audio application; this unit does not invent a Flask implementation.',
  },
]
