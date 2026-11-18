import Link from "next/link";
import { Container, PageHero } from "@/components/ui/primitives";
import JsonLd from "@/components/ui/JsonLd";
import StartProjectForm from "@/components/forms/StartProjectForm";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { pageMeta, siteCanonical } from "@/lib/site";

export const metadata = pageMeta({
  title: "Start a Project",
  description:
    "Tell MS Bee what you're trying to build, automate, or launch. A structured project brief — not a generic contact form.",
  path: "/start-project",
});

const steps = [
  {
    n: "01",
    title: "Brief reviewed",
    body: "Every submission is read personally. No autoresponder sequence, no sales call gate.",
  },
  {
    n: "02",
    title: "Clarifying questions",
    body: "If the problem or constraints are unclear, you get direct questions before any scope is proposed.",
  },
  {
    n: "03",
    title: "Scope + quote",
    body: "A defined scope, timeline and price — agreed before build starts. No open-ended hourly drift.",
  },
  {
    n: "04",
    title: "Build + handover",
    body: "Working software early, clean handover at the end. You keep the code and the accounts.",
  },
];

export default function StartProjectPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageNode({
            name: "Start a Project — MS Bee",
            description:
              "A structured project brief for new work with MS Bee — web, AI automation, custom software and digital products.",
            path: "/start-project",
            breadcrumbId: `${siteCanonical("/start-project")}#breadcrumb`,
          }),
          breadcrumbNode({ items: [{ label: "Home", href: "/" }, { label: "Start a Project" }], path: "/start-project" }),
        ])}
      />
      <PageHero
        eyebrow="Start a project"
        index="01"
        title="Have a business problem worth building?"
        desc="Answer a few structured questions. MS Bee reviews every brief personally and replies with next steps or clarifying questions — no generic sales funnel."
        breadcrumbs={[{ label: "Start a Project" }]}
        meta={[
          { label: "Response", value: "Personal review" },
          { label: "Engagement", value: "Fixed scope first" },
          { label: "Work type", value: "Web · AI · Software" },
          { label: "Contact", value: "Direct to founder" },
        ]}
      />

      <section className="section-tight">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7 xl:col-span-8">
              <p className="section-label">
                <span className="text-accent">$</span> Project brief
              </p>
              <h2 className="mb-6 text-2xl font-semibold tracking-[-0.03em] text-ink md:text-3xl">
                Tell MS Bee what needs to change.
              </h2>
              <p className="mb-8 max-w-xl text-sm leading-relaxed text-ink-muted">
                The brief is structured so the problem, constraints and expected outcome are
                clear before anything is designed. Fields marked * are required.
              </p>
              <StartProjectForm />
            </div>

            <aside className="lg:col-span-5 xl:col-span-4">
              <div className="lg:sticky lg:top-24">
                <div className="border border-surface-border bg-surface">
                  <div className="border-b border-surface-border px-5 py-4">
                    <p className="meta-label">What happens next</p>
                  </div>
                  <ol className="divide-y divide-surface-border">
                    {steps.map((s) => (
                      <li key={s.n} className="px-5 py-4">
                        <div className="flex items-baseline gap-3">
                          <span className="font-mono text-[10px] text-accent">{s.n}</span>
                          <p className="text-sm font-medium text-ink">{s.title}</p>
                        </div>
                        <p className="mt-1.5 pl-6 text-xs leading-relaxed text-ink-muted">{s.body}</p>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="mt-4 border border-surface-border bg-surface p-5">
                  <p className="meta-label">Prefer direct contact?</p>
                  <a
                    href="mailto:musthakcool55@gmail.com"
                    className="mt-2 inline-flex min-h-[40px] items-center gap-2 break-all text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                  >
                    musthakcool55@gmail.com <span aria-hidden="true">↗</span>
                  </a>
                  <p className="mt-3 text-xs leading-relaxed text-ink-muted">
                    Already know exactly what you need? Email with the problem and constraints
                    and skip the form.
                  </p>
                </div>

                <div className="mt-4 border border-signal/20 bg-signal-dim p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal">
                    Not a fit
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                    MS Bee does not take every project. If the scope or budget does not fit, you
                    get a straight answer rather than a slow no.
                  </p>
                  <Link href="/work" className="mt-3 inline-flex min-h-[40px] items-center gap-2 text-xs font-medium text-ink transition-colors hover:text-accent-hover">
                    See the work first <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
