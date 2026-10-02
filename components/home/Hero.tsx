"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import MSBeeCore from "@/components/visual/MSBeeCore";
import SystemHUD from "@/components/visual/SystemHUD";

/**
 * Full-viewport cinematic hero. The MS Bee planetary system is the
 * environment; centered copy floats inside a calm safe zone.
 * Scroll parallax drifts the environment (desktop, motion-safe only).
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
        env.style.transform = "translate3d(0, " + (y * 0.22).toFixed(1) + "px, 0)";
        env.style.opacity = String(Math.max(0, 1 - y / (vh * 0.9)));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden min-h-[100svh] flex items-center">
      {/* environment layer */}
      <div ref={envRef} className="absolute inset-0 will-change-transform" aria-hidden="true">
        <div className="absolute inset-0 flex items-center justify-center">
          <MSBeeCore
            variant="hero"
            className="absolute inset-0"
            fallbackClassName="w-60 h-60 sm:w-72 sm:h-72 opacity-80"
          />
        </div>
      </div>

      {/* readability: feathered center-calm vignette, never a black box */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 62% 52% at 50% 46%, rgba(4,4,9,0.78) 0%, rgba(4,4,9,0.45) 45%, transparent 70%), radial-gradient(ellipse 120% 100% at 50% 50%, transparent 55%, rgba(3,3,7,0.8) 100%)",
        }}
      />
      {/* bottom transition into page */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
        aria-hidden="true"
        style={{ background: "linear-gradient(180deg, transparent 0%, #06060C 100%)" }}
      />

      {/* centered content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-28 pb-24">
        <div className="max-w-[760px] mx-auto text-center">
          <p className="hero-enter hero-enter-1 font-mono text-xs text-ink-muted tracking-widest uppercase mb-5">
            <span className="text-accent">$</span> ms-bee --whoami
          </p>
          <p className="hero-enter hero-enter-1 font-mono text-xs tracking-widest text-accent mb-5">
            MS BEE · SOFTWARE + AI SYSTEMS
          </p>
          <h1
            id="hero-heading"
            className="hero-enter hero-enter-2 text-4xl sm:text-5xl xl:text-6xl font-bold text-ink leading-tight tracking-tight text-balance mb-6"
          >
            We build software, automate workflows,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">
              turn problems into systems.
            </span>
          </h1>
          <p className="hero-enter hero-enter-3 text-ink-muted text-base sm:text-lg leading-relaxed mb-9 max-w-2xl mx-auto">
            MS Bee is a founder-led software company - web applications, AI
            automations, custom software and products, built to scale.
          </p>
          <div className="hero-enter hero-enter-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/start-project" className="btn-primary btn-sweep justify-center min-h-[48px] w-full sm:w-auto">
              Start a Project
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/work" className="btn-outline justify-center min-h-[48px] w-full sm:w-auto">
              Explore Work
            </Link>
          </div>

          {/* HUD in-flow on mobile/tablet */}
          <div className="hero-enter hero-enter-4 lg:hidden max-w-sm mx-auto mt-10 text-left">
            <SystemHUD />
          </div>
        </div>
      </div>

      {/* HUD docked lower-right on desktop */}
      <div className="hero-enter hero-enter-4 hidden lg:block absolute bottom-10 right-10 z-10 w-72">
        <SystemHUD />
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-ink-dim" aria-hidden="true">
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <span className="block w-px h-8 bg-gradient-to-b from-accent/70 to-transparent animate-pulse-soft" />
      </div>
    </section>
  );
}
