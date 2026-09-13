"use client";

import { useState } from "react";

const stages = [
  { name: "Eligible", event: "Eligibility result", question: "Is the intended segment genuinely distributable?", failure: "Product governance, data or targeting definition" },
  { name: "Exposed", event: "offer_viewed", question: "Did the customer see it in a relevant moment?", failure: "Reach, timing, channel or core-flow conflict" },
  { name: "Engaged", event: "product_detail_viewed", question: "Did the proposition earn attention?", failure: "Need, message, value or trust" },
  { name: "Quote", event: "quote_returned", question: "Could customer and carrier data produce an offer?", failure: "Eligibility, data, latency or partner API" },
  { name: "Bind", event: "bind_requested", question: "Did value, price and cover survive comparison?", failure: "Price, exclusions, choice or confidence" },
  { name: "Issued", event: "policy_issued", question: "Do money and policy states agree?", failure: "Payment, bind, document or reconciliation" },
  { name: "Active", event: "policy_active", question: "Can the customer use, change and understand cover?", failure: "Service, payment or policy visibility" },
  { name: "Renewed", event: "policy_renewed", question: "Did usefulness survive the first term?", failure: "Sustained value, service, claims or price change" }
];

export function DistributionFunnel() {
  const [selected, setSelected] = useState(0);
  const stage = stages[selected];
  return (
    <div className="distribution-funnel">
      <div className="funnel-stages" role="tablist" aria-label="Distribution funnel">
        {stages.map((item, index) => (
          <button type="button" role="tab" aria-selected={selected === index} className={selected === index ? "active" : ""} key={item.name} onClick={() => setSelected(index)} style={{ width: `${100 - index * 5}%` }}>
            <span>{item.name}</span><small>{item.event}</small>
          </button>
        ))}
      </div>
      <aside className="funnel-diagnostic" role="tabpanel">
        <span>Diagnose {stage.name.toLowerCase()}</span>
        <h3>{stage.question}</h3>
        <p><strong>If weak:</strong> {stage.failure}</p>
        <p><strong>Cut by:</strong> market · product · channel · relationship stage · segment · partner · product version</p>
      </aside>
    </div>
  );
}
