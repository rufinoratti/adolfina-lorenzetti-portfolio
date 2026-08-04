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
import { ArchTag, Coords } from "@/components/ui/arch";
import { site } from "@/lib/site";

const IMG = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=80";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.08]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, reduce ? 1 : 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100dvh] items-end overflow-hidden"
    >
      {/* Fotografía de ambiente a pantalla completa */}
      <motion.div
        style={{ scale: imageScale, y: imageY }}
        className="absolute inset-0"
      >
        <Image
          src={IMG}
          alt="Ambiente living contemporáneo con luz natural en madera y piedra"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/30 to-ink/70"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/45 to-transparent"
        />
      </motion.div>

      {/* Marco técnico decorativo */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-5 top-24 h-10 w-10 border-l border-t border-paper/30 lg:left-12 lg:top-28"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-5 top-24 h-10 w-10 border-r border-t border-paper/30 lg:right-12 lg:top-28"
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto flex w-full max-w-[1500px] flex-col gap-10 px-5 pb-14 pt-40 sm:px-8 lg:px-12 lg:pb-20"
      >
        <div className="flex flex-col gap-7 lg:max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-paper/80"
          >
            <ArchTag className="text-paper/80">Residential</ArchTag>
            <Coords value={site.coordinates} className="text-paper/50" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance font-serif text-5xl font-light leading-[1.02] tracking-tight text-paper sm:text-6xl lg:text-7xl"
          >
            Adolfina
            <span className="block italic text-paper/90">Lorenzetti</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl text-balance text-pretty text-lg leading-relaxed text-paper/85"
          >
            {site.tagline} Interiores que equilibran luz, materialidad y
            funcionalidad para cada forma de habitar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center"
          >
            <Button href="/portfolio" size="lg" withArrow variant="paper">
              Ver proyectos
            </Button>
            <Button href="/#contacto" size="lg" variant="ghostLight">
              Contacto
            </Button>
          </motion.div>
        </div>

        <div className="hidden items-center justify-between border-t border-paper/20 pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-paper/55 md:flex">
          <span>{site.location}</span>
          <span>Interior Designer</span>
          <span>{site.social.instagram.replace("https://instagram.com/", "@")}</span>
        </div>
      </motion.div>
    </section>
  );
}