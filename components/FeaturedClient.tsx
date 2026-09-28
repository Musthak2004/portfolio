export default function FeaturedClient() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="py-24 md:py-32 bg-[#0A0A12] scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-12 md:mb-16">
          <p className="section-label">/work</p>
          <h2 id="work-heading" className="section-heading mb-4">
            Selected Work
          </h2>
          <p className="section-desc">
            Real client work first — then products I built myself.
          </p>
        </div>

        <article className="card overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Terminal panel */}
            <div className="bg-[#07070D] border-b lg:border-b-0 lg:border-r border-surface-border p-6 md:p-10">
              <p className="font-mono text-[11px] text-ink-dim mb-6">
                <span className="text-accent">$</span> ms-bee show orikma
              </p>
              <div className="font-mono text-sm space-y-4">
                <div>
                  <p className="text-accent text-xs mb-1.5 tracking-wide">
                    // CLIENT
                  </p>
                  <p className="text-ink text-sm font-sans font-semibold">
                    Orikma Ref &amp; Trading (Pvt) Ltd
                  </p>
                </div>
                <div>
                  <p className="text-accent text-xs mb-1.5 tracking-wide">
                    // PROJECT
                  </p>
                  <p className="text-ink-muted text-sm leading-relaxed font-sans">
                    Professional business website — services, products,
                    on-site project work and quote enquiries for a
                    Colombo-based industrial HVAC and refrigeration company.
                  </p>
                </div>
                <div>
                  <p className="text-accent text-xs mb-1.5 tracking-wide">
                    // SITE
                  </p>
                  <p className="text-ink-muted text-sm font-sans">
                    orikma.lk{" "}
                    <span className="text-emerald-400 font-mono text-xs">
                      ● LIVE
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Content panel */}
            <div className="p-6 md:p-10 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="font-mono text-[10px] tracking-[0.15em] text-accent border border-accent/20 bg-accent/5 px-2.5 py-1">
                  FEATURED · REAL CLIENT PROJECT
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-ink mb-2">
                Orikma Ref &amp; Trading
              </h3>
              <p className="font-mono text-xs text-ink-dim mb-4">
                Real Client Project · Business Website
              </p>
              <p className="text-ink-muted leading-relaxed mb-8">
                A professional business website built for Orikma Ref &amp;
                Trading Pvt Ltd.
              </p>
              <div>
                <a
                  href="https://www.orikma.lk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary min-h-[48px]"
                  aria-label="Visit the Orikma Ref and Trading website — opens in a new tab"
                >
                  Visit Website
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
          </div>
        </article>
      </div>
    </section>
  );
}
