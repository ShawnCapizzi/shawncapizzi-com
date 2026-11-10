import Link from "next/link";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/engagements",
  title: "Engagements: Fractional Design Leadership",
  description:
    "Fractional or embedded design leadership, advisory on a defined problem, or on-call senior judgment for key decisions. Experience strategy for regulated teams.",
});

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
    tagline: "Focused guidance around a defined opportunity, challenge, or decision, with a clear recommendation.",
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
      "We tackle a defined problem, present options, and a clear list of recommendations. Every insight earns its slide in the deck: a tight story with meat, nothing to skip past. Useful when a program is stuck, a decision is approaching, or leadership needs an outside perspective before committing budget or a team.",
    scope: "One defined deliverable with insights and recommendations. Built from data, your need, interviews, or a review of the current product or experience.",
  },
  {
    name: "Engagement Sprint",
    description:
      "A deeper look at a defined challenge, whether a customer insight, a new brand message, or a new digital tactic integration, using stakeholder conversations and the work already in motion. The outcome is clarity on what matters, what to do next, and what the team can act on.",
    scope:
      "A clear roadmap, an actionable presentation, and follow-ups. Built from 6+ stakeholder interviews and user needs, with AI simulations when needed.",
  },
  {
    name: "AI Opportunity Diagnostic",
    description:
      "A practical look at where AI can improve the way your team works, and where it shouldn\u2019t go yet. We map the workflow as it is, find where it gets unnecessarily complex, then decide what to refine, which staff and layers to relieve, what to hand to custom agents, what to leave alone, and which vendors and SaaS bills to cut.",
    scope: "A prioritized roadmap, not a fluff vendor list, in a few weeks.",
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

/**
 * WorkFigure (November 2026): a still from a case study, captioned and
 * linked, placed beside each engagement type so the page has a visual
 * beat every screen or so instead of one image 4,500px down. The three
 * type sections use a 12-column grid: prose keeps its max-w-3xl measure
 * in seven columns, the figure takes five, and on phone the figure stacks
 * under the text. Images are chosen to show no client or brand names.
 */
function WorkFigure({
  src,
  alt,
  caption,
  href,
  study,
  position = "object-center",
}: {
  src: string;
  alt: string;
  caption: string;
  href: string;
  study: string;
  position?: string;
}) {
  return (
    <figure className="lg:col-span-5 lg:pt-14">
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border-default bg-bg-elevated">
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover ${position}`}
          sizes="(max-width: 1024px) 100vw, 440px"
        />
      </div>
      <figcaption className="small-text mt-4 text-text-tertiary prose-block">
        {caption}{" "}
        <Link
          href={href}
          className="text-link hover:text-link-hover transition-colors whitespace-nowrap"
        >
          {study} &rarr;
        </Link>
      </figcaption>
    </figure>
  );
}

export default function Page() {
  return (
    <article>
      {/* HERO: a brief introduction, then straight into Ways of working */}
      <section className="relative section-hero">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow">Engagements</p>
          <h1 className="headline-static hero-title max-w-4xl">
            Three ways to bring me into the work.
          </h1>
          <p className="hero-lead max-w-3xl">
            Embed me with the team. Bring me in for a defined problem. Or keep
            me close for the decisions that need senior judgment. My deepest
            experience is in healthcare, pharma, and other regulated markets:
            experiences that help people understand, trust, act, and stay
            engaged.
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
            <span className="metadata-label label-inline shrink-0 mr-1">Jump to</span>
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
      <section id="ways" className="section scroll-mt-[126px] md:scroll-mt-[134px] lg:scroll-mt-[146px]">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow">Ways of working</p>
          <h2 className="section-title max-w-3xl">
            Leadership, Advisory, or On Call
          </h2>

          <div className="card-grid grid-cols-1 lg:grid-cols-3">
            {WAYS.map((way) => (
              <article
                key={way.id}
                className="flex flex-col card"
              >
                <p className="eyebrow">{way.name}</p>
                <h3 className="card-title text-text-primary">{way.title}</h3>
                <p className="card-text text-text-secondary text-pretty">{way.tagline}</p>
                <p className="card-text metadata-label">{way.keywords}</p>
                <a
                  href={`#${way.id}`}
                  className="card-foot inline-flex items-center font-medium text-link hover:text-link-hover transition-colors"
                >
                  {way.name} in detail{" "}
                  <span aria-hidden="true" className="ml-2">
                    &darr;
                  </span>
                </a>
              </article>
            ))}
          </div>

          <div className="mt-10 md:mt-12 max-w-3xl text-text-primary prose-block text-pretty">
            <p>
              I work remote-first, directly with brands, embedded with agencies,
              or alongside internal product and technology teams. Engagements
              can be project-based, ongoing, fractional, or embedded.
            </p>
            <p>
              When the work calls for it, I can also bring in a team of trusted
              partners across research, copy, creative, design, and
              development. I manage the team, and we deliver.
            </p>
          </div>

          <div className="mt-10 md:mt-12 card flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg md:text-xl font-medium text-text-primary">
                Not sure which fits?
              </p>
              <p className="mt-1 text-text-secondary">
                Start with the problem. We can figure out the right shape
                from there.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-text-primary text-text-inverse text-base font-medium tracking-tight hover:scale-[1.02] transition-transform"
            >
              Start a conversation
              <span aria-hidden="true" className="ml-2">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* WHERE EVERY ENGAGEMENT BEGINS
          The needs-framework sketch, moved up from "What I bring" in
          November 2026 so the page's first image sits under the three
          ways instead of 4,500px down. No top border: it closes the
          ways block rather than opening a new one. */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
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
            <figcaption className="small-text mt-5 text-text-tertiary text-center italic">
              Where every engagement begins.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* PATH 1 - EMBEDDED */}
      <section id="leadership" className="section border-t border-border-subtle scroll-mt-[126px] md:scroll-mt-[134px] lg:scroll-mt-[146px]">
        <div className="relative max-w-content mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-7">
          <p className="eyebrow">Engagement type 01</p>
          <h2 className="section-title max-w-3xl">
            Embedded Leadership
          </h2>
          <div className="max-w-3xl space-y-6 text-pretty">
            <p className="lead-text text-text-secondary">
              I join the team and work inside the program, alongside product,
              creative, strategy, account, regulatory, research, and
              development.
            </p>
            <p className="lead-text text-text-secondary">
              This works when you need experienced UX/design leadership on an
              important project or program without necessarily adding another
              full-time role.
            </p>
            <p className="lead-text text-text-secondary">
              I work inside your tools, training, and process, not beside them,
              whether that&apos;s an enterprise playbook or a start-up still
              writing its own. Where the process slows the work, I help refine
              it.
            </p>
            <p className="body-text text-text-secondary">
              <strong className="font-semibold text-text-primary">Typical work:</strong>{" "}
              product and experience strategy, UX/CX, service design,
              information architecture, workflow and process optimization,
              design systems, prototypes, workshops, and direction for
              internal or external development teams.
            </p>
          </div>

          <p className="small-text mt-10 md:mt-12 max-w-3xl text-text-secondary italic">
            Engagements can be structured by project, week, or program duration.
          </p>
          </div>
          <WorkFigure
            src="/images/case-studies/01-pharma-design-systems/carousel-05-handbook.png"
            alt="Spiral-bound design system handbook on a desk, titled How to use and leverage components across your brand story"
            caption="The playbook from an embedded governance program: written so the teams could run it without me."
            href="/work/pharma-design-systems"
            study="Design systems"
          />
        </div>
      </section>

      {/* PATH 2 - ADVISORY */}
      <section id="advisory" className="section border-t border-border-subtle scroll-mt-[126px] md:scroll-mt-[134px] lg:scroll-mt-[146px]">
        <div className="relative max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-10 md:mb-12">
            <div className="lg:col-span-7">
              <p className="eyebrow">Engagement type 02</p>
              <h2 className="section-title max-w-3xl">
                Advisory
              </h2>
              <p className="lead-text max-w-3xl text-text-secondary">
                Sometimes that&apos;s product and experience strategy. Sometimes
                it&apos;s a pitch, blue-sky options, or a voice in the room. Three
                common shapes:
              </p>
            </div>
            <WorkFigure
              src="/images/case-studies/03-enterprise-financial-services-crm/field-research-whiteboard-synthesis.png"
              alt="Two people synthesizing field research notes on a whiteboard"
              caption="Field research synthesized into a recommendation the room could act on."
              href="/work/enterprise-financial-services-crm"
              study="Financial services CRM"
            />
          </div>

          <div className="card-grid grid-cols-1 lg:grid-cols-3">
            {ADVISORY_SHAPES.map((shape) => (
              <article
                key={shape.name}
                className="relative flex flex-col card"
              >
                <h3 className="card-title text-text-primary">
                  {shape.name}
                </h3>
                <p className="small-text card-text text-text-secondary text-pretty">
                  <span className="metadata-label block">Typical shape</span>
                  {shape.scope}
                </p>
                <p className="card-text text-text-secondary text-pretty">
                  {shape.description}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* PATH 3 - ON CALL */}
      <section id="oncall" className="section border-t border-border-subtle scroll-mt-[126px] md:scroll-mt-[134px] lg:scroll-mt-[146px]">
        <div className="relative max-w-content mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-7">
          <p className="eyebrow">Engagement type 03</p>
          <h2 className="section-title max-w-3xl">
            On Call
          </h2>
          <div className="max-w-3xl space-y-6 text-pretty">
            <p className="lead-text text-text-secondary">
              Keep me close when you don&apos;t need another full-time role,
              but you do need senior judgment available when important
              decisions come up.
            </p>
            <p className="lead-text text-text-secondary">
              I can review work, pressure-test a direction, join a key meeting,
              help frame a problem, or work through a decision with the team
              before it becomes expensive to change.
            </p>
          </div>

          <div className="mt-10 md:mt-12 max-w-3xl">
            <p className="small-text text-text-secondary italic">
              Retainers are monthly and scope to the cadence of access you need.
            </p>
          </div>
          </div>
          <WorkFigure
            src="/images/case-studies/02-multi-brand-pharma-sales-tools/carousel-02-wireframe-template.png"
            alt="Annotated wireframe template for a pharma sales tool, with placeholder drug name and tabs"
            caption="A wireframe reviewed before it became expensive to change."
            href="/work/multi-brand-pharma-sales-tools"
            study="Pharma sales tools"
          />
        </div>
      </section>

      {/* WHO I WORK WITH */}
      <section id="who" className="section border-t border-border-subtle scroll-mt-[126px] md:scroll-mt-[134px] lg:scroll-mt-[146px]">
        <div className="relative max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title max-w-3xl">
            Who I work with
          </h2>
          <div className="max-w-3xl space-y-6 text-pretty">
            <p className="lead-text text-text-secondary">
              The most useful seat I take in any engagement is the one between
              the leaders who set direction and the practitioners building
              toward it. I do my best work when I&apos;m trusted by both.
            </p>
            <p className="body-text text-text-secondary">
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
      <section id="focus" className="section border-t border-border-subtle scroll-mt-[126px] md:scroll-mt-[134px] lg:scroll-mt-[146px]">
        <div className="relative max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title max-w-3xl">
            What I bring to every engagement.
          </h2>


          <div className="space-y-10 md:space-y-12">
            {PILLARS.map((pillar) => (
              <div key={pillar.name} className="max-w-3xl">
                <h3 className="card-title text-text-primary">
                  {pillar.name}
                </h3>
                <p className="body-text text-text-secondary">
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
      <section id="process" className="section border-t border-border-subtle scroll-mt-[126px] md:scroll-mt-[134px] lg:scroll-mt-[146px]">
        <div className="relative max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title max-w-3xl">
            How we start.
          </h2>

          <div className="space-y-10 md:space-y-12 max-w-3xl">
            {[
              {
                step: "Step 1",
                title: "Initial Conversation",
                body: "We talk through what\u2019s happening, what\u2019s stuck, what opportunity you see, and whether I can help.",
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
                className="hash-rule pl-6 md:pl-8"
              >
                <p className="metadata-label">{step.step}</p>
                <h3 className="card-title text-text-primary">
                  {step.title}
                </h3>
                <p className="body-text text-text-secondary text-pretty">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div className="prose-block mt-12 md:mt-14 max-w-3xl text-text-secondary text-pretty">
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
      <section className="section border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <figure className="max-w-3xl card">
            <blockquote>
              <p className="card-text text-text-primary">
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
                <p className="small-text text-text-tertiary mt-0.5">
                  Brand Account Manager
                </p>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-close border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="section-title max-w-3xl mx-auto">
            Tell me what&apos;s stuck.
          </h2>
          <p className="lead-text text-text-secondary mb-10 md:mb-12 max-w-2xl mx-auto">
            If you have a product, experience, team, or decision that needs
            another experienced point of view, let&apos;s talk through it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-text-primary text-text-inverse text-base font-medium tracking-tight hover:scale-[1.02] transition-transform"
            >
              Let&apos;s talk
              <span aria-hidden="true" className="ml-2">&rarr;</span>
            </Link>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center text-base font-medium text-link hover:text-link-hover transition-colors"
            >
              Email me
              <span aria-hidden="true" className="ml-2">&rarr;</span>
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
