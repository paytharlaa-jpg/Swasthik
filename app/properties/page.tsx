import Image from "next/image";
import { CinematicFooter } from "@/components/sections/CinematicFooter";

export default function PropertiesPage() {
  const properties = [
    { title: "The Royal Penthouse", type: "Premium Apartment", location: "Skyline Avenue", price: "$25M", img: "/images/luxury_apartment_interior_1785743347556.png" },
    { title: "Golden Hour Villa", type: "Luxury Villa", location: "Palm Jumeirah", price: "$18M", img: "/images/luxury_villa_sunset_1785743326958.png" },
    { title: "Lumina Tower", type: "Commercial", location: "Downtown", price: "On Request", img: "/images/luxury_architecture_detail_1785743357136.png" },
    { title: "Azure Residences", type: "Premium Apartment", location: "Marina Bay", price: "$32M", img: "/images/luxury_infinity_pool_1785743337411.png" },
  ];

  return (
    <main className="bg-midnight min-h-screen text-ivory pt-32">
      <div className="container-luxury section-padding">
        <h1 className="text-hero font-hero text-gold mb-16">Properties</h1>
        
        <div className="flex flex-col gap-32">
          {properties.map((prop, idx) => (
            <div key={idx} className="relative w-full h-[80vh] rounded-2xl overflow-hidden group cursor-pointer">
              <Image src={prop.img} alt={prop.title} fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-16 left-16 z-10">
                <span className="text-gold text-sm tracking-widest uppercase mb-4 block">{prop.type}</span>
                <h2 className="text-h1 font-heading mb-4">{prop.title}</h2>
                <div className="flex gap-8 text-ivory/80 uppercase tracking-widest text-sm">
                  <span>{prop.location}</span>
                  <span>|</span>
                  <span>{prop.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CinematicFooter />
    </main>
  );
}
