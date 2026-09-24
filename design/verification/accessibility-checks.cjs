const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright-core");
const axe = require(process.env.AXE_MODULE || "axe-core");
const E = require("../prototype/learning-engine.js");

const origin = process.env.DESIGN_URL || "http://127.0.0.1:5187";
const results = process.env.DESIGN_RESULTS || path.join(__dirname, "results");
const report = { scope: "WCAG 2.2 AA automated checks; not a compliance certification", pages: [], manualLimits: ["No human screen-reader session or learner-outcome study was performed."] };
fs.mkdirSync(results, { recursive: true });

function fixtures() {
  const teach = E.start(E.initialState());
  const assemble = E.nextTeaching(E.nextTeaching(teach));
  const ordered = E.movePipeline(E.movePipeline(assemble, 0, 1), 1, 1);
  const fieldwork = E.checkPipeline(ordered);
  const question = E.leaveFieldwork(fieldwork, "deferred");
  const wrong = E.submitAnswer(E.setDraft(E.setDraft(question, "choice", "rag"), "reason", "weights"));
  const repair = E.continueFeedback(wrong);
  let receipt = E.continueFeedback(E.submitAnswer(E.setDraft(E.setDraft(question, "choice", "rag"), "reason", "context")));
  receipt = E.continueFeedback(E.submitAnswer(E.setDraft(E.setDraft(receipt, "choice", "combine"), "reason", "separate")));
  const rehearsal = E.updateFieldwork(fieldwork, { mode: "rehearsal" });
  const dark = structuredClone(question);
  dark.preferences = { quiet: true, size: "large", theme: "dark" };
  return [
    ["build", E.initialState(), 1440],
    ["teaching-mobile", teach, 360],
    ["reconstruction", assemble, 1440],
    ["fieldwork", fieldwork, 1440],
    ["rehearsal-mobile", rehearsal, 360],
    ["decision", question, 1440],
    ["decision-large-dark-mobile", dark, 320],
    ["feedback", wrong, 1440],
    ["repair-mobile", repair, 360],
    ["receipt", receipt, 1440],
    ["paused", E.pause(question), 360],
    ["curriculum", E.initialState(), 360, "Curriculum"],
    ["evidence", receipt, 360, "Evidence"],
    ["preferences", dark, 360, "Reading & saving"],
  ];
}

(async () => {
  let browser;
  try {
    browser = await chromium.launch({ headless: true, ...(process.env.BROWSER_EXECUTABLE ? { executablePath: process.env.BROWSER_EXECUTABLE } : {}) });
    for (const [name, state, width, nav] of fixtures()) {
      const context = await browser.newContext({ viewport: { width, height: 1000 }, reducedMotion: "reduce" });
      await context.addInitScript(({ key, state, origin }) => {
        if (location.origin === origin) localStorage.setItem(key, JSON.stringify(state));
      }, { key: E.STORAGE_KEY, state, origin });
      const page = await context.newPage();
      await page.goto(`${origin}/prototype/`);
      await page.locator("main h1").waitFor();
      if (nav) await page.getByRole("button", { name: nav, exact: true }).click();
      await page.evaluate(() => document.fonts.ready);
      await page.addScriptTag({ content: axe.source });
      const scan = await page.evaluate(async () => {
        const result = await window.axe.run(document, {
          runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"] },
        });
        const field = document.getElementById("field-note");
        let placeholderContrast = null;
        if (field) {
          const foreground = getComputedStyle(field, "::placeholder").color;
          const background = getComputedStyle(field).backgroundColor;
          function luminance(color) {
            const channels = color.match(/[\d.]+/g).slice(0, 3).map(Number).map((channel) => {
              const value = channel / 255;
              return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
            });
            return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
          }
          const a = luminance(foreground), b = luminance(background);
          placeholderContrast = { foreground, background, ratio: (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05), opacity: getComputedStyle(field, "::placeholder").opacity };
        }
        return {
          violations: result.violations.map((item) => ({
            id: item.id, impact: item.impact, help: item.help, tags: item.tags,
            nodes: item.nodes.map((node) => ({ target: node.target, summary: node.failureSummary })),
          })),
          incomplete: result.incomplete.map((item) => ({ id: item.id, targets: item.nodes.map((node) => node.target) })),
          passedRules: result.passes.length,
          animations: document.getAnimations().length,
          pageWidth: document.documentElement.scrollWidth,
          viewport: document.documentElement.clientWidth,
          placeholderContrast,
        };
      });
      report.pages.push({ name, ...scan });
      if (name === "decision") {
        fs.writeFileSync(path.join(results, "decision-accessibility-tree.txt"), await page.locator("body").ariaSnapshot());
        await page.getByRole("radio").first().focus();
        await page.keyboard.press("Space");
        assert.equal(await page.getByRole("radio").first().isChecked(), true);
      }
      await context.close();
    }
    const violations = report.pages.flatMap((entry) => entry.violations.map((violation) => ({ page: entry.name, ...violation })));
    assert.deepEqual(violations, [], "Automated accessibility violations must be repaired.");
    assert.ok(report.pages.every((entry) => entry.animations === 0), "Motion must remain off.");
    assert.ok(report.pages.every((entry) => entry.pageWidth <= entry.viewport + 1), "Enlarged layouts must not overflow.");
    assert.ok(report.pages.every((entry) => !entry.placeholderContrast
      || (entry.placeholderContrast.ratio >= 4.5 && entry.placeholderContrast.opacity === "1")), "Placeholder contrast must be resolved, not assumed.");
    report.result = "PASS";
  } catch (error) {
    report.result = "FAIL";
    report.failure = error.message;
    console.error(error);
    process.exitCode = 1;
  } finally {
    if (browser) await browser.close();
    report.recordedAt = new Date().toISOString();
    fs.writeFileSync(path.join(results, "accessibility-report.json"), JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report, null, 2));
  }
})();
