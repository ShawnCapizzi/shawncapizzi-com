import Image from "next/image";
import Link from "next/link";
import { pageMetadata, LINKEDIN_URL } from "@/lib/seo";
import { WaysGroups, type WaysGroup } from "@/components/WaysGroups";

/**
 * /how-i-help (October 2026): the page behind the QR code on Shawn's
 * business card. The visitor met him in person and scanned the card, often
 * on a phone, so the page picks up that conversation: who he is, a few
 * ways he can help, and one ask. It is a side door, not a site page: it is
 * noindex, it is not in the sitemap, and nothing in the nav links to it.
 *
 * The QR code points at /card, which next.config.ts redirects here with
 * ?src=card so scans show up on their own in analytics. Reprinting a card
 * never changes this page's URL.
 *
 * Per the site rule since October 2026, the ask goes to /contact (calendar,
 * email, or phone), not straight to the calendar.
 */

export const metadata = {
  ...pageMetadata({
    path: "/how-i-help",
    title: "How I help",
    description:
      "Good to meet you. One flexible system, the Capizzi Process, and six ways it turns business problems into work that ships.",
  }),
  robots: { index: false, follow: true },
};

/* No numbers: these are not steps, they are a flexible system. The six ways
   sit under the Capizzi Process's three principles, two each. Each principle
   is set up once, as a header with its own drawing (components/WaysSketch.tsx)
   and its one-line definition, and the cards under it are the work that
   principle guides, each collapsed to a title and a one-line tease until
   tapped (components/WaysGroups.tsx). The names and definitions are copied verbatim from
   components/ProcessLoop.tsx (MOVES and PRINCIPLES) so the two pages cannot
   drift apart. */
const GROUPS: WaysGroup[] = [
  {
    kind: "listen",
    seed: 113,
    name: "Listen first",
    line:
      "Understand the people, problem, context, signals, and constraints before deciding what to make.",
    ways: [
      {
        title: "Figure out what comes next",
        tease: "Too many ideas, or no clear direction yet.",
        text:
          "A new product, an unclear opportunity, a customer journey that isn\u2019t working, or simply too many competing ideas. I help teams define the problem, see the opportunity, and get aligned on a direction they can act on.",
      },
      {
        title: "Bring experienced thinking into the room",
        tease: "A big decision is coming, and you want it pressure-tested first.",
        text:
          "I can join a team, advise from the outside, lead a focused engagement, or help pressure-test an important decision before more time and money are committed.",
      },
      {
        title: "Research it, then put it in a deck people can act on",
        tease: "You need to know where you stand before you spend.",
        text:
          "Competitive reviews, website and app audits with the improvements and opportunities laid out, market opportunity scans, CRM feature recommendations, and sales rep tools. Thorough on the research, direct in the deck: what I found, what to do next, and why, so a team or a leadership room can decide in one sitting.",
        wide: true,
      },
    ],
  },
  {
    kind: "visible",
    seed: 126,
    name: "Make it visible",
    line:
      "Turn the thinking into something people can react to, discuss, test, refine, and align around.",
    ways: [
      {
        title: "Make the experience better",
        tease: "Something you already have isn\u2019t working as well as it should.",
        text:
          "UX, product design, service design, customer journeys, content, design systems, and the connective tissue between them. Sometimes it\u2019s a new experience. Sometimes it\u2019s making what you already have work much better.",
      },
      {
        title: "Build the brand, not just the pieces",
        tease: "You need an identity that holds together everywhere people meet you.",
        text:
          "Logo, letterhead, brochures, website, social, and the tangible, in-person pieces people actually hold. The card you just scanned is one of them. I came up in the print and identity business, and I build the full identity, and the playbook that keeps it consistent everywhere, so a new or growing business looks like itself at every touchpoint.",
      },
      {
        title: "Take it from napkin sketch to working product",
        tease: "An idea that needs a deck, a prototype, or a proof to get funded.",
        text:
          "An idea on a napkin, a blue-sky business pitch, or a product your organization can’t picture yet. I turn it into the pitch deck, the product visualization, or the working proof of concept that wins funding, budget, or the attention of the right people, whether you’re raising from investors or making the case inside the building.",
        wide: true,
      },
    ],
  },
  {
    kind: "prove",
    seed: 152,
    name: "Prove it worked",
    line:
      "Look at what actually happened, what changed, what people did, and what the team learned.",
    ways: [
      {
        title: "Get the message out, and make it land",
        tease: "People aren\u2019t noticing, understanding, or acting.",
        text:
          "Campaigns, launch communications, content, CRM, and the creative work that gets attention and holds it. A thing nobody understands or notices doesn\u2019t get used, so the message has to be as clear as the product behind it, and it has to move people, patients, and doctors to the high-value actions that matter.",
      },
      {
        title: "Put AI to work, without losing the plot",
        tease: "You know AI should help, and you\u2019re not sure where.",
        text:
          "AI is the newest tool in modern communications, and a good one when it\u2019s in experienced hands. I use it every day to research faster, test ideas sooner, build working prototypes, and ship real products. I can help your team see where it fits, where it doesn\u2019t, and how to use it as an ally rather than a gamble.",
      },
    ],
  },
];

export default function Page() {
  return (
    <article>
      {/* HERO: the greeting, the portrait, and the short version. The
          portrait is the same card as the /about hero so the visitor
          confirms "right person" in a glance. */}
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <p className="eyebrow mb-3">How I help</p>
              <h1 className="headline-static hero-title text-balance max-w-4xl">
                Good to meet you.
              </h1>
              <p className="mt-4 md:mt-6 max-w-3xl hero-lead text-pretty">
                Glad you took the time to scan the card. The next step is
                simple: I want to hear how I can best help your company win in
                this new digital world, whether you&apos;re starting something
                or scaling something complex.
              </p>
              <div className="mt-6 md:mt-8 max-w-3xl space-y-5 text-base md:text-lg text-text-secondary leading-relaxed text-pretty">
                <p>
                  Your customers want to keep buying from you, and new buyers
                  are meeting your brand for the first time. Let&apos;s make
                  sure both get the best customer experience and find the
                  information they need quickly, so from the first look or
                  engagement they see the value and become a customer and a
                  brand advocate.
                </p>
                <p>
                  I design, build, and ship the work myself, so the thinking
                  doesn&apos;t stop at the slide.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-start lg:pt-12">
              <div className="relative rounded-2xl overflow-hidden border border-border-default shadow-xl capizzi-rim-card w-full max-w-[200px] lg:max-w-[250px] aspect-[340/430]">
                <Image
                  src="/images/brand/headshot-2026-knockout.webp"
                  alt="Shawn Capizzi"
                  fill
                  priority
                  quality={100}
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 200px, 250px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A FEW WAYS I CAN HELP (October 2026): three groups, one per
          Capizzi Process principle. Each group opens with the principle's
          drawing, name, and definition, then the two ways it guides. The
          drawing lights once as its header scrolls into view; no hover. */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title text-balance max-w-3xl">
            A few ways I can help
          </h2>
          {/* System framing (October 2026): these are not steps and not a
              fixed menu. One flexible system, named here and linked to the
              full method on /thinking, that has worked across problems, teams,
              business units, and geographies. */}
          <p className="mt-5 mb-10 md:mb-12 max-w-3xl text-base md:text-lg text-text-secondary leading-relaxed text-pretty">
            Not steps, and not a fixed menu. It&apos;s one flexible system, the{" "}
            <Link href="/thinking" className="text-link hover:text-link-hover transition-colors">
              Capizzi Process
            </Link>
            , that has worked across many different business problems, over
            teams, business units, and state lines, siloed or not.
          </p>
          <WaysGroups groups={GROUPS} />
        </div>
      </section>

      {/* THE KIND OF WORK I KNOW WELL: the client line, in the same style as
          the figures strip on /contact. */}
      <section className="py-10 md:py-14 border-t border-b border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title text-balance max-w-3xl">
            Where this has worked
          </h2>
          <p className="mt-6 max-w-3xl text-base md:text-lg text-text-secondary leading-relaxed text-pretty">
            15+ years across pharma, healthcare, financial services, and
            enterprise, with teams at Pfizer, Bloomberg, Samsung, Biogen,
            AbbVie, and others, including CRM programs built around the
            high-value actions patients and doctors take. Much of it
            regulated, most of it complex, all of it meant to ship.
          </p>
        </div>
      </section>

      {/* THE ASK: one button, to /contact, in the purple send-off block the
          homepage closes with. */}
      <section className="cta-purple-block py-20 md:py-28">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="section-title">Start wherever you are.</h2>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed text-pretty">
              You don&apos;t need a perfectly defined brief, a budget, or a
              plan. Bring me the problem, the opportunity, the idea, or the
              thing that just doesn&apos;t feel like it&apos;s working the way
              it should. A 30-minute conversation is usually enough to know
              whether I can help.
            </p>
            {/* The napkin line from /contact, same mono style and pencil. It
                pays off the napkin-to-product card above. */}
            <p className="mt-8 font-mono text-base md:text-lg text-link tracking-tight">
              <span aria-hidden="true">&#9999;&#65039;</span>{" "}
              Napkin sketches welcome.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#6B5CFF] hover:bg-[#7B6CFF] text-white text-base font-medium tracking-tight hover:scale-[1.02] transition-all"
              >
                Start a conversation
                <span aria-hidden="true" className="ml-2">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LOOK AROUND FIRST: four links, each with its own job (proof, method,
          the ideas, the lowest-commitment option), beside the book. */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
            <div className="md:col-span-6">
              <p className="metadata-label mb-4">Prefer to look around first?</p>
              <ul className="space-y-4">
                {[
                  { href: "/work", label: "See my work", external: false },
                  { href: "/thinking", label: "The Capizzi Process", external: false },
                  { href: "/book/chapter-1", label: "Read the first chapter", external: false },
                  { href: LINKEDIN_URL, label: "Connect on LinkedIn", external: true },
                ].map((item) =>
                  item.external ? (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-lg md:text-xl font-medium text-link hover:text-link-hover transition-colors"
                      >
                        {item.label}
                        <span aria-hidden="true" className="ml-2">&rarr;</span>
                      </a>
                    </li>
                  ) : (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="inline-flex items-center text-lg md:text-xl font-medium text-link hover:text-link-hover transition-colors"
                      >
                        {item.label}
                        <span aria-hidden="true" className="ml-2">&rarr;</span>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            {/* The book and the Clarity Cards, the IP Shawn mails to senior
                contacts with the card. For someone who received both, seeing
                them here closes the loop the identity card opens. */}
            <div className="md:col-span-6 grid grid-cols-2 gap-5 md:gap-6">
              <figure>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border-default bg-bg-raised">
                  <Image
                    src="/images/process/seeing-past-the-cage-book.jpg"
                    alt="Seeing Past the Cage, Shawn Capizzi's book on communication design in the age of AI"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 font-mono text-xs md:text-sm text-text-secondary tracking-tight">
                  Seeing Past the Cage
                </figcaption>
              </figure>
              <figure>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border-default bg-bg-raised">
                  <Image
                    src="/images/process/clarity-cards-desk.jpg"
                    alt="Seven printed Clarity Cards dealt across a wooden desk beside a keyboard and mouse"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 font-mono text-xs md:text-sm text-text-secondary tracking-tight">
                  Clarity Cards
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
