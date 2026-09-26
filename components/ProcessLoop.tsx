"use client";

import { useState } from "react";

/**
 * ProcessLoop: the Capizzi Process as one interactive diagram.
 *
 * Three moves, six stations, one loop. Ported from the standalone Process
 * site (capizzi-process-site-v2) and rewired to this site's tokens. The
 * station copy is the Process Handbook's, unchanged.
 *
 * This is deliberately the condensed form. The full method (exit tests,
 * failure modes, the ten standards, the field version) is the printed
 * manual, which /thinking offers by email. The diagram gives a visitor the
 * shape of the system in ninety seconds and a reason to want the rest.
 *
 * Geometry: stations sit on a circle at 60° increments starting at 12
 * o'clock. Each move owns two adjacent stations and an arc between them.
 * The arrowhead at the top marks the return from station 6 to station 1,
 * because the whole point is that it loops.
 *
 * Motion is limited to the selected-state swap, which is user-initiated.
 * Reduced motion is respected via the motion-reduce utilities.
 */

type Station = {
  n: number;
  name: string;
  move: string;
  job: string;
  line: string;
  feeds: string[];
};

const MOVES = ["Listen first", "Make it visible", "Prove it worked"] as const;

const STATIONS: Station[] = [
  {
    n: 1,
    name: "Inputs",
    move: MOVES[0],
    job: "Gather the reality of the problem before filtering or deciding. Briefs, analytics, stakeholder comments, constraints, and past decisions all count. Filtering is a decision; do not filter too early.",
    line: "Inputs that live in one person's head are not inputs. They are risks.",
    feeds: [
      "A shared input log with source, evidence level, and open questions",
      "A stakeholder map: who says yes, who lives with it, who can quietly kill it",
    ],
  },
  {
    n: 2,
    name: "Questions",
    move: MOVES[0],
    job: "Sharpen the problem with the three essential questions. Problem: what is actually stuck? State: where are we now, honestly? Timeline: what has to be true, by when?",
    line: "Memory is generous. Hard metrics are less forgiving.",
    feeds: [
      "A problem statement in one clear sentence",
      "A recorded current-state baseline",
      "Timeline truth: real dates separated from political dates",
    ],
  },
  {
    n: 3,
    name: "Findings",
    move: MOVES[1],
    job: "Turn inputs into named claims with evidence, then present them back to the people who gave the inputs before designing anything. This is where wrong listening gets caught cheaply.",
    line: "A finding is a claim plus its evidence, never a vibe.",
    feeds: [
      "Findings with evidence, implication, and confidence",
      "A shared artifact everyone can point at",
      "Every disagreement recorded with a name and a reason",
    ],
  },
  {
    n: 4,
    name: "Activation",
    move: MOVES[1],
    job: "Turn findings into directions. Bring two options, never one, at the cheapest fidelity that can be honestly judged. Name what each direction prioritizes and what it trades away.",
    line: "The goal is a decision, not a deliverable.",
    feeds: [
      "Two or more options with a written tradeoff summary",
      "A documented decision: what, who, why, and what was deferred",
      "A clear next action",
    ],
  },
  {
    n: 5,
    name: "Measurement",
    move: MOVES[2],
    job: "Define proof before the work ships. Write down the two or three signals that would show the actual problem got better, each with a baseline, a source, an owner, and a review date.",
    line: "Never invent numbers. Never grade your own homework alone.",
    feeds: [
      "A measurement plan tied to the decision, not to vanity metrics",
      "Instrumentation from day one, not retro-fitted tracking",
    ],
  },
  {
    n: 6,
    name: "Summary",
    move: MOVES[2],
    job: "Report what moved, what did not, and what to try next, compared against the recorded baseline. Translate the result for each audience, date it, and feed it forward.",
    line: "Each summary is a position in time. Positions accumulate into a trajectory.",
    feeds: [
      "A dated summary that states misses as plainly as wins",
      "The next cycle's starting question. The loop returns to Inputs.",
    ],
  },
];

const CX = 280;
const CY = 280;
const R = 180;
const LABEL_R = 234;

function pos(i: number, radius: number): [number, number] {
  const a = ((-90 + i * 60) * Math.PI) / 180;
  return [CX + radius * Math.cos(a), CY + radius * Math.sin(a)];
}

// Arcs sit just outside the ring, one per move, spanning its two stations.
const ARCS = [
  "M 225.65 77.16 A 210 210 0 0 1 482.84 225.65",
  "M 482.84 334.35 A 210 210 0 0 1 225.65 482.84",
  "M 131.51 428.49 A 210 210 0 0 1 131.51 131.51",
];

export function ProcessLoop() {
  const [active, setActive] = useState(0);
  const s = STATIONS[active];
  const activeMove = Math.floor(active / 2);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
      {/* The diagram */}
      <svg
        viewBox="-30 -15 620 600"
        className="w-full max-w-[540px] mx-auto block"
        role="group"
        aria-label="The Capizzi Process loop: three moves, six stations. Select a station to read its job."
      >
        <circle
          cx={CX}
          cy={CY}
          r={R}
          fill="none"
          stroke="var(--color-border-default)"
          strokeWidth="2"
        />

        {ARCS.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            strokeWidth="2"
            className="transition-colors duration-300 motion-reduce:transition-none"
            stroke={
              activeMove === i
                ? "var(--color-brand-purple)"
                : "var(--color-border-subtle)"
            }
          />
        ))}

        <text
          x="400"
          y="70"
          className="font-mono uppercase"
          fontSize="13"
          letterSpacing="1"
          fill="var(--color-text-secondary)"
        >
          {MOVES[0]}
        </text>
        <text
          x="400"
          y="500"
          className="font-mono uppercase"
          fontSize="13"
          letterSpacing="1"
          fill="var(--color-text-secondary)"
        >
          {MOVES[1]}
        </text>
        <text
          x="32"
          y="280"
          textAnchor="middle"
          transform="rotate(-90 32 280)"
          className="font-mono uppercase"
          fontSize="13"
          letterSpacing="1"
          fill="var(--color-text-secondary)"
        >
          {MOVES[2]}
        </text>

        {/* Return arrow: station 6 back to station 1 */}
        <path
          d="M 203.9 116.1 L 178.6 120.3 L 187.6 135.9 Z"
          fill="var(--color-brand-purple)"
        />

        <g className="font-mono uppercase" fontSize="11" letterSpacing="1.5">
          <text x={CX} y="262" textAnchor="middle" fill="var(--color-text-tertiary)">
            Three moves
          </text>
          <text x={CX} y="284" textAnchor="middle" fill="var(--color-text-tertiary)">
            Six stations
          </text>
          <text x={CX} y="306" textAnchor="middle" fill="var(--color-text-tertiary)">
            One loop
          </text>
        </g>

        {STATIONS.map((st, i) => {
          const [x, y] = pos(i, R);
          const [lx, ly] = pos(i, LABEL_R);
          const on = i === active;
          const anchor = lx < CX - 10 ? "end" : lx > CX + 10 ? "start" : "middle";
          return (
            <g
              key={st.n}
              role="button"
              tabIndex={0}
              aria-pressed={on}
              aria-label={`Station ${st.n}, ${st.name}`}
              onClick={() => setActive(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActive(i);
                }
              }}
              className="cursor-pointer outline-none focus-visible:[&>circle]:stroke-[var(--color-link)]"
            >
              <circle
                cx={x}
                cy={y}
                r="22"
                strokeWidth="2"
                className="transition-colors duration-200 motion-reduce:transition-none"
                fill={on ? "var(--color-brand-purple)" : "var(--color-bg-raised)"}
                stroke={on ? "var(--color-brand-purple)" : "var(--color-text-secondary)"}
              />
              <text
                x={x}
                y={y + 5}
                textAnchor="middle"
                className="font-mono"
                fontSize="15"
                fill="var(--color-text-primary)"
              >
                {st.n}
              </text>
              <text
                x={lx}
                y={ly + 4}
                textAnchor={anchor}
                className="font-mono uppercase"
                fontSize="12"
                letterSpacing="1"
                fill={on ? "var(--color-link)" : "var(--color-text-tertiary)"}
              >
                {st.name}
              </text>
            </g>
          );
        })}
      </svg>

      {/* The station panel */}
      <div>
        <div
          role="group"
          aria-label="Choose a station"
          className="flex flex-wrap gap-2 mb-6"
        >
          {STATIONS.map((st, i) => {
            const on = i === active;
            return (
              <button
                key={st.n}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(i)}
                className={`font-mono text-[11px] tracking-widest uppercase px-3 py-2 rounded-lg border transition-colors ${
                  on
                    ? "bg-brand-purple border-brand-purple text-white"
                    : "bg-bg-raised border-border-default text-text-secondary hover:border-border-strong hover:text-text-primary"
                }`}
              >
                {st.n} {st.name}
              </button>
            );
          })}
        </div>

        <div
          key={active}
          aria-live="polite"
          className="card-surface border border-border-default rounded-2xl p-7 md:p-8 min-h-[360px] animate-[swapin_.35s_ease-out] motion-reduce:animate-none"
        >
          <p className="font-mono text-[11px] tracking-widest uppercase text-link mb-3">
            {s.move} · Station {s.n} of 6
          </p>
          <h3 className="card-title text-text-primary mb-3">
            {s.name}
          </h3>
          <p className="text-base text-text-secondary leading-relaxed mb-5">
            {s.job}
          </p>
          <p className="font-mono text-sm text-text-secondary border-l-2 border-brand-purple pl-4 mb-5">
            {s.line}
          </p>
          <p className="font-mono text-[11px] tracking-widest uppercase text-text-tertiary mb-2">
            What it feeds forward
          </p>
          <ul className="space-y-1.5">
            {s.feeds.map((f) => (
              <li
                key={f}
                className="text-[15px] text-text-secondary leading-relaxed pl-5 relative before:content-['→'] before:absolute before:left-0 before:text-link before:font-mono before:text-xs"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
