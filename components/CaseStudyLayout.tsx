import Image from "next/image";
import Link from "next/link";

const CAL_URL = "https://cal.com/capizzi/15min";

interface MetadataItem {
  label: string;
  value: string;
}

interface CaseStudyImage {
  src: string;
  alt: string;
}

interface Outcome {
  headline: string;
  description: string;
}

interface RelatedCaseStudy {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}

interface CaseStudyLayoutProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroImageAlt: string;
  metadata: MetadataItem[];
  challenge: string[];
  approach: string[];
  pullQuote?: string;
  midImages?: CaseStudyImage[];
  outcomes: Outcome[];
  bottomImages?: CaseStudyImage[];
  closer: string[];
  ctaHeadline: string;
  related?: RelatedCaseStudy[];
}

function isAnimated(src: string): boolean {
  return src.endsWith(".gif");
}

export function CaseStudyLayout(props: CaseStudyLayoutProps) {
  return (
    <article>
      {/* ============================================================
          HERO
          Eyebrow + title + subtitle + hero image + metadata block
          ============================================================ */}
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <Link
            href="/work"
            className="inline-flex items-center text-sm font-medium text-text-tertiary hover:text-text-primary transition-colors mb-10 md:mb-12"
          >
            <span aria-hidden="true" className="mr-2">←</span> All work
          </Link>

          <p className="eyebrow mb-6">{props.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] max-w-4xl">
            {props.title}
          </h1>
          <p className="mt-6 md:mt-8 text-xl md:text-2xl text-text-secondary leading-relaxed max-w-3xl">
            {props.subtitle}
          </p>

          {/* Hero image */}
          <div className="mt-12 md:mt-16 relative aspect-[16/9] rounded-2xl overflow-hidden border border-border-default">
            <Image
              src={props.heroImage}
              alt={props.heroImageAlt}
              fill
              priority
              unoptimized={isAnimated(props.heroImage)}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1100px"
            />
          </div>

          {/* Metadata block */}
          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 border-t border-border-subtle pt-10">
            {props.metadata.map((item) => (
              <div key={item.label}>
                <p className="metadata-label mb-2">({item.label})</p>
                <p className="metadata-value">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          THE CHALLENGE
          ============================================================ */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8 md:mb-10">
            The challenge
          </h2>
          <div className="max-w-3xl space-y-6 text-lg text-text-secondary leading-relaxed">
            {props.challenge.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          THE APPROACH + optional pull quote + mid images
          ============================================================ */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8 md:mb-10">
            The approach
          </h2>
          <div className="max-w-3xl space-y-6 text-lg text-text-secondary leading-relaxed">
            {props.approach.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {props.pullQuote && (
            <blockquote className="mt-14 md:mt-20 max-w-3xl border-l-2 border-brand-purple pl-6 md:pl-10 py-2">
              <p className="text-xl md:text-2xl text-text-primary leading-relaxed italic">
                &ldquo;{props.pullQuote}&rdquo;
              </p>
            </blockquote>
          )}

          {props.midImages && props.midImages.length > 0 && (
            <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {props.midImages.map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border-default"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    unoptimized={isAnimated(img.src)}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ============================================================
          SELECTED OUTCOMES + optional bottom images
          ============================================================ */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10 md:mb-14">
            Selected outcomes
          </h2>
          <div className="space-y-8 md:space-y-10 max-w-3xl">
            {props.outcomes.map((outcome, i) => (
              <div
                key={i}
                className="border-l-2 border-border-default pl-6 md:pl-8"
              >
                <p className="text-lg md:text-xl font-semibold text-text-primary mb-2 leading-tight">
                  {outcome.headline}
                </p>
                <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>

          {props.bottomImages && props.bottomImages.length > 0 && (
            <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {props.bottomImages.map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border-default"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    unoptimized={isAnimated(img.src)}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ============================================================
          WHAT THIS MEANS (closer)
          ============================================================ */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8 md:mb-10">
            What this means
          </h2>
          <div className="max-w-3xl space-y-6 text-lg md:text-xl text-text-primary leading-relaxed">
            {props.closer.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA BLOCK
          ============================================================ */}
      <section className="py-24 md:py-32 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-10 md:mb-12 max-w-3xl mx-auto leading-tight">
            {props.ctaHeadline}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-center">
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
              className="inline-flex items-center justify-center text-base font-medium text-link hover:text-link-hover transition-colors"
            >
              See other engagements{" "}
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          RELATED WORK
          ============================================================ */}
      {props.related && props.related.length > 0 && (
        <section className="py-16 md:py-24 border-t border-border-subtle">
          <div className="max-w-wide mx-auto px-6 md:px-8 lg:px-12">
            <p className="eyebrow mb-4">Related work</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-12 md:mb-14">
              Continue reading
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {props.related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/work/${rel.slug}`}
                  className="group relative block rounded-2xl card-surface border border-border-default hover:border-border-strong overflow-hidden transition-colors"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={rel.image}
                      alt=""
                      fill
                      className="object-cover"
                      unoptimized={isAnimated(rel.image)}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-7 md:p-8">
                    <p className="eyebrow mb-3">{rel.eyebrow}</p>
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-text-primary group-hover:text-link transition-colors leading-tight">
                      {rel.title}
                    </h3>
                    <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                      {rel.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
