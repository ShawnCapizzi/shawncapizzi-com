import { Hero } from "@/components/Hero";
import { LogoStrip } from "@/components/LogoStrip";
import { HowIWork } from "@/components/HowIWork";
import { SelectedWork } from "@/components/SelectedWork";
import { Thinking } from "@/components/Thinking";
import { Testimonials } from "@/components/Testimonials";
import { Building } from "@/components/Building";
import { FinalCTA } from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <HowIWork />
      <SelectedWork />
      <Thinking />
      <Testimonials />
      <Building />
      <FinalCTA />
    </>
  );
}
