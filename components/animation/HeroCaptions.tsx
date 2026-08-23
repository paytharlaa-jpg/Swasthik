"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HeroCaptions() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // We assume this component is rendered inside a scroll-triggered container
    // We can use the parent's scroll trigger by selecting the closest section
    const parentSection = containerRef.current.closest("section");
    if (!parentSection) return;

    // The frames are 0 to 239. Let's map progress to the timeline.
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parentSection,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      }
    });

    // Create a timeline that spans progress 0 to 1
    // We have 240 frames, so each frame is roughly progress (index / 240)
    const p = (frame: number) => frame / 240;

    const createCaptionAnimation = (selector: string, startFrame: number, endFrame: number, fadeOutFrame?: number) => {
      const el = containerRef.current?.querySelector(selector);
      if (!el) return;
      
      tl.fromTo(el, 
        { opacity: 0, y: 20, filter: "blur(8px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: p(10), ease: "power2.out" },
        p(startFrame)
      );
      
      if (fadeOutFrame) {
        tl.to(el, { opacity: 0, y: -20, filter: "blur(8px)", duration: p(10), ease: "power2.in" }, p(fadeOutFrame));
      }
    };

    // Caption 1: Frames 0-39
    createCaptionAnimation(".cap-1", 0, 39, 39);
    
    // Caption 2: Frames 40-84
    createCaptionAnimation(".cap-2", 40, 84, 84);
    
    // Caption 3: Frames 85-129
    createCaptionAnimation(".cap-3", 85, 129, 129);
    
    // Caption 4: Frames 130-174
    createCaptionAnimation(".cap-4", 130, 174, 174);
    
    // Caption 5: Frames 175-209
    createCaptionAnimation(".cap-5", 175, 209, 209);
    
    // Final Caption & CTAs: Frames 210-239
    createCaptionAnimation(".cap-6", 210, 239);

    // Bottom gradient transition
    const gradient = containerRef.current?.querySelector(".hero-bottom-gradient");
    if (gradient) {
      tl.fromTo(gradient, { opacity: 0 }, { opacity: 1, duration: p(30), ease: "power2.in" }, p(210));
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-16 lg:p-24 xl:p-32 pointer-events-none text-white h-full max-w-7xl mx-auto">
      
      {/* Frames 0–39 */}
      <div className="cap-1 absolute flex flex-col gap-4">
        <h1 className="text-h2 md:text-hero font-bold font-display max-w-4xl drop-shadow-md">
          Some bonds are tied with a thread.
        </h1>
        <p className="text-body-lg md:text-2xl text-ivory/90 max-w-2xl drop-shadow">
          But protected with a lifetime of care.
        </p>
      </div>

      {/* Frames 40–84 */}
      <div className="cap-2 absolute flex flex-col gap-4">
        <h2 className="text-h2 md:text-hero font-bold font-display max-w-4xl drop-shadow-md">
          This Raksha Bandhan…
        </h2>
        <div className="h-[2px] w-24 bg-gold mb-2"></div>
        <p className="text-body-lg md:text-2xl text-ivory/90 max-w-2xl drop-shadow">
          Promise more than protection.
        </p>
      </div>

      {/* Frames 85–129 */}
      <div className="cap-3 absolute flex flex-col gap-4">
        <h2 className="text-h2 md:text-hero font-bold font-display max-w-4xl drop-shadow-md">
          Promise them better health.
        </h2>
        <p className="text-body-lg md:text-2xl text-ivory/90 max-w-2xl drop-shadow">
          Because the strongest protection begins from within.
        </p>
      </div>

      {/* Frames 130–174 */}
      <div className="cap-4 absolute flex flex-col gap-4">
        <h2 className="text-h2 md:text-hero font-bold font-display max-w-4xl drop-shadow-md">
          Care that reaches the root.
        </h2>
        <p className="text-body-lg md:text-2xl text-ivory/90 max-w-2xl drop-shadow">
          Healing inspired by Ayurveda.
        </p>
      </div>

      {/* Frames 175–209 */}
      <div className="cap-5 absolute flex flex-col gap-4">
        <h2 className="text-h2 md:text-hero font-bold font-display max-w-4xl drop-shadow-md">
          Tie a bond of wellness.
        </h2>
        <p className="text-body-lg md:text-2xl text-ivory/90 max-w-2xl drop-shadow">
          With Swasthik Ayurveda.
        </p>
      </div>

      {/* Frames 210–239 */}
      <div className="cap-6 absolute flex flex-col gap-6 bottom-16 md:bottom-auto pointer-events-auto">
        <h2 className="text-h2 md:text-[5rem] font-bold font-display max-w-4xl drop-shadow-md leading-tight">
          This Raksha Bandhan, gift the protection of good health.
        </h2>
        <p className="text-body-lg md:text-xl text-ivory/90 max-w-3xl drop-shadow">
          Celebrate your bond with natural care, personalized therapies and root-cause-focused Ayurvedic healing.
        </p>
        <p className="text-sm md:text-base text-gold font-medium tracking-wide uppercase">
          Personalized care by experienced Ayurvedic doctors.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a href="#appointment" className="inline-flex items-center justify-center px-8 py-4 bg-gold text-forest-deep hover:bg-gold/90 transition-colors rounded font-semibold text-lg">
            Book a Rakhi Wellness Consultation
          </a>
          <a href="#treatments" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-ivory text-ivory hover:bg-ivory/10 transition-colors rounded font-semibold text-lg">
            Explore Our Treatments
          </a>
        </div>
      </div>

      {/* Bottom Gradient Transition to next section */}
      <div className="hero-bottom-gradient absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-ivory to-transparent"></div>
    </div>
  );
}
