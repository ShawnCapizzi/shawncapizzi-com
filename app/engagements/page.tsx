import Link from "next/link";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/engagements",
  title: "Engagements: Fractional Design Leadership",
  description:
    "Fractional or embedded design leadership, advisory on a defined problem, or on-call senior judgment for key decisions. Experience strategy for regulated teams.",
});

const CAL_URL = "https://cal.com/capizzi/30min";
const EMAIL = "capizzi@shawncapizzi.com";

/**
 * /engagements, restructured September 2026 and tightened later that month
 * so each idea has one home. The intro leads straight into the three options
 * (title, one line, a few search terms), so a buyer can choose in the first
 * screen. Detail follows: Embedded Leadership, Advisory, and On Call
 * (#leadership, #advisory, #oncall, linked from the FAQ, About, and case
 * studies), then who he works with, what he brings, and how to start
 * (#process). One call to action sits under the options and one closes the
 * page.
 *
 * Wherever interviews and AI-assisted simulations both appear, the copy
 * keeps them distinct: interviews are with real stakeholders, simulations
 * are labeled as simulations and reported separately.
 */

const WAYS = [
  {
    id: "leadership",
    name: "Leadership",
    title: "Embed me in the work.",
    tagline:
      "Fractional or embedded design and experience leadership inside an active program.",
    keywords: "Fractional leadership · Design leadership · Experience strategy · Product design · UX/CX",
  },
  {
    id: "advisory",
    name: "Advisory",
    title: "Hire me to advise.",
    tagline: "Focused guidance around a defined opportunity, challenge, or decision.",
    keywords: "Advisory · Product strategy · Experience strategy · Service design · Design systems",
  },
  {
    id: "oncall",
    name: "On Call",
    title: "Keep me on call.",
    tagline:
      "Ongoing access when important decisions need another experienced point of view.",
    keywords: "On-call advisory · Leadership support · Design review · Strategic guidance",
  },
];

const ADVISORY_SHAPES = [
  {
    name: "Strategic Snapshot",
    description:
      "A focused read on one well-defined problem, followed by clear options and a recommended path forward. Useful when a program is stuck, a decision is approaching, or leadership needs an outside perspective.",
    scope: "Stakeholder interviews, a review of the work so far, and one deliverable.",
  },
  {
    name: "Engagement Sprint",
    description:
      "A deeper look at a defined challenge using stakeholder conversations, existing evidence, and the work already in motion. The outcome is clarity around what matters, what to do next, and what the team can act on.",
    scope:
      "Up to 10 interviews with real stakeholders, plus AI-assisted simulations where they help, reported separately. A prioritized roadmap, an executive presentation, and one to two follow-up reviews.",
  },
  {
    name: "AI Opportunity Diagnostic",
    description:
      "A practical look at where AI can improve the way your team works, and where it probably shouldn\u2019t go yet. Vendor-agnostic, grounded in your current workflows, data, and readiness.",
    scope: "A few weeks. The output is a prioritized roadmap, not a vendor list.",
  },
];

const PILLARS = [
  {
    name: "Regulatory awareness.",
    body: "I know how to work inside real constraints without letting compliance replace clarity.",
    crossLink: {
      href: "/work/pharma-design-systems",
      label: "See this across 70+ therapeutic brands",
    },
  },
  {
    name: "Interface judgment.",
    body: "New technology only matters if people understand it, trust it, and use it.",
    crossLink: {
      href: "/work/ai-native-product-design-lab",
      label: "See the AI-native product design lab",
    },
  },
  {
    name: "Systems thinking.",
    body: "I look beyond the screen to the teams, workflows, content, and governance that keep an experience working over time.",
    crossLink: {
      href: "/work/multi-brand-pharma-sales-tools",
      label: "See a multi-brand design system in practice",
    },
  },
];

export default function Page() {
  return (
    <article>
      {/* HERO: a brief introduction, then straight into Ways of working */}
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow mb-3">Engagements</p>
          <h1 className="headline-static hero-title max-w-4xl">
            Three ways to bring me into the work.
          </h1>
          <p className="hero-lead max-w-3xl">
            Embed me with the team. Bring me in for a defined problem. Or keep
            me close for the decisions that need senior judgment.
          </p>
        </div>
      </section>

      {/* JUMP LINKS: sticky under the fixed site header (80px, 88px from md)
          for the whole page, so every section is one tap away. It sits
          outside the hero, as a direct child of the article, so it stays
          stuck all the way down. z-30 keeps it under the header (z-50) and
          under the mobile menu overlay (z-40). On phones the row scrolls
          sideways instead of wrapping, so the bar stays one line tall.
          Section anchors use scroll-mt equal to header plus bar, measured:
          80 + 46 = 126px on phones, 88 + 46 = 134px from md, 88 + 58 =
          146px from lg. Change those if the header or this bar changes. */}
      <div
        id="engagements-nav"
        className="sticky top-20 md:top-[88px] z-30 border-y border-border-subtle bg-bg-primary/85 backdrop-blur-md"
      >
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <nav
            aria-label="On this page"
            className="flex items-center gap-x-3 overflow-x-auto whitespace-nowrap py-3 lg:py-4 text-sm lg:text-base text-text-tertiary [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <span className="metadata-label shrink-0 mr-1">Jump to</span>
            <a href="#ways" className="shrink-0 text-link hover:text-link-hover transition-colors">Ways of working</a>
            <span aria-hidden="true">·</span>
            <a href="#leadership" className="shrink-0 text-link hover:text-link-hover transition-colors">Embedded</a>
            <span aria-hidden="true">·</span>
            <a href="#advisory" className="shrink-0 text-link hover:text-link-hover transition-colors">Advisory</a>
            <span aria-hidden="true">·</span>
            <a href="#oncall" className="shrink-0 text-link hover:text-link-hover transition-colors">On Call</a>
            <span aria-hidden="true">·</span>
            <a href="#who" className="shrink-0 text-link hover:text-link-hover transition-colors">Who</a>
            <span aria-hidden="true">·</span>
            <a href="#focus" className="shrink-0 text-link hover:text-link-hover transition-colors">What I bring</a>
            <span aria-hidden="true">·</span>
            <a href="#process" className="shrink-0 text-link hover:text-link-hover transition-colors">How we start</a>
          </nav>
        </div>
      </div>

      {/* WAYS OF WORKING: the three options, scannable, directly under the intro */}
      <section id="ways" className="py-16 md:py-24 scroll-mt-[126px] md:scroll-mt-[134px] lg:scroll-mt-[146px]">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow mb-4">Ways of working</p>
          <h2 className="section-title mb-10 md:mb-12 max-w-3xl">
            Leadership, Advisory, or On Call
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {WAYS.map((way) => (
              <article
                key={way.id}
                className="flex flex-col p-7 md:p-8 rounded-2xl card-surface border border-border-default"
              >
                <p className="eyebrow mb-3">{way.name}</p>
                <h3 className="card-title text-text-primary">{way.title}</h3>
                <p className="mt-2 text-base md:text-lg text-text-secondary leading-relaxed text-pretty flex-1">{way.tagline}</p>
                <p className="mt-6 metadata-label leading-relaxed">{way.keywords}</p>
                <a
                  href={`#${way.id}`}
                  className="mt-7 inline-flex items-center text-sm font-medium text-link hover:text-link-hover transition-colors"
                >
                  {way.name} in detail{" "}
                  <span aria-hidden="true" className="ml-2">
                    &darr;
                  </span>
                </a>
              </article>
            ))}
          </div>

          <div className="mt-10 md:mt-12 max-w-3xl space-y-4 text-lg md:text-xl text-text-primary leading-relaxed text-pretty">
            <p>
              I work remotely with teams big and small, usually on projects or
              ongoing freelance engagements. I&apos;m also open to
              contract-to-hire or the right full-time role.
            </p>
            <p>
              When the scope calls for it, I can also assemble and lead the
              right team across copy, creative, and development.
            </p>
          </div>

          <div className="mt-10 md:mt-12 rounded-2xl card-surface border border-border-subtle px-6 md:px-10 py-7 md:py-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg md:text-xl font-medium text-text-primary">
                Not sure which fits?
              </p>
              <p className="mt-1 text-text-secondary">
                Start with a free 30-minute call, no pitch.
              </p>
            </div>
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-text-primary text-text-inverse text-base font-medium tracking-tight hover:scale-[1.02] transition-transform"
            >
              Book a Strategy Call
            </a>
          </div>
        </div>
      </section>

      {/* PATH 1 - EMBEDDED */}
      <section id="leadership" className="py-16 md:py-24 border-t border-border-subtle scroll-mt-[126px] md:scroll-mt-[134px] lg:scroll-mt-[146px]">
        <div className="relative max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow mb-4">Engagement type 01</p>
          <h2 className="section-title mb-8 md:mb-10 max-w-3xl">
            Embedded Leadership
          </h2>
          <div className="max-w-3xl space-y-6 text-pretty">
            <p className="lead-text text-lg md:text-xl leading-relaxed">
              I join the team and work inside the program, alongside product,
              creative, strategy, account, regulatory, and development.
            </p>
            <p className="lead-text text-lg md:text-xl leading-relaxed">
              This works when you need experienced design or experience
              leadership, as a fractional lead on a project, a
              contract-to-hire, or a full-time role.
            </p>
            <p className="lead-text text-lg md:text-xl leading-relaxed">
              I work inside your tools, training, and process, not beside them,
              whether that&apos;s an enterprise playbook or a start-up still
              writing its own. Where the process slows the work, I help refine
              it.
            </p>
            <p className="text-base md:text-lg text-text-secondary leading-relaxed">
              <strong className="font-semibold text-text-primary">Typical work:</strong>{" "}
              product and experience strategy, UX/CX, service design,
              information architecture, design systems, prototypes, workshops,
              and direction for internal or external development teams.
            </p>
          </div>

          <p className="mt-10 md:mt-12 max-w-3xl text-base text-text-secondary italic">
            Engagements can be structured by project, week, or program duration.
          </p>
        </div>
      </section>

      {/* PATH 2 - ADVISORY */}
      <section id="advisory" className="py-16 md:py-24 border-t border-border-subtle scroll-mt-[126px] md:scroll-mt-[134px] lg:scroll-mt-[146px]">
        <div className="relative max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow mb-4">Engagement type 02</p>
          <h2 className="section-title mb-8 md:mb-10 max-w-3xl">
            Advisory
          </h2>
          <p className="lead-text text-lg md:text-xl leading-relaxed max-w-3xl mb-14 md:mb-16">
            Sometimes that&apos;s product and experience strategy. Sometimes
            it&apos;s a pitch, blue-sky options, or a voice in the room. Three
            common shapes:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {ADVISORY_SHAPES.map((shape) => (
              <article
                key={shape.name}
                className="relative flex flex-col p-7 md:p-8 rounded-2xl card-surface border border-border-default"
              >
                <h3 className="card-title mb-3 text-text-primary">
                  {shape.name}
                </h3>
                <p className="text-base md:text-lg text-text-secondary leading-relaxed text-pretty flex-1">
                  {shape.description}
                </p>
                <p className="mt-6 pt-5 border-t border-border-subtle text-sm md:text-base text-text-secondary leading-relaxed text-pretty">
                  <span className="metadata-label block mb-1.5">Scope</span>
                  {shape.scope}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* PATH 3 - ON CALL */}
      <section id="oncall" className="py-16 md:py-24 border-t border-border-subtle scroll-mt-[126px] md:scroll-mt-[134px] lg:scroll-mt-[146px]">
        <div className="relative max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow mb-4">Engagement type 03</p>
          <h2 className="section-title mb-8 md:mb-10 max-w-3xl">
            On Call
          </h2>
          <div className="max-w-3xl space-y-6 text-pretty">
            <p className="lead-text text-lg md:text-xl leading-relaxed">
              Keep me close when you don&apos;t need another full-time role,
              but you do need senior judgment available when important
              decisions come up.
            </p>
            <p className="lead-text text-lg md:text-xl leading-relaxed">
              I can review work, pressure-test a direction, join a key meeting,
              help frame a problem, or work through a decision with the team
              before it becomes expensive to change.
            </p>
          </div>

          <div className="mt-10 md:mt-12 max-w-3xl">
            <p className="text-base text-text-secondary italic">
              Retainers are monthly and scope to the cadence of access you need.
            </p>
          </div>
        </div>
      </section>

      {/* WHO I WORK WITH */}
      <section id="who" className="py-16 md:py-24 border-t border-border-subtle scroll-mt-[126px] md:scroll-mt-[134px] lg:scroll-mt-[146px]">
        <div className="relative max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title mb-8 md:mb-10 max-w-3xl">
            Who I work with
          </h2>
          <div className="max-w-3xl space-y-6 text-pretty">
            <p className="lead-text text-lg md:text-xl leading-relaxed">
              The most useful seat I take in any engagement is the one between
              the leaders who set direction and the practitioners building
              toward it. I do my best work when I&apos;m trusted by both.
            </p>
            <p className="text-base md:text-lg text-text-secondary leading-relaxed">
              I work across leadership, product, strategy, creative, research,
              regulatory, account, analytics, and development teams. Some days
              that means a conversation with a VP; others it means working
              directly through a flow, prototype, deck, or build with the people
              making it.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT I BRING: three lenses, one line each, with the case-study links */}
      <section id="focus" className="py-16 md:py-24 border-t border-border-subtle scroll-mt-[126px] md:scroll-mt-[134px] lg:scroll-mt-[146px]">
        <div className="relative max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title mb-10 md:mb-12 max-w-3xl">
            What I bring to every engagement.
          </h2>

          <div className="mb-14 md:mb-16">
            <figure>
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-border-default">
                <Image
                  src="/images/engagements/needs-framework-sketch.jpg"
                  alt="Hand-drawn framework: user need and want flowing down through company to users, business, and resources"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1100px"
                />
              </div>
              <figcaption className="mt-5 text-sm md:text-base text-text-tertiary text-center italic">
                Where every engagement begins.
              </figcaption>
            </figure>
          </div>

          <div className="space-y-10 md:space-y-12">
            {PILLARS.map((pillar) => (
              <div key={pillar.name} className="max-w-3xl">
                <h3 className="card-title mb-3 text-text-primary">
                  {pillar.name}
                </h3>
                <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                  {pillar.body}
                </p>
                {pillar.crossLink && (
                  <p className="mt-4">
                    <Link
                      href={pillar.crossLink.href}
                      className="text-base text-link hover:text-link-hover transition-colors italic"
                    >
                      {pillar.crossLink.label} &rarr;
                    </Link>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT STARTS */}
      <section id="process" className="py-16 md:py-24 border-t border-border-subtle scroll-mt-[126px] md:scroll-mt-[134px] lg:scroll-mt-[146px]">
        <div className="relative max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title mb-14 md:mb-16 max-w-3xl">
            How we start.
          </h2>

          <div className="space-y-10 md:space-y-12 max-w-3xl">
            {[
              {
                step: "Step 1",
                title: "Strategy Call",
                body: "A 30-minute conversation about what\u2019s happening, what\u2019s stuck, and whether there\u2019s a fit.",
              },
              {
                step: "Step 2",
                title: "Scoping Conversation",
                body: "If there\u2019s something worth solving together, we define the problem, people involved, timing, and level of support that makes sense.",
              },
              {
                step: "Step 3",
                title: "Statement of Work",
                body: "You get a clear scope, approach, timing, and cost before anything starts.",
              },
            ].map((step) => (
              <div
                key={step.step}
                className="border-l-2 border-border-default pl-6 md:pl-8"
              >
                <p className="metadata-label mb-2">{step.step}</p>
                <h3 className="card-title text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg text-text-secondary leading-relaxed text-pretty">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-14 max-w-3xl space-y-4 text-lg text-text-secondary text-pretty">
            <p>
              For longer engagements, we step back periodically to review
              what&apos;s working, what&apos;s changed, and where the focus
              should move next.
            </p>
            <p>First call to signed SOW in 2 to 3 weeks, or sooner.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <figure className="max-w-3xl p-7 md:p-8 rounded-2xl card-surface border border-border-default">
            <blockquote>
              <p className="text-base md:text-lg text-text-primary leading-relaxed">
                As a UX leader and subject matter expert, he provided essential
                governance and content strategy for our brand&apos;s new design
                system and platform migration across indications for both HCP
                and DTC.
              </p>
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-4">
              <Image
                src="/images/testimonials/courtney-mcknight.avif"
                alt="Courtney McKnight"
                width={56}
                height={56}
                className="rounded-full object-cover h-12 w-12 md:h-14 md:w-14 border border-border-subtle"
              />
              <div>
                <p className="text-sm font-semibold text-text-primary">
                  Courtney McKnight
                </p>
                <p className="text-xs text-text-tertiary mt-0.5">
                  Brand Account Manager
                </p>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="section-title mb-6 md:mb-8 max-w-3xl mx-auto">
            Tell me what&apos;s stuck.
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-10 md:mb-12 max-w-2xl mx-auto">
            If you have a product, experience, team, or decision that needs
            another experienced point of view, let&apos;s talk through it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8">
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-text-primary text-text-inverse text-base font-medium tracking-tight hover:scale-[1.02] transition-transform"
            >
              Book a Strategy Call
              <span aria-hidden="true" className="ml-2">&rarr;</span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center text-base font-medium text-link hover:text-link-hover transition-colors"
            >
              Prefer email?
              <span aria-hidden="true" className="ml-2">&rarr;</span>
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
