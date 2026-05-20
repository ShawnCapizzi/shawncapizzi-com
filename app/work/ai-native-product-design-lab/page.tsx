import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Native Product Design Lab",
  description:
    "How I use AI to accelerate research, design, prototype, and delivery, built on years of bringing teams together. A vendor-agnostic AI practice grounded in healthcare and regulated environments.",
};

const ASSET_BASE = "/images/case-studies/05-ai-native-product-design-lab";

export default function Page() {
  return (
    <CaseStudyLayout
      eyebrow="(Case Study)"
      title="AI-Native Product Design Lab"
      subtitle="How I use AI to accelerate research, design, prototype, and delivery, built on years of bringing teams together."
      heroImage={`${ASSET_BASE}/01-hero-ai-native-design-lab.png`}
      heroImageAlt="AI-Native Design Lab, disease-first patient support hero"
      metadata={[
        { label: "SCOPE", value: "Personal lab + selective client integration" },
        { label: "YEAR", value: "2022–present" },
        {
          label: "CAPABILITIES",
          value:
            "AI prototyping · Methodology · Custom GPTs · Vendor-agnostic advisory",
        },
        {
          label: "STACK",
          value:
            "Claude · ChatGPT · Midjourney · Runway · v0 · Base44 · React · Next.js · Tailwind",
        },
      ]}
      challenge={[
        "Most consultants advising on AI today are vendor-coded or theoretical. Few have actually built AI-augmented products end-to-end. Enterprise teams hiring AI advisors are getting slide decks and vendor partnerships. They're not getting people who can walk into a room, assess where AI actually fits, and demonstrate what's possible by building it in real time.",
        "I built this lab to keep AI fluency hands-on, not because I needed to add AI to my marketing, but because I wanted to know, from the inside, what the tools could actually do in a regulated, healthcare-adjacent context.",
      ]}
      approach={[
        "I'm classically trained, Pratt BFA in Communications Design and Advertising/Marketing, fine arts background, two decades as a graphic designer, marketer, and senior UX leader. AI experimentation began in 2022, alongside a creative practice that dates back to college. My best friend, now Poet Laureate of Connecticut, and I co-founded a creative arts and music collective at Rider University. We've been collaborating creatively for 25+ years, getting together annually for live performances where I create live visual art alongside his poetry and music.",
        "In 2022 I started using Midjourney and Runway to generate live visuals during those performances, projected through two or three projectors, tied to lyrics and music in real time. Live performance is an unforgiving classroom for AI tooling. There's no regenerating when the band is playing. Everything I now know about how AI fits into design work started there.",
        "The lab has expanded since then into healthcare-specific prototypes and tools.",
      ]}
      pullQuote={[
        "Now any idea you can conceive, you can create stimulus to test. That speed-to-market is real.",
        "AI has become the everyman's opportunity to design and create, and the people who'll win are those with subtle nuance, who can tell good from better from great.",
        "My AI Native Lab work is about three things: efficiencies in my own work, the ability to help people, and the ability for the companies I work with to generate revenue.",
      ]}
      projectShowcases={[
        {
          eyebrow: "Prototype · Healthcare patient navigation",
          title: "AI Patient Support",
          description: [
            "The future of healthcare is disease-first, brand-second. The AI Patient Support concept is the working prototype that proves it. Instead of patients searching across twelve brand sites for assistance, they search by their disease and find every option in one place, every support program, savings card, study, KOL video, and patient story, verified and organized by condition.",
            "The concept covers Oncology (4 indications, 47 drugs), Diabetes, Cardiovascular, Immunology, Neurology, HIV/AIDS, Rare Disease, and Respiratory. Click a condition, find every drug. Click a drug, find every resource: support and savings, videos and media, downloadable materials, clinical studies, drug timeline, legal and safety. Each piece of media tagged by length (short, long), source (brand, YouTube, social), and category (patient stories, campaigns, KOL, community).",
          ],
          images: [
            {
              src: `${ASSET_BASE}/01-hero-ai-patient-support-demo.gif`,
              alt: "AI Patient Support live demo, disease-organized navigation across oncology, diabetes, cardiovascular, immunology, neurology, HIV/AIDS, rare disease, and respiratory",
              browserFrame: { url: "ai-patient-support.com" },
            },
            {
              src: `${ASSET_BASE}/02-ai-patient-support-drug-detail.png`,
              alt: "AI Patient Support drug detail view, oncology IO lead deep dive with tagged media by length, source, and category",
              browserFrame: { url: "ai-patient-support.com/oncology" },
            },
          ],
        },
        {
          eyebrow: "Prototype · AI-assisted dashboard, built in v0",
          title: "Channel Optimizer",
          description: [
            "An AI-assisted dashboard for media-mix decision support, built in v0. Channel performance, engagement metrics, and AI-generated insights and recommendations: \u201CIncrease budget allocation to social media campaigns by 15%,\u201D \u201CConsider reducing radio ad spend and reallocating to higher-performing channels.\u201D",
            "Built in 4 hours. Would have taken a 4-week designer-engineer sprint in 2022.",
          ],
          images: [
            {
              src: `${ASSET_BASE}/03-channel-optimizer-in-v0-environment.gif`,
              alt: "Channel Optimizer media-mix dashboard built in v0, showing channel performance metrics and AI-generated reallocation recommendations",
            },
          ],
        },
        {
          eyebrow: "Prototype · Health-data integration on Base44",
          title: "HealthSync Pro",
          description: [
            "A health-data integration prototype built on Base44, Garmin watch device configuration with regulatory-grade granular consent design. Heart rate, steps, sleep tracking, workout data, blood pressure, blood oxygen, body temperature, weight metrics, each with explicit user permission toggling.",
            "This is what AI-assisted prototyping looks like for healthcare specifically. Consent design isn't a checkbox feature. It's the product.",
          ],
          images: [
            {
              src: `${ASSET_BASE}/04-healthsync-pro-on-base44.png`,
              alt: "HealthSync Pro on Base44, Garmin device integration with granular consent toggles per metric: heart rate, steps, sleep, workouts, blood pressure, blood oxygen, body temperature, weight",
              browserFrame: { url: "healthsync-pro.app" },
            },
          ],
        },
        {
          eyebrow: "Concept · Spatial computing for in-office HCP education",
          title: "Apple Vision Pro Concept",
          description: [
            "In-office HCP education rendered inside a Vision Pro spatial computing interface. Patient Weight Over 5 Years chart, patient profile, SD-tier navigation tabs, and a Type O- Universal Donor blood-type badge, designed for the moment when an HCP and patient are reviewing data together in an exam room.",
            "Most senior pharma designers haven't touched Vision Pro yet. The frontier isn't where you wait to arrive. It's where you go.",
          ],
          images: [
            {
              src: `${ASSET_BASE}/05-apple-vision-pro-ar-concept.png`,
              alt: "Apple Vision Pro spatial computing concept showing patient weight trend chart, patient profile, SD-tier tabs, and Type O- Universal Donor blood-type badge for in-office HCP and patient review",
            },
          ],
        },
        {
          eyebrow: "Public deployment · Live in ChatGPT",
          title: "Three Custom GPTs",
          description: [
            "Three working Custom GPTs deployed publicly: UX Research Advisor advises on UX research and marketing opportunities using user-provided data; Product Innovation and Case Study Helper generates detailed product definitions and case studies; AEM Design Assistant covers best practices for AEM, Adobe Target, and DAM for storytelling and personalization.",
            "Each is live in ChatGPT. Anyone can click through and use them right now.",
          ],
          images: [
            {
              src: `${ASSET_BASE}/01-hero-ai-native-design-lab.png`,
              alt: "Working AI Patient Support platform built using the same Custom GPT-assisted research and prototyping methodology",
            },
          ],
        },
        {
          eyebrow: "Personal project · Free at-home learning supplement",
          title: "Education Tools for Daughters",
          description: [
            "The lab also includes a small repository of educational apps I've built for my daughters, math and English learning tools that started as personal projects and have grown into a free at-home learning supplement. Same instinct as everything else: the right tool, in the right moment, for the actual person who needs it.",
            "Two are live and playable right now: a fractions quiz that walks through pies, strips, and number lines, and an area and perimeter quiz with adjustable difficulty. Both built mobile-first, no sign-up, no tracking.",
          ],
          links: [
            { label: "Try the Fractions Quiz", href: "/apps/fractions-quiz.html" },
            {
              label: "Try the Area & Perimeter Quiz",
              href: "/apps/area-perimeter-quiz.html",
            },
          ],
        },
      ]}
      outcomes={[
        {
          headline: "Working prototypes built in hours, not weeks",
          description:
            "AI Patient Support, Channel Optimizer, HealthSync Pro, Vision Pro concept, all built using AI-assisted development tools (v0, Base44, Claude, ChatGPT).",
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
          title: "Building digital governance across 70+ therapeutic brands",
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
