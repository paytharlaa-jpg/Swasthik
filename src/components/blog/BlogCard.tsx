import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { BlogPost } from "@/types";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group rounded-3xl bg-navy-deep/60 border border-white/10 hover:border-gold/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(212,175,55,0.12)]">
      <div>
        {/* Featured Image */}
        <div className="relative h-52 w-full overflow-hidden bg-midnight">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent" />
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-midnight/80 backdrop-blur-md border border-gold/40 text-gold text-xs font-semibold">
            {post.category}
          </span>
        </div>

        {/* Post Content */}
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-4 text-xs text-ivory/60 mb-3 font-body">
            <span className="flex items-center gap-1">
              <Calendar size={13} />
              {post.publishedDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock size={13} />
              {post.readTime}
            </span>
          </div>

          <h3 className="text-xl font-heading font-semibold text-ivory group-hover:text-gold transition-colors mb-3 line-clamp-2">
            {post.title}
          </h3>

          <p className="text-sm text-ivory/70 leading-relaxed font-body line-clamp-3 mb-6">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Bottom Read Link */}
      <div className="px-6 pb-6 md:px-8 md:pb-8">
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold group-hover:text-champagne transition-colors"
        >
          <span>Read Full Article</span>
          <ArrowRight
            size={14}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </article>
  );
}

