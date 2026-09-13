import { EvidenceTag } from "./Evidence";

export function SectionHeading({
  index,
  title,
  prompt,
  evidence,
}: {
  index: string;
  title: string;
  prompt: string;
  evidence?: "FACT" | "INFERENCE" | "HYPOTHESIS";
}) {
  return (
    <header className="section-heading">
      <div className="section-index" aria-hidden="true">
        {index}
      </div>
      <div>
        <div className="section-title-row">
          {evidence && <EvidenceTag kind={evidence} />}
          <h2>{title}</h2>
        </div>
        <p>{prompt}</p>
      </div>
    </header>
  );
}

export function DecisionRecord({
  decision,
  value,
  commercial,
  complexity,
  risk,
  evidence,
  unknown,
  outcome,
}: {
  decision: string;
  value: string;
  commercial: string;
  complexity: string;
  risk: string;
  evidence: string;
  unknown: string;
  outcome: string;
}) {
  const items = [
    ["Customer value", value],
    ["Commercial effect", commercial],
    ["Complexity", complexity],
    ["Risk", risk],
    ["Evidence", evidence],
    ["Unknown", unknown],
  ];

  return (
    <aside className="decision-record">
      <div className="decision-record-head">
        <span>Product decision record</span>
        <strong>{decision}</strong>
      </div>
      <dl>
        {items.map(([label, copy]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{copy}</dd>
          </div>
        ))}
      </dl>
      <div className="decision-outcome">
        <span>Decision</span>
        <strong>{outcome}</strong>
      </div>
    </aside>
  );
}

export function ArrowFlow({
  items,
  compact = false,
}: {
  items: string[];
  compact?: boolean;
}) {
  return (
    <div className={`arrow-flow ${compact ? "arrow-flow-compact" : ""}`}>
      {items.map((item, index) => (
        <div className="flow-fragment" key={item}>
          <span>{item}</span>
          {index < items.length - 1 && <i aria-hidden="true">→</i>}
        </div>
      ))}
    </div>
  );
}

export function ThreeSidedModel({ brief = false }: { brief?: boolean }) {
  const sides = [
    {
      name: "Customer",
      question: "Is the protection useful, understandable and dependable when needed?",
      details: "Premium · comprehension · coverage utility · service · renewal willingness",
    },
    {
      name: "Iute",
      question: "Does distribution create sustainable contribution and relationship value?",
      details: "Revenue · acquisition · service · payment · operations · persistency",
    },
    {
      name: "Carrier / partner",
      question: "Can the portfolio be priced, underwritten and operated sustainably?",
      details: "Adequacy · claims · fraud · expense · capacity · service quality",
    },
  ];

  return (
    <div className={`three-sided ${brief ? "three-sided-brief" : ""}`}>
      {sides.map((side) => (
        <article key={side.name}>
          <h3>{side.name}</h3>
          <p>{side.question}</p>
          <small>{side.details}</small>
        </article>
      ))}
      <p className="three-sided-thesis">
        <strong>Viable product</strong>
        A proposition that works for only two of the three parties eventually breaks.
      </p>
    </div>
  );
}

export function ConfidenceMark({ value }: { value: string }) {
  return <span className={`confidence confidence-${value.toLowerCase()}`}>{value}</span>;
}
