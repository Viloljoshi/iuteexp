"use client";

import { useState } from "react";
import content from "@/data/content.json";
import { ConfidenceMark } from "./Models";

const dimensions = [
  ["Customer", "Need intensity · perceived value · trust"],
  ["Distribution", "Observable moment · reach · channel fit"],
  ["Economics", "Revenue · renewal · cost to serve"],
  ["Carrier", "Appetite · pricing · technical + claims fit"],
  ["Complexity", "Operations · claims · regulation · build"],
  ["Scale", "Reuse · localisation · market repeatability"],
];

export function OpportunityExplorer() {
  const [selectedId, setSelectedId] = useState(content.opportunities[0].id);
  const [openTopic, setOpenTopic] = useState("Customer");
  const selected = content.opportunities.find((item) => item.id === selectedId) ?? content.opportunities[0];

  return (
    <div className="opportunity-explorer">
      <div className="opportunity-matrix-wrap">
        <div className="opportunity-legend">
          <span>Illustrative evidence level</span>
          <div><ConfidenceMark value="High" /><ConfidenceMark value="Medium" /><ConfidenceMark value="Unknown" /></div>
        </div>
        <div className="opportunity-matrix" aria-label="Illustrative opportunity comparison">
          <div className="matrix-row matrix-header">
            <div>Worked opportunity</div>
            {dimensions.map(([name, detail]) => (
              <div key={name} title={detail}>{name}</div>
            ))}
          </div>
          {content.opportunities.map((item) => (
            <button
              className={`matrix-row matrix-button ${selectedId === item.id ? "selected" : ""}`}
              type="button"
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              aria-pressed={selectedId === item.id}
            >
              <span><strong>{item.name}</strong><small>{item.note}</small></span>
              {item.scores.map((score, index) => (
                <span key={`${item.id}-${dimensions[index][0]}`}><ConfidenceMark value={score} /></span>
              ))}
            </button>
          ))}
        </div>
        <p className="matrix-rule"><strong>Unknown ≠ low.</strong> Unknown becomes a research task before a portfolio commitment.</p>
      </div>

      <aside className="opportunity-interview-card">
        <div className="interview-card-head">
          <span>Opportunity interview</span>
          <h3>{selected.name}</h3>
          <p>{selected.note}</p>
        </div>
        <div className="interview-topics" role="tablist" aria-label="Opportunity interview areas">
          {Object.keys(selected.interview).map((topic) => (
            <button
              key={topic}
              type="button"
              className={openTopic === topic ? "active" : ""}
              onClick={() => setOpenTopic(topic)}
              role="tab"
              aria-selected={openTopic === topic}
            >
              {topic}
            </button>
          ))}
        </div>
        <div className="interview-answer" role="tabpanel">
          <span>{openTopic}</span>
          <ul>
            {selected.interview[openTopic as keyof typeof selected.interview].map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </aside>
    </div>
  );
}

export function EvidencePlan() {
  const lenses = [
    ["01", "Locate", "Find the break in funnels, renewals, service, claims and payments. Cut by market, product, channel and cohort."],
    ["02", "Explain", "Interview buyers, abandoners, claimants, cancellers and frontline staff. Read complaint cases."],
    ["03", "Frame", "Write the affected customer, job, pain point, cause, current alternative and business effect."],
    ["04", "Prove", "Test whether a change in proposition, timing or journey causes better behaviour without worse guardrails."],
  ];

  return (
    <div className="evidence-plan">
      {lenses.map(([index, name, copy]) => (
        <article key={name}><span>{index}</span><strong>{name}</strong><p>{copy}</p></article>
      ))}
      <p className="evidence-plan-thesis">
        Behaviour locates the break. Research explains it. A controlled test shows whether the response caused improvement.
      </p>
    </div>
  );
}
