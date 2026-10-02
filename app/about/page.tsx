import Link from "next/link";
import { Container, PageHero, CTASection } from "@/components/ui/primitives";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "About — MS Bee",
  description: "MS Bee is a founder-led software + AI company built by Ruwaisdeen Muhammad Musthak — client solutions, products, experiments and content.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ms-bee about"
        title="About MS Bee"
        desc="A serious technology company being built by a founder — honest about today, architected for tomorrow."
      />
      <section className="pb-24">
        <Container>
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <div className="md:sticky md:top-24">
                <div className="aspect-square max-w-xs border border-surface-border overflow-hidden bg-surface-light relative">
                  <img src="/assets/photo.jpg" alt="Portrait of R.M. Musthak, founder of MS Bee" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: "linear-gradient(135deg, rgba(200,205,255,0.10) 0%, transparent 40%), linear-gradient(250deg, rgba(232,179,75,0.10) 0%, transparent 35%), linear-gradient(180deg, transparent 55%, rgba(4,4,8,0.55) 100%)" }} />
                </div>
                <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-dim mt-3">Musthak — founder & builder</p>
              </div>
            </div>
            <div className="md:col-span-3 space-y-6 max-w-2xl">
              <div className="card p-6 md:p-8">
                <p className="font-mono text-xs text-accent mb-3">MISSION</p>
                <p className="text-ink leading-relaxed">Build practical software and AI systems that help small businesses work smarter — and grow MS Bee into a company that ships products, not just projects.</p>
              </div>
              <div className="card p-6 md:p-8">
                <p className="font-mono text-xs text-accent mb-3">WHAT WE ARE BUILDING</p>
                <p className="text-ink-muted leading-relaxed">Client solutions (web, automation, custom software) fund and inform internal products (CleanSched, DevShield), while Labs tests what comes next. Insights documents the journey.</p>
              </div>
              <div className="card p-6 md:p-8">
                <p className="font-mono text-xs text-accent mb-3">FOUNDER</p>
                <h2 className="text-xl font-bold text-ink mb-2">Ruwaisdeen Muhammad Musthak</h2>
                <p className="text-ink-muted leading-relaxed mb-4">Founder & builder. Work spans high-performance websites, AI workflows and automation, and small products — using Next.js, TypeScript, Python and modern automation tools.</p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://github.com/Musthak2004" target="_blank" rel="noopener noreferrer" className="btn-outline text-sm px-5 py-2.5 min-h-[44px]">GitHub</a>
                  <a href="https://linkedin.com/in/rm-musthak" target="_blank" rel="noopener noreferrer" className="btn-outline text-sm px-5 py-2.5 min-h-[44px]">LinkedIn</a>
                </div>
              </div>
              <div className="card p-6 md:p-8">
                <p className="font-mono text-xs text-accent mb-3">TECHNOLOGY PHILOSOPHY</p>
                <p className="text-ink-muted leading-relaxed">Lead with the problem and the outcome — technology second. Small scopes that ship. Systems that can be extended without rewrites. Verified claims only.</p>
              </div>
              <div className="card p-6 md:p-8">
                <p className="font-mono text-xs text-accent mb-3">CURRENT DIRECTION → FUTURE VISION</p>
                <p className="text-ink-muted leading-relaxed">Today: founder-led builds. Next: product revenue alongside services, a public content engine, then admin + client-portal layers on the same data models. Infrastructure before scale.</p>
                <div className="flex flex-wrap gap-3 mt-5">
                  <Link href="/labs" className="btn-outline text-sm px-5 py-2.5 min-h-[44px]">Visit Labs</Link>
                  <Link href="/start-project" className="btn-primary text-sm px-5 py-2.5 min-h-[44px]">Start a Project →</Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
