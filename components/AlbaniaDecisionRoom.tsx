import decision from "@/data/albania-decision.json";
import { EvidenceTag, SourceLink } from "@/components/Evidence";

function SourceGroup({ ids }: { ids: number[] }) {
  return <span className="decision-source-group">{ids.map((id) => <SourceLink id={id} compact key={id} />)}</span>;
}

export function AlbaniaDecisionRoom() {
  return (
    <section className="decision-room" id="decision-room" aria-labelledby="decision-room-title">
      <header className="decision-room-head">
        <div>
          <span className="decision-room-stamp">{decision.stance}</span>
          <h3 id="decision-room-title">{decision.title}</h3>
        </div>
        <p>{decision.recommendation}</p>
      </header>

      <div className="decision-room-evidence">
        <div className="decision-room-label"><EvidenceTag kind="FACT" /><span>Why this is a useful learning ground</span></div>
        <div className="decision-fact-grid">
          {decision.whyNow.map((item) => (
            <article key={item.text}>
              <p>{item.text}</p>
              <SourceGroup ids={item.sources} />
            </article>
          ))}
        </div>
      </div>

      <div className="decision-room-bet">
        <article>
          <div className="decision-room-label"><EvidenceTag kind="HYPOTHESIS" /><span>The product bet</span></div>
          <blockquote>{decision.hypothesis}</blockquote>
        </article>
        <article className="decision-assumptions">
          <div className="decision-room-label"><span className="proof-label">RISK</span><span>Three assumptions that can break it</span></div>
          <ol>{decision.assumptions.map((item) => <li key={item}>{item}</li>)}</ol>
        </article>
      </div>

      <div className="decision-room-plan">
        <div className="decision-room-label"><span className="proof-label">30 DAYS</span><span>Evidence before roadmap</span></div>
        <ol>
          {decision.plan.map((item) => (
            <li key={item.period}>
              <span>{item.period}</span>
              <strong>{item.title}</strong>
              <p>{item.detail}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="decision-gates">
        {decision.gates.map((gate) => (
          <article className={`decision-gate decision-gate-${gate.status.toLowerCase()}`} key={gate.status}>
            <span>{gate.status}</span>
            <h4>{gate.title}</h4>
            <p>{gate.evidence}</p>
          </article>
        ))}
      </div>

      <div className="alternative-landscape">
        <header>
          <div>
            <span className="section-label">Observed alternatives</span>
            <h4>Digital purchase already exists. The difference must show up across the lifecycle.</h4>
          </div>
          <p><EvidenceTag kind="INFERENCE" /> Public journeys show the available routes. Iute evidence must show why customers choose and stay.</p>
        </header>
        <div className="alternative-grid" role="list" aria-label="Albanian motor insurance alternatives">
          {decision.alternatives.map((item) => (
            <article role="listitem" key={item.name}>
              <span>{item.type}</span>
              <h5>{item.name}</h5>
              <div><b>Observed</b><p>{item.observed}</p><SourceGroup ids={item.sources} /></div>
              <div><b>Product reading</b><p>{item.reading}</p></div>
            </article>
          ))}
        </div>
      </div>

      <div className="change-mind">
        <strong>What would change this recommendation?</strong>
        <ul>{decision.changeMyMind.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
    </section>
  );
}
