/**
 * CSS orbital motif for interior pages.
 *
 * The WebGL planetary system is reserved for the homepage hero, so every other
 * route gets this lightweight, deterministic counterpart: pure CSS, a single
 * warm core, two drifting rings and no canvas cost. Decorative by design.
 */
export default function OrbitMotif({
  className = "",
  caption = "MS BEE / ORBITAL SYSTEM",
  compact = false,
}: {
  className?: string;
  caption?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`relative ${compact ? "w-48" : "w-full max-w-[340px] lg:max-w-[420px]"} ${className}`}
      aria-hidden="true"
    >
      <div className="orbit-motif mx-auto">
        <div className="orbit-haze" />
        <div className="orbit-ring animate-orbit-drift [animation-duration:42s]" />
        <div className="orbit-ring orbit-ring-2 animate-orbit-drift-reverse [animation-duration:58s]" />
        <div className="orbit-ring orbit-ring-3 animate-orbit-drift [animation-duration:80s]" />
        <div className="orbit-core" />
      </div>
      <div className="mt-4 flex items-center gap-3">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-surface-strong to-transparent" />
        <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-ink-dim">{caption}</span>
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-surface-strong to-transparent" />
      </div>
    </div>
  );
}
