import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Icon, type IconName } from "@/components/ui/dynamic-icon";
import { Coords } from "@/components/ui/arch";
import { site } from "@/lib/site";

const socials: { label: string; href: string; icon: IconName }[] = [
  { label: "Instagram", href: site.social.instagram, icon: "InstagramLogo" },
  { label: "Pinterest", href: site.social.pinterest, icon: "PinterestLogo" },
  { label: "LinkedIn", href: site.social.linkedin, icon: "LinkedinLogo" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <Container className="py-16 lg:py-20">
        <div className="flex flex-col gap-12">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Link
                href="/"
                className="inline-flex items-baseline gap-2"
                aria-label={`${site.name}, inicio`}
              >
                <span className="font-serif text-2xl font-medium tracking-tight text-ink">
                  {site.name}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </Link>
              <p className="mt-4 max-w-sm text-pretty font-serif text-xl font-light italic leading-relaxed text-muted">
                «La luz en la medida justa, el material con su propia historia.
                Eso es un hogar.»
              </p>
            </div>

            <nav
              aria-label="Pie de página"
              className="grid grid-cols-2 gap-6 lg:col-span-4"
            >
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

            <div className="flex gap-2 lg:col-span-2 lg:justify-end">
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent-deep"
                >
                  <Icon name={icon} size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="my-1 h-px bg-line" />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">
              © {year} {site.name}. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Coords value={site.coordinates} />
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                {site.role}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}