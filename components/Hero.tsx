import Image from "next/image";
import Link from "next/link";

/**
 * Hero: homepage hero.
 *
 * Contains: headline + lead + wordmark (signature) + headshot.
 *
 * Copy rewritten November 11, 2026 (Shawn's words): the headline is two
 * sentences, one per line, each its own block so the break holds at every
 * width; the lead says what Shawn turns into what, and the healthcare and
 * pharma roots. Then two asks (contact, work). Discipline keywords live
 * further down the page and in the metadata, not here. The three doors live in HeroBottom, which renders
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
 * November 2026: the wordmark that sat under the lead is gone (the header
 * carries it), so the hero ends at the two asks.
 */

export function Hero() {
  return (
    <section className="relative pt-24 md:pt-28 lg:pt-32 pb-10 md:pb-10 overflow-hidden">
      <div className="relative max-w-content mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 items-center">
          {/* Left: Headline + lead + wordmark (signature). Below lg this
              wrapper is display: contents; see the note above. */}
          <div className="contents lg:block relative z-10 lg:col-span-7 lg:order-1">
            <p className="eyebrow hero-eyebrow order-0">UX &amp; Product Design Leadership</p>
            <h1 className="headline-gleam hero-title text-balance max-w-full lg:max-w-[90%] order-1">
              <span className="block">Help people understand what matters.</span>{" "}
              <span className="block">And take their next step with confidence.</span>
            </h1>
            <p className="hero-lead text-pretty max-w-full lg:max-w-[90%] order-3">
              I turn complex offerings, information, and workflows into clear marketing and useful digital experiences. With deep roots in healthcare and pharma, I connect the needs of your customers and users with what your business needs to achieve.
            </p>
            {/* The two asks (November 2026): the primary goes to /contact,
                the site's one ask; the secondary goes to the proof. */}
            <div className="order-3 mt-7 md:mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#6B5CFF] text-white text-base font-medium tracking-tight hover:scale-[1.02] transition-all"
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

            {/* The wordmark that sat here moved out in November 2026: the
                header already carries it, and the hero reads shorter. */}
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
