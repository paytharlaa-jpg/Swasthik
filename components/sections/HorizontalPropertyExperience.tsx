"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function HorizontalPropertyExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const journeySteps = [
    { title: "Initial Consultation", type: "Expert Diagnosis", img: "/treatmentimages/3HMrJAExiaZ9hYHNt3ccWE.jpg" },
    { title: "Customized Care Plan", type: "Therapy Planning", img: "/treatmentimages/ayurveda-medicine-herbs.webp" },
    { title: "7-Day Intensive Program", type: "Core Treatment", img: "/treatmentimages/Best-Ayurvedic-Treatment-in-Bangalore-Natural-Solutions-for-Pain-Stress-Digestion.webp" },
    { title: "Post-Treatment Support", type: "Long-Term Relief", img: "/treatmentimages/Ayurveda-inspired-tile.jpg" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer) return;

      const totalScroll = scrollContainer.scrollWidth - window.innerWidth;

      gsap.to(scrollContainer, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${totalScroll}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-screen bg-midnight text-ivory overflow-hidden relative">
      <div className="absolute top-12 left-12 md:top-24 md:left-24 z-10 pointer-events-none">
        <h2 className="text-h3 font-heading text-gold">The Healing Journey</h2>
        <p className="text-body text-ivory/60 mt-2 tracking-widest uppercase text-sm">Patient Experience</p>
      </div>

      <div ref={scrollContainerRef} className="flex h-full w-[400vw] items-center pt-24 px-12 md:px-24 gap-12 md:gap-24">
        {journeySteps.map((step, idx) => (
          <div key={idx} className="relative w-[80vw] md:w-[60vw] h-[60vh] md:h-[70vh] shrink-0 group rounded-xl overflow-hidden cursor-pointer">
            <Image 
              src={step.img} 
              alt={step.title} 
              fill 
              className="object-cover transition-transform duration-[2s] group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 z-10">
              <span className="text-gold text-xs tracking-[2px] uppercase mb-2 block opacity-80">{step.type}</span>
              <h3 className="text-h2 font-heading">{step.title}</h3>
            </div>
            <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 transition-colors duration-700 rounded-xl pointer-events-none" />
          </div>
        ))}
        {/* Spacer for ending smoothly */}
        <div className="w-[10vw] shrink-0" />
      </div>
    </section>
  );
}
