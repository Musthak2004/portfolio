import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Breadcrumbs, CTASection } from "@/components/ui/primitives";
import { articles, getArticle } from "@/content/labs-insights";
import { getSolution } from "@/content/solutions";
import { getProject } from "@/content/work";
import { getProduct } from "@/content/products";
import { pageMeta } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const a = getArticle(params.slug);
  if (!a) return {};
  return pageMeta({ title: `${a.title} — MS Bee Insights`, description: a.excerpt, path: `/insights/${a.slug}` });
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const a = getArticle(params.slug);
  if (!a) notFound();
  const solution = a.relatedSolution ? getSolution(a.relatedSolution) : undefined;
  const work = a.relatedWork ? getProject(a.relatedWork) : undefined;
  const product = a.relatedProduct ? getProduct(a.relatedProduct) : undefined;

  return (
    <>
      <article className="pt-28 md:pt-36 pb-10">
        <Container>
          <Breadcrumbs items={[{ label: "Insights", href: "/insights" }, { label: a.title }]} />
          <p className="font-mono text-xs text-accent mb-3">{a.category} · {a.readingMinutes} min read</p>
          <h1 className="text-3xl md:text-5xl font-bold text-ink tracking-tight mb-4 max-w-3xl text-balance">{a.title}</h1>
          <p className="text-ink-muted max-w-2xl leading-relaxed mb-4">{a.excerpt}</p>
          <p className="font-mono text-xs text-ink-dim">By {a.author} · Published {a.publishedAt} · Updated {a.updatedAt}</p>
        </Container>
      </article>
      <section className="pb-12">
        <Container>
          <div className="max-w-3xl">
            <div className="space-y-5">
              {a.body.map((para, i) => (
                <p key={i} className={`leading-relaxed ${i === 0 ? "text-lg text-ink" : "text-ink-muted"}`}>{para}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5 mt-8">
              {a.tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
            {(solution || work || product) && (
              <div className="card p-6 md:p-8 mt-10 border-accent/25">
                <p className="font-mono text-xs text-accent mb-3">KEEP EXPLORING</p>
                <div className="space-y-2">
                  {solution && <Link href={`/solutions/${solution.slug}`} className="block text-ink font-medium hover:text-accent-hover">Solution: {solution.title} →</Link>}
                  {work && <Link href={`/work/${work.slug}`} className="block text-ink font-medium hover:text-accent-hover">Case study: {work.title} →</Link>}
                  {product && <Link href={`/products/${product.slug}`} className="block text-ink font-medium hover:text-accent-hover">Product: {product.name} →</Link>}
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
