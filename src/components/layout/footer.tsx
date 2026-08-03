import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Icon, type IconName } from "@/components/ui/dynamic-icon";
import { site } from "@/lib/site";

const socials: { label: string; href: string; icon: IconName }[] = [
  { label: "Instagram", href: site.social.instagram, icon: "InstagramLogo" },
  { label: "Behance", href: site.social.behance, icon: "BehanceLogo" },
  { label: "LinkedIn", href: site.social.linkedin, icon: "LinkedinLogo" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-subtle/60">
      <Container className="py-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <Link href="/" className="flex items-baseline gap-1.5" aria-label={`${site.name}, inicio`}>
                <span className="text-lg font-semibold tracking-tight text-ink">
                  {site.name}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </Link>
              <p className="mt-2 font-mono text-xs text-faint">{site.role}</p>
            </div>

            <nav aria-label="Pie de página" className="grid grid-cols-2 gap-x-12 gap-y-3">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex gap-2">
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
                >
                  <Icon name={icon} size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="my-2 h-px bg-line" />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">
              © {year} {site.name}. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <p className="font-mono text-xs text-faint">{site.location}</p>
              <a
                href="#contenido"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-ink transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
                aria-label="Volver arriba"
              >
                <Icon name="ArrowUp" size={14} weight="bold" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}