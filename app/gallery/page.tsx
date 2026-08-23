import Image from "next/image";
import { CinematicFooter } from "@/components/sections/CinematicFooter";
import { ImmersiveLuxuryGallery } from "@/components/sections/ImmersiveLuxuryGallery";

export default function GalleryPage() {
  return (
    <main className="bg-midnight min-h-screen text-ivory pt-32 overflow-x-hidden">
      <div className="container-luxury section-padding">
        <h1 className="text-hero font-hero text-gold mb-16 text-center">The Exhibition</h1>
        <p className="text-h3 font-heading text-ivory/80 max-w-3xl mx-auto text-center mb-24">
          A curated collection of architectural brilliance and cinematic lifestyle.
        </p>
      </div>
      
      {/* Reusing the immersive gallery component */}
      <ImmersiveLuxuryGallery />
      
      <CinematicFooter />
    </main>
  );
}
