"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import decision from "@/data/albania-decision.json";
import content from "@/data/content.json";
import { EvidenceTag, SourceLink } from "@/components/Evidence";

const slides = [
  { number: "01", label: "Question", title: "Turn one launch into a learning advantage", section: "#top" },
  { number: "02", label: "Market", title: "Start from the market reality", section: "#opportunity" },
  { number: "03", label: "Decision", title: "Validate before copying the model", section: "#decision-room" },
  { number: "04", label: "Journey", title: "Design the truth, including failure", section: "#journey" },
  { number: "05", label: "Proof", title: "Scale only when three-sided value holds", section: "#measure" },
  { number: "06", label: "Fit", title: "Bring the method. Learn the insurance reality.", section: "#candidate-value" },
] as const;

function SlideContent({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="discussion-slide-grid discussion-opening">
        <blockquote>How can Iute grow standalone insurance while keeping customer trust, carrier economics and operations healthy?</blockquote>
        <div className="discussion-thesis">
          <span>Working thesis</span>
          <strong>Solve one measurable problem. Prove demand, economics and operations. Reuse only what works.</strong>
        </div>
        <div className="discussion-facts">
          {content.facts.slice(0, 3).map((fact) => <p key={fact.text}><EvidenceTag kind="FACT" />{fact.text}<SourceLink id={fact.source} compact /></p>)}
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="discussion-signal-grid">
        {decision.whyNow.map((item, itemIndex) => (
          <article key={item.text}>
            <span>{String(itemIndex + 1).padStart(2, "0")}</span>
            <p>{item.text}</p>
            <div>{item.sources.map((id) => <SourceLink id={id} compact key={id} />)}</div>
          </article>
        ))}
        <blockquote><EvidenceTag kind="HYPOTHESIS" />{decision.hypothesis}</blockquote>
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className="discussion-decision">
        <div className="discussion-recommendation">
          <span>{decision.stance}</span>
          <strong>{decision.recommendation}</strong>
        </div>
        <ol className="discussion-plan">
          {decision.plan.map((item) => <li key={item.period}><span>{item.period}</span><strong>{item.title}</strong><p>{item.detail}</p></li>)}
        </ol>
        <div className="discussion-gates">
          {decision.gates.map((gate) => <div key={gate.status}><span>{gate.status}</span><strong>{gate.title}</strong></div>)}
        </div>
      </div>
    );
  }

  if (index === 3) {
    return (
      <div className="discussion-journey">
        <div className="discussion-journey-track" aria-label="Customer insurance lifecycle">
          {[
            ["Discover", "Why now"], ["Understand", "What is covered"], ["Activate", "Payment + bind"],
            ["Prove", "Policy status"], ["Use", "Service + claim"], ["Renew", "Still useful"],
          ].map(([stage, detail]) => <div key={stage}><span>{stage}</span><strong>{detail}</strong></div>)}
        </div>
        <div className="discussion-failure">
          <span>CRITICAL STATE</span>
          <h3>Payment succeeds. Policy issuance fails.</h3>
          <p>Payment authorised → bind failed → truthful pending state → safe retry → policy issued or refund</p>
          <div><strong>Customer</strong><span>Never show active cover</span><strong>System</strong><span>Idempotency and state record</span><strong>Operations</strong><span>Named owner and SLA</span></div>
        </div>
      </div>
    );
  }

  if (index === 4) {
    return (
      <div className="discussion-proof">
        <div className="discussion-proof-parties">
          <article><span>Customer</span><strong>Useful, understood and dependable</strong></article>
          <article><span>Iute</span><strong>Incremental contribution and relationship value</strong></article>
          <article><span>Carrier</span><strong>Price, claims, expense and capacity hold</strong></article>
        </div>
        <div className="discussion-proof-sequence">
          <span>Demand</span><i>→</i><span>Service</span><i>→</i><span>Economics</span><i>→</i><span>Control</span><i>→</i><strong>Reuse or stop</strong>
        </div>
        <p>Conversion is not the decision. The product scales only when customer, Iute and carrier outcomes remain healthy together.</p>
      </div>
    );
  }

  return (
    <div className="discussion-fit">
      <div className="discussion-fit-proof">
        <span>Candidate-reported evidence</span>
        <div><strong>575K+</strong><p>monthly regulated cases</p></div>
        <div><strong>~45%</strong><p>manual-review reduction</p></div>
        <div><strong>~25%</strong><p>API turnaround improvement</p></div>
        <small>Be ready to defend the baseline, denominator, role, controls and trade-offs.</small>
      </div>
      <div className="discussion-fit-boundary">
        <article><span>I can lead</span><strong>Problem framing, decision records, regulated journeys, evidence loops and engineering partnership.</strong></article>
        <article><span>I need to learn</span><strong>Iute’s carrier economics, customer behaviour, claims reality and country-specific operating constraints.</strong></article>
        <article><span>I want to leave behind</span><strong>A repeatable capability that makes the next launch cheaper, safer and easier to improve.</strong></article>
      </div>
    </div>
  );
}

export function DiscussionMode() {
  const [active, setActive] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);

  const move = useCallback((next: number, focusTab = false) => {
    const bounded = Math.max(0, Math.min(slides.length - 1, next));
    setActive(bounded);
    if (focusTab) requestAnimationFrame(() => tabs.current[bounded]?.focus());
  }, []);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.defaultPrevented) return;
      const target = event.target;
      if (target instanceof Element && target.closest("a, button, input, select, textarea")) return;
      if (event.key === "ArrowRight") { event.preventDefault(); move(active + 1); }
      if (event.key === "ArrowLeft") { event.preventDefault(); move(active - 1); }
      if (event.key === "Home") { event.preventDefault(); move(0); }
      if (event.key === "End") { event.preventDefault(); move(slides.length - 1); }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [active, move]);

  const slide = slides[active];

  return (
    <main className="discussion-mode-shell">
      <header className="discussion-mode-head">
        <div>
          <span>Six-minute discussion</span>
          <h1>{slide.title}</h1>
        </div>
        <div className="discussion-counter" aria-live="polite"><strong>{slide.number}</strong><span>/ 06</span><small>about 55 sec</small></div>
      </header>

      <nav className="discussion-tabs" role="tablist" aria-label="Discussion chapters">
        {slides.map((item, index) => (
          <button
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-controls="discussion-panel"
            id={`discussion-tab-${index}`}
            tabIndex={index === active ? 0 : -1}
            className={index === active ? "active" : ""}
            onClick={() => move(index)}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") { event.preventDefault(); move((index + 1) % slides.length, true); }
              if (event.key === "ArrowLeft") { event.preventDefault(); move((index - 1 + slides.length) % slides.length, true); }
            }}
            ref={(element) => { tabs.current[index] = element; }}
            key={item.number}
          >
            <span>{item.number}</span><strong>{item.label}</strong>
          </button>
        ))}
      </nav>

      <section id="discussion-panel" role="tabpanel" aria-labelledby={`discussion-tab-${active}`} className="discussion-panel">
        <SlideContent index={active} />
      </section>

      <footer className="discussion-controls">
        <button type="button" onClick={() => move(active - 1)} disabled={active === 0}>Previous</button>
        <div className="discussion-progress" aria-hidden="true"><span style={{ width: `${((active + 1) / slides.length) * 100}%` }} /></div>
        {active < slides.length - 1
          ? <button type="button" onClick={() => move(active + 1)}>Next: {slides[active + 1].label}</button>
          : <Link href="/deep-dive/#candidate-value">Open the supporting case</Link>}
        <Link className="discussion-evidence-link" href={`/deep-dive/${slide.section}`}>Supporting evidence</Link>
      </footer>
    </main>
  );
}
