"use client";

import { useState } from "react";
import journey from "@/data/journey.json";
import { EvidenceTag } from "@/components/Evidence";

type JourneyStage = (typeof journey.stages)[number];

function Tick({ muted = false }: { muted?: boolean }) {
  return <span className={muted ? "ui-tick muted" : "ui-tick"}>{muted ? "No" : "✓"}</span>;
}

function AppBar({ title = "Insurance" }: { title?: string }) {
  return (
    <div className="ui-appbar">
      <button type="button" aria-label="Go back">←</button>
      <strong>{title}</strong>
      <button type="button" aria-label="Get help">?</button>
    </div>
  );
}

function PrimaryAction({ children }: { children: React.ReactNode }) {
  return <button className="ui-primary" type="button">{children}</button>;
}

function RelevanceScreen() {
  return (
    <>
      <AppBar />
      <div className="ui-body ui-home">
        <span className="ui-kicker">Protection</span>
        <h3>Check your car cover before you need it.</h3>
        <p className="ui-lead">See what is covered, compare an option and decide in your own time.</p>
        <div className="ui-vehicle-card">
          <span className="ui-vehicle-icon" aria-hidden="true">◇</span>
          <div><strong>Your vehicle</strong><small>Details ready to check</small></div>
          <span>→</span>
        </div>
        <div className="ui-reason">
          <strong>Why you are seeing this</strong>
          <p>Based on vehicle information you provided to Iute.</p>
        </div>
        <div className="ui-bottom-action">
          <PrimaryAction>Check cover</PrimaryAction>
          <button className="ui-link" type="button">Not relevant to me</button>
        </div>
      </div>
    </>
  );
}

function CoverScreen() {
  return (
    <>
      <AppBar title="Choose cover" />
      <div className="ui-progress"><span style={{ width: "42%" }} /></div>
      <div className="ui-body">
        <span className="ui-step">Step 2 of 4</span>
        <h3>What would you want help with?</h3>
        <p className="ui-lead">Compare situations, not insurance labels.</p>
        <div className="ui-plan selected">
          <div className="ui-plan-head"><strong>Required cover</strong><span>Selected</span></div>
          <div><Tick /> Damage to another vehicle</div>
          <div><Tick muted /> Breakdown and towing</div>
        </div>
        <div className="ui-plan">
          <div className="ui-plan-head"><strong>Cover + assistance</strong><span>Choose</span></div>
          <div><Tick /> Damage to another vehicle</div>
          <div><Tick /> Breakdown and towing</div>
        </div>
        <button className="ui-link inline" type="button">Compare limits and exclusions</button>
        <div className="ui-bottom-action"><PrimaryAction>Review this cover</PrimaryAction></div>
      </div>
    </>
  );
}

function UnderstandScreen() {
  return (
    <>
      <AppBar title="Know your cover" />
      <div className="ui-progress"><span style={{ width: "68%" }} /></div>
      <div className="ui-body">
        <span className="ui-step">Before you continue</span>
        <h3>Three things to know</h3>
        <div className="ui-scenarios">
          <div><span>01</span><p><strong>You damage another vehicle</strong>Covered, within policy limits.</p><Tick /></div>
          <div><span>02</span><p><strong>Your car breaks down</strong>Not included in this option.</p><Tick muted /></div>
          <div><span>03</span><p><strong>Your own car is damaged</strong>Not included in this option.</p><Tick muted /></div>
        </div>
        <div className="ui-disclosure"><strong>Limits and exclusions apply.</strong><button type="button">Read the policy summary →</button></div>
        <label className="ui-check"><input type="checkbox" defaultChecked /> <span>I understand what this option does not cover.</span></label>
        <div className="ui-bottom-action"><PrimaryAction>Continue to payment</PrimaryAction></div>
      </div>
    </>
  );
}

function ActivateScreen() {
  return (
    <>
      <AppBar title="Policy status" />
      <div className="ui-body ui-status-body">
        <div className="ui-state-icon">!</div>
        <span className="ui-state-label">PAYMENT RECEIVED</span>
        <h3>Your policy is not active yet.</h3>
        <p className="ui-lead">The insurer has not confirmed issuance. You do not need to pay again.</p>
        <div className="ui-timeline">
          <div className="done"><span>✓</span><p><strong>Payment received</strong><small>Money recorded</small></p></div>
          <div className="current"><span /><p><strong>Policy confirmation</strong><small>We are checking with the insurer</small></p></div>
          <div><span /><p><strong>Cover becomes active</strong><small>Only after confirmation</small></p></div>
        </div>
        <div className="ui-promise"><strong>What happens now</strong><p>We will update this screen within the agreed service time. If we cannot issue the policy, the payment is reconciled automatically.</p></div>
        <div className="ui-bottom-action">
          <button className="ui-secondary" type="button">Get help with this payment</button>
          <small>Reference: linked to this transaction</small>
        </div>
      </div>
    </>
  );
}

function ProofScreen() {
  return (
    <>
      <AppBar title="Your policy" />
      <div className="ui-body">
        <div className="ui-policy-card">
          <div className="ui-policy-top"><span className="ui-live-dot" /> Active</div>
          <small>Motor third-party cover</small>
          <h3>Your vehicle</h3>
          <dl><div><dt>Insurer</dt><dd>Shown on issued policy</dd></div><div><dt>Valid until</dt><dd>Shown on issued policy</dd></div></dl>
        </div>
        <div className="ui-proof-row">
          <div className="ui-qr" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
          <div><strong>Verifiable proof</strong><p>Use this status or share the issued document.</p></div>
        </div>
        <div className="ui-action-pair"><button type="button">↓ Download</button><button type="button">⌁ Print</button></div>
        <div className="ui-service-list">
          <button type="button"><span>Roadside help</span><b>→</b></button>
          <button type="button"><span>Make a claim</span><b>→</b></button>
          <button type="button"><span>Policy details</span><b>→</b></button>
        </div>
      </div>
    </>
  );
}

function ClaimScreen() {
  return (
    <>
      <AppBar title="Report an incident" />
      <div className="ui-progress"><span style={{ width: "28%" }} /></div>
      <div className="ui-body">
        <span className="ui-step">Tell us once</span>
        <h3>What happened?</h3>
        <div className="ui-choice-grid">
          <button type="button"><span>◇</span>Collision</button>
          <button type="button"><span>△</span>Breakdown</button>
          <button type="button"><span>○</span>Other damage</button>
          <button type="button"><span>□</span>Something else</button>
        </div>
        <div className="ui-next-up">
          <strong>What we may need next</strong>
          <div><Tick /> Incident details</div>
          <div><Tick /> Photos, if safe to take</div>
          <div><Tick /> Other party details, if relevant</div>
        </div>
        <div className="ui-human-note"><span>H</span><p><strong>A person handles uncertainty.</strong>Complex, vulnerable or disputed cases leave automation.</p></div>
        <div className="ui-bottom-action"><PrimaryAction>Continue</PrimaryAction></div>
      </div>
    </>
  );
}

function ProductScreen({ id }: { id: string }) {
  if (id === "relevance") return <RelevanceScreen />;
  if (id === "cover") return <CoverScreen />;
  if (id === "understand") return <UnderstandScreen />;
  if (id === "activate") return <ActivateScreen />;
  if (id === "proof") return <ProofScreen />;
  return <ClaimScreen />;
}

function DecisionPanel({ stage }: { stage: JourneyStage }) {
  return (
    <aside className="journey-decision" aria-live="polite">
      <div className="journey-decision-head">
        <span>{stage.eyebrow}</span>
        <p>{stage.phase} / {stage.label}</p>
      </div>
      <EvidenceTag kind="INFERENCE" />
      <p className="journey-challenge">{stage.challenge}</p>
      <h3>{stage.decision}</h3>
      <dl className="decision-rows">
        <div><dt>Customer outcome</dt><dd>{stage.customerOutcome}</dd></div>
        <div><dt>Evidence to watch</dt><dd>{stage.evidence}</dd></div>
        <div><dt>System + control</dt><dd>{stage.control}</dd></div>
      </dl>
      <div className="instrument-strip">
        <div><span>Event</span><code>{stage.event}</code></div>
        <div><span>Decision metric</span><strong>{stage.metric}</strong></div>
      </div>
    </aside>
  );
}

export function WireframeGallery() {
  const [active, setActive] = useState(0);
  const stage = journey.stages[active];

  return (
    <div className="journey-case">
      <section className="journey-workshop" aria-labelledby="journey-workshop-title">
        <div className="journey-workshop-head">
          <div><span className="section-label">Product walkthrough · illustrative</span><h3 id="journey-workshop-title">One journey, six decisions</h3></div>
          <p>Select a step. The screen, evidence and control move together.</p>
        </div>

        <div className="journey-stepper" role="tablist" aria-label="Customer journey steps">
          {journey.stages.map((item, index) => (
            <button className={index === active ? "active" : ""} type="button" role="tab" aria-selected={index === active} key={item.id} onClick={() => setActive(index)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.label}</strong>
              <small>{item.phase}</small>
            </button>
          ))}
        </div>

        <div className="journey-workbench">
          <div className="device-stage">
            <div className="device-label"><span>Customer sees</span><small>Greyscale concept · not production UI</small></div>
            <div className="product-device" key={stage.id}>
              <div className="device-speaker" />
              <div className="device-screen"><ProductScreen id={stage.id} /></div>
              <div className="device-home" />
            </div>
          </div>
          <DecisionPanel stage={stage} />
        </div>
      </section>
    </div>
  );
}
