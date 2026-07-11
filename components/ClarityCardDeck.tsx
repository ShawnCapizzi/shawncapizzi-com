"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CLARITY_CARDS, type ClarityCard, type ClaritySuit } from "@/lib/clarity-cards";

/**
 * ClarityCardDeck
 *
 * The Clarity Cards "Spine" workshop deck, sitting on a warm wood worktable.
 * Click "Draw" and the top card lifts, flips face-up, and lands on the pile.
 * All 54 cards come from lib/clarity-cards.ts (4 suits of 13 + 2 wildcards).
 *
 * Card design (Spine direction): white card, suit-colored left rail carrying the
 * rank (mono), the rotated suit name, and the suit glyph; the body holds an
 * uppercase eyebrow, a large prompt, and a muted clarifier. The back is a clean
 * white card with a black inset border, colored suit hash marks, and a wordmark.
 *
 * Set dressing (pencil + sticky notes) is decorative, desktop-only, and never
 * intercepts clicks. Sizing is responsive via the --card-w / --card-h CSS vars
 * on the .clarity-deck wrapper; every internal dimension is a calc() off them so
 * the Spine proportions hold at every breakpoint.
 */

// Suit color system (atmospheric "space / moon" tones), shared with the deck source.
const WSUIT: Record<ClaritySuit, { c: string; name: string; tint: string }> = {
  Clarity: { c: "#6355BB", name: "CLARITY", tint: "#E7E4F4" },
  Audience: { c: "#AC64B4", name: "AUDIENCE", tint: "#F3E8F4" },
  Action: { c: "#42499E", name: "ACTION", tint: "#E5E6F0" },
  System: { c: "#1B6D68", name: "SYSTEM", tint: "#DEEDEB" },
  Wildcard: { c: "#BD5735", name: "WILD", tint: "#F5E5DE" },
};
const INK = "#16161A";
const MUTE = "#6A6A73";

// Font stacks per the Spine design. Loaded once at runtime (see effect below) so
// no layout.tsx or Tailwind change is needed.
const SANS = '"Inter Tight", system-ui, sans-serif';
const MONO = '"Geist Mono", "IBM Plex Mono", ui-monospace, monospace';
const HAND = '"Caveat", "Bradley Hand", cursive';
const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Geist+Mono:wght@400;500;700&family=Inter+Tight:wght@400;500;600;700&display=swap";

// Fine fractal-noise texture for the wood grain, as an inline SVG data URI so no
// asset file is needed. Applied at low opacity with a soft-light blend.
const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

// Per-draw tilt and offset so each face-up card lands in a slightly different
// spot, like a real fanned pile. Deterministic by draw index.
function tiltFor(seed: number) {
  const sequence = [-8, 6, -5, 9, -7, 4, -10, 7, -6, 8];
  return sequence[seed % sequence.length];
}
function offsetFor(seed: number) {
  const xs = [0, 8, -10, 6, -4, 11, -8, 3, -12, 9];
  const ys = [0, -3, 4, -6, 2, -5, 6, -4, 3, -7];
  return { x: xs[seed % xs.length], y: ys[seed % ys.length] };
}

export function ClarityCardDeck() {
  const [deckIndices, setDeckIndices] = useState<number[]>(() =>
    CLARITY_CARDS.map((_, i) => i).reverse()
  );
  const [drawn, setDrawn] = useState<number[]>([]);
  const animatingRef = useRef(false);

  // Load the deck fonts once, without touching layout.tsx or Tailwind config.
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById("clarity-deck-fonts")) return;
    const link = document.createElement("link");
    link.id = "clarity-deck-fonts";
    link.rel = "stylesheet";
    link.href = FONT_HREF;
    document.head.appendChild(link);
  }, []);

  const drawNext = useCallback(() => {
    if (animatingRef.current || deckIndices.length === 0) return;
    animatingRef.current = true;

    const next = deckIndices[deckIndices.length - 1];
    setDeckIndices((prev) => prev.slice(0, -1));
    setDrawn((prev) => [...prev, next]);

    window.setTimeout(() => {
      animatingRef.current = false;
    }, 950);
  }, [deckIndices]);

  const reshuffle = useCallback(() => {
    if (animatingRef.current) return;
    setDrawn([]);
    const fresh = CLARITY_CARDS.map((_, i) => i);
    for (let i = fresh.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [fresh[i], fresh[j]] = [fresh[j], fresh[i]];
    }
    setDeckIndices(fresh);
  }, []);

  // Shuffle the deck on mount so every page load starts with a fresh order.
  // Done in an effect (not the useState initializer) to avoid SSR/hydration
  // mismatches — Math.random() during SSR would produce a different order
  // than on the client. The deck is face-down at mount, so the transition
  // from ordered to shuffled isn't visible.
  useEffect(() => {
    reshuffle();
  }, [reshuffle]);

  const noDrawsLeft = deckIndices.length === 0;
  const cardsRemaining = deckIndices.length;
  const visibleDeck = useMemo(() => deckIndices.slice(-3), [deckIndices]);

  return (
    <div className="clarity-deck w-full">
      <style>{deckCSS}</style>

      {/* THE TABLE — warm oak worktable lit from the upper right. */}
      <div
        className="relative mx-auto w-full max-w-[860px] rounded-3xl overflow-hidden p-4 sm:p-8 md:p-12 lg:p-16"
        style={{
          background:
            "radial-gradient(ellipse 52% 66% at 88% 12%, rgba(255,243,216,0.34) 0%, rgba(255,243,216,0) 56%)," +
            "radial-gradient(ellipse 95% 85% at 16% 122%, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0) 55%)," +
            "repeating-linear-gradient(92deg, rgba(40,28,14,0) 0px, rgba(40,28,14,0) 150px, rgba(34,24,12,0.34) 151px, rgba(34,24,12,0.34) 152px)," +
            "linear-gradient(160deg, #82765D 0%, #79694D 60%, #6B5B41 100%)",
          boxShadow:
            "inset 0 0 0 1px rgba(255,255,255,0.06), inset 0 0 90px rgba(40,28,12,0.26), -12px 34px 80px -30px rgba(40,28,12,0.55)",
        }}
      >
        {/* Wood grain */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: NOISE,
            backgroundSize: "200px 200px",
            opacity: 0.1,
            mixBlendMode: "soft-light",
          }}
        />

        {/* Set dressing — decorative, desktop only, never blocks interaction. */}
        <StickyNote text="Listen first" color="#F7D85F" header="#F1CE45" className="top-8 left-8" rotate={-6} />
        <StickyNote text="Make it visible" color="#AFD0EC" header="#97C0E3" className="top-10 right-8" rotate={5} />
        <StickyNote text="Prove it worked" color="#F2B6C6" header="#E79DB1" className="bottom-10 right-9" rotate={-4} />
        <DeskPencil />

        <div className="relative flex flex-col items-center">
          <div
            className="relative"
            style={{
              width: "calc(var(--card-w) + 60px)",
              height: "calc(var(--card-h) + 40px)",
            }}
            aria-live="polite"
          >
            {/* Face-down deck, three visible for depth */}
            {!noDrawsLeft &&
              visibleDeck.map((cardIdx, stackPos) => {
                const isTopOfDeck = stackPos === visibleDeck.length - 1;
                const depth = (visibleDeck.length - 1 - stackPos) * 3;
                return (
                  <div
                    key={`deck-${cardIdx}`}
                    className={`absolute ${isTopOfDeck ? "deck-bob" : ""}`}
                    style={{
                      left: "50%",
                      top: 20,
                      width: "var(--card-w)",
                      height: "var(--card-h)",
                      transform: `translateX(-50%) translate(${depth}px, ${depth}px)`,
                      zIndex: stackPos,
                    }}
                    aria-hidden="true"
                  >
                    <CardBack />
                  </div>
                );
              })}

            {/* Face-up pile, drawn order, newest on top */}
            {drawn.map((cardIdx, i) => {
              const isNewest = i === drawn.length - 1;
              const tilt = tiltFor(i);
              const { x, y } = offsetFor(i);
              return (
                <div
                  key={`drawn-${cardIdx}-${i}`}
                  className={isNewest ? "card-flip-on-pile" : ""}
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: 20,
                    width: "var(--card-w)",
                    height: "var(--card-h)",
                    transform: `translateX(-50%) translate(${x}px, ${y}px) rotate(${tilt}deg)`,
                    transformOrigin: "center center",
                    zIndex: 100 + i,
                    ["--final-tilt" as string]: `${tilt}deg`,
                    ["--final-x" as string]: `${x}px`,
                    ["--final-y" as string]: `${y}px`,
                  }}
                >
                  <CardFront card={CLARITY_CARDS[cardIdx]} />
                  {isNewest && <span className="card-shimmer" aria-hidden="true" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CONTROLS — below the table, on the page surface. */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {!noDrawsLeft && (
          <button
            type="button"
            onClick={drawNext}
            className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#6355BB] hover:bg-[#7165C9] text-white text-sm md:text-base font-medium tracking-tight transition-all hover:scale-[1.02]"
          >
            {drawn.length === 0 ? "Draw a card" : "Draw next"}
          </button>
        )}
        <button
          type="button"
          onClick={reshuffle}
          className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-border-default text-text-primary hover:bg-text-primary/[0.06] text-sm md:text-base font-medium tracking-tight transition-all"
        >
          Shuffle deck
        </button>
        <p className="text-xs md:text-sm text-text-secondary tabular-nums">
          {cardsRemaining} {cardsRemaining === 1 ? "card" : "cards"} left
        </p>
      </div>
    </div>
  );
}

/* -------------------- Card visuals (Spine direction) -------------------- */

function cardShadow() {
  return (
    "-12px 20px 40px -20px rgba(20,20,26,0.34), -5px 9px 16px -10px rgba(20,20,26,0.20)," +
    "inset 0 0 0 1px rgba(20,20,26,0.05)"
  );
}

function CardFront({ card }: { card: ClarityCard }) {
  const s = WSUIT[card.suit];
  const promptLong = card.prompt.length > 45;
  return (
    <div
      className="relative flex h-full w-full overflow-hidden"
      style={{
        background: "#FFFFFF",
        borderRadius: "calc(var(--card-w) * 0.03)",
        fontFamily: SANS,
        color: INK,
        boxShadow: cardShadow(),
      }}
    >
      {/* Suit-colored spine rail */}
      <div
        className="flex flex-col items-center justify-between"
        style={{
          width: "calc(var(--card-w) * 0.2)",
          background: s.c,
          color: "#ffffff",
          flexShrink: 0,
          padding: "calc(var(--card-w) * 0.06) 0",
        }}
      >
        <span
          style={{
            fontFamily: MONO,
            fontSize: "calc(var(--card-w) * 0.07)",
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          {card.rank}
        </span>
        <span
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontSize: "max(8px, calc(var(--card-w) * 0.034))",
            letterSpacing: "0.28em",
            fontWeight: 700,
          }}
        >
          {s.name}
        </span>
        <span
          style={{
            fontSize: "calc(var(--card-w) * 0.07)",
            fontFamily: "Georgia, serif",
            lineHeight: 1,
          }}
        >
          {card.suitSymbol}
        </span>
      </div>

      {/* Body */}
      <div
        className="flex flex-col justify-center"
        style={{ flex: 1, minWidth: 0, padding: "calc(var(--card-w) * 0.07)" }}
      >
        <div
          style={{
            fontSize: "max(8.5px, calc(var(--card-w) * 0.026))",
            letterSpacing: "0.14em",
            fontWeight: 700,
            color: s.c,
            marginBottom: "calc(var(--card-w) * 0.03)",
          }}
        >
          {card.title.toUpperCase()}
        </div>
        <div
          className="text-balance"
          style={{
            fontSize: `calc(var(--card-w) * ${promptLong ? "0.0936" : "0.1144"})`,
            fontWeight: 700,
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
          }}
        >
          {card.prompt}
        </div>
        <div
          className="text-pretty"
          style={{
            marginTop: "calc(var(--card-w) * 0.05)",
            fontSize: "max(12px, calc(var(--card-w) * 0.06))",
            lineHeight: 1.35,
            color: MUTE,
          }}
        >
          {card.clarifier}
        </div>
      </div>
    </div>
  );
}

function CardBack() {
  const suits: ClaritySuit[] = ["Clarity", "Audience", "Action", "System", "Wildcard"];
  const renderHash = () => (
    <div
      style={{
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        gap: "calc(var(--card-w) * 0.022)",
        alignItems: "center",
      }}
    >
      {suits.map((k) => (
        <span
          key={k}
          style={{
            width: "calc(var(--card-w) * 0.013)",
            height: "calc(var(--card-w) * 0.04)",
            background: WSUIT[k].c,
            borderRadius: "calc(var(--card-w) * 0.007)",
          }}
        />
      ))}
    </div>
  );

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background: "#FFFFFF",
        borderRadius: "calc(var(--card-w) * 0.03)",
        fontFamily: SANS,
        color: INK,
        boxShadow: cardShadow(),
      }}
    >
      {/* Inset edge border */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "calc(var(--card-w) * 0.05)",
          border: `1.5px solid ${INK}`,
          borderRadius: "calc(var(--card-w) * 0.018)",
        }}
      />
      {/* Colored suit hash marks crossing the top and bottom border lines */}
      <div style={{ position: "absolute", top: "calc(var(--card-w) * 0.05)", left: 0, right: 0 }}>
        {renderHash()}
      </div>
      <div
        style={{
          position: "absolute",
          top: "calc(var(--card-h) - var(--card-w) * 0.05)",
          left: 0,
          right: 0,
        }}
      >
        {renderHash()}
      </div>

      {/* Content */}
      <div
        className="flex flex-col items-center justify-center text-center"
        style={{ position: "absolute", inset: 0, padding: "calc(var(--card-w) * 0.12)" }}
      >
        <div
          style={{
            fontSize: "calc(var(--card-w) * 0.03)",
            letterSpacing: "0.3em",
            fontWeight: 600,
            color: MUTE,
            marginBottom: "calc(var(--card-w) * 0.07)",
          }}
        >
          THE CLARITY CARDS
        </div>
        <div
          style={{
            fontSize: "calc(var(--card-w) * 0.12)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: INK,
            lineHeight: 1,
          }}
        >
          Capizzi
        </div>
        <div
          style={{
            fontSize: "calc(var(--card-w) * 0.028)",
            letterSpacing: "0.24em",
            fontWeight: 600,
            color: MUTE,
            marginTop: "calc(var(--card-w) * 0.07)",
          }}
        >
          WORKSHOP EDITION
        </div>
      </div>
    </div>
  );
}

/* -------------------- Set dressing -------------------- */

function StickyNote({
  text,
  color,
  header,
  className,
  rotate,
}: {
  text: string;
  color: string;
  header: string;
  className: string;
  rotate: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={`hidden md:flex absolute h-24 w-24 lg:h-28 lg:w-28 items-center justify-center text-center select-none pointer-events-none ${className}`}
      style={{
        background: color,
        transform: `rotate(${rotate}deg)`,
        boxShadow: "-8px 14px 22px -6px rgba(18,12,5,0.46), -3px 5px 9px -3px rgba(18,12,5,0.36)",
        color: "#37352b",
        fontFamily: HAND,
      }}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-5"
        style={{ background: header }}
      />
      <span
        className="px-2 leading-tight"
        style={{ fontSize: "clamp(17px, 1.7vw, 23px)", fontWeight: 600 }}
      >
        {text}
      </span>
    </div>
  );
}

function DeskPencil() {
  return (
    <div
      aria-hidden="true"
      className="hidden md:block absolute bottom-8 left-6 lg:left-8 pointer-events-none"
      style={{
        width: "clamp(150px, 18vw, 196px)",
        transform: "rotate(-52deg)",
        filter: "drop-shadow(-7px 11px 7px rgba(40,28,12,0.26))",
      }}
    >
      <svg viewBox="0 0 244 16" width="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="1" width="17" height="14" rx="5" fill="#E89C95" />
        <rect x="15" y="1" width="15" height="14" fill="#C7CBD0" />
        <rect x="15" y="1" width="15" height="3" fill="#AFB4BA" />
        <rect x="15" y="11" width="15" height="3" fill="#AFB4BA" />
        <rect x="30" y="1" width="182" height="14" fill="#F1B53C" />
        <rect x="30" y="1" width="182" height="4.5" fill="#F8C95C" />
        <rect x="30" y="10.5" width="182" height="4.5" fill="#D6971F" />
        <polygon points="212,1 212,15 240,8" fill="#E7C79B" />
        <polygon points="233,5.4 233,10.6 240,8" fill="#39393B" />
      </svg>
    </div>
  );
}

/* -------------------- Animations + responsive sizing -------------------- */

const deckCSS = `
.clarity-deck {
  --card-w: 250px;
  --card-h: 350px;
}
@media (min-width: 640px) {
  .clarity-deck { --card-w: 274px; --card-h: 384px; }
}
@media (min-width: 768px) {
  .clarity-deck { --card-w: 312px; --card-h: 437px; }
}
@media (min-width: 1024px) {
  .clarity-deck { --card-w: 342px; --card-h: 479px; }
}

@keyframes deckBob {
  0%, 100% { transform: translateX(-50%) translate(0px, 0px); }
  50%      { transform: translateX(-50%) translate(0px, -3px); }
}
.deck-bob {
  animation: deckBob 4.2s ease-in-out infinite;
}

/* Drawn card flips in place on top of the pile. */
@keyframes flipOnPile {
  0% {
    transform:
      translateX(-50%)
      translate(0px, -30px)
      rotate(0deg)
      rotateY(180deg)
      scale(1.04);
    opacity: 0.85;
  }
  55% {
    opacity: 1;
  }
  100% {
    transform:
      translateX(-50%)
      translate(var(--final-x), var(--final-y))
      rotate(var(--final-tilt))
      rotateY(0deg)
      scale(1);
    opacity: 1;
  }
}
.card-flip-on-pile {
  animation: flipOnPile 850ms cubic-bezier(0.22, 1, 0.36, 1) both;
  backface-visibility: hidden;
  transform-style: preserve-3d;
}

@keyframes cardShimmer {
  0%   { transform: translateX(-120%) skewX(-18deg); opacity: 0; }
  35%  { opacity: 0.5; }
  65%  { opacity: 0.5; }
  100% { transform: translateX(220%) skewX(-18deg); opacity: 0; }
}
.card-shimmer {
  position: absolute;
  top: 0; left: 0;
  width: 45%;
  height: 100%;
  pointer-events: none;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255,255,255,0.10) 30%,
    rgba(255,255,255,0.45) 50%,
    rgba(255,255,255,0.10) 70%,
    transparent 100%
  );
  filter: blur(2px);
  animation: cardShimmer 1100ms ease-out 250ms both;
  border-radius: calc(var(--card-w) * 0.03);
}

@media (prefers-reduced-motion: reduce) {
  .deck-bob,
  .card-flip-on-pile,
  .card-shimmer {
    animation: none !important;
  }
}
`;
