import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`max-w-6xl mx-auto px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  desc,
  id,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  id?: string;
}) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="section-label">{eyebrow}</p>
      <h2 id={id} className="section-heading mb-4 text-balance">
        {title}
      </h2>
      {desc && <p className="section-desc">{desc}</p>}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  desc,
  children,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(600px,90vw)] h-[300px] bg-accent-glow rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <Container>
        <div className="relative z-10 max-w-3xl">
          <p className="font-mono text-xs text-ink-muted tracking-[0.2em] uppercase mb-4">
            <span className="text-accent">$</span> {eyebrow}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-tight tracking-tight text-balance mb-5">
            {title}
          </h1>
          {desc && <p className="text-ink-muted text-base md:text-lg leading-relaxed max-w-2xl">{desc}</p>}
          {children}
        </div>
      </Container>
    </section>
  );
}

export function StatusBadge({ label, tone = "accent" }: { label: string; tone?: "accent" | "green" | "amber" | "dim" }) {
  const tones: Record<string, string> = {
    accent: "text-accent border-accent/20 bg-accent/5",
    green: "text-emerald-400 border-emerald-400/20 bg-emerald-400/5",
    amber: "text-amber-400 border-amber-400/20 bg-amber-400/5",
    dim: "text-ink-dim border-surface-border bg-surface-light",
  };
  return (
    <span className={`font-mono text-[10px] tracking-[0.15em] border px-2.5 py-1 ${tones[tone]}`}>
      ● {label.toUpperCase()}
    </span>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 font-mono text-xs text-ink-dim">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-ink transition-colors">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink-muted">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function CTASection({
  title = "Have a business problem worth building?",
  desc = "Tell MS Bee what you're trying to build, automate, or launch.",
  primary = { label: "Start a Project", href: "/start-project" },
  secondary = { label: "Explore Work", href: "/work" },
}: {
  title?: string;
  desc?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section aria-label="Call to action" className="py-24 md:py-32">
      <Container>
        <div className="card p-8 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-light" aria-hidden="true" />
          <div className="relative z-10">
            <p className="font-mono text-xs text-ink-dim mb-4">
              <span className="text-accent">$</span> ms-bee start-project
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-ink mb-4 text-balance">{title}</h2>
            <p className="text-ink-muted mb-8 max-w-xl mx-auto">{desc}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href={primary.href} className="btn-primary btn-sweep w-full sm:w-auto justify-center min-h-[48px]">
                {primary.label} →
              </Link>
              <Link href={secondary.href} className="btn-outline w-full sm:w-auto justify-center min-h-[48px]">
                {secondary.label}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  if (!items.length) return null;
  return (
    <div className="space-y-3">
      {items.map((f) => (
        <details key={f.q} className="card p-5 md:p-6 group">
          <summary className="cursor-pointer font-medium text-ink text-sm md:text-base list-none flex items-center justify-between gap-4 min-h-[44px]">
            {f.q}
            <span className="text-accent shrink-0" aria-hidden="true">+</span>
          </summary>
          <p className="text-sm text-ink-muted leading-relaxed mt-3">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
