// Destination: app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, profilePage } from "@/lib/seo";
import { CTACards } from "@/components/CTACards";
import { Colophon } from "@/components/Colophon";

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
      {/* Rim-shimmer CSS — scoped to .capizzi-rim-card class.
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

      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow mb-3">About</p>

          {/* Full-width declarative headline */}
          <div className="max-w-4xl">
            <h1 className="headline-static hero-title text-balance">
              I help regulated and enterprise teams make complex work clearer, more trusted, and easier to ship.
            </h1>
            <p className="hero-lead max-w-3xl">
              Usually that means structuring dense financial or scientific data
              and the regulated communication around it. Sometimes it&apos;s
              shipping a product, winning a pitch, or simplifying a user flow.
            </p>
          </div>

          {/* Body copy + portrait, side-by-side on desktop; stacks on mobile.
              On desktop the photo container is sized so its height matches
              the text block on the left (~316px at text-xl leading-relaxed,
              two paragraphs). At aspect-[340/430], a 250px max-width yields
              ~316px height, the columns now read as a balanced pair rather
              than the photo dominating. The source is 1:1, so object-cover
              shows the full vertical frame and crops the side padding evenly;
              object-center is correct. */}
          <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 lg:items-center">
            <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center">
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                I&apos;m a strategic experience design leader with 15+ years
                working at the intersection of UX, CX, product, and regulated
                digital systems. The work I do best is the work that&apos;s
                hard to staff full-time but too important to skip. Senior
                input on the moments where the structure of the experience
                changes the structure of the business outcome.
              </p>
              <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
                I work with pharma, biotech, fintech, software, agency, and
                enterprise teams, embedded as{" "}
                <Link
                  href="/engagements#leadership"
                  className="text-link hover:text-link-hover transition-colors"
                >
                  senior leadership
                </Link>
                , on{" "}
                <Link
                  href="/engagements#advisory"
                  className="text-link hover:text-link-hover transition-colors"
                >
                  advisory engagements
                </Link>
                , or{" "}
                <Link
                  href="/engagements#oncall"
                  className="text-link hover:text-link-hover transition-colors"
                >
                  on call
                </Link>{" "}
                between the big decisions.
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

      {/* THESIS */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title mb-8 md:mb-10 max-w-3xl">
            What I believe about this work
          </h2>
          <div className="max-w-3xl space-y-6 text-lg md:text-xl text-text-secondary leading-relaxed">
            <p>
              AI adoption isn&apos;t a technology problem. It&apos;s an
              experience architecture problem. The companies that win with AI in
              regulated industries won&apos;t be the ones with the best models.
              They&apos;ll be the ones who treated the experience layer as the
              work. The architecture of how AI fits into human workflows, the
              design of the moments when the AI is wrong, the governance of the
              systems that have to scale across brands, teams, and regulatory
              contexts.
            </p>
            <p>
              That belief shapes how I work. I treat experience design as the
              discipline of making complex things clear, not the discipline of
              making things look good. The visual layer matters, but it&apos;s
              downstream. Upstream is the question of what the experience is{" "}
              <em>for</em>: what decision it helps the user make, what action
              it supports, what trust it has to earn before it asks for
              anything.
            </p>
            <p>
              In regulated environments, this isn&apos;t optional. Pharma,
              healthcare, financial services. These are industries where bad
              design has consequences. Patient confusion costs lives. Investor
              confusion costs money. Regulatory confusion costs launches. The
              teams that work with me are the ones who understand that
              designing for clarity in these contexts isn&apos;t a constraint
              on creativity. It&apos;s the discipline that makes the design
              defensible, scalable, and durable.
            </p>
          </div>
        </div>
      </section>

      {/* BACKGROUND */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title mb-8 md:mb-10 max-w-3xl">
            Background
          </h2>
          <div className="max-w-3xl space-y-6 text-lg md:text-xl text-text-secondary leading-relaxed">
            <p>
              Currently leading senior consulting work at Publicis CoLab, on
              the Pfizer portfolio. The day-to-day is strategic experience
              design across one of the most complex pharmaceutical accounts in
              the industry: multi-brand governance, regulatory-ready content
              systems, design system architecture, and AI integration in HCP
              and patient touchpoints. Available for select leadership,
              advisory, and on-call engagements outside that.
            </p>
            <p>
              Before this engagement, I led senior UX engagements across regulated
              industries: pharmaceutical, financial services, enterprise
              technology, and patient experience initiatives spanning oncology,
              cardiovascular, neurological, immunology, and rare disease.
            </p>
            <p>
              I taught at NYU: design fundamentals, Adobe Photoshop, and
              Adobe InDesign. My BFA is from Pratt Institute in Communications
              Design and Advertising/Marketing. Most recently, I completed the
              Rutgers AI Automation cohort.
            </p>
          </div>
        </div>
      </section>

      {/* RECOGNITION */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title mb-10 md:mb-14 max-w-3xl">
            Recognition
          </h2>
          <div className="space-y-8 max-w-3xl">
            <div className="border-l-2 border-border-default pl-6 md:pl-8">
              <p className="text-lg md:text-xl font-semibold text-text-primary mb-2 leading-tight">
                D&amp;AD Pencil 2022: Future Impact Initiative
              </p>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                For the{" "}
                <Link
                  href="/work/cancer-equality-app"
                  className="text-link hover:text-link-hover transition-colors"
                >
                  Cancer Equality App
                </Link>{" "}
                with The Chrysalis Initiative.{" "}
                <a
                  href="https://www.dandad.org/annual/2022/entry/professional/235946"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link hover:text-link-hover transition-colors"
                >
                  View on D&amp;AD
                </a>
              </p>
            </div>
            <div className="border-l-2 border-border-default pl-6 md:pl-8">
              <p className="text-lg md:text-xl font-semibold text-text-primary mb-2 leading-tight">
                Industry-first pharmaceutical mobile wallet integration
              </p>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                For patient medication information across iOS and Android
                (2024). QR-based, FDA-compliant, deployed across a{" "}
                <Link
                  href="/work/pharma-design-systems"
                  className="text-link hover:text-link-hover transition-colors"
                >
                  multi-brand portfolio
                </Link>
                .
              </p>
            </div>
            <div className="border-l-2 border-border-default pl-6 md:pl-8">
              <p className="text-lg md:text-xl font-semibold text-text-primary mb-2 leading-tight">
                Published thought leadership
              </p>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                On pharma UX, regulatory design, and AI integration. Including{" "}
                <a
                  href="https://www.linkedin.com/pulse/fdas-new-digital-era-why-pharmas-future-belongs-honest-capizzi-lyjne"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link hover:text-link-hover transition-colors"
                >
                  The FDA&apos;s New Digital Era
                </a>{" "}
                on LinkedIn. See{" "}
                <Link
                  href="/thinking"
                  className="text-link hover:text-link-hover transition-colors"
                >
                  more published essays and talks
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT — industry presence proof */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow mb-4">(Recent)</p>
          <h2 className="section-title mb-10 md:mb-12 max-w-3xl">
            In the work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Manny Awards */}
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
              <figcaption className="px-5 py-4 text-sm text-text-secondary border-t border-border-subtle">
                Manny Awards &middot; NYC
              </figcaption>
            </figure>

            {/* CxO Institute — with Ash Ashutosh */}
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
              <figcaption className="px-5 py-4 text-sm text-text-secondary border-t border-border-subtle">
                With Ash Ashutosh, CEO, Pinecone &middot; CxO Institute
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* CTA CARDS — book (deeper read) + engagements (how we'd work together) */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <CTACards cards={["book", "engagements"]} />
        </div>
      </section>

      {/* BEYOND THE WORK: the creative practice, briefly. Shortened in
          September 2026: the AI origin story lives on the Lab page, so it
          is one sentence here, and the old "performance planned for August
          2026" line is gone. */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title mb-8 md:mb-10 max-w-3xl">
            Beyond the work
          </h2>
          <div className="max-w-3xl space-y-6 text-lg md:text-xl text-text-secondary leading-relaxed">
            <p>
              I&apos;m also a fine-art photographer (Venice and NYC), a
              painter, and a documentary filmmaker working on a pre-9/11 NYC
              project about the 2000 Subway Series. Taylor Keer, a friend and
              now Poet Laureate of Connecticut, and I co-founded a creative
              arts and music collective at Rider University, and we still
              perform together: I create live visuals alongside his poetry and
              music, generated in real time with Midjourney and Runway since
              2022. That work asks what consulting asks: see what is actually
              there before deciding what it should be, and know when to stop.
            </p>
            <p>
              Born in Queens. Mets and Yankees fan, in that order. Competitive
              BBQ in the off-season.
            </p>
          </div>

          {/* LinkedIn post: the live performance work */}
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
              alongside poetry and music.
            </p>
          </div>
        </div>
      </section>

      {/* SHARING THE PRACTICE: what Shawn shares, and the family story,
          with the cookie video kept directly under its paragraph. */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title mb-8 md:mb-10 max-w-3xl">
            Sharing the practice
          </h2>
          <div className="max-w-3xl">
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              I share what I learn about building and experimenting with AI
              with colleagues, friends, and my daughters. At home, we turn
              questions into small projects, from math and learning apps to
              experimenting with Sora using photos of things we cook together.
              It&apos;s a way to explore ideas, learn together, and make
              something of our own.
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
              <figcaption className="px-5 py-4 text-sm text-text-secondary border-t border-border-subtle">
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
          <h2 className="section-title mb-6 md:mb-8 max-w-3xl mx-auto">
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
