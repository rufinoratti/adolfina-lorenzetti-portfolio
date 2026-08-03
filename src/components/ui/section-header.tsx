import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function SectionHeader({
  meta,
  title,
  description,
  align = "left",
  className,
}: {
  meta: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" && "mx-auto flex max-w-3xl flex-col items-center text-center",
        className,
      )}
    >
      <Reveal variant="fade">
        <div
          className={cn(
            "flex w-full items-center gap-4",
            align === "center" && "justify-center",
          )}
        >
          <span className="whitespace-nowrap font-mono text-xs text-faint">{meta}</span>
          <span
            aria-hidden="true"
            className={cn("h-px flex-1 bg-line", align === "center" && "hidden sm:block")}
          />
        </div>
      </Reveal>
      <Reveal variant="fade-up" delay={0.05}>
        <h2 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal variant="fade-up" delay={0.1}>
          <p
            className={cn(
              "mt-6 max-w-[58ch] text-pretty text-base leading-relaxed text-muted",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}