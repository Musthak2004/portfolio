"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

const branches = [
  {
    id: "software",
    node: "SOFTWARE",
    desc: "Applications and sites built to perform and extend.",
    capabilities: ["Web Apps", "Business Websites", "Mobile Apps", "Internal Systems"],
    href: "/solutions/web-development",
  },
  {
    id: "ai",
    node: "AI",
    desc: "Workflows that respond, route and engage on their own.",
    capabilities: ["Lead Follow-Up", "AI Agents", "Email + SMS Flows", "Integrations"],
    href: "/solutions/ai-automation",
  },
  {
    id: "products",
    node: "PRODUCTS",
    desc: "Internal tools shipped as real products.",
    capabilities: ["Micro-SaaS", "Developer Tools", "Digital Products"],
    href: "/products",
  },
];

/** Interactive capability system — one core, three tracks, cross-layer automation. */
export default function Capabilities() {
  const [active, setActive] = useState("ai");
  const current = branches.find((b) => b.id === active) ?? branches[0];

  return (
    <section id="capabilities" aria-labelledby="caps-heading" className="section section-rule scroll-mt-20">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="section-label">
                <span className="text-accent">01</span> Capabilities
              </p>
              <h2 id="caps-heading" className="section-heading mb-5">
                One core. Three tracks.
              </h2>
              <p className="section-desc mb-7">
                MS Bee builds the software, the automation layer and the products
                around it. Select a track to see what ships under it.
              </p>
              <Link href="/solutions" className="link-underline text-sm font-medium text-accent min-h-[44px]">
                All solutions <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={1}>
              <div className="tech-module p-5 md:p-8">
                <div className="mb-6 flex items-center gap-3 border-b border-surface-border pb-4">
                  <span className="h-2 w-2 bg-signal shadow-[0_0_12px_rgba(232,179,75,0.85)]" aria-hidden="true" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink">MS BEE CORE</p>
                  <span className="ml-auto font-mono text-[10px] text-ink-dim">/SYSTEM</span>
                </div>

                <div className="grid gap-3 sm:grid-cols-3" role="group" aria-label="Capability tracks">
                  {branches.map((b, i) => (
                    <button
                      key={b.id}
                      type="button"
                      aria-pressed={active === b.id}
                      onMouseEnter={() => setActive(b.id)}
                      onFocus={() => setActive(b.id)}
                      onClick={() => setActive(b.id)}
                      data-active={active === b.id}
                      className="cap-node flex h-full flex-col items-start border border-surface-border bg-white/[0.015] p-4 text-left md:p-5"
                    >
                      <span className="mb-3 flex w-full items-center justify-between gap-2">
                        <span className="cap-bar block h-px flex-1 bg-accent/60" aria-hidden="true" />
                        <span className="font-mono text-[9px] text-ink-dim">0{i + 1}</span>
                      </span>
                      <span className="font-mono text-[10px] tracking-[0.16em] text-accent">{b.node}</span>
                      <span className="mt-2 text-sm leading-relaxed text-ink-muted">{b.desc}</span>
                    </button>
                  ))}
                </div>

                <div className="mt-3 border border-surface-border bg-black/20 p-5 md:p-6" aria-live="polite">
                  <div className="grid gap-5 sm:grid-cols-[1fr_1.15fr] sm:gap-8">
                    <div>
                      <p className="meta-label">Selected track</p>
                      <p className="mt-2 font-mono text-sm uppercase tracking-[0.14em] text-ink">
                        {current.node}
                      </p>
                      <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-muted">{current.desc}</p>
                    </div>
                    <div>
                      <p className="meta-label">What ships</p>
                      <ul className="mt-2 grid gap-x-4 gap-y-1.5 sm:grid-cols-2">
                        {current.capabilities.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-[13px] text-ink-muted">
                            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                            {c}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={current.href}
                        className="link-drift mt-4 inline-flex min-h-[40px] items-center gap-1.5 text-[13px] font-medium text-accent transition-colors hover:text-accent-hover"
                      >
                        Open track <span className="arrow" aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <Link
                  href="/solutions/ai-automation"
                  className="group mt-3 flex min-h-[48px] flex-wrap items-center gap-3 border border-signal/25 bg-signal-dim px-4 py-3.5 transition-colors hover:border-signal/45 md:px-5"
                  aria-label="Automation — the layer running through all three tracks"
                >
                  <span className="shrink-0 font-mono text-[11px] tracking-widest text-signal">AUTOMATION</span>
                  <span className="hidden h-px flex-1 bg-gradient-to-r from-signal/40 to-transparent sm:block" aria-hidden="true" />
                  <span className="text-sm text-ink-muted">The layer running through all three tracks</span>
                  <span className="ml-auto text-signal" aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
