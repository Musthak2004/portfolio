import type { Article, Product, Project, Solution } from "@/types";
import { founderName, founderShortName, siteCanonical, siteName, siteUrl, socialLinks } from "./site";

/**
 * JSON-LD builders.
 *
 * Rules held throughout:
 * - only describe content that is actually visible on the page
 * - only assert facts the site already states publicly
 * - no reviews, ratings, prices, offers or testimonials
 * - no invented addresses, coordinates or served areas
 */

const ORG_ID = `${siteUrl}/#organization`;
const FOUNDER_ID = `${siteUrl}/#founder`;
const SITE_ID = `${siteUrl}/#website`;

/** Stable ids so nodes can reference each other without duplication. */
export const schemaIds = { organization: ORG_ID, founder: FOUNDER_ID, website: SITE_ID };

export function organizationNode() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: siteName,
    url: siteUrl,
    description:
      "MS Bee is a founder-led software and AI company building web applications, AI automations, custom software and digital products.",
    founder: { "@id": FOUNDER_ID },
    sameAs: [socialLinks.github, socialLinks.linkedin],
  };
}

export function founderNode() {
  return {
    "@type": "Person",
    "@id": FOUNDER_ID,
    name: founderName,
    alternateName: founderShortName,
    jobTitle: "Founder & Builder",
    url: siteCanonical("/about"),
    worksFor: { "@id": ORG_ID },
    sameAs: [socialLinks.github, socialLinks.linkedin],
    knowsAbout: [
      "Web development",
      "AI automation",
      "Custom software",
      "Micro-SaaS products",
      "Technical SEO",
    ],
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    name: `${siteName} — ${"Software + AI Systems"}`,
    url: siteUrl,
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

/** Site-wide graph used on the homepage. */
export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), founderNode(), websiteNode()],
  };
}

export function webPageNode({
  name,
  description,
  path,
  breadcrumbId,
}: {
  name: string;
  description: string;
  path: string;
  breadcrumbId?: string;
}) {
  return {
    "@type": "WebPage",
    "@id": `${siteCanonical(path)}#webpage`,
    url: siteCanonical(path),
    name,
    description,
    isPartOf: { "@id": SITE_ID },
    about: { "@id": ORG_ID },
    ...(breadcrumbId ? { breadcrumb: { "@id": breadcrumbId } } : {}),
  };
}

export function profilePageNode() {
  return {
    "@type": "ProfilePage",
    "@id": `${siteCanonical("/about")}#profile`,
    url: siteCanonical("/about"),
    mainEntity: { "@id": FOUNDER_ID },
    isPartOf: { "@id": SITE_ID },
  };
}

export function breadcrumbNode({
  items,
  path,
}: {
  items: { label: string; href?: string }[];
  path: string;
}) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${siteCanonical(path)}#breadcrumb`,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: siteCanonical(item.href) } : {}),
    })),
  };
}

export function projectNode(project: Project) {
  const path = `/work/${project.slug}`;
  const gallery = project.gallery ?? [];
  return {
    "@type": "CreativeWork",
    "@id": `${siteCanonical(path)}#work`,
    name: project.title,
    description: project.description,
    url: siteCanonical(path),
    creator: { "@id": ORG_ID },
    inLanguage: "en",
    keywords: [project.industry, ...project.category, ...project.technologies].join(", "),
    datePublished: project.publishedAt,
    ...(project.updatedAt ? { dateModified: project.updatedAt } : {}),
    ...(gallery.length
      ? { image: gallery.map((g) => `${siteUrl}${g.src}`) }
      : {}),
    ...(project.liveUrl ? { sameAs: [project.liveUrl] } : {}),
  };
}

export function articleNode(article: Article) {
  const path = `/insights/${article.slug}`;
  return {
    "@type": "BlogPosting",
    "@id": `${siteCanonical(path)}#article`,
    headline: article.title,
    description: article.excerpt,
    url: siteCanonical(path),
    author: {
      "@type": "Person",
      name: founderName,
      url: siteCanonical("/about"),
    },
    publisher: { "@id": ORG_ID },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    articleSection: article.category,
    keywords: article.tags.join(", "),
    inLanguage: "en",
    isPartOf: { "@id": SITE_ID },
  };
}

export function serviceNode(solution: Solution) {
  const path = `/solutions/${solution.slug}`;
  return {
    "@type": "Service",
    "@id": `${siteCanonical(path)}#service`,
    name: solution.title,
    description: solution.description,
    serviceType: solution.title,
    url: siteCanonical(path),
    provider: { "@id": ORG_ID },
    audience: solution.whoFor.join(", "),
  };
}

export function productNode(product: Product) {
  const path = `/products/${product.slug}`;
  const base = {
    "@id": `${siteCanonical(path)}#product`,
    name: product.name,
    description: product.description,
    url: siteCanonical(path),
    brand: { "@id": ORG_ID },
    ...(product.status === "Live" ? { sameAs: [product.url] } : {}),
  };
  // Only software is described as software; a written toolkit is a product.
  if (product.category === "Micro-SaaS" || product.category === "Developer Products") {
    return { "@type": "SoftwareApplication", ...base, applicationCategory: "BusinessApplication", operatingSystem: "Web" };
  }
  return { "@type": "Product", ...base };
}

export function faqNode(solution: Solution) {
  if (!solution.faqs.length) return null;
  const path = `/solutions/${solution.slug}`;
  return {
    "@type": "FAQPage",
    "@id": `${siteCanonical(path)}#faq`,
    mainEntity: solution.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function graph(nodes: unknown[]) {
  return { "@context": "https://schema.org", "@graph": nodes.filter(Boolean) };
}
