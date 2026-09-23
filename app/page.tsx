import { Hero } from "@/components/Hero";
import { HOME_DESCRIPTION, HOME_TITLE, pageMetadata } from "@/lib/seo";
import { LogoStrip } from "@/components/LogoStrip";
import { HeroBottom } from "@/components/HeroBottom";
import { WhenToBringMeIn } from "@/components/WhenToBringMeIn";
import { HowIWork } from "@/components/HowIWork";
import { SelectedWork } from "@/components/SelectedWork";
import { Building } from "@/components/Building";
import { Testimonials } from "@/components/Testimonials";
import { ProcessSection } from "@/components/ProcessSection";
import { FinalCTA } from "@/components/FinalCTA";

/**
 * Homepage. The order is the argument: leadership, then shipping, then proof.
 *
 *   Hero                 the leadership claim, then the working-software claim
 *   LogoStrip            the credential strip
 *   HeroBottom           three doors, named by what the visitor came to do
 *   SelectedWork         three case studies, with the service layer in the copy
 *   Building             live products, designed, built, and shipped solo
 *   ProcessSection       the method, with the book and the cards as objects
 *   WhenToBringMeIn      self-qualification
 *   HowIWork             the three engagement modes, named and handed off
 *   Testimonials         what clients have said, right before the ask
 *   FinalCTA             one ask
 *
 * The first half proves the claim (work, products, the method written down);
 * the second half is how to hire (starting points, engagement model, clients,
 * the ask). The Process moved from after the testimonials into the first half
 * in September 2026 so the book and the cards are seen, not found.
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
export const metadata = pageMetadata({
  path: "/",
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  absolute: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <HeroBottom />
      <SelectedWork />
      <Building />
      <ProcessSection />
      <WhenToBringMeIn />
      <HowIWork />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
