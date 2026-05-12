import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Financial Services CRM Transformation",
  description:
    "Redesigning rep workflows inside a terminal-driven CRM environment used company-wide. Architectural inquiry across three salesperson types.",
};

export default function Page() {
  return (
    <CaseStudyLayout
      eyebrow="(Case Study)"
      title="Enterprise Financial Services CRM Transformation"
      subtitle="Redesigning rep workflows inside a terminal-driven CRM environment used company-wide."
      heroImage="/images/case-studies/03-enterprise-financial-services-crm/01-hero-final-person-view-terminal.png"
      heroImageAlt="Final Person View in terminal CRM environment"
      metadata={[
        { label: "ENGAGEMENT", value: "Researcher + Engagement Strategist Lead" },
        { label: "YEAR", value: "2019" },
        { label: "SCOPE", value: "Three salesperson types · command-line CRM" },
        { label: "METHODOLOGY", value: "Architectural inquiry · in-person research" },
      ]}
      challenge={[
        "A major enterprise financial services platform — the kind whose terminal runs throughout the company, from the most junior operations role to the executive suite — needed to refine its CRM experience for sales teams. Some of the biggest financial decisions made daily are made via content distributed through that terminal. The CRM's ability to sell seats, expand relationships among existing seat-holders, and retain those seat-holders was directly connected to the success of this initiative.",
        "The existing system was functional but aging. Information was dense. Decisions were slow. Scanability was inconsistent across modules. Three distinct salesperson types — each with different daily workflows and different mental models — were using the same system, but only one of them was really designed for.",
        "The challenge wasn't replacing the system. It was understanding what the actual users were doing in it, identifying the friction points that cost real time, and proposing changes that could be implemented quickly within a development environment defined by command-line constraints unique to the platform.",
      ]}
      approach={[
        "I led the engagement through architectural inquiry. I personally scheduled, scripted, and ran in-person interviews with the three salesperson types — bringing stimulus and prototypes into each conversation rather than asking abstract questions about workflow preferences. I served as researcher, engagement strategist, and the liaison between the R&D team commissioning the work and the development team that would implement it.",
        "The final presentation went screen by screen, module by module: which screens should be moved, which modules should be recomposed, which interactions should be redesigned to be most efficient across all three salesperson types. The recommendations weren't speculative — they came directly from observed friction in real workflows.",
        "The CRM facelift and design system refinement that followed enabled cleaner scanability, quicker decisions, and faster task completion across the rep experience. UI refinements were prioritized based on the cost of friction in actual rep workflows, not on aesthetic preference.",
        "The technical constraint that shaped everything: this is a command-line-driven terminal system. The entire company runs on it. Every interface decision had to work within those constraints. There was no option to redesign the underlying paradigm. The work was about making the existing system clearer, faster, and more aligned to how three different rep types actually do their jobs.",
      ]}
      pullQuote="What's distinct about this work is the platform itself. The whole company runs off this terminal — from the most junior role to senior leadership. Some of the biggest financial decisions made daily run through it."
      midImages={[
        {
          src: "/images/case-studies/03-enterprise-financial-services-crm/02-wireframe-bi-view-ia-structure.png",
          alt: "Wireframe BI View showing information architecture structure",
        },
        {
          src: "/images/case-studies/03-enterprise-financial-services-crm/06-person-view-with-usage-chart.png",
          alt: "Person View with usage analytics module rendered live",
        },
      ]}
      outcomes={[
        {
          headline: "In-person research with three salesperson types",
          description:
            "Interview scripting, stimulus design, prototype reactions, and synthesis across all three rep archetypes — junior operations, mid-level relationship managers, and senior client leads.",
        },
        {
          headline: "Final recommendations delivered screen-by-screen",
          description:
            "Module-by-module — actionable, prioritized, and scoped to the command-line implementation environment.",
        },
        {
          headline: "CRM and design system facelift",
          description:
            "Enabled cleaner scanability, quicker decision-making, and faster task completion across the rep experience.",
        },
        {
          headline: "UI refinements prioritized by friction cost",
          description:
            "Changes that reduced actual time-in-task rather than changes that looked good in isolation.",
        },
        {
          headline: "Cross-functional liaison work",
          description:
            "Between R&D and development teams ensured that proposed changes were both feasible and prioritized correctly given the platform's technical constraints.",
        },
      ]}
      bottomImages={[
        {
          src: "/images/case-studies/03-enterprise-financial-services-crm/03-miro-research-synthesis-template.png",
          alt: "Miro research template synthesis across stakeholders",
        },
        {
          src: "/images/case-studies/03-enterprise-financial-services-crm/04-bcrm-data-architecture-diagram.png",
          alt: "BCRM high level view data architecture diagram",
        },
      ]}
      closer={[
        "Architectural inquiry isn't a method you can shortcut. The decisions that mattered came from in-person interviews with the actual users — scripted carefully, stimulus prepared, prototypes ready. The research wasn't a survey or a workshop output. It was time spent watching three different rep types do their actual work, then synthesizing what slowed them down.",
        "In enterprise software with deep platform constraints, the senior design work isn't dreaming up new paradigms. It's understanding what the current system makes hard, and proposing the smallest set of changes that have the largest impact on time-in-task.",
      ]}
      ctaHeadline="Working on a similar enterprise CRM challenge?"
      related={[
        {
          slug: "multi-brand-pharma-sales-tools",
          eyebrow: "Biogen · Veeva + Salesforce",
          title: "A modular sales tool system that supports a multi-brand product portfolio",
          description:
            "12 sales tools consolidated into 33 reusable components. Adoption from 65% to 92%.",
          image:
            "/images/case-studies/02-multi-brand-pharma-sales-tools/01-hero-lead-brand-wireframe-to-product.png",
        },
        {
          slug: "cancer-equality-app",
          eyebrow: "Chrysalis Initiative · Patient Experience",
          title: "A patient navigation platform for women facing bias in cancer care",
          description:
            "D&AD Pencil 2022 for Future Impact. Two-sided platform connecting patients with trained coaches and peer navigators.",
          image:
            "/images/case-studies/04-cancer-equality-app/01-hero-erase-the-line-campaign-poster.jpeg",
        },
      ]}
    />
  );
}
