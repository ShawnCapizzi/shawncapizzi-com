import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Native Product Design Lab",
  description:
    "A vendor-agnostic AI practice grounded in healthcare, regulated environments, and design-system governance. Working prototypes, public Custom GPTs, and a Figma plugin published to the Community \u2014 advice plus demonstration.",
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
              browserFrame: { url: "ai-patient-support.com", aspectRatio: 4 / 3 },
            },
            {
              src: `${ASSET_BASE}/02-ai-patient-support-drug-detail.png`,
              alt: "AI Patient Support drug detail view, oncology IO lead deep dive with tagged media by length, source, and category",
              browserFrame: { url: "ai-patient-support.com/oncology", aspectRatio: 4 / 3 },
            },
          ],
        },
        {
          eyebrow: "Prototype · AI-assisted dashboard, built in v0",
          title: "Channel Optimizer",
          description: [
            "An AI-assisted dashboard for media buying and mix decision support, built in v0. Channel performance, engagement metrics, and AI-generated insights and recommendations: \u201CIncrease budget allocation to social media campaigns by 15%,\u201D \u201CConsider reducing radio ad spend and reallocating to higher-performing channels.\u201D",
            "Built and refined over 3 days. Would have taken a 4-week sprint in 2022, with a team of designers and engineers.",
          ],
          images: [
            {
              src: `${ASSET_BASE}/03-channel-optimizer-in-v0-environment.gif`,
              alt: "Channel Optimizer media-mix dashboard built in v0, showing channel performance metrics and AI-generated reallocation recommendations",
            },
          ],
        },
        {
          eyebrow: "Published tool · Figma Community · Design system governance",
          title: "Detached Instance Finder",
          description: [
            "Design-system governance only works if drift is visible. The fastest way a client\u2019s system erodes inside an agency or vendor workflow is the detached instance \u2014 a component pulled off the system, modified, and silently disconnected from updates. Figma flags none of this. The layer name turns from purple to black, and the debt accumulates invisibly.",
            "I built Detached Instance Finder to make that debt visible in seconds. The plugin scans a page or entire file and surfaces likely detaches using two complementary signals. Name match catches the easy case: a frame named like a component, since detaches keep their original name by default. Orphan is the harder one \u2014 it flags a plain frame sitting among instance siblings, the one black layer in a row of purple. That second signal catches detaches even after they\u2019ve been renamed, which name-matching alone can\u2019t. Built with the Figma Plugin API and JavaScript, published to the Figma Community.",
            "What I find interesting as a design leader: the tell designers use by eye (purple vs. black) and the thing the Figma API actually exposes (node type) are the same underlying fact. The plugin doesn\u2019t invent a new method. It just makes the invisible visible \u2014 so governance becomes something a system owner can enforce, not just preach. This is the same instinct I bring to multi-brand system work at scale.",
          ],
          links: [
            {
              label: "Open in Figma Community",
              href: "https://www.figma.com/community/plugin/1639652505677306792",
            },
            {
              label: "See it scaled across 70+ brands",
              href: "/work/pharma-design-systems",
            },
          ],
          images: [
            {
              src: `${ASSET_BASE}/09-detached-instance-finder-community-listing.jpg`,
              alt: "Detached Instance Finder listing in the Figma Community, showing the plugin cover art and a layer list with one frame flagged as detached among live instances",
            },
            {
              src: `${ASSET_BASE}/10-detached-instance-finder-plugin-ui.jpg`,
              alt: "Detached Instance Finder plugin UI, showing the detection signal selector (name match, orphan, both), current page versus entire file scope, and a Scan button",
            },
          ],
        },
        {
          eyebrow: "Public deployment · Live in ChatGPT",
          title: "Three Custom GPTs",
          description: [
            "Three working Custom GPTs deployed publicly: UX Research Advisor advises on UX research and marketing opportunities using user-provided data; Product Story, Strategy and Case Study Partner generates detailed product definitions and case studies; AEM Design Assistant covers best practices for AEM, Adobe Target, and DAM for storytelling and personalization.",
            "Each is live in ChatGPT. Anyone can click through and use them right now.",
          ],
          links: [
            {
              label: "Try UX Research Advisor",
              href: "https://chatgpt.com/g/g-MTnad2Xgw-ux-research-advisor",
            },
            {
              label: "Try Product Story, Strategy and Case Study Partner",
              href: "https://chatgpt.com/g/g-FFhKQN1Oa-product-story-strategy-and-case-study-partner",
            },
            {
              label: "Try AEM Design Assistant",
              href: "https://chatgpt.com/g/g-w8akbOHzb-aem-design-assistant",
            },
          ],
        },
      ]}
      outcomes={[
        {
          headline: "Working prototypes built in hours, not weeks",
          description:
            "AI Patient Support and Channel Optimizer, built using AI-assisted development tools (v0, Base44, Claude, ChatGPT) in days, not sprints.",
        },
        {
          headline: "Three Custom GPTs deployed publicly",
          description:
            "Working AI tools live in the world, not concepts in a deck. UX Research Advisor, Product Story Strategy and Case Study Partner, AEM Design Assistant.",
        },
        {
          headline: "A Figma plugin published to the Community",
          description:
            "Detached Instance Finder, concepted, designed, and built end to end. Surfaces detached components before they erode the system \u2014 the same governance instinct, scaled down to a single tool.",
        },
        {
          headline: "A vendor-agnostic AI advisory practice",
          description:
            "Built on hands-on tool experience, not vendor partnership commissions. The Automation Opportunity Assessment framework moves teams from intent to prioritized roadmap.",
        },
        {
          headline: "Experience Strategy and Creative extended with AI",
          description:
            "Not replaced by it. Get to great quicker via optimized workflows and data-led decision making.",
        },
        {
          headline:
            "A repeatable methodology .MD and systems for integrating AI into business workflows",
          description:
            "Custom frameworks feed AI the inputs it needs to produce real strategic work, tailored to your business, not generic output.",
        },
      ]}
      closer={[
        "Most teams hiring AI consultants get advice. The teams hiring me get advice plus a demonstration.",
        "AI isn't a strategy. It's a tool. The teams that win with AI long-term aren't the ones with the best models. They're the ones who treated the experience architecture around the model as the actual work.",
        <>
          That&apos;s the lab. That&apos;s what I bring into{" "}
          <Link
            href="/engagements"
            className="text-link hover:text-link-hover transition-colors"
          >
            client engagements
          </Link>
          . That&apos;s the difference.
        </>,
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
