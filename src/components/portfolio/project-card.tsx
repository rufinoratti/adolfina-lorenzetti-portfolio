import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/dynamic-icon";
import { ArchTag, CornerFrame } from "@/components/ui/arch";

import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group block overflow-hidden rounded-[2px] border border-line bg-surface transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_24px_60px_-32px_rgba(58,54,46,0.35)]"
      aria-label={`Explorar proyecto ${project.title}`}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-subtle sm:aspect-[21/9]">
        <Image
          src={project.cover}
          alt={`${project.title} — ${project.tagline}`}
          fill
          sizes="(min-width: 1024px) 70vw, 90vw"
          style={{ objectPosition: project.coverFocus }}
          className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

        <span className="absolute bottom-5 left-5 translate-y-3 rounded-full border border-paper/40 bg-paper/85 px-5 py-2.5 text-sm font-medium text-ink opacity-0 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100">
          Explorar proyecto
        </span>
        <CornerFrame className="opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="flex items-start justify-between gap-4 sm:block">
          <div>
            <h3 className="font-serif text-2xl font-medium tracking-tight text-ink sm:text-3xl">
              {project.title}
            </h3>
            <span className="mt-2 block h-px w-0 bg-accent transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-16" />
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 sm:mt-4">
            <ArchTag>{project.type}</ArchTag>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
              {project.location} · {project.year}
            </span>
          </div>
        </div>
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-all duration-500 group-hover:border-accent/50 group-hover:bg-ink group-hover:text-paper">
          <Icon
            name="ArrowUpRight"
            size={16}
            weight="bold"
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}