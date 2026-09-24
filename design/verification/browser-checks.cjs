const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright-core");

const origin = process.env.DESIGN_URL || "http://127.0.0.1:5187";
const url = `${origin}/prototype/`;
const key = "ai103-replacement-prototype-v1";
const results = process.env.DESIGN_RESULTS || path.join(__dirname, "results");
const report = { checks: [], screenshots: [], externalRequests: [], errors: [] };
fs.mkdirSync(results, { recursive: true });

function passed(text) { report.checks.push(text); }
async function stored(page) { return page.evaluate((name) => localStorage.getItem(name), key); }
async function heading(page, text) { await page.getByRole("heading", { name: text, exact: true }).waitFor(); }
async function shot(page, name) {
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(results, name), fullPage: true });
  report.screenshots.push(name);
}
async function choose(page, choice, reason) {
  await page.locator(`input[name="choice"][value="${choice}"]`).check();
  await page.locator(`input[name="reason"][value="${reason}"]`).check();
  await page.getByRole("button", { name: "Check my decision", exact: true }).click();
}
async function noOverflow(page, label) {
  const geometry = await page.evaluate(() => ({
    page: document.documentElement.scrollWidth,
    viewport: document.documentElement.clientWidth,
  }));
  assert.ok(geometry.page <= geometry.viewport + 1, `${label}: ${JSON.stringify(geometry)}`);
}

(async () => {
  let browser;
  try {
    browser = await chromium.launch({
      headless: true,
      ...(process.env.BROWSER_EXECUTABLE ? { executablePath: process.env.BROWSER_EXECUTABLE } : {}),
    });
    async function context(options = {}) {
      const ctx = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: "reduce", ...options });
      await ctx.route("**/*", async (route) => {
        const request = route.request().url();
        if (request.startsWith(`${origin}/`)) await route.continue();
        else { report.externalRequests.push(request); await route.abort(); }
      });
      ctx.on("page", (page) => page.on("pageerror", (error) => report.errors.push(error.message)));
      return ctx;
    }

    const desktop = await context();
    await desktop.addInitScript(({ origin }) => {
      if (location.origin !== origin) return;
      if (localStorage.getItem("ai103-learner-state") === null) localStorage.setItem("ai103-learner-state", '{"legacy":"untouched"}');
    }, { origin });
    const page = await desktop.newPage();
    await page.goto(url);
    await heading(page, "Build a support assistant you can trust.");
    await shot(page, "desktop-build.png");
    assert.equal(await page.locator('input[type="password"]').count(), 0);
    assert.equal(await page.locator("main").count(), 1);
    passed("The initial screen is project-led, with one next task and no account/API-key form.");

    await page.getByRole("button", { name: "Start this build step", exact: true }).click();
    await heading(page, "An answer needs somewhere to get its facts.");
    assert.equal(await page.locator('input[name="choice"]').count(), 0);
    await page.getByRole("button", { name: "Next: separate the two jobs", exact: true }).click();
    await heading(page, "Change the information, or change the behaviour?");
    await page.getByRole("button", { name: "Stop here", exact: true }).click();
    await page.reload();
    await heading(page, "You're done for now.");
    await page.getByRole("button", { name: "Resume this step", exact: true }).click();
    await heading(page, "Change the information, or change the behaviour?");
    assert.equal(JSON.parse(await stored(page)).teachingStep, 1);
    passed("Teaching precedes assessment; pause/reload resumes the exact teaching step.");

    await page.getByRole("button", { name: "Reconstruct the flow", exact: true }).click();
    const move = page.getByRole("button", { name: "Move Generate an answer from that context down", exact: true });
    await move.focus();
    await page.keyboard.press("Enter");
    await move.focus();
    await page.keyboard.press("Enter");
    await page.getByRole("button", { name: "Check the flow", exact: true }).click();
    await heading(page, "Try it. Keep what you observe.");
    await shot(page, "desktop-fieldwork.png");
    await page.getByRole("button", { name: "Next checkpoint", exact: true }).click();
    await page.getByLabel("Your observation or blocker", { exact: true }).fill("Synthetic browser fixture. No Azure account or resource was used.");
    await page.getByRole("button", { name: "Stop here", exact: true }).click();
    await page.reload();
    await page.getByRole("button", { name: "Resume this step", exact: true }).click();
    assert.equal(JSON.parse(await stored(page)).fieldwork.checkpoint, 1);
    assert.match(await page.getByLabel("Your observation or blocker", { exact: true }).inputValue(), /No Azure/);
    passed("Keyboard-only reconstruction works; portal checkpoint and observation survive reload.");

    await page.getByRole("button", { name: "Rehearse locally", exact: true }).click();
    await page.getByLabel("Change the question", { exact: true }).selectOption("missing");
    assert.match(await page.locator(".fixture").innerText(), /does not specify international delivery/);
    await page.getByLabel("What did you notice?", { exact: true }).fill("Synthetic rehearsal: the international-delivery question has no policy evidence.");
    await page.getByRole("button", { name: "Keep this rehearsal note", exact: true }).click();
    await heading(page, "Make the policy change reach the answer.");
    await page.locator('input[name="choice"][value="rag"]').check();
    await page.locator('input[name="reason"][value="weights"]').check();
    await page.getByRole("button", { name: "Stop here", exact: true }).click();
    await page.reload();
    await page.getByRole("button", { name: "Resume this step", exact: true }).click();
    assert.equal(await page.locator('input[name="choice"][value="rag"]').isChecked(), true);
    assert.equal(await page.locator('input[name="reason"][value="weights"]').isChecked(), true);
    await page.getByRole("button", { name: "Check my decision", exact: true }).click();
    await heading(page, "The choice fits. Let's work on why.");
    await page.getByRole("button", { name: "Work through the missing connection", exact: true }).click();
    await shot(page, "desktop-repair.png");
    await page.getByRole("button", { name: "Try a different case", exact: true }).click();
    await choose(page, "rag", "context");
    assert.match(await page.locator(".support-note").innerText(), /supported practice/);
    passed("Decision/reason drafts survive interruption; a right choice with a wrong reason gets specific repair, and the retry remains supported.");

    await page.getByRole("button", { name: "Change the requirement", exact: true }).click();
    await choose(page, "combine", "separate");
    await page.getByRole("button", { name: "See what this establishes", exact: true }).click();
    await heading(page, "A useful stopping point.");
    assert.match(await page.locator(".receipt-list").innerText(), /Not established/);
    const realSave = await stored(page);
    assert.equal(JSON.parse(realSave).retainedAt, null);
    await page.getByRole("button", { name: "Preview a later review", exact: true }).click();
    assert.match(await page.locator(".preview-banner").innerText(), /No progress will be saved/);
    await choose(page, "rag", "context");
    await page.getByRole("button", { name: "See what this establishes", exact: true }).click();
    await heading(page, "That was a review preview.");
    assert.equal(await stored(page), realSave);
    await page.getByRole("button", { name: "Return to my real session", exact: true }).click();
    assert.equal(await stored(page), realSave);
    assert.equal(await page.evaluate(() => localStorage.getItem("ai103-learner-state")), '{"legacy":"untouched"}');
    passed("Completion does not award mastery; later-review simulation leaves evidence/schedule unchanged and preserves legacy progress.");

    await page.getByRole("button", { name: "Reading & saving", exact: true }).click();
    await page.getByLabel("Reading size", { exact: false }).selectOption("large");
    await page.getByLabel("Appearance", { exact: false }).selectOption("dark");
    await page.getByRole("checkbox", { name: "Quiet view", exact: true }).check();
    assert.equal(await page.evaluate(() => document.activeElement.id), "quiet-mode");
    await page.setViewportSize({ width: 360, height: 900 });
    for (const name of ["Your build", "Curriculum", "Evidence", "Reading & saving"]) {
      await page.getByRole("button", { name, exact: true }).click();
      await noOverflow(page, `360px, large/dark/quiet ${name}`);
    }
    await page.getByRole("button", { name: "Evidence", exact: true }).click();
    await shot(page, "mobile-evidence-dark.png");
    passed("Large text, dark appearance and quiet view retain controls and reflow at 360px; quiet toggle retains keyboard focus.");

    const mobile = await context({ viewport: { width: 360, height: 900 } });
    const phone = await mobile.newPage();
    await phone.goto(url);
    await shot(phone, "mobile-build.png");
    await noOverflow(phone, "360px build");
    await phone.getByRole("button", { name: "Start this build step", exact: true }).click();
    await shot(phone, "mobile-teaching.png");
    for (const width of [320, 360]) {
      await phone.setViewportSize({ width, height: 900 });
      await noOverflow(phone, `${width}px teaching`);
      for (const name of ["Curriculum", "Evidence", "Reading & saving", "Your build"]) {
        await phone.getByRole("button", { name, exact: true }).click();
        await noOverflow(phone, `${width}px ${name}`);
      }
    }
    passed("All prototype navigation surfaces and the teaching page reflow at 320px and 360px without page-level overflow.");
    await phone.getByRole("button", { name: "Next: separate the two jobs", exact: true }).click();
    await phone.getByRole("button", { name: "Reconstruct the flow", exact: true }).click();
    await phone.getByRole("button", { name: "Move Generate an answer from that context down", exact: true }).click();
    await phone.getByRole("button", { name: "Move Generate an answer from that context down", exact: true }).click();
    await phone.getByRole("button", { name: "Check the flow", exact: true }).click();
    await phone.getByRole("button", { name: "Leave fieldwork for later", exact: true }).click();
    await phone.getByRole("button", { name: "I don't know yet", exact: true }).click();
    await heading(phone, "No guess needed.");
    assert.equal(JSON.parse(await stored(phone)).events.at(-1).result, "help-requested");
    await phone.getByRole("button", { name: "Stop here", exact: true }).click();
    await phone.reload();
    await heading(phone, "You're done for now.");
    passed("I don't know routes to authored help without a wrong-answer result, and the learner can stop immediately.");

    const corrupt = await context();
    await corrupt.addInitScript(({ key, origin }) => {
      if (location.origin === origin) localStorage.setItem(key, '{"broken"');
    }, { key, origin });
    const recovery = await corrupt.newPage();
    await recovery.goto(url);
    assert.match(await recovery.locator("#storage-region").innerText(), /original save has not been changed/);
    await recovery.getByRole("button", { name: "Start this build step", exact: true }).click();
    assert.equal(await stored(recovery), '{"broken"');
    passed("Corrupt saved bytes are preserved while a visible warning permits temporary use.");

    const blocked = await context();
    await blocked.addInitScript(() => {
      Storage.prototype.setItem = function () { throw new DOMException("Blocked for the verification fixture", "SecurityError"); };
    });
    const temporary = await blocked.newPage();
    await temporary.goto(url);
    await temporary.getByRole("button", { name: "Start this build step", exact: true }).click();
    assert.match(await temporary.locator("#storage-region").innerText(), /could not be saved/);
    assert.equal(await stored(temporary), null);
    const [download] = await Promise.all([
      temporary.waitForEvent("download"),
      temporary.getByRole("button", { name: "Export the current session", exact: true }).click(),
    ]);
    await download.saveAs(path.join(results, "temporary-session-fixture.json"));
    assert.equal(JSON.parse(fs.readFileSync(path.join(results, "temporary-session-fixture.json"), "utf8")).screen, "teach");
    passed("Blocked saving is explicit and current work can be exported without an account.");

    const later = await context();
    const fixture = JSON.parse(realSave);
    fixture.completedAt = new Date(Date.now() - 2 * 86_400_000).toISOString();
    fixture.reviewDueAt = new Date(Date.now() - 86_400_000).toISOString();
    fixture.events.forEach((event) => { event.at = fixture.completedAt; });
    await later.addInitScript(({ key, fixture, origin }) => {
      if (location.origin === origin) localStorage.setItem(key, JSON.stringify(fixture));
    }, { key, fixture, origin });
    const review = await later.newPage();
    await review.goto(url);
    await review.getByRole("button", { name: "Do the due review", exact: true }).click();
    await choose(review, "rag", "context");
    await review.getByRole("button", { name: "See what this establishes", exact: true }).click();
    const afterReview = JSON.parse(await stored(review));
    assert.ok(afterReview.retainedAt);
    assert.equal(afterReview.events.filter((event) => event.kind === "retention").length, 1);
    assert.match(await review.locator(".receipt-list").innerText(), /Not established/);
    passed("A synthetic due-date fixture exercises real delayed-review eligibility and records only limited retention, never mastery.");

    const files = await browser.newContext();
    await files.route(/^https?:/, (route) => route.abort());
    const offline = await files.newPage();
    await offline.goto(pathToFileURL(path.resolve(__dirname, "../prototype/index.html")).href);
    await heading(offline, "Build a support assistant you can trust.");
    await offline.getByRole("button", { name: "Start this build step", exact: true }).click();
    await heading(offline, "An answer needs somewhere to get its facts.");
    passed("The bundled prototype also opens directly from local files without a server or network.");

    assert.deepEqual(report.externalRequests, []);
    assert.deepEqual(report.errors, []);
    passed("The complete tested loop makes no external request and has no uncaught browser error.");
    report.result = "PASS";
  } catch (error) {
    report.result = "FAIL";
    report.failure = error.stack;
    console.error(error);
    process.exitCode = 1;
  } finally {
    if (browser) await browser.close();
    report.recordedAt = new Date().toISOString();
    fs.writeFileSync(path.join(results, "browser-report.json"), JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report, null, 2));
  }
})();
