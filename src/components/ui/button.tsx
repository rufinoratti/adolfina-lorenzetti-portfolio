"use client";

import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "accent";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-paper hover:bg-[#2c2a26] hover:shadow-[0_10px_30px_-12px_rgba(28,27,24,0.5)]",
  secondary:
    "border border-line-strong bg-surface text-ink hover:border-ink/40 hover:bg-subtle",
  ghost: "text-ink hover:bg-subtle",
  accent:
    "bg-accent text-white hover:bg-accent-deep hover:shadow-[0_10px_30px_-12px_rgba(216,80,47,0.6)]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-[15px]",
  lg: "h-12 px-7 text-base",
};

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: Variant;
  size?: Size;
  className?: string;
  withArrow?: boolean;
  ariaLabel?: string;
  disabled?: boolean;
  download?: boolean;
}

export function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className,
  withArrow = false,
  ariaLabel,
  disabled,
  download,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    const external = /^https?:\/\//.test(href);
    const isAnchor = href.startsWith("#");
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          className={classes}
        >
          {children}
          {withArrow && (
            <ArrowUpRight
              weight="bold"
              className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            />
          )}
        </a>
      );
    }
    if (isAnchor) {
      return (
        <a href={href} aria-label={ariaLabel} className={classes}>
          {children}
          {withArrow && (
            <ArrowUpRight
              weight="bold"
              className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            />
          )}
        </a>
      );
    }
    return (
      <Link href={href} aria-label={ariaLabel} className={classes} download={download}>
        {children}
        {withArrow && (
          <ArrowUpRight
            weight="bold"
            className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
          />
        )}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      className={cn(classes, disabled && "cursor-not-allowed opacity-50")}
    >
      {children}
      {withArrow && (
        <ArrowUpRight
          weight="bold"
          className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
        />
      )}
    </button>
  );
}