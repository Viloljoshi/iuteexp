"use client";

import { useState } from "react";
import journey from "@/data/journey.json";

export function AnalysisLoop() {
  const [active, setActive] = useState(0);
  const step = journey.loop[active];

  return (
    <section className="analysis-loop" aria-labelledby="analysis-loop-title">
      <div className="analysis-loop-head">
        <div>
          <span className="section-label">Operating loop</span>
          <h3 id="analysis-loop-title">Learn from every release.</h3>
        </div>
        <p>A funnel shows where. Customer and operating evidence help explain why.</p>
      </div>
      <div className="loop-rail" role="tablist" aria-label="Repeatable product improvement loop">
        {journey.loop.map((item, index) => (
          <button type="button" role="tab" aria-selected={index === active} className={index === active ? "active" : ""} key={item.title} onClick={() => setActive(index)}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item.title}</strong>
          </button>
        ))}
        <span className="loop-return" aria-hidden="true">↺</span>
      </div>
      <div className="loop-detail" aria-live="polite">
        <div className="loop-question"><span>{String(active + 1).padStart(2, "0")} / {step.title}</span><h4>{step.question}</h4></div>
        <dl>
          <div><dt>Bring together</dt><dd>{step.input}</dd></div>
          <div><dt>Product action</dt><dd>{step.action}</dd></div>
          <div><dt>Exit evidence</dt><dd>{step.exit}</dd></div>
        </dl>
      </div>
    </section>
  );
}
