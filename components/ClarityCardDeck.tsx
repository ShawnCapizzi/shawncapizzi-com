"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CLARITY_CARDS, type ClarityCard } from "@/lib/clarity-cards";

/**
 * Corner rank typeface. Oswald is a condensed, strong-stroked gothic that reads
 * cleanly as a large single glyph and keeps "10" tidy in the corner. To retune,
 * swap both RANK_FONT and RANK_FONT_HREF together (e.g. Bebas Neue for max
 * poster presence, Playfair Display for a classic Bicycle/KEM serif, or Archivo
 * for a neutral modern grotesque).
 */
const RANK_FONT = "'Oswald', system-ui, sans-serif";
const RANK_FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&display=swap";

/**
 * ClarityCardDeck
 *
 * A single stacked deck of Capizzi Clarity Cards on a matte green felt playmat.
 * Click "Draw" and the top card lifts, tilts, and flips face-up onto the pile.
 * All 54 cards come from lib/clarity-cards.ts (4 suits of 13 + 2 wildcards).
 *
 * Card front follows the deck's layout spec: suit symbol on the top-left and
 * bottom-right (mirrored) diagonal, rank on the top-right and bottom-left
 * (mirrored) diagonal. One marker per corner; suit and rank never share a side.
 */

// Card dimensions used by the stack. Single source of truth.
const CARD_W = 260;
const CARD_H = 364;

// Fine fractal-noise texture (felt + paper grain), as an inline SVG data URI so
// no asset file is needed. Applied at low opacity with a soft-light blend.
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

  // Load the corner rank font once, without touching layout.tsx or Tailwind config.
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById("clarity-rank-font")) return;
    const link = document.createElement("link");
    link.id = "clarity-rank-font";
    link.rel = "stylesheet";
    link.href = RANK_FONT_HREF;
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

  const noDrawsLeft = deckIndices.length === 0;
  const cardsRemaining = deckIndices.length;
  const visibleDeck = useMemo(() => deckIndices.slice(-3), [deckIndices]);

  return (
    <div className="w-full">
      <style>{deckCSS}</style>

      <div
        className="relative rounded-3xl overflow-hidden p-8 md:p-12 lg:p-16"
        style={{
          background:
            "radial-gradient(ellipse 55% 70% at 86% 16%, rgba(255,240,205,0.17) 0%, rgba(255,240,205,0) 55%), radial-gradient(ellipse 95% 85% at 16% 122%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 55%), linear-gradient(160deg, #2a5c30 0%, #1f4a24 58%, #163a1a 100%)",
          boxShadow:
            "inset 0 0 0 1px rgba(255,255,255,0.05), inset 0 0 90px rgba(0,0,0,0.5), -12px 34px 80px -30px rgba(0,0,0,0.72)",
        }}
      >
        {/* Matte felt grain */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: NOISE,
            backgroundSize: "180px 180px",
            opacity: 0.12,
            mixBlendMode: "soft-light",
          }}
        />

        <div
          aria-hidden="true"
          className="absolute inset-4 md:inset-5 rounded-2xl pointer-events-none"
          style={{ border: "1px solid rgba(255, 255, 255, 0.06)" }}
        />

        <div className="relative flex flex-col items-center">
          <div
            className="relative"
            style={{
              width: CARD_W + 60,
              height: CARD_H + 40,
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
                      width: CARD_W,
                      height: CARD_H,
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
                    width: CARD_W,
                    height: CARD_H,
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

          {/* CONTROLS directly below the stack */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {!noDrawsLeft && (
              <button
                type="button"
                onClick={drawNext}
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#6B5CFF] hover:bg-[#7B6CFF] text-white text-sm md:text-base font-medium tracking-tight transition-all hover:scale-[1.02]"
              >
                {drawn.length === 0 ? "Draw a card" : "Draw next"}
              </button>
            )}
            <button
              type="button"
              onClick={reshuffle}
              className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-white/30 text-white hover:bg-white/[0.08] text-sm md:text-base font-medium tracking-tight transition-all"
            >
              Shuffle
            </button>
            <p className="text-xs md:text-sm text-white/70 tabular-nums">
              {cardsRemaining} {cardsRemaining === 1 ? "card" : "cards"} left
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------- Card visuals -------------------- */

function CardFront({ card }: { card: ClarityCard }) {
  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-2xl border"
      style={{
        background:
          "linear-gradient(155deg, #0a2742 0%, #05192b 58%, #02101d 100%)",
        borderColor: "rgba(107, 92, 255, 0.22)",
        boxShadow:
          "-16px 26px 52px -18px rgba(0,0,0,0.62), -7px 12px 22px -10px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05), inset -1px 0 0 rgba(255,255,255,0.035)",
      }}
    >
      {/* Desk-light wash: a faint warm wash off the top-right, no hotspot */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          background:
            "linear-gradient(215deg, rgba(255,249,236,0.05) 0%, rgba(255,249,236,0) 42%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          backgroundImage: NOISE,
          backgroundSize: "160px 160px",
          opacity: 0.05,
          mixBlendMode: "soft-light",
        }}
      />
      {/* Printed inner border frame, the way a real card is trimmed */}
      <div
        aria-hidden="true"
        className="absolute inset-[10px] rounded-xl pointer-events-none"
        style={{ border: "1px solid rgba(107, 92, 255, 0.16)" }}
      />

      {/* CORNERS — suit on the TL/BR diagonal, rank on the TR/BL diagonal. */}
      <span
        className="absolute top-3 left-3 text-2xl leading-none"
        style={{ color: "#6B5CFF" }}
      >
        {card.suitSymbol}
      </span>
      <span
        className="absolute top-3 right-3 text-[28px] leading-none tabular-nums"
        style={{ color: "#ffffff", fontFamily: RANK_FONT, fontWeight: 600 }}
      >
        {card.rank}
      </span>
      <span
        className="absolute bottom-3 left-3 text-[28px] leading-none tabular-nums"
        style={{
          color: "#ffffff",
          fontFamily: RANK_FONT,
          fontWeight: 600,
          transform: "rotate(180deg)",
        }}
      >
        {card.rank}
      </span>
      <span
        className="absolute bottom-3 right-3 text-2xl leading-none"
        style={{ color: "#6B5CFF", transform: "rotate(180deg)" }}
      >
        {card.suitSymbol}
      </span>

      {/* CENTER content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
        <p
          className="font-mono text-[10px] tracking-[0.18em] uppercase mb-4"
          style={{ color: "#6B5CFF" }}
        >
          {card.title}
        </p>
        <h3 className="text-lg md:text-xl font-bold text-white leading-[1.2] tracking-tight mb-4 text-balance">
          {card.prompt}
        </h3>
        <p className="text-xs md:text-sm italic text-white/60 leading-relaxed text-balance">
          {card.clarifier}
        </p>
      </div>
    </div>
  );
}

function CardBack() {
  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-2xl border"
      style={{
        background:
          "radial-gradient(circle at 50% 38%, #0c2a4d 0%, #05192b 58%, #02101d 100%)",
        borderColor: "rgba(107, 92, 255, 0.28)",
        boxShadow:
          "-12px 18px 40px -16px rgba(0,0,0,0.55), -5px 6px 14px -6px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05), inset -1px 0 0 rgba(255,255,255,0.03)",
      }}
    >
      {/* Paper grain */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          backgroundImage: NOISE,
          backgroundSize: "160px 160px",
          opacity: 0.06,
          mixBlendMode: "soft-light",
        }}
      />
      <div
        className="absolute inset-0 flex items-center justify-center text-7xl"
        style={{ color: "rgba(107, 92, 255, 0.18)" }}
      >
        {"\u2605"}
      </div>
      <div
        className="absolute inset-3 rounded-xl pointer-events-none"
        style={{ border: "1px solid rgba(107, 92, 255, 0.15)" }}
      />
    </div>
  );
}

/* -------------------- Animations -------------------- */

const deckCSS = `
@keyframes deckBob {
  0%, 100% { transform: translateX(-50%) translate(0px, 0px); }
  50%      { transform: translateX(-50%) translate(0px, -3px); }
}
.deck-bob {
  animation: deckBob 4.2s ease-in-out infinite;
}

/* Drawn card flips in place on top of the pile.
   Start: lifted, untilted, face-down (rotateY 180), slightly larger.
   End:   per-card tilt and small offset, face-up. */
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
  35%  { opacity: 0.55; }
  65%  { opacity: 0.55; }
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
    rgba(255,255,255,0.06) 30%,
    rgba(180,170,255,0.22) 50%,
    rgba(255,255,255,0.06) 70%,
    transparent 100%
  );
  filter: blur(2px);
  animation: cardShimmer 1100ms ease-out 250ms both;
  border-radius: 1rem;
}

@media (prefers-reduced-motion: reduce) {
  .deck-bob,
  .card-flip-on-pile,
  .card-shimmer {
    animation: none !important;
  }
}
`;
