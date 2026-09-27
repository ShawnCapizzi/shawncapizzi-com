// Destination: app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, profilePage } from "@/lib/seo";
import { CTACards } from "@/components/CTACards";
import { Colophon } from "@/components/Colophon";
import { KeepHyphens } from "@/components/KeepHyphens";

export const metadata = pageMetadata({
  path: "/about",
  title: "About",
  description:
    "Shawn Capizzi is a strategic experience design leader with 15+ years working at the intersection of UX, CX, product, and regulated digital systems.",
  type: "profile",
});

const CAL_URL = "https://cal.com/capizzi/30min";

export default function Page() {
  return (
    <article>
      <JsonLd data={profilePage()} />
      {/* Rim-shimmer CSS, scoped to .capizzi-rim-card class.
          Color matches nav shimmer (brand-blue #4F46E5). Opacity dims
          across three passes (0.95 → 0.55 → 0.25 → 0) mirroring the
          nav shimmer's three-pass falloff. */}
      <style>{`
        @keyframes capizzi-rim-shimmer {
          0%   { transform: rotate(0deg);    opacity: 0.95; }
          33%  { transform: rotate(360deg);  opacity: 0.55; }
          66%  { transform: rotate(720deg);  opacity: 0.25; }
          95%  { transform: rotate(1080deg); opacity: 0.08; }
          100% { transform: rotate(1080deg); opacity: 0; }
        }
        .capizzi-rim-card { position: relative; }
        .capizzi-rim-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 270deg,
            rgba(79, 70, 229, 0.55) 300deg,
            rgba(79, 70, 229, 1) 335deg,
            rgba(79, 70, 229, 0.55) 355deg,
            transparent 360deg
          );
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
                  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
          animation: capizzi-rim-shimmer 9s linear 1 forwards;
          pointer-events: none;
          z-index: 2;
        }
        .capizzi-rim-card.delay-1::before { animation-delay: 0.5s; }
        .capizzi-rim-card.delay-2::before { animation-delay: 1.0s; }
        @media (prefers-reduced-motion: reduce) {
          .capizzi-rim-card::before { animation: none; opacity: 0; }
        }
      `}</style>

      {/* HERO: how the work moved upstream. Rewritten September 2026 in
          Shawn's words; the portrait and its rim shimmer are unchanged. */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow mb-3">About</p>

          <div className="max-w-4xl">
            <h1 className="headline-static hero-title text-balance">
              I found I could add the most value before the creative work officially started.
            </h1>
            <p className="hero-lead max-w-3xl text-pretty">
              I studied Communications Design and Advertising/Marketing at
              Pratt and started my career in identity, visual design, and
              creative direction.
            </p>
          </div>

          {/* Body copy + portrait, side-by-side on desktop; stacks on mobile,
              portrait first. */}
          <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 lg:items-center">
            <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center space-y-6 text-lg md:text-xl text-text-secondary leading-relaxed text-pretty">
              <p>
                The more meetings, planning sessions, and project kickoffs I
                was part of, the more I saw opportunities earlier in the
                process, before the brief was locked and before creative
                began. I became drawn to the research, framing, and definition
                work that helps teams understand the problem, find the
                opportunity, and set a clearer direction from the start.
              </p>
              <p>
                That interest pulled me deeper into UX, CX, service design,
                experience architecture, product strategy, design systems, and
                design leadership. Today, much of my work sits where business
                goals, customer needs, technology, and the realities of getting
                something into market meet.
              </p>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-start">
              <div className="relative rounded-2xl overflow-hidden border border-border-default shadow-xl capizzi-rim-card w-full max-w-[220px] lg:max-w-[250px] aspect-[340/430]">
                <Image
                  src="/images/brand/headshot-2026-knockout.webp"
                  alt="Shawn Capizzi"
                  fill
                  priority
                  quality={100}
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 220px, 250px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HARD TO STAFF: why a client brings Shawn in. */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title text-balance mb-8 md:mb-10 max-w-3xl">
            <KeepHyphens>The work that&apos;s hard to staff full-time, but too important to miss.</KeepHyphens>
          </h2>
          <div className="max-w-3xl space-y-6 text-lg md:text-xl text-text-secondary leading-relaxed text-pretty">
            <p>
              Sometimes it&apos;s budget. Sometimes the opportunity isn&apos;t
              clear yet, or the organization doesn&apos;t know what kind of
              expertise it needs. Either way, important work can sit between
              roles, teams, or priorities, and opportunities get missed.
            </p>
            <p>
              That might mean defining a product before development starts,
              untangling a customer journey, aligning a team around a roadmap,
              shaping a message, building a design system, or bringing an
              experienced point of view into a difficult decision.
            </p>
            <p>
              I work comfortably with executives, strategists, creatives,
              product managers, researchers, stakeholders, and development
              teams.
            </p>
            <p>
              Experience has taught me when to listen, when to respect the
              process already in place, and when a new possibility is worth
              putting on the table.
            </p>
            <p>
              The goal isn&apos;t to add another opinion to the room. It&apos;s
              to create clarity early enough for the team to make a better
              decision and move the work forward.
            </p>
          </div>
        </div>
      </section>

      {/* CLARITY BEFORE EXECUTION: the working principle. */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title text-balance mb-8 md:mb-10 max-w-3xl">
            Clarity should come before execution.
          </h2>
          <div className="max-w-3xl space-y-6 text-lg md:text-xl text-text-secondary leading-relaxed text-pretty">
            <p>
              That principle shapes the judgment and guidance I bring to the
              day-to-day work: knowing when to listen, when to question, and
              when a team needs more clarity before moving forward.
            </p>
            <p>
              Before the screen, campaign, platform, or product, there are
              harder questions.
            </p>
            <p>
              What problem are we actually solving? For whom? What decision or
              action should the experience support? What does someone need to
              understand or trust before we ask them to do anything?
            </p>
            <p>
              That matters everywhere, but especially in pharma, healthcare,
              financial services, and other regulated environments where
              complexity, compliance, and human needs have to coexist.
            </p>
            <p>
              AI makes those questions more important, not less. Teams can move
              from idea to output faster than ever. Knowing what should be
              made, why it matters, and how we&apos;ll know it worked becomes
              even more valuable.
            </p>
          </div>
        </div>
      </section>

      {/* NEW TOOLS: curiosity, used with judgment. */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title text-balance mb-8 md:mb-10 max-w-3xl">
            I&apos;ve always been interested in what new tools make possible.
          </h2>
          <div className="max-w-3xl space-y-6 text-lg md:text-xl text-text-secondary leading-relaxed text-pretty">
            <p>
              New technology and new ways of working have been a thread
              throughout my career.
            </p>
            <p>
              AI has expanded that dramatically. I can make ideas tangible
              earlier, test assumptions, explore new processes, and see
              opportunities that can be difficult to understand in a deck or
              flow alone.
            </p>
            <p>
              But I don&apos;t walk into an established team assuming the
              newest tool or process is the answer. I listen first, understand
              what&apos;s happening in the room, respect how the team works,
              and then introduce what might be useful in context.
            </p>
            <p>
              New thinking works better when people can see it, react to it,
              and shape it together.
            </p>
            <p>
              A lot of that thinking now feeds the Capizzi Process,{" "}
              <em>Seeing Past the Cage</em>, and the Clarity Cards: different
              ways of helping teams make problems visible, ask better
              questions, and move toward decisions.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/thinking"
              className="inline-flex items-center text-base font-medium text-link hover:text-link-hover transition-colors"
            >
              Explore the thinking{" "}
              <span aria-hidden="true" className="ml-2">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* BACKGROUND */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title text-balance mb-8 md:mb-10 max-w-3xl">
            Background
          </h2>
          <div className="max-w-3xl space-y-6 text-lg md:text-xl text-text-secondary leading-relaxed text-pretty">
            <p>
              Today I lead senior consulting work at Publicis CoLab across the
              Pfizer portfolio, spanning multi-brand governance, regulated
              digital experiences, design systems, HCP and patient touchpoints,
              and emerging uses of AI.
            </p>
            <p>
              Over the past 15+ years, my work has crossed pharma, healthcare,
              financial services, enterprise technology, customer experience,
              and patient experience.
            </p>
            <p>
              I&apos;ve also taught design fundamentals, Photoshop, and
              InDesign at NYU. My BFA is from Pratt Institute in Communications
              Design and Advertising/Marketing, and I recently completed
              Rutgers&apos; AI Automation cohort.
            </p>
          </div>
        </div>
      </section>

      {/* PROUD OF */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title text-balance mb-10 md:mb-14 max-w-3xl">
            A few things I&apos;m proud of
          </h2>
          <div className="space-y-10 max-w-3xl">
            <div className="border-l-2 border-border-default pl-6 md:pl-8">
              <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-2 leading-tight text-balance">
                D&amp;AD Pencil &middot; Future Impact Initiative
              </h3>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                For the Cancer Equality App with The Chrysalis Initiative.
              </p>
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                <Link
                  href="/work/cancer-equality-app"
                  className="inline-flex items-center text-base font-medium text-link hover:text-link-hover transition-colors"
                >
                  View the case study{" "}
                  <span aria-hidden="true" className="ml-2">&rarr;</span>
                </Link>
                <a
                  href="https://www.dandad.org/annual/2022/entry/professional/235946"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-base font-medium text-link hover:text-link-hover transition-colors"
                >
                  View on D&amp;AD{" "}
                  <span aria-hidden="true" className="ml-2">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="border-l-2 border-border-default pl-6 md:pl-8">
              <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-2 leading-tight text-balance">
                Industry-first pharmaceutical mobile wallet integration
              </h3>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                Patient medication information delivered through an
                FDA-compliant, QR-based mobile wallet experience across a
                multi-brand portfolio.
              </p>
              <div className="mt-3">
                <Link
                  href="/work/pharma-design-systems"
                  className="inline-flex items-center text-base font-medium text-link hover:text-link-hover transition-colors"
                >
                  View the work{" "}
                  <span aria-hidden="true" className="ml-2">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="border-l-2 border-border-default pl-6 md:pl-8">
              <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-2 leading-tight text-balance">
                Published thinking
              </h3>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                I write about design, AI, healthcare, regulation, and how the
                work itself is changing.
              </p>
              <div className="mt-3">
                <Link
                  href="/thinking"
                  className="inline-flex items-center text-base font-medium text-link hover:text-link-hover transition-colors"
                >
                  Read the writing and talks{" "}
                  <span aria-hidden="true" className="ml-2">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IN THE WORK: industry presence, two photos. */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title text-balance mb-10 md:mb-12 max-w-3xl">
            In the work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <figure className="rounded-2xl overflow-hidden border border-border-default bg-bg-raised">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/about/manny-awards.jpg"
                  alt="Shawn at the Manny Awards red carpet in New York with industry colleagues."
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm font-semibold text-text-primary border-t border-border-subtle">
                Manny Awards &middot; NYC
              </figcaption>
            </figure>

            <figure className="rounded-2xl overflow-hidden border border-border-default bg-bg-raised">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/about/pinecone_Ai_Ash_and_capizzi.png"
                  alt="Shawn with Ash Ashutosh, CEO of Pinecone, at the CxO Institute event in New York."
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm font-semibold text-text-primary border-t border-border-subtle">
                With Ash Ashutosh, CEO, Pinecone &middot; CxO Institute
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* BOOK + WAYS TO WORK TOGETHER: About-specific card copy lives in
          components/cta-cards-data.ts as bookAbout and engagementsAbout. */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <CTACards cards={["bookAbout", "engagementsAbout"]} />
        </div>
      </section>

      {/* BEYOND THE WORK: the creative practice, briefly. */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title text-balance mb-8 md:mb-10 max-w-3xl">
            Beyond the work
          </h2>
          <div className="max-w-3xl space-y-6 text-lg md:text-xl text-text-secondary leading-relaxed text-pretty">
            <p>
              I&apos;m also a photographer, painter, and documentary filmmaker.
              I&apos;ve photographed Venice and New York, and I&apos;m working
              on a film about the 2000 Subway Series and pre-9/11 New York.
            </p>
            <p>
              I also co-founded a creative arts and music collective while at
              Rider University and still perform with my longtime friend
              Taylor Keer, creating live visuals alongside poetry and music.
            </p>
            <p>
              That work asks something similar of design: see what&apos;s
              actually there before deciding what it should be, and know when
              to stop.
            </p>
            <p>
              Born in Queens. Mets and Yankees fan, in that order. Competitive
              BBQ in the off-season.
            </p>
          </div>

          {/* LinkedIn post: the live performance work, kept as proof of AI
              visuals made live well before the tools went mainstream. The
              post's LinkedIn ID decodes to July 30, 2023. */}
          <div className="mt-12 md:mt-14 max-w-3xl">
            <div
              className="rounded-xl overflow-hidden"
              style={{ maxWidth: "720px", margin: "0 auto" }}
            >
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7091549601580621824?collapsed=1"
                height="550"
                width="100%"
                frameBorder="0"
                allowFullScreen
                title="LinkedIn post, live performance with AI-generated visuals"
                loading="lazy"
                style={{ display: "block", borderRadius: "12px" }}
              />
            </div>
            <p
              className="mt-4 text-sm text-text-tertiary italic text-center"
              style={{ maxWidth: "720px", margin: "1rem auto 0" }}
            >
              A live performance, with visuals generated in real time
              alongside poetry and music. Posted July 2023.
            </p>
          </div>
        </div>
      </section>

      {/* CURIOSITY: what Shawn shares, and the family story, with the
          cookie video kept directly under its paragraph. */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title text-balance mb-8 md:mb-10 max-w-3xl">
            Curiosity doesn&apos;t stop at work.
          </h2>
          <div className="max-w-3xl">
            <div className="space-y-6 text-lg md:text-xl text-text-secondary leading-relaxed text-pretty">
              <p>
                I share what I learn about design, AI, and building with
                colleagues, friends, and my daughters.
              </p>
              <p>
                At home, questions often turn into small projects, from
                learning apps to experiments with Sora using things we&apos;ve
                made together.
              </p>
              <p>
                It keeps the technology practical, playful, and connected to
                real people.
              </p>
            </div>

            <figure className="mt-8 md:mt-10 rounded-2xl overflow-hidden border border-border-default bg-bg-raised">
              <video
                controls
                preload="metadata"
                poster="/videos/sora-holiday-cookies-poster.jpg"
                className="w-full h-auto block"
              >
                <source src="/videos/sora-holiday-cookies.mp4" type="video/mp4" />
                Your browser doesn&apos;t support the video tag. The video
                shows a Sora-generated stack of patriotic-sprinkled holiday
                cookies on a gold plate.
              </video>
              <figcaption className="px-5 py-4 text-sm font-semibold text-text-primary border-t border-border-subtle">
                An experiment with my daughters: turning a photo of our
                homemade cookies into a Sora video.
              </figcaption>
            </figure>

            <p className="mt-6 text-sm text-text-tertiary">
              The learning apps are free, with no sign-up:{" "}
              <a
                href="/apps/fractions-quiz.html"
                className="text-link hover:text-link-hover transition-colors"
              >
                Fractions Quiz
              </a>{" "}
              and{" "}
              <a
                href="/apps/area-perimeter-quiz.html"
                className="text-link hover:text-link-hover transition-colors"
              >
                Area and Perimeter Quiz
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="section-title text-balance mb-6 md:mb-8 max-w-3xl mx-auto">
            Let&apos;s see if there&apos;s a fit.
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

      {/* ABOUT THIS SITE: type and color colophon, after the ask so it
          never competes with it. Linked from the footer on every page. */}
      <Colophon />
    </article>
  );
}
