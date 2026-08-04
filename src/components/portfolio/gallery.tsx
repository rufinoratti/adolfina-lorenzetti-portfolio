"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X, CaretLeft, CaretRight } from "@phosphor-icons/react";
import type { ProjectImage } from "@/types/project";
import { cn } from "@/lib/utils";

export function GalleryModal({
  images,
  index,
  onClose,
}: {
  images: ProjectImage[];
  index: number | null;
  onClose: () => void;
}) {
  const reduce = useReducedMotion();
  const [current, setCurrent] = useState(index ?? 0);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  useEffect(() => {
    if (index === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight")
        setCurrent((c) => (c + 1) % images.length);
      if (event.key === "ArrowLeft")
        setCurrent((c) => (c - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, images.length, onClose]);

  if (index === null) return <AnimatePresence />;

  const image = images[current];
  const open = index !== null;

  return (
    <AnimatePresence>
      {open && image && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/92 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Imagen ${current + 1} de ${images.length}`}
        >
          <button
            type="button"
            autoFocus
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 bg-paper/5 text-paper transition-colors hover:bg-paper/15"
          >
            <X size={20} weight="light" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Imagen anterior"
            className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-paper/20 bg-paper/5 text-paper transition-colors hover:bg-paper/15"
          >
            <CaretLeft size={20} weight="light" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Imagen siguiente"
            className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-paper/20 bg-paper/5 text-paper transition-colors hover:bg-paper/15"
          >
            <CaretRight size={20} weight="light" />
          </button>

          <motion.figure
            key={current}
            initial={reduce ? false : { opacity: 0, scale: 0.965 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mx-4 flex max-h-[86vh] max-w-5xl flex-col px-14 sm:px-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full flex-1 overflow-hidden rounded-[2px] bg-paper/5">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 80vw, 100vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="text-sm text-paper/75">{image.alt}</p>
              <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.18em] text-paper/50">
                {current + 1} / {images.length}
              </span>
            </div>
            <div className="mt-4 flex justify-center gap-1.5 pb-2">
              {images.map((img, i) => (
                <button
                  key={img.seed}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrent(i);
                  }}
                  aria-label={`Ir a la imagen ${i + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === current ? "w-6 bg-accent" : "w-1.5 bg-paper/30 hover:bg-paper/60",
                  )}
                />
              ))}
            </div>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Gallery({ images }: { images: ProjectImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
        {images.map((image, index) => (
          <button
            key={image.seed}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Ampliar imagen: ${image.alt}`}
            className={cn(
              "group relative mb-4 block w-full overflow-hidden rounded-[2px] border border-line bg-subtle focus-visible:outline-accent",
              index % 3 === 0 ? "aspect-[4/3]" : index % 3 === 1 ? "aspect-square" : "aspect-[3/4]",
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 32vw, 92vw"
              loading="lazy"
              className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            />
            <span className="absolute bottom-3 left-3 rounded-full border border-paper/30 bg-paper/85 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
              Ampliar
            </span>
          </button>
        ))}
      </div>
      <GalleryModal
        key={activeIndex ?? "cerrado"}
        images={images}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
      />
    </>
  );
}