"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export function CinematicFooter() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        }
      });

      tl.from(".footer-bg", { y: -200, opacity: 0, scale: 1.1, duration: 2 });
      tl.from(".footer-content > *", { y: 100, opacity: 0, stagger: 0.1, duration: 1 }, "-=1");

    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative h-[120vh] md:h-[150vh] bg-midnight overflow-hidden flex items-end pb-12 md:pb-24">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/luxury_architecture_detail_1785743357136.png"
          alt="Architecture Footer"
          fill
          className="footer-bg object-cover opacity-[0.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/80 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[50vh] bg-gold/10 blur-[150px] pointer-events-none rounded-full" />
      </div>

      <div className="container-luxury relative z-10 w-full footer-content flex flex-col items-center text-center">
        
        <h2 className="text-hero font-hero text-ivory mb-8 flex justify-center">
          <img src="/images/SwasthiK Ayurveda Logo New.png" alt="Swasthik Ayurveda" className="h-24 md:h-32 w-auto object-contain" />
        </h2>
        <div className="h-[1px] w-full max-w-lg bg-gradient-to-r from-transparent via-gold to-transparent mb-12" />
        
        <p className="text-h3 font-heading text-ivory/80 italic max-w-2xl mx-auto mb-16">
          "Where ancient healing meets modern care."
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-24">
          {["Treatments", "Philosophy", "Gallery", "Success Rates", "Contact"].map((link) => (
            <Link key={link} href={`#${link.toLowerCase()}`} className="text-sm uppercase tracking-widest text-gold-soft hover:text-gold transition-colors relative group">
              {link}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center w-full border-t border-ivory/10 pt-8 text-xs text-ivory/40 uppercase tracking-widest gap-4">
          <p>&copy; {new Date().getFullYear()} Swasthik Ayurveda. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-gold transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-gold transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-gold transition-colors">Twitter</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
