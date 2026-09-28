function ProductMockup({ variant }: { variant: "cleansched" | "devshield" }) {
  if (variant === "cleansched") {
    return (
      <div
        className="border border-surface-border bg-[#07070D] overflow-hidden"
        aria-hidden="true"
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-surface-border">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          <span className="ml-3 font-mono text-[11px] text-ink-dim truncate">
            sparkleshine.de5.net
          </span>
          <span className="ml-auto font-mono text-[10px] text-emerald-400 border border-emerald-400/20 bg-emerald-400/5 px-2 py-0.5">
            ● LIVE
          </span>
        </div>
        {/* App preview */}
        <div className="p-4 sm:p-5 space-y-3">
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs text-ink font-semibold">
              CleanSched <span className="text-ink-dim font-normal">/ dashboard</span>
            </p>
            <span className="font-mono text-[10px] text-accent border border-accent/20 bg-accent/5 px-2 py-1">
              + New booking
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { k: "Today", v: "4" },
              { k: "Unpaid", v: "2" },
              { k: "Reminders", v: "auto" },
            ].map((s) => (
              <div
                key={s.k}
                className="border border-surface-border bg-surface-light px-3 py-2.5"
              >
                <p className="font-mono text-sm font-semibold text-ink">{s.v}</p>
                <p className="text-[10px] text-ink-dim">{s.k}</p>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {[
              { t: "Deep clean — Tue 10:00", s: "Paid", c: "text-emerald-400" },
              { t: "Recurring — Fri 14:00", s: "Unpaid", c: "text-amber-400" },
              { t: "Reminder sent — 24h before", s: "Auto", c: "text-accent" },
            ].map((r) => (
              <div
                key={r.t}
                className="flex items-center justify-between border border-surface-border bg-surface-light/60 px-3 py-2.5"
              >
                <p className="text-xs text-ink-muted truncate">{r.t}</p>
                <p className={`font-mono text-[10px] ${r.c}`}>{r.s}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className="border border-surface-border bg-[#07070D] overflow-hidden"
      aria-hidden="true"
    >
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-surface-border">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 font-mono text-[11px] text-ink-dim truncate">
          gumroad.com — devshield
        </span>
        <span className="ml-auto font-mono text-[10px] text-emerald-400 border border-emerald-400/20 bg-emerald-400/5 px-2 py-0.5">
          ● LIVE
        </span>
      </div>
      <div className="p-4 sm:p-5">
        <p className="font-mono text-xs text-ink-dim mb-1">$ cat devshield_kit/</p>
        <p className="font-semibold text-ink text-lg mb-4">
          Client-protection starter kit for freelance developers.
        </p>
        <ul className="space-y-2 font-mono text-xs">
          {[
            "devshield/              — starter kit",
            "version: free           — live on Gumroad",
            "contents:               — see live listing",
          ].map((l) => (
            <li
              key={l}
              className="border border-surface-border bg-surface-light/60 px-3 py-2.5 text-ink-muted truncate"
            >
              <span className="text-accent">▹</span> {l}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const products = [
  {
    id: "cleansched",
    name: "CleanSched",
    category: "MY PRODUCT · MICRO-SAAS",
    status: "LIVE",
    description: "Scheduling and invoicing software for solo cleaning businesses.",
    bullets: [
      "Online booking",
      "Scheduling",
      "Recurring cleans",
      "Automatic email reminders",
      "Invoice tracking",
      "Paid / unpaid visibility",
    ],
    url: "https://sparkleshine.de5.net/",
    cta: "Try CleanSched",
    variant: "cleansched" as const,
  },
  {
    id: "devshield",
    name: "DevShield",
    category: "MY PRODUCT · DIGITAL PRODUCT",
    status: "LIVE",
    description:
      "A practical client-protection toolkit for freelance developers.",
    bullets: [
      "Free starter-kit version",
      "Made for freelance developers",
      "Full contents on the live listing",
    ],
    url: "https://musthakcool.gumroad.com/l/devshield-free",
    cta: "Get DevShield Free",
    variant: "devshield" as const,
  },
];

export default function Products() {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="py-24 md:py-32 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-12 md:mb-16">
          <p className="section-label">/products</p>
          <h2 id="products-heading" className="section-heading mb-4">
            Products I&apos;ve Built
          </h2>
          <p className="section-desc">
            Not client work — products I designed, built and launched myself.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {products.map((p, i) => (
            <article
              key={p.id}
              className="card overflow-hidden grid lg:grid-cols-2 gap-0"
            >
              <div className="p-6 md:p-10 flex flex-col justify-center order-2 lg:order-none">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="font-mono text-[10px] tracking-[0.15em] text-accent border border-accent/20 bg-accent/5 px-2.5 py-1">
                    {p.category}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.15em] text-emerald-400 border border-emerald-400/20 bg-emerald-400/5 px-2.5 py-1">
                    ● {p.status}
                  </span>
                </div>
                <p className="font-mono text-xs text-ink-dim mb-2">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-ink mb-3">
                  {p.name}
                </h3>
                <p className="text-ink-muted leading-relaxed mb-5">
                  {p.description}
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2 mb-7">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-ink-muted"
                    >
                      <span className="text-accent mt-0.5 shrink-0" aria-hidden="true">
                        ▹
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary min-h-[48px]"
                    aria-label={`${p.cta} — opens in a new tab`}
                  >
                    {p.cta}
                    <svg
                      className="w-4 h-4"
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
                  </a>
                </div>
              </div>
              <div
                className={`p-6 md:p-10 flex items-center bg-[#07070D] border-t lg:border-t-0 lg:border-l border-surface-border ${
                  i % 2 === 1 ? "lg:order-first lg:border-l-0 lg:border-r" : ""
                }`}
              >
                <div className="w-full">
                  <ProductMockup variant={p.variant} />
                  <p className="font-mono text-[10px] text-ink-dim mt-3 text-center">
                    // live product preview — stylised mockup
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
