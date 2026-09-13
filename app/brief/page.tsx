import { ArrowFlow, ThreeSidedModel } from "@/components/Models";
import { EvidenceTag, SourceLink, SourceList } from "@/components/Evidence";
import { SiteHeader } from "@/components/SiteHeader";
import { PrintActions } from "@/components/PrintActions";
import content from "@/data/content.json";

const operatingLoop = [
  "Discover opportunity",
  "Validate need",
  "Shape proposition",
  "Validate partner + economics",
  "Design journey + operations",
  "Launch",
  "Measure behaviour",
  "Scale, iterate or stop",
];

const lifecycle = ["Need", "Discover", "Quote", "Understand", "Bind", "Policy", "Service", "Claim", "Renew"];

export default function BriefPage() {
  return (
    <>
      <SiteHeader active="brief" />
      <PrintActions />
      <main className="brief-shell">
        <article className="brief-page brief-page-one">
          <header className="brief-masthead">
            <div>
              <p className="document-type">Executive working brief · 01 / 02</p>
              <h1>Make the next insurance launch better than the last</h1>
              <p>A practical product case for Iute</p>
            </div>
            <div className="brief-author">
              <strong>Vilol Joshi</strong>
              <span>Insurance Product Lead conversation</span>
              <span>September 2026</span>
            </div>
          </header>

          <div className="brief-disclaimer">
            <EvidenceTag kind="HYPOTHESIS" />
            <p>
              Public-information-based working hypotheses only. Internal customer evidence, carrier economics,
              regulatory constraints and operating data would determine actual prioritisation.
            </p>
          </div>

          <section className="brief-section strategic-read">
            <div className="brief-section-title">
              <span>Strategic read</span>
              <h2>Each launch should reduce the cost and risk of the next.</h2>
            </div>
            <div className="strategic-shift">
              <div>
                <strong>Loan-linked + contextual protection</strong>
                <small>A durable foundation</small>
              </div>
              <i>→</i>
              <div>
                <strong>Broader protection portfolio</strong>
                <small>Standalone and bundled propositions</small>
              </div>
              <i>→</i>
              <div className="shift-emphasis">
                <strong>Repeatable insurance capability</strong>
                <small>Selection, operation and scale</small>
              </div>
            </div>
            <ArrowFlow
              compact
              items={["Need", "Proposition", "Partner", "Economics", "Distribution", "Digital", "Operations", "Scale"]}
            />
          </section>

          <section className="brief-facts" aria-label="Public evidence">
            {content.facts.map((fact) => (
              <div key={fact.text}>
                <EvidenceTag kind="FACT" />
                <p>{fact.text}</p>
                <SourceLink id={fact.source} compact />
              </div>
            ))}
          </section>

          <section className="brief-section operating-loop-section">
            <div className="brief-section-title brief-section-title-inline">
              <span>Product Lead operating loop</span>
              <h2>The role joins commercial decisions to operating outcomes.</h2>
            </div>
            <div className="operating-loop">
              <div className="loop-centre">
                <strong>Insurance Product Lead</strong>
                <small>Customer · carrier · country · technology · compliance · operations · finance · marketing</small>
              </div>
              <ol>
                {operatingLoop.map((item, index) => (
                  <li key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="brief-section brief-economics">
            <div className="brief-section-title brief-section-title-inline">
              <span>Product viability</span>
              <h2>A viable product must work for three parties.</h2>
            </div>
            <ThreeSidedModel brief />
          </section>

          <footer className="brief-footer">
            <span>Outside-in working case · not an internal Iute recommendation</span>
            <strong>01</strong>
          </footer>
        </article>

        <article className="brief-page brief-page-two">
          <header className="brief-masthead brief-masthead-small">
            <div>
              <p className="document-type">Executive working brief · 02 / 02</p>
              <h1>The product extends beyond checkout</h1>
            </div>
            <p className="brief-page-thesis">Front stage simplicity depends on backstage discipline.</p>
          </header>

          <section className="brief-section lifecycle-section">
            <div className="brief-section-title brief-section-title-inline">
              <span>Complete lifecycle</span>
              <h2>Design the policy, service, claim and renewal as one product.</h2>
            </div>
            <ArrowFlow items={lifecycle} compact />
            <div className="mini-blueprint">
              <div className="blueprint-label">
                <strong>Front stage</strong>
                <span>What the customer sees</span>
              </div>
              <div className="blueprint-track customer-track">
                <span>Relevant offer</span><span>Legible cover</span><span>Confirmed policy</span><span>One place for help</span>
              </div>
              <div className="blueprint-label">
                <strong>Back stage</strong>
                <span>What must work</span>
              </div>
              <div className="blueprint-track">
                <span>MyIute</span><span>Orchestration + Affinity</span><span>Carrier + payments</span><span>Ops + claims + finance</span>
              </div>
            </div>
            <div className="critical-state">
              <span>Critical state</span>
              <strong>Payment authorised → bind fails → pending state → idempotent retry → policy or refund</strong>
              <p>Never leave the customer believing they are insured when issuance is unresolved.</p>
            </div>
          </section>

          <div className="brief-two-column">
            <section className="brief-section decision-tech">
              <div className="brief-section-title">
                <span>Decision technology</span>
                <h2>Use the simplest reliable tool.</h2>
              </div>
              <div className="mechanism-flow">
                <div><strong>Answer defined?</strong><span>Rules / software</span></div>
                <div><strong>Prediction required?</strong><span>Predictive ML</span></div>
                <div><strong>Unstructured content?</strong><span>GenAI, grounded</span></div>
                <div><strong>High consequence or ambiguity?</strong><span>Human control</span></div>
              </div>
              <p className="micro-copy">Error impact determines the control level. Model confidence does not.</p>
            </section>

            <section className="brief-section outcome-model">
              <div className="brief-section-title">
                <span>What success means</span>
                <h2>Connect system health to economic outcome.</h2>
              </div>
              <div className="causal-stack">
                <span>System reliability</span><i>↓</i><span>Operational flow</span><i>↓</i><span>Customer experience</span><i>↓</i><span>Contribution + renewal</span>
              </div>
              <div className="measure-row">
                <span>Commercial</span><span>Customer</span><span>Economics</span><span>Operations</span>
              </div>
            </section>
          </div>

          <section className="brief-section capability-section">
            <div className="brief-section-title brief-section-title-inline">
              <span>Capability fit</span>
              <h2>What I can add now, and what I want to learn from Iute.</h2>
            </div>
            <div className="capability-grid">
              <div className="capability-proof">
                <h3>Transferable operating patterns</h3>
                <div><strong>575K+</strong><span>monthly regulated cases</span></div>
                <div><strong>~45%</strong><span>manual-review reduction</span></div>
                <div><strong>~25%</strong><span>API turnaround improvement</span></div>
                <p>Document intelligence · confidence routing · human review · evaluation · governance</p>
              </div>
              <div className="capability-learning">
                <h3>Learning with Iute</h3>
                <p>Carrier economics and contracting</p>
                <p>Country-specific customer and regulatory reality</p>
                <p>Claims, servicing and Affinity operating depth</p>
                <p>The product patterns Iute has already proved at scale</p>
              </div>
            </div>
            <p className="transfer-note">
              These patterns come from regulated financial workflows. Iute’s insurance expertise and customer evidence remain essential.
            </p>
          </section>

          <section className="brief-close">
            <EvidenceTag kind="HYPOTHESIS" />
            <p>
              This is a starting case, not a recommendation. I want to test it against Iute’s customer, partner and operating data.
            </p>
          </section>

          <SourceList className="brief-source-list" coreOnly />

          <footer className="brief-footer">
            <span>Prepared for discussion · Vilol Joshi · September 2026</span>
            <strong>02</strong>
          </footer>
        </article>
      </main>
    </>
  );
}
