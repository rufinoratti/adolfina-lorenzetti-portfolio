import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  tone = "neutral",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "neutral" | "accent";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] tracking-wide",
        tone === "neutral" && "border-line bg-subtle text-muted",
        tone === "accent" && "border-accent/20 bg-accent-soft text-accent-deep",
        className,
      )}
    >
      {children}
    </span>
  );
}