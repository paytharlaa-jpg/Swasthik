import type { Metadata, Viewport } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/contact/FloatingContact";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { siteConfig } from "@/config/site";
import { display, sans, mono } from "@/lib/fonts";
import { SITE_URL, OG_IMAGE, jsonLd } from "@/lib/seo";
import { conditionsData } from "@/content/treatments/treatmentData";
import { therapiesData } from "@/content/therapies/therapyData";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Swasthik Ayurveda Hyderabad | Ayurvedic Spine, Back & Knee Pain Treatment",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Swasthik Ayurveda, Kukatpally, Hyderabad: non-surgical Ayurvedic treatment for sciatica, slip disc, L4-L5 disc bulge, back pain, knee osteoarthritis and cervical spondylosis with Dr. Krishna Mohan.",
  keywords: [
    "Ayurvedic clinic Hyderabad",
    "Ayurvedic treatment Kukatpally",
    "Dr Krishna Mohan Ayurveda",
    "sciatica treatment Hyderabad",
    "slip disc treatment without surgery Hyderabad",
    "L4-L5 disc bulge Ayurvedic treatment",
    "knee pain Ayurvedic treatment Hyderabad",
    "cervical spondylosis Ayurveda Hyderabad",
    "Panchakarma Hyderabad",
    "Agnikarma Hyderabad",
    "Kati Vasti Hyderabad",
  ],
  authors: [{ name: siteConfig.leadDoctor }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    title: "Swasthik Ayurveda | Move freely into 2027",
    description:
      "Classical Ayurvedic care for spine and joint pain in Kukatpally, Hyderabad. Book your New Year 2027 assessment with Dr. Krishna Mohan.",
    url: `${SITE_URL}/`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [{ url: OG_IMAGE, alt: `${siteConfig.leadDoctor}, ${siteConfig.name}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swasthik Ayurveda | Move freely into 2027",
    description: "Ayurvedic spine & joint care in Kukatpally, Hyderabad.",
    images: [OG_IMAGE],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: "/images/brand/swasthik-ayurveda-logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Kukatpally, Hyderabad",
    "geo.position": "17.4988;78.3888",
    ICBM: "17.4988, 78.3888",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f2e8",
  colorScheme: "light",
};

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalClinic", "LocalBusiness"],
      "@id": `${SITE_URL}/#clinic`,
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/images/brand/swasthik-ayurveda-logo.png`,
      image: `${SITE_URL}${OG_IMAGE}`,
      description: siteConfig.description,
      telephone: siteConfig.phoneClean,
      email: siteConfig.email,
      priceRange: "₹₹",
      hasMap: siteConfig.mapsUrl,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Above HDFC Bank, Dharmareddy Colony Phase-II, Hydernagar, Kukatpally",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: siteConfig.pincode,
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: 17.4988, longitude: 78.3888 },
      areaServed: ["Kukatpally", "KPHB Colony", "Hydernagar", "Miyapur", "JNTU", "Nizampet", "Hyderabad"].map((n) => ({
        "@type": "Place",
        name: n,
      })),
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "20:00",
        },
      ],
      medicalSpecialty: ["Musculoskeletal", "PhysicalTherapy"],
      availableService: therapiesData.map((t) => ({
        "@type": "MedicalTherapy",
        name: t.name,
        url: `${SITE_URL}/therapies/${t.slug}/`,
      })),
      knowsAbout: conditionsData.map((c) => c.name),
      employee: { "@id": `${SITE_URL}/#dr-krishna-mohan` },
    },
    {
      "@type": "Physician",
      "@id": `${SITE_URL}/#dr-krishna-mohan`,
      name: siteConfig.leadDoctor,
      jobTitle: siteConfig.doctorRole,
      image: `${SITE_URL}/images/doctor/dr-krishna-mohan.jpg`,
      worksFor: { "@id": `${SITE_URL}/#clinic` },
      url: `${SITE_URL}/doctors/`,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: siteConfig.name,
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#clinic` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="grain min-h-screen flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(siteSchema)} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-lime focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <SmoothScroll>
          <Header />
          <div id="main" className="flex-1">
            {children}
          </div>
          <Footer />
          <FloatingContact />
        </SmoothScroll>
      </body>
    </html>
  );
}
