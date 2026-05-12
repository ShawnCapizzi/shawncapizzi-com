import Image from "next/image";
import Link from "next/link";
import { HeroBackdrop } from "./HeroBackdrop";

/**
 * Hero — homepage hero, compressed for above-the-fold visibility
 * of headline + image + logo strip on both desktop and mobile.
 *
 * Compression vs prior version:
 *   - Section padding: pt-28→pt-12 / lg:pt-40→lg:pt-20 (~80px saved)
 *   - Bottom padding: pb-20→pb-8 / md:pb-32→md:pb-12 (~80px saved)
 *   - Wordmark: max-w-xl→max-w-xs / lg:max-w-2xl→lg:max-w-md (~30% shrink)
 *   - Headline: text-3xl/3xl/4xl → text-2xl/2xl/3xl (20% smaller)
 *   - Sub-headline: text-lg/xl → text-base/lg
 *   - Inter-element spacing tightened (mt-8/10 → mt-4/5, etc.)
 *   - Headshot: aspect-[4/5] portrait → aspect-[19/13] landscape
 *     using a re-cropped headshot file (380x260) that removes
 *     headroom from the top and torso from the bottom.
 *
 * Goal: on a typical viewport (mobile 390x844, desktop 1280x800),
 * the user sees wordmark + headline + headshot + first row of the
 * LogoStrip without scrolling.
 */

const CAL_URL = "https://cal.com/capizzi/15min";

export function Hero() {
  return (
    <section className="relative pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-12 overflow-hidden">
      <div className="relative max-w-wide mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Left: Wordmark + headline + CTAs */}
          <div className="relative z-10 lg:col-span-7 order-2 lg:order-1">
            <Image
              src="/images/brand/wordmark.svg"
              alt="Capizzi"
              width={690}
              height={240}
              priority
              className="w-full max-w-xs lg:max-w-md h-auto"
            />

            <h1 className="headline-gleam mt-4 md:mt-5 text-2xl md:text-2xl lg:text-3xl font-bold tracking-tight leading-[1.15] max-w-[90%]">
              For agency and pharma teams: senior depth across stakeholders, deadlines, decisions.
            </h1>

            <p className="mt-3 md:mt-4 text-base md:text-lg text-text-secondary leading-relaxed max-w-xl">
              I help cross-functional teams turn diverse opinions into top-tier, user-first, shippable work.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:items-center">
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-text-primary text-text-inverse text-base font-medium tracking-tight hover:scale-[1.02] transition-transform"
              >
                Book a Strategy Call
              </a>
              <Link
                href="/engagements"
                className="inline-flex items-center text-base font-medium text-link hover:text-link-hover transition-colors"
              >
                See how I work <span aria-hidden="true" className="ml-2">→</span>
              </Link>
            </div>
          </div>

          {/* Right: Portrait — landscape crop for less vertical space */}
          <div className="relative lg:col-span-5 order-1 lg:order-2">
            <div className="relative aspect-[19/13] max-w-[60%] md:max-w-[70%] mx-auto">
              <HeroBackdrop />
              <div className="relative z-10 h-full">
                <Image
                  src="/images/brand/headshot-2026.png"
                  alt="Shawn Capizzi"
                  fill
                  priority
                  sizes="(max-width: 1024px) 60vw, 28vw"
                  className="object-cover object-center rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
