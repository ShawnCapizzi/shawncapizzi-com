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
              Product design &amp; AI strategy that delivers clarity
              <span className="block mt-3 md:mt-4 text-lg md:text-xl lg:text-2xl font-normal text-text-secondary tracking-tight">
                Pharma. Fintech. Agency.
              </span>
            </h1>

            <Wordmark
              size="large"
              animate
              href={null}
              priority
              className="mt-12 md:mt-8 mx-auto -translate-x-[7px] md:-translate-x-[110px] md:translate-y-[3px] w-full max-w-[326px] lg:max-w-[435px] h-auto"
            />
          </div>

          {/* Right: Headshot — rounded corners + subtle edge dissolve into navy */}
          <div className="relative lg:col-span-5 order-1 lg:order-2">
            <div
              className="relative aspect-square max-w-[70%] sm:max-w-[60%] md:max-w-[80%] lg:max-w-[85%] mx-auto"
              style={{
                maskImage:
                  "radial-gradient(ellipse 85% 85% at 50% 50%, #000 78%, rgba(0,0,0,0.6) 92%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 85% 85% at 50% 50%, #000 78%, rgba(0,0,0,0.6) 92%, transparent 100%)",
              }}
            >
              <Image
                src="/images/brand/headshot-2026-v2.jpg"
                alt="Shawn Capizzi"
                fill
                priority
                sizes="(max-width: 640px) 70vw, (max-width: 1024px) 60vw, 36vw"
                className="object-cover object-center rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
