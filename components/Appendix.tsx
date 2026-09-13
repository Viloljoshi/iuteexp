import { EconomicsCalculator } from "./EconomicsCalculator";
import { AIUseCaseTable } from "./DecisionIntelligence";

const partnerScorecard = [
  ["Product", "Coverage fit · exclusions · customisation · underwriting flexibility · price/value"],
  ["Commercial", "Commission · volume tiers · renewal · admin fees · marketing support · profit share if relevant"],
  ["Technology", "Quote · bind · issue · change · cancel · claim · status events · sandbox · versioning · availability"],
  ["Operations", "Issuance and claim SLAs · service · escalation · refunds · complaints · reconciliation"],
  ["Data", "Funnel · policy · claim · portfolio data · timeliness · granularity · permitted analytics"],
  ["Governance", "Licence · product governance · fair treatment · privacy · security · audit · resilience"],
  ["Scale", "Markets · languages · currencies · configuration · implementation repeatability · roadmap fit"],
];

const risks = [
  ["Irrelevant or poorly understood selling", "Low qualified engagement; contact/complaint themes", "Evidence-led moments, clear limits, opt-out", "Product + country"],
  ["Attractive revenue, weak contribution", "Service/acquisition cost grows faster than policies", "Cohort contribution and sensitivity review", "Product + finance"],
  ["Carrier economics deteriorate", "Price, terms, capacity or claim SLA movement", "Joint portfolio review and alternative plan", "Insurance + carrier"],
  ["Manual exceptions scale with sales", "Referral queue age; contacts and rework", "Automate causes, not queue symptoms", "Operations + product"],
  ["Payment / policy state mismatch", "Unreconciled payment or unresolved bind", "Idempotency, case ownership, refund control", "Engineering + finance"],
  ["AI creates false certainty", "Material corrections, unsupported answers, overrides", "Grounding, confidence routing, human authority", "Product + risk"],
];

const launchRows = ["Product", "Carrier", "Digital journey", "Operations", "Claims", "Payments", "Finance + reconciliation", "Legal + compliance", "Privacy + data", "Customer service", "GTM", "Analytics", "Incident management"];

const events = ["offer_viewed", "quote_started", "quote_returned", "quote_failed", "product_selected", "consent_recorded", "payment_authorized", "payment_failed", "bind_requested", "policy_issued", "policy_issue_failed", "policy_cancelled", "policy_renewed", "claim_started", "claim_submitted", "claim_referred", "claim_resolved", "complaint_opened"];

const objects = ["Customer", "Quote", "Product version", "Policy", "Coverage", "Consent", "Payment", "Document", "Change", "Cancellation", "Renewal", "Claim", "Complaint", "Carrier", "Market", "Commission", "Partner settlement"];

export function Appendix() {
  return (
    <div className="appendix-stack">
      <details className="appendix-item" id="economics-model">
        <summary><span>A1</span><div><strong>Economics sensitivity model</strong><small>Editable illustrative funnel-to-contribution mechanics</small></div><i>+</i></summary>
        <div className="appendix-content"><EconomicsCalculator /></div>
      </details>

      <details className="appendix-item">
        <summary><span>A2</span><div><strong>Carrier / partner scorecard</strong><small>Why partner choice is a product decision</small></div><i>+</i></summary>
        <div className="appendix-content">
          <div className="scorecard-grid">
            {partnerScorecard.map(([name, criteria]) => <article key={name}><h4>{name}</h4><p>{criteria}</p><span>Evidence required · owner · threshold</span></article>)}
          </div>
          <p className="appendix-thesis">The cheapest premium is not automatically the best partner. Select for sustainable customer value × economics × operating quality × technical fit × scalability.</p>
        </div>
      </details>

      <details className="appendix-item">
        <summary><span>A3</span><div><strong>Launch gate</strong><small>Engineering release ≠ insurance launch</small></div><i>+</i></summary>
        <div className="appendix-content">
          <div className="table-scroll">
            <table className="data-table launch-table"><thead><tr><th>Gate</th><th>Status</th><th>Owner</th><th>Evidence / open issue</th></tr></thead><tbody>
              {launchRows.map((row, index) => <tr key={row}><th>{row}</th><td><span className={index === 5 || index === 6 ? "status-blocked" : "status-conditional"}>{index === 5 || index === 6 ? "Blocked until evidenced" : "Conditional"}</span></td><td>Assign internally</td><td>Replace with named artefact, test or signed decision</td></tr>)}
            </tbody></table>
          </div>
          <p className="appendix-thesis">“Live” means a customer can discover, quote, purchase, receive policy, pay, be serviced, claim, complain and be reported and reconciled correctly.</p>
        </div>
      </details>

      <details className="appendix-item">
        <summary><span>A4</span><div><strong>Risk register</strong><small>Leading indicators, mitigations and ownership</small></div><i>+</i></summary>
        <div className="appendix-content table-scroll">
          <table className="data-table"><thead><tr><th>Risk</th><th>Leading indicator</th><th>Mitigation</th><th>Owner</th></tr></thead><tbody>
            {risks.map((risk) => <tr key={risk[0]}>{risk.map((cell, index) => index === 0 ? <th key={cell}>{cell}</th> : <td key={cell}>{cell}</td>)}</tr>)}
          </tbody></table>
        </div>
      </details>

      <details className="appendix-item">
        <summary><span>A5</span><div><strong>Objects + events</strong><small>A product conversation with engineering, not speculative architecture</small></div><i>+</i></summary>
        <div className="appendix-content object-event-grid">
          <div><h4>Core product objects</h4><div className="token-cloud">{objects.map((item) => <span key={item}>{item}</span>)}</div><p><strong>Version everything that changes contractual behaviour:</strong> wording, cover, price/rating reference, disclosure and consent.</p></div>
          <div><h4>Meaningful operating events</h4><div className="event-cloud">{events.map((item) => <code key={item}>{item}</code>)}</div><p>One event stream should support analytics, operations, customer communication and financial control.</p></div>
        </div>
      </details>

      <details className="appendix-item">
        <summary><span>A6</span><div><strong>Country rollout model</strong><small>Standardise mechanisms; localise material difference</small></div><i>+</i></summary>
        <div className="appendix-content">
          <div className="table-scroll"><table className="data-table rollout-table"><thead><tr><th>Market</th><th>Demand</th><th>Reach</th><th>Carrier</th><th>Economics</th><th>Regulation</th><th>Operations</th><th>Data</th><th>Role</th></tr></thead><tbody>
            {["Albania", "Moldova", "North Macedonia", "Bulgaria", "Ukraine"].map((market) => <tr key={market}><th>{market}</th>{Array.from({ length: 7 }).map((_, index) => <td key={index}><span className="confidence confidence-unknown">Validate</span></td>)}<td>{market === "Albania" ? "Potential proof context" : "Determine from evidence"}</td></tr>)}
          </tbody></table></div>
          <div className="rollout-sequence"><span>Pilot</span><i>→</i><span>Product–market proof</span><i>→</i><span>Operational proof</span><i>→</i><span>Economic proof</span><i>→</i><span>Extract reusable capability</span><i>→</i><span>Next market</span></div>
        </div>
      </details>

      <details className="appendix-item">
        <summary><span>A7</span><div><strong>AI use-case register</strong><small>Baseline, mechanism, business KPI, control and rollback</small></div><i>+</i></summary>
        <div className="appendix-content"><AIUseCaseTable /><p className="appendix-thesis">The best AI product decision may sometimes be not deploying AI.</p></div>
      </details>

      <details className="appendix-item">
        <summary><span>A8</span><div><strong>30 / 60 / 90</strong><small>Evidence before theatre</small></div><i>+</i></summary>
        <div className="appendix-content ninety-grid">
          <article><span>First 30 · understand</span><h4>Build the fact base</h4><p>Portfolio economics, product performance, country variation, contracts, customer evidence, claims, operating model, technology, compliance and team.</p><strong>Output: constraint + opportunity map</strong></article>
          <article><span>Days 31–60 · prioritise</span><h4>Make one real choice</h4><p>Validate customer need, economics, partner feasibility, regulatory path and delivery complexity for the highest-value opportunity or bottleneck.</p><strong>Output: decision-ready case</strong></article>
          <article><span>Days 61–90 · execute</span><h4>Move an outcome</h4><p>Advance one meaningful initiative, instrument its drivers, remove one operating bottleneck and establish a cross-market decision cadence.</p><strong>Output: measurable progress</strong></article>
        </div>
      </details>
    </div>
  );
}
