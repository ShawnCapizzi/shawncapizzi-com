// Destination: app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, profilePage } from "@/lib/seo";
import { KeepHyphens } from "@/components/KeepHyphens";
import { VideoWithPlayOverlay } from "@/components/VideoWithPlayOverlay";

/* The six kinds of work in "Hard to staff", once a single paragraph. */
const HARD_TO_STAFF_WORK = [
  "Defining a product before development starts.",
  "Untangling a customer journey.",
  "Aligning a team around a roadmap.",
  "Shaping a message.",
  "Building a design system.",
  "Bringing an experienced point of view into a difficult decision.",
];

/* Background, as facts. Each pair is a label and the text, unchanged from
   the paragraphs it replaced. */
const BACKGROUND: [string, string][] = [
  [
    "Today",
    "Senior consulting work at Publicis CoLab across the Pfizer portfolio, spanning multi-brand governance, regulated digital experiences, design systems, HCP and patient touchpoints, and emerging uses of AI.",
  ],
  [
    "15+ years",
    "Pharma, healthcare, financial services, enterprise technology, customer experience, and patient experience.",
  ],
  [
    "Teaching",
    "Design fundamentals, Photoshop, and InDesign at NYU.",
  ],
  [
    "Education",
    "BFA from Pratt Institute in Communications Design and Advertising/Marketing. Rutgers' AI Automation cohort, recently completed.",
  ],
];

export const metadata = pageMetadata({
  path: "/about",
  title: "About",
  description:
    "Shawn Capizzi is a strategic experience design leader with 15+ years working at the intersection of UX, CX, product, and regulated digital systems.",
  type: "profile",
});

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

      {/* PHOTOGRAPHS AND CLIPS (October 2026): right after the hero, so a
          visitor gets a feel for Shawn through pictures before the
          professional detail. His own photos and two phone clips. Venice
          leads; then One World Trade Center, the Smalls clip, and the Meadows
          clip; then a night out at Le Poisson Rouge and Chinatown. The clips
          play on tap. Files live in public/images/about/beyond/ and
          public/videos/about/ with location data stripped. Desktop: Venice
          full width, then a three-column grid. Phone: Venice, then one row
          the visitor swipes. */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title text-balance mb-6 md:mb-8 max-w-3xl">
            There has to be a life away from the computer.
          </h2>
          <p className="mb-10 md:mb-12 max-w-3xl text-lg md:text-xl text-text-secondary leading-relaxed text-pretty">
            For me, that&apos;s travel and getting out to see music. A few
            frames from both.
          </p>
          <div>
            <BeyondPhoto
              src="/images/about/beyond/venice-grand-canal.jpg"
              alt="A gondolier rowing on the Grand Canal in Venice, the Rialto Bridge in the distance, shot through a fisheye lens."
              caption="Grand Canal · Venice"
              aspect="aspect-[3/2]"
              sizes="(max-width: 768px) 100vw, 1100px"
            />
            <div
              role="region"
              aria-label="More photographs and clips"
              tabIndex={0}
              className="mt-6 md:mt-8 -mx-6 px-6 md:mx-0 md:px-0 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:gap-8 md:overflow-visible"
            >
              <BeyondPhoto
                src="/images/about/beyond/one-world-trade-center.jpg"
                alt="One World Trade Center rising over the 9/11 Memorial plaza in snow."
                caption="One World Trade Center · NYC"
                aspect="aspect-[4/5]"
                className={SWIPE_ITEM}
                sizes="(max-width: 768px) 80vw, 360px"
              />
              {/* The two clips from Shawn's phone, played on tap. Exported
                  as H.264 with the location data stripped; the Meadows clip
                  is cropped to the tile. Nothing plays on its own. */}
              <BeyondClip
                src="/videos/about/smalls-jazz-club.mp4"
                poster="/images/about/beyond/smalls-jazz-club.jpg"
                label="A drummer and bassist on stage at Smalls Jazz Club, from a seat beside the drum kit"
                caption="Smalls Jazz Club · NYC"
              />
              <BeyondClip
                src="/videos/about/the-meadows-fear-factory.mp4"
                poster="/images/about/beyond/the-meadows-fear-factory-poster.jpg"
                label="Fear Factory on stage at The Meadows in Brooklyn, the crowd's hands up in purple light"
                caption="Fear Factory · The Meadows, Brooklyn"
              />
              <BeyondPhoto
                src="/images/about/beyond/dj-evil-d-le-poisson-rouge.jpg"
                alt="Shawn, in a Mets jersey, with DJ Evil D under red stage lights."
                caption="With DJ Evil D · Le Poisson Rouge, NYC"
                aspect="aspect-[4/5] md:aspect-auto"
                className={SWIPE_ITEM}
                sizes="(max-width: 768px) 80vw, 360px"
              />
              <BeyondPhoto
                src="/images/about/beyond/chinatown-fish-counter.jpg"
                alt="A fishmonger working a long fish counter in Chinatown, priced in red on green tags."
                caption="Chinatown · NYC"
                aspect="aspect-[4/5] md:aspect-[4/3]"
                position="object-[20%_50%]"
                className={`${SWIPE_ITEM} md:col-span-2`}
                sizes="(max-width: 768px) 80vw, 730px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HARD TO STAFF: why a client brings Shawn in. October 2026: the
          six kinds of work are a hash-rule list and the closing line is a
          pull quote beside the body on desktop. The two paragraphs about
          who Shawn works with and when he listens moved into "How I show
          up", which says both. */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          {/* A two-word turn from the photographs back to the work. */}
          <p className="eyebrow mb-3">Back to work</p>
          <h2 className="section-title text-balance mb-8 md:mb-10 max-w-3xl">
            <KeepHyphens>The work that&apos;s hard to staff full-time, but too important to miss.</KeepHyphens>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7 space-y-6 text-lg md:text-xl text-text-secondary leading-relaxed text-pretty">
              <p>
                Sometimes it&apos;s budget. Sometimes the opportunity isn&apos;t
                clear yet, or the organization doesn&apos;t know what kind of
                expertise it needs. Either way, important work can sit between
                roles, teams, or priorities, and opportunities get missed.
              </p>
              <p>That might mean:</p>
              <ul className="space-y-3 text-text-primary">
                {HARD_TO_STAFF_WORK.map((item) => (
                  <li key={item} className="hash-rule pl-5 md:pl-6">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Scan point 2 (October 2026): the secondary quote treatment,
                a step below the main pull quote in "How I show up". */}
            <blockquote className="lg:col-span-5 lg:pt-2 self-start lg:sticky lg:top-32 hash-rule pl-6 md:pl-8 text-xl md:text-2xl font-medium tracking-tight text-text-primary leading-snug text-balance">
              The goal isn&apos;t to add another opinion to the room. It&apos;s
              to create clarity early enough for the team to make a better
              decision and move the work forward.
            </blockquote>
          </div>
        </div>
      </section>

      {/* BACKGROUND. October 2026: the three paragraphs are four facts on
          the hash rule, two columns on desktop. Wording unchanged. */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title text-balance mb-8 md:mb-10 max-w-3xl">
            Background
          </h2>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-10">
            {BACKGROUND.map(([label, text]) => (
              <div key={label} className="hash-rule pl-5 md:pl-6">
                <dt className="metadata-label mb-2">{label}</dt>
                <dd className="text-lg md:text-xl text-text-secondary leading-relaxed text-pretty">
                  {text}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* PROUD OF */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title text-balance mb-10 md:mb-14 max-w-3xl">
            A few things I&apos;m proud of
          </h2>
          <div className="space-y-10 max-w-3xl">
            <div className="hash-rule pl-6 md:pl-8">
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
            <div className="hash-rule pl-6 md:pl-8">
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
            <div className="hash-rule pl-6 md:pl-8">
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

      {/* HOW I SHOW UP (October 2026): what Shawn is like to work with.
          Replaces the "Clarity should come before execution" and "New
          tools" sections; their useful ideas live here. Copy is Shawn's. */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title text-balance mb-8 md:mb-10 max-w-3xl">
            How I show up.
          </h2>
          <div className="max-w-3xl space-y-6 text-lg md:text-xl text-text-secondary leading-relaxed text-pretty">
            <p>
              I listen first, understand what&apos;s already happening, and
              ask the questions that help people get clear on the decision
              underneath the work.
            </p>
            <p>
              Sometimes that means challenging an assumption or offering the
              counterpoint the room needs to hear. Sometimes it means making
              an idea tangible enough for everyone to react to it. And
              sometimes it means recognizing that the team already has the
              answer and simply needs a clearer way forward.
            </p>
            <p>
              I&apos;ve always been curious about new tools, especially AI,
              because they let us test ideas and explore possibilities much
              earlier. But the tool is never the point. If it doesn&apos;t
              improve the work, the experience, or the decision, it&apos;s
              just more output.
            </p>
          </div>

          {/* Scan point 3, the main pull quote: the strongest line between
              the hero and the closing ask, one step above the section
              titles and below the H1. */}
          <blockquote className="mt-12 md:mt-16 max-w-3xl hash-rule pl-6 md:pl-8 text-2xl md:text-3xl font-semibold tracking-tight text-text-primary leading-snug text-balance">
            I help teams get to clear, well-considered thinking and quickly
            move the work forward.
          </blockquote>
        </div>
      </section>

      {/* IN THE WORK: industry presence, two photos. Kept because nothing
          else on the page shows Shawn in the room with the industry. */}
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
            {/* Scan point 4 (October 2026): the creative worldview, in the
                secondary quote treatment. It was the third paragraph. */}
            <blockquote className="py-2 hash-rule pl-6 md:pl-8 text-xl md:text-2xl font-medium tracking-tight text-text-primary leading-snug text-balance">
              See what&apos;s actually there before deciding what it should
              be, and know the right place to stop.
            </blockquote>
            <p>
              Born in Queens. Mets and Yankees fan, in that order. Competitive
              BBQ in the off-season.
            </p>
          </div>

          {/* LinkedIn post: the live performance work, kept as proof of AI
              visuals made live well before the tools went mainstream. The
              post's LinkedIn ID decodes to July 30, 2023. */}
          <div className="mt-12 md:mt-14 max-w-3xl">
            {/* Set-up (October 2026): what the clip is, and when. Same
                subtitle treatment as the photographs below it. */}
            <h3 className="card-title text-text-primary mb-3 text-balance">
              AI as a creative tool, since the summer of 2023.
            </h3>
            <p className="mb-6 md:mb-8 text-base md:text-lg text-text-secondary leading-relaxed text-pretty">
              Images generated in Midjourney from the performers&apos; lyrics
              and poems, dropped into Runway in real time, and projected
              behind them as they played. A few highlights of that live
              imagery.
            </p>
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
              Posted on LinkedIn, July 2023.
            </p>
          </div>

        </div>
      </section>

      {/* CURIOSITY: the family story, with the Sora cookie video and the
          learning app links kept as the two proofs. Tightened to one
          paragraph in October 2026; not a professional AI section. */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title text-balance mb-8 md:mb-10 max-w-3xl">
            Curiosity doesn&apos;t stop at work.
          </h2>
          <div className="max-w-3xl">
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed text-pretty">
              I share a lot of what I&apos;m learning about design, AI,
              building, and new creative tools with my daughters. Sometimes
              that means making a Sora video together. Sometimes it means
              building a small math or learning app to make an idea easier to
              understand. It keeps the technology practical, playful, and
              human.
            </p>

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

            <div className="mt-10 md:mt-12">
              {/* October 2026: one link to the learning app, which keeps
                  growing, instead of the two quiz pages. The quiz files stay
                  in public/apps/. Body size, so it reads as its own example
                  and not a note under the video. */}
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed text-pretty">
                The learning app is free, with no sign-up: a study tool built
                around my daughters&apos; classwork and upcoming tests.
              </p>
              <a
                href="https://learning-platform-21i5oslt1-capizzi-gmailcoms-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-base font-medium text-link hover:text-link-hover transition-colors"
              >
                Open the learning app
                <span aria-hidden="true" className="ml-2">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AVAILABILITY (October 2026): one quiet line, here and on /contact
          only. Never an "open to work" banner. */}
      <section className="py-10 md:py-14 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="max-w-3xl text-base md:text-lg text-text-secondary leading-relaxed text-pretty">
            Available for remote-first consulting, fractional or embedded
            UX/design leadership, and select senior full-time opportunities.
          </p>
        </div>
      </section>

      {/* CTA. The page ends here; the global footer follows. The type and
          color colophon moved to /design-info in October 2026. */}
      <section className="py-24 md:py-32 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="section-title text-balance mb-6 md:mb-8 max-w-3xl mx-auto">
            Bring me what you&apos;re working through.
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-10 md:mb-12 max-w-2xl mx-auto text-pretty">
            A defined problem, an opportunity that still needs definition, or
            something that simply isn&apos;t working the way&nbsp;it&nbsp;should.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-text-primary text-text-inverse text-base font-medium tracking-tight hover:scale-[1.02] transition-transform"
          >
            Start a conversation
            <span aria-hidden="true" className="ml-2">&rarr;</span>
          </Link>
        </div>
      </section>
    </article>
  );
}

/* Phone: each photo after Venice is a swipe card, about four-fifths of the
   screen wide so the next one peeks in. Desktop: a normal grid cell. */
const SWIPE_ITEM = "shrink-0 w-[80%] snap-start md:w-auto";

/* One photograph in "Beyond the work": rounded like the "In the work"
   photos, with the place named in a quiet caption underneath. On desktop a
   tile with "md:aspect-auto" takes the height of its row. */
function BeyondPhoto({
  src,
  alt,
  caption,
  aspect,
  sizes,
  className = "",
  position = "object-center",
}: {
  src: string;
  alt: string;
  caption: string;
  aspect: string;
  sizes: string;
  className?: string;
  position?: string;
}) {
  return (
    <figure className={`flex flex-col ${className}`}>
      <div
        className={`relative ${aspect} ${aspect.includes("aspect-auto") ? "md:flex-1" : ""} rounded-2xl overflow-hidden border border-border-default bg-bg-raised`}
      >
        <Image src={src} alt={alt} fill className={`object-cover ${position}`} sizes={sizes} />
      </div>
      <figcaption className="mt-3 font-mono text-xs md:text-sm text-text-secondary tracking-tight">
        {caption}
      </figcaption>
    </figure>
  );
}

/* One phone clip in "Beyond the work", in the same tile as the photos.
   The site's tap-to-play video (components/VideoWithPlayOverlay.tsx) fills
   the tile; the poster is the still that stood in for it before. */
function BeyondClip({
  src,
  poster,
  label,
  caption,
}: {
  src: string;
  poster: string;
  label: string;
  caption: string;
}) {
  return (
    <figure className={`flex flex-col ${SWIPE_ITEM}`}>
      <VideoWithPlayOverlay
        src={src}
        poster={poster}
        ariaLabel={label}
        wrapperClassName="aspect-[4/5] rounded-2xl overflow-hidden border border-border-default bg-bg-raised"
        videoClassName="absolute inset-0 h-full w-full object-cover"
      />
      <figcaption className="mt-3 font-mono text-xs md:text-sm text-text-secondary tracking-tight">
        {caption}
      </figcaption>
    </figure>
  );
}
