import { CtaBand, PageHero } from "@/components/ui/blocks";
import { testimonialsData } from "@/content/testimonials/testimonialData";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Patient Stories | Sciatica, Disc & Knee Pain Recovery at Swasthik Ayurveda",
  description:
    "Real experiences from patients treated at Swasthik Ayurveda, Kukatpally, Hyderabad for sciatica, L4-L5 disc bulge, knee osteoarthritis and cervical spondylosis.",
  path: "/testimonials",
  keywords: ["Swasthik Ayurveda reviews", "Ayurvedic sciatica treatment review Hyderabad", "Dr Krishna Mohan reviews"],
});

export default function TestimonialsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Patient stories"
        title="In their"
        accent="own words."
        intro="Experiences shared by patients treated at our Kukatpally clinic. Every recovery is different."
        crumbs={[{ name: "Patient stories", path: "/testimonials" }]}
      />

      <section className="pb-24 md:pb-32">
        <div className="wrap space-y-5">
          {testimonialsData.map((t, i) => (
            <figure
              key={t.id}
              data-reveal
              className={`grid gap-8 rounded-[28px] p-7 md:grid-cols-12 md:p-12 ${
                i % 3 === 0 ? "bg-saffron text-ink" : i % 3 === 1 ? "bg-ink-3" : "bg-lime text-ink"
              }`}
            >
              <figcaption className="md:col-span-4 flex flex-col justify-between gap-6">
                <span className="display text-7xl md:text-8xl opacity-90">0{i + 1}</span>
                <span>
                  <span className="display block text-4xl">{t.patientName}</span>
                  <span className="eyebrow mt-2 block opacity-70">{t.location}</span>
                </span>
              </figcaption>
              <div className="md:col-span-8">
                <p className="eyebrow opacity-70">
                  {t.condition}
                  {t.treatmentDuration ? ` · ${t.treatmentDuration}` : ""}
                </p>
                <blockquote className="mt-4 text-2xl md:text-3xl font-medium leading-snug">&ldquo;{t.quote}&rdquo;</blockquote>
              </div>
            </figure>
          ))}
          <p className="pt-6 text-sm text-ash">
            Individual results vary. Testimonials describe personal experiences and are not a guarantee of outcome.
          </p>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
