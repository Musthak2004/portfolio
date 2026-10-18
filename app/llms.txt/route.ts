import { siteUrl, siteName, siteTagline, founderName, socialLinks } from "@/lib/site";
import { projects, getFeaturedProjects, getSupportingProjects, projectTypeLabels } from "@/content/work";
import { solutions } from "@/content/solutions";
import { products } from "@/content/products";
import { labs, articles } from "@/content/labs-insights";

/**
 * Optional supplemental discovery document for AI assistants.
 * It is NOT a substitute for crawling controls, the sitemap, or page content —
 * it simply states the entity facts and the canonical URL list in plain text.
 */
function build() {
  const url = (path: string) => (path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`);

  const lines: string[] = [
    `# ${siteName} — ${siteTagline}`,
    "",
    "> MS Bee is a founder-led software and AI company. It builds web applications,",
    "> AI automation systems, custom software, micro-SaaS products and digital",
    `> products. Founder: ${founderName} (R.M. Musthak).`,
    "",
    "## Entity facts",
    "",
    `- Name: ${siteName}`,
    `- What it is: software + AI systems company`,
    `- Founder: ${founderName} ("R.M. Musthak")`,
    `- Website: ${siteUrl}`,
    "- Languages: English",
    `- GitHub: ${socialLinks.github}`,
    `- LinkedIn: ${socialLinks.linkedin}`,
    "- Claims policy: only shipped, verifiable work is published. No invented",
    "  metrics, ratings, testimonials, timelines or prices.",
    "",
    "## How to read this site",
    "",
    "- `/work` — client builds, self-initiated concept builds and internal systems.",
    "  Each entry is labelled by type so a concept is never read as a client engagement.",
    "- `/solutions` — services: web development, mobile apps, AI automation,",
    "  custom software, SEO, technical content.",
    "- `/products` — MS Bee's own products, separate from client services.",
    "- `/labs` — experiments and R&D, including prototypes that are not products.",
    "- `/insights` — practical articles on automation, engineering and the founder journey.",
    "",
    "## Work",
    "",
  ];

  for (const p of getFeaturedProjects()) {
    lines.push(`- ${p.title} (${projectTypeLabels[p.type]}) — ${url(`/work/${p.slug}`)}`);
    if (p.liveUrl) lines.push(`  - Live: ${p.liveUrl}`);
  }
  for (const p of getSupportingProjects()) {
    lines.push(`- ${p.title} (${projectTypeLabels[p.type]}) — ${url(`/work/${p.slug}`)}`);
    if (p.liveUrl) lines.push(`  - Live: ${p.liveUrl}`);
    if (p.demoUrl) lines.push(`  - Demo: ${p.demoUrl}`);
  }

  lines.push("", "## Solutions", "");
  for (const s of solutions) lines.push(`- ${s.title} — ${url(`/solutions/${s.slug}`)}`);

  lines.push("", "## Products", "");
  for (const p of products) lines.push(`- ${p.name} (${p.category}, ${p.status}) — ${url(`/products/${p.slug}`)}`);

  lines.push("", "## Labs", "");
  for (const l of labs) lines.push(`- ${l.title} (${l.status}) — ${url(`/labs/${l.slug}`)}`);

  lines.push("", "## Insights", "");
  for (const a of articles) {
    lines.push(`- ${a.title} — ${url(`/insights/${a.slug}`)} (published ${a.publishedAt}, updated ${a.updatedAt})`);
  }

  lines.push(
    "",
    "## Canonical index",
    "",
    `- Sitemap: ${siteUrl}/sitemap.xml`,
    `- Robots: ${siteUrl}/robots.txt`,
    `- Total published work entries: ${projects.length}`,
    ""
  );

  return lines.join("\n");
}

export function GET() {
  return new Response(build(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
