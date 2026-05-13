import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multi-Brand Sales Tool Design System",
  description:
    "A modular sales tool design system consolidating 12 fragmented tools across a multi-brand neurological portfolio. 33 reusable components. Adoption from 65% to 92%.",
};

export default function Page() {
  return (
    <CaseStudyLayout
      eyebrow="(Case Study)"
      title="Multi-Brand Sales Tool Design System"
      subtitle="A modular sales tool design system consolidating 12 fragmented tools across a multi-brand neurological portfolio."
      heroImage="/images/case-studies/02-multi-brand-pharma-sales-tools/01-hero-lead-brand-wireframe-to-product.png"
      heroImageAlt="Lead MS brand homepage wireframe alongside the finished product"
      metadata={[
        { label: "ENGAGEMENT", value: "Lead Product Designer, multi-brand sales tools" },
        { label: "YEAR", value: "2020–2021" },
        { label: "TIMELINE", value: "18 months" },
        { label: "PLATFORM", value: "Veeva + Salesforce" },
      ]}
      challenge={[
        "Pharmaceutical sales reps were juggling 12 different sales tools across a major neurological brand portfolio. Each tool had its own navigation, its own taxonomy, its own visual structure. All of them ran on Veeva with Salesforce integration, but they weren't operating as a system.",
        "Reps had to relearn navigation every time they switched products. Brand managers maintained independent approaches that drifted further apart with each release. Regulatory reviews repeated similar conversations across separate tools. Development resources were duplicated across teams who weren't talking to each other.",
        "The friction wasn't obvious to executives. But it was costing time, money, and the confidence reps needed in conversations with healthcare providers — conversations that often ran 45 seconds to six minutes to a 12-minute coffee chat, with no way to predict in advance which version it would be.",
      ]}
      approach={[
        "I came onto the engagement at the pitch stage — helping define the opportunity, prototype the proposed system, and ultimately win the business. Once the work was won, I partnered with brand managers internally to map components to each brand's particular content needs, and with development teams to ensure templates and design system rules would scale across the current portfolio and through future product indication expansion.",
        "The result was a modular enterprise design system. Thirty-three reusable components. Unified navigation structure. Standardized taxonomy. Flexible content architecture that supported both 45-second elevator pitches and six-minute deeper conversations. Salesforce-integrated interaction tracking. Embedded resource-sharing pathways for PDFs, video, and rep-to-HCP follow-ups. Built-in field notes for pre-call planning and post-call follow-up.",
        "Brand teams could still express campaign identity. But inside a governed design system. The result wasn't uniformity. It was structured flexibility.",
        "The harder work was organizational. Brand managers had to give up some autonomy to gain shared infrastructure. Regulatory teams had to trust pre-approved components. Development teams had to commit to the framework instead of building bespoke solutions on every brief. None of that happens because the system is well-designed. It happens because the governance is.",
      ]}
      pullQuote="Designing for an audience that might have 45 seconds versus six minutes versus sit down for a cup of coffee, 12 minutes — you really have to be agile. The consistency made their job easier. The field notes feature let them pick up where they left off and know what to send to the office post-call."
      midImages={[
        {
          src: "/images/case-studies/02-multi-brand-pharma-sales-tools/02-rep-tablet-sales-flow-storyboard.png",
          alt: "Veeva sales flow storyboard, 8-frame walkthrough on rep tablet",
        },
        {
          src: "/images/case-studies/02-multi-brand-pharma-sales-tools/03-franchise-multi-brand-email-content-selector.png",
          alt: "Neurological franchise multi-brand portfolio with email content selector",
        },
      ]}
      outcomes={[
        {
          headline: "12 sales tools consolidated into 33 reusable components",
          description:
            "A modular framework that brand teams could compose into custom presentations while maintaining unified navigation and standardized taxonomy.",
        },
        {
          headline: "40% reduction in search time",
          description:
            "During sales rep conversations with healthcare providers. Reps could navigate the system instinctively instead of relearning each tool.",
        },
        {
          headline: "60% faster onboarding for new sales representatives",
          description:
            "Once the system was learned, it worked the same across every brand. New hires reached productivity faster.",
        },
        {
          headline: "45% reduction in development and maintenance costs",
          description:
            "Through standardization. The system was built once and served many. Brand teams added campaigns without rebuilding infrastructure.",
        },
        {
          headline: "Tool adoption increased from 65% to 92%",
          description:
            "Within 12 months of system launch. Reps used the tools because the tools worked the way reps actually work.",
        },
        {
          headline: "Regulatory review cycles simplified",
          description:
            "Pre-approved components eliminated duplicate review conversations across brands. Speed-to-market improved at the system level, not just per launch.",
        },
        {
          headline: "Built once. Designed to scale.",
          description:
            "Serving the current portfolio and ready for future brand launches without rebuild.",
        },
      ]}
      bottomImages={[
        {
          src: "/images/case-studies/02-multi-brand-pharma-sales-tools/04-lead-brand-global-experience-340k.png",
          alt: "Lead brand global experience proof point — over 340K patients treated",
        },
        {
          src: "/images/case-studies/02-multi-brand-pharma-sales-tools/05-psoriasis-pasi-pga-assessment-tools.png",
          alt: "PASI/PGA psoriasis assessment tools — cross-therapeutic system extension",
        },
      ]}
      closer={[
        "Most enterprise system failures aren't design failures. They're governance failures. The components were never the hard part. The hard part was getting brand teams, regulatory teams, and development teams to agree on the cost of fragmentation and the value of doing the work together.",
        "The design system was built once. It serves many. That's the difference between design that scales and design that fragments.",
      ]}
      ctaHeadline="Working through similar fragmentation?"
      related={[
        {
          slug: "pharma-design-systems",
          eyebrow: "Pfizer · Multi-Brand · Regulated Industry",
          title: "Building digital governance across 15+ therapeutic brands",
          description:
            "$3.5M+ in digital transformation. Industry-first mobile wallet integration for patient medication information.",
          image: "/images/hero/consumer-care-hub-hero-balanced.gif",
        },
        {
          slug: "enterprise-financial-services-crm",
          eyebrow: "Bloomberg · Terminal Environment",
          title: "Redesigning CRM workflows inside a terminal-driven enterprise environment",
          description:
            "Architectural inquiry with three rep types. Faster scanability, quicker decisions, measurable time-in-task reduction.",
          image:
            "/images/case-studies/03-enterprise-financial-services-crm/01-hero-final-person-view-terminal.png",
        },
      ]}
    />
  );
}
