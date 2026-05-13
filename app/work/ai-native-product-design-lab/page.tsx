import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Native Product Design Lab",
  description:
    "How I use AI to accelerate research, design, prototype, and delivery — built on years of bringing teams together. A vendor-agnostic AI practice grounded in healthcare and regulated environments.",
};

export default function Page() {
  return (
    <CaseStudyLayout
      eyebrow="(Case Study)"
      title="AI-Native Product Design Lab"
      subtitle="How I use AI to accelerate research, design, prototype, and delivery — built on years of bringing teams together."
      heroImage="/images/case-studies/05-ai-native-product-design-lab/01-hero-ai-native-design-lab.png"
      heroImageAlt="AI-Native Design Lab — disease-first patient support hero"
      metadata={[
        { label: "SCOPE", value: "Personal lab + selective client integration" },
        { label: "YEAR", value: "2022–present" },
        { label: "CAPABILITIES", value: "AI prototyping · Custom GPTs · Vendor-agnostic advisory" },
        { label: "STACK", value: "Claude · ChatGPT · v0 · Base44 · React" },
      ]}
      challenge={[
        "Most consultants advising on AI today are vendor-coded or theoretical. Few have actually built AI-augmented products end-to-end. Enterprise teams hiring AI advisors are getting slide decks and vendor partnerships. They're not getting people who can walk into a room, assess where AI actually fits, and demonstrate what's possible by building it in real time.",
        "I built this lab to keep AI fluency hands-on — not because I needed to add AI to my marketing, but because I wanted to know, from the inside, what the tools could actually do in a regulated, healthcare-adjacent context.",
      ]}
      approach={[
        "I'm classically trained — Pratt BFA in Communications Design and Advertising/Marketing, fine arts background, two decades as a graphic designer, marketer, and senior UX leader. AI experimentation began in 2022, alongside a creative practice that dates back to college.",
        "In 2022 I started using Midjourney and Runway to generate live visuals during live music performances — projected through two or three projectors, tied to lyrics and music in real time. Live performance is an unforgiving classroom for AI tooling. There's no regenerating when the band is playing. Everything I now know about how AI fits into design work started there.",
        "The lab has expanded into healthcare-specific prototypes and tools. AI Patient Support — a disease-first, brand-agnostic prototype proving that the future of patient support is condition-organized, not brand-organized. Channel Optimizer — an AI-assisted media-mix dashboard built in v0 in four hours that would have taken a four-week designer-engineer sprint in 2022. HealthSync Pro — a Garmin device integration prototype built on Base44 with regulatory-grade granular consent design. Apple Vision Pro concept work — in-office HCP education rendered in spatial computing, designed for the moment when an HCP and patient review data together.",
        "Three Custom GPTs deployed publicly — UX Research Advisor, Product Innovation and Case Study Helper, AEM Design Assistant — each live in ChatGPT, anyone can use them right now.",
        "And the Automation Opportunity Assessment — a six-part audit framework that moves an organization from 'we should be doing something with AI' to a prioritized, feasibility-tested roadmap. Workflow Audit → Feasibility → Impact → Agent Logic → Zapier Stack → Reflection. This is the deliverable I run inside Advisory engagements when a leadership team is being pitched AI by every vendor in their inbox and needs a vendor-agnostic read.",
      ]}
      pullQuote="Now any idea you can conceive, you can create stimulus to test. AI has become the everyman's opportunity to design and create — and the people who'll win are those with subtle nuance, who can tell good from better from great."
      midImages={[
        {
          src: "/images/case-studies/05-ai-native-product-design-lab/02-ai-patient-support-drug-detail.png",
          alt: "AI Patient Support — oncology IO lead deep dive",
        },
        {
          src: "/images/case-studies/05-ai-native-product-design-lab/03-channel-optimizer-in-v0-environment.gif",
          alt: "Channel Optimizer media-mix dashboard built in v0",
        },
      ]}
      outcomes={[
        {
          headline: "Working prototypes built in hours, not weeks",
          description:
            "AI Patient Support, Channel Optimizer, HealthSync Pro, Apple Vision Pro concept — all built using AI-assisted development tools (v0, Base44, Claude, ChatGPT).",
        },
        {
          headline: "Three Custom GPTs deployed publicly",
          description:
            "Working AI tools live in the world, not concepts in a deck. UX Research Advisor, Product Innovation Helper, AEM Design Assistant.",
        },
        {
          headline: "A vendor-agnostic AI advisory practice",
          description:
            "Built on hands-on tool experience, not vendor partnership commissions. The Automation Opportunity Assessment framework moves teams from intent to prioritized roadmap.",
        },
        {
          headline: "25+ years of creative practice extended with AI",
          description:
            "Not replaced by it. Annual live performance work continues, with another AI-assisted performance planned for August 2026.",
        },
        {
          headline: "A repeatable methodology for integrating AI into team workflows",
          description:
            "The 10 Source Packs framework feeds AI the inputs it needs to produce real strategic work, not generic output.",
        },
      ]}
      bottomImages={[
        {
          src: "/images/case-studies/05-ai-native-product-design-lab/04-healthsync-pro-on-base44.png",
          alt: "HealthSync Pro health-data integration prototype on Base44",
        },
        {
          src: "/images/case-studies/05-ai-native-product-design-lab/05-apple-vision-pro-ar-concept.png",
          alt: "Apple Vision Pro spatial computing concept for in-office HCP education",
        },
      ]}
      closer={[
        "Most teams hiring AI consultants get advice. The teams hiring me get advice plus a demonstration.",
        "AI isn't a strategy. It's a tool. The teams that win with AI long-term aren't the ones with the best models. They're the ones who treated the experience architecture around the model as the actual work.",
        "That's the lab. That's what I bring into client engagements. That's the difference.",
      ]}
      ctaHeadline="Working through AI integration in your team?"
      related={[
        {
          slug: "pharma-design-systems",
          eyebrow: "Multi-Brand · 3x Design Systems · Governance",
          title: "Building digital governance across 15+ therapeutic brands",
          description:
            "$3.5M+ in digital transformation. Industry-first mobile wallet integration for patient medication information.",
          image: "/images/hero/consumer-care-hub-hero-balanced.gif",
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
