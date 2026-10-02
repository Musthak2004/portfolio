const rows = [
  ["SOFTWARE CORE", "ONLINE", "text-emerald-400"],
  ["AI SYSTEMS", "ONLINE", "text-emerald-400"],
  ["AUTOMATION", "ONLINE", "text-emerald-400"],
  ["PRODUCT LAB", "ONLINE", "text-emerald-400"],
];

/** Compact system telemetry panel — product telemetry, not hacker terminal. */
export default function SystemHUD({ status = "BUILDING" }: { status?: string }) {
  return (
    <div className="border border-surface-border bg-surface-light/70 backdrop-blur-sm">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-surface-border">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-soft" aria-hidden="true" />
        <span className="font-mono text-[10px] tracking-[0.2em] text-ink-muted">MS BEE SYSTEM</span>
        <span className="ml-auto font-mono text-[10px] text-signal border border-signal/25 bg-signal-dim px-2 py-0.5">
          {status}
        </span>
      </div>
      <dl className="px-4 py-3 space-y-2">
        {rows.map(([k, v, cls]) => (
          <div key={k} className="flex items-center justify-between gap-4">
            <dt className="font-mono text-[11px] text-ink-dim">{k}</dt>
            <dd className={`font-mono text-[11px] flex items-center gap-1.5 ${cls}`}>
              <span className="w-1 h-1 rounded-full bg-current animate-pulse-soft" aria-hidden="true" />
              {v}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
