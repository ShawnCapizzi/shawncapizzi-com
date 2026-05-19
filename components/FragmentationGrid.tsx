"use client";

import Image from "next/image";

// ---------------------------------------------------------------------------
// TYPES
// ---------------------------------------------------------------------------

export interface BrandTile {
  src: string;
  alt: string;
  label: string;
}

export interface FragmentationGridProps {
  brandTiles: [BrandTile, BrandTile, BrandTile];
  abstractStripLabel?: string;
}

// ---------------------------------------------------------------------------
// COMPONENT
// ---------------------------------------------------------------------------
//
// Three real brand UIs (anchors) sit above a strip of 12 muted color tiles
// + a growing indicator. Visualizes "15+ systems pretending to be one" —
// the 3 anchors show what brand fragmentation looks like (different visual
// languages, palettes, navigation), the strip signals enterprise scope.

// 12 muted, distinct brand-color swatches. Each represents a hypothetical
// brand's palette. They're tonally cohesive with the dark navy site but
// distinct enough from one another to communicate "many brands, many systems."
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
    <div
      className="w-full flex flex-col gap-5 p-6 card-surface border border-border-default rounded-xl"
      role="img"
      aria-label="Visualization of 15+ fragmented pharma brand systems"
    >
      {/* Anchor row: 3 real brand screenshots */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {brandTiles.map((tile, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="relative w-full aspect-[4/3] bg-bg-elevated border border-border-default rounded-md overflow-hidden">
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 90vw"
                className="object-cover object-center"
              />
            </div>
            <p className="metadata-label">{tile.label}</p>
          </div>
        ))}
      </div>

      {/* Strip header */}
      <p className="pt-3 border-t border-border-subtle metadata-label">
        {abstractStripLabel}
      </p>

      {/* 12 muted brand-color tiles + 1 "and growing" indicator */}
      <div
        className="grid grid-cols-7 sm:grid-cols-13 gap-1.5"
        aria-hidden="true"
        style={{ gridTemplateColumns: "repeat(13, minmax(0, 1fr))" }}
      >
        {ABSTRACT_PALETTE.map((swatch, i) => (
          <div
            key={i}
            className="aspect-[4/5] rounded-sm relative overflow-hidden shadow-sm"
            style={{ background: swatch.color }}
            title={swatch.name}
          >
            {/* Faint inner highlight line — implies "this is a UI" */}
            <span
              aria-hidden="true"
              className="absolute top-[12%] left-[12%] right-[12%] h-[2px] rounded-sm"
              style={{ background: "rgba(255,255,255,0.18)" }}
            />
          </div>
        ))}
        {/* "+" growing indicator */}
        <div
          className="aspect-[4/5] rounded-sm border border-dashed border-border-strong flex items-center justify-center"
          title="and growing"
        >
          <span className="font-mono text-sm font-medium text-text-tertiary">
            +
          </span>
        </div>
      </div>
    </div>
  );
}
