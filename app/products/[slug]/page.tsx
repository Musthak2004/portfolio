import { notFound } from "next/navigation";
import { Container, Breadcrumbs, StatusBadge, CTASection } from "@/components/ui/primitives";
import { products, getProduct } from "@/content/products";
import { pageMeta } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const p = getProduct(params.slug);
  if (!p) return {};
  return pageMeta({ title: `${p.name} — MS Bee Products`, description: p.description, path: `/products/${p.slug}` });
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = getProduct(params.slug);
  if (!p) notFound();

  return (
    <>
      <div className="pt-28 md:pt-36 pb-10">
        <Container>
          <Breadcrumbs items={[{ label: "Products", href: "/products" }, { label: p.name }]} />
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="font-mono text-[10px] tracking-[0.15em] text-accent border border-accent/20 bg-accent/5 px-2.5 py-1">{p.category.toUpperCase()}</span>
            <StatusBadge label={p.status} tone="green" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-ink tracking-tight mb-4">{p.name}</h1>
          <p className="text-ink-muted max-w-2xl leading-relaxed">{p.description}</p>
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 min-h-[48px]">{p.cta} →</a>
        </Container>
      </div>
      <section className="py-12">
        <Container>
          <div className="max-w-3xl space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="card p-6 md:p-8">
                <p className="font-mono text-xs text-accent mb-3">PROBLEM</p>
                <p className="text-sm text-ink-muted leading-relaxed">{p.problem}</p>
              </div>
              <div className="card p-6 md:p-8">
                <p className="font-mono text-xs text-accent mb-3">TARGET USER</p>
                <p className="text-sm text-ink-muted leading-relaxed">{p.targetUser}</p>
              </div>
            </div>
            <div className="card p-6 md:p-8">
              <p className="font-mono text-xs text-accent mb-4">CORE FEATURES</p>
              <ul className="grid sm:grid-cols-2 gap-2">{p.features.map((f) => <li key={f} className="text-sm text-ink-muted flex gap-2"><span className="text-accent">▹</span>{f}</li>)}</ul>
            </div>
            <div className="card p-6 md:p-8">
              <p className="font-mono text-xs text-accent mb-4">HOW IT WORKS</p>
              <ol className="space-y-2">{p.workflow.map((w, i) => <li key={w} className="flex gap-3 text-sm text-ink-muted"><span className="font-mono text-[10px] text-accent border border-accent/20 bg-accent/5 px-2 py-0.5 h-fit">0{i + 1}</span>{w}</li>)}</ol>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="card p-6 md:p-8">
                <p className="font-mono text-xs text-accent mb-3">PRICING / ACCESS</p>
                <p className="text-sm text-ink-muted">{p.pricing}</p>
              </div>
              <div className="card p-6 md:p-8">
                <p className="font-mono text-xs text-accent mb-3">CHANGELOG</p>
                {p.changelog.map((c) => <p key={c.version} className="text-sm text-ink-muted"><span className="font-mono text-accent">{c.version}</span> — {c.note}</p>)}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <CTASection primary={{ label: p.cta, href: p.url }} secondary={{ label: "All Products", href: "/products" }} />
    </>
  );
}
