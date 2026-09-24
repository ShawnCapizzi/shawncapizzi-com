import type { Metadata } from "next";

/* ============================================================
   SEO AND GEO: one source for page metadata and structured data

   Every page builds its metadata with pageMetadata() so it gets a
   canonical URL, its own Open Graph and X card, and a share image.
   Next.js does not merge openGraph between the root layout and a
   page: a page that sets only title and description inherits the
   root's og:title and og:url, and every shared link then previews
   as the homepage. pageMetadata() prevents that.

   Structured data (JSON-LD) describes only what the page shows.
   Google: "Structured data isn't required for generative AI
   search", so this is for clarity across all engines, not a trick.
   The Person node is the anchor: every page and case study points
   to it by @id, so engines resolve one entity, Shawn Capizzi.
   ============================================================ */

export const SITE_URL = "https://shawncapizzi.com";
export const SITE_NAME = "Shawn Capizzi";
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const LINKEDIN_URL = "https://www.linkedin.com/in/shawncapizzi";

/** Homepage title and description. Title under 60 characters so results
 *  do not truncate it. The description carries the hero H1 and lead in about
 *  160 characters: leadership first, then the build practice. */
export const HOME_TITLE = "Shawn Capizzi | Design Leadership, Service Design, and UX";
export const HOME_DESCRIPTION =
  "Service design, experience architecture, UX, CX, and AI-native product design for regulated and enterprise teams. 15 years in pharma, healthcare, and finance.";

export type ShareImage = { url: string; width: number; height: number; alt: string };

export const DEFAULT_SHARE_IMAGE: ShareImage = {
  url: "/images/og/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "Shawn Capizzi: strategic design leadership for regulated products, platforms, and AI-enabled workflows",
};

type PageMetaInput = {
  /** Route path, e.g. "/work/courtvisual". Becomes the canonical and og:url. */
  path: string;
  /** Page title. The layout template adds " | Shawn Capizzi" unless absolute. */
  title: string;
  description: string;
  image?: ShareImage;
  type?: "website" | "article" | "book" | "profile";
  /** Use the title as-is, with no " | Shawn Capizzi" suffix. */
  absolute?: boolean;
};

export function pageMetadata({
  path,
  title,
  description,
  image = DEFAULT_SHARE_IMAGE,
  type = "website",
  absolute = false,
}: PageMetaInput): Metadata {
  const fullTitle = absolute ? title : `${title} | ${SITE_NAME}`;
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: SITE_NAME,
      locale: "en_US",
      title: fullTitle,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [{ url: image.url, alt: image.alt }],
    },
  };
}

/* ---------- JSON-LD builders ---------- */

const abs = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path}`);

/** Site-wide graph: the website and the person behind it. Rendered once in the root layout. */
export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: "en-US",
        publisher: { "@id": PERSON_ID },
      },
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: "Shawn Capizzi",
        url: SITE_URL,
        image: abs("/images/brand/headshot-2026-knockout.jpg"),
        jobTitle: "Strategic experience design leader",
        description:
          "Strategic design leader for regulated products, platforms, and AI-enabled workflows, with fifteen years across pharma, healthcare, financial services, and enterprise. He also designs, builds, and ships products himself.",
        sameAs: [LINKEDIN_URL],
        alumniOf: { "@type": "CollegeOrUniversity", name: "Pratt Institute" },
        award: "D&AD Pencil 2022, Future Impact",
        knowsAbout: [
          "Design leadership",
          "Experience strategy",
          "Service design",
          "Design systems",
          "AI adoption in regulated industries",
          "Conversational and voice interface design",
          "Pharmaceutical and healthcare digital experience",
          "Financial services CRM design",
        ],
      },
    ],
  };
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

/** A case study: an article by Shawn, with a Home > Work > Case trail. */
export function caseStudyGraph({
  path,
  title,
  description,
  image,
}: {
  path: string;
  title: string;
  description: string;
  image: ShareImage;
}) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      url: abs(path),
      mainEntityOfPage: abs(path),
      image: abs(image.url),
      author: { "@id": PERSON_ID },
      publisher: { "@id": PERSON_ID },
      inLanguage: "en-US",
    },
    breadcrumbs([
      { name: "Home", path: "/" },
      { name: "Work", path: "/work" },
      { name: title, path },
    ]),
  ];
}

/** /about is the page about Shawn, so it is his ProfilePage. */
export function profilePage() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: abs("/about"),
    name: "About Shawn Capizzi",
    mainEntity: { "@id": PERSON_ID },
  };
}

/** FAQPage from the same plain-text answers the FAQ renders. */
export function faqPage(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: abs("/faq"),
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

/** The book and its free first chapter. No publisher, date, or ISBN:
 *  the book is not published yet, and the markup says only what the page says. */
export const BOOK = {
  name: "Seeing Past the Cage",
  subtitle: "Better communication design in the age of AI",
  image: "/images/process/seeing-past-the-cage-book.jpg",
};

export function bookGraph({ chapterName, chapterPath }: { chapterName: string; chapterPath: string }) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Book",
      name: BOOK.name,
      alternativeHeadline: BOOK.subtitle,
      author: { "@id": PERSON_ID },
      image: abs(BOOK.image),
      inLanguage: "en-US",
      hasPart: {
        "@type": "Chapter",
        name: chapterName,
        position: 1,
        url: abs(chapterPath),
        isAccessibleForFree: true,
      },
    },
    breadcrumbs([
      { name: "Home", path: "/" },
      { name: "Thinking", path: "/thinking" },
      { name: `${BOOK.name}, Chapter 1`, path: chapterPath },
    ]),
  ];
}
