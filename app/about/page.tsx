import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { LiteYouTube } from "@/components/LiteYouTube";

export const metadata: Metadata = {
  title: "About",
  description:
    "Shawn Capizzi is a strategic experience design leader with 15+ years working at the intersection of UX, CX, product, and regulated digital systems.",
};

const CAL_URL = "https://cal.com/capizzi/15min";

export default function Page() {
  return (
    <article>
      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow mb-6">About</p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                I help leadership teams make clear decisions in complex digital
                environments.
              </h1>
              <p className="mt-8 md:mt-10 text-lg md:text-xl text-text-secondary leading-relaxed">
                I&apos;m a strategic experience design leader with 15+ years
                working at the intersection of UX, CX, product, and regulated
                digital systems. The work I do best is the work that&apos;s
                hard to staff full-time but too important to skip — senior
                input on the moments where the structure of the experience
                changes the structure of the business outcome.
              </p>
              <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
                Currently leading UX strategy at Razorfish (Publicis) on Pfizer
                brands. I work with biotech, fintech, software, agency, and
                enterprise teams to bring senior depth across stakeholders,
                deadlines, and decisions.
              </p>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative aspect-[4/5] max-w-[80%] mx-auto rounded-2xl overflow-hidden border border-border-default">
                <Image
                  src="/images/brand/headshot-2026.png"
                  alt="Shawn Capizzi"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 65vw, 32vw"
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
              work — the architecture of how AI fits into human workflows, the
              design of the moments when the AI is wrong, the governance of the
              systems that have to scale across brands, teams, and regulatory
              contexts.
            </p>
            <p>
              That belief shapes how I work. I treat experience design as the
              discipline of making complex things clear, not the discipline of
              making things look good. The visual layer matters, but it&apos;s
              downstream. Upstream is the question of what the experience is{" "}
              <em>for</em> — what decision it helps the user make, what action
              it supports, what trust it has to earn before it asks for
              anything.
            </p>
            <p>
              In regulated environments, this isn&apos;t optional. Pharma,
              healthcare, financial services — these are industries where bad
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
              I&apos;m currently Director of UX Strategy at Razorfish
              (Publicis), leading experience design on Pfizer brands. The
              day-to-day work is strategic experience design across one of the
              most complex pharmaceutical portfolios in the industry —
              multi-brand governance, regulatory-ready content systems, design
              system architecture, and AI integration in HCP and patient
              touchpoints.
            </p>
            <p>
              Before Razorfish, I led senior UX engagements across regulated
              industries — pharmaceutical, financial services, enterprise
              technology, and patient experience initiatives spanning oncology,
              cardiovascular, neurological, immunology, and rare disease.
            </p>
            <p>
              I&apos;ve led teams of 3–8 full-time and freelance designers
              across multi-brand work. The thread across two decades: making
              complex digital systems clear enough for the people who use them.
              The constraint isn&apos;t usually the technology. It&apos;s the
              architecture of decisions, content, and trust that wraps around
              it.
            </p>
            <p>
              I taught at NYSCPS — design fundamentals, Adobe Photoshop, and
              Adobe InDesign. My BFA is from Pratt Institute in Communications
              Design and Advertising/Marketing.
            </p>
          </div>

          {/* AI tool demo — the UXR AI tool I built in Dec 2024 */}
          <div className="mt-14 md:mt-16 max-w-3xl">
            <p className="metadata-label mb-4">A working demo</p>
            <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-3">
              UXR AI tool built in ChatGPT, Dec 2024
            </h3>
            <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-6">
              The clearest way to explain how I think about AI integration is
              to show one of the tools I&apos;ve built.
            </p>
            <LiteYouTube
              videoId="bRmymrOs_iA"
              title="UXR AI tool demo — December 2024"
              aspect="9:16"
            />
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
                D&amp;AD Pencil 2022 — Future Impact Initiative
              </p>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                Cancer Equality App · The Chrysalis Initiative.{" "}
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
                (2024). QR-based, FDA-compliant, deployed across a multi-brand
                portfolio.
              </p>
            </div>
            <div className="border-l-2 border-border-default pl-6 md:pl-8">
              <p className="text-lg md:text-xl font-semibold text-text-primary mb-2 leading-tight">
                Published thought leadership
              </p>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                On pharma UX, regulatory design, and AI integration. Including{" "}
                <a
                  href="https://www.eversanaintouch.com/blog/healthcare-marketing/covid-19-and-its-impact-on-healthcare-website-design/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link hover:text-link-hover transition-colors"
                >
                  COVID-19 and Its Impact on Healthcare Website Design
                </a>{" "}
                in EVERSANA INTOUCH.
              </p>
            </div>
            <div className="border-l-2 border-border-default pl-6 md:pl-8">
              <p className="text-lg md:text-xl font-semibold text-text-primary mb-2 leading-tight">
                Teaching at NYSCPS
              </p>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                Design fundamentals, Adobe Photoshop, Adobe InDesign.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE BOOK */}
      <section
        className="py-24 md:py-32 mt-16 md:mt-24"
        style={{
          background:
            "radial-gradient(ellipse 1400px 900px at 75% 10%, #7867FF 0%, #6B5CFF 35%, #5A4DE8 100%)",
        }}
      >
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p
            className="eyebrow mb-4"
            style={{ color: "rgba(255, 255, 255, 0.7)" }}
          >
            Forthcoming
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight mb-6">
            Clarity Is the Advantage
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl leading-relaxed">
            Honest Design and Strategy for the Way We Work Now.
          </p>
          <p className="text-base md:text-lg text-white/80 mb-10 max-w-3xl leading-relaxed">
            Honest, no-fluff thinking on AI, design, and strategy for 2026 and
            beyond. Currently in edit. First chapter coming soon.
          </p>
          <Link
            href="/clarity-advantage"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-bg-primary text-base font-medium tracking-tight hover:scale-[1.02] transition-transform"
          >
            Notify me when the first chapter publishes
          </Link>
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
              live performances — I create live visual art alongside his
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
              style={{ maxWidth: "504px", margin: "0 auto" }}
            >
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7091549601580621824?collapsed=1"
                height="550"
                width="100%"
                frameBorder="0"
                allowFullScreen
                title="LinkedIn post — live performance with AI-generated visuals"
                loading="lazy"
                style={{ display: "block", borderRadius: "12px" }}
              />
            </div>
            <p
              className="mt-4 text-sm text-text-tertiary italic text-center"
              style={{ maxWidth: "504px", margin: "1rem auto 0" }}
            >
              A look at the live performance work — visuals generated in real
              time alongside poetry and music.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 md:mb-8 max-w-3xl mx-auto leading-tight">
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
