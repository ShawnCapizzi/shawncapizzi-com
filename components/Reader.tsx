"use client";

/**
 * Reader — a clean, modern reading surface for long-form content.
 *
 * Reusable "viewer" you can point at any chapter, essay, or doc.
 * First job: Chapter 1 of the book, as a lead-gen experience.
 *
 * Features:
 *  - Horizontal slide transitions between authored "pages" (modern, quick — not
 *    a skeuomorphic page-flip). Each page scrolls independently if it overflows.
 *  - Block-based content model: heading (H2), paragraph, and pull-quote blocks,
 *    so a page can carry real editorial hierarchy like a printed book spread.
 *  - Serif reading typeface for the body; UI chrome stays in your sans.
 *  - A− / A+ font-size control (clamped to a sensible range).
 *  - An audio "read it aloud" toggle. STUBBED for now: pass `audioSrc` later and
 *    it becomes a real player. With no src it shows a "coming soon" state.
 *  - An inline email capture (final slide + a persistent toolbar button) wired
 *    to /api/subscribe → Kit form 9488992.
 *  - Keyboard arrows + on-screen nav + a progress bar + dark-mode variant.
 *
 * Content is passed as PLAIN DATA so it can cross the server→client boundary
 * from a server component page. See app/book/chapter-1/page.tsx.
 */

import { useCallback, useEffect, useRef, useState } from "react";

export type ReaderBlock =
  | { type: "heading"; text: string }
  | { type: "para"; text: string }
  | { type: "quote"; text: string; cite?: string };

export type ReaderPage = {
  blocks: ReaderBlock[];
};

type ReaderProps = {
  title: string;
  subtitle?: string;
  kicker?: string;
  pages: ReaderPage[];
  /** When provided, the audio toggle becomes a real player. Leave undefined for the "coming soon" stub. */
  audioSrc?: string;
  signupHeading?: string;
  signupSubcopy?: string;
};

const FONT_SCALE = [16, 18, 20, 22, 24]; // px, body text
const DEFAULT_SCALE_INDEX = 1; // 18px

export function Reader({
  title,
  subtitle,
  kicker = "Chapter 1",
  pages,
  audioSrc,
  signupHeading = "That's Chapter 1.",
  signupSubcopy = "New chapters land in your inbox as they're written. No noise — just the work.",
}: ReaderProps) {
  const totalSlides = pages.length + 1;
  const signupIndex = pages.length;

  const [current, setCurrent] = useState(0);
  const [scaleIndex, setScaleIndex] = useState(DEFAULT_SCALE_INDEX);
  const viewportRef = useRef<HTMLDivElement>(null);

  const fontSize = FONT_SCALE[scaleIndex];

  const goTo = useCallback(
    (i: number) => {
      setCurrent((prev) => {
        const nextIdx = Math.max(0, Math.min(totalSlides - 1, i));
        if (nextIdx !== prev && viewportRef.current) {
          viewportRef.current.scrollTop = 0;
        }
        return nextIdx;
      });
    },
    [totalSlides]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const progress = ((current + 1) / totalSlides) * 100;
  const atStart = current === 0;
  const atEnd = current === totalSlides - 1;

  const renderBlock = (block: ReaderBlock, key: number) => {
    switch (block.type) {
      case "heading":
        return <h2 className="sc-reader__h2" key={key}>{block.text}</h2>;
      case "quote":
        return (
          <blockquote className="sc-reader__quote" key={key}>
            <p>{block.text}</p>
            {block.cite && <cite className="sc-reader__cite">{block.cite}</cite>}
          </blockquote>
        );
      case "para":
      default:
        return <p className="sc-reader__p" key={key}>{block.text}</p>;
    }
  };

  return (
    <div className="sc-reader" id="read" style={{ scrollMarginTop: "90px" }}>
      <style>{readerStyles}</style>

      {/* ---------- Toolbar ---------- */}
      <header className="sc-reader__bar">
        <div className="sc-reader__bar-left">
          <span className="sc-reader__kicker">{kicker}</span>
          <span className="sc-reader__bar-title">{title}</span>
        </div>

        <div className="sc-reader__controls">
          <AudioToggle audioSrc={audioSrc} />

          <div className="sc-reader__fontgroup" role="group" aria-label="Text size">
            <button
              type="button"
              className="sc-reader__iconbtn"
              aria-label="Decrease text size"
              disabled={scaleIndex === 0}
              onClick={() => setScaleIndex((i) => Math.max(0, i - 1))}
            >
              <span style={{ fontSize: 13 }}>A</span>
            </button>
            <button
              type="button"
              className="sc-reader__iconbtn"
              aria-label="Increase text size"
              disabled={scaleIndex === FONT_SCALE.length - 1}
              onClick={() => setScaleIndex((i) => Math.min(FONT_SCALE.length - 1, i + 1))}
            >
              <span style={{ fontSize: 19 }}>A</span>
            </button>
          </div>

          <button
            type="button"
            className="sc-reader__subscribe"
            onClick={() => goTo(signupIndex)}
          >
            Get on the list
          </button>
        </div>
      </header>

      {/* progress bar */}
      <div className="sc-reader__progress" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>

      {/* ---------- Sliding viewport ---------- */}
      <div className="sc-reader__stage">
        <div
          className="sc-reader__track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {pages.map((page, i) => (
            <section className="sc-reader__slide" key={i} aria-hidden={current !== i}>
              <div
                className="sc-reader__page"
                ref={current === i ? viewportRef : undefined}
                style={{ fontSize }}
              >
                {i === 0 && (
                  <div className="sc-reader__titleblock">
                    <p className="sc-reader__chap">{kicker}</p>
                    <h1>{title}</h1>
                    {subtitle && <p className="sc-reader__sub">{subtitle}</p>}
                  </div>
                )}
                {page.blocks.map((block, b) => renderBlock(block, b))}
              </div>
            </section>
          ))}

          {/* Final slide: signup */}
          <section className="sc-reader__slide" aria-hidden={current !== signupIndex}>
            <div className="sc-reader__page sc-reader__page--signup">
              <SignupCard heading={signupHeading} subcopy={signupSubcopy} />
            </div>
          </section>
        </div>
      </div>

      {/* ---------- Footer nav ---------- */}
      <footer className="sc-reader__nav">
        <button
          type="button"
          className="sc-reader__navbtn"
          onClick={prev}
          disabled={atStart}
        >
          <Arrow dir="left" /> Previous
        </button>

        <span className="sc-reader__count">
          {current + 1} / {totalSlides}
        </span>

        <button
          type="button"
          className="sc-reader__navbtn sc-reader__navbtn--primary"
          onClick={next}
          disabled={atEnd}
        >
          {current === signupIndex - 1 ? "Finish" : "Next"} <Arrow dir="right" />
        </button>
      </footer>
    </div>
  );
}

/* ---------------- Audio toggle (stubbed until audioSrc is provided) ---------------- */

function AudioToggle({ audioSrc }: { audioSrc?: string }) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggle = () => {
    if (!audioSrc || !audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      void audioRef.current.play();
    }
    setPlaying((p) => !p);
  };

  if (!audioSrc) {
    return (
      <button
        type="button"
        className="sc-reader__audio sc-reader__audio--soon"
        disabled
        title="Narration coming soon — Shawn is recording it"
        aria-label="Audio narration coming soon"
      >
        <Headphones />
        <span>Listen · soon</span>
      </button>
    );
  }

  return (
    <>
      <audio ref={audioRef} src={audioSrc} onEnded={() => setPlaying(false)} preload="none" />
      <button
        type="button"
        className="sc-reader__audio"
        onClick={toggle}
        aria-label={playing ? "Pause narration" : "Play narration"}
      >
        {playing ? <Pause /> : <Play />}
        <span>{playing ? "Pause" : "Listen"}</span>
      </button>
    </>
  );
}

/* ---------------- Inline signup (wired to /api/subscribe → Kit) ---------------- */

function SignupCard({ heading, subcopy }: { heading: string; subcopy: string }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  const submit = async () => {
    if (state === "loading") return;
    const trimmed = email.trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(trimmed)) {
      setState("error");
      setMessage("Please enter a valid email.");
      return;
    }
    setState("loading");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      if (!res.ok) throw new Error();
      setState("done");
    } catch {
      setState("error");
      setMessage("Something went wrong. Try again in a moment.");
    }
  };

  if (state === "done") {
    return (
      <div className="sc-signup">
        <div className="sc-signup__check"><Check /></div>
        <h2 className="sc-signup__heading">Check your inbox.</h2>
        <p className="sc-signup__sub">
          Confirm your email and you&apos;re on the list. I&apos;ll send you the finished book when it&apos;s ready, plus the occasional note from the work. Thanks for reading.
        </p>
      </div>
    );
  }

  return (
    <div className="sc-signup">
      <h2 className="sc-signup__heading">{heading}</h2>
      <p className="sc-signup__sub">{subcopy}</p>

      <div className="sc-signup__form">
        <input
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state === "error") setState("idle");
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") submit();
          }}
          className="sc-signup__input"
          aria-label="Email address"
        />
        <button
          type="button"
          className="sc-signup__btn"
          onClick={submit}
          disabled={state === "loading"}
        >
          {state === "loading" ? "Sending…" : "Send me the book"}
        </button>
      </div>

      {state === "error" && <p className="sc-signup__err">{message}</p>}
      <p className="sc-signup__fine">No spam. Unsubscribe anytime.</p>
    </div>
  );
}

/* ---------------- Tiny inline icons (no dependencies) ---------------- */

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"
      style={{ transform: dir === "left" ? "rotate(180deg)" : undefined }}>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Play() {
  return (<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>);
}
function Pause() {
  return (<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z" /></svg>);
}
function Headphones() {
  return (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 14v-2a8 8 0 0116 0v2M4 14h3v5H5a1 1 0 01-1-1zM20 14h-3v5h2a1 1 0 001-1z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>);
}
function Check() {
  return (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>);
}

/* ---------------- Styles (scoped, self-contained) ---------------- */

const readerStyles = `
.sc-reader {
  --sc-accent: #6B5CFF;
  --sc-ink: #1A1A1E;
  --sc-ink-soft: #55555F;
  --sc-paper: #FBFAF7;
  --sc-line: rgba(20,20,25,0.10);
  --sc-serif: "Iowan Old Style", "Palatino Linotype", Palatino, Charter, Georgia, "Times New Roman", serif;
  max-width: 760px;
  margin: 0 auto;
  background: var(--sc-paper);
  border: 1px solid var(--sc-line);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(20,20,25,0.04), 0 24px 60px -28px rgba(20,20,25,0.22);
}
.sc-reader * { box-sizing: border-box; }

.sc-reader__bar {
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  padding: 14px 18px;
  border-bottom: 1px solid var(--sc-line);
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(8px);
}
.sc-reader__bar-left { display: flex; flex-direction: column; min-width: 0; }
.sc-reader__kicker {
  font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase;
  font-weight: 700; color: var(--sc-accent);
}
.sc-reader__bar-title {
  font-size: 13px; color: var(--sc-ink-soft); font-weight: 500;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 40vw;
}
.sc-reader__controls { display: flex; align-items: center; gap: 8px; }

.sc-reader__audio {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 7px 12px; border-radius: 999px;
  border: 1px solid var(--sc-line); background: #fff; color: var(--sc-ink);
  font-size: 12px; font-weight: 600; cursor: pointer;
  transition: border-color .2s, color .2s;
}
.sc-reader__audio:hover { border-color: var(--sc-accent); color: var(--sc-accent); }
.sc-reader__audio--soon { opacity: 0.55; cursor: not-allowed; }

.sc-reader__fontgroup { display: inline-flex; border: 1px solid var(--sc-line); border-radius: 999px; overflow: hidden; }
.sc-reader__iconbtn {
  display: inline-flex; align-items: center; justify-content: center;
  width: 34px; height: 32px; background: #fff; border: none; cursor: pointer;
  color: var(--sc-ink); line-height: 1; transition: background .15s;
}
.sc-reader__iconbtn + .sc-reader__iconbtn { border-left: 1px solid var(--sc-line); }
.sc-reader__iconbtn:hover:not(:disabled) { background: #f1f0ec; }
.sc-reader__iconbtn:disabled { opacity: 0.35; cursor: default; }

.sc-reader__subscribe {
  display: none;
  padding: 7px 14px; border-radius: 999px;
  background: var(--sc-accent); color: #fff; border: none; cursor: pointer;
  font-size: 12px; font-weight: 600; transition: filter .2s;
}
.sc-reader__subscribe:hover { filter: brightness(1.08); }
@media (min-width: 640px) { .sc-reader__subscribe { display: inline-flex; } }

.sc-reader__progress { height: 3px; background: rgba(20,20,25,0.06); }
.sc-reader__progress span { display: block; height: 100%; background: var(--sc-accent); transition: width .45s cubic-bezier(.4,0,.2,1); }

.sc-reader__stage { overflow: hidden; }
.sc-reader__track { display: flex; transition: transform .45s cubic-bezier(.4,0,.2,1); }
.sc-reader__slide { flex: 0 0 100%; min-width: 100%; }

.sc-reader__page {
  height: clamp(440px, 68vh, 760px);
  overflow-y: auto;
  padding: 44px clamp(22px, 6vw, 72px) 56px;
  font-family: var(--sc-serif);
  color: var(--sc-ink);
  line-height: 1.72;
  -webkit-overflow-scrolling: touch;
}
.sc-reader__page::-webkit-scrollbar { width: 8px; }
.sc-reader__page::-webkit-scrollbar-thumb { background: rgba(20,20,25,0.16); border-radius: 8px; }

.sc-reader__titleblock { margin-bottom: 30px; padding-bottom: 26px; border-bottom: 1px solid var(--sc-line); }
.sc-reader__chap { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; font-weight: 700; color: var(--sc-accent); margin: 0 0 14px; }
.sc-reader__titleblock h1 { font-family: var(--sc-serif); font-size: clamp(30px, 5.2vw, 44px); line-height: 1.08; font-weight: 700; margin: 0; letter-spacing: -0.015em; }
.sc-reader__sub { font-size: 1.02em; color: var(--sc-ink-soft); font-style: italic; line-height: 1.4; margin: 16px 0 0; }

.sc-reader__h2 {
  font-family: var(--sc-serif); font-size: 1.32em; font-weight: 700;
  margin: 1.6em 0 0.7em; letter-spacing: -0.01em; line-height: 1.25; color: var(--sc-ink);
}
.sc-reader__page > .sc-reader__h2:first-child,
.sc-reader__titleblock + .sc-reader__h2 { margin-top: 0; }

.sc-reader__p { margin: 0 0 1.05em; }

.sc-reader__quote {
  margin: 1.6em 0; padding: 4px 0 4px 22px;
  border-left: 3px solid var(--sc-accent);
  font-family: var(--sc-serif);
}
.sc-reader__quote p {
  font-size: 1.18em; line-height: 1.45; font-weight: 600; font-style: italic;
  color: var(--sc-ink); margin: 0; letter-spacing: -0.01em;
}
.sc-reader__cite {
  display: block; margin-top: 10px; font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 0.7em; font-style: normal; font-weight: 600; letter-spacing: 0.04em;
  text-transform: uppercase; color: var(--sc-ink-soft);
}

/* signup slide */
.sc-reader__page--signup { display: flex; align-items: center; justify-content: center; }
.sc-signup { max-width: 440px; text-align: center; font-family: ui-sans-serif, system-ui, sans-serif; }
.sc-signup__heading { font-family: var(--sc-serif); font-size: clamp(24px, 5vw, 32px); font-weight: 700; margin: 0 0 12px; color: var(--sc-ink); letter-spacing: -0.01em; }
.sc-signup__sub { font-size: 15px; line-height: 1.6; color: var(--sc-ink-soft); margin: 0 0 24px; }
.sc-signup__form { display: flex; flex-direction: column; gap: 10px; }
@media (min-width: 480px) { .sc-signup__form { flex-direction: row; } }
.sc-signup__input {
  flex: 1; padding: 13px 16px; border-radius: 12px; border: 1px solid var(--sc-line);
  font-size: 15px; color: var(--sc-ink); background: #fff; outline: none;
  transition: border-color .2s, box-shadow .2s;
}
.sc-signup__input:focus { border-color: var(--sc-accent); box-shadow: 0 0 0 3px rgba(107,92,255,0.15); }
.sc-signup__btn {
  padding: 13px 20px; border-radius: 12px; border: none; cursor: pointer;
  background: var(--sc-accent); color: #fff; font-size: 15px; font-weight: 600;
  white-space: nowrap; transition: filter .2s;
}
.sc-signup__btn:hover:not(:disabled) { filter: brightness(1.08); }
.sc-signup__btn:disabled { opacity: 0.7; cursor: default; }
.sc-signup__err { color: #C0392B; font-size: 13px; margin: 12px 0 0; }
.sc-signup__fine { color: var(--sc-ink-soft); font-size: 12px; margin: 16px 0 0; opacity: 0.8; }
.sc-signup__check { width: 56px; height: 56px; border-radius: 999px; background: rgba(107,92,255,0.12); color: var(--sc-accent); display: flex; align-items: center; justify-content: center; margin: 0 auto 18px; }

.sc-reader__nav {
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  padding: 14px 18px; border-top: 1px solid var(--sc-line);
  background: rgba(255,255,255,0.6);
}
.sc-reader__navbtn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 9px 16px; border-radius: 999px; cursor: pointer;
  border: 1px solid var(--sc-line); background: #fff; color: var(--sc-ink);
  font-family: ui-sans-serif, system-ui, sans-serif; font-size: 13px; font-weight: 600;
  transition: border-color .2s, background .2s, opacity .2s;
}
.sc-reader__navbtn:hover:not(:disabled) { border-color: var(--sc-accent); }
.sc-reader__navbtn:disabled { opacity: 0.35; cursor: default; }
.sc-reader__navbtn--primary { background: var(--sc-ink); color: #fff; border-color: var(--sc-ink); }
.sc-reader__navbtn--primary:hover:not(:disabled) { background: #000; border-color: #000; }
.sc-reader__count { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 12px; color: var(--sc-ink-soft); font-variant-numeric: tabular-nums; }

@media (prefers-color-scheme: dark) {
  .sc-reader {
    --sc-ink: #ECEAE3; --sc-ink-soft: #9A9AA4; --sc-paper: #15151A; --sc-line: rgba(255,255,255,0.12);
  }
  .sc-reader__bar, .sc-reader__nav { background: rgba(255,255,255,0.03); }
  .sc-reader__audio, .sc-reader__iconbtn, .sc-reader__navbtn, .sc-signup__input { background: #1E1E25; }
  .sc-reader__iconbtn:hover:not(:disabled) { background: #2A2A33; }
}
`;
