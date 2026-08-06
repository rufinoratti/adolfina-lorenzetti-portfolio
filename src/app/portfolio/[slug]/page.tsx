import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/ui/dynamic-icon";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
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

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <Reveal variant="fade">
      <span className="u-uppercase-mono text-accent">{children}</span>
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
                  style={{ objectPosition: project.coverFocus }}
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

      {/* El proyecto */}
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
            </aside>
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