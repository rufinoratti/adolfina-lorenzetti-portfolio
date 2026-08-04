"use client";

import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

type Variant =
  | "primary"
  | "secondary"
  | "ghost"
  | "ghostLight"
  | "paper"
  | "accent"
  | "link";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-ink-strong",
  paper:
    "bg-paper text-ink hover:bg-white shadow-[0_8px_30px_-12px_rgba(38,35,29,0.5)]",
  secondary:
    "border border-line-strong bg-surface font-medium text-ink hover:border-ink/40 hover:bg-subtle",
  ghost: "text-ink hover:bg-subtle",
  ghostLight:
    "border border-paper/40 text-paper backdrop-blur-sm hover:border-paper/70 hover:bg-paper/10",
  accent: "bg-accent text-paper hover:bg-accent-deep",
  link: "px-0 text-ink hover:text-accent-deep",
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
  arrowClass?: string;
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
  arrowClass,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  const arrow = (
    <ArrowUpRight
      weight="bold"
      aria-hidden="true"
      className={cn(
        "h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5",
        arrowClass,
      )}
    />
  );

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
          {withArrow && arrow}
        </a>
      );
    }
    if (isAnchor) {
      return (
        <a href={href} aria-label={ariaLabel} className={classes}>
          {children}
          {withArrow && arrow}
        </a>
      );
    }
    return (
      <Link href={href} aria-label={ariaLabel} className={classes} download={download}>
        {children}
        {withArrow && arrow}
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
      {withArrow && arrow}
    </button>
  );
}