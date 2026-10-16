import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ProcessLoop } from "@/components/ProcessLoop";
import { BrowserFrame } from "@/components/BrowserFrame";
import { SignupCard } from "@/components/SignupCard";
import { LiteYouTube } from "@/components/LiteYouTube";
import { BookAndCards } from "@/components/BookAndCards";

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
 * Order is the argument (reordered September 2026): the method, the loop,
 * the method as objects you can hold (book and cards), the method running
 * as software, then the ways to take some of it with you, published
 * writing and a talk as credibility, and one ask to talk closes, once.
 *
 * Photos: the book and cards figures come from components/BookAndCards.tsx,
 * shared with the homepage, which documents both images.
 *
 * The Governance Deck reel names its loop Gather, Align, Measure, Decide.
 * The caption says so plainly rather than pretending it matches the three
 * moves. When the app is relabeled, drop the second sentence.
 */

export const metadata = pageMetadata({
  path: "/thinking",
  title: "Thinking: The Capizzi Process",
  description:
    "The Capizzi Process: listen first, make it visible, prove it worked. 3 principles, 6 flexible actions, and clear momentum, in software, print, and hand.",
});

const GOV_APP_URL = "https://governance-deck-tau.vercel.app";

const PUBLISHED = [
  {
    title:
      "From Assumptions to Innovation: Why Mental Models Are a Strategic Advantage",
    url: "https://www.linkedin.com/pulse/from-assumptions-innovation-why-mental-models-shawn-michael-capizzi-buqwe",
  },
  {
    title:
      "Agentic AI Starter Kit: Turn the Data You Already Have Into Intelligent Experiences",
    url: "https://www.linkedin.com/pulse/agentic-ai-starter-kit-turn-data-you-already-have-capizzi-yi5ie",
  },
  {
    title:
      "66% of HCPs Now Use AI for Clinical Questions. Is Your Brand's Content Ready?",
    url: "https://www.linkedin.com/pulse/66-hcps-now-use-ai-clinical-questions-your-brands-content-capizzi-p8wpe",
  },
  {
    title:
      "The FDA's New Digital Era: Why Pharma's Future Belongs to Honest, Human-Centered Experience Design",
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
          <p className="hero-lead max-w-3xl text-pretty">
            A working method for people and teams making decisions under
            pressure. The three principles stay constant. Six flexible
            actions help teams understand the problem, make the thinking
            visible, move toward a decision, and prove what changed.
          </p>
          <p className="hero-lead max-w-3xl text-pretty">
            Built from 15+ years of working across products, communications,
            campaigns, systems, and digital experiences. It&apos;s not a rigid
            sequence. It&apos;s a way to create clarity and keep the work
            moving.
          </p>
        </div>
      </section>

      {/* THE MODEL (October 2026): 3 principles, 6 flexible actions, clear
          momentum. The principles hold; the actions flex, so nothing here
          implies a fixed order. */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl mb-12 md:mb-16">
            <p className="eyebrow mb-4">The model</p>
            <h2 className="section-title text-balance">
              3&nbsp;principles. 6&nbsp;flexible actions. Clear momentum.
            </h2>
            {/* Same layout as the old model paragraph (secondary text,
                lg/xl), now in three lines: the rule in bold, the three-part
                thought, then how the actions are used. */}
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed text-pretty">
              <strong className="font-semibold text-text-primary">
                The principles hold. The actions flex.
              </strong>
              <br />
              Listening without visibility is opinion. Visibility without
              intent is just output. Proof without listening is data sans
              context.
              <br />
              Use the actions where the work needs them. Repeat them, combine
              them, or move back when new information changes the problem.
            </p>
          </div>
          {/* Sits tight to the model below so it reads as its label. */}
          <p className="mb-4 md:mb-5 text-lg md:text-xl font-semibold text-text-secondary">
            Action moves work forward. Pick one.
          </p>
          <ProcessLoop />
        </div>
      </section>

      {/* IN PRINT AND IN HAND */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl mb-12 md:mb-14">
            <p className="eyebrow mb-4">The Process, in two forms</p>
            <h2 className="section-title text-balance">
              The Capizzi Process, in print and in practice.
            </h2>
            <div className="mt-6 space-y-4 text-lg md:text-xl text-text-secondary leading-relaxed text-pretty">
              {/* id="book" and id="cards" are jump targets from the About
                  page. scroll-mt clears the fixed header (80px, 88px from md). */}
              <p id="book" className="scroll-mt-32 md:scroll-mt-40">
                <em className="text-text-primary">Seeing Past the Cage</em> is my upcoming book on
                communication design, problem-solving, and the lessons behind
                the Capizzi Process, shaped by 15+ years of creative, strategy,
                marketing, and design work.
              </p>
              <p id="cards" className="scroll-mt-32 md:scroll-mt-40">
                <span className="text-text-primary">The Clarity Cards</span> are a practical thinking deck built from the
                questions I use in working sessions. They help teams stay focused,
                challenge assumptions, and move discussion toward decisions,
                because decisions are what move the work forward. They work for
                marketing and design, but also anywhere people need to think
                through a problem together.
              </p>
              <p className="text-text-primary">Printed editions of both are coming.</p>
            </div>
          </div>

          <BookAndCards
            bookLink={{ href: "/book/chapter-1", label: "Read the foreword free" }}
            cardsLink={{ href: "/#clarity-cards", label: "Try the deck" }}
          />
        </div>
      </section>

      {/* RUNNING AS SOFTWARE */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl mb-12 md:mb-14">
            <p className="eyebrow mb-4">Working software</p>
            <h2 className="section-title">
              The Process, running as software
            </h2>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              <span className="text-text-primary">The Governance Deck</span> is the method built as a working product.
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

      {/* THE MANUAL + THE FOREWORD */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <article className="relative p-7 md:p-9 rounded-2xl card-surface border border-border-default">
              <p className="eyebrow mb-4">The field manual</p>
              <h2 className="card-title text-text-primary mb-4">
                The whole method, in something you can hold.
              </h2>
              <p className="text-base text-text-secondary leading-relaxed mb-8">
                The full Process: the three principles with their exit tests
                and failure modes, the six flexible actions, the ten standards
                of the room, and the one-page field version. A small printed
                manual and a PDF. Leave your email and it arrives when it
                ships.
              </p>
              <SignupCard
                buttonLabel="Send me the manual"
                source="manual"
                successText="You're on the list, and a short note is on its way. The manual arrives when it ships, plus the occasional note from the work, nothing else."
              />
            </article>

            <Link
              href="/book/chapter-1"
              className="group relative p-7 md:p-9 rounded-2xl card-surface border border-border-default hover:border-border-strong transition-colors flex flex-col"
            >
              <p className="eyebrow mb-4">Read</p>
              <h2 className="card-title text-text-primary mb-2 group-hover:text-link transition-colors">
                The foreword, free.
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
                Read the foreword{" "}
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
              <h2 className="section-title text-balance">
                Writing on design, AI, and healthcare.
              </h2>
              <p className="mt-4 mb-8 text-lg text-text-secondary leading-relaxed">
                Ideas from the work, shared with 5,000+ LinkedIn followers.
              </p>
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
                        LinkedIn
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
              <p className="eyebrow mb-4">Talks</p>
              <h2 className="section-title text-balance">
                Experience design, no-code, and the beginnings of AI.
              </h2>
              <p className="mt-4 mb-8 text-lg text-text-secondary leading-relaxed">
                A 2023 EVERSANA Intouch talk on how no-code tools and emerging
                AI were changing the way we design experiences.
              </p>
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
            Bring me the problem, and we&apos;ll talk it through.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-text-primary text-text-inverse text-base font-medium tracking-tight hover:scale-[1.02] transition-transform"
          >
            Let&apos;s talk
            <span aria-hidden="true" className="ml-2">&rarr;</span>
          </Link>
        </div>
      </section>
    </article>
  );
}
