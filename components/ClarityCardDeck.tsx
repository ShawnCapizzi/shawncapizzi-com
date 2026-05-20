"use client";

import { useCallback, useMemo, useRef, useState } from "react";

/**
 * ClarityCardDeck
 *
 * A face-down stack of Capizzi Clarity Cards. Click "Draw a card" to deal the
 * top card into the display slot. The card flips in mid-flight with a diagonal
 * shimmer sweep across the face. After all cards are drawn, the deck offers a
 * Reshuffle. Subtle ambient bob on the deck at rest.
 *
 * Cards are CSS-rendered from the data array below, so text stays sharp at any
 * size and adding a card means appending to the array.
 */

type ClarityCard = {
  rank: string; // playing-card index: A, 2-10, J, Q, K
  eyebrow: string; // small purple uppercase label
  question: string; // main headline
  note: string; // italic body copy
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

export function ClarityCardDeck() {
  // Indices remaining in the deck, top of stack at end of array.
  const [deckIndices, setDeckIndices] = useState<number[]>(() =>
    CARDS.map((_, i) => i).reverse()
  );
  // Index of the currently displayed (drawn) card, null = empty slot.
  const [drawnIndex, setDrawnIndex] = useState<number | null>(null);
  // Animation key, increments on each draw to retrigger flip + shimmer.
  const [flipKey, setFlipKey] = useState(0);
  // Lock to prevent rapid double-clicks mid-animation.
  const animatingRef = useRef(false);

  const drawNext = useCallback(() => {
    if (animatingRef.current) return;
    if (deckIndices.length === 0) return;
    animatingRef.current = true;

    const next = deckIndices[deckIndices.length - 1];
    setDeckIndices((prev) => prev.slice(0, -1));
    setDrawnIndex(next);
    setFlipKey((k) => k + 1);

    // Animation runs 900ms; release lock slightly after.
    window.setTimeout(() => {
      animatingRef.current = false;
    }, 950);
  }, [deckIndices]);

  const reshuffle = useCallback(() => {
    if (animatingRef.current) return;
    setDrawnIndex(null);
    // Reset to a freshly shuffled order so the next session feels new.
    const fresh = CARDS.map((_, i) => i);
    for (let i = fresh.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [fresh[i], fresh[j]] = [fresh[j], fresh[i]];
    }
    setDeckIndices(fresh);
  }, []);

  const drawnCard = drawnIndex !== null ? CARDS[drawnIndex] : null;
  const deckEmpty = deckIndices.length === 0;
  const cardsRemaining = deckIndices.length;

  // Render the top three cards as a stacked stack for depth; the visual cap.
  const visibleStack = useMemo(() => deckIndices.slice(-3), [deckIndices]);

  return (
    <div className="w-full">
      <style>{shimmerCSS}</style>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* DECK SIDE */}
        <div className="flex flex-col items-center md:items-start">
          <p className="eyebrow mb-4 text-text-tertiary">The Deck</p>
          <div
            className="relative"
            style={{ width: 220, height: 308 }}
            aria-hidden="true"
          >
            {visibleStack.length === 0 ? (
              <EmptyDeckSlot />
            ) : (
              visibleStack.map((cardIdx, stackPos) => {
                const isTop = stackPos === visibleStack.length - 1;
                // Offset each stacked card slightly for depth.
                const offset = (visibleStack.length - 1 - stackPos) * 3;
                return (
                  <div
                    key={`stack-${cardIdx}`}
                    className={`absolute inset-0 ${isTop ? "deck-bob" : ""}`}
                    style={{
                      transform: `translate(${offset}px, ${offset}px)`,
                      zIndex: stackPos,
                    }}
                  >
                    <CardBack />
                  </div>
                );
              })
            )}
          </div>

          {/* CONTROLS */}
          <div className="mt-7 flex items-center gap-3">
            {!deckEmpty ? (
              <button
                type="button"
                onClick={drawNext}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#6B5CFF] hover:bg-[#7B6CFF] text-white text-sm md:text-base font-medium tracking-tight transition-all hover:scale-[1.02]"
              >
                {drawnIndex === null ? "Draw a card" : "Draw next"}
              </button>
            ) : (
              <button
                type="button"
                onClick={reshuffle}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-border-strong text-text-primary hover:bg-white/[0.04] text-sm md:text-base font-medium tracking-tight transition-all"
              >
                Reshuffle
              </button>
            )}
            <p className="text-xs md:text-sm text-text-tertiary tabular-nums">
              {cardsRemaining} {cardsRemaining === 1 ? "card" : "cards"} left
            </p>
          </div>
        </div>

        {/* DISPLAY SIDE */}
        <div className="flex flex-col items-center md:items-start">
          <p className="eyebrow mb-4 text-text-tertiary">Drawn</p>
          <div
            className="relative"
            style={{ width: 280, height: 392 }}
            aria-live="polite"
          >
            {drawnCard ? (
              <div
                key={flipKey}
                className="absolute inset-0 card-flip-in"
                style={{ transformStyle: "preserve-3d" }}
              >
                <CardFront card={drawnCard} />
                <span className="card-shimmer" aria-hidden="true" />
              </div>
            ) : (
              <EmptyDrawSlot />
            )}
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
      {/* Top-left index */}
      <div
        className="absolute top-3 left-3 flex flex-col items-center leading-none"
        style={{ color: "#6B5CFF" }}
      >
        <span className="text-2xl font-bold tabular-nums">{card.rank}</span>
      </div>
      <div className="absolute top-3.5 left-9 text-[#6B5CFF] text-lg leading-none">
        {SPADE}
      </div>

      {/* Top-right index */}
      <div
        className="absolute top-3 right-3 flex flex-col items-center leading-none"
        style={{ color: "#ffffff" }}
      >
        <span className="text-2xl font-bold tabular-nums">{card.rank}</span>
      </div>

      {/* Bottom-left rotated index */}
      <div
        className="absolute bottom-3 left-3 leading-none"
        style={{ color: "#ffffff", transform: "rotate(180deg)" }}
      >
        <span className="text-2xl font-bold tabular-nums">{card.rank}</span>
      </div>

      {/* Bottom-right rotated spade */}
      <div
        className="absolute bottom-3 right-3 text-[#6B5CFF] text-lg leading-none"
        style={{ transform: "rotate(180deg)" }}
      >
        {SPADE}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
        <p
          className="font-mono text-[10px] tracking-[0.18em] uppercase mb-4"
          style={{ color: "#6B5CFF" }}
        >
          {card.eyebrow}
        </p>
        <h3 className="text-xl md:text-[22px] font-bold text-white leading-[1.2] tracking-tight mb-5 text-balance">
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
      {/* Decorative back pattern: large center spade + corner ornaments */}
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
      {/* Faint border ring */}
      <div
        className="absolute inset-3 rounded-xl pointer-events-none"
        style={{ border: "1px solid rgba(107, 92, 255, 0.15)" }}
      />
    </div>
  );
}

function EmptyDeckSlot() {
  return (
    <div
      className="h-full w-full rounded-2xl border border-dashed flex items-center justify-center"
      style={{ borderColor: "rgba(107, 92, 255, 0.20)" }}
    >
      <p className="text-xs text-text-tertiary">Deck empty</p>
    </div>
  );
}

function EmptyDrawSlot() {
  return (
    <div
      className="h-full w-full rounded-2xl border border-dashed flex items-center justify-center"
      style={{ borderColor: "rgba(107, 92, 255, 0.15)" }}
    >
      <p className="text-xs text-text-tertiary px-6 text-center">
        Click <span className="text-text-secondary">Draw a card</span> to begin
      </p>
    </div>
  );
}

/* -------------------- Animations -------------------- */

const shimmerCSS = `
@keyframes deckBob {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-3px); }
}
.deck-bob {
  animation: deckBob 4.2s ease-in-out infinite;
}

@keyframes cardFlipIn {
  0%   { transform: translateY(-40px) rotateY(180deg) scale(0.92); opacity: 0; }
  40%  { opacity: 1; }
  100% { transform: translateY(0) rotateY(0deg) scale(1); opacity: 1; }
}
.card-flip-in {
  animation: cardFlipIn 900ms cubic-bezier(0.22, 1, 0.36, 1) both;
  backface-visibility: hidden;
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
  width: 45%; height: 100%;
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
  .card-flip-in,
  .card-shimmer {
    animation: none !important;
  }
}
`;
