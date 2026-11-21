import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";

/** Elegant variable serif for headlines and numerals (light weight, italic accents). */
export const display = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
  display: "swap",
  variable: "--nf-display",
});

/** Clean sans for body + UI copy. */
export const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--nf-sans",
});

/** Small labels, eyebrows. */
export const mono = JetBrains_Mono({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--nf-mono",
});
