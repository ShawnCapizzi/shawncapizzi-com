import Image from "next/image";
import { Wordmark } from "./Wordmark";

/**
 * Hero — homepage hero.
 *
 * Contains: headline (top) + wordmark (signature below) + headshot (right on desktop, top on mobile).
 *
 * The sub-headline and CTAs live in HeroBottom, which renders AFTER
 * LogoStrip on the homepage. Producing the mobile reading order:
 *   image → headline → wordmark → logos → sub-headline → CTAs
 *
 * No backdrop / gradient frame around the image — the rounded photo
 * floats clean on the dark page. Top padding generous on mobile so
 * the image has breathing room from the transparent header bar.
 *
 * The wordmark plays a 36° diagonal clip-path reveal with fade-in
 * on first mount of the session (handled inside the Wordmark component).
 */

export function Hero() {
  return (
    <section className="relative pt-24 md:pt-28 lg:pt-32 pb-4 md:pb-10 overflow-hidden">
      <div className="relative max-w-wide mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Headline + wordmark (signature) */}
          <div className="relative z-10 lg:col-span-7 order-2 lg:order-1">
            <h1 className="headline-gleam text-2xl md:text-3xl lg:text-3xl font-bold tracking-tight leading-[1.15] max-w-[90%]">
              For agency and pharma teams: senior depth across stakeholders, deadlines, decisions.
            </h1>

            <Wordmark
              size="large"
              animate
              href={null}
              priority
              className="mt-12 md:mt-8 w-full max-w-[326px] lg:max-w-[435px] h-auto"
            />
          </div>

          {/* Right: Headshot — clean rounded square, no backdrop */}
          <div className="relative lg:col-span-5 order-1 lg:order-2">
            <div className="relative aspect-square max-w-[55%] md:max-w-[65%] mx-auto">
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
    </section>
  );
}
