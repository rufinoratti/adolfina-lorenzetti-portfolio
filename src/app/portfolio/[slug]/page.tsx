import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/ui/dynamic-icon";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
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
          url: `https://picsum.photos/seed/${project.coverSeed}/1200/900`,
          width: 1200,
          height: 900,
          alt: project.title,
        },
      ],
    },
  };
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <Reveal variant="fade">
      <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
        {children}
      </h2>
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
    genre: project.category,
    creator: { "@type": "Person", name: site.name },
    dateCreated: `${project.year}-01-01`,
    about: project.description[0],
  };

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
                size={16}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Portfolio
            </Link>
          </Reveal>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Badge>{project.category}</Badge>
            <span className="font-mono text-xs text-muted">{project.year}</span>
          </div>

          <Reveal delay={0.05}>
            <h1 className="mt-5 max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-tighter text-ink sm:text-6xl lg:text-7xl">
              {project.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              {project.tagline}
            </p>
          </Reveal>

          <Reveal variant="fade-scale" delay={0.12} className="mt-12">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-subtle">
              <Image
                src={`https://picsum.photos/seed/${project.coverSeed}/1600/1000`}
                alt={`${project.title}: ${project.tagline}`}
                fill
                sizes="(min-width: 1024px) 90vw, 100vw"
                preload
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </header>

      {/* Overview */}
      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionTitle>El proyecto</SectionTitle>
              <Reveal delay={0.05}>
                <div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted sm:text-lg">
                  {project.description.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>
            </div>

            <aside className="lg:col-span-5">
              <Reveal delay={0.08}>
                <dl className="space-y-6">
                  {[
                    ["Cliente", project.client],
                    ["Categoría", project.category],
                    ["Año", project.year],
                    ["Servicios", project.services.join(" · ")],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-baseline justify-between gap-4 border-t border-line pt-4"
                    >
                      <dt className="font-mono text-xs uppercase tracking-[0.14em] text-faint">
                        {label}
                      </dt>
                      <dd className="text-right text-sm font-medium text-ink">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </aside>
          </div>
        </Container>
      </section>

      {/* Objectives */}
      <section className="border-t border-line py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionTitle>Objetivos</SectionTitle>
            </div>
            <ul className="flex flex-col gap-0 lg:col-span-8">
              {project.objectives.map((objective, index) => (
                <Reveal key={objective} delay={index * 0.05}>
                  <li className="flex gap-5 border-t border-line py-6">
                    <span className="mt-1 font-mono text-xs text-faint">
                      0{index + 1}
                    </span>
                    <p className="text-pretty text-lg leading-relaxed text-ink">
                      {objective}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="border-t border-line py-24 lg:py-32">
        <Container>
          <div className="max-w-3xl">
            <SectionTitle>Proceso creativo</SectionTitle>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                De la idea a la forma
              </h2>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {project.process.map((step, index) => (
              <Reveal key={step.name} variant="fade-up" delay={index * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-8">
                  <span className="font-serif text-4xl italic text-accent">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink">
                    {step.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {step.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="border-t border-line py-24 lg:py-32">
        <Container>
          <div className="mb-12 flex items-end justify-between gap-4">
            <SectionTitle>Galería</SectionTitle>
            <Reveal variant="fade" delay={0.1}>
              <span className="font-mono text-xs text-faint">
                {project.gallery.length} imágenes
              </span>
            </Reveal>
          </div>
          <Reveal variant="fade">
            <Gallery images={project.gallery} />
          </Reveal>
        </Container>
      </section>

      {/* Palette + Typography */}
      <section className="border-t border-line py-24 lg:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionTitle>Paleta de color</SectionTitle>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {project.palette.map((color, index) => (
                  <Reveal key={color.hex} variant="fade-up" delay={index * 0.06}>
                    <div className="flex flex-col gap-3">
                      <div
                        className="aspect-square w-full rounded-xl border border-line/60"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div>
                        <p className="text-sm font-medium text-ink">{color.name}</p>
                        <p className="font-mono text-xs uppercase text-faint">
                          {color.hex}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <SectionTitle>Tipografías</SectionTitle>
              <div className="mt-8 flex flex-col">
                {project.typography.map((type, index) => (
                  <Reveal key={type.label} delay={index * 0.06}>
                    <div className="flex items-baseline justify-between gap-4 border-t border-line py-6">
                      <span className="font-serif text-2xl italic text-ink sm:text-3xl">
                        Ag
                      </span>
                      <div className="text-right">
                        <p className="text-sm font-medium text-ink">{type.value}</p>
                        <p className="font-mono text-xs uppercase text-faint">
                          {type.label}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Results */}
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
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent"
                    />
                    <p className="text-pretty leading-relaxed text-ink">
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

      <section className="border-t border-line py-16">
        <Container className="flex justify-center">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-3 text-lg font-medium text-ink transition-colors hover:text-accent"
          >
            <Icon
              name="ArrowLeft"
              size={20}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Volver al portfolio
          </Link>
        </Container>
      </section>
    </article>
  );
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
      className={`group relative flex min-h-[13rem] items-end overflow-hidden rounded-2xl border border-line bg-subtle p-6 sm:p-8 ${
        next ? "md:justify-end md:text-right" : ""
      }`}
    >
      <Image
        src={`https://picsum.photos/seed/${project.coverSeed}/1200/800`}
        alt=""
        fill
        sizes="(min-width: 1024px) 40vw, 90vw"
        loading="lazy"
        className="object-cover opacity-25 saturate-0 transition-all duration-700 group-hover:opacity-40"
      />
      <div className="relative flex flex-col gap-2">
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
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
          <h3 className="text-2xl font-semibold tracking-tight text-ink">
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
        <span className="font-mono text-xs uppercase tracking-wide text-faint">
          {project.category} · {project.year}
        </span>
      </div>
    </Link>
  );
}