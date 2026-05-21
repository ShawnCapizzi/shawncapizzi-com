"use client";

import { useCallback, useMemo, useRef, useState } from "react";

/**
 * ClarityCardDeck
 *
 * A single stacked deck of Capizzi Clarity Cards sitting on a green felt
 * playmat. Click "Draw" and the top card lifts a little, tilts to roughly 8
 * degrees, and flips face-up on top of the stack so its content is readable.
 * Click again and the next card flips on top of that one. Pile grows.
 *
 * Cards are CSS-rendered from the data array below.
 */

type ClarityCard = {
  rank: string;
  eyebrow: string;
  question: string;
  note: string;
};

const CARDS: ClarityCard[] = [
  {
    rank: "A",
    eyebrow: "Clarity",
    question: "What's actually stuck?",
    note: "Before you brief the design, name the actual blocker. Political, technical, strategic, or unclear scope.",
  },
  {
    rank: "2",
    eyebrow: "The Real Problem",
    question: "What problem is this actually solving?",
    note: "Strip away the request and ask what the underlying need is. The brief is rarely the brief.",
  },
  {
    rank: "3",
    eyebrow: "Two Sentences",
    question: "Can you state the problem in two sentences?",
    note: "If you can't, you don't have a problem statement. You have a problem feeling.",
  },
  {
    rank: "6",
    eyebrow: "The Actual User",
    question: "Are we designing for the user or the stakeholder reviewing this?",
    note: "Most enterprise design optimizes for the approver, not the person who'll use it.",
  },
  {
    rank: "7",
    eyebrow: "Cost of Wrong",
    question: "What happens if we get this wrong?",
    note: "If nothing happens, this isn't worth designing carefully. If a lot happens, slow down.",
  },
  {
    rank: "9",
    eyebrow: "What's Off Limits",
    question: "What can't we change, and why?",
    note: "Constraints aren't always real. Sometimes they're inherited assumptions worth challenging.",
  },
  {
    rank: "10",
    eyebrow: "The Yes/No Test",
    question: "Can a stakeholder give us a clear yes or no on this?",
    note: "If they can only say 'maybe' or 'it depends,' the question isn't sharp enough.",
  },
];

const SPADE = "\u2660";

// Card dimensions used by the stack. Single source of truth.
const CARD_W = 260;
const CARD_H = 364;

// Per-draw tilt and offset so each face-up card lands in a slightly different
// spot, like a real fanned pile of drawn cards. Deterministic by draw index
// so re-renders don't reshuffle the visible layout.
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
    CARDS.map((_, i) => i).reverse()
  );
  const [drawn, setDrawn] = useState<number[]>([]);
  const animatingRef = useRef(false);

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
    const fresh = CARDS.map((_, i) => i);
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
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(41, 168, 41, 0.28) 0%, rgba(41, 168, 41, 0.14) 40%, rgba(20, 90, 25, 0.85) 100%), linear-gradient(160deg, #1f7a25 0%, #176019 60%, #0f4612 100%)",
          boxShadow:
            "inset 0 0 0 1px rgba(255, 255, 255, 0.08), inset 0 0 80px rgba(0, 0, 0, 0.45), 0 30px 80px -30px rgba(0, 0, 0, 0.7)",
        }}
      >
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
                  <CardFront card={CARDS[cardIdx]} />
                  {isNewest && <span className="card-shimmer" aria-hidden="true" />}
                </div>
              );
            })}
          </div>

          {/* CONTROLS directly below the stack */}
          <div className="mt-8 flex items-center gap-4">
            {!noDrawsLeft ? (
              <button
                type="button"
                onClick={drawNext}
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#6B5CFF] hover:bg-[#7B6CFF] text-white text-sm md:text-base font-medium tracking-tight transition-all hover:scale-[1.02]"
              >
                {drawn.length === 0 ? "Draw a card" : "Draw next"}
              </button>
            ) : (
              <button
                type="button"
                onClick={reshuffle}
                className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-white/30 text-white hover:bg-white/[0.08] text-sm md:text-base font-medium tracking-tight transition-all"
              >
                Reshuffle
              </button>
            )}
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
          "linear-gradient(155deg, #08233f 0%, #021524 55%, #010d1a 100%)",
        borderColor: "rgba(107, 92, 255, 0.22)",
        boxShadow:
          "0 30px 60px -20px rgba(0,0,0,0.6), 0 12px 24px -10px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(107,92,255,0.08)",
      }}
    >
      <div
        className="absolute top-3 left-3 flex flex-col items-center leading-none"
        style={{ color: "#6B5CFF" }}
      >
        <span className="text-2xl font-bold tabular-nums">{card.rank}</span>
      </div>
      <div className="absolute top-3.5 left-9 text-[#6B5CFF] text-lg leading-none">
        {SPADE}
      </div>

      <div
        className="absolute top-3 right-3 flex flex-col items-center leading-none"
        style={{ color: "#ffffff" }}
      >
        <span className="text-2xl font-bold tabular-nums">{card.rank}</span>
      </div>

      <div
        className="absolute bottom-3 left-3 leading-none"
        style={{ color: "#ffffff", transform: "rotate(180deg)" }}
      >
        <span className="text-2xl font-bold tabular-nums">{card.rank}</span>
      </div>

      <div
        className="absolute bottom-3 right-3 text-[#6B5CFF] text-lg leading-none"
        style={{ transform: "rotate(180deg)" }}
      >
        {SPADE}
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-7 text-center">
        <p
          className="font-mono text-[10px] tracking-[0.18em] uppercase mb-4"
          style={{ color: "#6B5CFF" }}
        >
          {card.eyebrow}
        </p>
        <h3 className="text-lg md:text-xl font-bold text-white leading-[1.2] tracking-tight mb-4 text-balance">
          {card.question}
        </h3>
        <p className="text-xs md:text-sm italic text-white/60 leading-relaxed text-balance">
          {card.note}
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
          "radial-gradient(circle at 30% 30%, #0c2a4d 0%, #021524 55%, #010d1a 100%)",
        borderColor: "rgba(107, 92, 255, 0.28)",
        boxShadow:
          "0 18px 40px -16px rgba(0,0,0,0.55), 0 6px 14px -6px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(107,92,255,0.10)",
      }}
    >
      <div
        className="absolute inset-0 flex items-center justify-center text-7xl"
        style={{ color: "rgba(107, 92, 255, 0.20)" }}
      >
        {SPADE}
      </div>
      <div
        className="absolute top-3 left-3 text-base"
        style={{ color: "rgba(107, 92, 255, 0.55)" }}
      >
        {SPADE}
      </div>
      <div
        className="absolute bottom-3 right-3 text-base"
        style={{ color: "rgba(107, 92, 255, 0.55)", transform: "rotate(180deg)" }}
      >
        {SPADE}
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
