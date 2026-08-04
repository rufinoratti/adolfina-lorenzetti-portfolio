import { cn } from "@/lib/utils";

/** Etiqueta técnica tipo "Residential" / "Commercial" */
export function ArchTag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted",
        className,
      )}
    >
      <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent" />
      {children}
    </span>
  );
}

/** Línea de cota: dos trazos verticales y una línea con medida */
export function Measure({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex flex-col items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-faint",
        className,
      )}
    >
      <div className="flex w-32 items-center justify-between">
        <span className="h-2.5 w-px bg-line-strong" />
        <span className="h-px w-24 bg-line-strong" />
        <span className="h-2.5 w-px bg-line-strong" />
      </div>
      {label}
    </div>
  );
}

/** Coordenadas geográficas como dato técnico */
export function Coords({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-mono text-[10px] uppercase tracking-[0.22em] text-faint",
        className,
      )}
    >
      {value}
    </p>
  );
}

/** Esquinas técnicas que enmarcan una imagen */
export function CornerFrame({
  className,
  length = 18,
}: {
  className?: string;
  length?: number;
}) {
  const tick = `h-${length} w-${length}`;
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0", className)}>
      <span className={cn(tick, "absolute left-0 top-0 border-l border-t border-accent/60")} />
      <span className={cn(tick, "absolute right-0 top-0 border-r border-t border-accent/60")} />
      <span className={cn(tick, "absolute bottom-0 left-0 border-b border-l border-accent/60")} />
      <span className={cn(tick, "absolute bottom-0 right-0 border-b border-r border-accent/60")} />
    </div>
  );
}

/** Plano de planta abstracto en baja opacidad */
export function FloorPlan({
  className,
  opacity = 0.5,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 160"
      fill="none"
      stroke="currentColor"
      strokeWidth={0.75}
      className={className}
      style={{ opacity }}
    >
      <rect x="16" y="14" width="168" height="132" />
      <line x1="16" y1="72" x2="112" y2="72" />
      <line x1="112" y1="14" x2="112" y2="72" />
      <line x1="112" y1="96" x2="184" y2="96" />
      <line x1="16" y1="116" x2="72" y2="116" />
      <line x1="72" y1="96" x2="72" y2="146" />
      <rect x="112" y="96" width="40" height="34" />
      <line x1="16" y1="14" x2="52" y2="14" />
      <line x1="16" y1="14" x2="16" y2="34" />
      <circle cx="132" cy="113" r="3" />
      <line x1="152" y1="96" x2="152" y2="130" />
    </svg>
  );
}

/** Flecha fina */
export function ThinArrow({
  className,
  direction = "right",
}: {
  className?: string;
  direction?: "right" | "down" | "up" | "left";
}) {
  const rotate =
    direction === "right"
      ? ""
      : direction === "down"
        ? "rotate(90)"
        : direction === "up"
          ? "-rotate-90"
          : "rotate-180";
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 60 12"
      fill="none"
      className={cn("h-3 w-14", rotate, className)}
    >
      <line x1="0" y1="6" x2="52" y2="6" stroke="currentColor" strokeWidth={0.75} />
      <path d="M48 1.5 54 6l-6 4.5" stroke="currentColor" strokeWidth={0.75} />
    </svg>
  );
}

/** Círculo decorativo fino */
export function RingDot({
  className,
}: {
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "block rounded-full border border-accent/50",
        className,
      )}
    />
  );
}

/** Silueta minimalista de una silla */
export function ChairSilhouette({
  className,
  opacity = 0.4,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 60 60"
      fill="none"
      stroke="currentColor"
      strokeWidth={0.8}
      className={className}
      style={{ opacity }}
    >
      <rect x="16" y="10" width="28" height="18" rx="2" />
      <line x1="20" y1="28" x2="16" y2="50" />
      <line x1="40" y1="28" x2="44" y2="50" />
      <line x1="12" y1="50" x2="48" y2="50" />
    </svg>
  );
}

/** Planta minimalista en maceta */
export function PlantLine({
  className,
  opacity = 0.4,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 60 60"
      fill="none"
      stroke="currentColor"
      strokeWidth={0.8}
      className={className}
      style={{ opacity }}
    >
      <path d="M30 34V20" />
      <path d="M30 20c-8 0-14-4-16-10 8 1 14 4 16 10Z" />
      <path d="M30 26c7 0 12-3 14-9-7 1-12 4-14 9Z" />
      <path d="M22 34h16v12h-16z" />
    </svg>
  );
}

/** Número de sección grande y tenue */
export function SectionIndex({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "font-serif text-[7rem] italic leading-none text-line-strong/60 sm:text-[10rem]",
        className,
      )}
    >
      {children}
    </span>
  );
}
