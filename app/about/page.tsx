import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { CinematicFooter } from "@/components/sections/CinematicFooter";

export default function AboutPage() {
  return (
    <main className="bg-midnight min-h-screen text-ivory pt-32">
      <div className="container-luxury section-padding">
        <h1 className="text-hero font-hero text-gold mb-8">About Swasthik Ayurveda</h1>
        <p className="text-h3 font-heading text-ivory/80 max-w-3xl mb-16">
          Pioneering the future of ultra-luxury real estate with uncompromising quality, architectural brilliance, and visionary design.
        </p>
        <div className="relative w-full h-[60vh] rounded-2xl overflow-hidden mb-24">
          <Image 
            src="/images/luxury_villa_sunset_1785743326958.png"
            alt="About Swasthik Ayurveda"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <CinematicFooter />
    </main>
  );
}
