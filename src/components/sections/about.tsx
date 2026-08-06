import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { CornerFrame, SectionIndex } from "@/components/ui/arch";
import { site } from "@/lib/site";

const pillars = [
  {
    number: "01",
    title: "Filosofía",
    detail:
      "Cada espacio es una respuesta a un modo de habitar, no una composición decorativa. Primero la vida que va a pasar ahí.",
  },
  {
    number: "02",
    title: "Funcionalidad",
    detail:
      "Belleza y uso no compiten. La distribución se piensa desde la vida real.",
  },
  {
    number: "03",
    title: "Personalización",
    detail: (
      <>
        Cada casa se diseña a la medida de quienes la habitan.
        <br />No hay recetas, hay personas.
      </>
    ),
  },
];

export function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-24 overflow-hidden py-24 lg:py-40">
      <Container>
        <div className="relative">
          <SectionIndex className="pointer-events-none absolute -right-6 -top-16 hidden lg:block">
            01
          </SectionIndex>

          <Reveal variant="fade">
            <p className="u-uppercase-mono text-accent">Sobre mí</p>
          </Reveal>

          <div className="mt-14 grid gap-16 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col gap-10 lg:col-span-7">
              <Reveal>
                <blockquote className="max-w-3xl text-balance font-serif text-3xl font-light italic leading-[1.2] text-ink sm:text-4xl lg:text-[2.75rem]">
                  «El buen interiorismo no se ve. Se habita.»
                </blockquote>
              </Reveal>

              <Reveal delay={0.05}>
                <div className="max-w-xl space-y-5 text-pretty leading-relaxed text-muted">
                  <p>
                    Soy diseñadora de interiores especializada en transformar ideas
                    en proyectos claros, funcionales y visualmente atractivos.
                    Acompaño cada etapa del proceso, desde el diseño y el desarrollo
                    de mobiliario a medida hasta la visualización 3D y la
                    documentación para presentar cada propuesta de forma
                    profesional.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
                    Proyectos · {site.location}
                  </span>
                </div>
              </Reveal>
            </div>

            <Reveal variant="fade" className="lg:col-span-5">
              <div className="relative lg:sticky lg:top-28">
                <div className="relative max-w-sm overflow-hidden rounded-[2px]">
                  <Image
                    src="/foto-adolfina.jpg"
                    alt="Adolfina Lorenzetti, diseñadora de interiores"
                    width={1200}
                    height={1600}
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="aspect-[4/5] w-full object-cover"
                  />
                  <CornerFrame />
                </div>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
                  Adolfina Lorenzetti
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-24 grid gap-x-10 gap-y-2 border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} variant="fade-up" delay={(index % 3) * 0.07}>
                <div className="border-b border-line py-8 lg:py-10">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                    {pillar.number}
                  </span>
                  <h3 className="mt-3 font-serif text-2xl font-medium tracking-tight text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-muted">
                    {pillar.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}