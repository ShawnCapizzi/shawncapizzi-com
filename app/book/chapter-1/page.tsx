import type { Metadata } from "next";
import { Reader, type ReaderPage } from "@/components/Reader";
import { ScrollToTop } from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "The Human Condition — Chapter 1 | Clarity Is the Advantage",
  description:
    "Read Chapter 1 of Clarity Is the Advantage: the book on making thoughtful design decisions that create lasting competitive advantage in regulated industries. Free, one chapter at a time.",
};

/**
 * CHAPTER 1 CONTENT
 * ============================================================================
 * Formatted as book-style "spreads." Each ReaderPage is one horizontal slide
 * the reader can scroll within. Blocks render as:
 *   { type: "heading" } → H2 section head
 *   { type: "para" }    → body paragraph
 *   { type: "quote" }   → pull quote (accent rule, larger serif)
 *
 * To re-paginate, move blocks between pages. To add a pull quote, insert a
 * { type: "quote", text: "...", cite: "..." } block.
 *
 * ── ABOUT THE SONG LYRICS ───────────────────────────────────────────────────
 * Your manuscript quoted lines from three songs. Reproducing song lyrics in a
 * published work requires licensing from the rights holders, so the three spots
 * below PARAPHRASE the lyric and name the song instead of printing the line.
 * Each is marked with a // LYRIC: comment. If you clear the rights, replace the
 * paraphrased sentence with the exact licensed line at that spot.
 *   1. "Have Yourself a Merry Little Christmas"  — page 1, opening
 *   2. Taylor Swift, "Out of the Woods"          — page 1
 *   3. Lou Reed, "It's a Temporary Thing"        — page 3
 * ============================================================================
 */
const CHAPTER_ONE: ReaderPage[] = [
  // ---------- Page 1 · The opening hook ----------
  {
    blocks: [
      { type: "heading", text: "Muddling Through: The Universal Experience of Being Human" },
      // HOLIDAY SONG — interpretive, no lyric reproduced.
      { type: "para", text: "There's a moment in the old holiday standard \u201CHave Yourself a Merry Little Christmas\u201D that has always stayed with me. Tucked inside a song about joy is a quiet, almost reluctant admission: that sometimes the honest thing to say is we'll get by however we can until things get better. It's beautiful writing because it refuses to pretend. It names the gap between the life we want and the one we're living through right now." },
      { type: "para", text: "That gap isn't just poetic. It's the reality for most people interacting with your digital products. They're not arriving in their peak moments of clarity and calm. They're arriving while dealing with a diagnosis, after learning their rent jumped, while the car is broken down and the kid still needs picking up. They come carrying invisible burdens, temporary crises, and the accumulated weight of a full life." },
      // TAYLOR SWIFT — interpretive, no lyric reproduced.
      { type: "para", text: "Taylor Swift built an entire song, \u201COut of the Woods,\u201D around one anxious question, asked over and over. Some version of: are we safe yet? Are we through the worst of it? She keeps asking because that's how the question really lives in us. We don't ask it once and get an answer. We ask it again and again until the danger lifts. It's the most human question there is, and it doesn't care whether the woods are a relationship, a diagnosis, a layoff, or a transit app that won't load while you're trying to get your kid home." },
      { type: "para", text: "Every user who reaches your product is carrying some version of that question." },
    ],
  },

  // ---------- Page 2 · The weight & the fragility ----------
  {
    blocks: [
      { type: "heading", text: "The Weight of Universal Experiences" },
      { type: "para", text: "The list of what people might be dealing with extends far beyond financial stress or work pressures. Divorce, separation from a partnership, the fragility of pregnancy, the heartbreak of a miscarriage. These are profound life events that completely reshape how someone moves through the world, including how they interact with digital products." },
      { type: "para", text: "These experiences have peaks and valleys, and most importantly, they come with ongoing education and learning. Someone dealing with divorce isn't just sad one day and fine the next. There are good hours and devastating hours, sometimes within the same day. Someone navigating pregnancy might feel hopeful in the morning and anxious by evening. These emotional states are fluid and unpredictable." },
      { type: "para", text: "People are constantly learning how to cope with these experiences, seeking information, trying to understand their options. They might be researching lawyers, looking for support groups, reading about medical procedures, or simply trying to figure out how to tell their family. Your product might be the tool they use during these vulnerable moments of learning and decision-making." },
      { type: "para", text: "What's crucial to understand is that these experiences are truly universal. They cut across economic lines, demographics, and customer tenure. The executive who's been using your B2B platform for years might be going through a separation. The new user signing up for your health app might have just experienced pregnancy loss. Rich, poor, new to your funnel, or in your customer journey since day one. Everyone carries these invisible weights." },
      { type: "heading", text: "The Fragility of Context: How Quickly Everything Changes" },
      { type: "para", text: "A user's emotional state and life circumstances can shift as quickly as yours or those of people you love. You can wake up having a great day, take that first sip of coffee from your favorite caf\u00E9, and if it's too hot, suddenly your entire context changes. The pain, the spill on your white shirt before an important interview, the frustration of it. It all cascades into how you'll interact with every subsequent experience that day." },
      { type: "para", text: "When your car breaks down while you're trying to pick up your child from school, your mental model shifts instantly. You're no longer a casual browser of information; you're someone in crisis mode who needs solutions fast. Something that was easy, clear, and direct becomes essential rather than convenient." },
      { type: "para", text: "These context shifts happen constantly, and they're often invisible to the teams building digital experiences. What seems obvious and intuitive to a product team working in a controlled environment becomes impossibly complex to someone who's having their 47th decision of an overwhelming day." },
      { type: "para", text: "This is where empathy becomes not just nice-to-have, but business-critical. People interact with products when they're stressed, rushed, worried, grieving, angry, or simply mentally exhausted. If we design assuming users are always in that ideal \u201Cbefore the coffee burns their tongue\u201D state, we're failing the majority of real human moments." },
    ],
  },

  // ---------- Page 3 · Innovation without empathy, and the anchor ----------
  {
    blocks: [
      { type: "heading", text: "When Innovation Lacks Empathy: The Hidden Cost of Digital Disruption" },
      { type: "para", text: "Context shifts aren't just personal. They happen at the product level too. When companies undergo redesigns, often driven by new design leadership or creative agencies, there's frequently a disconnect between innovation and empathy. Teams will \u201Cblow up\u201D existing experiences, changing nomenclature, button colors, layout, and navigation conventions without considering the human cost." },
      { type: "para", text: "Users aren't just adapting to new features; they're grieving the loss of familiarity. Someone who could previously navigate your app while distracted or stressed now has to relearn it when they might already be having their worst day. This approach essentially tells loyal users that their investment in learning your system was worthless." },
      { type: "para", text: "True empathy in redesign means auditing current patterns and carrying over the best and most useful elements. It means understanding that people rely on digital tools as stable anchors when everything else feels uncertain. When you suddenly change that anchor without consideration, you're adding stress to someone who may already be overwhelmed." },
      { type: "heading", text: "The Anchor in the Storm: Lou Reed and the Power of Repetition" },
      // LOU REED — interpretive, no lyric reproduced. Your insight is the hero.
      { type: "para", text: "Lou Reed understood something about endurance that most designers don't. In \u201CIt's a Temporary Thing,\u201D the song doesn't argue its point. It drums it into you. The same insistent hi-hat, the same steady return, over and over, until the repetition itself becomes the meaning. This passes. The discomfort isn't permanent. You'll get through it." },
      { type: "para", text: "That isn't just a songwriting trick. It's an interface principle. When someone is already overwhelmed, the last thing they need is novelty. A pattern they've seen a hundred times asks nothing of them. It's the closest a screen gets to a steady hand on the shoulder, a quiet reassurance that they still know where they are and what comes next." },
      { type: "quote", text: "Design for the temporary crisis, the temporary confusion, the temporary pain. Because if your interface works for someone having their worst day, it'll work brilliantly for someone having their best day too." },
    ],
  },

  // ---------- Page 4 · Expert knowledge & digital tone ----------
  {
    blocks: [
      { type: "heading", text: "The Curse of Expert Knowledge: Designing for No Context" },
      { type: "para", text: "One of the biggest barriers to empathy in product development is the curse of expert knowledge. When you live and breathe your product every day, you forget that industry jargon and assumed knowledge mean nothing to someone who just needs to pay their electric bill or check their prescription status." },
      { type: "para", text: "The most valuable exercise any product team can do is to disconnect completely and experience their own product with zero context. Drop yourself into your marketing communications, your website, your app as if you've never seen it before. Can you quickly understand: This is what we are. This is what we do. This is how we can help you solve your problems. This is how you complete a task." },
      { type: "para", text: "This extends to language accessibility as well. Someone dealing with a medical crisis doesn't have the mental bandwidth to decode corporate jargon. A parent trying to figure out school payments at 11 PM after a 12-hour workday needs second-grade reading level clarity, not MBA-speak. For global companies, this means considering not just English and Spanish as baselines, but the languages of your actual users, whether that's Korean, Russian, Polish, or others." },
      { type: "para", text: "Language barriers compound stress exponentially. Imagine being that person whose car broke down while picking up their child, AND they're navigating an interface in their second language, AND the instructions use unnecessarily complex terminology." },
      { type: "heading", text: "The Nuance of Digital Tone: Reading Between the Lines" },
      { type: "para", text: "As customer experiences become more tailored and personalized based on data, the ability to interpret digital tone becomes crucial. The way AI can interpret your input versus the way a friend sitting across from you in a caf\u00E9 can appreciate tone, intent, emotion, character, and even regional dialect creates both opportunities and challenges." },
      { type: "para", text: "Consider the spectrum of gratitude: \u201Cthanks\u201D versus \u201Cthank you\u201D versus \u201Cyeah thanks\u201D versus \u201Csincerely, I sincerely thank you.\u201D Each carries completely different emotional weight. The first might indicate efficiency or someone who's rushed. The second shows more formal respect. \u201CYeah thanks\u201D could signal casualness or slight dismissiveness. The formal \u201Csincerely\u201D version suggests genuine gratitude, possibly from someone of an older generation or a non-native speaker." },
      { type: "para", text: "These tonal nuances reveal context clues about the person's state of mind, cultural background, and relationship to your brand. But as we grow more sophisticated in reading these signals, we walk a fine line between helpful personalization and invasive surveillance." },
    ],
  },

  // ---------- Page 5 · Privacy & true utility ----------
  {
    blocks: [
      { type: "heading", text: "The Privacy Paradox: Personalized but Not Creepy" },
      { type: "para", text: "One thing to keep in mind as we strive for personalization: we don't want to come off as a peeping Tom. Users should never have that \u201CI didn't know they knew that about me\u201D reaction. There's a narrow sweet spot between helpful and creepy, often defined by user expectation versus brand knowledge." },
      { type: "para", text: "When someone explicitly shares information or preferences, using that feels helpful. But inferring too much from behavioral data, like knowing someone's 2 AM browsing habits and sending a \u201Chaving trouble sleeping?\u201D notification, crosses into uncomfortable territory fast." },
      { type: "para", text: "Digital signals that brands can appropriately track and act upon include how long users take on a site, their response time, and interaction patterns. These reveal whether someone is highly focused, whether navigation is clear, and whether they understand what they can accomplish and how to accomplish it. Someone clicking rapidly through pages might be frustrated or very familiar with your product. Someone lingering on a form for ten minutes might be confused, dealing with complex circumstances, or simply multitasking." },
      { type: "para", text: "These patterns tell you about the experience itself without crossing privacy boundaries. The empathetic response isn't always to intervene. Sometimes it's to simplify what users see next, or provide clearer visual hierarchy." },
      { type: "heading", text: "True Utility in a Full Life" },
      { type: "para", text: "The best way to ensure commercial communications and brands stay connected to user struggles is by literally listening to the market, talking to users, and analyzing data to understand where people actually go on websites and where gaps exist. But more fundamentally, it requires understanding that a user's life is full. They have to help their parents, get to class, buy gas, fold laundry, manage vacation plans, do their job, work late." },
      { type: "quote", text: "Your brand and product is not a celebration of their life. It has to be a true utility in their life." },
      { type: "para", text: "This is the fundamental shift from ego-driven product development to truly empathetic design. The best products are the ones you barely notice because they just work, like a perfectly calibrated doorknob or a traffic light that turns green at just the right moment. They solve the problem and get out of the way." },
      { type: "para", text: "People don't want to be delighted or engaged or part of a brand journey when they're muddling through life's challenges. They want the task completed so they can get back to living. They need products to be invisible handholds that help them climb out of confusion, not additional obstacles that make them feel stupid or excluded." },
    ],
  },

  // ---------- Page 6 · Redefining success & honest metrics ----------
  {
    blocks: [
      { type: "heading", text: "Redefining Success: When Invisible Utility Wins" },
      { type: "para", text: "As we create richer customer journeys grounded in empathy, we must redefine how we measure success. If true empathy means becoming invisible utility that helps people accomplish goals quickly, then traditional engagement metrics become counterproductive." },
      { type: "para", text: "It's very important to understand and define your business goals currently with the touchpoints you have in market or will be updating. Then we can decide on what indicators will equal success. What metrics are we tracking? Keep it simple and targeted. We will check these particular things to gain X amount of information based on engagement or conversions, and then we will redefine and perhaps A/B test in the marketplace for insight A and insight B." },
      { type: "para", text: "The amount of time spent on page, content sharing, and community engagement with particular information become better indicators of value. When someone shares your content or engages deeply with specific information, they're saying \u201Cthis was so helpful I want others to benefit\u201D or \u201Cthis was worth my limited attention.\u201D" },
      { type: "para", text: "This flips the engagement model from \u201Chow do we keep them here longer?\u201D to \u201Chow do we help them so effectively that they remember us positively and return when needed?\u201D The longer a user engages means there's greater value for them, but that engagement should be purposeful, not manufactured." },
      { type: "heading", text: "Grounded in Reality: Honest Metrics for Real Impact" },
      { type: "para", text: "To clearly define which metrics are self-indulgent versus which move business forward, we must stay grounded in reality. As teams build products, emotional attachment develops. There are stakeholder reactions, miscellaneous requests that appear from nowhere. If we're mature and honest about building products that serve true customer needs, we must provide some mechanism of reality." },
      { type: "para", text: "Teams get emotionally attached to a design, to a picture, to a color combination. Even though that color combination might not be accessible or WCAG compliant, there are constituents on the team who still feel that's the best route. At this point in time, it's a vulgar display of ignorance." },
      { type: "para", text: "Politics are part of life. Stakeholders hold different amounts of influence. There's necessary respect for those funding initiatives, department heads, presidents, CTOs. These people are responsible for multiple business initiatives. When they have hopes, dreams, or aspirations, alignment becomes crucial if they're funding your team's lifeline." },
      { type: "para", text: "But getting back to empathy: each coworker, leader, stakeholder, and user has their own initiatives and priorities. We must be respectful collaborators, mentally, empathetically, and in our conversational tone. We must be honest with users and honest with stakeholders." },
    ],
  },

  // ---------- Page 7 · Focus & accessibility ----------
  {
    blocks: [
      { type: "heading", text: "Staying Focused: Evidence Over Emotion" },
      { type: "para", text: "I help teams stay inspired and focused by helping them distinguish between meaningful iteration based in evidence and empathy versus chasing trends that distract from strategic focus. When teams are attached or distracted by a certain strategy or creative direction, what I like to do is continue to add value by raising awareness, hopefully educating them as to why my decision is different, but then quickly moving on if they choose a different direction." },
      { type: "para", text: "Being non-flexible does not serve the funds sponsoring the project well. Being indecisive doesn't serve your time to market well. Not being inclusive and designing something accessible to the most amount of users and customers is ignorant and self-indulgent. We are better than that." },
      { type: "para", text: "In terms of keeping people on strategy, what is the particular purpose of this initiative, of this product? Nailing that first, or at least putting some microphones out there to gather information to help us nail it, to help us refine it as people engage and move through our customer journey." },
      { type: "heading", text: "Accessibility as Creative Liberation" },
      { type: "para", text: "Designing for accessibility is not about putting constraints on your creativity. Operating successfully within a design system that is now an integral part of a huge revenue-making enterprise is counterintuitive, go with the flow. The flow and the future are design systems that respect accessible experiences that people can leverage who are blind, able-bodied, have trouble hearing, are colorblind, or on mobile." },
      { type: "quote", text: "Everyone has a right to read content, to be part of an experience, to process a transaction, to give an input and get an output, to get a response." },
      { type: "para", text: "When accessibility is baked into the system from the beginning, it's not a retrofit cost, it's foundational infrastructure that serves everyone better. A colorblind user benefits from good contrast ratios, but so does someone trying to use your app in bright sunlight while rushing to pick up their child. A screen reader user benefits from semantic HTML, but so does someone using voice commands while driving." },
      { type: "para", text: "Fighting against accessibility standards is like swimming upstream against user needs, business requirements, and legal compliance. When teams realize they're not designing for \u201Cdisabled users\u201D versus \u201Cnormal users\u201D but for the full spectrum of human capability and circumstance, accessibility becomes empathy in action." },
    ],
  },

  // ---------- Page 8 · The 360-degree practice & conclusion ----------
  {
    blocks: [
      { type: "heading", text: "The 360-Degree Practice of Empathy" },
      { type: "quote", text: "Good work is made by an army, never by one." },
      { type: "para", text: "Each team's time is important. It's about process and how you stack steps together, utilizing opportunities to be efficient in building great products that ladder up to customer journeys ending in successful completion of strategic goals and revenue-generating endeavors." },
      { type: "para", text: "This chapter began with empathy for end users, understanding the human condition, the universal experience of muddling through life's challenges. But true empathy in product development extends in all directions: to users trying to complete tasks during personal crises, to teammates navigating organizational constraints, to stakeholders balancing competing priorities." },
      { type: "para", text: "Empathy isn't just about understanding the person trying to pay their electric bill at midnight while dealing with family stress. It's about understanding the CTO who has seven other initiatives demanding attention and needs clear business value demonstrated. It's about respecting the developer implementing your vision and the copywriter crafting error messages that will be seen by frustrated users." },
      { type: "para", text: "Sensitivity and respecting your customer and user really brings out the best in creative teams. When creative teams understand that their users are carrying invisible weights, divorce, pregnancy concerns, miscarriage, financial stress, it changes everything about how they approach copy, design, and user flows. It makes them ask: \u201CHow would this error message feel to someone who just got devastating news?\u201D or \u201CWhat if this form is being filled out by someone whose hands are shaking from stress?\u201D" },
      { type: "heading", text: "Conclusion: The Clearest Path Forward" },
      { type: "para", text: "In a world full of digital noise and complexity, empathy isn't just a nice-to-have, it's a comprehensive approach to building products that serve real human needs while navigating real business constraints. It's the clearest path to creating something that truly matters, something that becomes invisible utility in people's full, complicated lives." },
      { type: "para", text: "When we design with empathy for everyone in the ecosystem, users, teammates, and stakeholders, we create products that don't just function, but genuinely help people muddle through with a little more ease, a little more clarity, and a little more hope that yes, we might just be out of the woods." },
      { type: "para", text: "Because ultimately, we're all just muddling through somehow, waiting for the woods to clear, hoping our temporary struggles remain temporary. The companies and products that understand this, that meet us where we are rather than where they wish we were, those are the ones that become indispensable parts of navigating life itself." },
    ],
  },
];

export default function ChapterOnePage() {
  return (
    <article className="pt-32 md:pt-40 pb-24 md:pb-32">
      {/* Force the page to land at the top on mount — works around mobile
          browsers (and Next scroll restoration) that occasionally land users
          mid-page when there's a tall fixed-height inner region. */}
      <ScrollToTop />

      {/* ── BOOK INTRO / TITLE-PAGE ENTRANCE ───────────────────────────── */}
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12 mb-14 md:mb-20">
        <div className="max-w-5xl">
          <p className="eyebrow mb-3">The book</p>

          <h1 className="headline-static text-4xl md:text-4xl lg:text-[39px] font-bold tracking-tight leading-[1.15] md:leading-[1.1] lg:leading-[1.05] text-balance max-w-4xl">
            Clarity Is the Advantage
          </h1>

          <p className="mt-4 text-lg md:text-xl text-text-secondary italic tracking-tight font-normal">
            Orienteering to great design decisions
          </p>

          <div className="mt-8 max-w-2xl space-y-4 text-lg md:text-xl text-text-secondary leading-relaxed">
            <p>
              I wrote this because I got tired of watching design leadership become a thing people
              talk about instead of do. Fifteen years in the trenches of New York agency life taught
              me something different: the best people don&apos;t complain about the seat at the table
              &mdash; they earn it by pushing the work forward and owning the outcome. This book is
              what I learned from them, and from a path that&apos;s been anything but typical.
            </p>
            <p>
              It&apos;s one person&apos;s hard-won take on smart design &mdash; why clarity wins, how
              to cut through the noise, and what it takes to do great work in the rooms where it
              actually gets decided.
            </p>
            <p>
              The book is written. Chapter 1 is below &mdash; read it free. I&apos;ll send you the
              finished book when it&apos;s ready, plus the occasional note from the work in between.{" "}
              <a
                href="#read"
                className="text-link hover:text-link-hover font-medium underline underline-offset-4 decoration-1 transition-colors"
              >
                Get on the list&nbsp;&rarr;
              </a>
            </p>
          </div>

          {/* Chapter marker — the transition from book-intro into the reader */}
          <div className="mt-12 md:mt-16 flex items-center gap-4">
            <span className="font-mono text-xs tracking-widest uppercase text-text-tertiary whitespace-nowrap">
              Chapter 1
            </span>
            <span className="h-px flex-1 bg-border-subtle" aria-hidden="true" />
            <span className="text-sm italic text-text-tertiary whitespace-nowrap">
              The Human Condition
            </span>
          </div>
        </div>
      </div>

      {/* ── THE READER ─────────────────────────────────────────────────── */}
      <div className="px-4 sm:px-6">
        <Reader
          kicker="Chapter 1"
          title="The Human Condition"
          subtitle="Why empathy is the foundation of digital experience."
          pages={CHAPTER_ONE}
          /* audioSrc="/audio/chapter-1.mp3"  // ← uncomment when your narration is recorded */
          signupHeading="That's Chapter 1. The book is written."
          signupSubcopy="I'll send you the finished book when it's ready — plus the occasional note from the work in between. No noise. Just the thinking, and what I'm seeing in the field."
        />
      </div>
    </article>
  );
}
