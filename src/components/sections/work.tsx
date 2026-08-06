import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/portfolio/project-card";
import { SectionIndex } from "@/components/ui/arch";
import { getProjects } from "@/lib/data/projects";

const featuredSlugs = [
  "proyecto-p",
  "proyecto-c",
  "linke-legal-group",
  "hall-torre-oceanica",
];

export function Work() {
  const featured = getProjects(featuredSlugs);

  return (
    <section id="proyectos" className="scroll-mt-24 overflow-hidden py-24 lg:py-40">
      <Container>
        <div className="relative">
          <SectionIndex className="pointer-events-none absolute -right-6 -top-20 hidden lg:block">
            02
          </SectionIndex>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <Reveal variant="fade">
                <p className="u-uppercase-mono text-accent">Proyectos</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 text-balance font-serif text-4xl font-light leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                  Espacios que invitan a quedarse
                </h2>
              </Reveal>
            </div>
            <Reveal variant="fade-up" delay={0.12} className="shrink-0">
              <Button href="/portfolio" variant="secondary" withArrow>
                Ver todo el portfolio
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>

      <div className="mx-auto mt-16 flex w-[80vw] max-w-[1300px] flex-col gap-14">
        {featured.map((project) => (
          <Reveal key={project.slug} variant="fade-up" delay={0.05}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}