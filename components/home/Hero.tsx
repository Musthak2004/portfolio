"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import MSBeeCore from "@/components/visual/MSBeeCore";
import SystemHUD from "@/components/visual/SystemHUD";

/**
 * Cinematic hero. The planetary system is the environment, not wallpaper:
 * it drifts in the lower-right field while the headline holds a calm,
 * deliberately scrimmed safe zone at the optical centre.
 */
export default function Hero() {
  const envRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const env = envRef.current;
    if (!env) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const vh = window.innerHeight;
        if (y > vh * 1.2) return;
        env.style.transform = `translate3d(0, ${(y * 0.2).toFixed(1)}px, 0)`;
        env.style.opacity = String(Math.max(0, 1 - y / (vh * 0.92)));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section aria-labelledby="hero-heading" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* planetary environment */}
      <div ref={envRef} className="absolute inset-0 will-change-transform" aria-hidden="true">
        <MSBeeCore
          variant="hero"
          className="absolute inset-0"
          fallbackClassName="absolute -right-6 bottom-[7%] h-40 w-40 opacity-30 sm:h-56 sm:w-56 lg:right-0 lg:bottom-0 lg:h-56 lg:w-56 lg:opacity-55"
        />
      </div>

      {/* safe-zone scrim: the headline never sits on a luminous body */}
      <div className="hero-safe-scrim pointer-events-none absolute inset-0" aria-hidden="true" />

      {/* frame marks */}
      <div className="pointer-events-none absolute inset-x-0 top-24 z-10 hidden md:block" aria-hidden="true">
        <div className="shell flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.28em] text-ink-dim/70">
          <span>MS BEE — SOFTWARE + AI SYSTEMS</span>
          <span>ORBITAL VIEW / 01</span>
        </div>
      </div>

      <div className="shell relative z-10 flex min-h-[100svh] flex-col justify-center pb-32 pt-32 md:pb-40 xl:pb-52">
        <div className="mx-auto max-w-4xl text-center">
          <p className="hero-enter hero-enter-1 mb-7 inline-flex items-center gap-3 border border-surface-border bg-black/25 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_10px_rgba(232,179,75,0.9)]" aria-hidden="true" />
            Founder-led software company
          </p>

          <h1
            id="hero-heading"
            className="hero-enter hero-enter-2 text-display-md font-semibold text-ink text-balance"
          >
            We build software, automate workflows,{" "}
            <span className="bg-gradient-to-r from-accent-hover via-[#C9C9FF] to-signal bg-clip-text text-transparent">
              turn problems into systems.
            </span>
          </h1>

          <p className="hero-enter hero-enter-3 mx-auto mt-7 max-w-xl text-[15px] leading-relaxed text-ink-muted sm:text-base md:text-lg">
            MS Bee is a founder-led software company — web applications, AI
            automations, custom software and products, built to hold up in production.
          </p>

          <div className="hero-enter hero-enter-4 mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/start-project" className="btn-primary btn-sweep min-h-[50px] w-full sm:w-auto">
              Start a Project <span aria-hidden="true">→</span>
            </Link>
            <Link href="/work" className="btn-outline min-h-[50px] w-full sm:w-auto">
              Explore Work
            </Link>
          </div>

          <dl className="hero-enter hero-enter-5 mx-auto mt-12 grid max-w-lg grid-cols-3 border-y border-surface-border/80">
            {[
              ["02", "client builds live"],
              ["02", "products shipped"],
              ["01", "founder, no team"],
            ].map(([n, label], i) => (
              <div
                key={label}
                className={`px-3 py-4 text-center ${i > 0 ? "border-l border-surface-border/80" : ""}`}
              >
                <dt className="sr-only">{label}</dt>
                <dd>
                  <span className="block font-mono text-lg text-ink md:text-xl">{n}</span>
                  <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.12em] text-ink-dim">
                    {label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* system map — a real capability readout, integrated at the frame edge */}
      <div className="pointer-events-auto absolute bottom-6 left-0 right-0 z-10 hidden xl:block">
        <div className="shell flex items-end justify-between gap-8">
          <div className="w-64">
            <SystemHUD />
          </div>
          <a
            href="#capabilities"
            className="group flex flex-col items-center gap-3 text-ink-dim"
            aria-label="Scroll to capabilities"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.24em] group-hover:text-ink-muted transition-colors">
              Scroll
            </span>
            <span className="scroll-cue-line block h-10 w-px bg-gradient-to-b from-accent/80 to-transparent" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-24 bg-gradient-to-b from-transparent to-canvas" aria-hidden="true" />
    </section>
  );
}
