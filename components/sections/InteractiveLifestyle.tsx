"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function InteractiveLifestyle() {
  const containerRef = useRef<HTMLElement>(null);

  const lines = [
    "100% Non-Surgical Treatment.",
    "Focusing on the root cause, not just symptoms.",
    "Experience a life free from pain.",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
        }
      });

      // Background pan
      tl.to(".lifestyle-bg", { scale: 1.1, x: "-5%", duration: 5, ease: "none" }, 0);

      // Text reveal
      lines.forEach((_, i) => {
        tl.fromTo(`.line-${i}`, 
          { opacity: 0, y: 50, filter: "blur(10px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1 }, 
          i * 1.2
        );
        tl.to(`.line-${i}`, 
          { opacity: 0, y: -50, filter: "blur(10px)", duration: 1 }, 
          (i * 1.2) + 1.5
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen bg-midnight overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/treatmentimages/AyurvedaHistory.jpg"
          alt="Ayurvedic Treatment"
          fill
          className="lifestyle-bg object-cover origin-center"
        />
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
      </div>

      <div className="relative z-10 w-full h-full flex items-center justify-center container-luxury">
        <div className="max-w-4xl text-center">
          {lines.map((line, i) => (
            <h2 key={i} className={`line-${i} text-h2 font-heading text-ivory absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4`}>
              {line}
            </h2>
          ))}
        </div>
      </div>
      
      {/* Floating particles simplified for performance */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-[url('/treatmentimages/Ayurveda-inspired-tile.jpg')] opacity-[0.03] bg-repeat mix-blend-overlay" />
    </section>
  );
}
