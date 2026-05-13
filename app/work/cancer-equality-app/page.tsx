import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Patient Navigation Platform for Women Facing Bias in Cancer Care",
  description:
    "Built with The Chrysalis Initiative. Recognized with a D&AD Pencil for Future Impact, 2022. A two-sided platform connecting patients with trained coaches and peer navigators.",
};

export default function Page() {
  return (
    <CaseStudyLayout
      eyebrow="(Case Study)"
      title="A Patient Navigation Platform for Women Facing Bias in Cancer Care"
      subtitle="Built with The Chrysalis Initiative. Recognized with a D&AD Pencil for Future Impact, 2022."
      heroImage="/images/case-studies/04-cancer-equality-app/01-hero-erase-the-line-campaign-poster.jpeg"
      heroImageAlt="Erase The Line campaign poster — patient navigation platform"
      metadata={[
        { label: "ENGAGEMENT", value: "Lead Product Designer" },
        { label: "YEAR", value: "2021–2022" },
        { label: "PARTNER", value: "The Chrysalis Initiative" },
        { label: "RECOGNITION", value: "D&AD Pencil — Future Impact 2022" },
      ]}
      challenge={[
        "Women of color in the United States face a documented healthcare gap. They receive inconsistent standard of care across regions and providers. They are profiled based on assumed insurance coverage. They are assumed, often incorrectly, to lack health literacy. These assumptions affect what tests are ordered, what conversations are had, what referrals are made, and ultimately what outcomes follow.",
        "Late diagnoses follow bias. Worse outcomes follow late diagnoses. Many patients avoid the system altogether because they know what's waiting for them inside it.",
        "The Chrysalis Initiative — founded by Jamila — built the Cancer Equality App as the product response to that gap. The Erase The Line campaign was the wrapper that brought the platform to a national audience. The app itself was the actual work: a navigation platform that connected patients with trained coaches and peer navigators, putting tools, documentation, advocacy language, and verified provider data directly in the hands of patients managing breast cancer care.",
      ]}
      approach={[
        "The platform was designed as a two-sided product. The coach-facing experience supported onboarding of coaches and content storage about the patients in their care. The patient-facing dashboard gave users visibility into their engagements, notes from sessions with their coach, and direct communication with the coaching team. Both sides had to work for very different users, in very different emotional states, while supporting the same underlying mission.",
        "I led product design across both sides of the platform, working directly with the initiative owner, account team, creative team, SharePoint developers, and a Salesforce CMS specialist.",
        "The product included coach and peer navigation — the heart of the platform, matching patients with trained coaches who had often been through breast cancer themselves, alongside a peer community of others on similar journeys. Education modules helped users recognize racism and bias in healthcare interactions — not abstractly, but in the specific patterns that show up in oncology care. Documentation tools designed to record symptoms, concerns, and provider responses before, during, and after appointments — simple enough to use under stress, detailed enough to create a record that mattered. Advocacy guides giving step-by-step language for addressing concerns and requesting appropriate care. Community support connecting users to others with similar experiences. A healthcare provider directory with ratings and reviews focused on culturally competent care.",
        "The hard part wasn't deciding what to build. It was the language. Every screen had to be empowering without being patronizing. Every feature had to respect that the user might be in crisis. The design had to feel like a tool that trusts the user, not one that's trying to fix her.",
      ]}
      pullQuote="This is one of the few times where the metrics actually could convert to lives saved. Before this, the support was email and Excel documents distributed by hand. After, there was a live dashboard, real tracking, refinement based on coach usage data. It's not many times in your life you get to work with such a brilliant team on such an important topic."
      midImages={[
        {
          src: "/images/case-studies/04-cancer-equality-app/02-app-marketing-site-laptop.jpeg",
          alt: "App marketing site rendered on laptop",
        },
        {
          src: "/images/case-studies/04-cancer-equality-app/03-sign-up-and-logged-in-view-wireframes.jpeg",
          alt: "Sign up page and logged-in view wireframes",
        },
      ]}
      outcomes={[
        {
          headline: "Recognized with a D&AD Pencil",
          description:
            "Future Impact Initiative, 2022. Top 1% of design awards globally — peer-recognized signal that the work mattered.",
        },
        {
          headline: "50% rise in clinical trial enrollment among program users",
          description:
            "Patients who used the platform were significantly more likely to participate in trials that could improve their care.",
        },
        {
          headline: "50% found the support to seek other opinions and better care",
          description:
            "The platform gave users language, documentation, and confidence to advocate for themselves inside the healthcare system.",
        },
        {
          headline: "100% of users reported improved standard of care",
          description:
            "And 30% reported increased confidence in their treatment. Outcomes that mean something in oncology specifically.",
        },
        {
          headline: "Hospital partnerships and national media coverage",
          description:
            "Penn Medicine, Rush, Fox Chase Cancer Center, MD Anderson, University of Illinois Chicago, Northwestern Medicine. Coverage in NBC News, ABC News, CNN, People, Today, Good Morning America, Ebony, Yahoo.",
        },
        {
          headline: "Live operational improvement",
          description:
            "The platform replaced Excel-document-and-email workflows with a real-time coach dashboard, enabling tracking, refinement, and continuous improvement based on actual usage data.",
        },
      ]}
      bottomImages={[
        {
          src: "/images/case-studies/04-cancer-equality-app/04-patient-connection-wireframe-detail.jpeg",
          alt: "Patient connection wireframe detail",
        },
        {
          src: "/images/case-studies/04-cancer-equality-app/06-dand-pencil-future-impact-2022.jpeg",
          alt: "D&AD Pencil Future Impact Initiative 2022",
        },
      ]}
      closer={[
        "A D&AD Pencil is meaningful. It's a peer-recognized signal that the work is good. But the more important outcome is what happens when an app like this exists in someone's life at the moment they need it.",
        "The recognition was the wrapper. The patients who got through the system to better care were the work.",
      ]}
      ctaHeadline="Working on patient experience or healthcare equity?"
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
