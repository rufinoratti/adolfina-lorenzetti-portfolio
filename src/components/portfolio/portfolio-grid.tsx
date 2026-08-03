"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ProjectCard } from "@/components/portfolio/project-card";
import type { Project } from "@/types/project";
import { cn } from "@/lib/utils";

const filters = ["Todos", "Branding", "Diseño editorial", "Packaging", "Diseño web", "Ilustración"] as const;

export function PortfolioGrid({ projects }: { projects: Project[] }) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<(typeof filters)[number]>("Todos");

  const visible = useMemo(
    () =>
      active === "Todos"
        ? projects
        : projects.filter((project) => project.category === active),
    [projects, active],
  );

  return (
    <div>
      <div
        role="group"
        aria-label="Filtrar proyectos por categoría"
        className="flex flex-wrap gap-2"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
            className={cn(
              "rounded-full border px-4 py-2 font-mono text-xs transition-all duration-300",
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
        className="mt-14 grid items-start gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-y-24"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((project, index) => (
            <motion.div
              layout={!reduce}
              key={project.slug}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                index % 2 === 0
                  ? "md:col-span-1 lg:col-span-7"
                  : "md:col-span-1 lg:col-span-5 lg:mt-16",
              )}
            >
              <ProjectCard
                project={project}
                ratio={index % 2 === 0 ? "landscape" : "portrait"}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && (
        <p className="mt-14 text-muted">
          No hay proyectos en esta categoría todavía.
        </p>
      )}
    </div>
  );
}