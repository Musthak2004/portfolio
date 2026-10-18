import type { MetadataRoute } from "next";
import { projects } from "@/content/work";
import { solutions } from "@/content/solutions";
import { products } from "@/content/products";
import { labs, articles } from "@/content/labs-insights";
import { siteUrl } from "@/lib/site";

/** Newest content date in the site, used as the fallback for index routes. */
function latestDate(dates: string[]) {
  const valid = dates.filter(Boolean).map((d) => new Date(d)).filter((d) => !Number.isNaN(d.getTime()));
  if (!valid.length) return new Date();
  return new Date(Math.max(...valid.map((d) => d.getTime())));
}

/** Parse "YYYY-MM-DD" as UTC midnight so the sitemap never drifts by timezone. */
function utc(date: string) {
  return new Date(`${date}T00:00:00Z`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteLatest = latestDate([
    ...projects.map((p) => p.updatedAt ?? p.publishedAt),
    ...articles.map((a) => a.updatedAt),
    ...labs.map((l) => l.updatedAt),
  ]);

  // Only genuinely public, canonical routes. No drafts, no utility routes,
  // no admin surface, nothing that redirects.
  const staticRoutes: { path: string; priority: number; lastModified: Date }[] = [
    { path: "/", priority: 1, lastModified: siteLatest },
    { path: "/work", priority: 0.9, lastModified: siteLatest },
    { path: "/solutions", priority: 0.8, lastModified: siteLatest },
    { path: "/products", priority: 0.8, lastModified: siteLatest },
    { path: "/labs", priority: 0.6, lastModified: latestDate(labs.map((l) => l.updatedAt)) },
    { path: "/insights", priority: 0.7, lastModified: latestDate(articles.map((a) => a.updatedAt)) },
    { path: "/about", priority: 0.7, lastModified: siteLatest },
    { path: "/start-project", priority: 0.8, lastModified: siteLatest },
  ];

  const dynamicRoutes: { path: string; priority: number; lastModified: Date }[] = [
    ...projects.map((p) => ({
      path: `/work/${p.slug}`,
      priority: p.featured ? 0.9 : 0.6,
      lastModified: utc(p.updatedAt ?? p.publishedAt),
    })),
    ...solutions.map((s) => ({ path: `/solutions/${s.slug}`, priority: 0.7, lastModified: siteLatest })),
    ...products.map((p) => ({ path: `/products/${p.slug}`, priority: 0.7, lastModified: siteLatest })),
    ...labs.map((l) => ({ path: `/labs/${l.slug}`, priority: 0.5, lastModified: utc(l.updatedAt) })),
    ...articles.map((a) => ({ path: `/insights/${a.slug}`, priority: 0.6, lastModified: utc(a.updatedAt) })),
  ];

  return [...staticRoutes, ...dynamicRoutes].map(({ path, priority, lastModified }) => ({
    url: path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority,
  }));
}
