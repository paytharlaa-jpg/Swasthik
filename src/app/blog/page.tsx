import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaBand, PageHero } from "@/components/ui/blocks";
import { blogPosts } from "@/content/blog/blogData";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Spine & Joint Health Journal | Ayurveda Guides by Swasthik Ayurveda",
  description:
    "Doctor-written guides on sciatica, L4-L5 disc bulge, knee osteoarthritis and Ayurvedic spine care from Swasthik Ayurveda, Kukatpally, Hyderabad.",
  path: "/blog",
  keywords: ["sciatica guide", "L4-L5 disc bulge explained", "knee osteoarthritis Ayurveda", "Ayurveda spine health blog"],
});

export default function BlogPage() {
  const [lead, ...rest] = blogPosts;
  return (
    <main>
      <PageHero
        eyebrow="Journal"
        title="Know your"
        accent="spine."
        intro="Plain-language guides from our clinical team on pain, posture and Ayurvedic care."
        crumbs={[{ name: "Journal", path: "/blog" }]}
      />

      <section className="pb-24 md:pb-32">
        <div className="wrap">
          <Link href={`/blog/${lead.slug}`} className="group grid gap-8 md:grid-cols-12 md:items-end" data-reveal>
            <div className="duotone relative aspect-[16/10] rounded-[28px] md:col-span-7">
              <Image src={lead.featuredImage} alt={lead.title} fill priority sizes="(min-width:768px) 60vw, 100vw" className="object-cover" />
            </div>
            <div className="md:col-span-5">
              <p className="eyebrow text-saffron">
                Featured · {lead.category} · {lead.readTime}
              </p>
              <h2 className="display mt-4 text-5xl md:text-6xl group-hover:text-lime">{lead.title}</h2>
              <p className="mt-4 text-bone/70 leading-relaxed">{lead.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-medium">
                Read article <ArrowUpRight className="transition-transform group-hover:rotate-45" />
              </span>
            </div>
          </Link>

          <div className="mt-20 grid gap-10 md:grid-cols-2" data-stagger>
            {rest.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                <div className="duotone relative aspect-[16/10] rounded-[22px]">
                  <Image src={p.featuredImage} alt={p.title} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
                </div>
                <p className="eyebrow mt-5 text-ash">
                  {p.category} · {p.readTime}
                </p>
                <h2 className="display mt-3 text-4xl md:text-5xl group-hover:text-lime">{p.title}</h2>
                <p className="mt-3 text-bone/70 leading-relaxed">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
