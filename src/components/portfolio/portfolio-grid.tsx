"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ProjectCard } from "@/components/portfolio/project-card";
import type { Project, ProjectType } from "@/types/project";
import { cn } from "@/lib/utils";

const filters = [
  "Todos",
  "Residencial",
  "Comercial",
  "Remodelación",
  "Corporativo",
  "Especiales",
] as const;

export function PortfolioGrid({ projects }: { projects: Project[] }) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<(typeof filters)[number]>("Todos");

  const visible = useMemo(
    () =>
      active === "Todos"
        ? projects
        : projects.filter((project) => project.type === (active as ProjectType)),
    [projects, active],
  );

  return (
    <div>
      <div
        role="group"
        aria-label="Filtrar proyectos por tipo"
        className="flex flex-wrap gap-2"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
            className={cn(
              "rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] transition-all duration-300",
              active === filter
                ? "border-ink bg-ink text-paper"
                : "border-line bg-surface text-muted hover:border-ink/30 hover:text-ink",
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div
        layout={!reduce}
        className="mt-14 grid items-start gap-10 md:grid-cols-2 lg:gap-14"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              layout={!reduce}
              key={project.slug}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && (
        <p className="mt-14 text-muted">
          Todavía no hay proyectos publicados en esta categoría.
        </p>
      )}
    </div>
  );
}