import Image from "next/image";
import Link from "next/link";
import { HeroBackdrop } from "./HeroBackdrop";

const CAL_URL = "https://cal.com/capizzi/15min";

export function Hero() {
  return (
    <section className="relative pt-28 md:pt-36 lg:pt-40 pb-20 md:pb-32 overflow-hidden">
      <div className="relative max-w-wide mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Wordmark + headline + CTAs */}
          <div className="relative z-10 lg:col-span-7 order-2 lg:order-1">
            <Image
              src="/images/brand/wordmark.svg"
              alt="Capizzi"
              width={690}
              height={240}
              priority
              className="w-full max-w-xl lg:max-w-2xl h-auto"
            />

            <h1 className="mt-8 md:mt-10 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] max-w-2xl">
              For agency and pharma teams that need senior depth across stakeholders, deadlines, and decisions.
            </h1>

            <p className="mt-6 md:mt-8 text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl">
              I help cross-functional teams turn diverse opinions into top-tier, user-first, shippable work.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
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

          {/* Right: Portrait with radial gradient backdrop */}
          <div className="relative lg:col-span-5 order-1 lg:order-2">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              <HeroBackdrop />
              <div className="relative z-10 h-full">
                <Image
                  src="/images/brand/headshot-2026.png"
                  alt="Shawn Capizzi"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 40vw"
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
