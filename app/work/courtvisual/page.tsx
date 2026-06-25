import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { TiltedPhonePair } from "@/components/TiltedPhonePair";
import { PhoneFan } from "@/components/PhoneFan";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CourtVisual: Scoring Sports by What's Worth Watching",
  description:
    "A multi-sport app that scores how worth watching tonight's games are, tuned to your taste, then points you where to watch and how to get in. Product, build, and go-to-market shipped solo, concept to live PWA, with AI as the partner.",
};

const ASSET_BASE = "/images/case-studies/07-courtvisual";

export default function Page() {
  return (
    <CaseStudyLayout
      eyebrow="(Case Study)"
      title="CourtVisual"
      subtitle="A multi-sport app that scores how worth watching tonight's games are, tuned to you, then sends you where to watch and how to get in. Product, build, and go-to-market run solo, concept to live PWA, with AI as the build partner."
      heroImage={`${ASSET_BASE}/02-game-card-score-ring.png`}
      heroImageAlt="CourtVisual home screen: a Knicks game scored 9.3 out of 10, with the team and sport picker"
      heroSlot={
        <TiltedPhonePair
          rightStartDelayMs={0}
          leftStartDelayMs={16000}
          left={{
            src: "/videos/courtvisual-onboarding-demo.mp4",
            poster: "/videos/courtvisual-onboarding-poster.jpg",
            alt: "CourtVisual onboarding: following a team, the app taking on its colors and reordering the slate.",
            caption: "Onboarding: pick a team, the app suits up",
          }}
          right={{
            src: "/videos/courtvisual-ranking-demo.mp4",
            poster: "/videos/courtvisual-ranking-poster.jpg",
            alt: "CourtVisual live slate: tonight's games scored 0 to 10 and ranked, each card showing where to watch and tickets.",
            caption: "The slate: every game scored and ranked",
          }}
        />
      }
      metadata={[
        { label: "SCOPE", value: "Solo product, concept to live PWA" },
        { label: "YEAR", value: "2025–present" },
        {
          label: "CAPABILITIES",
          value:
            "Product design · Experience architecture · AI-assisted full-stack build · Live data integration · Go-to-market",
        },
        {
          label: "STACK",
          value:
            "Next.js · React · Tailwind · Supabase · Vercel · Claude Code · ChatGPT",
        },
      ]}
      challenge={[
        "The idea started at a Mets game. A player was closing in on a record, and I only knew to watch because I was in the building. That became a bigger question: not which games are historic, but which are worth your night.",
        "Any given night, dozens of games compete for the same few hours, and nothing tells you which is worth it. Schedule in one app, where to watch in another, tickets in a third. Each owns a slice; none answers the question a fan actually has.",
        "Because the answer is personal: a neutral classic, a bitter rivalry, your team chasing a playoff spot, not the same to any two people. An honest read weighs the stakes and the viewer's taste at once, the connective tissue that turns raw data into a decision. Nobody built it. That gap is the product.",
      ]}
      approach={[
        "I started with the score. Excitement breaks into factors a fan already feels: stakes, rivalry, the race (how live the standings and matchup are), and matchup history. Every game gets a 0 to 10 score and a verdict that shows its work, so you trust the read, not a bare number.",
        "Then I fed it from live pipes, not a static list, and made it honest. Live data forced the discipline: fixtures come first, so a match exists whether or not tickets are listed; competitiveness is derived, not asserted; follows surface \u201CMessi's Argentina,\u201D never a promise he'll start. Credibility rests on not overclaiming.",
        "Then I made it yours. A neutral-fan baseline keeps it fair; from there you tune what counts and follow teams, sports, players, and a city. The same slate reorders for a Knicks die-hard, a neutral, and a Messi-only fan, personalization that changes the ranking, not a filter on top.",
        "Then I built the experience around the data, the part most data products skip. One restrained system keeps onboarding, settings, loading, and empty states out of the way so the data-rich card stays the star. That's what I bring to client work: the architecture around the model is the product; the model is just an ingredient.",
      ]}
      pullQuote={[
        "The schedule lives in one app, the broadcast in another, the tickets in a third. None of them tell you whether the game is worth your night.",
        "The score isn't the hard part. Making it honest, and making it yours, is the hard part.",
        "I didn't want a database of games. I wanted a living read on what's worth watching, refreshed from the same pipes the big platforms run on.",
      ]}
      afterQuote={
        <div>
          <p className="eyebrow mb-4">The progression · From PRD to shipped</p>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-6 md:mb-8 max-w-3xl">
            Proving the idea was the easy part
          </h3>
          <div className="max-w-3xl space-y-5 text-lg text-text-secondary leading-relaxed">
            {[
              "Left to right is the whole arc. v1 came straight out of a full PRD: raw sliders and an uncapped score past 14. It proved the idea but wasn't useful. The middle build capped it to a legible 0 to 10 and ranked the slate. The third is where it landed: each card carries the four factors a fan feels, Stakes, Rivalry, the race, and Matchup, with a plain-English read of why.",
              "Plenty of people vibe-code apps now, and most ship something bloated and purposeless for lack of discipline about value. I built this with Claude Code and ChatGPT but stayed the orchestrator: I described what I wanted in screenshots, copy, and micro-interaction notes, and directed the tools until it matched the picture in my head.",
              "My job is judgment, not letting AI bolt on features so it feels like progress. Trimming, the visual hierarchy, onboarding someone with zero context, which features earn their place, which surprises people keep or switch off, that editing is the product. It comes from years with devs, creative directors, and real users.",
            ].map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="mt-10 md:mt-14">
            <PhoneFan
              phones={[
                {
                  src: `${ASSET_BASE}/09-progression-prd.png`,
                  alt: "v1 from the PRD: a Game Excitement Analyzer with four priority sliders and an uncapped total weight.",
                  label: "v1 · the PRD",
                },
                {
                  src: `${ASSET_BASE}/10-progression-ranking.png`,
                  alt: "The middle build: a ranked slate, each game scored with a why-it-scores breakdown.",
                  label: "v2 · ranked build",
                },
                {
                  src: `${ASSET_BASE}/11-progression-card.png`,
                  alt: "The shipped card: a Subway Series game scored on Stakes, Rivalry, The race, and Matchup, with a verdict and ticket path.",
                  label: "v3 · shipped",
                },
              ]}
            />
          </div>
        </div>
      }
      projectShowcases={[
        {
          eyebrow: "Live data · Not a static list",
          title: "Scored from live pipes, and find, watch, buy on one card",
          description: [
            "The slate is built from real-time feeds, not a database I keep by hand. Fixtures, scores, standings, projected competitiveness, where to watch, and the ticket path all flow in live, and the score re-reads as the night develops.",
            "That's the market position: one card tells you a game is worth watching, where to watch it, and how to get in, the jobs a fan splits across a handful of apps, collapsed into one decision.",
          ],
          links: [
            { label: "See the live app", href: "https://www.courtvisual.com" },
          ],
          images: [
            {
              src: `${ASSET_BASE}/04-live-slate-watch-and-tickets.png`,
              alt: "CourtVisual search results, Rivalry Showdowns: ranked Mets vs Yankees Subway Series games, each scored with a breakdown and a ticket path.",
              maxWidthClass: "max-w-xl",
            },
          ],
        },
        {
          eyebrow: "Built for the moment · 2026 World Cup",
          title: "The World Cup, live and in its own colors",
          description: [
            "With the calendar crowded, the World Cup is the night most people want to find, and the product leans in. The feed is fixtures-first from live international sources, so a match appears the moment it's scheduled, tickets or not.",
            "Each card wears both nations' federation crests and colors, the one place the product shows a crest, since club cards stay color-only by design. The color runs through a luminance floor so navy and near-black kits stay legible on a dark card, the detail that separates a product from a template.",
          ],
          images: [
            {
              src: `${ASSET_BASE}/05-world-cup-crest-cards-1.png`,
              alt: "CourtVisual World Cup view: Turkiye vs United States scored 8.0, both federation crests beside the matchup, green pitch color, and where-to-watch.",
              maxWidthClass: "max-w-xl",
            },
          ],
        },
        {
          eyebrow: "Under the hood · The build, not just the screens",
          title: "I found the pipes, then wired them",
          description: [
            "A scoring product is only as trustworthy as its data. I used AI to map which live feeds existed, then architected the data layer myself. Each fan's state, teams, sliders, follows, lives in Supabase behind row-level security, enforced at the database, so a row is readable only by its owner.",
            "The feeds are keyed server-side and deployed continuously on Vercel. The tools moved fast through the boilerplate; the architecture, what connects to what and what the score may claim, stayed my call. The screens get the attention. This is the part that makes the number mean something.",
          ],
          links: [
            { label: "Open CourtVisual", href: "https://www.courtvisual.com" },
          ],
          images: [
            {
              src: `${ASSET_BASE}/07-engine-supabase-rls.png`,
              alt: "Supabase SQL editor: a user_state table with row-level security and an 'own state' policy restricting each row to its owner via auth.uid().",
            },
          ],
        },
      ]}
      outcomes={[
        {
          headline: "A live, multi-sport excitement engine",
          description:
            "Every game scored 0 to 10 from real-time data, each with a plain-English verdict. A living read on tonight, not a static list.",
        },
        {
          headline: "Personalization that reorders the slate",
          description:
            "Presets, per-factor sliders, and follows for teams, sports, players, and a city. The same games rank differently for a die-hard, a neutral, and a single-player fan.",
        },
        {
          headline: "Find, watch, and buy, unified",
          description:
            "The excitement read, where to watch, and the ticket path on one card, a journey split across separate apps today.",
        },
        {
          headline: "Shipped for a live moment, the 2026 World Cup",
          description:
            "A fixtures-first tournament feed with per-team federation crests and luminance-safe color, plus honest, team-level player follows.",
        },
        {
          headline: "A design system that scales calm",
          description:
            "One restrained system across onboarding, settings, loading, and empty states, so the data-rich card stays the star.",
        },
        {
          headline: "Concept to live PWA in 50 to 60 hours",
          description:
            "Product design and AI-assisted full-stack build on Next.js, Supabase, and Vercel. Shipped solo in roughly 50 to 60 hours, deployed continuously from v1 to a mature tool.",
        },
      ]}
      closer={[
        "The big platforms each own a slice of the fan's night and no reason to connect them. The opportunity was never more data. It was the connective tissue, the honest read that turns data into a decision.",
        "CourtVisual is one person finding the gap, building the product, wiring the data, and taking it to market, solo. Put that person inside your walls, with your data, your team, and real users in the room. That's what a strategist and designer looks like now: someone who folds AI in for speed and economics without giving up the judgment about what's worth shipping.",
        <>
          That&apos;s the proof. That&apos;s what I bring into{" "}
          <Link
            href="/engagements"
            className="text-link hover:text-link-hover transition-colors"
          >
            client engagements
          </Link>
          .
        </>,
        <>
          If you&apos;re a fellow New Yorker and football fan, I&apos;ll save you the time,{" "}
          <a
            href="https://courtvisual.com/?team=giants"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link hover:text-link-hover transition-colors"
          >
            follow Big Blue now on CourtVisual
          </a>
          .
        </>,
      ]}
      ctaHeadline="Building a product that turns live data into a decision?"
      related={[
        {
          slug: "ai-native-product-design-lab",
          eyebrow: "Solo · AI Native Design Lab",
          title: "Building an AI-native product design lab",
          description:
            "A working AI-native product design practice. UXR tools, prototype agents, healthcare-first applications.",
          image:
            "/images/case-studies/05-ai-native-product-design-lab/01-hero-ai-native-design-lab.png",
        },
        {
          slug: "pharma-design-systems",
          eyebrow: "Multi-Brand · 3x Design Systems · Governance",
          title: "Building digital governance across 70+ therapeutic brands",
          description:
            "$3.5M+ in digital transformation. Industry-first mobile wallet integration for patient medication information.",
          image: "/images/hero/consumer-care-hub-hero-balanced.gif",
        },
      ]}
    />
  );
}
