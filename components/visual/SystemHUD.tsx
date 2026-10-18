"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Four rows, four real capability tracks that MS Bee actually runs.
 * The value shown is "ACTIVE" rather than an uptime status: this is a
 * system map of the business, not a monitoring feed, and it must not
 * read as a live production health check.
 */
const rows = [
  { key: "SOFTWARE CORE", node: "web & app builds" },
  { key: "AI SYSTEMS", node: "agents & automation" },
  { key: "AUTOMATION", node: "connection layer" },
  { key: "PRODUCT LAB", node: "products & experiments" },
];

/**
 * System map. Rows light up in sequence like a systems readout, each one
 * mirroring a node in the MS Bee capability model. Static (all lit) when
 * reduced-motion is preferred or while off-screen; the sequence pauses
 * outside the viewport so it costs nothing when scrolled past.
 */
export default function SystemHUD({ status = "BUILDING" }: { status?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(3);
  const [live, setLive] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    let interval: ReturnType<typeof setInterval> | undefined;
    let idx = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) {
          setLive(false);
          if (interval) clearInterval(interval);
          return;
        }
        setLive(true);
        setActive(3);
        idx = 0;
        if (interval) clearInterval(interval);
        interval = setInterval(() => {
          idx = (idx + 1) % (rows.length + 2);
          setActive(idx >= rows.length ? 3 : idx);
        }, 1600);
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="border border-surface-border bg-surface-light/70 backdrop-blur-sm"
      role="group"
      aria-label="MS Bee system map — four capability tracks: software, AI systems, automation and the product lab"
    >
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-surface-border">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-soft" aria-hidden="true" />
        <span className="font-mono text-xs text-ink-muted tracking-widest">MS BEE SYSTEM MAP</span>
        <span className="ml-auto font-mono text-xs text-signal border border-signal/25 bg-signal-dim px-2 py-0.5">
          {status}
        </span>
      </div>
      <dl className="px-4 py-3 space-y-2">
        {rows.map((r, i) => {
          const on = !live || active >= i;
          return (
            <div key={r.key} className="flex items-center justify-between gap-4">
              <dt className={"font-mono text-xs " + (on ? "text-ink-dim" : "text-ink-dim/50")}>{r.key}</dt>
              <dd className="font-mono text-xs flex items-center gap-1.5 text-emerald-400">
                <span className={"w-1 h-1 rounded-full bg-current " + (live && active === i ? "animate-pulse-soft" : "")} aria-hidden="true" />
                <span className="sr-only">{r.node}: </span>ACTIVE
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
