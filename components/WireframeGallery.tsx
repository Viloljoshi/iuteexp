"use client";

import { useState } from "react";
import content from "@/data/content.json";

function PhoneFrame({ screen }: { screen: (typeof content.wireframes)[number] }) {
  const lines = screen.screenCopy.split("\n");
  return (
    <div className="phone-frame" aria-label={`${screen.title} greyscale wireframe`}>
      <div className="phone-speaker" />
      <div className="phone-content">
        <div className="phone-topline"><span>Protection</span><span>•••</span></div>
        <p className="phone-step">Step {screen.step} / 07</p>
        <h4>{screen.screenTitle}</h4>
        <div className="phone-copy">
          {lines.map((line, index) => line ? <p key={`${line}-${index}`}>{line}</p> : <div className="phone-spacer" key={`space-${index}`} />)}
        </div>
        <div className="phone-meta">{screen.screenMeta}</div>
        <button type="button" tabIndex={-1}>{screen.action}</button>
        <span className="phone-secondary">{screen.secondary}</span>
      </div>
    </div>
  );
}

export function WireframeGallery() {
  const [index, setIndex] = useState(0);
  const screen = content.wireframes[index];
  const annotation = [
    ["Customer job", screen.customerJob],
    ["Product decision", screen.decision],
    ["Data / dependency", screen.data],
    ["Business metric", screen.metric],
    ["Failure / control", screen.control],
  ];

  return (
    <div className="wireframe-gallery">
      <div className="wireframe-nav" aria-label="Wireframe steps">
        {content.wireframes.map((item, itemIndex) => (
          <button
            type="button"
            key={item.id}
            className={index === itemIndex ? "active" : ""}
            aria-pressed={index === itemIndex}
            onClick={() => setIndex(itemIndex)}
          >
            <span>{item.step}</span>{item.title}
          </button>
        ))}
      </div>
      <div className="wireframe-stage">
        <div className="phone-area">
          <PhoneFrame screen={screen} />
          <div className="wireframe-controls">
            <button type="button" disabled={index === 0} onClick={() => setIndex((current) => current - 1)} aria-label="Previous wireframe">Previous</button>
            <span>{index + 1} / {content.wireframes.length}</span>
            <button type="button" disabled={index === content.wireframes.length - 1} onClick={() => setIndex((current) => current + 1)} aria-label="Next wireframe">Next</button>
          </div>
        </div>
        <aside className="wireframe-annotation">
          <div className="annotation-head">
            <span>Annotated concept · greyscale by design</span>
            <h3>{screen.title}</h3>
            <p>Designed to expose the product logic, not propose a new MyIute visual language.</p>
          </div>
          <dl>
            {annotation.map(([label, copy]) => (
              <div key={label}><dt>{label}</dt><dd>{copy}</dd></div>
            ))}
          </dl>
        </aside>
      </div>
    </div>
  );
}
