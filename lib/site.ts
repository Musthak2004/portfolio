import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://msbee.dpdns.org";

export function siteCanonical(path = "") {
  return `${siteUrl}${path}`;
}

export function pageMeta(opts: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = siteCanonical(opts.path ?? "");
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      type: "website",
      siteName: "MS Bee",
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: ["/opengraph-image"],
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
