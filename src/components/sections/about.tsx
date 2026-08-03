import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";

const experience = [
  {
    role: "Diseñadora senior",
    place: "Estudio Behía · Buenos Aires",
    years: "2021 - hoy",
  },
  {
    role: "Diseñadora de marca",
    place: "Agencia Ribera · Buenos Aires",
    years: "2017 - 2021",
  },
  {
    role: "Diseñadora gráfica",
    place: "Free-lance",
    years: "2015 - 2017",
  },
];

const tools = [
  "Illustrator",
  "Photoshop",
  "InDesign",
  "Figma",
  "After Effects",
  "Procreate",
];

export function About() {
  return (
    <section id="estudio" className="scroll-mt-24 border-t border-line py-24 lg:py-40">
      <Container>
        <SectionHeader meta="estudio" title="Sobre el oficio" className="max-w-3xl" />

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal
            variant="fade"
            className="lg:col-span-5"
          >
            <div className="sticky top-28 overflow-hidden rounded-2xl border border-line lg:aspect-[4/5]">
              <Image
                src="https://picsum.photos/seed/retrato-adolfina/1000/1250"
                alt="Retrato de Adolfina Lorenzetti en su escritorio de trabajo"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover saturate-[0.9] contrast-[1.02]"
              />
            </div>
          </Reveal>

          <div className="flex flex-col gap-10 lg:col-span-7 lg:pt-4">
            <Reveal>
              <blockquote className="text-balance font-serif text-2xl italic leading-snug text-ink sm:text-3xl">
                «Creo que el buen diseño no grita. Ordena, acompaña y deja
                espacio para que las ideas respiren.»
              </blockquote>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="space-y-5 text-pretty leading-relaxed text-muted sm:text-base">
                <p>
                  Soy Adolfina, diseñadora gráfica con más de diez años de
                  experiencia trabajando con marcas, editoriales y estudios de
                  la región. Mi foco está en la identidad visual y el diseño
                  editorial, los dos campos donde mejor se nota que detrás hay
                  una persona pensando.
                </p>
                <p>
                  Cada proyecto lo abordo como un intercambio: escuchar primero,
                  entender el contexto y luego construir un sistema visual que
                  le sea útil a quien lo usa. No me interesa lo que queda bien
                  en un feed, sino lo que funciona sobre la mesa, en la imprenta
                  y en la calle.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                  Trayectoria
                </h3>
                <ul className="mt-5">
                  {experience.map((item) => (
                    <li
                      key={item.role}
                      className="flex flex-col gap-1 border-t border-line py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                    >
                      <div>
                        <p className="font-medium text-ink">{item.role}</p>
                        <p className="text-sm text-muted">{item.place}</p>
                      </div>
                      <span className="whitespace-nowrap font-mono text-xs text-faint">
                        {item.years}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                  Herramientas
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-line bg-surface px-4 py-1.5 font-mono text-xs text-muted"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}