import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Native Product Design Lab",
  description:
    "How I use AI to accelerate research, design, prototype, and delivery — built on years of bringing teams together. A vendor-agnostic AI practice grounded in healthcare and regulated environments.",
};

const CAL_URL = "https://cal.com/capizzi/15min";

const METADATA = [
  { label: "SCOPE", value: "Personal lab + selective client integration" },
  { label: "YEAR", value: "2022–present" },
  {
    label: "CAPABILITIES",
    value: "AI prototyping · Methodology · Custom GPTs · Vendor-agnostic advisory",
  },
  {
    label: "STACK",
    value: "Claude · ChatGPT · Midjourney · Runway · v0 · Base44 · React · Next.js · Tailwind",
  },
];

const OUTCOMES = [
  {
    headline: "Working prototypes built in hours, not weeks",
    description:
      "AI Patient Support, Channel Optimizer, HealthSync Pro, Apple Vision Pro concept — all built using AI-assisted development tools (v0, Base44, Claude, ChatGPT).",
  },
  {
    headline: "Three Custom GPTs deployed publicly",
    description:
      "Working AI tools live in the world, not concepts in a deck.",
  },
  {
    headline: "A vendor-agnostic AI advisory practice",
    description:
      "Built on hands-on tool experience, not vendor partnership commissions.",
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
];

type SubProduct = {
  id: string;
  name: string;
  body: React.ReactNode;
  image?: { src: string; alt: string; animated?: boolean };
  secondaryImage?: { src: string; alt: string; animated?: boolean };
};

const SUB_PRODUCTS: SubProduct[] = [
  {
    id: "ai-patient-support",
    name: "AI Patient Support",
    body: (
      <>
        <p>
          The future of healthcare is disease-first, brand-second.
        </p>
        <p>
          The AI Patient Support concept is the working prototype that proves
          it. Instead of patients searching across twelve brand sites for
          assistance, they search by their disease and find every option in one
          place — every support program, savings card, study, KOL video, and
          patient story, verified and organized by condition.
        </p>
        <p>
          The concept covers Oncology (4 indications, 47 drugs), Diabetes,
          Cardiovascular, Immunology, Neurology, HIV/AIDS, Rare Disease, and
          Respiratory. Click a condition, find every drug. Click a drug, find
          every resource — support and savings, videos and media, downloadable
          materials, clinical studies, drug timeline, legal and safety. Each
          piece of media tagged by length, source, and category.
        </p>
      </>
    ),
    image: {
      src: "/images/case-studies/05-ai-native-product-design-lab/02-ai-patient-support-drug-detail.png",
      alt: "AI Patient Support — oncology IO lead deep dive showing every resource by condition",
    },
  },
  {
    id: "channel-optimizer",
    name: "Channel Optimizer",
    body: (
      <>
        <p>
          An AI-assisted dashboard for media-mix decision support, built in v0.
          Channel performance, engagement metrics, and AI-generated insights
          and recommendations — <em>&ldquo;Increase budget allocation to social
          media campaigns by 15%,&rdquo; &ldquo;Consider reducing radio ad spend
          and reallocating to higher-performing channels.&rdquo;</em>
        </p>
        <p>
          Built in 4 hours. Would have taken a 4-week designer-engineer sprint
          in 2022.
        </p>
      </>
    ),
    image: {
      src: "/images/case-studies/05-ai-native-product-design-lab/03-channel-optimizer-in-v0-environment.gif",
      alt: "Channel Optimizer media-mix dashboard built in v0 environment",
      animated: true,
    },
  },
  {
    id: "healthsync-pro",
    name: "HealthSync Pro",
    body: (
      <>
        <p>
          A health-data integration prototype built on Base44 — Garmin watch
          device configuration with regulatory-grade granular consent design.
          Heart rate, steps, sleep tracking, workout data, blood pressure,
          blood oxygen, body temperature, weight metrics — each with explicit
          user permission toggling.
        </p>
        <p>
          This is what AI-assisted prototyping looks like for healthcare
          specifically. Consent design isn&apos;t a checkbox feature. It&apos;s
          the product.
        </p>
      </>
    ),
    image: {
      src: "/images/case-studies/05-ai-native-product-design-lab/04-healthsync-pro-on-base44.png",
      alt: "HealthSync Pro health-data integration on Base44 with granular consent toggles",
    },
  },
  {
    id: "apple-vision-pro",
    name: "Apple Vision Pro Concept",
    body: (
      <>
        <p>
          In-office HCP education rendered inside a Vision Pro spatial
          computing interface. Patient Weight Over 5 Years chart, patient
          profile, SD-tier navigation tabs, and a Type O- Universal Donor
          blood-type badge — designed for the moment when an HCP and patient
          are reviewing data together in an exam room.
        </p>
        <p>
          Most senior pharma designers haven&apos;t touched Vision Pro yet. The
          frontier isn&apos;t where you wait to arrive. It&apos;s where you go.
        </p>
      </>
    ),
    image: {
      src: "/images/case-studies/05-ai-native-product-design-lab/05-apple-vision-pro-ar-concept.png",
      alt: "Apple Vision Pro spatial computing concept for in-office HCP education",
    },
  },
  {
    id: "three-custom-gpts",
    name: "Three Custom GPTs",
    body: (
      <>
        <p>Three working Custom GPTs deployed publicly:</p>
        <ul className="space-y-3 list-none pl-0 my-6">
          <li className="pl-5 relative">
            <span
              className="absolute left-0 top-3 w-2 h-px bg-text-tertiary"
              aria-hidden="true"
            />
            <strong className="text-text-primary">UX Research Advisor</strong>{" "}
            — advises on UX research and marketing opportunities using
            user-provided data.
          </li>
          <li className="pl-5 relative">
            <span
              className="absolute left-0 top-3 w-2 h-px bg-text-tertiary"
              aria-hidden="true"
            />
            <strong className="text-text-primary">
              Product Innovation and Case Study Helper
            </strong>{" "}
            — generates detailed product definitions and case studies.
          </li>
          <li className="pl-5 relative">
            <span
              className="absolute left-0 top-3 w-2 h-px bg-text-tertiary"
              aria-hidden="true"
            />
            <strong className="text-text-primary">AEM Design Assistant</strong>{" "}
            — best practices for AEM, Adobe Target, and DAM for storytelling
            and personalization.
          </li>
        </ul>
        <p>
          Each is live in ChatGPT. Anyone can click through and use them right
          now.
        </p>
      </>
    ),
    image: {
      src: "/images/case-studies/05-ai-native-product-design-lab/06-three-custom-gpts-mobile.png",
      alt: "Three Custom GPTs rendered in mobile browsers",
    },
  },
  {
    id: "automation-opportunity-assessment",
    name: "Automation Opportunity Assessment",
    body: (
      <>
        <p>
          Built for teams asking the real question —{" "}
          <em>
            where does AI actually fit in our workflows, and how do we know
            it&apos;ll pay off?
          </em>
        </p>
        <p>
          The Automation Opportunity Assessment is a six-part audit framework
          that moves an organization from &ldquo;we should be doing something
          with AI&rdquo; to a prioritized, feasibility-tested roadmap. The
          structure: <strong>Workflow Audit</strong> (where the friction
          actually lives) → <strong>Feasibility</strong> (what&apos;s buildable
          now versus next year) → <strong>Impact</strong> (where the ROI lands)
          → <strong>Agent Logic</strong> (the decisions the system needs to
          make) → <strong>Zapier Stack</strong> (the integration spine) →{" "}
          <strong>Reflection</strong> (what we learned, what we&apos;d do
          differently).
        </p>
        <p>
          This is the deliverable I run inside Advisory engagements when a
          leadership team is being pitched AI by every vendor in their inbox
          and needs a vendor-agnostic read on what&apos;s real for their
          workflows. The framework was developed during a Zapier AI Automation
          course and refined through hands-on engagements. It&apos;s the bridge
          between the individual prototypes above and a systematic AI strategy
          for an enterprise team.
        </p>
      </>
    ),
    image: {
      src: "/images/case-studies/05-ai-native-product-design-lab/07-automation-opportunity-assessment.gif",
      alt: "Six-tab audit framework — Workflow Audit, Feasibility, Impact, Agent Logic, Zapier Stack, Reflection",
      animated: true,
    },
  },
  {
    id: "education-tools-for-daughters",
    name: "Education Tools for Daughters",
    body: (
      <>
        <p>
          The lab also includes a small repository of educational apps
          I&apos;ve built for my daughters — math and English learning tools
          that started as personal projects and have grown into a free at-home
          learning supplement. Same instinct as everything else: the right
          tool, in the right moment, for the actual person who needs it.
        </p>
      </>
    ),
  },
];

const RELATED = [
  {
    slug: "pharma-design-systems",
    eyebrow: "Pfizer · Multi-Brand · Regulated Industry",
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
];

function isAnimated(src: string): boolean {
  return src.endsWith(".gif");
}

export default function Page() {
  return (
    <article>
      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow mb-6">(Case Study)</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05] max-w-4xl">
            AI-Native Product Design Lab
          </h1>
          <p className="mt-6 md:mt-8 text-xl md:text-2xl text-text-secondary leading-relaxed max-w-3xl">
            How I use AI to accelerate research, design, prototype, and
            delivery — built on years of bringing teams together.
          </p>
        </div>
      </section>

      {/* HERO IMAGE — animated working prototype demo */}
      <section className="pb-12 md:pb-16">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border-default">
            <Image
              src="/images/case-studies/05-ai-native-product-design-lab/01-hero-ai-patient-support-demo.gif"
              alt="AI Patient Support working prototype — Treatment Journey Map, oncology workflow, and provider lookup demo"
              fill
              priority
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 960px"
            />
          </div>
        </div>
      </section>

      {/* METADATA */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 max-w-3xl">
            {METADATA.map((m) => (
              <div key={m.label}>
                <dt className="metadata-label mb-2">{m.label}</dt>
                <dd className="text-sm md:text-base text-text-secondary leading-relaxed">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* THE CHALLENGE */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-8 md:mb-10 max-w-3xl">
            The challenge
          </h2>
          <div className="max-w-3xl space-y-6 text-lg md:text-xl text-text-secondary leading-relaxed">
            <p>
              Most consultants advising on AI today are vendor-coded or
              theoretical. Few have actually built AI-augmented products
              end-to-end. Enterprise teams hiring AI advisors are getting slide
              decks and vendor partnerships. They&apos;re not getting people
              who can walk into a room, assess where AI actually fits, and
              demonstrate what&apos;s possible by building it in real time.
            </p>
            <p>
              I built this lab to keep AI fluency hands-on — not because I
              needed to add AI to my marketing, but because I wanted to know,
              from the inside, what the tools could actually do in a regulated,
              healthcare-adjacent context.
            </p>
          </div>
        </div>
      </section>

      {/* THE APPROACH — origin narrative */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-8 md:mb-10 max-w-3xl">
            The approach
          </h2>
          <div className="max-w-3xl space-y-6 text-lg md:text-xl text-text-secondary leading-relaxed">
            <p>
              I&apos;m classically trained — Pratt BFA in Communications Design
              and Advertising/Marketing, fine arts background, two decades as a
              graphic designer, marketer, and senior UX leader. AI
              experimentation began in 2022, alongside a creative practice that
              dates back to college. My best friend, now Poet Laureate of
              Connecticut, and I co-founded a creative arts and music
              collective at Rider University. We&apos;ve been collaborating
              creatively for 25+ years, getting together annually for live
              performances where I create live visual art alongside his poetry
              and music.
            </p>
            <p>
              In 2022 I started using Midjourney and Runway to generate live
              visuals during those performances — projected through two or
              three projectors, tied to lyrics and music in real time. Live
              performance is an unforgiving classroom for AI tooling.
              There&apos;s no regenerating when the band is playing. Everything
              I now know about how AI fits into design work started there.
            </p>
            <p>
              The lab has expanded since then into healthcare-specific
              prototypes and tools.
            </p>
          </div>
        </div>
      </section>

      {/* SUB-PRODUCTS — section per product */}
      {SUB_PRODUCTS.map((sub, i) => (
        <section
          key={sub.id}
          id={sub.id}
          className="py-16 md:py-20 border-t border-border-subtle"
        >
          <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-3xl mb-10 md:mb-12">
              <p className="metadata-label mb-4">
                Sub-product {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-text-primary leading-tight mb-8">
                {sub.name}
              </h3>
              <div className="space-y-5 text-base md:text-lg text-text-secondary leading-relaxed">
                {sub.body}
              </div>
            </div>

            {sub.image ? (
              <figure className="mt-10 md:mt-12">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-border-default bg-bg-raised">
                  <Image
                    src={sub.image.src}
                    alt={sub.image.alt}
                    fill
                    className="object-cover"
                    unoptimized={sub.image.animated || isAnimated(sub.image.src)}
                    sizes="(max-width: 1024px) 100vw, 960px"
                  />
                </div>
              </figure>
            ) : null}
          </div>
        </section>
      ))}

      {/* WORKSHOP FACILITATION — image slot 08, "human side of AI work" */}
      <section className="py-16 md:py-20 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <figure>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border-default bg-bg-raised">
              <Image
                src="/images/case-studies/05-ai-native-product-design-lab/08-workshop-facilitation-duotone.gif"
                alt="Workshop facilitation, duotone — the human side of AI work"
                fill
                className="object-cover"
                unoptimized
                sizes="(max-width: 1024px) 100vw, 960px"
              />
            </div>
            <figcaption className="mt-5 text-sm md:text-base text-text-tertiary text-center italic">
              The human side of AI work — workshop facilitation across
              regulated client teams.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="py-20 md:py-28 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <blockquote className="max-w-3xl">
            <p className="text-xl md:text-2xl lg:text-3xl text-text-primary leading-snug italic font-light">
              &ldquo;Now any idea you can conceive, you can create stimulus to
              test. That speed-to-market is real. AI has become the
              everyman&apos;s opportunity to design and create — and the people
              who&apos;ll win are those with subtle nuance, who can tell good
              from better from great. My AI Native Lab work is about three
              things: efficiencies in my own work, the ability to help people,
              and the ability for the companies I work with to generate
              revenue.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* SELECTED OUTCOMES */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-10 md:mb-14 max-w-3xl">
            Selected outcomes
          </h2>
          <div className="space-y-8 md:space-y-10 max-w-3xl">
            {OUTCOMES.map((o) => (
              <div
                key={o.headline}
                className="border-l-2 border-border-default pl-6 md:pl-8"
              >
                <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-3 leading-snug">
                  {o.headline}
                </h3>
                <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                  {o.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSER — What this means */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-8 md:mb-10 max-w-3xl">
            What this means
          </h2>
          <div className="max-w-3xl space-y-6 text-lg md:text-xl text-text-secondary leading-relaxed">
            <p>
              Most teams hiring AI consultants get advice. The teams hiring me
              get advice plus a demonstration.
            </p>
            <p>
              AI isn&apos;t a strategy. It&apos;s a tool. The teams that win
              with AI long-term aren&apos;t the ones with the best models.
              They&apos;re the ones who treated the experience architecture
              around the model as the actual work.
            </p>
            <p>That&apos;s the lab. That&apos;s what I bring into client engagements. That&apos;s the difference.</p>
          </div>
        </div>
      </section>

      {/* CTA BLOCK */}
      <section className="py-24 md:py-32 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 md:mb-8 max-w-3xl mx-auto leading-tight">
            Working through AI integration in your team?
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-10 md:mb-12 max-w-2xl mx-auto">
            30 minutes. Virtual. No pitch.
          </p>
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-text-primary text-text-inverse text-base font-medium tracking-tight hover:scale-[1.02] transition-transform"
          >
            Book a Strategy Call
          </a>
        </div>
      </section>

      {/* RELATED WORK */}
      <section className="py-20 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow mb-8">Related work</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {RELATED.map((r) => (
              <Link
                key={r.slug}
                href={`/work/${r.slug}`}
                className="group relative block rounded-2xl card-surface border border-border-default hover:border-border-strong overflow-hidden transition-colors"
              >
                <div className="relative aspect-[16/10] bg-bg-raised">
                  <Image
                    src={r.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    unoptimized={isAnimated(r.image)}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 md:p-7">
                  <p className="eyebrow mb-3">{r.eyebrow}</p>
                  <h3 className="text-lg md:text-xl font-semibold tracking-tight text-text-primary group-hover:text-link transition-colors leading-snug">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-text-secondary leading-relaxed">
                    {r.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
