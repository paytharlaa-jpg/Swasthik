"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import gsap from "gsap";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.to(".header-nav", {
      backgroundColor: isScrolled ? "rgba(11, 11, 13, 0.8)" : "transparent",
      backdropFilter: isScrolled ? "blur(16px)" : "blur(0px)",
      borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid rgba(255, 255, 255, 0)",
      paddingTop: isScrolled ? "1rem" : "2rem",
      paddingBottom: isScrolled ? "1rem" : "2rem",
      duration: 0.5,
    });
  }, [isScrolled]);

  return (
    <header className="header-nav fixed top-0 left-0 w-full z-50 transition-all">
      <div className="container-luxury flex items-center justify-between">
        <Link href="/" className="transition-transform hover:scale-105">
          <img src="/images/SwasthiK Ayurveda Logo New.png" alt="Swasthik Ayurveda" className="h-10 w-auto object-contain" />
        </Link>

        <nav className="hidden md:flex items-center gap-12">
          {["Home", "Sciatica", "Treatments", "7 Days Plan", "Success Stories", "FAQ", "Contact"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              className="text-sm font-semibold tracking-widest uppercase text-ivory/80 hover:text-gold transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <button className="hidden md:block border border-gold text-gold px-6 py-2 rounded-full uppercase tracking-widest text-xs font-semibold hover:bg-gold hover:text-midnight transition-colors">
          Book Consultation
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-ivory">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
            <line x1="4" y1="8" x2="20" y2="8" />
            <line x1="4" y1="16" x2="20" y2="16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
