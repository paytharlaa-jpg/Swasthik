"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  { label: "Doctors", href: "/doctors" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-40 transition-all duration-300 font-body",
          isScrolled
            ? "bg-midnight/90 backdrop-blur-md py-3 border-b border-white/10 shadow-xl"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center gap-3">
            <div className="relative w-36 h-10 sm:w-44 sm:h-12 md:w-52 md:h-14">
              <Image
                src="/images/brand/swasthik-ayurveda-logo.png"
                alt={siteConfig.name}
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-xs uppercase tracking-widest font-semibold transition-colors relative py-1",
                    isActive
                      ? "text-gold"
                      : "text-ivory/80 hover:text-gold"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={contactConfig.getPhoneUrl()}
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ivory/90 hover:text-gold transition-colors py-2 px-3"
              aria-label={`Call ${siteConfig.phone}`}
            >
              <Phone size={14} className="text-gold" />
              <span>{siteConfig.phone}</span>
            </a>

            <a
              href={contactConfig.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold hover:bg-gold-soft text-midnight text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_16px_rgba(212,175,55,0.3)] hover:scale-105"
            >
              <MessageCircle size={15} />
              <span>Book Consultation</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-ivory p-2 focus:outline-none focus:ring-2 focus:ring-gold/50 rounded-lg"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-midnight/98 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-28 pb-10 px-8 animate-in fade-in duration-300">
          <nav className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-xl font-heading font-semibold transition-colors py-1",
                    isActive ? "text-gold" : "text-ivory hover:text-gold"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
            <a
              href={contactConfig.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#25D366] text-white text-sm font-semibold shadow-lg"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Consultation</span>
            </a>

            <a
              href={contactConfig.getPhoneUrl()}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-gold text-midnight text-sm font-semibold shadow-lg"
            >
              <Phone size={18} />
              <span>Call Clinic: {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}

