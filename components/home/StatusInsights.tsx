import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { ArticleCard } from "@/components/cards";
import type { Article } from "@/types";

const rows = [
  { name: "MS Bee", desc: "Software + AI", status: "BUILDING", tone: "text-signal border-signal/25 bg-signal-dim", href: "/labs/ms-bee-os" },
  { name: "CleanSched", desc: "Micro-SaaS", status: "LIVE", tone: "text-emerald-400 border-emerald-400/20 bg-emerald-400/5", href: "/products/cleansched" },
  { name: "DevShield", desc: "Digital Product", status: "LIVE", tone: "text-emerald-400 border-emerald-400/20 bg-emerald-400/5", href: "/products/devshield" },
  { name: "AI Lead Follow-Up", desc: "Automation", status: "LIVE", tone: "text-emerald-400 border-emerald-400/20 bg-emerald-400/5", href: "/work/ai-lead-follow-up-system" },
];

/** Live build-status dashboard — factual statuses only. */
export function BuildStatus() {
  return (
    <section aria-labelledby="home-now-heading" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="mb-10">
            <p className="section-label">/now — build status</p>
            <h2 id="home-now-heading" className="section-heading mb-4">What are you building now?</h2>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <div className="tech-module">
            <div className="flex items-center px-5 md:px-7 py-3.5 border-b border-surface-border">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-soft" aria-hidden="true" />
              <p className="font-mono text-[11px] tracking-[0.2em] text-ink-muted ml-3">MS BEE — BUILD STATUS</p>
              <span className="ml-auto font-mono text-[10px] text-ink-dim hidden sm:inline">/BUILDING</span>
            </div>
            <ul className="divide-y divide-surface-border">
              {rows.map((r) => (
                <li key={r.name}>
                  <Link href={r.href} className="flex items-center gap-4 px-5 md:px-7 py-4 hover:bg-surface-light/60 transition-colors duration-fast min-h-[44px]">
                    <span className={`font-mono text-[10px] tracking-[0.15em] border px-2.5 py-1 shrink-0 ${r.tone}`}>● {r.status}</span>
                    <span className="font-semibold text-ink text-sm md:text-base">{r.name}</span>
                    <span className="text-sm text-ink-dim hidden sm:inline">{r.desc}</span>
                    <span className="ml-auto text-accent" aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={2}>
          <div className="mt-6">
            <Link href="/labs" className="link-drift inline-flex items-center gap-2 text-sm font-medium text-accent min-h-[44px]">
              Visit Labs <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Insights preview — reuses ArticleCard system. */
export function InsightsPreview({ articles }: { articles: Article[] }) {
  return (
    <section aria-labelledby="home-insights-heading" className="py-20 md:py-28 bg-[#08080F]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="section-label">/insights</p>
              <h2 id="home-insights-heading" className="section-heading">What do you know?</h2>
            </div>
            <Link href="/insights" className="link-drift inline-flex items-center gap-2 text-sm font-medium text-accent min-h-[44px]">
              All insights <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={i}>
              <ArticleCard article={a} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
