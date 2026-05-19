"use client";

import Image from "next/image";

// ---------------------------------------------------------------------------
// TYPES
// ---------------------------------------------------------------------------

export interface BrandTile {
  src: string;
  alt: string;
  /** Small caption shown below the tile, e.g. "Neurology · Brand A" */
  label: string;
}

export interface FragmentationGridProps {
  /** Exactly 3 real brand UI screenshots — the "anchors" of the grid. */
  brandTiles: [BrandTile, BrandTile, BrandTile];
  /** Headline shown above the strip of abstract tiles. Defaults to "+ 12 more brands". */
  abstractStripLabel?: string;
}

// ---------------------------------------------------------------------------
// COMPONENT
// ---------------------------------------------------------------------------
//
// Visual story: three real brand screenshots above a strip of 12 muted color
// tiles + a "growing" indicator. Demonstrates "15+ systems pretending to be
// one" — the 3 anchors show what brand fragmentation actually looks like
// (totally different visual languages, navigation, palettes), and the strip
// signals that this is the full enterprise scope, not just three examples.

// 12 muted-but-distinct palette swatches — restrained editorial colors that
// stay tonally cohesive with the site while signaling brand variety.
const ABSTRACT_PALETTE: { color: string; name: string }[] = [
  { color: "#3B5266", name: "deep teal-slate" },
  { color: "#6B5B82", name: "muted plum" },
  { color: "#8B6F47", name: "warm tan" },
  { color: "#4F6B5A", name: "sage" },
  { color: "#7A4848", name: "dusty rust" },
  { color: "#5C6B8C", name: "slate blue" },
  { color: "#8C6F5C", name: "warm earth" },
  { color: "#3F5C5C", name: "deep eucalyptus" },
  { color: "#7E6B4F", name: "antique gold" },
  { color: "#5A5872", name: "ash violet" },
  { color: "#6F7E5C", name: "olive" },
  { color: "#8A5A6B", name: "muted plum-rose" },
];

export function FragmentationGrid({
  brandTiles,
  abstractStripLabel = "+ 12 more brands · each with its own design language",
}: FragmentationGridProps) {
  return (
    <div className="fg" role="img" aria-label="Visualization of 15+ fragmented pharma brand systems">
      <style jsx>{`
        .fg {
          --fg-bg: var(--bg, #faf8f4);
          --fg-ink: var(--ink, #111111);
          --fg-muted: var(--muted, #6b6b6b);
          --fg-border: var(--border, #e5e1d8);
          --fg-paper: var(--paper, #ffffff);
          --fg-mono: var(
            --font-mono,
            "JetBrains Mono",
            ui-monospace,
            "SFMono-Regular",
            Menlo,
            monospace
          );

          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding: 1.5rem;
          background: var(--fg-paper);
          border: 1px solid var(--fg-border);
        }

        /* ---------- Anchor row: 3 real brand screenshots ---------- */
        .fg-anchors {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
        }
        @media (max-width: 640px) {
          .fg-anchors {
            grid-template-columns: 1fr;
          }
        }
        .fg-anchor {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .fg-anchor-image {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          background: #f5f3ee;
          border: 1px solid var(--fg-border);
          overflow: hidden;
        }
        .fg-anchor-label {
          font-family: var(--fg-mono);
          font-size: 10px;
          letter-spacing: 0.12em;
          color: var(--fg-muted);
          text-transform: uppercase;
        }

        /* ---------- Strip header: "+12 more" ---------- */
        .fg-strip-header {
          font-family: var(--fg-mono);
          font-size: 10px;
          letter-spacing: 0.14em;
          color: var(--fg-muted);
          text-transform: uppercase;
          padding-top: 0.75rem;
          border-top: 1px solid var(--fg-border);
        }

        /* ---------- Abstract strip: 12 muted tiles + 1 "growing" indicator ---------- */
        .fg-strip {
          display: grid;
          grid-template-columns: repeat(13, 1fr);
          gap: 0.4rem;
        }
        @media (max-width: 640px) {
          .fg-strip {
            grid-template-columns: repeat(7, 1fr);
          }
        }
        .fg-tile {
          aspect-ratio: 4 / 5;
          border-radius: 1px;
          position: relative;
          overflow: hidden;
          /* Subtle gradient + inner shadow for paper-on-paper depth */
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.06),
            inset 0 -8px 12px -8px rgba(0, 0, 0, 0.2),
            0 1px 2px rgba(0, 0, 0, 0.04);
        }
        .fg-tile::after {
          /* Tiny "UI header" hint at the top of each tile — implies "this is a brand UI" */
          content: "";
          position: absolute;
          top: 12%;
          left: 12%;
          right: 12%;
          height: 2px;
          background: rgba(255, 255, 255, 0.18);
          border-radius: 1px;
        }
        .fg-tile-growing {
          background: var(--fg-paper) !important;
          border: 1px dashed var(--fg-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: none;
        }
        .fg-tile-growing::after {
          display: none;
        }
        .fg-tile-growing span {
          font-family: var(--fg-mono);
          font-size: 14px;
          font-weight: 500;
          color: var(--fg-muted);
        }
      `}</style>

      {/* ── Three anchor screenshots ── */}
      <div className="fg-anchors">
        {brandTiles.map((tile, i) => (
          <div key={i} className="fg-anchor">
            <div className="fg-anchor-image">
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 90vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <div className="fg-anchor-label">{tile.label}</div>
          </div>
        ))}
      </div>

      {/* ── Strip label ── */}
      <div className="fg-strip-header">{abstractStripLabel}</div>

      {/* ── 12 abstract tiles + 1 growing indicator ── */}
      <div className="fg-strip" aria-hidden="true">
        {ABSTRACT_PALETTE.map((swatch, i) => (
          <div
            key={i}
            className="fg-tile"
            style={{ background: swatch.color }}
            title={swatch.name}
          />
        ))}
        <div className="fg-tile fg-tile-growing" title="and growing">
          <span>+</span>
        </div>
      </div>
    </div>
  );
}
