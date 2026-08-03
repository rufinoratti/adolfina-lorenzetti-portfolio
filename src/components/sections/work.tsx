import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/portfolio/project-card";
import { getProjects } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

const featuredSlugs = ["marea-estudio", "revista-horizonte", "terra-skincare", "vela-web"];

export function Work() {
  const featured = getProjects(featuredSlugs);

  return (
    <section id="trabajo" className="scroll-mt-24 py-24 lg:py-40">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            meta="trabajo seleccionado"
            title="Proyectos que cuentan historias"
            description="Una selección de encargos recientes donde la identidad, el texto y el objeto trabajan juntos."
            className="max-w-2xl"
          />
          <Reveal variant="fade-up" delay={0.15} className="shrink-0">
            <Button href="/portfolio" variant="secondary" withArrow>
              Ver todo el portfolio
            </Button>
          </Reveal>
        </div>

        <div className="mt-16 grid items-start gap-x-8 gap-y-16 md:grid-cols-2 lg:gap-y-24">
          {featured.map((project, index) => (
            <Reveal
              key={project.slug}
              variant="fade-up"
              delay={(index % 2) * 0.12}
              className={cn(index % 2 === 0 && "md:mt-20")}
            >
              <ProjectCard
                project={project}
                ratio={index % 2 === 0 ? "portrait" : "landscape"}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}