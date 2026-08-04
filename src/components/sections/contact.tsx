import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Icon, type IconName } from "@/components/ui/dynamic-icon";
import { Coords, CornerFrame, SectionIndex } from "@/components/ui/arch";
import { ContactForm } from "@/components/sections/contact-form";
import { site } from "@/lib/site";

const socials: { label: string; href: string; icon: IconName }[] = [
  { label: "Instagram", href: site.social.instagram, icon: "InstagramLogo" },
  { label: "Pinterest", href: site.social.pinterest, icon: "PinterestLogo" },
  { label: "LinkedIn", href: site.social.linkedin, icon: "LinkedinLogo" },
];

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-24 overflow-hidden border-t border-line py-24 lg:py-40">
      <Container>
        <div className="relative">
          <SectionIndex className="pointer-events-none absolute -right-6 -top-20 hidden lg:block">
            04
          </SectionIndex>

          <Reveal variant="fade">
            <p className="u-uppercase-mono text-accent">Contacto</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 max-w-3xl text-balance font-serif text-4xl font-light leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Empecemos con tu espacio
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col gap-10 lg:col-span-5">
              <Reveal variant="fade">
                <div className="relative">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[2px]">
                    <Image
                      src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
                      alt="Ambiente del estudio de interiorismo de Adolfina Lorenzetti"
                      fill
                      sizes="(min-width: 1024px) 40vw, 92vw"
                      className="object-cover"
                    />
                    <CornerFrame />
                  </div>
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
                    Fig. 02 — Vista del estudio, Buenos Aires
                  </p>
                </div>
              </Reveal>

              {/* Mapa estilizado */}
              <Reveal delay={0.08}>
                <div className="relative overflow-hidden rounded-[2px] border border-line bg-surface">
                  <div className="u-tech-grid absolute inset-0" />
                  <div className="relative flex flex-col gap-4 p-7">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-serif text-xl font-medium text-ink">
                          El estudio
                        </p>
                        <p className="mt-1 text-sm text-muted">{site.address}</p>
                      </div>
                      <span
                        aria-hidden="true"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-accent"
                      >
                        <Icon name="MapPin" size={17} weight="light" />
                      </span>
                    </div>
                    <Coords value={site.coordinates} />
                    <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
                      <a
                        href={`mailto:${site.email}`}
                        className="group inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent-deep"
                      >
                        <Icon name="Envelope" size={15} weight="light" className="text-accent" />
                        {site.email}
                      </a>
                      <a
                        href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`}
                        className="group inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent-deep"
                      >
                        <Icon name="Phone" size={15} weight="light" className="text-accent" />
                        {site.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="flex items-center gap-3">
                  <span className="u-uppercase-mono text-faint">Seguime</span>
                  <span aria-hidden="true" className="h-px flex-1 bg-line" />
                  {socials.map(({ label, href, icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent-deep"
                    >
                      <Icon name={icon} size={18} />
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal variant="fade-up" className="lg:col-span-7">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}