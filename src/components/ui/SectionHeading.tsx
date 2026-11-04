import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        centered ? "text-center mx-auto max-w-3xl" : "text-left max-w-2xl",
        className
      )}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs tracking-widest uppercase font-semibold mb-4 anim-heading">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          {badge}
        </div>
      )}
      <h2
        className={cn(
          "text-3xl md:text-5xl font-heading font-semibold text-ivory tracking-tight mb-4 anim-heading",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-ivory/70 leading-relaxed font-body anim-subtitle">
          {subtitle}
        </p>
      )}
    </div>
  );
}
