"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function ImmersiveLuxuryGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const images = [
    "/treatmentimages/premium_photo-1682098137061-37ad1237ce57.avif",
    "/treatmentimages/AyurvedaHistory.jpg",
    "/treatmentimages/B.A.M.jpg",
    "/treatmentimages/images.jpg",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=250%",
          scrub: 1,
          pin: true,
        }
      });

      // Initial Image Zoom
      tl.to(".gallery-img-1", { scale: 0.8, filter: "blur(5px)", duration: 2 });
      
      // Second Image Slide
      tl.from(".gallery-img-2", { y: "100%", opacity: 0, duration: 2 }, "-=1");
      tl.to(".gallery-img-2", { scale: 0.8, x: "-20%", filter: "blur(5px)", duration: 2 });
      
      // Third Image Split (Using clipPath)
      tl.from(".gallery-img-3", { clipPath: "inset(0 50% 0 50%)", duration: 2 }, "-=1.5");
      tl.to(".gallery-img-3", { scale: 0.8, x: "20%", filter: "blur(5px)", duration: 2 });

      // Entire gallery masonry float
      tl.to(".gallery-container", { y: "-30%", duration: 3 });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-screen bg-midnight overflow-hidden relative">
      <div ref={galleryRef} className="gallery-container w-full h-full relative flex items-center justify-center">
        
        {/* Main Hero Image */}
        <div className="gallery-img-1 absolute inset-0 z-10">
          <Image src={images[0]} alt="Gallery 1" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h2 className="text-h1 font-heading text-ivory/90 tracking-widest uppercase text-center leading-tight">Our <br/> Facilities</h2>
          </div>
        </div>

        {/* Second Image */}
        <div className="gallery-img-2 absolute w-[60vw] h-[70vh] z-20 rounded-2xl overflow-hidden shadow-2xl">
          <Image src={images[1]} alt="Gallery 2" fill className="object-cover" />
        </div>

        {/* Third Image */}
        <div className="gallery-img-3 absolute w-[50vw] h-[60vh] z-30 rounded-2xl overflow-hidden shadow-2xl">
          <Image src={images[2]} alt="Gallery 3" fill className="object-cover" />
        </div>

      </div>
    </section>
  );
}
