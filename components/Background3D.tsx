"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number; // 0..1
  y: number; // 0..1
  r: number; // radius px at dpr 1
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  depth: number; // 0 (far) .. 1 (near)
  tint: string;
};

type Mote = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  alpha: number;
};

const TINTS = ["#ffffff", "#ffffff", "#ffffff", "#c9c9ff", "#a5b4ff", "#e6d9ff"];

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export default function Background3D() {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    if (!root || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const isMobile = coarsePointer || window.innerWidth < 768;
    const isDesktop = !coarsePointer && window.innerWidth >= 1024;

    // ---- star + mote field setup ----
    const STAR_COUNT = reducedMotion ? 160 : isMobile ? 130 : 340;
    const MOTE_COUNT = reducedMotion ? 0 : isMobile ? 14 : 36;

    const stars: Star[] = Array.from({ length: STAR_COUNT }, () => {
      const depth = Math.random();
      return {
        x: Math.random(),
        y: Math.random(),
        r: depth > 0.85 ? rand(1.1, 1.9) : depth > 0.5 ? rand(0.7, 1.3) : rand(0.3, 0.9),
        baseAlpha: depth > 0.85 ? rand(0.5, 0.95) : depth > 0.5 ? rand(0.3, 0.7) : rand(0.12, 0.4),
        twinkleSpeed: rand(0.2, 1.1),
        twinklePhase: Math.random() * Math.PI * 2,
        depth,
        tint: TINTS[Math.floor(Math.random() * TINTS.length)],
      };
    });

    const motes: Mote[] = Array.from({ length: MOTE_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: rand(1.5, 3.2),
      vx: rand(-0.00008, 0.00008),
      vy: rand(-0.00006, 0.00002),
      alpha: rand(0.04, 0.12),
    }));

    // ---- sizing / dpr ----
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // ---- mouse + scroll parallax state ----
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const cursor = { x: -500, y: -500, tx: -500, ty: -500 };
    let scrollY = window.scrollY;

    const onMouse = (e: MouseEvent) => {
      mouse.tx = e.clientX / window.innerWidth - 0.5;
      mouse.ty = e.clientY / window.innerHeight - 0.5;
      cursor.tx = e.clientX;
      cursor.ty = e.clientY;
    };
    const onScroll = () => {
      scrollY = window.scrollY;
    };
    if (!reducedMotion && !coarsePointer) {
      window.addEventListener("mousemove", onMouse, { passive: true });
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    let raf = 0;
    let visible = !document.hidden;
    const onVis = () => {
      visible = !document.hidden;
      if (visible) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      } else {
        cancelAnimationFrame(raf);
      }
    };
    document.addEventListener("visibilitychange", onVis);

    let last = performance.now();
    let t = 0;

    const draw = (dt: number) => {
      t += dt;
      // smooth mouse
      mouse.x += (mouse.tx - mouse.x) * 0.045;
      mouse.y += (mouse.ty - mouse.y) * 0.045;
      cursor.x += (cursor.tx - cursor.x) * 0.12;
      cursor.y += (cursor.ty - cursor.y) * 0.12;

      // expose parallax to CSS layers (planets / nebula move more than stars)
      root.style.setProperty("--px", mouse.x.toFixed(4));
      root.style.setProperty("--py", mouse.y.toFixed(4));

      if (cursorRef.current && isDesktop && !reducedMotion) {
        cursorRef.current.style.transform = `translate3d(${cursor.x}px, ${cursor.y}px, 0) translate(-50%, -50%)`;
        const glow = 0.55 + Math.min(0.25, Math.hypot(mouse.tx, mouse.ty) * 0.2);
        cursorRef.current.style.opacity = String(glow);
      }

      ctx.clearRect(0, 0, w, h);

      const scrollOffset = (scrollY % Math.max(h, 1)) / Math.max(h, 1);

      for (const s of stars) {
        // parallax: near stars shift more (1–3px range, scaled by viewport)
        const px = mouse.x * (2 + s.depth * 8);
        const py = mouse.y * (2 + s.depth * 8);
        // slow vertical drift with scroll (different speeds per depth = depth feel)
        const sy = (((s.y - scrollOffset * 0.06 * (0.3 + s.depth)) % 1) + 1) % 1;

        const x = s.x * w + px;
        const y = sy * h + py;
        const tw = reducedMotion
          ? 1
          : 0.72 + 0.28 * Math.sin(t * 0.001 * s.twinkleSpeed + s.twinklePhase);
        const a = s.baseAlpha * tw;
        if (a < 0.02) continue;

        ctx.globalAlpha = a;
        ctx.fillStyle = s.tint;
        ctx.beginPath();
        ctx.arc(x, y, s.r, 0, Math.PI * 2);
        ctx.fill();

        // a few bright stars get a soft glow
        if (s.depth > 0.88 && s.baseAlpha > 0.6) {
          ctx.globalAlpha = a * 0.18;
          ctx.beginPath();
          ctx.arc(x, y, s.r * 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      for (const m of motes) {
        m.x = (m.x + m.vx * dt + 1) % 1;
        m.y = (m.y + m.vy * dt + 1) % 1;
        const x = m.x * w + mouse.x * 10;
        const y = m.y * h + mouse.y * 10;
        ctx.globalAlpha = m.alpha;
        ctx.fillStyle = "#8f8fff";
        ctx.beginPath();
        ctx.arc(x, y, m.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const tick = (now: number) => {
      if (!visible) return;
      const dt = Math.min(50, now - last);
      last = now;
      draw(reducedMotion ? 0 : dt);
      if (!reducedMotion) {
        raf = requestAnimationFrame(tick);
      }
    };

    if (reducedMotion) {
      draw(0);
    } else {
      raf = requestAnimationFrame(tick);
    }

    // ---- subtle card tilt (max ~3deg) + cursor highlight ----
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>(".card")
    );
    const tiltCleanups: (() => void)[] = [];
    if (!reducedMotion && isDesktop) {
      for (const card of cards) {
        card.style.transformStyle = "preserve-3d";
        const enter = () => card.classList.add("cosmic-tilt");
        const move = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width - 0.5;
          const py = (e.clientY - rect.top) / rect.height - 0.5;
          card.style.transform = `perspective(900px) rotateX(${(-py * 4).toFixed(
            2
          )}deg) rotateY(${(px * 4).toFixed(2)}deg) translateY(-2px)`;
          card.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
          card.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
        };
        const leave = () => {
          card.style.transform = "";
        };
        const leave2 = () => card.classList.remove("cosmic-tilt");
        card.addEventListener("mouseenter", enter);
        card.addEventListener("mousemove", move);
        card.addEventListener("mouseleave", leave);
        card.addEventListener("mouseleave", leave2);
        tiltCleanups.push(() => {
          card.removeEventListener("mouseenter", enter);
          card.removeEventListener("mousemove", move);
          card.removeEventListener("mouseleave", leave);
          card.removeEventListener("mouseleave", leave2);
        });
      }
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVis);
      tiltCleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="cosmic-root fixed inset-0 z-0 pointer-events-none overflow-hidden"
    >
      {/* Layer 1 — deep space base */}
      <div className="absolute inset-0 cosmic-base" />

      {/* Layer 3 — nebulae / galaxies (very low opacity, edges only) */}
      <div className="absolute inset-0 cosmic-nebulae">
        <div className="nebula nebula-a" />
        <div className="nebula nebula-b" />
        <div className="nebula nebula-c" />
        <div className="nebula nebula-d" />
      </div>

      {/* Layer 2/4 — stars + dust canvas */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Layer 5 — planets (edges only, never behind hero text) */}
      <div className="absolute inset-0 cosmic-planets">
        <div className="planet planet-main">
          <div className="planet-surface planet-blue" />
          <div className="planet-ring" />
        </div>
        <div className="planet planet-small">
          <div className="planet-surface planet-violet" />
        </div>
        <div className="planet planet-moon">
          <div className="planet-surface planet-moon-surface" />
        </div>
      </div>

      {/* Layer 7 — cursor light (desktop only, set via CSS media) */}
      <div ref={cursorRef} className="cosmic-cursor" />
    </div>
  );
}
