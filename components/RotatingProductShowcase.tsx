"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ShowcaseItem {
  src: string;
  alt: string;
  label: string;
}

interface RotatingProductShowcaseProps {
  items: ShowcaseItem[];
  intervalMs?: number;
  /** Aspect ratio as W/H, e.g. 1000/760 for landscape product shots */
  aspectRatio?: string;
}

export function RotatingProductShowcase({
  items,
  intervalMs = 4500,
  aspectRatio = "1000 / 760",
}: RotatingProductShowcaseProps) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || items.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [items.length, intervalMs, isPaused]);

  return (
    <div
      className="w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Image stage with atmospheric cloud */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "640px",
          margin: "0 auto",
          aspectRatio,
        }}
      >
        {/* Brand-purple atmospheric cloud, sized larger than the image to bleed out */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-8%",
            right: "-8%",
            top: "-8%",
            bottom: "-8%",
            background:
              "radial-gradient(ellipse at center, rgba(107, 92, 255, 0.40) 0%, rgba(79, 70, 229, 0.22) 35%, rgba(232, 121, 249, 0.10) 65%, transparent 100%)",
            filter: "blur(40px)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        {/* Stacked images, cross-faded */}
        {items.map((item, i) => (
          <div
            key={item.src}
            aria-hidden={i !== index}
            style={{
              position: "absolute",
              inset: 0,
              opacity: i === index ? 1 : 0,
              transition: "opacity 700ms ease-in-out",
              borderRadius: "10px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow:
                "0 14px 32px -8px rgba(0,0,0,0.5), 0 28px 56px -14px rgba(0,0,0,0.55)",
              zIndex: i === index ? 2 : 1,
              pointerEvents: i === index ? "auto" : "none",
            }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 1024px) 640px, 90vw"
              style={{ objectFit: "cover", objectPosition: "top" }}
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Caption + dot indicators */}
      <div
        style={{
          textAlign: "center",
          marginTop: "1.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <div
          className="metadata-label"
          style={{
            minHeight: "1.25rem",
            transition: "opacity 400ms",
          }}
          aria-live="polite"
        >
          {items[index].label}
        </div>
        <div
          role="tablist"
          aria-label="Product showcase navigation"
          style={{ display: "flex", justifyContent: "center", gap: "10px" }}
        >
          {items.map((item, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show ${item.label}`}
              onClick={() => setIndex(i)}
              style={{
                width: i === index ? "28px" : "8px",
                height: "8px",
                borderRadius: "999px",
                background:
                  i === index ? "#A798FF" : "rgba(255,255,255,0.25)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 300ms ease",
                outline: "none",
              }}
            />
          ))}
        </div>
        {!isPaused && (
          <div
            style={{
              fontSize: "0.7rem",
              color: "rgba(255,255,255,0.4)",
              fontFamily: "var(--font-geist-mono, monospace)",
              letterSpacing: "0.05em",
            }}
          >
            HOVER TO PAUSE
          </div>
        )}
        {isPaused && (
          <div
            style={{
              fontSize: "0.7rem",
              color: "rgba(167,152,255,0.7)",
              fontFamily: "var(--font-geist-mono, monospace)",
              letterSpacing: "0.05em",
            }}
          >
            PAUSED
          </div>
        )}
      </div>
    </div>
  );
}
