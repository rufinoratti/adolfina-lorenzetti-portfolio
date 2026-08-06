"use client";

import { useRef } from "react";
import Image from "next/image";
import type { ProjectImage } from "@/types/project";
import { cn } from "@/lib/utils";

export function Gallery({ images }: { images: ProjectImage[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  function openImage(image: ProjectImage) {
    const dialog = dialogRef.current;
    const img = imageRef.current;
    if (!dialog || !img) return;
    img.src = image.src;
    img.alt = image.alt;
    dialog.showModal();
  }

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
        {images.map((image, index) => (
          <button
            key={image.seed}
            type="button"
            onClick={() => openImage(image)}
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

      <dialog
        ref={dialogRef}
        onClick={(e) => {
          const dialog = dialogRef.current;
          if (dialog && e.target === dialog) dialog.close();
        }}
        className="relative m-auto max-w-[94vw] border-0 bg-transparent p-0 outline-none backdrop:bg-ink/90 backdrop:backdrop-blur-sm"
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- el src cambia dinámicamente por clic */}
        <img
          ref={imageRef}
          alt="Imagen ampliada del proyecto"
          className="block max-h-[88vh] w-auto max-w-[94vw] rounded-[2px] object-contain shadow-2xl"
        />
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label="Cerrar imagen"
          className="absolute -top-14 right-0 flex h-11 w-11 items-center justify-center rounded-full border border-paper/30 bg-paper/10 text-paper transition-colors hover:bg-paper/20"
        >
          <span aria-hidden="true" className="text-xl leading-none">
            ✕
          </span>
        </button>
      </dialog>
    </>
  );
}
