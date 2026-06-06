"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";
import { galleryImages } from "@/data/gallery";

export function Gallery() {
  const [activeImage, setActiveImage] = useState<(typeof galleryImages)[number] | null>(null);

  return (
    <section 
          id="gallery"
          className="bg-[var(--warm-white)] px-5 py-24 sm:px-8 lg:px-12" aria-labelledby="gallery-heading">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--luxury-gold-deep)]">
            Our Glimpses
          </p>
          <h2 id="gallery-heading" className="luxury-heading text-5xl font-semibold leading-tight text-[var(--luxury-black)] sm:text-6xl">
            Moments from the salon.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {galleryImages.map((image) => (
            <button
              key={image.src}
              type="button"
              className="group relative aspect-[4/5] overflow-hidden border border-black/10 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--luxury-gold)]"
              onClick={() => setActiveImage(image)}
            >
              <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
              <span className="absolute inset-0 bg-black/0 transition group-hover:bg-black/18" aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>

      {activeImage ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/88 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Expanded salon glimpse">
          <button
            type="button"
            className="absolute right-5 top-5 inline-flex size-11 items-center justify-center border border-white/25 text-white transition hover:border-[var(--luxury-gold)] hover:text-[var(--luxury-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--luxury-gold)]"
            aria-label="Close image preview"
            onClick={() => setActiveImage(null)}
          >
            <X className="size-5" aria-hidden="true" />
          </button>
          <div className="relative h-[82vh] w-full max-w-5xl">
            <Image src={activeImage.src} alt={activeImage.alt} fill sizes="90vw" className="object-contain" />
          </div>
        </div>
      ) : null}
    </section>
  );
}
