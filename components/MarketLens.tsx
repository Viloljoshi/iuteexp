"use client";

import { useState } from "react";
import markets from "@/data/markets.json";
import { EvidenceTag, SourceLink } from "@/components/Evidence";

export function MarketLens() {
  const [active, setActive] = useState(0);
  const market = markets.markets[active];

  return (
    <section className="market-lens" aria-labelledby="market-lens-title">
      <header className="market-lens-head">
        <div>
          <span className="section-label">Market lens</span>
          <h3 id="market-lens-title">Five markets. Different proof.</h3>
        </div>
        <p><EvidenceTag kind="FACT" /> Iute serves Albania, Moldova, North Macedonia, Bulgaria and Ukraine. <SourceLink id={6} compact /></p>
      </header>

      <div className="market-tabs" role="tablist" aria-label="Iute market comparison">
        {markets.markets.map((item, index) => (
          <button type="button" role="tab" aria-selected={index === active} className={index === active ? "active" : ""} key={item.id} onClick={() => setActive(index)}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item.name}</strong>
            <small>{item.focus}</small>
          </button>
        ))}
      </div>

      <div className="market-reading" aria-live="polite">
        <article>
          <div className="market-reading-label"><EvidenceTag kind="FACT" /><span>Public market signal</span></div>
          <p>{market.signal}</p>
          <div className="market-sources">{market.sources.map((id) => <SourceLink id={id} compact key={id} />)}</div>
        </article>
        <article>
          <div className="market-reading-label"><EvidenceTag kind="INFERENCE" /><span>Product reading</span></div>
          <h4>{market.read}</h4>
        </article>
        <article className="market-validate">
          <div className="market-reading-label"><span className="proof-label">VALIDATE</span><span>Start with Iute evidence</span></div>
          <ol>
            {market.validate.map((item, index) => <li key={item}><span>{index + 1}</span>{item}</li>)}
          </ol>
        </article>
      </div>

      <div className="market-boundary">
        <div><span>Share after proof</span><p>{markets.shared.join(" · ")}</p></div>
        <div><span>Configure by market</span><p>{markets.local.join(" · ")}</p></div>
        <strong>Do not use one market’s conversion, partner or service model as the forecast for another.</strong>
      </div>
    </section>
  );
}
