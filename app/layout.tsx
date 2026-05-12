import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/* ============================================================
   FONTS
   Geist Sans + Geist Mono per design system §3.
   Exposed as CSS variables for use in globals.css @theme block.
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

/* ============================================================
   METADATA
   Site-wide defaults. Per-page metadata overrides this.
   Voice principles enforced: senior, direct, no SaaS-marketing tone.
   ============================================================ */

export const metadata: Metadata = {
  metadataBase: new URL("https://shawncapizzi.com"),
  title: {
    default: "Shawn Capizzi — Strategic Experience Design for Regulated and Enterprise Teams",
    template: "%s — Shawn Capizzi",
  },
  description:
    "AI adoption isn't a technology problem. It's an experience architecture problem. I help regulated and enterprise teams make clear UX, CX, and product strategy decisions.",
  keywords: [
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
      "AI adoption isn't a technology problem. It's an experience architecture problem.",
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
      "AI adoption isn't a technology problem. It's an experience architecture problem.",
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
   Wraps every page. Establishes font variables and base shell.
   Header and Footer are added in later files; for now the layout
   is minimal so we can verify the foundation renders before
   building the chrome.
   ============================================================ */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}