import content from "@/data/content.json";

export type EvidenceKind = "FACT" | "INFERENCE" | "HYPOTHESIS";

export function EvidenceTag({ kind }: { kind: EvidenceKind }) {
  return <span className={`evidence-tag evidence-${kind.toLowerCase()}`}>{kind}</span>;
}

export function SourceLink({ id, compact = false }: { id: number; compact?: boolean }) {
  const source = content.sources.find((item) => item.id === id);
  if (!source) return null;

  return (
    <a
      className={compact ? "source-link source-link-compact" : "source-link"}
      href={source.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Source ${id}: ${source.label}`}
    >
      {compact ? `[${id}]` : `${id}. ${source.label}`}
    </a>
  );
}

export function SourceList({ className = "", coreOnly = false }: { className?: string; coreOnly?: boolean }) {
  const sources = coreOnly ? content.sources.filter((source) => source.id <= 5) : content.sources;

  return (
    <div className={`source-list ${className}`} aria-label="Sources">
      {sources.map((source) => (
        <SourceLink key={source.id} id={source.id} />
      ))}
    </div>
  );
}
