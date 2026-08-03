import { Icon, type IconName } from "@/components/ui/dynamic-icon";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/sections/contact-form";
import { site } from "@/lib/site";

const socials: { label: string; href: string; icon: IconName }[] = [
  { label: "Instagram", href: site.social.instagram, icon: "InstagramLogo" },
  { label: "Behance", href: site.social.behance, icon: "BehanceLogo" },
  { label: "LinkedIn", href: site.social.linkedin, icon: "LinkedinLogo" },
];

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-24 border-t border-line py-24 lg:py-40">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-8 lg:col-span-5">
            <SectionHeader
              meta="contacto"
              title="Hablemos de tu próximo proyecto"
              description="Contame qué estás diseñando o construyendo y cómo puedo ayudarte. Respondo personalmente a cada consulta."
            />

            <Reveal delay={0.1}>
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex items-center gap-2 text-lg font-medium text-ink transition-colors hover:text-accent"
              >
                {site.email}
                <Icon
                  name="ArrowUpRight"
                  weight="bold"
                  className="h-5 w-5 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-col gap-5">
                <div className="flex gap-2">
                  {socials.map(({ label, href, icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
                    >
                      <Icon name={icon} size={18} />
                    </a>
                  ))}
                </div>
                <div className="mt-2">
                  <Button href={site.cv} variant="secondary" download withArrow>
                    Descargar CV
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal variant="fade-up" className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}