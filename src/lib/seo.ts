import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const SITE_URL = "https://www.swastikayurveda.com";
export const OG_IMAGE = "/images/doctor/dr-krishna-mohan.jpg";

/** Absolute URL with the trailing slash the static export serves. */
export function absoluteUrl(path = "/") {
  const clean = path.startsWith("/") ? path : `/${path}`;
  const withSlash = clean.endsWith("/") ? clean : `${clean}/`;
  return `${SITE_URL}${withSlash === "//" ? "/" : withSlash}`;
}

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  absoluteTitle?: boolean;
};

/** One place that builds title, description, canonical, Open Graph and Twitter tags. */
export function pageMetadata({
  title,
  description,
  path,
  keywords,
  image = OG_IMAGE,
  type = "website",
  absoluteTitle = false,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type,
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

/** Serialise JSON-LD safely (escapes `<` as recommended in the Next.js JSON-LD guide). */
export function jsonLd(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export const clinicRef = {
  "@type": "MedicalClinic",
  "@id": `${SITE_URL}/#clinic`,
  name: siteConfig.name,
};

export const physicianRef = {
  "@type": "Physician",
  "@id": `${SITE_URL}/#dr-krishna-mohan`,
  name: siteConfig.leadDoctor,
};
