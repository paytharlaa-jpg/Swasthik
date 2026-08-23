import { HeroSection } from "@/components/sections/HeroSection";
import { BrandStory } from "@/components/sections/BrandStory";
import { LuxuryPhilosophy } from "@/components/sections/LuxuryPhilosophy";
import { FeaturedProperties } from "@/components/sections/FeaturedProperties";
import { HorizontalPropertyExperience } from "@/components/sections/HorizontalPropertyExperience";
import { ImmersiveLuxuryGallery } from "@/components/sections/ImmersiveLuxuryGallery";
import { InteractiveLifestyle } from "@/components/sections/InteractiveLifestyle";
import { InvestmentExperience } from "@/components/sections/InvestmentExperience";
import { ContactExperience } from "@/components/sections/ContactExperience";
import { CinematicFooter } from "@/components/sections/CinematicFooter";

export default function HomePage() {
  return (
    <main className="bg-midnight min-h-screen overflow-x-hidden selection:bg-gold selection:text-midnight">
      <HeroSection />
      <BrandStory />
      <LuxuryPhilosophy />
      <FeaturedProperties />
      <HorizontalPropertyExperience />
      <ImmersiveLuxuryGallery />
      <InteractiveLifestyle />
      <InvestmentExperience />
      <ContactExperience />
      <CinematicFooter />
    </main>
  );
}
