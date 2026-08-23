"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroFrameSequence } from "@/components/animation/HeroFrameSequence";
import { ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1, // Smooth scrubbing
        },
      });

      // Frame 20: 10%
      tl.to(".hero-subtitle-small", { opacity: 1, y: 0, duration: 1 }, 1);
      
      // Frame 45: 20%
      tl.to(".hero-title .logo-img", { opacity: 1, y: 0, duration: 2, ease: "power3.out" }, 2.5);

      // Frame 70: 30%
      tl.to(".hero-subtitle-large", { opacity: 1, y: 0, duration: 1.5, filter: "blur(0px)" }, 4);

      // Frame 95: 40%
      tl.to(".hero-divider", { scaleX: 1, opacity: 1, duration: 1.5, ease: "power2.inOut" }, 5.5);

      // Frame 120: 50%
      tl.to(".hero-cta", { opacity: 1, scale: 1, rotate: 0, duration: 1, stagger: 0.2 }, 7);

      // Frame 145: 60%
      tl.to(".hero-glow", { opacity: 0.6, duration: 2 }, 8.5);

      // Frame 195: 80% (Typography fades)
      tl.to(".hero-content-group", { opacity: 0, y: -50, duration: 2 }, 11);

      // Frame 215: 90% (Scroll indicator transforms)
      tl.to(".scroll-indicator", { opacity: 0, duration: 1 }, 12);
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <HeroFrameSequence>
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 hero-content-group pointer-events-none">
          <div className="hero-glow absolute inset-0 bg-gold/10 opacity-0 mix-blend-screen pointer-events-none" />
          
          <div className="overflow-hidden mb-6">
            <span className="hero-subtitle-small block opacity-0 translate-y-10 text-gold-soft uppercase tracking-[4px] text-sm md:text-base font-semibold">
              Non-Surgical Pain Relief
            </span>
            <div className="w-12 h-[1px] bg-gold mx-auto mt-4 opacity-0 hero-subtitle-small" />
          </div>

          <h1 className="hero-title flex justify-center mb-8 w-full max-w-lg md:max-w-2xl mx-auto" aria-label="Swasthik Ayurveda">
            <img 
              src="/images/SwasthiK Ayurveda Logo New.png" 
              alt="Swasthik Ayurveda Logo"
              className="logo-img opacity-0 translate-y-[100px] w-full h-auto object-contain drop-shadow-2xl" 
            />
          </h1>

          <p className="hero-subtitle-large opacity-0 translate-y-8 blur-sm text-body-lg text-ivory/80 max-w-2xl mx-auto mb-12">
            Back Pain &bull; Sciatica &bull; Slip Disc &bull; Knee Pain
          </p>

          <div className="hero-divider h-[1px] w-64 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 scale-x-0 mb-12" />

          <div className="flex flex-col sm:flex-row gap-6 pointer-events-auto">
            <button className="hero-cta opacity-0 scale-95 -rotate-2 glass-panel px-8 py-4 text-button text-gold border-gold/50 hover:bg-gold hover:text-midnight transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] relative overflow-hidden group">
              <span className="relative z-10">Our Treatments</span>
              <div className="absolute inset-0 bg-gold translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            </button>
            <button className="hero-cta opacity-0 scale-95 rotate-2 glass-panel px-8 py-4 text-button border-ivory/30 hover:border-gold hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-500">
              Book Consultation
            </button>
          </div>
        </div>

        <div className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-100 transition-opacity duration-1000 z-10 pointer-events-auto cursor-pointer group">
          <span className="text-xs uppercase tracking-widest text-gold-soft group-hover:text-gold transition-colors">Scroll to Discover</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-gold/50 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gold animate-bounce" />
          </div>
        </div>
      </HeroFrameSequence>
    </div>
  );
}
