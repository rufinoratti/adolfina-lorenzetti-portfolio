"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X, CaretLeft, CaretRight } from "@phosphor-icons/react";
import type { ProjectImage } from "@/types/project";

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
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (index === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") setCurrent((c) => (c + 1) % images.length);
      if (event.key === "ArrowLeft")
        setCurrent((c) => (c - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, images.length, onClose]);

  useEffect(() => {
    if (index === null) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [index]);

  const open = index !== null;
  const image = images[current];

  return (
    <AnimatePresence>
      {open && image && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/92 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Imagen ${current + 1} de ${images.length}`}
        >
          <button
            ref={closeRef}
            type="button"
            autoFocus
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-paper transition-colors hover:bg-white/15"
          >
            <X size={20} weight="bold" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setCurrent((c) => (c - 1 + images.length) % images.length);
            }}
            aria-label="Imagen anterior"
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-paper transition-colors hover:bg-white/15 sm:left-6"
          >
            <CaretLeft size={20} weight="bold" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setCurrent((c) => (c + 1) % images.length);
            }}
            aria-label="Imagen siguiente"
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-paper transition-colors hover:bg-white/15 sm:right-6"
          >
            <CaretRight size={20} weight="bold" />
          </button>

          <motion.figure
            key={current}
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mx-4 max-w-5xl px-12 sm:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 70vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-paper/70">{image.alt}</p>
              <span className="whitespace-nowrap font-mono text-xs text-paper/50">
                {current + 1} / {images.length}
              </span>
            </div>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Gallery({ images }: { images: ProjectImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const close = useCallback(() => setActiveIndex(null), []);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {images.map((image, index) => (
          <button
            key={image.seed}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Ampliar imagen: ${image.alt}`}
            className={`group relative overflow-hidden rounded-xl border border-line bg-subtle focus-visible:outline-accent ${
              index === 0 || index === 3 ? "sm:col-span-2 sm:aspect-[16/9]" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={image.src}
              alt=""
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              loading="lazy"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
            />
            <span className="absolute bottom-3 left-3 rounded-full bg-paper/85 px-3 py-1 font-mono text-[11px] text-ink opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
              Ampliar
            </span>
          </button>
        ))}
      </div>
      <GalleryModal
        key={activeIndex ?? "cerrado"}
        images={images}
        index={activeIndex}
        onClose={close}
      />
    </>
  );
}