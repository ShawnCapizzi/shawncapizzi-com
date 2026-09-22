import { Hero } from "@/components/Hero";
import { LogoStrip } from "@/components/LogoStrip";
import { HeroBottom } from "@/components/HeroBottom";
import { WhenToBringMeIn } from "@/components/WhenToBringMeIn";
import { HowIWork } from "@/components/HowIWork";
import { SelectedWork } from "@/components/SelectedWork";
import { Building } from "@/components/Building";
import { Testimonials } from "@/components/Testimonials";
import { ClarityCardsSection } from "@/components/ClarityCardsSection";
import { FinalCTA } from "@/components/FinalCTA";

/**
 * Homepage. The order is the argument: leadership, then shipping, then proof.
 *
 *   Hero                 the leadership claim, then the working-software claim
 *   LogoStrip            the credential strip
 *   HeroBottom           three doors, named by what the visitor came to do
 *   SelectedWork         three case studies, with the service layer in the copy
 *   Building             live products, designed, built, and shipped solo
 *   WhenToBringMeIn      self-qualification
 *   HowIWork             the three engagement modes, named and handed off
 *   Testimonials         collaborators, service design title nearest the work
 *   ClarityCardsSection  the Process in print and in hand
 *   FinalCTA             one ask
 *
 * Work moved above the two prose blocks in September 2026. Measured on the
 * previous order, the first piece of work imagery sat 3,826px down, behind
 * 2,532px of text with no images in it. Proof now lands right after the
 * doors, and the qualifying copy reads as confirmation rather than a toll
 * gate.
 *
 * The homepage carries one primary ask (the strategy call) at the top and the
 * bottom. Every other link on the page goes deeper rather than asking again.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <HeroBottom />
      <SelectedWork />
      <Building />
      <WhenToBringMeIn />
      <HowIWork />
      <Testimonials />
      <ClarityCardsSection
        eyebrow="The Capizzi Process"
        title="I wrote it down and made it usable."
        intro="The Process is the method: listen first, make it visible, prove it worked, with six operating principles inside those three steps. The book is where I wrote it down, out of years of collaborating with teams to ship products, communications, and digital tools. The Clarity Cards are the deck that puts it to work in a room, four suits of thirteen plus two wildcards. Printed editions of the book and the deck are coming."
        link={{ href: "/book/chapter-1", label: "Read chapter one" }}
      />
      <FinalCTA />
    </>
  );
}
