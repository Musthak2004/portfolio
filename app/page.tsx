import Link from "next/link";
import { Container, SectionHeading, CTASection, StatusBadge } from "@/components/ui/primitives";
import { ProjectCard, ProductCard, SolutionCard, ArticleCard } from "@/components/cards";
import { projects } from "@/content/work";
import { solutions } from "@/content/solutions";
import { products } from "@/content/products";
import { articles } from "@/content/labs-insights";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "MS Bee — Software + AI Systems",
  description:
    "MS Bee builds software, AI automation systems, custom digital solutions, micro-SaaS products, and digital products. Founder-led by Ruwaisdeen Muhammad Musthak.",
  path: "/",
});

export default function HomePage() {
  const selectedWork = projects.slice(0, 3);

  return (
    <>
      {/* 1. HERO */}
      <section aria-labelledby="hero-heading" className="relative min-h-[92vh] flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0 bg-grid" aria-hidden="true" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(600px,90vw)] h-[400px] bg-accent-glow rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
        <Container>
          <div className="relative z-10 max-w-3xl py-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-surface-border bg-surface-light/50 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
              <span className="font-mono text-xs text-ink-muted tracking-wide">
                <span className="text-accent">$</span> ms-bee --whoami
              </span>
            </div>
            <p className="eyebrow-pill mb-6">MS Bee · Software + AI Systems</p>
            <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink leading-[1.08] tracking-tight text-balance mb-6">
              Software and AI systems for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">
                business problems worth solving.
              </span>
            </h1>
            <p className="text-ink-muted text-base sm:text-lg max-w-2xl mb-10 leading-relaxed text-balance">
              MS Bee designs and builds web applications, AI automations, custom software and
              micro-SaaS products — founder-led, systems-first, built to scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/start-project" className="btn-primary justify-center min-h-[48px]">
                Start a Project →
              </Link>
              <Link href="/work" className="btn-outline justify-center min-h-[48px]">
                Explore Work
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. PROOF STRIP */}
      <section aria-label="Proof" className="border-y border-surface-border bg-[#0A0A12]">
        <Container className="py-8">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              ["Live client site", "orikma.lk — industrial HVAC"],
              ["Live micro-SaaS", "CleanSched — bookings + invoicing"],
              ["Live digital product", "DevShield — client-protection kit"],
              ["Live automation", "AI lead follow-up + Loom demo"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent mb-1">{k}</dt>
                <dd className="text-sm text-ink-muted">{v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* 3. WHAT MS BEE BUILDS */}
      <section aria-labelledby="builds-heading" className="py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="/what-ms-bee-builds"
            title="What MS Bee builds"
            desc="Four tracks, one standard: practical systems that ship and can be extended."
            id="builds-heading"
          />
          <div className="grid sm:grid-cols-2 gap-4">
            {solutions.slice(0, 4).map((s, i) => (
              <SolutionCard key={s.slug} solution={s} />
            ))}
          </div>
        </Container>
      </section>

      {/* 4. SELECTED WORK */}
      <section aria-labelledby="work-heading" className="py-24 md:py-32 bg-[#0A0A12]">
        <Container>
          <SectionHeading
            eyebrow="/work"
            title="Selected client work"
            desc="Real builds first. Every project has a case study — problem, solution, outcome."
            id="work-heading"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {selectedWork.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
          <Link href="/work" className="btn-outline min-h-[48px]">View all work →</Link>
        </Container>
      </section>

      {/* 5. PRODUCTS */}
      <section aria-labelledby="products-heading" className="py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="/products"
            title="Products built by MS Bee"
            desc="Separate from client work — internal products designed, built and launched by the company."
            id="products-heading"
          />
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
          <Link href="/products" className="btn-outline min-h-[48px]">View all products →</Link>
        </Container>
      </section>

      {/* 6. AUTOMATION */}
      <section aria-labelledby="auto-heading" className="py-24 md:py-32 bg-[#0A0A12]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="section-label">/automation</p>
              <h2 id="auto-heading" className="section-heading mb-4">Business workflows that run themselves.</h2>
              <p className="section-desc mb-8">
                Lead follow-up, AI responses, email + SMS — demonstrated end to end.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/solutions/ai-automation" className="btn-primary justify-center min-h-[48px]">AI Automation →</Link>
                <Link href="/work/ai-lead-follow-up-system" className="btn-outline justify-center min-h-[48px]">See the system</Link>
              </div>
            </div>
            <ol className="space-y-2">
              {["Lead", "AI Response", "Email Follow-Up", "SMS Follow-Up"].map((s, i) => (
                <li key={s} className="flex items-center gap-3 border border-surface-border bg-surface-light/60 px-4 py-3">
                  <span className="font-mono text-[10px] text-accent border border-accent/20 bg-accent/5 px-2 py-0.5">0{i + 1}</span>
                  <span className="text-sm text-ink">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* 7. HOW MS BEE WORKS */}
      <section aria-labelledby="how-heading" className="py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="/process" title="How MS Bee works" desc="Scoped small, built to be extended." id="how-heading" />
          <ol className="grid sm:grid-cols-3 gap-4">
            {[
              ["01", "Scope", "Define the problem, the user, and the single conversion goal."],
              ["02", "Build", "Design and ship the smallest working system."],
              ["03", "Extend", "Add modules, content and products without rewrites."],
            ].map(([n, t, d]) => (
              <li key={n} className="card p-6 md:p-7">
                <span className="font-mono text-[10px] text-ink-dim border border-surface-border px-2 py-1">{n}</span>
                <h3 className="font-semibold text-ink mt-4 mb-2">{t}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{d}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* 8. BUILDING IN PUBLIC */}
      <section aria-labelledby="now-heading" className="py-24 md:py-32 bg-[#0A0A12]">
        <Container>
          <SectionHeading eyebrow="/now" title="Building in public" desc="The company, in progress — honestly labelled." id="now-heading" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              ["MS Bee", "Software + AI", "BUILDING", "accent"],
              ["CleanSched", "Micro-SaaS", "LIVE", "green"],
              ["DevShield", "Digital Product", "LIVE", "green"],
              ["Lead Follow-Up", "Automation", "LIVE", "green"],
            ].map(([name, desc, status]) => (
              <div key={name as string} className="card p-6">
                <div className="mb-5"><StatusBadge label={status as string} tone={status === "LIVE" ? "green" : "accent"} /></div>
                <h3 className="text-lg font-bold text-ink mb-1">{name}</h3>
                <p className="text-sm text-ink-muted">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8"><Link href="/labs" className="btn-outline min-h-[48px]">Visit Labs →</Link></div>
        </Container>
      </section>

      {/* 9. INSIGHTS */}
      <section aria-labelledby="insights-heading" className="py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="/insights" title="Insights" desc="Notes on automation, software and building a company from zero." id="insights-heading" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {articles.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
          <Link href="/insights" className="btn-outline min-h-[48px]">Read all insights →</Link>
        </Container>
      </section>

      {/* 10. FINAL CTA */}
      <CTASection />
    </>
  );
}
