import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Icon, type IconName } from "@/components/ui/dynamic-icon";
import { SectionIndex } from "@/components/ui/arch";

const services: {
  title: string;
  description: string;
  icon: IconName;
}[] = [
  {
    title: "Diseño residencial",
    description:
      "Casas y departamentos a medida, desde la distribución hasta la última lámpara.",
    icon: "House",
  },
  {
    title: "Diseño comercial",
    description:
      "Locales y gastronomía donde la atmósfera es parte del negocio.",
    icon: "Storefront",
  },
  {
    title: "Remodelaciones",
    description:
      "Reordenamos lo existente: más luz, más metros útiles y un carácter nuevo.",
    icon: "Hammer",
  },
  {
    title: "Espacios corporativos",
    description:
      "Oficinas y halls que comunican la marca y cuidan a quienes los usan.",
    icon: "Building",
  },
  {
    title: "Diseño de cocinas",
    description:
      "Cocinas funcionales y cálidas, diseñadas alrededor de la manera de cocinar.",
    icon: "Knife",
  },
  {
    title: "Diseño de baños",
    description:
      "Baños que se sienten como un lugar de descanso, no como un trámite.",
    icon: "Bathtub",
  },
  {
    title: "Asesoramiento decorativo",
    description:
      "Acompañamiento puntual: color, texturas, distribución y obras de arte.",
    icon: "Lightbulb",
  },
  {
    title: "Selección de mobiliario",
    description:
      "Piezas nuevas y vintage seleccionadas para componer la casa de cada uno.",
    icon: "Chair",
  },
  {
    title: "Renderización 3D",
    description:
      "Visualización fotorrealista para decidir con anticipación y sin sorpresas.",
    icon: "Cube",
  },
];

export function Services() {
  return (
    <section id="servicios" className="scroll-mt-24 overflow-hidden py-24 lg:py-40">
      <Container>
        <div className="relative">
          <SectionIndex className="pointer-events-none absolute -left-6 -top-20 hidden opacity-60 lg:block">
            03
          </SectionIndex>

          <Reveal variant="fade">
            <p className="u-uppercase-mono text-accent">Servicios</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 max-w-3xl text-balance font-serif text-4xl font-light leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Nueve maneras de cuidar tu espacio
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-x-16 gap-y-0 sm:grid-cols-2 lg:gap-x-24">
            {services.map(({ title, description, icon }, index) => (
              <Reveal key={title} variant="fade-up" delay={(index % 2) * 0.06}>
                <div className="group flex gap-5 border-t border-line py-8 transition-colors duration-300 hover:bg-subtle/40 lg:py-9">
                  <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-colors duration-300 group-hover:border-accent/40 group-hover:text-accent-deep">
                    <Icon name={icon} size={19} weight="light" />
                  </span>
                  <div>
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-serif text-xl font-medium tracking-tight text-ink">
                        {title}
                      </h3>
                      <span className="whitespace-nowrap font-mono text-[10px] tracking-[0.2em] text-faint">
                        0{index + 1}
                      </span>
                    </div>
                    <p className="mt-2 max-w-[42ch] text-sm leading-relaxed text-muted">
                      {description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}