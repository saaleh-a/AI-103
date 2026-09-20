(function () {
  "use strict";

  const E = window.AI103Design;
  const app = document.getElementById("app");
  const announcer = document.getElementById("announcer");
  let state = E.initialState();
  let view = "build";
  let saveState = "ready";
  let storageMessage = "";
  let rawSaved = null;
  let errorMessage = "";
  let realBeforePreview = null;
  let referenceOpen = false;
  let resetOpen = false;

  const icons = {
    book: '<path d="M3 4h6a4 4 0 0 1 3 1.5A4 4 0 0 1 15 4h6v15h-6a4 4 0 0 0-3 1.5A4 4 0 0 0 9 19H3z"/><path d="M12 6v14"/>',
    build: '<path d="M4 6h10v5H4zM10 15h10v5H10zM9 11v6h1M14 8h6v7"/>',
    map: '<path d="m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2zM9 3v16M15 5v16"/>',
    evidence: '<path d="M5 3h14v18H5zM8 7h8M8 11h8M8 15h4"/>',
    settings: '<path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="3"/><circle cx="15" cy="17" r="3"/>',
    arrow: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    pause: '<path d="M8 5v14M16 5v14"/>',
    up: '<path d="m6 14 6-6 6 6"/>',
    down: '<path d="m6 10 6 6 6-6"/>',
    download: '<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
  };

  function icon(name) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.book}</svg>`;
  }

  function escape(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  }

  function date(value) {
    return value ? new Date(value).toLocaleString(undefined, { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }) : "Not yet scheduled";
  }

  function button(action, text, kind = "primary", extra = "") {
    return `<button type="button" class="${kind}" data-action="${action}" ${extra}>${text}</button>`;
  }

  function save() {
    if (state.preview || saveState === "blocked" || saveState === "unreadable") return;
    const serialized = E.serialize(state);
    try {
      localStorage.setItem(E.STORAGE_KEY, serialized);
      saveState = "saved";
      storageMessage = "";
    } catch (error) {
      saveState = "blocked";
      storageMessage = "Progress could not be saved on this device. Your current session is still here; export it before closing.";
      console.warn("[design-storage] Could not save the prototype session.", error.name);
    }
    updateSaveIndicator();
  }

  function load() {
    try {
      rawSaved = localStorage.getItem(E.STORAGE_KEY);
    } catch (error) {
      saveState = "blocked";
      storageMessage = "This browser is blocking local storage. You can use a temporary session and export it, but reload will not restore new work.";
      console.warn("[design-storage] Storage is unavailable.", error.name);
      return;
    }
    if (rawSaved === null) return;
    try {
      state = E.validateState(JSON.parse(rawSaved));
      saveState = "saved";
    } catch (error) {
      saveState = "unreadable";
      storageMessage = "Your saved design session could not be read. The original save has not been changed. You may continue temporarily or download those saved bytes.";
      console.warn("[design-storage] Saved progress was preserved because validation failed.", error.name);
    }
  }

  function updateSaveIndicator() {
    const indicator = document.getElementById("save-indicator");
    if (indicator) indicator.innerHTML = `${icon(saveState === "blocked" || saveState === "unreadable" ? "pause" : "check")}<span>${state.preview ? "Preview only" : saveState === "saved" ? "Saved on this device" : saveState === "ready" ? "Local-only design preview" : "Not saving - export available"}</span>`;
    const region = document.getElementById("storage-region");
    if (region) region.innerHTML = storageBanner();
  }

  function storageBanner() {
    if (!storageMessage) return "";
    return `<div class="notice error" role="alert"><strong>Keep your work safe.</strong>${escape(storageMessage)}
      <div class="actions">${button("export", "Export the current session", "secondary")}
      ${rawSaved !== null ? button("raw-export", "Download the original save", "text-button") : ""}</div></div>`;
  }

  function navigation() {
    return `<aside class="rail" aria-label="Studio navigation">
      <div class="brand">${icon("book")}<div><strong>AI-103</strong><span>Learning studio</span></div></div>
      <nav aria-label="Main">
        ${[["build", "Your build", "build"], ["curriculum", "Curriculum", "map"], ["evidence", "Evidence", "evidence"]].map(([id, label, symbol]) =>
          `<button type="button" data-view="${id}" ${view === id ? 'aria-current="page"' : ""}>${icon(symbol)}${label}</button>`).join("")}
      </nav>
      <div class="rail-bottom">
        <div class="rail-note"><strong>A quieter way to build understanding.</strong>No countdown. No streak to protect. Stop wherever you need to.</div>
        <button type="button" data-view="preferences" ${view === "preferences" ? 'aria-current="page"' : ""}>${icon("settings")}Reading &amp; saving</button>
      </div>
    </aside>`;
  }

  function mapAside(assessment = false) {
    return `<aside class="build-aside" aria-label="Build context">
      <div class="build-map"><h2>Your support assistant</h2><ol>
        <li>A working foundation<span>Project &amp; model setup</span></li>
        <li class="current">Answers with evidence<span>This prototype milestone</span></li>
        <li>Actions with boundaries<span>Tools &amp; human approval</span></li>
        <li>A system worth trusting<span>Evaluation &amp; operations</span></li>
      </ol></div>
      <p class="aside-note"><strong>${assessment ? "A decision, not a speed test." : "Keep the bigger picture."}</strong>
      ${assessment ? "Choose an approach and the reason it fits. You can change your mind before checking. Asking for help is part of learning." : "This step connects a customer's question to evidence. The other milestones remain in the full design, not playable shortcuts."}</p>
    </aside>`;
  }

  function phaseTrack() {
    const current = state.screen === "teach" ? 0 : state.screen === "assemble" ? 1 : state.screen === "fieldwork" ? 2
      : ["question", "feedback", "repair"].includes(state.screen) ? 3 : 4;
    return `<ol class="phase-track" aria-label="This build step">${["Understand", "Reconstruct", "Try", "Decide", "Keep"].map((label, index) =>
      `<li ${index === current ? 'aria-current="step"' : ""}><b>${index + 1}</b><span class="phase-label">${label}</span></li>`).join("")}</ol>`;
  }

  function sources() {
    return `<details><summary>Source notes &amp; deeper context</summary>
      <p>Original teaching based on corpus 239, 19 and 95; fieldwork preparation draws on 22 and 23. Links are optional verification. The local learning task is self-contained; the full live deployment guide is not implemented in this prototype.</p>
      <ul>${E.SOURCES.map((source) => `<li><a href="${source.url}" target="_blank" rel="noopener noreferrer" data-source>${escape(source.title)}</a> &middot; corpus ${source.id}</li>`).join("")}</ul>
      <p>Source 239 uses an absolute claim about preventing fabricated answers. The comparison source explains the dependence on retrieval quality. This lesson does not promise that RAG guarantees correctness.</p>
    </details>`;
  }

  function reference() {
    if (!referenceOpen) return button("reference", "Open the decision-boundary reference", "text-button");
    return `<div class="support-note"><strong>Reference opened: this check is now supported practice.</strong>
      <p>RAG supplies current facts in the answer-time context. Instructions guide behaviour. Fine-tuning can adapt behaviour after prompt evaluation. Fresh facts and consistent behaviour can require both retrieval and training.</p></div>`;
  }

  function material() {
    return `<div class="material"><div class="material-title">${icon("evidence")}<div><strong>A policy you can actually inspect</strong><span>Original synthetic input &middot; no customer data</span></div></div>
      ${button("policy", `${icon("download")}Download practice policy`, "secondary")}</div>`;
  }

  function brief() {
    return `<div class="page-grid"><section class="task">
      <h1>Build a support assistant you can trust.</h1>
      <p class="lede">A useful answer needs more than confident wording. Give it a source, notice what happens when evidence is missing, and keep the decision you can explain.</p>
      <section class="next-task"><h2>Your next change: make an answer traceable.</h2>
      <p>Learn where the facts enter the system. Reconstruct the flow, prepare a real fieldwork check, then handle a changed requirement.</p>
      ${button("start", `Start this build step ${icon("arrow")}`)}
      <p class="time-note">${icon("clock")}About 6-10 minutes for the local learning loop. Stop after any step.</p>
      </section>
      <details><summary>Why this step?</summary><p>A grounded answer is a useful boundary to learn before tools can act on it. This is a representative milestone: full project/model setup and the rest of the course are specified in the design, not claimed complete here.</p></details>
      ${material()}
      <section class="section secondary-material"><h2>Work that stays with you</h2><p class="small">Your exact position, unfinished choices and field notes stay on this device. You do not need an AI key, an account or a perfect answer to begin.</p></section>
    </section>${mapAside()}</div>`;
  }

  function teach() {
    const part = E.TEACHING[state.teachingStep];
    return `<h1>${part.title}</h1><p class="body-copy">${part.body}</p>
      <section class="example"><h2>Inside your support build</h2><p>${part.example}</p></section>
      <p class="principle">${part.takeaway}</p>
      <div class="actions">${button("teach-next", state.teachingStep === 0 ? `Next: separate the two jobs ${icon("arrow")}` : `Reconstruct the flow ${icon("arrow")}`)}
      ${button("teach-back", state.teachingStep === 0 ? "Back to the build brief" : "Previous explanation", "text-button")}</div>
      <p class="small">Explanation ${state.teachingStep + 1} of ${E.TEACHING.length}. Reading is recorded as exposure, not mastery.</p>${sources()}`;
  }

  function assemble() {
    return `<h1>Put the evidence before the answer.</h1><p class="lede">Reconstruct the path your application needs. Move the steps into order; no dragging or memorised API syntax required.</p>
      <ol class="pipeline" aria-label="RAG pipeline">${state.pipeline.map((id, index) =>
        `<li id="pipeline-${id}" tabindex="-1"><span class="pipeline-number">${index + 1}</span><span class="pipeline-label">${E.PIPELINE_LABELS[id]}</span>
        <div class="pipeline-controls">${button("move", icon("up"), "square-button", `data-index="${index}" data-direction="-1" aria-label="Move ${E.PIPELINE_LABELS[id]} up" ${index === 0 ? "disabled" : ""}`)}
        ${button("move", icon("down"), "square-button", `data-index="${index}" data-direction="1" aria-label="Move ${E.PIPELINE_LABELS[id]} down" ${index === 2 ? "disabled" : ""}`)}</div></li>`).join("")}</ol>
      ${state.pipelineMessage ? `<p class="support-note" role="status">${escape(state.pipelineMessage)}</p>` : ""}
      <div class="actions">${button("pipeline-check", "Check the flow")}${button("pipeline-help", "Show a worked sequence", "text-button")}</div>
      <p class="small">A corrected or hinted sequence is useful practice. It will not be recorded as independent evidence.</p>`;
  }

  const fieldSteps = [
    {
      title: "Prepare an isolated place to work.",
      where: "Azure portal, then your existing Microsoft Foundry project",
      instruction: "Confirm which subscription and resource group you may use. Check your permissions, region and available deployment. Record only a resource name you want to find again, never a key or connection string.",
      observe: "You can identify the owner of the resources and which resources are safe for you to change. If access or a supported deployment is missing, record the blocker instead.",
    },
    {
      title: "Find the controlled source of the answer.",
      where: "The project's knowledge configuration in Microsoft Foundry",
      instruction: "Inspect the knowledge source used by the assistant. Source 22 distinguishes a Blob container from an existing Azure AI Search index. Match the source to where the policy actually lives; do not substitute a web search for private policy.",
      observe: "You can identify the source and the policy it makes available. This preview does not provision a knowledge base or verify the current portal's setup steps.",
    },
    {
      title: "Change the question, then inspect the evidence.",
      where: "Your existing grounded assistant's test experience",
      instruction: "With the synthetic policy available, ask about the return window. Inspect the supporting passage. Then ask about international delivery, which this policy does not specify. Record what actually happens instead of assuming the assistant refuses correctly.",
      observe: "A supported answer should be traceable to the return clause. The second question exposes a source gap. If the assistant invents a policy, that is a useful observation, not a personal failure.",
    },
  ];

  function fieldwork() {
    const field = state.fieldwork;
    const step = fieldSteps[field.checkpoint];
    const portal = field.mode === "portal";
    const supported = field.fixture === "supported";
    return `<h1>Try it. Keep what you observe.</h1><p class="lede">The goal is an answer you can trace to evidence, not a box that says the lab is done.</p>
      <div class="mode-choice" role="group" aria-label="Choose fieldwork mode">
        ${button("field-mode", "Portal-first guide", "secondary", `data-mode="portal" aria-pressed="${portal}"`)}
        ${button("field-mode", "Rehearse locally", "secondary", `data-mode="rehearsal" aria-pressed="${!portal}"`)}</div>
      ${portal ? `<div class="notice"><strong>Design walkthrough, not a live-validated Azure lab.</strong>This app does not connect to Azure. Use an existing isolated setup only. A complete deployment guide is a release gate; you can rehearse below without an account.</div>
        <details><summary>Before Azure: permissions, costs &amp; cleanup</summary>
          <p>Azure model, search and storage resources may incur charges. Confirm permissions, service availability and pricing before creating anything. Never use confidential or customer data for this exercise.</p>
          <p>Remove only isolated resources you created for the lab, after recording what you need. Do not delete a shared resource group, deployment, index or knowledge base. The prototype does not create or delete resources.</p>
        </details>
        <div class="fieldwork-meta"><span>Guide checkpoint ${field.checkpoint + 1} of 3</span><span>Self-recorded, not remotely verified</span></div>
        <h2>${step.title}</h2><p class="small">${step.where}</p><p class="body-copy">${step.instruction}</p>
        <section class="example"><h3>Look for this</h3><p>${step.observe}</p></section>
        <label class="field-label" for="resource">A resource-name breadcrumb (optional)</label><input type="text" id="resource" data-field="resource" maxlength="200" autocomplete="off" value="${escape(field.resource)}" placeholder="An isolated project or resource name">
        ${field.checkpoint < 2 ? `<div class="actions">${button("field-next", "Next checkpoint", "secondary")}${field.checkpoint > 0 ? button("field-back", "Previous checkpoint", "text-button") : ""}</div>` : button("field-back", "Previous checkpoint", "text-button")}
      ` : `<p class="support-note"><strong>Synthetic local rehearsal.</strong> These are authored examples, not generated answers or Azure responses.</p>
        <label class="field-label" for="fixture">Change the question</label>
        <select id="fixture" data-field="fixture"><option value="supported" ${supported ? "selected" : ""}>Ask about the return window</option><option value="missing" ${!supported ? "selected" : ""}>Ask about international delivery</option></select>
        <section class="fixture"><h3>The question</h3><blockquote>${supported ? "How long do I have to request a return?" : "How long does international delivery take?"}</blockquote>
        <h3>Available evidence</h3><blockquote>${supported ? "Returns may be requested within 14 days of delivery. A receipt and order number are required." : "The practice policy does not specify international delivery."}</blockquote>
        <h3>An authored example of a supported response</h3><p>${supported ? "You can request a return within 14 days of delivery, with a receipt and order number. A person must approve the refund." : "This policy does not answer that. I would need an approved international-delivery policy before giving a delivery estimate."}</p></section>
        <p class="small">What changed was the available evidence, not the model's training. Even a real retrieval system would still need evaluation.</p>`}
      <label class="field-label" for="field-note">${portal ? "Your observation or blocker" : "What did you notice?"}</label>
      <textarea id="field-note" data-field="note" maxlength="10000" placeholder="A short note is enough. Do not include keys or personal data.">${escape(field.note)}</textarea>
      <div class="actions">${button("field-observed", portal ? "Record my observation" : "Keep this rehearsal note")}
        ${portal ? button("field-blocked", "Record a blocker", "secondary") : ""}
        ${button("field-defer", "Leave fieldwork for later", "text-button")}</div>
      <p class="small">${portal ? "An observation is your report. The app cannot verify your subscription." : "Rehearsal does not count as real Azure execution."} Deferring does not mark fieldwork complete.</p>${sources()}`;
  }

  function question() {
    const item = E.question(state);
    return `<h1>${item.title}</h1><p class="scenario">${item.scenario}</p>
      ${state.helped[state.questionKind] ? '<p class="small">Supported practice: you have seen a relevant explanation or hint.</p>' : ""}
      <fieldset><legend>What would you choose?</legend>${item.choices.map((option) =>
        `<label class="choice"><input type="radio" name="choice" value="${option.id}" ${state.draft.choice === option.id ? "checked" : ""}><span>${escape(option.text)}</span></label>`).join("")}</fieldset>
      <fieldset><legend>Which reason makes it fit?</legend>${item.reasons.map((option) =>
        `<label class="choice"><input type="radio" name="reason" value="${option.id}" ${state.draft.reason === option.id ? "checked" : ""}><span>${escape(option.text)}</span></label>`).join("")}</fieldset>
      <div class="actions">${button("answer", "Check my decision")}${button("unknown", "I don't know yet", "secondary")}</div>
      <p class="small">No time limit. Both the decision and the reason matter.</p>${reference()}`;
  }

  function feedback() {
    const feedback = state.feedback;
    const item = E.question(state);
    return `<h1>${feedback.unknown ? "No guess needed." : feedback.correct ? "The decision and the reason fit." : state.repair === "reason" ? "The choice fits. Let's work on why." : "Let's separate the two jobs."}</h1>
      <p class="body-copy">${feedback.unknown ? "We'll work through the missing connection together. Asking for help is recorded as supported learning, not as a wrong answer." : feedback.explanation}</p>
      ${!feedback.unknown ? `<div class="response-summary"><p><strong>Your approach:</strong> ${escape(item.choices.find((option) => option.id === state.draft.choice).text)}</p>
        <p><strong>Your reason:</strong> ${escape(item.reasons.find((option) => option.id === state.draft.reason).text)}</p></div>` : ""}
      <p class="support-note">${feedback.correct ? feedback.support === "supported" ? "This is supported practice, not evidence of independent retention." : state.questionKind === "review" && !state.preview ? "This records one delayed retrieval result. It does not establish full mastery." : "A useful structured response. It is not proof that the idea will be retrievable later." : "The next explanation follows this response. It is a hypothesis about the decision, not a judgement about you."}</p>
      <div class="actions">${button("feedback-next", feedback.correct ? state.questionKind === "baseline" ? "Change the requirement" : "See what this establishes" : "Work through the missing connection")}</div>`;
  }

  function repair() {
    const content = E.REPAIRS[state.repair];
    const exhausted = state.attempts[state.questionKind] >= 2;
    return `<h1>${content.title}</h1><p class="body-copy">${content.body}</p>
      <section class="example"><h2>The useful distinction</h2><p>${content.contrast}</p></section>
      <p class="small">${exhausted ? "You've already revisited this boundary. Keep the worked example and continue with support, or stop here. More guessing is not the goal." : "Try a different case after this explanation. Its result stays labelled as supported practice."}</p>
      <div class="actions">${button("repair-next", exhausted ? "Continue with the worked example" : "Try a different case")}${button("pause", "Stop here", "text-button")}</div>`;
  }

  function reviewActions() {
    if (!state.completedAt || state.preview) return "";
    const unused = E.QUESTIONS.review.some((item) => !state.events.some((event) => event.activity === item.id));
    const due = state.reviewDueAt && Date.now() >= Date.parse(state.reviewDueAt);
    return `<section class="section"><h2>${state.retainedAt ? "One later check, not the whole picture." : "Let time do its part."}</h2>
      <p class="body-copy">${state.retainedAt ? "You have one delayed result. More independent variants, implementation and transfer evidence are still needed." : `A different case is scheduled for ${escape(date(state.reviewDueAt))}. Repeating an answer immediately is not the same as retaining it.`}</p>
      <div class="actions">${due && unused ? button("real-review", "Do the due review") : ""}
        ${button("preview-review", "Preview a later review", "secondary")}</div>
      <p class="small">${!unused && !state.retainedAt ? "This prototype's review bank is exhausted; more authored variants are required. " : ""}The preview is a simulation. It cannot change your saved evidence or the real review date.</p></section>`;
  }

  function evidenceSummary() {
    const proof = E.evidence(state);
    return `<ul class="receipt-list">
      <li><strong>The mechanism</strong><span>${proof.taught ? "Introduced through two short explanations" : "Not yet taught in this prototype"}</span></li>
      <li><strong>Structured responses</strong><span>${proof.independent.length} correct without in-task help; ${proof.supported.length} supported learning events</span></li>
      <li><strong>Hands-on record</strong><span>${proof.fieldwork}</span></li>
      <li><strong>Delayed retrieval</strong><span>${proof.retention.length ? "One independent later variant" : "Not yet demonstrated"}</span></li>
      <li><strong>Full mastery</strong><span>Not established by this prototype</span></li></ul>`;
  }

  function receipt() {
    if (state.preview) return `<h1>That was a review preview.</h1><p class="lede">No progress, due date or retention evidence was saved. In a real later session, the app would use a due, unseen variant and record the support you needed.</p>
      <div class="actions">${button("exit-preview", "Return to my real session")}</div>`;
    return `<h1>A useful stopping point.</h1><p class="lede">You worked on how current policy reaches an answer, and what changes when the requirement changes. Here is what the evidence actually says.</p>
      ${evidenceSummary()}<div class="actions">${button("pause", "Done for now")}${button("export", "Export this session", "text-button")}</div>
      ${reviewActions()}`;
  }

  function paused() {
    return `<div class="page-grid"><section class="task"><h1>You're done for now.</h1>
      <p class="lede">${saveState === "saved" ? "Your place and unfinished work are saved." : "Your place is here in this tab. Export before closing if saving is unavailable."} There is nothing to catch up on before you can return.</p>
      <section class="next-task"><h2>${state.screen === "receipt" ? "Your next step can wait." : "Return to the exact point you left."}</h2>
      <p class="small">Support assistant &middot; ${escape(stageName())}</p>
      ${button("resume", state.screen === "receipt" ? "Return to my evidence" : `Resume this step ${icon("arrow")}`)}</section>
      ${state.screen === "receipt" ? reviewActions() : ""}${button("export", "Export a copy", "text-button")}
      </section>${mapAside()}</div>`;
  }

  function stageName() {
    const labels = { brief: "Build brief", teach: `Explanation ${state.teachingStep + 1} of 2`, assemble: "Reconstruct the flow", fieldwork: state.fieldwork.mode === "portal" ? `Portal checkpoint ${state.fieldwork.checkpoint + 1}` : "Local rehearsal", question: state.questionKind === "transfer" ? "Changed requirement" : state.questionKind === "review" ? "Later retrieval" : "Decision and reason", feedback: "Response feedback", repair: "Targeted repair", receipt: "Evidence receipt" };
    return labels[state.screen];
  }

  function build() {
    if (state.paused) return paused();
    if (state.screen === "brief") return brief();
    const renderers = { teach, assemble, fieldwork, question, feedback, repair, receipt };
    return `<div class="step-toolbar"><span class="small">Support assistant / Answers with evidence</span>
      ${button("pause", `${icon("pause")}Stop here`, "text-button")}</div>
      <div class="page-grid"><section class="task">${phaseTrack()}${renderers[state.screen]()}</section>
      ${mapAside(["question", "feedback", "repair"].includes(state.screen))}</div>`;
  }

  function curriculum() {
    const domains = [
      ["Plan and manage an Azure AI solution", "25-30%", "16 objectives: service choices, deployment, operations, identity, safety and governance."],
      ["Implement generative AI and agentic solutions", "30-35%", "16 objectives: application RAG, SDKs, tools, memory, orchestration, evaluation and observability."],
      ["Implement computer vision solutions", "10-15%", "16 objectives: image/video generation and editing, visual understanding, accessibility and multimodal safety."],
      ["Implement text analysis solutions", "10-15%", "8 objectives: extraction, sentiment, translation, domain outputs, speech and audio reasoning."],
      ["Implement information extraction solutions", "10-15%", "8 objectives: ingestion, indexing, hybrid/vector search, enrichment, OCR and analyzers."],
    ];
    return `<div class="measure"><h1>A map underneath the work.</h1><p class="lede">The complete design covers the whole supplied corpus and the official AI-103 objectives. This interactive prototype covers one milestone, not the whole course.</p>
      <p class="support-note">The Learning Studio's 65-unit / 265-source map is an authoring starting point. Linking a document does not prove that every concept has been taught.</p>
      <div class="domain-list">${domains.map(([title, weight, description]) => `<section class="domain-row"><h2>${title}</h2><p>${description}</p><p class="source-note">${weight} official weight &middot; Full teaching and assessment remain a release gate.</p></section>`).join("")}</div>
      <p class="source-note">Outline effective April 16, 2026; checked September 20, 2026. The complete 64-objective ledger is in <a href="../REPLACEMENT_DESIGN.md">the design specification</a>.</p>
      <section class="section"><h2>Six connected builds</h2><ul class="project-list">${["Grounded support assistant", "Case routing", "Document intake", "Voice assistant", "Visual content workflow", "Reliability review"].map((title, index) => `<li>${title}<span>${index === 0 ? "One interactive sample milestone" : "Designed, not implemented in this prototype"}</span></li>`).join("")}</ul></section>
      <div class="actions"><button class="primary" type="button" data-view="build">Return to my build ${icon("arrow")}</button></div></div>`;
  }

  function evidencePage() {
    return `<div class="measure"><h1>Evidence, not a completion score.</h1><p class="lede">Keep what you demonstrated separate from what you read, practised with support, or reported from Azure.</p>
      ${evidenceSummary()}
      <section class="section"><h2>Your field notebook</h2>
        ${state.fieldwork.note ? `<p class="small">${E.evidence(state).fieldwork}</p><p class="note-text">${escape(state.fieldwork.note)}</p>` : '<p class="small">No observation recorded yet. A blocker or a short contrast can be useful; you do not need an essay.</p>'}
        ${state.fieldwork.resource ? `<p class="small">Resource-name breadcrumb: <strong>${escape(state.fieldwork.resource)}</strong>. This is not a live Azure inventory.</p>` : ""}</section>
      <details><summary>Inspect the recorded events</summary>${state.events.length ? `<ol class="evidence-events">${state.events.filter((event) => !event.simulation).map((event) => `<li><strong>${escape(event.activity)}</strong><br>${escape(event.result)} &middot; ${escape(event.support)} &middot; ${escape(event.kind)}<br><span class="small">${escape(date(event.at))}</span></li>`).join("")}</ol>` : '<p>No assessment events yet.</p>'}</details>
      ${reviewActions()}<div class="actions">${button("export", `${icon("download")}Export this evidence`, "secondary")}</div></div>`;
  }

  function preferences() {
    return `<div class="measure"><h1>Make room for how you work.</h1><p class="lede">Adjust the presentation, not the difficulty. These preferences do not assume that every day feels the same.</p>
      <div class="preference-row"><label for="pref-quiet">Quiet view<span>Remove the context column and secondary material. Navigation, help and stopping remain available.</span></label><input id="pref-quiet" type="checkbox" data-pref="quiet" ${state.preferences.quiet ? "checked" : ""}></div>
      <div class="preference-row"><label for="pref-size">Reading size<span>Increase explanations, questions and inputs together.</span></label><select id="pref-size" data-pref="size"><option value="comfortable" ${state.preferences.size === "comfortable" ? "selected" : ""}>Comfortable</option><option value="large" ${state.preferences.size === "large" ? "selected" : ""}>Larger</option></select></div>
      <div class="preference-row"><label for="pref-theme">Appearance<span>Choose the contrast and brightness that suit this moment.</span></label><select id="pref-theme" data-pref="theme"><option value="light" ${state.preferences.theme === "light" ? "selected" : ""}>Light</option><option value="dark" ${state.preferences.theme === "dark" ? "selected" : ""}>Dark</option></select></div>
      <p class="small section">Motion is off. There are no countdowns, autoplay, streaks or notifications.</p>
      <section class="section"><h2>Your data stays yours.</h2><p class="body-copy">This prototype saves to its own browser key. It does not read or change your existing tutor progress. Do not put credentials, personal data or customer content in notes.</p>
      ${button("export", "Export the current session", "secondary")}</section>
      <details class="reset-area" ${resetOpen ? "open" : ""}><summary>Reset only this design prototype</summary><p>This removes this prototype's notes and progress. It does not touch the existing app. Export first if you want to keep them.</p>
      ${button("reset", "Delete this prototype's saved session", "secondary")}</details></div>`;
  }

  function render(focus = true, focusId = null) {
    document.documentElement.dataset.theme = state.preferences.theme;
    document.documentElement.dataset.size = state.preferences.size;
    const title = { build: "Your build", curriculum: "Curriculum", evidence: "Evidence", preferences: "Reading & saving" }[view];
    document.title = `${title} - AI-103 Learning Studio design`;
    app.className = state.preferences.quiet ? "quiet-view" : "";
    app.innerHTML = `${navigation()}<div class="workspace">
      <header class="workspace-bar"><div class="location">Your workspace<span>/</span>${escape(title)}</div>
      <div class="workspace-tools"><span id="save-indicator" class="save-status"></span>
      <label class="quiet-toggle"><input id="quiet-mode" type="checkbox" data-pref="quiet" ${state.preferences.quiet ? "checked" : ""}>Quiet view</label></div></header>
      <main id="main" tabindex="-1"><div id="storage-region">${storageBanner()}</div>
      ${state.preview ? `<div class="preview-banner" role="status"><p><strong>Later-review preview.</strong> No progress will be saved.</p>${button("exit-preview", "Leave preview", "secondary")}</div>` : ""}
      ${errorMessage ? `<div class="notice error" role="alert">${escape(errorMessage)}</div>` : ""}
      ${{ build, curriculum, evidence: evidencePage, preferences }[view]()}</main>
      <footer class="foot"><span>Working design prototype &middot; one milestone, not the full course.</span><span>No runtime AI &middot; no account required &middot; <a href="../REPLACEMENT_DESIGN.md">Read the complete design</a></span></footer></div>`;
    updateSaveIndicator();
    if (focusId) document.getElementById(focusId)?.focus({ preventScroll: true });
    else if (focus) {
      const heading = document.querySelector("main h1");
      if (heading) { heading.tabIndex = -1; heading.focus({ preventScroll: true }); }
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }

  function download(filename, text, type = "text/plain") {
    const url = URL.createObjectURL(new Blob([text], { type }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function commit(next, focus = true, focusId = null) {
    state = next;
    errorMessage = "";
    save();
    render(focus, focusId);
  }

  function handleAction(action, target) {
    if (action === "start") return commit(E.start(state));
    if (action === "teach-next") return commit(E.nextTeaching(state));
    if (action === "teach-back") return commit({ ...state, screen: state.teachingStep === 0 ? "brief" : "teach", teachingStep: Math.max(0, state.teachingStep - 1) });
    if (action === "move") {
      const index = Number(target.dataset.index);
      const id = state.pipeline[index];
      commit(E.movePipeline(state, index, Number(target.dataset.direction)), false, `pipeline-${id}`);
      announcer.textContent = `${E.PIPELINE_LABELS[id]} is now step ${state.pipeline.indexOf(id) + 1}.`;
      return;
    }
    if (action === "pipeline-check") return commit(E.checkPipeline(state));
    if (action === "pipeline-help") return commit(E.helpPipeline(state));
    if (action === "pause") return commit(E.pause(state));
    if (action === "resume") return commit(E.resume(state));
    if (action === "field-mode") return commit(E.updateFieldwork(state, { mode: target.dataset.mode }), false);
    if (action === "field-next" || action === "field-back") return commit(E.updateFieldwork(state, { checkpoint: state.fieldwork.checkpoint + (action === "field-next" ? 1 : -1) }));
    if (action === "field-observed") return commit(E.leaveFieldwork(state, "observed"));
    if (action === "field-blocked") return commit(E.leaveFieldwork(state, "blocked"));
    if (action === "field-defer") return commit(E.leaveFieldwork(state, "deferred"));
    if (action === "answer" || action === "unknown") return commit(E.submitAnswer(state, action === "unknown"));
    if (action === "feedback-next" || action === "repair-next") {
      referenceOpen = false;
      return commit(action === "feedback-next" ? E.continueFeedback(state) : E.continueRepair(state));
    }
    if (action === "reference") {
      referenceOpen = true;
      const next = structuredClone(state);
      next.helped[next.questionKind] = true;
      return commit(next, false);
    }
    if (action === "preview-review") {
      realBeforePreview = structuredClone(state);
      referenceOpen = false;
      view = "build";
      return commit(E.startReview(state, Date.now(), true));
    }
    if (action === "real-review") {
      referenceOpen = false;
      view = "build";
      return commit(E.startReview(state));
    }
    if (action === "exit-preview") {
      if (!realBeforePreview) throw new Error("The original session is unavailable. Reload to restore the saved session.");
      const original = realBeforePreview;
      realBeforePreview = null;
      view = "evidence";
      referenceOpen = false;
      return commit(original);
    }
    if (action === "policy") return download("practice-support-policy.md", E.POLICY, "text/markdown");
    if (action === "export") return download("ai103-design-session.json", E.serialize(realBeforePreview || state), "application/json");
    if (action === "raw-export" && rawSaved !== null) return download("ai103-unreadable-design-save.txt", rawSaved);
    if (action === "reset") {
      if (state.preview) throw new Error("Leave the review preview before resetting your real session.");
      try { localStorage.removeItem(E.STORAGE_KEY); }
      catch (error) { throw new Error(`The saved session could not be removed (${error.name}). Nothing was reset.`); }
      saveState = "ready";
      storageMessage = "";
      rawSaved = null;
      resetOpen = false;
      view = "build";
      return commit(E.initialState());
    }
    throw new Error("This action is unavailable in the current design state.");
  }

  app.addEventListener("click", (event) => {
    const target = event.target.closest("button, a[data-source]");
    if (!target) return;
    try {
      if (target.hasAttribute("data-source")) {
        if (state.screen === "question") { state.helped[state.questionKind] = true; save(); }
        return;
      }
      if (target.dataset.view) {
        view = target.dataset.view;
        errorMessage = "";
        render();
        return;
      }
      if (target.dataset.action) handleAction(target.dataset.action, target);
    } catch (error) {
      errorMessage = error.message;
      console.warn("[design-action]", error.message);
      render(false);
    }
  });

  app.addEventListener("change", (event) => {
    const target = event.target;
    try {
      if (target.dataset.pref) {
        const next = structuredClone(state);
        next.preferences[target.dataset.pref] = target.type === "checkbox" ? target.checked : target.value;
        commit(next, false, target.id || null);
      } else if (target.name === "choice" || target.name === "reason") {
        state = E.setDraft(state, target.name, target.value);
        save();
      } else if (target.dataset.field === "fixture") {
        commit(E.updateFieldwork(state, { fixture: target.value }), false, "fixture");
      }
    } catch (error) {
      errorMessage = error.message;
      console.warn("[design-input]", error.message);
      render(false);
    }
  });

  app.addEventListener("input", (event) => {
    const target = event.target;
    if (!["note", "resource"].includes(target.dataset.field)) return;
    try {
      state = E.updateFieldwork(state, { [target.dataset.field]: target.value });
      save();
    } catch (error) {
      errorMessage = error.message;
      console.warn("[design-note]", error.message);
      render(false);
    }
  });

  load();
  render(false);
})();
