import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { CaseStudyCarousel } from "@/components/CaseStudyCarousel";
import { RotatingProductShowcase } from "@/components/RotatingProductShowcase";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multi-Brand Sales Design System",
  description:
    "A modular sales design system consolidating 12 fragmented tools across a multi-brand neurological portfolio. 33 reusable components. Adoption from 65% to 92%.",
};

const ASSET_BASE =
  "/images/case-studies/02-multi-brand-pharma-sales-tools";

export default function Page() {
  return (
    <CaseStudyLayout
      eyebrow="(Case Study)"
      title="Multi-Brand Sales Design System"
      subtitle="A modular sales design system consolidating 12 fragmented tools across a multi-brand neurological portfolio."
      heroImage={`${ASSET_BASE}/01-hero-lead-brand-wireframe-to-product.png`}
      heroImageAlt="Lead MS brand homepage wireframe alongside the finished product"
      metadata={[
        { label: "ENGAGEMENT", value: "Lead Product Designer, multi-brand sales design system" },
        { label: "YEAR", value: "2020–2021" },
        { label: "TIMELINE", value: "18 months" },
        { label: "PLATFORM", value: "Veeva + Salesforce" },
      ]}
      challenge={[
        "Pharmaceutical sales reps were juggling 12 different sales tools across a major neurological brand portfolio. Each tool had its own navigation, its own taxonomy, its own visual structure. All of them ran on Veeva with Salesforce integration, but they weren't operating as a system.",
        "Reps had to relearn navigation every time they switched products. Brand managers maintained independent approaches that drifted further apart with each release. Regulatory reviews repeated similar conversations across separate tools. Development resources were duplicated across teams who weren't talking to each other.",
        "The friction wasn't obvious to executives. But it was costing time, money, and the confidence reps needed in conversations with healthcare providers, conversations that often ran 45 seconds to six minutes to a 12-minute coffee chat, with no way to predict in advance which version it would be.",
      ]}
      approach={[
        "I came onto the engagement at the pitch stage, helping define the opportunity, prototype the proposed system, and ultimately win the business. Once the work was won, I partnered with brand managers internally to map components to each brand's particular content needs, and with development teams to ensure templates and design system rules would scale across the current portfolio and through future product indication expansion.",
        "The result was a modular enterprise design system. Thirty-three reusable components. Unified navigation structure. Standardized taxonomy. Flexible content architecture that supported both 45-second elevator pitches and six-minute deeper conversations. Salesforce-integrated interaction tracking. Embedded resource-sharing pathways for PDFs, video, and rep-to-HCP follow-ups. Built-in field notes for pre-call planning and post-call follow-up.",
        "Brand teams could still express campaign identity. But inside a governed design system. The result wasn't uniformity. It was structured flexibility.",
        "The harder work was organizational. Brand managers had to give up some autonomy to gain shared infrastructure. Regulatory teams had to trust pre-approved components. Development teams had to commit to the framework instead of building bespoke solutions on every brief. None of that happens because the system is well-designed. It happens because the governance is.",
      ]}
      pullQuote="Designing for an audience that might have 45 seconds versus six minutes versus sit down for a cup of coffee, 12 minutes, you really have to be agile. The consistency made their job easier. The field notes feature let them pick up where they left off and know what to send to the office post-call."
      processCarousel={
        <CaseStudyCarousel
          eyebrow="(Process)"
          heading="The walk-through"
          openingFrame={`"This is a story in four moves: the foundation we built before pixels (sitemap plus atomic design), the system in spec form (wireframe plus component library), the service design that connected the rep's workflow, and the polished product that shipped across brands."`}
          closingBridge={`"Lilly's portfolio has the same shape: many brands, many sales surfaces. The design system itself is the easier part. The architectural thinking, the system spec, the service design, the cross-functional partnership, that's the work that determines whether a system survives. I've done this end to end."`}
          keyPhrases={[
            "Strategy first, screens second",
            "Design system as connective tissue across the business workflow",
            "Structured flexibility, not uniformity",
            "Governance work determines whether the system survives",
            "Service design at the workflow level, not just UI",
            "Pre-approved components reduce regulatory cycles at the system level",
          ]}
          slides={[
            // ─── Slide 1: FOUNDATION ─────────────────────────────────
            {
              tag: "ARCHITECTURE",
              title: "Starting with structure: content map plus atomic foundation",
              body:
                "Two architectural maps governed everything that followed. The atomic design framework defined how UI scales from atoms to molecules to organisms to templates to pages. The sitemap defined how content was organized across the brand's therapeutic territory: pivotal trial, comparative efficacy, safety, MRI, newly diagnosed, response. Before any pixel was designed, these two maps determined what the system could become.",
              media: (
                <div className="flex flex-col gap-4 lg:gap-5 w-full">
                  <div
                    style={{
                      borderRadius: "8px",
                      overflow: "hidden",
                      border: "1px solid rgba(255,255,255,0.08)",
                      background: "#fff",
                      boxShadow:
                        "0 8px 20px -6px rgba(0,0,0,0.35), 0 18px 40px -16px rgba(0,0,0,0.5)",
                      padding: "1.25rem 1rem",
                    }}
                  >
                    <Image
                      src={`${ASSET_BASE}/carousel-01-atomic-design.png`}
                      alt="Atomic design hierarchy diagram: Atoms, Molecules, Organisms, Templates, Pages"
                      width={1500}
                      height={600}
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>

                  <div
                    style={{
                      borderRadius: "8px",
                      overflow: "hidden",
                      border: "1px solid rgba(255,255,255,0.08)",
                      background: "#fff",
                      boxShadow:
                        "0 8px 20px -6px rgba(0,0,0,0.35), 0 18px 40px -16px rgba(0,0,0,0.5)",
                    }}
                  >
                    <Image
                      src={`${ASSET_BASE}/carousel-01-sitemap.png`}
                      alt="Content sitemap showing seven topic columns: Pivotal Trial, Comparative Efficacy, Safety and Tolerability, Experience, MRI, Newly Diagnosed, RESPOND, with sub-topics underneath each"
                      width={1107}
                      height={680}
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                </div>
              ),
              signal:
                "I lead with strategy, not screens. The foundational thinking shapes everything downstream.",
              anticipate:
                '"How did you decide the right level of abstraction in the sitemap?" → Brand teams already had their content priorities. The sitemap mapped what existed and what was missing. The TEC_CC numbering convention came from the regulatory team\'s existing structure, so they could find everything by topic ID. The system spoke the language of the teams using it, not the other way around.',
            },

            // ─── Slide 2: SYSTEM IN SPEC FORM ─────────────────────────
            {
              tag: "SYSTEM",
              title: "Modular by spec: one template, 33 reusable parts",
              body:
                "The wireframe defined the page-level structure every brand would inherit: home, navigation, tabs, content, important safety information, footer. The component library catalogued the 33 reusable parts: navigation, ISIs, footer, carousels, video, content modules. Each part had behavioral rules. Brand teams composed; they didn't reinvent.",
              media: (
                <div className="flex flex-col gap-4 lg:gap-5 w-full">
                  <div
                    style={{
                      borderRadius: "8px",
                      overflow: "hidden",
                      border: "1px solid rgba(255,255,255,0.08)",
                      background: "#fff",
                      boxShadow:
                        "0 8px 20px -6px rgba(0,0,0,0.35), 0 18px 40px -16px rgba(0,0,0,0.5)",
                    }}
                  >
                    <Image
                      src={`${ASSET_BASE}/carousel-02-wireframe-template.png`}
                      alt="Generic sales tool wireframe template: home navigation, tabs, content area with placeholder data visualization, important safety information block, footer"
                      width={1240}
                      height={930}
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>

                  <div
                    style={{
                      borderRadius: "8px",
                      overflow: "hidden",
                      border: "1px solid rgba(255,255,255,0.08)",
                      background: "#fff",
                      boxShadow:
                        "0 8px 20px -6px rgba(0,0,0,0.35), 0 18px 40px -16px rgba(0,0,0,0.5)",
                    }}
                  >
                    <Image
                      src={`${ASSET_BASE}/carousel-02-component-library.png`}
                      alt="Component library catalog showing six categories: Navigation, ISIs, Footer, Carousels, Video, Content Modules"
                      width={1497}
                      height={745}
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                </div>
              ),
              signal:
                "I think in systems. The spec exists before the brand expression.",
              anticipate:
                '"How did you handle component versioning?" → Each component had a version pinned to the system release. Updates propagated through review at the system level. Brand teams could opt into new versions or pin to current. No silent breaking changes. That gave brand teams the confidence to commit, knowing the ground under them was stable.',
            },

            // ─── Slide 3: SERVICE DESIGN ─────────────────────────────
            {
              tag: "SERVICE DESIGN",
              title: "Not just UI: connective tissue for the rep's actual workflow",
              body:
                "The design system wasn't a UI library. It was a service. Pre-call: Eva briefed the rep on the day's events and surfaced HCP intelligence through MyInsights. In-call: the rep selected from recommended call flows or customized on the fly. Post-call: Eva captured notes via dictation, and an automated email to the HCP went out with content tied to the conversation. The UI was one leg of a four-legged service.",
              media: (
                <div
                  style={{
                    borderRadius: "8px",
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "#fff",
                    boxShadow:
                      "0 8px 20px -6px rgba(0,0,0,0.35), 0 18px 40px -16px rgba(0,0,0,0.5)",
                    padding: "2rem 1rem",
                  }}
                  className="w-full"
                >
                  <Image
                    src={`${ASSET_BASE}/carousel-03-rep-journey.png`}
                    alt="Service design diagram: rep on one side, HCP on the other, data store at center. Four touchpoints: Pre-Call (Eva briefing plus MyInsights), In-Call (rep selects or customizes call flow), Post-Call (Eva dictation captures notes), Post-Call (automated email to HCP with related content)"
                    width={1200}
                    height={780}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      maxWidth: "880px",
                      margin: "0 auto",
                    }}
                  />
                </div>
              ),
              signal:
                "I think about design systems as connective tissue across an entire business workflow, not just as a UI layer.",
              anticipate:
                '"How did Eva and the dictation layer get adopted?" → The voice interaction layer was the riskiest part. We piloted it with two friendly brand teams first. Their feedback shaped the cues, the prompts, and the recovery flows. By the time it rolled out broadly, the rough edges were gone and the early adopters were the loudest advocates.',
            },

            // ─── Slide 4: OUTCOME ────────────────────────────────────
            {
              tag: "OUTCOME",
              title: "Twelve sales tools. One system. Brands that still feel like themselves.",
              body:
                "The same wireframe structure rendered as Brand A, as Brand B, as the integrated sales rep CRM. Each brand kept its visual identity. Each rep could move between brands without losing orientation. Sales reps gained navigation memory; brand managers gained speed-to-market; the organization gained a system that would keep working long after the initial rollout.",
              media: (
                <RotatingProductShowcase
                  intervalMs={4500}
                  items={[
                    {
                      src: `${ASSET_BASE}/carousel-04-product-brand-a.png`,
                      alt: "Polished product: brand A landing experience with brand menu and topic tiles",
                      label: "Brand A · Patient-facing experience",
                    },
                    {
                      src: `${ASSET_BASE}/carousel-04-product-brand-b.png`,
                      alt: "Polished product: brand B home with brand hero imagery and topic tile navigation",
                      label: "Brand B · Patient-facing experience",
                    },
                    {
                      src: `${ASSET_BASE}/carousel-04-product-sales-rep-crm.png`,
                      alt: "Polished product: integrated sales rep CRM showing HCP profile, recently shown brand tiles, recommended next-best content, call notes",
                      label: "Sales rep CRM · HCP intelligence layer",
                    },
                  ]}
                />
              ),
              signal:
                "I balance brand sovereignty with system governance. The system serves the brand; the brand doesn't fight the system.",
              anticipate:
                '"What was the moment brand managers stopped resisting?" → Around month 8, the second wave of brand launches happened. The brand teams that had used the system saw their colleagues\' campaigns ship faster with fewer regulatory cycles. The internal sales pitch from brand to brand was more persuasive than anything I could have made. After that, brand managers were asking when their next launch could move onto the system.',
            },
          ]}
        />
      }
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
          src: `${ASSET_BASE}/04-lead-brand-global-experience-340k.png`,
          alt: "Lead brand global experience proof point, over 340K patients treated",
        },
        {
          src: `${ASSET_BASE}/05-psoriasis-pasi-pga-assessment-tools.png`,
          alt: "PASI/PGA psoriasis assessment tools, cross-therapeutic system extension",
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
          eyebrow: "Multi-Brand · 3x Design Systems · Governance",
          title: "Building digital governance across 70+ therapeutic brands",
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
