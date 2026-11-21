"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";
import { getLenis } from "@/components/motion/SmoothScroll";
import { cn } from "@/lib/utils";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Conditions", href: "/treatments" },
  { label: "Therapies", href: "/therapies" },
  { label: "Doctors", href: "/doctors" },
  { label: "About", href: "/about" },
  { label: "Stories", href: "/testimonials" },
  { label: "Journal", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      setHidden(y > last && y > 400);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const lenis = getLenis();
    if (open) lenis?.stop();
    else lenis?.start();
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo",
          hidden && !open ? "-translate-y-full" : "translate-y-0",
          scrolled && !open ? "bg-ink/75 backdrop-blur-xl border-b hairline" : "bg-transparent"
        )}
      >
        <div className="wrap flex h-16 md:h-20 items-center justify-between gap-4">
          <Link href="/" aria-label={`${siteConfig.name} home`} className="relative block h-11 w-[78px] shrink-0 md:h-14 md:w-[100px]">
            <Image
              src="/images/brand/swasthik-ayurveda-logo.png"
              alt={siteConfig.name}
              fill
              sizes="100px"
              priority
              className="object-contain"
            />
          </Link>

          <nav aria-label="Primary" className="hidden xl:flex items-center gap-7 text-sm">
            {navLinks.slice(1, 7).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "relative py-1 transition-colors hover:text-lime",
                  pathname.startsWith(l.href) ? "text-lime" : "text-bone/80"
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={contactConfig.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-saffron !px-4 !py-2.5 text-sm hidden sm:inline-flex"
            >
              Book <ArrowUpRight size={16} />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="site-menu"
              className="group flex h-11 items-center gap-3 rounded-full border hairline px-4 text-sm font-medium hover:border-bone/50"
            >
              <span className="eyebrow">{open ? "Close" : "Menu"}</span>
              <span className="relative block h-3 w-5">
                <span
                  className={cn(
                    "absolute left-0 h-[2px] w-5 bg-current transition-all duration-500 ease-out-expo",
                    open ? "top-1.5 rotate-45" : "top-0"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 h-[2px] w-5 bg-current transition-all duration-500 ease-out-expo",
                    open ? "top-1.5 -rotate-45" : "top-[10px]"
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen menu */}
      <div
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={cn(
          "fixed inset-0 z-40 bg-saffron text-ink transition-[clip-path] duration-700 ease-out-expo",
          open ? "[clip-path:inset(0_0_0_0)]" : "[clip-path:inset(0_0_100%_0)] pointer-events-none"
        )}
        data-lenis-prevent
      >
        <div className="wrap flex h-full flex-col justify-between overflow-y-auto pt-24 pb-8">
          <nav aria-label="Menu" className="flex flex-col">
            {navLinks.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                tabIndex={open ? 0 : -1}
                className="group flex items-baseline justify-between border-b border-ink/20 py-1.5"
                style={{ transitionDelay: open ? `${120 + i * 45}ms` : "0ms" }}
              >
                <span
                  className={cn(
                    "display text-[7.8vw] md:text-[4.3vw] lg:text-[3.4vw] transition-all duration-700 ease-out-expo group-hover:translate-x-4 group-hover:text-bone",
                    open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  )}
                  style={{ transitionDelay: open ? `${120 + i * 45}ms` : "0ms" }}
                >
                  {l.label}
                </span>
                <span className="eyebrow">0{i + 1}</span>
              </Link>
            ))}
          </nav>
          <div className="mt-10 grid gap-4 text-sm md:grid-cols-3">
            <a href={contactConfig.getPhoneUrl()} tabIndex={open ? 0 : -1} className="font-medium">
              {siteConfig.phone}
            </a>
            <span>{siteConfig.address}</span>
            <span>{siteConfig.hours}</span>
          </div>
        </div>
      </div>
    </>
  );
}
