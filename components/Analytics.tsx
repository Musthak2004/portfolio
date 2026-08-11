// ============================================================
// GA4 Analytics Template — MS Bee
// ============================================================
// Drop-in Next.js App Router component. Put <Analytics /> in your
// root layout's <body>, and set the measurement ID from env.
//
//   app/layout.tsx:
//     import Analytics from "@/components/Analytics";
//     <body>
//       {children}
//       <Analytics />
//     </body>
//
// The measurement ID lives in .env.local so it's easy to point at
// your real property later without touching code:
//
//   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
//
// REPLACE G-XXXXXXXXXX with a real GA4 property ID, or set the env
// var, or nothing loads. See README below for creating the property.
// ============================================================
"use client";

import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function Analytics() {
  // No ID configured → render nothing. Safe in dev, CI, and previews.
  if (!GA_ID) return null;

  return (
    <>
      {/* Core gtag script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
