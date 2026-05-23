"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import type { ProjectImage } from "../lib/projects";

export function ProjectGallery({
  images,
  projectName,
}: {
  images: ProjectImage[];
  projectName: string;
}) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  const goTo = useCallback(
    (i: number) => {
      setIndex(((i % count) + count) % count);
    },
    [count],
  );

  const step = useCallback(
    (delta: number) => {
      setIndex((current) => ((current + delta) % count + count) % count);
    },
    [count],
  );

  const prev = useCallback(() => step(-1), [step]);
  const next = useCallback(() => step(1), [step]);

  const active = images[index];

  return (
    <div
      className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/[0.06] bg-black/60 group/gallery"
      aria-label={`${projectName} preview gallery`}
    >
      {images.map((img, i) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-500 ${
            i === index ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-contain"
            priority={i === 0}
          />
        </div>
      ))}

      {active.caption && (
        <div className="absolute bottom-0 inset-x-0 px-4 pt-8 pb-3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
          <p className="font-mono text-[10px] tracking-wider uppercase text-white/80">
            {active.caption}
          </p>
        </div>
      )}

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 grid place-items-center h-8 w-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white/80 hover:text-white hover:bg-black/80 opacity-0 group-hover/gallery:opacity-100 focus-visible:opacity-100 transition-opacity"
          >
            <span aria-hidden>‹</span>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center h-8 w-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white/80 hover:text-white hover:bg-black/80 opacity-0 group-hover/gallery:opacity-100 focus-visible:opacity-100 transition-opacity"
          >
            <span aria-hidden>›</span>
          </button>

          <div
            className="absolute top-2 right-2 flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10"
            role="tablist"
            aria-label="Gallery pagination"
          >
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show image ${i + 1} of ${count}`}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index
                    ? "w-4 bg-[var(--accent)]"
                    : "w-1.5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
