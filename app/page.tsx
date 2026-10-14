import { Hero } from "@/components/Hero";
import { HOME_DESCRIPTION, HOME_TITLE, pageMetadata } from "@/lib/seo";
import { LogoStrip } from "@/components/LogoStrip";
import { ProofStrip } from "@/components/ProofStrip";
import { HeroBottom } from "@/components/HeroBottom";
import { WhenToBringMeIn } from "@/components/WhenToBringMeIn";
import { HowIWork } from "@/components/HowIWork";
import { SelectedWork } from "@/components/SelectedWork";
import { Building } from "@/components/Building";
import { Testimonials } from "@/components/Testimonials";
import { ProcessSection } from "@/components/ProcessSection";
import { FinalCTA } from "@/components/FinalCTA";

/**
 * Homepage, reordered October 2026 so a buyer answers two questions before
 * the thought leadership: "Can Shawn help with my problem?" and "How could I
 * bring him into the work?"
 *
 *   Hero                 the leadership claim, then idea to launch
 *   LogoStrip            the credential strip
 *   ProofStrip           one quiet line of evidence, each figure from a case study
 *   HeroBottom           three doors, named by what the visitor came to do
 *   WhenToBringMeIn      self-qualification: "You should talk to me if..."
 *   SelectedWork         three case studies, with the service layer in the copy
 *   HowIWork             the three engagement modes, named and handed off
 *   Testimonials         what it is like to work together
 *   Building             live products, AI-native product design
 *   ProcessSection       the method, with the book and the cards as objects
 *   FinalCTA             one ask
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
      <ProofStrip />
      <HeroBottom />
      <WhenToBringMeIn />
      <SelectedWork />
      <HowIWork />
      <Testimonials />
      <Building />
      <ProcessSection />
      <FinalCTA />
    </>
  );
}
