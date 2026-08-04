import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/dynamic-icon";
import { CornerFrame, ArchTag } from "@/components/ui/arch";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

const ratios = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/10]",
} as const;

export function ProjectCard({
  project,
  ratio = "portrait",
  showExplore = true,
}: {
  project: Project;
  ratio?: keyof typeof ratios;
  showExplore?: boolean;
}) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group block"
      aria-label={`Explorar proyecto ${project.title}`}
    >
      <div className={cn("relative overflow-hidden rounded-[2px] bg-subtle", ratios[ratio])}>
        <Image
          src={project.cover}
          alt={`${project.title} — ${project.tagline}`}
          fill
          sizes="(min-width: 1024px) 45vw, 92vw"
          className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.045]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

        {showExplore && (
          <span className="absolute bottom-5 left-5 translate-y-3 rounded-full border border-paper/40 bg-paper/85 px-5 py-2.5 text-sm font-medium text-ink opacity-0 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100">
            Explorar proyecto
          </span>
        )}
        <CornerFrame className="opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="mt-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-2xl font-medium tracking-tight text-ink transition-colors duration-300 group-hover:text-accent-deep sm:text-[1.7rem]">
            {project.title}
          </h3>
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
            <ArchTag>{project.type}</ArchTag>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
              {project.location} · {project.year}
            </span>
          </div>
        </div>
        <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-all duration-500 group-hover:border-accent/50 group-hover:bg-ink group-hover:text-paper">
          <Icon
            name="ArrowUpRight"
            size={15}
            weight="bold"
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}