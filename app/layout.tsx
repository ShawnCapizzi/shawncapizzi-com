// Destination: app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ParticleField } from "@/components/ParticleField";
import { CursorGlow } from "@/components/CursorGlow";
import { BackToTop } from "@/components/BackToTop";
import { ScrollFadeController } from "@/components/ScrollFadeController";
import { NavigationProgress } from "@/components/NavigationProgress";
import { CookieBanner } from "@/components/CookieBanner";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { DEFAULT_SHARE_IMAGE, HOME_DESCRIPTION, HOME_TITLE, SITE_URL, siteGraph } from "@/lib/seo";

/* ============================================================
   FONTS
   Instrument Sans: every heading (h1, h2, h3) and the editorial
   subhead. Replaced Nunito Sans in September 2026: one crisp
   grotesk across all headings instead of a rounded humanist face
   next to a Swiss body face.
   Geist: body and interface. Geist Mono: eyebrows and labels.
   All three are SIL Open Font License. The /about colophon lists
   them; keep it in step if this changes.
   ============================================================ */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

/* ============================================================
   METADATA
   ============================================================ */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: "%s | Shawn Capizzi",
  },
  description: HOME_DESCRIPTION,
  keywords: [
    "design leadership",
    "experience strategy",
    "service design",
    "service blueprinting",
    "journey orchestration",
    "touchpoint inventory",
    "operating model design",
    "contextual inquiry",
    "design system governance",
    "experience architecture",
    "AI adoption",
    "regulated industries",
    "pharma UX",
    "enterprise design strategy",
    "Shawn Capizzi",
  ],
  authors: [{ name: "Shawn Capizzi", url: SITE_URL }],
  creator: "Shawn Capizzi",
  // Defaults for any page that does not call pageMetadata(). Every
  // route in the sitemap does, so these are a fallback only. No X
  // handle: the site links no X account (removed September 2026).
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Shawn Capizzi",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [DEFAULT_SHARE_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [{ url: DEFAULT_SHARE_IMAGE.url, alt: DEFAULT_SHARE_IMAGE.alt }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

/* ============================================================
   ROOT LAYOUT
   ParticleField sits behind everything (z-index 0); Header,
   main content, and Footer sit above via document flow.

   Particle field wrapped in opacity:0.65 to subdue the ambient
   motion. Keeps the charm but lets the typography lead.
   ============================================================ */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${instrumentSans.variable}`}>
      <body className="bg-bg-primary text-text-primary antialiased">
        {/* Site-wide structured data: the website and the Person entity
            every page and case study points to. See lib/seo.ts. */}
        <JsonLd data={siteGraph()} />
        {/* Consent + Analytics. Order matters:
            1. Analytics sets gtag('consent','default', denied) FIRST
               (defense-in-depth in case Cookiebot is blocked by an ad blocker)
            2. CookieBanner loads Cookiebot, which intercepts other tracking
               scripts and updates consent state based on the user's choice.
            Both components handle missing env vars gracefully; they render
            nothing if NEXT_PUBLIC_GA_MEASUREMENT_ID or NEXT_PUBLIC_COOKIEBOT_CBID
            isn't set (e.g., in dev or preview environments). */}
        <Analytics />
        <CookieBanner />

        <div style={{ opacity: 0.65 }}>
          <ParticleField />
        </div>
        <CursorGlow />
        <ScrollFadeController />
        <div className="relative" style={{ zIndex: 1 }}>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <BackToTop />
        <NavigationProgress />
      </body>
    </html>
  );
}
