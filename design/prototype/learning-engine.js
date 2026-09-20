(function (root, factory) {
  const engine = factory();
  if (typeof module === "object" && module.exports) module.exports = engine;
  else root.AI103Design = engine;
})(globalThis, function () {
  "use strict";

  const STORAGE_KEY = "ai103-replacement-prototype-v1";
  const DAY = 86_400_000;
  const PIPELINE = ["retrieve", "augment", "generate"];
  const PIPELINE_LABELS = {
    retrieve: "Find the relevant policy",
    augment: "Add the policy to the question",
    generate: "Generate an answer from that context",
  };
  const SCREENS = ["brief", "teach", "assemble", "fieldwork", "question", "feedback", "repair", "receipt"];
  const QUESTION_KINDS = ["baseline", "transfer", "review"];
  const SOURCES = [
    { id: 239, title: "Understanding RAG for agents", url: "https://learn.microsoft.com/en-gb/training/modules/introduction-foundry-iq/2-understand-rag" },
    { id: 19, title: "Compare and combine optimization strategies", url: "https://learn.microsoft.com/en-gb/training/modules/optimize-generative-ai-model-performance/5-compare-combine-strategies" },
    { id: 95, title: "Fine-tune a model for consistent behavior", url: "https://learn.microsoft.com/en-gb/training/modules/optimize-generative-ai-model-performance/4-fine-tune-model" },
    { id: 22, title: "Configure data sources for knowledge bases", url: "https://learn.microsoft.com/en-gb/training/modules/introduction-foundry-iq/4-data-requirements" },
    { id: 23, title: "Configure retrieval with Foundry IQ", url: "https://learn.microsoft.com/en-gb/training/modules/introduction-foundry-iq/5-configure-retrieval" },
  ];
  const POLICY = "# Practice support policy\n\nSynthetic learning material. Not a real business policy.\n\nReturns may be requested within 14 days of delivery. A receipt and order number are required. A person must approve any refund.\n\nStandard delivery takes 3 to 5 working days. This policy does not specify international delivery or damaged-goods exceptions.\n\nIf the policy does not contain the answer, state what is missing. Do not invent a rule or claim that a refund has been approved.\n";
  const TEACHING = [
    {
      title: "An answer needs somewhere to get its facts.",
      body: "Your support assistant can write a convincing reply. But it cannot know your private return policy just because you ask politely. Give it a way to find the relevant policy, include that passage with the question, and answer using that evidence.",
      example: "A customer asks how long they have to return an order. The application retrieves the 14-day clause before the model writes the reply.",
      takeaway: "That is retrieval-augmented generation, or RAG. The new knowledge goes into the context for this answer. It does not retrain the model.",
    },
    {
      title: "Change the information, or change the behaviour?",
      body: "These are different jobs. RAG supplies relevant facts at answer time. Prompt instructions guide the response. If evaluated prompts and examples still do not produce consistent behaviour, fine-tuning can train that behaviour using representative examples.",
      example: "A changed return window calls for an updated knowledge source. A persistent brand-voice problem after prompt testing may justify fine-tuning. If you need both, the approaches can work together.",
      takeaway: "Start simple and evaluate. Retrieval quality still matters: adding RAG is not a guarantee that every answer is correct.",
    },
  ];
  const QUESTIONS = {
    baseline: [
      {
        id: "policy-context-a",
        title: "Make the policy change reach the answer.",
        scenario: "The return window changes regularly. Your assistant must answer from the current private policy and show which passage supports it. What should supply that knowledge?",
        choices: [
          { id: "rag", text: "Retrieve the relevant policy at answer time" },
          { id: "train", text: "Fine-tune the model whenever the policy changes" },
          { id: "prompt", text: "Tell the model to be accurate, without providing the policy" },
        ],
        reasons: [
          { id: "weights", text: "Retrieval changes the model's trained weights." },
          { id: "context", text: "The current source becomes evidence in the prompt context." },
          { id: "guarantee", text: "Retrieval guarantees that generated answers are correct." },
        ],
        answer: "rag",
        reason: "context",
        explanation: "RAG supplies the current policy as context. It does not update the model's weights, and you still need to check whether the retrieved passage supports the answer.",
      },
      {
        id: "policy-context-b",
        title: "Try the same boundary in a different case.",
        scenario: "An internal travel assistant needs this week's approved hotel list. The list is private and changes often. Its writing style is already acceptable. Which part should you add?",
        choices: [
          { id: "prompt", text: "An instruction to remember this week's list" },
          { id: "rag", text: "Retrieval from the maintained hotel list" },
          { id: "train", text: "A new fine-tuned model every week" },
        ],
        reasons: [
          { id: "style", text: "The problem is inconsistent style, not missing facts." },
          { id: "context", text: "It needs current information supplied when answering." },
          { id: "memory", text: "An instruction gives access to documents the model has not received." },
        ],
        answer: "rag",
        reason: "context",
        explanation: "The missing capability is access to current facts. Retrieval supplies those facts when needed; an instruction alone cannot make an unseen private list available.",
      },
    ],
    transfer: [
      {
        id: "changed-requirement-a",
        title: "Now change the requirement.",
        scenario: "The assistant retrieves the right policy. Across an evaluation set, its tone is still inconsistent despite detailed instructions and examples. You have reviewed training examples. Policies will keep changing. What would you evaluate next?",
        choices: [
          { id: "train", text: "Replace retrieval with fine-tuning" },
          { id: "combine", text: "Keep retrieval and evaluate fine-tuning for behaviour" },
          { id: "more-docs", text: "Retrieve more policy documents to train the tone" },
        ],
        reasons: [
          { id: "same", text: "Grounding and learned behaviour solve the same problem." },
          { id: "fresh", text: "Fine-tuning will automatically read future policy updates." },
          { id: "separate", text: "Current facts and consistent behaviour need different mechanisms." },
        ],
        answer: "combine",
        reason: "separate",
        explanation: "Keep retrieval for changing facts. Evaluate fine-tuning for the remaining behaviour problem, using the same cases and accounting for training and maintenance costs.",
      },
      {
        id: "changed-requirement-b",
        title: "Separate the two things that need to change.",
        scenario: "A travel assistant must use today's prices and a consistent house style. The style remains inconsistent after prompt testing. Which proposal preserves the fresh-data path while testing a behaviour improvement?",
        choices: [
          { id: "combine", text: "Retrieve current prices and evaluate a fine-tuned model" },
          { id: "train", text: "Train on today's prices and remove retrieval" },
          { id: "more-docs", text: "Use retrieval alone to guarantee the house style" },
        ],
        reasons: [
          { id: "separate", text: "Retrieval supplies facts; training can adapt learned behaviour." },
          { id: "fresh", text: "Training automatically stays synchronized with the price list." },
          { id: "same", text: "Every consistency problem is solved by adding more documents." },
        ],
        answer: "combine",
        reason: "separate",
        explanation: "The fresh-price path and the learned-style path are different. Keep both concerns explicit and evaluate the combined result rather than assuming it improved.",
      },
    ],
    review: [
      {
        id: "delayed-variant-a",
        title: "Bring the idea back, without the explanation.",
        scenario: "An equipment assistant writes clearly but gives old maintenance instructions. Approved instructions change monthly. What is the next capability to add?",
        choices: [
          { id: "train", text: "Fine-tune for a friendlier maintenance tone" },
          { id: "rag", text: "Retrieve the current approved instructions" },
          { id: "prompt", text: "Ask it to sound more certain" },
        ],
        reasons: [
          { id: "tone", text: "Confidence of wording determines factual freshness." },
          { id: "weights", text: "Retrieval continually retrains model weights." },
          { id: "context", text: "The missing facts belong in the answer-time context." },
        ],
        answer: "rag",
        reason: "context",
        explanation: "The requirement changed the knowledge available, not the desired tone. Retrieve the approved instructions and inspect whether the answer is supported.",
      },
      {
        id: "delayed-variant-b",
        title: "Revisit the mechanism in one more setting.",
        scenario: "A benefits assistant cannot access a private eligibility policy. Its style is fine. The policy changes independently of the deployed model. What should provide the missing information?",
        choices: [
          { id: "rag", text: "A retrieval path to the maintained policy" },
          { id: "prompt", text: "A longer instruction with no policy content" },
          { id: "train", text: "Tone examples for fine-tuning" },
        ],
        reasons: [
          { id: "weights", text: "A retrieved passage permanently changes learned behaviour." },
          { id: "context", text: "Relevant source content is supplied for the current answer." },
          { id: "memory", text: "The model can infer the contents of any private document." },
        ],
        answer: "rag",
        reason: "context",
        explanation: "Private information must be supplied through an authorized data path. Here, retrieval puts relevant evidence into the context used for the answer.",
      },
    ],
  };
  const REPAIRS = {
    unknown: {
      title: "Let's make the missing piece concrete.",
      body: "No guess needed. A model's trained behaviour and the information supplied for a particular answer are different. A policy passage can be retrieved for this question without retraining anything.",
      contrast: "A new return window changes the source you retrieve. A persistent style problem after prompt evaluation may call for training on examples.",
    },
    context: {
      title: "Keep changing facts outside the model's training.",
      body: "Your choice would make training do the job of a maintained knowledge source. In this case, the information changes while the model can stay the same. Retrieve the relevant passage when a question arrives.",
      contrast: "Retrieval changes the answer's context. Fine-tuning changes learned behaviour. Neither is an automatic guarantee of a correct answer.",
    },
    reason: {
      title: "The choice fits. The reason needs one repair.",
      body: "Selecting the right approach is only part of the decision. Retrieval does not change the model's weights or guarantee correctness. It supplies evidence to use for this answer.",
      contrast: "Ask where the change happens: in the prompt context, in instructions, or in training. That boundary is more useful than matching a product name.",
    },
    combine: {
      title: "Do not remove the part that is already solving the facts.",
      body: "The changed requirement adds a behaviour problem; it does not remove the need for current policies. Keep retrieval for the facts and evaluate the behaviour change separately.",
      contrast: "The two mechanisms can be combined. Judge the result against the same cases, rather than assuming that adding a technique must help.",
    },
  };

  function iso(now) {
    if (!Number.isFinite(now)) throw new TypeError("A valid time is required.");
    return new Date(now).toISOString();
  }

  function initialState() {
    return {
      version: 1, screen: "brief", paused: false, preview: false,
      teachingStep: 0, taught: false,
      pipeline: ["generate", "retrieve", "augment"], pipelineAttempts: 0,
      pipelineHelp: false, pipelineSolved: false, pipelineMessage: "",
      questionKind: "baseline", variant: 0,
      attempts: { baseline: 0, transfer: 0, review: 0 },
      helped: { baseline: false, transfer: false, review: false },
      draft: { choice: "", reason: "" },
      feedback: null, repair: null, events: [],
      fieldwork: { mode: "portal", checkpoint: 0, note: "", resource: "", status: "not-started", fixture: "supported" },
      completedAt: null, reviewDueAt: null, retainedAt: null,
      preferences: { quiet: false, size: "comfortable", theme: "light" },
    };
  }

  function copy(state) { return structuredClone(state); }
  function isRecord(value) { return value !== null && typeof value === "object" && !Array.isArray(value); }
  function validText(value, max = 10000) { return typeof value === "string" && value.length <= max; }
  function validDate(value) { return value === null || (typeof value === "string" && Number.isFinite(Date.parse(value))); }

  function validateState(value) {
    const invalid = () => { throw new TypeError("This saved design session is not valid. It has not been replaced."); };
    if (!isRecord(value) || value.version !== 1 || !SCREENS.includes(value.screen)) invalid();
    if (!["paused", "preview", "taught", "pipelineHelp", "pipelineSolved"].every((key) => typeof value[key] === "boolean")) invalid();
    if (!Number.isInteger(value.teachingStep) || value.teachingStep < 0 || value.teachingStep >= TEACHING.length) invalid();
    if (!Array.isArray(value.pipeline) || value.pipeline.length !== 3 || new Set(value.pipeline).size !== 3 || !value.pipeline.every((id) => PIPELINE.includes(id))) invalid();
    if (!Number.isInteger(value.pipelineAttempts) || value.pipelineAttempts < 0 || !validText(value.pipelineMessage)) invalid();
    if (!QUESTION_KINDS.includes(value.questionKind) || ![0, 1].includes(value.variant)) invalid();
    if (!isRecord(value.attempts) || !isRecord(value.helped)) invalid();
    if (!QUESTION_KINDS.every((kind) => Number.isInteger(value.attempts[kind]) && value.attempts[kind] >= 0 && typeof value.helped[kind] === "boolean")) invalid();
    if (!isRecord(value.draft) || !validText(value.draft.choice, 100) || !validText(value.draft.reason, 100)) invalid();
    if (!Array.isArray(value.events) || value.events.length > 100) invalid();
    if (!value.events.every((event) => isRecord(event) && validText(event.id, 100) && validText(event.activity, 100)
      && ["reconstruction", "decision", "support", "retention", "review-practice"].includes(event.kind)
      && ["correct", "not-yet", "help-requested"].includes(event.result)
      && ["independent", "supported"].includes(event.support)
      && typeof event.simulation === "boolean" && event.at !== null && validDate(event.at))) invalid();
    if (new Set(value.events.map((event) => event.id)).size !== value.events.length) invalid();
    if (value.feedback !== null && (!isRecord(value.feedback) || typeof value.feedback.correct !== "boolean"
      || typeof value.feedback.unknown !== "boolean" || !validText(value.feedback.explanation)
      || !["independent", "supported"].includes(value.feedback.support))) invalid();
    if (value.repair !== null && !Object.hasOwn(REPAIRS, value.repair)) invalid();
    if (!isRecord(value.fieldwork) || !["portal", "rehearsal"].includes(value.fieldwork.mode)
      || !Number.isInteger(value.fieldwork.checkpoint) || value.fieldwork.checkpoint < 0 || value.fieldwork.checkpoint > 2
      || !validText(value.fieldwork.note) || !validText(value.fieldwork.resource, 200)
      || !["not-started", "observed", "blocked", "deferred"].includes(value.fieldwork.status)
      || !["supported", "missing"].includes(value.fieldwork.fixture)) invalid();
    if (!["completedAt", "reviewDueAt", "retainedAt"].every((key) => validDate(value[key]))) invalid();
    if (!isRecord(value.preferences) || typeof value.preferences.quiet !== "boolean"
      || !["comfortable", "large"].includes(value.preferences.size)
      || !["light", "dark"].includes(value.preferences.theme)) invalid();
    if (value.preview) throw new TypeError("A simulated review cannot be loaded as earned progress.");
    if (["assemble", "fieldwork", "question", "feedback", "repair", "receipt"].includes(value.screen) && !value.taught) invalid();
    if (["feedback", "repair"].includes(value.screen) && value.feedback === null) invalid();
    if (value.screen === "repair" && value.repair === null) invalid();
    return copy(value);
  }

  function serialize(state) {
    if (state.preview) throw new TypeError("Review previews do not write saved evidence.");
    return JSON.stringify(validateState(state), null, 2);
  }

  function start(state) {
    if (state.screen !== "brief") return state;
    return { ...copy(state), screen: "teach", paused: false };
  }

  function nextTeaching(state) {
    if (state.screen !== "teach") throw new Error("Open the teaching step before continuing.");
    const next = copy(state);
    if (next.teachingStep < TEACHING.length - 1) next.teachingStep += 1;
    else { next.taught = true; next.screen = "assemble"; }
    return next;
  }

  function movePipeline(state, index, direction) {
    if (state.screen !== "assemble" || !Number.isInteger(index) || ![-1, 1].includes(direction)) throw new TypeError("Choose a valid pipeline move.");
    const target = index + direction;
    if (index < 0 || index >= 3 || target < 0 || target >= 3) throw new RangeError("That step cannot move further in this direction.");
    const next = copy(state);
    [next.pipeline[index], next.pipeline[target]] = [next.pipeline[target], next.pipeline[index]];
    next.pipelineMessage = "";
    return next;
  }

  function checkPipeline(state, now = Date.now()) {
    if (state.screen !== "assemble" || !state.taught) throw new Error("Teach the mechanism before checking its sequence.");
    const next = copy(state);
    const correct = next.pipeline.every((id, index) => id === PIPELINE[index]);
    if (!correct) {
      next.pipelineAttempts += 1;
      next.pipelineMessage = "The answer needs its evidence first. Find the policy, add it to the question, then generate. You can reorder the steps or keep this worked sequence visible.";
      return next;
    }
    next.pipelineSolved = true;
    if (!next.events.some((event) => event.id === "pipeline")) next.events.push({
      id: "pipeline", activity: "rag-sequence", kind: "reconstruction", result: "correct",
      support: next.pipelineHelp || next.pipelineAttempts > 0 ? "supported" : "independent",
      at: iso(now), simulation: false,
    });
    next.screen = "fieldwork";
    return next;
  }

  function helpPipeline(state) {
    if (state.screen !== "assemble") throw new Error("The sequence help belongs to the reconstruction step.");
    return { ...copy(state), pipelineHelp: true, pipelineMessage: "Worked sequence: find the policy -> add it to the question -> generate from that context. Rebuild it when ready; this attempt will be recorded as supported practice." };
  }

  function updateFieldwork(state, patch) {
    if (!isRecord(patch)) throw new TypeError("Fieldwork changes must be an object.");
    const next = copy(state);
    for (const [key, value] of Object.entries(patch)) {
      if (!Object.hasOwn(next.fieldwork, key)) throw new TypeError("Unknown fieldwork field.");
      next.fieldwork[key] = value;
    }
    return validateState(next);
  }

  function leaveFieldwork(state, status) {
    if (state.screen !== "fieldwork") throw new Error("Open fieldwork before recording it.");
    if (!["observed", "blocked", "deferred"].includes(status)) throw new TypeError("Choose an observation, blocker or deferral.");
    if (status !== "deferred" && !state.fieldwork.note.trim()) throw new Error("Add a short observation or blocker, or choose to leave fieldwork for later.");
    const next = copy(state);
    next.fieldwork.status = status;
    next.screen = "question";
    next.questionKind = "baseline";
    next.variant = 0;
    return next;
  }

  function question(state) { return QUESTIONS[state.questionKind][state.variant]; }

  function setDraft(state, field, value) {
    if (state.screen !== "question" || !["choice", "reason"].includes(field)) throw new Error("Open a question before choosing a response.");
    const options = field === "choice" ? question(state).choices : question(state).reasons;
    if (!options.some((option) => option.id === value)) throw new TypeError("This response is not an option for the current question.");
    const next = copy(state);
    next.draft[field] = value;
    return next;
  }

  function submitAnswer(state, unknown = false, now = Date.now()) {
    if (state.screen === "feedback" || state.screen === "repair" || state.screen === "receipt") return state;
    if (state.screen !== "question" || !state.taught) throw new Error("Read the teaching before this check.");
    const item = question(state);
    if (!unknown && (!item.choices.some((option) => option.id === state.draft.choice)
      || !item.reasons.some((option) => option.id === state.draft.reason))) throw new Error("Choose an approach and a reason, or use 'I don't know yet'.");
    const next = copy(state);
    const id = `${item.id}:${next.attempts[next.questionKind]}`;
    if (next.events.some((event) => event.id === id)) return state;
    const correct = !unknown && next.draft.choice === item.answer && next.draft.reason === item.reason;
    const supported = unknown || next.helped[next.questionKind];
    const wasSeen = next.events.some((event) => event.activity === item.id);
    const delayed = next.questionKind === "review" && !next.preview && next.reviewDueAt !== null
      && now >= Date.parse(next.reviewDueAt) && !wasSeen;
    const kind = unknown ? "support" : next.questionKind === "review"
      ? correct && !supported && delayed ? "retention" : "review-practice" : "decision";
    next.events.push({
      id, activity: item.id, kind,
      result: unknown ? "help-requested" : correct ? "correct" : "not-yet",
      support: supported ? "supported" : "independent", at: iso(now), simulation: next.preview,
    });
    next.attempts[next.questionKind] += 1;
    next.feedback = { correct, unknown, support: supported ? "supported" : "independent", explanation: item.explanation };
    if (!correct) {
      next.helped[next.questionKind] = true;
      next.repair = unknown ? "unknown" : next.draft.choice === item.answer ? "reason"
        : next.questionKind === "transfer" ? "combine" : "context";
    } else {
      next.repair = null;
      if (kind === "retention") next.retainedAt = iso(now);
    }
    next.screen = "feedback";
    return next;
  }

  function finishQuestion(state, now) {
    const next = copy(state);
    if (next.questionKind === "baseline") {
      next.questionKind = "transfer";
      next.variant = 0;
      next.screen = "question";
    } else {
      next.screen = "receipt";
      if (!next.completedAt) {
        next.completedAt = iso(now);
        next.reviewDueAt = iso(now + DAY);
      } else if (next.questionKind === "review" && !next.preview) {
        next.reviewDueAt = next.retainedAt ? null : iso(now + DAY);
      }
    }
    next.draft = { choice: "", reason: "" };
    next.feedback = null;
    return next;
  }

  function continueFeedback(state, now = Date.now()) {
    if (state.screen !== "feedback" || !state.feedback) throw new Error("There is no checked response to continue.");
    if (!state.feedback.correct) return { ...copy(state), screen: "repair" };
    return finishQuestion(state, now);
  }

  function continueRepair(state, now = Date.now()) {
    if (state.screen !== "repair") throw new Error("Open the repair before trying its next case.");
    if (state.attempts[state.questionKind] >= 2) return finishQuestion(state, now);
    const next = copy(state);
    next.variant = 1;
    next.screen = "question";
    next.draft = { choice: "", reason: "" };
    next.feedback = null;
    return next;
  }

  function pause(state) { return { ...copy(state), paused: true }; }
  function resume(state) { return { ...copy(state), paused: false }; }

  function startReview(state, now = Date.now(), preview = false) {
    if (state.preview) throw new Error("Leave the simulated review before opening another review.");
    if (!state.completedAt) throw new Error("Complete this build step before opening its review.");
    if (!preview && state.questionKind === "review" && ["question", "feedback", "repair"].includes(state.screen)) return resume(state);
    if (!preview && (state.reviewDueAt === null || now < Date.parse(state.reviewDueAt))) throw new Error("This review is not due. You can inspect the clearly labelled preview instead.");
    const variant = QUESTIONS.review.findIndex((item) => !state.events.some((event) => event.activity === item.id));
    if (!preview && variant < 0) throw new Error("This prototype has no unused review variants left. More authored variants are a full-course release requirement.");
    const next = copy(state);
    next.preview = preview;
    next.screen = "question";
    next.paused = false;
    next.questionKind = "review";
    next.variant = variant < 0 ? 0 : variant;
    next.helped.review = false;
    next.attempts.review = 0;
    next.draft = { choice: "", reason: "" };
    next.feedback = null;
    next.repair = null;
    return next;
  }

  function evidence(state) {
    const real = state.events.filter((event) => !event.simulation);
    return {
      taught: state.taught,
      independent: real.filter((event) => event.result === "correct" && event.support === "independent"),
      supported: real.filter((event) => event.support === "supported"),
      retention: real.filter((event) => event.kind === "retention"),
      fieldwork: state.fieldwork.status === "observed"
        ? state.fieldwork.mode === "portal" ? "Learner-reported Azure observation" : "Synthetic local rehearsal"
        : state.fieldwork.status === "blocked" ? "Fieldwork blocker recorded" : "No fieldwork observation recorded",
      mastery: "Not established by this prototype",
    };
  }

  return Object.freeze({
    STORAGE_KEY, DAY, PIPELINE, PIPELINE_LABELS, SOURCES, POLICY, TEACHING, QUESTIONS, REPAIRS,
    initialState, validateState, serialize, start, nextTeaching, movePipeline, checkPipeline,
    helpPipeline, updateFieldwork, leaveFieldwork, question, setDraft, submitAnswer,
    continueFeedback, continueRepair, pause, resume, startReview, evidence,
  });
});
