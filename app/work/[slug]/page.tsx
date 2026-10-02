import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Breadcrumbs, StatusBadge, CTASection } from "@/components/ui/primitives";
import { ProjectCard } from "@/components/cards";
import { projects, getProject } from "@/content/work";
import { getSolution } from "@/content/solutions";
import { pageMeta } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug);
  if (!p) return {};
  return pageMeta({
    title: `${p.title} — Case Study · MS Bee`,
    description: p.description,
    path: `/work/${p.slug}`,
  });
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug);
  if (!p) notFound();
  const relatedSolution = p.relatedSolution ? getSolution(p.relatedSolution) : undefined;
  const next = projects.filter((x) => x.slug !== p.slug).slice(0, 2);
  const url = p.liveUrl ?? p.demoUrl;

  const sections: [string, string][] = [
    ["01 — Overview", p.description],
    ["02 — Client / Industry", `${p.type === "client" ? "Client project" : p.type === "demo" ? "Demo build" : "Internal system"} · ${p.industry}`],
    ["03 — Problem", p.problem],
    ["04 — Objective", p.objective],
    ["05 — Solution", p.solution],
  ];

  return (
    <>
      <div className="pt-28 md:pt-36 pb-10">
        <Container>
          <Breadcrumbs items={[{ label: "Work", href: "/work" }, { label: p.title }]} />
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <StatusBadge label={p.status} tone={p.status === "Live" ? "green" : "amber"} />
            <span className="font-mono text-[11px] text-accent">{p.category.join(" · ")}</span>
            <span className="font-mono text-[11px] text-ink-dim">{p.industry}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-ink tracking-tight mb-4">{p.title}</h1>
          <p className="text-ink-muted text-base md:text-lg max-w-2xl leading-relaxed">{p.description}</p>
          {url && (
            <a href={url} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 min-h-[48px]">
              {p.liveUrl ? "Visit Live Project" : "Watch Demo"} →
            </a>
          )}
        </Container>
      </div>

      <section className="py-12">
        <Container>
          <div className="max-w-3xl space-y-8">
            {sections.map(([h, body]) => (
              <div key={h} className="card p-6 md:p-8">
                <p className="font-mono text-xs text-accent mb-3">{h}</p>
                <p className="text-ink-muted leading-relaxed">{body}</p>
              </div>
            ))}
            <div className="card p-6 md:p-8">
              <p className="font-mono text-xs text-accent mb-3">06 — Key Features</p>
              <ul className="space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-ink-muted"><span className="text-accent">▹</span>{f}</li>
                ))}
              </ul>
            </div>
            <div className="card p-6 md:p-8">
              <p className="font-mono text-xs text-accent mb-3">07 — Technology</p>
              <div className="flex flex-wrap gap-1.5">
                {p.technologies.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="card p-6 md:p-8">
              <p className="font-mono text-xs text-accent mb-3">08 — Outcome</p>
              <p className="text-sm text-ink-muted leading-relaxed">
                Shipped and live. Qualitative outcome only — MS Bee does not publish unverified metrics.
                {url && <> See it live: <a className="text-accent hover:text-accent-hover" href={url} target="_blank" rel="noopener noreferrer">open project →</a></>}
              </p>
            </div>
            {relatedSolution && (
              <div className="card p-6 md:p-8 border-accent/25">
                <p className="font-mono text-xs text-accent mb-3">09 — Related Solution</p>
                <Link href={`/solutions/${relatedSolution.slug}`} className="font-semibold text-ink hover:text-accent-hover">
                  {relatedSolution.title} →
                </Link>
                <p className="text-sm text-ink-muted mt-2">{relatedSolution.tagline}</p>
              </div>
            )}
          </div>

          {next.length > 0 && (
            <div className="mt-16">
              <h2 className="section-heading mb-8 !text-2xl">Next project</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {next.map((n) => (
                  <ProjectCard key={n.slug} project={n} />
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
      <CTASection />
    </>
  );
}
