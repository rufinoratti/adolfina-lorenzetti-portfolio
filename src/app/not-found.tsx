import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center py-28">
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <Reveal variant="fade-up">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
              Error 404
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 text-balance text-6xl font-semibold leading-[0.95] tracking-tighter text-ink sm:text-7xl">
              Esta página no existe.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted">
              Parece que el enlace cambió o la página se movió. Volvé al inicio
              o recorré el portfolio.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/" withArrow>
                Volver al inicio
              </Button>
              <Button href="/portfolio" variant="secondary">
                Ver portfolio
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </div>
  );
}