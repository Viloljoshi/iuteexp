const records = [
  {
    number: "01",
    context: "Regulated decision operations",
    result: "575K+ monthly cases · ~45% manual-review reduction",
    pattern: "Route defined cases efficiently while keeping ambiguous or consequential work under human review.",
    defence: "Baseline volume, review definition, evaluation method, rollout controls and observed trade-offs.",
  },
  {
    number: "02",
    context: "Multi-party integration performance",
    result: "~25% API turnaround improvement",
    pattern: "Treat vendor latency, state, ownership and fallback as product work, not only integration work.",
    defence: "Bottleneck, intervention, measurement window, failure cases and what the result did not prove.",
  },
];

export function ExecutionProof() {
  return (
    <section className="execution-proof" aria-labelledby="execution-proof-title">
      <header>
        <span>Candidate evidence</span>
        <h3 id="execution-proof-title">Two outcomes I should be ready to defend, not merely display.</h3>
        <p>Candidate-reported experience. The interview should test the baseline, denominator, role and trade-offs behind each result.</p>
      </header>
      <div>
        {records.map((record) => (
          <article key={record.number}>
            <span>{record.number}</span>
            <p>{record.context}</p>
            <strong>{record.result}</strong>
            <dl>
              <div><dt>Transferable pattern</dt><dd>{record.pattern}</dd></div>
              <div><dt>Be ready to explain</dt><dd>{record.defence}</dd></div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
