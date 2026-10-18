import type { Metadata, Viewport } from "next";
import "./globals.css";
import Analytics from "@/components/Analytics";
import JsonLd from "@/components/ui/JsonLd";
import SiteNavbar from "@/components/layout/SiteNavbar";
import SiteFooter from "@/components/layout/SiteFooter";
import AmbientBackground from "@/components/visual/AmbientBackground";
import { siteGraph } from "@/lib/schema";
import { siteName, siteTagline, siteUrl } from "@/lib/site";

const title = `${siteName} — ${siteTagline}`;
const description =
  "MS Bee builds software, AI automation systems, custom digital solutions, micro-SaaS products, and digital products. Founder-led by Ruwaisdeen Muhammad Musthak.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | MS Bee",
  },
  description,
  applicationName: siteName,
  authors: [{ name: "Ruwaisdeen Muhammad Musthak", url: `${siteUrl}/about` }],
  creator: "Ruwaisdeen Muhammad Musthak",
  publisher: siteName,
  alternates: { canonical: `${siteUrl}/` },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/`,
    type: "website",
    locale: "en_US",
    siteName,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "MS Bee — software, AI automations and digital products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07070D",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={siteGraph()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[200] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:text-sm focus:rounded"
        >
          Skip to content
        </a>
        <AmbientBackground />
        <div className="relative z-10">
          <SiteNavbar />
          <main id="main">{children}</main>
          <SiteFooter />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
