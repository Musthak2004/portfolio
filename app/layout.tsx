import type { Metadata } from "next";
import "./globals.css";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  title: "MS Bee | Websites for Small Businesses in Sri Lanka — Musthak M.",
  description:
    "MS Bee builds fast, mobile-friendly websites for Sri Lankan small businesses that get found on Google. Landing pages, business sites, and full sites — delivered in days, hosted on Vercel.",
  keywords: [
    "web design Sri Lanka",
    "small business website",
    "website design",
    "Musthak",
    "MS Bee",
    "landing page",
    "business website Sri Lanka",
    "Next.js developer",
    "website for restaurant",
    "website for shop",
  ],
  openGraph: {
    title: "MS Bee | Websites for Small Businesses in Sri Lanka",
    description:
      "Fast, mobile-friendly websites that get small Sri Lankan businesses found on Google. Delivered in days.",
    type: "website",
    locale: "en_US",
    siteName: "MS Bee — Musthak M.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
