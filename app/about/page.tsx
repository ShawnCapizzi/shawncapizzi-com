// Destination: app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CTACards } from "@/components/CTACards";

export const metadata: Metadata = {
  title: "About",
  description:
    "Shawn Capizzi is a strategic experience design leader with 15+ years working at the intersection of UX, CX, product, and regulated digital systems.",
};

const CAL_URL = "https://cal.com/capizzi/30min";

export default function Page() {
  return (
    <article>
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[0.95] text-balance">
              I help regulated teams make clearer decisions across content, experience design, and product.
            </h1>
          </div>

          {/* Body copy + portrait, side-by-side on desktop; stacks on mobile.
              On desktop (lg+), the grid stretches both columns to equal
              height, and the photo fills its column via h-full — so the
              photo always matches the copy block height. On mobile the
              layout stacks and the photo reverts to a fixed 4:5 ratio. */}
          <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 lg:items-stretch">
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
                enterprise teams &mdash; embedded as{" "}
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

            <div className="lg:col-span-5 order-1 lg:order-2 flex">
              <div
                className="relative rounded-2xl overflow-hidden border border-border-default shadow-xl bg-black capizzi-rim-card w-full aspect-[16/10]"
                style={{ maxWidth: "min(100%, 378px)" }}
              >
                <Image
                  src="/images/brand/shawn_m_capizzi_2026.png"
                  alt="Shawn Capizzi"
                  fill
                  priority
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 80vw, 378px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THESIS */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8 md:mb-10 max-w-3xl">
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
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8 md:mb-10 max-w-3xl">
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
              Design and Advertising/Marketing.
            </p>
          </div>
        </div>
      </section>

      {/* RECOGNITION */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10 md:mb-14 max-w-3xl">
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
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10 md:mb-12 max-w-3xl">
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

      {/* BEYOND THE WORK */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8 md:mb-10 max-w-3xl">
            Beyond the work
          </h2>
          <div className="max-w-3xl space-y-6 text-lg md:text-xl text-text-secondary leading-relaxed">
            <p>
              Outside the consulting practice, I&apos;m a fine-art photographer
              (Venice and NYC), painter, and documentary filmmaker working on a
              pre-9/11 NYC project about the 2000 Subway Series. Born in
              Queens. Father of daughters. Mets and Yankees fan, in that order.
              Competitive BBQ enthusiast in the off-season.
            </p>
            <p>
              Taylor Keer, a friend and now Poet Laureate of Connecticut, and
              I co-founded a creative arts and music collective at Rider
              University 10+ years ago. We still get together annually for
              live performances. I create live visual art alongside his
              poetry and music. In 2022 I started generating those visuals
              with Midjourney and Runway in real time, tied to lyrics and
              music, projected through two or three projectors. Live
              performance is an unforgiving classroom for AI tooling.
              Everything I now know about how AI fits into design work
              started there. Another AI-assisted performance is planned for
              August 2026.
            </p>
            <p>
              The fine-art and documentary work informs the consulting practice
              more than it might seem. Both require seeing what&apos;s actually
              there before deciding what it should be. Both require knowing
              when to stop. Both require trust in the work to do its job after
              you walk away.
            </p>
          </div>

          {/* LinkedIn post — live performance / creative practice */}
          <div className="mt-14 md:mt-16 max-w-3xl">
            <p className="metadata-label mb-4">From LinkedIn</p>
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
              A look at the live performance work, visuals generated in real
              time alongside poetry and music.
            </p>
          </div>
        </div>
      </section>

      {/* SHARING THE PRACTICE — AI as a creative practice, ending on family */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8 md:mb-10 max-w-3xl">
            Sharing the practice
          </h2>
          <div className="max-w-3xl space-y-6 text-lg md:text-xl text-text-secondary leading-relaxed">
            <p>
              AI isn&apos;t something I clock in and out of. It&apos;s a daily
              creative practice that runs across the live performance work,
              the consulting, and pretty much everything I make for the people
              in my life.{" "}
              <a
                href="/work/ai-native-product-design-lab"
                className="underline decoration-text-tertiary hover:decoration-text-primary underline-offset-2 transition-colors"
              >
                The Lab on the work page
              </a>
              {" "}is just the most visible part of it.
            </p>
            <p>
              I share what I learn as I learn it &mdash; with co-workers,
              friends, and anyone curious enough to ask. Custom GPTs I&apos;ve
              built, prompts I&apos;ve refined, tools I&apos;ve shipped to the
              Figma Community. The goal isn&apos;t to teach AI. It&apos;s to
              get more people excited about what they can make with it.
            </p>
            <p>
              And the people I push it on hardest are my daughters. We&apos;ve
              made Sora videos together that started as &ldquo;what would it
              look like if&hellip;&rdquo; conversations at the dinner table.
              I&apos;ve also built small math and learning apps for them &mdash;
              free, no sign-up, no tracking. Same instinct as everything else:
              the right tool, in the right moment, for the actual person who
              needs it.
            </p>
          </div>

          {/* Kids' learning apps — pill buttons matching Lab page CTAs */}
          <div className="mt-8 md:mt-10 max-w-3xl flex flex-wrap gap-3">
            <a
              href="/apps/fractions-quiz.html"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-bg-raised border border-border-default text-text-primary text-sm md:text-base font-medium hover:bg-bg-hover transition-colors"
            >
              Try the Fractions Quiz
              <span aria-hidden="true">&rarr;</span>
            </a>
            <a
              href="/apps/area-perimeter-quiz.html"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-bg-raised border border-border-default text-text-primary text-sm md:text-base font-medium hover:bg-bg-hover transition-colors"
            >
              Try the Area &amp; Perimeter Quiz
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          {/* Sora video — playful close */}
          <div className="mt-14 md:mt-16 max-w-3xl">
            <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-4">
              My daughters and I cook all the time. Sometimes we take photos
              of our creations and turn them into AI videos to bring new
              context to them &mdash; and help the girls have fun
              experimenting with AI.
            </p>
            <figure className="rounded-2xl overflow-hidden border border-border-default bg-bg-raised">
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
                Generated in Sora. The kind of thing that starts as a question
                at the dinner table.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 md:mb-8 max-w-3xl mx-auto leading-tight">
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
    </article>
  );
}
