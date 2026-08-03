import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/dynamic-icon";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

const ratios = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
  wide: "aspect-[16/10]",
} as const;

export function ProjectCard({
  project,
  ratio = "portrait",
  mobileImage = true,
}: {
  project: Project;
  ratio?: keyof typeof ratios;
  mobileImage?: boolean;
}) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group block"
      aria-label={`Ver proyecto ${project.title}`}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-line bg-subtle",
          ratios[ratio],
        )}
      >
        <Image
          src={`https://picsum.photos/seed/${project.coverSeed}/1200/${ratio === "landscape" || ratio === "wide" ? "900" : "1500"}`}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 40vw, 90vw"
          className={cn(
            "object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]",
            "saturate-[0.92] contrast-[1.02]",
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        {mobileImage && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="translate-y-3 rounded-full bg-paper/90 px-5 py-2.5 text-sm font-medium text-ink opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              Ver proyecto
            </span>
          </div>
        )}
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-ink">
            {project.title}
          </h3>
          <p className="mt-0.5 font-mono text-xs uppercase tracking-wide text-faint">
            {project.category}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-muted">{project.year}</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-ink transition-all duration-300 group-hover:bg-ink group-hover:text-paper">
            <Icon name="ArrowUpRight" size={14} weight="bold" />
          </span>
        </div>
      </div>
    </Link>
  );
}