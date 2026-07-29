import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "R.M. Musthak | Software Engineer — Python, Django, Full-Stack Web Development",
  description:
    "Aspiring software engineer specializing in Python, Django, and full-stack web development. Building robust, scalable web applications for real-world problems.",
  keywords: [
    "software engineer",
    "python developer",
    "django developer",
    "full-stack developer",
    "Musthak",
    "web developer",
    "python",
    "django",
  ],
  openGraph: {
    title: "R.M. Musthak | Software Engineer",
    description:
      "Aspiring software engineer specializing in Python, Django, and full-stack web development.",
    type: "website",
    locale: "en_US",
    siteName: "R.M. Musthak — Portfolio",
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
