"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// ---------------------------------------------------------------------------
// TYPES
// ---------------------------------------------------------------------------

export interface CarouselSlide {
  /** Short label, e.g. "STRATEGY & LEADERSHIP" — shown above slide title */
  tag: string;
  /** Slide headline */
  title: string;
  /** Slide caption — 2–4 sentences, reads as narration */
  body: string;
  /** Standard path-based image. Use this OR `media` for custom React content. */
  image?: string;
  /** Image alt text — required if `image` is set */
  imageAlt?: string;
  /** Custom media slot — overrides `image` when present. For videos, multi-image
   *  compositions, SVGs, custom React components, etc. */
  media?: React.ReactNode;
  /** Optional — speaker-mode only. The signal this slide sends to the hiring manager. */
  signal?: string;
  /** Optional — speaker-mode only. Likely follow-up question and your answer. */
  anticipate?: string;
}

export interface CaseStudyCarouselProps {
  /** Eyebrow tag — matches existing layout pattern */
  eyebrow?: string;
  /** Section heading */
  heading?: string;
  /** Slides — 4–6 recommended */
  slides: CarouselSlide[];
  /** Speaker-mode only — your opening narrative frame */
  openingFrame?: string;
  /** Speaker-mode only — closing bridge sentence to drop in at the end */
  closingBridge?: string;
  /** Speaker-mode only — JD-aligned key phrases to mirror */
  keyPhrases?: string[];
  /** Speaker-mode default. OFF for public renders. Press "s" to toggle live. */
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

  // Keyboard: ← → navigate slides, "s" toggles speaker mode (private notes)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tgt = e.target as HTMLElement | null;
      if (tgt?.tagName === "INPUT" || tgt?.tagName === "TEXTAREA") return;
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key.toLowerCase() === "s" && !e.metaKey && !e.ctrlKey && !e.altKey) {
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
    <section className="csc" aria-label="Process walk-through">
      <style jsx>{`
        .csc {
          --csc-bg: var(--bg, #faf8f4);
          --csc-ink: var(--ink, #111111);
          --csc-muted: var(--muted, #6b6b6b);
          --csc-soft: var(--soft, #4a4a4a);
          --csc-border: var(--border, #e5e1d8);
          --csc-paper: var(--paper, #ffffff);
          --csc-accent: var(--accent, #b8362e);

          --csc-display: var(
            --font-display,
            "Fraunces",
            "Times New Roman",
            Georgia,
            serif
          );
          --csc-body: var(
            --font-body,
            "Schibsted Grotesk",
            system-ui,
            -apple-system,
            "Segoe UI",
            sans-serif
          );
          --csc-mono: var(
            --font-mono,
            "JetBrains Mono",
            ui-monospace,
            "SFMono-Regular",
            Menlo,
            monospace
          );

          background: var(--csc-bg);
          color: var(--csc-ink);
          border-top: 1px solid var(--csc-border);
          padding: clamp(4rem, 7vw, 6rem) 0;
          font-family: var(--csc-body);
        }

        .container {
          max-width: 72rem;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        @media (min-width: 1024px) {
          .container {
            padding: 0 2.5rem;
          }
        }

        /* ---------- Section header ---------- */
        .section-header {
          margin-bottom: clamp(2.5rem, 4vw, 3.5rem);
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .eyebrow {
          font-family: var(--csc-mono);
          font-size: 11px;
          letter-spacing: 0.12em;
          color: var(--csc-muted);
          text-transform: uppercase;
          margin-bottom: 0.75rem;
        }
        .heading {
          font-family: var(--csc-display);
          font-weight: 400;
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          line-height: 1.1;
          letter-spacing: -0.012em;
          margin: 0;
          font-variation-settings: "opsz" 144, "wght" 400, "SOFT" 30;
        }
        .speaker-banner {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.75rem;
          background: var(--csc-ink);
          color: var(--csc-bg);
          font-family: var(--csc-mono);
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          align-self: flex-start;
        }
        .speaker-banner-dot {
          width: 6px;
          height: 6px;
          background: var(--csc-accent);
          border-radius: 50%;
          animation: pulse 1.4s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        /* ---------- Slide ---------- */
        .slide {
          animation: slideFade 0.45s cubic-bezier(0.2, 0.7, 0.2, 1);
        }
        @keyframes slideFade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .slide-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          font-family: var(--csc-mono);
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .counter { color: var(--csc-ink); }
        .tag {
          padding: 0.25rem 0.5rem;
          border: 1px solid var(--csc-ink);
          color: var(--csc-ink);
          font-size: 10px;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: start;
        }
        @media (min-width: 1024px) {
          .grid {
            grid-template-columns: 1.25fr 1fr;
            gap: 2.75rem;
          }
        }

        .image-shell {
          position: relative;
          aspect-ratio: 4 / 3;
          background: var(--csc-paper);
          border: 1px solid var(--csc-border);
          overflow: hidden;
        }
        @media (min-width: 1024px) {
          .image-shell {
            aspect-ratio: 16 / 11;
          }
        }
        .media-shell {
          position: relative;
          background: var(--csc-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 320px;
        }

        .slide-title {
          font-family: var(--csc-display);
          font-weight: 400;
          font-size: clamp(1.625rem, 2.5vw, 2.125rem);
          line-height: 1.1;
          letter-spacing: -0.01em;
          margin: 0 0 1.25rem 0;
          font-variation-settings: "opsz" 144, "wght" 400, "SOFT" 30;
        }
        .rule {
          width: 2.5rem;
          height: 1px;
          background: var(--csc-ink);
          margin-bottom: 1.25rem;
          opacity: 0.9;
        }
        .slide-body {
          font-family: var(--csc-body);
          font-size: 16px;
          line-height: 1.65;
          color: var(--csc-soft);
          margin: 0;
        }
        @media (min-width: 1024px) {
          .slide-body { font-size: 17px; }
        }

        /* ---------- Controls ---------- */
        .controls {
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--csc-border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .dots {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }
        .dot {
          height: 3px;
          width: 10px;
          background: var(--csc-border);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .dot:hover { background: var(--csc-muted); }
        .dot-active {
          background: var(--csc-ink);
          width: 28px;
        }
        .buttons {
          display: flex;
          gap: 0.5rem;
        }
        .nav-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 1rem;
          background: var(--csc-paper);
          border: 1px solid var(--csc-border);
          color: var(--csc-ink);
          font-family: var(--csc-mono);
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.18s ease;
        }
        .nav-btn:hover:not(:disabled) {
          background: var(--csc-ink);
          color: var(--csc-bg);
          border-color: var(--csc-ink);
        }
        .nav-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        .hint {
          margin-top: 0.75rem;
          text-align: right;
          font-family: var(--csc-mono);
          font-size: 10px;
          letter-spacing: 0.14em;
          color: var(--csc-muted);
          text-transform: uppercase;
        }

        /* ---------- Speaker panel ---------- */
        .speaker {
          margin-top: 3.5rem;
          padding-top: 2.5rem;
          border-top: 2px solid var(--csc-ink);
          animation: prepFade 0.3s ease-out;
        }
        @keyframes prepFade {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .speaker-warn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.75rem 1rem;
          background: var(--csc-ink);
          color: var(--csc-bg);
          margin-bottom: 2rem;
          font-family: var(--csc-mono);
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          flex-wrap: wrap;
        }
        .speaker-warn button {
          background: transparent;
          border: 1px solid var(--csc-bg);
          color: var(--csc-bg);
          padding: 0.25rem 0.5rem;
          font-family: inherit;
          font-size: inherit;
          letter-spacing: inherit;
          text-transform: inherit;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }
        .speaker-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        @media (min-width: 768px) {
          .speaker-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .prep-card {
          border: 1px solid var(--csc-border);
          background: var(--csc-paper);
          padding: 1.5rem;
        }
        .prep-card-eyebrow {
          font-family: var(--csc-mono);
          font-size: 10px;
          letter-spacing: 0.14em;
          color: var(--csc-accent);
          text-transform: uppercase;
          margin-bottom: 0.75rem;
        }
        .prep-card-body {
          font-family: var(--csc-body);
          font-size: 14px;
          line-height: 1.6;
          color: var(--csc-soft);
          font-style: italic;
          margin: 0;
        }
        .phrases { margin-bottom: 2rem; }
        .phrases ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
        }
        @media (min-width: 768px) {
          .phrases ul {
            grid-template-columns: 1fr 1fr;
          }
        }
        .phrases li {
          display: flex;
          gap: 0.6rem;
          font-family: var(--csc-body);
          font-size: 14px;
          color: var(--csc-ink);
          line-height: 1.5;
        }
        .phrases-num {
          font-family: var(--csc-mono);
          font-size: 10px;
          color: var(--csc-accent);
          margin-top: 0.25rem;
        }
        .current-slide-prep {
          border: 1px solid var(--csc-border);
          background: var(--csc-paper);
          padding: 1.5rem;
        }
        .current-slide-prep-meta {
          font-family: var(--csc-mono);
          font-size: 11px;
          letter-spacing: 0.14em;
          color: var(--csc-muted);
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }
        .current-slide-prep-title {
          font-family: var(--csc-display);
          font-size: 20px;
          line-height: 1.25;
          margin: 0 0 1.25rem 0;
          font-variation-settings: "opsz" 144, "wght" 500;
        }
        .prep-cols {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 768px) {
          .prep-cols {
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
          }
        }
        .prep-label {
          font-family: var(--csc-mono);
          font-size: 10px;
          letter-spacing: 0.14em;
          color: var(--csc-ink);
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }
        .prep-text {
          font-family: var(--csc-body);
          font-size: 14px;
          line-height: 1.6;
          color: var(--csc-soft);
          margin: 0;
        }
        .speaker-section-label {
          font-family: var(--csc-mono);
          font-size: 10px;
          letter-spacing: 0.14em;
          color: var(--csc-accent);
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
      `}</style>

      <div className="container">
        {/* ── Section header ── */}
        <header className="section-header">
          <div>
            <div className="eyebrow">{eyebrow}</div>
            <h2 className="heading">{heading}</h2>
          </div>
          {speakerMode && (
            <button
              className="speaker-banner"
              onClick={() => setSpeakerMode(false)}
              aria-label="Exit speaker mode"
              type="button"
            >
              <span className="speaker-banner-dot" aria-hidden="true" />
              Speaker mode · not for screenshare · press S to exit
            </button>
          )}
        </header>

        {/* ── Slide ── */}
        <div className="slide" key={slideIndex}>
          <div className="slide-meta">
            <span className="counter">
              {String(slideIndex + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
            <span className="tag">{slide.tag}</span>
          </div>

          <div className="grid">
            <div className={slide.media ? "media-shell" : "image-shell"}>
              {slide.media ? (
                slide.media
              ) : slide.image ? (
                <Image
                  src={slide.image}
                  alt={slide.imageAlt || ""}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  style={{ objectFit: "cover" }}
                  unoptimized={slide.image.endsWith(".gif")}
                />
              ) : null}
            </div>
            <div>
              <h3 className="slide-title">{slide.title}</h3>
              <div className="rule" />
              <p className="slide-body">{slide.body}</p>
            </div>
          </div>
        </div>

        {/* ── Controls ── */}
        <div className="controls">
          <div className="dots" role="tablist" aria-label="Slide indicators">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-selected={i === slideIndex}
                role="tab"
                type="button"
                className={`dot ${i === slideIndex ? "dot-active" : ""}`}
              />
            ))}
          </div>
          <div className="buttons">
            <button
              onClick={prev}
              disabled={slideIndex === 0}
              aria-label="Previous slide"
              type="button"
              className="nav-btn"
            >
              <ChevronLeft size={14} aria-hidden="true" /> Prev
            </button>
            <button
              onClick={next}
              disabled={slideIndex === total - 1}
              aria-label="Next slide"
              type="button"
              className="nav-btn"
            >
              Next <ChevronRight size={14} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="hint">Use ← → keys to navigate</div>

        {/* ── Speaker panel ── */}
        {showSpeaker && (
          <div className="speaker">
            <div className="speaker-warn">
              <span>● Private speaker notes — not for screenshare</span>
              <button onClick={() => setSpeakerMode(false)} type="button">
                <X size={11} aria-hidden="true" /> Exit (S)
              </button>
            </div>

            {(openingFrame || closingBridge) && (
              <div className="speaker-grid">
                {openingFrame && (
                  <div className="prep-card">
                    <div className="prep-card-eyebrow">Opening frame</div>
                    <p className="prep-card-body">{openingFrame}</p>
                  </div>
                )}
                {closingBridge && (
                  <div className="prep-card">
                    <div className="prep-card-eyebrow">Closing bridge</div>
                    <p className="prep-card-body">{closingBridge}</p>
                  </div>
                )}
              </div>
            )}

            {keyPhrases && keyPhrases.length > 0 && (
              <div className="phrases prep-card">
                <div className="prep-card-eyebrow">
                  Mirror these phrases (JD-aligned)
                </div>
                <ul>
                  {keyPhrases.map((p, i) => (
                    <li key={i}>
                      <span className="phrases-num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {(slide.signal || slide.anticipate) && (
              <>
                <div className="speaker-section-label">
                  Current slide — talking points
                </div>
                <div className="current-slide-prep">
                  <div className="current-slide-prep-meta">
                    Slide {String(slideIndex + 1).padStart(2, "0")} · {slide.tag}
                  </div>
                  <div className="current-slide-prep-title">{slide.title}</div>
                  <div className="prep-cols">
                    {slide.signal && (
                      <div>
                        <div className="prep-label">Signal this sends</div>
                        <p className="prep-text">{slide.signal}</p>
                      </div>
                    )}
                    {slide.anticipate && (
                      <div>
                        <div className="prep-label">Anticipate</div>
                        <p className="prep-text">{slide.anticipate}</p>
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
