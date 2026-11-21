import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { therapiesData } from "@/content/therapies/therapyData";
import { CtaBand, PageHero } from "@/components/ui/blocks";
import { pageMetadata, jsonLd, absoluteUrl } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Ayurvedic Therapies in Hyderabad | Agnikarma, Kati Vasti, Panchakarma",
  description:
    "Classical Ayurvedic therapies at Swasthik Ayurveda, Kukatpally: Agnikarma, Kati Vasti, Janu Vasti, Greeva Vasti, Panchakarma, Shirodhara, Cupping, Patra Pinda Sweda (Elakizhi) and Nasya.",
  path: "/therapies",
  keywords: [
    "Ayurvedic therapies Hyderabad",
    "Panchakarma Kukatpally",
    "Agnikarma Hyderabad",
    "Kati Vasti Hyderabad",
    "Janu Vasti Hyderabad",
    "Shirodhara Hyderabad",
  ],
});

export default function TherapiesPage() {
  const list = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Ayurvedic therapies at Swasthik Ayurveda",
    itemListElement: therapiesData.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(`/therapies/${t.slug}`),
      name: t.name,
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(list)} />
      <PageHero
        eyebrow="Classical therapies"
        title="Nine therapies."
        accent="Zero shortcuts."
        intro="Each procedure is done the classical way and chosen for your condition after an examination, never sold as a package."
        crumbs={[{ name: "Therapies", path: "/therapies" }]}
      />

      <section className="pb-24 md:pb-32">
        <div className="wrap grid gap-5 md:grid-cols-2 lg:grid-cols-3" data-stagger>
          {therapiesData.map((t, i) => (
            <Link
              key={t.slug}
              href={`/therapies/${t.slug}`}
              className={`group flex flex-col overflow-hidden rounded-[28px] ${i % 3 === 0 ? "bg-saffron text-ink" : i % 3 === 1 ? "bg-ink-3" : "bg-lime text-ink"}`}
            >
              <div className="duotone relative aspect-[16/11]" style={{ ["--duo" as string]: i % 3 === 1 ? "#e2550f" : "#2f6e3b" }}>
                <Image src={t.image} alt={`${t.name} at Swasthik Ayurveda Hyderabad`} fill sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col justify-between gap-6 p-7">
                <div>
                  <p className="eyebrow opacity-60">{t.sanskrit}</p>
                  <h2 className="display mt-2 text-5xl">{t.name}</h2>
                  <p className="mt-3 font-medium">{t.tagline}</p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium">
                  {t.sessionLength} · Learn more
                  <ArrowUpRight size={18} className="transition-transform duration-500 group-hover:rotate-45" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
