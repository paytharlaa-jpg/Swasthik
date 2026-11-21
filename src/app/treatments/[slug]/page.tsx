import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, TriangleAlert } from "lucide-react";
import { conditionsData } from "@/content/treatments/treatmentData";
import { therapiesData } from "@/content/therapies/therapyData";
import { Crumbs, CtaBand, Faq, Label, Tag } from "@/components/ui/blocks";
import { contactConfig } from "@/config/contact";
import { siteConfig } from "@/config/site";
import { pageMetadata, jsonLd, absoluteUrl, clinicRef, physicianRef } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return conditionsData.map((c) => ({ slug: c.slug }));
}

const shortName = (name: string) => name.replace(/ \(.*\)/, "");

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = conditionsData.find((x) => x.slug === slug);
  if (!c) return {};
  const n = shortName(c.name);
  return pageMetadata({
    title: `${n} Treatment in Hyderabad | Ayurvedic Care Without Surgery`,
    description: `${c.shortDescription} Non-surgical Ayurvedic ${n.toLowerCase()} treatment in Kukatpally, Hyderabad by ${siteConfig.leadDoctor}. Book on WhatsApp.`,
    path: `/treatments/${c.slug}`,
    image: c.image,
    keywords: [
      `${n} treatment Hyderabad`,
      `${n} Ayurvedic treatment`,
      `${n} treatment Kukatpally`,
      `${n} treatment without surgery`,
      `best Ayurvedic doctor for ${n.toLowerCase()} Hyderabad`,
      `${siteConfig.leadDoctor} ${n}`,
    ],
  });
}

export default async function ConditionPage({ params }: Props) {
  const { slug } = await params;
  const c = conditionsData.find((x) => x.slug === slug);
  if (!c) notFound();

  const n = shortName(c.name);
  const index = conditionsData.findIndex((x) => x.slug === slug);
  const related = conditionsData.filter((x) => c.relatedConditionSlugs.includes(x.slug));
  const therapies = therapiesData.filter((t) => t.helpsWith.includes(c.slug));
  const next = conditionsData[(index + 1) % conditionsData.length];
  const bookMsg = `Hello Dr. Krishna Mohan, I would like to consult for ${n}. Please share available appointment slots.`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${absoluteUrl(`/treatments/${c.slug}`)}#page`,
    url: absoluteUrl(`/treatments/${c.slug}`),
    name: c.heroHeadline,
    description: c.shortDescription,
    inLanguage: "en-IN",
    lastReviewed: "2026-11-21",
    reviewedBy: physicianRef,
    publisher: clinicRef,
    about: {
      "@type": "MedicalCondition",
      name: c.name,
      description: c.overview[0],
      signOrSymptom: c.symptoms.map((s) => ({ "@type": "MedicalSignOrSymptom", name: s })),
      riskFactor: c.contributingFactors.map((s) => ({ "@type": "MedicalRiskFactor", name: s })),
      possibleTreatment: c.therapiesOffered.map((t) => ({ "@type": "MedicalTherapy", name: t })),
    },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 md:pt-36">
        <div className="wrap">
          <Crumbs items={[{ name: "Conditions", path: "/treatments" }, { name: n, path: `/treatments/${c.slug}` }]} />
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Tag tone="saffron">{c.badge}</Tag>
            <span className="eyebrow text-ash">Condition {String(index + 1).padStart(2, "0")} / {String(conditionsData.length).padStart(2, "0")}</span>
          </div>
          <h1 data-split className="display mt-6 text-[10.2vw] md:text-[6.6vw] lg:text-[6vw]">
            {n}
          </h1>
          <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-end">
            <p data-reveal className="md:col-span-7 text-xl md:text-2xl font-medium leading-snug">
              {c.heroHeadline}. <span className="text-bone/60 font-normal">{c.heroSubheadline}</span>
            </p>
            <div data-reveal className="md:col-span-5 flex flex-wrap gap-3 md:justify-end">
              <a href={contactConfig.getWhatsAppUrl(bookMsg)} target="_blank" rel="noopener noreferrer" className="btn btn-saffron">
                Book for {n} <ArrowUpRight size={18} />
              </a>
              <a href={contactConfig.getPhoneUrl()} className="btn btn-ghost">
                Call clinic
              </a>
            </div>
          </div>
        </div>
        <div className="mt-14 px-4 md:px-10">
          <div data-scale-scroll className="duotone relative h-[55svh] md:h-[80vh] overflow-hidden rounded-[28px]">
            <div data-parallax="0.1" className="absolute -inset-y-[12%] inset-x-0">
              <Image src={c.image} alt={`${n} Ayurvedic treatment at Swasthik Ayurveda, Kukatpally, Hyderabad`} fill priority sizes="100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 md:py-32">
        <div className="wrap grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Label n="01">Understanding it</Label>
            <h2 data-split className="display mt-5 text-6xl md:text-7xl">
              What is {n.toLowerCase()}?
            </h2>
          </div>
          <div className="md:col-span-8 prose-bold text-lg md:text-xl text-bone/80 leading-relaxed" data-reveal>
            {c.overview.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Symptoms / causes */}
      <section className="border-t hairline">
        <div className="wrap grid md:grid-cols-2">
          {[
            { title: "Symptoms", list: c.symptoms, n: "02", tone: "text-saffron" },
            { title: "Causes & risk factors", list: c.contributingFactors, n: "03", tone: "text-lime" },
          ].map((b, bi) => (
            <div key={b.title} className={`py-16 md:py-20 ${bi ? "md:border-l hairline md:pl-12 border-t md:border-t-0" : "md:pr-12"}`}>
              <Label n={b.n}>{b.title}</Label>
              <ul className="mt-8" data-stagger>
                {b.list.map((s, i) => (
                  <li key={i} className="flex gap-5 border-b hairline py-5 text-lg leading-snug">
                    <span className={`display text-2xl ${b.tone}`}>{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-bone/85">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Red flags */}
      <section className="bg-saffron text-ink">
        <div className="wrap grid gap-8 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-4">
            <TriangleAlert size={40} />
            <h2 className="display mt-4 text-5xl md:text-6xl">When to get it checked</h2>
          </div>
          <ul className="md:col-span-8 grid gap-4 md:grid-cols-2" data-stagger>
            {c.whenToSeekCare.map((s, i) => (
              <li key={i} className="rounded-2xl bg-ink/10 p-5 font-medium leading-snug">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Ayurvedic approach */}
      <section className="py-24 md:py-32">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Label n="04">The Ayurvedic approach</Label>
            <h2 data-split className="display mt-5 text-6xl md:text-8xl">
              How we treat <span className="text-lime">{n.toLowerCase()}</span>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6" data-stagger>
            {c.ayurvedicApproach.map((p, i) => (
              <p key={i} className="border-l-2 border-saffron pl-6 text-lg text-bone/80 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="wrap mt-20">
          <p className="eyebrow text-ash">Therapies used for {n.toLowerCase()}</p>
          <ul className="mt-6 flex flex-wrap gap-3" data-stagger>
            {c.therapiesOffered.map((t) => (
              <li key={t} className="rounded-full border hairline px-5 py-3 text-sm md:text-base">
                {t}
              </li>
            ))}
          </ul>
          {therapies.length > 0 && (
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-stagger>
              {therapies.map((t) => (
                <Link
                  key={t.slug}
                  href={`/therapies/${t.slug}`}
                  className="group flex min-h-[200px] flex-col justify-between rounded-[22px] bg-ink-3 p-6 transition-colors duration-500 hover:bg-lime hover:text-ink"
                >
                  <span className="eyebrow opacity-60">{t.sanskrit}</span>
                  <span>
                    <span className="display block text-4xl">{t.name}</span>
                    <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium">
                      How it works <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Steps */}
      <section className="border-t hairline py-24 md:py-32">
        <div className="wrap">
          <Label n="05">Your care plan</Label>
          <h2 data-split className="display mt-5 text-6xl md:text-8xl">
            Step by <span className="text-saffron">step.</span>
          </h2>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-[28px] border hairline bg-[var(--line)] md:grid-cols-2 lg:grid-cols-4" data-stagger>
            {c.consultationSteps.map((s) => (
              <li key={s.step} className="flex min-h-[300px] flex-col justify-between bg-ink p-7">
                <span className="display text-7xl text-outline-saffron">0{s.step}</span>
                <div>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-bone/70 leading-relaxed">{s.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Faq faqs={c.faqs} title={`${n} FAQ`} />

      {/* Related + next */}
      <section className="border-t hairline py-20">
        <div className="wrap">
          {related.length > 0 && (
            <>
              <Label>Related conditions</Label>
              <div className="mt-8 flex flex-wrap gap-3">
                {related.map((r) => (
                  <Link key={r.slug} href={`/treatments/${r.slug}`} className="btn btn-ghost">
                    {shortName(r.name)} <ArrowUpRight size={16} />
                  </Link>
                ))}
              </div>
            </>
          )}
          <Link href={`/treatments/${next.slug}`} className="group mt-16 block border-t hairline pt-10">
            <span className="eyebrow text-ash">Next condition</span>
            <span className="display mt-3 flex items-center justify-between text-[8.4vw] md:text-[4.8vw] transition-colors group-hover:text-saffron">
              {shortName(next.name)}
              <ArrowUpRight className="h-[0.6em] w-[0.6em] transition-transform duration-500 group-hover:rotate-45" />
            </span>
          </Link>
        </div>
      </section>

      <CtaBand title={`Beat ${n.toLowerCase()} in`} accent="2027" message={bookMsg} />
    </main>
  );
}
