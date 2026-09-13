"use client";

import { useState } from "react";

type Journey = "purchase" | "claim";

const blueprints: Record<Journey, { stages: string[]; lanes: Array<{ name: string; cells: string[] }> }> = {
  purchase: {
    stages: ["Discover", "Quote", "Consent", "Payment", "Bind", "Issue", "Reconcile"],
    lanes: [
      { name: "Customer", cells: ["Sees reason", "Confirms data", "Understands cover", "Authorises", "Waits for state", "Receives proof", "Sees correct payment"] },
      { name: "MyIute", cells: ["Renders context", "Collects minimum", "Records consent", "Shows status", "Shows pending", "Policy home", "Service entry"] },
      { name: "Orchestration", cells: ["Loads version", "Normalises quote", "Locks version", "Links payment", "Idempotent bind", "Stores policy", "Matches states"] },
      { name: "Iute Affinity / ops", cells: ["Product rule", "Exception route", "Audit evidence", "Visibility", "Failed-bind owner", "Document check", "Exception queue"] },
      { name: "Carrier", cells: ["Pre-check if needed", "Quote + expiry", "Terms source", "—", "Bind response", "Policy + docs", "Policy ledger"] },
      { name: "Payments / finance", cells: ["—", "Price display", "Billing basis", "Auth / capture", "Hold / refund", "Settlement entry", "Commission + refund"] },
      { name: "Compliance / service", cells: ["Distribution rule", "Disclosure", "Consent evidence", "Support context", "Customer update", "Help + complaint", "Reporting"] }
    ]
  },
  claim: {
    stages: ["Start", "Verify", "Evidence", "Review", "Decision", "Resolve", "Learn"],
    lanes: [
      { name: "Customer", cells: ["Explains event", "Sees policy", "Uploads once", "Tracks status", "Receives reason", "Gets payment / service", "Can complain"] },
      { name: "MyIute", cells: ["One front door", "Policy lookup", "Checklist", "Next update", "Clear outcome", "Resolution status", "Feedback"] },
      { name: "Orchestration", cells: ["Creates claim", "Pins product version", "Links evidence", "Routes owner", "Records decision", "Closes state", "Emits events"] },
      { name: "Iute Affinity / ops", cells: ["Triage", "Coverage workflow", "Completeness", "Exception handling", "Quality control", "Customer routing", "Root-cause review"] },
      { name: "Carrier / TPA", cells: ["Receives FNOL", "Rule source", "Requirements", "Assessment", "Decision authority", "Pay / provide", "Portfolio MI"] },
      { name: "Payments / finance", cells: ["—", "Policy status", "—", "Reserve visibility", "Amount", "Payment", "Reconciliation"] },
      { name: "Compliance / service", cells: ["Support", "Fair treatment", "Sensitive data", "Escalation", "Decision wording", "Complaint path", "Reporting"] }
    ]
  }
};

export function ServiceBlueprint() {
  const [journey, setJourney] = useState<Journey>("purchase");
  const blueprint = blueprints[journey];

  return (
    <div className="service-blueprint">
      <div className="blueprint-toolbar">
        <div>
          <span>Customer experience above · operating system below</span>
          <h3>{journey === "purchase" ? "Purchase blueprint" : "Claim + service blueprint"}</h3>
        </div>
        <div className="segmented-control" role="group" aria-label="Blueprint journey">
          <button type="button" className={journey === "purchase" ? "active" : ""} onClick={() => setJourney("purchase")}>Purchase</button>
          <button type="button" className={journey === "claim" ? "active" : ""} onClick={() => setJourney("claim")}>Claim</button>
        </div>
      </div>
      <div className="blueprint-scroll">
        <div className="blueprint-table" role="table" aria-label={`${journey} service blueprint`}>
          <div className="blueprint-row blueprint-stage-row" role="row">
            <div role="columnheader">Owner / stage</div>
            {blueprint.stages.map((stage) => <div key={stage} role="columnheader">{stage}</div>)}
          </div>
          {blueprint.lanes.map((lane, index) => (
            <div className={`blueprint-row ${index === 0 ? "customer-lane" : ""}`} key={lane.name} role="row">
              <div role="rowheader">{lane.name}</div>
              {lane.cells.map((cell, cellIndex) => <div key={`${lane.name}-${cellIndex}`} role="cell">{cell}</div>)}
            </div>
          ))}
        </div>
      </div>
      <p className="handoff-rule"><strong>Every cross-organisation handoff needs:</strong> owner · SLA · system · data · customer communication · failure path.</p>
    </div>
  );
}

const failures = [
  {
    id: "payment-bind",
    name: "Payment succeeds; policy issuance fails",
    severity: "Critical",
    sequence: ["Payment authorised", "Bind failed", "Pending insurance", "Safe automatic retry", "Policy issued or refund + ops resolution"],
    customer: "See a truthful pending state, a committed update and one support route. Never show active cover.",
    system: "Use an idempotency key, preserve quote/product version, block duplicate charge or policy and emit the mismatch event.",
    operations: "Named owner sees payment and carrier state, retry history, refund status and customer communication in one case.",
    measure: "Payment-to-issue mismatch rate · age of unresolved cases · refund time · duplicate rate · contacts per exception"
  },
  {
    id: "quote-timeout",
    name: "Carrier quote API unavailable",
    severity: "Material",
    sequence: ["Quote requested", "Timeout", "Transparent unavailable state", "Retry / alternate path", "Restore or close"],
    customer: "Keep entered data where permitted and explain what can happen next without promising a price.",
    system: "Choose queue, retry, disable or fallback by product risk; do not blindly replay non-idempotent calls.",
    operations: "Monitor carrier availability and expose volume, age and recovery status.",
    measure: "Quote success · latency · retry recovery · abandoned quotes · partner SLA breach"
  },
  {
    id: "version",
    name: "Policy wording changes after purchase",
    severity: "Material",
    sequence: ["Product v1 issued", "Product v2 published", "Customer claims", "Retrieve v1", "Assess against historical terms"],
    customer: "Receive an outcome based on the contract actually purchased.",
    system: "Version wording, coverage, disclosures, consent and rating references; keep the historical policy reproducible.",
    operations: "Reviewers see the correct version by default, with an audit trail for any exception.",
    measure: "Wrong-version incidents · manual retrieval · dispute rate · audit exceptions"
  },
  {
    id: "claim-conflict",
    name: "Claim data conflicts across documents",
    severity: "High consequence",
    sequence: ["Evidence received", "Conflict detected", "No silent guess", "Clarify / human review", "Controlled decision"],
    customer: "See exactly what needs clarification and avoid unnecessary re-upload.",
    system: "Preserve sources, field confidence and corrections. Do not let a model pick the convenient answer.",
    operations: "Route to the appropriate claims authority with the conflict visible.",
    measure: "Conflict rate · repeat submission · review time · material correction · complaints"
  }
];

export function FailureStateExplorer() {
  const [selected, setSelected] = useState(failures[0].id);
  const failure = failures.find((item) => item.id === selected) ?? failures[0];

  return (
    <div className="failure-explorer">
      <div className="failure-list" role="tablist" aria-label="Failure states">
        {failures.map((item) => (
          <button type="button" role="tab" aria-selected={selected === item.id} className={selected === item.id ? "active" : ""} key={item.id} onClick={() => setSelected(item.id)}>
            <span>{item.severity}</span>{item.name}
          </button>
        ))}
      </div>
      <div className="failure-detail" role="tabpanel">
        <div className="failure-detail-head"><span>{failure.severity}</span><h3>{failure.name}</h3></div>
        <div className="failure-sequence">
          {failure.sequence.map((step, index) => <div key={step}><span>{step}</span>{index < failure.sequence.length - 1 && <i>→</i>}</div>)}
        </div>
        <dl>
          <div><dt>Customer</dt><dd>{failure.customer}</dd></div>
          <div><dt>System</dt><dd>{failure.system}</dd></div>
          <div><dt>Operations</dt><dd>{failure.operations}</dd></div>
          <div><dt>Measure</dt><dd>{failure.measure}</dd></div>
        </dl>
      </div>
    </div>
  );
}
