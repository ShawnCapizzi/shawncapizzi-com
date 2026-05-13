import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pharma Design Systems & Multi-Brand Architecture",
  description:
    "Building digital governance across 15+ therapeutic brands. $3.5M+ in digital transformation, three enterprise design systems, and an industry-first mobile wallet integration.",
};

export default function Page() {
  return (
    <CaseStudyLayout
      eyebrow="(Case Study)"
      title="Pharma Design Systems & Multi-Brand Architecture"
      subtitle="Building digital governance across 15+ therapeutic brands."
      heroImage="/images/hero/consumer-care-hub-hero-balanced.gif"
      heroImageAlt="Consumer care hub homepage — A new offer to help Americans save"
      metadata={[
        { label: "ENGAGEMENT", value: "Enterprise design system leadership" },
        { label: "YEAR", value: "2024–present" },
        { label: "SCALE", value: "$3.5M+ digital transformation" },
        { label: "SCOPE", value: "15+ brands · DTC · HCP · patient" },
      ]}
      challenge={[
        "A major pharma organization's digital ecosystem had grown organically across more than 15 therapeutic brands. Each team had its own design language, its own information architecture, its own approach to regulatory review. The result wasn't a system. It was 15 systems pretending to be one.",
        "The cost was real. Operational inefficiency. Inconsistent patient and HCP experiences. Compliance risk that varied brand by brand. A speed-to-market problem in therapeutic spaces where launch timing matters in millions of dollars. Resource waste across 60+ team members running concurrent projects without shared infrastructure.",
        "The leadership team needed digital governance that could support a multi-billion dollar therapeutic portfolio without slowing the brand teams down.",
      ]}
      approach={[
        "I led the architecture and governance of three enterprise design systems, each serving a different audience and use case across the portfolio.",
        "The work happened in three layers. The first was strategic — direct partnership with CTOs and senior business strategists on multi-million dollar digital initiative planning, including ROI documentation that could be reported to the board.",
        "The second was architectural — defining the modular component logic, taxonomy, and content frameworks that would govern brand work across the portfolio. Each brand operates inside its own sandbox, working out particular content needs and creative expression within the governance framework. The system is intentionally restrained. Working with copywriters, medical strategists, and regulatory partners, I helped brand teams build information architecture that served both the system and the scientific story.",
        "The third was operational — a governance training program shared with copy, design, and media partners. The training teaches the correct way to leverage the system, the tolerance to which it can be modified, and best practices for initial setup. The goal isn't compliance enforcement. It's knowledge sharing.",
        "A specific innovation worth naming: I led the development of distribution channels for the Patient Design System, including a QR-based mobile wallet card for iOS and Android that gives patients fast access to co-pay information and medication support. It was an industry-first in pharma — only possible when the design system is built to support new patterns instead of resisting them.",
      ]}
      pullQuote="Knowledge sharing, and helping people alleviate their fears about a new design system — instead of seeing it as a constraint, but as an opportunity to get to market faster and be creative within regulated design constraints."
      midImages={[
        {
          src: "/images/case-studies/01-pharma-design-systems/02-typographic-scale-documentation.png",
          alt: "Typographic scale documentation for the design system",
        },
        {
          src: "/images/case-studies/01-pharma-design-systems/03-pfizer-eczema-brand-deployment.gif",
          alt: "Brand deployment built on the design system — patient-facing eczema treatment site with branded eligibility CTA and regulatory disclosure footer",
        },
        {
          src: "/images/case-studies/01-pharma-design-systems/04-modular-step-component.png",
          alt: "Modular step component module documentation",
        },
      ]}
      outcomes={[
        {
          headline: "$3.5M+ in digital transformation investment",
          description:
            "Documented at the executive level across the portfolio — and the program continues to expand under new leadership.",
        },
        {
          headline: "Three design systems serving three audiences",
          description:
            "One focused on DTC and unbranded work, one on HCP-facing unified content and resource repositories, and one focused specifically on patient support onboarding.",
        },
        {
          headline: "Industry-first mobile wallet integration",
          description:
            "QR-based, FDA-compliant patient medication information deployed across iOS and Android for co-pay and patient support access.",
        },
        {
          headline: "Accelerated speed-to-market",
          description:
            "Across product launches spanning day-one through 5-year study implementations.",
        },
        {
          headline: "Optimized vendor management",
          description:
            "Across offshore and onshore development teams, reducing costs while maintaining brand consistency across 15+ brands.",
        },
        {
          headline: "Scalable infrastructure",
          description:
            "Built to support future therapeutic area expansion and global market entry. Markets that don't use specific talking points can omit components without breaking the system. Time-to-market improves visibly.",
        },
      ]}
      bottomImages={[
        {
          src: "/images/case-studies/01-pharma-design-systems/03-color-palette-wcag-accessibility.png",
          alt: "Color palette and WCAG accessibility documentation",
        },
        {
          src: "/images/case-studies/01-pharma-design-systems/05-vaccine-content-audit-scientific-story.gif",
          alt: "Vaccine content audit and scientific story strategy",
        },
      ]}
      closer={[
        "A design system isn't a Figma library. It's organizational infrastructure. The version that survives — the version brand teams actually use five years later — is the one whose governance is as carefully designed as its components.",
        "This engagement is that work. Less visible than a single product launch. More valuable.",
      ]}
      ctaHeadline="Working through something similar?"
      related={[
        {
          slug: "multi-brand-pharma-sales-tools",
          eyebrow: "Biogen · Veeva + Salesforce",
          title:
            "A modular sales tool system that supports a multi-brand product portfolio",
          description:
            "12 sales tools consolidated into 33 reusable components. Adoption from 65% to 92%.",
          image:
            "/images/case-studies/02-multi-brand-pharma-sales-tools/01-hero-lead-brand-wireframe-to-product.png",
        },
        {
          slug: "ai-native-product-design-lab",
          eyebrow: "Solo · AI Native Design Lab",
          title: "Building an AI-native product design lab",
          description:
            "A working AI-native product design practice — UXR tools, prototype agents, healthcare-first applications.",
          image:
            "/images/case-studies/05-ai-native-product-design-lab/01-hero-ai-native-design-lab.png",
        },
      ]}
    />
  );
}
