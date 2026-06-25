import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { TiltedPhonePair } from "@/components/TiltedPhonePair";
import { PhoneFan } from "@/components/PhoneFan";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CourtVisual: Scoring Sports by What's Worth Watching",
  description:
    "A multi-sport app that scores how worth watching tonight's games are, tuned to your taste, then points you to where to watch and how to get in. Built solo from a single idea to a live PWA, on real-time data pipes.",
};

const ASSET_BASE = "/images/case-studies/07-courtvisual";

export default function Page() {
  return (
    <CaseStudyLayout
      eyebrow="(Case Study)"
      title="CourtVisual"
      subtitle="A multi-sport app that scores how worth watching tonight's games are, tuned to your taste, then points you to where to watch and how to get in. Built solo, concept to live PWA, on real-time data pipes."
      heroImage={`${ASSET_BASE}/02-game-card-score-ring.png`}
      heroImageAlt="CourtVisual home screen: the welcome headline, a Knicks game scored 9.3 out of 10, and the team and sport picker"
      heroSlot={
        <TiltedPhonePair
          rightStartDelayMs={0}
          leftStartDelayMs={16000}
          left={{
            src: "/videos/courtvisual-onboarding-demo.mp4",
            poster: "/videos/courtvisual-onboarding-poster.jpg",
            alt: "CourtVisual onboarding: following a team, and the app taking on that team's colors and reordering the slate.",
            caption: "Onboarding: pick a team, the app suits up",
          }}
          right={{
            src: "/videos/courtvisual-ranking-demo.mp4",
            poster: "/videos/courtvisual-ranking-poster.jpg",
            alt: "CourtVisual live slate: tonight's games scored 0 to 10 and ranked, each card showing where to watch and a ticket path.",
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
            "Product design · Experience architecture · AI-assisted full-stack build · Live data integration",
        },
        {
          label: "STACK",
          value:
            "Next.js · React · Tailwind · Supabase · Vercel · Claude Code · ChatGPT",
        },
      ]}
      challenge={[
        "The idea started at a Mets game. A player was closing in on a record, and the only reason I knew to watch for it was that I was in the building. That grew into a bigger question: not which games are historic, but which are worth your night at all.",
        "On any given night the sports calendar is crowded, dozens of games competing for the same few hours, and nothing tells you which one is worth showing up for. The schedule lives in one app, where to watch in another, tickets in a third. Each owns a slice; none answers the only question a fan actually has.",
        "That question is hard because the answer is personal. A neutral classic, a bitter rivalry, your team chasing a playoff spot: not the same to any two people. An honest read has to weigh the stakes of the game and the taste of the viewer at once, and that connective tissue, the thing that turns raw sports data into a decision, is what nobody built. That gap is the product.",
      ]}
      approach={[
        "I started with the score. Excitement breaks into factors a fan already feels: stakes, rivalry, the race (how live the standings and matchup are), and matchup history. Every game gets a 0 to 10 score and a plain-English verdict, from \u201Cgood game\u201D to \u201Chottest ticket,\u201D and it shows why, so you trust the read instead of a bare number.",
        "Then I fed it from live pipes, not a static list. v1 was a hand-built slate, enough to prove the idea. The live app pulls fixtures, scores, and standings, reads competitiveness from how close a matchup projects, and resolves where to watch and how to get in. It's a living read on tonight, not a snapshot I curated by hand.",
        "Most of the work was making the score honest against real data. The 2026 World Cup forced the calls: fixtures come first, so a match exists whether or not tickets are listed; knockout rounds carry a stakes floor; competitiveness is derived, not asserted. Player follows stayed honest too, the app surfaces \u201CMessi's Argentina,\u201D never a promise he'll start. The credibility rests on not overclaiming.",
        "I made the score yours. A neutral-fan baseline keeps it fair, then you tune what counts with sliders and presets and follow teams, sports, players, and a city. The same slate reorders for a Knicks die-hard, a neutral League Pass watcher, and a Messi-only fan, personalization that changes the ranking, not a filter on top.",
        "Then I built the experience around the data, the part most data products skip. One restrained system keeps the supporting surfaces, onboarding, settings, loading, empty states, out of the way so the data-rich card stays the star. That's the instinct I bring to client work: the architecture around the model is the product; the model is just an ingredient.",
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
              "Left to right is the whole arc. I wrote a full PRD and product vision, and v1 came straight out of it: a Game Excitement Analyzer with raw sliders and an uncapped score that ran past 14. It proved the idea, but it wasn't yet useful. The middle build capped the score to a legible 0 to 10 and ranked the slate. The third is where it landed: each card carries the four factors a fan actually feels, Stakes, Rivalry, the race, and Matchup, with a plain-English read of why it scored that way.",
              "Plenty of people are vibe-coding apps right now, and most ship something oversaturated and purposeless because they have no discipline about real value. I built this with Claude Code and ChatGPT, but I stayed the orchestrator: I described what I wanted in screenshots, copy, and micro-interaction notes, and directed the tools until it matched the picture in my head. Miss on the first pass, land it on the second or third.",
              "My job is to bring judgment, not to let AI keep bolting on features so it feels like progress. Trimming, setting the visual hierarchy and pattern system, deciding how someone with zero context gets onboarded, which features earn their place, which surprises people get to keep or switch off, that editing is the product. It's the part that comes from years with devs, creative directors, and real users.",
            ].map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="mt-10 md:mt-14">
            <PhoneFan
              phones={[
                {
                  src: `${ASSET_BASE}/09-progression-prd.png`,
                  alt: "v1, from the PRD: a Game Excitement Analyzer with four priority sliders and an uncapped total weight over 100 percent.",
                  label: "v1 · the PRD",
                },
                {
                  src: `${ASSET_BASE}/10-progression-ranking.png`,
                  alt: "The middle build: a ranked slate with each game scored and a why-this-game-scores breakdown on the card.",
                  label: "v2 · ranked build",
                },
                {
                  src: `${ASSET_BASE}/11-progression-card.png`,
                  alt: "The shipped card: a Subway Series game scored with the current factors, Stakes, Rivalry, The race, and Matchup, plus a plain-English verdict and a ticket path.",
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
            "The slate is built from real-time feeds, not a database I maintain by hand. Fixtures, scores, and standings, how competitive a matchup projects, where to watch, and the path to tickets all flow in live, and the score re-reads as the night develops.",
            "That's also where the market position lives. The same card that tells you a game is worth watching tells you where to watch it and how to get in, the jobs a fan currently splits across a handful of apps, collapsed into one decision.",
          ],
          images: [
            {
              src: `${ASSET_BASE}/04-live-slate-watch-and-tickets.png`,
              alt: "CourtVisual search results, Rivalry Showdowns: ranked Mets vs Yankees Subway Series games, each scored with a why-this-game-scores breakdown and a ticket path.",
              maxWidthClass: "max-w-xl",
            },
          ],
        },
        {
          eyebrow: "Built for the moment · 2026 World Cup",
          title: "The World Cup, live and in its own colors",
          description: [
            "With the whole sports calendar crowded, the World Cup is the night most people actually want to find, and the product leans in. The tournament feed is fixtures-first, pulled from live international feeds, so a match shows up the moment it's scheduled, whether or not tickets are listed yet.",
            "Each card wears both nations' federation crests and national colors, the one place the product shows a crest at all, since club cards stay color-only by design. The color runs through a luminance floor so the navy and near-black kits that would vanish on a dark card stay legible, the kind of detail that separates a real product from a feed dropped into a template.",
          ],
          images: [
            {
              src: `${ASSET_BASE}/05-world-cup-crest-cards-1.png`,
              alt: "CourtVisual World Cup league view: Turkiye vs United States scored 8.0, both federation crests beside the matchup, green pitch color, and where-to-watch options.",
              maxWidthClass: "max-w-xl",
            },
          ],
        },
        {
          eyebrow: "Under the hood · The build, not just the screens",
          title: "I found the pipes, then wired them",
          description: [
            "A scoring product is only as trustworthy as the data under it. I used AI to map which live feeds existed, then architected the data layer myself. Each fan's state, teams, sliders, and follows, lives in Supabase behind row-level security, enforced at the database, not as a dashboard toggle, so a row is readable only by its owner.",
            "The feeds are keyed server-side and deployed continuously on Vercel. The tools moved fast through the boilerplate; the architecture, what connects to what and what the score is allowed to claim, stayed my call. The screens get the attention. This is the part that makes the number mean something.",
          ],
          images: [
            {
              src: `${ASSET_BASE}/07-engine-supabase-rls.png`,
              alt: "Supabase SQL editor: a user_state table with row-level security enabled and an 'own state' policy restricting each row to its owner via auth.uid().",
            },
          ],
        },
      ]}
      outcomes={[
        {
          headline: "A live, multi-sport excitement engine",
          description:
            "Every game scored 0 to 10 from real-time data, each with a plain-English verdict. A living read on tonight, not a static list of fixtures.",
        },
        {
          headline: "Personalization that reorders the slate",
          description:
            "Presets, per-factor sliders, and follows for teams, sports, players, and a city. The same games rank differently for a die-hard, a neutral, and a single-player fan.",
        },
        {
          headline: "Find, watch, and buy, unified",
          description:
            "The excitement read, where to watch, and the ticket path on one card. A journey that's split across separate schedule, broadcast, and ticketing apps today.",
        },
        {
          headline: "Shipped for a live moment, the 2026 World Cup",
          description:
            "A fixtures-first tournament feed with per-team federation crests and luminance-safe color, plus honest, team-level player follows.",
        },
        {
          headline: "A design system that scales calm",
          description:
            "One restrained system across onboarding, settings, loading, and empty states, so the data-rich game card stays the star instead of the chrome.",
        },
        {
          headline: "Concept to live PWA in 50 to 60 hours",
          description:
            "Product design and AI-assisted full-stack engineering, on Next.js, Supabase, and Vercel. Designed, built, and shipped solo in roughly 50 to 60 hours of focused work, deployed continuously from v1 to a mature tool.",
        },
      ]}
      closer={[
        "The big platforms each own a slice of the fan's night and have no reason to connect them. The opportunity was never more data. It was the connective tissue, the honest read that turns data into a decision.",
        "CourtVisual is one person defining the product, doing the research, connecting the pipes, refining the UI, and shipping it, all of it solo. Now picture that same person inside your walls, with your data, your team, and real users in the room. That is what a strategist and designer looks like now: someone who folds AI in for the economics and the speed to market without giving up the judgment that decides whether a thing is worth shipping.",
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
