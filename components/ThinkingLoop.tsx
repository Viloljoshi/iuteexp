const stages = [
  {
    number: "01",
    title: "Observe",
    question: "Where is value or trust breaking?",
    evidence: "Market signals · funnel · service · claims · payments",
    exit: "A bounded cohort and baseline",
  },
  {
    number: "02",
    title: "Explain",
    question: "What behaviour or handoff causes it?",
    evidence: "Customers · frontline · cases · alternatives",
    exit: "Cause, not only correlation",
  },
  {
    number: "03",
    title: "Choose",
    question: "Which problem is worth solving now?",
    evidence: "Customer · Iute · carrier · risk · effort",
    exit: "One decision and its assumptions",
  },
  {
    number: "04",
    title: "Test",
    question: "Does the response change behaviour safely?",
    evidence: "Prototype · service rehearsal · controlled release",
    exit: "Causal evidence with guardrails",
  },
  {
    number: "05",
    title: "Learn",
    question: "What should scale, change or stop?",
    evidence: "Demand · economics · operations · controls",
    exit: "Decision record and next question",
  },
];

export function ThinkingLoop() {
  return (
    <section className="thinking-loop" id="thinking-loop" aria-labelledby="thinking-loop-title">
      <header className="thinking-loop-head">
        <div>
          <span className="section-label">Evidence system</span>
          <h3 id="thinking-loop-title">The question moves forward only when the evidence earns it.</h3>
        </div>
        <p>Progress is not a one-way delivery plan. Weak evidence sends the team back to the first unsupported assumption.</p>
      </header>

      <ol className="thinking-track">
        {stages.map((stage, index) => (
          <li key={stage.title}>
            <div className="thinking-stage-top">
              <span>{stage.number}</span>
              <strong>{stage.title}</strong>
            </div>
            <h4>{stage.question}</h4>
            <p>{stage.evidence}</p>
            <small><b>Exit</b>{stage.exit}</small>
            {index < stages.length - 1 && <i aria-hidden="true">→</i>}
          </li>
        ))}
      </ol>

      <div className="thinking-proof-rail">
        <span>Proof gate</span>
        <div><strong>Customer</strong><small>Useful and understood</small></div>
        <div><strong>Iute</strong><small>Incremental and sustainable</small></div>
        <div><strong>Carrier</strong><small>Price, claims and capacity hold</small></div>
        <div><strong>Control</strong><small>Failure is visible and recoverable</small></div>
      </div>

      <div className="thinking-return">
        <span aria-hidden="true">↶</span>
        <p><strong>Evidence breaks an assumption.</strong> Return to the earliest wrong decision, not automatically to another feature.</p>
      </div>
    </section>
  );
}
