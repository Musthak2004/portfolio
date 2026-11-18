"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

const steps = [
  { id: "lead", label: "LEAD", detail: "Lead message arrives" },
  { id: "ai", label: "AI ENGINE", detail: "Response generated" },
  { id: "email", label: "EMAIL", detail: "Follow-up sent" },
  { id: "sms", label: "SMS", detail: "Second touch" },
];

/**
 * The automation section demonstrates the product: nodes activate in
 * sequence as a signal travels LEAD → AI → EMAIL + SMS. Loops gently.
 */
export default function AutomationFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(-1);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      setActive(steps.length);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    let stopped = false;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const cycle = () => {
          if (stopped) return;
          setActive(-1);
          steps.forEach((_, i) => {
            timers.push(setTimeout(() => !stopped && setActive(i + 1), 600 + i * 700));
          });
          timers.push(setTimeout(cycle, 600 + steps.length * 700 + 2600));
        };
        cycle();
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => {
      stopped = true;
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <section aria-labelledby="home-auto-heading" className="section section-rule bg-[#07070D]">
      <div className="shell">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="section-label">
                <span className="text-accent">04</span> AI automation
              </p>
              <h2 id="home-auto-heading" className="section-heading mb-5">
                Workflows that run themselves.
              </h2>
              <p className="section-desc mb-7">
                The AI Lead Follow-Up System — a real workflow that answers,
                follows up and routes, demonstrated end to end rather than described.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/solutions/ai-automation" className="btn-primary btn-sweep min-h-[48px] justify-center">
                  AI Automation <span aria-hidden="true">→</span>
                </Link>
                <Link href="/work/ai-lead-follow-up-system" className="btn-outline min-h-[48px] justify-center">
                  See the system
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={1}>
              <div ref={ref} className="tech-module p-5 md:p-8" aria-label="Lead follow-up workflow demonstration">
                <div className="mb-6 flex items-center justify-between border-b border-surface-border pb-4">
                  <p className="font-mono text-[11px] text-ink-dim">
                    <span className="text-accent">$</span> ms-bee run lead-followup
                    <span className="animate-cursor-blink" aria-hidden="true">_</span>
                  </p>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-dim">
                    LIVE DEMO
                  </span>
                </div>

                {/* desktop: horizontal flow with SVG path */}
                <div className="hidden md:block">
                  <svg viewBox="0 0 560 120" className="mb-2 w-full" aria-hidden="true">
                    <line x1="56" y1="60" x2="504" y2="60" stroke="#23232E" strokeWidth="1.5" />
                    {!reduced && <line x1="56" y1="60" x2="504" y2="60" stroke="#8B8BFF" strokeWidth="1.5" className="flow-path" />}
                    {steps.map((s, i) => {
                      const x = 56 + i * (448 / (steps.length - 1));
                      return (
                        <circle
                          key={s.id}
                          cx={x}
                          cy={60}
                          r={active > i ? 5 : 3.5}
                          fill={active > i ? "#8B8BFF" : "#33333F"}
                          style={{ transition: "all 350ms ease-out" }}
                        />
                      );
                    })}
                  </svg>
                  <ol className="grid gap-2" style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}>
                    {steps.map((s, i) => (
                      <li
                        key={s.id}
                        className={`flow-node border px-3 py-4 text-center ${
                          active > i ? "is-live bg-surface-light" : "border-surface-border bg-white/[0.015]"
                        }`}
                      >
                        <span className={`font-mono text-[10px] tracking-wider ${active > i ? "text-ink" : "text-ink-dim"}`}>
                          {s.label}
                        </span>
                        <span className="mt-1 block text-[11px] text-ink-dim">{s.detail}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* mobile: vertical flow */}
                <ol className="space-y-2 md:hidden">
                  {steps.map((s, i) => (
                    <li
                      key={s.id}
                      className={`flow-node flex items-center gap-3 border px-4 py-3 ${
                        active > i ? "is-live bg-surface-light" : "border-surface-border bg-white/[0.015]"
                      }`}
                    >
                      <span className="border border-accent/20 bg-accent/5 px-2 py-0.5 font-mono text-[10px] text-accent">
                        0{i + 1}
                      </span>
                      <span className="text-sm text-ink">{s.label}</span>
                      <span className="ml-auto text-[11px] text-ink-dim">{s.detail}</span>
                    </li>
                  ))}
                </ol>

                <p className="mt-5 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-ink-dim" aria-hidden="true">
                  Demonstrated workflow — Loom walkthrough available in the case study
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
