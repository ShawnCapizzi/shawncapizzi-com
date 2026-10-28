"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

/**
 * WaysSketch: the small hand-drawn mark at the top of each card in the "A few
 * ways I can help" section on /how-i-help (October 2026).
 *
 * It uses Shawn's bulb language from the Capizzi Process on /thinking: a box
 * is raw material, lines are the work of connecting it, a bulb is an idea,
 * and the purple ticks on a box's right and bottom edges are its shade. The
 * six ways split into the Process's three principles, two each, and each
 * principle has its own drawing with its own payoff when the card scrolls
 * into view. No hover (Shawn does not want hover triggers).
 *
 *   listen   Loose input boxes sit there; the question dashes draw in.
 *   visible  A box sits there; lines draw out and a bulb lights.
 *   prove    A framed, lit bulb sits there; lines draw out and three small
 *            signal bulbs light.
 *
 * The geometry helpers below are a trimmed copy of components/ProcessSketch.tsx
 * (box, shade ticks, dash, line, and bulb), kept local on purpose so the full
 * process drawing stays untouched. Paths are generated from a fixed seed, so
 * the server and the browser produce the same markup and there is no
 * hydration mismatch; only the "is-lit" class is added on the client.
 *
 * Motion lives in app/globals.css (.ways-sketch), which draws each "draw" and
 * "hatch" stroke by running a dash offset from 1 to 0, staggered by --k. The
 * shade ticks here are static (the sway and tint stay on /thinking). Reduced
 * motion shows every sketch already lit.
 */

export type WaysKind = "listen" | "visible" | "prove";

const f = (n: number) => Math.round(n * 10) / 10;

type R = () => number;

function rng(seed: number): R {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function curve(pts: number[][]) {
  let d = `M${f(pts[0][0])},${f(pts[0][1])}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    d +=
      `C${f(p1[0] + (p2[0] - p0[0]) / 6)},${f(p1[1] + (p2[1] - p0[1]) / 6)} ` +
      `${f(p2[0] - (p3[0] - p1[0]) / 6)},${f(p2[1] - (p3[1] - p1[1]) / 6)} ` +
      `${f(p2[0])},${f(p2[1])}`;
  }
  return d;
}

function stroke(r: R, x1: number, y1: number, x2: number, y2: number) {
  const len = Math.hypot(x2 - x1, y2 - y1) || 1;
  const ux = (x2 - x1) / len;
  const uy = (y2 - y1) / len;
  const o1 = r() * 4;
  const o2 = r() * 4;
  const a = [x1 - ux * o1 + (r() - 0.5) * 1.4, y1 - uy * o1 + (r() - 0.5) * 1.4];
  const b = [x2 + ux * o2 + (r() - 0.5) * 1.4, y2 + uy * o2 + (r() - 0.5) * 1.4];
  const bow = (r() - 0.5) * Math.min(4, len * 0.05);
  const m = [(a[0] + b[0]) / 2 - uy * bow, (a[1] + b[1]) / 2 + ux * bow];
  return `M${f(a[0])},${f(a[1])}Q${f(m[0])},${f(m[1])} ${f(b[0])},${f(b[1])}`;
}

/** A box whose corners meet exactly; each edge carries only a faint bow. */
function rect(r: R, x: number, y: number, w: number, h: number) {
  const P = [[x, y], [x + w, y], [x + w, y + h], [x, y + h]];
  const bow = (p1: number[], p2: number[]) => {
    const len = Math.hypot(p2[0] - p1[0], p2[1] - p1[1]);
    const b = (r() - 0.5) * Math.min(1.4, len * 0.02);
    const ux = (p2[0] - p1[0]) / len;
    const uy = (p2[1] - p1[1]) / len;
    return `Q${f((p1[0] + p2[0]) / 2 - uy * b)},${f((p1[1] + p2[1]) / 2 + ux * b)} ${f(p2[0])},${f(p2[1])}`;
  };
  return `M${x},${y}${bow(P[0], P[1])}${bow(P[1], P[2])}${bow(P[2], P[3])}${bow(P[3], P[0])}Z`;
}

/** A box plus its shade: short purple ticks just off the right and bottom edges. */
function box(r: R, x: number, y: number, w: number, h: number) {
  const ticks: string[] = [];
  const bottom: string[] = [];
  for (let t = y + 5; t <= y + h + 3; t += 5) ticks.push(`M${f(x + w + 2.5)},${f(t + 2)}L${f(x + w + 5.5)},${f(t - 1)}`);
  for (let t = x + 5; t <= x + w + 3; t += 5) bottom.push(`M${f(t - 1)},${f(y + h + 5.5)}L${f(t + 2)},${f(y + h + 2.5)}`);
  return { rect: rect(r, x, y, w, h), ticks: [...ticks, ...bottom.reverse()] };
}

/** A short, nearly level dash: a question going back and forth. */
function dash(r: R, x1: number, x2: number, y: number) {
  const a = x1 + (r() - 0.5) * 1.2;
  const b = x2 + (r() - 0.5) * 1.2;
  const y1 = y + (r() - 0.5) * 0.8;
  const y2 = y + (r() - 0.5) * 0.8;
  const bow = (r() - 0.5) * 0.8;
  return `M${f(a)},${f(y1)}Q${f((a + b) / 2)},${f((y1 + y2) / 2 + bow)} ${f(b)},${f(y2)}`;
}

function sketchRect(r: R, x: number, y: number, w: number, h: number) {
  return [
    stroke(r, x, y, x + w, y),
    stroke(r, x + w, y, x + w, y + h),
    stroke(r, x + w, y + h, x, y + h),
    stroke(r, x, y + h, x, y),
  ];
}

type Bulb = { strokes: string[]; hatch: string[]; clip: [number, number, number, number] };

/** Bulb: the sketched base plus purple hatch fill clipped to an ellipse. */
function bulb(r: R, cx: number, cy: number, R0: number): Bulb {
  const pts: number[][] = [];
  for (let a = 115; a < 425; a += 10) {
    const rad = (a * Math.PI) / 180;
    const k = 1 + (r() - 0.5) * 0.012;
    pts.push([cx + R0 * Math.cos(rad) * k, cy + R0 * 1.15 * Math.sin(rad) * k]);
  }
  const end = (425 * Math.PI) / 180;
  pts.push([cx + R0 * Math.cos(end), cy + R0 * 1.15 * Math.sin(end)]);
  const nx = R0 * 0.423;
  const ny = cy + R0 * 1.042;
  const yb = ny + R0 * 0.2;
  const zig = [
    [cx - 0.38 * R0, yb + 0.1 * R0],
    [cx + 0.38 * R0, yb + 0.2 * R0],
    [cx - 0.38 * R0, yb + 0.32 * R0],
    [cx + 0.38 * R0, yb + 0.44 * R0],
  ].map((p) => `${f(p[0] + (r() - 0.5))},${f(p[1] + (r() - 0.5))}`);
  const rx = R0 * 0.94;
  const ry = R0 * 1.1;
  const reach = Math.hypot(rx, ry);
  const gap = Math.max(3.6, R0 * 0.2);
  const hatch: string[] = [];
  for (let o = -reach + gap * 0.6; o < reach; o += gap) {
    const x0 = cx - 1.3 * R0 + o;
    hatch.push(`M${f(x0)},${f(cy + 1.3 * R0)}L${f(x0 + 2.6 * R0)},${f(cy - 1.3 * R0)}`);
  }
  const strokes = [
    curve(pts),
    stroke(r, cx - nx, ny, cx - nx, yb),
    stroke(r, cx + nx, ny, cx + nx, yb),
    ...sketchRect(r, cx - 0.46 * R0, yb, 0.92 * R0, 0.55 * R0),
    `M${zig.join("L")}`,
  ];
  return { strokes, hatch, clip: [cx, cy, rx, ry] };
}

/* Hatch color: deep purple on the top line to brand purple on the bottom. */
const DARK = [37, 34, 112];
const LIGHT = [107, 92, 255];
const mix = (t: number) =>
  `rgb(${DARK.map((v, j) => Math.round(v + (LIGHT[j] - v) * t)).join(",")})`;

/* What one sketch is made of. "box" and "tick" are static; "draw" strokes
   draw in when lit. A bulb either sits lit from the start (draw: false) or
   draws and lights in (draw: true), with its strokes numbered from kstart. */
type Part = { d: string; cls: "box" | "tick" | "draw"; k?: number };
type BulbPart = Bulb & { draw: boolean; kstart: number };

function build(kind: WaysKind, seed: number) {
  const r = rng(seed);
  const parts: Part[] = [];
  const bulbs: BulbPart[] = [];
  let k = 0;
  const addBox = (b: ReturnType<typeof box>) => {
    parts.push({ d: b.rect, cls: "box" });
    b.ticks.forEach((d) => parts.push({ d, cls: "tick" }));
  };
  const addDraw = (d: string) => parts.push({ d, cls: "draw", k: k++ });
  const addBulb = (b: Bulb, draw: boolean) => {
    bulbs.push({ ...b, draw, kstart: k });
    if (draw) k += b.strokes.length;
  };

  if (kind === "listen") {
    addBox(box(r, 16, 22, 34, 34));
    addBox(box(r, 74, 8, 38, 38));
    addBox(box(r, 132, 26, 32, 32));
    [
      dash(r, 54, 70, 34),
      dash(r, 54, 66, 41),
      dash(r, 118, 130, 36),
      dash(r, 118, 128, 43),
      dash(r, 54, 70, 48),
      dash(r, 118, 130, 50),
    ].forEach(addDraw);
  } else if (kind === "visible") {
    addBox(box(r, 16, 30, 38, 38));
    [stroke(r, 60, 38, 120, 46), stroke(r, 60, 49, 118, 50), stroke(r, 60, 60, 120, 56)].forEach(addDraw);
    addBulb(bulb(r, 150, 40, 20), true);
  } else {
    addBox(box(r, 12, 12, 48, 52));
    addBulb(bulb(r, 36, 32, 14), false);
    [stroke(r, 66, 26, 112, 16), stroke(r, 66, 40, 112, 44), stroke(r, 66, 54, 112, 72)].forEach(addDraw);
    addBulb(bulb(r, 128, 16, 8), true);
    addBulb(bulb(r, 128, 45, 8), true);
    addBulb(bulb(r, 128, 74, 8), true);
  }
  return { parts, bulbs };
}

type K = CSSProperties & { "--k"?: number };

export function WaysSketch({ kind, seed }: { kind: WaysKind; seed: number }) {
  const { parts, bulbs } = useMemo(() => build(kind, seed), [kind, seed]);
  const ref = useRef<SVGSVGElement>(null);
  const [lit, setLit] = useState(false);

  // Light once when the sketch scrolls into view. No hover. If the browser
  // has no IntersectionObserver, light on the next frame.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      const raf = requestAnimationFrame(() => setLit(true));
      return () => cancelAnimationFrame(raf);
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          setLit(true);
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 200 96"
      aria-hidden="true"
      className={`ways-sketch${lit ? " is-lit" : ""}`}
    >
      {parts.map((p, i) =>
        p.cls === "draw" ? (
          <path key={`p${i}`} className="draw" d={p.d} pathLength={1} style={{ "--k": p.k } as K} />
        ) : (
          <path key={`p${i}`} className={p.cls} d={p.d} />
        ),
      )}
      {bulbs.map((b, bi) => {
        const clipId = `ws-${seed}-${bi}`;
        const last = b.hatch.length - 1;
        return (
          <g key={`b${bi}`}>
            {b.strokes.map((d, i) =>
              b.draw ? (
                <path key={`s${i}`} className="draw" d={d} pathLength={1} style={{ "--k": b.kstart + i } as K} />
              ) : (
                <path key={`s${i}`} className="box" d={d} />
              ),
            )}
            <clipPath id={clipId}>
              <ellipse cx={f(b.clip[0])} cy={f(b.clip[1])} rx={f(b.clip[2])} ry={f(b.clip[3])} />
            </clipPath>
            <g clipPath={`url(#${clipId})`}>
              {b.hatch.map((d, i) => {
                const color = mix(last > 0 ? i / last : 1);
                return b.draw ? (
                  <path key={`h${i}`} className="hatch" d={d} pathLength={1} style={{ stroke: color, "--k": i } as K} />
                ) : (
                  <path key={`h${i}`} className="hatchon" d={d} style={{ stroke: color }} />
                );
              })}
            </g>
          </g>
        );
      })}
    </svg>
  );
}
