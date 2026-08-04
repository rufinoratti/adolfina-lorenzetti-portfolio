import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/ui/dynamic-icon";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { ArchTag, CornerFrame } from "@/components/ui/arch";
import { Gallery } from "@/components/portfolio/gallery";
import {
  projects,
  getProject,
  getAdjacentProjects,
} from "@/lib/data/projects";
import { site } from "@/lib/site";
import type { Project } from "@/types/project";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      type: "article",
      title: `${project.title} | ${site.name}`,
      description: project.summary,
      publishedTime: `${project.year}-01-01`,
      authors: [site.name],
      images: [
        {
          url: project.cover,
          width: 1600,
          height: 1000,
          alt: project.title,
        },
      ],
    },
  };
}

function SectionTitle({
  children,
  right,
}: {
  children: React.ReactNode;
  right?: React.ReactNode;
}) {
  return (
    <Reveal variant="fade">
      <div className="flex items-center justify-between gap-4">
        <span className="u-uppercase-mono text-accent">{children}</span>
        {right}
      </div>
    </Reveal>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const { previous, next } = getAdjacentProjects(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    genre: project.type,
    creator: { "@type": "Person", name: site.name },
    dateCreated: `${project.year}-01-01`,
    spatialCoverage: project.location,
    about: project.description[0],
  };

  const facts = [
    ["Tipo", project.type],
    ["Ubicación", project.location],
    ["Superficie", project.area],
    ["Año", project.year],
    ["Rol", project.role],
  ];

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <header className="pt-28 lg:pt-36">
        <Container>
          <Reveal>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
            >
              <Icon
                name="ArrowLeft"
                size={15}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Proyectos
            </Link>
          </Reveal>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
            <ArchTag>{project.type}</ArchTag>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
              {project.location} · {project.year}
            </span>
          </div>

          <Reveal delay={0.05}>
            <h1 className="mt-4 max-w-5xl text-balance font-serif text-5xl font-light leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              {project.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted">
              {project.tagline}
            </p>
          </Reveal>

          <Reveal variant="fade-scale" delay={0.12} className="mt-12">
            <div className="relative">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] bg-subtle">
                <Image
                  src={project.cover}
                  alt={`${project.title}: ${project.tagline}`}
                  fill
                  sizes="(min-width: 1024px) 90vw, 100vw"
                  priority
                  className="object-cover"
                />
                <CornerFrame />
              </div>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
                Proyecto {project.type} · {project.area}
              </p>
            </div>
          </Reveal>
        </Container>
      </header>

      {/* Descripción */}
      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionTitle>El proyecto</SectionTitle>
              <Reveal delay={0.05}>
                <div className="mt-6 space-y-6 text-pretty leading-relaxed text-ink/85 sm:text-lg">
                  {project.description.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>
            </div>

            <aside className="lg:col-span-5">
              <Reveal delay={0.08}>
                <dl className="rounded-[2px] border border-line bg-surface p-8">
                  {facts.map(([label, value], i) => (
                    <div
                      key={label}
                      className={cnRow(i)}
                    >
                      <dt className="u-uppercase-mono text-faint">{label}</dt>
                      <dd className="text-right text-sm font-medium text-ink">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <Badge key={service}>{service}</Badge>
                  ))}
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </section>

      {/* Objetivos */}
      <section className="border-t border-line py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionTitle>Objetivos del cliente</SectionTitle>
            </div>
            <ul className="flex flex-col lg:col-span-8">
              {project.objectives.map((objective, index) => (
                <Reveal key={objective} delay={index * 0.05}>
                  <li className="flex gap-6 border-t border-line py-7">
                    <span className="mt-1 font-mono text-[10px] tracking-[0.2em] text-faint">
                      0{index + 1}
                    </span>
                    <p className="max-w-2xl text-pretty text-lg leading-relaxed text-ink">
                      {objective}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Concepto */}
      <section className="border-t border-line py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionTitle>Concepto de diseño</SectionTitle>
            </div>
            <div className="max-w-3xl lg:col-span-8">
              {project.concept.map((paragraph, index) => (
                <Reveal key={paragraph.slice(0, 24)} delay={index * 0.05}>
                  <p
                    className={
                      index === 0
                        ? "font-serif text-2xl font-light italic leading-snug text-ink sm:text-3xl"
                        : "mt-6 text-pretty leading-relaxed text-muted"
                    }
                  >
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Distribución */}
      <section className="border-t border-line py-24 lg:py-32">
        <Container>
          <div className="mb-14 max-w-2xl">
            <SectionTitle>Distribución del espacio</SectionTitle>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-serif text-3xl font-light tracking-tight text-ink sm:text-4xl">
                Un plano pensado desde la vida real
              </h2>
            </Reveal>
          </div>
          <div className="grid gap-x-10 gap-y-0 border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {project.layout.map((zone, index) => (
              <Reveal key={zone.name} variant="fade-up" delay={(index % 3) * 0.07}>
                <div className="border-b border-line py-8">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 font-serif text-xl font-medium tracking-tight text-ink">
                    {zone.name}
                  </h3>
                  <p className="mt-3 max-w-[36ch] text-sm leading-relaxed text-muted">
                    {zone.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Materiales + Iluminación */}
      <section className="border-t border-line py-24 lg:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionTitle>Materiales</SectionTitle>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.materials.map((material) => (
                  <Reveal key={material} variant="fade-up">
                    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink">
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {material}
                    </span>
                  </Reveal>
                ))}
              </div>
            </div>
            <div>
              <SectionTitle>Iluminación</SectionTitle>
              <ul className="mt-6 flex flex-col">
                {project.lighting.map((light, index) => (
                  <Reveal key={light} delay={index * 0.05}>
                    <li className="flex items-baseline gap-5 border-t border-line py-5 text-sm leading-relaxed text-ink">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-faint">
                        0{index + 1}
                      </span>
                      {light}
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Paleta + Mobiliario */}
      <section className="border-t border-line py-24 lg:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionTitle>Paleta de colores</SectionTitle>
              <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3">
                {project.palette.map((color, index) => (
                  <Reveal key={color.hex} variant="fade-up" delay={index * 0.05}>
                    <div className="flex flex-col gap-3">
                      <div
                        className="aspect-square w-full rounded-[2px] border border-line/60"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div>
                        <p className="text-sm font-medium text-ink">{color.name}</p>
                        <p className="font-mono text-[10px] uppercase text-faint">
                          {color.hex}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <SectionTitle>Mobiliario destacado</SectionTitle>
              <ul className="mt-6 flex flex-col">
                {project.furniture.map((piece, index) => (
                  <Reveal key={piece} delay={index * 0.05}>
                    <li className="flex items-center gap-5 border-t border-line py-5 text-pretty leading-relaxed text-ink">
                      <Icon
                        name="ArrowUpRight"
                        size={14}
                        weight="light"
                        aria-hidden="true"
                        className="text-accent"
                      />
                      {piece}
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Galería */}
      <section className="border-t border-line py-24 lg:py-32">
        <Container>
          <div className="mb-12 flex items-end justify-between gap-4">
            <SectionTitle>Galería</SectionTitle>
            <Reveal variant="fade" delay={0.1}>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                {project.gallery.length} fotografías
              </span>
            </Reveal>
          </div>
          <Reveal variant="fade">
            <Gallery images={project.gallery} />
          </Reveal>
        </Container>
      </section>

      {/* Antes / Después */}
      {project.beforeAfter && (
        <section className="border-t border-line py-24 lg:py-32">
          <Container>
            <div className="mb-12 flex items-end justify-between gap-4">
              <SectionTitle>Antes y después</SectionTitle>
              <Reveal variant="fade" delay={0.1}>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                  Remodelación
                </span>
              </Reveal>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {project.beforeAfter.map((pair, index) => (
                <Reveal key={pair.alt} variant="fade-up" delay={index * 0.1}>
                  <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[2px] border border-line bg-line">
                    <div className="relative aspect-[4/3] bg-subtle">
                      <Image
                        src={pair.before}
                        alt={`Antes: ${pair.alt}`}
                        fill
                        sizes="(min-width: 768px) 25vw, 45vw"
                        className="object-cover"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-paper backdrop-blur-sm">
                        Antes
                      </span>
                    </div>
                    <div className="relative aspect-[4/3] bg-subtle">
                      <Image
                        src={pair.after}
                        alt={`Después: ${pair.alt}`}
                        fill
                        sizes="(min-width: 768px) 25vw, 45vw"
                        className="object-cover"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-paper">
                        Después
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Planos / Renders */}
      <section className="border-t border-line py-24 lg:py-32">
        <Container>
          <div className="mb-12 flex items-end justify-between gap-4">
            <SectionTitle>Planos y renders</SectionTitle>
            <Reveal variant="fade" delay={0.1}>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                Documentación
              </span>
            </Reveal>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {project.plans.map((plan, index) => (
              <Reveal key={plan.label} variant="fade-up" delay={index * 0.08}>
                <figure className="group relative">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] border border-line bg-surface">
                    <Image
                      src={plan.src}
                      alt={plan.alt}
                      fill
                      sizes="(min-width: 768px) 45vw, 92vw"
                      className="object-cover p-3 transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    />
                    <CornerFrame />
                  </div>
                  <figcaption className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                    {plan.label}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Resultados */}
      <section className="border-t border-line py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionTitle>Resultados</SectionTitle>
            </div>
            <ul className="flex flex-col lg:col-span-8">
              {project.results.map((result, index) => (
                <Reveal key={result} delay={index * 0.05}>
                  <li className="flex items-baseline gap-5 border-t border-line py-6">
                    <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <p className="max-w-2xl text-pretty leading-relaxed text-ink">
                      {result}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Prev / Next */}
      <section className="border-t border-line">
        <Container className="grid gap-4 py-12 md:grid-cols-2 lg:py-16">
          <ProjectNavCard project={previous} direction="previous" />
          <ProjectNavCard project={next} direction="next" />
        </Container>
      </section>
    </article>
  );
}

function cnRow(i: number) {
  return `flex items-baseline justify-between gap-4 py-4 ${i === 0 ? "" : "border-t border-line"}`;
}

function ProjectNavCard({
  project,
  direction,
}: {
  project: Project;
  direction: "previous" | "next";
}) {
  const next = direction === "next";
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className={`group relative flex min-h-[14rem] items-end overflow-hidden rounded-[2px] border border-line bg-subtle p-6 sm:p-8 ${
        next ? "md:justify-end md:text-right" : ""
      }`}
    >
      <Image
        src={project.cover}
        alt=""
        fill
        sizes="(min-width: 1024px) 40vw, 90vw"
        loading="lazy"
        className="object-cover opacity-15 transition-all duration-700 group-hover:opacity-30"
      />
      <div className="relative flex flex-col gap-2">
        <span className="u-uppercase-mono text-accent">
          {next ? "Proyecto siguiente" : "Proyecto anterior"}
        </span>
        <div className="flex items-center gap-3">
          {!next && (
            <Icon
              name="ArrowLeft"
              size={20}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
          )}
          <h3 className="font-serif text-2xl font-medium tracking-tight text-ink sm:text-3xl">
            {project.title}
          </h3>
          {next && (
            <Icon
              name="ArrowUpRight"
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          )}
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
          {project.type} · {project.location} · {project.year}
        </span>
      </div>
    </Link>
  );
}