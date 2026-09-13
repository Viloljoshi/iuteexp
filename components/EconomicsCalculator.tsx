"use client";

import { useMemo, useState } from "react";

type ModelInputs = {
  eligible: number;
  reach: number;
  engage: number;
  quote: number;
  bind: number;
  premium: number;
  commission: number;
  renewal: number;
  acquisition: number;
  service: number;
  payment: number;
  variableOps: number;
  fixedCost: number;
};

const initial: ModelInputs = {
  eligible: 100000,
  reach: 40,
  engage: 25,
  quote: 70,
  bind: 30,
  premium: 120,
  commission: 18,
  renewal: 65,
  acquisition: 3,
  service: 5,
  payment: 2,
  variableOps: 2,
  fixedCost: 12000,
};

const fields: Array<[keyof ModelInputs, string, string]> = [
  ["eligible", "Eligible customers", "customers"],
  ["reach", "Offer reach", "%"],
  ["engage", "Engagement", "%"],
  ["quote", "Quote completion", "%"],
  ["bind", "Bind conversion", "%"],
  ["premium", "Average annual premium", "€"],
  ["commission", "Effective commission / fee", "%"],
  ["renewal", "Renewal / persistency", "%"],
  ["acquisition", "Acquisition cost / policy", "€"],
  ["service", "Service cost / policy", "€"],
  ["payment", "Payment cost / policy", "€"],
  ["variableOps", "Other variable ops / policy", "€"],
  ["fixedCost", "Incremental fixed launch cost", "€"],
];

function euro(value: number, maximumFractionDigits = 0) {
  return new Intl.NumberFormat("en-EE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits,
  }).format(Number.isFinite(value) ? value : 0);
}

function number(value: number) {
  return new Intl.NumberFormat("en-EE", { maximumFractionDigits: 0 }).format(Number.isFinite(value) ? value : 0);
}

export function EconomicsCalculator() {
  const [inputs, setInputs] = useState<ModelInputs>(initial);

  const output = useMemo(() => {
    const rate = (value: number) => value / 100;
    const exposed = inputs.eligible * rate(inputs.reach);
    const policies = exposed * rate(inputs.engage) * rate(inputs.quote) * rate(inputs.bind);
    const premiumVolume = policies * inputs.premium;
    const revenue = premiumVolume * rate(inputs.commission);
    const variableCostPerPolicy = inputs.acquisition + inputs.service + inputs.payment + inputs.variableOps;
    const contribution12 = revenue - policies * variableCostPerPolicy - inputs.fixedCost;
    const unitBeforeFixed = inputs.premium * rate(inputs.commission) - variableCostPerPolicy;
    const breakEven = unitBeforeFixed > 0 ? inputs.fixedCost / unitBeforeFixed : Infinity;
    const renewedPolicies = policies * rate(inputs.renewal);
    const contribution24 = contribution12 + renewedPolicies * unitBeforeFixed;
    return { exposed, policies, premiumVolume, revenue, contribution12, contribution24, breakEven, unitBeforeFixed };
  }, [inputs]);

  const update = (key: keyof ModelInputs, value: string) => {
    const next = Number(value);
    setInputs((current) => ({ ...current, [key]: Number.isFinite(next) ? Math.max(0, next) : 0 }));
  };

  return (
    <div className="economics-calculator">
      <div className="calculator-head">
        <div>
          <span>Interactive sensitivity model</span>
          <h3>Intermediary economics, not an underwriting P&amp;L</h3>
        </div>
        <div className="illustrative-stamp">Illustrative inputs<br />Replace with internal evidence</div>
      </div>
      <div className="calculator-body">
        <div className="input-grid">
          {fields.map(([key, label, unit]) => (
            <label key={key}>
              <span>{label}</span>
              <div><input type="number" min="0" value={inputs[key]} onChange={(event) => update(key, event.target.value)} /><small>{unit}</small></div>
            </label>
          ))}
        </div>
        <div className="output-panel" aria-live="polite">
          <p className="calculation-chain">
            Eligible × reach × engagement × quote completion × bind = policies
          </p>
          <div className="output-primary">
            <span>12-month contribution</span>
            <strong>{euro(output.contribution12)}</strong>
          </div>
          <dl>
            <div><dt>Customers exposed</dt><dd>{number(output.exposed)}</dd></div>
            <div><dt>Policies sold</dt><dd>{number(output.policies)}</dd></div>
            <div><dt>Premium volume</dt><dd>{euro(output.premiumVolume)}</dd></div>
            <div><dt>Gross intermediation revenue</dt><dd>{euro(output.revenue)}</dd></div>
            <div><dt>Contribution / policy before fixed cost</dt><dd>{euro(output.unitBeforeFixed, 2)}</dd></div>
            <div><dt>Break-even policies</dt><dd>{Number.isFinite(output.breakEven) ? number(output.breakEven) : "Not reached"}</dd></div>
            <div><dt>Revenue / exposed customer</dt><dd>{euro(output.exposed ? output.revenue / output.exposed : 0, 2)}</dd></div>
            <div><dt>Indicative 24-month contribution</dt><dd>{euro(output.contribution24)}</dd></div>
          </dl>
          <p className="calculator-caveat">
            Excludes taxes and product-specific cash-flow timing. Carrier claim economics remain a separate portfolio view. This tool tests sensitivity; it does not forecast Iute performance.
          </p>
        </div>
      </div>
    </div>
  );
}
