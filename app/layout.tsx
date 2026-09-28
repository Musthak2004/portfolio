import type { Metadata, Viewport } from "next";
import "./globals.css";
import Analytics from "@/components/Analytics";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://msbee.dpdns.org";

const title = "Musthak — Founder & Builder at MS Bee";
const description =
  "Musthak is the founder of MS Bee, building software, AI automations, micro-SaaS products and digital tools.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl },
  openGraph: {
    title,
    description,
    url: siteUrl,
    type: "website",
    locale: "en_US",
    siteName: "MS Bee — R.M. Musthak",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Musthak — Founder & Builder at MS Bee",
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07070D",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "R.M. Musthak",
      jobTitle: "Founder & Builder",
      worksFor: { "@type": "Organization", name: "MS Bee" },
      url: siteUrl,
      sameAs: [
        "https://github.com/Musthak2004",
        "https://linkedin.com/in/rm-musthak",
      ],
    },
    {
      "@type": "Organization",
      name: "MS Bee",
      url: siteUrl,
      founder: { "@type": "Person", name: "R.M. Musthak" },
      description:
        "MS Bee is a software and AI company building web applications, AI automations, custom software and digital products.",
    },
    {
      "@type": "WebSite",
      name: title,
      url: siteUrl,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[200] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:text-sm focus:rounded"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
