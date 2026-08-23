import { HeroFrameSequence } from "@/components/animation/HeroFrameSequence";

export default function DevHeroSequencePage() {
  return (
    <main>
      <div className="h-screen bg-black text-white flex items-center justify-center text-center p-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Hero Sequence Dev Route</h1>
          <p className="text-gray-400">Scroll down to test the cinematic 240-frame sequence.</p>
          <p className="text-gray-500 text-sm mt-2">Before Lenis integration. Pure GSAP ScrollTrigger.</p>
        </div>
      </div>
      
      <HeroFrameSequence showDiagnostics={true} />
      
      <div className="h-[200vh] bg-black text-white p-8">
        <h2 className="text-3xl font-bold">End of Sequence</h2>
        <p className="text-gray-400 mt-4">Scroll back up to verify reverse playback.</p>
      </div>
    </main>
  );
}
