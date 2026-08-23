import { CinematicFooter } from "@/components/sections/CinematicFooter";
import { InteractiveLifestyle } from "@/components/sections/InteractiveLifestyle";

export default function AmenitiesPage() {
  return (
    <main className="bg-midnight min-h-screen text-ivory pt-32">
      <div className="container-luxury section-padding">
        <h1 className="text-hero font-hero text-gold mb-16 text-center">Lifestyle & Amenities</h1>
        <p className="text-h3 font-heading text-ivory/80 max-w-3xl mx-auto text-center mb-24">
          Unparalleled facilities designed for the world's most discerning residents.
        </p>
      </div>
      
      <InteractiveLifestyle />
      
      <CinematicFooter />
    </main>
  );
}
