/**
 * CTA Cards Library
 *
 * Single source of truth for the bottom-of-page CTA cards used across the site.
 * Each card is keyed by a string identifier. Pages reference cards by key via
 * the CTACards component (see components/CTACards.tsx).
 *
 * To add a new card to the library: add an entry below with a unique key.
 * To use a card on a page: <CTACards cards={["key1", "key2"]} />
 *
 * To update any card's title, image, description, or link: edit it here once,
 * and every page using that card picks up the change automatically.
 */

export type CTACard = {
  /** Small eyebrow label shown above the title (e.g. "Read", "Interactive"). */
  eyebrow: string;
  /** Main card title. */
  title: string;
  /** Optional italic subtitle below the title (used for "the book" framing on the book card). */
  subtitle?: string;
  /** Two-to-three-sentence card body copy. */
  description: string;
  /** Footer link text (e.g. "Read the first chapter"). The arrow is added automatically. */
  cta: string;
  /** Destination URL when the card is clicked (whole card is the link target). */
  href: string;
  /** Card image path. Optional — if omitted, the card renders without an image. */
  image?: string;
  imageAlt?: string;
  /**
   * Tailwind aspect-ratio class for the image container.
   * Defaults to "aspect-[16/10]". Override per card when the source image
   * is a different ratio (e.g. "aspect-[4/3]" for the clarity-cards image,
   * "aspect-[4/5]" for portrait-oriented imagery like the headshot).
   */
  imageAspect?: string;
  /**
   * How the image fills its container.
   *   "cover" (default) — fills the container, cropping if needed.
   *   "contain" — fits the entire image inside the container,
   *               letterboxing with black bars when the source image
   *               doesn't match the container's aspect ratio. Use for
   *               portrait headshots or compositions you don't want
   *               cropped.
   */
  imageFit?: "cover" | "contain";
};

export const CTA_CARDS: Record<string, CTACard> = {
  book: {
    eyebrow: "Read",
    title: "Clarity Is the Advantage",
    subtitle: "the book",
    description:
      "Why clarity wins and what it takes to do great work in the rooms where decisions get made. Read Chapter 1, \u201CThe Human Condition,\u201D free in the reader.",
    cta: "Read the first chapter",
    href: "/book/chapter-1",
    image: "/images/book-reader.png",
    imageAlt: "Clarity Is the Advantage \u2014 Chapter 1 in the reader",
  },
  cards: {
    eyebrow: "Interactive",
    title: "The Capizzi Clarity Cards",
    description:
      "A 54-card strategic prompt deck built on the Capizzi Process. A working tool for teams making complex decisions. Draw a card and try it.",
    cta: "Try the cards",
    href: "/clarity-advantage",
    image: "/images/clarity-cards-deck.png",
    imageAlt: "The Capizzi Clarity Cards \u2014 a strategic prompt deck with a draw-next interaction",
    imageAspect: "aspect-[4/3]",
  },
  work: {
    eyebrow: "Case studies",
    title: "Selected work",
    description:
      "A decade of enterprise experience design across pharma, healthcare, and finance. Engagements where the structure of the experience changed the business outcome.",
    cta: "See the work",
    href: "/work",
    image: "/images/hero/consumer-care-hub-hero-balanced.gif",
    imageAlt: "Selected case studies across pharma, healthcare, and financial services",
  },
  about: {
    eyebrow: "About",
    title: "Who's behind the work",
    description:
      "Strategic experience design leader. 15+ years across pharma, healthcare, financial services, and enterprise platforms. Director-level work with Pfizer, Bloomberg, Samsung, Biogen, and AbbVie.",
    cta: "Read more",
    href: "/about",
    image: "/images/brand/shawn_m_capizzi_2026.png",
    imageAlt: "Shawn Capizzi",
    imageFit: "contain",
  },
  engagements: {
    eyebrow: "Engagement modes",
    title: "Three flexible ways to work together",
    description:
      "Leadership, advisory, on call. Scaled to your team\u2019s needs, timing, and roadmap. Built for regulated and enterprise teams navigating complexity.",
    cta: "See how I work",
    href: "/engagements",
    image: "/images/engagements/needs-framework-sketch.jpg",
    imageAlt: "Hand-drawn framework: user need and want flowing down through company to users, business, and resources",
  },
};
