import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProcessLoop } from "@/components/ProcessLoop";
import { BrowserFrame } from "@/components/BrowserFrame";
import { SignupCard } from "@/components/SignupCard";
import { LiteYouTube } from "@/components/LiteYouTube";

/**
 * /thinking: the Capizzi Process, and everything that came out of it.
 *
 * This page replaced three surfaces in September 2026:
 *   - the old /thinking, which linked out to Medium and LinkedIn and held
 *     no argument of its own
 *   - /clarity-advantage, whose deck duplicated the homepage and whose
 *     newsletter and book card now live here (route 308s to /thinking)
 *   - the standalone Process site, whose 1,707 words are now the printed
 *     manual this page offers by email, with only the loop carried over
 *
 * Order is the argument: the method, the method running as software, the
 * method as objects you can hold, then the ways to get more of it. The
 * strategy call closes, once.
 *
 * Photos: public/images/process/clarity-cards-desk.jpg is Shawn's own photo
 * of the printed deck on his desk (September 2026), retouched for tone and
 * color only; no card content was changed. public/images/process/book.jpg
 * is still a labeled placeholder. Give a replacement photo a new filename
 * rather than overwriting, so no image cache can serve the old version.
 *
 * The Governance Deck reel names its loop Gather, Align, Measure, Decide.
 * The caption says so plainly rather than pretending it matches the three
 * moves. When the app is relabeled, drop the second sentence.
 */

export const metadata: Metadata = {
  title: "Thinking: The Capizzi Process",
  description:
    "The Capizzi Process: listen first, make it visible, prove it worked. The method as an interactive loop, running as software, and in print and in hand.",
};

const CAL_URL = "https://cal.com/capizzi/30min";
const GOV_APP_URL = "https://governance-deck-tau.vercel.app";

const PUBLISHED = [
  {
    title: "Beyond User Flows: Agentic AI is Rewriting UX Fundamentals",
    date: "October 2025",
    source: "Medium",
    url: "https://medium.com/p/e335c1789bc7",
  },
  {
    title:
      "The FDA's New Digital Era: Why Pharma's Future Belongs to Honest, Human-Centered Experience Design",
    date: "November 2025",
    source: "LinkedIn",
    url: "https://www.linkedin.com/pulse/fdas-new-digital-era-why-pharmas-future-belongs-honest-capizzi-lyjne",
  },
];

export default function Page() {
  return (
    <article>
      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow mb-3">Thinking</p>
          <h1 className="headline-static hero-title text-balance max-w-4xl">
            The Capizzi Process
          </h1>
          <p className="mt-4 font-mono text-base md:text-lg text-link tracking-tight">
            Listen first. Make it visible. Prove it worked.
          </p>
          <p className="hero-lead max-w-3xl">
            A working method for people and teams who have to decide under
            pressure: listen before deciding, make the thinking visible, and
            prove what changed. Three moves, with six operating principles
            inside them. Built over fifteen years of collaborating with
            teams to ship products, communications, and digital tools, and
            still in use every week.
          </p>
        </div>
      </section>

      {/* THE LOOP */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl mb-12 md:mb-16">
            <p className="eyebrow mb-4">The model</p>
            <h2 className="section-title">
              Three moves. Six stations. One loop.
            </h2>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              The order is the method. Listening without visibility is
              therapy. Visibility without proof is theater. Proof without
              listening measures the wrong thing precisely. Select a station
              to see its job.
            </p>
          </div>
          <ProcessLoop />
        </div>
      </section>

      {/* RUNNING AS SOFTWARE */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl mb-12 md:mb-14">
            <p className="eyebrow mb-4">In the app</p>
            <h2 className="section-title">
              The Process, running as software
            </h2>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              The Governance Deck is the method built as a working product.
              A team answers questions privately, the app finds where the
              answers differ, a named decider settles each one with a reason
              attached, and the decisions become dated documents anyone new
              can pick up and follow.
            </p>
          </div>
          <figure className="mx-auto max-w-4xl">
            <BrowserFrame
              src="/videos/governance-deck-walkthrough.mp4"
              poster="/videos/governance-deck-walkthrough-poster.jpg"
              url="governance-deck-tau.vercel.app"
              width={880}
              fallbackAspect={1130 / 878}
              tiltDegrees={0}
              theme="dark"
              ariaLabel="Governance Deck walkthrough: the loop, the question cards, a live one-card demo, team and roles, and the dated decision documents"
              loop
              autoPlay
            />
            <figcaption className="mt-4 text-center text-sm text-text-tertiary max-w-2xl mx-auto">
              A 55-second walkthrough. The app runs the Process in its own
              four-step vocabulary, gather, align, measure, decide, and
              exports every decision as a dated document.
            </figcaption>
          </figure>
          <div className="mt-8 text-center">
            <a
              href={GOV_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-base font-medium text-link hover:text-link-hover transition-colors"
            >
              Open the Governance Deck{" "}
              <span aria-hidden="true" className="ml-2">
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* IN PRINT AND IN HAND */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl mb-12 md:mb-14">
            <p className="eyebrow mb-4">In print and in hand</p>
            <h2 className="section-title">
              The argument, and the instrument.
            </h2>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              The book is where the argument lives in full. The Clarity Cards
              are the Process dealt out as questions a room can answer, four
              suits of thirteen plus two wildcards. Printed editions of both
              are coming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <figure className="rounded-2xl card-surface border border-border-default overflow-hidden">
              <div className="relative aspect-[4/3] bg-bg-raised">
                <Image
                  src="/images/process/book.jpg"
                  alt="Clarity Is the Advantage, the book"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="p-6 md:p-7">
                <p className="font-mono text-xs tracking-widest uppercase text-text-tertiary">
                  The book
                </p>
                <p className="mt-2 text-lg font-semibold tracking-tight text-text-primary">
                  Clarity Is the Advantage
                </p>
                <p className="mt-1 text-sm text-text-secondary">
                  Orienteering to great design decisions. Chapter one is free
                  below.
                </p>
              </figcaption>
            </figure>

            <figure className="rounded-2xl card-surface border border-border-default overflow-hidden">
              <div className="relative aspect-[4/3] bg-bg-raised">
                <Image
                  src="/images/process/clarity-cards-desk.jpg"
                  alt="Seven printed Clarity Cards dealt across a wooden desk beside a keyboard and mouse"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="p-6 md:p-7">
                <p className="font-mono text-xs tracking-widest uppercase text-text-tertiary">
                  The cards
                </p>
                <p className="mt-2 text-lg font-semibold tracking-tight text-text-primary">
                  The Clarity Cards
                </p>
                <p className="mt-1 text-sm text-text-secondary">
                  Fifty-four questions. Draw one, answer it honestly, then
                  touch the work.{" "}
                  <Link
                    href="/#clarity-cards"
                    className="text-link hover:text-link-hover transition-colors"
                  >
                    Try the deck
                  </Link>
                  .
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* THE MANUAL + CHAPTER ONE */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <article className="relative p-7 md:p-9 rounded-2xl card-surface border border-border-default">
              <p className="eyebrow mb-4">The field manual</p>
              <h2 className="card-title text-text-primary mb-4">
                The whole method, in something you can hold.
              </h2>
              <p className="text-base text-text-secondary leading-relaxed mb-8">
                The full Process: three moves with their exit tests and
                failure modes, the six stations, the ten standards of the
                room, and the one-page field version. A small printed
                manual and a PDF. Leave your email and it arrives when it
                ships.
              </p>
              <SignupCard
                buttonLabel="Send me the manual"
                successText="Confirm your email and you're on the list. The manual arrives when it ships, plus the occasional note from the work, nothing else."
              />
            </article>

            <Link
              href="/book/chapter-1"
              className="group relative p-7 md:p-9 rounded-2xl card-surface border border-border-default hover:border-border-strong transition-colors flex flex-col"
            >
              <p className="eyebrow mb-4">Read</p>
              <h2 className="card-title text-text-primary mb-2 group-hover:text-link transition-colors">
                Chapter one, free.
              </h2>
              <p className="text-sm md:text-base italic text-text-tertiary mb-4 leading-snug">
                The Human Condition: why empathy is the foundation of digital
                experience.
              </p>
              <p className="text-base text-text-secondary leading-relaxed mb-6 flex-1">
                Why clarity wins, how to cut through the noise, and what it
                takes to do great work in the rooms where decisions get
                made. Fifteen years of agency life, distilled.
              </p>
              <p className="text-link group-hover:text-link-hover transition-colors text-base font-medium">
                Read chapter one{" "}
                <span aria-hidden="true" className="ml-1">
                  &rarr;
                </span>
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* PUBLISHED + TALK */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <p className="eyebrow mb-4">Published</p>
              <h2 className="section-title mb-8">
                Two essays, elsewhere
              </h2>
              <ul className="divide-y divide-border-subtle border-y border-border-subtle">
                {PUBLISHED.map((e) => (
                  <li key={e.url}>
                    <a
                      href={e.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block py-5"
                    >
                      <p className="font-mono text-xs tracking-widest uppercase text-text-tertiary">
                        {e.date} · {e.source}
                      </p>
                      <p className="mt-2 text-base md:text-lg font-medium text-text-primary group-hover:text-link transition-colors leading-snug">
                        {e.title}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-4">In person</p>
              <h2 className="section-title mb-8">
                Hear it, not just read it
              </h2>
              <LiteYouTube
                videoId="iUvwk-KoA7s"
                title="Shawn Capizzi on experience design and AI"
                aspect="16:9"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CLOSE */}
      <section className="py-24 md:py-32 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="section-title mb-6 md:mb-8 max-w-3xl mx-auto">
            Want to run this on something real?
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-10 md:mb-12 max-w-2xl mx-auto">
            30 minutes. Virtual. No pitch.
          </p>
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-text-primary text-text-inverse text-base font-medium tracking-tight hover:scale-[1.02] transition-transform"
          >
            Book a Strategy Call
          </a>
        </div>
      </section>
    </article>
  );
}
