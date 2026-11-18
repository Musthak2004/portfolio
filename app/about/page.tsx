import Link from "next/link";
import { CTASection, PageHero } from "@/components/ui/primitives";
import JsonLd from "@/components/ui/JsonLd";
import Reveal from "@/components/motion/Reveal";
import { breadcrumbNode, graph, profilePageNode, webPageNode } from "@/lib/schema";
import { pageMeta, siteCanonical } from "@/lib/site";

export const metadata = pageMeta({
  title: "About",
  description:
    "MS Bee is a founder-led software + AI company built by Ruwaisdeen Muhammad Musthak — client solutions, products, experiments and content.",
  path: "/about",
});

const principles = [
  {
    n: "01",
    title: "Problem before technology",
    body: "The outcome is agreed first. The stack is chosen to serve it, not to sound impressive in a proposal.",
  },
  {
    n: "02",
    title: "Small scopes that ship",
    body: "One workflow, one user, one conversion goal. Working software early beats a large plan that never lands.",
  },
  {
    n: "03",
    title: "No invented evidence",
    body: "No fabricated metrics, testimonials or client logos. Work is shown with real screenshots and stated constraints.",
  },
  {
    n: "04",
    title: "Build to extend",
    body: "Structured content and clean data models, so the next feature is an addition rather than a rewrite.",
  },
];

const direction = [
  {
    label: "Today",
    title: "Founder-led builds",
    body: "Client systems, AI automation and internal products — designed, built and shipped by one accountable person.",
  },
  {
    label: "Next",
    title: "Products alongside services",
    body: "CleanSched and DevShield grow as real products, with usage informing what gets built next.",
  },
  {
    label: "Then",
    title: "Company infrastructure",
    body: "Admin and client-portal layers on the same content models — added without rebuilding the public site.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageNode({
            name: "About MS Bee",
            description:
              "MS Bee is a founder-led software + AI company built by Ruwaisdeen Muhammad Musthak.",
            path: "/about",
            breadcrumbId: `${siteCanonical("/about")}#breadcrumb`,
          }),
          breadcrumbNode({ items: [{ label: "Home", href: "/" }, { label: "About" }], path: "/about" }),
          profilePageNode(),
        ])}
      />
      <PageHero
        eyebrow="About"
        index="01"
        title="A company, built in public."
        desc="MS Bee is a founder-led software and AI company. Today it is one builder, a small set of live client systems and two shipped products — stated plainly instead of dressed up as an agency."
        breadcrumbs={[{ label: "About" }]}
        meta={[
          { label: "Model", value: "Founder-led" },
          { label: "Focus", value: "Software + AI systems" },
          { label: "Client builds", value: "2 live" },
          { label: "Products", value: "2 shipped" },
        ]}
      />

      <section className="section-tight">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="lg:sticky lg:top-24">
                  <div className="relative max-w-[460px] lg:mx-0">
                    <div className="absolute -left-3 -top-3 h-20 w-20 border-l border-t border-accent/35" aria-hidden="true" />
                    <div className="absolute -bottom-3 -right-3 h-20 w-20 border-b border-r border-surface-strong" aria-hidden="true" />
                    <div className="relative aspect-[4/5] overflow-hidden border border-surface-border bg-surface-light">
                      <img
                        src="/images/founder/musthak.webp"
                        alt="Portrait of Ruwaisdeen Muhammad Musthak, founder and builder of MS Bee"
                        width={896}
                        height={1195}
                        loading="eager"
                        decoding="async"
                        className="h-full w-full object-cover object-[50%_22%]"
                      />
                      <div
                        className="pointer-events-none absolute inset-0"
                        aria-hidden="true"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(200,205,255,0.10) 0%, transparent 40%), linear-gradient(250deg, rgba(232,179,75,0.10) 0%, transparent 35%), linear-gradient(180deg, transparent 55%, rgba(4,4,8,0.6) 100%)",
                        }}
                      />
                      <div className="absolute left-4 top-4 border border-white/15 bg-black/40 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white/70 backdrop-blur-sm" aria-hidden="true">
                        MSBEE / FOUNDER-01
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 max-w-[460px]">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-dim">
                      Ruwaisdeen Muhammad Musthak
                    </p>
                    <p className="mt-1 text-sm text-ink-muted">Founder &amp; builder — MS Bee</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <a
                        href="https://github.com/Musthak2004"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline min-h-[44px] px-4 py-2.5 text-xs"
                      >
                        GitHub <span aria-hidden="true">↗</span>
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                      <a
                        href="https://linkedin.com/in/rm-musthak"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline min-h-[44px] px-4 py-2.5 text-xs"
                      >
                        LinkedIn <span aria-hidden="true">↗</span>
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                      <a href="mailto:musthakcool55@gmail.com" className="btn-outline min-h-[44px] px-4 py-2.5 text-xs">
                        Email
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="space-y-12 lg:col-span-7">
              <Reveal>
                <section className="border-t border-surface-border pt-8">
                  <div className="mb-5 flex items-baseline gap-4">
                    <span className="index-number">01</span>
                    <h2 className="text-xl font-semibold tracking-[-0.025em] text-ink md:text-2xl">Mission</h2>
                  </div>
                  <p className="max-w-2xl text-[16px] leading-[1.85] text-ink-muted md:text-[17px]">
                    Build practical software and AI systems that help small businesses work
                    better — and grow MS Bee into a company that ships products, not only projects.
                  </p>
                </section>
              </Reveal>

              <Reveal>
                <section className="border-t border-surface-border pt-8">
                  <div className="mb-5 flex items-baseline gap-4">
                    <span className="index-number">02</span>
                    <h2 className="text-xl font-semibold tracking-[-0.025em] text-ink md:text-2xl">What is being built</h2>
                  </div>
                  <p className="max-w-2xl text-[15px] leading-[1.85] text-ink-muted">
                    Client solutions in web, automation and custom software fund and inform
                    internal products. Labs tests what comes next in public. Insights documents
                    the decisions — including the ones that did not work.
                  </p>
                  <div className="mt-6 grid gap-px border border-surface-border bg-surface-border sm:grid-cols-3">
                    {[
                      ["Client", "Web + AI systems", "/work"],
                      ["Products", "CleanSched, DevShield", "/products"],
                      ["Labs", "Experiments in public", "/labs"],
                    ].map(([label, value, href]) => (
                      <Link key={label} href={href} className="group bg-[#08080F] p-5 transition-colors hover:bg-surface-light">
                        <p className="meta-label">{label}</p>
                        <p className="mt-2 text-sm text-ink transition-colors group-hover:text-accent-hover">{value}</p>
                      </Link>
                    ))}
                  </div>
                </section>
              </Reveal>

              <Reveal>
                <section className="border-t border-surface-border pt-8">
                  <div className="mb-5 flex items-baseline gap-4">
                    <span className="index-number">03</span>
                    <h2 className="text-xl font-semibold tracking-[-0.025em] text-ink md:text-2xl">Founder</h2>
                  </div>
                  <p className="max-w-2xl text-[15px] leading-[1.85] text-ink-muted">
                    Musthak is the founder and the builder. Work spans high-performance websites,
                    AI workflows and automation, and small products — using Next.js, TypeScript,
                    Python and modern automation tooling. MS Bee is the company being built around
                    that work, not a team pretending to already exist.
                  </p>
                </section>
              </Reveal>

              <Reveal>
                <section className="border-t border-surface-border pt-8">
                  <div className="mb-6 flex items-baseline gap-4">
                    <span className="index-number">04</span>
                    <h2 className="text-xl font-semibold tracking-[-0.025em] text-ink md:text-2xl">Operating principles</h2>
                  </div>
                  <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                    {principles.map((p) => (
                      <div key={p.n}>
                        <span className="font-mono text-[10px] text-accent">{p.n}</span>
                        <h3 className="mt-2 text-base font-medium text-ink">{p.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.body}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </Reveal>

              <Reveal>
                <section className="border-t border-surface-border pt-8">
                  <div className="mb-6 flex items-baseline gap-4">
                    <span className="index-number">05</span>
                    <h2 className="text-xl font-semibold tracking-[-0.025em] text-ink md:text-2xl">Direction</h2>
                  </div>
                  <ol className="space-y-0">
                    {direction.map((d, i) => (
                      <li key={d.label} className="grid gap-2 border-b border-surface-border py-5 sm:grid-cols-12">
                        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent sm:col-span-2">
                          {d.label}
                        </span>
                        <span className="text-sm font-medium text-ink sm:col-span-3">{d.title}</span>
                        <p className="text-sm leading-relaxed text-ink-muted sm:col-span-7">{d.body}</p>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link href="/start-project" className="btn-primary btn-sweep min-h-[48px]">
                      Start a Project <span aria-hidden="true">→</span>
                    </Link>
                    <Link href="/labs" className="btn-outline min-h-[48px]">
                      Visit Labs
                    </Link>
                  </div>
                </section>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="One accountable builder. No handoff."
        desc="If the fit is right, MS Bee scopes the work, builds it, and hands over clean. Direct communication throughout."
      />
    </>
  );
}
