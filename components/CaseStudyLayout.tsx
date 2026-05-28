import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { BrowserFrame } from "@/components/BrowserFrame";
import { VideoWithPlayOverlay } from "@/components/VideoWithPlayOverlay";

const CAL_URL = "https://cal.com/capizzi/15min";

interface MetadataItem {
  label: string;
  value: string;
}

interface CaseStudyImage {
  src: string;
  alt: string;
  /** Optional poster image, used only when src is a video (.mp4/.webm). */
  poster?: string;
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

interface ProjectShowcase {
  eyebrow: string;
  title: string;
  description: string[];
  images?: {
    src: string;
    alt: string;
    /** When set, wraps this image in a BrowserFrame with the given URL bar label. */
    browserFrame?: { url: string };
  }[];
  /** Optional call-to-action links (e.g. "Try it" buttons for live apps). External links open in new tab. */
  links?: { label: string; href: string }[];
  /** Optional custom JSX rendered after the images block (e.g. a TiltedPhonePair). */
  customContent?: ReactNode;
}

interface CaseStudyLayoutProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroImageAlt: string;
  /** Optional. When provided, the hero renders this video (with an always-visible
   *  play affordance) in place of heroImage, in the same 16:9 hero container.
   *  heroImage is still used as the video's poster/fallback. */
  heroVideo?: { src: string; poster?: string; ariaLabel: string };
  metadata: MetadataItem[];
  challenge: string[];
  approach: string[];
  pullQuote?: string | string[];
  midImages?: CaseStudyImage[];
  /** Optional carousel slot rendered between the approach section and outcomes. */
  processCarousel?: ReactNode;
  /** Optional per-project showcases (eyebrow + title + description + images per project). Rendered after approach. */
  projectShowcases?: ProjectShowcase[];
  outcomes: Outcome[];
  bottomImages?: CaseStudyImage[];
  /** Optional full-width hero image rendered just before the closer section. */
  closerHero?: { src: string; alt: string };
  closer: string[];
  ctaHeadline: string;
  related?: RelatedCaseStudy[];
}

function isAnimated(src: string): boolean {
  return src.endsWith(".gif");
}

function isVideo(src: string): boolean {
  return src.endsWith(".mp4") || src.endsWith(".webm");
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05] max-w-4xl">
            {props.title}
          </h1>
          <p className="mt-6 md:mt-8 text-xl md:text-2xl text-text-secondary leading-relaxed max-w-3xl">
            {props.subtitle}
          </p>

          {/* Hero — video if provided, otherwise image. Same 16:9 container either way. */}
          <div className="mt-12 md:mt-16 relative aspect-[16/9] rounded-2xl overflow-hidden border border-border-default">
            {props.heroVideo ? (
              <VideoWithPlayOverlay
                src={props.heroVideo.src}
                poster={props.heroVideo.poster ?? props.heroImage}
                ariaLabel={props.heroVideo.ariaLabel}
                wrapperClassName="absolute inset-0 w-full h-full"
                videoClassName="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <Image
                src={props.heroImage}
                alt={props.heroImageAlt}
                fill
                priority
                unoptimized={isAnimated(props.heroImage)}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1100px"
              />
            )}
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
          THE APPROACH + optional pull quote (section epigraph)
          ============================================================ */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          {props.pullQuote && (
            <blockquote className="mb-12 md:mb-16 max-w-3xl border-l-2 border-brand-purple pl-6 md:pl-10 py-2">
              {(Array.isArray(props.pullQuote)
                ? props.pullQuote
                : [props.pullQuote]
              ).map((line, i, arr) => (
                <p
                  key={i}
                  className={`text-xl md:text-2xl text-text-primary leading-relaxed italic${
                    i > 0 ? " mt-4 md:mt-5" : ""
                  }`}
                >
                  {i === 0 && "\u201C"}
                  {line}
                  {i === arr.length - 1 && "\u201D"}
                </p>
              ))}
            </blockquote>
          )}

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8 md:mb-10">
            The approach
          </h2>
          <div className="max-w-3xl space-y-6 text-lg text-text-secondary leading-relaxed">
            {props.approach.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          PROCESS CAROUSEL (optional)
          Renders here between the approach block and outcomes.
          The component supplies its own borders, padding, and section
          wrapper, so we simply slot it in.
          ============================================================ */}
      {props.processCarousel}

      {/* ============================================================
          MID IMAGES / VIDEO (optional)
          Renders prominently between the approach and the project
          showcases. Supports .mp4/.webm video (auto-plays muted, loops)
          via the same isVideo() detection used by bottomImages.
          Single item renders full-width 16:9; two items render 2-up.
          ============================================================ */}
      {props.midImages && props.midImages.length > 0 && (
        <section className="border-t border-border-subtle">
          <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24">
            <div
              className={`grid gap-6 md:gap-8 ${
                props.midImages.length === 1
                  ? "grid-cols-1"
                  : "grid-cols-1 md:grid-cols-2"
              }`}
            >
              {props.midImages.map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border-default"
                >
                  {isVideo(img.src) ? (
                    <video
                      src={img.src}
                      poster={img.poster}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      aria-label={img.alt}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      unoptimized={isAnimated(img.src)}
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1100px"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          PROJECT SHOWCASES (optional)
          Each project: eyebrow, title, description paragraphs, optional images.
          Rendered after processCarousel, before Selected outcomes.
          ============================================================ */}
      {props.projectShowcases && props.projectShowcases.length > 0 && (
        <section className="border-t border-border-subtle">
          <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24 space-y-20 md:space-y-28">
            {props.projectShowcases.map((project, i) => (
              <article
                key={i}
                className="border-b border-border-subtle last:border-b-0 pb-20 md:pb-28 last:pb-0"
              >
                <div className="max-w-3xl">
                  <p className="eyebrow mb-4">{project.eyebrow}</p>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-6 md:mb-8">
                    {project.title}
                  </h3>
                  <div className="space-y-5 text-lg text-text-secondary leading-relaxed">
                    {project.description.map((para, p) => (
                      <p key={p}>{para}</p>
                    ))}
                  </div>

                  {project.links && project.links.length > 0 && (
                    <div className="mt-7 md:mt-8 flex flex-wrap gap-3">
                      {project.links.map((link, li) => (
                        <a
                          key={li}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-text-primary text-text-inverse text-sm font-medium tracking-tight hover:scale-[1.02] transition-transform"
                        >
                          {link.label}
                          <span aria-hidden="true" className="ml-2">
                            →
                          </span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {project.images && project.images.length > 0 && (
                  <div
                    className={`mt-10 md:mt-14 grid gap-6 md:gap-8 ${
                      project.images.length > 1
                        ? "grid-cols-1 md:grid-cols-2"
                        : "grid-cols-1"
                    }`}
                  >
                    {project.images.map((image, ix) =>
                      image.browserFrame ? (
                        <div key={ix} className="w-full">
                          <BrowserFrame
                            src={image.src}
                            url={image.browserFrame.url}
                            ariaLabel={image.alt}
                            theme="dark"
                          />
                        </div>
                      ) : (
                        <div
                          key={ix}
                          className="relative w-full overflow-hidden rounded-xl border border-border-subtle bg-bg-elevated shadow-2xl"
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={1920}
                            height={1080}
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            unoptimized={isAnimated(image.src)}
                            className="w-full h-auto block"
                          />
                        </div>
                      )
                    )}
                  </div>
                )}

                {project.customContent && (
                  <div className="mt-12 md:mt-16">{project.customContent}</div>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

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
                  {isVideo(img.src) ? (
                    <video
                      src={img.src}
                      poster={img.poster}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      aria-label={img.alt}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      unoptimized={isAnimated(img.src)}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ============================================================
          CLOSER HERO (optional full-width image before "What this means")
          ============================================================ */}
      {props.closerHero && (
        <section className="border-t border-border-subtle py-16 md:py-24">
          <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
            <div className="relative w-full overflow-hidden rounded-xl border border-border-subtle bg-bg-elevated shadow-2xl">
              <Image
                src={props.closerHero.src}
                alt={props.closerHero.alt}
                width={1920}
                height={1440}
                sizes="(min-width: 1280px) 1280px, 100vw"
                className="w-full h-auto block"
                priority={false}
              />
            </div>
          </div>
        </section>
      )}

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
