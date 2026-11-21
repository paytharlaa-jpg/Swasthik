import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { therapiesData } from "@/content/therapies/therapyData";
import { Label } from "@/components/ui/blocks";

const FEATURED = ["agnikarma", "kati-vasti", "janu-vasti", "panchakarma", "shirodhara", "greeva-vasti"];
const SKINS = [
  { bg: "bg-saffron", fg: "text-ink", duo: "#2f6e3b" },
  { bg: "bg-ink-3", fg: "text-bone", duo: "#e2550f" },
  { bg: "bg-lime", fg: "text-ink", duo: "#2f6e3b" },
  { bg: "bg-bone", fg: "text-ink", duo: "#e2550f" },
  { bg: "bg-ink-2", fg: "text-bone", duo: "#2f6e3b" },
  { bg: "bg-gold", fg: "text-ink", duo: "#2f6e3b" },
];

/** Cards that stick and stack on top of each other while scrolling. */
export function TherapiesStack() {
  const list = FEATURED.map((s) => therapiesData.find((t) => t.slug === s)!).filter(Boolean);
  return (
    <section className="relative bg-ink py-24 md:py-36">
      <div className="wrap">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <Label n="03">Classical therapies</Label>
            <h2 data-split className="display mt-6 text-[10.2vw] md:text-[5.4vw]">
              Old science. <span className="text-outline">Hard results.</span>
            </h2>
          </div>
          <p data-reveal className="md:col-span-4 text-lg text-bone/70 leading-relaxed">
            Procedures described in the Charaka and Sushruta Samhitas, done the classical way, chosen for your
            condition, never as a package.
          </p>
        </div>

        <div className="mt-16 md:mt-24">
          {list.map((t, i) => {
            const s = SKINS[i % SKINS.length];
            return (
              <article
                key={t.slug}
                className={`sticky mb-6 overflow-hidden rounded-[28px] ${s.bg} ${s.fg} shadow-[0_-20px_60px_rgba(0,0,0,0.45)]`}
                style={{ top: `calc(5.5rem + ${i * 1.1}rem)` }}
              >
                <Link href={`/therapies/${t.slug}`} className="group grid min-h-[72svh] md:min-h-[68vh] md:grid-cols-12">
                  <div className="flex flex-col justify-between gap-8 p-6 md:col-span-7 md:p-12">
                    <div className="flex items-center justify-between eyebrow opacity-70">
                      <span>{String(i + 1).padStart(2, "0")} / {String(list.length).padStart(2, "0")}</span>
                      <span>{t.sanskrit}</span>
                    </div>
                    <div>
                      <h3 className="display text-[9vw] md:text-[4.2vw]">{t.name}</h3>
                      <p className="mt-4 text-xl md:text-2xl font-medium">{t.tagline}</p>
                      <p className="mt-4 max-w-lg opacity-75 leading-relaxed">{t.short}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-6 text-sm">
                      <span>
                        <span className="eyebrow block opacity-60">Session</span>
                        <span className="font-medium">{t.sessionLength}</span>
                      </span>
                      <span>
                        <span className="eyebrow block opacity-60">Course</span>
                        <span className="font-medium">{t.courseLength}</span>
                      </span>
                      <span className="ml-auto inline-flex items-center gap-2 font-medium">
                        Read more
                        <ArrowUpRight className="transition-transform duration-500 group-hover:rotate-45" />
                      </span>
                    </div>
                  </div>
                  <div className="duotone relative min-h-[34vh] md:col-span-5 md:min-h-0" style={{ ["--duo" as string]: s.duo }}>
                    <Image
                      src={t.image}
                      alt={`${t.name} (${t.sanskrit}) at Swasthik Ayurveda, Kukatpally`}
                      fill
                      sizes="(min-width:768px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/therapies" className="btn btn-ghost">
            All {therapiesData.length} therapies <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
