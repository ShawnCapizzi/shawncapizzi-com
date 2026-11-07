import Image from "next/image";
import Link from "next/link";
import { Wordmark } from "./Wordmark";

/**
 * Hero: homepage hero.
 *
 * Contains: headline + lead + wordmark (signature) + headshot.
 *
 * Copy rewritten November 2026: the headline is the promise (usable for
 * people, deliverable for teams), the lead carries the positioning line and
 * the pharma and healthcare depth, then two asks (contact, work) and the
 * credential line. Discipline keywords live further down the page and in
 * the metadata, not here. The three doors live in HeroBottom, which renders
 * AFTER LogoStrip on the homepage.
 *
 * Desktop (lg and up): two columns, text left, headshot right.
 * Stacked (below lg, phones and portrait tablets): the headline leads, then
 * the headshot, then the lead and the wordmark (September 2026). The text
 * column is display: contents below lg, so its four children join the grid
 * directly and the order-* classes interleave the photo after the H1. There
 * is still exactly one H1; nothing is duplicated for mobile.
 *   headline, image, lead, wordmark, logos, three doors
 *
 * No backdrop or gradient frame around the image; the rounded photo
 * floats clean on the dark page. Top padding generous on mobile so
 * the image has breathing room from the transparent header bar.
 *
 * The wordmark plays a 36° diagonal clip-path reveal with fade-in
 * on first mount of the session (handled inside the Wordmark component).
 */

export function Hero() {
  return (
    <section className="relative pt-24 md:pt-28 lg:pt-32 pb-4 md:pb-10 overflow-hidden">
      <div className="relative max-w-content mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 items-center">
          {/* Left: Headline + lead + wordmark (signature). Below lg this
              wrapper is display: contents; see the note above. */}
          <div className="contents lg:block relative z-10 lg:col-span-7 lg:order-1">
            <p className="eyebrow hero-eyebrow mb-3 order-0">UX &amp; Product Design Leadership</p>
            <h1 className="headline-gleam hero-title text-balance max-w-full lg:max-w-[90%] order-1">
              I turn complex business challenges into digital experiences people can use, and teams can deliver.
            </h1>
            <p className="hero-lead text-pretty max-w-full lg:max-w-[90%] order-3">
              I help teams get clear on direction, sharpen the thinking, and move the work forward. With deep experience in pharma and healthcare, I lead across strategy, content, design, and delivery to connect business goals with what customers actually need.
            </p>
            {/* The two asks (November 2026): the primary goes to /contact,
                the site's one ask; the secondary goes to the proof. The
                credential line sits under them, shown once here and not
                repeated in the lead. */}
            <div className="order-3 mt-7 md:mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#6B5CFF] hover:bg-[#7B6CFF] text-white text-base font-medium tracking-tight hover:scale-[1.02] transition-all"
              >
                Tell me what you&apos;re working on
                <span aria-hidden="true" className="ml-2">&rarr;</span>
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center text-base font-medium text-link hover:text-link-hover transition-colors"
              >
                Explore the work
                <span aria-hidden="true" className="ml-2">&rarr;</span>
              </Link>
            </div>
            <p className="order-3 mt-6 md:mt-7 font-mono text-xs md:text-sm tracking-tight text-text-tertiary">
              15+ years across pharma, healthcare, financial services, and enterprise.
            </p>

            <Wordmark
              size="large"
              animate
              href={null}
              priority
              className="order-4 mt-6 md:mt-5 mx-auto -translate-x-[7px] md:-translate-x-[110px] md:translate-y-[3px] w-full max-w-[200px] sm:max-w-[220px] lg:max-w-[240px] h-auto"
            />
          </div>

          {/* Right: headshot, knockout subject on navy plus brand glow, soft edge dissolve */}
          <div className="relative lg:col-span-5 order-2 lg:order-2 mt-6 mb-3 lg:my-0">
            <div
              className="relative aspect-square max-w-[82%] sm:max-w-[72%] md:max-w-[80%] lg:max-w-[100%] mx-auto"
              style={{
                maskImage:
                  "radial-gradient(ellipse 95% 95% at 50% 45%, #000 82%, rgba(0,0,0,0.5) 95%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 95% 95% at 50% 45%, #000 82%, rgba(0,0,0,0.5) 95%, transparent 100%)",
              }}
            >
              <Image
                src="/images/brand/headshot-2026-knockout.jpg"
                alt="Shawn Capizzi"
                fill
                priority
                sizes="(max-width: 640px) 70vw, (max-width: 1024px) 60vw, 36vw"
                className="object-cover object-center rounded-3xl"
                style={{ transform: "scale(0.8)", transformOrigin: "center" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
