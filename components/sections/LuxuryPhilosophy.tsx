"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function LuxuryPhilosophy() {
  const containerRef = useRef<HTMLElement>(null);
  const principles = [
    { w1: "100% Non-Surgical", w2: "Healing", w3: "Approach" },
    { w1: "Root Cause", w2: "Focus", w3: "Instead Of Symptoms" },
    { w1: "7-Day Program", w2: "14 Sittings", w3: "Intensive Care" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 1,
          pin: true,
        }
      });

      // Background color shift
      tl.to(containerRef.current, { backgroundColor: "#0F172A", duration: 1 }, 0); // Royal Navy
      tl.to(containerRef.current, { backgroundColor: "#0B0B0D", duration: 1 }, 2); // Back to Black

      principles.forEach((_, i) => {
        const pTl = gsap.timeline();
        
        // Enter
        pTl.fromTo(`.p-${i} .w1`, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" })
           .fromTo(`.p-${i} .w2`, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }, "-=0.2")
           .fromTo(`.p-${i} .w3`, { opacity: 0, rotationX: 90 }, { opacity: 1, rotationX: 0, duration: 0.5, ease: "power2.out" }, "-=0.2");
        
        // Stay
        pTl.to(`.p-${i} .word-group`, { y: -20, duration: 0.5, ease: "none" });

        // Exit at absolute time 1 so it matches the start of the next text (since stagger is 1 via tl.add(pTl, i))
        pTl.to(`.p-${i} .word-group`, { opacity: 0, y: -100, duration: 0.5, ease: "power2.in" }, 1);

        tl.add(pTl, i);
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen bg-midnight text-ivory overflow-hidden relative flex items-center justify-center">
      {principles.map((p, i) => (
        <div key={i} className={`p-${i} absolute inset-0 flex flex-col items-center justify-center pointer-events-none perspective-[1000px]`}>
          <div className="word-group flex flex-col items-center text-center px-4">
            <span className="w1 text-hero font-hero text-gold opacity-0">{p.w1}</span>
            <span className="w2 text-h2 font-heading italic text-ivory/90 opacity-0 mt-[-10px] md:mt-[-20px]">{p.w2}</span>
            <span className="w3 text-button text-gold-soft uppercase tracking-widest opacity-0 mt-8 block">{p.w3}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
