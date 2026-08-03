import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { projects } from "@/lib/data/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selección de proyectos de branding, diseño editorial, packaging, diseño web e ilustración de Adolfina Lorenzetti.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-28 lg:pt-36">
      <Container>
        <Reveal variant="fade-up">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
            Portfolio
          </p>
          <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-tighter text-ink sm:text-6xl lg:text-7xl">
            Proyectos seleccionados
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            Un recorrido por identidades, publicaciones y objetos que ayudé a
            construir. Cada trabajo responde a un contexto y a una pregunta.
          </p>
        </Reveal>

        <div className="mt-16 pb-24 lg:mt-20 lg:pb-32">
          <PortfolioGrid projects={projects} />
        </div>
      </Container>

      <p className="sr-only">
        {projects.length} proyectos publicados por {site.name}.
      </p>
    </div>
  );
}