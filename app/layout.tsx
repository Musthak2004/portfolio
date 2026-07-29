import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Musthak M. | AI Automation Developer — n8n, Make, Python, AI Agents",
  description:
    "I build AI-powered automations that save businesses 20–40+ hours per week. AI agents, CRM automation, data pipelines, and voice agents with n8n, Make, Python, and Claude AI.",
  keywords: [
    "AI automation developer",
    "n8n developer",
    "make.com expert",
    "AI agents",
    "automation",
    "Musthak",
    "MSK AI Solutions",
    "workflow automation",
    "CRM automation",
  ],
  openGraph: {
    title: "Musthak M. | AI Automation Developer",
    description:
      "I build AI-powered automations that save businesses 20–40+ hours per week.",
    type: "website",
    locale: "en_US",
    siteName: "Musthak M. — MSK AI Solutions",
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
      <body>{children}</body>
    </html>
  );
}
