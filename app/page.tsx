import Link from "next/link";
import { EvidenceTag, SourceLink } from "@/components/Evidence";
import { SiteHeader } from "@/components/SiteHeader";

export default function HomePage() {
  return (
    <>
      <SiteHeader active="home" />
      <main className="home-shell">
        <section className="home-hero">
          <div className="home-kicker">
            <EvidenceTag kind="HYPOTHESIS" />
            <span>Outside-in working case · September 2026</span>
          </div>
          <h1>Make the next insurance launch better than the last</h1>
          <p className="home-lede">
            A practical case for how Iute can choose, launch and improve digital insurance across markets
            while protecting customer trust, carrier economics and service quality.
          </p>
          <p className="home-note">
            Prepared for a hiring-manager conversation. Public information is separated from inference;
            actual prioritisation requires Iute’s customer, partner, financial and operating evidence.
          </p>
        </section>

        <section className="experience-grid" aria-label="Choose an experience">
          <Link className="experience-card" href="/brief/">
            <span className="experience-number">2 pages</span>
            <h2>Executive brief</h2>
            <p>The decision thesis, operating loop, three-sided viability and capability fit in about three minutes.</p>
            <strong>Open printable brief</strong>
          </Link>
          <Link className="experience-card experience-card-dark" href="/deep-dive/">
            <span className="experience-number">8 decisions + appendix</span>
            <h2>Interactive deep dive</h2>
            <p>Opportunity selection, economics, proposition, journeys, failure states, scale and responsible intelligence.</p>
            <strong>Start the discussion</strong>
          </Link>
        </section>

        <section className="home-evidence">
          <div>
            <EvidenceTag kind="FACT" />
            <p>Insurance brokerage revenue grew 59.6% year on year in 6M 2026 and reached 5.7% of Group revenue.</p>
            <SourceLink id={2} compact />
          </div>
          <div>
            <EvidenceTag kind="INFERENCE" />
            <p>The next challenge is choosing where to focus and learning from each launch.</p>
          </div>
          <div>
            <EvidenceTag kind="HYPOTHESIS" />
            <p>Relevance, clear proof of cover and reliable service may create more value than adding products alone.</p>
          </div>
        </section>
      </main>
    </>
  );
}
