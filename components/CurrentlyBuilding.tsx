const items = [
  {
    name: "MS Bee",
    desc: "Software + AI",
    status: "BUILDING",
    statusClass: "text-accent border-accent/20 bg-accent/5",
  },
  {
    name: "CleanSched",
    desc: "Micro-SaaS",
    status: "LIVE",
    statusClass: "text-emerald-400 border-emerald-400/20 bg-emerald-400/5",
    url: "https://sparkleshine.de5.net/",
  },
  {
    name: "DevShield",
    desc: "Digital Product",
    status: "LIVE",
    statusClass: "text-emerald-400 border-emerald-400/20 bg-emerald-400/5",
    url: "https://musthakcool.gumroad.com/l/devshield-free",
  },
  {
    name: "AI Lead Follow-Up System",
    desc: "Automation",
    status: "EXPERIMENTING",
    statusClass: "text-amber-400 border-amber-400/20 bg-amber-400/5",
    url: "https://loom.com/share/329f152f43174149913f9dbc5855d69d",
  },
];

export default function CurrentlyBuilding() {
  return (
    <section
      aria-labelledby="building-heading"
      className="py-24 md:py-32 bg-[#0A0A12]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-12 md:mb-16">
          <p className="section-label">/now</p>
          <h2 id="building-heading" className="section-heading mb-4">
            Currently Building
          </h2>
          <p className="section-desc">
            Building in public — company, products and automation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => {
            const inner = (
              <>
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`font-mono text-[10px] tracking-[0.15em] border px-2.5 py-1 ${item.statusClass}`}
                  >
                    ● {item.status}
                  </span>
                  {item.url && (
                    <svg
                      className="w-4 h-4 text-ink-dim"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  )}
                </div>
                <h3 className="text-lg font-bold text-ink mb-1">{item.name}</h3>
                <p className="text-sm text-ink-muted">{item.desc}</p>
              </>
            );
            return item.url ? (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 block"
                aria-label={`${item.name} — ${item.desc} — opens in a new tab`}
              >
                {inner}
              </a>
            ) : (
              <div key={item.name} className="card p-6">
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
