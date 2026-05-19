import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { CaseStudyCarousel } from "@/components/CaseStudyCarousel";
import { BrowserFrame } from "@/components/BrowserFrame";
import { TiltedPhoneFrame } from "@/components/TiltedPhoneFrame";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pharma Design Systems & Multi-Brand Architecture",
  description:
    "Governing 73 product brands with 3 design systems. $3.5M+ in digital transformation, three enterprise design systems serving HCP, DTC, and patient audiences, and an industry-first mobile wallet integration.",
};

export default function Page() {
  return (
    <CaseStudyLayout
      eyebrow="(Case Study)"
      title="Pharma Design Systems & Multi-Brand Architecture"
      subtitle="Governing 73 product brands with 3 design systems."
      heroImage="/images/hero/consumer-care-hub-hero-balanced.gif"
      heroImageAlt="Consumer care hub homepage. A new offer to help Americans save."
      metadata={[
        { label: "ENGAGEMENT", value: "Enterprise design system leadership" },
        { label: "YEAR", value: "2024–present" },
        { label: "SCALE", value: "$3.5M+ digital transformation" },
        { label: "SCOPE", value: "73 brands · 3 systems · HCP · DTC · patient" },
      ]}
      challenge={[
        "A major pharma organization's digital ecosystem had grown organically across 73 product brands spanning branded HCP sites, branded patient sites, and unbranded therapy education resources. Each team had its own design language, its own information architecture, its own approach to regulatory review. The result wasn't a system. It was 73 systems pretending to be one.",
        "The cost was real. Operational inefficiency. Inconsistent patient and HCP experiences. Compliance risk that varied brand by brand. A speed-to-market problem in therapeutic spaces where launch timing matters in millions of dollars. Resource waste across 60+ team members running concurrent projects without shared infrastructure.",
        "The leadership team needed digital governance that could support a multi-billion dollar therapeutic portfolio without slowing the brand teams down.",
      ]}
      approach={[
        "I led the architecture and governance of three enterprise design systems, each serving a different audience and use case across the portfolio.",
        "The work happened in three layers. The first was strategic: direct partnership with CTOs and senior business strategists on multi-million dollar digital initiative planning, including ROI documentation that could be reported to the board.",
        "The second was architectural: defining the modular component logic, taxonomy, and content frameworks that would govern brand work across all 73 brands. Each brand operates inside its own sandbox, working out particular content needs and creative expression within the governance framework. The system is intentionally restrained. Working with copywriters, medical strategists, and regulatory partners, I helped brand teams build information architecture that served both the system and the scientific story.",
        "The third was operational: a governance training program shared with copy, design, and media partners. The training teaches the correct way to leverage the system, the tolerance to which it can be modified, and best practices for initial setup. The goal isn't compliance enforcement. It's knowledge sharing.",
        "A specific innovation worth naming: I led the development of distribution channels for the Patient Design System, including a QR-based mobile wallet card for iOS and Android that gives patients fast access to co-pay information and medication support. It was an industry-first in pharma, made possible only because the design system was built to support new patterns instead of resisting them.",
      ]}
      pullQuote="Knowledge sharing, and helping people alleviate their fears about a new design system. Not as a constraint, but as an opportunity to get to market faster and be creative within regulated design constraints."
      midImages={[
        {
          src: "/images/case-studies/01-pharma-design-systems/02-typographic-scale-documentation.png",
          alt: "Typographic scale documentation for the design system",
        },
        {
          src: "/images/case-studies/01-pharma-design-systems/04-modular-step-component.png",
          alt: "Modular step component module documentation",
        },
      ]}
      // ─── Walk-through carousel ─────────────────────────────────────────
      processCarousel={
        <CaseStudyCarousel
          eyebrow="(Process & Journey)"
          heading="From context to outcome"
          openingFrame={`"This is a story about three things: a real enterprise design system problem; the strategic architecture I built to solve it; and the governance and training that let the system scale without my team being in the room for every decision."`}
          closingBridge={`"Lilly's portfolio has the same shape: multi-brand, regulated, high-stakes, audience-segmented. I've already done this work. I've already built the muscle for teaching it. I'm ready to come do it inside Lilly's system."`}
          keyPhrases={[
            "Scale without central team involvement for every decision",
            "Grow a team that does great work without me in the room",
            "Design system as strategic asset, not just a component library",
            "Governance through teaching, not enforcement",
            "Structured flexibility, not uniformity",
          ]}
          slides={[
            // ─── Slide 1 ────────────────────────────────────────────────
            {
              tag: "CONTEXT",
              title: "73 brands, governed by 3 design systems",
              body:
                "A multi-billion dollar therapeutic portfolio. 73 product brands, each with branded HCP sites, branded patient sites, and unbranded therapy education resources. Before the work: each brand grown organically with its own design language, information architecture, and approach to regulatory review. 60+ team members duplicating effort, speed-to-market measured in months when it should have been weeks, compliance risk varying brand by brand. The architectural answer: three design systems serving three audiences, with shared foundations and distinct audience logic.",
              image:
                "/images/case-studies/01-pharma-design-systems/carousel-01-pfizer-brand-index.png",
              imageAlt:
                "Pfizer brand index showing the full A–Z portfolio of 73 product brands, each with HCP, patient, and prescribing information surfaces",
              signal:
                "I can name and frame a real enterprise problem at the right altitude for leadership.",
              anticipate:
                '"How did you quantify the problem to leadership?" → ROI documentation reported at the board level. Speed-to-market deltas. 60+ team members duplicating effort across concurrent projects. The scope itself, 73 brands across three site types, was the case.',
            },

            // ─── Slide 2 ────────────────────────────────────────────────
            {
              tag: "STRATEGY & LEADERSHIP",
              title: "Three systems, three audiences",
              body:
                "I led the governance and evolution of three enterprise design systems, serving DTC, HCP-facing, and CRM patient support audiences. Each one shared UX patterns, design principles, and UI foundations, but applied distinct audience logic. The work happened in three layers: strategic partnership with brand managers, CTOs, and senior strategists on multi-million dollar planning with board-level ROI; architectural design of modular components, taxonomy, and content frameworks; and operational design of a governance training program.",
              media: (
                <BrowserFrame
                  src="/videos/carousel-02-patient-site-tour.mp4"
                  poster="/videos/carousel-02-patient-site-tour-poster.jpg"
                  url="elrexfio.com"
                  width={560}
                  tiltDegrees={0}
                />
              ),
              signal: "I think in layers and audiences, not in components.",
              anticipate:
                '"Why three systems instead of one?" → Each audience has different governance, different regulatory pathway, different content rhythm. One system would have collapsed under the weight. Shared foundations, distinct audience logic.',
            },

            // ─── Slide 3 ────────────────────────────────────────────────
            {
              tag: "PRACTICE & CRAFT",
              title: "Foundations designed for restraint",
              body:
                "A comprehensive color system with primary, secondary, neutral, accent, utility, background, and tinted variants. Disciplined enough to govern 73 brands, expressive enough to let each one keep its identity. The system is restrained on purpose. Restraint is what makes it scale.",
              image:
                "/images/case-studies/01-pharma-design-systems/carousel-03-color-system.png",
              imageAlt:
                "Color system documentation showing primary, secondary, neutral, accent, utility, background, and tinted color tokens",
              signal:
                "I am a craft person. I own the foundations and make nuanced decisions with rationale.",
              anticipate:
                '"Walk me through your token decisions." → Color hierarchy (primary → utility → tints), neutral scale logic, accessibility tradeoffs across the 7-tier system. Restraint is a design decision, not a missing one.',
            },

            // ─── Slide 4 ────────────────────────────────────────────────
            {
              tag: "SYSTEMS THAT EVOLVE",
              title: "An industry-first, made possible by the system",
              body:
                "A QR-based, FDA-compliant mobile wallet card for iOS and Android, delivering co-pay and patient support information directly to patients' phones. Industry-first in pharma. The pattern wasn't possible until the system was built to support new components instead of resisting them. A system that scales is a system that can evolve.",
              media: (
                <div className="w-full">
                  {/* Desktop ≥ lg: overlap composition (desktop + cloud + phone) */}
                  <div
                    className="hidden lg:flex"
                    style={{
                      position: "relative",
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      paddingTop: "1rem",
                      paddingBottom: "5rem",
                    }}
                  >
                    {/* Desktop browser: square-on, base layer */}
                    <BrowserFrame
                      src="/videos/carousel-04-wallet-desktop.mp4"
                      poster="/videos/carousel-04-wallet-desktop-poster.jpg"
                      url="elrexfio.com/support-and-savings/mobile-wallet-card"
                      width={460}
                      tiltDegrees={0}
                    />

                    {/* Soft brand-purple atmospheric cloud behind the phone */}
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        right: "calc(50% - 320px)",
                        bottom: "-40px",
                        width: "300px",
                        height: "460px",
                        zIndex: 1,
                        pointerEvents: "none",
                        background:
                          "radial-gradient(ellipse at center, rgba(107, 92, 255, 0.45) 0%, rgba(79, 70, 229, 0.25) 35%, rgba(232, 121, 249, 0.10) 65%, transparent 100%)",
                        filter: "blur(28px)",
                      }}
                    />

                    {/* Phone: absolutely positioned bottom-right of desktop */}
                    <div
                      style={{
                        position: "absolute",
                        right: "calc(50% - 260px)",
                        bottom: "0",
                        zIndex: 2,
                        pointerEvents: "none",
                      }}
                    >
                      <TiltedPhoneFrame
                        src="/videos/carousel-04-wallet-mobile.mp4"
                        poster="/videos/carousel-04-wallet-mobile-poster.jpg"
                        width={198}
                        tiltDegrees={8}
                      />
                    </div>
                  </div>

                  {/* Mobile < lg: stacked, both centered */}
                  <div className="flex lg:hidden flex-col items-center gap-6">
                    <div className="w-full max-w-md">
                      <BrowserFrame
                        src="/videos/carousel-04-wallet-desktop.mp4"
                        poster="/videos/carousel-04-wallet-desktop-poster.jpg"
                        url="elrexfio.com/support-and-savings/mobile-wallet-card"
                        width={400}
                        tiltDegrees={0}
                      />
                    </div>

                    {/* Cloud behind the centered phone for atmospheric continuity */}
                    <div className="relative flex justify-center items-center">
                      <div
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          width: "280px",
                          height: "420px",
                          zIndex: 1,
                          pointerEvents: "none",
                          background:
                            "radial-gradient(ellipse at center, rgba(107, 92, 255, 0.40) 0%, rgba(79, 70, 229, 0.22) 35%, rgba(232, 121, 249, 0.10) 65%, transparent 100%)",
                          filter: "blur(24px)",
                        }}
                      />
                      <div style={{ position: "relative", zIndex: 2 }}>
                        <TiltedPhoneFrame
                          src="/videos/carousel-04-wallet-mobile.mp4"
                          poster="/videos/carousel-04-wallet-mobile-poster.jpg"
                          width={180}
                          tiltDegrees={8}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ),
              signal:
                "I think about future-state from the start. New patterns are a feature of the system, not a failure of it.",
              anticipate:
                '"What was hardest about getting the wallet card approved?" → Regulatory partnership early, not late. Co-designing with medical and legal from sprint one.',
            },

            // ─── Slide 5 ────────────────────────────────────────────────
            {
              tag: "TRAINING & ENABLEMENT",
              title: "Governance through teaching, not enforcement",
              body:
                "A 150-page design system handbook shared with copy, design, and media partners. It teaches correct usage, the tolerance to which the system can be modified, and best practices for initial setup. The goal isn't compliance enforcement. It's knowledge sharing. The system has to scale without my team being in the room for every decision. $3.5M+ in documented digital transformation. The program continues to expand under new leadership.",
              image:
                "/images/case-studies/01-pharma-design-systems/carousel-05-handbook.png",
              imageAlt:
                "Design System handbook with 150 pages teaching contributors how to use and leverage components across brand stories",
              signal:
                'This slide lands the JD\'s headline ask. Echo the phrasing: "scale without the central team being in the room for every decision."',
              anticipate:
                '"How do you measure system literacy?" → Reduction in central team intervention requests over time. New brand onboarding speed. Variance in component application across teams.',
            },
          ]}
        />
      }
      outcomes={[
        {
          headline: "$3.5M+ in digital transformation investment",
          description:
            "Documented at the executive level across the portfolio. The program continues to expand under new leadership.",
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
        "A design system isn't a Figma library. It's organizational infrastructure. The version that survives, the version brand teams actually use five years later, is the one whose governance is as carefully designed as its components.",
        "This engagement is that work. Less visible than a single product launch. More valuable.",
      ]}
      ctaHeadline="Working through something similar?"
      related={[
        {
          slug: "multi-brand-pharma-sales-tools",
          eyebrow: "Multi-Brand Design System · Veeva + Salesforce",
          title:
            "A modular sales design system that supports a multi-brand product portfolio",
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
            "A working AI-native product design practice. UXR tools, prototype agents, healthcare-first applications.",
          image:
            "/images/case-studies/05-ai-native-product-design-lab/01-hero-ai-native-design-lab.png",
        },
      ]}
    />
  );
}
