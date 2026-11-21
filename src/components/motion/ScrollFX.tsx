"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Wrap every word inside `el` (recursively, keeping nested markup) in mask spans. */
function splitWords(el: HTMLElement) {
  if (el.dataset.splitDone) return;
  el.dataset.splitDone = "1";
  const walk = (node: Node) => {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        const text = child.textContent ?? "";
        if (!text.trim()) return;
        const frag = document.createDocumentFragment();
        text.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) {
            frag.appendChild(document.createTextNode(" "));
            return;
          }
          const outer = document.createElement("span");
          outer.className = "split-word";
          const inner = document.createElement("span");
          inner.className = "split-inner";
          inner.textContent = part;
          outer.appendChild(inner);
          frag.appendChild(outer);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === Node.ELEMENT_NODE && !(child as HTMLElement).matches("br, svg, img")) {
        walk(child);
      }
    });
  };
  walk(el);
}

/**
 * Declarative scroll choreography. Any page can opt in with data attributes:
 *  data-split            words rise out of a mask when the element enters
 *  data-reveal           fade + rise   (data-reveal="clip" → clip-path wipe, "scale" → zoom-in)
 *  data-stagger          children reveal one after another
 *  data-parallax="0.15"  drifts on scroll (fraction of viewport)
 *  data-scrub-words      words light up one by one as you scroll through it
 *  data-counter="250"    number counts up (data-suffix="+")
 *  data-scale-scroll     scales up from 0.82 → 1 while scrolling into view
 */
export function ScrollFX() {
  const pathname = usePathname();

  useEffect(() => {
    let ctx: gsap.Context | undefined;
    // Wait one frame so the new route's DOM is painted.
    const raf = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
          splitWords(el);
          gsap.fromTo(el.querySelectorAll(".split-inner"), { y: 0, yPercent: 110 }, {
            yPercent: 0,
            duration: 1.1,
            ease: "expo.out",
            stagger: 0.045,
            delay: Number(el.dataset.delay ?? 0),
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          const kind = el.dataset.reveal;
          const from: gsap.TweenVars =
            kind === "clip"
              ? { clipPath: "inset(100% 0% 0% 0%)", opacity: 1 }
              : kind === "scale"
                ? { scale: 0.85, opacity: 0 }
                : kind === "left"
                  ? { x: -60, opacity: 0 }
                  : { y: 60, opacity: 0 };
          const to: gsap.TweenVars =
            kind === "clip"
              ? { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }
              : { x: 0, y: 0, scale: 1, opacity: 1 };
          gsap.fromTo(el, from, {
            ...to,
            duration: kind === "clip" ? 1.4 : 1.1,
            ease: "expo.out",
            delay: Number(el.dataset.delay ?? 0),
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((el) => {
          gsap.from(el.children, {
            y: 70,
            opacity: 0,
            duration: 1,
            ease: "expo.out",
            stagger: 0.08,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          const amount = Number(el.dataset.parallax || 0.15);
          gsap.fromTo(
            el,
            { yPercent: -amount * 100 },
            {
              yPercent: amount * 100,
              ease: "none",
              scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
            }
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-scrub-words]").forEach((el) => {
          splitWords(el);
          const inners = el.querySelectorAll<HTMLElement>(".split-inner");
          gsap.set(inners, { opacity: 0.14 });
          gsap.to(inners, {
            opacity: 1,
            ease: "none",
            stagger: 0.1,
            scrollTrigger: { trigger: el, start: "top 75%", end: "bottom 45%", scrub: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((el) => {
          const target = Number(el.dataset.counter);
          const suffix = el.dataset.suffix ?? "";
          const obj = { v: 0 };
          gsap.to(obj, {
            v: target,
            duration: 2,
            ease: "expo.out",
            onUpdate: () => {
              el.textContent = `${Math.round(obj.v)}${suffix}`;
            },
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-scale-scroll]").forEach((el) => {
          gsap.fromTo(
            el,
            { scale: 0.82, borderRadius: "48px" },
            {
              scale: 1,
              borderRadius: "0px",
              ease: "none",
              scrollTrigger: { trigger: el, start: "top bottom", end: "top 20%", scrub: true },
            }
          );
        });
      });
      ScrollTrigger.refresh();
    });

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("load", onLoad);
      ctx?.revert();
    };
  }, [pathname]);

  return null;
}
