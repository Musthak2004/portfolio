import type { MetadataRoute } from "next";
import { projects } from "@/content/work";
import { solutions } from "@/content/solutions";
import { products } from "@/content/products";
import { labs, articles } from "@/content/labs-insights";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://msbee.dpdns.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/work", "/solutions", "/products", "/labs", "/insights", "/about", "/start-project"];
  const dynamic: string[] = [
    ...projects.map((p) => `/work/${p.slug}`),
    ...solutions.map((s) => `/solutions/${s.slug}`),
    ...products.map((p) => `/products/${p.slug}`),
    ...labs.map((l) => `/labs/${l.slug}`),
    ...articles.map((a) => `/insights/${a.slug}`),
  ];
  return [...staticRoutes, ...dynamic].map((path) => ({
    url: `${siteUrl}${path || "/"}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
