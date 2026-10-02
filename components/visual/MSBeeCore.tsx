"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const CoreCanvas = dynamic(() => import("./CoreCanvas"), { ssr: false });

/** CSS fallback — hexagon core with orbiting dots, zero WebGL. Used on mobile + footer. */
export function CoreStatic({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <div className="absolute inset-0 animate-spin-slower rounded-full border border-accent/20" />
      <div className="absolute inset-[18%] animate-spin-slow rounded-full border border-accent/25">
        <span className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent" />
      </div>
      <div
        className="absolute inset-[30%] bg-gradient-to-br from-[#23233a] via-[#15151f] to-[#0a0a12] shadow-[0_0_60px_rgba(124,124,255,0.25)]"
        style={{ clipPath: "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)" }}
      >
        <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal shadow-[0_0_12px_rgba(232,179,75,0.9)]" />
      </div>
    </div>
  );
}

/**
 * MS Bee Core — the signature 3D identity object.
 * WebGL on desktop (lazy, pauses off-screen), CSS fallback on touch/mobile.
 */
export default function MSBeeCore({
  variant = "hero",
  className = "",
  fallbackClassName,
  label = "MS Bee planetary system - cinematic orbital visual",
}: {
  variant?: "hero" | "compact";
  className?: string;
  fallbackClassName?: string;
  label?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [noGL, setNoGL] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768) {
      setNoGL(true);
      return;
    }
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      rootMargin: "200px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (noGL) return <CoreStatic className={fallbackClassName ?? className} />;

  return (
    <div ref={wrapRef} className={className} role="img" aria-label={label}>
      {inView && <CoreCanvas hero={variant === "hero"} />}
    </div>
  );
}
