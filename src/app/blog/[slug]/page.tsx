import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/content/blog/blogData";
import { conditionsData } from "@/content/treatments/treatmentData";
import { Crumbs, CtaBand, Faq } from "@/components/ui/blocks";
import { pageMetadata, jsonLd, absoluteUrl, SITE_URL, clinicRef } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = blogPosts.find((x) => x.slug === slug);
  if (!p) return {};
  const meta = pageMetadata({
    title: p.seoTitle,
    description: p.metaDescription,
    path: `/blog/${p.slug}`,
    image: p.featuredImage,
    keywords: [p.primaryKeyword, ...p.secondaryKeywords],
    type: "article",
  });
  return { ...meta, openGraph: { ...meta.openGraph, type: "article", publishedTime: p.publishedDate, authors: [p.author.name] } };
}

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const p = blogPosts.find((x) => x.slug === slug);
  if (!p) notFound();
  const related = conditionsData.filter((c) => p.relatedTreatmentSlugs.includes(c.slug));
  const more = blogPosts.filter((x) => x.slug !== p.slug).slice(0, 2);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.metaDescription,
    image: `${SITE_URL}${p.featuredImage}`,
    datePublished: p.publishedDate,
    dateModified: p.publishedDate,
    author: { "@type": "Person", name: p.author.name, jobTitle: p.author.role },
    publisher: clinicRef,
    mainEntityOfPage: absoluteUrl(`/blog/${p.slug}`),
    keywords: [p.primaryKeyword, ...p.secondaryKeywords].join(", "),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />
      <article>
        <header className="pt-28 md:pt-36">
          <div className="wrap">
            <Crumbs items={[{ name: "Journal", path: "/blog" }, { name: p.category, path: `/blog/${p.slug}` }]} />
            <p className="eyebrow mt-10 text-saffron">
              {p.category} · {p.readTime} ·{" "}
              <time dateTime={p.publishedDate}>
                {new Date(p.publishedDate).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
              </time>
            </p>
            <h1 data-split className="display mt-5 max-w-[18ch] text-[7.2vw] md:text-[3.9vw]">
              {p.title}
            </h1>
            <p className="mt-6 text-bone/70">
              By <span className="font-medium text-bone">{p.author.name}</span>, {p.author.role}
            </p>
          </div>
          <div className="mt-12 px-4 md:px-10">
            <div data-scale-scroll className="duotone relative h-[50svh] md:h-[70vh] overflow-hidden rounded-[28px]">
              <Image src={p.featuredImage} alt={p.title} fill priority sizes="100vw" className="object-cover" />
            </div>
          </div>
        </header>

        <div className="wrap grid gap-12 py-20 md:grid-cols-12">
          <aside className="md:col-span-3">
            <nav aria-label="Table of contents" className="md:sticky md:top-28">
              <p className="eyebrow text-ash">In this article</p>
              <ol className="mt-4 space-y-3 text-sm">
                {p.content.map((s, i) => (
                  <li key={s.h2}>
                    <a href={`#${slugify(s.h2)}`} className="flex gap-3 text-bone/70 hover:text-lime">
                      <span className="text-saffron">{String(i + 1).padStart(2, "0")}</span>
                      {s.h2}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>
          <div className="md:col-span-8 md:col-start-5">
            <p className="text-2xl md:text-3xl font-medium leading-snug">{p.excerpt}</p>
            {p.content.map((s) => (
              <section key={s.h2} id={slugify(s.h2)} className="mt-14 scroll-mt-28">
                <h2 className="display text-5xl md:text-6xl">{s.h2}</h2>
                <div className="mt-6 space-y-5 text-lg text-bone/80 leading-relaxed">
                  {s.body.map((b, i) => (
                    <p key={i}>{b}</p>
                  ))}
                </div>
                {s.bullets && (
                  <ul className="mt-6 space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="border-l-2 border-saffron pl-5 text-lg text-bone/85">
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {related.length > 0 && (
              <div className="mt-16 rounded-[22px] bg-ink-3 p-7">
                <p className="eyebrow text-ash">Treatment guides</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {related.map((c) => (
                    <Link key={c.slug} href={`/treatments/${c.slug}`} className="btn btn-ghost !py-3 text-sm">
                      {c.name.replace(/ \(.*\)/, "")} <ArrowUpRight size={16} />
                    </Link>
                  ))}
                </div>
              </div>
            )}
            <p className="mt-10 text-sm text-ash">
              This article is for education only and is not a substitute for a medical consultation.
            </p>
          </div>
        </div>
      </article>

      {p.faqs.length > 0 && <Faq faqs={p.faqs} />}

      <section className="border-t hairline py-20">
        <div className="wrap grid gap-10 md:grid-cols-2">
          {more.map((m) => (
            <Link key={m.slug} href={`/blog/${m.slug}`} className="group block">
              <p className="eyebrow text-ash">Read next</p>
              <h2 className="display mt-3 text-4xl md:text-5xl group-hover:text-lime">{m.title}</h2>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
