"use client";

export function PrintActions() {
  return (
    <div className="print-actions no-print">
      <button type="button" onClick={() => window.print()}>Print / save as PDF</button>
      <a href="../iute-insurance-executive-brief.pdf" download>Download prepared PDF</a>
    </div>
  );
}
