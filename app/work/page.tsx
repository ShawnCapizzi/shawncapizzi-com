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
      "$3.5M+ in digital transformation. Industry-first mobile wallet integration for patient medication information.",
    image: "/images/hero/consumer-care-hub-hero-balanced.gif",
  },
  {
    slug: "multi-brand-pharma-sales-tools",
    eyebrow: "Biogen · Veeva + Salesforce · Multi-Therapeutic",
    title:
      "A modular sales tool system that supports a multi-brand product portfolio",
    description:
      "12 sales tools consolidated into 33 reusable components. Adoption from 65% to 92%.",
    image:
      "/images/case-studies/02-multi-brand-pharma-sales-tools/01-hero-sales-rep-presentations.gif",
  },
  {
    slug: "enterprise-financial-services-crm",
    eyebrow: "Bloomberg · Financial services · Enterprise CRM",
    title: "Redesigning rep workflows in a terminal-driven CRM environment",
    description:
      "In-person research with three salesperson types. Cleaner scanability, faster decisions, faster task completion.",
    image:
      "/images/case-studies/03-enterprise-financial-services-crm/01-hero-final-person-view-terminal.png",
  },
  {
    slug: "cancer-equality-app",
    eyebrow: "Patient experience · Healthcare equity · D&AD Pencil 2022",
    title:
      "A patient navigation platform for women facing bias in cancer care",
    description:
      "Built with The Chrysalis Initiative and founder Jamila. Recognized with a D&AD Pencil. The meaningful outcome was connecting patients with coaches who helped navigate their cancer journey to better care.",
    image:
      "/images/case-studies/04-cancer-equality-app/01-hero-erase-the-line-campaign-poster.jpeg",
  },
  {
    slug: "ai-native-product-design-lab",
    eyebrow: "AI integration · Healthcare prototyping · Vendor-agnostic",
    title: "How I use AI to accelerate research, design, prototype, and delivery",
    description:
      "Built on years of bringing teams together. Working prototypes, deployed Custom GPTs, and a contrarian thesis: AI is the boring work most companies haven't done yet.",
    image:
      "/images/case-studies/05-ai-native-product-design-lab/01-hero-ai-patient-support-disease-first.png",
  },
];

// Selected pharma + healthcare practice tiles — manuscript v2.2 section
type PracticeTile = {
  name: string;
  description: string;
  image: string;
  alt: string;
};

const PRACTICE: { category: string; tiles: PracticeTile[] }[] = [
  {
    category: "Patient Experience",
    tiles: [
      {
        name: "Patient Application",
        description:
          "Patient-facing application supporting people navigating DLBCL treatment. Calendar, dosing, patient stories, treatment journey support.",
        image: "/images/practice-grid/case-patient-app.png",
        alt: "DLBCL patient application — calendar, dosing, and treatment journey",
      },
      {
        name: "Eligibility & Patient Support",
        description:
          "Patient assistance and eligibility flow for an oral therapy. Designed to make affordability and access decisions clearer at the moment of need.",
        image: "/images/practice-grid/01-eligibility-patient-support-flow.gif",
        alt: "Eligibility and patient support flow for oral therapy",
      },
    ],
  },
  {
    category: "HCP & Sales Enablement",
    tiles: [
      {
        name: "AR Workflow & In-Office Tools",
        description:
          "Workflow design for HCP office tools, including Apple Vision Pro AR concepts for in-office data review and patient education.",
        image:
          "/images/case-studies/05-ai-native-product-design-lab/05-apple-vision-pro-ar-concept.png",
        alt: "Apple Vision Pro AR concept for in-office HCP workflow",
      },
      {
        name: "Veeva Sales Flow Architecture",
        description:
          "Workflow storyboarding for rep-facing Veeva-integrated sales presentations across a multi-brand neurological portfolio.",
        image:
          "/images/case-studies/02-multi-brand-pharma-sales-tools/02-rep-tablet-sales-flow-storyboard.png",
        alt: "Veeva sales flow storyboard on rep tablet",
      },
    ],
  },
  {
    category: "Regulated Content & Brand Work",
    tiles: [
      {
        name: "Vaccine Content Audit & Scientific Story Strategy",
        description:
          "Multi-stakeholder content audit and regulatory readiness review for a major pneumococcal vaccine brand. Translating dense scientific content into review-ready, modular communication assets.",
        image:
          "/images/case-studies/01-pharma-design-systems/05-vaccine-content-audit-scientific-story.gif",
        alt: "Vaccine content audit and scientific story strategy",
      },
      {
        name: "Content Strategy + Customer Journey Mapping",
        description:
          "Multi-stage customer journey mapping for a smoking cessation patient support program. Three intake paths — Ready to Quit, Not Ready to Quit, Helping Someone Quit — each routed to a customized content stream and CRM-driven email cadence.",
        image:
          "/images/practice-grid/02-content-strategy-customer-journey-flow.gif",
        alt: "Smoking cessation customer journey flow with three intake paths",
      },
      {
        name: "Coach + Patient Training Community App",
        description:
          "The first-ever platform designed to reduce inequality in breast cancer care for women facing bias. D&AD Pencil 2022. Full case study above.",
        image:
          "/images/case-studies/04-cancer-equality-app/02-app-marketing-site-laptop.jpeg",
        alt: "Coach and patient training community app marketing site",
      },
    ],
  },
  {
    category: "Workshops & Facilitation",
    tiles: [
      {
        name: "Cross-Functional Strategy Workshops",
        description:
          "Workshop facilitation across regulated client teams — surfacing alignment, prioritizing decisions, and translating leadership intent into actionable scope.",
        image:
          "/images/case-studies/05-ai-native-product-design-lab/08-workshop-facilitation-duotone.gif",
        alt: "Workshop facilitation, duotone — surfacing alignment across regulated teams",
      },
    ],
  },
];

const THERAPEUTIC_AREAS = [
  "Oncology (DLBCL, breast cancer, hematology, non-small cell lung cancer)",
  "Cardiovascular (hypertrophic cardiomyopathy)",
  "Vaccines (pneumococcal disease)",
  "Multiple Sclerosis and neurological disease",
  "Hemophilia",
  "Immunology and inflammation",
  "Rare disease and specialty therapeutics",
  "HIV/AIDS",
  "Women's Health (contraception, breast cancer, migraine)",
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

      {/* FLAGSHIP CASE STUDIES GRID */}
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

      {/* SELECTED PHARMA & HEALTHCARE PRACTICE */}
      <section className="py-20 md:py-28 border-t border-border-subtle">
        <div className="max-w-wide mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl mb-14 md:mb-16">
            <p className="eyebrow mb-4">Practice depth</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
              Selected pharma and healthcare practice
            </h2>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              A decade across patient experience, HCP tools, sales enablement,
              regulated brand work, and AI integration. Selected examples below.
            </p>
          </div>

          <div className="space-y-16 md:space-y-20">
            {PRACTICE.map((group) => (
              <div key={group.category}>
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-text-primary mb-8 md:mb-10">
                  {group.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {group.tiles.map((tile) => (
                    <article
                      key={tile.name}
                      className="relative rounded-2xl card-surface border border-border-default overflow-hidden"
                    >
                      <div className="relative aspect-[16/10] bg-bg-raised">
                        <Image
                          src={tile.image}
                          alt={tile.alt}
                          fill
                          className="object-cover"
                          unoptimized={isAnimated(tile.image)}
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-6 md:p-7">
                        <h4 className="text-base md:text-lg font-semibold text-text-primary leading-snug mb-3">
                          {tile.name}
                        </h4>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {tile.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THERAPEUTIC AREAS COVERED */}
      <section className="py-20 md:py-28 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Therapeutic areas</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight mb-8 md:mb-10">
              Therapeutic areas covered
            </h2>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10 md:mb-12">
              A decade of work across:
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 md:gap-y-5 mb-12 md:mb-14">
              {THERAPEUTIC_AREAS.map((area) => (
                <li
                  key={area}
                  className="text-base md:text-lg text-text-primary leading-relaxed pl-5 relative"
                >
                  <span
                    className="absolute left-0 top-3 w-2 h-px bg-text-tertiary"
                    aria-hidden="true"
                  />
                  {area}
                </li>
              ))}
            </ul>

            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              Across patient, HCP, caregiver, and sales rep audiences. Across
              DTC, hub services, sales enablement (DSP, CVA, Veeva,
              Salesforce), and integrated digital ecosystems.
            </p>
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
