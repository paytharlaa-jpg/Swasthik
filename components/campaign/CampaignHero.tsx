import { HeroFrameSequence } from "@/components/animation/HeroFrameSequence";
import { HeroCaptions } from "@/components/animation/HeroCaptions";

export function CampaignHero() {
  return (
    <HeroFrameSequence showDiagnostics={false}>
      <HeroCaptions />
    </HeroFrameSequence>
  );
}
