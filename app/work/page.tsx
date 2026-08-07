// Destination: app/work/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CTACards } from "@/components/CTACards";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "A decade of enterprise experience design across pharma, healthcare, and finance. Engagements where the structure of the experience changed the structure of the business outcome.",
};

const CASE_STUDIES = [
  {
    slug: "pharma-design-systems",
    eyebrow: "Multi-Brand · 3x Design Systems · Governance",
    title: "Building digital governance across 70+ therapeutic brands",
    description:
      "$3.5M+ in digital transformation. Three enterprise design systems. Industry-first mobile wallet integration for patient medication information.",
    image: "/images/hero/consumer-care-hub-hero-balanced.gif",
  },
  {
    slug: "enterprise-financial-services-crm",
    eyebrow: "Bloomberg · Financial services · Enterprise CRM",
    title:
      "Redesigning rep workflows in a terminal-driven CRM environment",
    description:
      "Architectural inquiry across three rep types. Faster scanability, quicker decisions, measurable time-in-task reduction across the rep experience.",
    image:
      "/images/case-studies/03-enterprise-financial-services-crm/01-hero-final-person-view-terminal.png",
  },
  {
    slug: "courtvisual",
    eyebrow: "Solo · Multi-sport PWA · AI-native build · 2026",
    title:
      "A multi-sport product that scores every game by what's worth watching",
    description:
      "Designed, built, and shipped solo. Six leagues, a 151-team catalog, a four-factor excitement engine, and an AI-assisted data pipeline. Live at courtvisual.com.",
    image: "/images/case-studies/07-courtvisual/02-game-card-score-ring.png",
  },
  {
    slug: "cancer-equality-app",
    eyebrow: "Chrysalis Initiative · Service Design · D&AD Pencil 2022",
    title:
      "A patient navigation platform for women facing bias in cancer care",
    description:
      "A breast cancer patient-and-coach mentoring program, run on a spreadsheet and email, rebuilt as a real two-sided digital platform.",
    image:
      "/images/case-studies/04-cancer-equality-app/01-hero-erase-the-line-campaign-poster.jpeg",
  },
  {
    slug: "multi-brand-pharma-sales-tools",
    eyebrow: "Multi-Brand Design System · Veeva + Salesforce",
    title:
      "A modular sales design system that supports a multi-brand product portfolio",
    description:
      "12 sales tools consolidated into 33 reusable components. Adoption from 65% to 92%. 40% reduction in search time during HCP conversations.",
    image:
      "/images/case-studies/02-multi-brand-pharma-sales-tools/01-hero-lead-brand-wireframe-to-product.png",
  },
  {
    slug: "ai-native-product-design-lab",
    eyebrow: "Solo · AI Native Design Lab",
    title: "Building an AI-native product design lab",
    description:
      "A working AI-native product design practice: UXR tools, prototype agents, healthcare-first applications. Vendor-agnostic AI advisory grounded in hands-on work.",
    image:
      "/images/case-studies/05-ai-native-product-design-lab/01-hero-ai-native-design-lab.png",
  },
];

function isAnimated(src: string): boolean {
  return src.endsWith(".gif");
}

export default function Page() {
  return (
    <article>
      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-wide mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow mb-3">Work</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[0.95] text-balance max-w-4xl">
            Engagements where experience structure changed the business outcome.
          </h1>
          <p className="mt-6 md:mt-8 text-xl md:text-2xl text-text-secondary leading-relaxed max-w-3xl">
            A decade of enterprise experience design across pharma, healthcare,
            and finance, alongside live products I designed, built, and shipped
            myself.
          </p>
        </div>
      </section>

      {/* CASE STUDIES GRID */}
      <section className="py-12 md:py-16">
        <div className="max-w-wide mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {CASE_STUDIES.map((cs) => (
              <Link
                key={cs.slug}
                href={`/work/${cs.slug}`}
                className="group relative block rounded-2xl card-surface border border-border-default hover:border-border-strong overflow-hidden transition-colors"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={cs.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    unoptimized={isAnimated(cs.image)}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-7 md:p-10">
                  <p className="eyebrow mb-4">{cs.eyebrow}</p>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-text-primary group-hover:text-link transition-colors leading-tight">
                    {cs.title}
                  </h2>
                  <p className="mt-4 text-text-secondary leading-relaxed">
                    {cs.description}
                  </p>
                  <p className="mt-6 text-link group-hover:text-link-hover transition-colors text-base font-medium">
                    Read the case study{" "}
                    <span aria-hidden="true" className="ml-1">
                      →
                    </span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA CARDS — engagements (how we'd work together) + contact (start the conversation) */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-wide mx-auto px-6 md:px-8 lg:px-12">
          <CTACards cards={["engagements", "contact"]} />
        </div>
      </section>
    </article>
  );
}
