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
 *   WhenToBringMeIn      self-qualification
 *   HowIWork             the three engagement modes
 *   SelectedWork         three case studies, with the service layer in the copy
 *   Building             live products, designed, built, and shipped solo
 *   Testimonials         collaborators, service design title nearest the work
 *   ClarityCardsSection  the Process in print and in hand
 *   FinalCTA             one ask
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
      <WhenToBringMeIn />
      <HowIWork />
      <SelectedWork />
      <Building />
      <Testimonials />
      <ClarityCardsSection
        eyebrow="The Process, in print and in hand"
        title="The book and the cards"
        intro="The Capizzi Process, written down as a book and made usable as a 54-card deck. Listen first, make it visible, prove it worked. Read chapter one now. Printed editions of both are coming."
        link={{ href: "/book/chapter-1", label: "Read chapter one" }}
      />
      <FinalCTA />
    </>
  );
}
