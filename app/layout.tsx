import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Freelance Web Developer | Modern Websites for Small Businesses",
  description:
    "I build modern, fast, and affordable websites for small businesses using cutting-edge AI-assisted development. Business websites, landing pages, and web app frontends.",
  keywords: [
    "web developer",
    "freelance web developer",
    "small business websites",
    "landing pages",
    "AI-assisted development",
    "modern websites",
  ],
  openGraph: {
    title: "Freelance Web Developer | Modern Websites for Small Businesses",
    description:
      "I build modern, fast, and affordable websites for small businesses.",
    type: "website",
    locale: "en_US",
    siteName: "Your Name - Web Developer",
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
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  );
}
