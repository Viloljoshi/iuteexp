import { Appendix } from "@/components/Appendix";
import { AnalysisLoop } from "@/components/AnalysisLoop";
import { DecisionIntelligence } from "@/components/DecisionIntelligence";
import { DistributionFunnel } from "@/components/DistributionFunnel";
import { EvidenceTag, SourceLink, SourceList } from "@/components/Evidence";
import { ArrowFlow, DecisionRecord, SectionHeading, ThreeSidedModel } from "@/components/Models";
import { EvidencePlan, OpportunityExplorer } from "@/components/OpportunityExplorer";
import { ProblemFrame } from "@/components/ProblemFrame";
import { FailureStateExplorer, ServiceBlueprint } from "@/components/ServiceBlueprint";
import { SiteHeader } from "@/components/SiteHeader";
import { WireframeGallery } from "@/components/WireframeGallery";
import content from "@/data/content.json";

const nav = [
  ["01", "Problem", "capability"],
  ["02", "Opportunity", "opportunity"],
  ["03", "Viability", "viability"],
  ["04", "Proposition", "proposition"],
  ["05", "Journey", "journey"],
  ["06", "Operations", "operations"],
  ["07", "Measure + scale", "measure"],
  ["08", "Intelligence", "intelligence"],
  ["A", "Appendix", "appendix"],
];

const operatingChain = ["Market signal", "Customer need", "Cover design", "Partner model", "Economics", "Distribution", "Digital journey", "Operations", "Readiness", "Launch", "Performance", "Scale / stop"];

export default function DeepDivePage() {
  return (
    <>
      <SiteHeader active="deep-dive" />
      <div className="deep-shell">
        <aside className="chapter-nav no-print">
          <p>Discussion map</p>
          <nav aria-label="Deep-dive sections">
            {nav.map(([index, label, id]) => <a href={`#${id}`} key={id}><span>{index}</span>{label}</a>)}
          </nav>
          <a className="chapter-brief-link" href="/brief/">Open 2-page brief</a>
        </aside>

        <main className="deep-main">
          <section className="deep-hero" id="top">
            <div className="deep-hero-topline">
              <div><EvidenceTag kind="HYPOTHESIS" /><span>Outside-in working case. Not an internal recommendation.</span></div>
              <span>Vilol Joshi · September 2026</span>
            </div>
            <h1>Make the next insurance launch better than the last</h1>
            <p className="deep-hero-lede">
              How can Iute grow standalone insurance while keeping customer trust, carrier economics and operations healthy?
            </p>
            <ol className="case-route" aria-label="Case story">
              <li><span>01</span><strong>Observe</strong><small>Public signals</small></li>
              <li><span>02</span><strong>Define</strong><small>Customer problem</small></li>
              <li><span>03</span><strong>Design</strong><small>Journey and service</small></li>
              <li><span>04</span><strong>Prove</strong><small>Demand, economics, operations</small></li>
              <li><span>05</span><strong>Scale</strong><small>Reuse or localise</small></li>
            </ol>
            <div className="deep-thesis-grid">
              <p>
                <span>Working thesis</span>
                Solve one measurable problem. Prove demand, economics and operations. Reuse only what works.
              </p>
              <p>
                <span>Evidence rule</span>
                Public facts frame the question. Iute customer, partner and operating data make the decision.
              </p>
              <p>
                <span>Technology rule</span>
                Use rules first. Use ML or GenAI only when it improves a measured result with safe controls.
              </p>
            </div>
            <div className="public-evidence-strip">
              {content.facts.map((fact) => (
                <article key={fact.text}><div><EvidenceTag kind="FACT" /><SourceLink id={fact.source} compact /></div><p>{fact.text}</p></article>
              ))}
            </div>
          </section>

          <section className="deep-section" id="capability">
            <SectionHeading index="01" title="Define the problem before the solution" prompt="Use public signals to form the question. Use Iute data to confirm who is affected, where the journey fails and what it costs." />
            <ProblemFrame />
            <h3 className="subsection-title">Then decide what should continue after the first launch</h3>
            <div className="architecture-compare">
              <article>
                <div className="model-label">Product-by-product world</div>
                {["Product A", "Product B", "Product C"].map((item) => <div className="bespoke-line" key={item}><strong>{item}</strong><span>custom flow</span><i>→</i><span>carrier integration</span><i>→</i><span>custom operations</span></div>)}
                <p>Fast once. Repeated coupling can make every later launch expensive.</p>
              </article>
              <div className="compare-marker"><span>Decision</span><strong>What repeats?</strong></div>
              <article className="reusable-model">
                <div className="model-label">Reusable product capability</div>
                <div className="architecture-stack">
                  <span>Customer experience</span><i>↓</i><span>Product configuration</span><i>↓</i><strong>Insurance orchestration</strong>
                  <div><span>Quote</span><span>Policy</span><span>Service</span><span>Claim</span></div>
                  <i>↓</i><span>Partner adapter layer</span><div><span>Carrier A</span><span>Carrier B</span><span>Provider C</span></div>
                </div>
                <p>Extract primitives after proof: quote, policy state, consent, documents, claims intake, events and controls.</p>
              </article>
            </div>
            <div className="commercial-chain">
              <p><strong>The product includes the commercial model, policy, service, controls and customer journey.</strong></p>
              <ArrowFlow compact items={operatingChain} />
            </div>
          </section>

          <section className="deep-section" id="opportunity">
            <SectionHeading index="02" title="Choose where to focus" prompt="Compare customer value, distribution, economics, carrier fit, delivery effort and reuse potential." />
            <OpportunityExplorer />
            <div className="opportunity-formula">
              <div><span>Selection logic. Inputs require evidence.</span><strong>Customer value × commercial potential × distribution advantage × strategic fit × evidence quality</strong></div>
              <i>÷</i>
              <div><span>Cost and risk to validate</span><strong>Partner complexity × operating complexity × regulation × build effort</strong></div>
            </div>
            <h3 className="subsection-title">How I would find and prove the pain point</h3>
            <EvidencePlan />
          </section>

          <section className="deep-section" id="viability">
            <SectionHeading index="03" title="Make the proposition viable for all three parties" prompt="Model Iute contribution and carrier underwriting economics separately. Both must work." />
            <ThreeSidedModel />
            <div className="economics-chain-grid">
              <article>
                <span>Iute intermediary view</span>
                <h3>From exposure to contribution</h3>
                <div className="equation-block">
                  <p>Eligible × reach × engagement × quote completion × bind</p><strong>= policies</strong>
                  <p>Policies × premium × effective commission / fees</p><strong>= gross revenue</strong>
                  <p>Revenue − acquisition − service − payment − TPA / admin − product ops</p><strong>= contribution</strong>
                  <p>Contribution × persistency / renewal behaviour</p><strong>= longer-term value</strong>
                </div>
                <a className="text-link" href="#economics-model">Open the editable sensitivity model in the appendix</a>
              </article>
              <article>
                <span>Carrier portfolio view</span>
                <h3>Sustainability returns through the partnership</h3>
                <div className="carrier-signals">
                  {['Premium adequacy','Claim frequency','Claim severity','Loss ratio','Fraud','Expense','Adverse selection','Portfolio mix'].map((item) => <span key={item}>{item}</span>)}
                </div>
                <p><strong>Not owning underwriting risk does not mean ignoring underwriting economics.</strong> Weak portfolio economics return through price, terms, capacity, commission or willingness to scale.</p>
              </article>
            </div>
            <DecisionRecord
              decision="Select and govern the carrier as part of the product"
              value="Reliable cover, price and claim service"
              commercial="Sustainable revenue, renewal and portfolio capacity"
              complexity="Commercial, technical, data and operating integration"
              risk="A low launch price can hide weak service or unsustainable portfolio economics"
              evidence="Carrier scorecard, sandbox proof, SLA, portfolio reporting and references"
              unknown="Actual appetite, terms, operating performance and negotiation trade-offs"
              outcome="Select on sustainable value × economics × operations × technical fit × scale"
            />
          </section>

          <section className="deep-section" id="proposition">
            <SectionHeading index="04" title="Shape the proposition around a real customer job" prompt="Standalone motor is an example for discussion. It is not an internal roadmap claim." evidence="HYPOTHESIS" />
            <div className="worked-example-banner"><span>Illustrative application</span><strong>“I need certainty that owning and using my vehicle will not create an avoidable legal, financial or mobility burden.”</strong></div>
            <div className="proposition-layers">
              <article><span>01</span><h3>Coverage</h3><p>Core third-party protection, optional assistance, useful limits, material exclusions and clear proof of insurance.</p></article>
              <article><span>02</span><h3>Value experience</h3><p>Clarity before purchase, visibility in ownership, one front door during an incident and relevance at renewal.</p></article>
              <article><span>03</span><h3>Commercial design</h3><p>Annual or recurring payment, standalone or contextual, benefit funding, commission and full cost to serve.</p></article>
              <article><span>04</span><h3>Differentiation</h3><p>Simplicity, trusted context, combined protection + service, reliable claims and an honest price/value balance.</p></article>
            </div>
            <div className="moment-model">
              <div className="moment-question"><span>1</span><strong>Is the need created or revealed by an existing customer moment?</strong><p>Financial · travel · vehicle · family · protection gap · renewal</p></div>
              <i>→</i><div className="moment-question"><span>2</span><strong>Is there a legitimate signal of that need?</strong><p>Known relationship · declared intent · approved context · explicit request</p></div>
              <i>→</i><div className="moment-question"><span>3</span><strong>Choose the least intrusive effective distribution mode</strong><p>Embedded · contextual · marketplace · CRM · partner · advisor</p></div>
            </div>
            <DistributionFunnel />
          </section>

          <section className="deep-section" id="journey">
            <SectionHeading index="05" title="Turn the problem into a customer journey" prompt="Each screen states the customer outcome, product choice, data to watch and control needed." />
            <WireframeGallery />
            <AnalysisLoop />
          </section>

          <section className="deep-section" id="operations">
            <SectionHeading index="06" title="Design the service and the failure states" prompt="Give every handoff and state change an owner, a record and a truthful customer message." />
            <ServiceBlueprint />
            <h3 className="subsection-title">The unhappy path is part of the product</h3>
            <FailureStateExplorer />
          </section>

          <section className="deep-section" id="measure">
            <SectionHeading index="07" title="Measure the cause. Scale what works." prompt="Find the driver, prove the service and economics, then decide what to reuse." />
            <div className="measure-scale-grid">
              <article className="driver-tree">
                <div className="model-label">Driver tree</div>
                <h3>Insurance contribution</h3>
                <div className="tree-root"><strong>Contribution</strong><div className="tree-branches">
                  <div><span>Policy volume</span><small>Eligibility · reach · engagement · quote · bind</small></div>
                  <div><span>Revenue / policy</span><small>Premium · commission · service fees if applicable</small></div>
                  <div><span>Persistency</span><small>Cancellation · renewal · sustained utility</small></div>
                  <div><span>Cost</span><small>Acquisition · operations · partner · payment · technology</small></div>
                </div></div>
                <div className="causal-levels"><span>System</span><i>→</i><span>Operations</span><i>→</i><span>Customer</span><i>→</i><span>Commercial outcome</span></div>
              </article>
              <article className="scale-stack">
                <div className="model-label">Multi-market model</div>
                <h3>Share the stable parts. Configure real market differences.</h3>
                <div><span>Level 1</span><strong>Group standard</strong><p>Product principles · customer treatment · objects · events · audit · integration pattern</p></div>
                <div><span>Level 2</span><strong>Product configuration</strong><p>Coverage · eligibility · documents · payments · claim requirements · service levels</p></div>
                <div><span>Level 3</span><strong>Market configuration</strong><p>Carrier · regulation · language · currency · disclosure · local service · complaints · reporting</p></div>
              </article>
            </div>
            <div className="proof-sequence"><span>Pilot</span><i>→</i><span>Product and market proof</span><i>→</i><span>Service proof</span><i>→</i><span>Economic proof</span><i>→</i><span>Shared capability</span><i>→</i><span>Next market</span></div>
          </section>

          <section className="deep-section" id="intelligence">
            <SectionHeading index="08" title="Choose the simplest technology that works" prompt="Start with the problem and baseline. Add ML or GenAI only when the evidence earns it." />
            <DecisionIntelligence />
            <DecisionRecord
              decision="Automate claim-document intake"
              value="Fewer repeat requests and faster progress visibility"
              commercial="Lower handling effort and potentially shorter claim cycle time"
              complexity="Document variation, schema mapping, evaluation, monitoring and reviewer workflow"
              risk="A plausible but wrong critical field can lead to a consequential downstream action"
              evidence="Golden data, field-level accuracy, calibration, correction and baseline handling cost"
              unknown="Actual document mix, error cost, partner authority and production data availability"
              outcome="Begin offline, then shadow and reviewer assist; automate only bounded fields that earn it"
            />
          </section>

          <section className="candidate-section" id="candidate-value">
            <div className="candidate-heading">
              <span>Long-term fit</span>
              <h2>What I can lead, what I need to learn, and what I can leave behind</h2>
              <p>A clear split between proven experience and Iute-specific learning.</p>
            </div>
            <div className="iute-principles">
              <div className="iute-principles-label"><span>Product interpretation of Iute’s customer promise</span><SourceLink id={5} compact /></div>
              <article><strong>Most convenient</strong><p>Remove repeated questions, hidden partner routing and avoidable service work.</p></article>
              <article><strong>Fastest</strong><p>Measure time to a trusted outcome, including exception recovery.</p></article>
              <article><strong>Human touch</strong><p>Use automation to focus people where empathy, context or authority matter.</p></article>
            </div>
            <div className="fit-columns">
              <article className="fit-now">
                <span>Value I can add now</span>
                <h3>Turn a vague opportunity into a measurable product</h3>
                <ul>
                  <li><strong>Regulated workflows:</strong> join commercial, compliance and service requirements in one journey.</li>
                  <li><strong>High-volume operations:</strong> 575K+ monthly cases with evidence-based routing and human review.</li>
                  <li><strong>Measured automation:</strong> ~45% manual-review reduction and ~25% API turnaround improvement in prior financial workflows.</li>
                  <li><strong>Engineering partnership:</strong> define states, failures, events, controls and trade-offs clearly.</li>
                </ul>
              </article>
              <article className="fit-context">
                <span>Where I need Iute’s depth</span>
                <h3>Learn the realities that public sources cannot show</h3>
                <ul>
                  <li>Product-level carrier contracts, pricing, commission and portfolio economics.</li>
                  <li>Country-specific customer behaviour, distribution rules and regulatory practice.</li>
                  <li>Claims authority, servicing handoffs, operational exceptions and complaint themes.</li>
                  <li>Which platform capabilities repeat, and which local differences should stay local.</li>
                </ul>
              </article>
              <article className="fit-compound">
                <span>How long-term value compounds</span>
                <h3>Leave the next launch easier than the last</h3>
                <ul>
                  <li>Run evidence reviews with country, insurance, finance, claims and technology owners.</li>
                  <li>Build reusable decision records, product configuration, partner contracts, events and launch controls.</li>
                  <li>Convert recurring manual exceptions into measured product improvements.</li>
                  <li>Apply ML or GenAI only where the baseline, data, economics and controls justify the operating burden.</li>
                </ul>
              </article>
            </div>
            <p className="candidate-boundary">I can bring the method and execution discipline. I would not set product priority, pricing, carrier terms or claim policy from public information.</p>
          </section>

          <section className="deep-section appendix-section" id="appendix">
            <SectionHeading index="A" title="Practitioner appendix" prompt="Depth for challenge and discussion; not a sequence the hiring manager needs to sit through." />
            <Appendix />
          </section>

          <section className="discussion-close">
            <div className="discussion-heading"><EvidenceTag kind="HYPOTHESIS" /><h2>What I would want to learn from the team</h2><p>Six questions that could change the product decision.</p></div>
            <div className="question-grid">
              {content.questions.map((item) => <article key={item.topic}><span>{item.topic}</span><p>{item.question}</p></article>)}
            </div>
            <blockquote>This is a starting case, not a recommendation. I want to test it against what the team sees in customer, partner and operating data.</blockquote>
          </section>

          <footer className="deep-footer">
            <SourceList />
            <p>Prepared from public Iute material only. No access to non-public customer, carrier, financial, regulatory or operating information is claimed.</p>
          </footer>
        </main>
      </div>
    </>
  );
}
