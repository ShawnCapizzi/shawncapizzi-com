"use client";

import { useState } from "react";
import { ProcessSketch } from "@/components/ProcessSketch";

/**
 * ProcessLoop: the Capizzi Process on /thinking. 3 principles, 6 flexible
 * actions, clear momentum (October 2026; the page used to say "three moves,
 * six stations, one loop"). In the code, MOVES are the three principles and
 * STATIONS are the six actions; the names stayed so the history reads. The
 * action copy is the Process Handbook's, unchanged.
 *
 * Titles (October 2026): each station has a one-word name for its chip and a
 * verb-led title for the card heading. Each title's verb comes from that
 * station's own job copy, so the two cannot drift apart.
 *
 * This is deliberately the condensed form. The full method (exit tests,
 * failure modes, the ten standards, the field version) is the printed
 * manual, which /thinking offers by email.
 *
 * Layout (October 2026): the left column shows the active move's name over
 * a hand-drawn sketch of the selected station (components/ProcessSketch.tsx),
 * which replaced the ring diagram. The right column is unchanged: the station
 * chips and the station card. On phones the sketch sits above the chips.
 *
 * Motion: the sketch draws itself on first view and redraws when a station
 * is chosen; the move name and the card swap in. Arrow keys step through the
 * chips. Reduced motion is respected throughout.
 */

/* One line per principle, shown under its name beside the sketch. */
const PRINCIPLES = [
  "Understand the people, problem, context, signals, and constraints before deciding what to make.",
  "Turn the thinking into something people can react to, discuss, test, refine, and align around.",
  "Look at what actually happened, what changed, what people did, and what the team learned.",
];

type Station = {
  n: number;
  name: string;
  title: string;
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
    title: "Gather every input",
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
    title: "Ask the three questions",
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
    title: "Name the findings",
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
    title: "Choose a direction",
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
    title: "Define the proof",
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
    title: "Report what moved",
    move: MOVES[2],
    job: "Report what moved, what did not, and what to try next, compared against the recorded baseline. Translate the result for each audience, date it, and feed it forward.",
    line: "Each summary is a position in time. Positions accumulate into a trajectory.",
    feeds: [
      "A dated summary that states misses as plainly as wins",
      "The next insight, carried into whichever action the work needs next.",
    ],
  },
];

export function ProcessLoop() {
  const [active, setActive] = useState(0);
  const s = STATIONS[active];
  const move = Math.floor(active / 2);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
      {/* The sketch, under the active move's name */}
      <div className="min-w-0">
        <div key={move} className="mb-6 lg:mb-8 animate-[swapin_.4s_ease-out] motion-reduce:animate-none">
          <p className="font-mono text-[15px] lg:text-lg tracking-[0.2em] uppercase text-link">
            {s.move}
          </p>
          <p className="mt-2 max-w-md text-sm md:text-base text-text-secondary leading-relaxed text-pretty">
            {PRINCIPLES[move]}
          </p>
        </div>
        <ProcessSketch index={active} name={s.name} />
        <p
          aria-hidden="true"
          className="mt-6 lg:mt-8 font-mono text-xs tracking-widest uppercase text-text-secondary/80 tabular-nums"
        >
          Action {s.n} of 6
        </p>
      </div>

      {/* The action panel */}
      <div className="min-w-0">
        <div
          role="group"
          aria-label="Choose an action"
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
                onKeyDown={(e) => {
                  const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
                  if (!step) return;
                  e.preventDefault();
                  const next = (i + step + STATIONS.length) % STATIONS.length;
                  setActive(next);
                  const group = e.currentTarget.parentElement;
                  (group?.children[next] as HTMLButtonElement | undefined)?.focus();
                }}
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
            {s.move} · Action {s.n} of 6
          </p>
          <h3 className="card-title text-text-primary mb-3">
            {s.title}
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
