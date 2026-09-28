const capabilities = [
  "Automated email replies",
  "AI-generated messages",
  "Lead follow-up",
  "SMS follow-up",
];

const flow = ["Lead", "AI Response", "Email Follow-Up", "SMS Follow-Up"];

export default function Automation() {
  return (
    <section
      id="automation"
      aria-labelledby="automation-heading"
      className="py-24 md:py-32 bg-[#0A0A12] scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-12 md:mb-16">
          <p className="section-label">/automation</p>
          <h2 id="automation-heading" className="section-heading mb-4">
            Automation
          </h2>
          <p className="section-desc">
            Business workflows that run themselves.
          </p>
        </div>

        <article className="card overflow-hidden grid lg:grid-cols-2 gap-0">
          <div className="p-6 md:p-10 flex flex-col justify-center order-2 lg:order-none">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="font-mono text-[10px] tracking-[0.15em] text-accent border border-accent/20 bg-accent/5 px-2.5 py-1">
                MY AUTOMATION · AI WORKFLOW
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-ink mb-3">
              AI Email Lead Follow-Up System
            </h3>
            <p className="text-ink-muted leading-relaxed mb-5">
              An automated email lead follow-up workflow designed to respond
              to leads, generate AI-powered follow-up messages and continue
              lead engagement automatically.
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2 mb-7">
              {capabilities.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-2 text-sm text-ink-muted"
                >
                  <span className="text-accent mt-0.5 shrink-0" aria-hidden="true">
                    ▹
                  </span>
                  {c}
                </li>
              ))}
            </ul>
            <div>
              <a
                href="https://loom.com/share/329f152f43174149913f9dbc5855d69d"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary min-h-[48px]"
                aria-label="Watch the automation demo on Loom — opens in a new tab"
              >
                Watch Demo
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

          {/* Subtle workflow panel */}
          <div className="p-6 md:p-10 flex items-center bg-[#07070D] border-t lg:border-t-0 lg:border-l border-surface-border">
            <div className="w-full">
              <p className="font-mono text-[11px] text-ink-dim mb-4">
                <span className="text-accent">$</span> ms-bee run
                lead-followup
              </p>
              <ol className="space-y-2">
                {flow.map((s, idx) => (
                  <li
                    key={s}
                    className="flex items-center gap-3 border border-surface-border bg-surface-light/60 px-4 py-3"
                  >
                    <span className="font-mono text-[10px] text-accent border border-accent/20 bg-accent/5 px-2 py-0.5 shrink-0">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-ink">{s}</span>
                    {idx < flow.length - 1 && (
                      <span className="ml-auto text-accent" aria-hidden="true">
                        ↓
                      </span>
                    )}
                  </li>
                ))}
              </ol>
              <p className="font-mono text-[10px] text-ink-dim mt-3 text-center">
                // demonstrated workflow — see Loom demo
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
