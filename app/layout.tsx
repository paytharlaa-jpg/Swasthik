import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Playfair_Display } from "next/font/google";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { LuxuryCursor } from "@/components/ui/LuxuryCursor";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-canela", // Using Playfair as a substitute for Canela
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Swasthik Ayurveda | Premium Ayurvedic Care",
  description: "Experience the most premium root-cause-focused Ayurvedic healing and personalized therapies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable} ${manrope.variable} antialiased`}>
      <body className="bg-midnight text-ivory antialiased selection:bg-gold selection:text-midnight">
        <LuxuryCursor />
        <LenisProvider>
          <Header />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
