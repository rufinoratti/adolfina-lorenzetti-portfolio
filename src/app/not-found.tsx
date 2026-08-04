import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center py-28">
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <Reveal variant="fade-up">
            <p className="u-uppercase-mono text-accent">Error 404</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 text-balance font-serif text-6xl font-light leading-[1] tracking-tight text-ink sm:text-7xl">
              Este espacio no existe.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted">
              Parece que la página se movió o el enlace cambió. Volvé al inicio
              o recorré los proyectos.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/" withArrow>
                Volver al inicio
              </Button>
              <Button href="/portfolio" variant="secondary">
                Ver proyectos
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </div>
  );
}