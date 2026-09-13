import journey from "@/data/journey.json";
import { EvidenceTag, SourceLink } from "@/components/Evidence";

export function ProblemFrame() {
  return (
    <section className="signal-frame" aria-labelledby="signal-frame-title">
      <div className="signal-frame-intro">
        <span className="section-label">Observed problem</span>
        <h3 id="signal-frame-title">From public signal to a testable customer problem</h3>
        <p>Facts frame the question. Iute customer and operating data make the decision.</p>
      </div>
      <div className="signal-table" role="table" aria-label="Evidence to product response">
        <div className="signal-table-head" role="row">
          <span role="columnheader">Public signal</span><span role="columnheader">Possible problem</span><span role="columnheader">First response</span><span role="columnheader">Data needed</span>
        </div>
        {journey.signals.map((signal) => (
          <div className="signal-row" role="row" key={signal.fact}>
            <div role="cell"><span className="horizon-tag">{signal.horizon}</span><EvidenceTag kind="FACT" /><p>{signal.fact} <SourceLink id={signal.source} compact /></p></div>
            <div role="cell"><EvidenceTag kind="INFERENCE" /><p>{signal.challenge}</p></div>
            <div role="cell"><EvidenceTag kind="HYPOTHESIS" /><p>{signal.response}</p></div>
            <div role="cell"><span className="proof-label">VALIDATE</span><p>{signal.proof}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
