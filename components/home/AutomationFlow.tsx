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
    let timers: ReturnType<typeof setTimeout>[] = [];
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
    <section aria-labelledby="home-auto-heading" className="py-20 md:py-28 bg-[#08080F]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="section-label">/automation</p>
              <h2 id="home-auto-heading" className="section-heading mb-4">
                What does your system thinking look like?
              </h2>
              <p className="section-desc mb-6">
                The AI Lead Follow-Up System — watch the workflow run itself.
                Business workflows that run themselves.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/solutions/ai-automation" className="btn-primary btn-sweep justify-center min-h-[48px]">
                  AI Automation →
                </Link>
                <Link href="/work/ai-lead-follow-up-system" className="btn-outline justify-center min-h-[48px]">
                  See the system
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={1}>
              <div ref={ref} className="tech-module p-5 md:p-8" aria-label="Lead follow-up workflow demonstration">
                <p className="font-mono text-[11px] text-ink-dim mb-6">
                  <span className="text-accent">$</span> ms-bee run lead-followup
                  <span className="animate-cursor-blink" aria-hidden="true">_</span>
                </p>
                {/* desktop: horizontal flow with SVG path */}
                <div className="hidden md:block">
                  <svg viewBox="0 0 560 120" className="w-full mb-2" aria-hidden="true">
                    <line x1="56" y1="60" x2="504" y2="60" stroke="#282833" strokeWidth="1.5" />
                    {!reduced && <line x1="56" y1="60" x2="504" y2="60" stroke="#7C7CFF" strokeWidth="1.5" className="flow-path" />}
                    {steps.map((s, i) => {
                      const x = 56 + i * (448 / (steps.length - 1));
                      return <circle key={s.id} cx={x} cy={60} r={active > i ? 5 : 3.5} fill={active > i ? "#7C7CFF" : "#282833"} style={{ transition: "all 350ms ease-out" }} />;
                    })}
                  </svg>
                  <ol className="grid gap-2" style={{ gridTemplateColumns: "repeat(" + steps.length + ", minmax(0, 1fr))" }}>
                    {steps.map((s, i) => (
                      <li key={s.id} className={`flow-node border px-3 py-4 text-center ${active > i ? "is-live bg-surface-light" : "border-surface-border bg-surface-light/40"}`}>
                        <span className={`font-mono text-[11px] tracking-wider ${active > i ? "text-ink" : "text-ink-dim"}`}>{s.label}</span>
                        <span className="block text-[11px] text-ink-dim mt-1">{s.detail}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                {/* mobile: vertical flow */}
                <ol className="md:hidden space-y-2">
                  {steps.map((s, i) => (
                    <li key={s.id} className={`flow-node flex items-center gap-3 border px-4 py-3 ${active > i ? "is-live bg-surface-light" : "border-surface-border bg-surface-light/40"}`}>
                      <span className="font-mono text-[10px] text-accent border border-accent/20 bg-accent/5 px-2 py-0.5">0{i + 1}</span>
                      <span className="text-sm text-ink">{s.label}</span>
                      {i < steps.length - 1 && <span className="ml-auto text-accent" aria-hidden="true">↓</span>}
                    </li>
                  ))}
                </ol>
                <p className="font-mono text-[10px] text-ink-dim mt-4 text-center" aria-hidden="true">
                  // demonstrated workflow — see Loom demo
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
