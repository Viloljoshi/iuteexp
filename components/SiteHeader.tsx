import Link from "next/link";

export function SiteHeader({ active }: { active?: "brief" | "deep-dive" | "discussion" | "home" }) {
  return (
    <header className="site-header no-print">
      <Link className="wordmark" href="/" aria-label="Open artifact home">
        <span className="wordmark-mark" aria-hidden="true" />
        <span>
          <strong>Iute insurance</strong>
          <small>Product Lead working case</small>
        </span>
      </Link>
      <nav className="mode-nav" aria-label="Artifact views">
        <Link className={active === "discussion" ? "active" : ""} href="/discussion/">
          6-minute mode
        </Link>
        <Link className={active === "brief" ? "active" : ""} href="/brief/">
          2-page brief
        </Link>
        <Link className={active === "deep-dive" ? "active" : ""} href="/deep-dive/">
          Deep dive
        </Link>
      </nav>
    </header>
  );
}
