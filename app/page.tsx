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
          <h1>Building a repeatable insurance growth engine</h1>
          <p className="home-lede">
            How Iute could repeatedly turn protection opportunities into viable digital products across
            markets—without losing sight of carrier economics, operating reality or customer trust.
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
            <p>The constraint is increasingly repeatable selection and execution—not simply product ideation.</p>
          </div>
          <div>
            <EvidenceTag kind="HYPOTHESIS" />
            <p>Context, lifecycle reliability and one-front-door service may matter as much as breadth of cover.</p>
          </div>
        </section>
      </main>
    </>
  );
}
