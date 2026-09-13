import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const data = JSON.parse(readFileSync(new URL("../data/content.json", import.meta.url), "utf8"));
const journey = JSON.parse(readFileSync(new URL("../data/journey.json", import.meta.url), "utf8"));
const markets = JSON.parse(readFileSync(new URL("../data/markets.json", import.meta.url), "utf8"));
const albaniaDecision = JSON.parse(readFileSync(new URL("../data/albania-decision.json", import.meta.url), "utf8"));
const deepDive = readFileSync(new URL("../app/deep-dive/page.tsx", import.meta.url), "utf8");
const brief = readFileSync(new URL("../app/brief/page.tsx", import.meta.url), "utf8");
const discussion = readFileSync(new URL("../components/DiscussionMode.tsx", import.meta.url), "utf8");
const nextConfig = readFileSync(new URL("../next.config.ts", import.meta.url), "utf8");
const pagesWorkflow = readFileSync(new URL("../.github/workflows/deploy-pages.yml", import.meta.url), "utf8");

test("all company facts point to declared public Iute sources", () => {
  const sourceIds = new Set(data.sources.map((source) => source.id));
  assert.ok(data.facts.length >= 3);
  for (const fact of data.facts) {
    assert.ok(sourceIds.has(fact.source));
    const source = data.sources.find((item) => item.id === fact.source);
    assert.match(source.url, /^https:\/\/(?:[^/]+\.)?iute\.com\//);
  }
  for (const source of data.sources) assert.match(source.url, /^https:\/\//);
});

test("market lens covers every Iute market with evidence and internal checks", () => {
  assert.deepEqual(markets.markets.map((market) => market.name).sort(), ["Albania", "Bulgaria", "Moldova", "North Macedonia", "Ukraine"]);
  const sourceIds = new Set(data.sources.map((source) => source.id));
  for (const market of markets.markets) {
    assert.ok(market.sources.length > 0);
    for (const source of market.sources) assert.ok(sourceIds.has(source));
    assert.ok(market.signal.length > 40);
    assert.ok(market.read.length > 30);
    assert.equal(market.validate.length, 3);
  }
});

test("Albania decision converts public evidence into an explicit test and decision", () => {
  const sourceIds = new Set(data.sources.map((source) => source.id));
  assert.match(albaniaDecision.stance, /VALIDATE/);
  assert.equal(albaniaDecision.whyNow.length, 3);
  assert.equal(albaniaDecision.assumptions.length, 3);
  assert.equal(albaniaDecision.plan.length, 4);
  assert.deepEqual(albaniaDecision.gates.map((gate) => gate.status), ["PROCEED", "CHANGE", "STOP"]);
  assert.equal(albaniaDecision.alternatives.length, 4);
  for (const record of [...albaniaDecision.whyNow, ...albaniaDecision.alternatives]) {
    for (const source of record.sources) assert.ok(sourceIds.has(source));
  }
});

test("opportunity language avoids fabricated precision", () => {
  const allowed = new Set(["High", "Medium", "Low", "Unknown"]);
  for (const opportunity of data.opportunities) {
    assert.equal(opportunity.scores.length, 6);
    for (const score of opportunity.scores) assert.ok(allowed.has(score));
    assert.match(opportunity.note, /Illustrative/);
  }
});

test("problem framing keeps fact, inference, response and proof separate", () => {
  assert.ok(journey.signals.length >= 3);
  const sourceIds = new Set(data.sources.map((source) => source.id));
  for (const signal of journey.signals) {
    assert.ok(sourceIds.has(signal.source));
    for (const field of ["fact", "challenge", "response", "proof"]) assert.ok(signal[field]?.length > 15);
  }
});

test("every journey step joins UX, evidence and control", () => {
  assert.equal(journey.stages.length, 6);
  for (const stage of journey.stages) {
    for (const field of ["customerOutcome", "decision", "evidence", "control", "event", "metric", "challenge"]) {
      assert.ok(stage[field]?.length > 10);
    }
  }
});

test("improvement loop has a question, action and exit test at every step", () => {
  assert.equal(journey.loop.length, 6);
  for (const step of journey.loop) {
    for (const field of ["question", "input", "action", "exit"]) assert.ok(step[field]?.length > 15);
  }
});

test("deep dive keeps the eight core decisions and capability boundary", () => {
  for (const id of ["capability", "opportunity", "viability", "proposition", "journey", "operations", "measure", "intelligence"]) {
    assert.match(deepDive, new RegExp(`id=\"${id}\"`));
  }
  assert.match(deepDive, /Where I need Iute’s depth/);
  assert.match(deepDive, /would not set product priority/i);
  assert.match(deepDive, /ThinkingLoop/);
  assert.match(deepDive, /AlbaniaDecisionRoom/);
  assert.match(deepDive, /ExecutionProof/);
});

test("discussion mode has six chapters and keyboard navigation", () => {
  assert.equal((discussion.match(/number: "0[1-6]"/g) ?? []).length, 6);
  assert.match(discussion, /ArrowRight/);
  assert.match(discussion, /role="tabpanel"/);
  assert.match(discussion, /aria-selected/);
});

test("GitHub Pages builds the exported site with the project base path", () => {
  assert.match(nextConfig, /output: "export"/);
  assert.match(nextConfig, /GITHUB_REPOSITORY/);
  assert.match(nextConfig, /basePath/);
  assert.match(pagesWorkflow, /npm run build/);
  assert.match(pagesWorkflow, /path: \.\/out/);
  assert.match(pagesWorkflow, /actions\/deploy-pages@v4/);
});

test("brief is explicitly split into two print pages", () => {
  assert.equal((brief.match(/brief-page brief-page-/g) ?? []).length, 2);
  assert.match(brief, /starting case, not a recommendation/i);
});
