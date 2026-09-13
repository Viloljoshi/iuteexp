import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const data = JSON.parse(readFileSync(new URL("../data/content.json", import.meta.url), "utf8"));
const deepDive = readFileSync(new URL("../app/deep-dive/page.tsx", import.meta.url), "utf8");
const brief = readFileSync(new URL("../app/brief/page.tsx", import.meta.url), "utf8");

test("all company facts point to declared public Iute sources", () => {
  const sourceIds = new Set(data.sources.map((source) => source.id));
  assert.ok(data.facts.length >= 3);
  for (const fact of data.facts) assert.ok(sourceIds.has(fact.source));
  for (const source of data.sources) assert.match(source.url, /^https:\/\/(?:[^/]+\.)?iute\.com\//);
});

test("opportunity language avoids fabricated precision", () => {
  const allowed = new Set(["High", "Medium", "Low", "Unknown"]);
  for (const opportunity of data.opportunities) {
    assert.equal(opportunity.scores.length, 6);
    for (const score of opportunity.scores) assert.ok(allowed.has(score));
    assert.match(opportunity.note, /Illustrative/);
  }
});

test("every wireframe carries senior product annotations", () => {
  assert.ok(data.wireframes.length >= 6);
  for (const frame of data.wireframes) {
    for (const field of ["customerJob", "decision", "data", "metric", "control"]) assert.ok(frame[field]?.length > 20);
  }
});

test("deep dive keeps the eight core decisions and capability boundary", () => {
  for (const id of ["capability", "opportunity", "viability", "proposition", "journey", "operations", "measure", "intelligence"]) {
    assert.match(deepDive, new RegExp(`id=\"${id}\"`));
  }
  assert.match(deepDive, /Where I need Iute’s depth/);
  assert.match(deepDive, /not a claim that insurance is identical/i);
});

test("brief is explicitly split into two print pages", () => {
  assert.equal((brief.match(/brief-page brief-page-/g) ?? []).length, 2);
  assert.match(brief, /outside-in hypotheses rather than recommendations/i);
});
