import Image from "next/image";
import Link from "next/link";
import { InViewVideo } from "./InViewVideo";

/**
 * Building: live products, designed, built, and shipped solo.
 *
 * This is the working-software claim from the hero, made clickable. Two
 * products, both live today, each with the live link and the case study
 * that explains it. Nothing appears here until it is deployed; unreleased
 * work reads as pipeline rather than proof.
 *
 * The book and the cards used to live in this section. They now have their
 * own block near the bottom of the homepage (ClarityCardsSection), so the
 * method and the products no longer compete for the same slot.
 *
 * To add a product once it ships, add an entry to PRODUCTS. It needs a
 * live URL, a case study route, and an image that already exists in
 * /public. The Live Health Data case study will bring ClinicalTrialsForMe
 * here when it lands.
 */

type Product = {
  key: string;
  name: string;
  status: string;
  body: string;
  liveUrl: string;
  liveLabel: string;
  caseStudyHref: string;
  image: string;
  imageAlt: string;
  /** When set, the tile plays this reel instead of showing the still. The
   *  still above becomes the poster, so the card looks identical until the
   *  video loads. Loading is deferred until the card scrolls into view. */
  video?: string;
};

const PRODUCTS: Product[] = [
  {
    key: "aipatientsupport",
    name: "AI Patient Support",
    status: "Live · Healthcare",
    body: "Patient support organized by condition rather than by the company selling the drug. Support programs, savings paths, studies, and safety warnings, sourced from DailyMed, openFDA, and ClinicalTrials.gov, with the government record always one click away.",
    liveUrl: "https://aipatientsupport.com",
    liveLabel: "Open aipatientsupport.com",
    caseStudyHref: "/work/ai-native-product-design-lab#ai-patient-support",
    image: "/videos/aipatientsupport-walkthrough-poster.jpg",
    imageAlt: "AI Patient Support, the live home page with condition search",
    video: "/videos/aipatientsupport-walkthrough.mp4",
  },
  {
    key: "courtvisual",
    name: "CourtVisual",
    status: "Live · Consumer",
    body: "Every game scored 0 to 10 for what is worth watching, with where to watch it and where to buy tickets, on one card. Real-time fixtures, scores, and standings across six leagues.",
    liveUrl: "https://www.courtvisual.com",
    liveLabel: "Open courtvisual.com",
    caseStudyHref: "/work/courtvisual",
    image: "/images/case-studies/07-courtvisual/04-live-slate-watch-and-tickets.png",
    imageAlt: "CourtVisual live slate showing scored games with watch and ticket options",
  },
];

export function Building() {
  return (
    <section className="py-24 md:py-32 border-t border-border-subtle">
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">Designed, built, and shipped solo</p>
          <h2 className="section-title">
            Working products and prototypes, not a description of it
          </h2>
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
            Live products on the same stack I use for client work: Next.js,
            Supabase, and Vercel, with Claude Code and ChatGPT as build
            partners and myself as the orchestrator. I also work with onshore
            and offshore dev teams to get what you need built and shipped.
          </p>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PRODUCTS.map((p) => (
            <article
              key={p.key}
              className="relative flex flex-col rounded-2xl card-surface border border-border-default overflow-hidden"
            >
              <Link
                href={p.caseStudyHref}
                className="group relative block aspect-[16/10] bg-bg-raised overflow-hidden"
                aria-label={`${p.name} case study`}
              >
                {p.video ? (
                  <InViewVideo src={p.video} poster={p.image} />
                ) : (
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  />
                )}
              </Link>
              <div className="p-7 md:p-8 flex flex-col flex-1">
                <p className="font-mono text-xs tracking-widest uppercase text-text-tertiary">
                  {p.status}
                </p>
                <h3 className="card-title mt-3 text-text-primary">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm md:text-base text-text-secondary leading-relaxed flex-1">
                  {p.body}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-text-primary text-text-inverse text-sm font-medium tracking-tight hover:scale-[1.02] transition-transform"
                  >
                    {p.liveLabel}
                  </a>
                  <Link
                    href={p.caseStudyHref}
                    className="inline-flex items-center text-sm font-medium text-link hover:text-link-hover transition-colors"
                  >
                    Read the case study{" "}
                    <span aria-hidden="true" className="ml-2">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
