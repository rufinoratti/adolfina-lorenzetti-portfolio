import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { Icon, type IconName } from "@/components/ui/dynamic-icon";

const services: {
  title: string;
  description: string;
  icon: IconName;
}[] = [
  {
    title: "Branding",
    description:
      "Naming, identidad y sistemas visuales completos para marcas que buscan tener voz propia.",
    icon: "PenNib",
  },
  {
    title: "Diseño editorial",
    description:
      "Publicaciones, libros y revistas donde el texto, la imagen y el papel dialogan.",
    icon: "Books",
  },
  {
    title: "Redes sociales",
    description:
      "Sistemas de contenido y piezas que sostienen la identidad fuera de la página principal.",
    icon: "ShareNetwork",
  },
  {
    title: "Packaging",
    description:
      "Envases y etiquetas que cuentan la historia del producto antes de abrirlo.",
    icon: "Package",
  },
  {
    title: "Diseño web",
    description:
      "Dirección de arte y diseño de interfaces alineadas con la identidad de la marca.",
    icon: "Browser",
  },
  {
    title: "Ilustración",
    description:
      "Ilustración a tinta y digital para marcas, editoriales y piezas de autor.",
    icon: "PencilSimpleLine",
  },
];

export function Services() {
  return (
    <section id="servicios" className="scroll-mt-24 border-t border-line py-24 lg:py-40">
      <Container>
        <SectionHeader
          meta="servicios"
          title="Qué puedo hacer por tu marca"
          description="Seis disciplinas que combino según la necesidad de cada proyecto, con un mismo criterio: precisión y cuidado."
          className="max-w-2xl"
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, icon }, index) => (
            <Reveal key={title} variant="fade-up" delay={(index % 3) * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_50px_-30px_rgba(28,27,24,0.25)]">
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-subtle text-ink transition-colors duration-300 group-hover:bg-accent-soft group-hover:text-accent-deep">
                    <Icon name={icon} size={20} weight="duotone" />
                  </span>
                  <Icon
                    name="ArrowUpRight"
                    size={18}
                    weight="bold"
                    className="text-faint opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </div>
                <h3 className="mt-7 text-xl font-semibold tracking-tight text-ink">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}