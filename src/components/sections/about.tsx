import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { CornerFrame, Coords, Measure, SectionIndex } from "@/components/ui/arch";
import { site } from "@/lib/site";

const pillars = [
  {
    title: "Filosofía",
    detail:
      "Cada espacio es una respuesta a un modo de habitar, no una composición decorativa. Primero la vida que va a pasar ahí.",
  },
  {
    title: "Materiales",
    detail:
      "Madera, piedra, lino y metal: texturas honestas que envejecen con dignidad y se tocan sin intermediarios.",
  },
  {
    title: "Luz natural",
    detail:
      "La luz es el primer material. Todo ambiente se ordena según cómo la recibe a lo largo del día.",
  },
  {
    title: "Funcionalidad",
    detail:
      "Belleza y uso no compiten. La distribución se piensa desde la vida real: la cocina, el guardado, la circulación.",
  },
  {
    title: "Estética",
    detail:
      "Lo atemporal por encima de lo novedoso. La calma como lenguaje, el detalle como firma.",
  },
  {
    title: "Personalización",
    detail:
      "Cada casa se diseña a la medida de quienes la habitan. No hay recetas, hay personas.",
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
            <p className="u-uppercase-mono text-accent">El estudio</p>
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
                    Soy Adolfina Lorenzetti, diseñadora de interiores con más de diez
                    años de trabajo en proyectos residenciales y comerciales en
                    Argentina. Mi estudio se dedica a transformar espacios en
                    hogares: lugares donde la luz, el material y la función se
                    ordenan al servicio de la vida diaria.
                  </p>
                  <p>
                    Trabajo cada proyecto desde la primera entrevista hasta la
                    última lámpara. La mesa de trabajo siempre incluye planos,
                    muestras reales de materiales y una conversación larga
                    sobre cómo se vive en la casa.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
                  <Coords value={site.coordinates} />
                  <Measure label="Escala 1:100" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
                    Proyectos · {site.location}
                  </span>
                </div>
              </Reveal>
            </div>

            <Reveal variant="fade" className="lg:col-span-5">
              <div className="relative lg:sticky lg:top-28">
                <div className="relative overflow-hidden rounded-[2px]">
                  <Image
                    src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=1000&q=80"
                    alt="Adolfina Lorenzetti trabajando en su estudio de interiorismo"
                    width={1000}
                    height={1250}
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="aspect-[4/5] w-full object-cover"
                  />
                  <CornerFrame />
                </div>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
                  Fig. 01 — El estudio, Buenos Aires
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-24 grid gap-x-10 gap-y-2 border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} variant="fade-up" delay={(index % 3) * 0.07}>
                <div className="border-b border-line py-8 lg:py-10">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                    0{index + 1}
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