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

/** Interactive capability system — core with three branches, hover reveals detail. */
export default function Capabilities() {
  const [active, setActive] = useState("ai");

  return (
    <section aria-labelledby="caps-heading" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="section-label">/capabilities</p>
              <h2 id="caps-heading" className="section-heading mb-4">
                What MS Bee builds
              </h2>
              <p className="section-desc mb-6">
                One core, three tracks. Select a node to see what ships under it.
              </p>
              <Link href="/solutions" className="link-drift inline-flex items-center gap-2 text-sm font-medium text-accent min-h-[44px]">
                All solutions <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={1}>
              <div className="tech-module p-5 md:p-8" role="tablist" aria-label="Capability tracks">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-2 h-2 bg-signal shadow-[0_0_10px_rgba(232,179,75,0.8)]" aria-hidden="true" />
                  <p className="font-mono text-xs tracking-[0.2em] text-ink">MS BEE CORE</p>
                  <span className="ml-auto font-mono text-[10px] text-ink-dim hidden sm:inline">/SYSTEM</span>
                </div>
                <div className="grid sm:grid-cols-3 gap-3">
                  {branches.map((b) => (
                    <button
                      key={b.id}
                      role="tab"
                      aria-selected={active === b.id}
                      onMouseEnter={() => setActive(b.id)}
                      onFocus={() => setActive(b.id)}
                      onClick={() => setActive(b.id)}
                      data-active={active === b.id}
                      className="cap-node text-left border border-surface-border bg-surface-light/50 p-4 md:p-5 min-h-[44px]"
                    >
                      <span className="cap-bar block h-px bg-accent/60 mb-3" aria-hidden="true" />
                      <span className="font-mono text-xs tracking-[0.15em] text-accent">{b.node}</span>
                      <span className="block text-sm text-ink-muted mt-2 leading-relaxed">{b.desc}</span>
                      <span className={"mt-3 block space-y-1.5 " + (active === b.id ? "" : "sm:hidden")}>
                        {b.capabilities.map((c) => (
                          <span key={c} className="block text-[13px] text-ink">
                            <span className="text-accent mr-1.5" aria-hidden="true">▹</span>{c}
                          </span>
                        ))}
                        <Link
                          href={b.href}
                          className="link-drift inline-flex items-center gap-1.5 text-[13px] font-medium text-accent pt-1 min-h-[44px]"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Open <span className="arrow" aria-hidden="true">→</span>
                        </Link>
                      </span>
                    </button>
                  ))}
                </div>
                {/* automation cross-system layer */}
                <Link href="/solutions/ai-automation" className="group mt-3 flex items-center gap-3 border border-signal/25 bg-signal-dim px-4 md:px-5 py-3.5 min-h-[44px]" aria-label="Automation - the layer running through all three tracks">
                  <span className="font-mono text-xs tracking-widest text-signal shrink-0">AUTOMATION</span>
                  <span className="hidden sm:block h-px flex-1 bg-gradient-to-r from-signal/40 to-transparent" aria-hidden="true" />
                  <span className="text-sm text-ink-muted">The layer running through all three tracks</span>
                  <span className="ml-auto text-signal link-drift inline-flex items-center gap-1.5 text-sm font-medium" aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
