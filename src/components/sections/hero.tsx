"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 0.96]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -30]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100dvh] items-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="u-soft-grain pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-accent/[0.05] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-52 -left-40 h-[32rem] w-[32rem] rounded-full bg-ink/[0.03] blur-3xl"
      />

      <motion.div
        style={{ y: contentY }}
        className="relative mx-auto grid w-full max-w-[1400px] gap-16 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-12 lg:items-center lg:pb-0 lg:pt-24"
      >
        <div className="lg:col-span-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-xs uppercase tracking-[0.22em] text-accent"
          >
            Diseñadora gráfica
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-5xl text-balance text-6xl font-semibold leading-[0.95] tracking-tighter text-ink sm:text-7xl lg:text-8xl"
          >
            Adolfina
            <br />
            Lorenzetti
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted"
          >
            Diseño identidades, publicaciones y packaging para marcas que
            quieren ser{" "}
            <em className="font-serif italic text-ink">recordadas</em>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button href="/portfolio" size="lg" withArrow>
              Ver proyectos
            </Button>
            <Button href="/#contacto" size="lg" variant="secondary">
              Hablemos
            </Button>
          </motion.div>
        </div>

        <motion.div
          style={{ y: imageY, scale: imageScale }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:col-span-4 lg:block"
        >
          <div className="relative overflow-hidden rounded-2xl border border-line">
            <div className="aspect-[3/4]">
              <Image
                src="https://picsum.photos/seed/portrait-estudio/900/1200"
                alt="Rincón de trabajo del estudio: tipografías, papeles y herramientas"
                fill
                sizes="(min-width: 1024px) 30vw, 0vw"
                loading="eager"
                className="object-cover saturate-[0.88] contrast-[1.02]"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}