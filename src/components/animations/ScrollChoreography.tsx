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

    // Brief settling timeout after client-side route transitions
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    const ctx = gsap.context(() => {
      // 1. Text Headings (Smooth slide-up + subtle tracking settle)
      const headings = gsap.utils.toArray<HTMLElement>(".anim-heading");
      headings.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
          y: 40,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
        });
      });

      // 2. Subtitles & Supporting Paragraphs (Staggered fade-up)
      const subtitles = gsap.utils.toArray<HTMLElement>(".anim-subtitle");
      subtitles.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
          y: 28,
          opacity: 0,
          duration: 0.8,
          delay: 0.1,
          ease: "power2.out",
        });
      });

      // 3. CARDS OPENING ANIMATION: Treatment & Therapy Grids
      // Cards unfold in 3D perspective from top-edge (rotateX: 22 -> 0, scale: 0.9 -> 1)
      const cardGrids = gsap.utils.toArray<HTMLElement>(".anim-card-grid");
      cardGrids.forEach((container) => {
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
              y: 65,
              rotateX: 22,
              scale: 0.9,
            },
            {
              scrollTrigger: {
                trigger: container,
                start: "top 85%",
                once: true,
              },
              opacity: 1,
              y: 0,
              rotateX: 0,
              scale: 1,
              duration: 0.95,
              stagger: 0.12,
              ease: "power3.out",
              clearProps: "transformOrigin,rotateX",
            }
          );
        }
      });

      // 4. CARDS OPENING ANIMATION: Testimonials & Blog Grids
      const blogGrids = gsap.utils.toArray<HTMLElement>(".anim-blog-grid");
      blogGrids.forEach((grid) => {
        const cards = Array.from(grid.children) as HTMLElement[];
        if (cards.length > 0) {
          gsap.set(grid, { perspective: 1200 });
          gsap.set(cards, {
            transformOrigin: "50% 0%",
            transformStyle: "preserve-3d",
          });

          gsap.fromTo(
            cards,
            {
              opacity: 0,
              y: 55,
              rotateX: 20,
              scale: 0.92,
            },
            {
              scrollTrigger: {
                trigger: grid,
                start: "top 85%",
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

      // 5. Doctor Portrait 3D Reveal
      const doctorImgs = gsap.utils.toArray<HTMLElement>(".anim-doctor-img");
      doctorImgs.forEach((img) => {
        gsap.fromTo(
          img,
          {
            opacity: 0,
            y: 45,
            scale: 0.92,
            rotateY: -8,
          },
          {
            scrollTrigger: {
              trigger: img,
              start: "top 82%",
              once: true,
            },
            opacity: 1,
            y: 0,
            scale: 1,
            rotateY: 0,
            duration: 1.15,
            ease: "power3.out",
            clearProps: "rotateY",
          }
        );
      });

      // 6. Doctor Biography & Credentials Stagger
      const doctorTexts = gsap.utils.toArray<HTMLElement>(".anim-doctor-text");
      doctorTexts.forEach((el) => {
        gsap.from(el.children, {
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            once: true,
          },
          y: 32,
          opacity: 0,
          duration: 0.75,
          stagger: 0.09,
          ease: "power3.out",
        });
      });

      // 7. Interactive Pain Navigator (3D perspective tilt unfold)
      const painMaps = gsap.utils.toArray<HTMLElement>(".anim-pain-map");
      painMaps.forEach((map) => {
        gsap.fromTo(
          map,
          {
            opacity: 0,
            y: 50,
            rotateX: 15,
            scale: 0.93,
          },
          {
            scrollTrigger: {
              trigger: map,
              start: "top 82%",
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

      // 8. Appointment CTA & Form Container (3D Unfold)
      const ctaContainers = gsap.utils.toArray<HTMLElement>(".anim-cta-section");
      ctaContainers.forEach((section) => {
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
              start: "top 80%",
              once: true,
            },
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 0.9,
            stagger: 0.14,
            ease: "power3.out",
            clearProps: "rotateX",
          }
        );
      });

      // 9. Footer Reveal
      const footers = gsap.utils.toArray<HTMLElement>(".anim-footer");
      footers.forEach((footer) => {
        gsap.from(footer, {
          scrollTrigger: {
            trigger: footer,
            start: "top 92%",
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
