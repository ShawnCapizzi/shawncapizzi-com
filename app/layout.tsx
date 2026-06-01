// Destination: app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ParticleField } from "@/components/ParticleField";
import { CursorGlow } from "@/components/CursorGlow";
import { BackToTop } from "@/components/BackToTop";
import { ScrollFadeController } from "@/components/ScrollFadeController";
import { NavigationProgress } from "@/components/NavigationProgress";

/* ============================================================
   FONTS
   Geist Sans + Geist Mono — primary body and mono.
   Nunito Sans — humanist sans used for italic subheads, lead-ins,
   and editorial moments. Adds typographic register without going
   full serif.
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

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

/* ============================================================
   METADATA
   ============================================================ */

export const metadata: Metadata = {
  metadataBase: new URL("https://shawncapizzi.com"),
  title: {
    default: "Shawn Capizzi — Strategic Experience Design for Regulated and Enterprise Teams",
    template: "%s — Shawn Capizzi",
  },
  description:
    "Senior experience strategy, UX, and design system governance for regulated and enterprise teams. AI adoption isn't a technology problem — it's an experience architecture problem.",
  keywords: [
    "experience strategy",
    "design system governance",
    "experience architecture",
    "AI adoption",
    "regulated industries",
    "pharma UX",
    "enterprise design strategy",
    "design leadership",
    "Shawn Capizzi",
  ],
  authors: [{ name: "Shawn Capizzi" }],
  creator: "Shawn Capizzi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shawncapizzi.com",
    siteName: "Shawn Capizzi",
    title: "Shawn Capizzi — Strategic Experience Design",
    description:
      "Senior experience strategy, UX, and design system governance for regulated and enterprise teams. AI adoption is an experience architecture problem.",
    images: [
      {
        url: "/images/og/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Shawn Capizzi — Strategic Experience Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shawn Capizzi — Strategic Experience Design",
    description:
      "Senior experience strategy, UX, and design system governance for regulated and enterprise teams. AI adoption is an experience architecture problem.",
    images: ["/images/og/og-default.jpg"],
    creator: "@shawncapizzi",
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
   motion — keeps the charm but lets the typography lead.
   ============================================================ */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${nunitoSans.variable}`}>
      <body className="bg-bg-primary text-text-primary antialiased">
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
