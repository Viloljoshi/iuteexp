"use client";

import { useState } from "react";

const mechanisms = [
  {
    id: "rules",
    name: "Rules / software",
    question: "Is the answer defined?",
    use: "Eligibility, consent, policy state, calculations and contractual product rules.",
    why: "Deterministic behaviour is cheaper to test, easier to audit and more reliable than a model when the answer is known.",
    control: "Version rules, test edge cases and retain a complete decision trail."
  },
  {
    id: "ml",
    name: "Predictive ML",
    question: "Is a probability or ranking required?",
    use: "Incremental offer ranking, renewal likelihood or anomaly prioritisation where sufficient data exists.",
    why: "The problem is prediction, not language generation. Measure incremental behaviour, not only offline accuracy.",
    control: "Segment performance, drift, opt-out, complaints and a holdout or uplift design."
  },
  {
    id: "genai",
    name: "GenAI",
    question: "Is unstructured content the bottleneck?",
    use: "Document extraction, claim narrative structuring, grounded policy search and agent-assist drafting.",
    why: "Language and documents are the core input; ordinary fields and rules do not solve the work economically.",
    control: "Approved sources, schema validation, calibrated confidence, source preservation and escalation."
  },
  {
    id: "human",
    name: "Human control",
    question: "Is consequence or ambiguity material?",
    use: "Disputed cover, consequential claim decisions, conflicts and unfamiliar exceptions.",
    why: "Context and accountability matter more than marginal automation speed.",
    control: "Give the reviewer complete evidence, decision authority and an auditable reason."
  }
];

const useCases = [
  {
    name: "Next-best protection",
    baseline: "Broad or context-poor distribution",
    mechanism: "Predictive ML / uplift",
    metric: "Incremental bind lift",
    reason: "Rank likely incremental response—not merely likelihood to buy anyway.",
    rollout: "Offline → controlled experiment",
    stop: "No incremental lift; complaints, opt-outs or core-flow harm increase"
  },
  {
    name: "Claims document intake",
    baseline: "Manual classification and field entry",
    mechanism: "OCR + document model + grounded extraction",
    metric: "Touches, handling time, claim TAT",
    reason: "Unstructured evidence is the bottleneck; rules validate the structured result.",
    rollout: "Offline → shadow → reviewer assist → low-risk automation",
    stop: "Critical-field errors, correction or complaint rate breaches"
  },
  {
    name: "Policy explanation",
    baseline: "Document search and support contact",
    mechanism: "Retrieval-grounded language model",
    metric: "Resolved self-service + supported conversion",
    reason: "Natural-language access can reduce comprehension cost when grounded in approved wording.",
    rollout: "Internal assist → limited customer use",
    stop: "Unsupported coverage statements or missed escalations"
  },
  {
    name: "Claim routing",
    baseline: "Manual triage queues",
    mechanism: "Rules + predictive signals + document assist",
    metric: "Time to correct owner; re-route rate",
    reason: "Multiple structured and unstructured signals inform priority; final authority remains controlled.",
    rollout: "Shadow → recommendation → bounded routing",
    stop: "Segment degradation, high override or material misrouting"
  }
];

export function DecisionIntelligence() {
  const [selected, setSelected] = useState("rules");
  const item = mechanisms.find((mechanism) => mechanism.id === selected) ?? mechanisms[0];

  return (
    <div className="intelligence-model">
      <div className="mechanism-selector" role="tablist" aria-label="Technology decision model">
        {mechanisms.map((mechanism, index) => (
          <button type="button" role="tab" aria-selected={selected === mechanism.id} className={selected === mechanism.id ? "active" : ""} key={mechanism.id} onClick={() => setSelected(mechanism.id)}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{mechanism.question}</strong>
            <small>{mechanism.name}</small>
          </button>
        ))}
      </div>
      <div className="mechanism-detail" role="tabpanel">
        <div><span>Use</span><p>{item.use}</p></div>
        <div><span>Why this mechanism</span><p>{item.why}</p></div>
        <div><span>Required control</span><p>{item.control}</p></div>
      </div>
      <div className="impact-confidence">
        <div className="impact-title"><span>Automation boundary</span><strong>Confidence alone does not decide automation. Error consequence does.</strong></div>
        <div className="impact-axis-label">Higher consequence →</div>
        <div className="impact-cell"><span>Low confidence / low impact</span><strong>Fallback or ask</strong></div>
        <div className="impact-cell impact-cell-human"><span>Low confidence / high impact</span><strong>Human controlled</strong></div>
        <div className="impact-cell"><span>High confidence / low impact</span><strong>Bounded automation</strong></div>
        <div className="impact-cell impact-cell-guarded"><span>High confidence / high impact</span><strong>Validation + control</strong></div>
      </div>
    </div>
  );
}

export function AIUseCaseTable() {
  return (
    <div className="table-scroll">
      <table className="data-table ai-table">
        <thead><tr><th>Use case</th><th>Baseline problem</th><th>Mechanism</th><th>Business measure</th><th>Why not simpler</th><th>Launch mode</th><th>Kill / rollback</th></tr></thead>
        <tbody>
          {useCases.map((item) => (
            <tr key={item.name}>
              <th>{item.name}</th><td>{item.baseline}</td><td>{item.mechanism}</td><td>{item.metric}</td><td>{item.reason}</td><td>{item.rollout}</td><td>{item.stop}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
