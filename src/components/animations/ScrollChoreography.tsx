"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollChoreography() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Refresh ScrollTrigger after DOM has settled on route transition
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 180);

    const ctx = gsap.context(() => {
      // Helper to query unique elements
      const getUnique = (selector: string): HTMLElement[] => {
        const found = gsap.utils.toArray<HTMLElement>(selector);
        return Array.from(new Set(found));
      };

      // 1. Text Headings (Page titles, section headers across all pages)
      const headings = getUnique(
        ".anim-heading, main h1, main h2:not(.no-anim), .section-title"
      );
      headings.forEach((el) => {
        // Skip elements inside hero canvas or already animated
        if (el.closest(".hero-canvas-container")) return;

        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
          },
          y: 35,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
        });
      });

      // 2. Subtitles & Lead Paragraphs
      const subtitles = getUnique(
        ".anim-subtitle, main .py-12 > p, main .py-16 > p, .section-subtitle"
      );
      subtitles.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
          },
          y: 26,
          opacity: 0,
          duration: 0.8,
          delay: 0.08,
          ease: "power2.out",
        });
      });

      // 3. Status Badges & Pill Tags
      const badges = getUnique(".anim-badge, main .inline-flex.rounded-full");
      badges.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            once: true,
          },
          scale: 0.85,
          y: 12,
          opacity: 0,
          duration: 0.65,
          ease: "back.out(1.4)",
        });
      });

      // 4. CARDS OPENING ANIMATION: 3D perspective unfold for all card grids
      const cardContainers = getUnique(
        ".anim-card-grid, .anim-blog-grid, .grid-cards, main .grid:has(> .rounded-3xl), main .grid:has(> article)"
      );

      cardContainers.forEach((container) => {
        const cards = Array.from(container.children) as HTMLElement[];
        if (cards.length > 0) {
          gsap.set(container, { perspective: 1200 });
          gsap.set(cards, {
            transformOrigin: "50% 0%",
            transformStyle: "preserve-3d",
          });

          gsap.fromTo(
            cards,
            {
              opacity: 0,
              y: 60,
              rotateX: 20,
              scale: 0.92,
            },
            {
              scrollTrigger: {
                trigger: container,
                start: "top 86%",
                once: true,
              },
              opacity: 1,
              y: 0,
              rotateX: 0,
              scale: 1,
              duration: 0.9,
              stagger: 0.1,
              ease: "power3.out",
              clearProps: "transformOrigin,rotateX",
            }
          );
        }
      });

      // 5. Standalone Large Feature Cards & Detailed Information Panels
      const featureBoxes = getUnique(
        ".anim-card, main > div > .rounded-3xl.border, main .max-w-7xl > .rounded-3xl.border, main .max-w-4xl.rounded-3xl"
      );
      featureBoxes.forEach((box) => {
        if (box.closest(".grid") || box.closest(".anim-card-grid")) return;

        gsap.fromTo(
          box,
          {
            opacity: 0,
            y: 45,
            scale: 0.95,
            rotateX: 12,
          },
          {
            scrollTrigger: {
              trigger: box,
              start: "top 85%",
              once: true,
            },
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 0.95,
            ease: "power3.out",
            clearProps: "rotateX",
          }
        );
      });

      // 6. Doctor Portraits & Featured Imagery (3D reveal)
      const images = getUnique(
        ".anim-doctor-img, main .relative.w-full.max-w-lg.h-80, main .relative.w-72.h-96, main .relative.w-48.h-64"
      );
      images.forEach((img) => {
        gsap.fromTo(
          img,
          {
            opacity: 0,
            y: 40,
            scale: 0.92,
            rotateY: -8,
          },
          {
            scrollTrigger: {
              trigger: img,
              start: "top 84%",
              once: true,
            },
            opacity: 1,
            y: 0,
            scale: 1,
            rotateY: 0,
            duration: 1.1,
            ease: "power3.out",
            clearProps: "rotateY",
          }
        );
      });

      // 7. Doctor Biography & Credentials Stagger
      const doctorTexts = getUnique(".anim-doctor-text");
      doctorTexts.forEach((el) => {
        gsap.from(el.children, {
          scrollTrigger: {
            trigger: el,
            start: "top 84%",
            once: true,
          },
          y: 28,
          opacity: 0,
          duration: 0.75,
          stagger: 0.08,
          ease: "power3.out",
        });
      });

      // 8. Interactive Pain Map
      const painMaps = getUnique(".anim-pain-map, #pain-navigator");
      painMaps.forEach((map) => {
        gsap.fromTo(
          map,
          {
            opacity: 0,
            y: 50,
            rotateX: 14,
            scale: 0.94,
          },
          {
            scrollTrigger: {
              trigger: map,
              start: "top 84%",
              once: true,
            },
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            duration: 1.0,
            ease: "power3.out",
            clearProps: "rotateX",
          }
        );
      });

      // 9. CTA Sections & Appointment Forms
      const ctaSections = getUnique(".anim-cta-section");
      ctaSections.forEach((section) => {
        const children = Array.from(section.children) as HTMLElement[];
        gsap.fromTo(
          children,
          {
            opacity: 0,
            y: 45,
            scale: 0.94,
            rotateX: 14,
          },
          {
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              once: true,
            },
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            clearProps: "rotateX",
          }
        );
      });

      // 10. Accordion Items on Treatment Detail Pages
      const accordions = getUnique(".accordion-item, [data-accordion-item]");
      if (accordions.length > 0) {
        gsap.from(accordions, {
          scrollTrigger: {
            trigger: accordions[0],
            start: "top 85%",
            once: true,
          },
          opacity: 0,
          y: 25,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
        });
      }

      // 11. Footer Reveal
      const footers = getUnique(".anim-footer, footer");
      footers.forEach((footer) => {
        gsap.from(footer, {
          scrollTrigger: {
            trigger: footer,
            start: "top 95%",
            once: true,
          },
          y: 25,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      });
    });

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
