import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Breadcrumbs, StatusBadge, CTASection } from "@/components/ui/primitives";
import { labs, getLab, getArticle } from "@/content/labs-insights";
import { getProduct } from "@/content/products";
import { pageMeta } from "@/lib/site";

export function generateStaticParams() {
  return labs.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const l = getLab(params.slug);
  if (!l) return {};
  return pageMeta({ title: `${l.title} — MS Bee Labs`, description: l.idea, path: `/labs/${l.slug}` });
}

export default function LabPage({ params }: { params: { slug: string } }) {
  const l = getLab(params.slug);
  if (!l) notFound();
  const product = l.relatedProduct ? getProduct(l.relatedProduct) : undefined;
  const article = l.relatedArticle ? getArticle(l.relatedArticle) : undefined;

  return (
    <>
      <div className="pt-28 md:pt-36 pb-10">
        <Container>
          <Breadcrumbs items={[{ label: "Labs", href: "/labs" }, { label: l.title }]} />
          <div className="mb-4"><StatusBadge label={l.status} tone={l.status === "Live" ? "green" : l.status === "Archived" ? "dim" : "amber"} /></div>
          <h1 className="text-3xl md:text-5xl font-bold text-ink tracking-tight mb-4">{l.title}</h1>
          <p className="text-ink-muted max-w-2xl leading-relaxed">{l.idea}</p>
          <p className="font-mono text-xs text-ink-dim mt-4">Updated {l.updatedAt}</p>
          {l.demoUrl && <a href={l.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 min-h-[48px]">Watch Demo →</a>}
        </Container>
      </div>
      <section className="py-12">
        <Container>
          <div className="max-w-3xl space-y-6">
            <div className="card p-6 md:p-8">
              <p className="font-mono text-xs text-accent mb-3">PROBLEM → IDEA</p>
              <p className="text-sm text-ink-muted leading-relaxed mb-2"><span className="text-ink">Problem:</span> {l.problem}</p>
              <p className="text-sm text-ink-muted leading-relaxed"><span className="text-ink">Idea:</span> {l.idea}</p>
            </div>
            <div className="card p-6 md:p-8">
              <p className="font-mono text-xs text-accent mb-4">WHAT WAS LEARNED</p>
              <ul className="space-y-2">{l.learned.map((x) => <li key={x} className="text-sm text-ink-muted flex gap-2"><span className="text-accent">▹</span>{x}</li>)}</ul>
            </div>
            {(product || article) && (
              <div className="card p-6 md:p-8 border-accent/25">
                <p className="font-mono text-xs text-accent mb-3">RELATED</p>
                {product && <Link href={`/products/${product.slug}`} className="block text-ink font-medium hover:text-accent-hover mb-2">Product: {product.name} →</Link>}
                {article && <Link href={`/insights/${article.slug}`} className="block text-ink font-medium hover:text-accent-hover">Article: {article.title} →</Link>}
              </div>
            )}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
