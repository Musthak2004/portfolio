import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Breadcrumbs, CTASection, FAQ } from "@/components/ui/primitives";
import { ProjectCard } from "@/components/cards";
import { solutions, getSolution } from "@/content/solutions";
import { projects } from "@/content/work";
import { pageMeta } from "@/lib/site";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const s = getSolution(params.slug);
  if (!s) return {};
  return pageMeta({ title: `${s.title} — MS Bee`, description: s.tagline, path: `/solutions/${s.slug}` });
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const s = getSolution(params.slug);
  if (!s) notFound();
  const work = projects.filter((p) => s.relatedWork.includes(p.slug));

  return (
    <>
      <div className="pt-28 md:pt-36 pb-10">
        <Container>
          <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: s.title }]} />
          <p className="font-mono text-xs text-ink-muted mb-4"><span className="text-accent">$</span> ms-bee solutions/{s.slug}</p>
          <h1 className="text-3xl md:text-5xl font-bold text-ink tracking-tight mb-4">{s.title}</h1>
          <p className="text-lg md:text-xl text-accent-hover max-w-2xl mb-4">{s.tagline}</p>
          <p className="text-ink-muted max-w-2xl leading-relaxed">{s.description}</p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Link href="/start-project" className="btn-primary justify-center min-h-[48px]">Start a Project →</Link>
            <Link href="/work" className="btn-outline justify-center min-h-[48px]">See related work</Link>
          </div>
        </Container>
      </div>

      <section className="py-12">
        <Container>
          <div className="max-w-3xl space-y-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="card p-6 md:p-8">
                <p className="font-mono text-xs text-accent mb-4">PROBLEM</p>
                <ul className="space-y-2">{s.problems.map((x) => <li key={x} className="text-sm text-ink-muted flex gap-2"><span className="text-accent">▹</span>{x}</li>)}</ul>
              </div>
              <div className="card p-6 md:p-8 border-accent/25">
                <p className="font-mono text-xs text-accent mb-4">BUSINESS OUTCOME</p>
                <ul className="space-y-2">{s.outcomes.map((x) => <li key={x} className="text-sm text-ink-muted flex gap-2"><span className="text-emerald-400">✓</span>{x}</li>)}</ul>
              </div>
            </div>

            <div className="card p-6 md:p-8">
              <p className="font-mono text-xs text-accent mb-4">WHAT MS BEE BUILDS</p>
              <ul className="grid sm:grid-cols-2 gap-2">{s.capabilities.map((x) => <li key={x} className="text-sm text-ink-muted flex gap-2"><span className="text-accent">▹</span>{x}</li>)}</ul>
            </div>

            <div className="card p-6 md:p-8">
              <p className="font-mono text-xs text-accent mb-4">PROCESS</p>
              <ol className="space-y-3">
                {s.process.map((p, i) => (
                  <li key={p.step} className="flex gap-3">
                    <span className="font-mono text-[10px] text-accent border border-accent/20 bg-accent/5 px-2 py-0.5 h-fit shrink-0">0{i + 1}</span>
                    <div><p className="text-sm font-medium text-ink">{p.step}</p><p className="text-sm text-ink-muted">{p.detail}</p></div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="card p-6 md:p-8">
              <p className="font-mono text-xs text-accent mb-4">TECHNOLOGY & APPROACH</p>
              <div className="flex flex-wrap gap-1.5">{s.technologies.map((t) => <span key={t} className="tag">{t}</span>)}</div>
              <p className="font-mono text-xs text-accent mt-6 mb-2">WHO IT IS FOR</p>
              <p className="text-sm text-ink-muted">{s.whoFor.join(" · ")}</p>
            </div>

            {work.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-ink mb-4">Relevant work</h2>
                <div className="grid sm:grid-cols-2 gap-4">{work.map((p) => <ProjectCard key={p.slug} project={p} />)}</div>
              </div>
            )}

            {s.faqs.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-ink mb-4">FAQ</h2>
                <FAQ items={s.faqs} />
              </div>
            )}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
