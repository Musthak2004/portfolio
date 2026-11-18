import Link from "next/link";
import type { ReactNode } from "react";
import OrbitMotif from "./OrbitMotif";

/** The single content container used by every route. */
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`shell ${className}`}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  desc,
  id,
  index,
  action,
  className = "",
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  id?: string;
  index?: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${className}`}>
      <div className="max-w-2xl">
        <p className="section-label">
          {index && <span className="text-accent">{index}</span>}
          <span>{eyebrow}</span>
        </p>
        <h2 id={id} className="section-heading text-balance">
          {title}
        </h2>
        {desc && <p className="section-desc mt-4">{desc}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  desc,
  children,
  breadcrumbs,
  aside,
  index,
  meta,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  children?: ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
  aside?: ReactNode;
  index?: string;
  meta?: { label: string; value: string }[];
}) {
  return (
    <section className="page-hero" aria-labelledby="page-title">
      <div className="page-hero-grid" aria-hidden="true" />
      <div className="page-hero-glow" aria-hidden="true" />
      <Container>
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <div className="relative z-10 grid gap-x-10 gap-y-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-accent/70" aria-hidden="true" />
              <p className="eyebrow-accent">
                {index && <span className="text-ink-dim mr-2">{index}</span>}
                {eyebrow}
              </p>
            </div>
            <h1
              id="page-title"
              className="text-[clamp(2.6rem,6.4vw,5rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-ink text-balance"
            >
              {title}
            </h1>
            {desc && <p className="lede mt-7 max-w-2xl text-pretty">{desc}</p>}
            {children && <div className="mt-8">{children}</div>}
          </div>
          <div className="hidden justify-end lg:col-span-5 lg:flex">
            {aside ?? <OrbitMotif caption={eyebrow.replace(/^ms-bee\s*/i, "MS BEE / ")} />}
          </div>
        </div>

        {meta && meta.length > 0 && (
          <dl className="relative z-10 mt-12 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-surface-border pt-6 sm:grid-cols-4">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="meta-label">{m.label}</dt>
                <dd className="meta-value">{m.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </Container>
    </section>
  );
}

export function StatusBadge({
  label,
  tone = "accent",
}: {
  label: string;
  tone?: "accent" | "green" | "amber" | "dim";
}) {
  const tones: Record<string, string> = {
    accent: "text-accent border-accent/25 bg-accent/[0.06]",
    green: "text-emerald-400 border-emerald-400/25 bg-emerald-400/[0.06]",
    amber: "text-amber-400 border-amber-400/25 bg-amber-400/[0.06]",
    dim: "text-ink-dim border-surface-border bg-white/[0.02]",
  };
  return <span className={`status-pill ${tones[tone]}`}>● {label}</span>;
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="relative z-10 mb-10">
      <ol className="flex flex-wrap items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-dim">
        <li>
          <Link href="/" className="hover:text-ink transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`} className="flex items-center gap-2.5">
            <span aria-hidden="true" className="text-surface-strong">/</span>
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

function CTALink({
  href,
  label,
  external,
  variant,
}: {
  href: string;
  label: string;
  external?: boolean;
  variant: "primary" | "outline";
}) {
  const cls =
    variant === "primary"
      ? "btn-primary btn-sweep min-h-[50px] w-full sm:w-auto"
      : "btn-outline min-h-[50px] w-full sm:w-auto";
  if (external || /^https?:\/\//.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {label} <span aria-hidden="true">↗</span>
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {label} <span aria-hidden="true">→</span>
    </Link>
  );
}

export function CTASection({
  title = "Have a business problem worth building?",
  desc = "Tell MS Bee what you are trying to build, automate, or launch. Every brief is read personally.",
  primary = { label: "Start a Project", href: "/start-project" },
  secondary = { label: "Explore Work", href: "/work" },
  eyebrow = "Start here",
}: {
  title?: string;
  desc?: string;
  primary?: { label: string; href: string; external?: boolean };
  secondary?: { label: string; href: string; external?: boolean };
  eyebrow?: string;
}) {
  return (
    <section aria-label="Call to action" className="section">
      <Container>
        <div className="relative overflow-hidden border border-surface-border bg-[#08080F]">
          <div className="absolute inset-0 bg-rule-grid opacity-60" aria-hidden="true" />
          <div
            className="absolute -top-20 right-0 h-[42vh] w-[42vh] max-w-[320px] max-h-[320px] rounded-full opacity-70 blur-[80px] sm:w-[420px] sm:h-[420px] sm:max-w-none sm:max-h-none lg:-right-12"
            aria-hidden="true"
            style={{ background: "radial-gradient(circle, rgba(139,139,255,0.16), transparent 68%)" }}
          />
          <div className="relative z-10 grid gap-10 p-8 md:p-14 lg:grid-cols-12 lg:items-end lg:p-16">
            <div className="lg:col-span-8">
              <p className="section-label">
                <span className="text-accent">$</span> {eyebrow}
              </p>
              <h2 className="text-[clamp(1.9rem,4.2vw,3.4rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-ink text-balance">
                {title}
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-muted md:text-base">{desc}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-stretch">
              <CTALink href={primary.href} label={primary.label} external={primary.external} variant="primary" />
              <CTALink href={secondary.href} label={secondary.label} external={secondary.external} variant="outline" />
            </div>
          </div>
          <div className="relative z-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-surface-border px-8 py-4 md:px-14 lg:px-16">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-dim">Founder-led</span>
            <span className="hidden h-1 w-1 rounded-full bg-surface-strong sm:block" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-dim">Direct reply</span>
            <span className="hidden h-1 w-1 rounded-full bg-surface-strong sm:block" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-dim">Scoped before build</span>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  if (!items.length) return null;
  return (
    <div className="divide-y divide-surface-border border-y border-surface-border">
      {items.map((f, i) => (
        <details key={f.q} className="group">
          <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-5 py-5 text-left">
            <span className="flex items-baseline gap-4">
              <span className="font-mono text-[10px] text-ink-dim">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-[15px] font-medium text-ink md:text-base">{f.q}</span>
            </span>
            <span
              className="relative h-3.5 w-3.5 shrink-0 text-accent transition-transform duration-300 group-open:rotate-45"
              aria-hidden="true"
            >
              <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
              <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
            </span>
          </summary>
          <p className="max-w-2xl pb-6 pl-8 text-sm leading-relaxed text-ink-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
