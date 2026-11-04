import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/contact/FloatingContact";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.swastikayurveda.com"),
  title: {
    default: `${siteConfig.name} | Premium Ayurvedic Spine & Joint Care Hyderabad`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Swasthik Ayurveda",
    "Ayurvedic clinic Hyderabad",
    "Dr Krishna Mohan",
    "Sciatica treatment Hyderabad",
    "L4-L5 disc bulge Ayurvedic care",
    "Knee pain Ayurvedic clinic Kukatpally",
    "Slip disc non surgical treatment",
    "Panchakarma Hyderabad",
    "Agnikarma therapy Hyderabad",
  ],
  authors: [{ name: siteConfig.leadDoctor }, { name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `${siteConfig.name} | Premium Ayurvedic Care`,
    description: siteConfig.description,
    url: "https://www.swastikayurveda.com",
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/brand/swasthik-ayurveda-logo.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Traditional Ayurvedic Wisdom`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Ayurvedic Spine & Joint Care`,
    description: siteConfig.description,
    images: ["/images/brand/swasthik-ayurveda-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.swastikayurveda.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.website,
    logo: "https://www.swastikayurveda.com/images/brand/swasthik-ayurveda-logo.png",
    image: "https://www.swastikayurveda.com/images/doctor/dr-krishna-mohan.jpg",
    description: siteConfig.description,
    telephone: siteConfig.phoneClean,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Above HDFC Bank, Dharmareddy Colony Phase-II, Hydernagar",
      addressLocality: "Kukatpally, Hyderabad",
      addressRegion: "Telangana",
      postalCode: siteConfig.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.4988,
      longitude: 78.3888,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    medicalSpecialty: [
      "Ayurvedic Medicine",
      "Spine and Joint Disorders",
      "Musculoskeletal Care",
      "Panchakarma",
    ],
    physician: [
      {
        "@type": "Physician",
        name: siteConfig.leadDoctor,
        jobTitle: siteConfig.doctorRole,
        medicalSpecialty: "Ayurvedic Spine & Joint Care",
      },
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Inter:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-midnight text-ivory antialiased selection:bg-gold selection:text-midnight min-h-screen flex flex-col">
        <LenisProvider>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
          <FloatingContact />
        </LenisProvider>
      </body>
    </html>
  );
}
