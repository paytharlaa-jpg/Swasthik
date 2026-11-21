import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { therapiesData, getTherapy } from "@/content/therapies/therapyData";
import { conditionsData } from "@/content/treatments/treatmentData";
import { Crumbs, CtaBand, Faq, Label, Tag } from "@/components/ui/blocks";
import { contactConfig } from "@/config/contact";
import { pageMetadata, jsonLd, absoluteUrl, clinicRef, physicianRef } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return therapiesData.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const t = getTherapy(slug);
  if (!t) return {};
  return pageMetadata({
    title: t.seoTitle,
    description: t.metaDescription,
    path: `/therapies/${t.slug}`,
    image: t.image,
    keywords: t.keywords,
  });
}

export default async function TherapyPage({ params }: Props) {
  const { slug } = await params;
  const t = getTherapy(slug);
  if (!t) notFound();

  const index = therapiesData.findIndex((x) => x.slug === slug);
  const next = therapiesData[(index + 1) % therapiesData.length];
  const conditions = conditionsData.filter((c) => t.helpsWith.includes(c.slug));
  const bookMsg = `Hello Swasthik Ayurveda, I would like to know more about ${t.name} and book a consultation with Dr. Krishna Mohan.`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    url: absoluteUrl(`/therapies/${t.slug}`),
    name: t.seoTitle,
    description: t.metaDescription,
    inLanguage: "en-IN",
    lastReviewed: "2026-11-21",
    reviewedBy: physicianRef,
    publisher: clinicRef,
    mainEntity: {
      "@type": "MedicalTherapy",
      name: t.name,
      alternateName: t.sanskrit,
      description: t.short,
      relevantSpecialty: "Musculoskeletal",
      contraindication: t.safety,
      howPerformed: t.process.map((p) => `${p.title}: ${p.description}`).join(" "),
    },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />

      <section className="relative pt-28 md:pt-36">
        <div className="wrap">
          <Crumbs items={[{ name: "Therapies", path: "/therapies" }, { name: t.name, path: `/therapies/${t.slug}` }]} />
          <div className="mt-10 flex flex-wrap gap-3">
            <Tag tone="lime">{t.sanskrit}</Tag>
            <Tag>{t.sessionLength}</Tag>
            <Tag>{t.courseLength}</Tag>
          </div>
          <h1 data-split className="display mt-6 text-[9.6vw] md:text-[6vw]">
            {t.name}
          </h1>
          <p data-reveal className="mt-6 max-w-3xl text-2xl md:text-4xl font-medium leading-tight">
            {t.tagline} <span className="text-bone/55 font-normal">{t.short}</span>
          </p>
          <div data-reveal className="mt-10 flex flex-wrap gap-3">
            <a href={contactConfig.getWhatsAppUrl(bookMsg)} target="_blank" rel="noopener noreferrer" className="btn btn-saffron">
              Ask about {t.name} <ArrowUpRight size={18} />
            </a>
            <a href={contactConfig.getPhoneUrl()} className="btn btn-ghost">
              Call clinic
            </a>
          </div>
        </div>
        <div className="mt-14 px-4 md:px-10">
          <div data-scale-scroll className="duotone relative h-[55svh] md:h-[78vh] overflow-hidden rounded-[28px]" style={{ ["--duo" as string]: "#2f6e3b" }}>
            <div data-parallax="0.1" className="absolute -inset-y-[12%] inset-x-0">
              <Image src={t.image} alt={`${t.name} (${t.sanskrit}) therapy at Swasthik Ayurveda, Kukatpally, Hyderabad`} fill priority sizes="100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="wrap grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Label n="01">What it is</Label>
            <h2 data-split className="display mt-5 text-6xl md:text-7xl">
              About {t.name}
            </h2>
          </div>
          <div data-reveal className="md:col-span-8 prose-bold text-lg md:text-xl text-bone/80 leading-relaxed">
            {t.whatItIs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t hairline py-24 md:py-32">
        <div className="wrap">
          <Label n="02">How a session works</Label>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-[28px] border hairline bg-[var(--line)] md:grid-cols-2 lg:grid-cols-4" data-stagger>
            {t.process.map((p, i) => (
              <li key={p.title} className="flex min-h-[280px] flex-col justify-between bg-ink p-7">
                <span className="display text-7xl text-outline-saffron">0{i + 1}</span>
                <div>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-3 text-bone/70 leading-relaxed">{p.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-lime text-ink py-20 md:py-28">
        <div className="wrap grid gap-12 md:grid-cols-2">
          <div>
            <Label n="03" className="!text-ink/60">
              Benefits
            </Label>
            <ul className="mt-8" data-stagger>
              {t.benefits.map((b) => (
                <li key={b} className="display border-b border-ink/15 py-4 text-4xl md:text-5xl">
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Label n="04" className="!text-ink/60">
              Safety first
            </Label>
            <ul className="mt-8 space-y-4" data-stagger>
              {t.safety.map((s) => (
                <li key={s} className="flex gap-4 rounded-2xl bg-ink/10 p-5 font-medium leading-snug">
                  <ShieldCheck className="shrink-0" /> {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {conditions.length > 0 && (
        <section className="py-24 md:py-28">
          <div className="wrap">
            <Label n="05">Used for</Label>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-stagger>
              {conditions.map((c) => (
                <Link
                  key={c.slug}
                  href={`/treatments/${c.slug}`}
                  className="group flex items-center justify-between rounded-[22px] border hairline p-6 transition-colors duration-500 hover:border-saffron hover:bg-saffron hover:text-ink"
                >
                  <span className="display text-4xl">{c.name.replace(/ \(.*\)/, "")}</span>
                  <ArrowUpRight className="transition-transform duration-500 group-hover:rotate-45" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Faq faqs={t.faqs} title={`${t.name} FAQ`} />

      <section className="border-t hairline py-20">
        <div className="wrap">
          <Link href={`/therapies/${next.slug}`} className="group block">
            <span className="eyebrow text-ash">Next therapy</span>
            <span className="display mt-3 flex items-center justify-between text-[8.4vw] md:text-[4.8vw] transition-colors group-hover:text-lime">
              {next.name}
              <ArrowUpRight className="h-[0.6em] w-[0.6em] transition-transform duration-500 group-hover:rotate-45" />
            </span>
          </Link>
        </div>
      </section>

      <CtaBand message={bookMsg} />
    </main>
  );
}
