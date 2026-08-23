"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function BrandStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the entire section for a long scroll duration
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1,
        }
      });

      // 1. Text fade in
      tl.from(".story-line", { y: 50, opacity: 0, stagger: 0.1, duration: 0.5 });
      tl.to(".story-divider", { scaleX: 1, duration: 0.5 }, "<");

      // 2. Image mask reveal
      tl.from(".story-mask", { clipPath: "inset(100% 0 0 0)", duration: 1, ease: "power3.inOut" }, "-=0.2");
      tl.from(".story-image", { scale: 1.2, duration: 1, ease: "power3.inOut" }, "<");

      // 3. Pause for a moment to read
      tl.to({}, { duration: 0.5 });

      // 4. Expand image to full screen
      tl.to(imgContainerRef.current, {
        width: "100vw",
        height: "100vh",
        maxWidth: "100vw",
        borderRadius: 0,
        duration: 1.5,
        ease: "power2.inOut"
      });

      // Simultaneously make the right column take up 100% width and fade out the text
      tl.to(".story-right", {
        width: "100%",
        duration: 1.5,
        ease: "power2.inOut"
      }, "<");

      tl.to(textRef.current, { opacity: 0, x: -50, duration: 1, ease: "power2.in" }, "<");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen bg-marble text-midnight overflow-hidden w-full">
      <div className="absolute inset-0 bg-noise opacity-5 mix-blend-overlay pointer-events-none" />
      
      <div className="relative w-full h-full flex items-center justify-center container-luxury">
        
        {/* Left Content */}
        <div ref={textRef} className="absolute left-0 top-0 w-full md:w-1/2 h-full flex flex-col justify-center pr-12 z-10 pl-6 md:pl-12">
          <h2 className="text-h2 font-heading mb-8">
            <span className="story-line block">Dr. Krishna Mohan</span>
            <span className="story-line block text-bronze italic">Ayurvedic Expert</span>
          </h2>
          <div className="story-divider h-[2px] w-24 bg-bronze origin-left scale-x-0 mb-8" />
          <p className="text-body-lg text-ink/80 max-w-md">
            <span className="story-line block">With over 22,950+ patients treated,</span>
            <span className="story-line block mt-2">Dr. Krishna Mohan specializes in non-surgical</span>
            <span className="story-line block mt-2">pain management using ancient Ayurvedic</span>
            <span className="story-line block mt-2">wisdom combined with modern care.</span>
          </p>
        </div>

        {/* Right Content */}
        <div className="story-right absolute right-0 top-0 w-full md:w-1/2 h-full flex flex-col items-center justify-center z-20">
          <div ref={imgContainerRef} className="story-mask h-[60vh] md:h-[80vh] w-auto aspect-[2/3] relative overflow-hidden rounded-[2px] shadow-2xl flex-shrink-0">
            <Image 
              src="/images/doctors/dr-krishna-mohan.jpg" 
              alt="Dr Krishna Mohan Ayurveda"
              fill 
              className="story-image object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}
