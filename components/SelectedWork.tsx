import Image from "next/image";
import Link from "next/link";

const CASE_STUDIES = [
  {
    slug: "pharma-design-systems",
    eyebrow: "Multi-Brand · 3x Design Systems · Governance",
    headline: "Building digital governance across 15+ therapeutic brands",
    outcome: "$3.5M+ in digital transformation. Industry-first mobile wallet integration for patient medication information.",
    image: "/images/hero/consumer-care-hub-hero-balanced.gif",
  },
  {
    slug: "enterprise-financial-services-crm",
    eyebrow: "Bloomberg · Financial services · Enterprise CRM",
    headline: "Redesigning rep workflows in a terminal-driven CRM environment",
    outcome: "In-person research with three salesperson types. Cleaner scanability, faster decisions, faster task completion.",
    image: "/images/case-studies/03-enterprise-financial-services-crm/01-hero-final-person-view-terminal.png",
  },
  {
    slug: "cancer-equality-app",
    eyebrow: "Patient experience · Healthcare equity · D&AD Pencil 2022",
    headline: "A patient navigation platform for women facing bias in cancer care",
    outcome: "Built with The Chrysalis Initiative and founder Jamila. Recognized with a D&AD Pencil. The meaningful outcome was connecting patients with coaches who helped navigate their cancer journey to better care.",
    image: "/images/case-studies/04-cancer-equality-app/01-hero-erase-the-line-campaign-poster.jpeg",
  },
  {
    slug: "multi-brand-pharma-sales-tools",
    eyebrow: "Multi-Brand Design System · Veeva + Salesforce",
    headline: "A modular sales design system that supports a multi-brand product portfolio",
    outcome: "12 sales tools consolidated into 33 reusable components. Adoption from 65% to 92%.",
    image: "/images/case-studies/02-multi-brand-pharma-sales-tools/01-hero-lead-brand-wireframe-to-product.png",
  },
  {
    slug: "ai-native-product-design-lab",
    eyebrow: "AI integration · Healthcare prototyping · Vendor-agnostic",
    headline: "How I use AI to accelerate research, design, prototype, and delivery",
    outcome: "Built on years of bringing teams together. Working prototypes, deployed Custom GPTs, and a contrarian thesis: AI is the boring work most companies haven't done yet.",
    image: "/images/case-studies/05-ai-native-product-design-lab/01-hero-ai-patient-support-disease-first.png",
  },
];

export function SelectedWork() {
  return (
    <section className="py-24 md:py-32 border-t border-border-subtle">
      <div className="max-w-wide mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">Case studies</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
            Selected work
          </h2>
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
            Engagements where experience structure changed the business outcome.
          </p>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {CASE_STUDIES.map((cs) => (
            <Link
              key={cs.slug}
              href={`/work/${cs.slug}`}
              className="group relative block rounded-2xl card-surface border border-border-default hover:border-border-strong overflow-hidden transition-colors"
            >
              <div className="relative aspect-[4/3] bg-bg-raised overflow-hidden">
                <Image
                  src={cs.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
              </div>
              <div className="p-7 md:p-8">
                <p className="font-mono text-xs tracking-widest uppercase text-text-tertiary">
                  {cs.eyebrow}
                </p>
                <h3 className="mt-3 text-xl md:text-2xl font-semibold tracking-tight leading-snug text-text-primary">
                  {cs.headline}
                </h3>
                <p className="mt-4 text-sm md:text-base text-text-secondary leading-relaxed">
                  {cs.outcome}
                </p>
                <p className="mt-6 inline-flex items-center text-sm font-medium text-link group-hover:text-link-hover transition-colors">
                  Read the case study <span aria-hidden="true" className="ml-2">→</span>
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 md:mt-16">
          <Link
            href="/work"
            className="inline-flex items-center text-base font-medium text-link hover:text-link-hover transition-colors"
          >
            View all work <span aria-hidden="true" className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
