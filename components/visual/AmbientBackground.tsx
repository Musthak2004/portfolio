"use client";

import { useEffect, useRef } from "react";

/**
 * Refined ambient background — deep base, subtle grid, extremely small
 * stars, one soft radial light, faint orbital lines. Supports content,
 * never overpowers it. Respects reduced-motion; static render on mobile.
 */
export default function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    type Star = { x: number; y: number; r: number; a: number; tw: number; ph: number };
    let stars: Star[] = [];
    let w = 0;
    let h = 0;
    let raf = 0;
    let t = 0;
    let last = performance.now();
    let visible = !document.hidden;

    const seed = () => {
      const count = window.innerWidth < 768 ? 90 : 180;
      stars = Array.from({ length: count }, () => ({
        x: Math.random(),
        y: Math.random(),
        r: Math.random() > 0.9 ? 1.2 : 0.6 + Math.random() * 0.5,
        a: 0.1 + Math.random() * 0.35,
        tw: 0.3 + Math.random() * 0.8,
        ph: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const draw = (dt: number) => {
      t += dt;
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        const tw = reduced ? 1 : 0.75 + 0.25 * Math.sin(t * 0.001 * s.tw + s.ph);
        ctx.globalAlpha = s.a * tw;
        ctx.fillStyle = "#c9c9ff";
        ctx.beginPath();
        ctx.arc(s.x * w, s.y * h, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const onVis = () => {
      visible = !document.hidden;
      if (visible && !reduced) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      } else {
        cancelAnimationFrame(raf);
      }
    };

    const tick = (now: number) => {
      if (!visible) return;
      const dt = Math.min(50, now - last);
      last = now;
      draw(dt);
      raf = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVis);
    if (reduced) draw(0);
    else raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-base">
      {/* deep base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 50% -5%, rgba(124,124,255,0.07), transparent 60%), linear-gradient(180deg, #06060C 0%, #07070F 50%, #06060C 100%)",
        }}
      />
      {/* subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      {/* faint orbital lines */}
      <svg className="absolute left-1/2 top-0 h-full w-[1200px] -translate-x-1/2 opacity-[0.05]" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="xMidYMin slice">
        <ellipse cx="600" cy="120" rx="420" ry="140" stroke="#9393FF" strokeWidth="1" />
        <ellipse cx="600" cy="120" rx="300" ry="100" stroke="#9393FF" strokeWidth="1" />
        <ellipse cx="600" cy="620" rx="520" ry="170" stroke="#9393FF" strokeWidth="1" />
      </svg>
      {/* tiny stars */}
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
