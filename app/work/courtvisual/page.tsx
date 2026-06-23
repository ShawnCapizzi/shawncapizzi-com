import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { TiltedPhonePair } from "@/components/TiltedPhonePair";
import { RotatingProductShowcase } from "@/components/RotatingProductShowcase";
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
      heroImage={`${ASSET_BASE}/01-hero-courtvisual-slate.png`}
      heroImageAlt="CourtVisual home screen: the welcome headline, a Knicks game scored 9.3 out of 10, and the team and sport picker"
      heroSlot={
        <TiltedPhonePair
          left={{
            src: `${ASSET_BASE}/courtvisual-onboarding-demo.gif`,
            alt: "CourtVisual onboarding: following a team, and the app taking on that team's colors and reordering the slate.",
            caption: "Onboarding: pick a team, the app suits up",
          }}
          right={{
            src: `${ASSET_BASE}/courtvisual-ranking-demo.gif`,
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
            "Product design · Experience architecture · Full-stack build · Live data integration · Affiliate strategy",
        },
        {
          label: "STACK",
          value:
            "Next.js · React · Tailwind · Supabase · Vercel · ESPN · The Odds API · Ticketmaster",
        },
      ]}
      challenge={[
        "A fan's question is simple, and nobody answers it: what's worth watching tonight, and where do I watch or go? To answer it today you check ESPN for the schedule, a sportsbook like FanDuel for the odds, a streaming guide for the channel, and Ticketmaster for seats. Four apps, four logins, and not one of them tells you the thing you actually want to know, which is whether the game is worth your night.",
        "The reason the platforms avoid that question is that the answer is subjective. A neutral classic, a bitter rivalry, your team fighting for a playoff spot, a title decider on the line: these are not the same to the same person, let alone to different people. A score that means anything has to weigh the stakes of the game and the taste of the viewer at the same time.",
        "So the find, watch, buy journey stays split across companies that each own one slice and have no reason to connect them. The connective tissue, an honest read that turns raw sports data into a decision, was missing. That gap is the product.",
      ]}
      approach={[
        "I started with the score. I broke excitement into a few factors a fan already feels: the stakes (playoff and championship weight), the rivalry, the race (how live the standings and the matchup are), and the matchup history. Every game gets a 0 to 10 score and a plain-English verdict, from \u201Cgood game\u201D up to \u201Chottest ticket.\u201D The math is explainable on purpose. A fan should be able to see why a game scored the way it did, not just trust a number.",
        "Then I fed it from live pipes instead of a static list. v1 was a hand-built slate, useful for proving the idea and nothing more. The live app pulls fixtures, scores, and standings from ESPN's feeds, derives competitiveness from moneyline odds through The Odds API, resolves where to watch from broadcast data, and links the ticket path through Ticketmaster. The score is a living read on tonight, refreshed from the same kind of data the big platforms sit on, not a snapshot I curated by hand.",
        "Most of the refinement work was making the score honest against real data. The 2026 World Cup feed forced the hard calls: fixtures come first, so a match exists whether or not tickets are listed yet; knockout rounds carry a stakes floor; competitiveness is derived from the odds rather than asserted. When I added player follows, the language stayed honest too. The app surfaces \u201CMessi's Argentina,\u201D never a promise that Messi will start, because lineups aren't set until kickoff. The credibility of the whole thing rests on not overclaiming.",
        "I also made the score yours. A neutral-fan baseline keeps the ranking fair, then the viewer tunes what counts with sliders and presets, and follows teams, sports, players, and a home city. The same slate reorders for a Knicks die-hard, a neutral League Pass watcher, and someone who only follows Messi. It's personalization that actually changes the ranking, not a cosmetic filter on top of it.",
        "Then I built the experience around the data, which is the part most data products skip. CourtVisual runs on one restrained design system so the supporting surfaces, onboarding, settings, loading, empty states, get out of the way, while the data-rich game card stays rich. That is the same instinct I bring to client work: the experience architecture around the model is the actual product, and the model is just an ingredient.",
      ]}
      pullQuote={[
        "ESPN tells you the score. A sportsbook tells you the odds. Ticketmaster sells you the seat. None of them tell you whether the game is worth your night.",
        "The score isn't the hard part. Making it honest, and making it yours, is the hard part.",
        "I didn't want a database of games. I wanted a living read on what's worth watching, refreshed from the same pipes the big platforms run on.",
      ]}
      projectShowcases={[
        {
          eyebrow: "The engine · A score you can read",
          title: "The excitement score, made legible and yours",
          description: [
            "Every game carries a 0 to 10 ring and a plain-English verdict, scored from four factors a fan already understands: stakes, rivalry, the race, and the matchup. The card shows the why, not just the number, so the score earns trust instead of asking for it.",
            "A neutral-fan baseline keeps the ranking fair for anyone, rooting or just watching. From there the viewer tunes what counts, with quick presets or per-factor sliders. The factors carry the same color language on the card and in settings, so the thing you weight up is the thing you see drive the score.",
          ],
          images: [
            {
              src: `${ASSET_BASE}/02-game-card-score-ring.png`,
              alt: "A CourtVisual game card: a 0 to 10 excitement score ring with the plain-English verdict, Worth the watch, everything on the line.",
              browserFrame: { url: "courtvisual.com", aspectRatio: 4 / 3 },
            },
          ],
        },
        {
          eyebrow: "The progression · From PRD to shipped",
          title: "How the score card grew up",
          description: [
            "v1 came straight from the PRD: a Game Excitement Analyzer with raw priority sliders and an uncapped score that could read 11.8. It proved the idea and nothing more. The factors were there; the discipline wasn't.",
            "From there the card got honest. The score was capped to a legible 0 to 10, the factors were renamed and reweighted to what a fan actually feels, Stakes, Rivalry, the race, and Matchup, and the breakdown moved onto the card itself so the number always shows its work. The shipped card is the same idea, finally legible.",
          ],
          customContent: (
            <RotatingProductShowcase
              aspectRatio="4 / 3"
              intervalMs={3600}
              items={[
                {
                  src: `${ASSET_BASE}/09-progression-prd.png`,
                  alt: "CourtVisual v1 from the PRD: a Game Excitement Analyzer with four priority sliders (Playoff Stakes, Rivalry, Hot Player, Historical Meaning) and an uncapped total weight.",
                  label: "v1 · straight from the PRD",
                },
                {
                  src: `${ASSET_BASE}/10-progression-iteration.png`,
                  alt: "CourtVisual v2: an early dark game card with a score ring and a factor breakdown using the older names Playoff stakes, Rivalry, Star power, and Historic weight.",
                  label: "v2 · the first dark iteration",
                },
                {
                  src: `${ASSET_BASE}/11-progression-shipped.png`,
                  alt: "CourtVisual shipped card: a capped 0 to 10 score with the current factor breakdown, Stakes, Rivalry, The race, and Matchup, plus a Fan lens adjustment.",
                  label: "v3 · shipped, capped and legible",
                },
              ]}
            />
          ),
        },
        {
          eyebrow: "Live data · Not a static list",
          title: "Scored from live pipes, and find, watch, buy on one card",
          description: [
            "The slate is built from real-time feeds, not a database I maintain by hand: ESPN for fixtures, scores, and standings; The Odds API for the moneyline that competitiveness is derived from; broadcast data for where to watch; Ticketmaster for the ticket path. The score re-reads as the night develops.",
            "That's also where the market position lives. The same card that tells you a game is worth watching tells you where to watch it and how to get in, the three jobs a fan currently splits across ESPN, a sportsbook, a streaming guide, and Ticketmaster, collapsed into one decision.",
          ],
          images: [
            {
              src: `${ASSET_BASE}/04-live-slate-watch-and-tickets.png`,
              alt: "CourtVisual search results, Rivalry Showdowns: ranked Mets vs Yankees Subway Series games, each scored with a why-this-game-scores breakdown and a ticket path.",
            },
            {
              src: `${ASSET_BASE}/04-live-slate-watch-and-tickets-2.png`,
              alt: "More ranked cards in the CourtVisual Mets feed: a Yankees Subway Series game scored 8.3 and a Phillies rivalry game scored 8.0, each with where-to-watch options and a ticket path.",
            },
          ],
        },
        {
          eyebrow: "Built for the moment · 2026 World Cup",
          title: "The World Cup, live and in its own colors",
          description: [
            "The tournament feed is fixtures-first, pulled from ESPN, so a match shows up the moment it's scheduled, independent of whether tickets are listed yet. Knockout rounds carry a stakes floor, and competitiveness comes from the live odds.",
            "Each card wears both nations' federation crests and team color. The color is run through a luminance floor so the navy and near-black kits that would normally vanish on a dark card stay legible, the kind of detail that separates a real product from a feed wrapped in a template.",
          ],
          images: [
            {
              src: `${ASSET_BASE}/05-world-cup-crest-cards-1.png`,
              alt: "CourtVisual World Cup league view: Turkiye vs United States scored 8.0, both federation crests beside the matchup, green pitch color, and where-to-watch options.",
            },
            {
              src: `${ASSET_BASE}/05-world-cup-crest-cards-2.png`,
              alt: "CourtVisual World Cup cards for Colombia vs Portugal and Norway vs France, each with both national crests and the why-this-game-scores breakdown.",
            },
          ],
        },
        {
          eyebrow: "Under the hood · The build, not just the screens",
          title: "The back end is mine too",
          description: [
            "A scoring product is only as trustworthy as the data under it, so I built that layer myself instead of faking it with a static file. Each fan's state, their teams, sliders, and follows, lives in Supabase behind row-level security, so a row is readable only by the person it belongs to. Not a setting in a dashboard, a policy enforced at the database.",
            "The live feeds are wired the same way: ESPN for fixtures and standings, The Odds API for the moneyline that competitiveness is derived from, Ticketmaster for the ticket path, each keyed and handled server-side so the score re-reads from real data rather than a snapshot. The screens get the attention. This is the part that makes the number mean something.",
          ],
          customContent: (
            <RotatingProductShowcase
              aspectRatio="16 / 10"
              items={[
                {
                  src: `${ASSET_BASE}/07-engine-supabase-rls.png`,
                  alt: "Supabase SQL editor: a user_state table with row-level security enabled and an 'own state' policy restricting each row to its owner via auth.uid().",
                  label: "Row-level security · each fan's state locked to them",
                },
                {
                  src: `${ASSET_BASE}/08-engine-service-role-key.png`,
                  alt: "Supabase service_role key marked secret, warning that it bypasses row-level security and must stay server-side.",
                  label: "Service-role key · kept server-side, never shipped",
                },
              ]}
            />
          ),
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
            "The excitement read, where to watch, and the ticket path on one card. A journey that's split across ESPN, sportsbooks, streaming guides, and Ticketmaster today.",
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
          headline: "Built solo, concept to live PWA",
          description:
            "Product design and full-stack engineering, on Next.js, Supabase, and Vercel, deployed continuously from v1 to a mature sports-entertainment tool.",
        },
      ]}
      closer={[
        "The big platforms each own a slice of the fan's night and have no reason to connect them. The opportunity was never more data. It was the connective tissue, the honest read that turns data into a decision.",
        "CourtVisual is a product. It's also a proof of how I work: the score is the easy part, and the experience architecture around it is the actual product. The instinct is the same whether the thing in the middle is a sports feed or an AI model.",
        <>
          That&apos;s the build. That&apos;s what I bring into{" "}
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
