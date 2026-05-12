import Image from "next/image";
import { HeroBackdrop } from "./HeroBackdrop";

/**
 * Hero — homepage hero.
 *
 * Contains: wordmark + headline (left), headshot (right).
 * The sub-headline and CTAs live in HeroBottom, which renders AFTER
 * LogoStrip on the homepage. This produces the mobile reading order:
 *
 *   image → wordmark → headline → logos → sub-headline → CTAs
 *
 * (Image appears first on mobile via order-1 / desktop right via lg:order-2.)
 *
 * Padding tuned between "aggressive compression" and "original spacious"
 * so the headline + image + logos fit above the fold on typical viewports
 * without feeling cramped.
 */

export function Hero() {
  return (
    <section className="relative pt-16 md:pt-24 lg:pt-28 pb-8 md:pb-10 overflow-hidden">
      <div className="relative max-w-wide mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Headline + wordmark (wordmark acts as signature below headline) */}
          <div className="relative z-10 lg:col-span-7 order-2 lg:order-1">
            <h1 className="headline-gleam text-2xl md:text-3xl lg:text-3xl font-bold tracking-tight leading-[1.15] max-w-[90%]">
              For agency and pharma teams: senior depth across stakeholders, deadlines, decisions.
            </h1>

            <Image
              src="/images/brand/wordmark.svg"
              alt="Capizzi"
              width={690}
              height={240}
              priority
              className="mt-6 md:mt-8 w-full max-w-sm lg:max-w-lg h-auto"
            />
          </div>

          {/* Right: Square headshot — clean face-forward composition */}
          <div className="relative lg:col-span-5 order-1 lg:order-2">
            <div className="relative aspect-square max-w-[55%] md:max-w-[65%] mx-auto">
              <HeroBackdrop />
              <div className="relative z-10 h-full">
                <Image
                  src="/images/brand/headshot-2026.png"
                  alt="Shawn Capizzi"
                  fill
                  priority
                  sizes="(max-width: 1024px) 55vw, 28vw"
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
