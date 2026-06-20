import { Hero } from "@/components/Hero";
import { HeroBottom } from "@/components/HeroBottom";
import { LogoStrip } from "@/components/LogoStrip";
import { WhenToBringMeIn } from "@/components/WhenToBringMeIn";
import { HowIWork } from "@/components/HowIWork";
import { SelectedWork } from "@/components/SelectedWork";
import { Testimonials } from "@/components/Testimonials";
import { Building } from "@/components/Building";
import { FinalCTA } from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <HeroBottom />
      <WhenToBringMeIn />
      <HowIWork />
      <SelectedWork />
      <Testimonials />
      <Building />
      <FinalCTA />
    </>
  );
}
