import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "whatsapp" | "phone" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal,
  children,
  icon,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold/50 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-4 gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-gold text-midnight hover:bg-gold-soft hover:shadow-[0_0_24px_rgba(212,175,55,0.4)] hover:scale-[1.02]",
    secondary:
      "bg-emerald-deep text-ivory hover:bg-emerald hover:shadow-[0_0_20px_rgba(11,74,54,0.4)]",
    outline:
      "border border-gold text-gold hover:bg-gold hover:text-midnight hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#20ba59] hover:shadow-[0_0_24px_rgba(37,211,102,0.4)] hover:scale-[1.02]",
    phone:
      "bg-gold-soft text-midnight hover:bg-gold hover:shadow-[0_0_20px_rgba(243,223,160,0.4)]",
    ghost:
      "text-ivory hover:text-gold hover:bg-white/5",
  };

  const combinedClasses = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {icon && <span className="shrink-0">{icon}</span>}
          <span>{children}</span>
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}

