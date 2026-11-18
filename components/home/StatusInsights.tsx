import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { ArticleCard } from "@/components/cards";
import type { Article } from "@/types";

const rows = [
  { name: "MS Bee", desc: "Software + AI", status: "BUILDING", tone: "text-signal border-signal/25 bg-signal-dim", href: "/labs/ms-bee-os" },
  { name: "CleanSched", desc: "Micro-SaaS", status: "LIVE", tone: "text-emerald-400 border-emerald-400/20 bg-emerald-400/5", href: "/products/cleansched" },
  { name: "DevShield", desc: "Digital product", status: "LIVE", tone: "text-emerald-400 border-emerald-400/20 bg-emerald-400/5", href: "/products/devshield" },
  { name: "AI Lead Follow-Up", desc: "Automation", status: "LIVE DEMO", tone: "text-accent border-accent/25 bg-accent/5", href: "/work/ai-lead-follow-up-system" },
];

/** Live build-status ledger — factual statuses only. */
export function BuildStatus() {
  return (
    <section aria-labelledby="home-now-heading" className="section section-rule">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="section-label">
                <span className="text-accent">07</span> Build status
              </p>
              <h2 id="home-now-heading" className="section-heading mb-4">
                What ships now.
              </h2>
              <p className="section-desc">
                A factual ledger of what is live, what is building and what is
                still a prototype.
              </p>
              <Link href="/labs" className="link-underline mt-6 inline-flex min-h-[44px] items-center text-sm font-medium text-accent">
                Visit Labs <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={1}>
              <div className="tech-module">
                <div className="flex items-center border-b border-surface-border px-5 py-3.5 md:px-7">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-soft" aria-hidden="true" />
                  <p className="ml-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                    MS BEE — BUILD STATUS
                  </p>
                  <span className="ml-auto hidden font-mono text-[10px] text-ink-dim sm:inline">/NOW</span>
                </div>
                <ul className="divide-y divide-surface-border">
                  {rows.map((r) => (
                    <li key={r.name}>
                      <Link
                        href={r.href}
                        className="group flex min-h-[60px] items-center gap-4 px-5 py-4 transition-colors hover:bg-white/[0.025] md:px-7"
                      >
                        <span className={`shrink-0 border px-2.5 py-1 font-mono text-[9px] tracking-[0.13em] ${r.tone}`}>
                          ● {r.status}
                        </span>
                        <span className="text-sm font-medium text-ink md:text-base">{r.name}</span>
                        <span className="hidden text-sm text-ink-dim sm:inline">{r.desc}</span>
                        <span className="ml-auto text-accent transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Insights preview — one lead article, two supporting notes. */
export function InsightsPreview({ articles }: { articles: Article[] }) {
  const [lead, ...rest] = articles;
  if (!lead) return null;

  return (
    <section aria-labelledby="home-insights-heading" className="section section-rule bg-[#07070D]">
      <div className="shell">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="section-label">
                <span className="text-accent">08</span> Insights
              </p>
              <h2 id="home-insights-heading" className="section-heading">
                Notes from the build.
              </h2>
            </div>
            <Link href="/insights" className="link-underline inline-flex min-h-[44px] items-center text-sm font-medium text-accent">
              All insights <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>

        <Reveal variant="featured">
          <article className="group relative overflow-hidden border border-surface-border bg-surface">
            <div className="absolute inset-0 bg-rule-grid opacity-30" aria-hidden="true" />
            <div className="relative z-10 grid gap-7 p-7 md:p-10 lg:grid-cols-12 lg:items-center lg:gap-10 lg:p-12">
              <div className="lg:col-span-7">
                <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="eyebrow-pill">Latest · {lead.category}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-dim">
                    {lead.readingMinutes} min read
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-dim">
                    {lead.publishedAt}
                  </span>
                </div>
                <h3 className="max-w-2xl text-[clamp(1.65rem,3.2vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-ink text-balance">
                  <Link href={`/insights/${lead.slug}`} className="transition-colors hover:text-accent-hover">
                    {lead.title}
                  </Link>
                </h3>
              </div>
              <div className="border-t border-surface-border pt-6 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <p className="text-[15px] leading-relaxed text-ink-muted md:text-base">{lead.excerpt}</p>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-dim">
                    R.M. Musthak
                  </span>
                  <Link
                    href={`/insights/${lead.slug}`}
                    className="link-drift inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                    aria-label={`Read the latest note: ${lead.title}`}
                  >
                    Read note <span className="arrow" aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {rest.map((a, i) => (
            <Reveal key={a.slug} delay={i + 1}>
              <ArticleCard article={a} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
