import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { conditionsData } from "@/content/treatments/treatmentData";
import { CtaBand, PageHero } from "@/components/ui/blocks";
import { pageMetadata, jsonLd, absoluteUrl } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Ayurvedic Treatment for Back, Spine, Neck & Knee Pain in Hyderabad",
  description:
    "Non-surgical Ayurvedic treatment in Kukatpally, Hyderabad for sciatica, slip disc, L4-L5 disc bulge, back pain, lower back pain, knee pain, knee osteoarthritis and cervical spondylosis.",
  path: "/treatments",
  keywords: [
    "Ayurvedic treatment for back pain Hyderabad",
    "spine treatment without surgery Hyderabad",
    "knee pain Ayurvedic treatment Kukatpally",
    "sciatica Ayurveda Hyderabad",
    "neck pain Ayurvedic treatment",
  ],
});

const shortName = (name: string) => name.replace(/ \(.*\)/, "");

export default function TreatmentsPage() {
  const list = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Conditions treated at Swasthik Ayurveda",
    itemListElement: conditionsData.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(`/treatments/${c.slug}`),
      name: c.name,
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(list)} />
      <PageHero
        eyebrow="Conditions we treat"
        title="Spine & joint pain,"
        accent="treated at the root."
        intro="Eight conditions we see every day in Kukatpally. Pick yours to read what causes it, how classical Ayurveda treats it, and what your care plan looks like."
        crumbs={[{ name: "Conditions", path: "/treatments" }]}
      />

      <section className="pb-24">
        <ul className="border-t hairline">
          {conditionsData.map((c, i) => (
            <li key={c.slug} className="border-b hairline">
              <Link
                href={`/treatments/${c.slug}`}
                className="group wrap relative grid items-center gap-4 py-8 md:grid-cols-12 md:py-10"
              >
                <span className="display text-3xl text-saffron md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                <span className="md:col-span-6">
                  <span className="display block text-[7.8vw] md:text-[3.3vw] transition-all duration-500 ease-out-expo group-hover:translate-x-3 group-hover:text-lime">
                    {shortName(c.name)}
                  </span>
                </span>
                <span className="md:col-span-4 text-bone/70 leading-relaxed">{c.shortDescription}</span>
                <span className="hidden md:flex md:col-span-1 justify-end">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border hairline transition-all duration-500 group-hover:rotate-45 group-hover:bg-lime group-hover:text-ink">
                    <ArrowUpRight />
                  </span>
                </span>
                {/* Floating preview on hover (desktop) */}
                <span className="duotone pointer-events-none absolute right-[14%] top-1/2 hidden h-48 w-64 -translate-y-1/2 rotate-3 scale-75 rounded-2xl opacity-0 transition-all duration-500 ease-out-expo group-hover:scale-100 group-hover:opacity-100 lg:block">
                  <Image src={c.image} alt="" fill sizes="256px" className="object-cover" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </main>
  );
}
