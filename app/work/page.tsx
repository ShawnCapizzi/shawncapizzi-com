import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "A decade of enterprise experience design across pharma, healthcare, and finance. Engagements where the structure of the experience changed the structure of the business outcome.",
};

const CASE_STUDIES = [
  {
    slug: "pharma-design-systems",
    eyebrow: "Pfizer · Multi-Brand · Regulated Industry",
    title: "Building digital governance across 15+ therapeutic brands",
    description:
      "$3.5M+ in digital transformation. Three enterprise design systems. Industry-first mobile wallet integration for patient medication information.",
    image: "/images/hero/consumer-care-hub-hero-balanced.gif",
  },
  {
    slug: "multi-brand-pharma-sales-tools",
    eyebrow: "Biogen · Veeva + Salesforce · Multi-Therapeutic",
    title:
      "A modular sales tool system that supports a multi-brand product portfolio",
    description:
      "12 sales tools consolidated into 33 reusable components. Adoption from 65% to 92%. 40% reduction in search time during HCP conversations.",
    image:
      "/images/case-studies/02-multi-brand-pharma-sales-tools/01-hero-lead-brand-wireframe-to-product.png",
  },
  {
    slug: "enterprise-financial-services-crm",
    eyebrow: "Bloomberg · Enterprise · Terminal Environment",
    title:
      "Redesigning CRM workflows inside a terminal-driven enterprise environment",
    description:
      "Architectural inquiry across three rep types. Faster scanability, quicker decisions, measurable time-in-task reduction across the rep experience.",
    image:
      "/images/case-studies/03-enterprise-financial-services-crm/01-hero-final-person-view-terminal.png",
  },
  {
    slug: "cancer-equality-app",
    eyebrow: "Chrysalis Initiative · Patient Experience · D&AD Pencil 2022",
    title:
      "A patient navigation platform for women facing bias in cancer care",
    description:
      "Two-sided platform connecting patients with trained coaches and peer navigators. Hospital partnerships across Penn Medicine, Rush, MD Anderson, Northwestern.",
    image:
      "/images/case-studies/04-cancer-equality-app/01-hero-erase-the-line-campaign-poster.jpeg",
  },
  {
    slug: "ai-native-product-design-lab",
    eyebrow: "Solo · AI Native Design Lab",
    title: "Building an AI-native product design lab",
    description:
      "A working AI-native product design practice — UXR tools, prototype agents, healthcare-first applications. Vendor-agnostic AI advisory grounded in hands-on work.",
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
          <p className="eyebrow mb-6">Selected work</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05] max-w-4xl">
            Engagements where experience structure changed the business
            outcome.
          </h1>
          <p className="mt-6 md:mt-8 text-xl md:text-2xl text-text-secondary leading-relaxed max-w-3xl">
            A decade of enterprise experience design across pharma, healthcare,
            and finance — and selected work outside it.
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
                <div className="relative aspect-[16/10]">
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

      {/* BOTTOM CTA */}
      <section className="py-24 md:py-32 mt-16 md:mt-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 md:mb-8 max-w-3xl mx-auto leading-tight">
            Want to talk through how this kind of work would fit your team?
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-10 md:mb-12 max-w-2xl mx-auto">
            30 minutes. Virtual. No pitch.
          </p>
          <a
            href="https://cal.com/capizzi/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-text-primary text-text-inverse text-base font-medium tracking-tight hover:scale-[1.02] transition-transform"
          >
            Book a Strategy Call
          </a>
        </div>
      </section>
    </article>
  );
}
