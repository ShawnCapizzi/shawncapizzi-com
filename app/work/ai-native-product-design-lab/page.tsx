import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { BrowserFrame } from "@/components/BrowserFrame";
import { VideoWithPlayOverlay } from "@/components/VideoWithPlayOverlay";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Native Product Design Lab",
  description:
    "How I design, build, and ship with AI: production software designed and shipped solo, working prototypes in days, a Figma plugin in the Community, and the dated record of early adoption behind all of it.",
};

const ASSET_BASE = "/images/case-studies/05-ai-native-product-design-lab";

/**
 * The lab page stays a case study, revised September 2026. What changed:
 *   - AI Patient Support is live, not a concept. The address bar labels
 *     now show the real domain, the reel plays inside a browser frame, and
 *     the copy no longer lists condition counts that drift as the product
 *     grows. The full story moves to the Live Health Data case study when
 *     that page ships; this block then shortens to a pointer.
 *   - A production block names what the lab now ships: CourtVisual live,
 *     AI Patient Support live, ClinicalTrialsForMe in preview.
 *   - The Custom GPTs are framed as the dated early-adoption record, with
 *     the current practice named plainly: Claude Code and agentic pipelines.
 *   - The 2018 voice section links to its own case study.
 *   - Em dashes removed from copy and metadata.
 */
export default function Page() {
  return (
    <CaseStudyLayout
      eyebrow="(Case Study)"
      title="AI-Native Product Design Lab"
      subtitle="How I design, build, and ship with AI. Working prototypes in hours, and production software shipped solo, built on years of bringing teams together."
      heroImage={`${ASSET_BASE}/01-hero-ai-native-design-lab.png`}
      heroImageAlt="AI-Native Design Lab, disease-first patient support hero"
      metadata={[
        { label: "SCOPE", value: "Personal lab + selective client integration" },
        { label: "YEAR", value: "2022 to present" },
        {
          label: "CAPABILITIES",
          value:
            "AI prototyping · Agentic build pipelines · Methodology · Vendor-agnostic advisory",
        },
        {
          label: "STACK",
          value:
            "Claude Code · ChatGPT · Next.js · Supabase · Vercel · Tailwind · v0 · Base44 · Midjourney · Runway",
        },
      ]}
      challenge={[
        "Most consultants advising on AI today are vendor-coded or theoretical. Few have actually built AI-augmented products end to end. Enterprise teams hiring AI advisors are getting slide decks and vendor partnerships. They are not getting people who can walk into a room, assess where AI actually fits, and demonstrate what is possible by building it in real time.",
        "I built this lab to keep AI fluency hands-on, not because I needed to add AI to my marketing, but because I wanted to know, from the inside, what the tools could actually do in a regulated, healthcare-adjacent context.",
      ]}
      approach={[
        "I am classically trained, Pratt BFA in Communications Design and Advertising/Marketing, fine arts background, two decades as a graphic designer, marketer, and senior UX leader. AI experimentation began in 2022, alongside a creative practice that dates back to college. My best friend, now Poet Laureate of Connecticut, and I co-founded a creative arts and music collective at Rider University. We have been collaborating creatively for 25+ years, getting together annually for live performances where I create live visual art alongside his poetry and music.",
        "In 2022 I started using Midjourney and Runway to generate live visuals during those performances, projected through two or three projectors, tied to lyrics and music in real time. Live performance is an unforgiving classroom for AI tooling. There is no regenerating when the band is playing. Everything I now know about how AI fits into design work started there.",
        "The lab has expanded since then into healthcare-specific prototypes and tools, and now into production software. The current practice runs on Claude Code and ChatGPT as build partners, with me as the orchestrator: I describe what I want in screenshots, copy, and interaction notes, and direct the tools until the result matches the picture in my head. The stack is the one I use for client work: Next.js, Supabase, and Vercel.",
      ]}
      pullQuote={[
        "Now any idea you can conceive, you can create stimulus to test. That speed-to-market is real.",
        "AI has become the everyman's opportunity to design and create, and the people who'll win are those with subtle nuance, who can tell good from better from great.",
        "My AI Native Lab work is about three things: efficiencies in my own work, the ability to help people, and the ability for the companies I work with to generate revenue.",
      ]}
      projectShowcases={[
        {
          id: "ai-patient-support",
          eyebrow: "Live product · Healthcare patient navigation",
          title: "AI Patient Support",
          description: [
            "The future of healthcare is disease-first, brand-second. AI Patient Support is the working product that proves it. Instead of patients searching across twelve brand sites for assistance, they search by their condition and find every option in one place: support programs, savings paths, studies, videos, and patient stories, verified and organized by condition rather than by the company selling the drug.",
            "Every drug page pulls from the public record: medication information from DailyMed and openFDA, trials from ClinicalTrials.gov, with the government record always one click away and a plain statement when something cannot be traced to a source. Media is tagged by length, source, and category so a patient can find a two-minute video or a full study without wading through either.",
          ],
          links: [
            { label: "Open aipatientsupport.com", href: "https://aipatientsupport.com" },
          ],
          customContentBefore: (
            <figure className="mx-auto max-w-3xl">
              <BrowserFrame
                src="/videos/aipatientsupport-walkthrough.mp4"
                poster="/videos/aipatientsupport-walkthrough-poster.jpg"
                url="aipatientsupport.com"
                width={720}
                fallbackAspect={1400 / 1080}
                tiltDegrees={0}
                theme="dark"
                ariaLabel="AI Patient Support walkthrough: condition search, a drug page with its materials, the FDA source letter, and the paying-for-treatment path"
                loop
                autoPlay
              />
              <figcaption className="mt-4 text-center text-sm text-text-tertiary">
                A 30-second walkthrough: search by condition, open a drug, read
                the source document, find the path to paying for treatment.
              </figcaption>
            </figure>
          ),
          images: [
            {
              src: `${ASSET_BASE}/11-aipatientsupport-live-home.png`,
              alt: "AI Patient Support, live: the home page with condition search and the browse-by-condition grid",
              browserFrame: { url: "aipatientsupport.com", aspectRatio: 1204 / 884 },
            },
            {
              src: `${ASSET_BASE}/12-aipatientsupport-live-drug-timeline.png`,
              alt: "AI Patient Support, live: a drug page's approval timeline, each entry linking to the FDA's own approval letter",
              browserFrame: { url: "aipatientsupport.com", aspectRatio: 1204 / 884 },
            },
          ],
        },
        {
          eyebrow: "Production · Designed, built, and shipped solo",
          title: "From prototypes to production",
          description: [
            "The lab now ships. CourtVisual is live at courtvisual.com: every game scored 0 to 10 for what is worth watching, with live fixtures, standings, and broadcast data behind it, and a Supabase backend with row-level security. AI Patient Support is live at aipatientsupport.com. ClinicalTrialsForMe is in preview at clinicaltrialsforme.com, with the architecture complete and the cancer trial path loaded end to end as the demonstrated vertical.",
            "Three products, one conviction: decisions deserve current truth, rendered plain enough to act on. Each one takes live, authoritative sources and compresses them into a display a person can act on in seconds.",
          ],
          links: [
            { label: "Read the CourtVisual case study", href: "/work/courtvisual" },
            { label: "Open courtvisual.com", href: "https://www.courtvisual.com" },
            { label: "Preview clinicaltrialsforme.com", href: "https://clinicaltrialsforme.com" },
          ],
          customContent: (
            <figure className="mx-auto max-w-3xl">
              <VideoWithPlayOverlay
                src="/videos/courtvisual-ranking-demo.mp4"
                poster="/videos/courtvisual-ranking-poster.jpg"
                ariaLabel="CourtVisual ranking demo: the nightly slate scored and ranked, with reasoning on each card"
              />
              <figcaption className="mt-4 text-center text-sm text-text-tertiary">
                CourtVisual: the nightly slate, scored and ranked, with the
                reasoning on the card.
              </figcaption>
            </figure>
          ),
        },
        {
          eyebrow: "Prototype · AI-assisted dashboard, built in v0",
          title: "Channel Optimizer",
          description: [
            "An AI-assisted dashboard for media buying and mix decision support, built in v0. Channel performance, engagement metrics, and AI-generated insights and recommendations: “Increase budget allocation to social media campaigns by 15%,” “Consider reducing radio ad spend and reallocating to higher-performing channels.”",
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
            "Design-system governance only works if drift is visible. The fastest way a client’s system erodes inside an agency or vendor workflow is the detached instance: a component pulled off the system, modified, and silently disconnected from updates. Figma flags none of this. The layer name turns from purple to black, and the debt accumulates invisibly.",
            "I built Detached Instance Finder to make that debt visible in seconds. The plugin scans a page or entire file and surfaces likely detaches using two complementary signals. Name match catches the easy case: a frame named like a component, since detaches keep their original name by default. Orphan is the harder one. It flags a plain frame sitting among instance siblings, the one black layer in a row of purple. That second signal catches detaches even after they have been renamed, which name-matching alone cannot. Built with the Figma Plugin API and JavaScript, published to the Figma Community.",
            "What I find interesting as a design leader: the tell designers use by eye (purple versus black) and the thing the Figma API actually exposes (node type) are the same underlying fact. The plugin does not invent a new method. It makes the invisible visible, so governance becomes something a system owner can enforce, not just preach. This is the same instinct I bring to multi-brand system work at scale.",
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
          eyebrow: "Early adoption · Live in ChatGPT",
          title: "Three Custom GPTs",
          description: [
            "Three Custom GPTs, all still live in ChatGPT. The first was built the night OpenAI opened Custom GPTs to the public. UX Research Advisor advises on UX research and marketing opportunities using user-provided data; Product Story, Strategy and Case Study Partner generates detailed product definitions and case studies; AEM Design Assistant covers best practices for AEM, Adobe Target, and DAM for storytelling and personalization.",
            "They are the dated record of early adoption, not the current practice. The practice now runs on Claude Code and agentic pipelines and ships production software rather than assistants. Anyone can still click through and use these right now.",
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
        {
          eyebrow: "Before AI · Voice design in 2018",
          title: "The instinct predates the tools",
          description: [
            "This pattern did not start with AI. In 2018, before “conversational design” was a discipline anyone hired for, I built a voice-first medication-adherence prototype as an Alexa Skill on the Amazon Echo. Adherence was already a multi-billion-dollar problem, and every existing solution asked the patient to do the one thing they were already failing at: remember to look at a screen. The question was what a reminder looks like if you never have to look at it, if you can just ask and be answered in the room where you live.",
            "I started where voice forces you to start, with the conversation and not the device. I wrote the directed dialog prompts, mapped every intent, utterance, and slot, and drew the full conversation tree by hand before any prototype existed. The chart below is that architecture: user utterance to identified intent, to conditions of response, to device-specific response, to follow-up. Then I prototyped in SaySpring and tested with real people, designing the repair paths for when the skill heard the wrong thing and making sure it never left the user without a next move.",
            "It is the same instinct the AI work runs on. The architecture around the interaction is the product, whether the surface is a voice skill in 2018 or an AI agent today: map the intent before the interface, design the repair before the success state, and treat what the system says as carefully as what it does. I build for new touchpoints early, on purpose, so that by the time a team needs them I have already learned where they break.",
          ],
          links: [
            {
              label: "Read the VUI Pill Tracker case study",
              href: "/work/vui-voice-pill-tracker",
            },
            {
              label: "See the conversational-design discipline behind it",
              href: "/engagements#advisory",
            },
          ],
          images: [
            {
              src: "/images/case-studies/06-vui-voice-pill-tracker/02-vui-dialog-chart.jpg",
              alt: "A hand-mapped voice dialog chart for a 2018 medication-adherence Alexa Skill: user utterance to identified intent to conditions of response to device-specific response to conversation follow-up, across three branches.",
              maxWidthClass: "max-w-2xl",
            },
          ],
          customContent: (
            <figure className="mx-auto max-w-2xl">
              <VideoWithPlayOverlay
                src="/videos/pill-tracker-vui-demo.mp4"
                poster="/images/case-studies/06-vui-voice-pill-tracker/01-vui-demo-poster.jpg"
                ariaLabel="Demo walkthrough of the VUI Pill Tracker Alexa Skill prototype: setting a daily medication reminder, querying status, and confirming a dose entirely by voice."
              />
              <figcaption className="mt-4 text-center text-sm text-text-tertiary">
                The 2018 Alexa Skill prototype in motion: setting a reminder,
                checking status, and confirming a dose, entirely by voice.
              </figcaption>
            </figure>
          ),
        },
      ]}
      outcomes={[
        {
          headline: "Production software, designed, built, and shipped solo",
          description:
            "CourtVisual and AI Patient Support live, ClinicalTrialsForMe in preview. Research through deploy, with Claude Code and ChatGPT as working partners, not demos.",
        },
        {
          headline: "Working prototypes built in hours, not weeks",
          description:
            "AI Patient Support and Channel Optimizer began as prototypes built with AI-assisted development tools (v0, Base44, Claude, ChatGPT) in days, not sprints.",
        },
        {
          headline: "A Figma plugin published to the Community",
          description:
            "Detached Instance Finder, concepted, designed, and built end to end. Surfaces detached components before they erode the system, the same governance instinct scaled down to a single tool.",
        },
        {
          headline: "A dated record of early adoption",
          description:
            "Three Custom GPTs still live in ChatGPT, the first built the night the feature launched. Everyone claims to have been early. These carry timestamps.",
        },
        {
          headline: "A vendor-agnostic AI advisory practice",
          description:
            "Built on hands-on tool experience, not vendor partnership commissions. The Automation Opportunity Assessment framework moves teams from intent to prioritized roadmap.",
        },
        {
          headline: "A repeatable methodology for integrating AI into business workflows",
          description:
            "Custom frameworks feed AI the inputs it needs to produce real strategic work, tailored to your business, not generic output. Experience strategy and creative are extended by AI, not replaced by it.",
        },
      ]}
      closer={[
        "Most teams hiring AI consultants get advice. The teams hiring me get advice plus a demonstration.",
        "AI is not a strategy. It is a tool. The teams that win with AI long-term are not the ones with the best models. They are the ones who treated the experience architecture around the model as the actual work.",
        <>
          That is the lab. That is what I bring into{" "}
          <Link
            href="/engagements"
            className="text-link hover:text-link-hover transition-colors"
          >
            client engagements
          </Link>
          . That is the difference.
        </>,
      ]}
      ctaHeadline="Working through AI integration in your team?"
      related={[
        {
          slug: "courtvisual",
          eyebrow: "Solo build · Live product · courtvisual.com",
          title: "A multi-sport product that scores every game by what's worth watching",
          description:
            "Designed, built, and shipped solo. Six leagues, a 151-team catalog, a four-factor excitement engine, and live data feeds.",
          image: "/images/case-studies/07-courtvisual/02-game-card-score-ring.png",
        },
        {
          slug: "pharma-design-systems",
          eyebrow: "Enterprise pharma · Governance · 70+ brands",
          title: "Building digital governance across 70+ therapeutic brands",
          description:
            "$3.5M+ in digital transformation. Industry-first mobile wallet integration for patient medication information.",
          image: "/images/hero/consumer-care-hub-hero-balanced.gif",
        },
      ]}
    />
  );
}
