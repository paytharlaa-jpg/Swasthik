import gsap from "gsap";

export const EASING = {
  primary: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  luxury: "cubic-bezier(0.76, 0, 0.24, 1)",
  micro: "cubic-bezier(0.25, 1, 0.5, 1)",
};

export const revealText = (element: string | Element | null) => {
  if (!element) return;
  return gsap.fromTo(
    element,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: EASING.luxury,
      stagger: 0.05,
    }
  );
};

export const revealMask = (element: string | Element | null) => {
  if (!element) return;
  return gsap.fromTo(
    element,
    { clipPath: "inset(100% 0 0 0)" },
    {
      clipPath: "inset(0% 0 0 0)",
      duration: 1.5,
      ease: EASING.luxury,
    }
  );
};

export const fadeBlur = (element: string | Element | null) => {
  if (!element) return;
  return gsap.fromTo(
    element,
    { opacity: 0, filter: "blur(10px)", scale: 0.95 },
    {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      duration: 1.5,
      ease: EASING.primary,
    }
  );
};

export const parallaxImage = (
  element: string | Element | null,
  yOffset: number = 100
) => {
  if (!element) return;
  return gsap.fromTo(
    element,
    { y: -yOffset },
    {
      y: yOffset,
      ease: "none",
    }
  );
};
