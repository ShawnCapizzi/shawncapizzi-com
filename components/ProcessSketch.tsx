"use client";

import { useEffect, useId, useMemo, useRef, useState, type CSSProperties } from "react";

/**
 * ProcessSketch: the hand-drawn sketch for one station of the Capizzi
 * Process, shown on /thinking beside the station chips (October 2026). It
 * replaced the ring diagram.
 *
 * The drawings use Shawn's bulb language: boxes are raw material, lines are
 * the work of connecting it, and a bulb is an idea. Boxes are flat and
 * straight, nudged off line from their neighbors, with short gray ticks on
 * the right and bottom edges for depth; the ticks sway slowly, as if in a
 * light breeze, while a purple tint travels up and down them. Bulbs keep a sketched base and fill
 * with purple hatching that runs from a deep purple on the top line to the
 * brand purple on the bottom line.
 *
 * Motion: the first sketch draws itself when it scrolls into view. Choosing
 * another station draws the new one, stroke by stroke. Every stroke has
 * pathLength 1, so a CSS animation in globals.css (".process-sketch") can
 * draw it with a dash offset from 1 to 0, staggered by --k. With reduced
 * motion, the sketch appears whole.
 *
 * Geometry is generated from fixed seeds, so the server and the browser
 * produce the same paths. To change a drawing, edit GLYPHS below; the
 * viewBox is 200 by 130.
 */

type Hatch = { lines: string[]; clip: [number, number, number, number] };
type Stroke = { d: string };
type Shade = { ticks: string[] };
type Item = string | Stroke | Hatch | Shade;

const ALT = [
  "Three loose squares: the raw inputs, gathered but not yet filtered.",
  "Three stacked squares, nudged left and right, each with a pair of short lines beside it: questions going back and forth.",
  "Three stacked squares with lines leading into one light bulb.",
  "Two framed cards, each holding a light bulb: two options side by side.",
  "One framed bulb with lines out to three small bulbs: the signals to watch.",
  "One large, filled light bulb.",
];

function rng(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
type R = () => number;

const f = (n: number) => Math.round(n * 10) / 10;

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

/** One loose hand stroke, slightly bowed, ends a little past their marks. */
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
function rect(r: R, x: number, y: number, w: number, h: number): Stroke {
  const P = [[x, y], [x + w, y], [x + w, y + h], [x, y + h]];
  const bow = (p1: number[], p2: number[]) => {
    const len = Math.hypot(p2[0] - p1[0], p2[1] - p1[1]);
    const b = (r() - 0.5) * Math.min(1.4, len * 0.02);
    const ux = (p2[0] - p1[0]) / len;
    const uy = (p2[1] - p1[1]) / len;
    return `Q${f((p1[0] + p2[0]) / 2 - uy * b)},${f((p1[1] + p2[1]) / 2 + ux * b)} ${f(p2[0])},${f(p2[1])}`;
  };
  return { d: `M${x},${y}${bow(P[0], P[1])}${bow(P[1], P[2])}${bow(P[2], P[3])}${bow(P[3], P[0])}Z` };
}

/** A box plus its shade: short gray ticks just off the right and bottom
 *  edges. Ticks run down the right edge, then back along the bottom, so the
 *  breeze in the CSS travels around the corner as one wave. */
function box(r: R, x: number, y: number, w: number, h: number): Item[] {
  const right: string[] = [];
  const bottom: string[] = [];
  for (let t = y + 5; t <= y + h + 3; t += 5) right.push(`M${f(x + w + 2.5)},${f(t + 2)}L${f(x + w + 5.5)},${f(t - 1)}`);
  for (let t = x + 5; t <= x + w + 3; t += 5) bottom.push(`M${f(t - 1)},${f(y + h + 5.5)}L${f(t + 2)},${f(y + h + 2.5)}`);
  return [rect(r, x, y, w, h), { ticks: [...right, ...bottom.reverse()] }];
}

/** The bulb base keeps its sketched, overlapping strokes. */
function sketchRect(r: R, x: number, y: number, w: number, h: number) {
  return [stroke(r, x, y, x + w, y), stroke(r, x + w, y, x + w, y + h), stroke(r, x + w, y + h, x, y + h), stroke(r, x, y + h, x, y)];
}

function bulb(r: R, cx: number, cy: number, R0: number): Item[] {
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
  const lines: string[] = [];
  for (let o = -reach + gap * 0.6; o < reach; o += gap) {
    const x0 = cx - 1.3 * R0 + o;
    lines.push(`M${f(x0)},${f(cy + 1.3 * R0)}L${f(x0 + 2.6 * R0)},${f(cy - 1.3 * R0)}`);
  }
  return [
    { lines, clip: [cx, cy, rx, ry] },
    curve(pts),
    stroke(r, cx - nx, ny, cx - nx, yb),
    stroke(r, cx + nx, ny, cx + nx, yb),
    ...sketchRect(r, cx - 0.46 * R0, yb, 0.92 * R0, 0.55 * R0),
    `M${zig.join("L")}`,
  ];
}

/** A short, nearly level dash, for the paired lines beside the Questions
 *  squares. Ends sit within about half a unit of their marks. */
function dash(r: R, x1: number, x2: number, y: number) {
  const a = x1 + (r() - 0.5) * 1.2;
  const b = x2 + (r() - 0.5) * 1.2;
  const y1 = y + (r() - 0.5) * 0.8;
  const y2 = y + (r() - 0.5) * 0.8;
  const bow = (r() - 0.5) * 0.8;
  return `M${f(a)},${f(y1)}Q${f((a + b) / 2)},${f((y1 + y2) / 2 + bow)} ${f(b)},${f(y2)}`;
}

/** Three squares, stacked with room between them and nudged off line. */
function stack(r: R, x: number): Item[] {
  return [...box(r, x + 2, 4, 30, 30), ...box(r, x + 8, 49, 30, 30), ...box(r, x, 93, 30, 30)];
}

const GLYPHS: ((r: R) => Item[])[] = [
  // 1 Inputs: loose squares, gathered but not yet filtered
  // Sizes vary on purpose: upper left 50, upper right 8% larger, lower 5%
  // smaller, each grown or shrunk around its own center.
  (r) => [...box(r, 26, 10, 50, 50), ...box(r, 106.1, 2.1, 51.8, 51.8), ...box(r, 69.2, 75.2, 45.6, 45.6)],
  // 2 Questions: from Shawn's sketch. Three squares stepping left, right,
  // left, each with a pair of short lines on its open side, like questions
  // going back and forth. The whole group is centered on x = 100.
  (r) => [
    ...box(r, 74, 4, 30, 30),
    dash(r, 113, 138, 15),
    dash(r, 113, 129, 22),
    ...box(r, 90, 49, 30, 30),
    dash(r, 72, 86, 59),
    dash(r, 62, 86, 66),
    ...box(r, 76, 93, 30, 30),
    dash(r, 114, 138, 104),
    dash(r, 114, 124, 109),
  ],
  // 3 Findings: the inputs become one idea
  (r) => [...stack(r, 10), stroke(r, 54, 22, 112, 52), stroke(r, 60, 64, 114, 64), stroke(r, 52, 106, 112, 76), ...bulb(r, 152, 48, 26)],
  // 4 Activation: two options, side by side
  // The left frame is 5% shorter than the right, so the two never match.
  (r) => [...box(r, 22, 8, 72, 104.5), ...box(r, 106, 11, 72, 110), ...bulb(r, 58, 50, 18), ...bulb(r, 142, 53, 18)],
  // 5 Measurement: one decision, a few signals to watch
  (r) => [
    ...box(r, 14, 30, 64, 64),
    ...bulb(r, 46, 54, 13),
    stroke(r, 86, 42, 128, 18),
    stroke(r, 86, 62, 128, 60),
    stroke(r, 86, 82, 128, 104),
    ...bulb(r, 148, 16, 10),
    ...bulb(r, 148, 59, 10),
    ...bulb(r, 148, 102, 10),
  ],
  // 6 Summary: one bulb, filled
  (r) => bulb(r, 100, 50, 40),
];

/* Hatch color: a deep purple on the top line to the brand purple (#6B5CFF)
   on the bottom line. */
const DARK = [37, 34, 112];
const LIGHT = [107, 92, 255];
const mix = (t: number) => `rgb(${DARK.map((v, j) => Math.round(v + (LIGHT[j] - v) * t)).join(",")})`;

type K = CSSProperties & { "--k": number; "--w"?: number };

function Glyph({ index, prefix }: { index: number; prefix: string }) {
  const items = useMemo(() => GLYPHS[index](rng(31 + index * 17)), [index]);
  let order = 0;
  return (
    <>
      {items.map((item, k) => {
        if (typeof item !== "string" && "lines" in item) {
          const id = `${prefix}-${index}-${k}`;
          const last = item.lines.length - 1;
          const base = order + 1;
          return (
            <g key={k}>
              <clipPath id={id}>
                <ellipse cx={f(item.clip[0])} cy={f(item.clip[1])} rx={f(item.clip[2])} ry={f(item.clip[3])} />
              </clipPath>
              <g clipPath={`url(#${id})`}>
                {item.lines.map((d, j) => (
                  <path
                    key={j}
                    d={d}
                    pathLength={1}
                    className="hatch"
                    style={{ stroke: mix(last > 0 ? j / last : 1), "--k": base + j * 0.35 } as K}
                  />
                ))}
              </g>
            </g>
          );
        }
        if (typeof item !== "string" && "ticks" in item) {
          const kk = order + 1;
          return (
            <g key={k}>
              {item.ticks.map((d, j) => (
                <path key={j} d={d} pathLength={1} className="shade" style={{ "--k": kk, "--w": j } as K} />
              ))}
            </g>
          );
        }
        const d = typeof item === "string" ? item : item.d;
        return <path key={k} d={d} pathLength={1} style={{ "--k": order++ } as K} />;
      })}
    </>
  );
}

export function ProcessSketch({ index, name }: { index: number; name: string }) {
  const prefix = useId().replace(/:/g, "");
  const ref = useRef<SVGSVGElement>(null);
  const [on, setOn] = useState(false);

  // The sketch waits, undrawn, until it scrolls into view. After that, each
  // new station remounts the drawing (keyed by index), which replays it.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      const raf = requestAnimationFrame(() => setOn(true));
      return () => cancelAnimationFrame(raf);
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          setOn(true);
        }
      },
      { threshold: 0.45 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 200 130"
      role="img"
      aria-label={`${name}: ${ALT[index]}`}
      className={`process-sketch block w-full max-w-[440px] lg:max-w-[520px] h-auto aspect-[200/130] overflow-visible${on ? " is-on" : ""}`}
    >
      <Glyph key={index} index={index} prefix={prefix} />
    </svg>
  );
}
