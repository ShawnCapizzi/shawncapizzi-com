"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// ---------------------------------------------------------------------------
// TYPES
// ---------------------------------------------------------------------------

export interface CarouselSlide {
  tag: string;
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
  media?: React.ReactNode;
  signal?: string;
  anticipate?: string;
}

export interface CaseStudyCarouselProps {
  eyebrow?: string;
  heading?: string;
  slides: CarouselSlide[];
  openingFrame?: string;
  closingBridge?: string;
  keyPhrases?: string[];
  initialSpeakerMode?: boolean;
}

// ---------------------------------------------------------------------------
// COMPONENT
// ---------------------------------------------------------------------------

export function CaseStudyCarousel({
  eyebrow = "(Process)",
  heading = "The walk-through",
  slides,
  openingFrame,
  closingBridge,
  keyPhrases,
  initialSpeakerMode = false,
}: CaseStudyCarouselProps) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [speakerMode, setSpeakerMode] = useState(initialSpeakerMode);
  const total = slides.length;
  const slide = slides[slideIndex];

  const next = useCallback(
    () => setSlideIndex((i) => Math.min(i + 1, total - 1)),
    [total]
  );
  const prev = useCallback(() => setSlideIndex((i) => Math.max(i - 1, 0)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tgt = e.target as HTMLElement | null;
      if (tgt?.tagName === "INPUT" || tgt?.tagName === "TEXTAREA") return;
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (
        e.key.toLowerCase() === "s" &&
        !e.metaKey &&
        !e.ctrlKey &&
        !e.altKey
      ) {
        setSpeakerMode((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const hasSpeakerContent =
    !!slide.signal ||
    !!slide.anticipate ||
    !!openingFrame ||
    !!closingBridge ||
    (keyPhrases && keyPhrases.length > 0);
  const showSpeaker = speakerMode && hasSpeakerContent;

  return (
    <section
      className="py-16 md:py-24 border-t border-border-subtle"
      aria-label="Process walk-through"
    >
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
        {/* ── Section header — matches other sections in CaseStudyLayout ── */}
        <div className="flex items-start justify-between gap-8 flex-wrap mb-10 md:mb-14">
          <div>
            <p className="eyebrow mb-4">{eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {heading}
            </h2>
          </div>
          {speakerMode && (
            <button
              onClick={() => setSpeakerMode(false)}
              type="button"
              aria-label="Exit speaker mode"
              className="inline-flex items-center gap-2 px-3 py-2 bg-brand-purple text-text-primary font-mono text-xs uppercase tracking-widest rounded-md hover:opacity-90 transition-opacity"
            >
              <span
                aria-hidden="true"
                className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse"
              />
              Speaker mode · press S to exit
            </button>
          )}
        </div>

        {/* ── Slide ── */}
        <div key={slideIndex} className="animate-fade-in">
          {/* Slide meta row */}
          <div className="flex items-center gap-4 mb-5">
            <span className="metadata-label">
              {String(slideIndex + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
            <span className="metadata-label px-2 py-1 border border-border-default rounded">
              {slide.tag}
            </span>
          </div>

          {/* Two-column slide layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Media column */}
            <div
              className={
                slide.media
                  ? "relative flex items-center justify-center min-h-[280px]"
                  : "relative aspect-[4/3] lg:aspect-[16/11] rounded-xl overflow-hidden border border-border-default bg-bg-elevated"
              }
            >
              {slide.media
                ? slide.media
                : slide.image && (
                    <Image
                      src={slide.image}
                      alt={slide.imageAlt || ""}
                      fill
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      className="object-cover"
                      unoptimized={slide.image.endsWith(".gif")}
                    />
                  )}
            </div>

            {/* Text column */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight mb-5">
                {slide.title}
              </h3>
              <div
                className="w-10 h-px bg-text-primary opacity-70 mb-5"
                aria-hidden="true"
              />
              <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                {slide.body}
              </p>
            </div>
          </div>
        </div>

        {/* ── Controls ── */}
        <div className="mt-12 pt-6 border-t border-border-subtle flex items-center justify-between gap-4 flex-wrap">
          {/* Dots */}
          <div
            className="flex items-center gap-2"
            role="tablist"
            aria-label="Slide indicators"
          >
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-selected={i === slideIndex}
                role="tab"
                type="button"
                className={`h-0.5 transition-all duration-300 ${
                  i === slideIndex
                    ? "bg-text-primary w-7"
                    : "bg-border-default w-2.5 hover:bg-border-strong"
                }`}
              />
            ))}
          </div>

          {/* Prev / Next */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              disabled={slideIndex === 0}
              type="button"
              aria-label="Previous slide"
              className="inline-flex items-center gap-2 px-3.5 py-2 border border-border-default text-text-primary font-mono text-xs uppercase tracking-widest rounded hover:bg-text-primary hover:text-text-inverse hover:border-text-primary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-text-primary disabled:hover:border-border-default transition-colors"
            >
              <ChevronLeft size={14} aria-hidden="true" />
              Prev
            </button>
            <button
              onClick={next}
              disabled={slideIndex === total - 1}
              type="button"
              aria-label="Next slide"
              className="inline-flex items-center gap-2 px-3.5 py-2 border border-border-default text-text-primary font-mono text-xs uppercase tracking-widest rounded hover:bg-text-primary hover:text-text-inverse hover:border-text-primary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-text-primary disabled:hover:border-border-default transition-colors"
            >
              Next
              <ChevronRight size={14} aria-hidden="true" />
            </button>
          </div>
        </div>

        <p className="mt-3 text-right font-mono text-xs uppercase tracking-widest text-text-tertiary">
          Use ← → keys to navigate
        </p>

        {/* ── Speaker mode panel ── */}
        {showSpeaker && (
          <div className="mt-14 pt-10 border-t-2 border-brand-purple animate-fade-in">
            {/* Loud warning bar */}
            <div className="flex items-center justify-between gap-4 flex-wrap mb-8 px-4 py-3 bg-brand-purple text-text-primary font-mono text-xs uppercase tracking-widest rounded-md">
              <span className="inline-flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse"
                />
                Private speaker notes — not for screenshare
              </span>
              <button
                onClick={() => setSpeakerMode(false)}
                type="button"
                className="inline-flex items-center gap-1.5 px-2 py-1 border border-text-primary rounded hover:bg-text-primary hover:text-brand-purple transition-colors"
              >
                <X size={11} aria-hidden="true" />
                Exit (S)
              </button>
            </div>

            {/* Opening frame + closing bridge */}
            {(openingFrame || closingBridge) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {openingFrame && (
                  <div className="card-surface border border-border-default rounded-xl p-6">
                    <p className="font-mono text-xs uppercase tracking-widest text-link mb-3">
                      Opening frame
                    </p>
                    <p className="text-sm md:text-base text-text-secondary italic leading-relaxed">
                      {openingFrame}
                    </p>
                  </div>
                )}
                {closingBridge && (
                  <div className="card-surface border border-border-default rounded-xl p-6">
                    <p className="font-mono text-xs uppercase tracking-widest text-link mb-3">
                      Closing bridge
                    </p>
                    <p className="text-sm md:text-base text-text-secondary italic leading-relaxed">
                      {closingBridge}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* JD-aligned phrases */}
            {keyPhrases && keyPhrases.length > 0 && (
              <div className="card-surface border border-border-default rounded-xl p-6 mb-8">
                <p className="font-mono text-xs uppercase tracking-widest text-link mb-4">
                  Mirror these phrases (JD-aligned)
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-none p-0 m-0">
                  {keyPhrases.map((p, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 text-sm text-text-primary leading-snug"
                    >
                      <span className="font-mono text-xs text-link mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Per-slide signal + anticipate */}
            {(slide.signal || slide.anticipate) && (
              <>
                <p className="font-mono text-xs uppercase tracking-widest text-link mb-4">
                  Current slide — talking points
                </p>
                <div className="card-surface border border-border-default rounded-xl p-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-text-tertiary mb-2">
                    Slide {String(slideIndex + 1).padStart(2, "0")} ·{" "}
                    {slide.tag}
                  </p>
                  <p className="text-lg md:text-xl font-semibold tracking-tight mb-5">
                    {slide.title}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    {slide.signal && (
                      <div>
                        <p className="font-mono text-xs uppercase tracking-widest text-text-primary mb-2">
                          Signal this sends
                        </p>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {slide.signal}
                        </p>
                      </div>
                    )}
                    {slide.anticipate && (
                      <div>
                        <p className="font-mono text-xs uppercase tracking-widest text-text-primary mb-2">
                          Anticipate
                        </p>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {slide.anticipate}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
