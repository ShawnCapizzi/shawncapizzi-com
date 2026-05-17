"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * PortraitHero — interactive portrait composition.
 *
 * Renders inside Hero.tsx's existing masked aspect-square container, so the
 * surrounding radial mask dissolves the orbital sphere edges into the page bg.
 *
 * Composition (z-stacked, back to front):
 *   1. Radial navy gradient bg (lift behind head → near-black at corners)
 *   2. Lavender halo glow behind head
 *   3. Generative orbital sphere (12 ellipses, slow rotation, light purple)
 *   4. Knockout portrait with alpha
 *   5. Subtle film-grain overlay
 *
 * Interactivity (desktop, non-reduced-motion only):
 *   - Cursor parallax: sphere drifts against cursor (~12px), portrait drifts
 *     with cursor (~3px) — reads as depth
 *   - Hover boost: halo intensifies from 0.20 → 0.32
 *   - Continuous slow rotation: 147s/turn
 *
 * Tuning: edit the CSS custom properties at the top of the .ph-card rule.
 */

interface PortraitHeroProps {
  src?: string;
  alt?: string;
}

const SPHERE_R = 160;
const LINE_COUNT = 12;

export function PortraitHero({
  src = "/images/brand/headshot-2026-alpha.png",
  alt = "Shawn Capizzi",
}: PortraitHeroProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const sphereWrapRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  // Cursor parallax — desktop, non-touch, non-reduced-motion only.
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touch = window.matchMedia("(hover: none)").matches;
    if (reduced || touch) return;

    const card = cardRef.current;
    const wrap = sphereWrapRef.current;
    const portrait = portraitRef.current;
    if (!card || !wrap || !portrait) return;

    let raf = 0;
    let tx = 0, ty = 0, px = 0, py = 0;

    const apply = () => {
      wrap.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      portrait.style.transform = `translateX(-50%) translate(${px}px, ${py}px)`;
      raf = 0;
    };

    const onMove = (e: MouseEvent) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      tx = -x * 12;
      ty = -y * 9;
      px = x * 3;
      py = y * 2.5;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    const onLeave = () => {
      tx = ty = px = py = 0;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Generate sphere ellipses declaratively (styled-jsx scoping needs JSX-rendered children).
  const ellipses = Array.from({ length: LINE_COUNT }, (_, i) => {
    const t = i / LINE_COUNT;
    const rotDeg = t * 180;
    const ry = SPHERE_R * Math.abs(Math.sin(t * Math.PI + Math.PI / 2));
    return { rx: SPHERE_R, ry: ry * 0.55 + 8, rot: rotDeg };
  });

  return (
    <div ref={cardRef} className="ph-card">
      <div className="ph-halo" />

      <div ref={sphereWrapRef} className="ph-sphere-wrap">
        <svg
          className="ph-sphere"
          viewBox="-200 -200 400 400"
          aria-hidden="true"
        >
          <defs>
            <filter id="ph-bloom" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation={14} />
            </filter>
          </defs>
          <g filter="url(#ph-bloom)">
            {ellipses.map((e, i) => (
              <ellipse
                key={i}
                cx={0}
                cy={0}
                rx={e.rx}
                ry={e.ry}
                transform={`rotate(${e.rot})`}
              />
            ))}
          </g>
        </svg>
      </div>

      <div ref={portraitRef} className="ph-portrait-wrap">
        <Image
          src={src}
          alt={alt}
          width={1260}
          height={1500}
          priority
          sizes="(max-width: 640px) 70vw, (max-width: 1024px) 60vw, 36vw"
          className="ph-portrait-img"
        />
      </div>

      <style jsx>{`
        .ph-card {
          /* === Dialed-in tuning tokens — edit here === */
          --bg-lift: #1a2360;
          --bg-mid: #000009;
          --bg-deep: #000000;
          --glow-core: #c4b5fd;
          --glow-halo: #c4b5fd;
          --line-opacity: 0.1;
          --halo-strength: 0.2;
          --rotate-dur: 147s;

          position: absolute;
          inset: 0;
          overflow: hidden;
          background: radial-gradient(
            ellipse 60% 55% at 50% 42%,
            var(--bg-lift) 0%,
            var(--bg-mid) 50%,
            var(--bg-deep) 100%
          );
          isolation: isolate;
        }

        /* film grain overlay */
        .ph-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
            rgba(255, 255, 255, 0.025) 1px,
            transparent 1px
          );
          background-size: 3px 3px;
          mix-blend-mode: overlay;
          pointer-events: none;
          z-index: 5;
        }

        /* halo glow behind head */
        .ph-halo {
          position: absolute;
          left: 50%;
          top: 38%;
          width: 80%;
          aspect-ratio: 1;
          transform: translate(-50%, -50%);
          background: radial-gradient(
            circle,
            color-mix(
              in srgb,
              var(--glow-halo) calc(var(--halo-strength) * 100%),
              transparent
            )
              0%,
            transparent 65%
          );
          filter: blur(20px);
          z-index: 1;
          pointer-events: none;
          transition: opacity 320ms ease;
        }

        .ph-sphere-wrap {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          pointer-events: none;
          transform: translate3d(0, 0, 0);
          transition: transform 280ms cubic-bezier(0.2, 0.7, 0.2, 1);
          will-change: transform;
        }

        .ph-sphere {
          width: 86%;
          aspect-ratio: 1;
          animation: ph-orbit var(--rotate-dur) linear infinite;
          filter: drop-shadow(0 0 18px rgba(167, 139, 250, 0.18));
        }

        .ph-sphere :global(ellipse) {
          fill: none;
          stroke: var(--glow-core);
          stroke-width: 1;
          stroke-opacity: var(--line-opacity);
        }

        @keyframes ph-orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .ph-portrait-wrap {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 96%;
          z-index: 4;
          filter: drop-shadow(0 18px 28px rgba(0, 0, 0, 0.35));
          transition: transform 280ms cubic-bezier(0.2, 0.7, 0.2, 1);
          will-change: transform;
          user-select: none;
          -webkit-user-select: none;
        }

        .ph-portrait-wrap :global(img) {
          height: 100%;
          width: auto;
          object-fit: contain;
        }

        /* hover boost */
        .ph-card:hover .ph-halo {
          --halo-strength: 0.32;
        }
        .ph-card:hover .ph-sphere {
          filter: drop-shadow(0 0 24px rgba(167, 139, 250, 0.32));
        }

        @media (prefers-reduced-motion: reduce) {
          .ph-sphere {
            animation: none;
          }
          .ph-sphere-wrap,
          .ph-portrait-wrap {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}
