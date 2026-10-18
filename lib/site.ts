import type { Metadata } from "next";

/**
 * Single verified production base URL.
 * Overridable per environment, but defaults to the live custom domain so
 * canonical URLs, sitemap entries and structured data never disagree.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://msbee.dpdns.org"
).replace(/\/$/, "");

export const siteName = "MS Bee";
export const siteTagline = "Software + AI Systems";
export const founderName = "Ruwaisdeen Muhammad Musthak";
export const founderShortName = "R.M. Musthak";

export const socialLinks = {
  github: "https://github.com/Musthak2004",
  linkedin: "https://linkedin.com/in/rm-musthak",
  email: "musthakcool55@gmail.com",
} as const;

export function siteCanonical(path = "") {
  if (!path || path === "/") return `${siteUrl}/`;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export type PageMetaOptions = {
  title: string;
  description: string;
  path?: string;
  /** Open Graph object type — use "article" for insights */
  type?: "website" | "article" | "profile";
  /** route-local OG image, relative to the site root */
  ogImage?: string;
  ogImageAlt?: string;
  /** keep drafts or utility routes out of the index */
  noIndex?: boolean;
};

/**
 * Route-level metadata. Every indexable page passes its own title,
 * description, canonical and social preview — nothing is inherited by
 * accident, and no page is canonicalised to the homepage.
 */
export function pageMeta(opts: PageMetaOptions): Metadata {
  const url = siteCanonical(opts.path ?? "");
  const image = opts.ogImage ?? "/opengraph-image";
  const alt = opts.ogImageAlt ?? `${opts.title} — ${siteName}`;

  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    robots: opts.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      type: opts.type ?? "website",
      locale: "en_US",
      siteName,
      images: [{ url: image, width: 1200, height: 630, alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [image],
    },
  };
}

export const ANALYTICS_EVENTS = [
  "view_work",
  "view_case_study",
  "view_solution",
  "view_product",
  "start_project",
  "form_started",
  "form_submitted",
  "product_clicked",
  "demo_clicked",
  "external_link_clicked",
] as const;

export type AnalyticsEvent = (typeof ANALYTICS_EVENTS)[number];

/** Attribute-based analytics hook point — wire a provider later without touching components. */
export function track(event: AnalyticsEvent, data?: Record<string, string>) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("msbee:track", { detail: { event, ...data } }));
}
