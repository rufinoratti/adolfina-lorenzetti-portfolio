import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { projects } from "@/lib/data/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Selección de proyectos de interiorismo de Adolfina Lorenzetti: residenciales, comerciales, remodelaciones y espacios corporativos.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-32 lg:pt-40">
      <Container>
        <Reveal variant="fade-up">
          <p className="u-uppercase-mono text-accent">Proyectos</p>
          <h1 className="mt-6 max-w-4xl text-balance font-serif text-5xl font-light leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Interiores seleccionados
          </h1>
          <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted">
            Una selección de casas, locales y espacios de trabajo. Cada proyecto
            es un diálogo entre arquitectura, luz y quienes lo habitan.
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